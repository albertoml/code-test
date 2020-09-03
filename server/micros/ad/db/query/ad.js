import {clientDB} from "../../lib/mongo";
import {ObjectId} from "mongodb";

const collectionName = 'ads';

const findById = (_id) => {
  return clientDB.collection(collectionName).findOne({_id: new ObjectId(_id)})
}

const findAllPaginated = (skip, limit) => {
  return clientDB.collection(collectionName).aggregate([
    {
      $lookup: {
        from: "images",
        localField: "imageIds",
        foreignField: "id",
        as: "images"
      }
    }
  ]).skip(skip).limit(limit).toArray();
}

const findPromotedPaginated = (promotionScore, skip, limit) => {
  return clientDB.collection(collectionName).aggregate([
    { $match: { score: { $gte: promotionScore } } },
    {
      $lookup: {
        from: "images",
        localField: "imageIds",
        foreignField: "id",
        as: "images"
      }
    },
    { $sort : { score : -1 } }
  ]).skip(skip).limit(limit).toArray();
}

const update = (_id, item) => {
  return clientDB.collection(collectionName).updateOne({_id: new ObjectId(_id)}, { $set: { ...item } })
}

export {findById, findAllPaginated, findPromotedPaginated, update};
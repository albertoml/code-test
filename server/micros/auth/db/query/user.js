import {clientDB} from "../../lib/mongo";

const collectionName = 'user';

const findByNameAndPassword = async (userName, password) => {
  return clientDB.collection(collectionName).findOne({userName, password});
}

export {findByNameAndPassword};
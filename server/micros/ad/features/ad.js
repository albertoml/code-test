import {findAllPaginated, findById, findPromotedPaginated, update} from "../db/query/ad";

const getAds = async (skip, limit) => {
  return findAllPaginated(skip, limit);
}

const getPromotedAds = (skip, limit) => {
  return findPromotedPaginated(40, skip, limit);
}

const updateAd = async (_id, description) => {
  const item = await findById(_id);
  item.description = description;
  const newScore = getScore(item);

  if (newScore !== item.score) {
    item.score = newScore
    if (item.scoreHistory && item.scoreHistory.length) {
      item.scoreHistory.push({score: item.score, date: new Date().getTime()})
    } else {
      item.scoreHistory = [{score: item.score, date: new Date().getTime()}]
    }
  }

  return update(_id, item);
}

const getScore = (ad) => {
  return getFullAdScore(ad) + getImagesScore(ad.images) + getDescriptionScore(ad);
}

const getFullAdScore = (ad) => {
  let fullAd = false;

  if (ad.images && ad.images.length > 0) {
    switch (ad.type) {
      case 'VEHICULO':
        fullAd = ad.description && ad.km && ad.color && ad.fabricant;
        break;
      case 'FRIGORIFICO':
        fullAd = ad.height;
        break;
      case 'CHALET':
      case 'PISO':
        fullAd = ad.description && ad.size;
        break;
    }
  }
  return fullAd ? 40 : 0;
}

const getImagesScore = (images) => {
  let imageScore = 0;

  if (images && images.length > 0) {
    images.forEach(i => {
      imageScore = imageScore + i.quality === "HD" ? 20 : 10;
    })
  } else {
    imageScore = -10;
  }
  return imageScore;
}

const getDescriptionScore = (ad) => {
  let descriptionScore = 0;

  if (ad.description) {
    descriptionScore = 5 + getDescriptionLengthScore(ad) + getDescriptionWordScore(ad.description);
  }

  return descriptionScore;
}

const getDescriptionLengthScore = (ad) => {
  let descriptionScore = 0;

  switch (ad.type) {
    case 'PISO':
      if (ad.description.length >= 50) {
        descriptionScore = descriptionScore + 30;
      } else if (ad.description.length >= 20) {
        descriptionScore = descriptionScore + 10;
      }
      break;
    case 'CHALET':
      if (ad.description.length >= 50) {
        descriptionScore = descriptionScore + 20;
      }
      break;
  }
  return descriptionScore;
}

const getDescriptionWordScore = (description) => {
  // Avoid punctuation marks
  description = description.replace(/[,.:;\-_\?¿!¡\(\)]/g, '')

  const wordsMatched = description.split(' ')
    .filter(w => ['Luminoso', 'Nuevo', 'Cuidado', 'Fabuloso', 'Único' ,'Excepcional', 'Ocasión'].includes(w)).length;
  return wordsMatched * 5;
}

export {getPromotedAds, getAds, getScore, updateAd}
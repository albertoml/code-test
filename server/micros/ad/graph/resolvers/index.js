import {getAds, getPromotedAds, updateAd} from "../../features/ad";
import {validateAuthToken} from "../../lib/auth";

const resolvers = {
  Query: {
    promotedAds: (_, {skip, limit}) => getPromotedAds(skip, limit),
    ads: async (_, {skip, limit}, {access_token}) => {
      await validateAuthToken(access_token);
      return getAds(skip, limit)
    }
  },
  Mutation: {
    updateAd: async (_, {_id, description}, {access_token}) => {
      await validateAuthToken(access_token)
      return updateAd(_id, description)
    },
  }
};

export { resolvers }
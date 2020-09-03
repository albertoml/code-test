import React from 'react';
import {Box, Image, InfiniteScroll} from "grommet";
import GetAds from "../common/GetAds";
import {gql} from "@apollo/client";

const GET_ADS = gql`
  query GetPromotedAds($skip: Int!, $limit: Int!) {
    promotedAds(skip: $skip, limit: $limit) {
      description
      type
      score
      images {
        url
      }
    }
  }
`;

const Ads = () => {
  return (
    <GetAds RenderComponent={AdsList} query={GET_ADS} queryName={'promotedAds'} />
  );
}

const AdsList = ({ads, loadMore}) => (
  <InfiniteScroll
    onMore={loadMore}
    items={ads}>
    {(item, index) => (
      <Box
        key={index}
        flex={false}
        pad="medium"
        background={`dark-${(item % 3) + 1}`}
      >
        <p>{item.type} - score ({item.score})</p>
        <p>{item.description}</p>
        <Box direction="row">
          {
            item.images.map((i, ind) => {
              return (
                <Image
                  key={ind}
                  fit="cover"
                  src={i.url}
                />
              )
            })
          }
        </Box>
      </Box>
    )}
  </InfiniteScroll>
)


export {Ads, AdsList};

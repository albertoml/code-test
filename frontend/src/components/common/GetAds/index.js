import React from 'react';
import {useQuery} from "@apollo/client";
import ErrorMessage from "../Error";
import Loading from "../Loading";
import {useState} from "react";

const GetAds = ({RenderComponent, query, queryName, errorCallback}) => {
  const loadItemsPage = 50;
  const [skip, setSkip] = useState(0)
  const [ads, setAds] = useState([])
  const {loading, error, data, fetchMore} = useQuery(query,
    {
      variables: {skip, limit: loadItemsPage},
      onCompleted: (r) => {
        setAds([...ads, ...r[queryName]])
      }
    });

  if (error) {
    return (
      errorCallback ? errorCallback(error):
      <div>
        <ErrorMessage error={error}/>
      </div>
    );
  }
  if (loading || !data) {
    return <Loading/>;
  }

  const loadMore = () => {
    setTimeout(() => {
      fetchMore({variables: {skip: skip + loadItemsPage, limit: loadItemsPage}}).then(() => {
        setSkip(skip + loadItemsPage)
      });
    }, 1000);
  }

  return (
    ads.length && <RenderComponent ads={ads} loadMore={loadMore} />
  )
}

export default GetAds;


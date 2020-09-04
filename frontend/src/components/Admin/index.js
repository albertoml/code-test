import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import * as routes from "../../constants/routes";
import {
  Box,
  Button, DataChart,
  InfiniteScroll,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
  TextInput
} from "grommet";
import {Edit, History, Save} from "grommet-icons";
import GetAds from "../common/GetAds";
import {gql, useMutation} from "@apollo/client";
import ErrorMessage from "../common/Error";

const GET_ADS = gql`
  query GetAllAds($skip: Int!, $limit: Int!) {
    ads(skip: $skip, limit: $limit) {
      _id
      description
      type
      score
      images {
        id
      }
      scoreHistory {
        score
        date
      }
    }
  }
`;

const UPDATE_AD = gql`
  mutation UpdateAd($_id: String!, $description: String!) {
    updateAd(_id: $_id, description: $description) {
      _id
    }
  }
`;

const Admin = ({session, history, setSession}) => {
  return (
    !!session ?
      <GetAds RenderComponent={AdsTable} query={GET_ADS} queryName={'ads'} errorCallback={(error) => {
        if (error.message === 'invalid signature') {
          localStorage.clear();
          setSession(null);
          history.push(routes.LANDING);
          return null;
        } else {
          return (
            <div>
              <ErrorMessage error={error}/>
            </div>
          )
        }
      }}/>
      :
      <Redirect to={routes.LANDING}/>
  )
};

const AdsTable = ({ads, loadMore}) => {

  const [editingDescriptionId, setEditingDescriptionId] = useState(null);
  const [historyInfo, setHistoryInfo] = useState(null);
  const [displayModal, setDisplayModal] = useState('none');
  const [newDescription, setNewDescription] = useState("");

  const [updateDescription] = useMutation(UPDATE_AD);

  const formatDate = (date) => {
    const d = new Date(date)
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    return `${ye}-${mo}-${da}`
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">Id</TableCell>
            <TableCell scope="col" border="bottom">Description</TableCell>
            <TableCell scope="col" border="bottom">Type</TableCell>
            <TableCell scope="col" border="bottom">Score</TableCell>
            <TableCell scope="col" border="bottom">Images</TableCell>
            <TableCell scope="col" border="bottom">Show history</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <InfiniteScroll
            renderMarker={marker => (
              <TableRow>
                <TableCell>{marker}</TableCell>
              </TableRow>
            )}
            scrollableAncestor="window"
            items={ads}
            onMore={loadMore}
          >
            {ad => (
              <TableRow key={ad._id}>
                <TableCell>{ad._id}</TableCell>
                <TableCell>
                  <Box style={{justifyContent: 'space-between'}} alignContent="between" direction="row">
                    {
                      editingDescriptionId !== ad._id ?
                        <>
                          <Text>{ad.description}</Text>
                          <Button onClick={() => {
                            setEditingDescriptionId(ad._id);
                            setNewDescription(ad.description);
                          }}><Edit/></Button>
                        </> :
                        <>
                          <TextInput value={newDescription} onChange={event => setNewDescription(event.target.value)}/>
                          <Button onClick={() => {
                            updateDescription({variables: {_id: ad._id, description: newDescription}}).then(() => {
                              setEditingDescriptionId(null);
                            })
                          }}><Save/></Button>
                        </>
                    }
                  </Box>
                </TableCell>
                <TableCell>{ad.type}</TableCell>
                <TableCell>{ad.score}</TableCell>
                <TableCell>{ad.images ? ad.images.length : 0}</TableCell>
                <TableCell><Button id="myBtn" onClick={() => {
                  setDisplayModal('block');
                  setHistoryInfo(ad.scoreHistory);
                }}><History/></Button></TableCell>
              </TableRow>
            )}
          </InfiniteScroll>
        </TableBody>
      </Table>
      <div id="myModal" className="modal" style={{display: displayModal}}>
        <div className="modal-content">
          <span className="close" onClick={() => setDisplayModal('none')}>&times;</span>
          {
            historyInfo && historyInfo.length > 1 &&
            <DataChart
              series={['date', 'score']}
              data={historyInfo.map(h => ({score: h.score, date: formatDate(h.date)}))}
            />
          }
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell scope="col" border="bottom">Score</TableCell>
                <TableCell scope="col" border="bottom">Date</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                historyInfo && historyInfo.map((h, index) =>
                  <TableRow key={index}>
                    <TableCell>{h.score}</TableCell>
                    <TableCell>{formatDate(h.date)}</TableCell>
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export {Admin, AdsTable};

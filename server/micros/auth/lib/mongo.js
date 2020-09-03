import {config} from '../config';
const MongoClient = require('mongodb').MongoClient;

let clientDB = null;
let client = null;

const options = {useNewUrlParser: true, useUnifiedTopology: true};

const connect = async () => {
  if (!clientDB) {
    client = new MongoClient(config.mongo.url, options);
    const connected = await client.connect();
    clientDB = connected.db();
  }
  return clientDB;
};

const disconnect = () => client.close();

export {clientDB, connect, disconnect};
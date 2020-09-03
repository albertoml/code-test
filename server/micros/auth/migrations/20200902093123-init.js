const collectionName = 'user';

module.exports = {
  async up(db) {
    await db.collection(collectionName).insertMany(
      [
        {
          userName: 'supervisor',
          password: '4da63edb4214646f98965844af298b94c85fe7ba71c53e2948fe13ca87425668c7cb2f623a2707dbcd306d9a04c2227671a25a042e371fde9a911f52a620e42a'
        }
      ]
    );
  },

  async down(db) {
    await db.collection(collectionName).deleteMany({})
  }
};

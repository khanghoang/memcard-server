Words = new Mongo.Collection('words')

Words.insert({
  createdAt: new Date(),
  word: "My first post!",
  meaning: "Today was a good day."
});

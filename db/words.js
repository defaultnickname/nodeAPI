const knex = require("./knex");

function createWord(word) {
  return knex("words").insert(word);
}

function deleteWord(id) {
  return knex("words").where("id", id).del();
}

function getUniqueWords() {
  return knex("words").distinct("wordContent");
}

function getWordCount(word) {
  return knex("words")
    .where("wordContent", word)
    .count(`wordContent as ${word}`);
}

module.exports = {
  createWord,
  deleteWord,
  getUniqueWords,
  getWordCount,
};

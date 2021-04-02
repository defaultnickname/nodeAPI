const express = require("express");
const app = express();
const db = require("./db/words");

app.use(express.json());

//Adding words to collection
app.post("/api/words", async (req, res) => {
  try {
    const result = await db.createWord(req.body);
    res.status(201).json({ id: result[0] });
  } catch (e) {
    res.send({
      status: "fail",
      message: "Bad request",
    });
  }
});

//Deleting words from collection
app.delete("/api/words/:id", async (req, res) => {
  await db.deleteWord(req.params.id);
  res.status(200).json({ succes: true });
});

//Getting the number of appearances of the word in collection
app.get("/api/words/:word", async (req, res) => {
  let count = await db.getWordCount(req.params.word);
  res.status(200).json({ count });
});

//Getting all unique words from collection
app.get("/api/words", async (req, res) => {
  const words = await db.getUniqueWords();
  res.status(200).json(words).catch;
});

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

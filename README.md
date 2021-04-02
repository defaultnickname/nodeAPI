# Node API

Simple API with use of express framework and knex query builder

## Installation

You need to install dependencies

```bash
npm install express knex sqlite3

```
and run 

```bash
node index.js

```
Default port is **3000** but it can be changed in environment variable

## Database
Database was premade with only 2 columns:

**id** - id of the word in collection

**wordContent** - actual word stored 


## REST enpoints with available methods
```bash
POST:
api/words
Adding words to collection

DELETE:
api/words/:id
Deleting words from collection

GET:
api/words/
Listing unique words from collection

GET:
api/words/:wordContent
Getting count of occurances of word in collection


```




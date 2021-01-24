// prisma/seed.js

'use strict';

const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const startOfYear = require('date-fns/startOfYear');
const now = new Date();
const startOfThisYear = startOfYear(now);
// Thanks, https://stackoverflow.com/a/9035732
function randomDateBetween(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const seedData = [
  {
    title: 'Meeting Notes',
    body: 'This is an example note. It contains **Markdown**!',
    created_at: randomDateBetween(startOfThisYear, now).toISOString(),
  },
  {
    title: 'Make a thing',
    body: `It's very easy to make some words **bold** and other words *italic* with
  Markdown. You can even [link to React's website!](https://www.reactjs.org).`,
    created_at: randomDateBetween(startOfThisYear, now).toISOString(),
  },
  {
    title:
      'A note with a very long title because sometimes you need more words',
    body: `You can write all kinds of [amazing](https://en.wikipedia.org/wiki/The_Amazing)
  notes in this app! These note live on the server in the \`notes\` folder.
  
  ![This app is powered by React](https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/React_Native_Logo.png/800px-React_Native_Logo.png)`,
    created_at: randomDateBetween(startOfThisYear, now).toISOString(),
  },
  {
    title: 'I wrote this note today',
    body: 'It was an excellent note.',
    created_at: now.toISOString(),
  },
];

// A `main` function so that we can use async/await
async function main() {
  await prisma.notes.deleteMany();
  const res = await Promise.all(
    seedData.map((data) => {
      const newNote = prisma.notes.create({data});
      console.log(`new note created`, newNote.id);
    })
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

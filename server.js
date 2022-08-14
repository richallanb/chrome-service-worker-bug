// anything longer than ~30s will do the trick
const DURATION_NEEDED_TO_BREAK_CHROME = 31000;
const DURATION_WHERE_CHROME_STILL_WORKS = 29000;
const PORT = 8081;
const express = require('express');
const app = express();

app.use('/blank-screen', (_, __, next) => {
    console.log(`Waiting ${DURATION_NEEDED_TO_BREAK_CHROME}ms before navigation`);
    setTimeout(next, DURATION_NEEDED_TO_BREAK_CHROME);
});

app.use('/working-scope', (_, __, next) => {
    console.log(`Waiting ${DURATION_NEEDED_TO_BREAK_CHROME}ms before navigation`);
    setTimeout(next, DURATION_NEEDED_TO_BREAK_CHROME);
});

app.get('/non-blank-screen', (_, __, next) => {
    console.log(`Waiting ${DURATION_WHERE_CHROME_STILL_WORKS}ms before navigation`);
    setTimeout(next, DURATION_WHERE_CHROME_STILL_WORKS);
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`);
});
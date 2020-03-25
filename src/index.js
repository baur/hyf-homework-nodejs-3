const expres = require('express');

const port = 3000;
const app = expres();
app.listen(port, () => console.log(`server is listening on port:${port}`));
app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.get('/users', (req, res) => {
  res.json([])
});
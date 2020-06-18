const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

const PATH_TO_DATA = path.join(__dirname, './data/data.json');

const getData = () => {
  console.log('here');
  if (fs.existsSync(PATH_TO_DATA)) {
    fs.readFile(PATH_TO_DATA, 'utf-8', (err, content) => {
      if (err) {
        throw err;
      }
      console.log(content);
      return content;
    })
  }

}

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (res) => {
  res.json(getData());
})

app.listen(3200, () => {
  console.log('server is running on port 3200');
});

const { error } = require('console');
const express = require('express');
const path = require('path');
const scores = require('./models/dbHelpers')

const app = express();

const port = 8080;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '1mb'}));
app.listen(port);

app.post('/api/scoreData', (req, res) => {
   console.log(req.body);
<<<<<<< HEAD
   scores.add(req.body)
      .then(score => {
         res.status(200).json(score)
      })
      .catch(error => {
         console.log(error);
         res.status(500).json({message: "oi cunt i cant fucking underständ"})
      })
=======
   // scores.add(req.body)
   //    .then(score => {
   //       console.log(score);
   //       res.status(200).json(score)
   //    })
   //    .catch(error => {
   //       console.log(error);
   //       res.status(500).json({message: "oi cunt i cant fucking underständ"})
   //    })
>>>>>>> 8c461e132ab9d31b8cccbf764ebf4a086b673304
});

app.get('/api/scoreData', (req, res) => {
   scores.findSorted()
      .then(scores => {
         res.status(200).json(scores)
      })
      .catch(error => {
         console.log(error);
         res.status(500).json({message: "i cant give you that you daft granny"})
      })
})
const express = require(`express`);

const app = express();

app.get(`/`, function(req, res){
    res.json({firstname: 'John',lastname: 'Doe'});
    console.log("{firstname: 'John',lastname: 'Doe'}");
    
})
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
  })

app.use(`/`, express.static(__dirname + `/public/`));


const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/:id", (req, res) => {
  res.send(req.params);
  console.log(req.params);
});


const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.use("/", express.static(__dirname + "/public/"));
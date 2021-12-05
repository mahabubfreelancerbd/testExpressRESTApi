const { urlencoded } = require('express');
const express = require('express');
const app = express() 

app.use(urlencoded({extended: true}))
app.use(express.json()) //when you send data through post method

//app.listen(port, function() {console.log(Example app listening at port 3000')}
// Used Below Arrow Function =>
//app.listen(5000, () => console.log('App is running in port 3000'))
app.listen(3000, function(){
    console.log('App is running in port 3000')
})



app.get('/', function (req, res) {
    res.send([
        {
            msg: "testMessage"
        }
    ])
  })

  app.get('/about', function (req,res) {
    res.send([
        {
            name: 'Mahabubur Rahman',
            price: '1000',
            categories: 'Electornics',
            tags: ['electronics', 'hp']
        }
    ])
})
app.post('/about', (req, res) => {
    console.log(req.body);
    res.send({msg: "Ok"})
  })
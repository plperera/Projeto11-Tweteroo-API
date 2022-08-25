import express from 'express';

const server = express();
const hoje = new Date();
let contador = 0

server.get('/tweets', function (req, res) {
    contador++
    res.send(`visita numero: ${contador}`)
})

// server.get('/teste/:uaimeufi', function (req, res) {
//     const {uaimeufi} = req.params
//     res.send(`${uaimeufi}`)
// })

server.listen(5000, function () {
    console.log("oi console")
});
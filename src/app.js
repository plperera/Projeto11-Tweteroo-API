import express from 'express';
import cors from "cors";

const server = express();

server.use(express.json())
server.use(cors());

const tweets = []
const users = []

server.get('/sign-up', function (req, res) {
    res.send(users)
})

server.post('/sign-up', (req, res) => {

    console.log("executando o login")

    const newUser = {
        ...req.body
    }

    users.push(newUser)
    res.send("OK")
})

server.get('/tweets', function (req, res) {

    let arr = []
    let size = (tweets.length - 1)

    for (let i = size; (i > size - 10) && (i >= 0); i--){

        let avatar = (users.find( (e) => e.username === req.body.username)).avatar

        arr.push({
            ...tweets[i],
            avatar: avatar
        })
    }
    res.send(arr)
})

server.post('/tweets', (req, res) => {

    console.log("executando a criação de tweet")

    const newTweet = {
        ...req.body,
    }

    tweets.push(newTweet)

    res.send("OK")
})


// server.get('/teste/:uaimeufi', function (req, res) {
//     const {uaimeufi} = req.params
//     res.send(`${uaimeufi}`)
// })

server.listen(5000, function () {
    console.log("Estou de olho na porta 5000")
});
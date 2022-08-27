import express from 'express';
//import cors from "cors";

const server = express();

server.use(express.json())
//server.use(cors());

const exemplo = {
    username: "teste",
    tweet: "testeTexto"
}
const tweets = [exemplo]
const users = []


server.get('/tweets', function (req, res) {
    res.send(tweets)
})

server.post('/sign-up', (req, res) => {

    console.log("executando o login")

    const newUser = {
        username: req.body.username,
        avatar: req.body.avatar
    }

    users.push(newUser)

    res.send(users)
})

server.post('/tweets', (req, res) => {

    console.log("executando a criação de tweet")

    const newTweet = {
        username: req.body.username,
        tweet: req.body.tweet
    }

    tweets.push(newTweet)

    res.send(tweets)
})


// server.get('/teste/:uaimeufi', function (req, res) {
//     const {uaimeufi} = req.params
//     res.send(`${uaimeufi}`)
// })

server.listen(5000, function () {
    console.log("oi console")
});
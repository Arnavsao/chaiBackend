require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const gitHubData ={
    "login": "Arnavsao",
    "id": 140349606,
    "node_id": "U_kgDOCF2Qpg",
    "avatar_url": "https://avatars.githubusercontent.com/u/140349606?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Arnavsao",
    "html_url": "https://github.com/Arnavsao",
    "followers_url": "https://api.github.com/users/Arnavsao/followers",
    "following_url": "https://api.github.com/users/Arnavsao/following{/other_user}",
    "gists_url": "https://api.github.com/users/Arnavsao/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Arnavsao/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Arnavsao/subscriptions",
    "organizations_url": "https://api.github.com/users/Arnavsao/orgs",
    "repos_url": "https://api.github.com/users/Arnavsao/repos",
    "events_url": "https://api.github.com/users/Arnavsao/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Arnavsao/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Arnav Sao",
    "company": "Rajiv Gandhi Institute of Petroleum Technology, Amethi",
    "blog": "",
    "location": "Amethi (UP), India",
    "email": null,
    "hireable": true,
    "bio": "ML | WebD\r\nPassionate about ML and WebD. Skilled in Python, TensorFlow, JavaScript, and React. Open source contributor. Let's build something amazing together!",
    "twitter_username": "_arnav_sao_",
    "public_repos": 20,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-07-23T20:36:15Z",
    "updated_at": "2024-10-10T23:38:14Z"
  }

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res) => {
    res.send("<h1>please login at chai with code")
})

app.get('/github',(req,res)=>{
    res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
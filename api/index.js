const axios = require('axios');
const express = require('express');

const server = express();


require('dotenv').config();
const {
    BEARER_TOKEN,
    PORT
} = process.env;
const token = BEARER_TOKEN;

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// ------------------------------------------------------------
server.get('/tweetUrlVideos', async (req, res) => {
    // console.log(token);
    // const { id_tuit } = req.body;
    const id_tuit = "1569437835027181569";
    console.log(id_tuit, 'este es el body');
    const tweetEndPoint = `https://api.twitter.com/2/tweets/${id_tuit}?media.fields=preview_image_url,variants&expansions=attachments.media_keys`


    const tuitData = await axios.get(tweetEndPoint,
        {
            headers: {
                "User-Agent": "LikedTweetsTestCode",
                authorization: `Bearer ${token}`,
            },
        })

    const tuitDataMap = tuitData.data.includes.media[0].variants?.map(el => {
        return {
            bit_rate: el.bit_rate,
            content_type: el.content_type,
            url: el.url
        };
    })

    console.log(tuitDataMap);
    res.status(200).json(tuitDataMap)
})

server.listen(PORT || 3001, () => {
    console.log('listening port 3001');
})
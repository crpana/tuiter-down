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
    const { id } = req.query;
    // console.log(id, 'este es por query');
    const tweetEndPoint = `https://api.twitter.com/2/tweets/${id}?media.fields=preview_image_url,variants&expansions=attachments.media_keys`


    const tuitData = await axios.get(tweetEndPoint,
        {
            headers: {
                "User-Agent": "LikedTweetsTestCode",
                authorization: `Bearer ${token}`,
            },
        })

    const tuitDataMap = tuitData.data.includes.media[0].variants?.map(el => {
        return {
            preview_image_url: tuitData.data.includes.media[0].preview_image_url,
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
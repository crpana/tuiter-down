import axios from "axios";


export const GET_DATA_NAME = 'GET_DATA_NAME';


export function getDATA(id_tuit) {
    return async function (dispatch) {

        try {
            const tweetEndPoint = `https://api.twitter.com/2/tweets/${id_tuit}?media.fields=preview_image_url,variants&expansions=attachments.media_keys`
            const token = 'AAAAAAAAAAAAAAAAAAAAAM95jQEAAAAA2FDZu8tmMzKzdDDJHmLOdVeS0pw%3DibFCIuD5drVDqCIHZKuZj67LAGpSYxEYkFFjvdsJdaAPzNgz90'
            console.log(tweetEndPoint);
            console.log(token);
            const json = await axios.get()

            console.log(json);

            return dispatch({
                type: GET_DATA_NAME,
                payload: json

            });


        } catch (error) {
            console.log(error);
        }
    }
}
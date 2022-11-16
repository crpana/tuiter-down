import axios from "axios";

export const GET_DATA_NAME = 'GET_DATA_NAME';


export function getDATA(id_tuit) {
    return async function (dispatch) {

        try {
            console.log(id_tuit.title);
            let json = await axios.get(`https://api.twitter.com/2/tweets/${id_tuit.title}?media.fields=preview_image_url,variants&expansions=attachments.media_keys`);

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
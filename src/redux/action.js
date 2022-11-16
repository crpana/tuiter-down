import axios from "axios";


export const GET_DATA_NAME = 'GET_DATA_NAME';


export function getDATA(id_tuit) {
    return async function (dispatch) {

        try {
            
            const json = await axios.get("https://tuiter-down-production.up.railway.app/tweetUrlVideos")

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
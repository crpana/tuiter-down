import axios from "axios";


export const GET_DATA_NAME = 'GET_DATA_NAME';


export function getDATA(id) {
    return async function (dispatch) {

        try {
            console.log(id, 'aca el id en action');
            const json = await axios.get(`https://tuiter-down-production.up.railway.app/tweetUrlVideos?id=${id}`)
            // const json = await axios.get(`http://localhost:3001/tweetUrlVideos?id=${id}`)



            console.log(json, 'en accion');

            return dispatch({
                type: GET_DATA_NAME,
                payload: json.data

            });


        } catch (error) {
            console.log(error);
        }
    }
}
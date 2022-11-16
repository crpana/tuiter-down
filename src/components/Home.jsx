import React, { useState } from "react";
import axios from "axios";
import { getDATA } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {

    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: ''
    })

    function handleChange(e) {
        e.preventDefault()

        setInput({
            ...input,
            title: e.target.value.split("/").pop().split("_").shift()
        })

    }
    // https://twitter.com/i/status/1587387444017729536

    // input.split("/").pop().split("_").shift()
    console.log(input);


    function handleDownload(e) {
        e.preventDefault()

        // console.log(input);
        // let json = await axios.get(`https://api.twitter.com/2/tweets/${input}?media.fields=preview_image_url,variants&expansions=attachments.media_keys`);
        // console.log(json);
        dispatch(getDATA(input))
        
    }

    // useSelector(() => {
    //     dispatch(getDATA(input))
    // })

    return (
        <>
            <div>

                <label>URL: </label>
                <input value={input.title} type='text' name='title' onChange={e => handleChange(e)} ></input>
            </div>

            <div>
                <button onClick={e => handleDownload(e)}>DESCARGAR</button>
            </div>

        </>
    );
}
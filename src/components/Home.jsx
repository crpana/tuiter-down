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
            title: e.target.value
        })

    }
    // https://twitter.com/i/status/1587387444017729536

    // input.split("/").pop().split("_").shift()
    console.log(input.title.split("/").pop());


    async function handleDownload(e) {
        e.preventDefault()
        const json = await axios.get(`https://tuiter-down-production.up.railway.app/tweetUrlVideos`)
        console.log(json);

    }


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
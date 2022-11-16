import React, { useState } from "react";
import axios from "axios";
import { getDATA } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";
const twitterGetUrl = require("twitter-url-direct")


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
    console.log(input);


    async function handleDownload(e) {
        e.preventDefault()

        let json = await twitterGetUrl(input.title)
        console.log(json);

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
import React, { useState } from "react";
import { getDATA } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";



export default function Home() {


    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: ''
    })


    const URL_VIDEOS = useSelector((state) => state.videos_url)
    // console.log(URL_VIDEOS, 'esto es el reducer');


    function handleChange(e) {
        e.preventDefault()

        setInput({
            ...input,
            title: e.target.value
        })

    }
    // https://twitter.com/i/status/1587387444017729536

    // input.split("/").pop().split("_").shift()
    // console.log(input.title.split("/").pop());
    if (input.title.includes('?t=')) {
        //CELULAR
        const id = input.title.split("/").pop().split('?').shift()
        console.log(id, 'id viene dek celular');
    } else {
        //PC
        const id = input.title.split("/").pop()

        console.log(id, 'id viene de la pc');

    }


    // console.log(id);

    function handleDownload(e) {
        e.preventDefault()
        dispatch(getDATA(id))


    }


    return (
        <div>
            <div>

                <label>URL: </label>
                <input value={input.title} type='text' name='title' onChange={e => handleChange(e)} ></input>
            </div>

            <div>
                <button onClick={e => handleDownload(e)}>DESCARGAR</button>
            </div>

            <div>

                {
                    URL_VIDEOS?.map(e => {


                        return (

                            <div key={e.url}>
                                <a href={e.url} target="_blank" rel="noreferrer noopener">{e.url.split("/")[7]}</a>
                                {/* <button type="button" onClick={e => Redirecionar(e)}>{e.url.split("/")[7]}</button> */}
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}
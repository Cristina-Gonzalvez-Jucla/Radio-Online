import React, {useEffect, useRef} from "react";


export const Reproductor = (props) => {
    console.log(props.url);
    const audio = useRef();

    useEffect(() => {
        if (!audio) {
            return
        }
        audio.current.load();
    }, [props.url, audio])
    
    return <audio controls ref={audio}>
        <source src={props.url} type="audio/ogg"/>

    </audio>
};
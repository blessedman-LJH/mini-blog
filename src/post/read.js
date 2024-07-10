import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";


export default function Read()
{
    const {fileName} = useParams();
    const [markdown, setMarkdown] = useState("");

    useEffect(()=>{
        const markdownPath = `/markdown/${fileName}.md`;
        fetch(markdownPath)
            .then((res)=> res.text())
            .then((text)=>{
                setMarkdown(text);
                console.log(text);
            },[fileName]);
    })

    
    return (
        <div className='py-4 px-4 text-center'>

        </div>
    );
}
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import remarkGfm from 'remark-gfm';
import ReactMarkdown from "react-markdown";

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
            <ReactMarkdown remarkPlugins = {remarkGfm}>{markdown}</ReactMarkdown>
        </div>
    );
}
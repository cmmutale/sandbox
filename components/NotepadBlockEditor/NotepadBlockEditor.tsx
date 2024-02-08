'use client'
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
import React, { useEffect, useRef, useState } from 'react'

export default function NotepadBlockEditor() {
    const [isMounted, setIsMounted] = useState(false)
    const ref = useRef<EditorJS>()

    const initEditor = async () => {
        const EditorJS = (await import('@editorjs/editorjs')).default;
        const Header = (await import('@editorjs/header')).default;
    }

    if (!ref.current) {
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                header: Header,
                list: List,
            },
        });
        ref.current = editor;
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const init = async () => {
            await initEditor();
        }

        if (isMounted) {
            init();

            return () => {
                if (ref.current) {
                    ref.current.destroy();
                }
            }
        }
    }, [isMounted])

    return (
        <div>
            <h1>Editor</h1>
            <div id="editorjs" className="border p-2"></div>
            <button
                onClick={() => {
                    ref.current?.save().then((outputData: any) => {
                        console.log('Article data: ', outputData);
                    })
                }}
            >save document</button>
        </div>
    )
}

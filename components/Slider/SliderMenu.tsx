'use client'
import React, { useEffect, useRef, useState } from 'react'

function SliderMenu() {
    const list = ["item 1", "item 2", "item 4", "item 5", "item 6", "item 7", "item 8", "item 9", "item 10", "item 11", "item 12", "item 13"]
    const [isClient, setIsClient] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const slider = useRef<HTMLUListElement>(null)

    function moveSlider(direction: string) {
        if (slider.current) {
            if (direction === "left") {
                slider.current.scrollLeft -= 300
            } else {
                slider.current.scrollLeft += 300
            }
        }
    }

    function dragging(e:any) {
        if (slider.current && isDragging) {
            console.log('dragging...')
            slider.current.scrollLeft -= e.movementX;
        }
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsClient(true)
        }
    }, [])

    if (!isClient) {
        return null
    }
    return (
        <div className='wrapper relative w-full bg-white border px-3 py-2 rounded-lg overflow-hidden'>
            <ul
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={(e) => dragging(e)}
                ref={slider}
                className='flex items gap-2 w-full sm:overflow-hidden overflow-x-scroll px-12 cursor-pointer'>
                {list.map((item, index) => (
                    <li
                        key={index}
                        className='text-base font-medium whitespace-nowrap p-1 bg-slate-300 select-none'>{item}</li>
                ))}
            </ul>
            <button
                onClick={() => moveSlider("left")}
                className='absolute w-12
            top-1/2 -translate-y-1/2 h-full flex items-center left-0 bg-white p-2 max-sm:hidden'>
                <span className='text-2xl hover:scale-110 active:scale-100 transition-all'>👈</span>
            </button>
            <button
                onClick={() => moveSlider("right")}
                className='absolute w-12
            top-1/2 -translate-y-1/2 h-full flex items-center right-0 bg-white p-2 max-sm:hidden'>
                <span className='text-2xl hover:scale-110 active:scale-100 transition-all'>👉</span>
            </button>
        </div>
    )
}

export default SliderMenu
import React from 'react'
import SliderMenu from '@/components/Slider/SliderMenu'

function Slide() {
    return (
        <div className='flex flex-col gap-4 items-center w-full'>
            <p className='w-full max-w-[500px]'>
                tweak the width of the slider, the scroll offset and width of
                the buttons and padding according to your use case
            </p>
            <div className='max-w-[400px] w-full'>
                <SliderMenu />
            </div>
        </div>
    )
}

export default Slide
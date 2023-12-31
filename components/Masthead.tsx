'use client'
import React from 'react'
import { motion } from 'framer-motion'


function Masthead() {
    const fadeUp = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duratioin: 0.35,
                ease: "easeOut"
            }
        },
        close: {
            y: 100,
            opacity: 0,
            transition: {
                duratioin: 0,
            }
        },
    }

    return (
        <motion.div variants={fadeUp}>
            <h1 className='font-semibold'>welcome stranger</h1>
            <p>click the buger menu. ↗️</p>
        </motion.div>
    )
}

export default Masthead
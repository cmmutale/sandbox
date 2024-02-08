'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import navigation from '@/data/navigation.json'
import NavMenu from './NavMenu'

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(false)

    function handleClick() {
        setActiveMenu(!activeMenu)
    }

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: 'easeOut',
                type: 'spring',
            }
        },
        close: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            }
        },
    }

    const listItemsVariants = {
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
        <div className={
            `flex items-start w-full py-0 px-[10vw] bg-black duration-500 absolute top-0 transition-all h-0 z-50
            ${activeMenu && 'bg-black transition-all duration-700 h-screen'}`}>
            <div className="navigation 
            w-full px-[10vw] absolute right-0 top-0 pt-[7rem]
            flex justify-between items-center">
                <div>
                    <button
                        className={`cursor-pointer transition-colors duration-500
                ${activeMenu && 'text-white duration-500 transition-all'}`}>learn more</button>
                    {
                        activeMenu && (
                            <Link href='/'
                                onClick={() => handleClick()}
                                className={`cursor-pointer transition-colors duration-500 ml-3 hover:bg-white/20 p-1 rounded-md
                    ${activeMenu && 'text-white duration-500 transition-all'}`}>🏠 Back home</Link>
                        )
                    }
                </div>
                <div
                    className="burger-menu-container 
                    block w-[55px] h-[25px] cursor-pointer relative">
                    <div
                        onClick={() => handleClick()}
                        className="menu-trigger 
                        content-none w-[55px] h-[25px] peer
                        cursor-pointer relative right-0 z-50"></div>
                    <div className={
                        `burger-menu 
                        content-[''] bg-black absolute w-[55px] h-[4px] z-0 duration-500 ease-in-out top-1 peer-hover:w-[35px]
                        before:content-[''] before:bg-black before:absolute before:w-[55px] before:h-[4px] before:z-0 before:duration-500 before:ease-in-out
                        before:translate-y-[-10px]
                        after:content-[''] after:bg-black after:absolute after:w-[55px] after:h-[4px] after:z-0 after:duration-500 after:ease-in-out
                        after:translate-y-[10px]
                        ${activeMenu && (
                            `!w-0 bg-white duration-500 transition-all ease-in-out
                                after:bg-white after:duration-500 after:transition-all after:ease-in-out
                                after:!translate-y-0 after:rotate-[135deg]
                                before:bg-white before:duration-500 before:transition-all before:ease-in-out
                                before:!translate-y-0 before:rotate-[-135deg]`)}`}>
                    </div>
                </div>
            </div>
            <div className={`menu-content absolute top-[30vh] hidden
            ${activeMenu && '!block duration-500 transition-all'}`}>
                <NavMenu
                    activeMenu={activeMenu}
                    handleClick={handleClick} />
            </div>
        </div>
    )
}

export default Navbar
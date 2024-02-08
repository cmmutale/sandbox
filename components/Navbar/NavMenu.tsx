import React from 'react'
import { motion } from 'framer-motion'
import navigation from '@/data/navigation.json'
import Link from 'next/link'

type Props = {
    activeMenu: boolean,
    handleClick: () => void,
}
function NavMenu({ activeMenu, handleClick }: Props) {
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
        <motion.ul
            animate={activeMenu ? 'open' : 'close'}
            variants={motionVariants}>
            {
                navigation.mainMenu.map((item: any, index: any) => {
                    return (
                        item.subLinks?.length > 0 ?
                            <>
                                <motion.li
                                    key={index}
                                    variants={listItemsVariants}
                                    className='py-2'>
                                    <Link
                                        onClick={() => handleClick()}
                                        href={`/${item.url.toLowerCase()}`}
                                        className='text-xl 
                                        transition-colors duration-200
                                        hover:transition-colors hover:duration-200
                                        hover:text-[rgb(232,232,232)]
                                        text-[rgb(127,127,127)]'> {item.title}</Link>
                                    <div className='pl-4 text-white'>
                                        <ul>
                                            {
                                                item.subLinks.map((sublink: any, index: any) => {
                                                    return (
                                                        <li>
                                                            <Link href={sublink.url}>{sublink.title}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </motion.li>
                            </> :
                            <motion.li
                                key={index}
                                variants={listItemsVariants}
                                className='py-2'>
                                <Link
                                    onClick={() => handleClick()}
                                    href={`/${item.url.toLowerCase()}`}
                                    className='text-xl 
                                    transition-colors duration-200
                                    hover:transition-colors hover:duration-200
                                    hover:text-[rgb(232,232,232)]
                                    text-[rgb(127,127,127)]'>{item.title}</Link>
                            </motion.li>
                    )
                })
            }
        </motion.ul>
    )
}

export default NavMenu
'use client'
import React, { useState } from 'react'
import words from '@/data/words.json'

function SearchbarFilter() {
    const [value, setValue] = useState('');

    function filterResults(value: string) {
        const results = words.commonWords.filter((word) => word.includes(value))
        if (results.length === 0) {
            results.push('No results found 🧹')
        }
        if ((results.length === 1) && results[0] === value) {
            return [];
        }
        return results;
    }

    // console.log(filterResults(value))
    return (
        <div
            className={`
        p-2 relative w-full bg-white rounded-lg
        ${value ? 'border border-gray-300' : ''
                }
        `}
        >
            <input
                className='border py-1 px-2 w-full rounded-md'
                placeholder='search here...'
                onChange={(e) => setValue(e.target.value)}
                type="text" />
            {
                value && (
                    <div className='p-2'>
                        <ul className='space-y-2'>
                            {
                                filterResults(value).map((word) => (
                                    <li 
                                    // onClick={() => setValue(word)}
                                    key={word}>{word}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}

export default SearchbarFilter
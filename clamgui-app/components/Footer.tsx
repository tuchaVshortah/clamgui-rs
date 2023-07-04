import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
            <p>Made with love by <Link href={'https://github.com/tuchaVshortah/clamgui-rs'} className='font-bold underline'>tuchaVshortah</Link>❤️</p>

            <div>
                <Link href="/" className="text-gray-500">
                Privacy Policy
                </Link>
                <Link href="/" className="text-gray-500">
                Terms & Conditions
                </Link>
            </div>
            </div>
        </footer>
    )
}

export default Footer
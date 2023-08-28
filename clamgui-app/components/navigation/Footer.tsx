import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="mt-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <p>Made with love by <Link href={'https://github.com/tuchaVshortah/clamgui-rs'}>tuchaVshortah</Link>❤️</p>

            <div className='flex justify-between'>
                <div>
                    <Link href="/">Privacy Policy</Link>
                </div>
                
                <div>
                    <Link href="/">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
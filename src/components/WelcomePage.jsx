
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const WelcomePage = () => {

    ScrollReveal({ reset: true, distance: '50px' });

    useEffect(() => {
        ScrollReveal().reveal('.headline', { delay: 500, origin: 'left', reset: true });
        ScrollReveal().reveal('.name', { delay: 800, origin: 'bottom', reset: true });
        ScrollReveal().reveal('.info', { delay: 1100, origin: 'right', reset: true });
    }, [])

    return (
        <header className='h-screen flex flex-col items-center justify-center'>
            <div className=' w-20 flex flex-row justify-center items-center space-x-4'>
                <h1 className='headline'>Hi,i'm </h1>
                <span className='name text-[55px]'>Ari</span>
            </div>
            <div className='info text-center sm:h1-sm'>
                <p >Full-Stack Web Developer</p>
                <p>and this is my portfolio</p>
            </div>
        </header>
    )
}

export default WelcomePage
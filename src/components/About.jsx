import React, { useEffect } from 'react'
import Ari from '../images/ari_saxophone.jpg'
import kyak from '../images/sukkot-trip.webp'
import arrow from '../images/down-right-arrow.png'
import resume from '../images/resume-icon.png'
import ScrollReveal from 'scrollreveal';

const About = () => {

    useEffect(() => {
        ScrollReveal().reveal('.img', { delay: 300, origin: 'right', distance: '50px', reset: true });
        ScrollReveal().reveal('.info-container', { delay: 500, origin: 'left', distance: '50px', reset: true });
    }, [])

    const scrollBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }

    return (
        <section className="sr-hidden sm:mb-20">
            <article className="bg-gray-100 p-12 md:flex md:items-center sm:h-4/5">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center">
                        {/* Image on the left for large screens, on top for smaller screens */}
                        <div className="relative w-60 h-80 md:w-80 md:h-96 mx-auto mt-5">
                            {/* Main (Bigger) Image */}
                            <img
                                loading='lazy'
                                src={kyak}
                                alt="Main Image"
                                className=" w-full h-full object-cover rounded-lg shadow-lg animate-rotateMainImage"
                            />

                            {/* Floating (Smaller) Image */}
                            <img
                                loading='lazy'
                                src={Ari}
                                alt="Overlay Image"
                                className="absolute bottom-10 right-[-30px] w-40 object-cover rounded-lg shadow-md animate-moveOverlayImage"
                            />
                        </div>


                        {/* Text content on the right */}
                        <div className=" w-full lg:w-1/2 lg:pl-8">
                            <div className='info-container'>

                                <h1 className="text-3xl font-bold text-center lg:text-left text-gray-800 mb-6 md:text-2xl mt-4">
                                    A little about me 🚀
                                </h1>
                                <p className="lg:text-lg text-sm text-gray-700 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-4">
                                    I’m 22, full-stack developer, looking for my first job in the industry! <br /> <br />
                                    I’m naturally curious and love tackling challenges — (and I know when to ask for help, too ;) . Over the past two years, I’ve been sharpening the most important skill in R&D: learning how to approach problems, dig in, and figure things out, even when I don’t know all the answers yet.
                                </p>

                                <ul className=" lg:text-lg list-disc list-inside text-base text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-8">
                                    <p>I have experience in technologies such as:</p> <br />
                                    <li>HTML/CSS & Sass</li>
                                    <li>JavaScript & TypeScript</li>
                                    <li>React & Node.js</li>
                                    <li>MongoDB</li>
                                </ul>
                                <p className="lg:text-lg text-sm text-gray-700 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                                    If you're looking for someone with high motivation, a love for learning, and the ability to face challenges.
                                </p>
                                <button onClick={scrollBottom} type="button" className=" text-white hover:text-[#24292F] bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mt-6 ">
                                    Let's Talk! <span><img
                                        className="w-5 ml-2 filter invert transition duration-300 hover:filter-none"
                                        src={arrow}
                                        alt="an arrow facing down"
                                    />
                                    </span>
                                </button>
                                <button onClick={() => window.open(`${import.meta.env.BASE_URL}/new-resume.pdf`, '_blank')} type="button" className=" text-white hover:text-[#24292F] bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mt-6 ">
                                    resume<span><img
                                        className="w-5 ml-2 filter invert transition duration-300 hover:filter-none"
                                        src={resume}
                                        alt="resume button"
                                    />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>

    );
};


export default About
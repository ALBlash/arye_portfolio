import React, { useEffect } from 'react'
// import aboutImage from '../assets/images/Ari_purim.jpg'
import chabadBocas from '../assets/images/chabad_bocas_friday.jpg'
// import kyak from '../assets/images/sukkot-trip.webp'
import ScrollReveal from 'scrollreveal';

const About2 = () => {

    useEffect(() => {
        ScrollReveal().reveal('.img', { delay: 300, origin: 'right', distance: '50px', reset: true });
        ScrollReveal().reveal('.info-container', { delay: 500, origin: 'left', distance: '50px', reset: true });
    }, [])


    return (
        <section className="sr-hidden">
            <article className="bg-gray-100 py-12 h-screen md:h-full md:flex md:items-center">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="flex flex-col-reverse lg:flex-row items-center">


                        {/* Text content on the left */}
                        <div className=" w-full lg:w-1/2 lg:pl-8">
                            <div className='info-container'>

                                <h1 className="text-3xl font-bold text-center lg:text-left text-gray-800 mb-6 md:text-2xl">
                                    what did i do the last couple of years? 😁
                                </h1>
                                <p className="lg:text-lg text-sm text-gray-700 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-3">
                                    It all started four years ago during the Jewish holiday of Purim, where we celebrate the saving of our people many years ago through a miracle.
                                    As is the custom, everyone dresses up, but I didn’t have a costume, so they (at least tried to) draw a Pokémon on me... Anyway, today I’m 21, with a full-stack developer certificate, looking for my first job in the industry!
                                </p>
                                <p className=" lg:text-lg text-sm text-gray-700 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-6">
                                    I’m naturally curious and love tackling challenges. Of course, I also know how to ask for help when needed.
                                    I have experience in technologies such as:
                                </p>
                                <ul className=" lg:text-lg list-disc list-inside text-base text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-6">
                                    <li>HTML/CSS & JavaScript</li>
                                    <li>React & Node.js</li>
                                    <li>MongoDB</li>
                                </ul>
                                <p className="lg:text-lg text-sm text-gray-700 text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-4">
                                    If you're looking for someone with high motivation, a love for learning, and the ability to face challenges, I’m your person! Feel free to get in touch!
                                </p>
                            </div>
                        </div>

                        {/* Image on the left for large screens, on top for smaller screens */}
                        <div className="img w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
                            <img
                                src={chabadBocas}
                                alt="with tourists in chabad panama"
                                className="rounded-lg md:w-[60%] w-[40%] h-auto object-cover min-w-28 sm:min-w-56"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </section>

    );
};


export default About2
import React,{useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import Cta from '../common/Cta'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {
  

  useEffect(() => {
    // Initialize AOS
    AOS.init();

    // Set up event listeners
    const handleAosIn = (event) => {
      console.log('animated in', event.detail);
    };

    const handleAosOut = (event) => {
      console.log('animated out', event.detail);
    };

    document.addEventListener('aos:in', handleAosIn);
    document.addEventListener('aos:out', handleAosOut);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener('aos:in', handleAosIn);
      document.removeEventListener('aos:out', handleAosOut);
    };
  }, []);
  return (
    <main data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" id='home' className="container mx-auto lg:max-w-7xl pt-20 px-5 ">
      
      <section data-aos="zoom-in-down" data-aos-duration="1500"
      className='hero py-10 relative  pb-0'>
        <article
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="500"
        className='bg-white md:absolute bottom-0 h-[40%] sm:w-[80%] md:h-[51.5%] md:w-[70%] lg:w-[50%] text- pt-5 pl-5 md:pt-10 mt-[18rem] sm:mt-[24.5rem] gap-6 md:gap-10 flex flex-col items-start'>
          <h1 className='font-mono text-3xl text-extrabold md:text-5xl'>
            Hey, I’m Brian 
            and I love building beautiful  websites</h1>
          <button to='/Portfolio' className='flex justify-between items-center px-3 py-3 w-[12rem] bg-darkGray hover:bg-transparent transition duration-200 ease-linear text-white hover:text-darkGray'>
            <a href="/Portfolio">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fillRule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/><path opacity=".25" d="M0 1l8 4 8-4"/></g></svg>
            </a>
            <a href='/Portfolio' className='capitalize font-mono '>go to portfolio</a>
          </button>
        </article>
      </section>
      <section
      data-aos="fade-right"
      data-aos-duration="500"
      className='grid md:grid-cols-2 gap-y-6 md:border-y md:border-border pb-8 md:pt-6 lg:py-12 gap-x-10'>
        <article 
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="300"
         className="object-cover object-center sm:object-right">
          <div className='profileImage'></div>
        </article>
        <article 
        data-aos="fade-right"
        data-aos-duration="1000"
        className='flex flex-col justify-center items-center text-center md:items-start md:text-left gap-6'>
          <h2 className="text-2xl text-darkGray font-mono font-extrabold">About me</h2>
          <p className="text-[0.9375rem] !leading-[1.875rem] lg:text-base text-gray-500 font-mono text-xl">
            I’m a junior front-end developer looking for a new role in an exciting company. I focus
            on writing accessible HTML, using modern CSS practices and writing clean JavaScript.
            When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in Nairobi, but I’m happy working remotely and have experience in
            remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature
            whether that’s going for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <button className='flex border-2 hover:border-gray-500 justify-between items-center px-3 py-3 w-[10rem] bg-darkGray hover:bg-transparent transition duration-200 ease-linear text-white hover:text-darkGray'>
            <a href="/Portfolio" className='font-mono'>Go to portfolio</a>
          </button>

        </article>
      </section>
      <section className='my-10'>
        <Cta/>
      </section>
    </main>
  )
}

export default Home
import React,{useEffect} from 'react'
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
    data-aos-duration="1500" id='home' className="container mx-auto lg:max-w-7xl  pt-20 px-5">
      
      <section data-aos="zoom-in-down" data-aos-duration="1500"
      className='hero py-10 relative'>
        <article
        data-aos="fade-up"
        data-aos-duration="1500"
        data-aos-delay="300"
        data-aos-id="super-duper"
        className='bg-white absolute bottom-0 h-[50%] w-[50%]md:w-[25%]border-2 border-black'>
          <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
          <button>button</button>
        </article>
      </section>
      <section>
        <Cta/>
      </section>
    </main>
  )
}

export default Home
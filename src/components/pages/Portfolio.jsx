import React ,{useEffect} from 'react'
import Cta from '../common/Cta'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
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
    <main
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500" id='Portfolio' className="container lg:max-w-7xl mx-auto pt-20 px-5 text-center">
      <section id="projects" className="p-8 ">
      <h2 className="text-5xl font-mono font-bold mb-8">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
        {/* project 1 */}
        <div className="p-4 bg-white shadow-lg shadow-gray-500">
          <h3 className="text-xl font-bold mb-4">Dine Website Restaurant</h3>
          <article className='flex flex-col gap-4'>
            <div 
            data-aos="zoom-in" data-aos-duration="1500" className="dine"></div>
            <p 
            data-aos="zoom-in" data-aos-duration="1500" className="text-[0.9375rem] lg:text-base text-gray-800 font-mono font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsam quasi incidunt consequuntur eos vitae libero deserunt.</p>
          </article>
          
        </div>
        {/* project 2 */}
        <div className="p-4 bg-white shadow-lg shadow-gray-500">
          <h3 className="text-xl font-bold mb-4">Manage</h3>
          <article className='flex flex-col gap-4'>
            <div
            data-aos="zoom-in" data-aos-duration="1500"
            className="manage"></div>
            <p
            data-aos="zoom-in" data-aos-duration="1500"
            data-aos-delay="100"
            className="text-[0.9375rem] lg:text-base text-gray-800 font-mono font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsam quasi incidunt consequuntur eos vitae libero deserunt.</p>
          </article>
        </div>
        {/* project 3 */}
        <div className="p-4 bg-white shadow-lg shadow-gray-500">
          <h3 className="text-xl font-bold mb-4">Bookmark Website</h3>
          <article className='flex flex-col gap-4'>
            <div 
            data-aos="zoom-in" data-aos-duration="1500"
            className="bookmark"></div>
            <p
            data-aos="zoom-in" data-aos-duration="1500"
            data-aos-delay="100"
            className="text-[0.9375rem] lg:text-base text-gray-800 font-mono font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsam quasi incidunt consequuntur eos vitae libero deserunt.</p>
          </article>
        </div>
        {/* project 4 */}
        <div className="p-4 bg-white shadow-lg shadow-gray-500">
          <h3 className="text-xl font-bold mb-4">Scoot</h3>
          <article className='flex flex-col gap-4'>
            <div
            data-aos="zoom-in" data-aos-duration="1500"
            className="Scoot"></div>
            <p
            data-aos="zoom-in" data-aos-duration="1500"
            data-aos-delay="100"
            className="text-[0.9375rem] lg:text-base text-gray-800 font-mono font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsam quasi incidunt consequuntur eos vitae libero deserunt.</p>
          </article>
        </div>
        {/* Add more projects as needed */}
      </div>
      </section>
      <section>
        <Cta/>
      </section>
      
    </main>
  )
}

export default Portfolio
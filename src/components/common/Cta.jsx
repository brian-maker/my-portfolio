import React ,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Cta() {

    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <main data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom"
    data-aos-duration="1500"
    className="container mx-auto  px-8 lg:max-w-7xl border-2">
        <section 
        className='grid justify-center items-center md:grid-cols-3 md:justify-between gap-10 md:gap-0 py-10'>
            <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-delay="300"
            className='text-center'>
                <h2 className='font-mono text-3xl font-bold text-darkGray md:text-left'>Interested in doing a project together?</h2>
            </div>
            <span
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-delay="500"
             className='line hidden md:block'></span>
            <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-delay="700" 
            className='flex items-center justify-center md:justify-end'>
                <button className='border-2 w-[10rem] font-mono py-4 focus:outline-none text-xl transition-all duration-500 hover:bg-darkGray hover:text-white capitalize'>
                    <a href="/Contact">
                        contact me
                    </a>
                </button>
            </div>
        </section>
    </main>
  )
}

export default Cta
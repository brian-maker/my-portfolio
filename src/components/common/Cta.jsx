import React ,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Cta() {
    const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Contact');
  };

    useEffect(() => {
        AOS.init();
      }, []);
    
  return (
    <main data-aos="fade-right"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="1500"
    className="container mx-auto  px-8 lg:max-w-7xl text-center">
        <section 
        className='grid justify-center items-center md:grid-cols-3 md:justify-between gap-10 md:gap-0 lg:gap-20 py-10'>
            <div
            data-aos="fade-right"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
            data-aos-delay="300"
            className='text-center'>
                <h2 className='font-mono text-3xl font-bold text-gray-500 md:text-left'>Interested in doing a project together?</h2>
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
                <button onClick={handleNavigate} className='border-2 w-[10rem] font-mono py-4 focus:outline-none text-xl transition-all duration-500 hover:bg-transparent hover:text-darkGray capitalize 
                bg-darkGray text-white'>
                    <span>
                        contact me
                    </span>
                </button>
            </div>
        </section>
    </main>
  )
}

export default Cta
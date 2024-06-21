import React,{useEffect} from 'react'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'
import ContactForm from '../common/ContactForm'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
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
    data-aos-duration="1500" 
    id='Contact' className="container lg:max-w-7xl mx-auto pt-20 px-5">
      <section className="pb-20 pt-10 sm:py-24 lg:pb-28">
      <div className="main-container flex flex-col gap-8 sm:gap-12">
        <div className="grid md:grid-cols-2 gap-y-6 border-y border-border pb-8 pt-6 lg:py-12">
          <h1
          data-aos="zoom-in" data-aos-duration="1500" 
          className='font-mono text-5xl text-extrabold'>Get in Touch</h1>
          <div className="flex flex-col gap-6">
            <p
            data-aos="fade-in" data-aos-duration="1500"
            data-aos-delay="100"
            className="text-[0.9375rem] !leading-[1.875rem] lg:text-base text-gray-500 font-mono">
              I’d love to hear about what you’re working on and how I could help. I’m currently
              looking for a new role and am open to a wide range of opportunities.I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working and positive person
              who will always approach each task with a sense of purpose and attention to detail.
              Please do feel free to check out my online profiles below and get in touch using the
              form.
            </p>
            <article className='flex gap-5'>
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24"><path fill="#33323D" d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"/></svg></a>
                {/* <a href=""><img src={twitter} alt="twitter" /></a> */}
                <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#33323D" d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"/></svg>
                </a>
                
            </article>
          </div>
        </div>

          <div className="grid md:grid-cols-2 gap-y-6 sm:gap-y-8">
            <h2
            data-aos="zoom-in" data-aos-duration="1500" 
            className='font-mono text-5xl text-extrabold'>Contact Me</h2>
          <ContactForm />
        </div>
      </div>
    </section>
      
      </main>
  )
}

export default Contact
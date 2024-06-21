import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import twitter from '../../assets/icons/twitter.svg'


const svgVariants = {
    initial:{rotate:-180},
    animate:{
      rotate: 0,
      transition:{duration:2}
    }
  }
function Footer() {
  return (
    <main className=" bg-darkGray border-2">
        <section className='container mx-auto lg:max-w-7xl mt-10 flex justify-between items-center  py-[3rem] flex-col md:flex-row gap-10 px-8'>
            <article className='flex flex-col items-center text-center justify-between gap-5 md:gap-10 md:flex-row'>
                <Link to="/" className="text-xl font-bold">
            <motion.svg
            variants={svgVariants}
            initial="initial"
            animate="animate"
            xmlns="http://www.w3.org/2000/svg" width="61" height="32"><path 
            fill="#fff" fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"/></motion.svg>
                </Link>

                <div className="flex flex-col md:flex-row gap-3">
                    <NavLink to="/" exact="true" className="text-white
                    hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200">
                        Home
                    </NavLink>
                    <NavLink to="/Portfolio" exact="true" className="text-white
                    hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200">
                        Portfolio
                    </NavLink>
                    
                    <NavLink  to="/contact" exact="true" className="text-white
                    hover:text-yellow text-xl font-mono tracking-wide transition-all duration-200">
                        contact
                    </NavLink>
                </div>
            </article>

            <article className='flex gap-5'>
                <a href="/"><img src={github} alt="github" /></a>
                {/* <a href=""><img src={twitter} alt="twitter" /></a> */}
                <a href="/">
                <img src={linkedin} alt="linkedin" />
                </a>
                
            </article>
        </section>
    </main>
  )
}

export default Footer
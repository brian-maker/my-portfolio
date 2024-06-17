import React from 'react'
import Cta from '../common/Cta'

function About() {
  return (
    <main id='about' className="container lg:max-w-7xl mx-auto pt-20 px-5">
      <section id="projects" className="p-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      {/* project 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsam quasi incidunt consequuntur eos vitae libero deserunt, quam unde aliquam alias quia dolorum dolores perspiciatis in iusto. A maxime fugit neque facere dicta odio laboriosam voluptatum tenetur quaerat mollitia explicabo doloremque expedita non aliquam veniam atque illum, deleniti molestias aliquid?.</p>
        </div>
        <div className="p-4 bg-white shadow-md">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p>Description of project 2.</p>
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

export default About
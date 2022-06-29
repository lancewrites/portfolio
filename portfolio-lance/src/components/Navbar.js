import React, { Component } from 'react'

class Navbar extends Component{
  render(){
    return(
      <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about"className="ml-3 text-xl hover:text-green-400">
            Lance Davis
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-red-400">
            Testimonials
          </a> */}
        </nav>
        <a
          href="https://github.com/lancewrites" 
          className="inline-flex text-white items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-2xl mt-4 md:mt-0 fa fa-github">
          
          {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
        </a>
        <a
        
          href="https://www.linkedin.com/in/lance-c-davis/" 
          className="inline-flex text-white items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-2xl mt-4 md:mt-0 fa fa-linkedin ">
          
          
        </a>
      </div>
    </header>
    )
  }
}
export default Navbar
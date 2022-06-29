import React, { Component } from 'react'

class About extends Component{
  render(){
    return(
        <section id="about">
        <div 
        className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          {/* <img src='https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_1280.jpg'></img> */}
        
          <div className=' h-100 w-full bg-cover bg-center p-24'>
            <h1 className="font-family:Arsenal sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm Lance.
              <br className="hidden lg:inline-block" />
              <br></br>
              Detail-oriented problem solver.
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a junior full-stack developer.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
               Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full border-blue-400 border-4"
              alt="hero"
              src="./Tango_BW-3.jpeg"
            />  
          </div>
        </div>
      </section>
    )
  }
}
export default About

// className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center
// lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center

// bg-[url("https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2487&q=80")]
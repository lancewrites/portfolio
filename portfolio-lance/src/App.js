import React, { Component } from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import "./index.css"


class App extends Component{
  render(){
    return(
      <>
      <main id='basefont' className='font-mono text-blue-300 bg-gray-800 body-font'>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      </main>
      </>
    )
  }
}

export default App;
// "text-gray-400 bg-gray-900 body-font"
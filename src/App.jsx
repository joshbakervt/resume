import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Footer from './components/footer/Footer.jsx'
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Contact from "./components/contact/Contact"

const App = () => {
    return(
        <>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
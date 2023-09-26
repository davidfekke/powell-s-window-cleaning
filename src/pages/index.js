import * as React from "react"
import NavBar from "../components/navbar.js"
import bugonly from "../images/bugonly.svg" 
import GeneratedWindow from "../images/GeneratedWindow.jpg"
import PowellsWindowCleaning from "../images/PowellsWindowCleaning.svg"

const pageStyles = {
  color: "#232129",
  
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main className="container" style={pageStyles}>
      <header className="w-full py-4 bg-blue-500">
        <nav className="container mx-auto flex items-center">
           <div className="blue-50">
              <a href="/">
                <img src={bugonly} alt="Powells Window Cleaning Logo" className="h-20 w-20" />
              </a>
           </div>
           <div className="sm:hidden">{/*  */}
                <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
           <NavBar className="hidden sm:flex"/>
        </nav>
    </header>
      <h1 className="text-4xl md:text-6xl font-bold m-6">
        Powell's Window Cleaning
      </h1>
      <p className="text-5xl text-center p-6 ml-12 mr-12">
        Are your windows clouded by grime and dust, obstructing your view of the world outside? <br />
        Look no further! Crystal Clear Windows is your trusted partner for pristine, <br />
        sparkling windows that bring the beauty of the outdoors back into your home or office.<br />
      </p>
      <img src={PowellsWindowCleaning} />
      <img src={GeneratedWindow} />
      
      <footer className="absolute absolute bottom-0">
        Copyright 2023 Powell's Window Cleaning 
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

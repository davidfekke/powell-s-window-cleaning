import * as React from "react"
import NavBar from "../components/navbar.js"
import bugonly from "../images/bugonly.svg" 
import GeneratedWindow from "../images/GeneratedWindow.jpg" 

const pageStyles = {
  color: "#232129",
  
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main className="container" style={pageStyles}>
      <header className="w-full py-4 bg-blue-500">
        <nav className="container mx-auto flex justify-between">
           <div className="blue-50">
              <a href="/">
                <img src={bugonly} alt="Powells Window Cleaning Logo" className="h-20 w-20" />
              </a>
           </div>
           <NavBar />
        </nav>
    </header>
      <h1 className="text-4xl md:text-6xl font-bold m-6">
        Powell's Window Cleaning
      </h1>
     
<img src={GeneratedWindow} />
      
      <footer>
        Copyright 2023 Powell's Window Cleaning 
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

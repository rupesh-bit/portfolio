  import Landing from "./components/landing"
  import Footer from "./components/footer"
  import Navbar from "./components/Navbar"
  import Project from "./components/Project"
import Anime from "./components/Anime"
import About from "./components/About"
import Sanime from "./components/Sanime"
  

  function App(params) {
  
    
    return(<>
    
     <div className="bg-blue-300  overflow-x-hidden  min-h-screen ">
        <div className="h-[24px] hidden md:block"><Navbar/></div>
        <Landing/>
        <Anime/>
        <Project/>
        <About/>
        <Sanime/>
        <Footer/>
        
     </div>
     </>
    )
    
  }
  export default App
  
  
  
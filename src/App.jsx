
import Navbar from './components/Navbar';
import Hero from './components/hero';
import About from "./components/about";
import Technologi from './components/Technologi';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contect from './components/Contect';
const App = () => {
  return (
    <div className=' overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-50 selection:text-cyan-900'>
      
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div class="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">

        </div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      
      
      
       <div className='container mx-auto px-8'>
       <Navbar />
       <Hero/>
       <About/>
       <Technologi/>
       <Experience/>
       <Projects/>
       <Contect/>
        </div>   
    </div>
  )
}

export default App

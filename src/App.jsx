
import About from './sections/About'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Interest from './sections/Interest'
import Navbar from './sections/Navbar'
import Project from './sections/Project'


const App = () => {

  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience />

    </main>
  )
}

export default App
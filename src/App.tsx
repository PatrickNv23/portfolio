import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Presentation from "./components/Presentation"
import ProjectList from "./components/ProjectList"
import Skills from "./components/Skills"

function App() {

  return (
    <>
      {/* <Header /> */}
      <main className="h-100vh">
        <Presentation />
        <About />
        <Experience />
        <Skills />
        {/* <ProjectList /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

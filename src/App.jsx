import Header from './components/Header'
import Footer from './components/Footer'
import javascriptLogo from './assets/javascript.svg' // exists in src folder, imported as a module
import viteLogo from '/vite.svg' // exists in public folder

export default function App() {
  const greeting = import.meta.env.VITE_GREETING
  
  return (
    <div>
      <Header />
      <h1>Hello React + Vite 🚀</h1>
      <h2>{greeting}</h2>
      <img src={javascriptLogo} className="logo" alt="JavaScript logo" />
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <Footer />
    </div>
  )
}

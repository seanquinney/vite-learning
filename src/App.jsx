import Header from './components/Header'
import Footer from './components/Footer'
import javascriptLogo from './assets/javascript.svg' // exists in src folder, imported as a module
import viteLogo from '/vite.svg' // exists in public folder
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
  const greeting = import.meta.env.VITE_GREETING

  const [ipAddress, setIpAddress] = useState("LOADING...")

  useEffect(() => {
    const fetchIpAddress = async () => {

      const apiUrl = import.meta.env.VITE_API_URL

      try {
        const response = await fetch(`${apiUrl}?format=json`);
        if (!response.ok) {
          throw new Error(`API! error: ${response.status}`);
        }
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        setIpAddress("NOT AVAILABLE");
        console.error("Error fetching IP address:", error);
      };
    }

    fetchIpAddress();
  }, [])

  return (
    <div>
      <Header />
      <h1>Hello React + Vite 🚀</h1>
      <h2>{greeting}</h2>
      <h3>{ipAddress}</h3>
      <img src={javascriptLogo} className="logo" alt="JavaScript logo" />
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <Footer />
    </div>
  )
}

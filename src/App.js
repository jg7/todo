import './App.css';
import MyInfo from './components/Main/MyInfo'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React from "react"
import Spinner from './spinner.gif'
import { useState, useEffect } from 'react'

const App = () => {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  });

  return (
    <div className="container">
      <Header />
      <div>
        {isLoading ? <img alt="loading" src={Spinner} /> :
          <MyInfo className="main" />}
      </div>
      <Footer />
    </div>
  )

}

export default App;

// rm -rf node_modules && rm ./package-lock.json && npm install
import React from 'react'
import Home from './home'
import Header from './Header'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <div className="header bg-yellow-300 h-28 text-center " >
        <Header data="This is header"/>
      </div>
      <div className="home bg-lime-500 h-96 text-center ">
        <Home data = " This is home"/>
      </div>
      <div className="footer bg-green-900 h-60 text-center ">
        <Footer data = "This is footer"/>
      </div>
    </div>
  )
}

export default App
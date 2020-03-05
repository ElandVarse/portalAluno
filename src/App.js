import React from 'react';
import './app.css'
import Header from './Components/Header/header.js'
import Main from './Components/Main/main.js'
import Footer from './Components/Footer/footer.js'


const App = () =>(
  <div className='App'>
    <div class='sidebarMargin'></div>
    <Header />
    <Main />
    <Footer />
  </div>
  )

export default App;

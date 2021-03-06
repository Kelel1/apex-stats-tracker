import React from 'react'
import Background from '../images/bangalore.png'
import Logo from '../images/apex.png'
import Form from './Form'

const bangaloreStyle = {
  position: "fixed",
  padding: 0,
  margin: 0,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: "-1",
  backgroundImage: `url(${Background})`  
}
const apexLogo = {
  position: "fixed",
  opacity: "0.3",
  top: 0,
  left: 0,
  width: "20%",
  height: "27%",
  backgroundImage: `url(${Logo})`  
}
const App = () => (
  <div>
    <section style={ bangaloreStyle }></section>
    <section style={ apexLogo }></section>       
    <Form/>
  </div>
  
)

export default App
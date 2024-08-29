import { useState } from 'react'
import './index.css'

function Square1(){
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)

  const toggleVisibility = (event) => {
    event.preventDefault()
    setIsVisible(!isVisible)
  }

  const toggleVisibility2 = (event) => {
    event.preventDefault();
    setIsVisible2(!isVisible2);
  };

  return (
    <div className="image-info-container">
      <div className="image-info-item">
        <div className="image-container">
            <img src="./images/person.jpeg" alt="Imagem 1" className="background-image"/>
            <img src="./images/person.jpeg" alt="Imagem 1" className="foreground-image"/>
        </div>
        <div className="info">
            <h3>Nome Corretor</h3>
            <p>3.000 pontos</p>
            <a href='#' onClick={toggleVisibility}>ver telefone: </a>
            {isVisible && (
              <a href='#' onClick={toggleVisibility}>(17) 99735-9666</a>
            )}
        </div>
      </div>
      <div className="image-info-item">
        <div className="image-container">
            <img src="./images/person2.jpeg" alt="Imagem 2" className="background-image"/>
            <img src="./images/person2.jpeg" alt="Imagem 2" className="foreground-image"/>
        </div>
        <div className="info">
            <h3>Nome Corretora</h3>
            <p>1.260 pontos</p>
            <a href='#' onClick={toggleVisibility2}>ver telefone: </a>
            {isVisible2 && (
              <a href='#' onClick={toggleVisibility2}>(17) 99889-9666</a>
            )}
        </div>
      </div>
    </div>
    )

}
export default Square1
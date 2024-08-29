import { useState } from 'react'
import './index.css'
function Footer() {
    
    return (
       <footer className='footer'>        
            <div className='footer-left'>
                <ul className='footer-links'>
                    <li>Termos</li>
                    <li>Contatos</li>
                    <li>Sobre</li>
                </ul>
            </div>
            <div className='footer-right'>
                <p>&copy; Copyright 2022. Todos os direitos reservados.</p>
                <img src="/images/logo-imovel-guide.png"
                    alt="Logo"
                    className="footer-logo"/>
            </div>
       </footer>
    )
}
export default Footer
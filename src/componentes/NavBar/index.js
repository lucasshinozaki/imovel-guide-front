import { useState } from 'react'
import './index.css'
function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }
    return (
        <div>
            <nav className="navbar">
                <div className="nav-left">
                    <img src="/images/logo-imovel-guide.png"
                    alt="Logo"
                    className="nav-logo"/>
                    <ul className="nav-menu">
                        <li>Condomínio</li>
                        <li>Fórum</li>
                        <li>Guia</li>
                        <li>Artigo</li>
                        <li>Ferramentas</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-menu">
                        <li>Cotar Imóvel</li>
                        <li>Plano</li>
                        <li>Entrar</li>
                    </ul>
                    <a href='#' className='nav-button'>CADASTRE-SE</a>
                </div>
                <div className="hamburger-menu" onClick={toggleSidebar}>
                    &#9776; 
                </div>
            </nav>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <ul className="sidebar-menu">
                    <li>Condomínio</li>
                    <li>Fórum</li>
                    <li>Guia</li>
                    <li>Artigo</li>
                    <li>Ferramentas</li>
                    <li>Cotar Imóvel</li>
                    <li>Plano</li>
                    <li>Entrar</li>
                    <li>Cadastre-se</li>
                </ul>
            </div>
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </div>
        
    )
}
export default NavBar
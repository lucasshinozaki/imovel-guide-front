import { useState } from 'react'
import './index.css'

function Square4(){

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

  return (
    <><div className="image-background">
      </div>
      <button className="modal-button" onClick={openModal}>ABRIR IMAGEM NO MODAL</button>
        {isModalOpen && (
            <>
                <div className='modal-overlay' onClick={closeModal}></div>
                <div className='modal'>
                    <div className='modal-container-button'>
                        <button onClick={closeModal}>X</button> <hr/>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/home.jpeg`} alt="home" />
                </div>
            </>
        )}  
      
    </>
      
    )

}
export default Square4
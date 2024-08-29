import { useRef, useState } from 'react'
import './index.css'
import html2canvas from 'html2canvas'

function Square5(){

    const captureRef = useRef(null)

    const handleDownload = () => {
        if(captureRef.current) {
            html2canvas(captureRef.current).then(canvas => {
                const link = document.createElement('a')
                link.href = canvas.toDataURL('./image/png')
                link.download = 'capture.png'
                link.click()
            })
        }
    }

  return (
    <>
        <div className="image-background" ref={captureRef}>
            <p className='orange-rtg'>Imovel Guide</p>
        </div>
        <button className="modal-button" onClick={handleDownload}>Download</button>
    </>
      
    )

}
export default Square5
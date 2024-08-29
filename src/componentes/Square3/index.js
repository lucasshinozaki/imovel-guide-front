import { useEffect, useState, useRef } from 'react';
import './index.css';

function Square3() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [n3, setN3] = useState('');
    const [n4, setN4] = useState('');

    const refn1 = useRef(null);
    const refn2 = useRef(null);
    const refn3 = useRef(null);
    const refn4 = useRef(null);
    
    const formatNumber = (value) => {
        const number = parseFloat(value)
        return number.toFixed(2)
    }
    
    useEffect(() => {
        if (n1 && n2 && n3) {
            setN4(formatNumber((n2 * n3) / n1));
        } else if (n1 && n2 && n4) {
            setN3(formatNumber((n1 * n4) / n2));
        } else if (n1 && n3 && n4) {
            setN2(formatNumber((n1 * n4) / n3));
        } else if (n2 && n3 && n4) {
            setN1(formatNumber((n2 * n3) / n4));
        }
    }, [n1, n2, n3, n4]);


    const handleInputChange = (setter) => (event) => {
        const inputValue = event.target.value
        if(inputValue === '' || (Number(inputValue) >=0 && !isNaN(Number(inputValue)))){
            setter(inputValue);
        }
    };

    const clearFields = () => {
        setN1('');
        setN2('');
        setN3('');
        setN4('');
    };

    return (
        <div className='calc'>
            <h2>Regra de 3</h2>
            <div className="input-grid">
                <div className='input-wrapper'>
                    <input 
                        type='number' 
                        value={n1}
                        ref={refn1}
                        min="0"
                        step="0.01" 
                        onChange={handleInputChange(setN1)}
                    />
                </div>
                <div className='input-wrapper'>
                    <input 
                        type='number' 
                        value={n2} 
                        ref={refn2}
                        min="0"
                        step="0.01" 
                        onChange={handleInputChange(setN2)}
                    />
                </div>
                <div className='input-wrapper'>
                    <input 
                        type='number' 
                        value={n3} 
                        ref={refn3}
                        min="0"
                        step="0.01" 
                        onChange={handleInputChange(setN3)}
                    />
                </div>
                <div className='input-wrapper'>
                    <input 
                        type='number' 
                        value={n4} 
                        ref={refn4}
                        min="0"
                        step="0.01" 
                        onChange={handleInputChange(setN4)}
                    />
                </div>
            </div>
            <button onClick={clearFields}>Limpar Campos</button>
        </div>
    );
}

export default Square3;
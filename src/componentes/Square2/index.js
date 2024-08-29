import InputMask from 'react-input-mask'
import './index.css'
import { useState } from 'react'


function Square2(){

    const [phone, setPhone] = useState('')
    const [cpf, setCpf] = useState('')
    const [subject, setSubject] = useState('')
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {}

        const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/
        if (!phone || !phoneRegex.test(phone)) {
            newErrors.phone = 'Telefone inválido. Deve estar no formato (99) 99999-9999'
        }

        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
        if (!cpf || !cpfRegex.test(cpf)) {
            newErrors.cpf = 'CPF inválido. Deve ser no formato 999.999.999-99'
        }
        if (!subject) {
            newErrors.subject = 'O assunto é obrigatório'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            alert(`Telefone: ${phone}\nCpf: ${cpf}\nAssunto: ${subject}`)
        }
    }

    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='form-group'>
                <h2>Mande uma mensagem: </h2>
                <InputMask  id="phone" 
                            mask="(99) 99999-9999" 
                            value={phone} 
                            placeholder='Digite seu telefone' 
                            onChange={(e) => setPhone(e.target.value)}>
                </InputMask>
                    {(inputProps) => <input {...inputProps} type='text'/>}
                    {errors.phone && <div className='error-message'>{errors.phone}</div>}
            </div>
            <div className='form-group'>
                <InputMask id="cpf"
                            mask="999.999.999-99"
                            value={cpf}
                            placeholder='Digite seu CPF'
                            onChange={(e) => setCpf(e.target.value)}>
                </InputMask>
                    {(inputProps) => <input {... inputProps} type='text'/>}
                    {errors.cpf && <div className='error-message'>{errors.cpf}</div>}
            </div>
            <div className='form-group'>
                <textarea 
                    type="text" 
                    id='subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder='Digite o assunto'></textarea>
                    {errors.subject && <div className='error-message'>{errors.subject}</div>}
            </div>
            <div className='form-group'>
                <button type='submit'>Enviar Mensagem</button>
            </div>
        </form>
        
    )

}
export default Square2
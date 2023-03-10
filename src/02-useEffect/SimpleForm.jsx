import React, {useEffect, useState} from 'react'
import Message from "./Message.jsx";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'aisaccito',
        email: 'contacto@isaacavila.xyz'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({...formState, [name]: value})
    }

    useEffect(() => {
        // console.log(`useeffect`)
    }, [])

    useEffect(() => {
        // console.log(`useeffect email`)
    }, [email])

    useEffect(() => {
        // console.log(`useeffect formState`)
    }, [formState])

    return (
        <>
            <h2 className='fs-5'>{'Formulario simple'}</h2>
            <br/>
            <input
                value={username}
                type='text'
                className='form-control'
                placeholder='Username'
                name='username'
                onChange={onInputChange}
            />
            <input
                value={email}
                type='email'
                className='form-control mt-2'
                placeholder='micorreo@dominio.com'
                name='email'
                onChange={onInputChange}
            />
            {
                username === 'isaac' && <Message/>
            }
        </>
    )
}

export default SimpleForm
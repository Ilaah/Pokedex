import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const Login = ({ setIsLogged }) => {

    const { handleSubmit, reset, register, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        console.log(data)
        dispatch(setNameGlobal(data.nameUser))
        reset({
            nameUser: ''
        })
        setIsLogged(true)
        navigate('/pokedex')
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='login'>
            <div className='login__form'>
                <input
                    placeholder='Type your trainer name'
                    type="text"
                    {...register('nameUser', {
                        required: {
                            value: true,
                            message: 'This field is required'
                        },
                        minLength: {
                            value: 4,
                            message: 'Introduce at least 4 characters'
                        },
                        maxLength: {
                            value: 15,
                            message: 'Type a maximum of 15 characters'
                        }
                    })} className='login__input' />
                <button className='login__btn'>▶</button>
            </div>
            {errors.nameUser && <p className='login__error'> {errors.nameUser.message} </p>}
        </form>
    )
}

export default Login
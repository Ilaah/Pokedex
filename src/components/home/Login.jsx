import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const Login = () => {

    const { handleSubmit, reset, register } = useForm()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const submit = data => {
        console.log(data)
        dispatch(setNameGlobal(data.nameUser))
        reset({
            nameUser: ''
        })
        navigate('/pokedex')
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='login'>
            <div className='login__form'>
                <input placeholder='Type your trainer name' type="text"  {...register('nameUser')} className='login__input' />
                <button className='login__btn'>▶</button>
            </div>
        </form>
    )
}

export default Login
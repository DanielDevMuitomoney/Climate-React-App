import React from 'react'


import {FcSearch} from 'react-icons/fc'
import './styles/Form.css'

const Form = () => {
  return (
    <form className='form-climate'>
      <input type="text" placeholder="Digite a nome do local" />
      <button className='button-search'>
        <FcSearch />
      </button>
    </form>
  )
}

export default Form
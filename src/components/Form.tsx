// import React, { useContext, useState } from 'react'
// import { AlertContext } from '../context/alert/alertContext'


export default function Form({onChange, value, onSubmit}: any) {

  return (
    <form onSubmit={onSubmit} >
        <input 
          type='text'
          className='from-control'
          placeholder='Ввыедите текст'
          value={value}
          onChange={e => onChange(e.target.value)}
        />
    </form>
  )
}

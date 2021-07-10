import React, { useContext, useState } from 'react'
// import { AlertContext } from '../context/alert/alertContext'

export default function Form() {

  
  // const alert = useContext(AlertContext)
  const [value, setValue] = useState('')

  const submitHandler = (event: any) =>{
    event.preventDefault()
    console.log(value);
  }


  return (
    <form onSubmit={submitHandler} >
        <input 
          type='text'
          className='from=cntrol'
          placeholder='Ввыедите текст'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
    </form>
  )
}

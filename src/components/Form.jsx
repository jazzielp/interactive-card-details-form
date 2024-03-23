import './Form.css'
import { ButtonPrincipal } from './ButtonPrincipal'
import { useState } from 'react'
export const Form = ({ dataCard, setDataCard }) => {
  const [dataCardRender, setDataCardRender] = useState()
  const handleSumit = (e) => {
    e.preventDefault()
    console.log('entra')
  }

  const handleChange = (e) => {
    const nameInput = e.target.id
    let valueInput = e.target.value

    if (nameInput === 'name' && valueInput.length > 25) {
      return null
    }

    if (nameInput === 'number') {
      const valueInpuArray = valueInput.split('')
      if (valueInpuArray.length === 4 || valueInpuArray.length === 8 || valueInpuArray.length === 12) {
        valueInpuArray.push('-')
      }
      valueInput = valueInpuArray.join('')
      console.log(valueInput)
    }

    const newData = {
      ...dataCard,
      [e.target.id]: valueInput
    }
    setDataCardRender(newData)
    setDataCard(newData)
  }

  return (
    <form onSubmit={(e) => handleSumit(e)} className='form-card'>
      <div className='form-card__name-container'>
        <label className='form-card__label' htmlFor='name'>CARDHOLDER NAME</label>
        <input className='form-card__input form-card__input-long' type='text' id='name' name='name' placeholder='e.g Jane Appleseed' onChange={(e) => handleChange(e)} value={dataCardRender ? dataCardRender.name : ''} />
        <span className='form-card__error hidden'>Wrong format, numbers only</span>
      </div>

      <div className='form-card__number-container'>
        <label className='form-card__label' htmlFor='number'>CARD NUMBER</label>
        <input className='form-card__input form-card__input-long' type='number' id='number' placeholder='e.g Jane Appleseed' onChange={(e) => handleChange(e)} value={dataCardRender ? dataCardRender.number : ''} />
        <span className='form-card__error hidden'>Wrong format, numbers only</span>
      </div>

      <div className='form-card__info-container'>
        <div className='form-card__date-container'>
          <label className='form-card__label' htmlFor='month'>EXP. DATE (MM/YY)</label>
          <div className='form-card__info-date'>
            <input className='form-card__input form-card__input-short' type='number' id='month' placeholder='MM' onChange={(e) => handleChange(e)} />
            <input className='form-card__input form-card__input-short' type='number' id='year' placeholder='YY' onChange={(e) => handleChange(e)} />
          </div>
          <span className='form-card__error hidden'>Can’t be blank</span>
        </div>
        <div className='form-card__security-code-container'>
          <label className='form-card__label' htmlFor='code'>CVC</label>
          <input className='form-card__input form-card__input-auto' type='number' id='code' placeholder='e.g. 123' onChange={(e) => handleChange(e)} />
          <span className='form-card__error hidden'>Can’t be blank</span>
        </div>
      </div>
      <div className='form-card__button-container'>
        <ButtonPrincipal text='Confirm' type='submit' />
      </div>
    </form>
  )
}

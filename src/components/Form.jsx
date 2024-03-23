import './Form.css'
import { ButtonPrincipal } from './ButtonPrincipal'
import { useRef, useState } from 'react'
export const Form = ({ dataCard, setDataCard }) => {
  const [dataCardRender, setDataCardRender] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    code: ''
  })
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)

  const handleSumit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const handleChange = (e) => {
    const nameInput = e.target.id
    let valueInput = e.target.value

    if (nameInput === 'name' && valueInput.length > 25) {
      return null
    }

    if (nameInput === 'number') {
      const valueInpuArray = valueInput.split('')
      if (valueInpuArray.length === 4 || valueInpuArray.length === 9 || valueInpuArray.length === 14) {
        valueInpuArray.push('-')
      }
      valueInput = valueInpuArray.join('').replace('-', ' ')
    }

    if (nameInput === 'number' && valueInput.length === 20) {
      return null
    }

    if (nameInput === 'month' && valueInput.length === 2) {
      input4Ref.current.focus()
    }

    if (nameInput === 'year' && valueInput.length === 2) {
      input5Ref.current.focus()
    }

    if (nameInput === 'code' && valueInput.length === 4) {
      return null
    }

    const newData = {
      ...dataCardRender,
      [e.target.id]: valueInput
    }

    setDataCardRender(newData)
    setDataCard(newData)
  }

  return (
    <form onSubmit={(e) => handleSumit(e)} className='form-card'>
      <div className='form-card__name-container'>
        <label className='form-card__label' htmlFor='name'>CARDHOLDER NAME</label>
        <input
          className='form-card__input form-card__input-long'
          type='text'
          id='name'
          name='name'
          placeholder='e.g Jane Appleseed'
          onChange={(e) => handleChange(e)}
          value={dataCardRender ? dataCardRender.name : ''}
          ref={input1Ref}
        />
        <span className='form-card__error hidden'>Wrong format, numbers only</span>
      </div>

      <div className='form-card__number-container'>
        <label className='form-card__label' htmlFor='number'>CARD NUMBER</label>
        <input
          className='form-card__input form-card__input-long'
          type='text'
          id='number'
          placeholder='e.g Jane Appleseed'
          onChange={(e) => handleChange(e)}
          value={dataCardRender ? dataCardRender.number : ''}
          ref={input2Ref}
        />
        <span className='form-card__error hidden'>Wrong format, numbers only</span>
      </div>

      <div className='form-card__info-container'>
        <div className='form-card__date-container'>
          <label className='form-card__label' htmlFor='month'>EXP. DATE (MM/YY)</label>
          <div className='form-card__info-date'>
            <input
              className='form-card__input form-card__input-short'
              type='number'
              id='month'
              placeholder='MM'
              onChange={(e) => handleChange(e)}
              ref={input3Ref}
            />
            <input
              className='form-card__input form-card__input-short'
              type='number'
              id='year'
              placeholder='YY'
              onChange={(e) => handleChange(e)}
              ref={input4Ref}

            />
          </div>
          <span className='form-card__error hidden'>Can’t be blank</span>
        </div>
        <div className='form-card__security-code-container'>
          <label className='form-card__label' htmlFor='code'>CVC</label>
          <input
            className='form-card__input form-card__input-auto'
            type='number'
            id='code'
            placeholder='e.g. 123'
            onChange={(e) => handleChange(e)}
            ref={input5Ref}
            value={dataCardRender ? dataCardRender.code : ''}

          />
          <span className='form-card__error hidden'>Can’t be blank</span>
        </div>
      </div>
      <div className='form-card__button-container'>
        <ButtonPrincipal text='Confirm' type='submit' />
      </div>
    </form>
  )
}

import './Form.css'
import { ButtonPrincipal } from './ButtonPrincipal'
import { useRef, useState } from 'react'
export const Form = ({ dataCard, setDataCard, handleComplete }) => {
  const [dataCardRender, setDataCardRender] = useState({
    name: {
      text: '',
      error: null
    },
    number: {
      text: '',
      error: null
    },
    month: {
      text: '',
      error: null
    },
    year: {
      text: '',
      error: null
    },
    code: {
      text: '',
      error: null
    }
  })
  const input1Ref = useRef(null)
  const input2Ref = useRef(null)
  const input3Ref = useRef(null)
  const input4Ref = useRef(null)
  const input5Ref = useRef(null)

  const handleSumit = (e) => {
    e.preventDefault()
    const newDataCard = { ...dataCardRender }
    const inputName = input1Ref
    const errorName = isInputEmpty(inputName.current.value)
    newDataCard.name.error = errorName

    const regexName = /^[a-zA-Z\s]{1,25}$/
    if (!newDataCard.name.error && !regexName.test(inputName.current.value)) {
      newDataCard.name.error = 'Wrong format, letters only'
    }

    const inputNumber = input2Ref
    const errorNumber = isInputEmpty(inputNumber.current.value)
    newDataCard.number.error = errorNumber

    if (!newDataCard.number.error && inputNumber.current.value.length !== 19) {
      newDataCard.number.error = 'Wrong format, incomplete digits. Must be 16 digits'
    }

    const regexNumber = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/
    if (!newDataCard.number.error && !regexNumber.test(inputNumber.current.value)) {
      newDataCard.number.error = 'Wrong format, numbers only'
    }

    const regexMonth = /^\d{2}$/
    const inputMonth = input3Ref
    const errorMonth = isInputEmpty(inputMonth.current.value)
    newDataCard.month.error = errorMonth

    if (!newDataCard.month.error && !regexMonth.test(inputMonth.current.value)) {
      newDataCard.month.error = 'Wrong format, numbers only'
    }

    const inputYear = input4Ref
    const errorYear = isInputEmpty(inputYear.current.value)
    newDataCard.year.error = errorYear

    if (!newDataCard.year.error && !regexMonth.test(inputYear.current.value)) {
      newDataCard.year.error = 'Wrong format, numbers only'
    }

    const regexCode = /^\d{3}$/
    const inputCode = input5Ref
    const errorCode = isInputEmpty(inputCode.current.value)
    newDataCard.code.error = errorCode

    if (!newDataCard.code.error && inputCode.current.value.length !== 3) {
      newDataCard.code.error = 'Wrong format, incomplete digits. Must be 3 digits'
    }

    if (!newDataCard.code.error && !regexCode.test(inputCode.current.value)) {
      newDataCard.code.error = 'Wrong format, numbers only'
    }

    setDataCardRender(newDataCard)
    setDataCard(newDataCard)

    if (newDataCard.name.error === undefined && newDataCard.number.error === undefined && newDataCard.month.error === undefined && newDataCard.year.error === undefined && newDataCard.code.error === undefined) {
      handleComplete()
    }
  }

  const isInputEmpty = (value) => {
    if (value === '') {
      return 'Can’t be blank'
    }
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

    if (nameInput === 'month' && valueInput.length > 2) {
      input4Ref.current.focus()
      return null
    }

    if (nameInput === 'year' && valueInput.length > 2) {
      input5Ref.current.focus()
      return null
    }

    if (nameInput === 'code' && valueInput.length === 4) {
      return null
    }

    const newData = {
      ...dataCardRender,
      [e.target.id]: {
        text: valueInput,
        error: null
      }
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
          value={dataCardRender ? dataCardRender.name.text : ''}
          ref={input1Ref}
        />
        <span className='form-card__error'>{dataCardRender.name.error && dataCardRender.name.error}</span>
      </div>

      <div className='form-card__number-container'>
        <label className='form-card__label' htmlFor='number'>CARD NUMBER</label>
        <input
          className='form-card__input form-card__input-long'
          type='text'
          id='number'
          placeholder='e.g Jane Appleseed'
          onChange={(e) => handleChange(e)}
          value={dataCardRender ? dataCardRender.number.text : ''}
          ref={input2Ref}
        />
        <span className='form-card__error'>{dataCardRender.number.error && dataCardRender.number.error}</span>
      </div>

      <div className='form-card__info-container'>
        <div className='form-card__date-container'>
          <label className='form-card__label' htmlFor='month'>EXP. DATE (MM/YY)</label>
          <div className='form-card__info-date'>
            <input
              className='form-card__input form-card__input-short'
              type='text'
              id='month'
              placeholder='MM'
              onChange={(e) => handleChange(e)}
              ref={input3Ref}
              value={dataCardRender ? dataCardRender.month.text : ''}
            />
            <input
              className='form-card__input form-card__input-short'
              type='text'
              id='year'
              placeholder='YY'
              onChange={(e) => handleChange(e)}
              ref={input4Ref}
              value={dataCardRender ? dataCardRender.year.text : ''}
            />
          </div>
          <span className='form-card__error'>{dataCardRender.month.error ? dataCardRender.month.error : dataCardRender.year.error && dataCardRender.year.error}</span>
        </div>
        <div className='form-card__security-code-container'>
          <label className='form-card__label' htmlFor='code'>CVC</label>
          <input
            className='form-card__input form-card__input-auto'
            type='text'
            id='code'
            placeholder='e.g. 123'
            onChange={(e) => handleChange(e)}
            ref={input5Ref}
            value={dataCardRender ? dataCardRender.code.text : ''}

          />
          <span className='form-card__error'>{dataCardRender.code.error && dataCardRender.code.error}</span>
        </div>
      </div>
      <div className='form-card__button-container'>
        <ButtonPrincipal text='Confirm' type='submit' />
      </div>
    </form>
  )
}

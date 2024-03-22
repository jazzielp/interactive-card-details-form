import './Form.css'
import { ButtonPrincipal } from './ButtonPrincipal'
export const Form = () => {
  return (
    <form className='form-card'>
      <div className='form-card__name-container'>
        <label className='form-card__label' htmlFor='name'>CARDHOLDER NAME</label>
        <input className='form-card__input form-card__input-long' type='text' name='name' placeholder='e.g Jane Appleseed' />
        <span className='form-card__error hidden'>Wrong format, numbers only</span>
      </div>

      <div className='form-card__number-container'>
        <label className='form-card__label' htmlFor='number'>CARD NUMBER</label>
        <input className='form-card__input form-card__input-long' type='number' name='name' placeholder='e.g Jane Appleseed' />
        <span className='form-card__error hidden'>Wrong format, numbers only</span>
      </div>

      <div className='form-card__info-container'>
        <div className='form-card__date-container'>
          <label className='form-card__label' htmlFor='date-month'>EXP. DATE (MM/YY)</label>
          <div className='form-card__info-date'>
            <input className='form-card__input form-card__input-short' type='number' name='date-month' placeholder='MM' />
            <input className='form-card__input form-card__input-short' type='number' name='date-year' placeholder='YY' />
          </div>
          <span className='form-card__error hidden'>Can’t be blank</span>
        </div>
        <div className='form-card__security-code-container'>
          <label className='form-card__label' htmlFor='date-security-code'>CVC</label>
          <input className='form-card__input form-card__input-auto' type='number' name='date-security-code' placeholder='e.g. 123' />
          <span className='form-card__error hidden'>Can’t be blank</span>
        </div>
      </div>
      <div className='form-card__button-container'>
        <ButtonPrincipal text='Confirm' />
      </div>
    </form>
  )
}

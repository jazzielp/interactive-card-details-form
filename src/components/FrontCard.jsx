import './FrontCard.css'
import IconCard from '../icons/card-logo.svg'
export const FrontCard = () => {
  return (
    <div className='front-card'>
      <div className='front-card__icon-container'>
        <img className='front-card__icon-primary' src={IconCard} alt='Icon card' />
      </div>
      <div className='front-card__number-card-container'>
        <p className='front-card__number-card'>9591  6589  6389  1011</p>
      </div>
      <div className='front-card__info-container'>
        <p className='front-card__name'>JANE APPLESEED</p>
        <p className='front-card__data'>00/00</p>
      </div>
    </div>
  )
}

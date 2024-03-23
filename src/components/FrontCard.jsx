import './FrontCard.css'
import IconCard from '../icons/card-logo.svg'
export const FrontCard = ({ name, number, month, year }) => {
  const upperName = name.text.toUpperCase()
  return (
    <div className='front-card'>
      <div className='front-card__icon-container'>
        <img className='front-card__icon-primary' src={IconCard} alt='Icon card' />
      </div>
      <div className='front-card__number-card-container'>
        <p className='front-card__number-card'>{number.text}</p>
      </div>
      <div className='front-card__info-container'>
        <p className='front-card__name'>{upperName}</p>
        <p className='front-card__data'>{month.text}/{year.text}</p>
      </div>
    </div>
  )
}

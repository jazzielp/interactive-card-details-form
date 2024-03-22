import './FrontCard.css'
import IconCard from '../icons/card-logo.svg'
export const FrontCard = ({ name, number = '0000 0000 0000 0000', month = '00', year = '00' }) => {
  const upperName = name.toUpperCase()
  return (
    <div className='front-card'>
      <div className='front-card__icon-container'>
        <img className='front-card__icon-primary' src={IconCard} alt='Icon card' />
      </div>
      <div className='front-card__number-card-container'>
        <p className='front-card__number-card'>{number}</p>
      </div>
      <div className='front-card__info-container'>
        <p className='front-card__name'>{upperName}</p>
        <p className='front-card__data'>{month}/{year}</p>
      </div>
    </div>
  )
}

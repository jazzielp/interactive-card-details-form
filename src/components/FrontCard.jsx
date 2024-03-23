import './FrontCard.css'
import IconCard from '../icons/card-logo.svg'
export const FrontCard = ({ name, number, month, year }) => {
  const upperName = name.text ? name.text.toUpperCase() : 'JANE APPLESEED'
  return (
    <div className='front-card'>
      <div className='front-card__icon-container'>
        <img className='front-card__icon-primary' src={IconCard} alt='Icon card' />
      </div>
      <div className='front-card__number-card-container'>
        <p className='front-card__number-card'>{number.text ? number.text : '0000 0000 0000 0000'}</p>
      </div>
      <div className='front-card__info-container'>
        <p className='front-card__name'>{upperName}</p>
        <p className='front-card__data'>{month.text ? month.text : '00'}/{year.text ? year.text : '00'}</p>
      </div>
    </div>
  )
}

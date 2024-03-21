export const FrontCard = () => {
  return (
    <div className='front-card'>
      <div className='front-card__icon-container'>
        <img className='front-card__icon-primary' src='../icons/card-logo.svg' alt='Icon card' />
        <div className='front-card__icon-second' />
      </div>
      <div className='front-card__number-card-container'>
        <p className='front-card__number-card'>0000 0000 0000 0000</p>
      </div>
      <div className='front-card__info-container'>
        <p className='front-card__name'>JANE APPLESEED</p>
        <p className='front-card__data'>00/00</p>
      </div>
    </div>
  )
}

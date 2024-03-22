import { FrontCard } from './FrontCard'
import { BackCard } from './BackCard'
import './Header.css'
export const Header = ({ dataCard }) => {
  const { name, number, month, year, code } = dataCard
  return (
    <header className='header'>
      <div className='header__card-container'>
        <div className='header__frontCard-container'>
          <BackCard code={code} />
        </div>
        <div className='header__backCard-container'>
          <FrontCard name={name} number={number} month={month} year={year} />
        </div>
      </div>
    </header>
  )
}

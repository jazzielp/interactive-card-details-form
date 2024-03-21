import { FrontCard } from './FrontCard'
import { BackCard } from './BackCard'
import './Header.css'
export const Header = () => {
  return (
    <header className='header'>
      <div className='header__card-container'>
        <div className='header__frontCard-container'>
          <BackCard />
        </div>
        <div className='header__backCard-container'>
          <FrontCard />
        </div>
      </div>
    </header>
  )
}

import { ButtonPrincipal } from './ButtonPrincipal'
import IconComplete from '../icons/icon-complete.svg'
import './Thanks.css'
export const Thanks = () => {
  return (
    <article className='thanks'>
      <img className='thanks__img' src={IconComplete} alt='Icon complete' />
      <h2 className='thanks__title'>TANK YOU!</h2>
      <p className='thanks__paragraph'>We’ve added your card details</p>
      <ButtonPrincipal text='Continue' />
    </article>
  )
}

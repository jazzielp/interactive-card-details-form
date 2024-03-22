import { ButtonPrincipal } from './ButtonPrincipal'
const IconComplete = '../icons/icon-complete.svg'
export const Thanks = () => {
  return (
    <article>
      <img src={IconComplete} alt='Icon complete' />
      <h2>TANK YOU!</h2>
      <p>We’ve added your card details</p>
      <ButtonPrincipal />
    </article>
  )
}

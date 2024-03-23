import './Backcard.css'
export const BackCard = ({ code }) => {
  return (
    <div className='back-card'>
      <p className='back-card__security-code'>{code.text}</p>
    </div>
  )
}

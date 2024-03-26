import './ButtonPrincipal.css'
export const ButtonPrincipal = ({ text, type, handleComplete }) => {
  return (
    <button type={type} onClick={() => handleComplete()}>{text}</button>
  )
}

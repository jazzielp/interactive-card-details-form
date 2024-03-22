import './ButtonPrincipal.css'
export const ButtonPrincipal = ({ text, handleClick, type }) => {
  return (
    <button type={type} onClick={handleClick ? () => handleClick() : null}>{text}</button>
  )
}

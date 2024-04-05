import { useState } from 'react'

export const useCard = ({ cardJson }) => {
  // This state helps us to make the rendering of the Thanks component work.
  const [isComplete, setIsComplete] = useState(false)
  const [dataCard, setDataCard] = useState(cardJson)

  // It is used to simulate that the form was submitted and to be able to render a thank you message
  const handleComplete = () => {
    setIsComplete(!isComplete)
    setDataCard(cardJson)
  }

  return { dataCard, handleComplete, isComplete, setDataCard }
}

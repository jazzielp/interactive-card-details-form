import { Header } from './components/Header'
import { Form } from './components/Form'
import { Thanks } from './components/Thanks'
import { useState } from 'react'
export function App () {
  // Json to render information in the card preview
  const cardJson = {
    name: {
      text: null,
      error: null
    },
    number: {
      text: null,
      error: null
    },
    month: {
      text: null,
      error: null
    },
    year: {
      text: null,
      error: null
    },
    code: {
      text: null,
      error: null
    }
  }

  // This state helps us to make the rendering of the Thanks component work.
  const [isComplete, setIsComplete] = useState(false)
  const [dataCard, setDataCard] = useState(cardJson)

  // It is used to simulate that the form was submitted and to be able to render a thank you message
  const handleComplete = () => {
    setIsComplete(!isComplete)
    setDataCard(cardJson)
  }

  return (
    <>
      <Header dataCard={dataCard} />
      <main>
        {isComplete ? <Thanks handleComplete={handleComplete} /> : <Form dataCard={dataCard} setDataCard={setDataCard} handleComplete={handleComplete} />}
      </main>
    </>
  )
}

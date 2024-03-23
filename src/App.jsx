import { Header } from './components/Header'
import { Form } from './components/Form'
import { Thanks } from './components/Thanks'
import { useState } from 'react'
export function App () {
  const cardJson = {
    name: {
      text: 'JANE APPLESEED',
      error: null
    },
    number: {
      text: '0000 0000 0000 0000',
      error: null
    },
    month: {
      text: '00',
      error: null
    },
    year: {
      text: '00',
      error: null
    },
    code: {
      text: '000',
      error: null
    }
  }

  const [isComplete, setIsComplete] = useState(false)
  const [dataCard, setDataCard] = useState(cardJson)

  const handleComplete = () => {
    setIsComplete(!isComplete)
  }

  return (
    <>
      <Header dataCard={dataCard} />
      <main>
        {isComplete ? <Thanks handleComplete={handleComplete} /> : <Form dataCard={dataCard} setDataCard={setDataCard} />}
      </main>
    </>
  )
}

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Thanks } from './components/Thanks'
import { useState } from 'react'
export function App () {
  const cardJson = {
    name: 'JANE APPLESEED',
    number: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    code: '000'
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

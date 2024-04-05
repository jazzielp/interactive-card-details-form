import { Header } from './components/Header'
import { Form } from './components/Form'
import { Thanks } from './components/Thanks'
import { cardJson } from './consts/const.js'
import { useCard } from './hooks/useCard'
export function App () {
  const { dataCard, handleComplete, isComplete, setDataCard } = useCard({ cardJson })
  return (
    <>
      <Header dataCard={dataCard} />
      <main>
        {isComplete ? <Thanks handleComplete={handleComplete} /> : <Form dataCard={dataCard} setDataCard={setDataCard} handleComplete={handleComplete} />}
      </main>
    </>
  )
}

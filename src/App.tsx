/* eslint-disable @typescript-eslint/no-misused-promises */
import { useCatData } from './hooks/useCatData'
import { Spinner } from './Components/Spinner'

interface Cat {
  catUrl?: string
  loading?: boolean
  getCat?: Promise<void>
}

function App (): JSX.Element {
  const { catUrl, loading, getCat }: Cat = useCatData() // this line throws me an error and idk how to solve it. i hate you ts

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const inputCat = new FormData(e.target)
    const query = inputCat.get('query')
    // const cat = await catData(query)
    if (getCat instanceof Function) {
      getCat(query)
    }
  }

  return (
    <div className='bg-gray-50 h-screen w-screen flex flex-col items-center overflow-hidden'>
      <h1 className='text-pink-500 text-center text-3xl font-serif pt-4'>Random Cat</h1>
      <form onSubmit={handleSubmit} className='mb-10'>
        <input placeholder='Hello...' name='query' className='border-black border rounded-sm px-1 py-0.5  placeholder:p-0.5' />
        <button type='submit' className='ml-2 bg-pink-500 text-white px-2 py-1 hover:bg-pink-400 duration-200 rounded-md'>Generate</button>
      </form>
      {loading === true
        ? <Spinner />
        : <img className='w-[600px] h-[600px]' src={catUrl} />}

    </div>
  )
}

export default App

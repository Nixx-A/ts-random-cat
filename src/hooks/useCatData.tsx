import { useState } from 'react'
import { catData } from '../services/catData'

export function useCatData (): object {
  const [catUrl, setCatUrl] = useState('https://cataas.com/cat')
  const [loading, setLoading] = useState(false)

  const getCat = async (text: string): Promise<void> => {
    try {
      setLoading(true)
      const cat = await catData(text)
      setCatUrl(cat)
    } catch (e: any) {
      throw new Error(e)
    } finally {
      setLoading(false)
    }
  }

  return { catUrl, loading, getCat }
}

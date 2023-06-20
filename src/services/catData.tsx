/* eslint-disable @typescript-eslint/no-base-to-string */
const BASE_URL = 'https://cataas.com/cat'

export async function catData (text: string): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/says/${text}`)
    console.log(res.url)
    return res.url
  } catch (e: any) {
    throw new Error(e)
  }
}

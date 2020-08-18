import { useState, useEffect } from 'react'

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem('theme')

    if (storage) {
      return storage
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export default usePersistedState
import { useEffect, useRef } from 'react'

const getItem = (key, initialValue) => {
  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  } catch (error) {
    console.log(error)
    return initialValue
  }
}

const setItem = (key, value, storedValue) => {
  // Allow value to be a function so we have same API as useState
  const valueToStore = value instanceof Function ? value(storedValue) : value

  window.localStorage.setItem(key, JSON.stringify(valueToStore))
}

export default function useLocalStorage(key, initialValue) {
  const ref = useRef(initialValue)

  useEffect(() => {
    ref.current = getItem(key, initialValue)
  }, [key])

  const set = value => setItem(key, value, ref.current)

  return [ref.current, set]
}

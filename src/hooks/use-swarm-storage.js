import { useEffect, useState } from 'react'
import deepEqual from 'deep-equal'
import mainframe from '../services/mainframe'

export default function useSwarmStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue)

  const getItem = async (key, initialValue) => {
    try {
      const item = await mainframe.storage.get(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  const setItem = async (key, value, storedValue) => {
    // Allow value to be a function so we have same API as useState
    const valueToStore = value instanceof Function ? value(storedValue) : value

    if (!deepEqual(value, storedValue)) {
      setValue(value)
      try {
        await mainframe.storage.set(key, JSON.stringify(valueToStore))
      } catch (err) {
        console.error(err)
      }
    }
  }

  useEffect(() => {
    ;(async () => {
      setValue(await getItem(key, initialValue))
    })()
  }, [key, initialValue])

  const set = v => setItem(key, v, value)

  return [value, set]
}

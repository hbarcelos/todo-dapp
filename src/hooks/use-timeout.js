import { useEffect } from 'react'
import useTimeout from '@rooks/use-timeout'

export default (callback, timeout) => {
  const { start, clear } = useTimeout(callback, timeout)

  // Fires only once
  useEffect(start, [])

  return clear
}

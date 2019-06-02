import { useRef, useEffect, useState } from 'react'
import mainframe from '../services/mainframe'
import useTimeout from './use-timeout'

export default function useEthAccount() {
  const [account, setAccount] = useState('')

  const setDefaultAccount = async () => {
    setAccount(await mainframe.ethereum.getDefaultAccount())
  }

  useEffect(() => {
    setDefaultAccount()
  }, [])

  // useEffect(() => {
  //   mainframe.ethereum.on('networkChanged', setDefaultAccount)
  //   mainframe.ethereum.on('accountsChanged', setDefaultAccount)
  // }, [])

  return account
}

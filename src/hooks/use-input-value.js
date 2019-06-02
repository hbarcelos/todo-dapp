import { useState } from 'react'

export default function useInputValue(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    changeInput: evt => setValue(evt.target.value),
    clearInput: () => setValue(''),
    handleKey: callback => evt => {
      if (evt.which === 13 || evt.keyCode === 13) {
        callback(value)
        return true
      }

      return false
    }
  }
}

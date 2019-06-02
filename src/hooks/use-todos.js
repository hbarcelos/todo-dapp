import { useState } from 'react'
import cuid from 'cuid'

export default function useTodos(initialValue = {}) {
  const [todos, setTodos] = useState(initialValue)

  return {
    todos,
    setTodos,
    addTodo: text => {
      if (text.trim() !== '') {
        const id = cuid()
        setTodos(
          Object.assign({}, todos, {
            [id]: {
              id,
              text,
              checked: false
            }
          })
        )
      }
    },
    checkTodo: id => {
      const { [id]: data } = todos

      if (data !== undefined) {
        setTodos(
          Object.assign({}, todos, {
            [id]: {
              ...data,
              checked: !data.checked
            }
          })
        )
      }
    },
    removeTodo: id => {
      const { [id]: data, ...rest } = todos

      if (data !== undefined) {
        setTodos(rest)
      }
    }
  }
}

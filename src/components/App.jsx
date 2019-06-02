import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import useInterval from '@rooks/use-interval'
import useInputValue from '../hooks/use-input-value'
import useTodos from '../hooks/use-todos'
import useEthAccount from '../hooks/use-eth-account'
import useSwarmStoraage from '../hooks/use-swarm-storage'
import Layout from './Layout.jsx'
import AddTodo from './Todo/Add.jsx'
import TodoList from './Todo/List.jsx'

const defaultTodos = {}
export default function App() {
  const { value, changeInput, clearInput, handleKey } = useInputValue()
  const account = useEthAccount()
  const [storedTodos, setStoredTodos] = useSwarmStoraage(account, defaultTodos)
  const { todos, setTodos, addTodo, checkTodo, removeTodo } = useTodos(
    storedTodos
  )

  // Resets TODOs whenever there's a change on stored TODOs
  useEffect(() => {
    setTodos(storedTodos)
  }, [storedTodos])

  // Stores TODOs in Swarm every 5 seconds
  useInterval(() => setStoredTodos(todos), 5000, true)

  const addTodoAndClearInput = () => {
    addTodo(value)
    clearInput()
  }

  const handleInputKeyPress = handleKey(addTodoAndClearInput)

  return (
    <React.Fragment>
      <CssBaseline />
      <Layout account={account}>
        <AddTodo
          inputValue={value}
          onInputChange={changeInput}
          onButtonClick={addTodoAndClearInput}
          onInputKeyPress={handleInputKeyPress}
        />
        <TodoList
          items={Object.values(todos)}
          onItemCheck={checkTodo}
          onItemRemove={removeTodo}
        />
      </Layout>
    </React.Fragment>
  )
}

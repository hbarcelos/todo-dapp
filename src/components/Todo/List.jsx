import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { List, Paper } from '@material-ui/core'
import TodoListItem from './ListItem'

export const TodoList = props => (
  <React.Fragment>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{}}>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={todo.id}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(todo.id)}
              onCheckboxToggle={() => props.onItemCheck(todo.id)}
            />
          ))}
        </List>
      </Paper>
    )}
  </React.Fragment>
)

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onItemRemove: PropTypes.func.isRequired,
  onItemCheck: PropTypes.func.isRequired
}

TodoList.defaultProps = {
  items: []
}

export default memo(TodoList)

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  ListItem,
  Checkbox,
  Icon,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import noop from '../../utils/noop'

const withTextStyles = withStyles({
  checked: {
    textDecoration: 'line-through'
  }
})

export const TodoListItem = withTextStyles(props => (
  <ListItem divider={props.divider}>
    <Checkbox
      data-id={props.id}
      onClick={props.onCheckboxToggle}
      checked={props.checked}
      disableRipple
    />
    <ListItemText
      primary={props.text}
      className={clsx({ [props.classes.checked]: props.checked })}
    />
    <ListItemSecondaryAction>
      <IconButton
        color="secondary"
        aria-label="Delete Todo"
        data-id={props.id}
        onClick={props.onButtonClick}>
        <Icon color="error">delete_outlined</Icon>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
))

TodoListItem.propTypes = {
  divider: PropTypes.bool,
  checked: PropTypes.bool,
  onCheckboxToggle: PropTypes.func,
  onButtonClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

TodoListItem.defaultProps = {
  divider: false,
  checked: false,
  onCheckboxToggle: noop,
  onButtonClick: noop
}

export default memo(TodoListItem)

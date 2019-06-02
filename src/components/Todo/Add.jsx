import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { TextField, Paper, Button, Grid } from '@material-ui/core'
import noop from '../../utils/noop'

export const AddTodo = props => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="add todo here"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item>
        <Button
          fullWidth
          color="primary"
          variant="outlined"
          onClick={props.onButtonClick}
          style={{ textTransform: 'initial' }}>
          add
        </Button>
      </Grid>
    </Grid>
  </Paper>
)

AddTodo.propTypes = {
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  onInputKeyPress: PropTypes.func,
  onButtonClick: PropTypes.func
}

AddTodo.defaultProps = {
  inputValue: '',
  onInputChange: noop,
  onInputKeyPress: noop,
  onButtonClick: noop
}

export default memo(AddTodo)

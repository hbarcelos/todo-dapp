import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  accountInfo: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export const Layout = ({ account, children }) => {
  const classes = useStyles()
  return (
    <Paper
      elevation={0}
      className={classes.root}
      style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}>
      <AppBar color="primary" position="sticky" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
          <Typography color="inherit" className={classes.title}>
            my awesome todo app
          </Typography>
          <Typography variant="caption" className={classes.accountInfo}>
            {account}
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </Paper>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  account: PropTypes.string.isRequired
}

export default memo(Layout)

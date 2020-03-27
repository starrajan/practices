import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../../../logic/actions/user.actions'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  siteTitle: {
    fontSize: 24,
    color: 'white',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  webmenu: {
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },

  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  links: {
    padding: theme.spacing(2),
    fontSize: '1rem',
    color: 'white',
  },
}))

interface Props {
  loggedIn: boolean
  logout: any
}

function Navbar(props: Props) {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const { loggedIn } = props
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen)
  }
  const drawer = (
    <div>
      <List>
        <ListItem>
          <Link onClick={handleDrawerToggle} to="/login">
            Login
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={handleDrawerToggle} to="/register">
            Register
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={handleDrawerToggle} to="/dummy">
            Dummy
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={handleDrawerToggle} to="/service">
            Service
          </Link>
        </ListItem>
        <ListItem>
          <Link onClick={handleDrawerToggle} to="/change-password">
            Change password
          </Link>
        </ListItem>
      </List>
    </div>
  )

  const handleLogout = () => {
    props.logout()
  }

  const loggedInLinks = (
    <Fragment>
      <Link className={classes.links} to="/dummy">
        Dummy
      </Link>
      <Link className={classes.links} to="/service">
        Service
      </Link>
      <Link className={classes.links} to="/change-password">
        Change password
      </Link>
      <Link onClick={handleLogout} className={classes.links} to="/">
        Log Out
      </Link>
    </Fragment>
  )

  const loggedOutLinks = (
    <Fragment>
      <Link className={classes.links} to="/login">
        Login
      </Link>
      <Link className={classes.links} to="/register">
        Register
      </Link>
    </Fragment>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer" edge="start" onClick={handleDrawerToggle} className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Link to="/" className={classes.siteTitle}>
            Starter React
          </Link>
          <div className={classes.webmenu}>
            {loggedIn ? loggedInLinks : loggedOutLinks}
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}

export default connect(null, { logout })(Navbar)

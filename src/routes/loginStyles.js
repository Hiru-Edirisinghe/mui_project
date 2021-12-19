import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  main: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },

  container: {
    padding: theme.spacing(5, 0)
  },

  btn: {
    marginTop: '40px',
    fontSize: '1.2rem'
  },

  clickHere: {
    marginLeft: '5px',
    '&:hover': {
        textDecoration: 'none',
     },
  },

  userIcon: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },

  avatarIcon: {
    width: '100px',
    height: '100px'
  },


  bottomText: {
    marginTop: '20px'
  }

}));

export default useStyles;
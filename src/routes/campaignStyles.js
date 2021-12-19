import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  main: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'
  },

  container: {
    padding: theme.spacing(5, 0)
  },

  btn: {
    fontSize: '12px'
  },

  cardGrid: {
    paddingBottom: theme.spacing(5)
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  cardContent: {
    flexGrow: 1,
    "&:last-child": {
      paddingBottom: '16px'
    }
  },


  bottomText: {
    marginTop: '20px'
  },

  pagination: {
    display: 'flex', 
    justifyContent: 'center',
    paddingBottom: theme.spacing(3)
  },

  btnGrid: {
    display: 'flex', 
    justifyContent: 'center'
  },

  box: {
    border: '1px solid #000000',
    margin: theme.spacing(1)
  },

  menuHeading: {
    padding: theme.spacing(2, 0)
  }

}));

export default useStyles;
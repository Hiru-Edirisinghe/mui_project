import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  header: {
    backgroundColor: '#000000',
  },

  main: {
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 4, 0)
  },

  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(1)
  },

  btn: {
    fontSize: '15px',
    width: '100%'
  },

  cardGrid: {
    paddingBottom: theme.spacing(5)
  },

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: 'unset'
  },

  cardContent: {
    flexGrow: 1,
    padding: '0',
    "&:last-child": {
      paddingBottom: '0'
    }
  },

  cardText: {
    fontSize: '16px'
  },

  bottomText: {
    marginTop: '20px'
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
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles'

export default makeStyles(() => ({

  formControl: {
    margin: useTheme().spacing(1), 
    width: '120px',
    backgroundColor: 'azure',
  },

  selectEmpty: {
    marginTop: useTheme().spacing(2),
  },

  loading: {
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  container: {
    padding: '25px',
  },

  marginBottom: {
    marginBottom: '30px',
  },

  list: {
    margin: '20px auto',
    height: '75vh', 
    overflow: 'auto',
  },
  
}));

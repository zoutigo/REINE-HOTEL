import { Grid } from '@material-ui/core'
import Content from './components/content/Content'
import Header from './components/header/Header'
import Footer from '../src/components/footer/Footer'
import {makeStyles} from '@material-ui/styles'
import theme from './utils/theme'

const useStyles = makeStyles((theme)=> ({
    root: {
      flexGrow: 1
    },
    content :{
    
      backgroundColor: theme.palette.orange.main,
      margin: '0px'
    },
    header :{
       height: '4em'
    },
    testheader:{
      backgroundColor: theme.palette.blue.main,
      width: '100%',
      height: '4em'
    }
}))

function App() {
  const classes = useStyles()
  return (
  
          <Grid container>
              <Grid item container   className={classes.header}>
                  <Header />
                 
              </Grid>
              <Grid item container xs={12} className={classes.content}>
                <Content />
            </Grid>
            <Grid item container>
                <Footer />
          </Grid>
      
        </Grid>
   
  
  );
}

export default App;

import { Container , Typography, Grid} from '@mui/material';
import { NoticiasProvider } from './context/NoticiasProvider';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
function App() {
  return (
    <NoticiasProvider>
      <Container>
          <header>
            <Typography align='center' marginY={5} component={'h1'} variant='h3'>
              Buscador de noticias
            </Typography>
          </header>

          <Grid 
            container
            justifyContent={'center'}
            alignItems={'center'}
            direction={'row'}
          >
            <Grid item xs={12} md={6} lg={4}>
              <Formulario/>
            </Grid>
          </Grid>
        
          <ListadoNoticias/>
      </Container>
    </NoticiasProvider>
  ) 
}

export default App;

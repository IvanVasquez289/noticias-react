import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../hooks/useNoticias"
import Noticia from './Noticia'

const ListadoNoticias = () => {
  const {noticias,totalNoticias} = useNoticias()

  const numPaginas = Math.ceil(totalNoticias/20)
  return (
    <>
        <Typography variant='h3' component={'h2'} textAlign={'center'} marginY={5}>
            Últimas Noticias
        </Typography>

        <Grid container spacing={2}>
          {noticias.map( noticia => (
              <Noticia noticia={noticia} key={noticia.url}/>
          ))}
        </Grid>

        <Stack 
          spacing={2}
          direction={'row'}
          justifyContent={'center'}
          marginY={6}
        >
          <Pagination count={numPaginas} color="primary" />
        </Stack>
    </>
  )
}

export default ListadoNoticias
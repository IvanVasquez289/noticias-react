import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import useNoticias from "../hooks/useNoticias"
import Noticia from './Noticia'

const ListadoNoticias = () => {
  const {noticias} = useNoticias()
  return (
    <>
        <Typography variant='h3' component={'h2'} textAlign={'center'} marginY={5}>
            Últimas Noticias
        </Typography>


        {noticias.map( noticia => (
            <Noticia noticia={noticia} key={noticia.url}/>
        ))}
    </>
  )
}

export default ListadoNoticias
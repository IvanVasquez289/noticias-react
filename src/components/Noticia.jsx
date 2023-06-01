import { Card, CardActions, CardContent, CardMedia, Typography, Grid, Link } from "@mui/material"
const Noticia = ({noticia}) => {
  const {urlToImage, url, title, description, source} = noticia;
  console.log(noticia)
  return (
    <Grid item md={6} lg={4}>
      <Card>
        {urlToImage && (
           <CardMedia 
           component={'img'} 
           alt={`imagen de la noticia ${title}`}
           image={urlToImage} 
           height={'250px'}
         />
        )}

        <CardContent>
          <Typography variant="body1" color={'error'}>
            {source.name}
          </Typography>
          <Typography variant="h5" component={'div'}>
            {title}
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions>
            <Link 
              href={url} 
              target="_blank"
              variant="button"
              width={'100%'}
              sx={{
                textDecoration: 'none'
              }}
            >
              Leer Noticia
            </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia
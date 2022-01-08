import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cards({id,image,name,price}){
   



    return (
        <div style={{margin: "2rem"}}>
        
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
         
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product Name : {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Price: {price}₹
          </Typography>
        </CardContent>
      </CardActionArea>
      <div>
        <Link to={`/items/${id}`}>
    <Button size="medium" >Product Details</Button>

        </Link>
    </div>
    </Card>
    
        </div>

    )
}
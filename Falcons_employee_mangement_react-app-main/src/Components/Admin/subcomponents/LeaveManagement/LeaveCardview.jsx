import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="70"
          image="../src/assets/imagecardview.jpg"
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leave
          </Typography>
          <Typography variant="body2" color="text.secondary">
            you have taken more than 1o leaves per yr so in this mounth you cannot get any leave just work
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="extrasmall" color="primary">
        History
        </Button>
      </CardActions>
    </Card>
  );
}

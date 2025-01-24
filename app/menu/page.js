import { Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid2';

const menuItems = [
  { name: 'Spaghetti Carbonara', price: '$15' },
  { name: 'Margherita Pizza', price: '$12' },
  { name: 'Tiramisu', price: '$8' },
];

export default function Menu() {
  return (
    <Grid container spacing={4} sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ width: '100%', mb: 2 }}>
        Our Menu
      </Typography>
      {menuItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

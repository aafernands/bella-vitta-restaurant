import { Typography, Box } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4">Contact Us</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Address: 123 Toscana Avenue, Little Italy, NY 10012, USA
      </Typography>
      <Typography variant="body1">Phone: (123) 456-7890</Typography>
      <Typography variant="body1">Email: contact@bellavittarestaurant.com</Typography>
    </Box>
  );
}

import { Typography, Box } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h2" color="primary">
        Welcome to Bella Vita
      </Typography>
      <Typography variant="h5" color="textSecondary" sx={{ mt: 2 }}>
        Experience authentic Italian cuisine at its finest.
      </Typography>
    </Box>
  );
}

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bella Vita
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/menu">
          Menu
        </Button>
        <Button color="inherit" component={Link} href="/contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
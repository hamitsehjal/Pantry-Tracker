import { Container, Typography } from '@mui/material';

export default function PantryManagementPage() {
  // make call to usePantryItems hook
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Pantry Management
      </Typography>
    </Container>
  );
}

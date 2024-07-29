import Image from "next/image";
import {Container, Typography} from "@mui/material";
import {Box} from "@mui/system";


export default function Home() {
  return (
      <Container sx={{ bgcolor:"tomato" }}>
        <Typography variant={"h1"}>Pantry Tracker</Typography>
          <Box sx={{ bgcolor:"magenta" }}>Hello World</Box>
      </Container>

  );
}

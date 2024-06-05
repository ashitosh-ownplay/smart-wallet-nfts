import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        position: "fixed",
        backgroundColor: "primary.dark",
        bottom: 0,
        paddingTop: "1rem",
        paddingBottom: "1rem",
        borderTop: "1px solid gray",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              Made with ❤️ for CityVerse Tycoon community
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography color="textSecondary" variant="subtitle1">
              {`@${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

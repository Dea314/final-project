import { Grid, Container } from "@mui/material";

const MyGrid = () => {
  return (
    <Container
      sx={{
        maxWidth: "xl",
        backgroundColor: "secondary.light",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* {data.map((el) => (
          <Grid
            // className="border"
            item
            key={crypto.randomUUID()}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
            xs={12}
            sm={10}
            md={8}
            lg={6}
            xl={4}
          >
            <MyCard {...el} />
          </Grid>
        ))} */}
      </Grid>
    </Container>
  );
};

export default MyGrid;

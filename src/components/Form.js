import React from "react";
import { Box, TextField, Button } from "@mui/material";

const Form = () => {
  return (
    <div>
      <Box
        m="auto"
        component="form"
        sx={{
          width: "30%",
          marginTop: "50px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <TextField type="text" label="Search..." size="small" margin="normal" />

        <Button type="submit" variant="contained" size="small" margin="normal">
          Search
        </Button>
      </Box>
    </div>
  );
};

export default Form;

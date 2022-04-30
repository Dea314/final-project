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
        <TextField
          className="search-field"
          type="text"
          label="Search..."
          size="small"
          margin="normal"
        />

        <Button
          className="find-one-character"
          type="submit"
          variant="contained"
          size="small"
          margin="normal"
        >
          Search your character
        </Button>
        <Button
          className="find-all-characters"
          type="submit"
          variant="contained"
          size="small"
          margin="normal"
        >
          Get all characters
        </Button>
      </Box>
    </div>
  );
};

export default Form;

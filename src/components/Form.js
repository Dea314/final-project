import React from "react";
import { Box, TextField, Button } from "@mui/material";

const Form = ({ handleSubmit }) => {
  return (
    <div>
      <Box
        onSubmit={handleSubmit}
        m="auto"
        component="form"
        sx={{
          width: "30%",
          marginTop: "50px",
          marginRight: "2rem",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
        }}
      >
        <TextField
          name="searchQuery"
          className="search-field"
          type="text"
          label="Search..."
          size="medium"
          style={{ textDecoration: "none", margin: "1.5rem" }}
        />

        <Button
          className="find-one-character"
          type="submit"
          variant="contained"
          size="small"
          margin="normal"
          style={{ textDecoration: "none", margin: "1rem" }}
        >
          Search your character
        </Button>
        <Button
          className="find-all-characters"
          type="submit"
          variant="contained"
          size="medium"
          style={{ textDecoration: "none", margin: "1rem" }}
        >
          Get all characters
        </Button>
      </Box>
    </div>
  );
};

export default Form;

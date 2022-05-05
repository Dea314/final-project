import React from "react";
import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MenuProps,
  optionsElement,
  optionsStrength,
  optionsWeakness,
  optionsResistance,
  optinonsWeapon,
} from "../Theme.js";

// const label = { inputProps: { "aria-label": "controlled" } };
const Form = () => {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    optionsElement.length > 0 && selected.length === optionsElement.length;

  const handleChange = (event) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === optionsElement.length ? [] : optionsElement
      );
      return;
    }
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === optionsWeakness.length ? [] : optionsWeakness
      );
      return;
    }
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === optionsStrength.length ? [] : optionsStrength
      );
      return;
    }
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === optionsResistance.length ? [] : optionsResistance
      );
      return;
    }
    if (value[value.length - 1] === "all") {
      setSelected(
        selected.length === optinonsWeapon.length ? [] : optinonsWeapon
      );
      return;
    }

    setSelected(value);
  };
  return (
    <div className="wrapper-search">
      <Box
        // onSubmit={handleSubmit}
        component="form"
        sx={{
          width: "100%",
          marginTop: "50px",
          // marginRight: "10%",
          // justifyContent: "end",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          name="searchQuery"
          className="search-field"
          type="text"
          label="Name..."
          size="small"
          style={{ textDecoration: "none", margin: "1.5rem" }}
        />

        <FormControl
          className="formcontrol"
          sx={{
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <InputLabel
            size="medium"
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Select elements
          </InputLabel>
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="all"
              // classes={{
              // root: isAllSelected ? classes.selectedAll : "",
              // }}
            >
              <ListItemIcon>
                <Checkbox
                  // classes={{ indeterminate: classes.indeterminateColor }}
                  color="default"
                  checked={isAllSelected}
                  indeterminate={
                    selected.length > 0 &&
                    selected.length < optionsElement.length
                  }
                />
              </ListItemIcon>
              <ListItemText
                // classes={{ primary: classes.selectAllText }}
                primary="Select All"
              />
            </MenuItem>
            {optionsElement.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="formcontrol"
          sx={{
            gap: "5rem",
            margin: "1rem",
          }}
        >
          <InputLabel
            size="medium"
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Select weakness
          </InputLabel>
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="all"
              // classes={{
              // root: isAllSelected ? classes.selectedAll : "",
              // }}
            >
              <ListItemIcon>
                <Checkbox
                  // classes={{ indeterminate: classes.indeterminateColor }}
                  color="default"
                  checked={isAllSelected}
                  indeterminate={
                    selected.length > 0 &&
                    selected.length < optionsWeakness.length
                  }
                />
              </ListItemIcon>
              <ListItemText
                // classes={{ primary: classes.selectAllText }}
                primary="Select All"
              />
            </MenuItem>
            {optionsWeakness.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="formcontrol"
          sx={{
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <InputLabel
            size="medium"
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Select strength
          </InputLabel>
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="all"
              // classes={{
              // root: isAllSelected ? classes.selectedAll : "",
              // }}
            >
              <ListItemIcon>
                <Checkbox
                  // classes={{ indeterminate: classes.indeterminateColor }}
                  color="default"
                  checked={isAllSelected}
                  indeterminate={
                    selected.length > 0 &&
                    selected.length < optionsStrength.length
                  }
                />
              </ListItemIcon>
              <ListItemText
                // classes={{ primary: classes.selectAllText }}
                primary="Select All"
              />
            </MenuItem>
            {optionsStrength.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="formcontrol"
          sx={{
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <InputLabel
            size="medium"
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Select resistance
          </InputLabel>
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="all"
              // classes={{
              // root: isAllSelected ? classes.selectedAll : "",
              // }}
            >
              <ListItemIcon>
                <Checkbox
                  // classes={{ indeterminate: classes.indeterminateColor }}
                  color="default"
                  checked={isAllSelected}
                  indeterminate={
                    selected.length > 0 &&
                    selected.length < optionsResistance.length
                  }
                />
              </ListItemIcon>
              <ListItemText
                // classes={{ primary: classes.selectAllText }}
                primary="Select All"
              />
            </MenuItem>
            {optionsResistance.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="formcontrol"
          sx={{
            gap: "1rem",
            margin: "1rem",
          }}
        >
          <InputLabel
            size="medium"
            style={{ textDecoration: "none", margin: "1rem" }}
          >
            Select weapon
          </InputLabel>
          <Select
            labelId="mutiple-select-label"
            multiple
            value={selected}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem
              value="all"
              // classes={{
              // root: isAllSelected ? classes.selectedAll : "",
              // }}
            >
              <ListItemIcon>
                <Checkbox
                  // classes={{ indeterminate: classes.indeterminateColor }}
                  color="default"
                  checked={isAllSelected}
                  indeterminate={
                    selected.length > 0 &&
                    selected.length < optinonsWeapon.length
                  }
                />
              </ListItemIcon>
              <ListItemText
                // classes={{ primary: classes.selectAllText }}
                primary="Select All"
              />
            </MenuItem>
            {optinonsWeapon.map((option) => (
              <MenuItem key={option} value={option}>
                <ListItemIcon>
                  <Checkbox checked={selected.indexOf(option) > -1} />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* <FormLabel
            style={{
              textDecoration: "none",
              margin: "1rem",
            }}
          >
            Select...
          </FormLabel> */}
        {/* <FormControl
            control={
              <Checkbox
                classes={{ indeterminate: classes.indeterminateColor }}
                checked={isAllSelected}
                indeterminate={
                  selected.length > 0 && selected.length < options.length
                }
              />
            }
          ></FormControl> */}
        {/* <FormControl
            control={
              <Checkbox
                // checked={strength}
                name="strength"
                defaultChecked={false}
                color="default"
              />
            }
            label="Strength"
          ></FormControl>
          <FormControl
            control={
              <Checkbox
                // checked={weakness}
                name="weakness"
                defaultChecked={false}
                color="default"
              />
            }
            label="Weakness"
          ></FormControl>
         */}
        {/* <Button
          className="find-all-characters"
          type="submit"
          variant="contained"
          size="medium"
          style={{ textDecoration: "none", margin: "1rem" }}
        >
          Get all characters
        </Button> */}
      </Box>
      <Button
        className="find-one-character"
        type="submit"
        variant="contained"
        size="large"
        margin="normal"
        style={{
          textDecoration: "none",
          margin: "1rem",
          float: "right",
          marginRight: "8rem",
        }}
        sx={{
          gap: "1rem",
          margin: "1rem",
          display: "flex",
        }}
      >
        TRY ME!
      </Button>
    </div>
  );
};

export default Form;

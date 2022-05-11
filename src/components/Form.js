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
  optionsWeapon,
} from "../Theme.js";

const Form = ({ setSearchQuery }) => {
  const [selected, setSelected] = useState({
    name: "",
    optionsElement: [],
    optionsWeakness: [],
    optionsStrength: [],
    optionsResistance: [],
    optionsWeapon: [],
  });

  const [isAllSelected] = useState({
    optionsElement:
      optionsElement.length > 0 &&
      selected.optionsElement.length === optionsElement.length,
    optionsWeakness:
      optionsWeakness.length > 0 &&
      selected.optionsWeakness.length === optionsWeakness.length,
    optionsStrength:
      optionsStrength.length > 0 &&
      selected.optionsStrength.length === optionsStrength.length,
    optionsResistance:
      optionsResistance.length > 0 &&
      selected.optionsResistance.length === optionsResistance.length,
    optionsWeapon:
      optionsWeapon.length > 0 &&
      selected.optionsWeapon.length === optionsWeapon.length,
  });

  const handleChange = (event) => {
    const value = event.target.value;

    if (event.target.name === "name") {
      setSelected({
        ...selected,
        name: value,
      });
      return;
    }

    if (event.target.name === "optionsElement") {
      if (value[value.length - 1] === "all") {
        setSelected({
          ...selected,
          optionsElement:
            selected.optionsElement.length === optionsElement.length
              ? []
              : optionsElement,
        });
        return;
      }

      setSelected({
        ...selected,
        optionsElement: value,
      });
      return;
    }
    if (event.target.name === "optionsWeakness") {
      if (value[value.length - 1] === "all") {
        setSelected({
          ...selected,
          optionsWeakness:
            selected.optionsWeakness.length === optionsWeakness.length
              ? []
              : optionsWeakness,
        });
        return;
      }
      setSelected({
        ...selected,
        optionsWeakness: value,
      });
      return;
    }
    if (event.target.name === "optionsStrength") {
      if (value[value.length - 1] === "all") {
        setSelected({
          ...selected,
          optionsStrength:
            selected.optionsStrength.length === optionsStrength.length
              ? []
              : optionsStrength,
        });
        return;
      }
      setSelected({
        ...selected,
        optionsStrength: value,
      });
      return;
    }
    if (event.target.name === "optionsResistance") {
      if (value[value.length - 1] === "all") {
        setSelected({
          ...selected,
          optionsResistance:
            selected.optionsResistance.length === optionsResistance.length
              ? []
              : optionsResistance,
        });
        return;
      }
      setSelected({
        ...selected,
        optionsResistance: value,
      });
      return;
    }
    if (event.target.name === "optionsWeapon") {
      if (value[value.length - 1] === "all") {
        setSelected({
          ...selected,
          optionsWeapon:
            selected.optionsWeapon.length === optionsWeapon.length
              ? []
              : optionsWeapon,
        });
        return;
      }
      setSelected({
        ...selected,
        optionsWeapon: value,
      });
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(selected);
  };

  return (
    <div className="wrapper-search">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TextField
          name="name"
          className="search-field"
          type="text"
          label="Name..."
          size="medium"
          onChange={handleChange}
          style={{
            textDecoration: "none",
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
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
            name="optionsElement"
            labelId="mutiple-select-label"
            multiple
            value={selected.optionsElement}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  color="default"
                  checked={isAllSelected.optionsElement}
                  indeterminate={
                    selected.optionsElement.length > 0 &&
                    selected.optionsElement.length < optionsElement.length
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Select All" />
            </MenuItem>
            {optionsElement.map((option) => (
              <MenuItem key={"optionsElement" + option} value={option}>
                <ListItemIcon>
                  <Checkbox
                    checked={selected.optionsElement.indexOf(option) > -1}
                  />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          className="formcontrol"
          sx={{
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
            name="optionsWeakness"
            labelId="mutiple-select-label"
            multiple
            value={selected.optionsWeakness}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  color="default"
                  checked={isAllSelected.optionsWeakness}
                  indeterminate={
                    selected.optionsWeakness.length > 0 &&
                    selected.optionsWeakness.length < optionsWeakness.length
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Select All" />
            </MenuItem>
            {optionsWeakness.map((option) => (
              <MenuItem key={"optionsWeakness" + option} value={option}>
                <ListItemIcon>
                  <Checkbox
                    checked={selected.optionsWeakness.indexOf(option) > -1}
                  />
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
            name="optionsStrength"
            labelId="mutiple-select-label"
            multiple
            value={selected.optionsStrength}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  color="default"
                  checked={isAllSelected.optionsStrength}
                  indeterminate={
                    selected.optionsStrength.length > 0 &&
                    selected.optionsStrength.length < optionsStrength.length
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Select All" />
            </MenuItem>
            {optionsStrength.map((option) => (
              <MenuItem key={"optionsStrength" + option} value={option}>
                <ListItemIcon>
                  <Checkbox
                    checked={selected.optionsStrength.indexOf(option) > -1}
                  />
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
            name="optionsResistance"
            labelId="mutiple-select-label"
            multiple
            value={selected.optionsResistance}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  color="default"
                  checked={isAllSelected.optionsResistance}
                  indeterminate={
                    selected.optionsResistance.length > 0 &&
                    selected.optionsResistance.length < optionsResistance.length
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Select All" />
            </MenuItem>
            {optionsResistance.map((option) => (
              <MenuItem key={"optionsResistance" + option} value={option}>
                <ListItemIcon>
                  <Checkbox
                    checked={selected.optionsResistance.indexOf(option) > -1}
                  />
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
            name="optionsWeapon"
            labelId="mutiple-select-label"
            multiple
            value={selected.optionsWeapon}
            onChange={handleChange}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="all">
              <ListItemIcon>
                <Checkbox
                  color="default"
                  checked={isAllSelected.optionsWeapon}
                  indeterminate={
                    selected.optionsWeapon.length > 0 &&
                    selected.optionsWeapon.length < optionsWeapon.length
                  }
                />
              </ListItemIcon>
              <ListItemText primary="Select All" />
            </MenuItem>
            {optionsWeapon.map((option) => (
              <MenuItem key={"optionsWeapon" + option} value={option}>
                <ListItemIcon>
                  <Checkbox
                    checked={selected.optionsWeapon.indexOf(option) > -1}
                  />
                </ListItemIcon>
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          className="find-one-character"
          type="submit"
          variant="contained"
          size="medium"
          margin="normal"
          style={{
            textDecoration: "none",
            margin: "1rem",
            float: "right",
            marginRight: "3rem",
            width: "10%",
          }}
          sx={{
            gap: "1rem",
            margin: "1rem",
            display: "flex",
          }}
        >
          TRY ME!
        </Button>
      </Box>
    </div>
  );
};

export default Form;

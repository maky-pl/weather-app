import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

type CityInputProps = {
  setCity: (city: string) => void;
};

export const CityInput: React.FC<CityInputProps> = ({ setCity }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setCity(inputValue);
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Grid item>
        <TextField
          label="City"
          variant="outlined"
          onChange={handleInputChange}
          fullWidth
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          size="large"
        >
          Get Weather
        </Button>
      </Grid>
    </Grid>
  );
};

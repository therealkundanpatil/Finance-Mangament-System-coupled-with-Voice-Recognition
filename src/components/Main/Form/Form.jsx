import React from "react";
import {
    TextField,
    Typography,
    Grid,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from "@material-ui/core";

import useStyles from "./styles.js";

function Form() {

    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" varaint="subtitle2" gutterBottom>
                    Something
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullwidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value="business">Business</MenuItem>
                        <MenuItem value="Salary">Salary</MenuItem>
                        <MenuItem value="Grocery">Grocery</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullwidth></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullwidth></TextField>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullwidth>Create</Button>
        </Grid>
    );
}

export default Form;
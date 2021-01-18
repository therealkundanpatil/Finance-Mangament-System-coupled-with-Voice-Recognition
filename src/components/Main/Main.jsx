import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Divider
} from "@material-ui/core";

import Form from "./Form/Form.jsx";

import List from "./List/List.jsx";

import useStyles from "./styles.js";

function Main(){
    const classes = useStyles();

    return (
        <Card className= {classes.root}>
            <CardHeader title= "Expense Tracker" subheader= "Powered by Speechly"/>
            <CardContent>
                <Typography align= "center" variant= "h5">
                    Total Balance $100
                </Typography>
                <Typography varaint= "subtitle1" style= {{lineHeight: "1.5em", marginTop: "20px"}}>
                    {/*InfoCard*/}
                    Try saying: Add income for $100 in Category for Monday.
                </Typography>
                <Divider/>
                <Form></Form>                 
            </CardContent>
            <CardContent className= {classes.CardContent}>
                <Grid container spacing= {2}>
                    <Grid item xs= {12}>
                        <List/>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main;
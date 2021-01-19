import React,{ useContext } from "react";
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

import {ExpenseTrackerContext} from "../../context/context";

import InfoCard from "../InfoCard.jsx";

function Main(){
    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className= {classes.root}>
            <CardHeader title= "Expense Tracker" subheader= "Powered by Speechly"/>
            <CardContent>
                <Typography align= "center" variant= "h5">
                    Total Balance ${balance}
                </Typography>
                <Typography varaint= "subtitle1" style= {{lineHeight: "1.5em", marginTop: "20px"}}>
                    <InfoCard/>
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
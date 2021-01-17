import React from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form.jsx";
import List from "./List/List.jsx";

function Main() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader title= "Finance Management Application" subheader= "Voice Assistant Enabled"></CardHeader>
            <CardContent>
                <Typography align="center" variant="h5">Total Balance: $1000000</Typography>
                <Typography variant="subtitle1" style={{lineHeight:"1.5em", marginTop:"20px"}}>
                    Some text....
                </Typography>
                <Divider></Divider>
                <Form></Form>
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List></List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default Main;
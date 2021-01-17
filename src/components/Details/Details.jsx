import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useStyles from "./styles.js"

function Details() {

    const classes = useStyles();


    return (
        <Card className={classes.income}>
            <CardHeader title="Income"></CardHeader>
            <CardContent>
                <Typography variant="h5">$90000</Typography>
                {/* <Doughnut data="DATA"/> */}
            </CardContent>
        </Card>
    );
}

export default Details;

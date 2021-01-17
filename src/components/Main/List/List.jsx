import React from "react";
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles.js";


function List() {

    const classes = useStyles();
    const transaction = [
        { id: 1, type: "Income",    category: "Salary",     amount:50,  date: "Sun Jan 17 2021" },
        { id: 1, type: "Expense",   category: "Grocery",    amount:50,  date: "Sat Jan 16 2021" },
        { id: 1, type: "Income",    category: "Business",   amount:50,  date: "Fri Jan 15 2021" },
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transaction.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff></MoneyOff>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount}-${transaction.date}`}></ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onclick="Do nothing for now">
                                <Delete></Delete>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
}

export default List;
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const TodoCard = ({ todo, handleTodoListData }) => {

    return (
        <Card sx={{
            maxWidth: "450px",
            maxHeight: "200px",
            margin: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardContent>
                <Typography variant='h6' color={"text.secondary"}>
                    {todo?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => handleTodoListData(todo?.id)}
                    sx={{
                        backgroundColor: "#F1f1f1",
                        border: "1px solid #000"
                    }}>Details</Button>
            </CardActions>
        </Card>
    )
}

export default TodoCard
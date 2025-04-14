import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import React from 'react'

const TodoDetails = ({ setOpenDialog, todoDetail, openDialog, setTodoDetail }) => {
    return (
        <>
            <Dialog open={openDialog}>
                <DialogTitle>
                    {todoDetail?.todo}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => {
                        setOpenDialog(false)
                        setTodoDetail(null)
                    }}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TodoDetails
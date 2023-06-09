import React, { FC, ReactElement } from 'react'
import { Grid } from '@mui/material'
import { Profile } from '../profile/Profile'
import { CreateTask } from '../createTask/CreateTask'


export const Sidebar: FC = (): ReactElement => {
    return (
         <Grid item md={4} px={4} sx={{
                height: "100vh",
                position: "fixed",
                right: 0,
                top: 0,
                width: "100%",
                backgroundColor: "background.paper",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }} >
            <Profile name='Enoch' />
            <CreateTask />
            </Grid>
    )
}
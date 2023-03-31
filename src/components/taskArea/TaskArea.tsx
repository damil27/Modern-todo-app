import React, { FC, ReactElement } from 'react'
import { Grid, Box } from '@mui/material'
import { TaskCounter } from '../taskCounter/TaskCounter'
// import {format } from 'date-fns'

export const TaskArea: FC = (): ReactElement => {
    return (
        <Grid item md={8} px={4} >
            <Box mb={8}  px={4}> 
                <h2>Status of your Goal as on Thursday, 30, 2023</h2>
                {/* {format(new Date(), 'PPPP')} */}
            </Box>
            <Grid container display="flex" justifyContent="center" >
                <Grid item
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-around"
                    md={10}
                    xs={12}
                    mb={8}
                >
                <TaskCounter />
                <TaskCounter />
                <TaskCounter />
                
                </Grid>
                <Grid
                    item
                    display="flex"
                    flexDirection="column"
                    xs={10}
                    md={8}
                
                >
                <Box>Task Contents goes here</Box>
                <Box>Task contents goes here</Box>

                </Grid>
            </Grid>
            </Grid>
    )
}  
import React, { FC, ReactElement } from 'react'
import { Grid, Box } from '@mui/material'
import { TaskCounter } from '../taskCounter/TaskCounter'
import {format } from 'date-fns'
import { Task } from '../task/Task'

export const TaskArea: FC = (): ReactElement => {
    return (
        <Grid item md={8} px={4} >
            <Box mb={8}  px={4}> 
                <h2>Status of your Goal as on {format(new Date(), 'PPPP')}</h2>
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
                    <Task />
                    <Task />
                    <Task />

                </Grid>
            </Grid>
            </Grid>
    )
}  
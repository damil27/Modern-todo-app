import React, { FC, ReactElement } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { ITaskCounter } from './interfaces/ITaskCounter'
import { Status } from '../createTask/enums/Status'

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const {status= Status.todo, count= 0  } =  props
    return <>
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar
                sx={{
                    backgroundColor: "transparent",
                    height: "96px",
                    width: "96px",
                    border: "4px solid",
                    marginBottom: "16px",
                    borderColor: "warning.light"
                }}
            >
                <Typography variant="h4" color="#fff">{ count}</Typography>
            </Avatar>
            <Typography
                color="#fff"
                fontWeight="bold"
                fontSize="20px"
                variant='h5'
            >{status }</Typography>
        </Box>
    
    </>
}
import React, { FC, ReactElement } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import { ITaskCounter } from './interfaces/ITaskCounter'
import { Status } from '../createTask/enums/Status'
import { emitCorrectBorderColor } from './helps/emitCorrectBorderColor'
import { emitCorrectLabel } from './helps/emitCorrectLabel'
import PropTypes from 'prop-types'


export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const {status= Status.inProgress, count= 0  } =  props
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
                    borderColor: `${emitCorrectBorderColor(status)}`
                }}
            >
                <Typography variant="h4" color="#fff">{ count}</Typography>
            </Avatar>
            <Typography
                color="#fff"
                fontWeight="bold"
                fontSize="20px"
                variant='h5'
            >{emitCorrectLabel(status) }</Typography>
        </Box>
    
    </>
}

TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([
        Status.todo,
        Status.inProgress,
        Status.completed
    ])
    
}
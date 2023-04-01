import React, { FC, ReactElement } from 'react'

import { Box } from '@mui/material'
import { TaskHeader } from './_taskHeader'
import { TaskDescription } from './_taskDescription'
import { TaskFooter } from './_taskFooter'
import { ITask } from './interfaces/ITask'
import { Priority } from '../createTask/enums/Priority'
import { Status } from '../createTask/enums/Status'
import { renderPriorityBorderColor } from './helps/renderPriorityBorderColor'
import PropTypes from 'prop-types'


export const Task: FC<ITask> = (props): ReactElement => {
    const {
        title ="This is testing title",
        date = new Date(),
        description = "simple lorems thypoe unreasonable test for test desciption",
        priority  = Priority.normal,
        status = Status.completed,
        onStatusChange = (e) =>console.log(e),
        onClick = (e) => console.log(e) } = props
    return <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        width="100%"
        mb={4}
        p={2}
        sx={{
            width: "100%",
            backgroundColor: "background.paper",
            broderRadius: "8px",
            border: "1px solid",
            borderColor: renderPriorityBorderColor(priority)
        }}
    >
        <TaskHeader title={title} date={date} />
        <TaskDescription description={description} />
        <TaskFooter onClick={onClick} onStatusChange= {onStatusChange} />
    </Box>
}

Task.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func,
    priority: PropTypes.string,
    status:PropTypes.string
}
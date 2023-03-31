import React, { FC, ReactElement } from "react";
import { Box, Typography, Stack } from '@mui/material'
import { TaskTitleField } from "./_taskTitleField";
import { TaskDescriptionField } from "./_taskDescriptionField";
import { TaskDateField } from "./_taskDateField";
import { TaskSelectField } from "./interface/_taskSelectField";
import { Priority } from "./enums/Priority";
import { Status } from "./enums/Status";

export const CreateTask: FC = (): ReactElement => {
    return (
        <Box
            display="flex"
            flexDirection='column'
            alignItems="flex-start"
            width="100%"
            px={4}
            py={6}
        >

            <Typography variant="h6" component='h2' mb={2} > Create Task</Typography>

            <Stack sx={{ width: "100%" }} spacing={2}>
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDateField />
                <Stack direction="row" sx={{width: "100%"}} spacing={2} >
                    <TaskSelectField label="Status" name="status" items={[
                        {
                            value: Status.todo,
                            label: Status.todo.toUpperCase()

                        },
                        {
                            value: Status.inProgress,
                            label: Status.inProgress.toUpperCase()
                        }
                    ]} />
                    <TaskSelectField label="Priority" name="priority" items={[
                        {
                            value: Priority.high,
                            label:Priority.high.toUpperCase()
                        },
                        {
                            value: Priority.normal,
                            label: Priority.normal.toUpperCase()
                        },
                        {
                            value: Priority.low,
                            label: Priority.low.toUpperCase()
                        }
                    ]} />
                </Stack>
            </Stack>
        </Box>
    )
}
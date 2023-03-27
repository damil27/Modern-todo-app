import React, { FC, ReactElement } from "react";
import { Box, Typography } from '@mui/material'

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
        </Box>
    )
}
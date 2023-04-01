import React, { FC, ReactElement } from 'react'
import {Box, Button, Switch, FormControlLabel} from '@mui/material'

export const TaskFooter: FC = (): ReactElement => {
    return <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
    >
        <FormControlLabel
            label="In-Progress"
            control={<Switch color='warning' />} />
        <Button variant='contained' color='primary' size='small' > Mark Completed </Button>
    </Box>
}
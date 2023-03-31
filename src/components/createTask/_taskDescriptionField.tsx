import React, { FC, ReactElement } from "react";
import { TextField } from "@mui/material";
import PropTypes from 'prop-types'
import { ITextField } from "./interface/ItextField";
export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
    const {onChange = e => console.log(e), disabled = false} = props
    return (
        <TextField
            id="description"
            name='description'
            placeholder="description"
            label='Task description'
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={4}
            disabled={disabled}
            onChange={onChange}
        />
    )
}

TaskDescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled:PropTypes.bool
}
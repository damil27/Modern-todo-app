import React, { FC, ReactElement } from "react";
import { FormControl,InputLabel,MenuItem,Select, SelectChangeEvent,  } from "@mui/material";
import PropTypes from 'prop-types'
import { ISelectfield } from "./ISelect";


export const TaskSelectField: FC<ISelectfield> = (props): ReactElement => {
    const { value= "",
        name="Select Box",
        label = "Select Box",
        onChange = (e: SelectChangeEvent) => console.log(e),
        items = [{value:"", label:"Add Items"}],
        disabled = false
    } = props
    return <FormControl fullWidth size="small" >
        <InputLabel id={`${name}-id`} > { label}</InputLabel>
        <Select
            labelId={`${name}-id`}
            id={`${name}-id-select`}
            value={value}
            label={label}
            name={name}
            onChange={onChange}
            disabled ={disabled}
        >
            {items.map((item, index) => (

                <MenuItem key={`${item.value}+${index}`} value={item.value}>{ item.label}</MenuItem>
            )
            )}
            
        </Select>
    </FormControl>
}
TaskSelectField.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired
            }
        ).isRequired
    )
    
}
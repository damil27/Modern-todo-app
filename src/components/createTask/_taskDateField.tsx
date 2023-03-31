import React, { FC, ReactElement} from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IdateField } from './interface/IdateField';
import PropTypes from "prop-types"
// import { TextField } from '@mui/material';

export const TaskDateField: FC<IdateField> = (props): ReactElement => {

  // const [date, setDate] = useState<Date | null>(null)

  const {value, onChange = (date) =>console.log(date), disabled= false} = props
    return (<>
    
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        
        <DatePicker
            label="Task Date"
            value={value}
            disabled={disabled}
            onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
    </>)
}

TaskDateField.propTypes =  {
  disabled: PropTypes.bool,
  onChange:PropTypes.func,
  value: PropTypes.instanceOf(Date),
}
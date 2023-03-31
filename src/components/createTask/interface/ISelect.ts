import { Idisabled } from "./IDisabled";
import { SelectChangeEvent } from "@mui/material";

export interface ISelectItems {
  value?: string;
  label?: string;
}

export interface ISelectfield extends Idisabled {
  name?: string;
  label?: string;
  value?: string;
  onChange?: (e: SelectChangeEvent) => void;
  items?: ISelectItems[];
}

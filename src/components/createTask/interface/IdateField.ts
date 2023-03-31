// import React from "react";

import { Idisabled } from "./IDisabled";

export interface IdateField extends Idisabled {
    value?: (Date | null),
    onChange?: (date: Date | null) => void
}
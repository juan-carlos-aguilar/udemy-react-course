import React from "react";
//import { InputProps } from "./interface";

export const Input = React.forwardRef<HTMLInputElement>((props, ref) => {
    return(
        <input ref={ref} />
    )
})


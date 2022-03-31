import { useState } from "react";

export const useToggle = (initialValue: any, toggleArr: any) => {
    const [value, setValue] = useState(initialValue);
    return [
        value,
        {
            set: setValue,
            toggle: () => setValue((val: any) => toggleArr.filter((x: any) => x !== val)?.[0])
        }
    ];
};

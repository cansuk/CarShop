import { useState } from "react";

export const useToggle = (initialValue, toggleArr) => {
    const [value, setValue] = useState(initialValue);
    return [
        value,
        {
            set: setValue,
            toggle: () => setValue(val => toggleArr.filter(x => x !== val)?.[0])
        }
    ];
};

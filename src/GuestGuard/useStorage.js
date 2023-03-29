import { useState } from 'react';

function useStorage(name) {
    const getValue = () => {
        return localStorage.getItem(name);
    };

    const [value, setValue] = useState(getValue());

    const saveValue = (value) => {
        localStorage.setItem(name, value);

        setValue(value);
    };

    const resetValue = () => {
        localStorage.removeItem(name);

        setValue(null);
    };

    return [value, saveValue, resetValue]
}

export default useStorage;
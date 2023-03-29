import { useState } from 'react';

export const useForm = <T extends Object>( initState: T ) => {
    
    const [state, setState] = useState( initState );

    //? Generic definition: <K extends Object>
    //? Any letter can be used. Example: "K"
    //? Fits or what receives function
    const onChange = <K extends Object>( value: K, field: keyof T ) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return {
        // Properties
        ...state,
        form: state,

        // Methods
        onChange,
    }
}
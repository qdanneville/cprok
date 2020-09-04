import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

const useHeaderTitle = (title) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_TITLE', payload: title });
    }, [])
}

export default useHeaderTitle;


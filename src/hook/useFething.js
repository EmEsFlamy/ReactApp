import { useState } from 'react';

export const useFething = (callback) => {
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...arg) => {
        try {
            setIsLoading(true);
            await callback(...arg);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    } 

    return [fetching, isloading, error];
}


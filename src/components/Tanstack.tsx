import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

function Tanstack() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('https://tomtoc-api.vercel.app/products'),
    });

    if (isLoading) {
        return <p>'Loading...'</p>;
    }

    console.log(data?.data);
    return <div>Tanstack</div>;
}

export default Tanstack;

// https://api.github.com/repositories/1300192/issues?page=5&per_page=10

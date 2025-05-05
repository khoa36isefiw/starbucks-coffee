import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';

function Tanstack() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: () => axios.get('https://tomtoc-api.vercel.app/products'),
    });

    if (isLoading) {
        return <p>'Loading...'</p>;
    }

    console.log(data?.data);
    return (
        <div>
            Tanstack
            <TanstackPagiation />
        </div>
    );
}

export default Tanstack;

// https://api.github.com/repositories/1300192/issues?page=5&per_page=10

function TanstackPagiation() {
    const [page, setPage] = useState(1); // page state
    const perPage = 10;

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ['products', page], // phân biệt cache theo page
        queryFn: () =>
            axios
                .get(
                    `https://api.github.com/repositories/1300192/issues?page=${page}&per_page=${perPage}`,
                )
                .then((res) => res.data),
        staleTime: 30000, // dữ liệu tươi trong 5s
        gcTime: 60 * 1000,
        placeholderData: (previousData) => previousData, // sẽ giữ lại data cũ khi chưa hoàn toàn loading new data mới
    });

    return (
        <div>
            <h2>GitHub Issues</h2>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data?.map((issue: any) => (
                        <li key={issue.id}>
                            #{issue.number}: {issue.title}
                        </li>
                    ))}
                </ul>
            )}

            <div style={{ marginTop: '20px' }}>
                <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
                    Previous
                </button>
                <span style={{ margin: '0 10px' }}>Page {page}</span>
                <button
                    onClick={() => setPage((p) => p + 1)}
                    disabled={data?.length < perPage} // disable nếu ít hơn 10 item
                >
                    Next
                </button>
            </div>

            {isFetching && <p style={{ color: 'orange' }}>Fetching new data...</p>}
        </div>
    );
}

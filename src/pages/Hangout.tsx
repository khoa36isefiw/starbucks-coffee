    import React, { useState, useEffect } from 'react';
    type User = {
        id: 1;
        name: 'Leanne Graham';
        username: 'Bret';
        email: 'Sincere@april.biz';
        address: {
            street: 'Kulas Light';
            suite: 'Apt. 556';
            city: 'Gwenborough';
            zipcode: '92998-3874';
            geo: {
                lat: '-37.3159';
                lng: '81.1496';
            };
        };
        phone: '1-770-736-8031 x56442';
        website: 'hildegard.org';
        company: {
            name: 'Romaguera-Crona';
            catchPhrase: 'Multi-layered client-server neural-net';
            bs: 'harness real-time e-markets';
        };
    };
    function UserList() {
        const [users, setUsers] = useState<User[]>([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users') // API giả lập danh sách user
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Lỗi khi lấy dữ liệu!');
                    }
                    return response.json();
                })
                .then((data) => {
                    setUsers(data);
                    setLoading(false);
                })
                .catch((error) => {
                    setError(error.message);
                    setLoading(false);
                });
        }, []);

        if (loading) return <p>⏳ Đang tải...</p>;
        if (error) return <p>❌ {error}</p>;

        return (
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }

    export default UserList;

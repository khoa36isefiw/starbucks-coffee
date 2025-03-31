import { useState, useEffect } from 'react';

function LifecycleExample() {
    const [count, setCount] = useState(0);

    // 🌱 Mounting - Chạy 1 lần khi component được tạo
    useEffect(() => {
        console.log('Component Mounted!');

        return () => {
            console.log('Component Unmounted!'); // 🚀 Unmounting - Dọn dẹp trước khi component bị xóa
        };
    }, []);

    // 🔄 Updating - Chạy mỗi khi count thay đổi
    useEffect(() => {
        console.log(`Count updated: ${count}`);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default LifecycleExample;

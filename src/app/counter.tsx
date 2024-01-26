'use client';

import { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 1) {
            console.log(1);
        }
        if (count > 2) {
            console.log(2);
        }
        if (count > 100) {
            console.log(10);
        }
    });

    return (
        <div>
            <div>Counter Component (Client)</div>
            <p className="count">You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

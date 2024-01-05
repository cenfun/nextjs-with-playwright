import Link from 'next/link';

import Counter from './counter';

export default function Page() {
    return (
        <div>
            <h1>Hello, Next.js!</h1>
            <Link href="/about">About</Link>
            <p>
                Page Home
            </p>
            <Counter></Counter>
        </div>
    );
}

import Link from 'next/link';

import { request } from './actions';

export default async function Page() {

    const data = await request({
        id: 1
    });

    return (
        <div>
            <h1>About</h1>
            <Link href="/">Home</Link>
            <p>
                Page About
            </p>
            <div>{ data }</div>
        </div>
    );
}

'use server';

import v8 from 'v8';

const dir = process.env.NODE_V8_COVERAGE;

export async function GET(request: Request) {

    v8.takeCoverage();

    // waiting for writing coverage to disk
    await new Promise((resolve) => {
        setTimeout(resolve, 500);
    });

    return Response.json({
        dir: `${dir}`
    });
}

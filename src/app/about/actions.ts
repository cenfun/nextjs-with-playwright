'use server';

const handleData = (payload) => {
    if (payload.id === 1) {
        return 'success';
    }

    return 'error';
};

export async function request(payload) {
    console.log('payload', payload);

    const res = await handleData(payload);

    return `response: ${res}`;
}

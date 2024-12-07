
const nextConfig = {

    experimental: {
        // https://nextjs.org/docs/app/api-reference/next-config-js/turbo
        turbo: {
            treeShaking: !process.env.NODE_V8_COVERAGE
        }
    }
};


export default nextConfig;

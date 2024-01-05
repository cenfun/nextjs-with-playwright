const nextConfig = {

    webpack: (config, options) => {

        Object.defineProperty(config, 'devtool', {
            get() {
                return 'source-map';
            },
            set() {}
        });

        return config;
    }
};

export default nextConfig;

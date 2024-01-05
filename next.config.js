export default {
    webpack: (config, options) => {

        config.devtool = 'source-map';
        config.optimization = {
            minimize: false
        };

        return config;
    }
};

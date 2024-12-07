export default {
    // logging: 'debug',
    name: 'Next.js V8 Coverage Report',

    entryFilter: {
        // client side

        'node_modules': false,
        'turbopack': false,

        '/static/chunks/node_modules': false,
        '/static/chunks/src': false,

        '/static/chunks/': true,

        // server side
        'root of the server': false,
        '/server/chunks/': true

    },

    sourceFilter: {
        'node_modules': false,
        'turbopack': false,
        '/proxy.js': false,
        '*': true
    },

    reports: ['v8', 'console-details']
};

const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@background': path.resolve(__dirname, 'src/assets/background'),
            '@image': path.resolve(__dirname, 'src/assets/image'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@requests': path.resolve(__dirname, 'src/requests'),
            '@types': path.resolve(__dirname, 'src/types'),
        }
    }
};

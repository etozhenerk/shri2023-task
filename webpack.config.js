const path = require("path");

const config = {
    entry: "./src/script.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    mode: "production",
    optimization: {
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
        ],
    },
};

module.exports = () => {
    return config;
};

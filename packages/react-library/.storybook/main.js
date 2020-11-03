const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.(ts|tsx|js|jsx|mdx)"],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        {
            name: "@storybook/preset-create-react-app",
            options: {
                tsDocgenLoaderOptions: {
                    tsconfigPath: path.resolve(__dirname, "../tsconfig.json")
                }
            }
        },
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true
            }
        },
        "storybook-addon-specifications"
    ],
    webpackFinal: config => {
        console.log("__dirname", __dirname);
        config.resolve.alias["@"] = path.resolve(__dirname, "../src/");

        return config;
    }
};

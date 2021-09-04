/* craco.config.js */
//const CracoLessPlugin = require('craco-less');
const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");
module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
          /*   options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1da57a' },
                        javascriptEnabled: true,
                    },
                },
            }, */
            options: {
                customizeThemeLessPath: path.join(__dirname, "src/custom/myTheme.less"),
                lessLoaderOptions: { lessOptions:{ javascriptEnabled: true,}}
            }
        },
    ],
};
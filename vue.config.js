module.exports = {
    outputDir: "dist",
    devServer: {
        proxy: {
            "^api": {
                target: "/",
            },
        },
    },
};

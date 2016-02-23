module.exports = {
    "postcss-import": {
        onImport: function(sources) {
            global.watchCSS(sources, this.from);
        }
    },
    "autoprefixer": {
        browsers: "> 5%"
    },
    "cssnano": {
        autoprefixer: false
    }
};

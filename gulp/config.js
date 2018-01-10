var dest = "./public";
var src = './assets';
var demoSrc = './demos';

module.exports = {
    html: {
        src: [
            'index.html'            
        ],
        dest: dest
    },
    sass: {
        src: [
            src + "/styles/styles.scss"
        ],
        outputName: 'styles.css',
        dest: dest + "/styles"
    },
    scripts: {
        src: [
            src + "/scripts/*.js"
        ],
        dest: dest + "/js"
    },
    mincss: {


    },
    minjs: {

    },
    fonts: {

    },
    images: {

    },
    browserSync: {
        server: {
            // should match `dest` in
            // path-config.json
            baseDir: './public'
        }
    },


};
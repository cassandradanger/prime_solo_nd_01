module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify: {
        //    options:{
        //        banner: '/*! <%=pkg.name%><%=grunt.template.today("yyyy-mm-dd")%>*/\n'
        //    },
        //    build: {
        //        src: 'node_modules/bootstrap/dist/bootstrap.min.css',
        //        dest: 'server/public/assets/styles/bootstrap.min.css'
        //    }
        //},
        copy: {
            main: {
                expand: true,
                cwd:"node_modules/",
                src:[
                    "bootstrap/dist/css/bootstrap.min.css",
                    "bootstrap/dist/css/bootstrap.css.map",
                    "bootstrap/dist/js/bootstrap.min.js",
                    "bootstrap/fonts/glyphicons-halflings-regular.woff2",
                    "bootstrap/fonts/glyphicons-halflings-regular.woff",
                    "bootstrap/fonts/glyphicons-halflings-regular.ttf",
                    "jquery/dist/jquery.min.js",
                    "jquery/dist/jquery.min.map"
                ],
                "dest": "server/public/vendor/"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['copy']);
};
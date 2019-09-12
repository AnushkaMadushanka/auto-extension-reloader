class AutoExtensionReloader {
    constructor(options){
        this.options = options ? options : {}
    }

    apply(compiler) {
        const io = require('socket.io');
        io = io.listen(this.options.port ? this.options.port : 8890);
        compiler.hooks.beforeCompile.tap('AutoExtensionReloaderBeforeCompile', (compilation) => {
            io.emit('build.start', this.options.extensionId);
        });
        compiler.hooks.afterEmit.tap('AutoExtensionReloaderAfterEmit', (compilation) => {
            io.emit('build.end', this.options.extensionId);
        });
    }
}
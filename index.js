class MeowChunkCompositionPlugin {
    apply(compiler) {
        compiler.hooks.done.tapAsync('MeowChunkCompositionPlugin', (stats, callback) => {
            stats.compilation.chunks.filter(chunk => {
                const modulesFiles = Array.from(chunk.modulesIterable, (m => m.userRequest));
                console.log();
                console.log('\x1b[35m', '----------- (=♡ ᆺ ♡=) -------------');
                console.log('\x1b[37m', `Chunk ${chunk.id} consists of:`);
                console.log("\x1b[33m",`${modulesFiles.map(m => `\n${m}`)}`);
                console.log("\x1b[37m",`This chunk reason is: ${chunk.chunkReason ? chunk.chunkReason : 'unfortunately unknown'} \n and it goes to these files: ${chunk.files}`);
                console.log("\x1b[35m", '--------- ₍⸍⸌̣ʷ̣̫⸍̣⸌₎ ₍⸍⸌̣ʷ̣̫⸍̣⸌₎ ₍⸍⸌̣ʷ̣̫⸍̣⸌₎ ---------');
                console.log();
            });
            callback();
        })
    }
}

module.exports = MeowChunkCompositionPlugin;
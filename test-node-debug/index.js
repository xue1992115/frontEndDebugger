const fs = require('fs/promises');
console.log(process.argv);
(async function() {
    const fileContent = await fs.readFile('./package.json', {
        encoding: 'utf-8'
    });
    
    await fs.writeFile('./package2.json', fileContent);
})();
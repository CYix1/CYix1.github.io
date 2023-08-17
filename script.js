const fs = require('fs');
const path = require('path');
function GetHierachy(path)
{
    const subPaths = [];

    function traverseDirectory(currentPath) {
        const items = fs.readdirSync(currentPath);

        items.forEach(item => {
            const itemPath = path.join(currentPath, item);
            subPaths.push(itemPath);

            if (fs.statSync(itemPath).isDirectory()) {
                traverseDirectory(itemPath);
            }
        });
    }

    traverseDirectory(basePath);
    return subPaths;

}
console.log(GetHierachy("SubPages"));
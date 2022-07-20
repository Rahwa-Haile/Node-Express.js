const path = require('path')

//This property returns platform specific separator
console.log(path.sep);


//A method which joins a sequence of path segments using the platform specific separator
//Anywhere wala ab git ignore ewn folder aga tshfi you start with /

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath);


//base name
const baseName = path.basename(filePath)
console.log(baseName);


//absolute path

const pathResolve = path.resolve(__dirname, '/content', 'subfolder', 'test.txt')
console.log(pathResolve);
console.log(__dirname);




//Now you might be wondering why would we ever need this but remember this is going to be running in different env't. so the path to whatever the resource in my local machine is going to be different from the path in that env't. (hatewtew 1:10 ab video)
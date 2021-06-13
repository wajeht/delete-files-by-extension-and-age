const DeleteFileByExtensionAndAge = require('./src/DeleteFileByExtensionAndAge.js');

// ------------------------------ MAIN ------------------------------
(function main() {
    // constants
    const CURRENT_PATH = 'C:\\Users\\konyein\\Desktop\\test';
    const FILE_EXTENSION = 'txt';
    const DAYS = 14;

    // call the class we created and do the operation
    const myTask = new DeleteFileByExtensionAndAge();
    myTask.getFilesRecursively(CURRENT_PATH, FILE_EXTENSION, DAYS);
    myTask.printFilesToDelete();
    myTask.deleteFiles();
})();

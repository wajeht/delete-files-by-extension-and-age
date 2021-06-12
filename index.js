const DeleteFileByExtensionAndAge = require('./DeleteFileByExtensionAndAge.js');

const CURRENT_PATH = '/Users/konyein/Desktop/test';
const FILE_EXTENSION = 'json';
const DAYS = 14;

// -------------------- MAIN --------------------
(function main() {
    const myTask = new DeleteFileByExtensionAndAge();
    myTask.getFilesRecursively(CURRENT_PATH, FILE_EXTENSION, DAYS);
    myTask.printFilesToDelete();
})();

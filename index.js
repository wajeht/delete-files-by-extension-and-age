const DeleteFileByExtensionAndAge = require("./src/DeleteFileByExtensionAndAge.js");
const config = require("./config.json");

(function main() {
  // call the class we created and do the operation
  const myTask = new DeleteFileByExtensionAndAge();
  myTask.getFilesRecursively(config.PATH, config.FILE_EXTENSION, config.DAYS);
  myTask.printFilesToDelete();
  myTask.deleteFiles();
})();

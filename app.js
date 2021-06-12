const fs = require('fs');
const path = require('path');
const FILES_TO_DELETE = [];

// ---------- ONLY CHANGE THESE CONSTANTS START ----------
const CURRENT_PATH = '/Users/konyein/Desktop/test';
const FILE_EXTENSION = 'json';
const DAYS = 14;
// ---------- ONLY CHANGE THESE CONSTANTS END ----------

// -------------------- CUSTOM FUNCTIONS --------------------
/**
 * Figure out how old the file is.
 * @param {String} file
 * @returns {Number}
 */
function findOutFileAge(file) {
    const lastModifiedDateTime = new Date(fs.statSync(file).mtime).getTime();
    const currentDateTime = new Date().getTime();
    const fileAge = Math.floor((currentDateTime - lastModifiedDateTime) / (1000 * 3600 * 24));
    return fileAge;
}

/**
 * Get certain files recursively that are older than certain days.
 * @param {String} givenPath
 * @param {String} givenExtension
 * @param {Number} givenDays
 * @returns {Array}
 */
function getFilesRecursively(givenPath, givenExtension, givenDays) {
    try {
        // read all the files and folders
        fs.readdirSync(givenPath).forEach((currrentFile) => {
            const currrentFileAbsolutePath = path.join(givenPath, currrentFile);

            // if you see a folder
            if (fs.statSync(currrentFileAbsolutePath).isDirectory()) {
                // keep reading untill you don't see a sub folder
                return getFilesRecursively(currrentFileAbsolutePath, givenExtension, givenDays);
            }
            // if you don't see a folder than, we've found the file
            // we can start to do whatever we want the files we've found
            else {
                const daysOld = findOutFileAge(currrentFileAbsolutePath);
                const currentFileType = currrentFileAbsolutePath.split('.').pop();

                // then we filter out the file extension and how old the file is
                if (currentFileType == givenExtension && daysOld >= givenDays) {
                    // if the file met the crieta we set, push it to the array as object. So we can do whatever we want
                    return FILES_TO_DELETE.push({
                        path: currrentFileAbsolutePath,
                        lastModifiedDateTime: new Date(fs.statSync(currrentFileAbsolutePath).mtime),
                        daysOld: daysOld,
                    });
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * Delete files from array of paths
 * @param {Array} filePathArray
 */
function deleteFiles(filePathArray) {
    try {
        console.log('');
    } catch (error) {
        console.error(error.message);
    }
}

// -------------------- MAIN --------------------
(function main() {
    // call custom function above
    getFilesRecursively(CURRENT_PATH, FILE_EXTENSION, DAYS);
    console.log(FILES_TO_DELETE);
})();

const fs = require('fs');
const path = require('path');

class DeleteFileByExtensionAndAge {
    #filesToDelete; // private variable

    constructor() {
        this.#filesToDelete = [];
    }

    /**
     * Figure out how old the file is.
     * @param {String} file
     * @returns {Number}
     */
    #findOutFileAge(file) {
        const lastModifiedDateTime = new Date(fs.statSync(file).mtime).getTime();
        const currentDateTime = new Date().getTime();
        const fileAge = Math.floor((currentDateTime - lastModifiedDateTime) / (1000 * 3600 * 24));
        return fileAge;
    }

    /**
     * Get certain files recursively that are older than certain days.
     * @param {String} givenPath
     * @param {String} givenFileExtension
     * @param {Number} givenAgeInDays
     * @returns {Array}
     */
    getFilesRecursively(givenPath, givenFileExtension, givenAgeInDays) {
        try {
            // read all the files and folders
            fs.readdirSync(givenPath).forEach((currrentFile) => {
                const currrentFileAbsolutePath = path.join(givenPath, currrentFile);

                // if you see a folder
                if (fs.statSync(currrentFileAbsolutePath).isDirectory()) {
                    // keep reading untill you don't see a sub folder
                    return this.getFilesRecursively(
                        currrentFileAbsolutePath,
                        givenFileExtension,
                        givenAgeInDays
                    );
                }
                // if you don't see a folder than, we've found the file
                // we can start to do whatever we want the files we've found
                else {
                    const daysOld = this.#findOutFileAge(currrentFileAbsolutePath);
                    const currentFileType = currrentFileAbsolutePath.split('.').pop();

                    // then we filter out the file extension and how old the file is
                    if (currentFileType == givenFileExtension && daysOld >= givenAgeInDays) {
                        // if the file met the crieta we set, push it to the array as object. So we can do whatever we want

                        return this.#filesToDelete.push({
                            path: currrentFileAbsolutePath,
                            lastModifiedDateTime: new Date(
                                fs.statSync(currrentFileAbsolutePath).mtime
                            ),
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
    deleteFiles(filePathArray) {
        try {
            console.log('');
        } catch (error) {
            console.error(error.message);
        }
    }

    /**
     * Print the files that youre going to be deleting
     */
    printFilesToDelete() {
        console.table(this.#filesToDelete);
    }
}

module.exports = DeleteFileByExtensionAndAge;

## delete-files-by-extension-and-age

this is nodejs script to delete certain file type by its own file age. the script will recursively go through all folder and sub folder and keep in track of found file to delete them later.

## how to use

within index.js file there is three constants that are capitalized within config.json file. those are the three variables that you need to be changing. if you are using this script on windows, make sure to put two backward slash on path. other wise it will messed up.

for example (windows):

```json
{
    "PATH": "C:\\Users\\konyein\\Desktop\\test",
    "FILE_EXTENSION": "txt",
    "DAYS": 14
}
```

for example (unix/mac):

```json
{
    "PATH": "/Users/konyein/Desktop/test",
    "FILE_EXTENSION": "txt",
    "DAYS": 14
}
```

if the files end wit .js, .txt, .pdf, you wanna drop the . and only put the extension after the .

## adding the script to windows task scheduler

1. open up 'Task Scheduler', you can do that by searching
2. on the menu bar, click on 'Action' and click 'Create Task'
3. inside 'General' tab, if you want cmd to promt when running script you must enable 'Run only when user is logged on', other wise choose 'Run whether use is logged on or not' and click 'Do not store password'
4. Go to 'Trigger' tab, this is where you set up when you want to run the script
5. after setting up trigger, go to 'Action' tab, and click on new.
6. on new action window, choose 'Start a program'
7. within 'Program/script:' text box, type in the follow command
    ```
    node
    ```
8. within 'Add argument (optional):' text box, point it the script file.

    for example:

    ```c#
    C:\Users\konyein\Development\delete-files-by-extension-and-age\index.js
    ```

9. click ok, you should be good. you can test by running the green play button.

## adding alert when the script runs

1. double click on existing task
2. go to action tab
3. click on new
4. within 'Program/script' text box, type in the following command

    ```
    CMD
    ```

5. within 'Add argument (optional):' text box, type in the follow command

    ```batch
    /C TITLE              delete files by extension and age  &ECHO.&ECHO.&ECHO.              All the log files that are more than 14 days old have been deleted!       &ECHO.&ECHO.&              TIMEOUT 10
    ```

# Contribute

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

# License

Distributed under the MIT License © [wajeht](https://www.github.com/wajeht/). See LICENSE for more information.

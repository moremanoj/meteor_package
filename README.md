# Testing Create and Publish #

Currently there are no functionalities in package

Follow these steps to create and publish new package from separate directory
1.  After installation of meteorJS and creating developers profile at https://www.meteor.com/ use this command :  
    ```
    meteor create --package <username>:<your-package-name> 
    ```
2. This will create and give a boilerplate for packages which will consist of package.js file as entrypoint by default.
3. Furthermore you can add multiple files according to your logic in the package you can follow the detailed guide at https://docs.meteor.com/api/packagejs.html. 
4. Once you are done with your changes you can add those packages locally and try it out in your application with following command: 
    ```
    meteor add <username>:<your-package-name>
    ```
5. You can add the package in application and can make changes to test it in live application.
6. Once all the changes are done you must push this packages code to a separate directory (separate directory is best practice to avoid un necessary commits and source files).
7. After adding it to git respository mention it in package.js files description. In this case it is :  
``` 
    Package.describe({
    name: 'moremanoj:demo-calculate',
    version: '0.0.1',
    summary: 'Testing Publish package',
    git: 'https://github.com/moremanoj/meteor_package.git',
    documentation: 'README.md'
    });
```
8. After pushing it to git one last step is to publish the package. 
    ```
    meteor publish --create 
    ```
9. Look for the package in your profile of "atmosphere" 
    my url looks like this : 

    https://atmospherejs.meteor.com/moremanoj/demo-calculate
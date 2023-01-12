These are the commands we ran in order for everything:
before the start 

- choose where I want my project to be in 
- mkdir live_demo
    (In Mac) create a folder named "live_demo" from current path
- Open vscode -> file -> open folder -> live_demo (in the location you want it) 

Basic Project setup

1. npm init -y 
-> setup for JS project

2. git init 
-> setup for git


Downloads

3. npm i express
-> download express to our dependencies

4. npm i --save-dev typescript
-> download typescript to our devDependencies

5. npm i --save-dev @types/express @types/node
-> download the types express, and node to our devDependencies

6. npm i cors
-> download cors to our dependencies

7. npm i --save-dev @types/cors
-> download the type cors to our devDependencies

8. npm i body-parser
-> download body-parser to our dependencies

9. npm i --save-dev @types/cors
-> download the type body-parser to our devDependencies


Configurations

10. touch .gitignore
-> (In Mac) create a file named ".gitignore" since an extension wasn't specified by default ".txt"

11. Copy the contents of .gitignore given by Shmuela: https://github.com/shmool/remedy/blob/main/.gitignore 

12. npx tsc --init
-> create the tsconfig.json file 

13. in tsconfig.json file line 52 ("outDir") -> uncomment and changed value to "./dist"
  - note : the "./dist" directory won't be copied due to the way .gitignore was written 

14. in tsconfig.json file line 29 ("rootDir") -> uncomment and changed value to "./src"
  - will be uploaded to git

Running Setup

15. in package.json file , key : "scripts" ,
->   enter the following element, "build": "npx tsc",

   Why? to make life easier
   when we will enter the command in the terminal (or CMD): "npm run build" 
   it will go to package.json, key: scripts and run the command: "npx tsc"
   
   The command builds the typesript code into a javasript code, and will take from the ts files from "/src" (due to the "rootDir" configuration we set in step 14) and put it in "/dist" (due to the "outDir" configuration we set in step 13)


16. in package.json file , key : "scripts" ,
   enter the following element, "start": "npx tsc && node ./dist/app.js",
   
   Why? to make life easier
   when we will enter the command in the terminal (or CMD): "npm run start" 
   it will go to package.json, key: "scripts" and
   first run the command: "npx tsc" then it will run a second command "node ./dist/app.js"

   The first, builds the typesript code into javasript code,  and will take from the ts files from "/src" (due to the "rootDir" configuration we set in step 14) and put it in "/dist" (due to the "outDir" configuration we set in step 13))

   The second, runs the result javascript code of "app.js" in "./dist" directory. 


Git set initial commit (note: in step 2 we set up the git with git init)

17. git add .
 -> adds to the next commit the files that were changes except those specified in ".gitignore" or in a  
    directory (folder) which specifed in ".gitignore"

18. git commit -m "initial commit"
->  do a commit with the message "initial commit"


Run the project

19. mkdir src
->  (In Mac) create a folder named "src" in current path

20. mkdir dist
->  (In Mac) create a folder named "dist" from current path

21. cd src
->  (In both Mac and Windows) enter the directory "src"

22. touch app.ts
->  (In Mac) create a file named "app", in the directory "src" since an extension was specified will be ".ts"

23. cd .. 
->  exit the current dirctory to the one above it

24. npm run build
->  see step 15, for further explanation.

25. npm run start
->  see step 16, for further explanation.


Check the server:

28. in src/middle.ts there is further explantions

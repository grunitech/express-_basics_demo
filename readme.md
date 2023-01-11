These are the commands we ran in order for installation:
1. npm init -y 
 setup for JS project

2. git init 
 setup for git

downloads
3. npm i express
 download express to our dependencies

4. npm i --save-dev typescript
 download typescript to our devDependencies

5. npm i --save-dev @types/express @types/node
 download the types express, and node to our devDependencies

6. npm i cors
 download cors to our dependencies

7. npm i --save-dev @types/cors
 download the type cors to our devDependencies

8. npm i body-parser
 download body-parser to our dependencies

9. npm i --save-dev @types/cors
 download the type body-parser to our devDependencies

Configurations
10. touch .gitignore
 (On Mac) create a txt file named ".gitignore"

11. Copy the .gitignore given by Shmuela: https://github.com/shmool/remedy/blob/main/.gitignore 

12. npx tsc --init
  create the tsconfig.json file 

13. in tsconfig.json file line 52 ("outDir") -> uncomment and changed value to "./dist"
  - note : the "./dist" directory won't be copied due to the way .gitignore was written 

14. in tsconfig.json file line 29 ("rootDir") -> uncomment and changed value to "./src"
  - will be uploaded to git

Running Setup
15. in package.json file , key : "scripts" ,
   enter the following element, "build": "npx tsc",

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

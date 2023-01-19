create files
1. cd src 
2. (in mac) touch encryption.ts
3. (in mac) touch jwt.ts
4. cd .. 

add imports
5. npm i bcrypt
6. npm i --save-dev @types/bcrypt
7. npm i jsonwebtoken
8. npm i --save-dev @types/jsonwebtoken

add in package json's scripts
9. "start1": "npx tsc && node ./dist/encryption.js",
10. "start2": "npx tsc && node ./dist/jwt.js",

Note: there changes to the User,Product
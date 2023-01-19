import { User } from './User';
import jwt,{ Jwt } from "jsonwebtoken";

// setup
const secret = "Sod";

const newUser1 = new User(1,"Inbal","hello");
const newUser2 = new User(2,"Idan","world");
const newUser3 = new User(3,"Tal","work");
const newUser4 = new User(4,"Dan","demo");
const newUser5 = new User(5,"Shahar","password");
const objectToJWT = {
    id:4,
    payload: {game:"milhama", time:"16:00"},
    message:"GO"
}

// encode to jwt
const token = jwt.sign(objectToJWT,secret);
console.log(token);

// decode bad
try {
    const success = jwt.verify(token,"BAD");
    console.log(`succ : ${JSON.stringify(success)}`);
} catch (e) {
    console.log("FAIL, Can't go through")
}

// decode good
try {
    const success = jwt.verify(token,secret);
    console.log(`succ : ${JSON.stringify(success)}`);
} catch (e) {
    console.log("FAIL, Can't go through")
}

// // add fields after decode and encode
let temp = ""; 
try {
    const message = jwt.verify(token,secret);
    const sucObj = JSON.parse(JSON.stringify(message));
    sucObj.field = "Bloomfield";
    sucObj.counter = 0;
    temp = jwt.sign(sucObj,secret);
} catch (e) {
    console.log("FAIL, Can't go through")
}
console.log(temp);
// See changes
try {
    const message = jwt.verify(temp,secret);
    console.log(`succ : ${JSON.stringify(message)}`);
} catch (e) {
    console.log("FAIL, Can't go through")
}

// Edit existing fields 
try {
    const message = jwt.verify(temp,secret);
    console.log(`succ : ${JSON.stringify(message)}`);
    const sucObj = JSON.parse(JSON.stringify(message));
    sucObj.counter += 1;
    temp = jwt.sign(sucObj,secret);
} catch (e) {
    console.log("FAIL, Can't go through")
}
try {
    const message = jwt.verify(temp,secret);
    console.log(`succ : ${JSON.stringify(message)}`);
} catch (e) {
    console.log("FAIL, Can't go through")
}

// const newUser1 = {id: 1, name: "Inbal"}
// const newUser2 = {id: 2, name: "Idan"}
// const newUser3 = {id: 3, name: "Tal"}
// const newUser4 = {id: 4, name: "Dan"}
// const newUser5 = {id: 5, name: "Shahar"}
const users = [newUser1,newUser2,newUser3,newUser4,newUser5]

const userToken = jwt.sign({id: newUser5.id},secret);
console.log(userToken);
try {
    const message = jwt.verify(userToken,secret);
    // console.log(`succ : ${JSON.stringify(message)}`);
    const sucObj = JSON.parse(JSON.stringify(message));
    const user:User = users.filter((user => user.id === sucObj.id))[0]
    console.log(`user : ${JSON.stringify(user)}`);
} catch (e) {
    console.log("FAIL, Can't go through")
}

// const userToken1 = jwt.sign({id: 6},secret);
// console.log(userToken);
// try {
//     const message = jwt.verify(userToken1,secret);
//     console.log(`succ : ${JSON.stringify(message)}`);
//     const sucObj = JSON.parse(JSON.stringify(message));
//     const user:User = users.filter((user => user.id === sucObj.id))[0]
//     console.log(`user : ${JSON.stringify(user)}`);
// } catch (e) {
//     console.log("FAIL, Can't go through")
// }

















// // let temp = ""; 
// // try {
// //     const success = jwt.verify(message,"Sod");
// //     // console.log(typeof(success.field))
// //     const sucOb = JSON.parse(JSON.stringify(success));
// //     sucOb.field = "field";
// //     sucOb.i = 2;
// //     temp = jwt.sign(sucOb,secret);
// // } catch (e) {
// //     console.log("FAIL, Can't go through")
// // }

// // try {
// //     const success = jwt.verify(temp,"Sod");
// //     const sucOb = JSON.parse(JSON.stringify(success));
// //     sucOb.i += 1
// //     temp = jwt.sign(sucOb,secret);
// // } catch (e) {
// //     console.log("FAIL, Can't go through")
// // }
// // try {
// //     const success = jwt.verify(temp,"Sod");
// //     console.log(JSON.stringify(success));
// // } catch (e) {
// //     console.log("FAIL, Can't go through")
// // }
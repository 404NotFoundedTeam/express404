import { initializeApp } from "firebase/app";

import { getDatabase, ref, push, set, get, onValue } from 'firebase/database';
import {createUserWithEmailAndPassword,
	onAuthStateChanged,
	getAuth,
	signInWithEmailAndPassword,
	signOut,} from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyB0ZTCRiLEYuyjE6MXkn5o9_vJJvyGKbr4",
	authDomain: "express404.firebaseapp.com",
	databaseURL: "https://express404-default-rtdb.firebaseio.com",
	projectId: "express404",
	storageBucket: "express404.appspot.com",
	messagingSenderId: "619403393587",
	appId: "1:619403393587:web:f8965b267c8ceecb0d4146",
	measurementId: "G-HM3RYJ2W05"
  };
  
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth()

// //Auth
// function createUser (userData, password) {
// 	console.log(userData)
// 	createUserWithEmailAndPassword(auth, userData.email, password)
// 		.then((cred) => {
// 			console.log(cred)
// 			alert("Saytga muvaffaqqiyatli kirdingiz!")
// 			const userData2 = userData;
// 			userData2.uid = cred.user.uid;
// 			isHaveUser(cred.user.uid);
// 			userUid = cred.user.uid;
// 			addUser(userData2)
// 		})
// 		.catch(e => {
// 		})
// }
// function signOutUser (callback = () => {}) {
// 	signOut(auth)
// 		.then(() => {
// 			callback(true);
// 			console.log("user Chiqib ketti")
// 		})
// 		.catch(() => {
// 			callback(false);
// 			console.log("user chiqib keta olmadi")
// 		});
// }

// function signIn(dataUser) {
// 	signInWithEmailAndPassword(auth, dataUser.email, dataUser.password)
// 		.then((cred) => {
// 			isHaveUser(cred.user.uid);
// 			userUid = cred.user.uid;
// 		})
// 		.catch(() => {
// 			alert("parol yoki email xato");
// 		});
// }
// const isSignIn = (callback = () => {}) => {
// 	console.log("sign in boshlandi")
// 	onAuthStateChanged(auth, (user) => {
// 		if (user) {
// 			const uid = user.uid;
// 			console.log("sign in bulgan")
// 			callback(uid);
// 		} else {
// 			console.warn("no sign in");
// 		}
// 	});
// };
// isSignIn((uid) => {
// 	isHaveUser(uid);
// 	userUid = uid;
// });


// //User Functions
// function addUser(userData){
// 	set(ref(db, 'users/' + userData.uid), userData)
// 		.then(() => {
// 		})
// 		.catch(err => console.log(err));
// }
// function updateUserData(data) {
// 	set(ref(db, 'users/' + data.uid), data)
// 		.then(() => {
// 		})
// 		.catch(err => console.log(err));
// }

// function getUserData(uid, callback){
// 	onValue(ref(db, `users/${uid}`), (data) => {
// 		callback(data.val() || {});
// 	})
// }


// Products
function getCategories (callback) {
	onValue(ref(db, `categories/`), (data) => {
		callback(Object.values(data.val() || {}));
	})
}
function getProducts (callback) {
	onValue(ref(db, `products/`), (data) => {
		callback(data.val() || {});
	})
}

const pushCategory = (category) => {
	push(ref(db, `categories`), category)
		.then(() => {
			console.log("category qushildi")
		})
		.catch(err => console.log(err));
}

function pushProduct (category, data) {
	push(ref(db, `products/${category}/`), data)
		.then(() => {
			console.log("data qushildi")
		})
		.catch(err => console.log(err));
}

export {pushProduct, createUserWithEmailAndPassword, auth, getProducts, pushCategory, getCategories}
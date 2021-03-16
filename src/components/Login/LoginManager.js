// // import firebase app
// import firebase from "firebase/app";
// // import firebase authtication
// import "firebase/auth";
// // import firebase configure file
// import firebaseConfig from './firebase.config';

// export const initializeLoginFramework = () =>{
//     if (!firebase.apps.length) {
//         firebase.initializeApp(firebaseConfig);
//       }      
// }


// export const handleGoogleSignIn = () => {  
//     // call firebase provider
//     const googleProvider = new firebase.auth.GoogleAuthProvider();

//     // console.log('ki bahe thik ase..?')
//     return firebase.auth().signInWithPopup(googleProvider)
//       .then(res => {
//         const { displayName, photoURL, email } = res.user;
//         const signedInUser = {
//           isSignedIn: true,
//           name: displayName,
//           email: email,
//           photo: photoURL
//         }
//         return signedInUser;
//         // console.log(displayName, photoURL, email);
//       })
//       .catch(error => {
//         console.log(error);
//         console.log(error.message);
//       });
//   };

//   export const handleFbSignIn = () => {
//       // Call fb Provider
//   const fbProvider = new firebase.auth.FacebookAuthProvider();
//     firebase.auth().signInWithPopup(fbProvider)
//       .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         // var credential = result.credential;

//         // The signed-in user info.
//         var user = result.user;

//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         // var accessToken = credential.accessToken;
//         console.log(user)
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         console.log(error)
//       });
//   }

//   export const handleSignOut = () => {
//     // console.log('out Button clicked')
//     firebase.auth().signOut()
//       .then(res => {
//         const signOutUser = {
//           isSignedIn: false,
//           name: '',
//           photo: '',
//           email: ''
//         }
//         setUser(signOutUser)
//       })
//       .catch(error => {

//       })
//   }

//   export const createUserWithEmailAndPassword = () => {
//     firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = { ...user }
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo)
//       updateUserInfo(user.name)

//     })
//     .catch((error) => {
//       const newUserInfo = { ...user }
//       newUserInfo.error = error.message
//       newUserInfo.success = false;
//       setUser(newUserInfo)

//       // ..
//     });
//   }

//   export const signInWithEmailAndPassword = () => {
      
//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//     .then(res => {
//       const newUserInfo = { ...user }
//       newUserInfo.error = '';
//       newUserInfo.success = true;
//       setUser(newUserInfo)
//       setLoggedInUser(newUserInfo)
//       history.replace(from);
//       console.log(res.user)
//     })
//     .catch((error) => {
//       const newUserInfo = { ...user }
//       newUserInfo.error = error.message
//       newUserInfo.success = false;
//       setUser(newUserInfo)
//     });
//   }

//   export const updateUserInfo = name => {
//     var user = firebase.auth().currentUser;

//     user.updateProfile({
//       displayName: name,
//       // photoURL: "https://example.com/jane-q-user/profile.jpg"
//     }).then(() => {
//       console.log('Update successful.')
//     }).catch((error) => {
//       console.log(error)
//     });
//   }
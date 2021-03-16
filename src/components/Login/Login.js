import React, { useContext } from 'react';
// import firebase app
import firebase from "firebase/app";
// import firebase authtication
import "firebase/auth";
// import firebase configure file
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
// initialize firebase 
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function Login() {
  const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false,
  });
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const history= useHistory();
   const location= useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

  // call firebase provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  // Call fb Provider
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('ki bahe thik ase..?')
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser)
        console.log(displayName, photoURL, email);
      })
      .catch(error => {
        console.log(error);
        console.log(error.message);
      })
  }

  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        // var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        // var accessToken = credential.accessToken;
        console.log(user)
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error)
      });
  }


  const handleSignOut = () => {
    // console.log('out Button clicked')
    firebase.auth().signOut()
      .then(res => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: ''
        }
        setUser(signOutUser)
      })
      .catch(error => {

      })
  }

  const handleSubmit = (event) => {
    // console.log(user.email, user.password)
    if (newUser && user.email && user.password) {
      // console.log("thik ase..?")
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          updateUserInfo(user.name)

        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message
          newUserInfo.success = false;
          setUser(newUserInfo)

          // ..
        });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          setLoggedInUser(newUserInfo)
          history.replace(from);
          console.log(res.user)
        })
        .catch((error) => {
          const newUserInfo = { ...user }
          newUserInfo.error = error.message
          newUserInfo.success = false;
          setUser(newUserInfo)
        });
    }

    event.preventDefault();
  }

  const updateUserInfo = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
      // photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log('Update successful.')
    }).catch((error) => {
      console.log(error)
    });
  }

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6
      const passwordNumber = /\d{1}/.test(event.target.value)
      isFieldValid = (isPasswordValid && passwordNumber)
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo)
    }
  }



  return (
    <div style={{textAlign:'center'}}>
      <h1>Hello man!</h1>
      <h2>Fell free to sign in our app</h2>
      {/* conditioanal Button */}
      {
        user.isSignedIn ? <button onClick={handleSignOut}>Sign out</button> : <button onClick={handleGoogleSignIn}>Sign In</button>
      }
      <br />
      <button onClick={handleFbSignIn}>Sign in with facebook</button>

      {/* conditioanal details && hosse true */}
      {
        user.isSignedIn && <div>
          <img src={user.photo} alt="" />
          <p>Welcome, {user.name}</p>
          <p>Your Email: {user.email}</p>
        </div>
      }
      <h1>Our Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>
      <form onSubmit={handleSubmit}>
        {newUser && <input type="text" onBlur={handleBlur} name="name" placeholder="Enter Your Name" />}
        <br />
        <input type="text" onBlur={handleBlur} name="email" placeholder="Enter Your Email" />
        <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Enter Your Password" />
        <br />
        <input type="submit" value={newUser ? 'SignUp' : 'Sign In'} />
      </form>
      <p style={{ color: "red" }}>{user.error}</p>
      {
        user.success && <p style={{ color: "green" }}>User Account {newUser ? 'Create' : 'logged In'} Succesfully</p>
      }

    </div>
  );
}

export default Login;

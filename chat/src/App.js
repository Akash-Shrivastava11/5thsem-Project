import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'; //document collection from firestore

firebase.initializeApp({
  apiKey: "AIzaSyBwuoSUYaHcC-cN7Xs4V6T3Ug2C9p2Fqas",
  authDomain: "fireship-demos-46789.firebaseapp.com",
  projectId: "fireship-demos-46789",
  storageBucket: "fireship-demos-46789.appspot.com",
  messagingSenderId: "911835712394",
  appId: "1:911835712394:web:ae8ad2cb38ff1476e3d673",    //unique identifier
  measurementId: "G-G51EZZ0LJV"
});

const auth = firebase.auth();
const firestore = firebase.firestore();   // reference to auth and firestore sdk's by 
const analytics = firebase.analytics();   // global reference variable

function App() {

  const [user] = useAuthState(auth);//hook to know wether the user has logged inn

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();   //Creating an instance of the Google provider object
    auth.signInWithPopup(provider);//To sign in with a pop-up window, call signInWithPopup
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');//message collection in firestore that stores the message as a unique object with uid , text
  console.log(messagesRef);
  const query = messagesRef.orderBy('createdAt').limit(25); //createdAt is a timestamp , m

  const [messages] = useCollectionData(query, { idField: 'id' }); //returns array of objects where each object is message
  //useCollectionData hook to listen to updates in real time
  const [formValue, setFormValue] = useState('');  

  //here sendMessage is made asyncronous function
  const sendMessage = async (e) => {
    e.preventDefault();   //to prevent refreshing of page on submit

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>Send</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  //if uid of matches with the current user uid , then definately the message is from sendr side
  //therefore by using unique class sent and recieved we can use css.
  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=""/>
      <p>{text}</p>
    </div>
  </>)
}


export default App;

import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAe9B2FhNok7R1NuAhc2UaZrjfvdWU9-W0",
  authDomain: "emerald-road-216311.firebaseapp.com",
  databaseURL: "https://emerald-road-216311.firebaseio.com",
  projectId: "emerald-road-216311",
  storageBucket: "emerald-road-216311.appspot.com",
  messagingSenderId: "1068042055502"
};
firebase.initializeApp(config);

var ref = firebase.database().ref();
ref.on("value", snapshot => {
  console.log(snapshot.val());
});

class App extends Component {
  add = () => {
    ref
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
  render() {
    return <button onClick={this.add}>Click</button>;
  }
}

export default App;

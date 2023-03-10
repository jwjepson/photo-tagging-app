import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import React, {useEffect, useState} from "react";
import Header from './components/Header';
import Game from './components/Game';
import "../src/styles/app.css";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP-6jVhfKJW5jN5mpiLh4Uf336UDwTwds",
  authDomain: "photo-tagging-app-75587.firebaseapp.com",
  projectId: "photo-tagging-app-75587",
  storageBucket: "photo-tagging-app-75587.appspot.com",
  messagingSenderId: "246975105873",
  appId: "1:246975105873:web:0e3259eef21d2f25f16170"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


function App() {
  return (
    <div className="app">
    <Header/>
    <Game/>
    <Footer/>
    </div>
  )
}

export default App;

import { initializeApp } from "firebase/app";
import {
  getDocs,
  collection,
  getFirestore
} from "firebase/firestore";

// Configuration for my firebase app
import * as firebaseConfig from './firebase.json'

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore()

// Collection reference
const booksRef = collection(db, 'books')

// Get collection data
const books = getDocs(booksRef)
  .then((data) => {
    let books = []
    data.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
}).catch(error => {
  console.log(error.message)
})
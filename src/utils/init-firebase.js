import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDQ4yHcxPPbCnafPCP7x_FL9AtfU3SyroM",
  authDomain: "react-app-b86ba.firebaseapp.com",
  projectId: "react-app-b86ba",
  storageBucket: "react-app-b86ba.appspot.com",
  messagingSenderId: "795029516026",
  appId: "1:795029516026:web:f85e6bb61bf3260ed3e343"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

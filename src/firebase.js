// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSeQYLg-x2kPdHHEyA4W1ecYZeYLtodZU",
  authDomain: "pokemon-card-auction-project.firebaseapp.com",
  databaseURL: "https://pokemon-card-auction-project-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pokemon-card-auction-project",
  storageBucket: "pokemon-card-auction-project.appspot.com",
  messagingSenderId: "397983741393",
  appId: "1:397983741393:web:8d988893a0fa5ee5f39cf0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { firestore };

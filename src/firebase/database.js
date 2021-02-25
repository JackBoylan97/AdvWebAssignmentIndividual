import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCjnDHoaF4i8i6Dqkygoxh8RexNGO1L1Lw",
    authDomain: "advwebindividual.firebaseapp.com",
    projectId: "advwebindividual",
    storageBucket: "advwebindividual.appspot.com",
    messagingSenderId: "695153807335",
    appId: "1:695153807335:web:88bd3bb70b8a2d84767742",
    measurementId: "G-PK4WQPZMC9"
  };


// Initalize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseAuthentication = firebase.auth();
const firebaseFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const userSubmissions = firebaseFireStore.collection("users");

firebaseFireStore.settings({ timestampsInSnapshoot: true });

export const createSubmission = (submission) => {
  //Add user ID property from auth
  submission.userId = firebaseAuthentication.currentUser.uid;
  return userSubmissions
    .doc(submission.userId)
    .collection("submissions")
    .add(submission);
};
export const firestoreQuery = async (internalResults) => {
  const query =  await firebaseFireStore
    .collectionGroup("submissions")
    .where("tags", "array-contains", internalResults).get();
      return query.docs.map((doc)=>{
        return doc.data();
      });
  };

export const deleteUserSubmission = async (selectedDoc) => {
  userSubmissions.doc(firebaseAuthentication.currentUser.uid)
    .collection("submissions")
    .where("tags", "==", selectedDoc).get().then((qSnap)=>{
       qSnap.docs.forEach(doc => doc.ref.delete())
    });
};

export const getAllSubmissions = async () => {
  const query = await userSubmissions
    .doc(firebaseAuthentication.currentUser.uid)
    .collection("submissions")
    .where("userId", "==", firebaseAuthentication.currentUser.uid)
    .get();
  return query.docs.map((doc) => {
    return doc.data();
  });
};

export { firebaseAuthentication, firebaseFireStore, timestamp };

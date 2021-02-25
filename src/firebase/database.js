import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAGDp5Pf4L0JdY2BywfxDI88Abwy09i4G4",
  authDomain: "adv-web-assignment.firebaseapp.com",
  databaseURL:
    "https://adv-web-assignment-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "adv-web-assignment",
  storageBucket: "adv-web-assignment.appspot.com",
  messagingSenderId: "831433916933",
  appId: "1:831433916933:web:c5d9e0caa636c03ebb126c",
  measurementId: "G-J43RTZD1CW",
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

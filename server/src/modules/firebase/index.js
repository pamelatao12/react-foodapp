import firebaseAdmin from "firebase-admin";

const serviceAccount = require("../../../firebase-adminsdk.json");
const DATABASE_URL = "https://food-app-01.firebaseio.com/";

let isInitialized = false;

export const initializeFirebase = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: DATABASE_URL
  });
  isInitialized = true;
};

if (!isInitialized) {
  initializeFirebase();
}

export const firebaseDbApi = firebaseAdmin.database();

export const firebaseAuthApi = firebaseAdmin.auth();

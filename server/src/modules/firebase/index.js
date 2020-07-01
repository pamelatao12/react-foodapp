const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("../../../firebase-adminsdk.json");
const DATABASE_URL = "https://food-app-01.firebaseio.com/";

let isInitialized = false;

const initializeFirebase = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: DATABASE_URL
  });
  isInitialized = true;
};

if (!isInitialized) {
  initializeFirebase();
}

const set = async (path, payload) => {
  const ref = firebaseAdmin.database().ref(path);
  await ref.set(payload);
};

// removes data at specified path
const remove = async path => {
  const ref = firebaseAdmin.database().ref(path);
  await ref.remove();
};

/**
 * Like set, but wraps the write in a transaction and returns whether the write
 * was committed. If the payload function aborts, nothing will be written.
 */
// const setInTransaction = async (
//   path,
//   payloadFunction,
//   onSuccess(committed)
// ) => {
//   const ref = firebaseAdmin
// .database().ref(path);
//   const { committed } = await ref.transaction(
//     payloadFunction,
//     (error, committed) => {
//       if (error) {
//         console.error(`Transaction failed abnormally: ${error}`);
//       } else if (!committed) {
//         console.error("Aborted transaction");
//       } else {
//         onSuccess && onSuccess(committed);
//       }
//     }
//   );
//   return committed;
// };

/**
 * Pushes data to the path as part of a list.
 */
const push = async (path, payload) => {
  const ref = firebaseAdmin
    .database()
    .ref(path)
    .push();
  await ref.set(payload);
  // Get the unique key for the payload.
  return ref.key || "";
};

/**
 * Pushes data to the path as part of a list.
 */
const pushCustomKey = async (path, key, payload) => {
  await firebaseAdmin
    .database()
    .ref(path)
    .child(key)
    .set(payload);
  // Get the unique key for the payload.
  return key || "";
};

/**
 * Reads a static snapshot of the contents at the given database path, as they
 * existed at the time of the read event. If the path is undefined, the root
 * will be used.
 */
const read = path => {
  const ref = firebaseAdmin.database().ref(path);
  return ref.once("value", snapshot => snapshot.val());
};

/**
 * Clears everything in the database. This should be used sparingly and carefully.
 */
const clearAll = () => {
  const ref = firebaseAdmin.database().ref();
  return ref.set(null);
};

exports.set = set;
exports.push = push;
exports.pushCustomKey = pushCustomKey;
exports.read = read;
exports.remove = remove;
exports.clearAll = clearAll;

exports.initializeFirebase = initializeFirebase;

exports.firebaseAuthApi = firebaseAdmin.auth();

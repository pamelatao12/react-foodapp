// /**
//  * Write or replace data to a defined path, like messages/users/<username>.
//  */
// const firebaseDbApi = require("../index");
//
// function writeUserData(userId, name, email) {
//   firebaseDbApi.ref("users/" + userId).set({
//     username: name,
//     email: email
//   });
// }
// writeUserData("1", "userName", "name@gmail.com");
//
// const set = async (path, payload) => {
//   const ref = firebaseDbApi.ref(path);
//   await ref.set(payload);
// };
//
// /**
//  * Like set, but wraps the write in a transaction and returns whether the write
//  * was committed. If the payload function aborts, nothing will be written.
//  */
// // const setInTransaction = async (
// //   path,
// //   payloadFunction,
// //   onSuccess(committed)
// // ) => {
// //   const ref = firebaseDbApi.ref(path);
// //   const { committed } = await ref.transaction(
// //     payloadFunction,
// //     (error, committed) => {
// //       if (error) {
// //         console.error(`Transaction failed abnormally: ${error}`);
// //       } else if (!committed) {
// //         console.error("Aborted transaction");
// //       } else {
// //         onSuccess && onSuccess(committed);
// //       }
// //     }
// //   );
// //   return committed;
// // };
//
// /**
//  * Pushes data to the path as part of a list.
//  */
// const push = async (path, payload) => {
//   const ref = firebaseDbApi.ref(path).push();
//   await ref.set(payload);
//   // Get the unique key for the payload.
//   return ref.key || "";
// };
//
// /**
//  * Reads a static snapshot of the contents at the given database path, as they
//  * existed at the time of the read event. If the path is undefined, the root
//  * will be used.
//  */
// const read = path => {
//   const ref = firebaseDbApi.ref(path);
//   return ref.once("value", snapshot => snapshot.val());
// };
//
// /**
//  * Clears everything in the database. This should be used sparingly and carefully.
//  */
// const clearAll = () => {
//   const ref = firebaseDbApi.ref();
//   return ref.set(null);
// };
//
// exports.set = set;
// exports.push = push;
// exports.read = read;
// exports.clearAll = clearAll;

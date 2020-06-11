const database = require("../firebase/index");
const firebaseAdmin = require("firebase-admin");

const getUserRecord = async email => {
  return firebaseAdmin
    .auth()
    .getUserByEmail(email)
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log("Successfully fetched user data:", userRecord.toJSON());
      return userRecord.toJSON();
    })
    .catch(function(error) {
      console.log("Error fetching user data:", error);
    });
};

const createUser = async (req, res) => {
  const { first, last, email } = req.query;
  console.log("attempting to add user to database: ", email);
  const user = await getUserRecord(email);
  database.set("users/" + user.uid, {
    first: first,
    last: last,
    email: email,
    events: [],
    restaurants: []
  });
  console.log("user added to database");
  return user;
};

const initializeUserRoutes = router => {
  router.get("/user", createUser);
};

exports.initializeUserRoutes = initializeUserRoutes;

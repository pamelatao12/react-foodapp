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

const createEvent = async (req, res) => {
  const { title, date, location, guests, notes } = req.query;
  console.log("attempting to add event to database: ", title);
  // const event = await getEventRecord(email);
  database.push("events/", {
    title: title,
    date: date,
    location: location,
    guests: guestList,
    notes: notes
  });
  console.log("event added to database");
  // return event;
};

const initializeEventRoutes = router => {
  router.get("/event", createEvent);
};

exports.initializeEventRoutes = initializeEventRoutes;

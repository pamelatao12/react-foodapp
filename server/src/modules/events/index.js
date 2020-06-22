const database = require("../firebase/index");
const firebaseAdmin = require("firebase-admin");

const getEventRecord = async eventId => {
  return (await database.read(`events/${eventId}`)).val();
};

// create event in database, link event to user who created it
// return list of user's events
const createEvent = async (req, res) => {
  const { title, date, location, guests, notes } = req.query;
  console.log("attempting to add event to database: ", title);
  // const event = await getEventRecord(email);
  const key = await database.push("events/", {
    title: title,
    date: date,
    location: location,
    guests: guests,
    notes: notes
  });
  const eventRecord = await getEventRecord(key);
  console.log("event:", eventRecord);
  addEventToUserRecord(key);
  console.log("event added to database");
  // return event;
};

const addEventToUserRecord = async eventId => {
  const user = firebaseAdmin.auth().onAuthStateChanged(async user => {
    if (user) {
      // User is signed in.
      console.log("curr user: ", user);
      const uid = user.uid;
      const eventsList = (await database.read(`users/${uid}/events`)).val();
      console.log(eventsList);
    } else {
      // No user is signed in.
      console.log("User not signed in");
    }
  });
};

const initializeEventRoutes = router => {
  router.get("/event", createEvent);
};

exports.initializeEventRoutes = initializeEventRoutes;

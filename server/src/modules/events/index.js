const database = require("../firebase/index");
const firebaseAdmin = require("firebase-admin");

const getEventRecord = async eventId => {
  return (await database.read(`events/${eventId}`)).val();
};

const getUserEventsList = async (req, res) => {
  console.log("getting user events list");
  const { user } = req.query;
  res.send((await database.read(`users/${user}/events`)).val());
};

// create event in database, link event to user who created it
// return list of user's events
const createEvent = async (req, res) => {
  const { title, date, location, guests, notes, user } = req.query;
  console.log("attempting to add event to database: ", title);
  const key = await database.push("events/", {
    title: title,
    date: date,
    location: location,
    guests: guests,
    notes: notes
  });
  const eventRecord = await getEventRecord(key);
  console.log("event:", eventRecord);
  res.send(await addEventToUserRecord(key, eventRecord, user));
};

const addEventToUserRecord = async (eventId, eventRecord, user) => {
  console.log("user: ", user);
  if (user != undefined) {
    let eventsList = (await database.read(`users/${user}/events`)).val();
    console.log("user's events: ", eventsList);
    if (!eventsList) {
      eventsList = {};
    }
    eventsList[eventId] = eventRecord;
    await database.pushCustomKey(`users/${user}/`, "events", eventsList);
    console.log("events list returned:", eventsList);
    return eventsList;
  } else {
    console.log("Error: User not logged in");
  }
};

// deletes event from user record and returns updated list of events
const deleteEvent = async (req, res) => {
  const { user, event } = req.query;
  await database.remove(`users/${user}/events/${event}`);
  res.send((await database.read(`users/${user}/events`)).val());
};

const updateEvent = async (req, res) => {
  const { user, event, title, date, location, guests, notes } = req.query;
  console.log("guests", guests);
  await database.set(`users/${user}/events/${event}`, {
    title: title,
    date: date,
    location: location,
    guests: guests,
    notes: notes
  });
  res.send((await database.read(`users/${user}/events`)).val());
};

const initializeEventRoutes = router => {
  router.get("/event", createEvent);
  router.get("/eventList", getUserEventsList);
  router.get("/deleteEvent", deleteEvent);
  router.get("/editEvent", updateEvent);
};

exports.initializeEventRoutes = initializeEventRoutes;

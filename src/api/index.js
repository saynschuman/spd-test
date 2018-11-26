import { firebaseInited } from "./config";

export const ref = firebaseInited.db.ref();
// ref.on("value", snapshot => {
//   console.log(snapshot.val());
// });

export const set = (key, value) => {
  ref
    .set({
      [key]: value
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const update = (key, value) => {
  ref
    .update({
      [key]: value
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

export const remove = key => {
  ref
    .set({
      [key]: null
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
};

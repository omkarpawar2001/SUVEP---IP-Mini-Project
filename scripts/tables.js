import { db } from "./firebase_config.js";
document.getElementById("users").onclick = SelectAllData;

function SelectAllData() {
  firebase
    .database()
    .ref("student")
    .on("value", function (AllRecords) {
      AllRecords.forEach(function (CurrentRecord) {
        var name = CurrentRecord.val().NameOfStudent;
        var roll = CurrentRecord.val().RollNo;
        var sec = CurrentRecord.val().Section;
        var gen = CurrentRecord.val().Gender;
        AddItemsToTable(name, roll, sec, gen);
      });
    });
}
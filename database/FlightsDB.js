import * as SQLite from "expo-sqlite";
const database = SQLite.openDatabase("Flights.db");
export function Init() {
  const prom = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE If Not exists Tbl_Flights(icao24 Text not null ,callsign Text not null, origin_country Text not null,longitude REAL null, latitude REAL null, baro_altitude REAL null ,on_ground INTEGER null,geo_altitude REAL null)",
        [],
        () => {
          console.log("Success from create table Tbl_Flights");
          resolve();
        },
        (_, error) => {
          console.log("error from create table Tbl_Flights");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom;
}

export function AddFlightToTable({ icao24, callsign, origin_country, longitude, latitude, baro_altitude, on_ground, geo_altitude }) {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Insert Into Tbl_Flights(icao24 ,callsign, origin_country , longitude, latitude, baro_altitude ,on_ground ,geo_altitude) Values(?,?,?,?,?,?,?,?)",
        [icao24 ,callsign, origin_country , longitude, latitude, baro_altitude ,on_ground ,geo_altitude],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom
}

export function DeleteAllFlightFromTable() {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Delete From Tbl_Flights",
        [],
        (_, result) => {
          console.log("Success Delete Flights");
          resolve(result);
        },
        (_, error) => {
          console.log("error Delete Flights");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom
}

export function GetTopNineCountryFlights () {
  const prom = new Promise((resolve, reject) => {
    database.transaction((conn) => {
      conn.executeSql(
        "Select origin_country, Count(origin_country) as amount from Tbl_Flights Where on_ground = 0 Group By origin_country Order By amount desc Limit 9",
        [],
        (_, result) => {
          console.log("Success get Flights");
          resolve(result);
        },
        (_, error) => {
          console.log("error get Flights");
          console.log(error);
          reject();
        }
      );
    });
  });
  return prom
}


// export function SearchPerson(text) {
//   const prom = new Promise((resolve, reject) => {
//     database.transaction((conn) => {
//       conn.executeSql(
//         "Select * From Person where Name like ?",
//         ['%' + text + '%'],
//         (_, result) => {
//           console.log("Success SearchPerson");
//           //  console.log("result", result);
//           resolve(result);
//         },
//         (_, error) => {
//           console.log("error SearchPerson");
//           console.log(error);
//           reject();
//         }
//       );
//     });
//   });
//   return prom
// }
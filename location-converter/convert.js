const fs = require("fs");
const csv = require("csv-parser");

const states = [];
const cities = [];

const indiaStates = {};

console.log("🔁 Reading states.csv...");
fs.createReadStream("states.csv")
  .pipe(csv())
  .on("data", (row) => {
    if (row.country_id === "101") {
      states.push({
        id: row.id,
        name: row.name,
        state_code: row.state_code,
      });
      indiaStates[row.id] = {
        state: row.name,
        districts: {},
      };
    }
  })
  .on("end", () => {
    console.log(`✅ Loaded ${states.length} Indian states`);

    console.log("🔁 Reading cities.csv...");
    fs.createReadStream("cities.csv")
      .pipe(csv())
      .on("data", (row) => {
        const stateId = row.state_id;
        const cityName = row.name;

        if (indiaStates[stateId]) {
          const district = row.name; // simplified
          if (!indiaStates[stateId].districts[district]) {
            indiaStates[stateId].districts[district] = [];
          }
          indiaStates[stateId].districts[district].push(cityName);
        }
      })
      .on("end", () => {
        console.log("✅ Finished loading cities");

        const final = [];

        Object.values(indiaStates).forEach((state) => {
          const districts = Object.entries(state.districts).map(
            ([district, cities]) => ({
              name: district,
              cities: [...new Set(cities)],
            })
          );
          final.push({
            state: state.state,
            districts,
          });
        });

        fs.writeFileSync(
          "indiaStatesCities.json",
          JSON.stringify(final, null, 2)
        );
        console.log("✅ JSON saved as indiaStatesCities.json");
      });
  });

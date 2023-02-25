const launches = new Map();
let lastestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2026"),
  target: "Kepler-442 b",
  customers: ["Top G", "Ve Trang"],
  upcoming: true,
  success: true,
};
launches.set(launch.flightNumber, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  lastestFlightNumber++;
  launches.set(
    lastestFlightNumber,
    Object.assign(launch, {
      flightNumber: lastestFlightNumber,
      upcoming: true,
      success: true,
      customers: ["Top G", "Ve Trang"],
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};

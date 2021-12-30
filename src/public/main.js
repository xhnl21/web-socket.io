const socketId = document.querySelector("#socketId");
const user_id = document.querySelector("#user_id"); 
const device_id = document.querySelector("#device_id");
createConnection(socketId.value, user_id.value, device_id.value);

const rider_id = document.querySelector("#rider_id");
const lat = document.querySelector("#lat"); 
const lang = document.querySelector("#lang");
const bearing = document.querySelector("#bearing");
const rlu = document.querySelector("#rlu");
rlu.addEventListener("submit", (e) => {
    e.preventDefault();
    CreateRiderLocationUpdate(rider_id.value, lat.value, lang.value, bearing.value);
});

const emitTo = document.querySelector("#emitTo");
const oscs = document.querySelector("#oscs");
oscs.addEventListener("submit", (e) => {
    e.preventDefault();
    OrderStatusChangeServer(emitTo.value);
});

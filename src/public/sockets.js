const socket = io.connect();

/**
 * recive los msj del back
 */
socket.on("rider_location_changed", debbuger);

/**
 * crea nueva conecion
 * @param {integer} socketId
 * @param {integer} user_id
 * @param {integer} device_id
 */
const createConnection = (socketId, user_id, device_id) => {
    socket.emit("createConnection", {
        socketId,
        user_id,
        device_id,
    });
};

/**
 * Rider Location Update
 * @param {integer} rider_id
 * @param {integer} lat
 * @param {integer} lang
 * @param {integer} bearing
 */
const CreateRiderLocationUpdate = (rider_id, lat, lang, bearing) => {
    socket.emit("rider_location_update", {
        rider_id,
        lat, 
        lang, 
        bearing,
    });
};

/**
 * Rider Location Update
 * @param {integer} rider_id
 */
 const OrderStatusChangeServer = (emitTo) => {
    socket.emit("order_status_change_server", 
        emitTo,
    );
};

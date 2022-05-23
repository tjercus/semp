require("dotenv").config();
const SmartMeter = require("node-dsmr");
const mqtt = require("mqtt");

const smartMeterOptions = {
  port: "/dev/ttyUSB0",
  baudrate: 115200, // DSMR 4.2
  databits: 8,
  parity: "none",
};

// topic root for my house
const TOPIC_ROOT = process.env.TOPIC_ROOT || "house";
// topic root for the group of smart energy meter apps
const DOMAIN_ROOT = "SEM";

const smartMeter = new SmartMeter(smartMeterOptions);

const mqttClient = mqtt.connect(process.env.MQTT_BROKER_URL);

smartMeter.on("connected", () => {
  console.log("connected to smart meter");
  mqttClient.publish(`${TOPIC_ROOT}/presence`, "smart meter is online");
});
smartMeter.on("telegram", (telegram) => {
  mqttClient.publish(`${TOPIC_ROOT}/${DOMAIN_ROOT}/telegram`, JSON.stringify(telegram));
});
smartMeter.on("disconnected", () => {
  console.log("... SEMP disconnected from smart meter");
});

console.log(`SEMP connecting to smart meter with broker ${process.env.MQTT_BROKER_URL}`);
mqttClient.publish(`${TOPIC_ROOT}/presence`, "connecting to smart meter");
smartMeter.connect();

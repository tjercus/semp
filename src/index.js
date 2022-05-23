const SmartMeter = require("node-dsmr");
// const mqtt = require("mqtt");

const smartMeterOptions = {
  port: "/dev/ttyUSB0",
  baudrate: 115200,
  databits: 8,
  // parity: "none"
}

// const TOPIC_ROOT = "loef6";

// TODO use broker URL from env
// const mqttBrokerUrl = "mqtt://test.mosquitto.org";

const smartMeter = new SmartMeter(smartMeterOptions);

// const mqttClient = mqtt.connect(mqttBrokerUrl);

smartMeter.on("connected", () => {
  console.log("connected to smart meter");
  // mqttClient.publish(`${TOPIC_ROOT}/presence`, "smart meter is online");
});
smartMeter.on("telegram", telegram => {
  console.log("telegram received", telegram);
  // mqttClient.publish(`${TOPIC_ROOT}/SEM/telegram`, telegram);
});

console.log("SEMP started ...");
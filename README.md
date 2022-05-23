# SEMP

Smart Energy Monitor Publisher. 
Reads the data from the meter and publishes it via MQTT.
You need an MQTT broker (in your LAN or Cloud) to handle the data.

## configuring

You need some environment variables:
- MQTT_BROKER_URL="mqtt://my.broker.com/"

create a file called .env (dot env) and put the envs (keys + values) in it.

## running

### run a local test:
- start your MQTT broker on your LAN
- put the broker URL in the .env file
- npm run start

### run via a systemd demon 

(Ubuntu, Rapsberry PI OS etc.)

see: https://nodesource.com/blog/running-your-node-js-app-with-systemd-part-1/
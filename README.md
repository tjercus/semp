# SEMP

Smart Energy Monitor Publisher. 
Reads the data from the meter and publishes it via MQTT.
You need an MQTT broker (in your LAN or Cloud) to handle the data.

## configuring

You need some environment variables:
- MQTT_BROKER_URL="mqtt://my.broker.com/"
- TOPIC_ROOT="office_nr_9" (defaults to "house")
- (optional) DEBUG='mqttjs*'

create a file called .env (dot env) and put the envs (keys + values) in it.

## running

### run a local test:
- start your MQTT broker on a machine on your LAN
- put the broker URL in the .env file
- npm run start

### run via pm2 

Allows you to 'daemonize' the service, so it runs when you close your terminal to your server, or when
you restart your machine.

https://pm2.keymetrics.io/docs/usage/quick-start/
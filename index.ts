require('dotenv').config(); // eslint-disable-line

import mqtt from "mqtt";
import MilesightUtils from "./lib/milesight/MilesightUtils";


const mqttUsername = process.env.MQTT_USERNAME;
const mqttPassword = process.env.MQTT_PASSWORD;
const mqttUrl = process.env.MQTT_URL;

console.log(process.env)

if (!mqttUrl || !mqttPassword || !mqttUrl) throw new Error("Variable d'environement manquante")

const client = mqtt.connect(mqttUrl, {
    username: mqttUsername,
    password: mqttPassword,
    reconnectPeriod: 5000,
    clientId: "15156156156",
});

const milesightUtils = new MilesightUtils(client, "serial");


client.on("connect", () => {


    client.subscribe("presence", (err: any) => {
        if (!err) {
            console.log("dte");

            client.publish("presence", "Hello mqtt");
        }

    });
});

client.on("message", (topic: any, message: any) => {


    milesightUtils.deleteProfile("f348fd65-b9a5-437e-aa7c-fb8121404c48")

    // f348fd65-b9a5-437e-aa7c-fb8121404c48


    // message is Buffer
    console.log(message.toString());

    // client.end();
});

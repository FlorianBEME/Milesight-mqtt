import {MqttClient} from "mqtt";
import {DeviceAddRequest, PropertiesProfile} from "./types";

class MilesightUtils {
    mqttClient: MqttClient;
    topicRequest: string;

    constructor(mqttClient: MqttClient, gatewayEUI: string) {
        this.mqttClient = mqttClient;
        this.topicRequest = `${gatewayEUI}/request`
    }

    addDevice(device: DeviceAddRequest) {
        const message = {
            type: "ns-api",
            id: "1",
            method: "POST",
            url: "/api/urdevices",
            body: {...device},
        };

        this.mqttClient.publish(this.topicRequest, JSON.stringify(message));
    }

    deleteDevice(devEUI: string) {
        const message = {
            "type": "ns-api",
            "id": "1",
            "method": "DELETE",
            "url": `/api/urdevices/${devEUI}`,
        }

        this.mqttClient.publish(this.topicRequest, JSON.stringify(message));

    }

    addProfile(properties: PropertiesProfile) {
        const message = {
            "type": "ns-api",
            "id": "1",
            "method": "POST",
            "url": "/api/urprofiles",
            "body": {...properties}
        }

        this.mqttClient.publish(this.topicRequest, JSON.stringify(message));
    }

    deleteProfile(id: string) {
        console.log(id)
        const message = {
            "type": "ns-api",
            "id": "1",
            "method": "DELETE",
            "url": `/api/urprofiles/${id}`
        }
        this.mqttClient.publish(this.topicRequest, JSON.stringify(message));

    }


}

export default MilesightUtils;

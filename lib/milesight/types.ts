export type DeviceAddRequest = {
    name: string;
    description: string;
    devEUI: string;
    appKey: string;
    applicationID: string;
    profileId: string;
    fPort: number;
};

export type PropertiesProfile = {
    name: string;
    profile: {
        "factoryPresetFreqs": Array<number>;
        "macVersion": string;
        "maxEIRP": number;
        "regParamsRevision": "A" | "B";
        "rxDROffset1": 0 | 1 | 2 | 3 | 4 | 5;
        "rxDataRate2": number;
        "rxFreq2": number;
        "supports32bitFCnt": boolean;
        "supportsClassB": boolean;
        "supportsClassC": boolean;
        "supportsJoin": boolean;
        "pingSlotPeriod": 32 | 64 | 128 | 256 | 51 | 2 | 1024 | 2048 | 4096;
        "pingSlotDR": number;
        "pingSlotFreq": number;
        "classBTimeout": number;
        "classCTimeout": number;
        "enableUplinkChannels": Array<number>;
    }
}

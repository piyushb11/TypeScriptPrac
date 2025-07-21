"use strict";
class Instagram {
    cameraMode;
    settings;
    lens;
    constructor(cameraMode, settings, lens) {
        this.cameraMode = cameraMode;
        this.settings = settings;
        this.lens = lens;
    }
}
let instaObject = new Instagram("Test", "Test2", "Test3");
console.log("object: " + instaObject.cameraMode);
//# sourceMappingURL=interface.js.map
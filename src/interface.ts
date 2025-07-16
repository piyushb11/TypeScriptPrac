interface TakePhoto{
    cameraMode: string,
    settings: string,
    lens: string
}

class Instagram implements TakePhoto{
    constructor(
    public cameraMode: string,
    public settings: string,
    public lens: string

    ){}
}

let instaObject = new Instagram("Test","Test2","Test3");
console.log("object: "+instaObject.cameraMode);

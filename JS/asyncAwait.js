// function api(country) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("PrintData  :" + country);
//             resolve(200);
//         }, 3000);
//     })
// }

// async function getWeatherData() {
//     await api("UK");
//     await api("USA");
// }

// getWeatherData();

function getData(dataID, getNextData) {
    promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data ", dataID);
            resolve("success....");
            if (getNextData) {
                getNextData();
            }
        }, 1000)
    })
    return promise1
}

async function getWData() {
    for (let i = 0; i < 10; i++) {
        await getData(i);
    }
}

(async function () {
    for (let i = 0; i < 10; i++) {
        await getData(i);
    }
})();

getWData();

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("i am in promise ");
//         // resolve("success")
//         reject("error")
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise is resolved");
// })

// promise.catch((error) => {
//     console.log("rejected ", error)
// })

// resolve ...

// let promise1

// function getData(dataID, getNextData) {
//     promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data ", dataID);
//             resolve("success....");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     })
//     return promise1
// }
// // promise chaning
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     })

// console.log(getData(1))
// setTimeout(() => {
//     console.log(promise1)
// }, 6000);


// reject
// function getData(dataID, getNextData) {
//     promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data ", dataID);
//             reject(Error);
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     })
//     return promise1
// }

// console.log(getData(1))
// setTimeout(() => {
//     console.log(promise1)
// }, 6000);



// function asycn1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     })
// }

// function asycn2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     })
// }


// console.log("fetching data1....");
// asycn1().then((res) => {
//     console.log("fetching data2...")
//     asycn2().then((res) => { });
// });



function fetchUser() {
    return Promise.resolve({ id: 1, name: 'Alice' });
}

function fetchPosts() {
    return Promise.resolve(['Post 1', 'Post 2']);
}

function fetchComments() {
    return Promise.resolve(['Comment 1', 'Comment 2']);
}

Promise.all([fetchUser(), fetchPosts(), fetchComments()])
    .then(([user, posts, comments]) => {
        console.log('User:', user);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
    });




// using async await 
async function fetchAllData() {
    try {
        const [user, posts, comments] = await Promise.all([
            fetchUser(),
            fetchPosts(),
            fetchComments()
        ]);

        console.log('User:', user.name);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    } catch (error) {
        console.error('Something failed:', error);
    }
}

fetchAllData();

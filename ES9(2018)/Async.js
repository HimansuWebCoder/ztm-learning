// finally

// const urls = [
//   "https://swapi.dev/api/people/1",
//   "https://swapi.dev/api/people/2",
//   "https://swapi.dev/api/people/3",
//   "https://swapi.dev/api/people/4",
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((people) => people.json());
//   })
// )
//   .then((array) => {
//     throw Error;
//     console.log("1", array[0]);
//     console.log("2", array[1]);
//     console.log("3", array[2]);
//     console.log("4", array[3]);
//   })
//   .catch(err => console.log("ughhh fix it!", err))
//   .finally(() => console.log('extra'));

// for await of

const urls = [
  "https:jsonplaceholder.typicode.com/users",
  "https:jsonplaceholder.typicode.com/posts",
  "https:jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async function (url) {
        const response = await fetch(url);
        return response.json();
      })
    );
    console.log("users", users);
    console.log("post", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("oops", err);
  }
};

// const loopThroughUrls = (url) => {
//   for (rul of urls) {
//     console.log(url);
//   }
// };

const getData2 = async function () {
  const arrayOfPromise = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromise) {
    const data = await request.json();
    console.log(data);
  }
};

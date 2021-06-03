const greeting = 'Hello Kasia';
console.log(greeting);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(`Title: ${result[0].title} Body: ${result[0].body}`);
};

getData('https://jsonplaceholder.typicode.com/posts');
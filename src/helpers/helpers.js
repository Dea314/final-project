export const randomArray = (arr, num) => {
  const random = [];
  while (random.length < num) {
    const n = Math.floor(Math.random() * arr.length);
    if (random.indexOf(n) === -1) random.push(n);
  }
  return random.map((item) => arr[item]);
};

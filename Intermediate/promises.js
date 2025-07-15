function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = false;
      if (success) {
        resolve("Data fetched Successfully");
      } else {
        reject("Error fetching Data");
      }
    }, 3000);
  });
}
fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

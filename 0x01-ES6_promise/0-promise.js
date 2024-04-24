export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      resolve("Response from API");
    }, 1000);
  });
}


function sanitizeURL(url) {
  return encodeURI(url);
}

// Example usage
var originalURL = "https://www.example.com with spaces";
var sanitizedURL = sanitizeURL(originalURL);
console.log(sanitizedURL); // Output: "https://www.example.com
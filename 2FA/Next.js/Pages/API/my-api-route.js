// pages/api/my-api-route.js
export default function handler(req, res) {
  // Your logic here
  res.status(200).json({ message: 'Hello from Next.js!' });
}

// If you want to handle different HTTP methods:
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else {
    // Handle other HTTP methods
  }
}

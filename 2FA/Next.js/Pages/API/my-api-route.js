// pages/api/my-api-route.js
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  maxDuration: 5, // Maximum execution duration in seconds
};

export default function handler(req, res) {
  // import clerkMiddleware,
  if (req.method === 'POST') {
    // Process a POST request
    // ...
  } else {
    // Handle other HTTP methods
    // ...
  }
  res.status(200).json({ message: 'Hello from Next.js!' });
}

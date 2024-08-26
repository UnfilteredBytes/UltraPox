var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://your-api-endpoint.com/api/v2/resource-servers/66cbbb83813a421125c35653',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer xaMg3CamwAWYyBnzfn3NQtAfMBkPS4Eg',
    'cache-control': 'no-cache'
  },
  data: {
    scopes: [
      { value: 'update:profile', description: 'update user profile' },
      { value: 'read:profile', description: 'read user profile' },
      { value: 'link:profile', description: 'link user profiles' },
      { value: 'update:history', description: 'update history' }
    ]
  }
};

axios.request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

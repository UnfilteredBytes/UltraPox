const axios = require('axios');
let data = JSON.stringify({
  "name": "string",
  "scopes": [
    {
      "value": "string",
      "description": "string"
    }
  ],
  "signing_alg": "HS256",
  "signing_secret": "string",
  "skip_consent_for_verifiable_first_party_clients": true,
  "allow_offline_access": true,
  "token_lifetime": 0,
  "token_dialect": "access_token",
  "enforce_policies": true,
  "client": {},
  "token_encryption": {
    "encryption_key": {
      "name": "string",
      "alg": "RSA-OAEP-256",
      "kid": "string",
      "pem": "string"
    }
  },
  "consent_policy": "transactional-authorization-with-mfa",
  "authorization_details": [
    null
  ],
  "proof_of_possession": {
    "mechanism": "mtls",
    "required": true
  }
});

let config = {
  method: 'patch',
  maxBodyLength: Infinity,
  url: 'https://login.auth0.com/api/v2/resource-servers/:id',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

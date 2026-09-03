# DeployAR Portal

## Netlify configuration

Configure these environment variables in Netlify before deploying:

| Variable | Value |
| --- | --- |
| `MESSAGE_SERVICE_URL` | Public HTTPS URL of the message service, without a trailing slash. |
| `MESSAGE_SERVICE_TOKEN` | The `API_ACCESS_TOKEN` configured on the message service. |

The frontend calls `/.netlify/functions/messages`; the Netlify Function forwards requests to the
message service so `MESSAGE_SERVICE_TOKEN` is never exposed to visitors.
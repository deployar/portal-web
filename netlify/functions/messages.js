exports.handler = async (event) => {
  const serviceUrl = process.env.MESSAGE_SERVICE_URL;
  const accessToken = process.env.MESSAGE_SERVICE_TOKEN;

  if (!serviceUrl || !accessToken) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Message service is not configured.' }) };
  }

  const params = new URLSearchParams(event.queryStringParameters || {});
  try {
    const response = await fetch(`${serviceUrl.replace(/\/$/, '')}/messages?${params}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    return {
      statusCode: response.status,
      headers: {
        'Cache-Control': 'public, max-age=60',
        'Content-Type': 'application/json'
      },
      body: await response.text()
    };
  } catch (error) {
    console.error('Unable to request the message service.', error);
    return { statusCode: 502, body: JSON.stringify({ error: 'Message service is unavailable.' }) };
  }
};

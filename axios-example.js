const { Analytics } = require("@segment/analytics-node");
const axios = require("axios");

const writeKey = process.env.WRITE_KEY;

const analytics = new Analytics({
  writeKey,
  httpClient: (url, { body, ...requestInit }) => {
    // Axios doesn't conform to the fetch spec, so we need to rename `body` to `data`.
    return axios({
      ...requestInit,
      url,
      data: body,
    });
  },
});

analytics.on("error", console.error);

analytics.track({
  event: "Axios Event",
  anonymousId: "123",
  properties: { foo: "bar" },
});

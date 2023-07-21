const { Analytics } = require("@segment/analytics-node");

const writeKey = process.env.WRITE_KEY;

let fetch;
const fetchClient = async (url, requestInit) => {
  if (!fetch) {
    fetch = (await import("node-fetch")).default;
  }
  return fetch(url, requestInit);
};

const analytics = new Analytics({
  writeKey,
  httpClient: fetchClient,
});

analytics.on("error", console.error);

analytics.track({
  event: "Node-Fetch Event",
  anonymousId: "123",
  properties: { foo: "bar" },
});

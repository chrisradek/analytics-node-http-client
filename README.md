This repo illustrates how to pass a custom HTTP client to `@segment/analytics-node`.

There are currently 2 examples using different 3rd party http clients:

- [axios](./axios-example.js)
- [node-fetch](./node-fetch-example.js)

To run the axios sample, run:

```bash
WRITE_KEY=YOUR_WRITE_KEY node axios-example.js
```

Note: The axios library does not conform to the fetch spec. Importantly, the request does not accept `body`, so we need to alias `body` to `data`.

To run the node-fetch sample, run:

```bash
WRITE_KEY=YOUR_WRITE_KEY node node-fetch-example.js
```

# sailthru-preview-api
Example of previewing Sailthru Templates via the API.

## motivation

Working with Sailthru Zephyr dynamic templating is extremely powerful.

Workflow improvements that can sidestep the need for visiting the Sailthru platform
for previewing template updates add efficiency in the development process.

This repository aims to show an example of how that might work.

## usage

```bash
npm start \
  --api_key=[API_KEY] \
  --api_secret=[API_SECRET] \
  --email=[EMAIL@EXAMPLE.COM] \
  --message="Lorem ipsum dolor sit amet"
```

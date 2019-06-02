# TODO Dapp

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is my first [Mainframe OS](https://mainframeos.com) dapp.

It is a simple TODO list which uses Mainframe SDK `storage` component to persist data.

Persistence is made in a per-account basis, which means you can have exactly one TODO list per account.

## Running

To run the published version, this is the app ID:

```
91bbef6dac9fd7bcc9ec6991905a3438d9b7c0fd661088276bf836a2290a8676
```

## Development

### Requirements

- `yarn`: `>= 1.16.0`
- `node`: `>= 8.0.0 < 12.0.0`
- `react`: `>= 16.8.6>` (using hooks FTW!)
- `parcel-bundler`: `>= 1.12.3`

### Install dependencies

Run:

```
yarn install
```

### Run locally

Run:

```
yarn dev
```

Since this dapp uses Mainframe OS, it cannot be run within your browser. You first need to add it to your mainframe development apps, then run it from there and replace the URL with the one in the output of the command above (defaults to `http://localhost:1234`).

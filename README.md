# Employee List

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js](https://nodejs.org/en/download/). This project uses Node.js version 21.6.1.
* You have a Windows/Linux/Mac machine.


## Installing

clone the project from github and Navigate into the project and run `npm install` (or `pnpm install` or `yarn`), start a development server:


```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Configuration

Please create a `.env` file in root directory of this project and below information

```bash
BASE_URL=yourdomain.com
API_KEY=yourApiKey
```


To authenticate without a login screen, store your authorization token in the browser's `localStorage`. After running `npm run dev`, a server will start on `localhost:5173`. Set your bearer token in `localStorage` under the key `token` with the value retrieved from the `auth/sign-in` response.

You can also save bearer token in the `.env`, then you don't need to save in localStorage.

```bash
VITE_BEARER_TOKEN=token
```

## How to use

To begin, input the desired number of employees and click the "Mitarbeiter anlegen" button. This action triggers a request to the server, displaying a loading spinner during employee creation. Once all employees are successfully created, the loading spinner is removed, revealing a table populated with the employee data. The table features infinite scroll functionality, automatically fetching additional data from the server as you scroll down until all available data has been loaded.


## Building

To create a production version of your app:

```bash
npm run build
```


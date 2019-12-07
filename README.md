# vue-example-client

Example repository for Vue based client applications.

## Development

Before installing the dependencies you have to set the `NPM_TOKEN` environment variable 
in your command line. Add this line to your .bashrc, .zshrc (based on what terminal you use):

```bash
export NPM_TOKEN="your generated NPM token"
```

If you don't have a token yet type the following:

```bash
npm login
npm token create
```

You have to be added to the [@emartech](https://www.npmjs.com/settings/emartech/packages) organization 
on NPM to see the private packages also.

You can check the existence of the environment variable with: `echo $NPM_TOKEN`.

### Docker

Read this if you don't want to install Node.js locally on your computer.

The repository has Make commands to orchestrate the development Docker image:
install the dependencies, run the development server

```bash
make install
make start
```

The development server doesn't start instantly, you have to wait a few seconds.
Until then you can observe the build process with `make logs`.

### Host machine

Assuming you have Node.js installed on your computer, the following commands are needed to start the development server:

```bash
npm install
npm start
```

## Customizations

### Development port

Multiple applications can conflict on the local port.
When running natively, the setting is in `vue.config.js` in the `devServer.port` property.
When running the Docker image it resides in `docker-compose.yml` under `ports`.

### Service url

In `vue.config.js` you can set the backend service's url where to send the HTTP requests.
By default it is `http://localhost:9222`.
During build time you can modify it by setting the environment variable `SERVICE_URL`.

### Service name

The application can log on the client side also. 
In `vue.config.js` you can set the client service's name which will be stored in the logs.

### Auth JWT secret

The authentication secret can be added in EMSadmin under Integrations/Frontend Tokens. 
The secret must be the same as the one stored on the server where the client application sends the requests.

### Permissions

For Suite pages the permission handling happens in `include/classes/permission/requestmap.class.php`.
You have to add your page where the client application is diplayed.

### Translations

Default translations reside in `src/translation/default.json`. 
The translation file is mirrored into Suite under `translation/[service name].php`, 
this is where the localized strings will come from.

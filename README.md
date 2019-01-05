# November Five - React Test Project - Spotify Album Dashboard

The purpose of the this project is to evaluate your developing skills with JavaScript, CSS and React.

## What will you be building?

You will be building a dashboard application with data from the Spotify API. Design can be found in the root folder: normal.jpg & searching.jpg

## Your starting project

We provide you with a starting project. The project has been scaffolded with [react-static](https://github.com/nozzle/react-static/blob/master/docs/concepts.md) and the [styled-components](https://github.com/styled-components/styled-components) template.

The following things are provided in the starting project:

- Static routing with react-static. [Static routing inside of react-static](https://github.com/nozzle/react-static/blob/master/docs/config.md#route).
- Dynamic routing with React Router v4. [React Router v4 inside of react-static](https://github.com/nozzle/react-static/blob/master/docs/concepts.md#non-static-routing).
- [styled-components](https://github.com/styled-components/styled-components) (CSS-in-JS solution we use for all our projects).
- Basic starting view with Token and State from the spotify API.
- [Spotify API Reference](https://developer.spotify.com/documentation/web-api/reference/) (Your best friend during this project ;) )
- Environment file for the server, so you can your own client id and secret
- Config file inside the client application with the endpoints you will be calling

## Mandatory libraries

We require you to use the following libraries:

- [react-redux](https://github.com/reduxjs/react-redux)
- [redux](https://github.com/reduxjs/redux)
- [styled-components](https://github.com/styled-components/styled-components)
- [react-router-v4](https://github.com/ReactTraining/react-router)
- [axios](https://github.com/axios/axios)

## Project setup

In the project folder you will find two folders. A server folder and a client folder.
Most of your work will be done inside of the client folder. The server is here for authenticating to the Spotify API.

### Spotify project setup

If you do have a spotify account (premium or free, doesn't matter), you can follow [these steps](https://developer.spotify.com/documentation/general/guides/app-settings/) to register a test application that you can use for this project.

You can make an application [here](https://developer.spotify.com/dashboard) or by going to this link https://developer.spotify.com/ and clicking on "Dashboard". You will have to login with your spotify account.

It's important you set the correct Redirect URI in the edit settings inside of your application in the spotify dashboard (You can find this when you go inside of the application you created at the top right): **http://localhost:3000/callback**

(If it's not clear where you can do this, we have provided a screenshot: callback-spotify-settings.png)

After you've done that, you will need to add your own CLIENT_ID and CLIENT_SECRET to the .env file inside of `./server/authorization_code/.env`.

You can also change the scope of the what is accessible with your access token, by changing the SCOPE variable in the .env file. More info about scopes [here](https://developer.spotify.com/documentation/general/guides/scopes/). Currently we have enabled all the scopes.

### Running the project

The project requires NodeJS (7.5 and higher) and Yarn. If you don't have either of those, you can get Node [here](https://nodejs.org/dist/v8.11.3/node-v8.11.3.pkg) and Yarn [here](https://yarnpkg.com/en/docs/install)

To run the project you will have to run the following commands from the root folder:

```sh
yarn setup

yarn start:server
yarn start:client
```

After that you will have a server running on localhost:8080 and localhost:3000.

The server running on localhost:8080 will do the proxying with the spotify API and redirect you to localhost:3000 where the client application will be running.

## Notes

Authentication token will be invalidated by spotify after 1 hour. Then you will need to either refresh the token by calling http://localhost:8080/refresh

http://localhost:8080 will proxy all your requests to the correct endpoint, so you can just do the following in your api files:

### Components we prepared

The project has the following structure:

```sh
├── package.json
├── public
│   ├── assets
│   │   ├── Spotify_logo_green.png
│   │   ├── heart_icon.svg
│   │   ├── pause_button.svg
│   │   ├── play_button.svg
│   │   └── skip_button.svg
│   └── robots.txt
├── src
│   ├── App.js
│   ├── api
│   │   ├── apiManager.js
│   │   └── auth.api.js
│   ├── components
│   │   ├── Dashboard
│   │   │   ├── Dashboard.js
│   │   │   ├── Dashboard.style.js
│   │   │   └── package.json
│   │   ├── Loader
│   │   │   ├── Loader.js
│   │   │   └── package.json
│   │   ├── Navigation
│   │   │   ├── Navigation.js
│   │   │   ├── Navigation.style.js
│   │   │   ├── components
│   │   │   │   └── Link.js
│   │   │   └── index.js
│   │   └── SpotifyLogo
│   │       ├── SpotifyLogo.js
│   │       ├── SpotifyLogo.style.js
│   │       └── package.json
│   ├── config.js
│   ├── index.js
│   ├── redux
│   │   ├── auth
│   │   │   ├── auth.actions.js
│   │   │   ├── auth.reducer.js
│   │   │   ├── auth.saga.js
│   │   │   └── auth.selectors.js
│   │   ├── config.js
│   │   ├── reducers.js
│   │   └── sagas.js
│   └── routes
│       ├── 404.js
│       ├── Callback
│       │   ├── CallbackContainer.js
│       │   └── package.json
│       ├── Home
│       │   ├── Home.js
│       │   ├── HomeContainer.js
│       │   └── package.json
│       └── Profile
│           ├── Profile.js
│           ├── ProfileContainer.js
│           └── package.json
├── static.config.js
├── tmp
│   └── dev-server
│       ├── index.html
│       └── react-static-routes.js
└── yarn.lock
```

As you can see we have already prepared a few components. We also did some tedious setup work so you can start without any hassle.

**IMPORTANT!**

- We use the container pattern for connecting our redux state to the route components.
- Put api requests in the API folder in the correct file
- Put redux stuff in the redux folder (ex.: auth/) in the corresponding files.
- Put components you build in the component folder
- Put images and icons you want to use in the public/assets folder

## Designs

In the root of this project you will find two designs of the end product, to give you a guideline. It doesn't need to look like that, but it's just a way for you to see how you can build up your components.

## Requirements (user stories)

**IMPORTANT!** When you are doing an API call, we expect you to also include a loading state and supply the user with an appropriate error message when something went wrong.

### Tips

- Before you start, go through the whole project so you can familiarize yourself with the setup.
- The first story is very important, you will need to get those working if you want to continue with the project.
- When building a component, don't focus on the styling. Focus on making it functional first and if you have time left you can make it a bit more _shiny_. Basic styling is expected, but nothing _TOO_ fancy.
- Read all the user stories first! This way you can anticipate how you will build your component. This can be a big time saver!
- We provide you with a `<Loader />` component for loading states.

### Short version (3h):

Warm up:

- As a developer I can call the [/v1/me](https://developer.spotify.com/documentation/web-api/reference/users-profile/) endpoint of the spotify api (20min)

Real work:

- As a developer I can redirect a user to http://localhost:8080/ when he has no tokens in redux (20min)
- As a user I can see my account information (20min)
- As a user I can see a list of my Favorite Albums (40min)
- As a user I can search for an Artist and get a list of all his albums (40min)
- As a user I can favorite an Album in the result list of a search and see my Favorite Album list update with the new Album (Bonus: I can also unfavorite the Album) (30min)

Extra infromation:

- You can ignore the currently playing part in the design for the short version

### Extended version (8h):

Warm up:

- As a developer I can call the [/v1/me](https://developer.spotify.com/documentation/web-api/reference/users-profile/) endpoint of the spotify api (20min)

Real work:

- As a developer I can redirect a user to http://localhost:8080/ when he has no tokens in redux (20min)
- As a developer I can do a refresh call when I receive a 401 from the spotify API. (1h)
- As a user I can see my account information (20min)
- As a user I can see a list of my Favorite Albums (40min)
- As a user I can open a detail view when I click on an Album in my Favorite list (40min)
- As a user I can search for an Artist and get a list of all his albums (40min)
- As a user I can favorite/unfavorite an Album in the result list of a search and see my Favorite Albums list update (40min)
- As a user I can see a history of recently played tracks (30min) (You can do this like the Favorite Albums list)
- As a user I can see what music is playing inside the Player Component (20min)
- As a user I can play/pause/skip the currently playing music with the Player component (You can test this by listening to Spotify and calling `/v1/me/player/pause`, `/v1/me/player/play`, `/v1/me/player/next`, `/v1/me/player/previous`) (60min)

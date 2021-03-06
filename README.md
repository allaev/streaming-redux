# streaming-redux ![CI status](https://img.shields.io/badge/style-flat-green.svg?longCache=true&style=flat) ![CI status](https://img.shields.io/badge/top%20language-Javascript-yellow.svg)

REST-based React app for streaming video with a backend server

- React
- Redux
- Redux Thunk
- Redux Form
- React Router
- Axios
- Lodash
- Google OAuth 2
- JSON Server
- Node-Media-Server
- FLVjs
- Semantic UI

### Getting Started

In every directory (api, client, rtmpserver) run in a separate terminal:
```
> npm install
> npm start
```

Client will be available at http://localhost:3000

To broadcast the video you need to log in with a Google account first.
Then click on a "Create Stream" button, go to recently created stream and remember the Stream Key ID from the address bar (http://localhost:3000/streams/_your_stream_key_ID)
Then, if you are using OBS, go to Settings-Stream-Custom and enter the following settings:
```
Server: rtmp://localhost/live
Stream Key: (ID number of the stream that you have created)
```
Press "Start Streaming" in OBS and refresh the page with the stream

![streaming-redux](https://user-images.githubusercontent.com/34710484/55389927-9f9aa400-554f-11e9-8f9c-7916b935a93c.png)

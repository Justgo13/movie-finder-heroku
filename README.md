# Movie finder

App is deployed using Heroku [Movie Finder](https://imdb-movie-finder-app.herokuapp.com/movie-search)

A movie finder application that uses the OMDB API.

To get your own OMDB API key visit 
[API Key](http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=)


# Local development

Open three terminals

## Terminal 1
```
cd Client
npm install
npm run build
```

## Terminal 2
```
sass -I Client/src/styles/sass/ --watch Client/src/Search/styles/sass/:Client/src/Search/styles/ --watch Client/src/SearchResults/styles/sass/:Client/src/SearchResults/styles/

If sass gives command not found, run npm i -g sass
```

## Terminal 3 
```
npm install
export API_KEY=<OMDB_API_KEY>
npm start
```


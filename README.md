## Synopsis
The package consists of the following files:
- routes/index.js (Express implementation)
- views/index.jade (Jade implementation)

## Tests
All the code was implemented on Windows platform.

 - run the following command either from Postman or Chrome browser:
  ```
   http://localhost:3000/
 ```

## Screenshot
![Alt text](https://github.com/mikezaloznyy/nodejs-api/blob/master/screenshot-1.png "Screenshot of the API")

# dev-test
Welcome Dev Applicants!

We would like you to make an express app which consumes the following api:

https://sauron.api.influentialdev.com/

Which has two endpoints

- /stream - which accepts lat and lng and returns a stream of media objects
- /stream/:id which returns details relating to an individual media object


We would like you to make a simple [express](http://expressjs.com/) website using [jade](http://jade-lang.com/) templates that takes the current location of the browser, hits the /stream endpoint, displays the images as thumbnails (e.g. 2 or 3 per row) in a visually pleasing way and allows the user to click on any of the images in order to view the detail view of the image.  You can display as much or as little information as you like on the detail view. Style and usability counts.

Please fork this repository and submit a pull request when finished.

Cheers!

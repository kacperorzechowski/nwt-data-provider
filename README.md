# NWT Image Provider
## Setting up
* ``npm install`` installs dependencies
* ``npm run serve:hot`` starts webpack server with hot reloading feature

## The project
NWT Image Provider is part of Schibsted recruitment task.
The main idea of app is to provide data for front-end application from external APIs.

## Struggles
Here I will try to describie things about I was not sure during development. Also i will point out here things, what I think I would do better if I spentmore time on project.
* MVC approach - well I am familiar with MVC but I did not know how to actually implement it into node.js app. That is why I kept "logic" into routes.
* Unit Testing - I know well how to Unit Test Vue.js app but it was hard for me to actually tell what to test in node.js. Later on I figured out that I should unit test functions in Models for example, but I have decided to skip them due to lack of time.
* Readability issue - I noticed that routes file (`/routes/API.js`) is getting bigger and bigger. I know there must be better way on how to handle endpoints serving. 
* Hot reloading - there is weird thing going in hot reloading. I am sure that I made a mistake when I was configuring it.

## Bibliography
During development I have encountered many struggles. Those articles helped me a lot to solve my problems and answer many important questions.

* https://medium.com/@purposenigeria/build-a-restful-api-with-node-js-and-express-js-d7e59c7a3dfb
* https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
* https://codeburst.io/fractal-a-nodejs-app-structure-for-infinite-scale-d74dda57ee11

I have also checked some git repositories with example projects to make sure my ideas are correct.

* https://bitbucket.org/dg92/task_mangement_final_quadrant/src/master/

I also read docs from libs I used in project
* https://github.com/axios/axios
* https://webpack.js.org/

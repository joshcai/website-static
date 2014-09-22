personal website
=================

Personal website v2, same visual layout as the website-angular version, but doesn't require Angular anymore (meaning users that block JavaScript can actually see the entire website, yay). This uses Grunt to convert Jade to HTML, LESS to CSS, and minifies them.

I switched to this approach since I was only using Angular to separate different parts of my HTML and do some substitutions, which would be better done server side. (Users don't have to download Angular, no JavaScript is needed, faster, etc.)

If you are trying to run this yourself, you will have to do the following after cloning the git repository:

```shell
npm install
grunt
npm start
```

For the Angular version this was based on, check out https://github.com/joshcai/website-angular.

For the original version, check out https://github.com/joshcai/website.

Thanks to Socicon (http://socicon.com/) for the pretty icons!

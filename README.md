personal website
=================

Personal website v2, same visual layout as the github pages version, but doesn't require Angular anymore (meaning browsers that don't use JavaScript can actually see something, yay). This uses Grunt to convert Jade to HTML, LESS to CSS, and minifies them.

I switched to this approach since I was only using Angular to separate different parts of my HTML and do some substitutions, which would be better done server side. (Users don't have to download Angular, and no JavaScript is needed.)

If you are trying to run this yourself, you will have to do the following after cloning the git repository:

```shell
npm install
grunt
npm start
```

### Work left to do
- deploy on my own server
- add git hooks to run grunt after pulling

For the Angular version, check out https://github.com/joshcai/joshcai.github.io

For the first version, check out https://github.com/joshcai/website

Thanks to Socicon (http://socicon.com/) for the pretty icons!

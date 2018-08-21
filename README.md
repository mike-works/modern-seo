<p align='center'>
  <a href="https://mike.works" target='_blank'>
    <img height=40 src='https://assets.mike.works/img/login_logo-33a9e523d451fb0d902f73d5452d4a0b.png' />
  </a> 
</p>
<p align='center'>
  <a href="https://mike.works/course/modern-seo-a5f0c26/stage/modern-seo-1c28727" target='_blank'>
    <img height=150 src='https://user-images.githubusercontent.com/558005/29088033-c55f75f6-7c2c-11e7-9600-4be978403e0a.png' />
  </a>
</p>

<p align='center'>
  <a href="https://travis-ci.org/mike-works/modern-seo" title="Build Status">
    <img title="Build Status" src="https://travis-ci.org/mike-works/modern-seo.svg"/>
  </a>
  <a href="https://github.com/mike-works/modern-seo/releases" title="Version">
    <img title="Version" src="https://img.shields.io/github/tag/mike-works/modern-seo.svg" />
  </a>
</p>
<p align='center'>
This is the  project used for the <a title="Mike.Works" href="https://mike.works">Mike.Works</a> <a title="Modern SEO" href="https://mike.works/course/modern-seo-a5f0c26/stage/modern-seo-1c28727">Modern SEO</a> course.
</p>

# Course outline and slides
 * [View course outline here](https://mike.works/course/modern-seo-a5f0c26/stage/modern-seo-1c28727)
 * [View slides here](https://docs.mike.works/modern-seo)

# What are the pieces of this project?

* [node-sass-middleware](https://github.com/sass/node-sass-middleware) for Sass compilation
* [express](http://expressjs.com/) for serving HTML and CSS
* [hbs](https://github.com/pillarjs/hbs) to render [Handlebars](http://handlebarsjs.com/) templates with express

# Getting Set Up

There are a few things you need to ensure you have installed, in order to be ready for this course.

### Node.js

You’ll need a relatively recent version (v4.5 or newer, *latest stable version* ideally) of node.js installed. On OS X, a great way of doing this without disturbing your existing dev environment is to install NVM. [Installation instructions are here](https://github.com/creationix/nvm#installation).

You’ll know everything is set up properly when you can run

```
nvm --version # might look like "0.31.4"
node --version # might look like "v7.7.3"
```

### Visual Studio Code

Particularly if you’ve never tried it before, you should install [Microsoft Visual Studio Code](https://code.visualstudio.com/). Some fantastic extensions that I use regularly include
* [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
* [Sublime Text Keymap](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings) - Install if you’re used to sublime text keyboard shortcuts

### Check out and setup the project for this workshop

```
git clone git@github.com:mike-works/seo-workshop.git
cd seo-workshop
npm install
```


# How to use it
Use the `run` command to launch an exercise

```sh
./run --exercise <exercise name>
```

# License
While the general license for this project is the BSD 3-clause, the exercises
themselves are proprietary and are licensed on a per-individual basis, usually
as a result of purchasing a ticket to a public workshop, being a participant
in a private training, or having a Front End Masters membership.

Here are some guidelines for things that are **OK** and **NOT OK**, based on our
understanding of how these licenses work:

### OK
* Using everything in this project other than the exercises (or accompanying tests) 
to build a project used for your own free or commercial training material
* Copying code from build scripts, configuration files, tests and development 
harnesses that are not part of the exercises specifically, for your own projects
* As an owner of an individual license, using code from tests, exercises, or
exercise solutions for your own non-training-related project.

### NOT OK (without express written consent)
* Using this project, or any subset of 
exercises contained within this project to run your own workshops
* Writing a book that uses the code for these exercises
* Recording a screencast that contains one or more of this project's exercises 


# Copyright

&copy; 2018 [Mike.Works](https://mike.works), All Rights Reserved

###### This material may not be used for workshops, training, or any other form of instructing or teaching developers, without express written consent

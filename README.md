spring-roll-demo
================

Demo site for Project Spring Roll

Attention: Special File!
========================

You will see a 404 on js/special.js in your Browser Dev Console. It is expected. Please do **not** remove that file from index.html since it holds special development values for local development, and I set it up in gitignore. If you wish to use it please contact me for more details - Son

Recommended IDE Setup
=====================
 - Install Brackets.io
    - Install the JSHint extension.

Angular.js
==========
 - Using v.1.3.0 beta
 - Added basic app + controller following: https://docs.angularjs.org/tutorial/step_02

Feedback Form
=============

As a result of [Pull Request 7](https://github.com/famanson/spring-roll-demo/pull/7), we have a prototype feedback form right at the top of our page ("Say Hello" button in the intro header)

Unfortunately we cannot expose this functionalityto local development for now because we are using the Mailgun API and we can't give ukspringroll@gmail.com's API key to everyone. What you can do, however, if you want to do a full end-to-end test is to follow these steps:

- Install PHP and PHP curl
- Set up a local Apache server with PHP module enabled
- Deploy the demo to the server
- Create your own Mailgun account and get your API key
- Create a file named /var/relay/config.ini with [this config](https://gist.github.com/famanson/b36a1273f7c35adffc83)
- Profit
[![SUJI Logo](https://avatars3.githubusercontent.com/u/16272187?v=3&s=200)](http://naver-d2-suji.github.io/suji)

**[SUJI](http://naver-d2-suji.github.io/suji)** is open source Web & Mobile POS system for the low-income independents.

  [![Build Status](https://travis-ci.org/naver-d2-suji/suji.svg)](https://travis-ci.org/naver-d2-suji/suji) 
  [![js-standard-style][standard-image]][standard-url]
  
 * [**Demo Video**](https://youtu.be/fMRXjG3Plu8)
 * [**Demo Page**](http://suji.io)
 
-------

*Before you start SUJI, please visit [SUJI blog](http://naver-d2-suji.github.io/suji) and get some information about our concept.*

## Prerequisites
* [Node.js](https://nodejs.org/en/download/)
    - You have `node` installed at v5.0.0+
* Meteor
    - *Windows* -  Download and Install [Meteor](https://www.meteor.com/)
    - *Linux/Mac* - `$ curl https://install.meteor.com/ | sh`

## Installation
* [Download the latest version](https://github.com/naver-d2-suji/suji/archive/develop.zip)
* Extract suji-develop.zip

* Mobile version
  - **Connect to a phone or tablet with a USB cable**
  - Move into mobile path
  ```sh
  $ cd suji-develop/mobile
  ```
  - Run application
  ```sh
  $ ./start.sh
  ```
  
* Web version
  - Move into web path
  ```sh
  $ cd suji-develop/web
  ```
  - Start client & server(default port: 3000)
  ```sh
  $ meteor --port 3000
  ```
**Important** The difference between mobile and web is just only user interface. So when you want use mobile-UI on a computer, just move suji-develop/mobile and start it.

## Features
* Easy to use POS system
* Executable for generating web & mobile quickly
* Work with Barcode Scanner based on USB HID
* Support Pager(Bell) system using [Arduino](https://www.arduino.cc)

## Development Stack
* Language : Javascript
* Framework
    - [Angular](https://angularjs.org/), [Angular Material](https://github.com/angular/material)
    - [Meteor](https://www.meteor.com/)
* Database : MongoDB
* Server : [Nginx](http://nginx.org/), [DigitalOcean](https://www.digitalocean.com/)
* Template : [Yeoman](http://yeoman.io/)
  - [Generator](https://github.com/ndxbxrme/generator-angular-meteor)


## People
* Project Director : [Lee, DongKyu](http://ledgku.tistory.com)
* Developer : Kim, BoWoon, [Jin, Hyungtak](http://njir.github.io)
* Designer : Jo, Jaebeom

## License
2016 [MIT](http://opensource.org/licenses/mit-license.php) ©Team SUJI


[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: http://standardjs.com/

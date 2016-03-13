[![SUJI Logo](https://cloud.githubusercontent.com/assets/7614353/13728987/bd47efaa-e96c-11e5-8856-58d38cca1088.jpeg)](http://naver-d2-suji.github.io/suji)

**[SUJI](http://naver-d2-suji.github.io/suji)** is open source Web & Mobile POS system for the low-income independents.

  [![Build Status](https://travis-ci.org/naver-d2-suji/suji.svg)](https://travis-ci.org/naver-d2-suji/suji) 
  [![js-standard-style][standard-image]][standard-url]
  
## Demo
 * [**Demo Site**](http://suji.io)
 * Video [**![Demo Video](https://cloud.githubusercontent.com/assets/7614353/13727892/3555f4b2-e948-11e5-9180-b68ea25b00df.PNG)**](https://youtu.be/MwMT5YzClQQ)
 
-------

*Before you start SUJI, please visit [SUJI blog](http://naver-d2-suji.github.io/suji) and get some information about our concept.*

## Prerequisites
* [Node.js](https://nodejs.org/en/download/)
    - You have `node` installed at v5.0.0+
* Meteor
    - *Windows* -  Download and Install [Meteor](https://www.meteor.com/)
    - *Linux/Mac* - `$ curl https://install.meteor.com/ | sh`

## Installation
* [Download the latest version](https://github.com/naver-d2-suji/suji/archive/master.zip)
* Extract suji-master.zip

* Mobile version
  - **Connect to a phone or tablet with a USB cable**
  - Move into mobile path
  ```sh
  $ cd suji-master/mobile
  ```
  - Run application
  ```sh
  $ ./start.sh
  ```
  
* Web version
  - Move into web path
  ```sh
  $ cd suji-master/web
  ```
  - Start client & server(default port: 3000)
  ```sh
  $ meteor --port 3000
  ```
**Important** The difference between mobile and web is just only user interface. So when you want use mobile-UI on a computer, just move suji-develop/mobile and start it.

## Features
* Ease to use POS system
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

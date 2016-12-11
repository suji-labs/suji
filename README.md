# SUJI

[![SUJI Logo](https://cloud.githubusercontent.com/assets/7614353/13844696/bd2fed46-ec7e-11e5-867b-28d4e4931de2.gif)](http://suji-korea.github.io/suji)

**[SUJI](http://suji-korea.github.io/suji)** is open source Web & Mobile POS system for the low-income independents.

  [![Build Status](https://travis-ci.org/suji-korea/suji.svg)](https://travis-ci.org/suji-korea/suji) 
  [![js-standard-style][standard-image]][standard-url]
  
## Demo
 * [**Demo Site**](http://suji.io)
 * Video [**![Demo Video](https://cloud.githubusercontent.com/assets/7614353/13811187/7af95042-ebb7-11e5-9f4f-6ad3641df999.jpg)**](http://m.site.naver.com/qrcode/view.nhn?v=0fMig)
 
-------

*Before you start SUJI, please visit [SUJI blog](http://suji-korea.github.io/suji) and get some information about our concept.*

## Prerequisites
* [Node.js](https://nodejs.org/en/download/)
    - You have `node` installed at v5.0.0+
* Meteor
    - *Windows* -  Download and Install [Meteor](https://www.meteor.com/)
    - *Linux/Mac* - `$ curl https://install.meteor.com/ | sh`

## Installation
* [Download the latest version](https://github.com/suji-korea/suji/archive/master.zip)
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
**Important** The difference between mobile and web is just only user interface. So when you want use mobile-UI on a computer, just move suji-master/mobile and start it.

## Features
* Ease to use POS system
* Executable for generating web & mobile quickly
* Work with Barcode Scanner based on USB HID
* Support [Pager(Bell) system using Arduino](https://github.com/suji-korea/cafe_vibration_bell)

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

# uzh-course-shortname [![Build Status](https://travis-ci.org/JonnyBurger/uzh-course-shortname.svg?branch=master)](https://travis-ci.org/JonnyBurger/uzh-course-shortname)

> Abbreviate course names from UZH, even complex ones.

This module tries to remove everything but the most relevant part of a UZH module name.


Example:
`002a Proseminario I di linguistica italiana: Elementi di linguistica sincronica` gets abbreviated to `Elementi di linguistica sincronica`.


`BWL III (V+Ü) (Business Administration III)` gets abbreviated to `BWL III`.


`LTK Modul 5: Zuchtmanagement Nagetiere` gets abbreviated to `Zuchtmanagement Nagetiere`.


## Install

```
$ npm install --save @jonny/uzh-course-shortname
```


## Usage

```js
const uzhCourseShortname = require('@jonny/uzh-course-shortname');

uzhCourseShortname('159 Aufbaumodul 3 NDL (SU): Poetik und Praxis des Notierens');
//=> 'Poetik und Praxis des Notierens'
```


## API

### uzhCourseShortname(input)

#### input

Type: `string`


## License

MIT © [Jonny Burger](http://jonny.io)

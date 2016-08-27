# fetch-ckan
[![Build Status](https://travis-ci.org/joonhocho/fetch-ckan.svg?branch=master)](https://travis-ci.org/joonhocho/fetch-ckan)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/fetch-ckan/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/fetch-ckan?branch=master)
[![npm version](https://badge.fury.io/js/fetch-ckan.svg)](https://badge.fury.io/js/fetch-ckan)
[![Dependency Status](https://david-dm.org/joonhocho/fetch-ckan.svg)](https://david-dm.org/joonhocho/fetch-ckan)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

Fetch records from ckan.org APIs


### Install
```
npm install --save fetch-ckan
```


### Basic Usage without GraphQL
```javascript
import {fetchRecords} from 'fetch-ckan';

const records = await fetchRecords('https://inventory.data.gov/api/action/datastore_search', {
  resource_id: '38625c3d-5388-4c16-a30f-d105432553a4',
  fields: '_id,OPEID,INSTNM,ADDR,CITY,STABBR,ZIP,GENTELE,LONGITUD,LATITUDE,WEBADDR',
  filters: {OPEID: ['761700', '324200']},
  limit: 10,
});
```


### LICENSE
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

# Website for Frontend in Wonderland
[http://2015.fromthefront.it](http://2015.fromthefront.it)  

Illustrations by [Goran](http://goranfactory.com/)  
UX and Design by [Emanuela Damiani](http://github.com/brassy-)  
Code by [Matteo Cavucci](https://github.com/mattcav)  


## Instructions

to work: `grunt serve`  
to build: `grunt build`

All the long copy for the website is in the `src/data` folder.  
Titles and short copy is in `site.yml`.

All the content for the sponsor section is in `src/data/sponsors.json`.  
`Order` gives the priority order, `Weight` the sponsorship level.

The files `name-surname.json` are for the speakers' data. Never edit the `data/speakers.json` as it's generated automatically. The default image is `name-surname.jpg` from `dist/images`, but a custom `image` property can be added to the json.

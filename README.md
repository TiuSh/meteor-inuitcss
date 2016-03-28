# InuitCSS

inuitcss is a powerful, Sass-based, BEM, OOCSS framework designed with scalability and performance in mind.
The full documentation can be found [here](https://github.com/inuitcss/getting-started).

## Installation

Add this package and its dependency to your project:
```
meteor add tiush:inuitcss
meteor add fourseven:scss
```

Create a `main.scss` file, and import the starter kit:
```
@import "{tiush:inuitcss}/inuit-defaults/settings.defaults";

@import "{tiush:inuitcss}/inuit-functions/tools.functions";
@import "{tiush:inuitcss}/inuit-mixins/tools.mixins";

@import "{tiush:inuitcss}/inuit-normalize/generic.normalize";
@import "{tiush:inuitcss}/inuit-box-sizing/generic.box-sizing";

@import "{tiush:inuitcss}/inuit-page/base.page";
```

Read the inuitCSS documentation, and then import any module you need.

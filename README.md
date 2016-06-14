== README

# The complete guide for setup react with rails. Using ES6 and JSX syntax

The guide for create a rails app using react with ES6, jsx syntax

```
Gemfile
gem 'browserify-rails'
gem 'react-rails'
```

and setup follow guide for each.


```
application.rb
config.browserify_rails.commandline_options = "-t babelify --extension=\"es6.js\""
```

create file .babelrc in the root folder and add

```
{
  "presets": [ "es2015", "react" ]
}
```

add content to
```
package.json
assets/javascripts/application.js
assets/javascripts/components.js
```
same in project


run terminal
```
bundle
npm install
```

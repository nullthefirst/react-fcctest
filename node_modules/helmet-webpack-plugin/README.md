# HelmetWebpackPlugin

This is a [webpack](http://webpack.github.io/) plugin that simplifies creation of HTML files to serve your
webpack bundles. It uses [react-helmet](https://github.com/nfl/react-helmet) for configuring the `<head>` section.
This makes really easy and clean configuring an SSR / universal application: Both client and server can use the same
react-helmet configuration.

Installation
------------
Install the plugin with npm:
```shell
$ npm install helmet-webpack-plugin --save
```

Basic Usage
-----------

The plugin will generate an HTML5 file for you that includes all your webpack
bundles in the body using `script` tags. Just add the plugin to your webpack
config as follows:

```javascript
import HelmetWebpackPlugin from 'helmet-webpack-plugin'

var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HelmetWebpackPlugin()]
};
```

This will generate a file `dist/index.html` containing the following:
```html
<!DOCTYPE html>
<html>
  <head>
  	<title data-react-helmet="true">Title - Webpack App</title></head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="/index_bundle.js"></script>
  </body>
</html>
```

If you have multiple webpack entry points, they will all be included with `script`
tags in the generated HTML.

If you have any css assets in webpack's output (for example, css extracted
with the [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin))
then these will be included with `<link>` tags in the HTML head.

Configuration
-------------
You can pass a hash of configuration options to `HtmlWebpackPlugin`.
Allowed values are as follows:

- `helmetProps`: The props object that goes straight to react-helmet ([see more](https://github.com/nfl/react-helmet#use-cases)). Defaults:
  - htmlAttributes: {},
  - title: 'Title',
  - defaultTitle: 'Default Title',
  - titleTemplate: '%s - Webpack App',
  - meta: [],
  - link: [],
  - script: [],
  - style: []
- `filename`: The file to write the HTML to. Defaults to `index.html`.
   You can specify a subdirectory here too (eg: `assets/admin.html`).
- `chunks`: Allows you to add only some chunks (e.g. only the unit-test chunk)
- `chunksSortMode`: Allows to control how chunks should be sorted before they are included to the html. Allowed values: 'none' | 'auto' | 'dependency' | {function} - default: 'auto'
- `excludeChunks`: Allows you to skip some chunks (e.g. don't add the unit-test chunk)
- `rootProps`: The props object that will be applied to the root element / mounting point of the app: `<div {...rootProps} />`

Here's an example:

Let's put our default layout configuration into a file, for instance `config/layout.js`:
```javascript
export default {
  htmlAttributes: {lang: 'en'},
  title: 'Title',
  defaultTitle: 'Default Title',
  titleTemplate: '%s - React Redux Starter Kit',
  meta: [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'}
  ],
  link: [
    {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'}
  ],
  script: [],
  style: []
}
```

Set something like this in your webpack config:
```javascript
import layout from '../config/layout'

{
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HelmetWebpackPlugin({
      helmetProps: layout
    })
  ]
}
```

This code would be placed somewhere in your server rendering routines:
```javascript
import renderHtmlLayout from 'helmet-webpack-plugin'
import layout from '../config/layout'

// easy to do some server specific modification on the layout (can be really useful if you work with asset hashes):
layoutConfig.link = Array.concat(layoutConfig.link, {rel: "stylesheet", href="http://some.more.stuff.com/style.css"})

// anywhere in your components you can use react-helmet to modify the head section, but you need to include it at least once with the configuration as follows:
let content = (
  <Provider store={store}>
    <div style={{ height: '100%' }}>
      <Helmet {...layoutConfig} />
      <Router history={history} children={routes} key={routerKey} />
    </div>
  </Provider>
)
let head = Helmet.rewind()

response.status = 200
response.body = renderHtmlLayout(head, [<div {...rootProps} dangerouslySetInnerHTML={{__html: content}} />, scripts])
```

# Contribution

You're free to contribute to this project by submitting [issues](https://github.com/janoist1/helmet-webpack-plugin/issues) and/or [pull requests](https://github.com/janoist1/helmet-webpack-plugin/pulls). This project will be :) test-driven, so keep in mind that every change and new feature should be covered by tests.
This project uses Babel for transpiling `npm run build` and eslint for code linting `npm run lint`.

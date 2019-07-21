require('ignore-styles')

require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', 'react-app'],
  plugins: ['@babel/plugin-proposal-object-rest-spread']
})

require('./index')

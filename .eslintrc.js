module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential', '@vue/standard'
  ],
  "rules": {
    'indent':0,
    'semi': 0, //句末分号
    'quotes': 0, //双引号
    'space-before-function-paren': 0, //方法后面空格
    'func-call-spacing':0, //方法调用空格
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
}
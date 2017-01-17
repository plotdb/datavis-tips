/*
require! <[stylus fs ./src/ls/config]>
console.log config.charts
stylus fs.read-file-sync(\test.styl).toString!
  .set \filename, \test.css
  .define \somelist, <[a b c d e]>
  .use (s) -> for k,v of config => s.define k, v # since stylus seems not provide access into nested object..
  .render (e,css) -> console.log e, css
requ*/
require! <[fs]>
lsc = require 'LiveScript'
site-config = eval(lsc.compile((fs.read-file-sync \src/ls/config.ls .toString!),{bare: true}) .toString!)


thechart = null
config = [{
  margin: 10, background: \#aaa, gridBackground: \#aaa
  palette: {colors: [{hex: \#444},{hex: \#666},{hex: \#999}]}
  bubbleSizeMax: 15
  bubbleStrokeWidth: 0
  fontSize: 12
  gridStrokeWidth: 1
  textFill: \#eee
},{
  margin: 10, background: \#942, gridBackground: \#942
  palette: {colors: [{hex: \#fff},{hex: \#ffd},{hex: \#fdf}]}
  bubbleSizeMax: 18
  bubbleStroke: \#000
  bubbleStrokeWidth: 1
  fontSize: 14
  gridStrokeWidth: 1
  textFill: \#ffe
},{
  margin: 10, background: \#eee, gridBackground: \#eee
  palette: {colors: [{hex: \#e96},{hex: \#ae5},{hex: \#48d},{hex: \#999}]}
  bubbleSizeMax: 22
  fontSize: 14
  textFill: \#444
  bubbleStrokeWidth: 0
  xAxisTickSizeInner: 0
  yAxisTickSizeInner: 0
  gridStrokeWidth: 0
}]
plotdb.load \charts/scatter.json, (chart) ->
  root = document.getElementById \blah
  thechart := chart
  chart.config config.0
  chart.attach root 
  
window.
document.getElementById(\choices).addEventListener \click, ->
  root = document.getElementById \blah
  idx = +it.target.getAttribute("data-idx")
  thechart.config config[idx - 1]
  thechart.attach root

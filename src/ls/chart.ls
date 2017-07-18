init = ->
  #chartconfig = config.bannerConfi/
  curChart = null
  plotdb.load chartid, (chart) ->
    root = document.getElementById \chart-sample
    setTimeout (->
      if chartconfig? => chart.config chartconfig.0
      chart.attach root
      curChart := chart
    ), 1000
  
  document.getElementById \choices .addEventListener \click, ->
    idx = +it.target.getAttribute("data-idx")
    if !idx => return
    Array.from(document.getElementById \choices .querySelectorAll \.choice)
      .map (d) -> d.className = \choice
    document.getElementById \choices
      .querySelector(".choice:nth-of-type(#idx)")
      .className = "choice active"
    curChart.config chartconfig[idx - 1]
    curChart.parse!
    curChart.resize!
    curChart.bind!
    curChart.render!

  start = 0
  requestAnimationFrame looper = (time) ->
    if curChart and time - start > 1000 =>
      curChart.data curChart._.chart.sample
      curChart.parse!
      curChart.resize!
      curChart.bind!
      curChart.render!
      start := time
    requestAnimationFrame looper

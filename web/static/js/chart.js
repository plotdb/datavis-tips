var init;
init = function(){
  var curChart, start, looper;
  curChart = null;
  plotdb.load(chartid, function(chart){
    var root;
    root = document.getElementById('chart-sample');
    return setTimeout(function(){
      if (typeof chartconfig != 'undefined' && chartconfig !== null) {
        chart.config(chartconfig[0]);
      }
      chart.attach(root);
      return curChart = chart;
    }, 1000);
  });
  document.getElementById('choices').addEventListener('click', function(it){
    var idx;
    idx = +it.target.getAttribute("data-idx");
    if (!idx) {
      return;
    }
    Array.from(document.getElementById('choices').querySelectorAll('.choice')).map(function(d){
      return d.className = 'choice';
    });
    document.getElementById('choices').querySelector(".choice:nth-of-type(" + idx + ")").className = "choice active";
    curChart.config(chartconfig[idx - 1]);
    curChart.parse();
    curChart.resize();
    curChart.bind();
    return curChart.render();
  });
  start = 0;
  return requestAnimationFrame(looper = function(time){
    if (curChart && time - start > 1000) {
      curChart.data(curChart._.chart.sample);
      curChart.parse();
      curChart.resize();
      curChart.bind();
      curChart.render();
      start = time;
    }
    return requestAnimationFrame(looper);
  });
};
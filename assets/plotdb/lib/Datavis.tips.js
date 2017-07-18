if(typeof(plotdb)=="undefined" && !plotdb) var plotdb = {};
plotdb.chart.add('Line Chart',{"key":953,"name":"Line Chart","owner":4,"theme":null,"parent":null,"description":"The standard line chart. support overlapped multiple line. best for visualizing trend.","basetype":["2"],"visualencoding":["1","4"],"category":["4","5"],"tags":["line","trend","basic"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-02-16T05:40:31.000Z","modifiedtime":"2017-04-28T05:23:11.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"x axis index","type":["Order"],"fields":[],"require":true,"fieldName":null},"value":{"desc":"y axis value","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":12,"default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(100%,100%,100%,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Dot"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisZeroBaseline":{"desc":"y Axis starts with zero","name":"Zero Baseline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis","rebindOnChange":true},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var src = plotdb.data.sample.crimeanWar;
    return {
      value: [src["zymotic rate(‰)"], src["wound rate(‰)"], src["other rate(‰)"]],
      order: [src.month]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], multiple: true, require: true, desc: "y axis value" },
    order: { type: [plotdb.Order], require: true, desc: "x axis index" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    legendShow: {},
    legendLabel: {},
    nodeSize: {default: 12},
    nodeShow: {},
    nodeStrokeWidth: {default: 2},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    gridBackground: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    yAxisZeroBaseline: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisLabelPosition: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    popupShow: {},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.popup = plotd3.html.tooltip(this.root);
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.grid = plotd3.rwd.grid();
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.svg.on("mousemove", function() {
      if(!that.config.popupShow) return;
      var box = this.getBoundingClientRect();
      var x = d3.event.clientX - box.left;
      var y = d3.event.clientY - box.top;
      if(y>=that.height - that.xAxisHeight - that.legendSize[1] - that.config.margin) return;
      var iy = that.yScale.invert(y);
      var ix = parseInt(Math.round(that.xScale.invert(x)));
      var min = -1;
      var target = null;
      for(var i = 0; i < that.parsed.dots.length; i++) {
        ds = that.parsed.dots[i];
        for(var v,j = 0; j < ds.data.length; j++) {
          dot = ds.data[j];
          dot.active = false;
          if(dot.order != ix) continue;
          v = Math.abs(dot.value - iy);
          if(min<0 || v < min) {
            min = v;
            target = dot;
          }
        }
      }
      if(target) target.active = true;
      that.target = target;
      if(that.target) {
        var x = that.xScale(that.target.order);
        var y = that.yScale(that.target.value);
        var direction = "left";
        var svgbox = that.svg[0][0].getBoundingClientRect();
        if( x < that.width/2 ) direction = "right";
        that.popup.direction(direction);
        that.popup.show(x, y);
        that.popup.call(function() {
          var node = d3.select(this);
          node.select(".title").text(that.parsed.group[that.target.group].name);
          node.select(".value").text(that.parsed.order[that.target.order].value + ": " + that.target.value);
        });
      }
      that.render();
    });
  },
  parse: function() {
    var that = this;
    var p = this.parsed = {
      dots: [],
      lines: [],
      order: [],
      group: [],
      values: []
    };
    var list = null;
    if(this.data.length) {
      plotdb.Order.sort(this.data, "order", true);
      p.order = this.data.map(function(it) { return {
        idx: 0,
        value: it.order,
        parsed: it.order
      };});
      p.order.forEach(function(d,i) { d.idx = i; });
      p.order = p.order.filter(function(it) { return it.value != null && typeof(it.value) != "undefined"; });
      for(var j=0;j < this.data[0].value.length; j++) {
        p.group.push({
          name: (this.dimension.value && this.dimension.value.fieldName
                 ?(this.dimension.value.fieldName[j] || j):j),
          idx: j
        }); /* name: should fetch from field meta */
        p.dots.push(dots = {group: j, data: []});
        for(var i=0;i<this.data.length;i++) {
          /* order of "order" might be re-arranged so we have to lookup again */
          var orderIdx = (p.order.filter(function(it) { return it.value == that.data[i].order; })[0] || {idx: -1}).idx;
          dots.data.push({
            group: j,
            value: this.data[i].value[j],
            order: orderIdx
          });
        }
        //dots.data.sort(function(a,b) { return b.order - a.order; });
        p.lines.push({idx: j, data: d3.pairs(dots.data)});
        p.values = p.values.concat(dots.data.map(function(it) { return it.value;}));
        console.log(p.values);
      }
    }
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("g.series.line").data(this.parsed.lines);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "series line"});
    this.svg.selectAll("g.series.line").each(function(it) {
      var sel = d3.select(this).selectAll("line.connect").data(it.data);
      sel.exit().remove();
      sel.enter().append("line").attr({class: "connect"});
    });
    this.lines = d3.select(this.root).selectAll("line.connect");
    sel = this.svg.selectAll("g.series.dot").data(this.parsed.dots);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "series dot"});
    this.svg.selectAll("g.series.dot").each(function(it) {
      var sel = d3.select(this).selectAll("circle.node").data(it.data);
      sel.exit().remove();
      sel.enter().append("circle").attr({class: "node"})
    });
    this.dots = d3.select(this.root).selectAll("circle.node");
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.circleSize = [this.config.nodeSize, this.config.nodeStrokeWidth];
    if(this.width < 480 || this.height < 320) {
      if(this.circleSize[0] > 8) this.circleSize[0] = 8;
      if(this.circleSize[1] > 4) this.circleSize[1] = 4;
    }
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend().orient("bottom").scale(this.cScale)
      .fontSize(this.config.fontSize)
      .label(this.config.legendLabel)
      .size([this.width - 2 * this.config.margin, 100])
      .tickValues(this.parsed.group.map(function(it){ return it.name; }));
    this.legendGroup.call(this.legend);
    this.legendSize = this.config.legendShow ? this.legend.offset() : [0,0];
    this.legendGroup.selectAll(".legend")
      .on("mouseover", function(it) { that.activeGroup = it; that.render(); })
      .on("mouseout", function(it) { that.activeGroup = null; that.render(); });
    this.popup.fontSize(this.config.fontSize);
    var ymin = d3.min(this.parsed.values);
    if(this.config.yAxisZeroBaseline) ymin = 0;
    this.yScale = d3.scale.linear()
      .domain([ymin,d3.max(this.parsed.values)])
      .range([height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0), this.config.margin]);
    this.yAxis = plotd3.rwd.axis()
      .orient("left")
      .scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    
    this.xScale = d3.scale.linear()
      .domain(d3.extent(this.parsed.order.map(function(it) { return it.idx; })))
      .range([
        this.config.margin + this.yAxisWidth + this.config.padding,
        width - this.config.margin - this.config.padding
      ]);
    this.xAxis = plotd3.rwd.axis()
      .orient("bottom")
      .scale(this.xScale)
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .tickFormat(function(it) {
        if(!that.parsed.order[it]) return "";
        return that.parsed.order[it].value;
      })
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset(): 0);
    this.yScale
      .range([
        height - this.config.margin - this.xAxisHeight - this.legendSize[1] - (this.config.legendShow ? this.config.fontSize : 0),
        this.config.margin
      ]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .background(this.config.gridBackground)
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.xAxisGroup.selectAll(".domain").attr({
      display: (this.config.xAxisShowDomain ? "block" : "none"),
      d: ["M",
        this.config.margin + this.yAxisWidth,
        this.config.xAxisTickSizeOuter,
        "V0",
        "H",
        this.width - this.config.margin,
        "V",
        this.config.xAxisTickSizeOuter
      ].join(" ")
    });
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.legendGroup.attr({
      transform: [
        "translate(",
        (this.width - this.legendSize[0])/2,
        (this.height - this.config.margin - this.legendSize[1]),
        ")"
      ].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      "transform": "translate(0," + this.yScale.range()[0] + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      "transform": "translate(" + (this.config.margin + this.yAxisWidth) + ",0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.lines.transition("morph").duration(500).attr({
      x1: function(it) { return that.xScale(it[0].order); },
      x2: function(it) { return that.xScale(it[1].order); },
      y1: function(it) { return that.yScale(it[0].value); },
      y2: function(it) { return that.yScale(it[1].value); },
      "stroke-width": 2
    });
    this.lines.style({
      stroke: function(it) {
        if(isNaN(it[0].value) || isNaN(it[1].value)) return 0;
        return that.cScale(that.parsed.group[it[0].group].name);
      }
    });
    this.dots.transition("morph").duration(500).attr({
      cx: function(it) { return that.xScale(it.order); },
      cy: function(it) { return that.yScale(it.value); },
      r: this.circleSize[0]/2,
      "stroke-width": this.circleSize[1],
      display: function(d,i) {
        if(isNaN(d.value)) return "none";
        return (that.config.nodeShow ? "block" : "none");
      }
    });
    this.dots.filter(function(it) { return it.active; }).attr({
      stroke: function(it) { return that.cScale(that.parsed.group[it.group].name); },
      fill: "#ffffff"
    });
    this.dots.filter(function(it) { return !it.active; }).attr({
      fill: function(it) { return that.cScale(that.parsed.group[it.group].name); },
      stroke: "#ffffff"
    });
    this.lines.transition("opacity").duration(500).attr({
      opacity: function(it) { return (that.activeGroup? (that.activeGroup == that.parsed.group[it[0].group].name ? 1 : 0.2):1); }
    });
    this.dots.transition("opacity").duration(500).attr({
      opacity: function(it) { return (that.activeGroup? (that.activeGroup == that.parsed.group[it.group].name ? 1 : 0.2):1); }
    });
  }
}}});
plotdb.chart.add('Curved Bar Chart',{"key":962,"name":"Curved Bar Chart","owner":4,"theme":null,"parent":null,"description":"one of the most famous junk chart, yet quite popular in infographics design.","basetype":["1"],"visualencoding":["3"],"category":["1"],"tags":["curve","round"],"likes":null,"searchable":true,"dimlen":2,"createdtime":"2016-02-18T16:36:18.000Z","modifiedtime":"2017-01-08T04:33:54.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"tag of bar","type":[],"fields":[],"require":false},"value":{"desc":"length of bar","type":["Number"],"fields":[],"require":true}},"config":{"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["Ascending","Descending","None"],"default":""}],"value":"Descending","default":"Descending","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a","idx":0},{"hex":"#f1c227","idx":1},{"hex":"#008a6d","idx":2},{"hex":"#00acdb","idx":3},{"hex":"#0064a8","idx":4}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"aAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Angular Axis"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"aAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Angular Axis"},"aAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":6,"category":"Angular Axis","rebindOnChange":true},"aAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Angular Axis"},"aAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Angular Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10 + Math.round(Math.random() * 2));
    return {
      value: [{name: "Score", data: list.map(function() { return parseInt(Math.random() * 100); })}],
      name: [{name: "Name", data: list.map(function(i) { return plotdb.data.sample.name[i % plotdb.data.sample.name.length]; })}]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "length of bar" },
    name: { type: [], require: false, desc: "tag of bar" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    padding: {},
    margin: {},
    palette: {},
    aAxisShow: {},
    aAxisTickSizeInner: {},
    aAxisTickPadding: {},
    aAxisTickCount: {rebindOnChange: true},
    aAxisStroke: {},
    sort: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.barGroup = this.svg.append("g");
    this.textGroup = this.svg.append("g");
    this.tickGroup = this.svg.append("g").attr({class: "axis angle"});
    this.tooltip = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name);
      popup.select(".value").text(d.value);
    });
  },
  parse: function() {
    this.values = this.data.map(function(it) { return it.value; });
    this.tickValues = d3.range(0, 1.0001, 1/9).map(
      function(it) { return d3.quantile([0,Math.PI*1.5], it);
    });
    this.data.sort(function(a,b) {
      return b.value - a.value;
    });
    this.overlap = plotd3.rwd.overlap();
  },
  bind: function() {
    var that = this, sel;
    sel = this.barGroup.selectAll("path.bar").data(this.data, function(d,i) { return d.name; });
    sel.exit().remove();
    sel.enter().append("path").attr({class: "bar"});
    sel = this.textGroup.selectAll("text").data(this.data, function(d,i) { return d.name; });
    sel.exit().remove();
    sel.enter().append("text").text(function(it) { return it.name; });
    sel = this.tickGroup.selectAll("g.tick").data(this.tickValues);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "tick"}).each(function(it) {
      d3.select(this).append("line");
      d3.select(this).append("text");
    });
    this.bars = this.barGroup.selectAll("path.bar");
    this.texts = this.textGroup.selectAll("text");
    this.ticks = this.tickGroup.selectAll("g.tick");
    if(this.config.popupShow) this.tooltip.nodes(this.bars);
    if(this.config.sort) {
      this.bars.sort(function(a,b) { return b.value - a.value; });
      this.texts.sort(function(a,b) { return b.value - a.value; });
    }
  },
  resize: function() {
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.tickValues = d3.range(0, 1.0001, 1/(this.config.aAxisTickCount || 1)).map(
      function(it) { return d3.quantile([0,Math.PI*1.5], it);
    });
    this.size = (
      ( this.width > this.height ? this.height : this.width ) / 2
      - this.config.margin
      - (this.config.aAxisShow 
         ? (this.config.fontSize + this.config.aAxisTickSizeInner + this.config.aAxisTickPadding)
         : 0)
      - 2
    );
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.tooltip.fontSize(this.config.fontSize);
    this.aScale = d3.scale.linear().domain([0,d3.extent(this.values)[1]]).range([0.0, Math.PI * 1.5]);
    this.rScale = d3.scale.linear().domain([0, this.data.length]).range([this.size, 0]);
    //this.colors.range(this.config.palette.colors.map(function(it) { return it.hex; }));
    this.colors = plotdb.Palette.scale.ordinal(this.config.palette, (this.colors ? this.colors.domain() : null), this.colors);
    this.padding = this.config.padding;
    this.barWidth = this.size / this.data.length - this.padding;
    if(this.barWidth < 4) {
      this.padding = (this.size/this.data.length) - 4;
      if(this.padding <= 0) this.padding = 1;
      this.barWidth = this.size/this.data.length - this.padding;
    }
  },
  render: function() {
    var that = this;
    var centerAttr = {
      transform: ["translate(", this.width/2 , " ", this.height/2, ")"].join("")
    };
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.barGroup.attr(centerAttr);
    this.textGroup.attr(centerAttr);
    this.tickGroup.attr(centerAttr);
    this.tickGroup.attr({
      display: (this.config.aAxisShow ? "block" : "none")
    });
    this.texts.transition("morph").duration(500).tween("morph",function(d,i) {
      var node = d3.select(this);
      var rsrc = this.oldRadius || that.rScale(i);
      var rdes = this.oldRadius = that.rScale(i);
      return function(t) {
        node.attr({
          y: function(d,i) { return -((rdes - rsrc) * t + rsrc - that.barWidth / 2); },
        });
      };
    });
    this.texts.attr({
      x: -this.padding,
      dy: "0.38em"
    }).style({
      "text-anchor": "end",
      fill: function(it) {
        var color = that.colors(it.name);
        var hsl = d3.hsl(color);
        if(hsl.l > 0.5) return hsl.darker().darker().toString();
        return color;
      },
      "font-size": this.config.fontSize
    }).text(function(d,i) { return d.name; });
    this.bars.transition("morph").duration(500).tween("morph",function(d,i) {
      var node = d3.select(this);
      var asrc = this.oldAngle || 0;
      var ades = this.oldAngle = that.aScale(d.value);
      var rsrc = this.oldRadius || 0;
      var rdes = this.oldRadius = that.rScale(i);
      return function(t) {
        var a = (ades - asrc) * t + asrc;
        var r = (rdes - rsrc) * t + rsrc;
        var largeArc = (a > Math.PI ? 1 : 0);
        var r1 = r;
        var r2 = r - that.barWidth;
        var x1 = (Math.sin(0) * r1);
        var y1 = -(Math.cos(0) * r1);
        var x2 = (Math.sin(0) * r2);
        var y2 = -(Math.cos(0) * r2);
        var x3 = (Math.sin(a) * r1);
        var y3 = -(Math.cos(a) * r1);
        var x4 = (Math.sin(a) * r2);
        var y4 = -(Math.cos(a) * r2);
        var ret = [
          "M", x1, y1,
          "A", r1, r1, 0, largeArc, 1, x3, y3,
          "L", x4, y4,
          "A", r2, r2, 0, largeArc, 0, x2, y2, 
          "Z"
        ].join(" ");
        node.attr({d: ret}); //return ret;  
      }
    });
    this.bars.transition("color").duration(function() { return d3.select(this).attr("fill") ? 500 : 0; }).style({
      fill: function(d,i) { return that.colors(d.name);},
      stroke: "none"
    });
    this.tickGroup.selectAll("text").attr({
      "text-anchor": "middle",
      "font-size": that.config.fontSize * 0.8,
      transform: function(it) {
        var r = that.config.aAxisTickSizeInner + that.config.aAxisTickPadding;
        return [
          "translate(",
          Math.sin(it) * (that.rScale(0)  + r),
          -Math.cos(it) * (that.rScale(0) + r),
          ") rotate(",
          (180 * it / Math.PI),
          ")"
        ].join(" ");
      }
    }).text(function(d,i) { return Math.round(that.aScale.invert(d)); });
    this.tickGroup.selectAll("line").attr({
      x1: function(it) { return Math.sin(it) * (that.rScale(0) + 1); },
      y1: function(it) { return -Math.cos(it) * (that.rScale(0) + 1); },
      x2: function(it) { return Math.sin(it) * (that.rScale(0) +1+that.config.aAxisTickSizeInner); },
      y2: function(it) { return -Math.cos(it) * (that.rScale(0) +1+that.config.aAxisTickSizeInner); },
      stroke: "#000",
      "stroke-width": 1
    });
    this.tickGroup.selectAll("path,line").attr({ stroke: that.config.aAxisStroke });
    this.overlap.nodes(this.texts);
  }
}}});
plotdb.chart.add('Nightingale's Rose',{"key":968,"name":"Nightingale's Rose","owner":4,"theme":null,"parent":null,"description":"A classic chart which was used by Nightingale in 1959 to depict the deaths in hospital in Crimea war.","basetype":["6"],"visualencoding":["6"],"category":["5"],"tags":["nightingale","crimeanwar","polar","windrose","wind","rose"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-02-19T16:48:24.000Z","modifiedtime":"2016-12-24T22:28:56.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"Order of Wedge","type":["Order"],"fields":[],"require":false},"values":{"desc":"Wedge Size","type":["Number"],"fields":[],"require":true,"multiple":true}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#7a322a"},{"hex":"#f93634"},{"hex":"#dddb83"},{"hex":"#ede6de"},{"hex":"#fdfffa"},{"hex":"#dbdbdb"},{"hex":"#48462d"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":12,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"rAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Radial Axis"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"rAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Radial Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"rAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Radial Axis"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"rAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"6","default":6,"category":"Radial Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"rAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Radial Axis"},"rAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Radial Axis"},"rAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Radial Axis"},"rAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Radial Axis"},"rAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Radial Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() { 
    var vlist = d3.range(3), list = d3.range(12);
    return {
      values: vlist.map(function(d,i) { return {
        name: plotdb.data.sample.name[d],
        data: list.map(function(d,j) { return Math.round(1 + Math.abs(6 - j) + Math.sin(i/2 + j * Math.PI / list.length) * (5 + i));  })
      }; }),
      order: [{name: "Year", data: list.map(function(d,i) { return d + 1995; })}]
    };
  },
  dimension: {
    values: { type: [plotdb.Number], require: true, multiple: true, desc: "Wedge Size" },
    order: { type: [plotdb.Order], require: false, desc: "Order of Wedge" }
  },
  config: {
    fontSize: {},
    margin: {},
    palette: {},
    legendShow: {},
    legendLabel: {},
    gridShow: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    rAxisShow: {},
    rAxisLabel: {},
    rAxisTickSizeInner: {},
    rAxisTickSizeOuter: {},
    rAxisTickPadding: {},
    rAxisShowDomain: {default: true},
    rAxisTickCount: {},
    rAxisLabelPosition: {},
    rAxisStroke: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.popup = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(that.names[d.field]);
      popup.select(".value div").text(d.order);
      popup.select(".value span").text(d.value);
    });
    this.frame = this.svg.append("circle").attr({class: "grid frame"});
    this.popup.getPopupNode().select(".value").call(function(d,i) {
      this.append("div"); this.append("span");
    });
    this.aAxisGroup = this.svg.append("g").attr({class: "axis angle"});
    this.rAxisGroup = this.svg.append("g").attr({class: "axis radius"});
  },
  parse: function() {
    var that = this, extents;
    plotdb.Order.sort(this.data, "order");      
    extents = this.data.map(function(d,i) { return d3.extent(d.values); });
    this.valueRange = d3.extent([0,1].map(function(it) {
      return d3.extent(extents.map(function(d,i) { return d[it]; }));
    }).reduce(function(a,b) { return a.concat(b); },[]));
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]++;
    this.names = this.dimension.values.fieldName;
    this.data.map(function(d,i) {
      d.idx = i;
      d.parsed = d.values.map(function(v,j) { return {value: v, order: d.order, idx: i, field: j};}); 
      d.parsed.sort(function(a,b) { return (b.value - a.value); });
    });
  },
  bind: function() {
    var that = this, sel;
    sel = this.dataGroup.selectAll("g.data").data(this.data);
    sel.exit().remove();
    sel = sel.enter().append("g").attr({class: "data"});
    this.dataGroup.selectAll("g.data").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("path.data").data(d.parsed)
        .enter().append("path").attr({class: "data"});
    });
    sel = this.aAxisGroup.selectAll("g.tick").data(this.data);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "tick"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("text").attr({class: "shadow"});
      node.append("text");
    });
    this.popup.nodes(this.svg.selectAll("path.data"));
  },
  resize: function() {
    var that = this, box = this.root.getBoundingClientRect();
    this.width = box.width;
    this.height = box.height;
    this.svg.attr({
      width: this.width + "px", height: this.height + "px",
      viewBox: [0,0,this.width,this.height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .orient("right")
      .tickValues(this.names)
      .label(this.config.legendLabel || " ")
      .size([220,this.height - 2 * this.config.margin])
      .fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = i + 1;
      that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null;
      that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.aScale = d3.scale.linear()
      .domain([0, this.data.length])
      .range([0, Math.PI * 2]);
    var mw = this.width - this.config.margin * 2 - this.config.fontSize * 4
        - (this.config.legendShow ? this.legendSize[0] + this.config.fontSize: 0) ;
    var mh = this.height - this.config.margin * 2 - this.config.fontSize * 2;
    this.size = (mw > mh? mh : mw) / 2;

    this.rScale = d3.scale.sqrt()
      .domain([0, this.valueRange[1]])
      .range([this.height/2, this.height/2 - this.size]);
    this.rAxis = plotd3.rwd.axis()
      .scale(this.rScale)
      .orient("left")
      .fontSize(this.config.fontSize)
      .label(this.config.rAxisLabel || "")
      .labelPosition(this.config.rAxisLabelPosition)
      .tickValues(this.rScale.ticks(this.config.rAxisTickCount))
      .tickSize(this.config.rAxisTickSizeInner, this.config.rAxisTickSizeOuter)
      .tickPadding(this.config.rAxisTickPadding);
    this.rAxisGroup.call(this.rAxis).select(".domain").remove();
    this.rAxisWidth = (this.config.rAxisShow ? this.rAxis.offset() : 0);
    mw = this.width - this.config.margin * 2 - this.config.fontSize * 4
      - (this.config.rAxisShow ? this.rAxisWidth + this.config.fontSize : 0)
      - (this.config.legendShow ? this.legendSize[0] + this.config.fontSize: 0);
    this.size = (mw > mh? mh : mw) / 2
    this.rScale.range([this.height/2, this.height/2 - this.size]);
    this.rAxisGroup.call(this.rAxis);
    this.rAxisWidth = (this.config.rAxisShow ? this.rAxis.offset() : 0);
    this.rScale = d3.scale.sqrt()
      .domain([0, this.valueRange[1]])
      .range([0, this.size]);
    this.maxWidth = this.size * Math.PI * 2 / (this.data.length || 1);
    this.cx = this.width/2;
    var sel = this.gridGroup.selectAll("circle.grid.radial").data(this.rAxis.tickValues());
    sel.exit().remove();
    sel.enter().append("circle").attr({class: "grid radial"});
  },
  render: function() {
    var that = this,sel;
    this.aAxisGroup.attr({
      transform: ["translate(", this.cx, this.height/2, ")"].join(" ")
    }).selectAll(".tick").transition("morph").duration(this.inited ? 500 : 0).attr({
      transform: function(d,i) {
        var r = that.rScale(d3.max(d.values)) + that.config.fontSize /2;
        var a = that.aScale(i + 0.5);
        var x = Math.sin(a) * r;
        var y = -Math.cos(a) * r;
        return ["translate(", x, y, ") rotate(", a * 180 / Math.PI, ")"].join(" ");
      }
    }).each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").text(d.order).attr({
        "font-size": that.config.fontSize,
        "text-anchor": "middle"
      });
      node.select("text.shadow").attr({
        stroke: "#fff",
        "stroke-width": 2
      });
    });
    this.gridGroup.selectAll("circle").attr({
      cx: 0, cy: 0,
      r: function(d,i) { return that.rScale(d); },
      fill: "none",
      "stroke-dasharray": this.config.gridDashArray,
      stroke: this.config.gridStroke,
      "stroke-width": this.config.gridStrokewidth,
      display: (this.config.gridShow ? "block" : "none")
    });
    this.dataGroup.attr({
      transform: ["translate(", this.cx, this.height/2, ")" ].join(" ")
    });
    sel =  this.dataGroup.selectAll("path.data");
    if(this.inited) sel = sel.transition("morph").duration(500);
    sel.attr({
      d: function(it) {
  	    var i = it.idx;
        var largeArc = (that.data.length > 1 ? 0 : 1);
        var r = that.rScale(it.value);
        var x1 = (Math.sin(that.aScale(i)) * r);
        var y1 = -(Math.cos(that.aScale(i)) * r);
        var x2 = (Math.sin(that.aScale(i + 1)) * r);
        var y2 = -(Math.cos(that.aScale(i + 1)) * r);
        var ret = [
          "M", 0, 0,
          "L", x1, y1,
          "A", r, r, 0, largeArc, 1, x2, y2,
          "L", 0, 0,
          "Z"
        ].join(" ");
        return ret;
      },
      fill: function(d,i) { return that.cScale(that.names[d.field]); },
      stroke: "#fff",
      "stroke-width": 1.5
    });
    this.dataGroup.selectAll("path.data").transition("opacity").attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.field + 1 ? 1 : 0.1);
      },
    });
    var maxTick = d3.max(this.aAxisGroup.selectAll("text.shadow")[0].map(function(d,i) {
      return d.getBBox().width;
    }));
    if(this.maxWidth < maxTick) this.aAxisGroup.selectAll("g.tick").attr({
      opacity: function(d,i) { return (i%2?1:0);}
    });
    var h = this.dataGroup[0][0].getBoundingClientRect().height;
    var cy = this.height/2;
    var offset = {transform: [
      "translate(", this.cx, cy, ")"
    ].join(" ")};
    this.dataGroup.attr(offset);
    this.gridGroup.attr(offset);
    this.aAxisGroup.attr(offset);
    this.rAxisGroup.attr({
      transform: ["translate(",
        (this.cx - this.config.fontSize * 2 - this.size),
        (cy - this.height/2),
        ")"].join(" "),
      display: this.config.rAxisShow ? "block" : "none"
    });
    this.rAxisGroup.selectAll("path,line").attr({ stroke: that.config.rAxisStroke });
    this.legendGroup.attr({
      transform: ["translate(",
        (this.cx + this.size + this.config.fontSize * 2),
        (this.height - this.legendSize[1])/2,
        ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.inited = true;
  }
}}});
plotdb.chart.add('Bullet Chart',{"key":975,"name":"Bullet Chart","owner":4,"theme":null,"parent":null,"description":"a standard bullet chart. As a variation of bar chart by Stephen Few, bullet chart is best for showing performance index.","basetype":["1"],"visualencoding":["1"],"category":["6"],"tags":["stephen few","performance","score","kpi"],"likes":1,"searchable":true,"dimlen":7,"createdtime":"2016-03-08T13:00:13.000Z","modifiedtime":"2016-09-29T08:35:54.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"bad":{"desc":"qualitative value: bad","type":["Number"],"fields":[],"require":true},"good":{"desc":"Maximal value","type":["Number"],"fields":[],"require":true},"name":{"desc":"name of thie performance value","type":[],"fields":[],"require":false},"unit":{"desc":"unit of performance","type":[],"fields":[],"require":false},"comparative":{"desc":"comparative value","type":["Number"],"fields":[],"require":true},"performance":{"desc":"performance value","type":["Number"],"fields":[],"require":true},"satisfactory":{"desc":"qualitative value: satisfactory","type":["Number"],"fields":[],"require":true}},"config":{"bad":{"name":"Bad","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffccc0","default":"#dc4521"},"good":{"name":"Good","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#bcffcd","default":"#dc4521"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"20","default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"performance":{"name":"Performance","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#3c4091","default":"#dc4521"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"satisfactory":{"name":"Satisfactory","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e6e6e6","default":"#dc4521"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"X Axis"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10);
    var base = list.map(function() { return parseInt(Math.random() * 10) + 1; });
    return {
      performance: [{name: "performance", data: list.map(function(i) { return Math.random() * base[i]; })}],
      comparative: [{name: "comparative", data: list.map(function(i) { return Math.random() * base[i]; })}],
      good: [{name: "max", data: list.map(function(i) { return base[i]; })}],
      satisfactory: [{name: "satisfactory", data: list.map(function(i) { return (Math.random() * 0.3 + 0.6) * base[i]; })}],
      bad: [{name: "bad", data: list.map(function(i) { return (Math.random() * 0.3 + 0.2) * base[i]; })}],
      name: [{name: "name", data: list.map(function(i) { 
        return ["ROI", "CTA", "Revenue", "Traffic", "Market Share", "Growth"][parseInt(Math.random()* 6)]; })}],
      unit: [{name: "unit", data: list.map(function(i) { return ["dollar ($)", "% (/ppl)", "ppl", "Visit(s)"][parseInt(Math.random() * 4)]; })}]
    };
  },
  dimension: {
    performance: { type: [plotdb.Number], require: true, desc: "performance value" },
    comparative: { type: [plotdb.Number], require: true, desc: "comparative value" },
    bad: { type: [plotdb.Number], require: true, desc: "qualitative value: bad" },
    satisfactory: { type: [plotdb.Number], require: true, desc: "qualitative value: satisfactory" },
    good: { type: [plotdb.Number], require: true, desc: "Maximal value" },
    name: { type: [], require: false, desc: "name of thie performance value"},
    unit: {type: [], require: false, desc: "unit of performance"}
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    padding: {},
    margin: {},
    performance: { name: "Performance", type: [plotdb.Color], default: plotdb.Color['default']},
    bad: { name: "Bad", type: [plotdb.Color], default: plotdb.Color['default']},
    satisfactory: { name: "Satisfactory", type: [plotdb.Color], default: plotdb.Color['default']},
    good: { name: "Good", type: [plotdb.Color], default: plotdb.Color['default']},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {},
    xAxisStroke: {},
  },
  init: function() {
    var that = this;
    this.labelWidth = 0;
    this.svg = d3.select(this.root).append("svg");
  },
  parse: function() {
    this.vps = this.data.map(function(it) { return it.performance; });
    this.vcs = this.data.map(function(it) { return it.comparative; });
    this.vbs = this.data.map(function(it) { return it.bad; });
    this.vss = this.data.map(function(it) { return it.satisfactory; });
    this.vgs = this.data.map(function(it) { return it.good; });
    this.values = this.vps.concat(this.vcs).concat(this.vbs).concat(this.vss).concat(this.vgs);
    this.vrange = d3.extent(this.values);
    this.names = this.data.map(function(it) { return it.name; });
    this.units = this.data.map(function(it) { return it.unit; });
    this.nameMax = d3.max(this.names.map(function(it) { return (it || "").length; }));
    this.unitMax = d3.max(this.units.map(function(it) { return (it || "").length; }));
    this.xscales = this.data.map(function(it) {
      var values = [it.performance, it.comparative, it.bad, it.satisfactory, it.good];
      var max = d3.max(values);
      if(!max) max = 1;
      return d3.scale.linear().domain([0,max]);
    });
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("g.bar").data(this.data);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "bar"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("rect").attr({class: "good"});
      node.append("rect").attr({class: "satisfactory"});
      node.append("rect").attr({class: "bad"});
      node.append("rect").attr({class: "comparative"});
      node.append("rect").attr({class: "performance"});
      node.append("text").attr({class: "name"});
      node.append("text").attr({class: "unit"});
      node.append("g").attr({class: "axis horizontal"});
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height - 10 - svgbox.top;
    var barHeight = this.barHeight = this.config.fontSize * 3;
    this.axisHeight = (this.config.xAxisShow
      ? this.config.fontSize 
        + Math.max(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
        + this.config.xAxisTickPadding
      : 0
    );
    var chartHeight = (this.config.margin * 2) + 
        (this.barHeight + this.config.padding + this.axisHeight) * this.data.length;
    if(height < chartHeight) height = chartHeight;

    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.labelWidth = 100;
    this.xscale = d3.scale.linear().domain([0,this.vrange[1]]).range([
      this.labelWidth, width - 2 * this.config.margin
    ]);
    this.xscales.forEach(function(it) {
      it.range([
        that.labelWidth, width - 2 * that.config.margin
      ]);
    });
    this.axes = this.xscales.map(function(it) {
      return plotd3.rwd.axis()
        .orient("bottom")
        .scale(it)
        .tickSize(that.config.xAxisTickSizeInner, that.config.xAxisTickSizeOuter)
        .tickPadding(that.config.xAxisTickPadding)
        .ticks(that.config.xAxisTickCount)  
        .fontSize(that.config.fontSize);
    });
  },
  render: function() {
    var that = this;
    var bh = that.barHeight;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.svg.selectAll("g.bar").attr({
      transform: function(d,i) {
        return [
          "translate(",
          that.config.margin,
          ",",
          that.config.margin + (i * (bh + that.config.padding + that.axisHeight)),
          ")"
        ].join("");
      }
    }).each(function(d,i) {
      var node = d3.select(this);
      node.select("rect.performance").attr({
        x: function(d) { return that.xscales[i](0); },
        y: bh * 0.4, height: bh * 0.2,
        width: function(d) {
          return that.xscales[i](d.performance) - that.xscales[i](0);
        },
        fill: that.config.performance
      });
      node.select("rect.comparative").attr({
        y: bh * 0.2, height: bh * 0.6, width: 4,
        x: function(d) {
          return that.xscales[i](d.comparative) - 2;
        },
        fill: that.config.performance
      });
      node.select("rect.bad").attr({
        x: function(d) { return that.xscales[i](0); },
        y: 0, height: bh, 
        width: function(d) { return that.xscales[i](d.bad) - that.xscales[i](0); },
        fill: that.config.bad
      });
      node.select("rect.satisfactory").attr({
        x: function(d) { return that.xscales[i](0); },
        y: 0, height: bh,
        width: function(d) { return that.xscales[i](d.satisfactory) - that.xscales[i](0); },
        fill: that.config.satisfactory
      });
      node.select("rect.good").attr({
        x: function(d) { return that.xscales[i](0); },
        y: 0, height: bh,
        width: function(d) { return that.xscales[i](d.good) - that.xscales[i](0); },
        fill: that.config.good
      });
      node.select("text.name").attr({
        x: that.labelWidth / 2,
        y: bh/2 - that.config.fontSize / 2 - 2,
        "text-anchor": "middle",
        dy: "0.5em",
        "font-size": that.config.fontSize
      }).text(function(it) { return it.name; });
      node.select("text.unit").attr({
        x: that.labelWidth / 2,
        y: bh/2 + that.config.fontSize / 2 + 2,
        "text-anchor": "middle",
        dy: "0.5em",
        "font-size": (that.config.fontSize / 1.5 < 12
                      ?(that.config.fontSize>12?12:that.config.fontSize)
                      :that.config.fontSize / 1.5)
      }).text(function(it) { return it.unit; });
      node.select("g.axis").attr({
        transform: "translate(0,"+bh+")"
      }).call(that.axes[i]);
      node.select("g.axis").selectAll("text").attr({
        "font-size": that.config.fontSize
      });
    });
    this.svg.selectAll(".axis").attr({
      display: (this.config.xAxisShow ? "block" : "none")
    });
    this.svg.selectAll(".axis .domain").attr({
      display: (this.config.xAxisShowDomain ? "block" : "none")
    });
    this.svg.selectAll(".axis path,line").attr({ stroke: that.config.xAxisStroke });
    var maxWidth = d3.selectAll("g.bar .text")[0].map(function(it) { return it.getBBox().width; });
    if(this.labelWidth != maxWidth) setTimeout(function() {
      that.labelWidth = maxWidth;
      that.resize();
      that.render();
    }, 0);
  }
}}});
plotdb.chart.add('Bubble Chart',{"key":993,"name":"Bubble Chart","owner":4,"theme":null,"parent":null,"description":"a standard bubble chart","basetype":["5"],"visualencoding":["6"],"category":["1"],"tags":["bubble","size","budget","circle","foam","pack"],"likes":null,"searchable":true,"dimlen":3,"createdtime":"2016-02-19T17:33:10.000Z","modifiedtime":"2017-04-06T01:25:52.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"Bubble Label","name":"Bubble Label","type":[],"fields":[],"require":false,"fieldName":null},"color":{"desc":"Bubble Color.","name":"Bubble Color","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"Bubble Size","name":"Bubble Size","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["value","color","name"],"default":""}],"value":"value","default":"value","category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"15","default":13,"category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"aggregateName":{"desc":"this name will be shown as the label of bubble.","name":"Label for Aggregated Bubble","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Other","default":"Other","category":"Aggregate","rebindOnChange":true},"aggregateShow":{"desc":"After aggregating, show the result bubble ? ","name":"Show Aggregated Bubbles","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Aggregate","rebindOnChange":true},"bubblePadding":{"name":"Bubble Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":5,"default":5,"category":"Bubble"},"labelShowName":{"name":"Show Name in Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"extend":"labelShow","default":true,"category":"Label"},"labelShowColor":{"name":"Show Color Value in Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"extend":"labelShow","default":true,"category":"Label"},"labelShowValue":{"name":"Show Value in Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"extend":"labelShow","default":true,"category":"Label"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Label"},"bubbleStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":"1","category":"Bubble"},"labelShowOverflow":{"desc":"Show all label, even if they are too long.","name":"Show Overflow Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"aggregateThreshold":{"max":100,"min":0,"desc":"Merge small bubbles into one bubble with its value this percent of total values","name":"Merge Small Bubbles","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"category":"Aggregate","rebindOnChange":true},"aggregateMethodColor":{"desc":"How to aggregate small bubbles' color? You can choose 'Sum' or 'Average', or 'None' for not aggregating.","name":"Aggregate Method for Small Bubbles's Color","type":[{"name":"Choice","level":20,"values":["Sum","Average","None"],"default":""}],"value":"Average","extend":"aggregateMethod","default":"Average","category":"Aggregate","rebindOnChange":true},"aggregateMethodValue":{"desc":"How to aggregate small bubbles' values? You can choose 'Sum' or 'Average'","name":"Aggregate Method for Small Bubbles's Value","type":[{"name":"Choice","level":20,"values":["Sum","Average"],"default":""}],"value":"Sum","extend":"aggregateMethod","default":"Sum","category":"Aggregate","rebindOnChange":true}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var count = 47 + Math.round(Math.random() * 6);
    var value = [{name: "value", data: d3.range(count).map(function() { 
      var v = Math.random();
      if(v < 0.7) return Math.random() + 1;
      if(v < 0.9) return Math.random() * 5 + 3;
      return Math.random() * 10 + 6;
      return Math.random(); 
    })}];
    var name = [{name: "name", data: d3.range(count).map(function() { return plotdb.data.sample.name.rand(); })}];
    var color = [{name: "category", data: d3.range(count).map(function() { return plotdb.data.sample.category.rand(); })}];
    return {
      value: value,
      name: name,
      color: color
    };
  },

  dimension: {
    value: { name: "Bubble Size", type: [plotdb.Number], require: true, desc: "Bubble Size" },
    name: { name: "Bubble Label", type: [], require: false, desc: "Bubble Label" },
    color: { name: "Bubble Color", type: [], require: false, desc: "Bubble Color."}
  },
  config: {
    fontFamily: {},
    background: {},
    fontSize: {},
    margin: {},
    bubblePadding: {},
    bubbleStrokeWidth: {},
    palette: {},
    popupShow: {},
    legendLabel: {},
    legendShow: {},
    labelShadowSize: {},
    //labelShow: {name: "},
    labelShowColor: {extend: "labelShow", name: "Show Color Value in Label", default: true},
    labelShowValue: {extend: "labelShow", name: "Show Value in Label", default: true},
    labelShowName: {extend: "labelShow", name: "Show Name in Label", default: true},
    labelShowOverflow: {},
    unit: {},
    aggregateShow: {},
    aggregateThreshold: {},
    aggregateName: {},
    aggregateMethodValue: {
      name: "Aggregate Method for Small Bubbles's Value",
      desc: "How to aggregate small bubbles' values? You can choose 'Sum' or 'Average'",
      extend: "aggregateMethod"
    },

    aggregateMethodColor: {
      name: "Aggregate Method for Small Bubbles's Color",
      desc: "How to aggregate small bubbles' color? You can choose 'Sum' or 'Average', or 'None' for not aggregating.",
      type: [plotdb.Choice(["Sum", "Average", "None"])],
      default: "Average",
      extend: "aggregateMethod"
    },
    sort: { type: [plotdb.Choice(["value","color","name"])], default: "value", rebindOnChange: true},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.popup = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name);
      popup.select(".value").text((parseInt(100 * d.value)/100) + (that.config.unit ? " " +that.config.unit : ""));
    });
  },
  parse: function() {
   var total = this.data.reduce(function(a,b) { return a + b.value; }, 0);
    var small = total * this.config.aggregateThreshold / 100;
    var sum = 0;

    this.data.sort(function(a,b) { return a.value - b.value; });
    for(var i=0;i<this.data.length;i++) {
      if(this.data[i].value + sum > small) break; 
      sum += this.data[i].value;
    }
    var smalls = this.data.splice(0, i);
    var tac = this.config.aggregateMethodColor;
    var tav = this.config.aggregateMethodValue;
    var other = {
      name: this.config.aggregateName,
      value: smalls.reduce(function(a,b) { return a + b.value; }, 0),
      color: tac != 'None' && (this.dimension.color.fields[0] || {}).datatype == "Number"
        ? smalls.reduce(function(a,b) { return a + b.color; }, 0)
        : ""
    };
    if(tav == 'Average') other.value = Math.round(100 * other.value / (smalls.length || 1))/100;
    if(tac == 'Average' && other.color) other.color = Math.round(100 * other.color / (smalls.length || 1))/100;
    if(this.config.aggregateShow) this.data.push(other);
  },
  bind: function() {
    var that = this,sel;
    this.resize();
    sel = this.svg.selectAll("circle").data(this.nodes);
    sel.exit().attr("class","").transition("exit").duration(500).attr({opacity:0,r:0}).remove();
    sel = sel.enter().append("circle").attr({opacity: 0, r: 0});
    if(this.config.popupShow) this.popup.nodes(sel);
    sel = this.svg.selectAll("g.label").data(this.nodes);
    sel.exit().remove();
    sel = sel.enter().append("g").attr({class: "label"});
    this.svg.selectAll("g.label").each(function(d,i) {
      var node = d3.select(this);
      var cls = ["name shadow","color shadow","value shadow","name data","color data","value data"];
      sel = node.selectAll("text").data([d,d,d,d,d,d]).enter().append("text").attr({class: function(d,i) { return cls[i]; }});
    });
    if(this.config.popupShow) this.popup.nodes(sel);
    this.circles = this.svg.selectAll("circle");
    this.labels = this.svg.selectAll("g.label");
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.auto(this.config.palette, this.dimension.color.fields);
    this.legend = plotd3.rwd.legend()
      .orient("right")
      .scale(this.cScale)
      .label(this.config.legendLabel || "")
      .size([220, this.height - this.config.margin * 2])
      .tickValues(this.cScale.domain()) //this.categories)
      .fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover",function(d,i) {
      that.activeGroup = d;
      that.render();
    }).on("mouseout",function(d,i) { 
      that.activeGroup = null;
      that.render();
    });
    this.legendSize = this.config.legendShow ? this.legend.offset() : [0, 0];
    this.sortby = this.config.sort;
    this.bubble = d3.layout.pack()
    .sort(function(a,b) {
      if(a[that.sortby] < b[that.sortby]) return 1;
      else if(a[that.sortby] > b[that.sortby]) return -1;
      return 0;
    }).padding(this.config.bubblePadding).size([width - this.legendSize[0],height]);
    this.nodes = this.bubble.nodes({children: this.data}).filter(function(it) { return it.depth; });
    for(var i = 0,n,f1,f2; i < this.nodes.length; i++) {
      n = this.nodes[i];
      f1 = n.r * 3.0 / (""+(n.name || "")).length;
      f2 = n.r * 2 / (""+(n.color || "")).length;
      n.f1 = (f1 > that.config.fontSize * 1.2 ? that.config.fontSize * 1.2 : f1);
      if(f1 < 12) n.f1 = 12;
      n.f2 = (f2 > that.config.fontSize * 0.9 ? that.config.fontSize * 0.9 : f2);
      n.f2 = (n.f1 < n.f2? n.f1: n.f2);
      if(n.f2 < 10) n.f2 = 10;
    }
  },
  render: function() {
    var that = this,sel;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: ["translate(", this.width - this.legendSize[0] - this.config.margin, (this.height - this.legendSize[1])/2, ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.circles.transition("morph").duration(function() { return d3.select(this).attr("cx") ? 500 : 0; }).attr({
      cx: function(it) { return it.x; },
      cy: function(it) { return it.y; },
    });
    this.circles.style({
      fill: function(d,i) { return that.cScale(d.color); },
      stroke: function(d,i) {
        return d3.hsl(that.cScale(d.color)).darker().toString();
      },
      "stroke-width": that.config.bubbleStrokeWidth
    });
    this.circles.transition("opacity").attr({
      opacity: function(d) {
        if(!that.activeGroup || d.color == that.activeGroup) return 1;
        return 0.1;
      },
      r:  function(it) { return it.r; },
    });
    sel = this.labels;
    if(this.inited) sel = sel.transition("morph").duration(500);
    this.labels.transition("morph").duration(function() { return d3.select(this).attr("transform") ? 500 : 0; }).attr({
      transform: function(d,i) { return ["translate(",d.x,d.y,")"].join(" "); },
    });
    this.labels.each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").attr({
        "text-anchor": "middle",
        dy: function(d) {
          var node = d3.select(this);
          var v = {
            name: that.config.labelShowName && (d.name || d.name == 0),
            color: that.config.labelShowColor && (d.color || d.color == 0),
            value: that.config.labelShowValue && (d.value || d.value == 0)
          };
          var ret = ["name","color","value"].map(function(d,i) {
            return [v[d], node.classed(d), i];
          }).filter(function(d,i) { return d[0]; });
          var delta = [0,0,0.5,1][ret.length];
          for(var i=0;i<ret.length;i++) {
            if(ret[i][1]) {
              return (-delta + i + 0.38) + "em";
            }
          }
          return "0.38em";
        },
        "font-size": function() {
          return d3.select(this).classed("name") ? d.f1 : d.f2;
        },
        "font-weight": function() {
          return d3.select(this).classed("name") && that.config.labelShowColor ? "bold" : "light";
        },
        opacity: function() {
          return 1;
        },
        fill: function() {
          var hsl = d3.hsl(that.cScale(d.color));
          if(hsl.l > 0.65) return "#000"; else return "#fff";
        },
        stroke: function(it) {
          if(!d3.select(this).classed("shadow")) return "none";
          var hsl = d3.hsl(that.cScale(d.color));
          if(hsl.l > 0.65) return "#fff"; else return "#000";
        },
        "stroke-width": function(d,i) {
          if(!d3.select(this).classed("shadow")) return 2;
          return that.config.labelShadowSize || 0;
        },
        display: function(d,i) {
          if(d3.select(this).classed("color") && !that.config.labelShowColor) return "none";
          if(d3.select(this).classed("name") && !that.config.labelShowName) return "none";
          if(d3.select(this).classed("value") && !that.config.labelShowValue) return "none";
          if(!d3.select(this).classed("shadow")) return "block";
          return that.config.labelShadowSize ? "block" : "none";
        }
      }).text(function() {
        var node = d3.select(this);
        var field = ["name","color","value"].map(function(d,i) { return [node.classed(d),d]; }).filter(function(d,i) { return d[0]; })[0][1];
        var ret = (typeof(d[field]) == "number" ? Math.round(100 * d[field])/100 : d[field]);
        if(field == "value") ret = ret + "" + that.config.unit;
        return ret;
      });
    });
    this.labels.style({
      display: function(d,i) {
        var node = d3.select(this);
        var wName = node.select("text.name.data")[0][0].getBBox().width;
        var wCat = node.select("text.color.data")[0][0].getBBox().width;
        if(!that.config.labelShowOverflow && (wName >= d.r * 2.2 || wCat >= d.r * 2.2)) return "none";
        return "block";
      }
    });
    this.inited = true;
  }
}}});
plotdb.chart.add('Pie Bubble',{"key":1003,"name":"Pie Bubble","owner":4,"theme":null,"parent":null,"description":"bubble size as the summation and pie in bubble for comparison","basetype":["3","5"],"visualencoding":["5","6"],"category":["1","4"],"tags":["rate","percent","compare"],"likes":null,"searchable":true,"dimlen":3,"createdtime":"2016-03-15T15:53:38.000Z","modifiedtime":"2017-04-05T01:56:28.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"type":[],"fields":[],"require":false,"fieldName":null},"value1":{"type":["Number"],"fields":[],"require":true,"fieldName":null},"value2":{"type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"color1":{"hint":"positive","name":"Value1 Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#d93510","default":"#3f7ab5","rebindOnChange":true},"color2":{"hint":"negative","name":"Value2 Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#3f7ab5","default":"d93510","rebindOnChange":true},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":12,"default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Label"},"maxRadius":{"name":"Max Radius","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":35,"default":100,"rebindOnChange":true},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Label"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
  ref: "http://www.nytimes.com/interactive/2012/09/06/us/politics/convention-word-counts.html#Government",
  sample: function() {
    var list = d3.range(37 + Math.round(Math.random() * 6));
    return {
      value1: [{name: "Value1", data: list.map(function(d,i) { return parseInt(Math.random() * 1000); })}],
      value2: [{name: "Value2", data: list.map(function(d,i) { return parseInt(Math.random() * 1000); })}],
      name: [{name: "Name", data: list.map(function(d,i) { return plotdb.data.sample.name[i % plotdb.data.sample.name.length]; })}]
    };
  },
  dimension: {
    value1: { type: [plotdb.Number], require: true },
    value2: { type: [plotdb.Number], require: true },
    name: { type: [], require: false }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    labelShow: {default: true},
    labelShadowSize: {},
    legendLabel: {},
    legendShow: {},
    popupShow: {},
    color1: { name: "Value1 Color", type: [plotdb.Color], default: "#3f7ab5",
            hint: plotdb.Color.subtype.positive, rebindOnChange: true},
    color2: { name: "Value2 Color", type: [plotdb.Color], default: "d93510",
            hint: plotdb.Color.subtype.negative, rebindOnChange: true},
    maxRadius: { name: "Max Radius", type: [plotdb.Number], default: 100, rebindOnChange: true }
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.dataGroup = this.svg.append("g").attr({class: "data-groups"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name || "-");
      popup.select(".value").text(d.value1 + " v.s. " + d.value2);
    });
   this.force = d3.layout.force();
  },
  parse: function() {
    var v1, v2, that = this;
    if(!this.dimension.value1.fields.length) this.data.map(function(d,i) { d.value1 = 0; });
    if(!this.dimension.value2.fields.length) this.data.map(function(d,i) { d.value2 = 0; });
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = ""; });
    for(var idx = 0;idx < this.data.length; idx++) {
      this.data[idx].value1 = v1 = parseFloat(this.data[idx].value1);
      this.data[idx].value2 = v2 = parseFloat(this.data[idx].value2);
      this.data[idx].value = v1 + v2;
    }
    this.data.map(function(it) { 
      it.sum = Math.sqrt(it.value1 + it.value2); 
      v1 = it.value1;
      v2 = it.value2;
      rate = 0;
      if(v1 < 0) v1 = 0;
      if(v2 < 0) v2 = 0;
      if(v1 + v2 == 0) rate = 0.5;
      else {
        rate = v2 / (v1 + v2);
      }
      it.rate = rate;
    });
    this.sumRange = d3.extent(this.data.map(function(d) { return d.sum; }));
    this.rateRange = d3.extent(this.data.map(function(d) { return d.rate; }));
  },
  bind: function() {
   var that = this,sel;
   this.force.nodes(this.data).charge(function(it) {
     return -Math.sqrt(it.r) * (that.size / 20);
   }).on("tick",function() { that.tick(); });
   sel = this.dataGroup.selectAll("g.data-group").data(this.data);
   sel.exit().remove();
   sel.enter().append("g").attr("class","data-group").each(function(d,i) {
     var node = d3.select(this);
     node.append("circle").attr({class: "shadow", fill: "none"});
     node.append("path").attr({class: "pie1 data"});
     node.append("path").attr({class: "pie2 data"});
     node.append("text").attr({class: "label shadow", stroke: "#000", "stroke-width": 3});
     node.append("text").attr({class: "label"});
   });
   this.dataGroup.selectAll("g.data-group").each(function(d,i) {
     var node = d3.select(this);
     node.select("circle").datum(d);
     node.selectAll("path").datum(d);
     node.selectAll("text").datum(d);
   });
   this.circles = this.svg.selectAll("g.data-group");
   this.circles.selectAll("circle").attr({
     cx: 0, cy: 0, r: function(d,i) { return d.r; }, stroke: "#fff", "stroke-width": Math.ceil(this.width / 240)
   });
   this.circles.selectAll("text").attr({
     "text-anchor": "middle", fill: "#fff"
   }).text(function(d,i) { return d.name; });
   this.circles.selectAll("path").attr({
     d: function(d,i) {
       var r = d.r, rate = d.rate * Math.PI;
       var rx = r * Math.cos(rate);
       var ry1 = -r * Math.sin(rate);
       var ry2 = r * Math.sin(rate);
       return [
         "M", rx, ry1,
         "A", r, r, 0, (d.value1<d.value2?i:1 - i), i, rx, ry2,
         "L", 0, 0,
         "Z"
       ].join(" ")
     },
     opacity: 1,
     fill: function(d,i) {
       return [that.config.color1, that.config.color2][i];
     }
   });
   if(this.config.popupShow) this.popup.nodes(this.circles);
   this.force.start();
  },
  tick: function() {
    var a = this.force.alpha(), m = this.config.margin, w = this.width, h = this.height;
    var legendHeight = (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0);
    for(var i=0,node;i<this.data.length;i++) {
      node = this.data[i];
      node.x = node.x + (this.rateScale(node.rate) * w - node.x) * a * 0.1;
    }
    for(var i=0,node;i<this.data.length;i++) {
      node = this.data[i];
      if(node.x <= node.r) node.x = node.r;
      if(node.x >= w - node.r - 2 * m) node.x = w - node.r - 2 * m;
      if(node.y <= node.r) node.y = node.r;
      if(node.y >= h - node.r - legendHeight - 2 * m) node.y = h - node.r - legendHeight - 2 * m;
    }
    this.postrender();
  },
  resize: function() {
    var that = this, newRadius, rebind = false;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.size = (width > height ? height : width);
    this.popup.fontSize(this.config.fontSize);
    this.svg.attr({
      width: width,
      height: height,
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    var legendScale = d3.scale.ordinal().domain([
      this.dimension.value1.fieldName || this.config.value1Label || "",
      this.dimension.value2.fieldName || this.config.value1Labe2 || "",
    ]).range([
      this.config.color1,
      this.config.color2
    ]);
    this.legend = plotd3.rwd.legend()
      .label(this.config.legendLabel || "")
      .scale(legendScale)
      .orient("bottom")
      .fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = i + 1;
      that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null;
      that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.rateScale = d3.scale.linear().domain(this.rateRange).range([0,1]);
    if(this.config.maxRadius > this.size / 10) {
      newRadius = this.size / 10;
      if(this.maxRadius !=newRadius) rebind = true;
      this.maxRadius = newRadius;
    } else this.maxRadius = this.config.maxRadius;
    this.rScale = d3.scale.sqrt()
      .domain([0,this.sumRange[1]])
      .range([0,this.maxRadius]);
    this.data.map(function(it) { it.r = that.rScale(it.sum); });
    if(rebind) this.bind();
    if(this.force) this.force.size([
      this.width - this.config.margin * 2,
      this.height 
      - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0)
      - this.config.margin * 2
    ]).start();
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({ transform: ["translate(",
      (this.width - this.legendSize[0]) / 2,
      this.height - this.legendSize[1] - this.config.margin,
      ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.dataGroup.attr({
      transform: ["translate(", this.config.margin, this.config.margin, ")"].join(" ")
    });
    this.circles.each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("path").transition().attr({
        opacity: function(d,i) { if(!that.activeGroup || that.activeGroup == i + 1) return 1; else return 0.2; }
      });
      node.selectAll("text").attr({
        fill: "#fff",
        "font-size": that.config.fontSize,
        dy: "0.25em",
        display: (that.config.labelShow ? "block" : "none")
      });
      node.selectAll("text.label.shadow").attr({
        "stroke-width": that.config.labelShadowSize,
        fill: "#000",
        stroke: "#000"
      });
    });
    this.postrender();
  },
  postrender: function() {
    var that = this;
    this.circles.attr({
      transform: function(d,i) { return ["translate(",d.x, d.y, ")"].join(" "); }
    });
  }
}}});
plotdb.chart.add('Treemap',{"key":1006,"name":"Treemap","owner":4,"theme":null,"parent":null,"description":"a two-level treemap. treemap can be used to display hierarchical data with the size of nested rectangles.","basetype":["8"],"visualencoding":["6"],"category":["1","5","6"],"tags":["compare","comparison","hierarchy","budget","spending"],"likes":null,"searchable":true,"dimlen":3,"createdtime":"2016-02-21T06:28:42.000Z","modifiedtime":"2017-01-01T19:23:07.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of block","type":[],"fields":[],"require":false},"value":{"desc":"size of block","type":["Number"],"fields":[],"require":true},"category":{"desc":"color of block","type":[],"fields":[],"require":true}},"config":{"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"1","default":1,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"1","default":1,"category":"Global Settings"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"labelShowValue":{"desc":"Show value labels in chart","name":"Show Value","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label","rebindOnChange":true},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":2,"category":"Label"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(18 + Math.round(Math.random() * 4));
    return {
      value: [{name: "Score", data: list.map(function(d,i) { return Math.round(Math.random() * 90 + 10); })}],
      name: [{name: "Name", data: plotdb.data.sample.name.rands(list.length)}],
      category: [{name: "Dept.", data: plotdb.data.sample.category.rands(list.length)}]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "size of block" },
    category: { type: [], require: true, desc: "color of block" },
    name: { type: [], require: false, desc: "name of block" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {default: 1},
    palette: {},
    boxRoundness: {},
    labelShow: {default: true},
    labelShadowSize: {},
    labelShowValue: {},
    stroke: {default: "#fff"},
    strokeWidth: {default: 1},
    legendLabel: {},
    legendShow: {},
    popupShow: {},
    unit: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name + " (" + d.category + ")");
      popup.select(".value").text(d.value + (that.config.unit ? " " + that.config.unit : ""));
    }).coord(function(d,i) { return [d.x + that.config.margin ,d.y + that.config.margin,d.dx,d.dy]; });
  },
  parse: function() {
    var that = this;
    if(!this.dimension.value.fields.length) this.data.map(function(d,i) { d.value = 1; });
    this.categories = d3.map(this.data, function(it) { return it.category; }).keys();
    this.parsed = {values: d3.nest().key(function(it) { return it.category; }).entries(this.data)};
  },
  bind: function() {
    var that = this, sel;
    sel = this.dataGroup.selectAll("g.data").data(this.nodes);
    sel.exit().attr("class","").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").attr("class", "");
    }).transition("exit").duration(500).attr({
      opacity: 0,
      transform: function(d,i) {
        return [
          "translate(",
          d.x + that.config.margin + d.dx/2,
          d.y + that.config.margin + d.dy/2,
          ") scale(0)"
        ].join(" ");
      }
    }).remove();
    sel = sel.enter().append("g").attr({
      class: "data",
      transform: function(d,i) {
        return [
          "translate(",
          d.x + that.config.margin + d.dx/2,
          d.y + that.config.margin + d.dy/2,
          ") scale(0)"
        ].join(" ");
      },
      opacity: 0,
    });
    this.dataGroup.selectAll("g.data").each(function(d,i) {
      var sel,node = d3.select(this);
      node.selectAll("rect.data").data([d]).enter().append("rect").attr({class: "data"});
      sel = node.selectAll("text.data.label").data((that.config.labelShowValue ? [d,d,d,d] : [d,d]));
      sel.exit().remove();
      sel.enter().append("text").attr({
        class: function(d,i) { return ("data label" + (!(i%2)?" shadow":"")) + (i<2? " name" : " value"); }
      });
    });
    if(this.config.popupShow) this.popup.nodes(sel);
    sel.on("click", function(d,i) {
      that.fire("filter", {type: "value", value: d.name, field: "name"});
    });
  },
  resize: function() {
    var that = this, box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .orient("bottom")
      .tickValues(this.categories)
      .fontSize(this.config.fontSize)
      .size([this.width - 2 * this.config.margin,this.config.fontSize * 3.3]);
    this.legend.label(this.config.legendLabel || this.dimension.category.fieldName || " ");
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    }).on("click", function(d,i) {
      that.fire("filter", {type: "value", value: d, field: "category"});
    });;
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.treemap = d3.layout.treemap()
      .padding(this.config.padding)
      .children(function(it) { return it.values; })
      .size([
        width - this.config.margin * 2,
        height - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0) - this.config.margin * 2
      ]);
    this.nodes = this.treemap.nodes(this.parsed).filter(function(d,i) { return d.depth == 2; });
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.legendGroup.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: ["translate(", (this.width - this.legendSize[0])/2, (this.height - this.legendSize[1]) - this.config.margin, ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.dataGroup.selectAll("g.data").filter(function(d,i) { return !d3.select(this).attr("transform"); }).attr({
      transform: function(d,i) {
        return ["translate(", d.x + that.config.margin, d.y + that.config.margin, ") scale(1)"].join(" "); }
    });
    this.dataGroup.selectAll("g.data").transition("move").duration(500).attr({
      transform: function(d,i) {
        return ["translate(", d.x + that.config.margin, d.y + that.config.margin, ")"].join(" "); }
    });
    this.dataGroup.selectAll("g.data").each(function(d,i) {
      var node = d3.select(this);
      var rect = node.select("rect.data");
      var text = node.selectAll("text.label.data");
      var fillColor = that.cScale(d.category);
      var textColor = (d3.hsl(fillColor).l > 0.65 ? "#000" : "#fff");
      var shadowColor = (textColor == "#000" ? "#fff" : "#000");
      if(!rect.attr("fill")) {
        rect.attr({ fill: fillColor, stroke: that.config.stroke });
      }
      rect.transition("morph").duration(500).attr({
        x: 0, y: 0, width: d.dx, height: d.dy,
        fill: fillColor,
        stroke: that.config.stroke,
        "stroke-width": that.config.strokeWidth,
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness
      });
      text.attr({
        "text-anchor": "middle",
        fill: textColor,
        "font-size": that.config.fontSize
      }).text(function(d,i) {
        return i < 2? d.name : (d.value + (that.config.unit ? " "+that.config.unit : ""));
      }).transition("move").duration(500).attr({
        x: d.dx/2, y: d.dy/2//, dy: that.config.fontSize/2
      });
      node.selectAll("text.shadow").attr({
        stroke: shadowColor,
        "stroke-width":
        that.config.labelShadowSize,
      });
      var bboxes = node.selectAll("text")[0].map(function(d,i) { return d.getBBox(); });
      var mw = bboxes.reduce(function(a,b) { return ( a > b.width ? a : b.width ); }, 0);
      var mh = bboxes.reduce(function(a,b) { return ( a > b.height ? a : b.height ); }, 0);
      node.selectAll("text").style({
        display: (that.config.labelShow ? "block" : "none"),
        opacity: (mw > d.dx * 1.1 || mh > d.dy * 1.1 * (that.config.labelShowValue ? 0.5 : 1.1) ? 0 : 1)
      });
      node.selectAll("text.shadow").style({
        display: that.config.labelShadowSize && that.config.labelShow ? "block" : "none"
      });
      node.selectAll("text").attr({
        dy: function(d,i) {
          if(!that.config.labelShowValue) return "0.38em";
          return (i<2 ? "-0.2em" : "1.0em");
        }
      });
    });
    this.svg.selectAll("g.data").transition("opacity").duration(500).attr({
      opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == d.category ? 1 : 0.1); }
    });
  }
}}});
plotdb.chart.add('Stacked Bar Chart',{"key":1008,"name":"Stacked Bar Chart","owner":4,"theme":null,"parent":null,"description":"a standard stacked bar chart.","basetype":["1"],"visualencoding":["1","3"],"category":["4","5","6"],"tags":["stacked","bar","proportional"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-02-16T06:22:57.000Z","modifiedtime":"2017-01-18T23:43:57.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"x axis index","type":["Order"],"fields":[],"require":true},"value":{"desc":"y axis value","type":["Number"],"fields":[],"require":true,"multiple":true}},"config":{"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["Ascending","Descending","None"],"default":""}],"value":"Ascending","default":"Descending","category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"sortBy":{"name":"Sort By","type":[{"name":"Choice","level":20,"values":["Value","Order"],"default":""}],"value":"Order","default":"Order","category":"Value","rebindOnChange":true},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"3","default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(100%,100%,100%,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":6,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var barCount = 6 + Math.round(Math.random() * 2), stackCount = 4 + Math.round(Math.random() * 1);
    return {
      order: [{name: "Order", data: plotdb.data.sample.category.order(barCount)}],
      value: plotdb.data.sample.fruit.order(stackCount).map(function(d,i) {
        return {
          name: d,
          data: d3.range(barCount).map(function(d,i) {
            var rate = (barCount - Math.abs(d - barCount/2)) / (barCount/2);
            return Math.round(Math.random() * barCount + barCount * rate * rate + 1);
          })
        }
      })
    };
  },
  dimension: {
    value: { type: [plotdb.Number], multiple: true, require: true, desc: "y axis value" },
    order: { type: [plotdb.Order], require: true, desc: "x axis index" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    stroke: {default: "#fff"},
    strokeWidth: {},
    margin: {},
    boxRoundness: {},
    padding: {},
    palette: {},
    legendLabel: {},
    legendShow : {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    gridBackground: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {},
    xAxisStroke: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    popupShow: {},
    sort: {rebindOnChange: true},
    sortBy: {name: "Sort By", type: [plotdb.Choice(["Value", "Order"])], default: "Order", category: "Value", rebindOnChange: true},
    unit: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.grid = plotd3.rwd.grid();
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.popup = plotd3.html.tooltip(this.root).on("mouseover", function(d,i,popup) {
      popup.select(".title").text(
        d.name +
        (that.parsed.order[d.order] ? (" (" + that.parsed.order[d.order].value + ")"): "")
      );
      popup.select(".value").text(d.value + " " + (that.config.unit || ""));
    });
  },
  parse: function() {
    var that = this;
    var sgn = (this.config.sort == "Ascending" ? -1 : 1);
    if(!this.dimension.order.fields.length) this.data.map(function(d,i) { d.order = i; });
    this.categories = this.dimension.value.fieldName;
    this.maxsum = 0;
    var p = this.parsed = { bars: [], order: [], group: [], values: [] };
    var list = null;
    if(this.data.length) {
      if(this.config.sort != "None") {
        if(this.config.sortBy=="Order") {
          plotdb.Order.sort(this.data, "order", (this.config.sort == "Ascending" ? true : false));
        } else {
          this.data.map(function(d,i) {
            d.sum = d.value.reduce(function(a,b) { return a + b; }, 0);
          });
          this.data.sort(function(a,b) { return sgn * (b.sum - a.sum); });
        }
      }
      //plotdb.Order.sort(this.data, "order", true);
      //isOrderDate = (plotdb.Date.test(this.data[0].order));
      p.order = this.data.map(function(it) { return {
        idx: 0,
        value: it.order,
        parsed: it.order//(isOrderDate?new Date(it.order).getTime()/1000:it.order)
      };});
      if(this.config.sortBy == "Order") p.order.sort(function(a,b){
        if(a.parsed > b.parsed) { return -sgn; }
        else if (a.parsed < b.parsed) { return sgn; }
        return 0;
      });
      p.order.forEach(function(d,i) { d.idx = i; });
      for(var j=0;j < this.data[0].value.length; j++) {
        p.group.push({
          name: (this.dimension.value && this.dimension.value.fieldName
                 ?(this.dimension.value.fieldName[j] || j):j),
          idx: j
        });
        p.values = this.data.map(function(it) { return it.value; }).reduce(function(a,b) { return a.concat(b); }, []);
      }
      var maxsum = 0;
      for(var j=0; j < this.data.length; j++) {
        /* order of "order" might be re-arranged so we have to lookup again */        
        var orderIdx = (p.order.filter(function(it) { return it.value == that.data[j].order; })[0] || {idx: -1}).idx;
        p.bars.push(bars = {order: orderIdx, data: []});
        bars.data = this.data[j].value.map(function(d,i) {
          return {
            name: (that.dimension.value && that.dimension.value.fieldName
                   ?(that.dimension.value.fieldName[i] || i):i),
            order: orderIdx,
            value: d,
            group: i
          };
        });
        bars.data.sort(function(a,b) { return b.order - a.order;});
        var sum = 0;
        for(var i=0;i<bars.data.length;i++) {
          bars.data[i].sum = sum;
          sum += bars.data[i].value;
        }
        if(sum > maxsum) maxsum = sum;
      }
      this.maxsum = maxsum;
    }
  },
  bind: function() {
    var that = this, sel;
    sel = this.svg.selectAll("g.data-group").data(this.parsed.bars);
    sel.exit().remove();
    sel = sel.enter().append("g").attr({class: "data-group"});
    this.svg.selectAll("g.data-group").each(function(d,i) {
      var sel,node = d3.select(this);
      sel = node.selectAll("rect.data").data(d.data);
      sel.exit().transition("remove").duration(500).attr({height:0,width:0,opacity:0}).remove();
      sel.enter().append("rect").attr({class: "data"});
      if(that.config.popupShow) that.popup.nodes(sel);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale).orient("bottom").tickValues(this.categories)
      .size([this.width - 2 * this.config.margin, 3 * this.config.fontSize])
      .fontSize(this.config.fontSize);
    this.legend.label(this.config.legendLabel || " ");
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render(); 
    }).on("mouseout", function(d,i) { that.activeGroup = null; that.render(); });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.yScale = d3.scale.linear()
      .domain([0, this.maxsum || 1])
      .range([height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0), this.config.margin]);    
    this.yAxis = plotd3.rwd.axis()
      .orient("left").scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    var step = (width - 2 * this.config.margin - this.yAxisWidth) / this.data.length;
    var rate = that.config.padding / step;
    if(step - that.config.padding < 3) rate = (step - 3)/step;
    this.xScale = d3.scale.ordinal()
      .domain(this.parsed.order.map(function(it) { return it.idx; }))
      .rangeBands(
        [this.config.margin + this.yAxisWidth + 2, width - this.config.margin ],
        rate, rate
      )
    this.barWidth = this.xScale.rangeBand();
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .fontSize(this.config.fontSize)
      .tickFormat(function(it) { return that.parsed.order[it].value; });
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([
      height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0) - this.xAxisHeight - 2,
      this.config.margin
    ]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .background(this.config.gridBackground)
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    var range = this.xScale.range();
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.legendGroup.attr({
      transform: [
        "translate(",
        (this.width - this.legendSize[0])/2,
        (this.height - this.legendSize[1] - this.config.margin),
        ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.xAxisGroup.attr({
      transform: ["translate(0 ",
        (this.height - this.xAxisHeight - this.config.margin - (this.config.legendShow ? this.config.fontSize + this.legendSize[1] : 0)),
        ")"].join(" "),
      display: (this.config.xAxisShow ? "block" : "none")
    });
    this.yAxisGroup.attr({
      transform: "translate(" + (this.yAxisWidth + this.config.margin) + " 0)",
      display: (this.config.yAxisShow ? "block" : "none")
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.svg.selectAll("g.data-group").filter(function() { return !d3.select(this).attr("transform"); }).attr({
      transform: function(d,i) {
        return ["translate(", that.xScale(d.order), 0, ")"].join(" ")
      }
    });
    this.svg.selectAll("g.data-group").transition("move").duration(500).attr({
      transform: function(d,i) {
        return ["translate(", that.xScale(d.order), 0, ")"].join(" ")
      }
    });
    this.svg.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("rect.data").filter(function() { return !d3.select(this).attr("width"); }).attr({
        width: that.barWidth, height: 0, y: function(d,i) { return that.yScale(d.sum); },
      });
      node.selectAll("rect.data").attr({
        "stroke-width": that.config.strokeWidth, stroke: that.config.stroke,
        fill: function(d) { return that.cScale(d.name); },
      }).transition("morph").duration(500).attr({
        x: 0,
        y: function(d,i) { return that.yScale(d.sum + d.value); },
        width: that.barWidth,
        height: function(d,i) { return that.yScale(d.sum) - that.yScale(d.sum + d.value); },
        rx: that.config.boxRoundness, ry: that.config.boxRoundness
      });
    });
    this.svg.selectAll("rect.data").transition().attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.name ? 1 : 0.1);
      }
    });
  }
}}});
plotdb.chart.add('Grid Heatmap',{"key":1009,"name":"Grid Heatmap","owner":4,"theme":null,"parent":null,"description":"heatmap style grid blocks. categorized.","basetype":["11"],"visualencoding":["9"],"category":["4","5"],"tags":["heatmap"],"likes":0,"searchable":true,"dimlen":4,"createdtime":"2016-03-21T07:20:41.000Z","modifiedtime":"2017-01-28T05:37:33.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"attr":{"desc":"attr of item, in X axis","type":[],"fields":[],"require":false,"fieldName":null},"name":{"desc":"name of item, in Y axis","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"value for this attribute of the item","type":["Number"],"fields":[],"require":true,"fieldName":null},"category":{"desc":"category of item","type":[],"fields":[],"require":false,"fieldName":null}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"threshold":{"desc":"data larger than this value will be treated as positive, vice versa.","name":"Threshold","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"50","default":0,"category":"Value"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"1","default":1,"category":"Global Settings"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"colorNeutral":{"desc":"Color for neutral values","name":"Neutral","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#cccccc","category":"Global Settings"},"colorNegative":{"desc":"Color for negative values","name":"Negative","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#d93510","default":"#d93510","category":"Global Settings"},"colorPositive":{"desc":"Color for positive values","name":"Positive","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#3f7ab5","default":"#3f7ab5","category":"Global Settings"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var weekday = plotdb.data.sample.weekday;
    var list = d3.range(50).map(function(d,i) {
      return {
        category: plotdb.data.sample.category.rand(),
        name: plotdb.data.sample.name.rand()
      };
    });
    var ret = {
      category: [{name: "Dept.", data: []}],
      name: [{name: "Name", data: []}],
      attr: [{name: "Weekday", data: []}],
      value: [{name: "Output", data: []}],
    };
    for(var i=0;i<list.length;i++) {
      for(var j=0;j<weekday.length;j++) {
        ret.category[0].data.push(list[i].category);
        ret.name[0].data.push(list[i].name);
        ret.attr[0].data.push(weekday[j]);
        ret.value[0].data.push(Math.round(Math.random() * 90 + 10));
      }
    }
    return ret;
  },
  dimension: {
    category: { type: [], require: false, desc: "category of item"},
    name: { type: [], require: false, desc: "name of item, in Y axis"},
    attr: { type: [], require: false, desc: "attr of item, in X axis"},
    value: { type: [plotdb.Number], require: true, desc: "value for this attribute of the item" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    boxRoundness: {},
    stroke: {default: "#fff"},
    strokeWidth: {default: 1},
    legendLabel: {},
    legendShow: {},
    threshold: {},
    colorPositive: {},
    colorNeutral: {},
    colorNegative: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.allGroup = this.svg.append("g");
    this.xAxisGroup = this.allGroup.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.allGroup.append("g").attr({class: "axis vertical"});
    this.legendGroup = this.allGroup.append("g").attr({class: "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      var v = d.values[0] || {};
      popup.select(".title").text(v.name + " (" + v.category + ")");
      popup.select(".value").text(d.key + ": " + d.sum);
    });
  },
  parse: function() {
    this.categories = d3.map(this.data, function(d) { return d.category; }).keys();
    this.attributes = d3.map(this.data, function(d,i) { return d.attr; }).keys()
    this.parsed = d3.nest()
      .key(function(it) { return it.category; })
      .key(function(it) { return it.name; })
      .key(function(it) { return it.attr; })
      .entries(this.data);
    this.values = this.data.map(function(d,i) { return d.value; });
    this.valueRange = d3.extent(this.values);
    for(var i=0,offset=0,n1;i<this.parsed.length;i++) {
      n1 = this.parsed[i];
      n1.offset = offset;
      offset += n1.values.length;
      for(var j=0,n2;j<n1.values.length;j++) {
        n2 = n1.values[j];
        for(var k=0,sum=0,n3;k<n2.values.length;k++) {
          n3 = n2.values[k], sum = 0;
          for(var l=0;l<n3.values.length;l++) {
            sum += n3.values[l].value;
          }
          n3.sum = sum / (n3.values.length || 1);
        }
      }
    }
  },
  bind: function() {
    var that = this,sel;
    sel = this.allGroup.selectAll("g.category.data-group").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "category data-group"}).each(function(d,i) {
      d3.select(this).append("text").attr({class: "label category"});
    });
    this.allGroup.selectAll("g.category.data-group").each(function(d,i) {
      var sel, node = d3.select(this);
      sel = node.selectAll("g.name.data-group").data(d.values);
      sel.exit().remove();
      sel.enter().append("g").attr({class: "name data-group"}).each(function(d,i) {
        d3.select(this).append("text").attr({class: "label name"});
      });
      node.selectAll("g.name.data-group").each(function(d,i) {
        var sel = node = d3.select(this);
        sel = node.selectAll("rect.data").data(d.values);
        sel.exit().remove();
        sel = sel.enter().append("rect").attr({class: "data"});
        that.popup.nodes(sel);
      });
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    var t = this.config.threshold, v = this.valueRange;
    t = (t > v[1] ? v[1] : (t < v[0] ? v[0] : t));
    this.cScale = d3.scale.linear()
      .domain([this.valueRange[0], t, this.valueRange[1]])
      .range([this.config.colorNegative, this.config.colorNeutral, this.config.colorPositive]);
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .orient("right")
      .fontSize(this.config.fontSize)
      .label(this.config.legendLabel || "");
    this.legendGroup.call(this.legend);
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.xScale = d3.scale.ordinal().domain(this.attributes);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("top")
      .tickSize(0,0)
      .fontSize(this.config.fontSize);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: [
        "translate(", (this.width - this.legendSize[0]) - this.config.margin,
        (this.height - this.legendSize[1])/2, ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.svg.selectAll("text.label.name").text(function(d,i) { return d.key; });
    var nameLabelWidth = d3.max(this.svg.selectAll("text.label.name")[0].map(function(node){
      return node.getBBox().width;
    }));
    this.xScale.rangeBands([
      this.config.margin + nameLabelWidth + this.config.fontSize,
      this.width - this.config.margin - this.legendSize[0] - this.config.fontSize * 2
    ], 0.01, 0);
    var rectWidth = this.xScale.rangeBand();
    this.xAxisGroup.call(this.xAxis).select(".domain").remove();
    this.xAxisHeight = this.xAxis.offset();
    this.xAxisGroup.attr({
      transform: ["translate(0 ", this.xAxisHeight + this.config.margin, ")"].join(" ")
    });
    this.svg.selectAll("g.category.data-group").attr({
      transform: function(d,i) {
        return ["translate(", 0, (
          (d.offset * that.config.fontSize * 1.5) +
          d.offset * that.config.padding * 1 +
          that.config.fontSize * 2 +
          that.config.fontSize * 3 * (i + 1) + 
          that.xAxisHeight
          ), ")"
        ].join(" ");
      }
    }).each(function(dCategory,i) {
      var node = d3.select(this);
      node.select("text.label.category").attr({
        "font-size": that.config.fontSize * 1.2,
        "font-weight": "bold",
        x: that.config.fontSize + that.config.margin + nameLabelWidth,
        dy: "-0.5em"
      }).text(dCategory.key);
      node.selectAll("g.name.data-group").attr({
        transform: function(dName, j) {
          return ["translate(", 0, (
            j * that.config.fontSize * 1.5 + 
            j * that.config.padding * 1
            ), ")"
          ].join(" ");
        }
      }).each(function(dName, j) {
        var node = d3.select(this);
        node.select("text.label.name").attr({
          "text-anchor": "end",
          "font-size": that.config.fontSize,
          x: that.config.margin + nameLabelWidth,
          y: that.config.fontSize * 1.125,
        });
        node.selectAll("rect.data").attr({
          y: 0, height: (that.config.fontSize * 1.5),
          x: function(d, k) {
            return that.xScale(d.key);
            return k * (rectWidth + that.config.padding) + that.config.margin + nameLabelWidth + that.config.fontSize;
          },
          width: rectWidth,
          stroke: that.config.stroke,
          "stroke-width": that.config.strokeWidth,
          rx: that.config.boxRoundness, ry: that.config.boxRoundness
        });
        node.selectAll("rect.data").filter(function() {
          return !d3.select(this).attr("fill");
        }).attr({
          fill: function(d,k) { return that.cScale(d.sum); }          
        });
        node.selectAll("rect.data").transition("gradient").duration(500).attr({
          fill: function(d,k) { return that.cScale(d.sum); }
        });
      });
    });
    this.height = this.allGroup[0][0].getBBox().height + this.config.margin * 2 + this.config.fontSize;
    this.svg.attr({
      width: this.width + "px", height: this.height + "px",
      viewBox: [0,0,this.width,this.height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
  }
}}});
plotdb.chart.add('Candlestick chart',{"key":1014,"name":"Candlestick chart","owner":4,"theme":null,"parent":null,"description":"a standard candle stick chart","basetype":["1"],"visualencoding":["1","3","9"],"category":["5"],"tags":["range","probability","chance","stock","K線"],"likes":1,"searchable":true,"dimlen":5,"createdtime":"2016-02-22T08:23:28.000Z","modifiedtime":"2017-02-02T18:36:59.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"end":{"desc":"start value","type":["Number"],"fields":[],"require":false,"fieldName":null},"max":{"desc":"maximal value","type":["Number"],"fields":[],"require":false,"fieldName":null},"min":{"desc":"minimal value","type":["Number"],"fields":[],"require":false,"fieldName":null},"order":{"desc":"order of value set","type":["Order"],"fields":[],"require":false,"fieldName":null},"start":{"desc":"start value","type":["Number"],"fields":[],"require":false,"fieldName":null}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#101010","default":"#999","category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"4","default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"1","default":0,"category":"Global Settings"},"colorNeutral":{"desc":"Color for neutral values","name":"Neutral","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#cccccc","category":"Global Settings"},"zeroBaseline":{"desc":"y Axis starts with zero","name":"Zero Baseline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":true,"category":"Y Axis","rebindOnChange":true},"colorNegative":{"desc":"Color for negative values","name":"Negative","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#d93510","default":"#d93510","category":"Global Settings"},"colorPositive":{"desc":"Color for positive values","name":"Positive","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#3f7ab5","default":"#3f7ab5","category":"Global Settings"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"6","default":6,"category":"Y Axis"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":3,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"3","default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(18 + Math.round(Math.random() * 8)).map(function(d,i) { 
      var v1 = Math.round((1 + Math.sin(d / 10)) * 50 + 20 * Math.random() + 5);
      var v2 = v1 + Math.round((1 + Math.sin(d/5)) * 10 + 10 * Math.random() + 2);
      var v3 = v2 + Math.round((1 + Math.sin(d/5)) * 10 + 10 * Math.random() + 2);
      var v4 = v3 + Math.round((1 + Math.sin(d/3)) * 10 + 5 * Math.random() + 2);
      var t = v2;
      if(Math.random()>0.5) v2=v3,v3=t; 
      return [v1,v2,v3,v4];
    });
    return {
      min: [{name: "Min", data: list.map(function(d,i) { return d[0]; })}],
      start: [{name: "Start", data: list.map(function(d,i) { return d[1]; })}],
      end: [{name: "End", data: list.map(function(d,i) { return d[2]; })}],
      max: [{name: "Max", data: list.map(function(d,i) { return d[3]; })}],
      order: [{name: "Order", data: list.map(function(d,i) { return i; })}]
    };
  },
  dimension: {
    min: { type: [plotdb.Number], require: false, desc: "minimal value" },
    max: { type: [plotdb.Number], require: false, desc: "maximal value" },
    start: { type: [plotdb.Number], require: false, desc: "start value" },
    end: { type: [plotdb.Number], require: false, desc: "start value" },
    order: { type: [plotdb.Order], require: false, desc: "order of value set"}
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    boxRoundness: {},
    margin: {},
    padding: {},
    colorPositive: {},
    colorNeutral: {},
    colorNegative: {},
    stroke: {},
    strokeWidth: {},
    zeroBaseline: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisLabelPosition: {},
    xAxisTickDirection: {},
    xAxisHandleOverlap: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.orders = [];
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.valueRange = d3.extent(this.data.map(function(it) {
      if(it.start > it.end) {
        it.minInner = it.end;
        it.maxInner = it.start;
      } else {
        it.minInner = it.start;
        it.maxInner = it.end;
      }
      return [it.min, it.max, it.start, it.end].filter(function(it) {
        return typeof(it) != 'undefined' 
      });
    }).reduce(function(a,b) { return a.concat(b); }, []));
  },
  bind: function() {
    var that = this, sel;
    sel = this.svg.selectAll("g.data").data(this.data);
    sel.exit().attr("class","").transition("exit").duration(500).attr({opacity:0}).remove();
    sel.enter().append("g").attr({class: "data",opacity:0});
    this.svg.selectAll("g.data").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("rect.data.outer").data([d]).enter().append("rect").attr({class: "data outer"});
      node.selectAll("rect.data.inner").data([d]).enter().append("rect").attr({class: "data inner"});
      node.selectAll("text.marker").data([d]).enter().append("text").attr({class: "marker"});
    });
  },
  resize: function() {
    var that = this, rate;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.padding = this.config.padding;
    this.yScale = d3.scale.linear()
      .domain([
        (this.config.zeroBaseline ? 0 : this.valueRange[0]),
        this.valueRange[1]
      ])
      .range([this.height - this.config.margin, this.config.margin]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    this.xScale = d3.scale.ordinal()
      .domain(this.orders)
      .rangeBands([this.config.margin + this.yAxisWidth, this.width - this.config.margin]);
    this.barWidth = this.xScale.rangeBand();
    if(this.barWidth - this.padding < 6) {
      this.padding = this.barWidth - 6;
      if(this.padding<0) this.padding = 1;
    }
    rate = this.padding / this.barWidth;
    this.xScale.rangeBands([this.config.margin + this.yAxisWidth, this.width - this.config.margin],rate,rate);
    this.barWidth = this.xScale.rangeBand();
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .fontSize(this.config.fontSize)
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .ticks(this.config.xAxisTickCount);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([this.height - this.config.margin - this.xAxisHeight, this.config.margin]);
    this.yAxisGroup.call(this.yAxis);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.xAxisGroup.attr({
      transform: ["translate(",0,this.height - this.xAxisHeight - this.config.margin ,")"].join(" "),
      display: this.config.xAxisShow ? "block" : "none"
    })
    this.yAxisGroup.attr({
      transform: ["translate(",this.yAxisWidth + this.config.margin, 0,")"].join(" "),
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    var groups = this.svg.selectAll("g.data");
    groups.transition("morph").duration(function() { return d3.select(this).attr("transform") ? 500 : 0; }).attr({
      transform: function(d,i) {
        return ["translate(", that.xScale(d.order), 0, ")"].join(" ")
      }
    });
    groups.transition("enter").duration(500).attr({
      opacity: 1
    });
    this.svg.selectAll("g.data").each(function(d,i) {
      var node = d3.select(this);
      var color = (d.end < d.start
        ? that.config.colorNegative
        : (d.end > d.start ? that.config.colorPositive : that.config.colorNeutral)
      );
      var dark = d3.rgb(color).darker().toString();
      var textColor = d3.hsl(color).l > 0.65 ? "#000" : "#fff";
      node.select("rect.inner").attr({
        fill: color, stroke: dark, "stroke-width": that.config.strokeWidth
      }).transition("morph").duration(500).attr({
        x: 0, y: that.yScale(d.maxInner),
        width: that.barWidth,
        height: that.yScale(d.minInner) - that.yScale(d.maxInner) + 1,
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness
      });
      node.select("rect.outer").attr({
        fill: color, stroke: dark, "stroke-width": that.config.strokeWidth
      }).transition("morph").duration(500).attr({
        x: that.barWidth/2,
        width: 1,
        y: that.yScale(d.max), 
        height: that.yScale(d.min) - that.yScale(d.max),
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness
      });
      node.select("text.marker").attr({
        "font-size": that.config.fontSize,
        "text-anchor": "middle",
        fill: textColor,
      }).text(
        d.end > d.start ? "▲" :
        d.end < d.start ? "▼" : ""
      ).transition("morph").duration(500).attr({
        x: that.barWidth/2,
        y: (that.yScale(d.minInner) + that.yScale(d.maxInner))/2,
        dy: "0.5em",
        opacity: (that.config.fontSize >that.barWidth ? 0 : 0.5)
      });
    });
  }
}}});
plotdb.chart.add('Voronoi Treemap',{"key":1017,"name":"Voronoi Treemap","owner":4,"theme":null,"parent":null,"description":"Specialized treemap in which the area is divided by weighted voronoi diagram.","basetype":["8"],"visualencoding":["6"],"category":["1","4"],"tags":["voronoi","treemap","area"],"likes":null,"searchable":true,"dimlen":4,"createdtime":"2016-02-29T16:47:57.000Z","modifiedtime":"2017-04-05T06:48:29.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of the block","type":[],"fields":[],"require":false,"fieldName":null},"color":{"desc":"color of block. leave empty to color by category","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"size of the block","type":["Number"],"fields":[],"require":true,"fieldName":null},"category":{"desc":"parent of the block","type":[],"fields":[],"require":false,"fieldName":null}},"config":{"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a","idx":0,"keyword":""},{"hex":"#f1c227","idx":1},{"hex":"#008a6d","idx":2},{"hex":"#00acdb","idx":3},{"hex":"#0064a8","idx":4,"keyword":""}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"15","default":14,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"5","default":5,"category":"Global Settings"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":2,"category":"Label"},"labelShowThreshold":{"max":1000,"min":0,"desc":"this config controls the labels to show by their underlying area","name":"Only Show labels over this value","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Label"}},"library":["d3/3.5.12/min","plotd3/0.1.0","voronoijs/0.0.1/min"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(20);
    return {
      value: [{name: "Score", data: list.map(function(d,i) { return Math.round(Math.random() * 90 + 10); })}],
      name: [{name: "Name", data: list.map(function(d,i) { return plotdb.data.sample.name.rand(); })}],
      category: [{name: "Dept", data: list.map(function(d,i) { return plotdb.data.sample.category.rand(); })}]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "size of the block" },
    name: { type: [], require: false, desc: "name of the block" },
    category: { type: [], require: false, desc: "parent of the block"},
    color: { type: [], require: false, desc: "color of block. leave empty to color by category"}
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {default: 14},
    stroke: {default: "#000"},
    strokeWidth: {default: 5},
    margin: {},
    palette: {},
    legendLabel: {},
    legendShow: {},
    labelShow: {},
    labelShowThreshold: {
      name: "Only Show labels over this value",
      desc: "this config controls the labels to show by their underlying area",
      default: 10,
      type: [plotdb.Number],
      min: 0, max: 1000,
      category: "Label"
    },
    labelShadowSize: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg"); 
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.tooltip = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      var data = d3.select(that.sites[0][i]).datum();
      popup.select(".title").text(data.name + " / " + data.category);
      popup.select(".value").text(data.data);
    });
    requestAnimationFrame(function() { that.tickWrap(); });
  },
  tickWrap: function() {
    var that = this;
    this.tick();
    requestAnimationFrame(function() { that.tickWrap(); });
  },
  parse: function() {
    this.data.map(function(it) { 
      it.key = it.name;
      it.data = it.value;
    });
    this.total = this.data.reduce(function(a,b) { return a + b.data; }, 0);
    this.categories = d3.map(this.data, function(d,i) { return d.category; }).keys();
    this.parsed = {children: d3.nest().key(function(it) { return it.category; }).entries(this.data).map(function(it) {
      it.children = it.values;
      return it;
    })};
  },
  bind: function() {
    var that = this, sel;
    var sites = this.treemap.getSites();
    sel = this.svg.selectAll("path.data").data(this.treemap.getPolygons());
    sel.exit().remove();
    sel = sel.enter().append("path").attr({"class": "data", opacity: 1});
    this.svg.selectAll("path.data").attr({
      class: function(d,i) {
        return (sites[i].lv <=0 ? "data group" : "data");
      }
    });
    if(this.config.popupShow) this.tooltip.nodes(sel);
    this.polygons = this.svg.selectAll("path.data");
    sel = this.svg.selectAll("g.label").data(sites);
    sel.exit().remove();
    sel = sel.enter().append("g").attr({"class": "label"}).each(function(it) {
      var node = d3.select(this);
      node.append("text").attr({"class": "name shadow"});
      node.append("text").attr({"class": "value shadow"});
      node.append("text").attr({"class": "name"});
      node.append("text").attr({"class": "value"});
    });
    this.sites = this.svg.selectAll("g.label");
    this.sites.each(function(d,i) {
      d3.select(this).selectAll("text").datum(d);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.tooltip.fontSize(this.config.fontSize);
    this.useColor = !!this.dimension.color.fields.length;
    this.cScale = plotdb.Palette.scale.auto(
      this.config.palette,
      this.useColor ? this.dimension.color.fields : this.dimension.category.fields
    );
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .orient("bottom")
      .tickValues(this.cScale.domain())
      .size([this.width - 2 * this.config.margin, 100])
      .fontSize(this.config.fontSize);
    this.legend.label(this.config.legendLabel || "");
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      var sites = that.treemap.getSites();
      that.activeGroup = d;
      that.polygons.transition().attr({
        opacity: function(d,i) {
          var data = sites[i];
          return (!that.activeGroup || that.activeGroup == data.category ? 1 : 0.1);
        }
      });
    }).on("mouseout", function(d,i) {
      that.activeGroup = null;
      that.polygons.transition().attr({ opacity: 1 });
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.xScale = d3.scale.linear().domain([0,width]).range([
      this.config.margin, 
      width - this.config.margin
    ]);
    this.yScale = d3.scale.linear().domain([0,height]).range([
      this.config.margin, 
      height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0)
    ]);
    this.treemap = new Voronoi.Treemap(this.parsed, Voronoi.Polygon.create(width, height, 60), width, height);
  },
  tick: function() {
    this.treemap.compute();
    this.renderTreemap();
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: ["translate(", (this.width - this.legendSize[0])/2, (this.height - this.legendSize[1] - this.config.margin), ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.sites.attr({
      "font-size": this.config.fontSize,
      "font-weight": "200",
      "text-anchor": "middle",
      dy: "0.38em",
      display: function(d,i) {
        return (that.config.labelShow && (0.001 * that.config.labelShowThreshold < d.data / that.total) ? "block" : "none");
      }
    });
    this.sites.selectAll("text").attr({
      fill: function(it) {
        var hsl = d3.hsl(that.cScale(that.useColor ? it.color : it.category));
        if(hsl.l > 0.65) return "#000";
        return "#fff";
      }
    });
    this.sites.selectAll(".name").attr({
      dy: "-0.5em"
    }).text(function(it) {
      if(it.lv >= 1) return it.name;
      return "";
    });
    this.sites.selectAll(".value").attr({
      dy: "0.5em",
      "font-size": "0.8em"
    }).text(function(it) {
      if(it.lv >= 1) return Math.round(100*it.data)/100;
      return "";
    });
    this.sites.selectAll(".shadow").attr({
      stroke: function(it) {
        var hsl = d3.hsl(that.cScale(that.useColor ? it.color : it.category));
        if(hsl.l > 0.65) return "#fff";
        return "#000";
      },
      "stroke-width": that.config.labelShadowSize
    });
    var sites = this.treemap.getSites();
    this.polygons.attr({
      fill: function(it,i) {
        if(sites[i].lv == 0) return "none";
        return (that.useColor
          ? that.cScale(sites[i].color) 
          : that.cScale(sites[i].category)
        );
      },
      stroke: this.config.stroke,
      "stroke-width": function(it,i) {
        if(sites[i].lv <= 0) return that.config.strokeWidth;
        return that.config.strokeWidth/3;
      }
    });
  },
  renderTreemap: function() {
    var that = this;
    var sites = this.treemap.getSites();
    var polygons = this.treemap.getPolygons();
    this.polygons.data(polygons).attr({
      d: function(it) {
        if(!it || !it.length) return ""
        ret = ["M", that.xScale(it[0].x), that.yScale(it[0].y)];
        for(var idx = 0; idx < it.length; idx++) {
          ret.push("L");
          ret.push(that.xScale(it[idx].x));
          ret.push(that.yScale(it[idx].y));
        }
        ret.push("L");
        ret.push(that.xScale(it[0].x));
        ret.push(that.yScale(it[0].y));
        return ret.join(" ");
      },
    });
    this.sites.attr({
      transform: function(it,i) {
        var x = 0, y = 0;
        var box = that.polygons[0][i].getBoundingClientRect();
        x = box.left + box.width/2;
        y = box.top + box.height/2;
        if(isNaN(x)) x = -10000;
        if(isNaN(y)) y = -10000;
        return ["translate(", x, y, ")"].join(" ");
      },
    });
  }
}}});
plotdb.chart.add('Radar Chart',{"key":1020,"name":"Radar Chart","owner":4,"theme":null,"parent":null,"description":"a standard, multiple radar chart","basetype":["6"],"visualencoding":["2","5"],"category":["1","5"],"tags":["weather","temperature","circular","cycle","period"],"likes":null,"searchable":true,"dimlen":2,"createdtime":"2016-03-20T03:10:08.000Z","modifiedtime":"2017-05-12T01:49:01.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"order of data point","type":["Order"],"fields":[],"fieldName":null},"radius":{"desc":"radius of point on radar line","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"13","default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeFill":{"desc":"fill Dot with this color","name":"Fill Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Dot"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"8","default":8,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"aAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Angular Axis"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"rAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Radial Axis"},"aAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Angular Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"rAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Radial Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 2","default":"2 4","category":"Grid"},"lineSmoothing":{"name":"Line Smoothing","type":[{"name":"Choice","level":20,"values":["linear","step","step-before","step-after","basis","bundle","cardinal","monotone"],"default":""}],"value":"linear","default":"cardinal","category":"Line"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e8e8e8","default":"rgba(255,255,255,0)","category":"Grid"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"rAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"6","default":6,"category":"Radial Axis","rebindOnChange":true},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":2,"category":"Dot"},"aAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Angular Axis"},"rAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Radial Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(9 + Math.round(Math.random() * 3));
    var count = d3.range(Math.round(Math.random() * 2) + 2);
    return {
      order: [{name: "Month", data: list.map(function(d,i) { return plotdb.data.sample.month[i].substring(0,3); })}],
      radius: count.map(function(d,i) {
        return {
          name: "Value " + d,
          data: list.map(function(d,i) { return Math.round(Math.random() * 90 + 10); })
        };
      })
    };
  },
  dimension: {
    radius: { type: [plotdb.Number], require: true, multiple: true, desc: "radius of point on radar line" },
    order: { type: [plotdb.Order], desc: "order of data point" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    strokeWidth: {},
    lineSmoothing: {},
    legendLabel: {},
    legendShow: {},
    legendPosition: {},
    rAxisShow: {},
    rAxisLabel: {},
    rAxisTickPadding: {},
    rAxisTickCount: {rebindOnChange: true},
    aAxisShow: {},
    aAxisLabel: {},
    aAxisTickPadding: {},
    nodeShow: {},
    nodeSize: {default: 8},
    nodeStrokeWidth: {default: 2},
    nodeFill: {default: "#fff"},
    gridShow: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridBackground: {},
    popupShow: {},
    unit: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.allGroup = this.svg.append("g");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.allGroup.append("g").attr({class: "grid-group"});
    this.aAxisGroup = this.allGroup.append("g").attr({class: "axis angle"});
    this.rAxisGroup = this.allGroup.append("g").attr({class: "axis radius"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      var name = that.names[d3.select(this.parentNode).datum().idx];
      var order = that.orders[i];
      popup.select(".title").text(name + " @ " + order);
      popup.select(".value").text(d + " " + (that.config.unit || ""));
    });
    this.line = d3.svg.line().tension(0.5)
      .x(function(d,i) { return that.rScale(d) * Math.sin( that.aScale(that.orders[i]) ); })
      .y(function(d,i) { return that.rScale(d) * -Math.cos( that.aScale(that.orders[i]) ); });
    this.overlap = plotd3.rwd.overlap();
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.orders = d3.map(this.data, function(d,i) { return d.order; }).keys();
    this.parsed = d3.transpose(this.data.map(function(it) { return it.radius; }));
    this.parsed.map(function(d,i) { d.idx = i; });
    this.names = this.dimension.radius.fieldName || ["1","2","3"];
    this.radiusRange = d3.extent(this.parsed
      .map(function(it) { return d3.extent(it); })
      .reduce(function(a,b) { return a.concat(b); }, []));
    if(this.radiusRange[0] == this.radiusRange[1]) this.radiusRange[1]++;
  },
  bind: function() {
    var that = this, sel;
    sel = this.allGroup.selectAll("path.data").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("path").attr({class: "data", opacity: 0});
    sel = this.allGroup.selectAll("g.data-group").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("g").attr({class: "data-group", opacity: 0});
    this.allGroup.selectAll("g.data-group").each(function(d,i) {
      var sel = d3.select(this).selectAll("circle.node").data(d);
      sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
      sel = sel.enter().append("circle").attr({class: "node", opacity: 0});
      if(that.config.popupShow) that.popup.nodes(sel);
    });

    sel = this.gridGroup.selectAll("circle.grid.radius").data(this.rTicks);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("circle").attr({class: "grid radius",opacity: 0, r: 0}).sort(d3.descending);
    this.gridGroup.selectAll("circle.grid.radius").sort(function(a,b) { return b - a;});
    sel = this.gridGroup.selectAll("line.grid.angle").data(this.aTicks);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("line").attr({class: "grid angle",opacity: 0});
    sel = this.aAxisGroup.selectAll("g").data(this.aTicks);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("g").attr({class: "tick"}).each(function(d,i) {
      d3.select(this).append("text").attr("opacity", 0);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.legendVertical = ( this.config.legendPosition == "left" || this.config.legendPosition == "right" ) ? true : false;
    this.line.interpolate(this.config.lineSmoothing);
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .orient(this.config.legendPosition)
      .size(
        (this.legendVertical
        ? [220,this.height - 2 * this.config.margin]
        : [this.width - 2 * this.config.margin, 220]
      ))
      .label(this.config.legendLabel || " ")
      .fontSize(this.config.fontSize);
    this.legend.tickValues(this.names);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = i + 1; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    var mh = height - (this.config.legendShow && !this.legendVertical ? this.legendSize[1] + this.config.fontSize : 0);
    var mw = width - (this.config.legendShow && this.legendVertical ? this.legendSize[0] + this.config.fontSize : 0);
    
    this.size = ((mw>mh?mh:mw) - that.config.margin * 2 - that.config.fontSize * 2)/2;
    if(this.size <= 10) this.size = 10;
    this.rScale = d3.scale.linear()
      .domain([0,this.radiusRange[1]])
      .range([0,this.size]).nice(5);
    this.rTicks = this.rScale.ticks(this.config.rAxisTickCount);
    this.rTicks.sort(function(a,b) { return b - a; });
    this.niceRRange = this.rScale.domain();
    this.rAxis = plotd3.rwd.axis()
      .scale(this.rScale)
      .orient("radius")
      .angle(Math.PI /(this.data.length || 1))
      .showGrid(false)
      .tickValues(this.rTicks)
      .fontSize(this.config.fontSize);
    this.rAxisGroup.call(this.rAxis).select(".domain").remove();
    this.aScale = d3.scale.ordinal()
      .domain(this.orders.concat(""))
      .rangePoints([0, 2 * Math.PI]);
    this.aTicks = d3.range(this.data.length);
  },
  render: function() {
    var that = this,sel;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: 
        ["translate(",
        (this.legendVertical
           ? (this.width/2 + 
              (this.config.legendPosition == "left"
              ? -(this.size + this.config.fontSize + this.legendSize[0])
              :  (this.size + this.config.fontSize)
             ))
           : (this.width - this.legendSize[0])/2
        ),
        (!this.legendVertical 
           ? (this.height/2 + 
             (this.config.legendPosition == "top"
             ? -(this.size + this.config.fontSize + this.legendSize[1])
             :  (this.size + this.config.fontSize)
            ))
           : (this.height - this.legendSize[1])/2
        ),
        ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.allGroup.attr({
      transform: [
        "translate(",
        ((this.width + (this.legendVertical ? (this.config.legendPosition == "left" ? 1 : -1) : 0) * (this.config.legendShow
          ? this.legendSize[0] + this.config.fontSize 
          : 0))/2
        ), (this.height + (!this.legendVertical ? (this.config.legendPosition == "top" ? 1 : -1) : 0) * (this.config.legendShow
          ? this.legendSize[1] + this.config.fontSize : 0))/2,
        //(this.height/2),
        ")"
      ].join(" ")
    });
    this.gridGroup.attr({
      display: (this.config.gridShow ? "block" : "none")
    }).selectAll("circle.grid.radius").attr({
      cx: 0, cy: 0, fill: this.config.gridBackground, stroke: this.config.gridStroke, 
      "stroke-width": this.config.gridStrokeWidth, "stroke-dasharray": this.config.gridDashArray
    }).transition("morph").duration(500).attr({
      r: function(d,i) { return that.rScale(d); },
      opacity: 1
    });

    this.gridGroup.selectAll("line.grid.angle").attr({
      stroke: this.config.gridStroke,
      "stroke-width": this.config.gridStrokeWidth,
      "stroke-dasharray": this.config.gridDashArray
    }).transition("morph").duration(500).attr({
      x1: 0, y1: 0,
      x2: function(d,i) {
        return that.rScale(that.niceRRange[1]) * Math.sin( that.aScale(that.orders[d]) );
      },
      y2: function(d,i) {
        return that.rScale(that.niceRRange[1]) * -Math.cos( that.aScale(that.orders[d]) );
      },
      opacity: 1
    });
    this.aAxisGroup.attr({
      display: (this.config.aAxisShow ? "block" : "none")
    });
    this.rAxisGroup.attr({
      display: (this.config.rAxisShow ? "block" : "none")
    });
    this.aAxisGroup.selectAll(".tick text").attr({
      "font-size": that.config.fontSize,
      "text-anchor": "middle",
      dy: "0.38em",
    }).text(function(d,i) { return that.orders[i] || i; }).transition("morph").duration(function() {
      return d3.select(this).attr("transform") ? 500 : 0;
    }).attr({
      transform: function(d,i) {
        var r = (that.rScale(that.niceRRange[1]) + 1 * that.config.fontSize);
        var x = r * Math.sin( that.aScale(that.orders[d]) );
        var y = r * -Math.cos( that.aScale(that.orders[d]) );
        var a = (360 * i / that.data.length);
        return ["translate(", x, y, ") rotate(", a, ")"].join(" ");
      },
    });
    this.aAxisGroup.selectAll("text").transition("opacity").duration(500).attr({ opacity: 1 });
    this.allGroup.selectAll("path.data").each(function(d,i) {
      var strokeColor = that.cScale(that.names[i]);
      var rgb = d3.rgb(strokeColor);
      var fillColor = ["rgba(",rgb.r,",",rgb.g,",",rgb.b,",",0.2,")"].join("");
      d3.select(this).attr({
        fill: fillColor,
        stroke: strokeColor,
        "stroke-width": that.config.strokeWidth
      }).transition("morph").duration(500).attr({
        d: function(d,i) { return that.line(d,i) +"Z"; },
      });    
    }).transition("opacity").duration(500).attr({
      opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == i+1 ? 1 : 0.1); }
    });
    this.allGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      var strokeColor = that.cScale(that.names[i]);
      var rgb = d3.rgb(strokeColor);
      var fillColor = ["rgba(",rgb.r,",",rgb.g,",",rgb.b,",",0.2,")"].join("");
      node.selectAll("circle.node").attr({
        fill: that.config.nodeFill || "#fff", stroke: strokeColor, "stroke-width": that.config.nodeStrokeWidth,
        display: (that.config.nodeShow ? "block" : "none")
      }).transition("morph").duration(500).attr({
        cx: function(d,i) { return that.rScale(d) * Math.sin( that.aScale(that.orders[i]) ); },
        cy: function(d,i) { return that.rScale(d) * -Math.cos( that.aScale(that.orders[i]) ); },
        r: that.config.nodeSize/2,
        opacity: 1
      });
    });
    this.allGroup.selectAll("g.data-group").transition("opacity").duration(500).attr({
      opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == i+1 ? 1 : 0.1); }
    });
  }
}}});
plotdb.chart.add('100% Stacked Bar Chart',{"key":1022,"name":"100% Stacked Bar Chart","owner":4,"theme":null,"parent":null,"description":"a standard 100% stacked bar chart","basetype":["1"],"visualencoding":["3"],"category":["5"],"tags":["percent","compare"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-03-07T06:41:11.000Z","modifiedtime":"2016-10-24T19:36:41.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"order of each bar stack","type":["Order"],"fields":[],"require":false},"values":{"desc":"values in a bar stack","type":["Number"],"fields":[],"require":true,"multiple":true}},"config":{"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["None","Ascending","Descending"],"default":""}],"value":"None","default":"None","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"X Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"none","default":"none","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10 + Math.round(Math.random() * 4));
    var items = d3.range(3 + Math.round(Math.random() * 2));
    return {
      order: [{name: "Year", data: list.map(function(d,i) { return 1990 + d; })}],
      values: items.map(function(d) { return {name: "Q" + (d+1), data: list.map(function() { 
        return parseInt(Math.random() * 90 + 10);
      })}})
    };
  },
  dimension: {
    values: { type: [plotdb.Number], require: true, multiple: true, desc: "values in a bar stack" },
    order: { type: [plotdb.Order], require: false, desc: "order of each bar stack" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {default: 2},
    palette: {},
    sort: { type: [plotdb.Choice(["None", "Ascending","Descending"])], default: "None" },
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {default: 0},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisHandleOverlap: {default: "none"},
    yAxisTickCount: {default: 0},
    yAxisStroke: {},
    xAxisShowDomain: {default: false},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisTickCount: {},
    xAxisStroke: {},
    xAxisShowDomain: {default: false},
    legendLabel: {},
    legendShow: {},
    popupShow: {},
    boxRoundness: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.popup = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(that.names[d.idx]);
      popup.select(".value div").text(d.order);
      popup.select(".value span").text((Math.round(d.size * 100)) + "%");
    });
    this.popupNode = this.popup.getPopupNode();
    this.popupNode.select(".value").append("div");
    this.popupNode.select(".value").append("span");
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.names = this.dimension.values.fieldName;
    this.orders = this.data.map(function(it) { return it.order; });
    this.parsed = null;
    this.parsed = this.data.map(function(it) {
      var total = it.values.reduce(function(a,b) { return a + b; }, 0);
      var values = [], lastOffset = 0;
      for(var idx = 0; idx < it.values.length; idx ++) {
        values.push({
          order: it.order,
          size: it.values[idx] / total,
          offset: lastOffset,
          idx: idx,
          value: it.values[idx]
        });
        lastOffset += (it.values[idx] / total);
      }
      return {
        order: it.order,
        values: values
      };
    });
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("g.data-group").data(this.parsed);
    sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
    sel.enter().append("g").attr({class: "data-group"});
    this.svg.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      var sel = node.selectAll("rect.data").data(d.values);
      sel.exit().attr("class","").transition("exit").duration(500).attr("opacity",0).remove();
      sel.enter().append("rect").attr({class: "data", opacity: 0});
    });
    if(this.config.popupShow) this.popup.nodes(this.svg.selectAll("rect.data"));
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = d3.select(this.root).select("svg")[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.cScale = d3.scale.ordinal()
      .range(this.config.palette.colors.map(function(it) { return it.hex; }));
    this.legend = plotd3.rwd.legend()
      .orient("bottom")
      .scale(this.cScale)
      .label(this.config.legendLabel || "")
      .tickValues(this.names)
      .fontSize(this.config.fontSize)
      .size([this.width - 2 * this.config.margin, 100]);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = i + 1;
      that.render();
    }).on("mouseout", function() {
      that.activeGroup = 0;
      that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    var orders = this.orders.map(function(d,i) { return d; });
    if(this.config.sort!="None") {
      orders.sort(function(a,b) {
        return ( that.config.sort=="Ascending" ? 1 : -1 ) *
          (a > b ? 1 : (a < b ? -1 : 0));
      });
    }
    this.yScale = d3.scale.ordinal()
      .domain(orders)
      .rangeBands([
        this.config.margin,
        this.height - this.config.margin 
          - (this.config.legendShow ? (this.legendSize[1] + this.config.fontSize) : 0)
      ]);
    this.yAxis = plotd3.rwd.axis()
      .orient("left")
      .scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .handleOverlap(this.config.yAxisHandleOverlap)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    this.xScale = d3.scale.linear().domain([0,1]).range([
      this.yAxisWidth + this.config.fontSize * 0.5 + this.config.margin,
      this.width - this.config.margin
    ]);
    this.xAxis = plotd3.rwd.axis()
      .orient("bottom")
      .scale(this.xScale)
      .fontSize(this.config.fontSize)
      .tickValues(this.xScale.ticks(this.config.xAxisTickCount))
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .tickFormat(function(d,i) { return Math.round(d * 100) + "%" })
      .boundaryTickInside(true);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.rangeBands([
      this.config.margin,
      this.height - this.config.margin - this.xAxisHeight
        - (this.config.legendShow ? (this.legendSize[1] + this.config.fontSize) : 0)
    ]);
    this.yAxisGroup.call(this.yAxis);
    this.barHeight = this.yScale.rangeBand();
    var rate = this.config.padding / this.barHeight;
    if(rate > 0.5) rate = 0.5;
    if(this.barHeight < 8) rate = (this.barHeight - 4) / this.barHeight;
    if(rate < 0) rate = 0;
    this.yScale.rangeBands([
      this.config.margin,
      this.height - this.config.margin - this.xAxisHeight
        - (this.config.legendShow ? (this.legendSize[1] + this.config.fontSize) : 0)
    ], rate,0);
    this.yAxisGroup.call(this.yAxis);
    this.barHeight = this.yScale.rangeBand();
  },
  render: function() {
    var that = this,sel;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.legendGroup.attr({
      transform: ["translate(",
      (this.width - this.legendSize[0])/2,
      this.height - (this.legendSize[1]) - this.config.margin,
      ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      transform: ["translate(",this.yAxisWidth + this.config.margin,0,")"].join(" "),
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      transform: "translate(0 " + (this.height - this.config.margin - this.xAxisHeight - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0)) + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    var dataGroup = this.svg.selectAll("g.data-group");
    dataGroup.transition("morph").duration(function() { return d3.select(this).attr("transform") ? 500 : 0; }).attr({
      transform: function(d,i) { return "translate(0 " + that.yScale(d.order) + ")"; }
    });
    dataGroup.each(function(d,i) {
      var node = d3.select(this), sel;
      sel = node.selectAll("rect.data")
      node.selectAll("rect.data").attr({
        fill: function(d,i) { return that.cScale(that.names[i]); }
      }).transition("morph").duration(500).attr({
        x: function(d) { return that.xScale(d.offset); },
        y: 0,
        width: function(d) { return that.xScale(d.offset + d.size) - that.xScale(d.offset); },
        height: that.barHeight,
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness
      });
      node.selectAll("rect.data").transition("opacity").duration(500).attr({
        opacity: function(d,i) {
          return (!that.activeGroup || that.activeGroup == (i + 1) ? 1 : 0.1);
        }
      });
    });
  }
}}});
plotdb.chart.add('Pie Chart',{"key":1040,"name":"Pie Chart","owner":4,"theme":null,"parent":null,"description":"a standard pie chart, used to make a part-to-whole comparison. best for 2 ~ 7 values and should not be used in cross-chart comparison.","basetype":["3"],"visualencoding":["5"],"category":["1","4","5","6"],"tags":["pie","donut","circular","ratio","percent","part","whole","basic"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-04-22T14:13:13.000Z","modifiedtime":"2017-01-28T05:46:36.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of pie","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"size of pie","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"sort":{"name":"Sort Values","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"key":"cfa","name":"Code for Africa","_type":{"name":"palette","location":"sample"},"colors":[{"hex":"#f4502a","idx":0},{"hex":"#f1c227","idx":1},{"hex":"#008a6d","idx":2},{"hex":"#00acdb","idx":3},{"hex":"#0064a8","idx":4}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"14","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#4c4c4c","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"otherLabel":{"name":"Label for 'other'","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Other","default":"Other","category":"Label"},"otherLimit":{"desc":"Data smaller than this value will be clustered into one set of data","name":"Small Data Threshold","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Value"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"showPercent":{"desc":"Show percentage in data label","name":"Show Percent","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"legendInline":{"desc":"[Experiment feature] Show legend with wedges instead of a standalone legend panel","name":"Show Inline Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Legend Inline"},"labelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","out"],"default":""}],"value":"in","default":"out","category":"Label"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":2,"category":"Label"},"legendInlineColor":{"desc":"Dot / Line Color","name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#2e2e2e","default":"#222","category":"Legend Inline"},"legendInlineStrokeWidth":{"desc":"Dot / line width of inline legend","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":2,"category":"Legend Inline"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(Math.round(Math.random() * 3 + 4));
    var value = [{name: "Amount", data: list.map(function() { return Math.random(); })}];
    var name = [{name: "Fruit", data: list.map(function(it) {
      return plotdb.data.sample.fruit[it % plotdb.data.sample.fruit.length]
    })}];
    return {name: name, value: value};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "size of pie" },
    name: { type: [], require: false, desc: "name of pie" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    palette: {},
    stroke: {default: "#fff"},
    strokeWidth: {},
    boxRoundness: {},
    labelShow: {},
    labelShadowSize: {},
    otherLimit: {},
    otherLabel: {},
    labelPosition: {},
    legendLabel: {},
    legendShow: {},
    legendPosition: {},
    legendInline: {
      name: "Show Inline Legend",
      type: [plotdb.Boolean],
      default: false,
      desc: "[Experiment feature] Show legend with wedges instead of a standalone legend panel",
      category: "Legend Inline"
    },
    legendInlineColor: {
      name: "Color",
      type: [plotdb.Color],
      default: "#222",
      desc: "Dot / Line Color",
      category: "Legend Inline"
    },
    legendInlineStrokeWidth: {
      name: "Stroke Width",
      type: [plotdb.Number],
      default: 2,
      desc: "Dot / line width of inline legend",
      category: "Legend Inline"
    },
    unit: {},
    sort: { name: "Sort Values", type: [plotdb.Boolean], default: true, rebindOnChange: true },
    showPercent: {name: "Show Percent", type: [plotdb.Boolean], default: false },
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.pieGroup = this.svg.append("g").attr("class", "pie-group");
    this.legendGroup = this.svg.append("g").attr({"class": "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.data.name || "-");
      popup.select(".value").html([
        Math.ceil(100 * d.data.value)/100 + (that.config.unit || ""),
        d.data.percent
      ].join("<br>"));
    });
    this.popup.coord(function(d,i) {
      var a = (d.endAngle + d.startAngle)/2;
      var x = Math.sin(a) * that.radius/2;
      var y = -Math.cos(a) * that.radius/2;
      var cx = (that.width - that.legendOffset[0] * (that.config.legendPosition == "right" ? 1 : -1 )) / 2;
      var cy = (that.height - that.legendOffset[1] * (that.config.legendPosition == "bottom" ? 1 : -1 )) / 2;
      return [
        cx + x, cy + y, 1,1
      ];
    });
    this.pielayout = d3.layout.pie().value(function(it) { return it.value; });
  },
  parse: function() {
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = i; });
    if(!this.dimension.value.fields.length) this.data.map(function(d,i) { d.value= 1; });
    this.names = d3.map(this.data, function(d,i) { return d.name || ""; }).keys();
  },
  bind: function() {
    var that = this, sel, sel1, sel2;
    sel = this.pieGroup.selectAll("path.data.pie").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel1 = sel.enter().append("path").attr({class: "data pie", opacity: 0});
    sel = this.pieGroup.selectAll("g.label").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel2 = sel.enter().append("g").attr({class: "label", opacity: 0});
    this.pieGroup.selectAll("g.label").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("text").data([d,d]);
      sel.exit().remove();
      sel.enter().append("text").attr({
        class: function(d,i) { return "data label " + (i ? "value" : "shadow"); },
      });
    });
    sel = this.pieGroup.selectAll("g.marker").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "marker"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("path"); node.append("circle"); node.append("circle"); node.append("text");
    });
    this.pieGroup.selectAll("g.marker").each(function(d,i) {
      var node = d3.select(this);
      node.select("path").datum(d);node.selectAll("circle").data([d,d]);node.select("text").datum(d);
    });
    if(this.config.popupShow) this.popup.nodes(sel1).nodes(sel2);
    [sel1,sel2].map(function(sel) {
      sel.on("click", function(d,i) {
        that.fire("filter", {type: "value", value: d.data.name, field: "name"});
      });
    });
  },
  resize: function() {
    var that = this;
    var other = {
      name: that.config.otherLabel,
      value: this.data.filter(function(d,i) { return d.value < that.config.otherLimit; }).reduce(function(a,b) { return a + b.value; }, 0)
    };
    this.fdata = this.data.filter(function(d,i) { return d.value >= that.config.otherLimit; });
    if(other.value != 0) this.fdata.push(other);
    this.names = this.fdata.map(function(it) { return it.name; });

    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.legendVertical = ["right","left"].indexOf(this.config.legendPosition) >= 0;
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .size(this.legendVertical ? [220, this.height - 2 * this.config.margin] : [this.width - 2 * this.config.margin, 220])
      .orient(this.config.legendPosition).scale(this.cScale)
      .label(this.config.legendLabel || "")
      .tickValues(this.names).fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend);
    this.legendGroup.selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.legendOffset = this.config.legendShow ?
      this.legendVertical ? [this.legendSize[0] + this.config.fontSize,0] : [0, this.legendSize[1] + this.config.fontSize]
    : [0,0];
    var w = this.width - this.legendOffset[0];
    var h = this.height - this.legendOffset[1] - (this.config.legendInline ? 60 : 0);
    this.radius = ( w > h ? h : w )/2 - this.config.margin
      - (!that.config.labelShow || (that.config.labelPosition == 'in') ? 0 : 2 * that.config.fontSize);
    this.pielayout.sort(this.config.sort ? function(a,b) { return b.value - a.value; } : null);
    var parsed = this.pielayout(this.fdata);
    this.parsed = parsed; //if(!this.parsed) this.parsed = parsed;
    var sum = d3.sum(this.fdata, function(d,i) { return d.value; });
    parsed.map(function(d,i) {
      var a = (d.startAngle + d.endAngle ) / 2;
      var r = that.radius;
      if(that.config.labelPosition != 'in') r += that.config.fontSize * 2;
      else if(r < that.config.fontSize * 10) r -= that.config.fontSize * 1.5;
      else r -= that.config.fontSize * 3;
      if(!d.data.parsed) d.data.parsed = d;
      d.data.width = (d.endAngle - d.startAngle) * r;
      d.data.x = Math.sin(a) * r;
      d.data.y = -Math.cos(a) * r;
      d.data.startAngle = d.startAngle;
      d.data.endAngle = d.endAngle;
      d.data.padAngle = d.padAngle;
      d.data.percent = (parseInt(1000 * d.data.value / sum) / 10) + "%";
    });
    if(this.config.sort) {
      this.parsed.sort(function(a,b) { return b.data.value - a.data.value; });
    } else {
      this.parsed.sort(function(a,b) { return parseInt(Math.random() * 2 - 1); });
    }
    this.arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
      .cornerRadius(this.config.boxRoundness);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("g.label text, .legend text, g.marker text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    (this.pieGroup.attr("transform")
      ? this.pieGroup.transition("morph").duration(500)
      : this.pieGroup
    ).attr({
      transform: [
        "translate(",
        (that.width - this.legendOffset[0] * (this.config.legendPosition == "right" ? 1 : -1 )) / 2,
        (that.height - this.legendOffset[1] * (this.config.legendPosition == "bottom" ? 1 : -1 )) / 2,
        ")"
      ].join(" ")
    });
    this.pieGroup.selectAll("path.data.pie").attr({
      fill: function(d,i) {
        return that.cScale(d.data.name);
      },
      stroke: this.config.stroke,
      "stroke-width": this.config.strokeWidth
    }).transition("opacity").duration(500).attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.data.name ? 1 : 0.1);
      }
    });
    this.pieGroup.selectAll("path.data.pie").transition("morph").duration(500).tween("morph", function(d,i) {
      var oldAngles = this.lastAngles || [d.startAngle,d.startAngle,0];
      var curAngles = [d.startAngle, d.endAngle, that.radius];
      var node = d3.select(this);
      this.lastAngles = curAngles;
      return function(t) {
        node.attr({
          d: that.arc
            .startAngle((curAngles[0] - oldAngles[0]) * t + oldAngles[0])
            .endAngle((curAngles[1] - oldAngles[1]) * t + oldAngles[1])
            .outerRadius((curAngles[2] - oldAngles[2]) * t + oldAngles[2])
        });
      };
    });
    var labels = this.pieGroup.selectAll("g.label");
    labels.filter(function(d,i) { return !d3.select(this).attr("transform"); }).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").attr({
        fill: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || (that.config.labelPosition != 'in') ? "#000":"#fff");
        },
        "font-size": that.config.fontSize,
        "text-anchor": "middle",
        dy: "0.38em"
      }).style({
        display: (that.config.labelShow?"block":"none")
      }).text(function(d,i) {
        return (that.config.showPercent ? d.data.percent : parseInt(100*d.data.value)/100);
      });
      node.select("text.label.shadow").attr({
        stroke: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || that.config.labelPosition != 'in' ? "#fff":"#000");
        },
        "stroke-width": that.config.labelShadowSize,
      }).style({
        display: (that.config.labelShadowSize && that.config.labelShow ? "block" : "none")
      });
      if(that.config.fontSize * 2 > d.data.width * 1.5) {
        node.selectAll("text").style({display: "none"});
      }
    })
    labels.transition("move").duration(500).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.transition("opacity").duration(500).attr({opacity: 1});
    this.pieGroup.selectAll("g.marker").attr({
      display: (this.config.legendInline ? "block" : "none")
    }).each(function(d,i) {
      var node = d3.select(this);
      var x1, y1, x2, y2, xm, ym;
      var a = (d.startAngle + d.endAngle)/2;
      x1 = Math.sin(a) * that.radius;
      y1 = -Math.cos(a) * that.radius;
      x2 = x1 + (x1 < 0 ? -100 : 100);
      y2 = y1 + (y1 < 0 ? -20 : 20);
      if(Math.abs(x1) < Math.abs(y1)) {
        xm = x1 + (x1 < 0 ? -20 : 20);
        ym = y2;      
      } else {
        xm = x2 + (x1 < 0 ? 20 : -20);
        ym = y1;
      }
      node.select("circle").attr({
        cx: x1, cy: y1, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("circle:last-of-type").attr({
        cx: x2, cy: y2, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("path").attr({
        d: function() {
          return [
            "M", x1, y1, 
            "L", xm, ym,
            "L", x2, y2
          ].join(" ");
        },
        fill: "none",
        stroke: that.config.legendInlineColor,
        "stroke-width": that.config.legendInlineStrokeWidth
      });
      node.select("text").attr({
        x: x2, y: y2, 
        dy: "0.38em",
        dx: (x1<0?-0.5:0.5) + "em",
        "text-anchor": (x1<0?"end": "start")
      }).text(d.data.name);
    });
    var minus = ["left","top"].indexOf(this.config.legendPosition) >= 0;
    var offset = (this.legendVertical
      ? [this.width/2 + (this.radius + this.config.fontSize/2 - (minus?-1:1)*this.legendSize[0]/2) * (minus ? -1 : 1),(this.height - this.legendSize[1])/2]
      : [(this.width - this.legendSize[0])/2,this.height/2 + (this.radius + this.config.fontSize + (!minus?-this.legendSize[1]:0)) * (minus?-1:1)]
    );
    this.legendGroup.attr({
      transform: ["translate(",offset[0], offset[1], ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
  }
}}});
plotdb.chart.add('Pie Chart',{"key":1040,"name":"Pie Chart","owner":4,"theme":null,"parent":null,"description":"a standard pie chart, used to make a part-to-whole comparison. best for 2 ~ 7 values and should not be used in cross-chart comparison.","basetype":["3"],"visualencoding":["5"],"category":["1","4","5","6"],"tags":["pie","donut","circular","ratio","percent","part","whole","basic"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-04-22T14:13:13.000Z","modifiedtime":"2017-01-28T05:46:36.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of pie","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"size of pie","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"sort":{"name":"Sort Values","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"key":"cfa","name":"Code for Africa","_type":{"name":"palette","location":"sample"},"colors":[{"hex":"#f4502a","idx":0},{"hex":"#f1c227","idx":1},{"hex":"#008a6d","idx":2},{"hex":"#00acdb","idx":3},{"hex":"#0064a8","idx":4}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"14","default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#4c4c4c","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"otherLabel":{"name":"Label for 'other'","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Other","default":"Other","category":"Label"},"otherLimit":{"desc":"Data smaller than this value will be clustered into one set of data","name":"Small Data Threshold","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Value"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"showPercent":{"desc":"Show percentage in data label","name":"Show Percent","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"legendInline":{"desc":"[Experiment feature] Show legend with wedges instead of a standalone legend panel","name":"Show Inline Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Legend Inline"},"labelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","out"],"default":""}],"value":"in","default":"out","category":"Label"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":2,"category":"Label"},"legendInlineColor":{"desc":"Dot / Line Color","name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#2e2e2e","default":"#222","category":"Legend Inline"},"legendInlineStrokeWidth":{"desc":"Dot / line width of inline legend","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":2,"category":"Legend Inline"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(Math.round(Math.random() * 3 + 4));
    var value = [{name: "Amount", data: list.map(function() { return Math.random(); })}];
    var name = [{name: "Fruit", data: list.map(function(it) {
      return plotdb.data.sample.fruit[it % plotdb.data.sample.fruit.length]
    })}];
    return {name: name, value: value};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "size of pie" },
    name: { type: [], require: false, desc: "name of pie" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    palette: {},
    stroke: {default: "#fff"},
    strokeWidth: {},
    boxRoundness: {},
    labelShow: {},
    labelShadowSize: {},
    otherLimit: {},
    otherLabel: {},
    labelPosition: {},
    legendLabel: {},
    legendShow: {},
    legendPosition: {},
    legendInline: {
      name: "Show Inline Legend",
      type: [plotdb.Boolean],
      default: false,
      desc: "[Experiment feature] Show legend with wedges instead of a standalone legend panel",
      category: "Legend Inline"
    },
    legendInlineColor: {
      name: "Color",
      type: [plotdb.Color],
      default: "#222",
      desc: "Dot / Line Color",
      category: "Legend Inline"
    },
    legendInlineStrokeWidth: {
      name: "Stroke Width",
      type: [plotdb.Number],
      default: 2,
      desc: "Dot / line width of inline legend",
      category: "Legend Inline"
    },
    unit: {},
    sort: { name: "Sort Values", type: [plotdb.Boolean], default: true, rebindOnChange: true },
    showPercent: {name: "Show Percent", type: [plotdb.Boolean], default: false },
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.pieGroup = this.svg.append("g").attr("class", "pie-group");
    this.legendGroup = this.svg.append("g").attr({"class": "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.data.name || "-");
      popup.select(".value").html([
        Math.ceil(100 * d.data.value)/100 + (that.config.unit || ""),
        d.data.percent
      ].join("<br>"));
    });
    this.popup.coord(function(d,i) {
      var a = (d.endAngle + d.startAngle)/2;
      var x = Math.sin(a) * that.radius/2;
      var y = -Math.cos(a) * that.radius/2;
      var cx = (that.width - that.legendOffset[0] * (that.config.legendPosition == "right" ? 1 : -1 )) / 2;
      var cy = (that.height - that.legendOffset[1] * (that.config.legendPosition == "bottom" ? 1 : -1 )) / 2;
      return [
        cx + x, cy + y, 1,1
      ];
    });
    this.pielayout = d3.layout.pie().value(function(it) { return it.value; });
  },
  parse: function() {
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = i; });
    if(!this.dimension.value.fields.length) this.data.map(function(d,i) { d.value= 1; });
    this.names = d3.map(this.data, function(d,i) { return d.name || ""; }).keys();
  },
  bind: function() {
    var that = this, sel, sel1, sel2;
    sel = this.pieGroup.selectAll("path.data.pie").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel1 = sel.enter().append("path").attr({class: "data pie", opacity: 0});
    sel = this.pieGroup.selectAll("g.label").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel2 = sel.enter().append("g").attr({class: "label", opacity: 0});
    this.pieGroup.selectAll("g.label").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("text").data([d,d]);
      sel.exit().remove();
      sel.enter().append("text").attr({
        class: function(d,i) { return "data label " + (i ? "value" : "shadow"); },
      });
    });
    sel = this.pieGroup.selectAll("g.marker").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "marker"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("path"); node.append("circle"); node.append("circle"); node.append("text");
    });
    this.pieGroup.selectAll("g.marker").each(function(d,i) {
      var node = d3.select(this);
      node.select("path").datum(d);node.selectAll("circle").data([d,d]);node.select("text").datum(d);
    });
    if(this.config.popupShow) this.popup.nodes(sel1).nodes(sel2);
    [sel1,sel2].map(function(sel) {
      sel.on("click", function(d,i) {
        that.fire("filter", {type: "value", value: d.data.name, field: "name"});
      });
    });
  },
  resize: function() {
    var that = this;
    var other = {
      name: that.config.otherLabel,
      value: this.data.filter(function(d,i) { return d.value < that.config.otherLimit; }).reduce(function(a,b) { return a + b.value; }, 0)
    };
    this.fdata = this.data.filter(function(d,i) { return d.value >= that.config.otherLimit; });
    if(other.value != 0) this.fdata.push(other);
    this.names = this.fdata.map(function(it) { return it.name; });

    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.legendVertical = ["right","left"].indexOf(this.config.legendPosition) >= 0;
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .size(this.legendVertical ? [220, this.height - 2 * this.config.margin] : [this.width - 2 * this.config.margin, 220])
      .orient(this.config.legendPosition).scale(this.cScale)
      .label(this.config.legendLabel || "")
      .tickValues(this.names).fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend);
    this.legendGroup.selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.legendOffset = this.config.legendShow ?
      this.legendVertical ? [this.legendSize[0] + this.config.fontSize,0] : [0, this.legendSize[1] + this.config.fontSize]
    : [0,0];
    var w = this.width - this.legendOffset[0];
    var h = this.height - this.legendOffset[1] - (this.config.legendInline ? 60 : 0);
    this.radius = ( w > h ? h : w )/2 - this.config.margin
      - (!that.config.labelShow || (that.config.labelPosition == 'in') ? 0 : 2 * that.config.fontSize);
    this.pielayout.sort(this.config.sort ? function(a,b) { return b.value - a.value; } : null);
    var parsed = this.pielayout(this.fdata);
    this.parsed = parsed; //if(!this.parsed) this.parsed = parsed;
    var sum = d3.sum(this.fdata, function(d,i) { return d.value; });
    parsed.map(function(d,i) {
      var a = (d.startAngle + d.endAngle ) / 2;
      var r = that.radius;
      if(that.config.labelPosition != 'in') r += that.config.fontSize * 2;
      else if(r < that.config.fontSize * 10) r -= that.config.fontSize * 1.5;
      else r -= that.config.fontSize * 3;
      if(!d.data.parsed) d.data.parsed = d;
      d.data.width = (d.endAngle - d.startAngle) * r;
      d.data.x = Math.sin(a) * r;
      d.data.y = -Math.cos(a) * r;
      d.data.startAngle = d.startAngle;
      d.data.endAngle = d.endAngle;
      d.data.padAngle = d.padAngle;
      d.data.percent = (parseInt(1000 * d.data.value / sum) / 10) + "%";
    });
    if(this.config.sort) {
      this.parsed.sort(function(a,b) { return b.data.value - a.data.value; });
    } else {
      this.parsed.sort(function(a,b) { return parseInt(Math.random() * 2 - 1); });
    }
    this.arc = d3.svg.arc()
      .innerRadius(0)
      .outerRadius(this.radius)
      .cornerRadius(this.config.boxRoundness);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("g.label text, .legend text, g.marker text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    (this.pieGroup.attr("transform")
      ? this.pieGroup.transition("morph").duration(500)
      : this.pieGroup
    ).attr({
      transform: [
        "translate(",
        (that.width - this.legendOffset[0] * (this.config.legendPosition == "right" ? 1 : -1 )) / 2,
        (that.height - this.legendOffset[1] * (this.config.legendPosition == "bottom" ? 1 : -1 )) / 2,
        ")"
      ].join(" ")
    });
    this.pieGroup.selectAll("path.data.pie").attr({
      fill: function(d,i) {
        return that.cScale(d.data.name);
      },
      stroke: this.config.stroke,
      "stroke-width": this.config.strokeWidth
    }).transition("opacity").duration(500).attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.data.name ? 1 : 0.1);
      }
    });
    this.pieGroup.selectAll("path.data.pie").transition("morph").duration(500).tween("morph", function(d,i) {
      var oldAngles = this.lastAngles || [d.startAngle,d.startAngle,0];
      var curAngles = [d.startAngle, d.endAngle, that.radius];
      var node = d3.select(this);
      this.lastAngles = curAngles;
      return function(t) {
        node.attr({
          d: that.arc
            .startAngle((curAngles[0] - oldAngles[0]) * t + oldAngles[0])
            .endAngle((curAngles[1] - oldAngles[1]) * t + oldAngles[1])
            .outerRadius((curAngles[2] - oldAngles[2]) * t + oldAngles[2])
        });
      };
    });
    var labels = this.pieGroup.selectAll("g.label");
    labels.filter(function(d,i) { return !d3.select(this).attr("transform"); }).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").attr({
        fill: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || (that.config.labelPosition != 'in') ? "#000":"#fff");
        },
        "font-size": that.config.fontSize,
        "text-anchor": "middle",
        dy: "0.38em"
      }).style({
        display: (that.config.labelShow?"block":"none")
      }).text(function(d,i) {
        return (that.config.showPercent ? d.data.percent : parseInt(100*d.data.value)/100);
      });
      node.select("text.label.shadow").attr({
        stroke: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || that.config.labelPosition != 'in' ? "#fff":"#000");
        },
        "stroke-width": that.config.labelShadowSize,
      }).style({
        display: (that.config.labelShadowSize && that.config.labelShow ? "block" : "none")
      });
      if(that.config.fontSize * 2 > d.data.width * 1.5) {
        node.selectAll("text").style({display: "none"});
      }
    })
    labels.transition("move").duration(500).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.transition("opacity").duration(500).attr({opacity: 1});
    this.pieGroup.selectAll("g.marker").attr({
      display: (this.config.legendInline ? "block" : "none")
    }).each(function(d,i) {
      var node = d3.select(this);
      var x1, y1, x2, y2, xm, ym;
      var a = (d.startAngle + d.endAngle)/2;
      x1 = Math.sin(a) * that.radius;
      y1 = -Math.cos(a) * that.radius;
      x2 = x1 + (x1 < 0 ? -100 : 100);
      y2 = y1 + (y1 < 0 ? -20 : 20);
      if(Math.abs(x1) < Math.abs(y1)) {
        xm = x1 + (x1 < 0 ? -20 : 20);
        ym = y2;      
      } else {
        xm = x2 + (x1 < 0 ? 20 : -20);
        ym = y1;
      }
      node.select("circle").attr({
        cx: x1, cy: y1, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("circle:last-of-type").attr({
        cx: x2, cy: y2, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("path").attr({
        d: function() {
          return [
            "M", x1, y1, 
            "L", xm, ym,
            "L", x2, y2
          ].join(" ");
        },
        fill: "none",
        stroke: that.config.legendInlineColor,
        "stroke-width": that.config.legendInlineStrokeWidth
      });
      node.select("text").attr({
        x: x2, y: y2, 
        dy: "0.38em",
        dx: (x1<0?-0.5:0.5) + "em",
        "text-anchor": (x1<0?"end": "start")
      }).text(d.data.name);
    });
    var minus = ["left","top"].indexOf(this.config.legendPosition) >= 0;
    var offset = (this.legendVertical
      ? [this.width/2 + (this.radius + this.config.fontSize/2 - (minus?-1:1)*this.legendSize[0]/2) * (minus ? -1 : 1),(this.height - this.legendSize[1])/2]
      : [(this.width - this.legendSize[0])/2,this.height/2 + (this.radius + this.config.fontSize + (!minus?-this.legendSize[1]:0)) * (minus?-1:1)]
    );
    this.legendGroup.attr({
      transform: ["translate(",offset[0], offset[1], ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
  }
}}});
plotdb.chart.add('Donut Chart',{"key":1042,"name":"Donut Chart","owner":4,"theme":null,"parent":1040,"description":"a standard donut chart. used to make a part-to-whole comparison.","basetype":["3"],"visualencoding":["5"],"category":["1","4","5","6"],"tags":["pie","donut","circular","part","whole","compare","ratio","percent"],"likes":null,"searchable":true,"dimlen":2,"createdtime":"2016-04-22T16:32:50.000Z","modifiedtime":"2017-01-28T05:47:04.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of pie","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"size of pie","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"sort":{"name":"Sort Values","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"thick":{"name":"thick (0~1)","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0.5","default":1},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"key":"cfa","name":"Code for Africa","_type":{"name":"palette","location":"sample"},"colors":[{"hex":"#f4502a","idx":0},{"hex":"#f1c227","idx":1},{"hex":"#008a6d","idx":2},{"hex":"#00acdb","idx":3},{"hex":"#0064a8","idx":4}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"otherLabel":{"name":"Label for 'other'","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Other","default":"Other","category":"Label"},"otherLimit":{"desc":"Data smaller than this value will be clustered into one set of data","name":"Small Data Threshold","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Value"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"showPercent":{"desc":"Show percentage in data label","name":"Show Percent","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Global Settings"},"legendInline":{"desc":"[Experiment feature] Show legend with wedges instead of a standalone legend panel","name":"Show Inline Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Legend Inline"},"labelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","out"],"default":""}],"value":"in","default":"out","category":"Label"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":2,"category":"Label"},"legendInlineColor":{"desc":"Dot / Line Color","name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#222222","default":"#222","category":"Legend Inline"},"legendInlineStrokeWidth":{"desc":"Dot / line width of inline legend","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Legend Inline"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(Math.round(Math.random() * 3 + 4));
    var value = [{name: "Amount", data: list.map(function() { return Math.random(); })}];
    var name = [{name: "Fruit", data: list.map(function(it) {
      return plotdb.data.sample.fruit[it % plotdb.data.sample.fruit.length]
    })}];
    return {name: name, value: value};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "size of pie" },
    name: { type: [], require: false, desc: "name of pie" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    palette: {},
    stroke: {default: "#fff"},
    strokeWidth: {},
    thick: { name: "thick (0~1)", type: [plotdb.Number], default: 1 },
    boxRoundness: {},
    labelShow: {},
    labelShadowSize: {},
    otherLimit: {},
    otherLabel: {},
    labelPosition: {},
    legendLabel: {},
    legendShow: {},
    legendPosition: {},
    legendInline: {
      name: "Show Inline Legend",
      type: [plotdb.Boolean],
      default: false,
      desc: "[Experiment feature] Show legend with wedges instead of a standalone legend panel",
      category: "Legend Inline"
    },
    legendInlineColor: {
      name: "Color",
      type: [plotdb.Color],
      default: "#222",
      desc: "Dot / Line Color",
      category: "Legend Inline"
    },
    legendInlineStrokeWidth: {
      name: "Stroke Width",
      type: [plotdb.Number],
      default: 2,
      desc: "Dot / line width of inline legend",
      category: "Legend Inline"
    },
    unit: {},
    sort: { name: "Sort Values", type: [plotdb.Boolean], default: true, rebindOnChange: true },
    showPercent: {name: "Show Percent", type: [plotdb.Boolean], default: false},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.pieGroup = this.svg.append("g").attr("class", "pie-group");
    this.legendGroup = this.svg.append("g").attr({"class": "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.data.name || "-");
      popup.select(".value").html([
        Math.ceil(100 * d.data.value)/100 + (that.config.unit || ""),
        d.data.percent
      ].join("<br>"));
    });
    this.popup.coord(function(d,i) {
      var r = d.data.centralRadius;
      var a = (d.endAngle + d.startAngle)/2;
      var x = Math.sin(a) * r;
      var y = -Math.cos(a) * r;
      var cx = (that.width - that.legendOffset[0] * (that.config.legendPosition == "right" ? 1 : -1 )) / 2;
      var cy = (that.height - that.legendOffset[1] * (that.config.legendPosition == "bottom" ? 1 : -1 )) / 2;
      return [
        cx + x, cy + y, 1,1
      ];
    });
    this.pielayout = d3.layout.pie().value(function(it) { return it.value; });
  },
  parse: function() {
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = i; });
    if(!this.dimension.value.fields.length) this.data.map(function(d,i) { d.value= 1; });
    this.names = d3.map(this.data, function(d,i) { return d.name || ""; }).keys();
  },
  bind: function() {
    var that = this, sel, sel1, sel2;
    sel = this.pieGroup.selectAll("path.data.pie").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel1 = sel.enter().append("path").attr({class: "data pie", opacity: 0});
    sel = this.pieGroup.selectAll("g.label").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel2 = sel.enter().append("g").attr({class: "label", opacity: 0});
    this.pieGroup.selectAll("g.label").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("text").data([d,d]);
      sel.exit().remove();
      sel.enter().append("text").attr({
        class: function(d,i) { return "data label " + (i ? "value" : "shadow"); },
      });
    });
    sel = this.pieGroup.selectAll("g.marker").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "marker"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("path"); node.append("circle"); node.append("circle"); node.append("text");
    });
    this.pieGroup.selectAll("g.marker").each(function(d,i) {
      var node = d3.select(this);
      node.select("path").datum(d);node.selectAll("circle").data([d,d]);node.select("text").datum(d);
    });
    if(this.config.popupShow) this.popup.nodes(sel1).nodes(sel2);
    [sel1,sel2].map(function(sel) {
      sel.on("click", function(d,i) {
        that.fire("filter", {type: "value", value: d.data.name, field: "name"});
      });
    });
  },
  resize: function() {
    var that = this;
    var other = {
      name: that.config.otherLabel,
      value: this.data.filter(function(d,i) { return d.value < that.config.otherLimit; }).reduce(function(a,b) { return a + b.value; }, 0)
    };
    this.fdata = this.data.filter(function(d,i) { return d.value >= that.config.otherLimit; });
    if(other.value != 0) this.fdata.push(other);
    this.names = this.fdata.map(function(it) { return it.name; });

    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.legendVertical = ["right","left"].indexOf(this.config.legendPosition) >= 0;
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .size(this.legendVertical ? [220, this.height - 2 * this.config.margin] : [this.width - 2 * this.config.margin, 220])
      .orient(this.config.legendPosition).scale(this.cScale)
      .label(this.config.legendLabel || "")
      .tickValues(this.names).fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend);
    this.legendGroup.selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.legendOffset = this.config.legendShow ?
      this.legendVertical ? [this.legendSize[0] + this.config.fontSize,0] : [0, this.legendSize[1] + this.config.fontSize]
    : [0,0];
    var w = this.width - this.legendOffset[0];
    var h = this.height - this.legendOffset[1] - (this.config.legendInline ? 60 : 0);
    this.radius = ( w > h ? h : w )/2 - this.config.margin
      - (!that.config.labelShow || (that.config.labelPosition == 'in') ? 0 : 2 * that.config.fontSize);
    this.pielayout.sort(this.config.sort ? function(a,b) { return b.value - a.value; } : null);
    var parsed = this.pielayout(this.fdata);
    this.parsed = parsed;
    var sum = d3.sum(this.fdata, function(d,i) { return d.value; });
    parsed.map(function(d,i) {
      var a = (d.startAngle + d.endAngle ) / 2;
      var r = that.radius;
      if(that.config.labelPosition != 'in') r += that.config.fontSize * 2;
      else r = (that.radius + that.radius * 0.9 * (1 - that.config.thick/2))/2;
      if(!d.data.parsed) d.data.parsed = d;
      d.data.width = (d.endAngle - d.startAngle) * r;
      d.data.centralRadius = r;
      d.data.innerRadius = that.radius * 0.9 * (1 - that.config.thick/2);
      d.data.x = Math.sin(a) * r;
      d.data.y = -Math.cos(a) * r;
      d.data.startAngle = d.startAngle;
      d.data.endAngle = d.endAngle;
      d.data.padAngle = d.padAngle;
      d.data.percent = (parseInt(1000 * d.data.value / sum) / 10) + "%";
    });
    if(this.config.sort) {
      this.parsed.sort(function(a,b) { return b.data.value - a.data.value; });
    } else {
      this.parsed.sort(function(a,b) { return parseInt(Math.random() * 2 - 1); });
    }
    if(this.config.thick>1) this.config.thick = 1;
    if(this.config.thick<0) this.config.thick = 0;
    this.arc = d3.svg.arc()
      .innerRadius(function(d,i) { return d.data.innerRadius; })
      .outerRadius(this.radius)
      .cornerRadius(this.config.boxRoundness);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("g.label text, .legend text, g.marker text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    (this.pieGroup.attr("transform")
      ? this.pieGroup.transition("morph").duration(500)
      : this.pieGroup
    ).attr({
      transform: [
        "translate(",
        (that.width - this.legendOffset[0] * (this.config.legendPosition == "right" ? 1 : -1 )) / 2,
        (that.height - this.legendOffset[1] * (this.config.legendPosition == "bottom" ? 1 : -1 )) / 2,
        ")"
      ].join(" ")
    });
    this.pieGroup.selectAll("path.data.pie").attr({
      fill: function(d,i) {
        return that.cScale(d.data.name);
      },
      stroke: this.config.stroke,
      "stroke-width": this.config.strokeWidth
    }).transition("opacity").duration(500).attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.data.name ? 1 : 0.1);
      }
    });
    this.pieGroup.selectAll("path.data.pie").transition("morph").duration(500).tween("morph", function(d,i) {
      var oldAngles = (
        this.lastAngles || [d.startAngle,d.startAngle,d.data.innerRadius, d.data.innerRadius]
      );
      var curAngles = [d.startAngle, d.endAngle, that.radius, d.data.innerRadius];
      var node = d3.select(this);
      this.lastAngles = curAngles;
      return function(t) {
        node.attr({
          d: that.arc
            .startAngle((curAngles[0] - oldAngles[0]) * t + oldAngles[0])
            .endAngle((curAngles[1] - oldAngles[1]) * t + oldAngles[1])
            .outerRadius((curAngles[2] - oldAngles[2]) * t + oldAngles[2])
            .innerRadius((curAngles[3] - oldAngles[3]) * t + oldAngles[3])
        });
      };
    });
    var labels = this.pieGroup.selectAll("g.label");
    labels.filter(function(d,i) { return !d3.select(this).attr("transform"); }).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").attr({
        fill: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || (that.config.labelPosition != 'in') ? "#000":"#fff");
        },
        "font-size": that.config.fontSize,
        "text-anchor": "middle",
        dy: "0.38em"
      }).style({
        display: (that.config.labelShow?"block":"none")
      }).text(function(d,i) {
        return (that.config.showPercent ? d.data.percent : parseInt(100*d.data.value)/100);
      });
      node.select("text.label.shadow").attr({
        stroke: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || that.config.labelPosition != 'in' ? "#fff":"#000");
        },
        "stroke-width": that.config.labelShadowSize,
      }).style({
        display: (that.config.labelShadowSize && that.config.labelShow ? "block" : "none")
      });
      if(that.config.fontSize * 2 > d.data.width * 1.5) {
        node.selectAll("text").style({display: "none"});
      }
    })
    labels.transition("move").duration(500).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.transition("opacity").duration(500).attr({opacity: 1});
    this.pieGroup.selectAll("g.marker").attr({
      display: (this.config.legendInline ? "block" : "none")
    }).each(function(d,i) {
      var node = d3.select(this);
      var x1, y1, x2, y2, xm, ym;
      var a = (d.startAngle + d.endAngle)/2;
      x1 = Math.sin(a) * that.radius;
      y1 = -Math.cos(a) * that.radius;
      x2 = x1 + (x1 < 0 ? -100 : 100);
      y2 = y1 + (y1 < 0 ? -20 : 20);
      if(Math.abs(x1) < Math.abs(y1)) {
        xm = x1 + (x1 < 0 ? -20 : 20);
        ym = y2;      
      } else {
        xm = x2 + (x1 < 0 ? 20 : -20);
        ym = y1;
      }
      node.select("circle").attr({
        cx: x1, cy: y1, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("circle:last-of-type").attr({
        cx: x2, cy: y2, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("path").attr({
        d: function() {
          return [
            "M", x1, y1, 
            "L", xm, ym,
            "L", x2, y2
          ].join(" ");
        },
        fill: "none",
        stroke: that.config.legendInlineColor,
        "stroke-width": that.config.legendInlineStrokeWidth
      });
      node.select("text").attr({
        x: x2, y: y2,
        dy: "0.38em",
        dx: (x1<0?-0.5:0.5) + "em",
        "text-anchor": (x1<0?"end": "start")
      }).text(d.data.name);
    });
    var minus = ["left","top"].indexOf(this.config.legendPosition) >= 0;
    var offset = (this.legendVertical
      ? [this.width/2 + (this.radius + this.config.fontSize/2 - (minus?-1:1)*this.legendSize[0]/2) * (minus ? -1 : 1),(this.height - this.legendSize[1])/2]
      : [(this.width - this.legendSize[0])/2,this.height/2 + (this.radius + this.config.fontSize + (!minus?-this.legendSize[1]:0)) * (minus?-1:1)]
    );
    this.legendGroup.attr({
      transform: ["translate(",offset[0], offset[1], ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
  }
}}});
plotdb.chart.add('Lollipop Chart',{"key":1062,"name":"Lollipop Chart","owner":4,"theme":null,"parent":null,"description":"a standard lollipop chart","basetype":["1"],"visualencoding":["1","3"],"category":["1","4","5"],"tags":["lollipop"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-05-07T18:11:51.000Z","modifiedtime":"2016-10-22T19:00:36.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"X axis","type":["Order"],"fields":[],"require":false},"value":{"desc":"Y axis","type":["Number"],"fields":[],"require":true}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"16","default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"6","default":"2","category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000","default":"#000","category":"Y Axis"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(8 + Math.round(Math.random() * 4));
    return {
      order: [{name: "Month", data: list.map(function(d,i) { return d + 1; })}],
      value: [{name: "Value", data: list.map(function(d,i) {
        return Math.abs(Math.round(
          (Math.random() * 10 + 45) * Math.cos(Math.random() + d/(2+Math.random())) +
          100 * (Math.sin(d/5) - 0.1 * d) + 25 + Math.random() * 10));
      })}]
    };
    return {
      y: [plotdb.data.sample.crimeanWar["army size"]],
      x: [plotdb.data.sample.crimeanWar["month"]]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "Y axis" },
    order: { type: [plotdb.Order], require: false, desc: "X axis" }
  },
  config: {
    palette: {},
    fontFamily: {},
    background: {},
    textFill: {},
    margin: {},
    popupShow: {},
    fontSize: {},
    labelShow: {},
    nodeSize: {default: 12},
    strokeWidth: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisLabelPosition: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.popup = plotd3.html.tooltip(this.root).coord(function(d,i) {
      var x = that.xScale(d.order);
      var y = that.yScale(d.value);
      return [x,y,that.barWidth,0];
    }).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.order);
      popup.select(".value").text(d.value);
    });
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.yrange = d3.extent(this.data.map(function(it) { return it.value; }));
    this.xvalues = this.data.map(function(it) { return it.order; });
    this.xlen = d3.max(this.xvalues.map(function(it) { return (""+it).length; }));
    if(this.yrange[0] == this.yrange[1]) this.yrange[1]++;
  },
  bind: function() {
    var that = this, sel;
    sel = this.svg.selectAll("g.data-group").data(this.data);
    sel.exit().attr("class","").transition("exit").duration(500).attr({opacity:0}).remove();
    sel = sel.enter().append("g").attr({class: "data-group", opacity:0})
    this.svg.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("rect.hid").data([d]).enter().append("rect").attr({class: "hid"});
      node.selectAll("rect.data").data([d]).enter().append("rect").attr({class: "data"});
      node.selectAll("circle.node").data([d]).enter().append("circle").attr({class: "node"});
      node.selectAll("text.label").data([d]).enter().append("text").attr({class: "label"});
    });
    if(this.config.showPopup) this.popup.nodes(sel);
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.yScale = d3.scale.linear()
      .domain([this.yrange[0] > 0 ? 0 : this.yrange[0], this.yrange[1]])
      .range([this.height - this.config.margin, this.config.margin]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .tickValues(this.yScale.ticks(this.config.yAxisTickCount))
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = this.config.yAxisShow ? this.yAxis.offset() : 0;
    this.xScale = d3.scale.ordinal()
      .domain(this.xvalues)
      .rangeBands([this.yAxisWidth + this.config.margin, this.width - this.config.margin], 0.5, 0.5);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAxisTickDirection)
      .ticks(this.config.xAxisTickCount)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .fontSize(this.config.fontSize);
    this.barWidth = this.xScale.rangeBand();
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = this.config.xAxisShow ? this.xAxis.offset() : 0;
    this.yScale.range([
      this.height - this.config.margin - this.xAxisHeight,
      this.config.margin + this.config.nodeSize/2 
        + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)
    ]);
    this.yAxisGroup.call(this.yAxis);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({fill: this.config.textFill});
    var dataGroup = this.svg.selectAll("g.data-group");
    dataGroup.transition("morph").duration(function() {
      return d3.select(this).attr("transform") ? 500 : 0;
    }).attr({
      transform: function(d,i) {
        return ["translate(",that.xScale(d.order),0,")"].join(" ");
      }
    });
    dataGroup.transition("opacity").duration(500).attr({opacity: 1});
    dataGroup.each(function(d,i) {
      var node = d3.select(this);
      node.select("circle.node").attr({
        fill: function(d,i) { return that.cScale(d.order); }
      }).transition("morph").duration(500).attr({
        cx: that.barWidth/2,
        cy: function(d,i) { return that.yScale(d.value); },
        r: that.config.nodeSize/2,
      });
      node.select("rect.hid").attr({
        x: -that.barWidth/2,
        width: that.barWidth * 2,
        y: that.config.margin, height: (that.height - 2 * that.config.margin - that.xAxisHeight),
        fill: "rgba(255,255,255,0.01)"
      });
      node.select("rect.data").attr({
        fill: function(d,i) { return that.cScale(d.order); },
      }).transition("morph").duration(500).attr({
        x: -that.config.strokeWidth/2 + that.barWidth/2,
        width: that.config.strokeWidth,
        y: function(d,i) {
          if(d.value>0) return that.yScale(d.value);
          else return that.yScale(0);
        },
        height: function(d,i) {
          return Math.abs(that.yScale(0) - that.yScale(d.value));
        },
        rx: 2, ry: 2
      });
      node.select("text.label").attr({
        "font-size": that.config.fontSize,
        "text-anchor": "middle",
        display: (that.config.labelShow ? "block" : "none")
      }).text(d.value).transition("morph").duration(500).attr({
        x: -that.config.strokeWidth/2 + that.barWidth/2,
        y: function(d,i) {
          if(d.value > 0) return that.yScale(d.value) - that.config.nodeSize/2 - that.config.fontSize/2;
          else return that.yScale(0) - that.config.fontSize / 2;
        }
      });
    });
    this.svg.selectAll("text").attr({
      "font-size": this.config.fontSize
    });
    this.xAxisGroup.attr({
      transform: function(d,i) {
        return ["translate(", 0, that.height - that.xAxisHeight - that.config.margin,")"].join(" ");
      },
      display: this.config.xAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.xAxisShowDomain ? "block" : "none"
    });
    this.yAxisGroup.attr({
      transform: function(d,i) {
        return ["translate(",that.yAxisWidth + that.config.margin,0,")"].join(" ");
      },
      display: this.config.yAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.yAxisShowDomain ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
  }
}}});
plotdb.chart.add('Bar Chart',{"key":1069,"name":"Bar Chart","owner":4,"theme":null,"parent":null,"description":"a standard bar chart. best used in visualize unordered data when we need accurate comparison or find maximal / minimal value.","basetype":["1"],"visualencoding":["1","3"],"category":["1","4"],"tags":["horizontal","bar","basic"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-05-16T01:05:51.000Z","modifiedtime":"2017-01-20T00:51:31.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of data","type":[],"fields":[],"require":false},"value":{"desc":"value of data","type":["Number"],"fields":[],"require":true}},"config":{"fill":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(87.84313725490196%,24.705882352941185%,5.490196078431375%,0.86)","default":"#e03f0e","category":"Global Settings"},"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["None","Ascending","Descending"],"default":""}],"value":true,"default":true,"category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"xAxisPosition":{"name":"Axis Position","type":[{"name":"Choice","level":20,"values":["top","bottom"],"default":""}],"value":"top","default":"bottom","category":"X Axis"},"yAxisPosition":{"name":"Axis Position","type":[{"name":"Choice","level":20,"values":["left","right"],"default":""}],"value":"left","default":"left","category":"Y Axis"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(100%,100%,100%,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden"],"default":""}],"value":"hidden","default":"hidden","category":"Y Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(12 + Math.round(Math.random() * 4));
    return {
      name: [{name: "name", data: list.map(function(it) { return plotdb.data.sample.name[it % plotdb.data.sample.name.length]; })}],
      value: [{name: "value", data: list.map(function(it) { 
        return parseInt(90 * Math.random() + 10);
      }) }]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "value of data" },
    name: { type: [], require: false, desc: "name of data" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    boxRoundness: {},
    fill: { name: "Color" },
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridBackground: {},
    gridShow: {},
    labelShow: {},
    sort: { type: [plotdb.Choice(["None","Ascending","Descending"])], default: true, rebindOnChange: true},

    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisPosition: {},
    xAxisLabelPosition: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},

    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisTickCount: {default: 0},
    yAxisStroke: {},
    yAxisPosition: {},
    yAxisLabelPosition: {},
    yAxisHandleOverlap: {},
    yAxisTickDirection: {},
    yAxisShowDomain: {},
    popupShow: {},
    unit: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.grid = plotd3.rwd.grid();
    this.popup = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name);
      popup.select(".value").text(
        d.value + (that.config.unit ? " " + that.config.unit : "")
      );
    });
  },
  parse: function() {
    var that = this;
    this.names = this.data.map(function(d,i) { return d.name; });
    if(!this.dimension.value.fields.length) this.data.map(function(d) { d.value = 0; });
    this.valueRange = d3.extent(this.data, function(it) { return it.value; });
    //this.nameLen = d3.max(this.data.map(function(it) { return ("" + it.name).length; }));    
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]+=1;
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("g.data").data(this.data); //this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("g").attr({class: "data", opacity: 0});
    if(this.config.popupShow) this.popup.nodes(sel);
    this.svg.selectAll("g.data").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("text").data([d]);
      sel.exit().remove();
      sel.enter().append("text").attr({class: "data label"});
      sel = node.selectAll("rect").data([d]);
      sel.exit().remove();
      sel.enter().append("rect").attr({class: "data"});
    });
    this.postResize();
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.yScale = d3.scale.ordinal()
      .domain(d3.range(this.data.length))//this.names)
      .rangeBands([this.config.margin, this.height - this.config.margin],0,0);
    this.yAxis = plotd3.rwd.axis()
      .orient(this.config.yAxisPosition || "bottom")
      .scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .ticks(this.config.yAxisTickCount)
      .tickDirection(this.config.yAxisTickDirection)
      .handleOverlap(this.config.yAxisHandleOverlap)
      .tickFormat(function(d,i) { return that.data[d].name; })
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset(): 0);   
    var isLeft = this.config.yAxisPosition == "left";
    var isBottom = this.config.xAxisPosition == "bottom";
    this.xScale = d3.scale.linear()
      .domain([(this.valueRange[0] < 0 ? this.valueRange[0] : 0), this.valueRange[1]])
      .range([
        this.config.margin + (isLeft ? this.yAxisWidth : 0),
        this.width - this.config.margin - (!isLeft ? this.yAxisWidth : 0)
      ]);
    this.xAxis = plotd3.rwd.axis()
      .orient(this.config.xAxisPosition)
      .scale(this.xScale)
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    var yrange = [
      this.config.margin + (isBottom ? 0 : this.xAxisHeight),
      this.height - this.config.margin - (!isBottom ? 0 : this.xAxisHeight)
    ];
    this.yScale.rangeBands(yrange,0,0);
    this.yAxisGroup.call(this.yAxis);
    this.barHeight = this.yScale.rangeBand();
    var rate = this.config.padding / (this.barHeight || 1);
    if(this.config.padding >= this.barHeight) rate = ((this.barHeight || 1) - 1)/(this.barHeight ||1);
    this.yScale.rangeBands(yrange,rate,rate);
    this.yAxisGroup.call(this.yAxis);
    this.barHeight = this.yScale.rangeBand();
    if(this.config.sort!="None") this.data.sort(this.config.sort == "Descending"
        ? function(a,b) { return b.value - a.value; }
        : function(a,b) { return a.value - b.value; }
    );
    this.grid.scale(this.xScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.height - 2 * this.config.margin - this.xAxisHeight)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.xAxis.tickValues())
      .background(this.config.gridBackground)
      .orient("vertical");
    this.postResize();
  },
  postResize: function() {
    var that = this;
    var isLeft = this.config.yAxisPosition == "left";
    this.svg.selectAll("text.data.label").attr({
      "font-size": this.config.fontSize,
    }).style({
      display: (this.config.labelShow ? "block" : "none")
    }).text(function(d,i) { return d.value + (that.config.unit ? " " + that.config.unit : ""); });
    var maxWidth = 0, maxLabelWidth = 0;
    this.barLabelWidthes = this.svg.selectAll("text.data.label").each(function(d,i) {
      var w = that.xScale(d.value) + this.getBBox().width;
      if(w > maxWidth) {
        maxWidth = w;
        maxLabelWidth = this.getBBox().width;
      }
    });
    var size = (
      this.width - 2 * this.config.margin - this.yAxisWidth - maxLabelWidth - this.config.fontSize
    );
    this.xScale.range([
      this.config.margin + (isLeft ? this.yAxisWidth : 0),
      this.config.margin + (isLeft ? this.yAxisWidth : 0) + size
    ]);
    this.xAxisGroup.call(this.xAxis);
    this.gridGroup.call(this.grid);

  },
  render: function() {
    var that = this;
    var offx, offy, isLeft, isBottom;
    isLeft = this.config.yAxisPosition == "left";
    isBottom = this.config.xAxisPosition == "bottom";
    offx = (this.config.margin + (isLeft ? this.yAxisWidth : 0));
    offy = (this.config.margin + (isBottom ? 0 : this.xAxisHeight));
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.attr({
      "transform": "translate(0," + (isBottom ? this.height - this.config.margin - this.xAxisHeight : this.config.margin + this.xAxisHeight) + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      "transform": "translate(" + (offx) + ",0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    
    this.svg.selectAll("g.data").transition("move").duration(function(d,i) { return (d3.select(this).attr("transform") ? 500 : 0)}).attr({
      transform: function(d,i) {
        return [
          "translate(",
          that.config.margin + (isLeft ? that.yAxisWidth: 0),
          that.yScale(i),
          ")"
        ].join(" ");
      }
    });
    this.svg.selectAll("g.data").transition("opacity").duration(500).attr({
      opacity: 1
    });
    this.svg.selectAll("rect.data").filter(function() { return !d3.select(this).attr("fill"); }).attr({
      fill: this.config.fill
    });
    this.svg.selectAll("rect.data").attr({
      x: 0,
      y: 0,
      rx: that.config.boxRoundness, ry: that.config.boxRoundness
    }).transition("morph").duration(500).attr({
      fill: this.config.fill,
      height: this.barHeight,
      width: function(d,i) { return that.xScale(d.value) - that.xScale(0); }
    });
    this.svg.selectAll("text.data.label").transition("move").duration(500).attr({
      x: function(d,i) { return that.xScale(d.value) - that.xScale(0) + that.config.fontSize/2; },
      y: this.barHeight/2 + this.config.fontSize/2,
    });
    this.gridGroup.attr({
      transform: [
        "translate(",
        0,
        this.config.margin + (this.config.xAxisPosition == "top" ? this.xAxisHeight : 0),
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
  }
}}});
plotdb.chart.add('Column Chart',{"key":1073,"name":"Column Chart","owner":4,"theme":null,"parent":null,"description":"best for accurately comparison and estimate the ratio in time series data. also useful in showing distribution / frequency data, with histogram.","basetype":["1"],"visualencoding":["3"],"category":["5"],"tags":["bar","compare","column","basic","histogram"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-05-22T17:10:50.000Z","modifiedtime":"2017-05-25T20:39:02.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"X axis","type":["Order"],"fields":[],"require":true,"fieldName":null},"value":{"desc":"Y axis","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"fill":{"name":"Bar Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e03f0e","default":"#e03f0e","category":"Global Settings"},"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["None","Ascending","Descending"],"default":""}],"value":false,"default":false,"category":"Value","rebindOnChange":true},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(14 + Math.round(Math.random() * 4));
    var value = [{name: "value", data: list.map(function(d,i) { return Math.random(); })}];
    var order = [{name: "order", data: list}];
    return {value: value, order: order};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "Y axis" },
    order: { type: [plotdb.Order], require: true, desc: "X axis" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    boxRoundness: {},
    labelShow: {},
    fill: { name: "Bar Color" },
    sort: { type: [plotdb.Choice(["None","Ascending","Descending"])], default: false, rebindOnChange: true },
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickDirection: {},
    xAxisStroke: {},
    xAxisTickCount: {default: 0},
    xAxisHandleOverlap: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.order);
      popup.select(".value").text(parseInt(d.value*100)/100);
    });
    this.grid = plotd3.rwd.grid();
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.xticklen = d3.max(this.data.map(function(d,i) { return ("" + (d.order || "")).length; }));
    this.valueRange = d3.extent(this.data.map(function(d,i) { return d.value; }));
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]++;
    this.data.forEach(function(d,i) { d.idx = i; });
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("rect.data").data(this.data, function(d,i) { return d.order; });
    sel.exit().attr({class: "", opacity:1}).transition("remove").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("rect").attr({class: "data", opacity: 0});
    if(this.config.popupShow) this.popup.nodes(sel);
    sel = this.svg.selectAll("text.label").data(this.data, function(d,i) { return d.order; });
    sel.exit().attr({class: "", opacity: 1}).transition("remove").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("text").attr({class: "label", opacity: 0});
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    if(this.config.sort != "None" ) {
      this.data.sort(function(a,b) {
        if(that.config.sort == "Descending") return b.value - a.value;
        else if(that.config.sort == "Ascending") return a.value - b.value;
        return a.idx - b.idx;
      });
    }
    this.svg.selectAll("g.tick text.label").attr({
      "font-size": this.config.fontSize,
      "font-family": this.config.fontFamily
    }).text(function(d,i) { return d.value; });
    this.popup.fontSize(this.config.fontSize);
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.padding = (width < 480 ? this.config.padding * 0.6 : this.config.padding);
    this.yScale = d3.scale.linear().domain([0, this.valueRange[1]])
      .range([height - this.config.margin, this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .labelPosition(this.config.yAxisLabelPosition)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .tickValues(this.yScale.ticks(this.config.yAxisTickCount))
      .tickFormat(function(d,i) { return d; })
      .fontSize(this.config.fontSize);
    this.yAxis.label(this.config.yAxisLabel || "");
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);

    var step = (width - this.config.margin * 2 - this.yAxisWidth) / (this.data.length || 1);
    var rate = this.padding / step;
    if(rate > 1) rate = 1;
    this.xScale = d3.scale.ordinal().domain(this.orders)
      .rangeBands([this.config.margin + this.yAxisWidth, width - this.config.margin],rate,rate);
    var barWidth = this.xScale.rangeBand();
    if(barWidth<1) {
      rate = (barWidth - 1)/step;
      if(rate > 1) rate = 1;
      this.xScale.rangeBands([this.config.margin + this.yAxisWidth, width - this.config.margin],rate,rate);
    }
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAXisTickDirection)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([height - this.config.margin - this.xAxisHeight - 1, this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    var w = this.xScale.rangeBand();
    if( w <= this.xticklen * this.config.fontSize ) this.overlap = true; else this.overlap = false;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.svg.selectAll("text.label").attr({
      x: function(d,i) { return that.xScale(d.order) + w/2; },
      y: function(d,i) { return that.yScale(d.value) - that.config.fontSize * 0.5; },
      fill: this.config.textFill,
      opacity: (this.config.labelShow ? 1 : 0),
      "text-anchor": "middle"
    }).style({
      display: (this.config.labelShow ? "block" : "none")
    }).text(function(d,i) { return Math.round(d.value*100)/100; });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.yAxisGroup.attr({
      transform: "translate("+(that.yAxisWidth + that.config.margin)+" 0)",
      display: this.config.yAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.yAxisShowDomain ? "block" : "none"
    });
    this.xAxisGroup.attr({
      transform: "translate(0 "+(that.height-that.config.margin-that.xAxisHeight)+")",
      display: this.config.xAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.xAxisShowDomain ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.svg.selectAll("rect.data").each(function(d,i) {
      var node = d3.select(this);
      if(!this.inited) {
        node.attr({
          x: function(d,i) { return that.xScale(d.order); },
          width: w,
          y: that.yScale(0),
          height: 0,
          fill: that.config.fill
        });
      } 
      node = node.transition().duration(500);
      node.attr({
        x: function(d,i) { return that.xScale(d.order); },
        width: w,
        y: function(d,i) { return that.yScale(d.value); },
        height: function(d,i) { return that.yScale(0) - that.yScale(d.value); },
        fill: that.config.fill,
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness,
        opacity: 1
      });
      this.inited = true;
    });
  }
}}});
plotdb.chart.add('Marimekko Chart',{"key":1118,"name":"Marimekko Chart","owner":4,"theme":null,"parent":null,"description":"this chart shows both ratio and amount in the same time. ratio is shown via sense of stacked bars, and amount is shown by the height of the bars.","basetype":["1","8"],"visualencoding":["3","6"],"category":["6"],"tags":["marimekko","mekko","equity"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-07-17T20:29:06.000Z","modifiedtime":"2017-01-05T09:52:12.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"","type":["String"],"fields":[],"require":false},"value":{"desc":"","type":["Number"],"fields":[],"require":true,"multiple":true}},"config":{"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["Descending","Ascending","None","Descending(By Name)","Ascending(By Name)"],"default":""}],"value":"Descending","default":"Descending","category":"Value","rebindOnChange":true},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Global Settings"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"6","default":4,"category":"Y Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"4","default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(4 + Math.round(Math.random() * 2));
    var part = d3.range(3 + Math.round(Math.random() * 2));
    return {
      name: [{name: "Name", data: list.map(function(d,i) { return plotdb.data.sample.name.get(i); })}], 
      value: part.map(function(d,i) {
        return {
          name: plotdb.data.sample.continent.get(i),
          data: list.map(function(d,i) { return Math.round(Math.random() * 100 * (i + 0.5)); })
        };
      })
    };
  },
  dimension: {
    name: { type: [plotdb.String], require: false, desc: "" },
    value: { type: [plotdb.Number], require: true, multiple: true, desc: "" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    padding: {},
    margin: {},
    boxRoundness: {},
    fontSize: {},
    palette: {},
    legendShow: {},
    legendLabel: {},
    stroke: {default: "#fff"},
    strokeWidth: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {},
    xAxisStroke: {},
    sort: {
      rebindOnChange: true,
      type: [plotdb.Choice([
        "Descending","Ascending","None","Descending(By Name)", "Ascending(By Name)"
      ])]
    }
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.dataGroup = this.svg.append("g").attr({class: "data-groups"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.tooltip = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.parent.name);
      popup.select(".value div").text(that.attrs[d.idx]);
      popup.select(".value span").text(d.v + " (" + (Math.round(100*d.percent)/100) + "%)");
    })
    this.tooltip.getPopupNode().each(function(d,i) {
      var node = d3.select(this);
      node.select(".value").append("div");
      node.select(".value").append("span");
    });
  },
  parse: function() {
    var that = this;
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = i; });
    this.data.map(function(d,i) {
      d.sum = d.value.reduce(function(a,b) { return a + b; }, 0);
      d.valueObj = d.value.map(function(it,i) { return {idx: i, v: it, parent: d, percent: 100 * it/(d.sum || 1)};});
      for(var j=0,offset=0;j<d.valueObj.length;j++) {
        d.valueObj[j].offset = offset;
        offset += d.valueObj[j].percent;
      }
    });
    this.attrs = this.dimension.value.fieldName;
    if(!/\(/.exec(this.config.sort) && this.config.sort != "None") {
      this.data.sort(
        this.config.sort == "Descending"
        ? function(a,b) { return b.sum - a.sum; }
        : function(a,b) { return a.sum - b.sum; }
      )
    } else if(/\(/.exec(this.config.sort)) {
      plotdb.Order.sort(this.data, "name", (this.config.sort=="Descending(By Name)" ? 0 : 1));
    }
    for(var i=0,offset=0;i<this.data.length;i++) {
      this.data[i].offset = offset;
      offset += this.data[i].sum;
    }
    this.sumRange = d3.extent(this.data.map(function(d,i) { return d.sum; }));
    this.total = this.data.reduce(function(a,b) { return a + b.sum; }, 0);
  },
  bind: function() {
    var that = this, sel;
    sel = this.dataGroup.selectAll("g.data-group").data(this.data);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "data-group"});
    this.dataGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("rect.data").data(d.valueObj);
      sel.exit().remove();
      sel = sel.enter().append("rect").attr({class: "data", opacity: 1});
      that.tooltip.nodes(sel);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .orient("bottom")
      .scale(this.cScale)
      .tickValues(this.attrs)
      .fontSize(this.config.fontSize)
      .size([this.width - 2 * this.config.margin, 100]);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.yScale = d3.scale.ordinal()
      .domain(d3.range(this.data.length))
      .range(this.data.map(function(d,i) {
        return (that.height - that.config.margin * 2 - that.legendSize[1]) * (d.offset + d.sum) / (that.total || 1) + that.config.margin;
      }));
    this.yAxis = plotd3.rwd.axis()
      .orient("left")
      .scale(this.yScale)
      .tickFormat(function(d,i) { return that.data[d].name; })
      .label(this.config.yAxisLabel || "")
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    this.xScale = d3.scale.linear()
      .domain([0, 100])
      .range([this.config.margin + this.yAxisWidth, this.width - this.config.margin]);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .fontSize(this.config.fontSize)
      .label(this.config.xAxisLabel || "")
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .boundaryTickInside(true)
      .ticks(this.config.xAxisTickCount);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range(this.data.map(function(d,i) {
      return (that.height - that.config.margin * 2 - that.xAxisHeight - (that.config.legendShow ? that.legendSize[1] + that.config.fontSize : 0))
        * (d.offset + d.sum/2) / (that.total || 1) + that.config.margin;
    }));
    this.yAxisGroup.call(this.yAxis).select(".domain").remove();
    this.yScaleObj = d3.scale.ordinal()
      .domain(d3.range(this.data.length))
      .range(this.data.map(function(d,i) {
        var h = (that.height - that.config.margin * 2 - that.xAxisHeight - (that.config.legendShow ? that.legendSize[1] + that.config.fontSize : 0));
        return {
          offset: h * (d.offset) / (that.total || 1) + that.config.margin,
          height: h * (d.sum) / (that.total || 1)
        };
      }));
  },
  render: function() {
    var that = this,sel;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.legendGroup.attr({
      transform: ["translate(", (this.width - this.legendSize[0])/2, (this.height - this.legendSize[1] - this.config.margin), ")"].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.xAxisGroup.attr({
      transform: ["translate(", 0, (this.height - this.xAxisHeight - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0)), ")"].join(" "),
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      transform: ["translate(", (this.config.margin + this.yAxisWidth), 0, ")"].join(" "),
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.dataGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      if(node.attr("transform")) node = node.transition("move").duration(500);
      node.attr({
        transform: function() {
          var obj = that.yScaleObj(i);
          return ["translate(", 0, obj.offset, ")"].join(" ")
        }
      });
    });
    this.dataGroup.selectAll("g.data-group").each(function(p,i) {
      var node = d3.select(this);
      var obj = that.yScaleObj(i);
      node.selectAll("rect.data").filter(function() { return !d3.select(this).attr("width"); }).attr({
        width: function(d,i) { return that.xScale(d.offset + d.percent/2);}, height: 0, y: obj.height/2
      });
      node.selectAll("rect.data").attr({
        fill: function(d,i) { return that.cScale(that.attrs[d.idx]); },
        stroke: that.config.stroke,
        "stroke-width": that.config.strokeWidth,
      }).transition("morph").duration(500).attr({
        x: function(d,i) { return that.xScale(d.offset); },
        y: 0,
        width: function(d,i) { return that.xScale(d.offset + d.percent) - that.xScale(d.offset); },
        height: function(d,i) { return obj.height; },
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness
      })
      node.selectAll("rect.data").transition().attr({
        opacity: function(d,i) { return (!that.activeGroup || that.activeGroup == that.attrs[d.idx] ? 1 : 0.2); }
      });
    });
  }
}}});
plotdb.chart.add('Cherry Chart',{"key":1119,"name":"Cherry Chart","owner":4,"theme":null,"parent":null,"description":"business chart for analysing product structure by growth, profitability and sales volume. Alternative to bubble chart when bubbles overlap too much.","basetype":["18"],"visualencoding":["1","3"],"category":["6"],"tags":["growth","revenue","profitibility","product","performance"],"likes":0,"searchable":true,"dimlen":6,"createdtime":"2016-07-17T21:25:50.000Z","modifiedtime":"2017-01-31T10:09:43.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":62,"type":"css","lines":5,"content":".domain {\n  fill: none;\n  stroke: #000;\n  storke-width: 1px;\n}"},"assets":[],"dimension":{"x":{"desc":"x axis of circle","type":["Number"],"fields":[],"require":true,"fieldName":null},"y":{"desc":"y axis of circle","type":["Number"],"fields":[],"require":true,"fieldName":null},"name":{"desc":"name of circle","type":[],"fields":[],"require":false,"fieldName":null},"angle":{"desc":"Angle of Cherry Stem","type":["Number"],"fields":[],"require":false,"fieldName":null},"color":{"desc":"color of circle","type":[],"fields":[],"require":false,"fieldName":null},"length":{"desc":"cherry stem length above circle","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ccc","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"strokeWidth":{"desc":"Default Stroke width","name":"Cherry Stem Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000","default":"#000","category":"Y Axis"},"bubbleStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#c01d1d","default":"#c01d1d","category":"Bubble"},"bubbleSizeMax":{"name":"Max Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Bubble"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(255,255,255,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridFrameStroke":{"name":"Frame Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ccc","default":"#ccc","category":"Grid"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"bubbleFillOpacity":{"name":"Fill Opacity","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0.9,"default":0.9,"category":"Bubble"},"bubbleStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"1","default":"1","category":"Bubble"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"},"gridFrameStrokeWidth":{"name":"Frame Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":3,"default":3,"category":"Grid"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var count = 35 + Math.round(Math.random() * 10);
    var x = [{name: "X", data: d3.range(count).map(function() { return Math.random(); })}];
    var y = [{name: "Y", data: d3.range(count).map(function() { return Math.random(); })}];
    var length = [{name: "Size", data: d3.range(count).map(function() { return Math.random() * 0.1; })}];
    var angle = [{name: "Direction", data: d3.range(count).map(function() { return 0 * Math.random(); })}];
    var color = [{name: "Category", data: d3.range(count).map(function() { return plotdb.data.sample.category.rand(); })}];
    var name = [{name: "Name", data: d3.range(count).map(function() { return plotdb.data.sample.name.rand(); })}];
    return {x: x, y: y, length: length, color: color, name: name, angle: angle};
  },
  dimension: {
    length: { type: [plotdb.Number], require: true, desc: "cherry stem length above circle" },
    x: { type: [plotdb.Number], require: true, desc: "x axis of circle"},
    y: { type: [plotdb.Number], require: true, desc: "y axis of circle"},
    angle: { type: [plotdb.Number], require: false, desc: "Angle of Cherry Stem"},
    color: { type: [], require: false, desc: "color of circle"},
    name: { type: [], require: false, desc: "name of circle"}
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    strokeWidth: {name: "Cherry Stem Width"},
    legendShow: {},
    legendLabel: {},
    bubbleStroke: {},
    bubbleStrokeWidth: {},
    bubbleSizeMax: {default: 10},
    bubbleFillOpacity: {default: 0.9},
    gridBackground: {},
    gridShow: {},
    gridDashArray: {},
    gridFrameStroke: {},
    gridFrameStrokeWidth: {},
    gridStroke: {},
    gridStrokeWidth: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisTickCount: {},
    xAxisStroke: {},
    xAxisLabelPosition: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    popupShow: {},
    unit: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.frame = this.svg.append("rect").attr({class: "grid frame"});
    this.frameInner = this.svg.append("rect").attr({class: "grid frame inner"});
    this.gridYGroup = this.svg.append("g").attr({class: "grid-group vertical"});
    this.gridXGroup = this.svg.append("g").attr({class: "grid-group horizontal"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.gridX = plotd3.rwd.grid();
    this.gridY = plotd3.rwd.grid();
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name || "-");
      popup.select(".value").text(parseInt(100 * d.length)/100 + (" " + (that.config.unit || "")));
    });
  },
  parse: function() {
    if(!this.dimension.x.fields.length) this.data.map(function(d,i) { d.x = 0; });
    if(!this.dimension.y.fields.length) this.data.map(function(d,i) { d.y = 0; });
    if(!this.dimension.length.fields.length) this.data.map(function(d,i) { d.length = 1; });
    if(!this.dimension.angle.fields.length) this.data.map(function(d,i) { d.angle = 0; });
    var lenRange = d3.extent(this.data.map(function(d,i) { return d.length; }));
    var xLenRate = 1, yLenRate = 1, lenRate = 1;
    this.xRange = d3.extent(this.data.map(function(d) { return d.x; }));
    this.yRange = d3.extent(this.data.map(function(d) { return d.y; }));
    if(this.xRange[1] - this.xRange[0] < lenRange[1]*4) {
      xLenRate = (this.xRange[1] - this.xRange[0])/(lenRange[1]*4);
    }
    if(this.yRange[1] - this.yRange[0] < lenRange[1]*4) {
      yLenRate = (this.yRange[1] - this.yRange[0])/(lenRange[1]*4);
    }
    if(xLenRate < yLenRate) lenRate = xLenRate;
    else lenRate = yLenRate;
    this.lenRate = lenRate;
    this.data.map(function(d,i) {
      var a = d.angle * Math.PI / 180;
      var x = d.x + Math.sin(a) * d.length * lenRate;
      var y = d.y + Math.cos(a) * d.length * lenRate;
      d.px = x;
      d.py = y;
    });
    this.xRange = d3.extent(d3.extent(this.data.map(function(d) { return d.x; })).concat(
      d3.extent(this.data.map(function(d) { return d.px; }))));
    this.yRange = d3.extent(d3.extent(this.data.map(function(d) { return d.y; })).concat(
      d3.extent(this.data.map(function(d) { return d.py; }))));
    this.lenRange = d3.extent(this.data.map(function(it) { return it.length; }));
    this.categories = d3.map(this.data, function(d) {return d.color || ""; }).keys();
    if(this.xRange[0] == this.xRange[1]) this.xRange[1]++;
    if(this.yRange[0] == this.yRange[1]) this.yRange[1]++;
    if(this.lenRange[0] == this.lenRange[1]) this.lenRange[1]++;
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("g.data").data(this.data);
    sel.exit().transition("exit").duration(500).attr("opacity", 0).remove();
    sel.enter().append("g").attr({class: "data", opacity: 0}).each(function(d,i) {
      var node = d3.select(this);
      node.append("circle").attr({class: "data"});
      node.append("line").attr({class: "data"});
    });
    if(this.config.popupShow) this.popup.nodes(sel);
    this.dataGroup.selectAll("g.data").each(function(d,i) {
      d3.select(this).selectAll("*").datum(d);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = d3.select(this.root).select("svg")[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    var m = this.config.margin;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.maxRadius = this.config.bubbleSizeMax/2;
    this.popup.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.auto(this.config.palette, this.dimension.color.fields);
    this.legend = plotd3.rwd.legend().orient("right")
      .scale(this.cScale)
      .label(this.config.legendLabel || "")
      .size([this.width/2,this.height - 2 * this.config.margin - this.xAxisHeight])
      .fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    /*this.lenScale = d3.scale.linear()
      .domain([0,this.lenRange[1]])
      .range([0, (this.height - 2 * this.config.margin - this.legendSize[1] - this.config.fontSize)/3]);*/
    this.yScale = d3.scale.linear().domain(this.yRange).range([
      height - this.maxRadius - m, this.maxRadius + m
    ]);
    this.yAxis = plotd3.rwd.axis().scale(this.yScale).orient("left")
      .fontSize(this.config.fontSize)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter);
    this.yAxisGroup.call(this.yAxis).select(".domain").remove();
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    this.yticks = this.yAxis.tickValues();

    this.xScale = d3.scale.linear().domain(this.xRange).range([
      this.yAxisWidth + this.maxRadius + m,
      width - this.maxRadius - m - (this.config.legendShow ? this.legendSize[0] + this.config.fontSize : 0)
    ]);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .fontSize(this.config.fontSize)
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount);
    this.xAxisGroup.call(this.xAxis).select(".domain").remove();
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.xticks = this.xAxis.tickValues();
    this.yScale.range([ height - this.maxRadius - this.xAxisHeight - m, this.maxRadius + m ]);
    this.yAxisGroup.call(this.yAxis).select(".domain").remove();
    this.xAxisGroup.call(this.xAxis).select(".domain").remove();
    this.gridX.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth - this.legendSize[0] - this.config.bubbleSizeMax - this.config.fontSize)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .orient("horizontal");
    this.gridXGroup.call(this.gridX);
    this.gridY.scale(this.xScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.height - 2 * this.config.margin - this.xAxisHeight - this.config.bubbleSizeMax)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.xAxis.tickValues())
      .orient("vertical");
    this.gridYGroup.call(this.gridY);
  },
  render: function() {
    var that = this;
    var m = this.config.margin;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.gridXGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth + this.config.bubbleSizeMax,
        0,
        ")"].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.gridYGroup.attr({
      transform: [
        "translate(",
        0,
        this.config.margin + this.config.bubbleSizeMax,
        ")"].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.frame.attr({
      x: that.yAxisWidth + m,
      y: m,
      width: this.xScale.range()[1] - this.xScale.range()[0] + 2 * this.maxRadius,
      height: that.height - 2 * m - that.xAxisHeight,
      fill: this.config.gridBackground,
      stroke: this.config.gridFrameStroke,
      "stroke-width": this.config.gridFrameStrokeWidth
    });
    this.frameInner.attr({
      x: that.yAxisWidth + m + this.maxRadius,
      y: m + this.maxRadius,
      width: this.xScale.range()[1] - this.xScale.range()[0],
      height: that.height - 2 * m - that.xAxisHeight - 2 * this.maxRadius,
      fill: this.config.gridBackground,
      stroke: this.config.gridFrameStroke,
      "stroke-width": this.config.gridFrameStrokeWidth
    });
    this.legendGroup.attr({
      transform: ["translate(", this.width - this.config.margin - this.legendSize[0], (this.height - this.legendSize[1] - this.xAxisHeight)/2, ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      transform: ["translate(", 0, ",", this.height - this.xAxisHeight - m,")"].join(""),
      display: this.config.xAxisShow ? "block" : "none"      
    });
    this.yAxisGroup.attr({
      transform: ["translate(", this.yAxisWidth + m , ",", 0 ,")"].join(""),
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.dataGroup.selectAll("g.data").transition("opacity").duration(500).attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.color
                ? that.config.bubbleFillOpacity : 0.1); 
      }
    });
    this.svg.selectAll("circle.data")
    .filter(function(d,i) { return !d3.select(this).attr("fill"); }).attr({
      fill: function(it) { return that.cScale(it.color); },
    });
    this.svg.selectAll("circle.data").transition("morph").duration(500).attr({
      cx: function(it) { return that.xScale(it.x); },
      cy: function(it) { return that.yScale(it.y); },
      r: this.maxRadius,
      fill: function(it) { return that.cScale(it.color); },
    })

    this.svg.selectAll("line.data")
    .filter(function(d,i) { return !d3.select(this).attr("stroke"); }).attr({
      stroke: function(d) { return that.cScale(d.color); }
    });
    this.svg.selectAll("line.data").attr({
      "stroke-width": this.config.strokeWidth,
      "stroke-linecap": "round"
    });
    this.svg.selectAll("line.data").each(function(d,i) {
      var node = d3.select(this), cx, cy, len,a;
      var x1, x2, y1, y2, rx, ry;
      a = d.angle * Math.PI/180;
      len = d.length * that.lenRate;
      rx = (that.xScale.domain()[1] - that.xScale.domain()[0]) * that.maxRadius / (that.xScale.range()[1] - that.xScale.range()[0]);
      ry = (that.yScale.domain()[1] - that.yScale.domain()[0]) * that.maxRadius / (that.yScale.range()[1] - that.yScale.range()[0]);
      if(rx < ry) rx = ry; else ry = rx;
      x1 = that.xScale(d.x + Math.sin(a) * (rx));
      y1 = that.yScale(d.y + Math.cos(a) * (ry));
      x2 = that.xScale(d.x + Math.sin(a) * (rx + len));
      y2 = that.yScale(d.y + Math.cos(a) * (ry + len));
      node.transition("morph").duration(500).attr({x1:x1,y1:y1,x2:x2,y2:y2,stroke: that.cScale(d.color)});
    });

  }
}
}});
plotdb.chart.add('Slopegraph - Tufte Edition',{"key":2006,"name":"Slopegraph - Tufte Edition","owner":4,"theme":null,"parent":null,"description":"Tufte-style slopegraph. Best for believers of minimalist.","basetype":["2"],"visualencoding":["1","4"],"category":["5"],"tags":["tufte","minimal","slope","direction","rank"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-07-22T01:07:40.000Z","modifiedtime":"2017-01-28T06:03:29.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"Name of this line in slopegrape","type":["String"],"fields":[],"require":false,"fieldName":null},"value":{"desc":"Each point of this line in slopegraph","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"nodeFill":{"desc":"fill Dot with this color","name":"Fill Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"fixHeight":{"desc":"automatically adjust chart height according to content","name":"Fix Height","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"nodeStroke":{"desc":"draw Dot outline with this color","name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Dot"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":2,"category":"Dot"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"4","default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(6 + Math.round(Math.random() * 4));
    var count = d3.range(3 + Math.random() * 2);
    return {
      name: [{name: "Name", data: list.map(function(d,i) { return plotdb.data.sample.name.get(i); })}],
      value: count.map(function(d,i) { return {
        name: 1980 + 4 * d, data: list.map(function(d,j) {
          return parseInt(Math.random()* 20) + i * 5;
        })
      };})
    };
    src = plotdb.data.sample.lifeExpectancy;
    return {
      name: [src.Country],
      value: [src[1985], src[2000],src[2015]]
    };
  },
  dimension: {
    name: { type: [plotdb.String], require: false, desc: "Name of this line in slopegrape" },
    value: { type: [plotdb.Number], multiple: true, require: true, desc: "Each point of this line in slopegraph" }
  },
  config: {
    fixHeight: {name: "Fix Height", type: [plotdb.Boolean], default: false, desc: "automatically adjust chart height according to content"},
    fontFamily: {},
    background: {},
    textFill: {},
    margin: {},
    stroke: {default: "#000"},
    strokeWidth: {default: 2},
    nodeSize: {default: 12},
    nodeFill: { default: "#000"},
    nodeStroke: {default: "#fff"},
    nodeStrokeWidth: {default: 2},
    fontSize: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisLabelPosition: {},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.tooltip = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name);
      popup.select(".value").text(d);
    });
  },
  parse: function() {
    var that = this,i,j,field,minDiff = -1,diff,data;
    this.xValues = this.dimension.value.fieldName || d3.range(this.dimension.value.fields.length);
    this.yRange = d3.extent(this.data.map(function(d,i) { return d3.extent(d.value); })
      .reduce(function(a,b) { return a.concat(b); }, []));
    for(i=0;i<this.dimension.value.fields.length;i++) {
      data = this.dimension.value.fields[i].data.map(function(d,i) { return +d; });
      data.sort(function(a,b) { return a - b; });
      for(j=0;j<data.length - 1;j++) {
        diff = data[j + 1] - data[j];
        if(minDiff == -1 || minDiff > diff && diff > 0) minDiff = diff;
      }
    }
    this.minDiff = minDiff;
    this.data.map(function(d,i) {
      d.pairs = d3.pairs(d.value);
    });
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("g.data-group").data(this.data);
    sel.exit().attr("class","").transition("exit").duration(500).attr({opacity: 0}).remove();
    sel.enter().append("g").attr({class: "data-group", opacity: 0});
    this.dataGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("line.connect").data(d.pairs);
      sel.exit().attr("class", "").transition("exit").duration(500).attr({opacity: 0}).remove();
      sel.enter().append("line").attr({class: "connect", opacity: 0});
      sel = node.selectAll("circle.data").data(d.value);
      sel.exit().remove();
      sel = sel.enter().append("circle").attr({class: "data"});
      that.tooltip.nodes(sel);
      node.selectAll("text").data([d,d]).enter().append("text").attr({
        class: function(d,i) { return "label " + (i ? "right" : "left"); }
      }).text(d.name);
    });
    this.resize();
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    if(this.config.autoHeight) 
      this.height = height = 2 * this.config.fontSize * (this.yRange[1] - this.yRange[0]) / (this.minDiff || 1);
    if(height > 10000) this.height = height = 10000;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.tooltip.fontSize(this.config.fontSize);
    this.labelWidth = d3.max(this.dataGroup.selectAll("text").attr({
      "font-size": this.config.fontSize
    })[0].map(function(d) { return d.getBoundingClientRect().width; })) + this.config.fontSize;
    this.yScale = d3.scale.linear()
      .domain(this.yRange)
      .range([this.height - this.config.margin, this.config.margin]);
   
    this.xScale = d3.scale.ordinal()
      .domain(this.xValues)
      .rangeBands([
        this.config.margin + this.labelWidth,this.width - this.config.margin - this.labelWidth
      ]);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .tickValues(this.xValues)
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis).select(".domain").remove();
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.xStep = this.xScale.rangeBand();
    this.yScale
      .range([this.height - this.config.margin - this.xAxisHeight - this.config.fontSize, this.config.margin + this.config.fontSize]);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.xAxisGroup.attr({
      transform: ['translate(', 0, (this.height - this.config.margin - this.xAxisHeight), ')'].join(" "),
      display: (this.config.xAxisShow ? "block" : "none")
    });
    this.dataGroup.selectAll("g.data-group").transition("opacity").duration(500).attr({
      opacity: 1
    });
    this.dataGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("circle.data").attr({
        fill: that.config.nodeFill,
        stroke: that.config.nodeStroke,
        "stroke-width": that.config.nodeStrokeWidth

      }).transition("morph").duration(500).attr({
        cx: function(d,i) { return that.xScale(that.xValues[i]) + that.xStep/2; },
        cy: function(d,i) { return that.yScale(d); },
        r: that.config.nodeSize/2,
      });
      node.selectAll("line.connect").transition("morph").duration(500).attr({
        x1: function(d,i) { return that.xScale(that.xValues[i]) + that.xStep/2; },
        x2: function(d,i) { return that.xScale(that.xValues[i + 1]) + that.xStep/2; },
        y1: function(d,i) { return that.yScale(d[0]); },
        y2: function(d,i) { return that.yScale(d[1]); },
        stroke: that.config.stroke,
        "stroke-width": that.config.strokeWidth,
        opacity: 1
      });
    });
    this.dataGroup.selectAll("text.left").transition("morph").duration(500).attr({
      x: function(d,i) { return that.xScale(that.xValues[0]) + that.xStep/2 - that.config.fontSize/2; },
      y: function(d,i) { return that.yScale(d.value[0]); },
      "text-anchor": "end",
      dy: "0.5em",
      "font-size": this.config.fontSize
    });
    this.dataGroup.selectAll("text.right").transition("morph").duration(500).attr({
      x: function(d,i) { return that.xScale(that.xValues[that.xValues.length - 1]) + that.xStep/2 + that.config.fontSize/2; },
      y: function(d,i) { return that.yScale(d.value[d.value.length - 1]); },
      "text-anchor": "start",
      dy: "0.5em",
      "font-size": this.config.fontSize
    });
  }
}}});
plotdb.chart.add('Histogram',{"key":2007,"name":"Histogram","owner":4,"theme":null,"parent":1073,"description":"similar to column chart, but do the calculate of histogram for you. one of the 7 basic tools of quality.","basetype":["1"],"visualencoding":["3"],"category":["5"],"tags":["bar","compare","column","basic","histogram","qc","quality"],"likes":0,"searchable":true,"dimlen":1,"createdtime":"2016-07-22T05:51:25.000Z","modifiedtime":"2017-02-01T09:46:24.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"value":{"desc":"Value","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"fill":{"name":"Bar Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#4675cf","default":"#e03f0e","category":"Global Settings"},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#24204a","default":"#999","category":"Global Settings"},"barCount":{"desc":"Number of Bars","name":"Bar Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"8","default":10,"rebindOnChange":true},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":0,"category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":6,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"offset","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(300 + Math.round(Math.random() * 200));
    var rands = d3.range(20 + Math.round(Math.random() * 8));
    var norm = function() {
      return rands.map(function(d,i) { return Math.random(); }).reduce(function(a,b) { return a + b; },0)/rands.length;
    };
    return {value: [{name: "value", data: list.map(function(d,i) {
      return Math.round(100 * norm());
    })}]}
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "Value" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    stroke: {},
    strokeWidth: {default: 0},
    boxRoundness: {},
    fontSize: {},
    margin: {},
    labelShow: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    fill: { name: "Bar Color" },
    barCount: { name: "Bar Count", type: [plotdb.Number], default: 10, desc: "Number of Bars", rebindOnChange: true},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisTickCount: {},
    xAxisStroke: {},
    xAxisLabelPosition: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    unit: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.grid = plotd3.rwd.grid();
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.popup = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(that.xTickLabels[i]);
      popup.select(".value").text((parseInt(d.y*100)/100) + " " + (that.config.unit || ""));
    });
    this.histogram = d3.layout.histogram()
      .value(function(d,i) { return d.value; });
  },
  parse: function() {
    this.valueRange = d3.extent(this.data.map(function(d,i) { return d.value; }));
    this.valueRange = d3.scale.linear().domain(this.valueRange).nice().domain();
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]++;
    this.parsed = [];
    this.histogram.range(this.valueRange);
    this.histogram.bins(this.config.barCount);
    this.parsed = this.histogram(this.data);
    this.yRange = d3.extent(this.parsed.map(function(d,i) { return d.y; }));
    this.xTickLabels = this.parsed.map(function(d,i) { return (parseInt(100*d.x)/100) + " ~ " + (parseInt(100 * (d.x + d.dx))/100); });
    this.xValues = d3.range(this.parsed.length);
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("rect.data").data(this.parsed);
    sel.exit().remove();
    sel = sel.enter().append("rect").attr({class: "data"});
    if(this.config.popupShow) this.popup.nodes(sel);
    sel = this.dataGroup.selectAll("text.label").data(this.parsed);
    sel.exit().remove();
    sel = sel.enter().append("text").attr({class: "label"});
    this.dataGroup.selectAll("text.label").text(function(d,i) { return d.y; });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.popup.fontSize(this.config.fontSize);
    this.yScale = d3.scale.linear()
      .domain([0, this.yRange[1]])
      .range([
        height - this.config.margin,
        this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.38 : 0)
      ]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxis.label(this.config.yAxisLabel || "");
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);

    this.xScale = d3.scale.ordinal()
      .domain(this.xValues)
      .rangeBands([this.config.margin + this.yAxisWidth, this.width - this.config.margin]);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .tickFormat(function(d,i) { return that.xTickLabels[d]; })
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .ticks(this.config.xAxisTickCount)
      .fontSize(this.config.fontSize)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap);
    this.xAxis.label(this.config.xAxisLabel || "");
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([
      this.height - this.config.margin - this.xAxisHeight - 1,
      this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.38 : 0)
    ]);
    this.yAxisGroup.call(this.yAxis);
    this.barWidth = this.xScale.rangeBand();
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.yAxisGroup.attr({
      transform: "translate("+(that.yAxisWidth + that.config.margin)+" 0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      transform: "translate(0 "+(that.height - that.config.margin - that.xAxisHeight)+")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.svg.selectAll("rect.data").attr({
      fill: that.config.fill,
      stroke: that.config.stroke,
      "stroke-width": that.config.strokeWidth
    }).transition("morph").duration(500).attr({
      x: function(d,i) { return that.xScale(i); },
      width: this.barWidth,
      y: function(d,i) { return that.yScale(d.y); },
      height: function(d,i) { return that.yScale(0) - that.yScale(d.y); },
      rx: this.config.boxRoundness, ry: this.config.boxRoundness
    });
    this.dataGroup.selectAll("text.label").transition("morph").duration(function(d,i) {
      return (d3.select(this).attr("x") ? 500 : 0);
    }).attr({
      x: function(d,i) { return that.xScale(i) + that.barWidth/2; },
      y: function(d,i) { return that.yScale(d.y) - that.config.fontSize * 0.38; },
      "text-anchor": "middle",
      display: this.config.labelShow ? "block" : "none"
    }).tween("text", function(d,i) {
      var node = d3.select(this);
      var old = this.py || d.y;
      var cur = d.y;
      this.py = d.y;
      return function(t) {
        var ret = Math.round((cur - old) * t + old);
        node.text(ret + " " + (that.config.unit || ""));
      };
    });
  }
}}});
plotdb.chart.add('Column Chart',{"key":1073,"name":"Column Chart","owner":4,"theme":null,"parent":null,"description":"best for accurately comparison and estimate the ratio in time series data. also useful in showing distribution / frequency data, with histogram.","basetype":["1"],"visualencoding":["3"],"category":["5"],"tags":["bar","compare","column","basic","histogram"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-05-22T17:10:50.000Z","modifiedtime":"2017-05-25T20:39:02.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"X axis","type":["Order"],"fields":[],"require":true,"fieldName":null},"value":{"desc":"Y axis","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"fill":{"name":"Bar Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e03f0e","default":"#e03f0e","category":"Global Settings"},"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["None","Ascending","Descending"],"default":""}],"value":false,"default":false,"category":"Value","rebindOnChange":true},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Global Settings"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(14 + Math.round(Math.random() * 4));
    var value = [{name: "value", data: list.map(function(d,i) { return Math.random(); })}];
    var order = [{name: "order", data: list}];
    return {value: value, order: order};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "Y axis" },
    order: { type: [plotdb.Order], require: true, desc: "X axis" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    boxRoundness: {},
    labelShow: {},
    fill: { name: "Bar Color" },
    sort: { type: [plotdb.Choice(["None","Ascending","Descending"])], default: false, rebindOnChange: true },
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickDirection: {},
    xAxisStroke: {},
    xAxisTickCount: {default: 0},
    xAxisHandleOverlap: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.order);
      popup.select(".value").text(parseInt(d.value*100)/100);
    });
    this.grid = plotd3.rwd.grid();
  },
  parse: function() {
    plotdb.Order.sort(this.data, "order");
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.xticklen = d3.max(this.data.map(function(d,i) { return ("" + (d.order || "")).length; }));
    this.valueRange = d3.extent(this.data.map(function(d,i) { return d.value; }));
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]++;
    this.data.forEach(function(d,i) { d.idx = i; });
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("rect.data").data(this.data, function(d,i) { return d.order; });
    sel.exit().attr({class: "", opacity:1}).transition("remove").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("rect").attr({class: "data", opacity: 0});
    if(this.config.popupShow) this.popup.nodes(sel);
    sel = this.svg.selectAll("text.label").data(this.data, function(d,i) { return d.order; });
    sel.exit().attr({class: "", opacity: 1}).transition("remove").duration(500).attr({opacity: 0}).remove();
    sel = sel.enter().append("text").attr({class: "label", opacity: 0});
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    if(this.config.sort != "None" ) {
      this.data.sort(function(a,b) {
        if(that.config.sort == "Descending") return b.value - a.value;
        else if(that.config.sort == "Ascending") return a.value - b.value;
        return a.idx - b.idx;
      });
    }
    this.svg.selectAll("g.tick text.label").attr({
      "font-size": this.config.fontSize,
      "font-family": this.config.fontFamily
    }).text(function(d,i) { return d.value; });
    this.popup.fontSize(this.config.fontSize);
    this.orders = this.data.map(function(d,i) { return d.order; });
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.padding = (width < 480 ? this.config.padding * 0.6 : this.config.padding);
    this.yScale = d3.scale.linear().domain([0, this.valueRange[1]])
      .range([height - this.config.margin, this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .labelPosition(this.config.yAxisLabelPosition)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .tickValues(this.yScale.ticks(this.config.yAxisTickCount))
      .tickFormat(function(d,i) { return d; })
      .fontSize(this.config.fontSize);
    this.yAxis.label(this.config.yAxisLabel || "");
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);

    var step = (width - this.config.margin * 2 - this.yAxisWidth) / (this.data.length || 1);
    var rate = this.padding / step;
    if(rate > 1) rate = 1;
    this.xScale = d3.scale.ordinal().domain(this.orders)
      .rangeBands([this.config.margin + this.yAxisWidth, width - this.config.margin],rate,rate);
    var barWidth = this.xScale.rangeBand();
    if(barWidth<1) {
      rate = (barWidth - 1)/step;
      if(rate > 1) rate = 1;
      this.xScale.rangeBands([this.config.margin + this.yAxisWidth, width - this.config.margin],rate,rate);
    }
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAXisTickDirection)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([height - this.config.margin - this.xAxisHeight - 1, this.config.margin + (this.config.labelShow ? this.config.fontSize * 1.5 : 0)]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    var w = this.xScale.rangeBand();
    if( w <= this.xticklen * this.config.fontSize ) this.overlap = true; else this.overlap = false;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.svg.selectAll("text.label").attr({
      x: function(d,i) { return that.xScale(d.order) + w/2; },
      y: function(d,i) { return that.yScale(d.value) - that.config.fontSize * 0.5; },
      fill: this.config.textFill,
      opacity: (this.config.labelShow ? 1 : 0),
      "text-anchor": "middle"
    }).style({
      display: (this.config.labelShow ? "block" : "none")
    }).text(function(d,i) { return Math.round(d.value*100)/100; });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.yAxisGroup.attr({
      transform: "translate("+(that.yAxisWidth + that.config.margin)+" 0)",
      display: this.config.yAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.yAxisShowDomain ? "block" : "none"
    });
    this.xAxisGroup.attr({
      transform: "translate(0 "+(that.height-that.config.margin-that.xAxisHeight)+")",
      display: this.config.xAxisShow ? "block" : "none"
    }).select(".domain").attr({
      display: this.config.xAxisShowDomain ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.svg.selectAll("rect.data").each(function(d,i) {
      var node = d3.select(this);
      if(!this.inited) {
        node.attr({
          x: function(d,i) { return that.xScale(d.order); },
          width: w,
          y: that.yScale(0),
          height: 0,
          fill: that.config.fill
        });
      } 
      node = node.transition().duration(500);
      node.attr({
        x: function(d,i) { return that.xScale(d.order); },
        width: w,
        y: function(d,i) { return that.yScale(d.value); },
        height: function(d,i) { return that.yScale(0) - that.yScale(d.value); },
        fill: that.config.fill,
        rx: that.config.boxRoundness,
        ry: that.config.boxRoundness,
        opacity: 1
      });
      this.inited = true;
    });
  }
}}});
plotdb.chart.add('Ternary Plot',{"key":2013,"name":"Ternary Plot","owner":4,"theme":null,"parent":null,"description":"ternary plot is useful when we want to visualize 3 dimensional data that sum up to a constant. For example, we can define one's characteristic with  courage, wisdom and strength, summing up them to 100%, and use ternary plot to identify charisma of characters.","basetype":["18"],"visualencoding":["1"],"category":["5"],"tags":["attribute","character"],"likes":0,"searchable":true,"dimlen":4,"createdtime":"2016-07-24T00:32:02.000Z","modifiedtime":"2017-01-28T06:05:39.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":29,"type":"css","lines":3,"content":"circle.data {\n  fill: #fff;\n}"},"assets":[],"dimension":{"name":{"decs":"name","type":["String"],"fields":[],"require":false,"fieldName":null},"value1":{"desc":"","type":["Number"],"fields":[{"name":"zymotic rate(‰)","dataset":null,"datatype":"Number","location":"sample","datasetname":"Crimean War 1854"}],"require":true,"fieldName":"zymotic rate(‰)"},"value2":{"desc":"","type":["Number"],"fields":[{"name":"wound rate(‰)","dataset":null,"datatype":"Number","location":"sample","datasetname":"Crimean War 1854"}],"require":true,"fieldName":"wound rate(‰)"},"value3":{"desc":"","type":["Number"],"fields":[{"name":"other rate(‰)","dataset":null,"datatype":"Number","location":"sample","datasetname":"Crimean War 1854"}],"require":true,"fieldName":"other rate(‰)"}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#ffc5c5"},{"hex":"#8aff8a"},{"hex":"#9393ff"}]},"default":{"colors":[{"hex":"#f00"},{"hex":"#0f0"},{"hex":"#00f"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"16","default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"value1Label":{"name":"Value 1 Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","extend":"xAxisLabel","default":"","category":"X Axis"},"value2Label":{"name":"Value 2 Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","extend":"xAxisLabel","default":"","category":"X Axis"},"value3Label":{"name":"Value 3 Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","extend":"xAxisLabel","default":"","category":"X Axis"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"1 0","default":"1 0","category":"Grid"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Grid"},"gridFrameStroke":{"name":"Frame Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Grid"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"1","default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"3","default":"1","category":"Dot"},"gridFrameStrokeWidth":{"name":"Frame Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"3","default":3,"category":"Grid"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10);
    return {
      value1: [{name: "Value1", data: list.map(function(d,i) { return Math.round(100*Math.random()); })}],
      value2: [{name: "Value2", data: list.map(function(d,i) { return Math.round(100*Math.random()); })}],
      value3: [{name: "Value3", data: list.map(function(d,i) { return Math.round(100*Math.random()); })}],
      name: [{name: "Name",     data: list.map(function(d,i) { return plotdb.data.sample.name.get(i); })}]
    };
  },
  dimension: {
    value1: { type: [plotdb.Number], require: true, desc: "" },
    value2: { type: [plotdb.Number], require: true, desc: "" },
    value3: { type: [plotdb.Number], require: true, desc: "" },
    name: { type: [plotdb.String], require: false, decs: "name" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    margin: {},
    fontSize: {},
    nodeSize: {default: 12},
    nodeStrokeWidth: {},
    gridShow: {},
    gridBackground: {default: "#fff"},
    gridStroke: {default: "#ccc"},
    gridStrokeWidth: {default: 1},
    gridDashArray: {default: "1 0"},
    gridFrameStroke: {default: "#000"},
    gridFrameStrokeWidth: {default: 3},
    palette: {default: {colors:[{hex:"#f00"},{hex:"#0f0"},{hex:"#00f"}]}},
    value1Label: { name: "Value 1 Label", extend: "xAxisLabel" },
    value2Label: { name: "Value 2 Label", extend: "xAxisLabel" },
    value3Label: { name: "Value 3 Label", extend: "xAxisLabel" },
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.frame = this.gridGroup.append("path").attr({class: "frame"});
    this.tooltip = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".value").text((d.name ? d.name + " / " : "") + [d.value1,d.value2,d.value3].join(" / "));
    });
    this.gridGroup.append("text").attr({class: "value1"});
    this.gridGroup.append("text").attr({class: "value2"});
    this.gridGroup.append("text").attr({class: "value3"});
  },
  calc: function(v) {
    var SQRT32 = Math.sqrt(3)/2;
    return [
      0.5 * (2 * v[1] + v[2]) / (v[0] + v[1] + v[2]),
      SQRT32 * v[2] / (v[0] + v[1] + v[2])
    ];
  },
  parse: function() {
    var that = this;
    var SQRT32 = Math.sqrt(3)/2;
    this.data.map(function(d,i) {
      if(!d.value1) d.value1 = 0;
      if(!d.value2) d.value2 = 0;
      if(!d.value3) d.value3 = 0;
      d.sum = d.value1 + d.value2 + d.value3;
      if(d.sum==0) d.value1 = d.sum = 1;
      d.values = [d.value1, d.value2, d.value3].map(function(v,i) { return v/d.sum; });
      d.coord = that.calc(d.values);
    });
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("circle.data").data(this.data);
    sel.exit().remove();
    sel = sel.enter().append("circle").attr({class: "data"});
    if(this.config.popupShow) this.tooltip.nodes(sel);
    this.ticks = d3.range(4).map(function(d,i) { return (d/5) + (1/5); });
    ["value1","value2","value3"].map(function(name) {
      sel = that.gridGroup.selectAll("line.grid." + name).data(that.ticks);
      sel.exit().remove();
      sel.enter().append("line").attr({class: "grid " + name});
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    var SQRT32 = Math.sqrt(3)/2;
    if(width > height - this.config.fontSize * 4) {
      this.size = (height - this.config.margin * 2 - this.config.fontSize * 4) / SQRT32;
    } else {
      this.size = (width - this.config.margin * 2);
    }
    this.xMin = (this.width - this.size)/2;
    this.xMax = (this.width + this.size)/2;
    this.yMin = (this.height - this.size * SQRT32)/2;
    this.yMax = (this.height + this.size * SQRT32)/2;
    this.tooltip.fontSize(this.config.fontSize);
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.xScale = d3.scale.linear()
      .domain([0,1])
      .range([this.xMin, this.xMax]);
    this.yScale = d3.scale.linear()
      .domain([0,SQRT32])
      .range([this.yMax, this.yMin]);
  },
  render: function() {
    var that = this,sel;
    var SQRT32 = Math.sqrt(3)/2;
    var c1 = d3.rgb((this.config.palette.colors[0] || {}).hex || "#f00");
    var c2 = d3.rgb((this.config.palette.colors[1] || {}).hex || "#0f0");
    var c3 = d3.rgb((this.config.palette.colors[2] || {}).hex || "#00f");
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.frame.attr({
      d: [
        "M", this.xMin, this.yMax,
        "L", this.xMax, this.yMax,
        "L", (this.width/2), this.yMin,
        "Z"
      ].join(" "),
      fill: this.config.gridBackground,
      stroke: this.config.gridFrameStroke,
      "stroke-width": this.config.gridFrameStrokeWidth
    });
    sel = this.dataGroup;
    if(this.inited) sel = sel.transition("morph").duration(500);
    sel.selectAll("circle.data").attr({
      cx: function(d,i) { return that.xScale(d.coord[0]); },
      cy: function(d,i) { return that.yScale(d.coord[1]); },
      r: this.config.nodeSize/2,
      fill: function(d,i) {
        var c = ["r","g","b"].map(function(v,i) {
          return parseInt(c1[v] * d.values[i] + c2[v] * d.values[i] + c3[v] * d.values[i]);
        });
        return d3.rgb(c[0], c[1], c[2]).toString()
      },
      stroke: function(d,i) {
        var c = ["r","g","b"].map(function(v,i) {
          return parseInt(c1[v] * d.values[i] + c2[v] * d.values[i] + c3[v] * d.values[i]);
        });
        return d3.rgb(c[0], c[1], c[2]).toString()
      },
      "stroke-width": this.config.nodeStrokeWidth
    });
    ["value1","value2","value3"].map(function(name,i) {
      that.gridGroup.selectAll("line.grid."+name).each(function(d) {
        var p1 = [1,0], p2 = [0,1],v = (d/(1-d));
        p1.splice(i,0,v);
        p2.splice(i,0,v);
        p1 = that.calc(p1);
        p2 = that.calc(p2);
        d3.select(this).attr({
          x1: that.xScale(p1[0]), x2: that.xScale(p2[0]),
          y1: that.yScale(p1[1]), y2: that.yScale(p2[1]),
          stroke: that.config.gridStroke,
          "stroke-width": that.config.gridStrokeWidth,
          "stroke-dasharray": that.config.gridDashArray,
          display: that.config.gridShow ? "block" : "none"
        });
      });
    });
    this.gridGroup.selectAll("text").attr("font-size", this.config.fontSize);
    this.gridGroup.select("text.value1").attr({
      x: this.xMin, y: this.yMax, dy: "1.3em",
      fill: c1.darker().toString()
    }).text(this.config.value1Label || this.dimension.value1.fieldName || " ");
    this.gridGroup.select("text.value2").attr({
      x: this.xMax, y: this.yMax, dy: "1.3em", "text-anchor": "end",
      fill: c2.darker().toString()
    }).text(this.config.value2Label || this.dimension.value2.fieldName || " ");
    this.gridGroup.select("text.value3").attr({
      x: this.width/2, y: this.yMin, dy: "-0.5em", "text-anchor": "middle",
      fill: c3.darker().toString()
    }).text(this.config.value3Label || this.dimension.value3.fieldName || " ");
    this.inited = true;
  }
}}});
plotdb.chart.add('Block Chart',{"key":2039,"name":"Block Chart","owner":4,"theme":null,"parent":null,"description":"show percentage with small rectangular blocks.","basetype":["99"],"visualencoding":["6"],"category":["1"],"tags":["block","percent","proportion"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-08-18T07:34:22.000Z","modifiedtime":"2016-12-13T06:53:08.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"","type":["String"],"fields":[],"require":true},"value":{"desc":"","type":["Number"],"fields":[],"require":true}},"config":{"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"10","default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#3a66cb","idx":0},{"hex":"#0ebeba","idx":1},{"hex":"#fee476","idx":2},{"hex":"#feae01","idx":3},{"hex":"#e62b0f","idx":4}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":0,"category":"Global Settings"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(5);
    return {
      name: [{name: "Name", data: list.map(function(d,i) { return plotdb.data.sample.fruit.get(i); })}],
      value: [{name: "Value", data: list.map(function(d,i) { return Math.random()*10 + d + 1; })}]
    };
  },
  dimension: {
    name:  { type: [plotdb.String], require: true, desc: "" },
    value: { type: [plotdb.Number], require: true, desc: "" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    boxRoundness: {},
    legendLabel: {},
    legendShow: {},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.randID = "plotdb-" + (Math.random() * 1000000) + "-";
    this.svg = d3.select(this.root).append("svg");
    this.defs = this.svg.append("defs");
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.invert = this.defs.append("filter").attr({
      id: this.randID + "invert"
    }).append("feColorMatrix").attr({
      in: "SourceGraphic",
      type: "matrix",
      values: "-1 0 0 0 1  0 -1 0 0 1  0 0 -1 0 1  0 0 0 1 0"
    });
    var img = new Image();
    img.onload = function() {
      that.iconWidth = this.width;
      that.iconHeight = this.height;
      that.ratio = that.iconHeight / that.iconWidth / 2.2;
      that.defs.append("mask").attr({
        id: that.randID + "mask",
        maskUnits: "objectBoundingBox",
        maskContentUnits: "objectBoundingBox"      
      }).append("image").attr({
        "xlink:href": that.assets["man.svg"].datauri,
        x: 0, y: 0, width: 1, height: 1,//that.iconHeight / that.iconWidth,
        filter: "url(#"+ (that.randID + "invert") +")"
      });
      that.render();
    };
    this.popup = plotd3.html.popup(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.name);
      popup.select(".value").text(Math.round(100*that.namemap[d.name]/that.sum) + "%");
    });
    this.ratio = 1;
    //img.src = this.assets["man.svg"].datauri;
  },
  parse: function() {
    var that = this;
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = i + 1; });
    this.values = this.data.map(function(d,i) { return d.value; });
    this.names = this.data.map(function(d,i) { return d.name; });
    this.namemap = {};
    for(i=0;i<this.data.length;i++) this.namemap[this.data[i].name] = this.data[i].value;
    this.sum = d3.sum(this.values);
    this.accums = [];
    for(var i=0,sum=0;i<this.values.length - 1;i++) {
     sum += this.values[i];
      this.accums.push(Math.round(120 * sum/this.sum));
    }
    var threshold = d3.scale.threshold()
      .domain(this.accums)
      .range(this.names);
    this.parsed = d3.range(120).map(function(d,i) {
      return {
        name: threshold(d)
      };
    });
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("rect.data").data(this.parsed);
    sel.exit().remove();
    sel = sel.enter().append("rect").attr({class: "data", opacity: 1});
    if(this.config.popupShow) this.popup.nodes(sel);
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.cScale = d3.scale.ordinal()
      .domain(this.names)
      .range(this.config.palette.colors.map(function(d,i) { return d.hex; }));
    this.legend = plotd3.rwd.legend()
      .scale(this.cScale)
      .label(this.config.legendLabel)
      .fontSize(this.config.fontSize)
      .orient("bottom")
      .size([this.width - 2 * this.config.margin, 100]);
    this.legendGroup.call(this.legend).selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
  },
  render: function() {
    var that = this;
    var w,h;
    var cols = 120,padding = this.config.padding;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    for(var wc,hc,p,j,i=120;i>=1;i--) {
      if(parseInt(120/i) != 120/i) continue;
      j = 120/i;
      p = this.config.padding;
      wc = ( this.width - 2 * this.config.margin ) / i - this.config.padding;
      if(wc < 6) {
        wc = 6;
        p = ( this.width - 2 * this.config.margin ) / i - 6;
        if(p<0) p = 0;
      }
      hc = wc * this.ratio;
      if(j * (hc + p) - p < this.height - 2 * this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize: 0)) {
        w = wc;
        h = hc;
        cols = i;
        padding = p;
      }
    }
    var contentH = (120/cols) * (h + padding) - padding;
    var contentW = cols * (w + padding) - padding;
    var legendY = (this.height - this.config.margin - this.legendSize[1]);
    if((this.height + contentH)/2 < legendY) legendY = (this.height + contentH)/2;
    this.legendGroup.attr({
      transform: [
        "translate(",
        (this.width - this.legendSize[0])/2,
        legendY,
        ")"
      ].join(" "),
      display: (this.config.legendShow ? "block" : "none")
    });
    this.dataGroup.attr({
      transform: ["translate(",
        (this.width - contentW)/2,
        (this.height - contentH - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0))/2,
        ")"
      ].join(" ")
    });
    var node = this.dataGroup.selectAll("rect.data");
    node.transition("opacity").attr({
      opacity: function(d,i) {
        return (!that.activeGroup || that.activeGroup == d.name ? 1 : 0.1);
      }
    });
    node.attr({
      mask: function(d,i) { return "url(#" + that.randID + "mask)" },
      width: w,
      height: h,
      x: function(d,i) { return (w + padding) * (i % cols); },
      y: function(d,i) { return (h + padding) * parseInt(i / cols); },
    });
    if(this.inited) node = node.transition().duration(500);
    node.attr({
      rx: that.config.boxRoundness,
      ry: that.config.boxRoundness,
      fill: function(d,i) {
        return that.cScale(d.name);
      }
    });
    this.inited = true;
  }
}}});
plotdb.chart.add('Area Chart',{"key":2089,"name":"Area Chart","owner":4,"theme":null,"parent":null,"description":"area chart based on line chart, and fill the area between axis and the line. commonly used for cumulative  data or for stacking multiple data series, since line chart can hardly be stacked.","basetype":["4"],"visualencoding":["6"],"category":["5"],"tags":["area"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2016-09-18T08:56:33.000Z","modifiedtime":"2017-04-06T20:52:18.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"x coordinate","name":"X","type":["Order"],"fields":[],"require":false,"fieldName":null},"value":{"desc":"y coordinate","name":"Y","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"fill":{"name":"Fill","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#e03f0e","default":"#e03f0e","category":"Global Settings"},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#8c0000","default":"#8c0000","category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings","rebindOnChange":false},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"lineSmoothing":{"name":"Line Smoothing","type":[{"name":"Choice","level":20,"values":["linear","step","step-before","step-after","basis","bundle","cardinal","monotone"],"default":""}],"value":"cardinal","default":"cardinal","category":"Line"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(100%,100%,100%,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"animationTiming":{"desc":"timing function, which controls animation acceleration","i18n":{"zh":{"desc":"用來設定動畫的速度變化模式","name":"轉場效果"}},"name":"Animation Timing","type":[{"name":"Choice","level":20,"values":["linear","quad","quad-in","quad-out","quad-in-out","elastic","elastic-in","elastic-out","elastic-in-out","bounce","bounce-in","bounce-out","bounce-in-out"],"default":""}],"value":"linear","default":"linear","category":"Animation"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"animationDuration":{"desc":"Animation Duration, in millisecond (e.g., 500)","i18n":{"zh":{"desc":"用來設定動畫長度，以千分之一秒為單位","name":"動畫長度"}},"name":"Animation Duration","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":500,"default":500,"category":"Animation"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(10);
    return {
      order: [{name: "Order", data: list.map(function(d,i) { return i; })}],
      value: [{name: "Value", data: list.map(function(d,i) {
        return 10 + Math.random() * 20 + Math.round(Math.sin(i/100) * 10 - Math.sin(i/300)*10 + Math.sin(i*i/200)*5);
      })}]
    };
  },
  dimension: {
    order: { name: "X", type: [plotdb.Order], require: false, desc: "x coordinate" },
    value: { name: "Y", type: [plotdb.Number], require: true, desc: "y coordinate" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    padding: { name: "Padding", type: [plotdb.Number], default: 10, rebindOnChange: false },
    margin: { },
    lineSmoothing: {},
    fill: {},
    stroke: {default: "#8c0000"},
    strokeWidth: {},
    fontSize: { },
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisShowDomain: {default: true},
    animationDuration: {},
    animationTiming: {},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    gridBackground: {},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.dataGroup = this.svg.append("g").attr({class: "data-group"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.area = this.dataGroup.append("path").attr({class: "data area"});
    this.line = this.dataGroup.append("path").attr({class: "data line connect"});
    this.grid = plotd3.rwd.grid();
    this.areaBuilder = d3.svg.area()
      .x(function(d,i) { return that.xScale(d.order); })
      .y0(function(d,i) { return that.yScale(0); })
      .y1(function(d,i) { return that.yScale(d.value); });
    this.lineBuilder = d3.svg.area()
      .x(function(d,i) { return that.xScale(d.order); })
      .y(function(d,i) { return that.yScale(d.value); });
  },
  parse: function() {
    var that = this;
    plotdb.Order.sort(this.data, "order");
    this.valueRange = d3.extent(this.data, function(d,i) { return d.value; });
    this.orders = this.data.map(function(d,i) { return typeof(d.order.raw)!="undefined" ? d.order.raw : d.order; });
    if(this.valueRange[0]>0) this.valueRange[0] = 0;
    if(this.valueRange[0] == this.valueRange[1]) this.valueRange[1]++;
  },
  bind: function() {
    var that = this;
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.areaBuilder.interpolate(this.config.lineSmoothing);
    this.lineBuilder.interpolate(this.config.lineSmoothing);
    this.yScale = d3.scale.linear()
      .domain(this.valueRange)
      .range([this.height - this.config.margin, this.config.margin]);
    this.yAxis = plotd3.rwd.axis()
      .scale(this.yScale)
      .orient("left")
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    this.xScale = d3.scale.ordinal()
      .domain(this.orders)
      .rangePoints([this.config.margin + this.yAxisWidth, this.width - this.config.margin]);
    this.xAxis = plotd3.rwd.axis()
      .scale(this.xScale)
      .orient("bottom")
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .ticks(this.config.xAxisTickCount)
      .tickPadding(this.config.xAxisTickPadding)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset() : 0);
    this.yScale.range([this.height - this.config.margin - this.xAxisHeight, this.config.margin]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .background(this.config.gridBackground)
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this,sel;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.xAxisGroup.attr({
      "transform": "translate(0," + this.yScale.range()[0] + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      "transform": "translate(" + this.xScale.range()[0] + ",0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.area.attr({
      fill: this.config.fill
    });
    this.line.attr({
      fill: "none",
      stroke: this.config.stroke,
      "stroke-width": this.config.strokeWidth
    });
    this.area.transition()
      .duration(this.area.attr("d") ? this.config.animationDuration : 0)
      .ease(this.config.animationTiming)
      .attr("d", this.areaBuilder(this.data));
    this.line.transition()
      .duration(this.line.attr("d") ? this.config.animationDuration : 0)
      .ease(this.config.animationTiming)
      .attr("d", this.lineBuilder(this.data));
  }
}}});
plotdb.chart.add('Line Chart',{"key":953,"name":"Line Chart","owner":4,"theme":null,"parent":null,"description":"The standard line chart. support overlapped multiple line. best for visualizing trend.","basetype":["2"],"visualencoding":["1","4"],"category":["4","5"],"tags":["line","trend","basic"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-02-16T05:40:31.000Z","modifiedtime":"2017-04-28T05:23:11.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"x axis index","type":["Order"],"fields":[],"require":true,"fieldName":null},"value":{"desc":"y axis value","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"padding":{"name":"Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"gridShow":{"name":"Show Grid","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Grid"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":12,"default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"gridStroke":{"name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#cccccc","default":"#ccc","category":"Grid"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"category":"Legend"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"gridDashArray":{"desc":"SVG style dash array. '2 4' means 2px line and 4px space.","name":"Dash Style","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"2 4","default":"2 4","category":"Grid"},"gridBackground":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"rgba(100%,100%,100%,0)","default":"rgba(255,255,255,0)","category":"Grid"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":6,"default":6,"category":"Y Axis"},"gridStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1,"category":"Grid"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Dot"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisZeroBaseline":{"desc":"y Axis starts with zero","name":"Zero Baseline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis","rebindOnChange":true},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisLabelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","center"],"default":""}],"value":"center","default":"center","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var src = plotdb.data.sample.crimeanWar;
    return {
      value: [src["zymotic rate(‰)"], src["wound rate(‰)"], src["other rate(‰)"]],
      order: [src.month]
    };
  },
  dimension: {
    value: { type: [plotdb.Number], multiple: true, require: true, desc: "y axis value" },
    order: { type: [plotdb.Order], require: true, desc: "x axis index" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    padding: {},
    palette: {},
    legendShow: {},
    legendLabel: {},
    nodeSize: {default: 12},
    nodeShow: {},
    nodeStrokeWidth: {default: 2},
    gridStroke: {},
    gridStrokeWidth: {},
    gridDashArray: {},
    gridShow: {},
    gridBackground: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: true},
    yAxisTickCount: {},
    yAxisLabelPosition: {},
    yAxisStroke: {},
    yAxisZeroBaseline: {},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: true},
    xAxisTickCount: {default: 0},
    xAxisStroke: {},
    xAxisLabelPosition: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    popupShow: {},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.popup = plotd3.html.tooltip(this.root);
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.gridGroup = this.svg.append("g").attr({class: "grid-group"});
    this.grid = plotd3.rwd.grid();
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.svg.on("mousemove", function() {
      if(!that.config.popupShow) return;
      var box = this.getBoundingClientRect();
      var x = d3.event.clientX - box.left;
      var y = d3.event.clientY - box.top;
      if(y>=that.height - that.xAxisHeight - that.legendSize[1] - that.config.margin) return;
      var iy = that.yScale.invert(y);
      var ix = parseInt(Math.round(that.xScale.invert(x)));
      var min = -1;
      var target = null;
      for(var i = 0; i < that.parsed.dots.length; i++) {
        ds = that.parsed.dots[i];
        for(var v,j = 0; j < ds.data.length; j++) {
          dot = ds.data[j];
          dot.active = false;
          if(dot.order != ix) continue;
          v = Math.abs(dot.value - iy);
          if(min<0 || v < min) {
            min = v;
            target = dot;
          }
        }
      }
      if(target) target.active = true;
      that.target = target;
      if(that.target) {
        var x = that.xScale(that.target.order);
        var y = that.yScale(that.target.value);
        var direction = "left";
        var svgbox = that.svg[0][0].getBoundingClientRect();
        if( x < that.width/2 ) direction = "right";
        that.popup.direction(direction);
        that.popup.show(x, y);
        that.popup.call(function() {
          var node = d3.select(this);
          node.select(".title").text(that.parsed.group[that.target.group].name);
          node.select(".value").text(that.parsed.order[that.target.order].value + ": " + that.target.value);
        });
      }
      that.render();
    });
  },
  parse: function() {
    var that = this;
    var p = this.parsed = {
      dots: [],
      lines: [],
      order: [],
      group: [],
      values: []
    };
    var list = null;
    if(this.data.length) {
      plotdb.Order.sort(this.data, "order", true);
      p.order = this.data.map(function(it) { return {
        idx: 0,
        value: it.order,
        parsed: it.order
      };});
      p.order.forEach(function(d,i) { d.idx = i; });
      p.order = p.order.filter(function(it) { return it.value != null && typeof(it.value) != "undefined"; });
      for(var j=0;j < this.data[0].value.length; j++) {
        p.group.push({
          name: (this.dimension.value && this.dimension.value.fieldName
                 ?(this.dimension.value.fieldName[j] || j):j),
          idx: j
        }); /* name: should fetch from field meta */
        p.dots.push(dots = {group: j, data: []});
        for(var i=0;i<this.data.length;i++) {
          /* order of "order" might be re-arranged so we have to lookup again */
          var orderIdx = (p.order.filter(function(it) { return it.value == that.data[i].order; })[0] || {idx: -1}).idx;
          dots.data.push({
            group: j,
            value: this.data[i].value[j],
            order: orderIdx
          });
        }
        //dots.data.sort(function(a,b) { return b.order - a.order; });
        p.lines.push({idx: j, data: d3.pairs(dots.data)});
        p.values = p.values.concat(dots.data.map(function(it) { return it.value;}));
        console.log(p.values);
      }
    }
  },
  bind: function() {
    var that = this,sel;
    sel = this.svg.selectAll("g.series.line").data(this.parsed.lines);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "series line"});
    this.svg.selectAll("g.series.line").each(function(it) {
      var sel = d3.select(this).selectAll("line.connect").data(it.data);
      sel.exit().remove();
      sel.enter().append("line").attr({class: "connect"});
    });
    this.lines = d3.select(this.root).selectAll("line.connect");
    sel = this.svg.selectAll("g.series.dot").data(this.parsed.dots);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "series dot"});
    this.svg.selectAll("g.series.dot").each(function(it) {
      var sel = d3.select(this).selectAll("circle.node").data(it.data);
      sel.exit().remove();
      sel.enter().append("circle").attr({class: "node"})
    });
    this.dots = d3.select(this.root).selectAll("circle.node");
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.circleSize = [this.config.nodeSize, this.config.nodeStrokeWidth];
    if(this.width < 480 || this.height < 320) {
      if(this.circleSize[0] > 8) this.circleSize[0] = 8;
      if(this.circleSize[1] > 4) this.circleSize[1] = 4;
    }
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend().orient("bottom").scale(this.cScale)
      .fontSize(this.config.fontSize)
      .label(this.config.legendLabel)
      .size([this.width - 2 * this.config.margin, 100])
      .tickValues(this.parsed.group.map(function(it){ return it.name; }));
    this.legendGroup.call(this.legend);
    this.legendSize = this.config.legendShow ? this.legend.offset() : [0,0];
    this.legendGroup.selectAll(".legend")
      .on("mouseover", function(it) { that.activeGroup = it; that.render(); })
      .on("mouseout", function(it) { that.activeGroup = null; that.render(); });
    this.popup.fontSize(this.config.fontSize);
    var ymin = d3.min(this.parsed.values);
    if(this.config.yAxisZeroBaseline) ymin = 0;
    this.yScale = d3.scale.linear()
      .domain([ymin,d3.max(this.parsed.values)])
      .range([height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0), this.config.margin]);
    this.yAxis = plotd3.rwd.axis()
      .orient("left")
      .scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .labelPosition(this.config.yAxisLabelPosition)
      .ticks(this.config.yAxisTickCount)
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    
    this.xScale = d3.scale.linear()
      .domain(d3.extent(this.parsed.order.map(function(it) { return it.idx; })))
      .range([
        this.config.margin + this.yAxisWidth + this.config.padding,
        width - this.config.margin - this.config.padding
      ]);
    this.xAxis = plotd3.rwd.axis()
      .orient("bottom")
      .scale(this.xScale)
      .label(this.config.xAxisLabel || "")
      .labelPosition(this.config.xAxisLabelPosition)
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .tickDirection(this.config.xAxisTickDirection)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .tickFormat(function(it) {
        if(!that.parsed.order[it]) return "";
        return that.parsed.order[it].value;
      })
      .fontSize(this.config.fontSize);
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset(): 0);
    this.yScale
      .range([
        height - this.config.margin - this.xAxisHeight - this.legendSize[1] - (this.config.legendShow ? this.config.fontSize : 0),
        this.config.margin
      ]);
    this.yAxisGroup.call(this.yAxis);
    this.grid.scale(this.yScale)
      .stroke(this.config.gridStroke)
      .strokeWidth(this.config.gridStrokeWidth)
      .size(this.width - 2 * this.config.margin - this.yAxisWidth)
      .strokeDashArray(this.config.gridDashArray)
      .tickValues(this.yAxis.tickValues())
      .background(this.config.gridBackground)
      .orient("horizontal");
    this.gridGroup.call(this.grid);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.gridGroup.attr({
      transform: [
        "translate(",
        this.config.margin + this.yAxisWidth,
        0,
        ")"
      ].join(" "),
      display: (this.config.gridShow ? "block" : "none")
    });
    this.xAxisGroup.selectAll(".domain").attr({
      display: (this.config.xAxisShowDomain ? "block" : "none"),
      d: ["M",
        this.config.margin + this.yAxisWidth,
        this.config.xAxisTickSizeOuter,
        "V0",
        "H",
        this.width - this.config.margin,
        "V",
        this.config.xAxisTickSizeOuter
      ].join(" ")
    });
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.legendGroup.attr({
      transform: [
        "translate(",
        (this.width - this.legendSize[0])/2,
        (this.height - this.config.margin - this.legendSize[1]),
        ")"
      ].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      "transform": "translate(0," + this.yScale.range()[0] + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      "transform": "translate(" + (this.config.margin + this.yAxisWidth) + ",0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.lines.transition("morph").duration(500).attr({
      x1: function(it) { return that.xScale(it[0].order); },
      x2: function(it) { return that.xScale(it[1].order); },
      y1: function(it) { return that.yScale(it[0].value); },
      y2: function(it) { return that.yScale(it[1].value); },
      "stroke-width": 2
    });
    this.lines.style({
      stroke: function(it) {
        if(isNaN(it[0].value) || isNaN(it[1].value)) return 0;
        return that.cScale(that.parsed.group[it[0].group].name);
      }
    });
    this.dots.transition("morph").duration(500).attr({
      cx: function(it) { return that.xScale(it.order); },
      cy: function(it) { return that.yScale(it.value); },
      r: this.circleSize[0]/2,
      "stroke-width": this.circleSize[1],
      display: function(d,i) {
        if(isNaN(d.value)) return "none";
        return (that.config.nodeShow ? "block" : "none");
      }
    });
    this.dots.filter(function(it) { return it.active; }).attr({
      stroke: function(it) { return that.cScale(that.parsed.group[it.group].name); },
      fill: "#ffffff"
    });
    this.dots.filter(function(it) { return !it.active; }).attr({
      fill: function(it) { return that.cScale(that.parsed.group[it.group].name); },
      stroke: "#ffffff"
    });
    this.lines.transition("opacity").duration(500).attr({
      opacity: function(it) { return (that.activeGroup? (that.activeGroup == that.parsed.group[it[0].group].name ? 1 : 0.2):1); }
    });
    this.dots.transition("opacity").duration(500).attr({
      opacity: function(it) { return (that.activeGroup? (that.activeGroup == that.parsed.group[it.group].name ? 1 : 0.2):1); }
    });
  }
}}});
plotdb.chart.add('Bump Chart',{"key":2122,"name":"Bump Chart","owner":4,"theme":null,"parent":953,"description":"bump chart shows rank effectively by  ordering entries by their rank along y axis. it is especially useful when inducing highlight on specific bump line to show its trend of rank change.","basetype":["2"],"visualencoding":["1","4"],"category":["4","5"],"tags":["line","trend","basic","rank"],"likes":1,"searchable":true,"dimlen":2,"createdtime":"2016-09-28T04:44:20.000Z","modifiedtime":"2017-04-11T09:47:25.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"order":{"desc":"order in x axis","name":"X","type":["Order"],"fields":[],"require":true,"fieldName":null},"values":{"desc":"will be converted to rank in Y","name":"Y","type":["Number"],"fields":[],"require":true,"multiple":true,"fieldName":[]}},"config":{"sort":{"name":"Sort data","type":[{"name":"Choice","level":20,"values":["Ascending","Descending","None"],"default":""}],"value":"Descending","default":"Descending","category":"Value","rebindOnChange":true},"margin":{"max":20,"min":0,"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"nodeFill":{"desc":"fill Dot with this color","name":"Fill Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Dot"},"nodeShow":{"name":"Show Data Dot","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Dot"},"nodeSize":{"name":"Dot Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":12,"default":12,"category":"Dot"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"xAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"X Axis"},"yAxisShow":{"name":"Show Axis","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Y Axis"},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"EditableChoice","level":20,"values":["Arial","Helvetica","Tahoma","Consolas","Century Gothic","Courier New"],"default":""}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"xAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"X Axis"},"yAxisLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Y Axis"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"xAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"X Axis"},"yAxisStroke":{"name":"Stroke Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000","category":"Y Axis"},"xAxisTickCount":{"desc":"Hint on number of tick. Actual number will be decided by program","name":"Tick Count","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"nodeStrokeWidth":{"name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Dot"},"xAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"X Axis"},"yAxisShowDomain":{"name":"Show Basline","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Y Axis"},"xAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"yAxisTickPadding":{"name":"Tick Padding","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"Y Axis"},"connectStrokeWidth":{"desc":"Stroke size between connection path of data node","name":"Stroke width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Line"},"xAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden","offset"],"default":""}],"value":"hidden","default":"hidden","category":"X Axis"},"xAxisTickDirection":{"name":"Tick Direction","type":[{"name":"Choice","level":20,"values":["vertical","horizontal"],"default":""}],"value":"horizontal","default":"horizontal","category":"X Axis"},"xAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":4,"default":4,"category":"X Axis"},"xAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"X Axis"},"yAxisHandleOverlap":{"desc":"How should overlapped ticks be taken care?","name":"Overlap Ticks","type":[{"name":"Choice","level":20,"values":["none","hidden"],"default":""}],"value":"none","default":"none","category":"Y Axis"},"yAxisTickSizeInner":{"name":"Inner Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"},"yAxisTickSizeOuter":{"name":"Outer Tick Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Y Axis"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":{},"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var count = 12 + Math.round(Math.random() * 2);
    var list = d3.range(count).map(function(d,i) { return d + 1980; });
    return {
      order: [{name: "Year", data: list}],
      values: d3.range(count).map(function(d,i) {
        return {
          name: plotdb.data.sample.country.rand(i),
          data: list.map(function(e,j) { return Math.round( Math.random() * 4 + i); })
        };
      })
    };
  },
  dimension: {
    order: { name: "X", type: [plotdb.Order], require: true, desc: "order in x axis" },
    values: { name: "Y", type: [plotdb.Number], multiple: true, require: true, desc: "will be converted to rank in Y" }
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    palette: {},
    legendShow: {},
    legendLabel: {},
    nodeSize: {default: 12},
    nodeShow: {},
    nodeFill: {default: "#fff"},
    nodeStrokeWidth: {default: 2},
    popupShow: {},
    connectStrokeWidth: {},
    yAxisShow: {},
    yAxisLabel: {},
    yAxisTickSizeInner: {default: 0},
    yAxisTickSizeOuter: {},
    yAxisTickPadding: {},
    yAxisShowDomain: {default: false},
    yAxisStroke: {},
    yAxisHandleOverlap: {default: "none"},
    xAxisShow: {},
    xAxisLabel: {},
    xAxisTickSizeInner: {},
    xAxisTickSizeOuter: {},
    xAxisTickPadding: {},
    xAxisShowDomain: {default: false},
    xAxisStroke: {},
    xAxisHandleOverlap: {},
    xAxisTickDirection: {},
    xAxisTickCount: {default: 0},
    sort: {rebindOnChange: true},
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.legendGroup = this.svg.append("g").attr({class: "legend-group"});
    this.xAxisGroup = this.svg.append("g").attr({class: "axis horizontal"});
    this.yAxisGroup = this.svg.append("g").attr({class: "axis vertical"});
    this.dataGroup = this.svg.append("g").attr({class: "data-groups"});
    this.lineBuilder = d3.svg.line()
      .x(function(d,i) { return that.xScale(d.o) + that.xBand/2;})
      .y(function(d,i) { return that.yScale(d.i) + that.yBand/2;});
    this.tooltip = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.n);
      popup.select(".value").text(d.v + " ( " + d.o +" )");
      that.activeGroup = d.n; that.render();
    }).on("mouseout", function(d,i,popup) {
      that.activeGroup = null; that.render();
    });
  },
  parse: function() {
    var that = this;
    plotdb.Order.sort(this.data, "order");
    this.orders = this.data.map(function(d,i) { return d.order; });
    var order = (this.config.sort == "Ascending" ? 1 : -1);
    this.data.map(function(d,i) {
      d.orders = d.values.map(function(e,j) { return {v: e, i: j}; })
      d.orders.sort(function(a,b) { return order * (b.v - a.v); });
      d.orders.forEach(function(d,i) { d.idx = i; });
      d.orders.sort(function(a,b) { return (a.i - b.i); });
    });
    this.parsed = this.dimension.values.fields.map(function(d,i) {
      return {
        name: that.dimension.values.fieldName[i],
        values: that.data.map(function(e,j) { return {
          n: that.dimension.values.fieldName[i],
          v: e.values[i],
          i: e.orders[i].idx,
          o: e.order
        };})
      };
    });
    this.firstOrders = this.parsed.map(function(d,i) { return {
      name: d.name, order: d.values[0].i
    }; });
    this.firstOrders.sort(function(a,b) { return a.order - b.order; });
  },
  bind: function() {
    var that = this,sel;
    sel = this.dataGroup.selectAll("g.data-group").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "data-group"});
    this.dataGroup.selectAll("g.data-group").each(function(d,i) {
      var node = d3.select(this);
      sel = node.selectAll("path.connect").data([d]);
      sel.exit().remove();
      sel.enter().append("path").attr({class: "connect"});
      sel = node.selectAll("circle.node").data(d.values);
      sel.exit().remove();
      sel = sel.enter().append("circle").attr({class: "node"});
      if(that.config.popupShow) that.tooltip.nodes(sel);
    });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.tooltip.fontSize(this.config.fontSize);
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend().orient("bottom").scale(this.cScale)
      .fontSize(this.config.fontSize)
      .label(this.config.legendLabel)
      .size([this.width - 2 * this.config.margin, 100])
      .tickValues(this.dimension.values.fieldName || []);
    this.legendGroup.call(this.legend);
    this.legendSize = this.config.legendShow ? this.legend.offset() : [0,0];
    this.legendGroup.selectAll(".legend")
      .on("mouseover", function(it) { that.activeGroup = it; that.render(); })
      .on("mouseout", function(it) { that.activeGroup = null; that.render(); });
    this.yScale = d3.scale.ordinal()
      .domain(d3.range(this.dimension.values.fields.length))
      .rangeBands([
        height - this.config.margin - (this.config.legendShow ? this.legendSize[1] + this.config.fontSize : 0),
        this.config.margin
      ]);
    this.yAxis = plotd3.rwd.axis()
      .orient("left")
      .scale(this.yScale)
      .label(this.config.yAxisLabel || "")
      .tickSize(this.config.yAxisTickSizeInner, this.config.yAxisTickSizeOuter)
      .tickPadding(this.config.yAxisTickPadding)
      .handleOverlap(this.config.yAxisHandleOverlap)
      .ticks(0)
      .tickFormat(function(d,i) {
        return that.firstOrders[d].name;   
      }).fontSize(this.config.fontSize);
    this.yAxisGroup.call(this.yAxis);
    this.yAxisWidth = (this.config.yAxisShow ? this.yAxis.offset() : 0);
    this.xScale = d3.scale.ordinal()
      .domain(this.orders)
      .rangeBands([
        this.config.margin + this.yAxisWidth,
        width - this.config.margin
      ], 0.5, 0);
    this.xBand = this.xScale.rangeBand();
    this.xAxis = plotd3.rwd.axis().orient("bottom").scale(this.xScale)
      .fontSize(this.config.fontSize)
      .label(this.config.xAxisLabel || "")
      .tickSize(this.config.xAxisTickSizeInner, this.config.xAxisTickSizeOuter)
      .tickPadding(this.config.xAxisTickPadding)
      .ticks(this.config.xAxisTickCount)
      .handleOverlap(this.config.xAxisHandleOverlap)
      .tickDirection(this.config.xAxisTickDirection)
      .tickFormat(function(it) {
        return it;
      });
    this.xAxisGroup.call(this.xAxis);
    this.xAxisHeight = (this.config.xAxisShow ? this.xAxis.offset(): 0);

    this.yScale.rangeBands([
      height - this.config.margin - this.xAxisHeight
      - (this.config.legendShow ? this.legendSize[1] +this.config.fontSize : 0),
      this.config.margin
    ], 0, 0);
    this.yBand = this.yScale.rangeBand();
    this.yAxisGroup.call(this.yAxis);
  },
  render: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.xAxisGroup.selectAll(".domain").attr({ display: (this.config.xAxisShowDomain ? "block" : "none")});
    this.yAxisGroup.selectAll(".domain").attr({ display: (this.config.yAxisShowDomain ? "block" : "none")});
    this.legendGroup.attr({
      transform: [
        "translate(",
        (this.width - this.legendSize[0])/2,
        (this.height - this.config.margin - this.legendSize[1]),
        ")"
      ].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
    this.xAxisGroup.attr({
      "transform": "translate(0," + (this.yScale.range()[0] + this.yBand) + ")",
      display: this.config.xAxisShow ? "block" : "none"
    });
    this.yAxisGroup.attr({
      "transform": "translate(" + (this.xScale.range()[0]) + ",0)",
      display: this.config.yAxisShow ? "block" : "none"
    });
    this.yAxisGroup.selectAll("path,line").attr({ stroke: that.config.yAxisStroke });
    this.xAxisGroup.selectAll("path,line").attr({ stroke: that.config.xAxisStroke });
    this.dataGroup.selectAll("g.data-group").transition("opacity").duration(500).attr({
      opacity: function(d,i) { 
        return (that.activeGroup == null || that.activeGroup == d.name ? 1 : 0.1);
      }
    });
    this.dataGroup.selectAll("g.data-group").selectAll("path.connect").filter(function(d,i) { return !d3.select(this).attr("fill"); }).attr({
      fill: "none",
      stroke: function(d,i) { return that.cScale(d.name); },
      "stroke-width": that.config.connectStrokeWidth
    });
    this.dataGroup.selectAll("g.data-group").selectAll("path.connect").transition("morph").duration(500).attr({
      d: function(d,i) {
        return that.lineBuilder(d.values);
      }, fill: "none",
      stroke: function(d,i) { return that.cScale(d.name); },
      "stroke-width": that.config.connectStrokeWidth,
    });
    this.dataGroup.selectAll("g.data-group").selectAll("circle.node").filter(function(d,i) { return !d3.select(this).attr("fill"); }).attr({
      fill: that.config.nodeFill,
      stroke: function(d,i) { return that.cScale(d.n); },
      "stroke-width": that.config.nodeStrokeWidth,
    });
    this.dataGroup.selectAll("g.data-group").selectAll("circle.node").transition("morph").duration(500).attr({
      cx: function(d,i) { return that.xScale(d.o) + that.xBand/2; },
      cy: function(d,i) { return that.yScale(d.i) + that.yBand/2; },
      r: that.config.nodeSize/2,
      fill: that.config.nodeFill,
      stroke: function(d,i) { return that.cScale(d.n); },
      "stroke-width": that.config.nodeStrokeWidth,
      display: (this.config.nodeShow ? "block" : "none")
    });
  }
}
}});
plotdb.chart.add('3D Pie Chart',{"key":2193,"name":"3D Pie Chart","owner":4,"theme":null,"parent":null,"description":"the notorious 3D Pie Chart. Best for confusing and deceiving your readers. Use it at your discretion.","basetype":["3"],"visualencoding":["5"],"category":["6"],"tags":["deceive","3d"],"likes":0,"searchable":true,"dimlen":2,"createdtime":"2017-01-24T01:52:46.000Z","modifiedtime":"2017-02-24T06:37:33.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":0,"type":"css","lines":1,"content":""},"assets":[],"dimension":{"name":{"desc":"name of pie","type":[],"fields":[],"require":false,"fieldName":null},"value":{"desc":"size of pie","type":["Number"],"fields":[],"require":true,"fieldName":null}},"config":{"sort":{"name":"Sort Values","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Value","rebindOnChange":true},"unit":{"desc":"Unit of value","name":"Unit","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","default":"","category":"Value"},"thick":{"name":"thick (0~1)","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":1,"default":1},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"0","default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#fff","category":"Global Settings"},"balance":{"desc":"Auto balance Labels","name":"Label Balance","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"rebindOnChange":true},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":13,"default":13,"category":"Global Settings"},"textFill":{"name":"Text Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#000000","default":"#000000","category":"Global Settings"},"labelShow":{"name":"Show Data Label","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"pieRotate":{"name":"3D Rotate Degree","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"45","default":45},"popupShow":{"desc":"show Popup when user hovers over elements","name":"show Popup","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Popup","rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Arial","default":"Arial","category":"Global Settings"},"legendShow":{"name":"Show Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":true,"default":true,"category":"Legend"},"otherLabel":{"name":"Label for 'other'","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"Other","default":"Other","category":"Label"},"otherLimit":{"desc":"Data smaller than this value will be clustered into one set of data","name":"Small Data Threshold","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Value"},"legendLabel":{"name":"Label","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"","category":"Legend"},"showPercent":{"desc":"Show percentage in data label","name":"Show Percent","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Label"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"2","default":"2","category":"Global Settings"},"boxRoundness":{"name":"Block Roundness","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0,"default":0,"category":"Global Settings"},"legendInline":{"desc":"[Experiment feature] Show legend with wedges instead of a standalone legend panel","name":"Show Inline Legend","type":[{"name":"Boolean","level":8,"order":{},"default":true,"basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}],"value":false,"default":false,"category":"Legend Inline"},"labelPosition":{"name":"Label Position","type":[{"name":"Choice","level":20,"values":["in","out"],"default":""}],"value":"out","default":"out","category":"Label"},"legendPosition":{"name":"Position","type":[{"name":"Choice","level":20,"values":["top","left","right","bottom"],"default":""}],"value":"right","default":"right","category":"Legend"},"labelShadowSize":{"name":"Label Shadow Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Label"},"innerRingOpacity":{"name":"Inner Ring Opacity","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":0.3,"default":0.3},"legendInlineColor":{"desc":"Dot / Line Color","name":"Color","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#222222","default":"#222","category":"Legend Inline"},"legendInlineStrokeWidth":{"desc":"Dot / line width of inline legend","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":2,"default":2,"category":"Legend Inline"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    var list = d3.range(Math.round(Math.random() * 3 + 4));
    var value = [{name: "Amount", data: list.map(function() { return Math.random(); })}];
    var name = [{name: "Fruit", data: list.map(function(it) {
      return plotdb.data.sample.fruit[it % plotdb.data.sample.fruit.length]
    })}];
    /*var extreme = d3.range(5);
    name = [{
      name: "name", data: extreme.map(function(d,i) { return plotdb.data.sample.name.get(i); })
    }];
    value = [{
      name: "value", data: extreme.map(function(d,i) { return i + 1; })//(i<1?99:1); })
    }];*/
    return {name: name, value: value};
  },
  dimension: {
    value: { type: [plotdb.Number], require: true, desc: "size of pie" },
    name: { type: [], require: false, desc: "name of pie" },
  },
  config: {
    fontFamily: {},
    background: {},
    textFill: {},
    fontSize: {},
    margin: {},
    palette: {},
    balance: {name: "Label Balance", type: [plotdb.Boolean], default: false, desc: "Auto balance Labels", rebindOnChange: true},
    stroke: {default: "#fff"},
    strokeWidth: {},
    thick: { name: "thick (0~1)", type: [plotdb.Number], default: 1 },
    boxRoundness: {},
    labelShow: {},
    labelShadowSize: {},
    otherLimit: {},
    otherLabel: {},
    labelPosition: {},
    legendLabel: {},
    legendShow: {},
    innerRingOpacity: {name: "Inner Ring Opacity", type: [plotdb.Number], default: 0.3},
    legendPosition: {},
    pieRotate: {name: "3D Rotate Degree", type: [plotdb.Number], default: 45},
    legendInline: {
      name: "Show Inline Legend",
      type: [plotdb.Boolean],
      default: false,
      desc: "[Experiment feature] Show legend with wedges instead of a standalone legend panel",
      category: "Legend Inline"
    },
    legendInlineColor: {
      name: "Color",
      type: [plotdb.Color],
      default: "#222",
      desc: "Dot / Line Color",
      category: "Legend Inline"
    },
    legendInlineStrokeWidth: {
      name: "Stroke Width",
      type: [plotdb.Number],
      default: 2,
      desc: "Dot / line width of inline legend",
      category: "Legend Inline"
    },
    unit: {},
    sort: { name: "Sort Values", type: [plotdb.Boolean], default: true, rebindOnChange: true },
    showPercent: {name: "Show Percent", type: [plotdb.Boolean], default: false},
    popupShow: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.pieGroup = this.svg.append("g").attr("class", "pie-group");
    this.legendGroup = this.svg.append("g").attr({"class": "legend-group"});
    this.popup = plotd3.html.tooltip(this.root).on("mousemove", function(d,i,popup) {
      popup.select(".title").text(d.data.name || "-");
      popup.select(".value").html([
        Math.ceil(100 * d.data.value)/100 + (that.config.unit || ""),
        d.data.percent
      ].join("<br>"));
    });
    this.popup.coord(function(d,i) {
      var r = d.data.centralRadius;
      var a = (d.endAngle + d.startAngle)/2;
      var x = Math.sin(a) * r;
      var y = -Math.cos(a) * r;
      var cx = (that.width - 0 * that.legendOffset[0] * (that.config.legendPosition == "right" ? 1 : -1 )) / 2;
      var cy = (that.height - 0 *that.legendOffset[1] * (that.config.legendPosition == "bottom" ? 1 : -1 )) / 2;
      return [
        cx + x, cy + y, 1,1
      ];
    });
    this.pielayout = d3.layout.pie().value(function(it) { return it.value; });
  },
  arc: function(r,a1,a2,dy,ra,sideWedge) { // 1 - wedge, 2 - side , 3 - both
    var x1,x2,x3,x4,y1,y2,y3,y4,ry,ra;
    if(ra>Math.PI/2) ra = Math.PI/2;
    if(ra<0) ra = 0;
    dy = dy * Math.sin(ra);
    ry = Math.cos(ra);
    x1 = Math.sin(a1) * r;
    x2 = Math.sin(a2) * r;
    y1 = -Math.cos(a1) * r * ry;
    y2 = -Math.cos(a2) * r * ry;
    var f1 = a1 > Math.PI * 3/2 ? Math.PI * 3/2 : (a1 < Math.PI/2 ? Math.PI/2 : a1);
    var f2 = a2 > Math.PI * 3/2 ? Math.PI * 3/2 : (a2 < Math.PI/2 ? Math.PI/2 : a2);
    x3 = Math.sin(f1) * r;
    x4 = Math.sin(f2) * r;
    y3 = -Math.cos(f1) * r * ry;
    y4 = -Math.cos(f2) * r * ry;
    var ret = [];
    if(sideWedge % 2) ret = ret.concat([
      "M", 0, 0,
      "L", x1, y1,
      "A", r,r * ry, 0, (a2 - a1 > Math.PI ? 1 : 0), 1, x2, y2,
      "L", 0, 0
    ]);
    if(sideWedge > 1) ret = ret.concat([
      "M", x3, y3,
      "L", x3, y3 + dy,
      "A", r,r * ry, 0, (f2 - f1 > Math.PI ? 1 : 0), 1, x4, y4 + dy,
      "L", x4, y4,
      "A", r,r * ry, 0, (f2 - f1 > Math.PI ? 1 : 0), 0, x3, y3,      
    ]);
    return ret.join(" ");
  },
  parse: function() {
    if(!this.dimension.name.fields.length) this.data.map(function(d,i) { d.name = i; });
    if(!this.dimension.value.fields.length) this.data.map(function(d,i) { d.value= 1; });
    this.names = d3.map(this.data, function(d,i) { return d.name || ""; }).keys();
  },
  bind: function() {
    var that = this, sel, sel1, sel2, sel3;
    sel = this.pieGroup.selectAll("path.data.pie.side").data(this.parsed)
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel1 = sel.enter().append("path").attr({class: "data pie side", opacity: 0});
    sel = this.pieGroup.selectAll("path.data.pie.wedge").data(this.parsed)
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel1 = sel.enter().append("path").attr({class: "data pie wedge", opacity: 0});
    sel = this.pieGroup.selectAll("path.data.pie.shade").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel2 = sel.enter().append("path").attr({class: "data pie shade", opacity: 0});
    sel = this.pieGroup.selectAll("g.label").data(this.parsed);
    sel.exit().attr({class: ""}).transition("exit").duration(500).attr({opacity: 0}).remove();
    sel3 = sel.enter().append("g").attr({class: "label", opacity: 0});
    this.pieGroup.selectAll("g.label").each(function(d,i) {
      var node = d3.select(this),sel;
      sel = node.selectAll("text").data([d,d]);
      sel.exit().remove();
      sel.enter().append("text").attr({
        class: function(d,i) { return "data label " + (i ? "value" : "shadow"); },
      });
    });
    sel = this.pieGroup.selectAll("g.marker").data(this.parsed);
    sel.exit().remove();
    sel.enter().append("g").attr({class: "marker"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("path");
      node.append("circle");
      node.append("circle");
      node.append("text");
      node.append("text");
    });
    this.pieGroup.selectAll("g.marker").each(function(d,i) {
      var node = d3.select(this);
      node.select("path").datum(d);
      node.selectAll("circle").data([d,d]);
      node.selectAll("text").data([d,d]);
    });
    if(this.config.popupShow) this.popup.nodes(sel1).nodes(sel2).nodes(sel3);
    [sel1,sel2,sel3].map(function(sel) {
      sel.on("click", function(d,i) {
        that.fire("filter", {type: "value", value: d.data.name, field: "name"});
      });
    });
  },
  resize: function() {
    var that = this;
    var list, i, j, delta, py, cy, balance = 0;
    var other = {
      name: that.config.otherLabel,
      value: this.data.filter(function(d,i) { return d.value < that.config.otherLimit; }).reduce(function(a,b) { return a + b.value; }, 0)
    };
    this.fdata = this.data.filter(function(d,i) { return d.value >= that.config.otherLimit; });
    if(other.value != 0) this.fdata.push(other);
    this.names = this.fdata.map(function(it) { return it.name; });

    var box = this.root.getBoundingClientRect();
    var svgbox = this.svg[0][0].getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.prerender();
    this.popup.fontSize(this.config.fontSize);
    this.legendVertical = ["right","left"].indexOf(this.config.legendPosition) >= 0;
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.legend = plotd3.rwd.legend()
      .size(this.legendVertical ? [220, this.height - 2 * this.config.margin] : [this.width - 2 * this.config.margin, 220])
      .orient(this.config.legendPosition).scale(this.cScale)
      .label(this.config.legendLabel || "")
      .tickValues(this.names).fontSize(this.config.fontSize);
    this.legendGroup.call(this.legend);
    this.legendGroup.selectAll(".legend").on("mouseover", function(d,i) {
      that.activeGroup = d; that.render();
    }).on("mouseout", function(d,i) {
      that.activeGroup = null; that.render();
    });
    this.legendSize = (this.config.legendShow ? this.legend.offset() : [0,0]);
    this.legendOffset = this.config.legendShow ?
      this.legendVertical ? [this.legendSize[0] + this.config.fontSize,0] : [0, this.legendSize[1] + this.config.fontSize]
    : [0,0];
    var w = this.width - this.legendOffset[0];
    var h = this.height - this.legendOffset[1] - (this.config.legendInline ? 60 : 0);
    this.radius = ( w > h ? h : w )/2 - this.config.margin
      - (!that.config.labelShow || (that.config.labelPosition == 'in') ? 0 : 2 * that.config.fontSize);
    this.pielayout.sort(this.config.sort ? function(a,b) { return b.value - a.value; } : null);
    var parsed = this.pielayout(this.fdata);
    this.parsed = parsed;
    var sum = d3.sum(this.fdata, function(d,i) { return d.value; });

    if(this.config.sort) {
      this.parsed.sort(function(a,b) { return b.data.value - a.data.value; });
    } else {
      this.parsed.sort(function(a,b) { return parseInt(Math.random() * 2 - 1); });
    }
    if(this.config.balance) {
      // for rotating pie so that wedges count above and under horizontal line are similar
      for(i=0;i<parsed.length;i++) {
        delta = (parsed[i].endAngle - parsed[i].startAngle);
        if(i > parsed.length/2) { balance += delta; }
      }
      balance = Math.PI/2 - balance;
    }
    parsed.map(function(d,i) {
      var a, r = that.radius;
      if(that.config.balance) {
        d.startAngle -= (balance);
        d.endAngle -= (balance);
      }
      a = (d.startAngle + d.endAngle ) / 2;
      if(that.config.labelPosition != 'in') r += that.config.fontSize * 2;
      else r = (that.radius + that.radius * 0.9 * (1 - that.config.thick/2))/2;
      if(!d.data.parsed) d.data.parsed = d;
      d.labelAngle = a;
      d.labelOffset = (a > Math.PI*0.5 && a < Math.PI*1.5 ? 20: -20);
      d.data.width = (d.endAngle - d.startAngle) * r;
      d.data.innerRadius = that.radius * 0.9 * (1 - that.config.thick/2);
      d.data.x = Math.sin(a) * r;
      d.data.y = (
        -Math.cos(a) * r * Math.cos(that.config.pieRotate * Math.PI/180) + 
        (a > Math.PI/2 && a < Math.PI * 1.5
         ? r * (1 - Math.cos(that.config.pieRotate * Math.PI/180))/2
         : 0
        )
      );
      d.data.startAngle = d.startAngle;
      d.data.endAngle = d.endAngle;
      d.data.padAngle = d.padAngle;
      d.data.percent = (parseInt(1000 * d.data.value / sum) / 10) + "%";
    });

    // reposition label in vertical direction
    for(j = 0 ; j < 4 ; j++) {
      list = [];
      for(i = 0 ; i < parsed.length ; i++) {
        if(parsed[i].labelAngle >= j * Math.PI/2 && parsed[i].labelAngle < (j+1) * Math.PI/2) {
          list.push(parsed[i]);
        }
      }
      list.sort(function(a,b) { return (!(j % 2) ? 1 : -1) * (b.labelAngle - a.labelAngle); });
      for( i = 1 ; i < list.length ; i++ ) {
        py = Math.sin(list[i - 1].labelAngle - Math.PI/2) * that.radius + list[i - 1].labelOffset;
        cy = Math.sin(list[i].labelAngle - Math.PI/2) * that.radius + list[i].labelOffset;
        if((j==0 || j==3) && (cy > py - this.config.fontSize * 2.5))
          list[i].labelOffset -= this.config.fontSize * 2.5 - (py - cy);
        else if((j==1 || j==2) && (cy < py + this.config.fontSize * 2.5))
          list[i].labelOffset += this.config.fontSize * 2.5 - (cy - py);
      }
    }
    list = d3.extent(
      parsed.map(function(d,i) { return Math.sin(d.labelAngle - Math.PI/2) * that.radius + d.labelOffset; })
    );
    if(this.config.legendInline && (list[1] - list[0] > this.height - 2 * this.config.margin)) {
      this.radius -= (list[1] - list[0] - (this.height - 2 * this.config.margin));
      if(this.radius < 100) this.radius = 100;
    }
    this.parsed.map(function(d,i) {
      d.data.innerRadius = that.radius * 0.9 * (1 - that.config.thick/2);
      d.data.centralRadius = (that.radius + d.data.innerRadius)/2;
    });
    if(this.config.thick>1) this.config.thick = 1;
    if(this.config.thick<0) this.config.thick = 0;
  },
  prerender: function() {
    var that = this;
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    this.svg.selectAll("g.label text, .legend text, g.marker text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });
    this.svg.selectAll("g.marker").each(function(d,i) {
      d3.select(this).select("text:first-of-type").text(d.data.name);
      d3.select(this).select("text:last-of-type").text(that.config.showPercent ? d.data.percent : d.data.value);
    });
    this.svg.selectAll("g.marker").each(function(d,i) {
      d.data.textWidth = d3.max(d3.select(this).selectAll("text")[0].map(function(d,i) {
        return d.getBBox().width;
      }));
    });
  },
  render: function() {
    var that = this;
    this.prerender();
    var ra = that.config.pieRotate * Math.PI / 180;
    if(ra > Math.PI/2) ra = Math.PI/2;
    if(ra < 0) ra = 0;
    d3.select(this.root).style("background-color", this.config.background);
    (this.pieGroup.attr("transform")
      ? this.pieGroup.transition("morph").duration(500)
      : this.pieGroup
    ).attr({
      transform: [
        "translate(",
        (that.width - this.legendOffset[0] * (this.config.legendPosition == "right" ? 1 : -1 )) / 2,
        (that.height - this.legendOffset[1] * (this.config.legendPosition == "bottom" ? 1 : -1 )) / 2
          - that.radius * (1 - Math.cos(ra))/2,
        ")"
      ].join(" ")
    });
    this.pieGroup.selectAll("path.data.pie").attr({
      fill: function(d,i) {
        var c;
        if(d3.select(this).classed("shade")) return "none";
        else c = that.cScale(d.data.name);
        c = d3.hsl(c);
        if(d3.select(this).classed("side")) c.l *= 0.8;
        return c.toString();
      },
      stroke: function(d,i) {
        if(d3.select(this).classed("shade")) return "none";

        return (d.move ? d.move : that.config.stroke);
      },
      "stroke-width": this.config.strokeWidth
    }).transition("opacity").duration(500).attr({
      opacity: function(d,i) {
        if(d3.select(this).classed("shade")) return that.config.innerRingOpacity;
        return ((!that.activeGroup || that.activeGroup == d.data.name) ? 1 : 0.1);
      }
    });
    this.pieGroup.selectAll("path.data.pie").transition("morph").duration(500).tween("morph", function(d,i) {
      var oldAngles = (
        this.lastAngles || [d.startAngle,d.startAngle,d.data.innerRadius, d.data.innerRadius]
      );
      var curAngles = [d.startAngle, d.endAngle, that.radius, d.data.innerRadius];
      var node = d3.select(this);
      var sideWedge = node.classed("side") ? 2 : 1;
      if(d3.select(this).classed("shade")) {
        curAngles[2] = (that.radius + d.data.innerRadius)/2;
      }
      this.lastAngles = curAngles;
      return function(t) {
        var r = (curAngles[2] - oldAngles[2]) * t + oldAngles[2];
        node.attr({

          d: that.arc(
            r,
            (curAngles[0] - oldAngles[0]) * t + oldAngles[0],
            (curAngles[1] - oldAngles[1]) * t + oldAngles[1],
            r * (1 - Math.cos(ra)), ra,sideWedge
          )
        });
      };
    });
    var labels = this.pieGroup.selectAll("g.label");
    labels.filter(function(d,i) { return !d3.select(this).attr("transform"); }).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x, d.data.y,")"].join(" ");
      }
    });
    labels.each(function(d,i) {
      var node = d3.select(this);
      node.selectAll("text").attr({
        fill: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || (that.config.labelPosition != 'in') ? "#000":"#fff");
        },
        "font-size": that.config.fontSize,
        "text-anchor": "middle",
        dy: "0.38em"
      }).style({
        display: (that.config.labelShow?"block":"none")
      }).text(function(d,i) {
        return (that.config.showPercent ? d.data.percent : parseInt(100*d.data.value)/100);
      });
      node.select("text.label.shadow").attr({
        stroke: function(d,i) {
          var c = d3.hsl(that.cScale(d.data.name));
          return (c.l > 0.6 || that.config.labelPosition != 'in' ? "#fff":"#000");
        },
        "stroke-width": that.config.labelShadowSize,
      }).style({
        display: (that.config.labelShadowSize && that.config.labelShow ? "block" : "none")
      });
      if(that.config.fontSize * 2 > d.data.width * 1.5) {
        node.selectAll("text").style({display: "none"});
      }
    })
    labels.transition("move").duration(500).attr({
      transform: function(d,i) {
        return ["translate(", d.data.x,d.data.y ,")"].join(" ");
      }
    });
    labels.transition("opacity").duration(500).attr({opacity: 1});
    this.pieGroup.selectAll("g.marker").attr({
      display: (this.config.legendInline ? "block" : "none")
    }).each(function(d,i) {
      var node = d3.select(this);
      var x1, y1, x2, y2, xm, ym;
      var a = (d.startAngle + d.endAngle)/2;
      var dy = d.labelOffset;
      x1 = Math.sin(a) * that.radius;
      y1 = -Math.cos(a) * that.radius * Math.cos(that.config.pieRotate * Math.PI/180)
          + (a > Math.PI/2 && a < Math.PI * 1.5 ? that.radius * ( 1 - Math.cos(that.config.pieRotate * Math.PI/180))/2 : 0);
      var dx = that.width/2 - that.config.margin - Math.abs(x1) - d.data.textWidth;
      if(dx<10) dx = 10;
      if(dx>80) dx = 80;
      x2 = x1 + (x1 < 0 ? -dx : dx);
      y2 = y1 + dy;
      if(false) {
        xm = x2;
        ym = y2;
      } else {
        if(Math.abs(x1) < Math.abs(y1)) {
          xm = x1;
          ym = y2;
        } else {
          xm = x2;
          ym = y2;
        }
      }
      node.select("circle").attr({
        cx: x1, cy: y1, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("circle:last-of-type").attr({
        cx: x2, cy: y2, fill: that.config.legendInlineColor,
        r: that.config.legendInlineStrokeWidth * 1.5
      });
      node.select("path").attr({
        d: function() {
          return [
            "M", x1, y1, 
            "L", xm, ym,
            "L", x2, y2
          ].join(" ");
        },
        fill: "none",
        stroke: that.config.legendInlineColor,
        "stroke-width": that.config.legendInlineStrokeWidth
      });
      node.selectAll("text").attr({
        x: x2, y: function(d,i) { return y2 + (i ? that.config.fontSize : -that.config.fontSize)/2; },
        dy: "0.38em",
        dx: (x1<0?-0.5:0.5) + "em",
        "text-anchor": (x1<0?"end": "start"),
        fill: that.cScale(d.data.name)
      });
    });
    var minus = ["left","top"].indexOf(this.config.legendPosition) >= 0;
    var offset = (this.legendVertical
      ? [this.width/2 + (this.radius + this.config.fontSize * 1.5 - (minus?-1:1)*this.legendSize[0]/2) * (minus ? -1 : 1),(this.height - this.legendSize[1])/2]
      : [(this.width - this.legendSize[0])/2,this.height/2 + (this.radius + this.config.fontSize + (!minus?-this.legendSize[1]:0)) * (minus?-1:1)]
    );
    this.legendGroup.attr({
      transform: ["translate(",offset[0], offset[1], ")"].join(" "),
      display: this.config.legendShow ? "block" : "none"
    });
  }
}
}});
plotdb.chart.add('Venn Diagram',{"key":2194,"name":"Venn Diagram","owner":4,"theme":null,"parent":null,"description":"Venn diagram is usually used to depict components and their composition.","basetype":["99"],"visualencoding":["99"],"category":["1"],"tags":["set","composition","component"],"likes":0,"searchable":true,"dimlen":0,"createdtime":"2017-01-25T07:16:56.000Z","modifiedtime":"2017-01-28T06:34:46.000Z","doc":{"name":"document","size":0,"type":"html","lines":1,"content":""},"style":{"name":"stylesheet","size":23,"type":"css","lines":1,"content":"text {font-weight: 800}"},"assets":[],"dimension":{},"config":{"label1":{"name":"set A","type":[],"value":"Good","default":"Data","category":"Set Name"},"label2":{"name":"set B","type":[],"value":"Cheap","default":"Design","category":"Set Name"},"label3":{"name":"set AB","type":[],"value":"Slow","default":"Exploratory Vis","category":"Set Name"},"label4":{"name":"set C","type":[],"value":"Fast","default":"Story","category":"Set Name"},"label5":{"name":"set AC","type":[],"value":"Expensive","default":"Data Journalism","category":"Set Name"},"label6":{"name":"set BC","type":[],"value":"Bad","default":"Narrative Vis","category":"Set Name"},"label7":{"name":"set ABC","type":[],"value":"N/A","default":"Data Visualization","category":"Set Name"},"margin":{"name":"Margin","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":10,"default":10,"category":"Global Settings"},"stroke":{"desc":"Stroke Color","name":"Stroke","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#999","category":"Global Settings"},"palette":{"name":"Palette","type":[{"re":{},"name":"Palette","level":30,"scale":{},"binary":{"colors":[{"hex":"#ff8356"},{"hex":"#0076a1"}]},"plotdb":{"colors":[{"hex":"#ed1d78"},{"hex":"#c59b6d"},{"hex":"#8cc63f"},{"hex":"#28aae2"}]},"default":{"colors":[{"hex":"#1d3263"},{"hex":"#226c87"},{"hex":"#f8d672"},{"hex":"#e48e11"},{"hex":"#e03215"},{"hex":"#ab2321"}]},"subtype":{"binary":"binary","diverging":"diverging","sequential":"sequential","qualitative":"qualitative"},"diverging":{"colors":[{"hex":"#74001a"},{"hex":"#cd2149"},{"hex":"#f23971"},{"hex":"#ff84ab"},{"hex":"#ffc3d7"},{"hex":"#f2f2dd"},{"hex":"#b8d9ed"},{"hex":"#81b1d0"},{"hex":"#3d8bb7"},{"hex":"#0071a8"},{"hex":"#003558"}]},"sequential":{"colors":[{"hex":"#950431"},{"hex":"#be043e"},{"hex":"#ec326d"},{"hex":"#fc82a9"},{"hex":"#febed2"},{"hex":"#fee6ee"}]},"qualitative":{"colors":[{"hex":"#c05ae0"},{"hex":"#cf2d0c"},{"hex":"#e9ab1e"},{"hex":"#86ffb5"},{"hex":"#64dfff"},{"hex":"#003f7d"}]}}],"value":{"colors":[{"hex":"#e81714"},{"hex":"#149be8"},{"hex":"#e8e114"},{"hex":"#d9a8f2"},{"hex":"#8def21"},{"hex":"#e2cbb0"},{"hex":"#ffffff"}]},"default":{"colors":[{"hex":"#f4502a"},{"hex":"#f1c227"},{"hex":"#008a6d"},{"hex":"#00acdb"},{"hex":"#0064a8"}]},"category":"Global Settings"},"fontSize":{"name":"Font Size","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"12","default":13,"category":"Global Settings"},"setCount":{"name":"Set Count","type":[{"name":"Choice","level":20,"values":[2,3],"default":""}],"value":3,"default":3,"rebindOnChange":true},"background":{"name":"Background","type":[{"Gray":"#cccccc","name":"Color","Empty":"#ffffff","level":10,"Neutral":"#cccccc","default":"#dc4521","subtype":{"neutral":"neutral","negative":"negative","positive":"positive"},"Negative":"#d93510","Positive":"#3f7ab5"}],"value":"#ffffff","default":"#ffffff","category":"Global Settings"},"fontFamily":{"name":"Font","type":[{"name":"String","level":2,"default":"","basetype":[]}],"value":"verdana","default":"Arial","category":"Global Settings"},"strokeWidth":{"desc":"Default Stroke width","name":"Stroke Width","type":[{"name":"Number","level":8,"order":{},"default":0,"basetype":[{"name":"Numstring","level":6,"order":{},"default":"","basetype":[{"name":"Order","level":4,"order":{},"basetype":[{"name":"String","level":2,"default":"","basetype":[]}]}]}]}],"value":"4","default":"2","category":"Global Settings"}},"library":["d3/3.5.12/min","plotd3/0.1.0"],"local":null,"inherit":[],"metashow":null,"footer":null,code: {content: {
  sample: function() {
    return {};
  },
  dimension: {
  },
  config: {
    fontSize: {},
    fontFamily: {},
    background: {},
    margin: {},
    setCount: {name: "Set Count", type: [plotdb.Choice([2,3])], default: 3, rebindOnChange: true},
    label1: {name: "set A", type: [], default: "Data", category: "Set Name"},
    label2: {name: "set B", type: [], default: "Design", category: "Set Name"},
    label4: {name: "set C", type: [], default: "Story", category: "Set Name"},
    label3: {name: "set AB", type: [], default: "Exploratory Vis", category: "Set Name"},
    label6: {name: "set BC", type: [], default: "Narrative Vis", category: "Set Name"},
    label5: {name: "set AC", type: [], default: "Data Journalism", category: "Set Name"},
    label7: {name: "set ABC", type: [], default: "Data Visualization", category: "Set Name"},
    palette: {},
    stroke: {},
    strokeWidth: {}
  },
  init: function() {
    var that = this;
    this.svg = d3.select(this.root).append("svg");
    this.set3map = [1,2,4,3,6,5,7];
    this.set2map = [1,2,3];
  },
  parse: function() {
    var that = this;
  },
  bind: function() {
    var sel,that = this;
    var setmap = (this.config.setCount == 2 ? that.set2map : that.set3map);
    sel = this.svg.selectAll("g.data-group").data(d3.range(this.count).map(function(d,i) {
      return that.config["label" + setmap[i]];
    }));
    sel.exit().remove();
    sel.enter().append("g").attr({class: "data-group"}).each(function(d,i) {
      var node = d3.select(this);
      node.append("path");
      node.append("text");
    });
    this.svg.selectAll("g.data-group").each(function(d,i) { d3.select(this).selectAll("*").datum(d); });
  },
  resize: function() {
    var that = this;
    var box = this.root.getBoundingClientRect();
    var width = this.width = box.width;
    var height = this.height = box.height;
    this.svg.attr({
      width: width + "px", height: height + "px",
      viewBox: [0,0,width,height].join(" "),
      preserveAspectRatio: "xMidYMid"
    });
    this.cScale = plotdb.Palette.scale.ordinal(this.config.palette);
    this.count = [0,0,3,7][this.config.setCount];
  },
  coord2: function(d,i) {
    var that = this;
    var rr = (that.width*0.66 < that.height
      ? that.width*0.66 
      : that.height)/2 - that.config.margin * 2
    ;
    var r = rr, r1 = rr * 0.8;
    var x, y, f;
    x = [0,0,0,0];
    y = [0,0,0,0];
    f = [
      [1,0,0,1],
      [0,1,1,0],
      [0,0,0,0]
    ][i];
    x[3] = [-r, r, 0][i];
    return [x,y,[
      "M", 0, -r1,
      "A", r, r, 0, f[0], f[1], 0, r1,
      "A", r, r, 0, f[2], f[3], 0, -r1
    ].join(" ")];
  },
  coord3: function(d,i) {
    var that = this;
    var a = 2 * Math.PI / that.config.setCount;
    var r1 = 2, r2 = 1, r = 1.712;
    var rr = (that.width < that.height ? that.width : that.height)/4.5 - that.config.margin * 2;
    var dy = 0.15 * rr;
    r1 *= rr, r2 *= rr; r *= rr;
    var x = [], y = [], i;
    if(i<3) {
      x.push(r1 * Math.sin(a * (i + 0)));
      y.push(r1 * -Math.cos(a * (i + 0)) - dy);
      x.push(r2 * Math.sin(a * (i + 0.5)));
      y.push(r2 * -Math.cos(a * (i + 0.5)) - dy);
      x.push(r1 * Math.sin(a * (i + 1)));
      y.push(r1 * -Math.cos(a * (i + 1)) - dy);
      x.push(2 * r2 * Math.sin(a * (i + 0.5)));
      y.push(2 * r2 * -Math.cos(a * (i + 0.5)) - dy);
      return [x,y,[
        "M", x[0], y[0],
        "A", r, r, 0, 0, 1, x[1], y[1],
        "A", r, r, 0, 0, 1, x[2], y[2],
        "A", r, r, 0, 0, 0, x[0], y[0]
      ].join(" ")];
    } else if(i<6) {
      x.push(r2 * Math.sin(a * (i + 0.5)));
      y.push(r2 * -Math.cos(a * (i + 0.5)) - dy);
      x.push(r1 * Math.sin(a * (i + 1)));
      y.push(r1 * -Math.cos(a * (i + 1)) - dy);
      x.push(r2 * Math.sin(a * (i + 1.5)));
      y.push(r2 * -Math.cos(a * (i + 1.5)) - dy);
      x.push(r1/1.7 * Math.sin(a * (i + 1)));
      y.push(r1/1.7 * -Math.cos(a * (i + 1)) - dy);
      return [x,y,[
        "M", x[0], y[0],
        "A", r, r, 0, 0, 1, x[1], y[1],
        "A", r, r, 0, 0, 1, x[2], y[2],
        "A", r, r, 0, 0, 0, x[0], y[0]
      ].join(" ")];
    } else {
      x.push(r2 * Math.sin(a * (i + 0.5)));
      y.push(r2 * -Math.cos(a * (i + 0.5)) - dy);
      x.push(r2 * Math.sin(a * (i + 1.5)));
      y.push(r2 * -Math.cos(a * (i + 1.5)) - dy);
      x.push(r2 * Math.sin(a * (i + 2.5)));
      y.push(r2 * -Math.cos(a * (i + 2.5)) - dy);
      x.push(0); y.push(0);
      return [x,y,[
        "M", x[0], y[0],
        "A", r, r, 0, 0, 1, x[1], y[1],
        "A", r, r, 0, 0, 1, x[2], y[2],
        "A", r, r, 0, 0, 1, x[0], y[0]
      ].join(" ")];
    }
  },
  render: function() {
    var that = this;
    var coord = (this.config.setCount == 2 ? this.coord2 : this.coord3);
    if(this.config.fontFamily) d3.select(this.root).style("font-family", this.config.fontFamily);
    d3.select(this.root).style("background-color", this.config.background);
    this.svg.selectAll("text").attr({
      "font-size": that.config.fontSize,
      "fill": that.config.textFill
    });

    this.svg.selectAll("g.data-group").attr({
      transform: ["translate(", this.width/2, this.height/2, ")"].join(" "),
    });
    this.svg.selectAll("path").attr({
      "fill-opacity": 0.5,
      fill: function(d,i) { return that.cScale(i); },
      d: function(d,i) {
        var ret = coord.apply(that, [d,i]);
        return ret[2];
      },
      stroke: this.config.stroke,
      "stroke-width": this.config.strokeWidth
    });
    this.svg.selectAll("text").each(function(d,i) {
      var node = d3.select(this);
      var ret = coord.apply(that, [d,i]);
      node.attr({
        x: ret[0][3], y: ret[1][3],
        "text-anchor": "middle",
        dy: "0.38em"
      }).text(d);
    });
  }
}
}});

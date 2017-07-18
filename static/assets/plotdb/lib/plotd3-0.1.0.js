// Generated by LiveScript 1.3.1
var plotd3;
plotd3 = {
  html: {},
  rwd: {}
};
plotd3.html.tooltip = function(root, sel, cb){
  var store, ret, popup, setblock;
  store = {
    handler: {}
  };
  ret = plotd3.html.popup(root, null, null, store);
  popup = store.popup;
  setblock = function(d, i){
    var rbox, box, ref$, left, top, width, height, isLeft, update;
    if (typeof store.active === 'function') {
      if (!store.active(d, i)) {
        return;
      } else if (!store.active) {
        return;
      }
    }
    rbox = root.getBoundingClientRect();
    box = this.getBoundingClientRect();
    if (store.coord) {
      ref$ = store.coord.call(this, d, i), left = ref$[0], top = ref$[1], width = ref$[2], height = ref$[3];
      left += rbox.left;
      top += rbox.top;
      box = {
        left: left,
        top: top,
        width: width,
        height: height
      };
    }
    ret.fire('mousemove', d, i, this);
    isLeft = box.left > rbox.width / 2 + rbox.left ? true : false;
    popup.attr({
      'class': "pdb-popup pdb-tooltip " + (isLeft ? 'left' : 'right')
    });
    update = function(){
      var pbox, left;
      pbox = popup[0][0].getBoundingClientRect();
      popup.style({
        top: (box.top + box.height / 2 - pbox.height / 2 - rbox.top) + "px",
        opacity: 1
      });
      left = isLeft
        ? box.left - pbox.width - 10 - rbox.left
        : box.left + box.width + 10 - rbox.left;
      if (left < 3) {
        left = 3;
      }
      if (isLeft) {
        return popup.style({
          left: (box.left - pbox.width - 10 - rbox.left) + "px"
        });
      } else {
        return popup.style({
          left: (box.left + box.width + 10 - rbox.left) + "px"
        });
      }
    };
    if (popup.style("display") !== 'block') {
      popup.style({
        display: 'block',
        opacity: 0.01
      });
      return setTimeout(update, 0);
    } else {
      return update();
    }
  };
  popup.on('mouseover', function(){
    return clearTimeout(store.mouseoutHandler);
  });
  popup.on('mouseleave', function(){
    return popup.style({
      display: 'none'
    });
  });
  popup.on('click', function(){
    var event;
    if (store.curnode) {
      if (store.curnode.click) {
        return store.curnode.click();
      }
      event = document.createEvent('SVGEvents');
      event.initEvent('click', true, true);
      if (store.curnode) {
        return store.curnode.dispatchEvent(event);
      }
    }
  });
  ret.nodes = function(sel){
    var x$;
    x$ = sel;
    x$.on('mouseover', function(d, i){
      clearTimeout(store.mouseoutHandler);
      store.curnode = this;
      return ret.fire('mouseover', d, i, this);
    });
    x$.on('mousemove', setblock);
    x$.on('mouseleave', function(d, i){
      var this$ = this;
      return store.mouseoutHandler = setTimeout(function(){
        if (store.curnode === this$) {
          store.curnode = null;
        }
        ret.fire('mouseout', d, i, this$);
        ret.fire('mouseleave', d, i, this$);
        return popup.style({
          display: 'none'
        });
      }, 0);
    });
    return ret;
  };
  ret.direction = function(it){
    store.direction = it === 'left' ? 'left' : 'right';
    return popup.attr({
      'class': "pdb-popup pdb-tooltip " + store.direction
    });
  };
  ret.showByEvent = function(d, i){
    return setblock(d, i);
  };
  ret.show = function(x, y){
    var bbox;
    bbox = popup[0][0].getBoundingClientRect();
    if (store.direction !== 'right') {
      x = x - (bbox.right - bbox.left) - 10;
    } else {
      x = x + 10;
    }
    popup.style({
      display: 'block'
    });
    popup.style({
      top: (y - (bbox.bottom - bbox.top) / 2) + "px",
      left: x + "px"
    });
    return ret.hide();
  };
  ret.type('tooltip');
  return ret;
};
plotd3.html.float = function(root, sel, cb){
  var ret;
  ret = plotd3.html.popup(root, sel, cb);
  ret.type('float');
  return ret;
};
plotd3.html.popup = function(root, sel, cb, store){
  var popup, ret, setblock;
  store == null && (store = {
    handler: {}
  });
  popup = store.popup = d3.select(root).append('div');
  popup.each(function(d, i){
    var x$;
    x$ = d3.select(this);
    x$.append('div').attr({
      'class': 'title'
    });
    x$.append('div').attr({
      'class': 'value'
    });
    return x$;
  });
  popup.on('mouseover', function(){
    return d3.select(this).style({
      display: 'none'
    });
  });
  ret = function(){};
  ret.hide = function(d, i){
    if (d != null && i != null) {
      ret.fire('mouseout', d, i, this);
    }
    if (ret.hidePopup) {
      clearTimeout(ret.hidePopup);
    }
    return ret.hidePopup = setTimeout(function(){
      return popup.style({
        display: 'none'
      });
    }, 1000);
  };
  ret.getPopupNode = function(){
    return popup;
  };
  setblock = function(d, i){
    var rbox, ref$, x, y, width, height, pbox;
    rbox = root.getBoundingClientRect();
    if (typeof store.active === 'function') {
      if (!store.active(d, i)) {
        return;
      } else if (!store.active) {
        return;
      }
    }
    ref$ = [d3.event.clientX, d3.event.clientY], x = ref$[0], y = ref$[1];
    if (store.coord) {
      ref$ = store.coord.call(this, d, i), x = ref$[0], y = ref$[1], width = ref$[2], height = ref$[3];
      x += rbox.left;
      y += rbox.top;
    }
    ret.fire('mousemove', d, i, this);
    popup.style({
      display: 'block'
    });
    pbox = popup[0][0].getBoundingClientRect();
    x = x - pbox.width / 2 - rbox.left;
    y = y + 30 - rbox.top;
    if (y > rbox.height - pbox.height - 50) {
      y = y - pbox.height - 40;
    }
    if (x < 10) {
      x = 10;
    }
    if (x > +rbox.width - pbox.width - 10) {
      x = rbox.width - pbox.width - 10;
    }
    return popup.style({
      top: y + "px",
      left: x + "px"
    });
  };
  ret.nodes = function(sel){
    var x$;
    x$ = sel;
    x$.on('mouseover', function(d, i){
      return ret.fire('mouseove', d, i, this);
    });
    x$.on('mouseout', ret.hide);
    x$.on('mousemove', setblock);
    return ret;
  };
  ret.coord = function(cb){
    if (cb != null) {
      store.coord = cb;
    } else {
      return store.coord;
    }
    return ret;
  };
  ret.call = function(cb){
    return cb.call(popup[0][0]);
  };
  ret.showByEvent = function(d, i){
    return setblock(d, i);
  };
  ret.show = function(x, y){
    popup.style({
      display: 'block'
    });
    popup.style({
      top: y + "px",
      left: x + "px"
    });
    return ret.hide();
  };
  ret.fire = function(event, d, i, node){
    var ref$;
    return ((ref$ = store.handler)[event] || (ref$[event] = [])).forEach(function(cb){
      return cb.call(node, d, i, popup);
    });
  };
  ret.fontSize = function(fs){
    if (fs != null) {
      store.fontSize = fs;
      popup.style({
        "font-size": fs + "px"
      });
      return ret;
    } else {
      return store.fontSize;
    }
  };
  ret.on = function(event, cb){
    var ref$;
    ((ref$ = store.handler)[event] || (ref$[event] = [])).push(cb);
    return ret;
  };
  ['active'].map(function(k){
    return ret[k] = function(k){
      return function(it){
        if (!arguments.length) {
          return store[k];
        }
        store[k] = it;
        return ret;
      };
    }(k);
  });
  ret.type = function(type){
    var that;
    if (!type) {
      return store.type;
    }
    store.type = type;
    return popup.attr({
      'class': ("pdb-popup " + ((that = store.type) ? that : "")).trim()
    });
  };
  if (sel) {
    ret.nodes(sel);
  }
  if (cb) {
    ret.on('mousemove', cb);
  }
  ret.type('float');
  return ret;
};
plotd3.rwd.overlap = function(){
  var store, ret;
  store = {
    padding: [10, 5]
  };
  ret = function(){};
  ret.nodes = function(sel, accessor){
    var bbox, i$, to$, i, j$, to1$, j, ref$, ni, nj;
    accessor == null && (accessor = function(it){
      return it;
    });
    bbox = sel[0].map(function(d, i){
      return [d.getBoundingClientRect(), accessor(d3.select(d).datum(), i), 1, i];
    });
    bbox.forEach(function(d){
      var b;
      b = d[0];
      b.height = b.bottom - b.top;
      b.width = b.right - b.left;
      b.x = b.left;
      return b.y = b.top;
    });
    if (store.fitText) {
      bbox.forEach(function(d){
        var b, center;
        b = d[0];
        center = b.y + b.height / 2;
        b.y = center - b.height * (store.fitText / 2);
        return b.height = b.height * (1 - store.fitText);
      });
    }
    bbox.sort(function(a, b){
      return b[1] - a[1];
    });
    for (i$ = 0, to$ = bbox.length; i$ < to$; ++i$) {
      i = i$;
      if (!bbox[i][2]) {
        continue;
      }
      for (j$ = i + 1, to1$ = bbox.length; j$ < to1$; ++j$) {
        j = j$;
        ref$ = [bbox[i][0], bbox[j][0]], ni = ref$[0], nj = ref$[1];
        if (!(nj.x > ni.x + ni.width || nj.x + nj.width < ni.x || nj.y > ni.y + ni.height || nj.y + nj.height < ni.y)) {
          bbox[j][2] = 0;
        }
      }
    }
    bbox.forEach(function(d){
      var data;
      data = d3.select(sel[0][d[3]]).datum();
      if (!data) {
        return;
      }
      data.overlap = !d[2];
      if (store.opacity) {
        d3.select(sel[0][d[3]]).attr({
          opacity: d[2]
            ? 1
            : store.opacity || 0
        });
      }
      if (store.remove && !d[2]) {
        return d3.select(sel[0][d[3]]).remove();
      }
    });
    return sel;
  };
  ['remove', 'opacity', 'fitText'].map(function(k){
    return ret[k] = function(k){
      return function(it){
        if (!arguments.length) {
          return store[k];
        }
        store[k] = it;
        return ret;
      };
    }(k);
  });
  return ret;
};
plotd3.rwd.legend = function(){
  var store, ret;
  store = {
    padding: [10, 5]
  };
  ret = function(){
    var that, data, x$, offset, max, label, sel, ref$, e;
    store.group = this;
    if (that = store.tickValues) {
      data = that;
    } else if (!store.scale) {
      data = [0, 1];
    } else if (store.scale.invert) {
      data = store.scale.ticks(store.ticks || 5);
    } else {
      data = store.scale.domain();
    }
    x$ = this.selectAll('g.legend').data(data);
    x$.enter().append('g').attr({
      'class': 'legend'
    }).each(function(d, i){
      var node;
      node = d3.select(this);
      node.append('path').attr({
        'class': 'marker'
      });
      return node.append('text');
    });
    x$.exit().remove();
    this.selectAll('g.legend').each(function(d, i){
      var node, x$, size, e, m, r, dx;
      if (store.type === 'radius' && !d) {
        return;
      }
      node = d3.select(this);
      x$ = node.select('text');
      x$.text(d + "");
      if (store.fontSize != null) {
        x$.attr("font-size", store.fontSize);
      }
      try {
        size = node.select('text')[0][0].getBBox().height * 0.8;
      } catch (e$) {
        e = e$;
        size = 0;
      }
      if (store.marker) {
        store.marker.call(node.select('path.marker')[0][0], d, i);
      } else {
        m = node.select('path.marker');
        if ((store.type || 'color') === 'color') {
          m.attr({
            d: ("M" + size / 2 + " 0 A" + size / 2 + " " + size / 2 + " 0 0 0 " + size / 2 + " " + size) + ("A" + size / 2 + " " + size / 2 + " 0 0 0 " + size / 2 + " 0"),
            fill: store.scale(d)
          });
        } else if (store.type === 'radius') {
          r = store.scale(d);
          m.attr({
            cx: r,
            cy: r,
            r: r,
            d: ("M" + size / 2 + " " + (size / 2 - r) + " A" + r + " " + r + " 0 0 0 " + size / 2 + " " + (size / 2 + r)) + ("A" + r + " " + r + " 0 0 0 " + size / 2 + " " + (size / 2 - r)),
            fill: '#999'
          });
        }
      }
      dx = 0;
      if (store.type === 'radius') {
        dx = store.scale(data[data.length - 1]);
      }
      return node.select('text').attr({
        "text-anchor": "start",
        dy: '0.76em',
        dx: size + 3 + dx,
        "font-size": store.fontSize != null ? store.fontSize : void 8
      });
    });
    offset = [0, 0];
    max = [0, 0];
    this.select('text.label').remove();
    if (store.label) {
      label = this.append('text').attr({
        'class': 'label'
      });
      sel = label.selectAll('tspan').data(store.label.split('\n'));
      sel.exit().remove();
      sel.enter().append('tspan').text(function(it){
        return it;
      }).attr({
        x: 0
      });
      label.attr({
        "font-size": store.fontSize != null ? store.fontSize * 1.1 : void 8,
        "font-weight": 'bold',
        dy: '0.76em'
      });
      try {
        if ((ref$ = store.orient) === 'bottom' || ref$ === 'top') {
          offset[0] += label[0][0].getBBox().width + store.padding[0] || 10;
        } else {
          offset[1] += label[0][0].getBBox().height + store.padding[1] || 5;
        }
      } catch (e$) {
        e = e$;
        offset = [0, 0];
      }
    }
    this.selectAll('g.legend').each(function(d, i){
      var node, ref$, w, h, e;
      node = d3.select(this).attr({
        transform: "translate(" + offset[0] + " " + offset[1] + ")"
      });
      try {
        ref$ = [this.getBBox().width, this.getBBox().height], w = ref$[0], h = ref$[1];
      } catch (e$) {
        e = e$;
        ref$ = [0, 0], w = ref$[0], h = ref$[1];
      }
      if ((ref$ = store.orient) === 'bottom' || ref$ === 'top') {
        if (store.size && store.size[0] < offset[0] + w) {
          offset[0] = 0;
          offset[1] += h + (store.padding[1] || 5);
          node = d3.select(this).attr({
            transform: "translate(" + offset[0] + " " + offset[1] + ")"
          });
        }
        return offset[0] += w + (store.padding[0] || 10);
      } else {
        if (max[0] < w) {
          max[0] = w;
        }
        if (store.size && store.size[1] < offset[1] + h) {
          offset[1] = 0;
          offset[0] += max[0] + (store.padding[0] || 10);
          node = d3.select(this).attr({
            transform: "translate(" + offset[0] + " " + offset[1] + ")"
          });
        }
        offset[1] += h + (store.padding[1] || 5);
        return offset[1] += store.type === 'radius' ? 3 : 0;
      }
    });
    if (store.label && ((ref$ = store.orient) === 'left' || ref$ === 'right')) {
      offset = ret.offset();
      return label.selectAll('tspan').attr({
        "text-anchor": "middle",
        x: offset[0] / 2,
        dy: "1.1em"
      });
    }
  };
  ret.offset = function(){
    var box, e;
    if (!store.group) {
      return [0, 0];
    }
    try {
      box = store.group[0][0].getBBox();
    } catch (e$) {
      e = e$;
      box = {
        width: 0,
        height: 0
      };
    }
    return [box.width, box.height];
  };
  ['label', 'fontSize', 'type', 'marker', 'tickValues', 'ticks', 'orient', 'scale', 'size', 'padding'].map(function(k){
    return ret[k] = function(k){
      return function(it){
        if (!arguments.length) {
          return store[k];
        }
        store[k] = it;
        return ret;
      };
    }(k);
  });
  return ret;
};
plotd3.rwd.axis = function(){
  var store, axis, ret, k, v, setStyle, render;
  store = {
    orient: "bottom"
  };
  axis = d3.svg.axis();
  ret = function(){
    return ret.autotick(this, arguments);
  };
  for (k in axis) {
    v = axis[k];
    if (typeof v === 'function') {
      ret[k] = fn$(k);
    }
  }
  ret.offset = function(){
    return this._offset;
  };
  setStyle = function(group, orient){
    if (orient === 'bottom' && store.tickDirection !== 'vertical') {
      group.selectAll('.tick text').attr({
        "dy": '0.71em'
      });
    }
    if (store.tickDirection === 'vertical') {
      return group.selectAll('.tick text').style({
        'text-anchor': orient === 'bottom'
          ? 'start'
          : orient === 'top' ? 'end' : 'middle'
      }).attr({
        dy: 0
      });
    }
  };
  render = function(group, sizes, offset, orient){
    var mid, scale, ticks, x$, node, dy, dx;
    mid = (sizes[0] + sizes[1]) / 2;
    group.select('text.label').remove();
    group.call(axis);
    group.selectAll('text').attr({
      "font-size": store.fontSize != null ? store.fontSize : void 8,
      "writing-mode": store.tickDirection === 'vertical' ? 'tb-rl' : void 8
    });
    if (orient === 'radius') {
      scale = axis.scale();
      ticks = scale.ticks
        ? axis.tickValues() || scale.ticks(axis.ticks())
        : scale.domain();
      x$ = group.selectAll('path.textpath').data(ticks || []);
      x$.exit().remove();
      x$.enter().append('path').attr({
        'class': 'textpath'
      });
      group.selectAll('path.textpath').attr({
        id: function(d, i){
          return "plotd3-rwd-axis-radius-" + d + "-" + i;
        },
        fill: 'none',
        stroke: '#999',
        display: !store.showGrid ? 'none' : void 8,
        "stroke-width": 1,
        d: function(d, i){
          var r;
          r = scale(d);
          return "M1 " + (-r) + " A" + r + " " + r + " 0 1 1 0 " + (-r);
        }
      });
      group.selectAll('.tick').attr({
        transform: function(d, i){
          var x, y;
          if (store.showGrid) {
            return "translate(0 0)";
          }
          x = scale(d) * Math.sin(store.angle || 0);
          y = scale(d) * -Math.cos(store.angle || 0);
          return "translate(" + x + " " + y + ")";
        }
      });
      group.selectAll('.tick line').attr({
        display: 'none'
      });
      group.selectAll('.tick text').attr({
        x: 0,
        y: 0,
        dx: 1,
        dy: -2,
        transform: !store.showGrid ? "rotate(" + 180 * store.angle / Math.PI + ")" : void 8
      }).style({
        "text-anchor": 'start'
      });
      if (store.showGrid) {
        group.selectAll('.tick text').each(function(d, i){
          var x$;
          d3.select(this).text("");
          x$ = d3.select(this).selectAll('textPath').data([1]).enter().append('textPath');
          x$.attr({
            "xlink:href": function(){
              return "#plotd3-rwd-axis-radius-" + d + "-" + i;
            },
            "startOffset": store.angle * 100 / (Math.PI * 2) + "%",
            "spacing": "auto"
          });
          x$.text(d);
          return x$;
        });
      }
      group.select('.domain').attr({
        d: function(){
          var domain, x1, y1, x2, y2;
          domain = scale.domain();
          x1 = scale(domain[0]) * Math.sin(store.angle || 0);
          y1 = scale(domain[0]) * -Math.cos(store.angle || 0);
          x2 = scale(domain[domain.length - 1]) * Math.sin(store.angle || 0);
          y2 = scale(domain[domain.length - 1]) * -Math.cos(store.angle || 0);
          return "M" + x1 + " " + y1 + " L" + x2 + " " + y2;
        }
      });
    }
    setStyle(group, orient);
    if (store.label) {
      node = group.append('text').attr({
        'class': 'label'
      }).text(store.label);
      if (store.fontSize != null) {
        node.attr({
          "font-size": store.fontSize
        });
      }
      if (orient === 'bottom' || orient === 'top') {
        if (store.labelPosition === 'in') {
          return node.attr({
            transform: "translate(" + sizes[1] + " -3)",
            "text-anchor": "end"
          });
        } else {
          dy = offset + 5;
          if (orient === 'bottom') {
            dy += store.fontSize || 0;
          } else {
            dy *= -1;
          }
          return node.attr({
            transform: "translate(" + mid + " " + dy + ")",
            "text-anchor": "middle"
          });
        }
      } else {
        if (store.labelPosition === 'in') {
          return node.attr({
            transform: "translate(0 " + sizes[0] + ") rotate(-90)",
            dy: "1em",
            "text-anchor": "end"
          });
        } else {
          dx = offset + 5;
          if (orient === 'right') {
            dx += store.fontSize || 0;
          } else {
            dx *= -1;
          }
          return node.attr({
            transform: "translate(" + dx + " " + mid + ") rotate(-90)",
            "text-anchor": "middle"
          });
        }
      }
    }
  };
  ret.autotick = function(group, args){
    var ref$, scale, orient, sizes, size, its, ots, tp, offset, format, count, ticks, domain, tickHeight, step, gbox, pbox, inverse;
    args == null && (args = []);
    axis.apply(group, args);
    ref$ = [axis.scale(), store.orient], scale = ref$[0], orient = ref$[1];
    setStyle(group, orient);
    if (scale.rangeExtent) {
      sizes = scale.rangeExtent();
    } else {
      sizes = scale.range();
      sizes = [sizes[0], sizes[sizes.length - 1]];
      sizes.sort(function(a, b){
        return a - b;
      });
    }
    size = Math.abs(sizes[1] - sizes[0]);
    ref$ = [axis.innerTickSize(), axis.outerTickSize(), axis.tickPadding()], its = ref$[0], ots = ref$[1], tp = ref$[2];
    offset = d3.max([its, ots]) + tp + 1;
    format = axis.tickFormat();
    count = axis.ticks()[0];
    ticks = axis.tickValues() || (scale.ticks
      ? scale.ticks(count ? count : 10)
      : count
        ? (domain = scale.domain(), domain.filter(function(d, i){
          return !(i % Math.round(domain.length / (count || 1)));
        }))
        : scale.domain());
    if (ticks.length > count && count) {
      ticks = ticks.filter(function(d, i){
        return !(i % Math.round(ticks.length / (count || 1)));
      });
    }
    if (orient === 'left' || orient === 'right') {
      tickHeight = d3.max(group.selectAll('.tick text')[0].map(function(d, i){
        return d.getBBox().height;
      }));
      count = size / (1.4 * tickHeight || 14);
      count = Math.ceil(ticks.length / count);
      if (!store.handleOverlap || store.handleOverlap === 'hidden') {
        ticks = ticks.filter(function(d, i){
          return !(i % count);
        });
      }
      axis.tickValues(ticks);
      render(group, sizes, offset, orient);
      this._offset = d3.max(group.selectAll('.tick text')[0].map(function(d, i){
        return d.getBBox().width;
      }));
      this._offset += offset;
    } else {
      axis.tickValues(ticks);
      render(group, sizes, offset, orient);
      step = 1.15 * d3.max(group.selectAll('.tick text')[0].map(function(d, i){
        return d.getBBox().width;
      }));
      tickHeight = d3.max(group.selectAll('.tick text')[0].map(function(d, i){
        return d.getBBox().height;
      }));
      count = Math.ceil(ticks.length / (size / step));
      if (!store.handleOverlap || store.handleOverlap === 'hidden') {
        ticks = ticks.filter(function(d, i){
          return !(i % count);
        });
      } else if (store.handleOverlap === 'offset') {
        group.selectAll('.tick text').attr({
          transform: function(d, i){
            if (count > 1 && !(i % count)) {
              return "translate(0 " + (store.fontSize || 14) + ")";
            }
            return "";
          }
        });
      } else if (store.handleOverlap === 'none') {}
      axis.tickValues(ticks);
      render(group, sizes, offset, orient);
      tickHeight = d3.max(group.selectAll('.tick text')[0].map(function(d, i){
        return d.getBBox().height;
      }));
      this._offset = tickHeight + offset;
    }
    render(group, sizes, this._offset, orient);
    if (store.label && store.labelPosition !== 'in') {
      this._offset += group.select('text.label')[0][0].getBBox().height + 5;
    }
    if (store.boundaryTickInside) {
      gbox = group[0][0].getBBox();
      pbox = group.select('path')[0][0].getBBox();
      if (orient === 'left' || orient === 'right') {
        group.select('g.tick:first-of-type text').attr({
          dy: -store.fontSize / 2
        });
        group.select('g.tick:last-of-type text').attr({
          dy: store.fontSize
        });
      } else if (orient === 'bottom' || orient === 'top') {
        inverse = (ref$ = scale.range())[ref$.length - 1] > scale.range()[0]
          ? ['start', 'end']
          : ['end', 'start'];
        group.select('g.tick:first-of-type text').style({
          "text-anchor": inverse[0]
        });
        if (group.selectAll('g.tick')[0].length > 1) {
          group.select('g.tick:last-of-type text').style({
            "text-anchor": inverse[1]
          });
        }
      }
    }
    return group.selectAll("path,line").attr({
      stroke: 'black',
      fill: 'none'
    });
  };
  ['tickCount', 'fontSize', 'label', 'labelPosition', 'multiLine', 'boundaryTickInside', 'tickDirection', 'angle', 'showGrid', 'handleOverlap'].map(function(k){
    return ret[k] = function(k){
      return function(it){
        if (!arguments.length) {
          return store[k];
        }
        store[k] = it;
        return ret;
      };
    }(k);
  });
  ret.orient = function(it){
    if (it == null) {
      return store.orient;
    }
    store.orient = it;
    axis.orient(it);
    return ret;
  };
  return ret;
  function fn$(k){
    return function(){
      var r;
      r = axis[k].apply(axis, arguments);
      return r === axis ? ret : r;
    };
  }
};
plotd3.rwd.grid = function(){
  var store, ret;
  store = {
    orient: "horizontal",
    length: 0
  };
  ret = function(group){
    var scale, ticks, that, range, delta, len, x$, y$;
    scale = store.scale;
    ticks = (that = store.tickValues)
      ? that
      : (that = store.ticks)
        ? scale.ticks(that)
        : scale.ticks();
    group.selectAll("rect").data([1]).enter().append('rect');
    range = scale.range();
    delta = Math.abs(range[range.length - 1] - range[0]);
    group.select('rect').attr({
      x: store.orient === 'horizontal'
        ? 0
        : Math.min(range[range.length - 1], range[0]),
      y: store.orient === 'horizontal' ? Math.min(range[range.length - 1], range[0]) : 0,
      width: store.orient === 'horizontal' ? store.size : delta,
      height: store.orient === 'horizontal'
        ? delta
        : store.size,
      fill: store.background ? store.background : 'none'
    });
    if (['horizontal', 'vertical', 'angle'].indexOf(store.orient) >= 0) {
      len = store.size;
      x$ = group.selectAll("line.grid." + store.orient).data(ticks);
      x$.exit().remove();
      x$.enter().append('line').attr({
        'class': "grid " + store.orient
      });
      if (store.orient === 'angle') {
        group.selectAll("line.grid.angle").attr({
          x1: 0,
          y1: 0,
          x2: function(it){
            return Math.cos(scale(it)) * len;
          },
          y2: function(it){
            return Math.sin(scale(it)) * len;
          }
        });
      }
      if (store.orient === 'horizontal') {
        group.selectAll("line.grid.horizontal").attr({
          x1: 0,
          x2: len,
          y1: scale,
          y2: scale
        });
      }
      if (store.orient === 'vertical') {
        group.selectAll("line.grid.vertical").attr({
          x1: scale,
          x2: scale,
          y1: 0,
          y2: len
        });
      }
    } else if (store.orient === 'radial') {
      y$ = group.selectAll("circle.grid.radial").data(ticks);
      y$.exit().remove();
      y$.enter().append('circle').attr({
        'class': "grid radial"
      });
    }
    return group.selectAll('.grid').attr({
      stroke: store.stroke ? store.stroke : void 8,
      "stroke-width": store.strokeWidth ? store.strokeWidth : void 8,
      "stroke-dasharray": store.strokeDashArray ? store.strokeDashArray : void 8,
      fill: 'none'
    });
  };
  ['orient', 'tickValues', 'size', 'ticks', 'scale', 'stroke', 'strokeWidth', 'strokeDashArray', 'background'].map(function(k){
    return ret[k] = function(k){
      return function(it){
        if (!arguments.length) {
          return store[k];
        }
        store[k] = it;
        return ret;
      };
    }(k);
  });
  return ret;
};
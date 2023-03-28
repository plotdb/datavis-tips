(function(){
  var config;
  config = {
    langs: ['zh', 'en'],
    keyTypes: ['charts', 'categories', 'encodings', 'dimension', 'taxonomies'],
    charts: ['animated-scatter-plot', 'arc-diagram', 'area-chart', 'bar-chart', 'bcg-matrix', 'box-whisky-plot', 'bubble-array', 'bubble-chart', 'bubble-map', 'bullet-chart', 'bump-chart', 'cherry-chart', 'chord-diagram', 'circular-treemap', 'column-chart', 'combo-chart', 'connected-scatter-plot', 'connected-ternary-plot', 'continuous-error-bar-plot', 'curved-bar-chart', 'cycle-plot', 'dashboard', 'difference-chart', 'donut-chart', 'layered-area-chart', 'dorling-cartogram', 'dot-chart', 'dumbbell-chart', 'fishbone', 'flow-chart', 'cohort-chart', 'full-stacked-bar-chart', 'funnel-chart', 'gantt-diagram', 'gauge', 'grouped-bar-chart', 'infographics', 'line-chart', 'lollipop-chart', 'histogram', 'heatmap', 'contour-map', 'map', 'marimekko-chart', 'paired-scatter-plot', 'paired-slopegraph', 'spectrogram', 'parallel-coordinates', 'pareto-diagram', 'pie-bubble', 'pie-chart-3d', 'pie-chart', 'polar-chart', 'population-pyramid', 'pyramid-chart', 'radar-chart', 'recycle-chart', 'sankey-chart', 'sankey-chord', 'scatter-plot', 'slopegraph', 'span-chart', 'stacked-area-chart', 'stacked-bar-chart', 'step-chart', 'streamgraph', 'sun-burst-diagram', 'ternary-plot', 'timeline', 'treemap', 'venn-diagram', 'vertical-dumbbell-chart', 'violin-chart', 'voronoi-treemap', 'waffle-chart', 'waterfall-chart', 'wordcloud', 'world-globe', 'jigsaw-treemap', 'convex-treemap', 'network', 'full-stacked-area-chart', 'alluvial-diagram', 'stacked-radar-chart', 'lollipop-with-pie', 'chernoff-face', 'candlestick-chart', 'thermometer', 'beeswarm-plot'],
    categories: ['distribution', 'correlation', 'trend', 'change', 'comparison', 'proportion', 'geography', 'temporal', 'hierarchy', 'overview', 'periodic', 'diverging', 'performance'],
    encodings: ['saturation', 'hue', 'lightness', 'area', 'position', 'aligned-length', 'direction', 'angle', 'shape', 'volume', 'length', 'color'],
    dimensions: ['y-coord', 'x-coord', 'angle', 'area', 'color', 'radius', 'length'],
    taxonomies: ['nominal', 'categorical', 'ordinal', 'interval', 'ratio', 'any'],
    translation: {
      "animated-scatter-plot": {
        zh: "動畫散布圖",
        en: "Animated Scatter Plot"
      },
      "scatter-plot": {
        zh: "散布圖",
        en: "Scatter Plot"
      },
      "paired-scatter-plot": {
        zh: "配對散布圖",
        en: "Paired Scatter Plot"
      },
      "connected-scatter-plot": {
        zh: "連接散布圖",
        en: "Connected Scatter Plot"
      },
      "bcg-matrix": {
        zh: "波士頓矩陣",
        en: "BCG Matrix"
      },
      "ternary-plot": {
        zh: "三元圖",
        en: "Ternary Plot"
      },
      "connected-ternary-plot": {
        zh: "連接三元圖",
        en: "Connected Ternary Plot"
      },
      "line-chart": {
        zh: "折線圖",
        en: "Line Chart"
      },
      "step-chart": {
        zh: "步階圖",
        en: "Step Chart"
      },
      "cycle-plot": {
        zh: "循環圖",
        en: "Cycle Plot"
      },
      "pie-chart": {
        zh: "圓餅圖",
        en: "Pie Chart"
      },
      "donut-chart": {
        zh: "甜甜圈圖",
        en: "Donut Chart"
      },
      "sun-burst-diagram": {
        zh: "太陽花圖*",
        en: "Sun Burst Diagram"
      },
      "pie-chart-3d": {
        zh: "立體圓餅圖",
        en: "3D Pie Chart"
      },
      "bar-chart": {
        zh: "長條圖",
        en: "Bar Chart"
      },
      "stacked-bar-chart": {
        zh: "堆積長條圖",
        en: "Stacked Bar Chart"
      },
      "grouped-bar-chart": {
        zh: "分組長條圖",
        en: "Grouped Bar Chart"
      },
      "full-stacked-bar-chart": {
        zh: "100%堆積長條圖",
        en: "100% Stacked Bar Chart"
      },
      "full-stacked-area-chart": {
        zh: "100%堆積區域圖",
        en: "100% Stacked Area Chart"
      },
      "alluvial-diagram": {
        zh: "沖積圖",
        en: "Alluvial Diagram"
      },
      "marimekko-chart": {
        zh: "Marimekko 圖*",
        en: "Marimekko Chart"
      },
      "span-chart": {
        zh: "長度圖*",
        en: "Span Chart"
      },
      "population-pyramid": {
        zh: "人口金字塔",
        en: "Population Pyramid"
      },
      "bullet-chart": {
        zh: "子彈圖",
        en: "Bullet Chart"
      },
      "curved-bar-chart": {
        zh: "曲式長條圖",
        en: "Curved Bar Chart"
      },
      "gantt-diagram": {
        zh: "甘特圖",
        en: "Gantt Diagram"
      },
      "waterfall-chart": {
        zh: "瀑布圖",
        en: "Waterfall Chart"
      },
      "parallel-coordinates": {
        zh: "平行座標圖*",
        en: "Parallel Coordinates"
      },
      "bump-chart": {
        zh: "凹凸圖",
        en: "Bump Chart"
      },
      "combo-chart": {
        zh: "複合圖",
        en: "Combo Chart"
      },
      "continuous-error-bar-plot": {
        zh: "誤差區間長條圖",
        en: "Continuous Error Bar Plot"
      },
      "column-chart": {
        zh: "直式長條圖",
        en: "Column Chart"
      },
      "polar-chart": {
        zh: "極區圖",
        en: "Polar Chart"
      },
      "bubble-chart": {
        zh: "泡泡圖",
        en: "Bubble Chart"
      },
      "bubble-map": {
        zh: "泡泡地圖",
        en: "Bubble Map"
      },
      "dorling-cartogram": {
        zh: "圓式統計地圖*",
        en: "Dorling Cartogram"
      },
      "pie-bubble": {
        zh: "圓餅泡泡圖",
        en: "Pie Bubble"
      },
      "slopegraph": {
        zh: "滑坡圖",
        en: "Slopegraph"
      },
      "radar-chart": {
        zh: "雷達圖",
        en: "Radar Chart"
      },
      "stacked-radar-chart": {
        zh: "堆積雷達圖",
        en: "Stacked Radar Chart"
      },
      "circular-treemap": {
        zh: "圓式樹狀圖*",
        en: "Circular Treemap"
      },
      "voronoi-treemap": {
        zh: "Voronoi 樹狀圖",
        en: "Voronoi Treemap"
      },
      "jigsaw-treemap": {
        zh: "Jigsaw 樹狀圖",
        en: "Jigsaw Treemap"
      },
      "convex-treemap": {
        zh: "Convex 樹狀圖",
        en: "Convex Treemap"
      },
      "dot-chart": {
        zh: "點圖",
        en: "Dot Plot"
      },
      "lollipop-chart": {
        zh: "棒棒糖圖",
        en: "Lollipop Chart"
      },
      "lollipop-with-pie": {
        zh: "圓餅棒棒糖圖",
        en: "Lollipop Pies"
      },
      "arc-diagram": {
        zh: "弧線圖",
        en: "Arc Diagram"
      },
      "area-chart": {
        zh: "區域圖",
        en: "Area Chart"
      },
      "layered-area-chart": {
        zh: "分層式區域圖",
        en: "Layered Area Chart"
      },
      "box-whisky-plot": {
        zh: "盒鬚圖",
        en: "Box Whisky Plot"
      },
      "bubble-array": {
        zh: "泡泡陣列",
        en: "Bubble Array"
      },
      "cherry-chart": {
        zh: "櫻桃圖",
        en: "Cherry Chart"
      },
      "chord-diagram": {
        zh: "弦圖",
        en: "Chord Diagram"
      },
      "dashboard": {
        zh: "儀表板",
        en: "Dashboard"
      },
      "difference-chart": {
        zh: "面積差異圖",
        en: "Difference Chart"
      },
      "dumbbell-chart": {
        zh: "啞鈴圖",
        en: "Dumbbell Chart"
      },
      "fishbone": {
        zh: "魚骨圖",
        en: "Fishbone"
      },
      "flow-chart": {
        zh: "流量圖",
        en: "Flow Chart"
      },
      "funnel-chart": {
        zh: "漏斗圖",
        en: "Funnel Chart"
      },
      "gauge": {
        zh: "指示儀表",
        en: "Gauge Meter"
      },
      "infographics": {
        zh: "資訊圖表",
        en: "Infographics"
      },
      "map": {
        zh: "地圖",
        en: "Map"
      },
      "paired-slopegraph": {
        zh: "配對滑坡圖",
        en: "Paired Slopegraph"
      },
      "pareto-diagram": {
        zh: "柏拉圖",
        en: "Pareto Diagram"
      },
      "pyramid-chart": {
        zh: "金字塔圖",
        en: "Pyramid Chart"
      },
      "recycle-chart": {
        zh: "循環圖",
        en: "Recycle Chart"
      },
      "sankey-chart": {
        zh: "山基圖",
        en: "Sankey Chart"
      },
      "sankey-chord": {
        zh: "山基式弦圖",
        en: "Sankey Chord"
      },
      "stacked-area-chart": {
        zh: "堆積區域圖",
        en: "Stacked Area Chart"
      },
      "streamgraph": {
        zh: "主題河流",
        en: "Streamgraph"
      },
      "timeline": {
        zh: "時間軸",
        en: "Timeline"
      },
      "treemap": {
        zh: "樹狀圖",
        en: "Treemap"
      },
      "venn-diagram": {
        zh: "文氏圖",
        en: "Venn Diagram"
      },
      "vertical-dumbbell-chart": {
        zh: "直式啞鈴圖",
        en: "Vertical Dumbbell Chart"
      },
      "violin-chart": {
        zh: "提琴圖",
        en: "Violin Chart"
      },
      "waffle-chart": {
        zh: "鬆餅圖",
        en: "Waffle Chart"
      },
      "wordcloud": {
        zh: "文字雲",
        en: "Word Cloud"
      },
      "world-globe": {
        zh: "地球儀",
        en: "World Globe"
      },
      "network": {
        zh: "網絡圖",
        en: "Network Graph"
      },
      "histogram": {
        zh: "直方圖",
        en: "Histogram"
      },
      "heatmap": {
        zh: "熱度圖",
        en: "Heatmap"
      },
      "contour-map": {
        zh: "輪廓圖",
        en: "Contour Map"
      },
      "spectrogram": {
        zh: "光譜圖",
        en: "Spectrogram"
      },
      "cohort-chart": {
        zh: "隊列圖",
        en: "Cohort Chart"
      },
      "chernoff-face": {
        zh: "切爾諾夫臉型",
        en: "Chernoff Face"
      },
      "candlestick-chart": {
        zh: "K線圖",
        en: "candlestick-chart"
      },
      "thermometer": {
        zh: "溫度計",
        en: "Thermometer"
      },
      "beeswarm-plot": {
        zh: "蜂群散布圖",
        en: "Beeswarm Plot"
      },
      "distribution": {
        zh: "分布",
        en: "distribution"
      },
      "correlation": {
        zh: "相關",
        en: "correlation"
      },
      "trend": {
        zh: "趨勢",
        en: "trend"
      },
      "change": {
        zh: "變化",
        en: "change"
      },
      "comparison": {
        zh: "比較",
        en: "comparison"
      },
      "proportion": {
        zh: "比例",
        en: "proportion"
      },
      "geography": {
        zh: "空間",
        en: "geography"
      },
      "temporal": {
        zh: "時間",
        en: "temporal"
      },
      "hierarchy": {
        zh: "階層",
        en: "hierarchy"
      },
      "overview": {
        zh: "概觀",
        en: "overview"
      },
      "periodic": {
        zh: "週期",
        en: "Periodic"
      },
      "saturation": {
        zh: "飽和度",
        en: "saturation"
      },
      "hue": {
        zh: "色調",
        en: "hue"
      },
      "lightness": {
        zh: "明度",
        en: "lightness"
      },
      "area": {
        zh: "面積",
        en: "area"
      },
      "position": {
        zh: "座標",
        en: "position"
      },
      "aligned-length": {
        zh: "長度(共軸)",
        en: "aligned length"
      },
      "direction": {
        zh: "方向",
        en: "direction"
      },
      "angle": {
        zh: "角度",
        en: "angle"
      },
      "shape": {
        zh: "形狀",
        en: "shape"
      },
      "volume": {
        zh: "體積",
        en: "volume"
      },
      "length": {
        zh: "長度(異軸)",
        en: "length"
      },
      "work best for": {
        zh: "最適合用於",
        en: "work best for"
      },
      "Pros": {
        zh: "優點",
        en: "Pros"
      },
      "Cons": {
        zh: "缺點",
        en: "Cons"
      },
      "Dimensions": {
        zh: "圖表維度",
        en: "Dimensions"
      },
      "Visual Encodings": {
        zh: "視覺元素",
        en: "Visual Encodings"
      },
      "Common Practice": {
        zh: "常見應用",
        en: "Common Practice"
      },
      "Classic Example": {
        zh: "經典案例",
        en: "Classic Example"
      },
      "Media Usage": {
        zh: "媒體案例",
        en: "Media Usage"
      },
      "Variants": {
        zh: "相關變形",
        en: "Variants"
      },
      "Guideline": {
        zh: "使用要點",
        en: "Guideline"
      },
      "Charts": {
        zh: "圖表",
        en: "Charts"
      },
      "Categories": {
        zh: "類別",
        en: "Categories"
      },
      "Encodings": {
        zh: "視覺元素",
        en: "Encodings"
      },
      "維": {
        zh: "維",
        en: "dimension(s)"
      },
      "種編碼": {
        zh: "種",
        en: "encodings"
      },
      "Alternatives": {
        zh: "替代方案",
        en: "Alternatives"
      },
      "y-coord": {
        zh: "Y 軸",
        en: "Y Coord"
      },
      "x-coord": {
        zh: "X 軸",
        en: "X Coord"
      },
      "color": {
        zh: "顏色",
        en: "Color"
      },
      "radius": {
        zh: "半徑",
        en: "Radius"
      },
      "nominal": {
        zh: "文字",
        en: "Nominal"
      },
      "ordinal": {
        zh: "序值",
        en: "Ordinal"
      },
      "categorical": {
        zh: "類別",
        en: "Category"
      },
      "interval": {
        zh: "相對數值",
        en: "Interval"
      },
      "ratio": {
        zh: "絕對數值",
        en: "Ratio"
      },
      "any": {
        zh: "任意資料",
        en: "Any Type"
      },
      "diverging": {
        zh: "分歧式",
        en: "Diverging"
      },
      "performance": {
        zh: "指標式",
        en: "Performance"
      }
    }
  };
  config.bannerConfig = [
    {
      margin: 20,
      background: "#f9f9f9",
      gridBackground: "none",
      padding: 2,
      animationDuration: 1000,
      animationTiming: 'bounce',
      palette: {
        colors: [
          {
            hex: "#e32"
          }, {
            hex: "#f96"
          }, {
            hex: "#c65"
          }
        ]
      },
      legendShow: false,
      fill: "rgba(100%,70%,60%,0.5)",
      stroke: '#f21',
      fontSize: 14,
      fontFamily: "arial",
      gridStrokeWidth: 1,
      gridDashArray: "1 0",
      gridStroke: "#ddd",
      gridFrameStrokeWidth: 0,
      textFill: "#777",
      sort: "Descending",
      xAxisStroke: '#444',
      xAxisTickSizeInner: 0,
      xAxisTickSizeOuter: 0,
      xAxisTickPadding: 6,
      yAxisHandleOverlap: "none",
      yAxisShowDomain: true,
      yAxisStroke: "#444",
      yAxisShow: true,
      yAxisTickCount: 6,
      labelShow: true,
      labelShowOverflow: false,
      labelShadowSize: 0,
      labelShowValue: false
    }, {
      margin: 20,
      background: "#444444",
      gridBackground: "rgba(0%,0%,0%,0)",
      palette: {
        colors: [
          {
            hex: '#7cf'
          }, {
            hex: '#ddd'
          }, {
            hex: '#99a'
          }
        ]
      },
      fill: "rgba(13%,32%,51%,0.7)",
      stroke: '#09f',
      padding: 1,
      fontSize: 13,
      fontFamily: "Century Gothic",
      animationTiming: 'elastic',
      labelShow: false,
      gridStrokeWidth: 1,
      gridDashArray: "1 5",
      gridStroke: "rgba(100%,100%,100%,0.2)",
      gridFrameStrokeWidth: 0,
      textFill: "#fff",
      sort: "Ascending",
      xAxisStroke: '#ace',
      xAxisTickSizeInner: 4,
      yAxisTickCount: 3,
      yAxisShow: true,
      labelShowOverflow: false
    }, {
      margin: 20,
      background: "#eeeccc",
      gridBackground: "rgba(0%,0%,0%,0)",
      palette: {
        colors: [
          {
            hex: "#e96"
          }, {
            hex: "#ae5"
          }, {
            hex: "#48d"
          }, {
            hex: "#999"
          }
        ]
      },
      fill: "rgba(53%,72%,31%,0.5)",
      stroke: '#392',
      padding: 6,
      animationTiming: 'linear',
      fontSize: 13,
      fontFamily: "Century Gothic",
      labelShow: false,
      gridStrokeWidth: 0,
      gridDashArray: "1 0",
      gridStroke: "rgba(0,0,0,0)",
      gridFrameStrokeWidth: 0,
      textFill: "#000",
      sort: "Ascending",
      xAxisStroke: '#222',
      xAxisTickSizeInner: 4,
      yAxisTickCount: 1,
      yAxisShow: false,
      labelShowOverflow: false
    }
  ];
  if (typeof module != 'undefined' && module !== null) {
    module.exports = config;
  }
  if (typeof window != 'undefined' && window !== null) {
    window.config = config;
  }
  return config;
})();
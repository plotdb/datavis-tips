(->
  config = do
    key-types: <[charts categories encodings dimension taxonomies]>
    charts: <[
      animated-scatter-plot scatter-plot paired-scatter-plot connected-scatter-plot bcg-matrix
      ternary-plot connected-ternary-plot line-chart step-chart cycle-plot pie-chart donut-chart
      sun-burst-diagram pie-chart-3d bar-chart stacked-bar-chart grouped-bar-chart
      full-stacked-bar-chart marimekko-chart span-chart population-pyramid bullet-chart
      curved-bar-chart gantt-diagram waterfall-chart parallel-coordinates bump-chart combo-chart
      continuous-error-bar-plot column-chart polar-chart bubble-chart bubble-map dorling-cartogram
      pie-bubble circular-treemap voronoi-treemap jigsaw-treemap convex-treemap dot-chart lollipop-chart
      slopegraph
    ]>

    categories: <[
      distribution correlation trend change comparison proportion geography temporal hierarchy
    ]>

    encodings: <[
      saturation hue lightness area position aligned-length direction angle shape volume length color
    ]>

    dimensions: <[
      y-coord x-coord angle area color radius
    ]>
    taxonomies: <[
      nominal categorical ordinal interval ratio any
    ]>
    translation: do
      "animated-scatter-plot": do
        zh: "動畫散布圖"
        en: "Animated Scatter Plot"
      "scatter-plot": do
        zh: "散布圖"
        en: "Scatter Plot"
      "paired-scatter-plot": do
        zh: "配對散布圖"
        en: "Paired Scatter Plot"
      "connected-scatter-plot": do
        zh: "連接散布圖"
        en: "Connected Scatter Plot"
      "bcg-matrix": do
        zh: "波士頓矩陣"
        en: "BCG Matrix"
      "ternary-plot": do
        zh: "三元圖"
        en: "Ternary Plot"
      "connected-ternary-plot": do
        zh: "連接三元圖"
        en: "Connected Ternary Plot"
      "line-chart": do
        zh: "折線圖"
        en: "Line Chart"
      "step-chart": do
        zh: "步階圖"
        en: "Step Chart"
      "cycle-plot": do
        zh: "循環圖"
        en: "Cycle Plot"
      "pie-chart": do
        zh: "圓餅圖"
        en: "Pie Chart"
      "donut-chart": do
        zh: "甜甜圈圖"
        en: "Donut Chart"
      "sun-burst-diagram": do
        zh: "太陽花圖*"
        en: "Sun Burst Diagram"
      "pie-chart-3d": do
        zh: "立體圓餅圖"
        en: "3D Pie Chart"
      "bar-chart": do
        zh: "長條圖"
        en: "Bar Chart"
      "stacked-bar-chart": do
        zh: "堆積長條圖"
        en: "Stacked Bar Chart"
      "grouped-bar-chart": do
        zh: "分組長條圖"
        en: "Grouped Bar Chart"
      "full-stacked-bar-chart": do
        zh: "100%長條圖"
        en: "100% Stacked Bar Chart"
      "marimekko-chart": do
        zh: "Marimekko 圖*"
        en: "Marimekko Chart"
      "span-chart": do
        zh: "長度圖*"
        en: "Span Chart"
      "population-pyramid": do
        zh: "人口金字塔"
        en: "Population Pyramid"
      "bullet-chart": do
        zh: "子彈圖"
        en: "Bullet Chart"
      "curved-bar-chart": do
        zh: "曲式長條圖"
        en: "Curved Bar Chart"
      "gantt-diagram": do
        zh: "甘特圖"
        en: "Gantt Diagram"
      "waterfall-chart": do
        zh: "瀑布圖"
        en: "Waterfall Chart"
      "parallel-coordinates": do
        zh: "平行座標圖*"
        en: "Parallel Coordinates"
      "bump-chart": do
        zh: "凹凸圖"
        en: "Bump Chart"
      "combo-chart": do
        zh: "複合圖"
        en: "Combo Chart"
      "continuous-error-bar-plot": do
        zh: "誤差區間長條圖"
        en: "Continuous Error Bar Plot"
      "column-chart": do
        zh: "直式長條圖"
        en: "Column Chart"
      "polar-chart": do
        zh: "極區圖"
        en: "Polar Chart"
      "bubble-chart": do
        zh: "泡泡圖"
        en: "Bubble Chart"
      "bubble-map": do
        zh: "泡泡地圖"
        en: "Bubble Map"
      "dorling-cartogram": do
        zh: "圓式統計地圖*"
        en: "Dorling Cartogram"
      "pie-bubble": do
        zh: "圓餅泡泡圖"
        en: "Pie Bubble"
      "slopegraph": do
        zh: "滑坡圖"
        en: "Slopegraph"
      "circular-treemap": do
        zh: "圓式樹狀圖*"
        en: "Circular Treemap"
      "voronoi-treemap": do
        zh: "Voronoi 樹狀圖"
        en: "Voronoi Treemap"
      "jigsaw-treemap": do
        zh: "Jigsaw 樹狀圖"
        en: "Jigsaw Treemap"
      "convex-treemap": do
        zh: "Convex 樹狀圖"
        en: "Convex Treemap"
      "dot-chart": do
        zh: "點圖"
        en: "Dot Plot"
      "lollipop-chart": do
        zh: "棒棒糖圖"
        en: "Lollipop Chart"
      "distribution": do
        zh: "分布"
        en: "distribution"
      "correlation": do
        zh: "相關"
        en: "correlation"
      "trend": do
        zh: "趨勢"
        en: "trend"
      "change": do
        zh: "變化"
        en: "change"
      "comparison": do
        zh: "比較"
        en: "comparison"
      "proportion": do
        zh: "比例"
        en: "proportion"
      "geography": do
        zh: "空間"
        en: "geography"
      "temporal": do
        zh: "時間"
        en: "temporal"
      "hierarchy": do
        zh: "階層"
        en: "hierarchy"
      "saturation": do
        zh: "飽和度"
        en: "saturation"
      "hue": do
        zh: "色調"
        en: "hue"
      "lightness": do
        zh: "明度"
        en: "lightness"
      "area": do
        zh: "面積"
        en: "area"
      "position": do
        zh: "座標"
        en: "position"
      "aligned-length": do
        zh: "長度(共軸)"
        en: "aligned length"
      "direction": do
        zh: "方向"
        en: "direction"
      "angle": do
        zh: "角度"
        en: "angle"
      "shape": do
        zh: "形狀"
        en: "shape"
      "volume": do
        zh: "體積"
        en: "volume"
      "length": do
        zh: "長度(異軸)"
        en: "length"
      "work best for": do
        zh: "最適合用於"
        en: "work best for"
      "Pros": do
        zh: "優點"
        en: "Pros"
      "Cons": do
        zh: "缺點"
        en: "Cons"
      "Dimensions": do
        zh: "圖表維度"
        en: "Dimensions"
      "Visual Encodings": do
        zh: "視覺元素"
        en: "Visual Encodings"
      "Common Practice": do
        zh: "常見應用"
        en: "Common Practice"
      "Classic Example": do
        zh: "經典案例"
        en: "Classic Example"
      "Media Usage": do
        zh: "媒體案例"
        en: "Media Usage"
      "Variants": do
        zh: "相關變形"
        en: "Variants"
      "Guideline": do
        zh: "使用要點"
        en: "Guideline"
      "Charts": do
        zh: "圖表"
        en: "Charts"
      "Categories": do
        zh: "類別"
        en: "Categories"
      "Encodings": do
        zh: "視覺元素"
        en: "Encodings"
      "維": do
        zh: "維"
        en: "dimension(s)"
      "種編碼": do
        zh: "種"
        en: "encodings"
      "Alternatives": do
        zh: "替代方案"
        en: "Alternatives"
      "y-coord": do
        zh: "Y 軸"
        en: "Y Coord"
      "x-coord": do
        zh: "X 軸"
        en: "X Coord"
      "color": do
        zh: "顏色"
        en: "Color"
      "radius": do
        zh: "半徑"
        en: "Radius"
      "nominal": do
        zh: "文字"
        en: "Nominal"
      "ordinal": do
        zh: "序值"
        en: "Ordinal"
      "categorical": do
        zh: "類別"
        en: "Category"
      "interval": do
        zh: "相對數值"
        en: "Interval"
      "ratio": do
        zh: "絕對數值"
        en: "Ratio"
      "any": do
        zh: "任意資料"
        en: "Any Type"

  config.banner-config = [{
    margin: 10, background: "\#eee", gridBackground: "none",
    padding: 12,
    palette: {colors: [{hex: "\#444"},{hex: "\#666"},{hex: "\#999"}]},
    legendShow: false,
    fill: "rgba(100%,63%,40%,0.7)",
    fontSize: 11,
    fontFamily: "arial",
    gridStrokeWidth: 1,
    gridDashArray: "1 0",
    gridStroke: "\#ddd",
    gridFrameStrokeWidth: 0,
    textFill: "\#666",
    sort: "Descending",
    xAxisTickSizeInner: 0,
    xAxisTickSizeOuter: 0,
    yAxisHandleOverlap: "none",
    yAxisShowDomain: true,
    yAxisStroke: "\#aaa",
    labelShow: true
  },{
    margin: 10, background: "\#eaeff5", gridBackground: "\#eaeff5",
    palette: {colors: [{hex: "\#fff"},{hex: "\#ffd"},{hex: "\#fdf"}]},
    fill: "rgba(14%,35%,50%,0.8)",
    padding: 6,
    fontSize: 13,
    fontFamily: "tahoma",
    labelShow: false,
    gridStrokeWidth: 0,
    gridDashArray: "1 0",
    gridStroke: "rgba(0,0,0,0)",
    gridFrameStrokeWidth: 0,
    textFill: "\#554",
    sort: "Ascending",
    xAxisTickSizeInner: 4
  },{
    margin: 10, background: "\#f9f9f9", gridBackground: "\#f9f9f9",
    palette: {colors: [{hex: "\#e96"},{hex: "\#ae5"},{hex: "\#48d"},{hex: "\#999"}]},
    padding: 2,
    legendShow: true,
    fontFamily: "lato",
    fill: "rgba(25%,25%,25%,0.9)",
    fontSize: 12,
    textFill: "\#444",
    sort: "None",
    xAxisTickSizeInner: 4,
    yAxisTickSizeOuter: 4,
    gridDashArray: "2 2",
    gridStrokeWidth: 1,
    gridStroke: "\#999",
    xAxisStroke: "\#999"
  }]

  if module? => module.exports = config
  if window? => window.config = config
  config
)!

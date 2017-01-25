(->
  config = do
    langs: <[zh en]>
    key-types: <[charts categories encodings dimension taxonomies]>
    charts: <[
      animated-scatter-plot arc-diagram area-chart bar-chart
      bcg-matrix box-whisky-plot bubble-array bubble-chart bubble-map bullet-chart
      bump-chart cherry-chart chord-diagram circular-treemap column-chart combo-chart
      connected-scatter-plot connected-ternary-plot continuous-error-bar-plot
      curved-bar-chart cycle-plot dashboard difference-chart donut-chart
      dorling-cartogram dot-chart dumbbell-chart fishbone flow-chart cohort-chart
      full-stacked-bar-chart funnel-chart gantt-diagram gauge grouped-bar-chart
      infographics line-chart lollipop-chart histogram heatmap contour-map
      map marimekko-chart paired-scatter-plot paired-slopegraph spectrum
      parallel-coordinates pareto-diagram pie-bubble pie-chart-3d pie-chart polar-chart
      population-pyramid pyramid-chart radar-chart recycle-chart sankey-chart sankey-chord
      scatter-plot slopegraph span-chart stacked-area-chart stacked-bar-chart
      step-chart streamgraph sun-burst-diagram ternary-plot timeline treemap
      venn-diagram vertical-dumbbell-chart violin-chart voronoi-treemap waffle-chart
      waterfall-chart wordcloud world-globe jigsaw-treemap convex-treemap network
    ]>

    categories: <[
      distribution correlation trend change comparison proportion geography temporal hierarchy overview
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
      "radar-chart": do
        zh: "雷達圖"
        en: "Radar Chart"
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
      "arc-diagram": do
        zh: "弧線圖"
        en: "Arc Diagram"
      "area-chart": do
        zh: "面積圖"
        en: "Area Chart"
      "box-whisky-plot": do
        zh: "盒鬚圖"
        en: "Box Whisky Plot"
      "bubble-array": do
        zh: "泡泡陣列"
        en: "Bubble Array"
      "cherry-chart": do
        zh: "櫻桃圖"
        en: "Cherry Chart"
      "chord-diagram": do
        zh: "弦圖"
        en: "Chord Diagram"
      "dashboard": do
        zh: "儀表板"
        en: "Dashboard"
      "difference-chart": do
        zh: "面積差異圖"
        en: "Difference Chart"
      "dumbbell-chart": do
        zh: "啞鈴圖"
        en: "Dumbbell Chart"
      "fishbone": do
        zh: "魚骨圖"
        en: "Fishbone"
      "flow-chart": do
        zh: "流量圖"
        en: "Flow Chart"
      "funnel-chart": do
        zh: "漏斗圖"
        en: "Funnel Chart"
      "gauge": do
        zh: "指示儀表"
        en: "Gauge Meter"      
      "infographics": do
        zh: "資訊圖表"
        en: "Infographics"
      "map": do
        zh: "地圖"
        en: "Map"
      "paired-slopegraph": do
        zh: "配對滑坡圖"
        en: "Paired Slopegraph"
      "pareto-diagram": do
        zh: "柏拉圖"
        en: "Pareto Diagram"
      "pyramid-chart": do
        zh: "金字塔圖"
        en: "Pyramid Chart"
      "recycle-chart": do
        zh: "循環圖"
        en: "Recycle Chart"
      "sankey-chart": do
        zh: "山基圖"
        en: "Sankey Chart"
      "sankey-chord": do
        zh: "山基式弦圖"
        en: "Sankey Chord"
      "stacked-area-chart": do
        zh: "堆積面積圖"
        en: "Stacked Area Chart"
      "streamgraph": do
        zh: "主題河流"
        en: "Streamgraph"
      "timeline": do
        zh: "時間軸"
        en: "Timeline"
      "treemap": do
        zh: "樹狀圖"
        en: "Treemap"
      "venn-diagram": do
        zh: "文氏圖"
        en: "Venn Diagram"
      "vertical-dumbbell-chart": do
        zh: "直式啞鈴圖"
        en: "Vertical Dumbbell Chart"
      "violin-chart": do
        zh: "提琴圖"
        en: "Violin Chart"
      "waffle-chart": do
        zh: "鬆餅圖"
        en: "Waffle Chart"
      "wordcloud": do
        zh: "文字雲"
        en: "Word Cloud"
      "world-globe": do
        zh: "地球儀"
        en: "World Globe"
      "network": do
        zh: "網絡圖"
        en: "Network Graph"
      "histogram": do
        zh: "直方圖"
        en: "Histogram"
      "heatmap": do
        zh: "熱度圖"
        en: "Heatmap"
      "contour-map": do
        zh: "輪廓圖",
        en: "Contour Map"
      "spectrogram": do
        zh: "光譜圖"
        en: "Spectrogram"
      "cohort-chart": do
        zh: "隊列圖"
        en: "Cohort Chart"
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
      "overview": do
        zh: "概觀"
        en: "overview"
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
    margin: 10, background: "\#444444", gridBackground: "\#555555",
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

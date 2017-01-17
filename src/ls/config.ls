(->
  config = do

    charts: <[
      animated-scatter-plot scatter-plot paired-scatter-plot connected-scatter-plot bcg-matrix
      ternary-plot connected-ternary-plot line-chart step-chart cycle-plot pie-chart donut-chart
      sun-burst-diagram pie-chart-3d bar-chart stacked-bar-chart grouped-bar-chart
      full-stacked-bar-chart marimekko-chart span-chart population-pyramid bullet-chart
      curved-bar-chart gantt-diagram waterfall-chart parallel-coordinates bump-chart combo-chart
      continuous-error-bar-plot column-chart polar-chart bubble-chart bubble-map dorling-cartogram
      pie-bubble circular-treemap voronoi-treemap jigsaw-treemap convex-treemap
    ]>

    categories: <[
      distribution correlation trend change comparison proportion geography temporal hierarchy
    ]>

    encodings: <[
      saturation hue lightness area position aligned-length direction angle shape volume length
    ]>

    dimensions: <[
      y-coord x-coord angle area color
    ]>
    taxonomies: <[
      nominal categorical ordinal interval ratio
    ]>
    translation: do
      "animated-scatter-plot": do
        zh: "動畫散布圖"
        en: "animated scatter plot"
      "scatter-plot": do
        zh: "散布圖"
        en: "scatter plot"
      "paired-scatter-plot": do
        zh: "配對散布圖"
        en: "paired scatter plot"
      "connected-scatter-plot": do
        zh: "連接散布圖"
        en: "connected scatter plot"
      "bcg-matrix": do
        zh: "波士頓矩陣"
        en: "BCG Matrix"
      "ternary-plot": do
        zh: "三元圖"
        en: "ternary plot"
      "connected-ternary-plot": do
        zh: "連接三元圖"
        en: "connected ternary plot"
      "line-chart": do
        zh: "折線圖"
        en: "line chart"
      "step-chart": do
        zh: "步階圖"
        en: "step chart"
      "cycle-plot": do
        zh: "循環圖"
        en: "cycle plot"
      "pie-chart": do
        zh: "圓餅圖"
        en: "pie chart"
      "donut-chart": do
        zh: "甜甜圈圖"
        en: "donut chart"
      "sun-burst-diagram": do
        zh: "太陽花圖*"
        en: "sun burst diagram"
      "pie-chart-3d": do
        zh: "立體圓餅圖"
        en: "3d pie chart"
      "bar-chart": do
        zh: "長條圖"
        en: "bar chart"
      "stacked-bar-chart": do
        zh: "堆積長條圖"
        en: "stacked bar chart"
      "grouped-bar-chart": do
        zh: "分組長條圖"
        en: "grouped bar chart"
      "full-stacked-bar-chart": do
        zh: "100%長條圖"
        en: "100% stacked bar chart"
      "marimekko-chart": do
        zh: "Marimekko 圖*"
        en: "marimekko chart"
      "span-chart": do
        zh: "長度圖*"
        en: "span chart"
      "population-pyramid": do
        zh: "人口金字塔"
        en: "population pyramid"
      "bullet-chart": do
        zh: "子彈圖"
        en: "bullet chart"
      "curved-bar-chart": do
        zh: "曲式長條圖"
        en: "curved bar chart"
      "gantt-diagram": do
        zh: "甘特圖"
        en: "gantt diagram"
      "waterfall-chart": do
        zh: "瀑布圖"
        en: "waterfall chart"
      "parallel-coordinates": do
        zh: "平行座標圖*"
        en: "parallel coordinates"
      "bump-chart": do
        zh: "凹凸圖"
        en: "bump chart"
      "combo-chart": do
        zh: "複合圖"
        en: "combo chart"
      "continuous-error-bar-plot": do
        zh: "誤差區間長條圖"
        en: "continuous error bar plot"
      "column-chart": do
        zh: "直式長條圖"
        en: "column chart"
      "polar-chart": do
        zh: "極區圖"
        en: "polar chart"
      "bubble-chart": do
        zh: "泡泡圖"
        en: "bubble chart"
      "bubble-map": do
        zh: "泡泡地圖"
        en: "bubble map"
      "dorling-cartogram": do
        zh: "圓式統計地圖*"
        en: "dorling cartogram"
      "pie-bubble": do
        zh: "圓餅泡泡圖"
        en: "pie bubble"
      "circular-treemap": do
        zh: "圓式樹狀圖*"
        en: "circular treemap"
      "voronoi-treemap": do
        zh: "Voronoi 樹狀圖"
        en: "voronoi treemap"
      "jigsaw-treemap": do
        zh: "Jigsaw 樹狀圖"
        en: "jigsaw treemap"
      "convex-treemap": do
        zh: "Convex 樹狀圖"
        en: "convex treemap"
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

  if module? => module.exports = config
  if window? => window.config = config
  config
)!

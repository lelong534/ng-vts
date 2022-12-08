export interface VtsChartOptions {
  annotations?: VtsChartAnnotations;
  chart?: VtsChart;
  colors?: any[];
  dataLabels?: VtsChartDataLabels;
  series?: VtsChartAxisSeries | VtsChartNonAxisSeries;
  stroke?: VtsChartStroke;
  labels?: string[];
  legend?: VtsChartLegend;
  fill?: VtsChartFill;
  tooltip?: VtsChartTooltip;
  plotOptions?: VtsChartPlotOptions;
  responsive?: VtsChartResponsive[];
  markers?: VtsChartMarkers;
  noData?: VtsChartNoData;
  xaxis?: VtsChartXAxis;
  yaxis?: VtsChartYAxis | VtsChartYAxis[];
  grid?: VtsChartGrid;
  states?: VtsChartStates;
  title?: VtsChartTitleSubtitle;
  subtitle?: VtsChartTitleSubtitle;
  theme?: VtsChartTheme;
}
interface VtsChartDropShadow {
  enabled?: boolean;
  top?: number;
  left?: number;
  blur?: number;
  opacity?: number;
  color?: string;
}

export interface VtsChart {
  width?: string | number;
  height?: string | number;
  type: ChartType;
  foreColor?: string;
  fontFamily?: string;
  background?: string;
  offsetX?: number;
  offsetY?: number;
  dropShadow?: VtsChartDropShadow & {
    enabledOnSeries?: undefined | number[];
    color?: string | string[];
  };
  events?: {
    animationEnd?(chart: any, options?: any): void;
    beforeMount?(chart: any, options?: any): void;
    mounted?(chart: any, options?: any): void;
    updated?(chart: any, options?: any): void;
    mouseMove?(e: any, chart?: any, options?: any): void;
    click?(e: any, chart?: any, options?: any): void;
    legendClick?(chart: any, seriesIndex?: number, options?: any): void;
    markerClick?(e: any, chart?: any, options?: any): void;
    selection?(chart: any, options?: any): void;
    dataPointSelection?(e: any, chart?: any, options?: any): void;
    dataPointMouseEnter?(e: any, chart?: any, options?: any): void;
    dataPointMouseLeave?(e: any, chart?: any, options?: any): void;
    beforeZoom?(chart: any, options?: any): void;
    beforeResetZoom?(chart: any, options?: any): void;
    zoomed?(chart: any, options?: any): void;
    scrolled?(chart: any, options?: any): void;
    brushScrolled?(chart: any, options?: any): void;
  };
  brush?: {
    enabled?: boolean;
    autoScaleYaxis?: boolean;
    target?: string;
  };
  id?: string;
  group?: string;
  locales?: VtsChartLocale[];
  defaultLocale?: string;
  parentHeightOffset?: number;
  redrawOnParentResize?: boolean;
  redrawOnWindowResize?: boolean | Function;
  sparkline?: {
    enabled?: boolean;
  };
  stacked?: boolean;
  stackType?: 'normal' | '100%';
  toolbar?: {
    show?: boolean;
    offsetX?: number;
    offsetY?: number;
    tools?: {
      download?: boolean | string;
      selection?: boolean | string;
      zoom?: boolean | string;
      zoomin?: boolean | string;
      zoomout?: boolean | string;
      pan?: boolean | string;
      reset?: boolean | string;
      customIcons?: {
        icon?: string;
        title?: string;
        index?: number;
        class?: string;
        click?(chart?: any, options?: any, e?: any): any;
      }[];
    };
    export?: {
      csv?: {
        filename?: undefined | string;
        columnDelimiter?: string;
        headerCategory?: string;
        headerValue?: string;
        dateFormatter?(timestamp?: number): any;
      };
      svg?: {
        filename?: undefined | string;
      };
      png?: {
        filename?: undefined | string;
      };
    };
    autoSelected?: 'zoom' | 'selection' | 'pan';
  };
  zoom?: {
    enabled?: boolean;
    type?: 'x' | 'y' | 'xy';
    autoScaleYaxis?: boolean;
    zoomedArea?: {
      fill?: {
        color?: string;
        opacity?: number;
      };
      stroke?: {
        color?: string;
        opacity?: number;
        width?: number;
      };
    };
  };
  selection?: {
    enabled?: boolean;
    type?: string;
    fill?: {
      color?: string;
      opacity?: number;
    };
    stroke?: {
      width?: number;
      color?: string;
      opacity?: number;
      dashArray?: number;
    };
    xaxis?: {
      min?: number;
      max?: number;
    };
    yaxis?: {
      min?: number;
      max?: number;
    };
  };
  animations?: {
    enabled?: boolean;
    easing?: 'linear' | 'easein' | 'easeout' | 'easeinout';
    speed?: number;
    animateGradually?: {
      enabled?: boolean;
      delay?: number;
    };
    dynamicAnimation?: {
      enabled?: boolean;
      speed?: number;
    };
  };
}
export interface VtsChartStates {
  normal?: {
    filter?: {
      type?: string;
      value?: number;
    };
  };
  hover?: {
    filter?: {
      type?: string;
      value?: number;
    };
  };
  active?: {
    allowMultipleDataPointsSelection?: boolean;
    filter?: {
      type?: string;
      value?: number;
    };
  };
}

export interface VtsChartTitleSubtitle {
  text?: string;
  align?: 'left' | 'center' | 'right';
  margin?: number;
  offsetX?: number;
  offsetY?: number;
  floating?: boolean;
  style?: {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    color?: string;
  };
}

export declare type VtsChartAxisSeries = {
  name?: string;
  type?: string;
  color?: string;
  data:
    | (number | null)[]
    | {
        x: any;
        y: any;
        fillColor?: string;
        strokeColor?: string;
        meta?: any;
        goals?: any;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][];
}[];
export declare type VtsChartNonAxisSeries = number[];

export interface VtsChartStroke {
  show?: boolean;
  curve?: 'smooth' | 'straight' | 'stepline' | ('smooth' | 'straight' | 'stepline')[];
  lineCap?: 'butt' | 'square' | 'round';
  colors?: string[];
  width?: number | number[];
  dashArray?: number | number[];
}
export interface VtsChartAnnotations {
  position?: string;
  yaxis?: YAxisAnnotations[];
  xaxis?: XAxisAnnotations[];
  points?: PointAnnotations[];
  texts?: TextAnnotations[];
  images?: ImageAnnotations[];
}
export interface AnnotationLabel {
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;
  text?: string;
  textAnchor?: string;
  offsetX?: number;
  offsetY?: number;
  style?: AnnotationStyle;
  position?: string;
  orientation?: string;
}
export interface AnnotationStyle {
  background?: string;
  color?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  cssClass?: string;
  padding?: {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
}
export interface XAxisAnnotations {
  x?: null | number | string;
  x2?: null | number | string;
  strokeDashArray?: number;
  fillColor?: string;
  borderColor?: string;
  borderWidth?: number;
  opacity?: number;
  offsetX?: number;
  offsetY?: number;
  label?: AnnotationLabel;
}
export interface YAxisAnnotations {
  y?: null | number | string;
  y2?: null | number | string;
  strokeDashArray?: number;
  fillColor?: string;
  borderColor?: string;
  borderWidth?: number;
  opacity?: number;
  offsetX?: number;
  offsetY?: number;
  width?: number | string;
  yAxisIndex?: number;
  label?: AnnotationLabel;
}
export interface PointAnnotations {
  x?: number | string;
  y?: null | number;
  yAxisIndex?: number;
  seriesIndex?: number;
  marker?: {
    size?: number;
    fillColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    shape?: string;
    offsetX?: number;
    offsetY?: number;
    radius?: number;
    cssClass?: string;
  };
  label?: AnnotationLabel;
  image?: {
    path?: string;
    width?: number;
    height?: number;
    offsetX?: number;
    offsetY?: number;
  };
}
export interface ImageAnnotations {
  path?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  appendTo?: string;
}
export interface TextAnnotations {
  x?: number;
  y?: number;
  text?: string;
  textAnchor?: string;
  foreColor?: string;
  fontSize?: string | number;
  fontFamily?: undefined | string;
  fontWeight?: string | number;
  appendTo?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: number;
  borderWidth?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
}

export interface VtsChartLocale {
  name?: string;
  options?: {
    months?: string[];
    shortMonths?: string[];
    days?: string[];
    shortDays?: string[];
    toolbar?: {
      download?: string;
      selection?: string;
      selectionZoom?: string;
      zoomIn?: string;
      zoomOut?: string;
      pan?: string;
      reset?: string;
    };
  };
}

export interface VtsChartPlotOptions {
  area?: {
    fillTo?: 'origin' | 'end';
  };
  bar?: {
    horizontal?: boolean;
    columnWidth?: string;
    barHeight?: string;
    distributed?: boolean;
    borderRadius?: number;
    rangeBarOverlap?: boolean;
    rangeBarGroupRows?: boolean;
    colors?: {
      ranges?: {
        from?: number;
        to?: number;
        color?: string;
      }[];
      backgroundBarColors?: string[];
      backgroundBarOpacity?: number;
      backgroundBarRadius?: number;
    };
    dataLabels?: {
      maxItems?: number;
      hideOverflowingLabels?: boolean;
      position?: string;
      orientation?: 'horizontal' | 'vertical';
    };
  };
  bubble?: {
    minBubbleRadius?: number;
    maxBubbleRadius?: number;
  };
  candlestick?: {
    colors?: {
      upward?: string;
      downward?: string;
    };
    wick?: {
      useFillColor?: boolean;
    };
  };
  boxPlot?: {
    colors?: {
      upper?: string;
      lower?: string;
    };
  };
  heatmap?: {
    radius?: number;
    enableShades?: boolean;
    shadeIntensity?: number;
    reverseNegativeShade?: boolean;
    distributed?: boolean;
    useFillColorAsStroke?: boolean;
    colorScale?: {
      ranges?: {
        from?: number;
        to?: number;
        color?: string;
        foreColor?: string;
        name?: string;
      }[];
      inverse?: boolean;
      min?: number;
      max?: number;
    };
  };
  treemap?: {
    enableShades?: boolean;
    shadeIntensity?: number;
    distributed?: boolean;
    reverseNegativeShade?: boolean;
    useFillColorAsStroke?: boolean;
    colorScale?: {
      inverse?: boolean;
      ranges?: {
        from?: number;
        to?: number;
        color?: string;
        foreColor?: string;
        name?: string;
      }[];
      min?: number;
      max?: number;
    };
  };
  pie?: {
    startAngle?: number;
    endAngle?: number;
    customScale?: number;
    offsetX?: number;
    offsetY?: number;
    expandOnClick?: boolean;
    dataLabels?: {
      offset?: number;
      minAngleToShowLabel?: number;
    };
    donut?: {
      size?: string;
      background?: string;
      labels?: {
        show?: boolean;
        name?: {
          show?: boolean;
          fontSize?: string;
          fontFamily?: string;
          fontWeight?: string | number;
          color?: string;
          offsetY?: number;
          formatter?(val: string): string;
        };
        value?: {
          show?: boolean;
          fontSize?: string;
          fontFamily?: string;
          fontWeight?: string | number;
          color?: string;
          offsetY?: number;
          formatter?(val: string): string;
        };
        total?: {
          show?: boolean;
          showAlways?: boolean;
          fontFamily?: string;
          fontSize?: string;
          fontWeight?: string | number;
          label?: string;
          color?: string;
          formatter?(w: any): string;
        };
      };
    };
  };
  polarArea?: {
    rings?: {
      strokeWidth?: number;
      strokeColor?: string;
    };
    spokes?: {
      strokeWidth?: number;
      connectorColors?: string | string[];
    };
  };
  radar?: {
    size?: number;
    offsetX?: number;
    offsetY?: number;
    polygons?: {
      strokeColors?: string | string[];
      strokeWidth?: string | string[];
      connectorColors?: string | string[];
      fill?: {
        colors?: string[];
      };
    };
  };
  radialBar?: {
    inverseOrder?: boolean;
    startAngle?: number;
    endAngle?: number;
    offsetX?: number;
    offsetY?: number;
    hollow?: {
      margin?: number;
      size?: string;
      background?: string;
      image?: string;
      imageWidth?: number;
      imageHeight?: number;
      imageOffsetX?: number;
      imageOffsetY?: number;
      imageClipped?: boolean;
      position?: 'front' | 'back';
      dropShadow?: VtsChartDropShadow;
    };
    track?: {
      show?: boolean;
      startAngle?: number;
      endAngle?: number;
      background?: string;
      strokeWidth?: string;
      opacity?: number;
      margin?: number;
      dropShadow?: VtsChartDropShadow;
    };
    dataLabels?: {
      show?: boolean;
      name?: {
        show?: boolean;
        fontSize?: string;
        fontFamily?: string;
        fontWeight?: string | number;
        color?: string;
        offsetY?: number;
      };
      value?: {
        show?: boolean;
        fontSize?: string;
        fontFamily?: string;
        fontWeight?: string | number;
        color?: string;
        offsetY?: number;
        formatter?(val: number): string;
      };
      total?: {
        show?: boolean;
        label?: string;
        fontFamily?: string;
        fontSize?: string;
        fontWeight?: string | number;
        color?: string;
        formatter?(opts: any): string;
      };
    };
  };
}

export interface VtsChartFill {
  colors?: any[];
  opacity?: number | number[];
  type?: string | string[];
  gradient?: {
    shade?: string;
    type?: string;
    shadeIntensity?: number;
    gradientToColors?: string[];
    inverseColors?: boolean;
    opacityFrom?: number;
    opacityTo?: number;
    stops?: number[];
  };
  image?: {
    src?: string | string[];
    width?: number;
    height?: number;
  };
  pattern?: {
    style?: string | string[];
    width?: number;
    height?: number;
    strokeWidth?: number;
  };
}

export interface VtsChartLegend {
  show?: boolean;
  showForSingleSeries?: boolean;
  showForNullSeries?: boolean;
  showForZeroSeries?: boolean;
  floating?: boolean;
  inverseOrder?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  horizontalAlign?: 'left' | 'center' | 'right';
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string | number;
  width?: number;
  height?: number;
  offsetX?: number;
  offsetY?: number;
  textAnchor?: string;
  customLegendItems?: string[];
  labels?: {
    colors?: string | string[];
    useSeriesColors?: boolean;
  };
  markers?: {
    width?: number;
    height?: number;
    strokeColor?: string;
    strokeWidth?: number;
    fillColors?: string[];
    offsetX?: number;
    offsetY?: number;
    radius?: number;
    customHTML?(): any;
    onClick?(): void;
  };
  itemMargin?: {
    horizontal?: number;
    vertical?: number;
  };
  containerMargin?: {
    left?: number;
    top?: number;
  };
  onItemClick?: {
    toggleDataSeries?: boolean;
  };
  onItemHover?: {
    highlightDataSeries?: boolean;
  };
  formatter?(legendName: string, opts?: any): string;
  tooltipHoverFormatter?(legendName: string, opts?: any): string;
}

export interface VtsChartDataLabels {
  enabled?: boolean;
  enabledOnSeries?: undefined | number[];
  textAnchor?: 'start' | 'middle' | 'end';
  distributed?: boolean;
  offsetX?: number;
  offsetY?: number;
  style?: {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string | number;
    colors?: any[];
  };
  background?: {
    enabled?: boolean;
    foreColor?: string;
    borderRadius?: number;
    padding?: number;
    opacity?: number;
    borderWidth?: number;
    borderColor?: string;
    dropShadow?: VtsChartDropShadow;
  };
  dropShadow?: VtsChartDropShadow;
  formatter?(val: string | number | number[], opts?: any): string | number;
}
export interface VtsChartResponsive {
  breakpoint?: number;
  options?: any;
}
declare type VtsChartTooltipY = {
  title?: {
    formatter?(seriesName: string): string;
  };
  formatter?(val: number, opts?: any): string;
};

export interface VtsChartTooltip {
  enabled?: boolean;
  enabledOnSeries?: undefined | number[];
  shared?: boolean;
  followCursor?: boolean;
  intersect?: boolean;
  inverseOrder?: boolean;
  custom?: ((options: any) => any) | ((options: any) => any)[];
  fillSeriesColor?: boolean;
  theme?: string;
  style?: {
    fontSize?: string;
    fontFamily?: string;
  };
  onDatasetHover?: {
    highlightDataSeries?: boolean;
  };
  x?: {
    show?: boolean;
    format?: string;
    formatter?(val: number, opts?: any): string;
  };
  y?: VtsChartTooltipY | VtsChartTooltipY[];
  z?: {
    title?: string;
    formatter?(val: number): string;
  };
  marker?: {
    show?: boolean;
    fillColors?: string[];
  };
  items?: {
    display?: string;
  };
  fixed?: {
    enabled?: boolean;
    position?: string;
    offsetX?: number;
    offsetY?: number;
  };
}

export interface VtsChartXAxis {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  overwriteCategories?: number[] | string[] | undefined;
  offsetX?: number;
  offsetY?: number;
  sorted?: boolean;
  labels?: {
    show?: boolean;
    rotate?: number;
    rotateAlways?: boolean;
    hideOverlappingLabels?: boolean;
    showDuplicates?: boolean;
    trim?: boolean;
    minHeight?: number;
    maxHeight?: number;
    style?: {
      colors?: string | string[];
      fontSize?: string;
      fontWeight?: string | number;
      fontFamily?: string;
      cssClass?: string;
    };
    offsetX?: number;
    offsetY?: number;
    format?: string;
    datetimeUTC?: boolean;
    datetimeFormatter?: {
      year?: string;
      month?: string;
      day?: string;
      hour?: string;
      minute?: string;
    };
    formatter?(value: string, timestamp?: number, opts?: any): string | string[];
  };
  axisBorder?: {
    show?: boolean;
    color?: string;
    offsetX?: number;
    offsetY?: number;
    strokeWidth?: number;
  };
  axisTicks?: {
    show?: boolean;
    borderType?: string;
    color?: string;
    height?: number;
    offsetX?: number;
    offsetY?: number;
  };
  tickPlacement?: string;
  tickAmount?: number | 'dataPoints';
  min?: number;
  max?: number;
  range?: number;
  floating?: boolean;
  decimalsInFloat?: number;
  position?: string;
  title?: {
    text?: string;
    offsetX?: number;
    offsetY?: number;
    style?: {
      color?: string;
      fontFamily?: string;
      fontWeight?: string | number;
      fontSize?: string;
      cssClass?: string;
    };
  };
  crosshairs?: {
    show?: boolean;
    width?: number | string;
    position?: string;
    opacity?: number;
    stroke?: {
      color?: string;
      width?: number;
      dashArray?: number;
    };
    fill?: {
      type?: string;
      color?: string;
      gradient?: {
        colorFrom?: string;
        colorTo?: string;
        stops?: number[];
        opacityFrom?: number;
        opacityTo?: number;
      };
    };
    dropShadow?: VtsChartDropShadow;
  };
  tooltip?: {
    enabled?: boolean;
    offsetY?: number;
    style?: {
      fontSize?: string;
      fontFamily?: string;
    };
    formatter?(value: string, opts?: object): string;
  };
}

export interface VtsChartYAxis {
  show?: boolean;
  showAlways?: boolean;
  showForNullSeries?: boolean;
  seriesName?: string;
  opposite?: boolean;
  reversed?: boolean;
  logarithmic?: boolean;
  tickAmount?: number;
  forceNiceScale?: boolean;
  min?: number | ((min: number) => number);
  max?: number | ((max: number) => number);
  floating?: boolean;
  decimalsInFloat?: number;
  labels?: {
    show?: boolean;
    minWidth?: number;
    maxWidth?: number;
    offsetX?: number;
    offsetY?: number;
    rotate?: number;
    align?: 'left' | 'center' | 'right';
    padding?: number;
    style?: {
      colors?: string | string[];
      fontSize?: string;
      fontFamily?: string;
      fontWeight?: string | number;
      cssClass?: string;
    };
    formatter?(val: number, opts?: any): string | string[];
  };
  axisBorder?: {
    show?: boolean;
    color?: string;
    width?: number;
    offsetX?: number;
    offsetY?: number;
  };
  axisTicks?: {
    show?: boolean;
    color?: string;
    width?: number;
    offsetX?: number;
    offsetY?: number;
  };
  title?: {
    text?: string;
    rotate?: number;
    offsetX?: number;
    offsetY?: number;
    style?: {
      color?: string;
      fontSize?: string;
      fontFamily?: string;
      fontWeight?: string | number;
      cssClass?: string;
    };
  };
  crosshairs?: {
    show?: boolean;
    position?: string;
    stroke?: {
      color?: string;
      width?: number;
      dashArray?: number;
    };
  };
  tooltip?: {
    enabled?: boolean;
    offsetX?: number;
  };
}

export interface VtsChartGrid {
  show?: boolean;
  borderColor?: string;
  strokeDashArray?: number;
  position?: 'front' | 'back';
  xaxis?: {
    lines?: {
      show?: boolean;
      offsetX?: number;
      offsetY?: number;
    };
  };
  yaxis?: {
    lines?: {
      show?: boolean;
      offsetX?: number;
      offsetY?: number;
    };
  };
  row?: {
    colors?: string[];
    opacity?: number;
  };
  column?: {
    colors?: string[];
    opacity?: number;
  };
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}
export interface VtsChartTheme {
  mode?: 'light' | 'dark';
  palette?: string;
  monochrome?: {
    enabled?: boolean;
    color?: string;
    shadeTo?: 'light' | 'dark';
    shadeIntensity?: number;
  };
}
interface VtsChartDiscretePoint {
  seriesIndex?: number;
  dataPointIndex?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
}
export interface VtsChartMarkers {
  size?: number | number[];
  width?: number | number[];
  height?: number | number[];
  colors?: string[];
  strokeColors?: string | string[];
  strokeWidth?: number | number[];
  strokeOpacity?: number | number[];
  strokeDashArray?: number | number[];
  fillOpacity?: number | number[];
  discrete?: VtsChartDiscretePoint[];
  shape?: 'circle' | 'square' | 'rect' | string[];
  radius?: number;
  offsetX?: number;
  offsetY?: number;
  showNullDataPoints?: boolean;
  hover?: {
    size?: number;
    sizeOffset?: number;
  };
  onClick?(e?: any): void;
  onDblClick?(e?: any): void;
}
export interface VtsChartNoData {
  text?: string;
  align?: 'left' | 'right' | 'center';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  offsetX?: number;
  offsetY?: number;
  style?: {
    color?: string;
    fontSize?: string;
    fontFamily?: string;
  };
}
export declare type ChartType =
  | 'line'
  | 'area'
  | 'bar'
  | 'histogram'
  | 'pie'
  | 'donut'
  | 'radialBar'
  | 'scatter'
  | 'bubble'
  | 'heatmap'
  | 'candlestick'
  | 'boxPlot'
  | 'radar'
  | 'polarArea'
  | 'rangeBar'
  | 'treemap';
export {};

export interface VtsDonutOptions {
  title?: string;
  subtitle?: string;
}

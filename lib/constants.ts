// Nav Items
export const NAV_ITEMS: {href: string; label: string }[] = [
    { href: '/', label: 'Home' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
]

// TradingView Widget CONFIG
export type Theme = 'dark' | 'light';
export type Locale = 'en' | 'es' | 'fr';
export type Interval =  | '1m' | '5m' | '15m' | '1h' | '4h' | 'D' | 'W' | 'M';

export interface SelectOption {
    value: string;
    label: string;
}

// SHARED BASE WIDGET CONFIG
const BASE_WIDGET = {
    colorTheme: 'dark' as Theme,
    locale: 'en' as Locale,
    backgroundColor: "#141414",
    width: '100%',
};

const BASE_TRANSPARENT_WIDGET = {
    ...BASE_WIDGET,
    isTransparent: false,
    transparentBackground: false,
};


// MARKET OVERVIEW WIDGET
export const MARKET_OVERVIEW_WIDGET_CONFIG = Object.freeze({
    ...BASE_TRANSPARENT_WIDGET,

    dateRange: '12M',
    largeChartUrl: '',
    showFloatingTooltip: true,

    // Theme colors
    plotLineColorGrowing: '#0FEDBE',
    plotLineColorFalling: '#0FEDBE',
    gridLineColor: 'rgba(240, 243, 250, 0)',
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)',

    support_host: 'https://www.tradingview.com',

    backgroundColor: '#141414',
    colorTheme: "dark",
    height: 600,
    showSymbolLogo: true,
    showChart: true,

    tabs: [
        {
            title: 'Financial',
            symbols: [
                { s: 'NYSE:JPM', d: 'JPMorgan Chase' },
                { s: 'NYSE:WFC', d: 'Wells Fargo Co New' },
                { s: 'NYSE:BAC', d: 'Bank Amer Corp' },
                { s: 'NYSE:HSBC', d: 'Hsbc Hldgs Plc' },
                { s: 'NYSE:C', d: 'Citigroup Inc' },
                { s: 'NYSE:MA', d: 'Mastercard Incorporated' },
            ],
        },
        {
            title: 'Technology',
            symbols: [
                { s: 'NASDAQ:AAPL', d: 'Apple' },
                { s: 'NASDAQ:GOOGL', d: 'Alphabet' },
                { s: 'NASDAQ:MSFT', d: 'Microsoft' },
                { s: 'NASDAQ:FB', d: 'Meta Platforms' },
                { s: 'NYSE:ORCL', d: 'Oracle Corp' },
                { s: 'NASDAQ:INTC', d: 'Intel Corp' },
            ],
        },
        {
            title: 'Services',
            symbols: [
                { s: 'NASDAQ:AMZN', d: 'Amazon' },
                { s: 'NYSE:BABA', d: 'Alibaba Group Hldg Ltd' },
                { s: 'NYSE:T', d: 'At&t Inc' },
                { s: 'NYSE:WMT', d: 'Walmart' },
                { s: 'NYSE:V', d: 'Visa' },
            ],
        },
    ],
});

// TRADINGVIEW — HEATMAP
export const HEATMAP_WIDGET_CONFIG = Object.freeze({
    ...BASE_TRANSPARENT_WIDGET,

    dataSource: 'SPX500',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',

    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,

    height: '600',
});

// TRADINGVIEW — TOP STORIES
export const TOP_STORIES_WIDGET_CONFIG = Object.freeze({
    ...BASE_TRANSPARENT_WIDGET,
    displayMode: 'regular',
    feedMode: 'market',
    market: 'stock',
    height: '600',
});

// TRADINGVIEW — MARKET DATA TABLE
export const MARKET_DATA_WIDGET_CONFIG = Object.freeze({
    ...BASE_WIDGET,

    title: 'Stocks',
    height: 600,
    showSymbolLogo: true,
    isTransparent: false,
    backgroundColor: '#0F0F0F',

    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                { name: 'NYSE:JPM', displayName: 'JPMorgan Chase' },
                { name: 'NYSE:WFC', displayName: 'Wells Fargo Co New' },
                { name: 'NYSE:BAC', displayName: 'Bank Amer Corp' },
                { name: 'NYSE:HSBC', displayName: 'Hsbc Hldgs Plc' },
                { name: 'NYSE:C', displayName: 'Citigroup Inc' },
                { name: 'NYSE:MA', displayName: 'Mastercard Incorporated' },
            ],
        },
        {
            name: 'Technology',
            symbols: [
                { name: 'NASDAQ:AAPL', displayName: 'Apple' },
                { name: 'NASDAQ:GOOGL', displayName: 'Alphabet' },
                { name: 'NASDAQ:MSFT', displayName: 'Microsoft' },
                { name: 'NASDAQ:FB', displayName: 'Meta Platforms' },
                { name: 'NYSE:ORCL', displayName: 'Oracle Corp' },
                { name: 'NASDAQ:INTC', displayName: 'Intel Corp' },
            ],
        },
        {
            name: 'Services',
            symbols: [
                { name: 'NASDAQ:AMZN', displayName: 'Amazon' },
                { name: 'NYSE:BABA', displayName: 'Alibaba Group Hldg Ltd' },
                { name: 'NYSE:T', displayName: 'At&t Inc' },
                { name: 'NYSE:WMT', displayName: 'Walmart' },
                { name: 'NYSE:V', displayName: 'Visa' },
            ],
        },
    ],
});



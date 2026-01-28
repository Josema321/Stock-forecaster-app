import TradingViewWidget from "@/components/TradingView";

import { SYMBOL_INFO_WIDGET_CONFIG, CANDLE_CHART_WIDGET_CONFIG, BASELINE_WIDGET_CONFIG, TECHNICAL_ANALYSIS_WIDGET_CONFIG,
    COMPANY_PROFILE_WIDGET_CONFIG, COMPANY_FINANCIALS_WIDGET_CONFIG } from "@/lib/constants";

export default async function StockDetails({ params }: StockDetailsPageProps) {
    const { symbol } = await params;
    const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    { /* Left column */}
                    <div className="space-y-8">
                        {/* Symbol Info Widget */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <TradingViewWidget
                                scriptUrl={`${scriptUrl}symbol-info.js`}
                                config={SYMBOL_INFO_WIDGET_CONFIG(symbol)}
                                height={170}
                            />
                        </div>

                        {/* Candle Chart Widget */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <TradingViewWidget
                                scriptUrl={`${scriptUrl}advanced-chart.js`}
                                config={CANDLE_CHART_WIDGET_CONFIG(symbol)}
                                height={600}
                            />
                        </div>


                        <div className="bg-gray-800 rounded-lg p-6">
                            <TradingViewWidget
                                scriptUrl={`${scriptUrl}advanced-chart.js`}
                                config={BASELINE_WIDGET_CONFIG(symbol)}
                                height={600}
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Technical Analysis Widget */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <TradingViewWidget
                                scriptUrl={`${scriptUrl}technical-analysis.js`}
                                config={TECHNICAL_ANALYSIS_WIDGET_CONFIG(symbol)}
                                height={400}
                            />
                        </div>

                        {/* Company Profile Widget */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <TradingViewWidget
                                scriptUrl={`${scriptUrl}symbol-profile.js`}
                                config={COMPANY_PROFILE_WIDGET_CONFIG(symbol)}
                                height={440}
                            />
                        </div>

                        {/* Company Financials Widget */}
                        <div className="bg-gray-800 rounded-lg p-6">
                            <TradingViewWidget
                                scriptUrl={`${scriptUrl}financials.js`}
                                config={COMPANY_FINANCIALS_WIDGET_CONFIG(symbol)}
                                height={464}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
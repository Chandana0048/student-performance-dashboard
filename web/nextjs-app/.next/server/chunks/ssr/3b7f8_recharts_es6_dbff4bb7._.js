module.exports = [
"[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PanoramaContextProvider",
    ()=>PanoramaContextProvider,
    "useIsPanorama",
    ()=>useIsPanorama
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var PanoramaContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
var useIsPanorama = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(PanoramaContext) != null;
var PanoramaContextProvider = (_ref)=>{
    var { children } = _ref;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PanoramaContext.Provider, {
        value: true
    }, children);
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/chartLayoutContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportChartMargin",
    ()=>ReportChartMargin,
    "ReportChartSize",
    ()=>ReportChartSize,
    "selectChartLayout",
    ()=>selectChartLayout,
    "useChartHeight",
    ()=>useChartHeight,
    "useChartLayout",
    ()=>useChartLayout,
    "useChartWidth",
    ()=>useChartWidth,
    "useMargin",
    ()=>useMargin,
    "useOffsetInternal",
    ()=>useOffsetInternal,
    "useViewBox",
    ()=>useViewBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$layoutSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/layoutSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectChartOffsetInternal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/selectChartOffsetInternal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$containerSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/containerSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$brushSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/brushSelectors.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var useViewBox = ()=>{
    var _useAppSelector;
    var panorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    var rootViewBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectChartOffsetInternal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectChartViewBox"]);
    var brushDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$brushSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectBrushDimensions"]);
    var brushPadding = (_useAppSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$brushSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectBrushSettings"])) === null || _useAppSelector === void 0 ? void 0 : _useAppSelector.padding;
    if (!panorama || !brushDimensions || !brushPadding) {
        return rootViewBox;
    }
    return {
        width: brushDimensions.width - brushPadding.left - brushPadding.right,
        height: brushDimensions.height - brushPadding.top - brushPadding.bottom,
        x: brushPadding.left,
        y: brushPadding.top
    };
};
var manyComponentsThrowErrorsIfOffsetIsUndefined = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    brushBottom: 0
};
var useOffsetInternal = ()=>{
    var _useAppSelector2;
    return (_useAppSelector2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectChartOffsetInternal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectChartOffsetInternal"])) !== null && _useAppSelector2 !== void 0 ? _useAppSelector2 : manyComponentsThrowErrorsIfOffsetIsUndefined;
};
var useChartWidth = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$containerSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectChartWidth"]);
};
var useChartHeight = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$containerSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectChartHeight"]);
};
var useMargin = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.layout.margin);
};
var selectChartLayout = (state)=>state.layout.layoutType;
var useChartLayout = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(selectChartLayout);
var ReportChartSize = (props)=>{
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$layoutSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setChartSize"])(props));
    }, [
        dispatch,
        props
    ]);
    return null;
};
var ReportChartMargin = (_ref)=>{
    var { margin } = _ref;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$layoutSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setMargin"])(margin));
    }, [
        dispatch,
        margin
    ]);
    return null;
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/chartDataContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChartDataContextProvider",
    ()=>ChartDataContextProvider,
    "SetComputedData",
    ()=>SetComputedData,
    "useChartData",
    ()=>useChartData,
    "useDataIndex",
    ()=>useDataIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/chartDataSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)");
;
;
;
;
var ChartDataContextProvider = (props)=>{
    var { chartData } = props;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isPanorama) {
            // Panorama mode reuses data from the main chart, so we must not overwrite it here.
            return ()=>{
            // there is nothing to clean up
            };
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setChartData"])(chartData));
        return ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setChartData"])(undefined));
        };
    }, [
        chartData,
        dispatch,
        isPanorama
    ]);
    return null;
};
var SetComputedData = (props)=>{
    var { computedData } = props;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setComputedData"])(computedData));
        return ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setChartData"])(undefined));
        };
    }, [
        computedData,
        dispatch
    ]);
    return null;
};
var selectChartData = (state)=>state.chartData.chartData;
var useChartData = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(selectChartData);
var selectDataIndex = (state)=>{
    var { dataStartIndex, dataEndIndex } = state.chartData;
    return {
        startIndex: dataStartIndex,
        endIndex: dataEndIndex
    };
};
var useDataIndex = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(selectDataIndex);
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/accessibilityContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAccessibilityLayer",
    ()=>useAccessibilityLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
;
var useAccessibilityLayer = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.rootProps.accessibilityLayer);
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/tooltipPortalContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TooltipPortalContext",
    ()=>TooltipPortalContext,
    "useTooltipPortal",
    ()=>useTooltipPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var TooltipPortalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
var useTooltipPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(TooltipPortalContext);
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/legendPortalContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LegendPortalContext",
    ()=>LegendPortalContext,
    "useLegendPortal",
    ()=>useLegendPortal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var LegendPortalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
var useLegendPortal = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LegendPortalContext);
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/tooltipContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMouseClickItemDispatch",
    ()=>useMouseClickItemDispatch,
    "useMouseEnterItemDispatch",
    ()=>useMouseEnterItemDispatch,
    "useMouseLeaveItemDispatch",
    ()=>useMouseLeaveItemDispatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/tooltipSlice.js [app-ssr] (ecmascript)");
;
;
var useMouseEnterItemDispatch = (onMouseEnterFromProps, dataKey)=>{
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return (data, index)=>(event)=>{
            onMouseEnterFromProps === null || onMouseEnterFromProps === void 0 || onMouseEnterFromProps(data, index, event);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveMouseOverItemIndex"])({
                activeIndex: String(index),
                activeDataKey: dataKey,
                activeCoordinate: data.tooltipPosition
            }));
        };
};
var useMouseLeaveItemDispatch = (onMouseLeaveFromProps)=>{
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return (data, index)=>(event)=>{
            onMouseLeaveFromProps === null || onMouseLeaveFromProps === void 0 || onMouseLeaveFromProps(data, index, event);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseLeaveItem"])());
        };
};
var useMouseClickItemDispatch = (onMouseClickFromProps, dataKey)=>{
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    return (data, index)=>(event)=>{
            onMouseClickFromProps === null || onMouseClickFromProps === void 0 || onMouseClickFromProps(data, index, event);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setActiveClickItemIndex"])({
                activeIndex: String(index),
                activeDataKey: dataKey,
                activeCoordinate: data.tooltipPosition
            }));
        };
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/RegisterGraphicalItemId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegisterGraphicalItemId",
    ()=>RegisterGraphicalItemId,
    "useGraphicalItemId",
    ()=>useGraphicalItemId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/useUniqueId.js [app-ssr] (ecmascript)");
;
;
;
var GraphicalItemIdContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
var RegisterGraphicalItemId = (_ref)=>{
    var { id, type, children } = _ref;
    var resolvedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useUniqueId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUniqueId"])("recharts-".concat(type), id);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](GraphicalItemIdContext.Provider, {
        value: resolvedId
    }, children(resolvedId));
};
function useGraphicalItemId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(GraphicalItemIdContext);
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/ErrorBarContext.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReportErrorBarSettings",
    ()=>ReportErrorBarSettings,
    "SetErrorBarContext",
    ()=>SetErrorBarContext,
    "useErrorBarContext",
    ()=>useErrorBarContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$errorBarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/errorBarSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$RegisterGraphicalItemId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/RegisterGraphicalItemId.js [app-ssr] (ecmascript)");
var _excluded = [
    "children"
];
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
var initialContextState = {
    data: [],
    xAxisId: 'xAxis-0',
    yAxisId: 'yAxis-0',
    dataPointFormatter: ()=>({
            x: 0,
            y: 0,
            value: 0
        }),
    errorBarOffset: 0
};
var ErrorBarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(initialContextState);
function SetErrorBarContext(props) {
    var { children } = props, rest = _objectWithoutProperties(props, _excluded);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ErrorBarContext.Provider, {
        value: rest
    }, children);
}
var useErrorBarContext = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ErrorBarContext);
function ReportErrorBarSettings(props) {
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    var graphicalItemId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$RegisterGraphicalItemId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGraphicalItemId"])();
    var prevPropsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (graphicalItemId == null) {
            // ErrorBar outside a graphical item context does not do anything.
            return;
        }
        if (prevPropsRef.current === null) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$errorBarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addErrorBar"])({
                itemId: graphicalItemId,
                errorBar: props
            }));
        } else if (prevPropsRef.current !== props) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$errorBarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceErrorBar"])({
                itemId: graphicalItemId,
                prev: prevPropsRef.current,
                next: props
            }));
        }
        prevPropsRef.current = props;
    }, [
        dispatch,
        graphicalItemId,
        props
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (prevPropsRef.current != null) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$errorBarSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeErrorBar"])({
                    itemId: graphicalItemId,
                    errorBar: prevPropsRef.current
                }));
                prevPropsRef.current = null;
            }
        };
    }, [
        dispatch,
        graphicalItemId
    ]);
    return null;
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/context/useTooltipAxis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTooltipAxis",
    ()=>useTooltipAxis,
    "useTooltipAxisBandSize",
    ()=>useTooltipAxisBandSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ChartUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/tooltipSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectTooltipAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/selectTooltipAxis.js [app-ssr] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
var useTooltipAxis = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectTooltipAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTooltipAxis"]);
var useTooltipAxisBandSize = ()=>{
    var tooltipAxis = useTooltipAxis();
    var tooltipTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTooltipAxisTicks"]);
    var tooltipAxisScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTooltipAxisScale"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBandSizeOfAxis"])(_objectSpread(_objectSpread({}, tooltipAxis), {}, {
        scale: tooltipAxisScale
    }), tooltipTicks);
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/polar/defaultPolarAngleAxisProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPolarAngleAxisProps",
    ()=>defaultPolarAngleAxisProps
]);
var defaultPolarAngleAxisProps = {
    allowDuplicatedCategory: true,
    // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
    angleAxisId: 0,
    axisLine: true,
    cx: 0,
    cy: 0,
    orientation: 'outer',
    reversed: false,
    scale: 'auto',
    tick: true,
    tickLine: true,
    tickSize: 8,
    type: 'category'
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/polar/defaultPolarRadiusAxisProps.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultPolarRadiusAxisProps",
    ()=>defaultPolarRadiusAxisProps
]);
var defaultPolarRadiusAxisProps = {
    allowDataOverflow: false,
    allowDuplicatedCategory: true,
    angle: 0,
    axisLine: true,
    cx: 0,
    cy: 0,
    orientation: 'right',
    radiusAxisId: 0,
    scale: 'auto',
    stroke: '#ccc',
    tick: true,
    tickCount: 5,
    type: 'number'
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/polar/Radar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Radar",
    ()=>Radar,
    "computeRadarPoints",
    ()=>computeRadarPoints
]);
// eslint-disable-next-line max-classes-per-file
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$compat$2f$last$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/es-toolkit/compat/last.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/Global.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ChartUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/shape/Polygon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/shape/Dot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/component/LabelList.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ActivePoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/component/ActivePoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetTooltipEntrySettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/SetTooltipEntrySettings.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$radarSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/radarSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetLegendPayload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/SetLegendPayload.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useAnimationId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/useAnimationId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$RegisterGraphicalItemId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/RegisterGraphicalItemId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetGraphicalItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/SetGraphicalItem.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$JavascriptAnimate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/JavascriptAnimate.js [app-ssr] (ecmascript)");
var _excluded = [
    "id"
];
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getLegendItemColor(stroke, fill) {
    return stroke && stroke !== 'none' ? stroke : fill;
}
var computeLegendPayloadFromRadarSectors = (props)=>{
    var { dataKey, name, stroke, fill, legendType, hide } = props;
    return [
        {
            inactive: hide,
            dataKey,
            type: legendType,
            color: getLegendItemColor(stroke, fill),
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTooltipNameProp"])(name, dataKey),
            payload: props
        }
    ];
};
function getTooltipEntrySettings(props) {
    var { dataKey, stroke, strokeWidth, fill, name, hide, tooltipType } = props;
    return {
        /*
     * I suppose this here _could_ return props.points
     * because while Radar does not support item tooltip mode, it _could_ support it.
     * But when I actually do return the points here, a defaultIndex test starts failing.
     * So, undefined it is.
     */ dataDefinedOnItem: undefined,
        positions: undefined,
        settings: {
            stroke,
            strokeWidth,
            fill,
            nameKey: undefined,
            // RadarChart does not have nameKey unfortunately
            dataKey,
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTooltipNameProp"])(name, dataKey),
            hide,
            type: tooltipType,
            color: getLegendItemColor(stroke, fill),
            unit: '' // why doesn't Radar support unit?
        }
    };
}
function renderDotItem(option, props) {
    var dotItem;
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](option)) {
        // @ts-expect-error typescript is unhappy with cloned props type
        dotItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](option, props);
    } else if (typeof option === 'function') {
        dotItem = option(props);
    } else {
        dotItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], _extends({}, props, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-radar-dot', typeof option !== 'boolean' ? option.className : '')
        }));
    }
    return dotItem;
}
function computeRadarPoints(_ref) {
    var { radiusAxis, angleAxis, displayedData, dataKey, bandSize } = _ref;
    var { cx, cy } = angleAxis;
    var isRange = false;
    var points = [];
    var angleBandSize = angleAxis.type !== 'number' ? bandSize !== null && bandSize !== void 0 ? bandSize : 0 : 0;
    displayedData.forEach((entry, i)=>{
        var name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, angleAxis.dataKey, i);
        var value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ChartUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getValueByDataKey"])(entry, dataKey);
        var angle = angleAxis.scale(name) + angleBandSize;
        var pointValue = Array.isArray(value) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$compat$2f$last$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value) : value;
        var radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(pointValue) ? undefined : radiusAxis.scale(pointValue);
        if (Array.isArray(value) && value.length >= 2) {
            isRange = true;
        }
        points.push(_objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, angle)), {}, {
            // @ts-expect-error getValueByDataKey does not validate the output type
            name,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value,
            cx,
            cy,
            radius,
            angle,
            payload: entry
        }));
    });
    var baseLinePoints = [];
    if (isRange) {
        points.forEach((point)=>{
            if (Array.isArray(point.value)) {
                var baseValue = point.value[0];
                var radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNullish"])(baseValue) ? undefined : radiusAxis.scale(baseValue);
                baseLinePoints.push(_objectSpread(_objectSpread({}, point), {}, {
                    radius
                }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, point.angle)));
            } else {
                baseLinePoints.push(point);
            }
        });
    }
    return {
        points,
        isRange,
        baseLinePoints
    };
}
function Dots(_ref2) {
    var { points, props } = _ref2;
    var { dot, dataKey } = props;
    if (!dot) {
        return null;
    }
    var { id } = props, propsWithoutId = _objectWithoutProperties(props, _excluded);
    var baseProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(propsWithoutId);
    var customDotProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(dot, true);
    var dots = points.map((entry, i)=>{
        var dotProps = _objectSpread(_objectSpread(_objectSpread({
            key: "dot-".concat(i),
            r: 3
        }, baseProps), customDotProps), {}, {
            dataKey,
            cx: entry.x,
            cy: entry.y,
            index: i,
            payload: entry
        });
        // @ts-expect-error r type is not compatible
        return renderDotItem(dot, dotProps);
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: "recharts-radar-dots"
    }, dots);
}
function RadarLabelListProvider(_ref3) {
    var { showLabels, points, children } = _ref3;
    /*
   * Radar provides a Cartesian label list context. Do we want to also provide a polar label list context?
   * That way, users can choose to use polar positions for the Radar labels.
   */ // const labelListEntries: ReadonlyArray<PolarLabelListEntry> = points.map(
    //   (point): PolarLabelListEntry => ({
    //     value: point.value,
    //     payload: point.payload,
    //     parentViewBox: undefined,
    //     clockWise: false,
    //     viewBox: {
    //       cx: point.cx,
    //       cy: point.cy,
    //       innerRadius: point.radius,
    //       outerRadius: point.radius,
    //       startAngle: point.angle,
    //       endAngle: point.angle,
    //       clockWise: false,
    //     },
    //   }),
    // );
    var labelListEntries = points.map((point)=>{
        var viewBox = {
            x: point.x,
            y: point.y,
            width: 0,
            height: 0
        };
        return _objectSpread(_objectSpread({}, viewBox), {}, {
            value: point.value,
            payload: point.payload,
            parentViewBox: undefined,
            viewBox,
            fill: undefined
        });
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianLabelListContextProvider"], {
        value: showLabels ? labelListEntries : null
    }, children);
}
function StaticPolygon(_ref4) {
    var { points, baseLinePoints, props } = _ref4;
    if (points == null) {
        return null;
    }
    var { shape, isRange, connectNulls } = props;
    var handleMouseEnter = (e)=>{
        var { onMouseEnter } = props;
        if (onMouseEnter) {
            onMouseEnter(props, e);
        }
    };
    var handleMouseLeave = (e)=>{
        var { onMouseLeave } = props;
        if (onMouseLeave) {
            onMouseLeave(props, e);
        }
    };
    var radar;
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](shape)) {
        radar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](shape, _objectSpread(_objectSpread({}, props), {}, {
            points
        }));
    } else if (typeof shape === 'function') {
        radar = shape(_objectSpread(_objectSpread({}, props), {}, {
            points
        }));
    } else {
        radar = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Polygon"], _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, true), {
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            points: points,
            baseLinePoints: isRange ? baseLinePoints : null,
            connectNulls: connectNulls
        }));
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: "recharts-radar-polygon"
    }, radar, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Dots, {
        props: props,
        points: points
    }));
}
var interpolatePolarPoint = (prevPoints, prevPointsDiffFactor, t)=>(entry, index)=>{
        var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];
        if (prev) {
            return _objectSpread(_objectSpread({}, entry), {}, {
                x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prev.x, entry.x, t),
                y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prev.y, entry.y, t)
            });
        }
        return _objectSpread(_objectSpread({}, entry), {}, {
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(entry.cx, entry.x, t),
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(entry.cy, entry.y, t)
        });
    };
function PolygonWithAnimation(_ref5) {
    var { props, previousPointsRef, previousBaseLinePointsRef } = _ref5;
    var { points, baseLinePoints, isAnimationActive, animationBegin, animationDuration, animationEasing, onAnimationEnd, onAnimationStart } = props;
    var prevPoints = previousPointsRef.current;
    var prevBaseLinePoints = previousBaseLinePointsRef.current;
    var prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
    var prevBaseLinePointsDiffFactor = prevBaseLinePoints && prevBaseLinePoints.length / baseLinePoints.length;
    var animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useAnimationId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationId"])(props, 'recharts-radar-');
    var [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    var showLabels = !isAnimating;
    var handleAnimationEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (typeof onAnimationEnd === 'function') {
            onAnimationEnd();
        }
        setIsAnimating(false);
    }, [
        onAnimationEnd
    ]);
    var handleAnimationStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (typeof onAnimationStart === 'function') {
            onAnimationStart();
        }
        setIsAnimating(true);
    }, [
        onAnimationStart
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RadarLabelListProvider, {
        showLabels: showLabels,
        points: points
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$JavascriptAnimate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptAnimate"], {
        animationId: animationId,
        begin: animationBegin,
        duration: animationDuration,
        isActive: isAnimationActive,
        easing: animationEasing,
        key: "radar-".concat(animationId),
        onAnimationEnd: handleAnimationEnd,
        onAnimationStart: handleAnimationStart
    }, (t)=>{
        var stepData = t === 1 ? points : points.map(interpolatePolarPoint(prevPoints, prevPointsDiffFactor, t));
        var stepBaseLinePoints = t === 1 ? baseLinePoints : baseLinePoints === null || baseLinePoints === void 0 ? void 0 : baseLinePoints.map(interpolatePolarPoint(prevBaseLinePoints, prevBaseLinePointsDiffFactor, t));
        if (t > 0) {
            // eslint-disable-next-line no-param-reassign
            previousPointsRef.current = stepData;
            // eslint-disable-next-line no-param-reassign
            previousBaseLinePointsRef.current = stepBaseLinePoints;
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](StaticPolygon, {
            points: stepData,
            baseLinePoints: stepBaseLinePoints,
            props: props
        });
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$LabelList$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LabelListFromLabelProp"], {
        label: props.label
    }), props.children);
}
function RenderPolygon(props) {
    var previousPointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    var previousBaseLinePointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PolygonWithAnimation, {
        props: props,
        previousPointsRef: previousPointsRef,
        previousBaseLinePointsRef: previousBaseLinePointsRef
    });
}
var defaultRadarProps = {
    angleAxisId: 0,
    radiusAxisId: 0,
    hide: false,
    activeDot: true,
    dot: false,
    legendType: 'rect',
    isAnimationActive: !__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Global$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Global"].isSsr,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
};
class RadarWithState extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"] {
    render() {
        var { hide, className, points } = this.props;
        if (hide || points == null) {
            return null;
        }
        var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-radar', className);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
            className: layerClass
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RenderPolygon, this.props)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ActivePoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ActivePoints"], {
            points: points,
            mainColor: getLegendItemColor(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot
        }));
    }
}
function RadarImpl(props) {
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    var radarPoints = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$radarSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectRadarPoints"])(state, props.radiusAxisId, props.angleAxisId, isPanorama, props.id));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RadarWithState, _extends({}, props, {
        points: radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.points,
        baseLinePoints: radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.baseLinePoints,
        isRange: radarPoints === null || radarPoints === void 0 ? void 0 : radarPoints.isRange
    }));
}
class Radar extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"] {
    render() {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$RegisterGraphicalItemId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RegisterGraphicalItemId"], {
            id: this.props.id,
            type: "radar"
        }, (id)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetGraphicalItem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetPolarGraphicalItem"], {
                type: "radar",
                id: id,
                data: undefined // Radar does not have data prop, why?
                ,
                dataKey: this.props.dataKey,
                hide: this.props.hide,
                angleAxisId: this.props.angleAxisId,
                radiusAxisId: this.props.radiusAxisId
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetLegendPayload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetPolarLegendPayload"], {
                legendPayload: computeLegendPayloadFromRadarSectors(this.props)
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$SetTooltipEntrySettings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SetTooltipEntrySettings"], {
                fn: getTooltipEntrySettings,
                args: this.props
            }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](RadarImpl, _extends({}, this.props, {
                id: id
            }))));
    }
}
_defineProperty(Radar, "displayName", 'Radar');
_defineProperty(Radar, "defaultProps", defaultRadarProps);
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/polar/PolarGrid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarGrid",
    ()=>PolarGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarGridSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/polarGridSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/polarAxisSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
var _excluded = [
    "gridType",
    "radialLines",
    "angleAxisId",
    "radiusAxisId",
    "cx",
    "cy",
    "innerRadius",
    "outerRadius"
];
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
;
var getPolygonPath = (radius, cx, cy, polarAngles)=>{
    var path = '';
    polarAngles.forEach((angle, i)=>{
        var point = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, angle);
        if (i) {
            path += "L ".concat(point.x, ",").concat(point.y);
        } else {
            path += "M ".concat(point.x, ",").concat(point.y);
        }
    });
    path += 'Z';
    return path;
};
// Draw axis of radial line
var PolarAngles = (props)=>{
    var { cx, cy, innerRadius, outerRadius, polarAngles, radialLines } = props;
    if (!polarAngles || !polarAngles.length || !radialLines) {
        return null;
    }
    var polarAnglesProps = _objectSpread({
        stroke: '#ccc'
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
        className: "recharts-polar-grid-angle"
    }, polarAngles.map((entry)=>{
        var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, innerRadius, entry);
        var end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, outerRadius, entry);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("line", _extends({}, polarAnglesProps, {
            key: "line-".concat(entry),
            x1: start.x,
            y1: start.y,
            x2: end.x,
            y2: end.y
        }));
    }));
};
// Draw concentric circles
var ConcentricCircle = (props)=>{
    var { cx, cy, radius } = props;
    var concentricCircleProps = _objectSpread({
        stroke: '#ccc',
        fill: 'none'
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props));
    return(/*#__PURE__*/ // @ts-expect-error wrong SVG element type
    __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("circle", _extends({}, concentricCircleProps, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polar-grid-concentric-circle', props.className),
        cx: cx,
        cy: cy,
        r: radius
    })));
};
// Draw concentric polygons
var ConcentricPolygon = (props)=>{
    var { radius } = props;
    var concentricPolygonProps = _objectSpread({
        stroke: '#ccc',
        fill: 'none'
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, concentricPolygonProps, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polar-grid-concentric-polygon', props.className),
        d: getPolygonPath(radius, props.cx, props.cy, props.polarAngles)
    }));
};
// Draw concentric axis
var ConcentricGridPath = (props)=>{
    var { polarRadius, gridType } = props;
    if (!polarRadius || !polarRadius.length) {
        return null;
    }
    var maxPolarRadius = Math.max(...polarRadius);
    var renderBackground = props.fill && props.fill !== 'none';
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
        className: "recharts-polar-grid-concentric"
    }, renderBackground && gridType === 'circle' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ConcentricCircle, _extends({}, props, {
        radius: maxPolarRadius
    })), renderBackground && gridType !== 'circle' && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ConcentricPolygon, _extends({}, props, {
        radius: maxPolarRadius
    })), polarRadius.map((entry, i)=>{
        var key = i;
        if (gridType === 'circle') {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ConcentricCircle, _extends({
                key: key
            }, props, {
                fill: "none",
                radius: entry
            }));
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ConcentricPolygon, _extends({
            key: key
        }, props, {
            fill: "none",
            radius: entry
        }));
    }));
};
var PolarGrid = (_ref)=>{
    var _ref2, _polarViewBox$cx, _ref3, _polarViewBox$cy, _ref4, _polarViewBox$innerRa, _ref5, _polarViewBox$outerRa;
    var { gridType = 'polygon', radialLines = true, angleAxisId = 0, radiusAxisId = 0, cx: cxFromOutside, cy: cyFromOutside, innerRadius: innerRadiusFromOutside, outerRadius: outerRadiusFromOutside } = _ref, inputs = _objectWithoutProperties(_ref, _excluded);
    var polarViewBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarViewBox"]);
    var props = _objectSpread({
        cx: (_ref2 = (_polarViewBox$cx = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.cx) !== null && _polarViewBox$cx !== void 0 ? _polarViewBox$cx : cxFromOutside) !== null && _ref2 !== void 0 ? _ref2 : 0,
        cy: (_ref3 = (_polarViewBox$cy = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.cy) !== null && _polarViewBox$cy !== void 0 ? _polarViewBox$cy : cyFromOutside) !== null && _ref3 !== void 0 ? _ref3 : 0,
        innerRadius: (_ref4 = (_polarViewBox$innerRa = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.innerRadius) !== null && _polarViewBox$innerRa !== void 0 ? _polarViewBox$innerRa : innerRadiusFromOutside) !== null && _ref4 !== void 0 ? _ref4 : 0,
        outerRadius: (_ref5 = (_polarViewBox$outerRa = polarViewBox === null || polarViewBox === void 0 ? void 0 : polarViewBox.outerRadius) !== null && _polarViewBox$outerRa !== void 0 ? _polarViewBox$outerRa : outerRadiusFromOutside) !== null && _ref5 !== void 0 ? _ref5 : 0
    }, inputs);
    var { polarAngles: polarAnglesInput, polarRadius: polarRadiusInput, outerRadius } = props;
    var polarAnglesFromRedux = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarGridSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarGridAngles"])(state, angleAxisId));
    var polarRadiiFromRedux = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarGridSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarGridRadii"])(state, radiusAxisId));
    var polarAngles = Array.isArray(polarAnglesInput) ? polarAnglesInput : polarAnglesFromRedux;
    var polarRadius = Array.isArray(polarRadiusInput) ? polarRadiusInput : polarRadiiFromRedux;
    if (outerRadius <= 0 || polarAngles == null || polarRadius == null) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
        className: "recharts-polar-grid"
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ConcentricGridPath, _extends({
        gridType: gridType,
        radialLines: radialLines
    }, props, {
        polarAngles: polarAngles,
        polarRadius: polarRadius
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PolarAngles, _extends({
        gridType: gridType,
        radialLines: radialLines
    }, props, {
        polarAngles: polarAngles,
        polarRadius: polarRadius
    })));
};
PolarGrid.displayName = 'PolarGrid';
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/polar/PolarAngleAxis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarAngleAxis",
    ()=>PolarAngleAxis,
    "PolarAngleAxisWrapper",
    ()=>PolarAngleAxisWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/shape/Dot.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/shape/Polygon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/component/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$polarAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/polarAxisSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarScaleSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/polarScaleSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/polarAxisSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$defaultPolarAngleAxisProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/polar/defaultPolarAngleAxisProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
var _excluded = [
    "children"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var eps = 1e-5;
var COS_45 = Math.cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degreeToRadian"])(45));
/**
 * These are injected from Redux, are required, but cannot be set by user.
 */ var AXIS_TYPE = 'angleAxis';
function SetAngleAxisSettings(props) {
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    var settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        var { children } = props, rest = _objectWithoutProperties(props, _excluded);
        return rest;
    }, [
        props
    ]);
    var synchronizedSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAngleAxis"])(state, settings.id));
    var settingsAreSynchronized = settings === synchronizedSettings;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$polarAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addAngleAxis"])(settings));
        return ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$polarAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeAngleAxis"])(settings));
        };
    }, [
        dispatch,
        settings
    ]);
    if (settingsAreSynchronized) {
        return props.children;
    }
    return null;
}
/**
 * Calculate the coordinate of line endpoint
 * @param data The data if there are ticks
 * @param props axis settings
 * @return (x1, y1): The point close to text,
 *         (x2, y2): The point close to axis
 */ var getTickLineCoord = (data, props)=>{
    var { cx, cy, radius, orientation, tickSize } = props;
    var tickLineSize = tickSize || 8;
    var p1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, data.coordinate);
    var p2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);
    return {
        x1: p1.x,
        y1: p1.y,
        x2: p2.x,
        y2: p2.y
    };
};
/**
 * Get the text-anchor of each tick
 * @param data Data of ticks
 * @param orientation of the axis ticks
 * @return text-anchor
 */ var getTickTextAnchor = (data, orientation)=>{
    var cos = Math.cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degreeToRadian"])(-data.coordinate));
    if (cos > eps) {
        return orientation === 'outer' ? 'start' : 'end';
    }
    if (cos < -eps) {
        return orientation === 'outer' ? 'end' : 'start';
    }
    return 'middle';
};
/**
 * Get the text vertical anchor of each tick
 * @param data Data of a tick
 * @return text vertical anchor
 */ var getTickTextVerticalAnchor = (data)=>{
    var cos = Math.cos((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degreeToRadian"])(-data.coordinate));
    var sin = Math.sin((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["degreeToRadian"])(-data.coordinate));
    // handle top and bottom sectors: 90±45deg and 270±45deg
    if (Math.abs(cos) <= COS_45) {
        // sin > 0: top sector, sin < 0: bottom sector
        return sin > 0 ? 'start' : 'end';
    }
    return 'middle';
};
var AxisLine = (props)=>{
    var { cx, cy, radius, axisLineType, axisLine, ticks } = props;
    if (!axisLine) {
        return null;
    }
    var axisLineProps = _objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props)), {}, {
        fill: 'none'
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(axisLine, false));
    if (axisLineType === 'circle') {
        // @ts-expect-error wrong SVG element type
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dot"], _extends({
            className: "recharts-polar-angle-axis-line"
        }, axisLineProps, {
            cx: cx,
            cy: cy,
            r: radius
        }));
    }
    var points = ticks.map((entry)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, entry.coordinate));
    // @ts-expect-error wrong SVG element type
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$shape$2f$Polygon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Polygon"], _extends({
        className: "recharts-polar-angle-axis-line"
    }, axisLineProps, {
        points: points
    }));
};
var TickItemText = (_ref)=>{
    var { tick, tickProps, value } = _ref;
    if (!tick) {
        return null;
    }
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](tick)) {
        // @ts-expect-error element cloning makes typescript unhappy and me too
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](tick, tickProps);
    }
    if (typeof tick === 'function') {
        return tick(tickProps);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], _extends({}, tickProps, {
        className: "recharts-polar-angle-axis-tick-value"
    }), value);
};
var Ticks = (props)=>{
    var { tick, tickLine, tickFormatter, stroke, ticks } = props;
    var axisProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props);
    var customTickProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(tick, false);
    var tickLineProps = _objectSpread(_objectSpread({}, axisProps), {}, {
        fill: 'none'
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(tickLine, false));
    var items = ticks.map((entry, i)=>{
        var lineCoord = getTickLineCoord(entry, props);
        var textAnchor = getTickTextAnchor(entry, props.orientation);
        var verticalAnchor = getTickTextVerticalAnchor(entry);
        var tickProps = _objectSpread(_objectSpread(_objectSpread({}, axisProps), {}, {
            textAnchor,
            verticalAnchor,
            stroke: 'none',
            fill: stroke
        }, customTickProps), {}, {
            index: i,
            payload: entry,
            x: lineCoord.x2,
            y: lineCoord.y2
        });
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], _extends({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polar-angle-axis-tick', (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTickClassName"])(tick)),
            key: "tick-".concat(entry.coordinate)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventsOfChild"])(props, entry, i)), tickLine && /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("line", _extends({
            className: "recharts-polar-angle-axis-tick-line"
        }, tickLineProps, lineCoord)), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](TickItemText, {
            tick: tick,
            tickProps: tickProps,
            value: tickFormatter ? tickFormatter(entry.value, i) : entry.value
        }));
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: "recharts-polar-angle-axis-ticks"
    }, items);
};
var PolarAngleAxisWrapper = (defaultsAndInputs)=>{
    var { angleAxisId } = defaultsAndInputs;
    var viewBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarViewBox"]);
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarScaleSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarAxisScale"])(state, 'angleAxis', angleAxisId));
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    var ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarScaleSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarAxisTicks"])(state, 'angleAxis', angleAxisId, isPanorama));
    if (viewBox == null || !ticks || !ticks.length) {
        return null;
    }
    var props = _objectSpread(_objectSpread(_objectSpread({}, defaultsAndInputs), {}, {
        scale
    }, viewBox), {}, {
        radius: viewBox.outerRadius
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polar-angle-axis', AXIS_TYPE, props.className)
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](AxisLine, _extends({}, props, {
        ticks: ticks
    })), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](Ticks, _extends({}, props, {
        ticks: ticks
    })));
};
class PolarAngleAxis extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"] {
    render() {
        if (this.props.radius <= 0) return null;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SetAngleAxisSettings, {
            id: this.props.angleAxisId,
            scale: this.props.scale,
            type: this.props.type,
            dataKey: this.props.dataKey,
            unit: undefined,
            name: this.props.name,
            allowDuplicatedCategory: false // Ignoring the prop on purpose because axis calculation behaves as if it was false and Tooltip requires it to be true.
            ,
            allowDataOverflow: false,
            reversed: this.props.reversed,
            includeHidden: false,
            allowDecimals: this.props.allowDecimals,
            tickCount: this.props.tickCount,
            ticks: this.props.ticks,
            tick: this.props.tick,
            domain: this.props.domain
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PolarAngleAxisWrapper, this.props));
    }
}
_defineProperty(PolarAngleAxis, "displayName", 'PolarAngleAxis');
_defineProperty(PolarAngleAxis, "axisType", AXIS_TYPE);
_defineProperty(PolarAngleAxis, "defaultProps", __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$defaultPolarAngleAxisProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPolarAngleAxisProps"]);
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/polar/PolarRadiusAxis.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarRadiusAxis",
    ()=>PolarRadiusAxis,
    "PolarRadiusAxisWrapper",
    ()=>PolarRadiusAxisWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$compat$2f$maxBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/es-toolkit/compat/maxBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$compat$2f$minBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/es-toolkit/compat/minBy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/component/Text.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/component/Label.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$polarAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/polarAxisSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarScaleSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/polarScaleSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/polarAxisSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$defaultPolarRadiusAxisProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/polar/defaultPolarRadiusAxisProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
var _excluded = [
    "cx",
    "cy",
    "angle",
    "axisLine"
], _excluded2 = [
    "angle",
    "tickFormatter",
    "stroke",
    "tick"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var AXIS_TYPE = 'radiusAxis';
function SetRadiusAxisSettings(settings) {
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$polarAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addRadiusAxis"])(settings));
        return ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$polarAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeRadiusAxis"])(settings));
        };
    });
    return null;
}
/**
 * Calculate the coordinate of tick
 * @param coordinate The radius of tick
 * @param angle from props
 * @param cx from chart
 * @param cy from chart
 * @return (x, y)
 */ var getTickValueCoord = (_ref, angle, cx, cy)=>{
    var { coordinate } = _ref;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, coordinate, angle);
};
var getTickTextAnchor = (orientation)=>{
    var textAnchor;
    switch(orientation){
        case 'left':
            textAnchor = 'end';
            break;
        case 'right':
            textAnchor = 'start';
            break;
        default:
            textAnchor = 'middle';
            break;
    }
    return textAnchor;
};
var getViewBox = (angle, cx, cy, ticks)=>{
    var maxRadiusTick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$compat$2f$maxBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ticks, (entry)=>entry.coordinate || 0);
    var minRadiusTick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$compat$2f$minBy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ticks, (entry)=>entry.coordinate || 0);
    return {
        cx,
        cy,
        startAngle: angle,
        endAngle: angle,
        innerRadius: minRadiusTick.coordinate || 0,
        outerRadius: maxRadiusTick.coordinate || 0,
        clockWise: false
    };
};
var renderAxisLine = (props, ticks)=>{
    var { cx, cy, angle, axisLine } = props, others = _objectWithoutProperties(props, _excluded);
    var extent = ticks.reduce((result, entry)=>[
            Math.min(result[0], entry.coordinate),
            Math.max(result[1], entry.coordinate)
        ], [
        Infinity,
        -Infinity
    ]);
    var point0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, extent[0], angle);
    var point1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, extent[1], angle);
    var axisLineProps = _objectSpread(_objectSpread(_objectSpread({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(others)), {}, {
        fill: 'none'
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(axisLine, false)), {}, {
        x1: point0.x,
        y1: point0.y,
        x2: point1.x,
        y2: point1.y
    });
    // @ts-expect-error wrong SVG element type
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("line", _extends({
        className: "recharts-polar-radius-axis-line"
    }, axisLineProps));
};
var renderTickItem = (option, tickProps, value)=>{
    var tickItem;
    if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isValidElement"](option)) {
        tickItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cloneElement"](option, tickProps);
    } else if (typeof option === 'function') {
        tickItem = option(tickProps);
    } else {
        tickItem = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], _extends({}, tickProps, {
            className: "recharts-polar-radius-axis-tick-value"
        }), value);
    }
    return tickItem;
};
var renderTicks = (props, ticks)=>{
    var { angle, tickFormatter, stroke, tick } = props, others = _objectWithoutProperties(props, _excluded2);
    var textAnchor = getTickTextAnchor(props.orientation);
    var axisProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(others);
    var customTickProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(tick, false);
    var items = ticks.map((entry, i)=>{
        var coord = getTickValueCoord(entry, props.angle, props.cx, props.cy);
        var tickProps = _objectSpread(_objectSpread(_objectSpread(_objectSpread({
            textAnchor,
            transform: "rotate(".concat(90 - angle, ", ").concat(coord.x, ", ").concat(coord.y, ")")
        }, axisProps), {}, {
            stroke: 'none',
            fill: stroke
        }, customTickProps), {}, {
            index: i
        }, coord), {}, {
            payload: entry
        });
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], _extends({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polar-radius-axis-tick', (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTickClassName"])(tick)),
            key: "tick-".concat(entry.coordinate)
        }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventsOfChild"])(props, entry, i)), renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value));
    });
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: "recharts-polar-radius-axis-ticks"
    }, items);
};
var PolarRadiusAxisWrapper = (defaultsAndInputs)=>{
    var { radiusAxisId } = defaultsAndInputs;
    var viewBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarAxisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarViewBox"]);
    var scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarScaleSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarAxisScale"])(state, 'radiusAxis', radiusAxisId));
    var ticks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$polarScaleSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPolarAxisTicks"])(state, 'radiusAxis', radiusAxisId, false));
    if (viewBox == null || !ticks || !ticks.length) {
        return null;
    }
    var props = _objectSpread(_objectSpread(_objectSpread({}, defaultsAndInputs), {}, {
        scale
    }, viewBox), {}, {
        radius: viewBox.outerRadius
    });
    var { tick, axisLine } = props;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Layer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polar-radius-axis', AXIS_TYPE, props.className)
    }, axisLine && renderAxisLine(props, ticks), tick && renderTicks(props, ticks), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarLabelContextProvider"], getViewBox(props.angle, props.cx, props.cy, ticks), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Label$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarLabelFromLabelProp"], {
        label: props.label
    }), props.children));
};
class PolarRadiusAxis extends __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PureComponent"] {
    render() {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](SetRadiusAxisSettings, {
            domain: this.props.domain,
            id: this.props.radiusAxisId,
            scale: this.props.scale,
            type: this.props.type,
            dataKey: this.props.dataKey,
            unit: undefined,
            name: this.props.name,
            allowDuplicatedCategory: this.props.allowDuplicatedCategory,
            allowDataOverflow: this.props.allowDataOverflow,
            reversed: this.props.reversed,
            includeHidden: this.props.includeHidden,
            allowDecimals: this.props.allowDecimals,
            tickCount: this.props.tickCount,
            ticks: this.props.ticks,
            tick: this.props.tick
        }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](PolarRadiusAxisWrapper, this.props));
    }
}
_defineProperty(PolarRadiusAxis, "displayName", 'PolarRadiusAxis');
_defineProperty(PolarRadiusAxis, "axisType", AXIS_TYPE);
_defineProperty(PolarRadiusAxis, "defaultProps", __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$defaultPolarRadiusAxisProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultPolarRadiusAxisProps"]);
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/container/Surface.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Surface",
    ()=>Surface
]);
/**
 * @fileOverview Surface
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var _excluded = [
    "children",
    "width",
    "height",
    "viewBox",
    "className",
    "style",
    "title",
    "desc"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
var Surface = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var { children, width, height, viewBox, className, style, title, desc } = props, others = _objectWithoutProperties(props, _excluded);
    var svgView = viewBox || {
        width,
        height,
        x: 0,
        y: 0
    };
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-surface', className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("svg", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, true, 'svg'), {
        className: layerClass,
        width: width,
        height: height,
        style: style,
        viewBox: "".concat(svgView.x, " ").concat(svgView.y, " ").concat(svgView.width, " ").concat(svgView.height),
        ref: ref
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("title", null, title), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("desc", null, desc), children);
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/container/RootSurface.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RootSurface",
    ()=>RootSurface
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/chartLayoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$accessibilityContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/accessibilityContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/container/Surface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$brushSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/brushSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/isWellBehavedNumber.js [app-ssr] (ecmascript)");
var _excluded = [
    "children"
];
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
;
;
;
;
;
;
;
;
var FULL_WIDTH_AND_HEIGHT = {
    width: '100%',
    height: '100%'
};
var MainChartSurface = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChartWidth"])();
    var height = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChartHeight"])();
    var hasAccessibilityLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$accessibilityContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccessibilityLayer"])();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPositiveNumber"])(width) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPositiveNumber"])(height)) {
        return null;
    }
    var { children, otherAttributes, title, desc } = props;
    var tabIndex, role;
    if (typeof otherAttributes.tabIndex === 'number') {
        tabIndex = otherAttributes.tabIndex;
    } else {
        tabIndex = hasAccessibilityLayer ? 0 : undefined;
    }
    if (typeof otherAttributes.role === 'string') {
        role = otherAttributes.role;
    } else {
        role = hasAccessibilityLayer ? 'application' : undefined;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], _extends({}, otherAttributes, {
        title: title,
        desc: desc,
        role: role,
        tabIndex: tabIndex,
        width: width,
        height: height,
        style: FULL_WIDTH_AND_HEIGHT,
        ref: ref
    }), children);
});
var BrushPanoramaSurface = (_ref)=>{
    var { children } = _ref;
    var brushDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$brushSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectBrushDimensions"]);
    if (!brushDimensions) {
        return null;
    }
    var { width, height, y, x } = brushDimensions;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$Surface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Surface"], {
        width: width,
        height: height,
        x: x,
        y: y
    }, children);
};
var RootSurface = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((_ref2, ref)=>{
    var { children } = _ref2, rest = _objectWithoutProperties(_ref2, _excluded);
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    if (isPanorama) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](BrushPanoramaSurface, null, children);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](MainChartSurface, _extends({
        ref: ref
    }, rest), children);
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/container/ClipPathProvider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClipPathProvider",
    ()=>ClipPathProvider,
    "useClipPathId",
    ()=>useClipPathId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/hooks.js [app-ssr] (ecmascript)");
;
;
;
;
var ClipPathIdContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
var ClipPathProvider = (_ref)=>{
    var { children } = _ref;
    var [clipPathId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueId"])('recharts'), "-clip"));
    var plotArea = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlotArea"])();
    if (plotArea == null) {
        return null;
    }
    var { x, y, width, height } = plotArea;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](ClipPathIdContext.Provider, {
        value: clipPathId
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("defs", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("clipPath", {
        id: clipPathId
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("rect", {
        x: x,
        y: y,
        height: height,
        width: width
    }))), children);
};
var useClipPathId = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ClipPathIdContext);
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/container/Layer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layer",
    ()=>Layer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var _excluded = [
    "children",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
var Layer = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"]((props, ref)=>{
    var { children, className } = props, others = _objectWithoutProperties(props, _excluded);
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-layer', className);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", _extends({
        className: layerClass
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, true), {
        ref: ref
    }), children);
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/synchronisation/syncSelectors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectSynchronisedTooltipState",
    ()=>selectSynchronisedTooltipState
]);
function selectSynchronisedTooltipState(state) {
    return state.tooltip.syncInteraction;
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/synchronisation/useChartSynchronisation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBrushChartSynchronisation",
    ()=>useBrushChartSynchronisation,
    "useSynchronisedEventsFromOtherCharts",
    ()=>useSynchronisedEventsFromOtherCharts,
    "useTooltipChartSynchronisation",
    ()=>useTooltipChartSynchronisation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/rootPropsSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/Events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/optionsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/tooltipSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/selectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/tooltipSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$synchronisation$2f$syncSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/synchronisation/syncSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/chartLayoutContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/chartDataSlice.js [app-ssr] (ecmascript)");
var _excluded = [
    "x",
    "y"
];
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
;
;
var noop = ()=>{};
function useTooltipSyncEventsListener() {
    var mySyncId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSyncId"]);
    var myEventEmitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectEventEmitter"]);
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    var syncMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSyncMethod"]);
    var tooltipTicks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTooltipAxisTicks"]);
    var layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChartLayout"])();
    var viewBox = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartLayoutContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useViewBox"])();
    var className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.rootProps.className);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mySyncId == null) {
            // This chart is not synchronised with any other chart so we don't need to listen for any events.
            return noop;
        }
        var listener = (incomingSyncId, action, emitter)=>{
            if (myEventEmitter === emitter) {
                // We don't want to dispatch actions that we sent ourselves.
                return;
            }
            if (mySyncId !== incomingSyncId) {
                // This event is not for this chart
                return;
            }
            if (syncMethod === 'index') {
                var _action$payload;
                if (viewBox && action !== null && action !== void 0 && (_action$payload = action.payload) !== null && _action$payload !== void 0 && _action$payload.coordinate) {
                    var _action$payload$coord = action.payload.coordinate, { x: _x, y: _y } = _action$payload$coord, otherCoordinateProps = _objectWithoutProperties(_action$payload$coord, _excluded);
                    var boundedCoordinate = _objectSpread(_objectSpread(_objectSpread({}, otherCoordinateProps), typeof _x === 'number' && {
                        x: Math.max(viewBox.x, Math.min(_x, viewBox.x + viewBox.width))
                    }), typeof _y === 'number' && {
                        y: Math.max(viewBox.y, Math.min(_y, viewBox.y + viewBox.height))
                    });
                    var boundedAction = _objectSpread(_objectSpread({}, action), {}, {
                        payload: _objectSpread(_objectSpread({}, action.payload), {}, {
                            coordinate: boundedCoordinate
                        })
                    });
                    dispatch(boundedAction);
                } else {
                    dispatch(action);
                }
                return;
            }
            if (tooltipTicks == null) {
                // for the other two sync methods, we need the ticks to be available
                return;
            }
            var activeTick;
            if (typeof syncMethod === 'function') {
                /*
         * This is what the data shape in 2.x CategoricalChartState used to look like.
         * In 3.x we store things differently but let's try to keep the old shape for compatibility.
         */ var syncMethodParam = {
                    activeTooltipIndex: action.payload.index == null ? undefined : Number(action.payload.index),
                    isTooltipActive: action.payload.active,
                    activeIndex: action.payload.index == null ? undefined : Number(action.payload.index),
                    activeLabel: action.payload.label,
                    activeDataKey: action.payload.dataKey,
                    activeCoordinate: action.payload.coordinate
                };
                // Call a callback function. If there is an application specific algorithm
                var activeTooltipIndex = syncMethod(tooltipTicks, syncMethodParam);
                activeTick = tooltipTicks[activeTooltipIndex];
            } else if (syncMethod === 'value') {
                // labels are always strings, tick.value might be a string or a number, depending on axis type
                activeTick = tooltipTicks.find((tick)=>String(tick.value) === action.payload.label);
            }
            var { coordinate } = action.payload;
            if (activeTick == null || action.payload.active === false || coordinate == null || viewBox == null) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSyncInteraction"])({
                    active: false,
                    coordinate: undefined,
                    dataKey: undefined,
                    index: null,
                    label: undefined
                }));
                return;
            }
            var { x, y } = coordinate;
            var validateChartX = Math.min(x, viewBox.x + viewBox.width);
            var validateChartY = Math.min(y, viewBox.y + viewBox.height);
            var activeCoordinate = {
                x: layout === 'horizontal' ? activeTick.coordinate : validateChartX,
                y: layout === 'horizontal' ? validateChartY : activeTick.coordinate
            };
            var syncAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSyncInteraction"])({
                active: action.payload.active,
                coordinate: activeCoordinate,
                dataKey: action.payload.dataKey,
                index: String(activeTick.index),
                label: action.payload.label
            });
            dispatch(syncAction);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].on(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOLTIP_SYNC_EVENT"], listener);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].off(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOLTIP_SYNC_EVENT"], listener);
        };
    }, [
        className,
        dispatch,
        myEventEmitter,
        mySyncId,
        syncMethod,
        tooltipTicks,
        layout,
        viewBox
    ]);
}
function useBrushSyncEventsListener() {
    var mySyncId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSyncId"]);
    var myEventEmitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectEventEmitter"]);
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (mySyncId == null) {
            // This chart is not synchronised with any other chart so we don't need to listen for any events.
            return noop;
        }
        var listener = (incomingSyncId, action, emitter)=>{
            if (myEventEmitter === emitter) {
                // We don't want to dispatch actions that we sent ourselves.
                return;
            }
            if (mySyncId === incomingSyncId) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$chartDataSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setDataStartEndIndexes"])(action));
            }
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].on(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRUSH_SYNC_EVENT"], listener);
        return ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].off(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRUSH_SYNC_EVENT"], listener);
        };
    }, [
        dispatch,
        myEventEmitter,
        mySyncId
    ]);
}
function useSynchronisedEventsFromOtherCharts() {
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventEmitter"])());
    }, [
        dispatch
    ]);
    useTooltipSyncEventsListener();
    useBrushSyncEventsListener();
}
function useTooltipChartSynchronisation(tooltipEventType, trigger, activeCoordinate, activeLabel, activeIndex, isTooltipActive) {
    var activeDataKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTooltipDataKey"])(state, tooltipEventType, trigger));
    var eventEmitterSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectEventEmitter"]);
    var syncId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSyncId"]);
    var syncMethod = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSyncMethod"]);
    var tooltipState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$synchronisation$2f$syncSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSynchronisedTooltipState"]);
    var isReceivingSynchronisation = tooltipState === null || tooltipState === void 0 ? void 0 : tooltipState.active;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isReceivingSynchronisation) {
            /*
       * This chart currently has active tooltip, synchronised from another chart.
       * Let's not send any outgoing synchronisation events while that's happening
       * to avoid infinite loops.
       */ return;
        }
        if (syncId == null) {
            /*
       * syncId is not set, means that this chart is not synchronised with any other chart,
       * means we don't need to send synchronisation events
       */ return;
        }
        if (eventEmitterSymbol == null) {
            /*
       * When using Recharts internal hooks and selectors outside charts context,
       * these properties will be undefined. Let's return silently instead of throwing an error.
       */ return;
        }
        var syncAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSyncInteraction"])({
            active: isTooltipActive,
            coordinate: activeCoordinate,
            dataKey: activeDataKey,
            index: activeIndex,
            label: typeof activeLabel === 'number' ? String(activeLabel) : activeLabel
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].emit(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOOLTIP_SYNC_EVENT"], syncId, syncAction, eventEmitterSymbol);
    }, [
        isReceivingSynchronisation,
        activeCoordinate,
        activeDataKey,
        activeIndex,
        activeLabel,
        eventEmitterSymbol,
        syncId,
        syncMethod,
        isTooltipActive
    ]);
}
function useBrushChartSynchronisation() {
    var syncId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSyncId"]);
    var eventEmitterSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$rootPropsSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectEventEmitter"]);
    var brushStartIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.chartData.dataStartIndex);
    var brushEndIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>state.chartData.dataEndIndex);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (syncId == null || brushStartIndex == null || brushEndIndex == null || eventEmitterSymbol == null) {
            return;
        }
        var syncAction = {
            startIndex: brushStartIndex,
            endIndex: brushEndIndex
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventCenter"].emit(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$Events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRUSH_SYNC_EVENT"], syncId, syncAction, eventEmitterSymbol);
    }, [
        brushEndIndex,
        brushStartIndex,
        eventEmitterSymbol,
        syncId
    ]);
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/RechartsWrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RechartsWrapper",
    ()=>RechartsWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/tooltipSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$mouseEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/mouseEventsMiddleware.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$synchronisation$2f$useChartSynchronisation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/synchronisation/useChartSynchronisation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$keyboardEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/keyboardEventsMiddleware.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useReportScale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/useReportScale.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/externalEventsMiddleware.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$touchEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/touchEventsMiddleware.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$tooltipPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/tooltipPortalContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$legendPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/legendPortalContext.js [app-ssr] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
;
;
;
;
;
;
;
var RechartsWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((_ref, ref)=>{
    var { children, className, height, onClick, onContextMenu, onDoubleClick, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseUp, onTouchEnd, onTouchMove, onTouchStart, style, width } = _ref;
    var dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppDispatch"])();
    var [tooltipPortal, setTooltipPortal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    var [legendPortal, setLegendPortal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$synchronisation$2f$useChartSynchronisation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSynchronisedEventsFromOtherCharts"])();
    var setScaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useReportScale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReportScale"])();
    var innerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((node)=>{
        setScaleRef(node);
        if (typeof ref === 'function') {
            ref(node);
        }
        setTooltipPortal(node);
        setLegendPortal(node);
    }, [
        setScaleRef,
        ref,
        setTooltipPortal,
        setLegendPortal
    ]);
    var myOnClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$mouseEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseClickAction"])(e));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onClick,
            reactEvent: e
        }));
    }, [
        dispatch,
        onClick
    ]);
    var myOnMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$mouseEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseMoveAction"])(e));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onMouseEnter,
            reactEvent: e
        }));
    }, [
        dispatch,
        onMouseEnter
    ]);
    var myOnMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$tooltipSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseLeaveChart"])());
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onMouseLeave,
            reactEvent: e
        }));
    }, [
        dispatch,
        onMouseLeave
    ]);
    var myOnMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$mouseEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mouseMoveAction"])(e));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onMouseMove,
            reactEvent: e
        }));
    }, [
        dispatch,
        onMouseMove
    ]);
    var onFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$keyboardEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["focusAction"])());
    }, [
        dispatch
    ]);
    var onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$keyboardEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keyDownAction"])(e.key));
    }, [
        dispatch
    ]);
    var myOnContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onContextMenu,
            reactEvent: e
        }));
    }, [
        dispatch,
        onContextMenu
    ]);
    var myOnDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onDoubleClick,
            reactEvent: e
        }));
    }, [
        dispatch,
        onDoubleClick
    ]);
    var myOnMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onMouseDown,
            reactEvent: e
        }));
    }, [
        dispatch,
        onMouseDown
    ]);
    var myOnMouseUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onMouseUp,
            reactEvent: e
        }));
    }, [
        dispatch,
        onMouseUp
    ]);
    var myOnTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onTouchStart,
            reactEvent: e
        }));
    }, [
        dispatch,
        onTouchStart
    ]);
    /*
   * onTouchMove is special because it behaves different from mouse events.
   * Mouse events have enter + leave combo that notify us when the mouse is over
   * a certain element. Touch events don't have that; touch only gives us
   * start (finger down), end (finger up) and move (finger moving).
   * So we need to figure out which element the user is touching
   * ourselves. Fortunately, there's a convenient method for that:
   * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementFromPoint
   */ var myOnTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$touchEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["touchEventAction"])(e));
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onTouchMove,
            reactEvent: e
        }));
    }, [
        dispatch,
        onTouchMove
    ]);
    var myOnTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$externalEventsMiddleware$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["externalEventAction"])({
            handler: onTouchEnd,
            reactEvent: e
        }));
    }, [
        dispatch,
        onTouchEnd
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$tooltipPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipPortalContext"].Provider, {
        value: tooltipPortal
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$legendPortalContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LegendPortalContext"].Provider, {
        value: legendPortal
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-wrapper', className),
        style: _objectSpread({
            position: 'relative',
            cursor: 'default',
            width,
            height
        }, style),
        onClick: myOnClick,
        onContextMenu: myOnContextMenu,
        onDoubleClick: myOnDoubleClick,
        onFocus: onFocus,
        onKeyDown: onKeyDown,
        onMouseDown: myOnMouseDown,
        onMouseEnter: myOnMouseEnter,
        onMouseLeave: myOnMouseLeave,
        onMouseMove: myOnMouseMove,
        onMouseUp: myOnMouseUp,
        onTouchEnd: myOnTouchEnd,
        onTouchMove: myOnTouchMove,
        onTouchStart: myOnTouchStart,
        ref: innerRef
    }, children)));
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/CategoricalChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoricalChart",
    ()=>CategoricalChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$RootSurface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/container/RootSurface.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RechartsWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/chart/RechartsWrapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$ClipPathProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/container/ClipPathProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
var _excluded = [
    "children",
    "className",
    "width",
    "height",
    "style",
    "compact",
    "title",
    "desc"
];
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
var CategoricalChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var { children, className, width, height, style, compact, title, desc } = props, others = _objectWithoutProperties(props, _excluded);
    var attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(others);
    // The "compact" mode is used as the panorama within Brush
    if (compact) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$RootSurface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RootSurface"], {
            otherAttributes: attrs,
            title: title,
            desc: desc
        }, children);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$RechartsWrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RechartsWrapper"], {
        className: className,
        style: style,
        width: width,
        height: height,
        onClick: props.onClick,
        onMouseLeave: props.onMouseLeave,
        onMouseEnter: props.onMouseEnter,
        onMouseMove: props.onMouseMove,
        onMouseDown: props.onMouseDown,
        onMouseUp: props.onMouseUp,
        onContextMenu: props.onContextMenu,
        onDoubleClick: props.onDoubleClick,
        onTouchStart: props.onTouchStart,
        onTouchMove: props.onTouchMove,
        onTouchEnd: props.onTouchEnd
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$RootSurface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RootSurface"], {
        otherAttributes: attrs,
        title: title,
        desc: desc,
        ref: ref
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$container$2f$ClipPathProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClipPathProvider"], null, children)));
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/CartesianChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartesianChart",
    ()=>CartesianChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$RechartsStoreProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/RechartsStoreProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/chartDataContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportMainChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/ReportMainChartProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/ReportChartProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/chart/CategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/isWellBehavedNumber.js [app-ssr] (ecmascript)");
var _excluded = [
    "width",
    "height"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
var defaultMargin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
};
var defaultProps = {
    accessibilityLayer: true,
    layout: 'horizontal',
    stackOffset: 'none',
    barCategoryGap: '10%',
    barGap: 4,
    margin: defaultMargin,
    reverseStackOrder: false,
    syncMethod: 'index'
};
var CartesianChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function CartesianChart(props, ref) {
    var _categoricalChartProp;
    var rootChartProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(props.categoricalChartProps, defaultProps);
    var { width, height } = rootChartProps, otherCategoricalProps = _objectWithoutProperties(rootChartProps, _excluded);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPositiveNumber"])(width) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPositiveNumber"])(height)) {
        return null;
    }
    var { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher, categoricalChartProps } = props;
    var options = {
        chartName,
        defaultTooltipEventType,
        validateTooltipEventTypes,
        tooltipPayloadSearcher,
        eventEmitter: undefined
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$RechartsStoreProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RechartsStoreProvider"], {
        preloadedState: {
            options
        },
        reduxStoreName: (_categoricalChartProp = categoricalChartProps.id) !== null && _categoricalChartProp !== void 0 ? _categoricalChartProp : chartName
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartDataContextProvider"], {
        chartData: categoricalChartProps.data
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportMainChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportMainChartProps"], {
        width: width,
        height: height,
        layout: rootChartProps.layout,
        margin: rootChartProps.margin
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportChartProps"], {
        accessibilityLayer: rootChartProps.accessibilityLayer,
        barCategoryGap: rootChartProps.barCategoryGap,
        maxBarSize: rootChartProps.maxBarSize,
        stackOffset: rootChartProps.stackOffset,
        barGap: rootChartProps.barGap,
        barSize: rootChartProps.barSize,
        syncId: rootChartProps.syncId,
        syncMethod: rootChartProps.syncMethod,
        className: rootChartProps.className
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoricalChart"], _extends({}, otherCategoricalProps, {
        width: width,
        height: height,
        ref: ref
    })));
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/BarChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart",
    ()=>BarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/optionsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CartesianChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/chart/CartesianChart.js [app-ssr] (ecmascript)");
;
;
;
;
var allowedTooltipTypes = [
    'axis',
    'item'
];
var BarChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CartesianChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianChart"], {
        chartName: "BarChart",
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: allowedTooltipTypes,
        tooltipPayloadSearcher: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayTooltipSearcher"],
        categoricalChartProps: props,
        ref: ref
    });
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/ScatterChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScatterChart",
    ()=>ScatterChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/optionsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CartesianChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/chart/CartesianChart.js [app-ssr] (ecmascript)");
;
;
;
;
var allowedTooltipTypes = [
    'item'
];
var ScatterChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CartesianChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianChart"], {
        chartName: "ScatterChart",
        defaultTooltipEventType: "item",
        validateTooltipEventTypes: allowedTooltipTypes,
        tooltipPayloadSearcher: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayTooltipSearcher"],
        categoricalChartProps: props,
        ref: ref
    });
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/PolarChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PolarChart",
    ()=>PolarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$RechartsStoreProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/RechartsStoreProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/chartDataContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportMainChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/ReportMainChartProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/ReportChartProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportPolarOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/ReportPolarOptions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/chart/CategoricalChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/isWellBehavedNumber.js [app-ssr] (ecmascript)");
var _excluded = [
    "width",
    "height",
    "layout"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
;
;
;
;
;
var defaultMargin = {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
};
/**
 * These default props are the same for all PolarChart components.
 */ var defaultProps = {
    accessibilityLayer: true,
    stackOffset: 'none',
    barCategoryGap: '10%',
    barGap: 4,
    margin: defaultMargin,
    reverseStackOrder: false,
    syncMethod: 'index',
    layout: 'radial'
};
var PolarChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function PolarChart(props, ref) {
    var _polarChartProps$id;
    var polarChartProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(props.categoricalChartProps, defaultProps);
    var { width, height, layout } = polarChartProps, otherCategoricalProps = _objectWithoutProperties(polarChartProps, _excluded);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPositiveNumber"])(width) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isPositiveNumber"])(height)) {
        return null;
    }
    var { chartName, defaultTooltipEventType, validateTooltipEventTypes, tooltipPayloadSearcher } = props;
    var options = {
        chartName,
        defaultTooltipEventType,
        validateTooltipEventTypes,
        tooltipPayloadSearcher,
        eventEmitter: undefined
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$RechartsStoreProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RechartsStoreProvider"], {
        preloadedState: {
            options
        },
        reduxStoreName: (_polarChartProps$id = polarChartProps.id) !== null && _polarChartProps$id !== void 0 ? _polarChartProps$id : chartName
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$chartDataContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChartDataContextProvider"], {
        chartData: polarChartProps.data
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportMainChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportMainChartProps"], {
        width: width,
        height: height,
        layout: layout,
        margin: polarChartProps.margin
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportChartProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportChartProps"], {
        accessibilityLayer: polarChartProps.accessibilityLayer,
        barCategoryGap: polarChartProps.barCategoryGap,
        maxBarSize: polarChartProps.maxBarSize,
        stackOffset: polarChartProps.stackOffset,
        barGap: polarChartProps.barGap,
        barSize: polarChartProps.barSize,
        syncId: polarChartProps.syncId,
        syncMethod: polarChartProps.syncMethod,
        className: polarChartProps.className
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$ReportPolarOptions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReportPolarOptions"], {
        cx: polarChartProps.cx,
        cy: polarChartProps.cy,
        startAngle: polarChartProps.startAngle,
        endAngle: polarChartProps.endAngle,
        innerRadius: polarChartProps.innerRadius,
        outerRadius: polarChartProps.outerRadius
    }), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$CategoricalChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoricalChart"], _extends({
        width: width,
        height: height
    }, otherCategoricalProps, {
        ref: ref
    })));
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/chart/RadarChart.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RadarChart",
    ()=>RadarChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/optionsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PolarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/chart/PolarChart.js [app-ssr] (ecmascript)");
;
;
;
;
;
var allowedTooltipTypes = [
    'axis'
];
var defaultProps = {
    layout: 'centric',
    startAngle: 90,
    endAngle: -270,
    cx: '50%',
    cy: '50%',
    innerRadius: 0,
    outerRadius: '80%'
};
var RadarChart = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    var propsWithDefaults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(props, defaultProps);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PolarChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PolarChart"], {
        chartName: "RadarChart",
        defaultTooltipEventType: "axis",
        validateTooltipEventTypes: allowedTooltipTypes,
        tooltipPayloadSearcher: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$optionsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["arrayTooltipSearcher"],
        categoricalChartProps: propsWithDefaults,
        ref: ref
    });
});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/hooks.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveTooltipDataPoints",
    ()=>useActiveTooltipDataPoints,
    "useActiveTooltipLabel",
    ()=>useActiveTooltipLabel,
    "useOffset",
    ()=>useOffset,
    "usePlotArea",
    ()=>usePlotArea,
    "useXAxis",
    ()=>useXAxis,
    "useXAxisDomain",
    ()=>useXAxisDomain,
    "useYAxis",
    ()=>useYAxis,
    "useYAxisDomain",
    ()=>useYAxisDomain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$cartesianAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/cartesianAxisSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$axisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/axisSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/hooks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/context/PanoramaContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/tooltipSelectors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectChartOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/selectChartOffset.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectPlotArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/state/selectors/selectPlotArea.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
var useXAxis = (xAxisId)=>{
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$axisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAxisWithScale"])(state, 'xAxis', xAxisId, isPanorama));
};
var useYAxis = (yAxisId)=>{
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$axisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAxisWithScale"])(state, 'yAxis', yAxisId, isPanorama));
};
var useActiveTooltipLabel = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectActiveLabel"]);
};
var useOffset = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectChartOffset$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectChartOffset"]);
};
var usePlotArea = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$selectPlotArea$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectPlotArea"]);
};
var useActiveTooltipDataPoints = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$tooltipSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectActiveTooltipDataPoints"]);
};
var useXAxisDomain = function useXAxisDomain() {
    var xAxisId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$cartesianAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAxisId"];
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$axisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAxisDomain"])(state, 'xAxis', xAxisId, isPanorama));
};
var useYAxisDomain = function useYAxisDomain() {
    var yAxisId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$cartesianAxisSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultAxisId"];
    var isPanorama = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$context$2f$PanoramaContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsPanorama"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$hooks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppSelector"])((state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$state$2f$selectors$2f$axisSelectors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAxisDomain"])(state, 'yAxis', yAxisId, isPanorama));
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDashCase",
    ()=>getDashCase,
    "getIntersectionKeys",
    ()=>getIntersectionKeys,
    "getTransitionVal",
    ()=>getTransitionVal,
    "mapObject",
    ()=>mapObject
]);
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var getDashCase = (name)=>name.replace(/([A-Z])/g, (v)=>"-".concat(v.toLowerCase()));
var getTransitionVal = (props, duration, easing)=>props.map((prop)=>"".concat(getDashCase(prop), " ").concat(duration, "ms ").concat(easing)).join(',');
var getIntersectionKeys = (preObj, nextObj)=>[
        Object.keys(preObj),
        Object.keys(nextObj)
    ].reduce((a, b)=>a.filter((c)=>b.includes(c)));
var mapObject = (fn, obj)=>Object.keys(obj).reduce((res, key)=>_objectSpread(_objectSpread({}, res), {}, {
            [key]: fn(key, obj[key])
        }), {});
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/configUpdate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alpha",
    ()=>alpha,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/util.js [app-ssr] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
var alpha = (begin, end, k)=>begin + (end - begin) * k;
var needContinue = (_ref)=>{
    var { from, to } = _ref;
    return from !== to;
};
/*
 * @description: cal new from value and velocity in each stepper
 * @return: { [styleProperty]: { from, to, velocity } }
 */ var calStepperVals = (easing, preVals, steps)=>{
    var nextStepVals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObject"])((key, val)=>{
        if (needContinue(val)) {
            var [newX, newV] = easing(val.from, val.to, val.velocity);
            return _objectSpread(_objectSpread({}, val), {}, {
                from: newX,
                velocity: newV
            });
        }
        return val;
    }, preVals);
    if (steps < 1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObject"])((key, val)=>{
            if (needContinue(val)) {
                return _objectSpread(_objectSpread({}, val), {}, {
                    velocity: alpha(val.velocity, nextStepVals[key].velocity, steps),
                    from: alpha(val.from, nextStepVals[key].from, steps)
                });
            }
            return val;
        }, preVals);
    }
    return calStepperVals(easing, nextStepVals, steps - 1);
};
function createStepperUpdate(from, to, easing, interKeys, render, timeoutController) {
    var preTime;
    var stepperStyle = interKeys.reduce((res, key)=>_objectSpread(_objectSpread({}, res), {}, {
            [key]: {
                from: from[key],
                velocity: 0,
                to: to[key]
            }
        }), {});
    var getCurrStyle = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObject"])((key, val)=>val.from, stepperStyle);
    var shouldStopAnimation = ()=>!Object.values(stepperStyle).filter(needContinue).length;
    var stopAnimation = null;
    var stepperUpdate = (now)=>{
        if (!preTime) {
            preTime = now;
        }
        var deltaTime = now - preTime;
        var steps = deltaTime / easing.dt;
        stepperStyle = calStepperVals(easing, stepperStyle, steps);
        // get union set and add compatible prefix
        render(_objectSpread(_objectSpread(_objectSpread({}, from), to), getCurrStyle()));
        preTime = now;
        if (!shouldStopAnimation()) {
            stopAnimation = timeoutController.setTimeout(stepperUpdate);
        }
    };
    // return start animation method
    return ()=>{
        stopAnimation = timeoutController.setTimeout(stepperUpdate);
        // return stop animation method
        return ()=>{
            stopAnimation();
        };
    };
}
function createTimingUpdate(from, to, easing, duration, interKeys, render, timeoutController) {
    var stopAnimation = null;
    var timingStyle = interKeys.reduce((res, key)=>_objectSpread(_objectSpread({}, res), {}, {
            [key]: [
                from[key],
                to[key]
            ]
        }), {});
    var beginTime;
    var timingUpdate = (now)=>{
        if (!beginTime) {
            beginTime = now;
        }
        var t = (now - beginTime) / duration;
        var currStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObject"])((key, val)=>alpha(...val, easing(t)), timingStyle);
        // get union set and add compatible prefix
        render(_objectSpread(_objectSpread(_objectSpread({}, from), to), currStyle));
        if (t < 1) {
            stopAnimation = timeoutController.setTimeout(timingUpdate);
        } else {
            var finalStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapObject"])((key, val)=>alpha(...val, easing(1)), timingStyle);
            render(_objectSpread(_objectSpread(_objectSpread({}, from), to), finalStyle));
        }
    };
    // return start animation method
    return ()=>{
        stopAnimation = timeoutController.setTimeout(timingUpdate);
        // return stop animation method
        return ()=>{
            stopAnimation();
        };
    };
}
const __TURBOPACK__default__export__ = (from, to, easing, duration, render, timeoutController)=>{
    var interKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getIntersectionKeys"])(from, to);
    return easing.isStepper === true ? createStepperUpdate(from, to, easing, interKeys, render, timeoutController) : createTimingUpdate(from, to, easing, duration, interKeys, render, timeoutController);
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/easing.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCURACY",
    ()=>ACCURACY,
    "configBezier",
    ()=>configBezier,
    "configEasing",
    ()=>configEasing,
    "configSpring",
    ()=>configSpring
]);
var ACCURACY = 1e-4;
var cubicBezierFactor = (c1, c2)=>[
        0,
        3 * c1,
        3 * c2 - 6 * c1,
        3 * c1 - 3 * c2 + 1
    ];
var evaluatePolynomial = (params, t)=>params.map((param, i)=>param * t ** i).reduce((pre, curr)=>pre + curr);
var cubicBezier = (c1, c2)=>(t)=>{
        var params = cubicBezierFactor(c1, c2);
        return evaluatePolynomial(params, t);
    };
var derivativeCubicBezier = (c1, c2)=>(t)=>{
        var params = cubicBezierFactor(c1, c2);
        var newParams = [
            ...params.map((param, i)=>param * i).slice(1),
            0
        ];
        return evaluatePolynomial(newParams, t);
    };
var configBezier = function configBezier() {
    var x1, x2, y1, y2;
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if (args.length === 1) {
        switch(args[0]){
            case 'linear':
                [x1, y1, x2, y2] = [
                    0.0,
                    0.0,
                    1.0,
                    1.0
                ];
                break;
            case 'ease':
                [x1, y1, x2, y2] = [
                    0.25,
                    0.1,
                    0.25,
                    1.0
                ];
                break;
            case 'ease-in':
                [x1, y1, x2, y2] = [
                    0.42,
                    0.0,
                    1.0,
                    1.0
                ];
                break;
            case 'ease-out':
                [x1, y1, x2, y2] = [
                    0.42,
                    0.0,
                    0.58,
                    1.0
                ];
                break;
            case 'ease-in-out':
                [x1, y1, x2, y2] = [
                    0.0,
                    0.0,
                    0.58,
                    1.0
                ];
                break;
            default:
                {
                    var easing = args[0].split('(');
                    if (easing[0] === 'cubic-bezier' && easing[1].split(')')[0].split(',').length === 4) {
                        [x1, y1, x2, y2] = easing[1].split(')')[0].split(',').map((x)=>parseFloat(x));
                    }
                }
        }
    } else if (args.length === 4) {
        [x1, y1, x2, y2] = args;
    }
    var curveX = cubicBezier(x1, x2);
    var curveY = cubicBezier(y1, y2);
    var derCurveX = derivativeCubicBezier(x1, x2);
    var rangeValue = (value)=>{
        if (value > 1) {
            return 1;
        }
        if (value < 0) {
            return 0;
        }
        return value;
    };
    var bezier = (_t)=>{
        var t = _t > 1 ? 1 : _t;
        var x = t;
        for(var i = 0; i < 8; ++i){
            var evalT = curveX(x) - t;
            var derVal = derCurveX(x);
            if (Math.abs(evalT - t) < ACCURACY || derVal < ACCURACY) {
                return curveY(x);
            }
            x = rangeValue(x - evalT / derVal);
        }
        return curveY(x);
    };
    bezier.isStepper = false;
    return bezier;
};
var configSpring = function configSpring() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var { stiff = 100, damping = 8, dt = 17 } = config;
    var stepper = (currX, destX, currV)=>{
        var FSpring = -(currX - destX) * stiff;
        var FDamping = currV * damping;
        var newV = currV + (FSpring - FDamping) * dt / 1000;
        var newX = currV * dt / 1000 + currX;
        if (Math.abs(newX - destX) < ACCURACY && Math.abs(newV) < ACCURACY) {
            return [
                destX,
                0
            ];
        }
        return [
            newX,
            newV
        ];
    };
    stepper.isStepper = true;
    stepper.dt = dt;
    return stepper;
};
var configEasing = (easing)=>{
    if (typeof easing === 'string') {
        switch(easing){
            case 'ease':
            case 'ease-in-out':
            case 'ease-out':
            case 'ease-in':
            case 'linear':
                return configBezier(easing);
            case 'spring':
                return configSpring();
            default:
                if (easing.split('(')[0] === 'cubic-bezier') {
                    return configBezier(easing);
                }
        }
    }
    if (typeof easing === 'function') {
        return easing;
    }
    return null;
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/AnimationManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Represents a single item in the ReactSmoothQueue.
 * The item can be:
 * - A number representing a delay in milliseconds.
 * - An object representing a style change
 * - A StartAnimationFunction that starts eased transition and calls different render
 *      because of course in Recharts we have to have three ways to do everything
 * - An arbitrary function to be executed
 */ __turbopack_context__.s([
    "createAnimateManager",
    ()=>createAnimateManager
]);
function createAnimateManager(timeoutController) {
    var currStyle;
    var handleChange = ()=>null;
    var shouldStop = false;
    var cancelTimeout = null;
    var setStyle = (_style)=>{
        if (shouldStop) {
            return;
        }
        if (Array.isArray(_style)) {
            if (!_style.length) {
                return;
            }
            var styles = _style;
            var [curr, ...restStyles] = styles;
            if (typeof curr === 'number') {
                cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles), curr);
                return;
            }
            setStyle(curr);
            cancelTimeout = timeoutController.setTimeout(setStyle.bind(null, restStyles));
            return;
        }
        if (typeof _style === 'string') {
            currStyle = _style;
            handleChange(currStyle);
        }
        if (typeof _style === 'object') {
            currStyle = _style;
            handleChange(currStyle);
        }
        if (typeof _style === 'function') {
            _style();
        }
    };
    return {
        stop: ()=>{
            shouldStop = true;
        },
        start: (style)=>{
            shouldStop = false;
            if (cancelTimeout) {
                cancelTimeout();
                cancelTimeout = null;
            }
            setStyle(style);
        },
        subscribe: (_handleChange)=>{
            handleChange = _handleChange;
            return ()=>{
                handleChange = ()=>null;
            };
        },
        getTimeoutController: ()=>timeoutController
    };
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/timeoutController.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Callback type for the timeout function.
 * Receives current time in milliseconds as an argument.
 */ /**
 * A function that, when called, cancels the timeout.
 */ __turbopack_context__.s([
    "RequestAnimationFrameTimeoutController",
    ()=>RequestAnimationFrameTimeoutController
]);
class RequestAnimationFrameTimeoutController {
    setTimeout(callback) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var startTime = performance.now();
        var requestId = null;
        var executeCallback = (now)=>{
            if (now - startTime >= delay) {
                callback(now);
            // tests fail without the extra if, even when five lines below it's not needed
            // TODO finish transition to the mocked timeout controller and then remove this condition
            } else if (typeof requestAnimationFrame === 'function') {
                requestId = requestAnimationFrame(executeCallback);
            }
        };
        requestId = requestAnimationFrame(executeCallback);
        return ()=>{
            cancelAnimationFrame(requestId);
        };
    }
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/createDefaultAnimationManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultAnimationManager",
    ()=>createDefaultAnimationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$AnimationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/AnimationManager.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$timeoutController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/timeoutController.js [app-ssr] (ecmascript)");
;
;
function createDefaultAnimationManager() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$AnimationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAnimateManager"])(new __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$timeoutController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RequestAnimationFrameTimeoutController"]());
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/useAnimationManager.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationManagerContext",
    ()=>AnimationManagerContext,
    "useAnimationManager",
    ()=>useAnimationManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$createDefaultAnimationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/createDefaultAnimationManager.js [app-ssr] (ecmascript)");
;
;
var AnimationManagerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$createDefaultAnimationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createDefaultAnimationManager"]);
function useAnimationManager(animationId, animationManagerFromProps) {
    var contextAnimationManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AnimationManagerContext);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>animationManagerFromProps !== null && animationManagerFromProps !== void 0 ? animationManagerFromProps : contextAnimationManager(animationId), [
        animationId,
        animationManagerFromProps,
        contextAnimationManager
    ]);
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/animation/JavascriptAnimate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JavascriptAnimate",
    ()=>JavascriptAnimate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$function$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/es-toolkit/dist/function/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$configUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/configUpdate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/easing.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$useAnimationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/useAnimationManager.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var defaultJavascriptAnimateProps = {
    begin: 0,
    duration: 1000,
    easing: 'ease',
    isActive: true,
    canBegin: true,
    onAnimationEnd: ()=>{},
    onAnimationStart: ()=>{}
};
var from = {
    t: 0
};
var to = {
    t: 1
};
function JavascriptAnimate(outsideProps) {
    var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(outsideProps, defaultJavascriptAnimateProps);
    var { isActive, canBegin, duration, easing, begin, onAnimationEnd, onAnimationStart, children } = props;
    var animationManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$useAnimationManager$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationManager"])(props.animationId, props.animationManager);
    var [style, setStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isActive ? from : to);
    var stopJSAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive) {
            setStyle(to);
        }
    }, [
        isActive
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isActive || !canBegin) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$es$2d$toolkit$2f$dist$2f$function$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
        }
        var startAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$configUpdate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(from, to, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$easing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["configEasing"])(easing), duration, setStyle, animationManager.getTimeoutController());
        var onAnimationActive = ()=>{
            stopJSAnimation.current = startAnimation();
        };
        animationManager.start([
            onAnimationStart,
            begin,
            onAnimationActive,
            duration,
            onAnimationEnd
        ]);
        return ()=>{
            animationManager.stop();
            if (stopJSAnimation.current) {
                stopJSAnimation.current();
            }
            onAnimationEnd();
        };
    }, [
        isActive,
        canBegin,
        duration,
        easing,
        begin,
        onAnimationStart,
        onAnimationEnd,
        animationManager
    ]);
    return children(style.t);
}
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Rectangle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rectangle",
    ()=>Rectangle
]);
/**
 * @fileOverview Rectangle
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$JavascriptAnimate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/JavascriptAnimate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useAnimationId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/useAnimationId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/util.js [app-ssr] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
;
;
;
;
;
;
;
;
var getRectanglePath = (x, y, width, height, radius)=>{
    var maxRadius = Math.min(Math.abs(width) / 2, Math.abs(height) / 2);
    var ySign = height >= 0 ? 1 : -1;
    var xSign = width >= 0 ? 1 : -1;
    var clockWise = height >= 0 && width >= 0 || height < 0 && width < 0 ? 1 : 0;
    var path;
    if (maxRadius > 0 && radius instanceof Array) {
        var newRadius = [
            0,
            0,
            0,
            0
        ];
        for(var i = 0, len = 4; i < len; i++){
            newRadius[i] = radius[i] > maxRadius ? maxRadius : radius[i];
        }
        path = "M".concat(x, ",").concat(y + ySign * newRadius[0]);
        if (newRadius[0] > 0) {
            path += "A ".concat(newRadius[0], ",").concat(newRadius[0], ",0,0,").concat(clockWise, ",").concat(x + xSign * newRadius[0], ",").concat(y);
        }
        path += "L ".concat(x + width - xSign * newRadius[1], ",").concat(y);
        if (newRadius[1] > 0) {
            path += "A ".concat(newRadius[1], ",").concat(newRadius[1], ",0,0,").concat(clockWise, ",\n        ").concat(x + width, ",").concat(y + ySign * newRadius[1]);
        }
        path += "L ".concat(x + width, ",").concat(y + height - ySign * newRadius[2]);
        if (newRadius[2] > 0) {
            path += "A ".concat(newRadius[2], ",").concat(newRadius[2], ",0,0,").concat(clockWise, ",\n        ").concat(x + width - xSign * newRadius[2], ",").concat(y + height);
        }
        path += "L ".concat(x + xSign * newRadius[3], ",").concat(y + height);
        if (newRadius[3] > 0) {
            path += "A ".concat(newRadius[3], ",").concat(newRadius[3], ",0,0,").concat(clockWise, ",\n        ").concat(x, ",").concat(y + height - ySign * newRadius[3]);
        }
        path += 'Z';
    } else if (maxRadius > 0 && radius === +radius && radius > 0) {
        var _newRadius = Math.min(maxRadius, radius);
        path = "M ".concat(x, ",").concat(y + ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + xSign * _newRadius, ",").concat(y, "\n            L ").concat(x + width - xSign * _newRadius, ",").concat(y, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width, ",").concat(y + ySign * _newRadius, "\n            L ").concat(x + width, ",").concat(y + height - ySign * _newRadius, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x + width - xSign * _newRadius, ",").concat(y + height, "\n            L ").concat(x + xSign * _newRadius, ",").concat(y + height, "\n            A ").concat(_newRadius, ",").concat(_newRadius, ",0,0,").concat(clockWise, ",").concat(x, ",").concat(y + height - ySign * _newRadius, " Z");
    } else {
        path = "M ".concat(x, ",").concat(y, " h ").concat(width, " v ").concat(height, " h ").concat(-width, " Z");
    }
    return path;
};
var defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    // The radius of border
    // The radius of four corners when radius is a number
    // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
    radius: 0,
    isAnimationActive: false,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
};
var Rectangle = (rectangleProps)=>{
    var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(rectangleProps, defaultProps);
    var pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var [totalLength, setTotalLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathRef.current && pathRef.current.getTotalLength) {
            try {
                var pathTotalLength = pathRef.current.getTotalLength();
                if (pathTotalLength) {
                    setTotalLength(pathTotalLength);
                }
            } catch (_unused) {
            // calculate total length error
            }
        }
    }, []);
    var { x, y, width, height, radius, className } = props;
    var { animationEasing, animationDuration, animationBegin, isAnimationActive, isUpdateAnimationActive } = props;
    var prevWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(width);
    var prevHeightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(height);
    var prevXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(x);
    var prevYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(y);
    var animationIdInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            x,
            y,
            width,
            height,
            radius
        }), [
        x,
        y,
        width,
        height,
        radius
    ]);
    var animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useAnimationId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationId"])(animationIdInput, 'rectangle-');
    if (x !== +x || y !== +y || width !== +width || height !== +height || width === 0 || height === 0) {
        return null;
    }
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-rectangle', className);
    if (!isUpdateAnimationActive) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, true), {
            className: layerClass,
            d: getRectanglePath(x, y, width, height, radius)
        }));
    }
    var prevWidth = prevWidthRef.current;
    var prevHeight = prevHeightRef.current;
    var prevX = prevXRef.current;
    var prevY = prevYRef.current;
    var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
    var to = "".concat(totalLength, "px 0px");
    var transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionVal"])([
        'strokeDasharray'
    ], animationDuration, typeof animationEasing === 'string' ? animationEasing : undefined);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$JavascriptAnimate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptAnimate"], {
        animationId: animationId,
        key: animationId,
        canBegin: totalLength > 0,
        duration: animationDuration,
        easing: animationEasing,
        isActive: isUpdateAnimationActive,
        begin: animationBegin
    }, (t)=>{
        var currWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevWidth, width, t);
        var currHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevHeight, height, t);
        var currX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevX, x, t);
        var currY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevY, y, t);
        if (pathRef.current) {
            prevWidthRef.current = currWidth;
            prevHeightRef.current = currHeight;
            prevXRef.current = currX;
            prevYRef.current = currY;
        }
        var animationStyle;
        if (!isAnimationActive) {
            animationStyle = {
                strokeDasharray: to
            };
        } else if (t > 0) {
            animationStyle = {
                transition,
                strokeDasharray: to
            };
        } else {
            animationStyle = {
                strokeDasharray: from
            };
        }
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, true), {
            className: layerClass,
            d: getRectanglePath(currX, currY, currWidth, currHeight, radius),
            ref: pathRef,
            style: _objectSpread(_objectSpread({}, animationStyle), props.style)
        }));
    });
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Trapezoid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trapezoid",
    ()=>Trapezoid
]);
/**
 * @fileOverview Rectangle
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$JavascriptAnimate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/JavascriptAnimate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useAnimationId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/useAnimationId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/animation/util.js [app-ssr] (ecmascript)");
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
;
;
;
;
;
;
;
;
var getTrapezoidPath = (x, y, upperWidth, lowerWidth, height)=>{
    var widthGap = upperWidth - lowerWidth;
    var path;
    path = "M ".concat(x, ",").concat(y);
    path += "L ".concat(x + upperWidth, ",").concat(y);
    path += "L ".concat(x + upperWidth - widthGap / 2, ",").concat(y + height);
    path += "L ".concat(x + upperWidth - widthGap / 2 - lowerWidth, ",").concat(y + height);
    path += "L ".concat(x, ",").concat(y, " Z");
    return path;
};
var defaultProps = {
    x: 0,
    y: 0,
    upperWidth: 0,
    lowerWidth: 0,
    height: 0,
    isUpdateAnimationActive: false,
    animationBegin: 0,
    animationDuration: 1500,
    animationEasing: 'ease'
};
var Trapezoid = (outsideProps)=>{
    var trapezoidProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(outsideProps, defaultProps);
    var { x, y, upperWidth, lowerWidth, height, className } = trapezoidProps;
    var { animationEasing, animationDuration, animationBegin, isUpdateAnimationActive } = trapezoidProps;
    var pathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])();
    var [totalLength, setTotalLength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    var prevUpperWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(upperWidth);
    var prevLowerWidthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(lowerWidth);
    var prevHeightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(height);
    var prevXRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(x);
    var prevYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(y);
    var animationId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$useAnimationId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimationId"])(outsideProps, 'trapezoid-');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pathRef.current && pathRef.current.getTotalLength) {
            try {
                var pathTotalLength = pathRef.current.getTotalLength();
                if (pathTotalLength) {
                    setTotalLength(pathTotalLength);
                }
            } catch (_unused) {
            // calculate total length error
            }
        }
    }, []);
    if (x !== +x || y !== +y || upperWidth !== +upperWidth || lowerWidth !== +lowerWidth || height !== +height || upperWidth === 0 && lowerWidth === 0 || height === 0) {
        return null;
    }
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-trapezoid', className);
    if (!isUpdateAnimationActive) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", null, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(trapezoidProps, true), {
            className: layerClass,
            d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height)
        })));
    }
    var prevUpperWidth = prevUpperWidthRef.current;
    var prevLowerWidth = prevLowerWidthRef.current;
    var prevHeight = prevHeightRef.current;
    var prevX = prevXRef.current;
    var prevY = prevYRef.current;
    var from = "0px ".concat(totalLength === -1 ? 1 : totalLength, "px");
    var to = "".concat(totalLength, "px 0px");
    var transition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getTransitionVal"])([
        'strokeDasharray'
    ], animationDuration, animationEasing);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$animation$2f$JavascriptAnimate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JavascriptAnimate"], {
        animationId: animationId,
        key: animationId,
        canBegin: totalLength > 0,
        duration: animationDuration,
        easing: animationEasing,
        isActive: isUpdateAnimationActive,
        begin: animationBegin
    }, (t)=>{
        var currUpperWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevUpperWidth, upperWidth, t);
        var currLowerWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevLowerWidth, lowerWidth, t);
        var currHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevHeight, height, t);
        var currX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevX, x, t);
        var currY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["interpolate"])(prevY, y, t);
        if (pathRef.current) {
            prevUpperWidthRef.current = currUpperWidth;
            prevLowerWidthRef.current = currLowerWidth;
            prevHeightRef.current = currHeight;
            prevXRef.current = currX;
            prevYRef.current = currY;
        }
        var animationStyle = t > 0 ? {
            transition,
            strokeDasharray: to
        } : {
            strokeDasharray: from
        };
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(trapezoidProps, true), {
            className: layerClass,
            d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight),
            ref: pathRef,
            style: _objectSpread(_objectSpread({}, animationStyle), trapezoidProps.style)
        }));
    });
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Sector.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sector",
    ()=>Sector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/PolarUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/resolveDefaultProps.js [app-ssr] (ecmascript)");
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
;
;
;
;
;
var getDeltaAngle = (startAngle, endAngle)=>{
    var sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathSign"])(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 359.999);
    return sign * deltaAngle;
};
var getTangentCircle = (_ref)=>{
    var { cx, cy, radius, angle, sign, isExternal, cornerRadius, cornerIsExternal } = _ref;
    var centerRadius = cornerRadius * (isExternal ? 1 : -1) + radius;
    var theta = Math.asin(cornerRadius / centerRadius) / __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RADIAN"];
    var centerAngle = cornerIsExternal ? angle : angle + sign * theta;
    var center = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, centerRadius, centerAngle);
    // The coordinate of point which is tangent to the circle
    var circleTangency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, radius, centerAngle);
    // The coordinate of point which is tangent to the radius line
    var lineTangencyAngle = cornerIsExternal ? angle - sign * theta : angle;
    var lineTangency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, centerRadius * Math.cos(theta * __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RADIAN"]), lineTangencyAngle);
    return {
        center,
        circleTangency,
        lineTangency,
        theta
    };
};
var getSectorPath = (_ref2)=>{
    var { cx, cy, innerRadius, outerRadius, startAngle, endAngle } = _ref2;
    var angle = getDeltaAngle(startAngle, endAngle);
    // When the angle of sector equals to 360, star point and end point coincide
    var tempEndAngle = startAngle + angle;
    var outerStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, outerRadius, startAngle);
    var outerEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, outerRadius, tempEndAngle);
    var path = "M ".concat(outerStartPoint.x, ",").concat(outerStartPoint.y, "\n    A ").concat(outerRadius, ",").concat(outerRadius, ",0,\n    ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle > tempEndAngle), ",\n    ").concat(outerEndPoint.x, ",").concat(outerEndPoint.y, "\n  ");
    if (innerRadius > 0) {
        var innerStartPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, innerRadius, startAngle);
        var innerEndPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$PolarUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["polarToCartesian"])(cx, cy, innerRadius, tempEndAngle);
        path += "L ".concat(innerEndPoint.x, ",").concat(innerEndPoint.y, "\n            A ").concat(innerRadius, ",").concat(innerRadius, ",0,\n            ").concat(+(Math.abs(angle) > 180), ",").concat(+(startAngle <= tempEndAngle), ",\n            ").concat(innerStartPoint.x, ",").concat(innerStartPoint.y, " Z");
    } else {
        path += "L ".concat(cx, ",").concat(cy, " Z");
    }
    return path;
};
var getSectorWithCorner = (_ref3)=>{
    var { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle } = _ref3;
    var sign = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mathSign"])(endAngle - startAngle);
    var { circleTangency: soct, lineTangency: solt, theta: sot } = getTangentCircle({
        cx,
        cy,
        radius: outerRadius,
        angle: startAngle,
        sign,
        cornerRadius,
        cornerIsExternal
    });
    var { circleTangency: eoct, lineTangency: eolt, theta: eot } = getTangentCircle({
        cx,
        cy,
        radius: outerRadius,
        angle: endAngle,
        sign: -sign,
        cornerRadius,
        cornerIsExternal
    });
    var outerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sot - eot;
    if (outerArcAngle < 0) {
        if (forceCornerRadius) {
            return "M ".concat(solt.x, ",").concat(solt.y, "\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(cornerRadius * 2, ",0\n        a").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,1,").concat(-cornerRadius * 2, ",0\n      ");
        }
        return getSectorPath({
            cx,
            cy,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle
        });
    }
    var path = "M ".concat(solt.x, ",").concat(solt.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(soct.x, ",").concat(soct.y, "\n    A").concat(outerRadius, ",").concat(outerRadius, ",0,").concat(+(outerArcAngle > 180), ",").concat(+(sign < 0), ",").concat(eoct.x, ",").concat(eoct.y, "\n    A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eolt.x, ",").concat(eolt.y, "\n  ");
    if (innerRadius > 0) {
        var { circleTangency: sict, lineTangency: silt, theta: sit } = getTangentCircle({
            cx,
            cy,
            radius: innerRadius,
            angle: startAngle,
            sign,
            isExternal: true,
            cornerRadius,
            cornerIsExternal
        });
        var { circleTangency: eict, lineTangency: eilt, theta: eit } = getTangentCircle({
            cx,
            cy,
            radius: innerRadius,
            angle: endAngle,
            sign: -sign,
            isExternal: true,
            cornerRadius,
            cornerIsExternal
        });
        var innerArcAngle = cornerIsExternal ? Math.abs(startAngle - endAngle) : Math.abs(startAngle - endAngle) - sit - eit;
        if (innerArcAngle < 0 && cornerRadius === 0) {
            return "".concat(path, "L").concat(cx, ",").concat(cy, "Z");
        }
        path += "L".concat(eilt.x, ",").concat(eilt.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(eict.x, ",").concat(eict.y, "\n      A").concat(innerRadius, ",").concat(innerRadius, ",0,").concat(+(innerArcAngle > 180), ",").concat(+(sign > 0), ",").concat(sict.x, ",").concat(sict.y, "\n      A").concat(cornerRadius, ",").concat(cornerRadius, ",0,0,").concat(+(sign < 0), ",").concat(silt.x, ",").concat(silt.y, "Z");
    } else {
        path += "L".concat(cx, ",").concat(cy, "Z");
    }
    return path;
};
/**
 * SVG cx, cy are `string | number | undefined`, but internally we use `number` so let's
 * override the types here.
 */ var defaultProps = {
    cx: 0,
    cy: 0,
    innerRadius: 0,
    outerRadius: 0,
    startAngle: 0,
    endAngle: 0,
    cornerRadius: 0,
    forceCornerRadius: false,
    cornerIsExternal: false
};
var Sector = (sectorProps)=>{
    var props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$resolveDefaultProps$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveDefaultProps"])(sectorProps, defaultProps);
    var { cx, cy, innerRadius, outerRadius, cornerRadius, forceCornerRadius, cornerIsExternal, startAngle, endAngle, className } = props;
    if (outerRadius < innerRadius || startAngle === endAngle) {
        return null;
    }
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-sector', className);
    var deltaRadius = outerRadius - innerRadius;
    var cr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPercentValue"])(cornerRadius, deltaRadius, 0, true);
    var path;
    if (cr > 0 && Math.abs(startAngle - endAngle) < 360) {
        path = getSectorWithCorner({
            cx,
            cy,
            innerRadius,
            outerRadius,
            cornerRadius: Math.min(cr, deltaRadius / 2),
            forceCornerRadius,
            cornerIsExternal,
            startAngle,
            endAngle
        });
    } else {
        path = getSectorPath({
            cx,
            cy,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, true), {
        className: layerClass,
        d: path
    }));
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Symbols.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Symbols",
    ()=>Symbols
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$shape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/victory-vendor/es/d3-shape.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbol$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol.js [app-ssr] (ecmascript) <export default as symbol>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolCircle$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/circle.js [app-ssr] (ecmascript) <export default as symbolCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$cross$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolCross$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/cross.js [app-ssr] (ecmascript) <export default as symbolCross>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$diamond$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolDiamond$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/diamond.js [app-ssr] (ecmascript) <export default as symbolDiamond>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolSquare$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/square.js [app-ssr] (ecmascript) <export default as symbolSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolStar$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/star.js [app-ssr] (ecmascript) <export default as symbolStar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolTriangle$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/triangle.js [app-ssr] (ecmascript) <export default as symbolTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$wye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolWye$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/symbol/wye.js [app-ssr] (ecmascript) <export default as symbolWye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var _excluded = [
    "type",
    "size",
    "sizeType"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
;
var symbolFactories = {
    symbolCircle: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolCircle$3e$__["symbolCircle"],
    symbolCross: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$cross$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolCross$3e$__["symbolCross"],
    symbolDiamond: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$diamond$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolDiamond$3e$__["symbolDiamond"],
    symbolSquare: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolSquare$3e$__["symbolSquare"],
    symbolStar: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolStar$3e$__["symbolStar"],
    symbolTriangle: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$triangle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolTriangle$3e$__["symbolTriangle"],
    symbolWye: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$wye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolWye$3e$__["symbolWye"]
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = (type)=>{
    var name = "symbol".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upperFirst"])(type));
    return symbolFactories[name] || __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbolCircle$3e$__["symbolCircle"];
};
var calculateAreaSize = (size, sizeType, type)=>{
    if (sizeType === 'area') {
        return size;
    }
    switch(type){
        case 'cross':
            return 5 * size * size / 9;
        case 'diamond':
            return 0.5 * size * size / Math.sqrt(3);
        case 'square':
            return size * size;
        case 'star':
            {
                var angle = 18 * RADIAN;
                return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.tan(angle) ** 2);
            }
        case 'triangle':
            return Math.sqrt(3) * size * size / 4;
        case 'wye':
            return (21 - 10 * Math.sqrt(3)) * size * size / 8;
        default:
            return Math.PI * size * size / 4;
    }
};
var registerSymbol = (key, factory)=>{
    symbolFactories["symbol".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upperFirst"])(key))] = factory;
};
var Symbols = (_ref)=>{
    var { type = 'circle', size = 64, sizeType = 'area' } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
    var props = _objectSpread(_objectSpread({}, rest), {}, {
        type,
        size,
        sizeType
    });
    var realType = 'circle';
    if (typeof type === 'string') {
        /*
     * Our type guard is not as strong as it could be (i.e. non-existent),
     * and so despite the typescript type saying that `type` is a `SymbolType`,
     * we can get numbers or really anything, so let's have a runtime check here to fix the exception.
     *
     * https://github.com/recharts/recharts/issues/6197
     */ realType = type;
    }
    /**
   * Calculate the path of curve
   * @return {String} path
   */ var getPath = ()=>{
        var symbolFactory = getSymbolFactory(realType);
        var symbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$symbol$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__symbol$3e$__["symbol"])().type(symbolFactory).size(calculateAreaSize(size, sizeType, realType));
        return symbol();
    };
    var { className, cx, cy } = props;
    var filteredProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, true);
    if (cx === +cx && cy === +cy && size === +size) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, filteredProps, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-symbols', className),
            transform: "translate(".concat(cx, ", ").concat(cy, ")"),
            d: getPath()
        }));
    }
    return null;
};
Symbols.registerSymbol = registerSymbol;
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Curve.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Curve",
    ()=>Curve,
    "getPath",
    ()=>getPath
]);
/**
 * @fileOverview Curve
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$victory$2d$vendor$2f$es$2f$d3$2d$shape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/victory-vendor/es/d3-shape.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/line.js [app-ssr] (ecmascript) <export default as line>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__area$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/area.js [app-ssr] (ecmascript) <export default as area>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisClosed$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/basisClosed.js [app-ssr] (ecmascript) <export default as curveBasisClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisOpen$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/basisOpen.js [app-ssr] (ecmascript) <export default as curveBasisOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasis$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/basis.js [app-ssr] (ecmascript) <export default as curveBasis>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpX__as__curveBumpX$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/bump.js [app-ssr] (ecmascript) <export bumpX as curveBumpX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpY__as__curveBumpY$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/bump.js [app-ssr] (ecmascript) <export bumpY as curveBumpY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linearClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinearClosed$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/linearClosed.js [app-ssr] (ecmascript) <export default as curveLinearClosed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinear$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/linear.js [app-ssr] (ecmascript) <export default as curveLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneX__as__curveMonotoneX$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/monotone.js [app-ssr] (ecmascript) <export monotoneX as curveMonotoneX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneY__as__curveMonotoneY$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/monotone.js [app-ssr] (ecmascript) <export monotoneY as curveMonotoneY>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$natural$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveNatural$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/natural.js [app-ssr] (ecmascript) <export default as curveNatural>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveStep$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/step.js [app-ssr] (ecmascript) <export default as curveStep>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepAfter__as__curveStepAfter$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/step.js [app-ssr] (ecmascript) <export stepAfter as curveStepAfter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepBefore__as__curveStepBefore$3e$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/d3-shape/src/curve/step.js [app-ssr] (ecmascript) <export stepBefore as curveStepBefore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/isWellBehavedNumber.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
;
;
;
;
;
;
;
var CURVE_FACTORIES = {
    curveBasisClosed: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisClosed$3e$__["curveBasisClosed"],
    curveBasisOpen: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basisOpen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasisOpen$3e$__["curveBasisOpen"],
    curveBasis: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$basis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveBasis$3e$__["curveBasis"],
    curveBumpX: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpX__as__curveBumpX$3e$__["curveBumpX"],
    curveBumpY: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$bump$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__bumpY__as__curveBumpY$3e$__["curveBumpY"],
    curveLinearClosed: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linearClosed$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinearClosed$3e$__["curveLinearClosed"],
    curveLinear: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinear$3e$__["curveLinear"],
    curveMonotoneX: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneX__as__curveMonotoneX$3e$__["curveMonotoneX"],
    curveMonotoneY: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__monotoneY__as__curveMonotoneY$3e$__["curveMonotoneY"],
    curveNatural: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$natural$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveNatural$3e$__["curveNatural"],
    curveStep: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveStep$3e$__["curveStep"],
    curveStepAfter: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepAfter__as__curveStepAfter$3e$__["curveStepAfter"],
    curveStepBefore: __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$step$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__stepBefore__as__curveStepBefore$3e$__["curveStepBefore"]
};
/**
 * @deprecated use {@link Coordinate} instead
 * Duplicated with `Coordinate` in `util/types.ts`
 */ /**
 * @deprecated use {@link NullableCoordinate} instead
 * Duplicated with `NullableCoordinate` in `util/types.ts`
 */ var defined = (p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWellBehavedNumber"])(p.x) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$isWellBehavedNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isWellBehavedNumber"])(p.y);
var getX = (p)=>p.x;
var getY = (p)=>p.y;
var getCurveFactory = (type, layout)=>{
    if (typeof type === 'function') {
        return type;
    }
    var name = "curve".concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upperFirst"])(type));
    if ((name === 'curveMonotone' || name === 'curveBump') && layout) {
        return CURVE_FACTORIES["".concat(name).concat(layout === 'vertical' ? 'Y' : 'X')];
    }
    return CURVE_FACTORIES[name] || __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$linear$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__curveLinear$3e$__["curveLinear"];
};
var getPath = (_ref)=>{
    var { type = 'linear', points = [], baseLine, layout, connectNulls = false } = _ref;
    var curveFactory = getCurveFactory(type, layout);
    var formatPoints = connectNulls ? points.filter(defined) : points;
    var lineFunction;
    if (Array.isArray(baseLine)) {
        var formatBaseLine = connectNulls ? baseLine.filter((base)=>defined(base)) : baseLine;
        var areaPoints = formatPoints.map((entry, index)=>_objectSpread(_objectSpread({}, entry), {}, {
                base: formatBaseLine[index]
            }));
        if (layout === 'vertical') {
            lineFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__area$3e$__["area"])().y(getY).x1(getX).x0((d)=>d.base.x);
        } else {
            lineFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__area$3e$__["area"])().x(getX).y1(getY).y0((d)=>d.base.y);
        }
        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(areaPoints);
    }
    if (layout === 'vertical' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(baseLine)) {
        lineFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__area$3e$__["area"])().y(getY).x1(getX).x0(baseLine);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(baseLine)) {
        lineFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$area$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__area$3e$__["area"])().x(getX).y1(getY).y0(baseLine);
    } else {
        lineFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$d3$2d$shape$2f$src$2f$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__line$3e$__["line"])().x(getX).y(getY);
    }
    lineFunction.defined(defined).curve(curveFactory);
    return lineFunction(formatPoints);
};
var Curve = (props)=>{
    var { className, points, path, pathRef } = props;
    if ((!points || !points.length) && !path) {
        return null;
    }
    var realPath = points && points.length ? getPath(props) : path;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventHandlers"])(props), {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-curve', className),
        d: realPath === null ? undefined : realPath,
        ref: pathRef
    }));
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Cross.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cross",
    ()=>Cross
]);
/**
 * @fileOverview Cross
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/DataUtils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var _excluded = [
    "x",
    "y",
    "top",
    "left",
    "width",
    "height",
    "className"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
            _defineProperty(e, r, t[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != typeof i) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
;
var getPath = (x, y, width, height, top, left)=>{
    return "M".concat(x, ",").concat(top, "v").concat(height, "M").concat(left, ",").concat(y, "h").concat(width);
};
var Cross = (_ref)=>{
    var { x = 0, y = 0, top = 0, left = 0, width = 0, height = 0, className } = _ref, rest = _objectWithoutProperties(_ref, _excluded);
    var props = _objectSpread({
        x,
        y,
        top,
        left,
        width,
        height
    }, rest);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(x) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(y) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(width) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(height) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(top) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$DataUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isNumber"])(left)) {
        return null;
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(props, true), {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-cross', className),
        d: getPath(x, y, width, height, top, left)
    }));
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Polygon.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Polygon",
    ()=>Polygon
]);
/**
 * @fileOverview Polygon
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/ReactUtils.js [app-ssr] (ecmascript)");
var _excluded = [
    "points",
    "className",
    "baseLinePoints",
    "connectNulls"
];
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o, r, i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        for(r = 0; r < n.length; r++)o = n[r], -1 === t.indexOf(o) && ({}).propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
}
function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for(var n in r)if (({}).hasOwnProperty.call(r, n)) {
        if (-1 !== e.indexOf(n)) continue;
        t[n] = r[n];
    }
    return t;
}
;
;
;
var isValidatePoint = (point)=>{
    return point && point.x === +point.x && point.y === +point.y;
};
var getParsedPoints = function getParsedPoints() {
    var points = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var segmentPoints = [
        []
    ];
    points.forEach((entry)=>{
        if (isValidatePoint(entry)) {
            segmentPoints[segmentPoints.length - 1].push(entry);
        } else if (segmentPoints[segmentPoints.length - 1].length > 0) {
            // add another path
            segmentPoints.push([]);
        }
    });
    if (isValidatePoint(points[0])) {
        segmentPoints[segmentPoints.length - 1].push(points[0]);
    }
    if (segmentPoints[segmentPoints.length - 1].length <= 0) {
        segmentPoints = segmentPoints.slice(0, -1);
    }
    return segmentPoints;
};
var getSinglePolygonPath = (points, connectNulls)=>{
    var segmentPoints = getParsedPoints(points);
    if (connectNulls) {
        segmentPoints = [
            segmentPoints.reduce((res, segPoints)=>{
                return [
                    ...res,
                    ...segPoints
                ];
            }, [])
        ];
    }
    var polygonPath = segmentPoints.map((segPoints)=>{
        return segPoints.reduce((path, point, index)=>{
            return "".concat(path).concat(index === 0 ? 'M' : 'L').concat(point.x, ",").concat(point.y);
        }, '');
    }).join('');
    return segmentPoints.length === 1 ? "".concat(polygonPath, "Z") : polygonPath;
};
var getRanglePath = (points, baseLinePoints, connectNulls)=>{
    var outerPath = getSinglePolygonPath(points, connectNulls);
    return "".concat(outerPath.slice(-1) === 'Z' ? outerPath.slice(0, -1) : outerPath, "L").concat(getSinglePolygonPath(Array.from(baseLinePoints).reverse(), connectNulls).slice(1));
};
var Polygon = (props)=>{
    var { points, className, baseLinePoints, connectNulls } = props, others = _objectWithoutProperties(props, _excluded);
    if (!points || !points.length) {
        return null;
    }
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-polygon', className);
    if (baseLinePoints && baseLinePoints.length) {
        var hasStroke = others.stroke && others.stroke !== 'none';
        var rangePath = getRanglePath(points, baseLinePoints, connectNulls);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("g", {
            className: layerClass
        }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, true), {
            fill: rangePath.slice(-1) === 'Z' ? others.fill : 'none',
            stroke: "none",
            d: rangePath
        })), hasStroke ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, true), {
            fill: "none",
            d: getSinglePolygonPath(points, connectNulls)
        })) : null, hasStroke ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, true), {
            fill: "none",
            d: getSinglePolygonPath(baseLinePoints, connectNulls)
        })) : null);
    }
    var singlePath = getSinglePolygonPath(points, connectNulls);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("path", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$ReactUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filterProps"])(others, true), {
        fill: singlePath.slice(-1) === 'Z' ? others.fill : 'none',
        className: layerClass,
        d: singlePath
    }));
};
}),
"[project]/web/nextjs-app/node_modules/recharts/es6/shape/Dot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dot",
    ()=>Dot
]);
/**
 * @fileOverview Dot
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/web/nextjs-app/node_modules/recharts/es6/util/svgPropertiesNoEvents.js [app-ssr] (ecmascript)");
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
;
;
;
var Dot = (props)=>{
    var { cx, cy, r, className } = props;
    var layerClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])('recharts-dot', className);
    if (cx === +cx && cy === +cy && r === +r) {
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("circle", _extends({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$svgPropertiesNoEvents$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["svgPropertiesNoEvents"])(props), (0, __TURBOPACK__imported__module__$5b$project$5d2f$web$2f$nextjs$2d$app$2f$node_modules$2f$recharts$2f$es6$2f$util$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["adaptEventHandlers"])(props), {
            className: layerClass,
            cx: cx,
            cy: cy,
            r: r
        }));
    }
    return null;
};
}),
];

//# sourceMappingURL=3b7f8_recharts_es6_dbff4bb7._.js.map
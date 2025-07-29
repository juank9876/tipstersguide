// src/config/debug-log.ts



export const debug = {
    brandlisty: {
        url: false,
        response: false,
        html: false,
    },
    fetcher: false,
    pages: false,
    htmlContent: false,
    cssContent: false,
    postOrCategoryPermalink: false,
    currentPostOrCategoryUrl: false,
    menu: false,
}





export function debugLog(isActive: boolean, ...args: any[]) {
    if (isActive) {
        console.log(...args);
    }
}
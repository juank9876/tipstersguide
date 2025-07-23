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
    postOrCategoryPermalink: true,
    currentPostOrCategoryUrl: true,
    menu: true,
}





export function debugLog(isActive: boolean, ...args: any[]) {
    if (isActive) {
        console.log(...args);
    }
}
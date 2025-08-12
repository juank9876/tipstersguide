// src/config/debug-log.ts



export const debug = {          //console logear variables para debugear los fetchs. No afecta al codigo, solo logs
    brandlisty: {
        url: false,
        response: false,
        html: false,
    },
    fetcher: false,
    fetchPages: false,
    fetchPosts: false,
    fetchCategories: false,

    pages: false,
    htmlContent: false,
    cssContent: false,
    postOrCategoryPermalink: false,
    currentPostOrCategoryUrl: false,
    menu: false,

    createMetadata: false,
}

export const settings = {       //manejar opciones de config del proyecto. No afecta al codigo, solo logs
    styles: {
        //loadTailwindFromApi: false,
        applyStylesheet: false,             //Aplicar / no aplicar hoja de estilos del proyeto
        applyTemplateStyles: false,         //AKA transformer rules ON/OFF --- DONE

    }
}


export function debugLog(isActive: boolean, ...args: any[]) {
    if (isActive) {
        console.log(...args);
    }
}
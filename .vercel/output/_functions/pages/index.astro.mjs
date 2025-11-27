/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as addAttribute, d as renderScript, e as renderComponent, f as renderHead, g as renderSlot, A as AstroError, U as UnknownContentCollectionError, R as RenderUndefinedEntryError, u as unescapeHTML, h as renderUniqueStylesheet, i as renderScriptElement, j as createHeadAndContent } from '../chunks/astro/server_DVx1gkO_.mjs';
import 'piccolore';
import { clsx } from 'clsx';
import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from '../chunks/path_tbLlI_c1.mjs';
import { V as VALID_INPUT_FORMATS } from '../chunks/consts_BmVDRGlB.mjs';
import * as devalue from 'devalue';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="bg-slate-950/50 backdrop-blur-lg border-b border-slate-800/60 sticky top-0 z-50 transition-all duration-300"> <div class="max-w-5xl mx-auto px-6"> <div class="flex justify-between items-center h-16"> <a href="/" class="text-xl font-bold text-slate-100 font-mono hover:text-blue-400 transition-colors tracking-tight">
&lt;DevBackend /&gt;
</a> <div class="flex gap-8"> <a href="#about" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group">
Sobre mí
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span> </a> <a href="#stack" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group">
Stack
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span> </a> <a href="#projects" class="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors relative group">
Proyectos
<span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span> </a> </div> </div> </div> </nav>`;
}, "C:/Repositorios/Portafolio/src/components/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 text-white py-8 mt-auto"> <div class="max-w-4xl mx-auto px-4 text-center"> <p class="mb-4">
&copy; ${currentYear} Ingeniero Backend. Construido con <a href="https://astro.build" class="text-blue-400 hover:underline">Astro</a> y <a href="https://tailwindcss.com" class="text-blue-400 hover:underline">Tailwind CSS</a>.
</p> <div class="flex justify-center gap-6"> <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">GitHub</a> <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition">LinkedIn</a> <a href="mailto:tu@email.com" class="hover:text-blue-400 transition">Email</a> </div> </div> </footer>`;
}, "C:/Repositorios/Portafolio/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Repositorios/Portafolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Repositorios/Portafolio/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="description" content="Portafolio de Backend Developer - Ingeniero de Sistemas Universidad Distrital"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="bg-slate-950 text-slate-50 flex flex-col min-h-screen font-sans selection:bg-blue-500 selection:text-white"> <div class="fixed inset-0 -z-10 h-full w-full bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Repositorios/Portafolio/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  const { title, description, tags, githubLink, docsLink } = project.data;
  const { Content } = await project.render();
  return renderTemplate`${maybeRenderHead()}<article class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden backdrop-blur-sm"> <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <div class="flex justify-between items-start mb-4"> <h3 class="text-2xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">${title}</h3> <div class="flex gap-3"> <a${addAttribute(githubLink, "href")} target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white hover:scale-110 transition transform" title="Ver en GitHub" aria-label="Ver código fuente en GitHub"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> </a> ${docsLink && renderTemplate`<a${addAttribute(docsLink, "href")} target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-400 hover:scale-110 transition transform" title="Ver Documentación" aria-label="Ver documentación del proyecto"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> </a>`} </div> </div> <p class="text-slate-300 mb-4 leading-relaxed"> ${description} </p> <div class="mb-6 prose prose-invert prose-sm max-w-none text-slate-400"> ${renderComponent($$result, "Content", Content, {})} </div> <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800"> ${tags.map((tag) => renderTemplate`<span class="px-3 py-1 bg-blue-950/30 text-blue-300 text-xs font-bold rounded-full font-mono border border-blue-900/50">
#${tag} </span>`)} </div> </article>`;
}, "C:/Repositorios/Portafolio/src/components/ProjectCard.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('../chunks/_astro_data-layer-content_OLSlZSUM.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('../chunks/content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('../chunks/_astro_assets_NcQ9zn5p.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { Path: process.env.Path }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('../chunks/content-modules_Dz-S_Wwv.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Spotlight = ({ className, fill }) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      ),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 3787 2842",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("g", { filter: "url(#filter)", children: /* @__PURE__ */ jsx(
          "ellipse",
          {
            cx: "1924.71",
            cy: "273.501",
            rx: "1924.71",
            ry: "273.501",
            transform: "matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)",
            fill: fill || "white",
            fillOpacity: "0.21"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
          "filter",
          {
            id: "filter",
            x: "0.860352",
            y: "0.838989",
            width: "3785.16",
            height: "2840.26",
            filterUnits: "userSpaceOnUse",
            colorInterpolationFilters: "sRGB",
            children: [
              /* @__PURE__ */ jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
              /* @__PURE__ */ jsx(
                "feBlend",
                {
                  mode: "normal",
                  in: "SourceGraphic",
                  in2: "BackgroundImageFix",
                  result: "shape"
                }
              ),
              /* @__PURE__ */ jsx(
                "feGaussianBlur",
                {
                  stdDeviation: "151",
                  result: "effect1_foregroundBlur_1065_8"
                }
              )
            ]
          }
        ) })
      ]
    }
  );
};

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio Backend - Ing. Distrital" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-5xl mx-auto px-6 py-12 relative overflow-hidden"> <!-- Hero Section --> <section id="about" class="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12 animate-fade-in relative"> ${renderComponent($$result2, "Spotlight", Spotlight, { "className": "-top-40 left-0 md:left-60 md:-top-20", "fill": "white", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Repositorios/Portafolio/src/components/ui/spotlight", "client:component-export": "Spotlight" })} <div class="flex-1 relative z-10"> <div class="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-950/30 rounded-full border border-blue-800 animate-slide-up backdrop-blur-sm">
Backend Developer
</div> <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight animate-slide-up">
Hola, soy <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tu Nombre</span> </h1> <p class="text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl animate-slide-up-delay">
Ingeniero de Sistemas de la Universidad Distrital. Especializado en diseñar
<strong class="text-slate-200">arquitecturas escalables</strong>, 
          APIs robustas y sistemas distribuidos de alto rendimiento.
</p> <div class="flex flex-wrap gap-4 animate-slide-up-delay"> <a href="https://github.com/tu-usuario" target="_blank" class="bg-white text-slate-950 px-8 py-3 rounded-lg font-medium hover:bg-slate-200 transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-white/10"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
GitHub
</a> <a href="mailto:tu@email.com" class="border border-slate-700 text-slate-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 hover:text-white transition hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
Contactar
</a> </div> </div> </section> <!-- Tech Stack Section --> <section id="stack" class="mb-24 relative z-10"> <h2 class="text-3xl font-bold mb-10 text-white flex items-center gap-3"> <div class="p-2 bg-blue-900/30 rounded-lg text-blue-400 border border-blue-800/50"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> </div>
Stack Tecnológico
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> <div class="p-6 bg-slate-900/50 rounded-xl border border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm"> <h3 class="font-bold text-lg mb-4 text-slate-200 border-b border-slate-800 pb-2 group-hover:text-blue-400 transition-colors">Lenguajes</h3> <ul class="space-y-3 text-slate-400"> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">☕</span> Java
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🐍</span> Python
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">📘</span> TypeScript
</li> </ul> </div> <div class="p-6 bg-slate-900/50 rounded-xl border border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm"> <h3 class="font-bold text-lg mb-4 text-slate-200 border-b border-slate-800 pb-2 group-hover:text-blue-400 transition-colors">Frameworks</h3> <ul class="space-y-3 text-slate-400"> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🍃</span> Spring Boot
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🚂</span> Express.js
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🦁</span> NestJS
</li> </ul> </div> <div class="p-6 bg-slate-900/50 rounded-xl border border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm"> <h3 class="font-bold text-lg mb-4 text-slate-200 border-b border-slate-800 pb-2 group-hover:text-blue-400 transition-colors">Data</h3> <ul class="space-y-3 text-slate-400"> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🐘</span> PostgreSQL
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🍃</span> MongoDB
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🔴</span> Redis
</li> </ul> </div> <div class="p-6 bg-slate-900/50 rounded-xl border border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm"> <h3 class="font-bold text-lg mb-4 text-slate-200 border-b border-slate-800 pb-2 group-hover:text-blue-400 transition-colors">DevOps</h3> <ul class="space-y-3 text-slate-400"> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🐳</span> Docker
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">☁️</span> AWS (EC2/S3)
</li> <li class="flex items-center gap-3 hover:text-slate-200 transition-colors"> <span class="text-xl">🔄</span> GitHub Actions
</li> </ul> </div> </div> </section> <!-- Projects Section --> <section id="projects" class="mb-24 relative z-10"> <h2 class="text-3xl font-bold mb-10 text-white flex items-center gap-3"> <div class="p-2 bg-blue-900/30 rounded-lg text-blue-400 border border-blue-800/50"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> </div>
Proyectos Destacados
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div> </section> </main> ` })}`;
}, "C:/Repositorios/Portafolio/src/pages/index.astro", void 0);

const $$file = "C:/Repositorios/Portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { minify as c } from "csso";
import { files as d } from "files-pipeline";
import s from "files-pipeline/dist/lib/deepmerge.js";
import u from "files-pipeline/dist/options/index.js";
import { minify as h } from "html-minifier-terser";
import m from "sharp";
import { optimize as y } from "svgo";
import { minify as g } from "terser";
import l from "./lib/format-bytes.js";
import w from "./lib/sharp-read.js";
import n from "./options/index.js";
var I=(e={})=>{for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&e[r]===!0&&(e[r]=n[r]);e=s(n,e);const f=new Set;if(typeof e.path<"u"&&(e.path instanceof Array||e.path instanceof Set))for(const r of e.path)f.add(r);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:r})=>{f.size||f.add(r);for(const[o,i]of Object.entries(e))if(i)for(const p of f)await(await(await(await new d(e.logger).in(p)).by(typeof e.map=="object"?e.map[o]:"")).not(e.exclude)).pipeline(s(e.pipeline,{wrote:async t=>{switch(o){case"css":return c(t.buffer.toString(),i).css;case"html":return await h(t.buffer.toString(),i);case"js":{const{code:a}=await g(t.buffer.toString(),i);return a||t.buffer}case"img":return w(i,t);case"svg":{const{data:a}=y(t.buffer.toString(),i);return typeof a<"u"?a:t.buffer}default:return t.buffer}},read:async t=>{switch(o){case"img":{const{format:a}=await m(t.inputPath).metadata();return m(t.inputPath,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:a==="webp"||a==="gif"})}default:return await u.pipeline.read(t)}},fulfilled:async t=>t.files>0?`Successfully compressed a total of ${t.files} ${o.toUpperCase()} ${t.files===1?"file":"files"} for ${await l(t.info.total)}.`:!1}))}}}};export { I as default };


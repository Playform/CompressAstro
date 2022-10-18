import { minify as f } from "csso";
import { minify as p } from "html-minifier-terser";
import c from "sharp";
import { optimize as m } from "svgo";
import { minify as n } from "terser";
import s from "./parse.js";
import h from "./sharp-read.js";
var b=async(i,o=2)=>{for(const r in i)if(Object.prototype.hasOwnProperty.call(i,r)){const e=i[r];if(!e)continue;switch(r){case"css":await s(`${i.path}**/*.css`,o,r,a=>f(a,e).css);break;case"html":await s(`${i.path}**/*.html`,o,r,async a=>await p(a,e));break;case"js":await s(`${i.path}**/*.{js,mjs,cjs}`,o,r,async a=>(await n(a,e)).code);break;case"img":await s(`${i.path}**/*.{avci,avcs,avif,avifs,gif,heic,heics,heif,heifs,jfif,jif,jpe,jpeg,jpg,png,raw,tiff,webp}`,o,r,async a=>await h(a,e),async a=>c(a));break;case"svg":await s(`${i.path}**/*.svg`,o,r,async a=>{const t=m(a,e);if(typeof t.error<"u"&&console.log(t.error),typeof t.data<"u")return t.data});break;default:break}}};export { b as default };


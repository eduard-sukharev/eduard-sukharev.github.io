if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const o=e=>r(e,s),n={module:{uri:s},exports:f,require:o};i[s]=Promise.all(a.map((e=>n[e]||o(e)))).then((e=>(c(...e),f)))}}define(["./workbox-f80c12b1"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"f422bb273d2a0e7ef1a7c80e7a7201d8"},{url:"apple-touch-icon.png",revision:"e6d9c32b9b228b951598b00a8cce8aa7"},{url:"arhiv/index.html",revision:"92e908e3b7699868766966534ee482f7"},{url:"excerpts.json",revision:"fed2067fa6ee30d619a923df69ba62d9"},{url:"favicon.ico",revision:"cac30ae275aa438b5aeed8dfe9cb2fb8"},{url:"favicon.png",revision:"a7c0374462cc8c78a68ad7530a76018c"},{url:"favicon.svg",revision:"1c1b63fbd984a88eee5707e6fccfca8b"},{url:"fonts/merriweather-bold.woff2",revision:"4c7ad4f3dc4bf2b8581bdcd0f172733b"},{url:"fonts/merriweather-bolditalic.woff2",revision:"2ded97d9ab274f00f36aa3f047435535"},{url:"fonts/merriweather-italic.woff2",revision:"74d11944a9aa17284a8487b8ed3d3cb5"},{url:"fonts/merriweather-regular.woff2",revision:"8f7c3ab14c55f233ac1d5d1280f79fe1"},{url:"full.json",revision:"ee7776c274e1d951b1b7d4abfba81546"},{url:"icon-192.png",revision:"653fa1a270cb5e4e032253e92998d767"},{url:"icon-512.png",revision:"036717de659ae7e6fa506820f2d2c3bb"},{url:"images/avatar.jpg",revision:"1696210ec33def84e1087988eac088a9"},{url:"images/logo.jpg",revision:"fec39c13612a2a294ca821c684c1e5cd"},{url:"images/posts/2023-07-19.jpg",revision:"da087f2e7090a3c54e1c4436113ce47d"},{url:"images/posts/2023-07-19.webp",revision:"461694fc1c47cbc2524b3c52cc16cbef"},{url:"images/share_2023-07-19.webp",revision:"42571c6d6e81736737aa528bdbcc3a47"},{url:"images/share-1200x600.jpg",revision:"db763828e7e6b132610c8db2d69d8114"},{url:"images/share-1200x630.jpg",revision:"3ad59b037cee19301c0ad38207344019"},{url:"images/share-400x400.jpg",revision:"b1eb70334d6ee746848f548fc27c104a"},{url:"images/twtxt-avatar.png",revision:"07b4b5f396e3c1dd3bc6e97bb25b4cc3"},{url:"index.html",revision:"68e966e827f4632f2b927fec86148533"},{url:"izbegajte-otricatelnyh-uslovij/index.html",revision:"5a019af0ab35af9aab0825b9a7d12231"},{url:"js/scripts.js",revision:"51bb8b1d45406df4e84a3e5f7538191f"},{url:"kto-zdes/index.html",revision:"31fd6ef19608b3046730df29ab180d36"},{url:"rss/index.html",revision:"d57b2bd316daf605a856fb6b7a8d9227"},{url:"tag/best-practices/index.html",revision:"2f154fcea8d24c8f49cb0aa937ee972e"},{url:"tag/chistyj-kod/index.html",revision:"5ce677ec706988e574abcaf55d1ee5a5"},{url:"tag/post/index.html",revision:"36bf26b4721dbfc7a49eb962f6dd16a1"},{url:"tag/refaktoring/index.html",revision:"5ec361d9fdd6c0f41c3123b9abaf014e"},{url:"utils/archive/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map

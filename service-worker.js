if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const s=e=>a(e,d),n={module:{uri:d},exports:o,require:s};i[d]=Promise.all(r.map((e=>n[e]||s(e)))).then((e=>(c(...e),o)))}}define(["./workbox-03ee9729"],(function(e){"use strict";e.setCacheNameDetails({prefix:"eleventy-plugin-pwa-v2"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"76f79bfd44f92a6cf26cd195cf9c9523"},{url:"apple-touch-icon.png",revision:"77fa1c64a55e2d3ce20058524ae3a8d2"},{url:"arhiv/index.html",revision:"f413bc30e78ef452046fce95e6311319"},{url:"excerpts.json",revision:"3b8206858c862048e0b31daaf18f1761"},{url:"favicon.ico",revision:"d1421b6ef07f9657e08691ea8e0eca90"},{url:"favicon.png",revision:"a7c0374462cc8c78a68ad7530a76018c"},{url:"fonts/merriweather-bold.woff2",revision:"4c7ad4f3dc4bf2b8581bdcd0f172733b"},{url:"fonts/merriweather-bolditalic.woff2",revision:"2ded97d9ab274f00f36aa3f047435535"},{url:"fonts/merriweather-italic.woff2",revision:"74d11944a9aa17284a8487b8ed3d3cb5"},{url:"fonts/merriweather-regular.woff2",revision:"8f7c3ab14c55f233ac1d5d1280f79fe1"},{url:"full.json",revision:"a71cb9b4c663cadcff59b76a2d74b261"},{url:"icon-192.png",revision:"3f826c4c46c246d3b82db12d278f738b"},{url:"icon-512.png",revision:"0768b0244efb02ea59e9c6906698bfaf"},{url:"images/avatar.jpg",revision:"1696210ec33def84e1087988eac088a9"},{url:"images/logo.jpg",revision:"fec39c13612a2a294ca821c684c1e5cd"},{url:"images/posts/2023-07-19.jpg",revision:"da087f2e7090a3c54e1c4436113ce47d"},{url:"images/posts/2023-07-19.webp",revision:"461694fc1c47cbc2524b3c52cc16cbef"},{url:"images/posts/2023-07-26.webp",revision:"696d8fc09e9466106c7e8c696c01e80d"},{url:"images/posts/2023-10-23.webp",revision:"dc09be0383186aef153ab0a9f69052b6"},{url:"images/posts/2023-12-25.webp",revision:"1fad5bf7dce204a8daf6619c9a119b12"},{url:"images/share_2023-07-19.webp",revision:"42571c6d6e81736737aa528bdbcc3a47"},{url:"images/share_2023-07-26.webp",revision:"72e3709a044053d6812b1fbfb58c8395"},{url:"images/share_2023-10-23.webp",revision:"704d07eab33250f53f19517d3e7e2a6c"},{url:"images/share_2023-12-25.webp",revision:"92e64d30aae5136d6585f85255175d58"},{url:"index.html",revision:"f079218324ede9ca9c97c2beda128009"},{url:"izbegajte-otricatelnyh-uslovij/index.html",revision:"2520927dd7d924cb941f105dc28eb698"},{url:"js/scripts.js",revision:"51bb8b1d45406df4e84a3e5f7538191f"},{url:"kto-zdes/index.html",revision:"d79384adcc3cc506259d5a1d38967e4e"},{url:"obuyavlyajte-klassy-final-po-umolchaniyu/index.html",revision:"5ae9bc06610ea6830eb3b2e06c1ad49f"},{url:"php-rector-i-kak-on-vam-ne-pomozhet/index.html",revision:"1c2ab020ab852f61be75816f800c3746"},{url:"rss/index.html",revision:"e2dd60f6074fd35c243f64dafd2d67a2"},{url:"tag/alerting/index.html",revision:"ec8d688f2e6f4198da74a00d72d11723"},{url:"tag/bad-practices/index.html",revision:"576a2f8896feb088482dae9e5c0454bc"},{url:"tag/best-practices/index.html",revision:"dac3f7a3e4169a3b5b7a06cae0ab6b98"},{url:"tag/chistyj-kod/index.html",revision:"de8dd5ed79b2640eadab1ef9238c4eb4"},{url:"tag/instrumenty/index.html",revision:"fa62522ddb0450042dc59b8a53a4f10a"},{url:"tag/post/index.html",revision:"cb358c9246fe5f8d82622e85c7b18277"},{url:"tag/refaktoring/index.html",revision:"4bcb45b7849e7eed898c3b2d1b5b2086"},{url:"tip-integer-v-kolonke-id-kak-bomba-zamedlennogo-dejstviya/index.html",revision:"0c3a330bf4356f0995fd69c57d1183d3"},{url:"utils/archive/index.html",revision:"d41d8cd98f00b204e9800998ecf8427e"}],{}),e.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/,new e.StaleWhileRevalidate,"GET")}));
//# sourceMappingURL=service-worker.js.map
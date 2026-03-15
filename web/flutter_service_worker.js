'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8938868fa4f5bb847304e34099e436dd",
"assets/AssetManifest.bin.json": "a70ce8a8f28baeeafa5b1678db96e626",
"assets/assets/Avatarnity%2520Asset%25208%2520SVG.svg": "8f748c787e94b58826a67cd6421c0853",
"assets/assets/dock/calendar.png": "8c24a39f78d8942ddaa794b6d266d97c",
"assets/assets/dock/facetime.png": "40e6cd2dd3081792de539cca2509194f",
"assets/assets/dock/finder.png": "0a3923d4c65e07ac01d0d334602db070",
"assets/assets/dock/keynote.png": "8ddabd1542a6ab62b7c5683b335a1184",
"assets/assets/dock/launchpad.png": "ec325b893ae5074a449a9958e2ae3849",
"assets/assets/dock/mail.png": "64e8396610868c36e48746b2d8b0947f",
"assets/assets/dock/microsoft_word.png": "434df37cfda96ba16c9c10c88b9dc140",
"assets/assets/dock/notes.png": "76b079688ec42b054383d87ff1e575ad",
"assets/assets/dock/pages.png": "6218ed7f2b7b1c7f21ecd2ba38bffdca",
"assets/assets/dock/safari.png": "c7a0fd4978372c74faa9456295499c42",
"assets/assets/dock/settings.png": "493d8b41b014804690edee7b14b85e6a",
"assets/assets/dock/terminal.png": "814f7af8df9bb72c58148e81ec5ba3e0",
"assets/assets/icons/apple_menu.png": "d05eac70c1e08707d982d8b5c2936803",
"assets/FontManifest.json": "3036d90552c3e4263c1bf0e9cbda0d14",
"assets/fonts/MaterialIcons-Regular.otf": "78d7aa09b243f5ca46be1e92ce91cf42",
"assets/NOTICES": "dc34a38f9b33c7f03a1959a0dcd1042f",
"assets/packages/browser/assets/avatarnity_logo.svg": "8f748c787e94b58826a67cd6421c0853",
"assets/packages/browser/assets/signatures/assange.svg": "3f4746ab86b4015aed9cb4cf7bef94c8",
"assets/packages/browser/assets/signatures/churchill.svg": "3cfdd12f4249721cd544188d6c2accce",
"assets/packages/browser/assets/signatures/cleopatra.svg": "34f7e7a52facacfc9699482983720af6",
"assets/packages/browser/assets/signatures/columbus.svg": "3038961ba72a1cfc1bd3e9357efbe7e7",
"assets/packages/browser/assets/signatures/einstein.svg": "7a25bacc601a7fd39586e8800a8df8da",
"assets/packages/browser/assets/signatures/jobs.svg": "f2bf2920c57bee0f885b17d032411de6",
"assets/packages/browser/assets/signatures/kushim.svg": "75765531afd55a40cb042a03fa4485a2",
"assets/packages/browser/assets/signatures/napoleon.svg": "692173f64c314327172d3d5b96e5af72",
"assets/packages/browser/assets/signatures/oppenheimer.svg": "c47f584910f5baca2d3368b24bdc056e",
"assets/packages/browser/assets/signatures/tesla.svg": "d2fbbebacdaef0d7f8ce06beb3d1627a",
"assets/packages/browser/assets/signatures/tyson.svg": "1d312088e697371414977fb355ecbc55",
"assets/packages/browser/fonts/AristaPro/Arista-Pro-Alternate-Regular-trial.ttf": "e1257e3063925a139e5010055fd7ea9f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2a48c830d0b9d2e23bdf59a1c261e854",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w100.ttf": "3832d8f75ae3ed53174cb5aa7e8d68f1",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w200.ttf": "d56ba98ca23492e072fbb35c3915f594",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w300.ttf": "f89319d201d70361f7068e5794762888",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w400.ttf": "a8eb30cbffa7cecbe869b43017dd8c77",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w500.ttf": "b11ab4e15408aba3e6283c64062a6186",
"assets/packages/lucide_icons_flutter/assets/build_font/LucideVariable-w600.ttf": "54a0d7ac1c09aa367c76a7053de9e8a3",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "84e41fc2e01716302b54aef997166d6f",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "1b8ef9effb163e21ab8645428c6baf0d",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "a885d7b303a932b32a7327e53763cae3",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "bc68bac437b42a2ca8c4d2e97c3949e6",
"assets/packages/theme_system/fonts/caveat/Caveat-Regular.ttf": "ccf2f844ded8bfd50efbed532a60d068",
"assets/packages/theme_system/fonts/inter/Inter-Bold.ttf": "74fae48a107f2324ab7199342193c873",
"assets/packages/theme_system/fonts/inter/Inter-Light.ttf": "3c3c56fb2fa2aff17a25004858ae2d9e",
"assets/packages/theme_system/fonts/inter/Inter-Medium.ttf": "9bb35cad24a5b9bbefe6bb846214d93c",
"assets/packages/theme_system/fonts/inter/Inter-Regular.ttf": "c5c82bb3f63d8a4507b423fa60df7adb",
"assets/packages/theme_system/fonts/inter/Inter-SemiBold.ttf": "fda6a3a914990cd13930814e0af45f81",
"assets/packages/theme_system/fonts/nunito/Nunito-Bold.ttf": "fcd0055ad3f85db1b8ce73018ba8b7c6",
"assets/packages/theme_system/fonts/nunito/Nunito-Light.ttf": "8b436df501596d1e4da1459b1cf3ad08",
"assets/packages/theme_system/fonts/nunito/Nunito-Medium.ttf": "92de69d6e4bac55d23b48b67ade9c225",
"assets/packages/theme_system/fonts/nunito/Nunito-Regular.ttf": "c15a3de8622bea5de54f467141bc2521",
"assets/packages/theme_system/fonts/nunito/Nunito-SemiBold.ttf": "33c704d4567fb8a57c7b1acb6fd658c0",
"assets/packages/theme_system/fonts/roboto/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"assets/packages/theme_system/fonts/roboto/Roboto-Light.ttf": "25e374a16a818685911e36bee59a6ee4",
"assets/packages/theme_system/fonts/roboto/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/theme_system/fonts/roboto/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/packages/theme_system/fonts/roboto/Roboto-SemiBold.ttf": "dae3c6eddbf79c41f922e4809ca9d09c",
"assets/packages/theme_system/fonts/sacramento/Sacramento-Regular.ttf": "c3264a2601f855aef183e1892c5504db",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "85f70258c049e9fdb84b711cde49b1fb",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a204f2219b07baf47ab12e315e88716d",
"icons/Icon-192.png": "c337e3aa51a03fd1836a9f6e9ff6bdc6",
"icons/Icon-512.png": "c337e3aa51a03fd1836a9f6e9ff6bdc6",
"icons/Icon-maskable-192.png": "c337e3aa51a03fd1836a9f6e9ff6bdc6",
"icons/Icon-maskable-512.png": "c337e3aa51a03fd1836a9f6e9ff6bdc6",
"index.html": "82831774921dd933cb83954361c2c062",
"/": "82831774921dd933cb83954361c2c062",
"main.dart.js": "cbc49e1f969a83f81785b0f5a3b9edad",
"manifest.json": "3f35350ebd0de62ecf3d520e28b97c73",
"version.json": "8b6839d2f292e47efd9b0b098438028a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

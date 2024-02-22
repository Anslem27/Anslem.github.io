'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "da2aa7f9621dd71ae7ec63170c72862a",
"index.html": "0629cd2c904fee43cb6ffca9a1912abf",
"/": "0629cd2c904fee43cb6ffca9a1912abf",
"twitter.html": "72d7425cd6d2d85e22ba4255e4c869c2",
"main.dart.js": "2e1f6608026a523a26dadb7df824d34b",
"404.html": "9910ad254fa37409155e38faa05d681c",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "a8a102197239eeff165f70557ae11827",
"icons/Icon-192.png": "98a04b75b4876090f8a744f64e901e5c",
"icons/Icon-maskable-192.png": "98a04b75b4876090f8a744f64e901e5c",
"icons/Icon-maskable-512.png": "ce7a5736beb86d3d59fadbaa1923ceb8",
"icons/Icon-512.png": "ce7a5736beb86d3d59fadbaa1923ceb8",
"manifest.json": "15db93e35b762884ec568a47a439eb87",
"assets/AssetManifest.json": "4534a3bf23015000aec152045ab1e917",
"assets/loading.gif": "b02daa9e1c4d75bf20286d2b0a410886",
"assets/NOTICES": "510cc74aabae3e766ac3fa93871c57c8",
"assets/FontManifest.json": "b87b76a280f4318c9fcde4d473053d7e",
"assets/AssetManifest.bin.json": "16c83e7cb93ccd01c48201fe3c352796",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "373681d0bd85daccf70ea6e7838c8e34",
"assets/eye_blink.gif": "7c5a4b17ed2123ffcaa49addf96385df",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/fail.svg": "b1da04dfa723c0c1a2787dcfdcbd7f2c",
"assets/assets/svg/bubbles.svg": "9947c5e4f164f0324a3f22ca791b3263",
"assets/assets/images/me.jpg": "20a7bab492618356f8eba09a67fb4110",
"assets/assets/images/f_logo.svg": "a7c45e7bba22336aa357e3d9af4d0bd2",
"assets/assets/images/avatar.jpg": "84a35f7fe5fcc3c449a87e0e9e222189",
"assets/assets/images/me.jpeg": "daa0b0ed5cc8485d2ae9eaaa735ee8d2",
"assets/assets/images/git_image.jpg": "e35eda6d49510c9058adae3889c4d970",
"assets/assets/images/mascot.png": "82f88b06c56fff9270a1469f1babae4b",
"assets/assets/images/2.jpg": "5d6f26c9654fa409f16780f35ed65d82",
"assets/assets/images/smear_loader.gif": "9d8d6aa78c776f098bcd97108adc75bf",
"assets/assets/images/skill.gif": "ee6fc9561d2523b7150719d866832f99",
"assets/assets/images/1.jpg": "de95cc6de7ad680c2200850a5299c0ad",
"assets/assets/icons/spotify.png": "cd762dd122932b9310e4b807eebf7c15",
"assets/assets/icons/constr.png": "5e652a5fcbcb593a92967b476f50e33e",
"assets/assets/icons/rabbit.png": "ea9284cdd17bab32dbb30dd5d29cbe39",
"assets/assets/icons/fluff.png": "738ca455b8665b0c19720a686341570a",
"assets/assets/icons/github.png": "6afa80c6743fe77cf42f70a053197e61",
"assets/assets/icons/js.png": "984fddc6b868ef81a68b20899742ef96",
"assets/assets/icons/fg.png": "7564b01a63c4e78ed4ba92caacd86898",
"assets/assets/icons/ff.png": "359ab86e6e92e809a6f90ce25941663f",
"assets/assets/icons/twitter.png": "2f0f70160ef74eeb7268ef690434bb37",
"assets/assets/icons/reddit.png": "ead49995cb69af66256bbc5a78947f0f",
"assets/assets/icons/v.png": "fb23798bec2674863401a25146101af3",
"assets/assets/icons/cv.png": "fc71b88d413313d3f1138de4ccb6a722",
"assets/assets/icons/d.png": "5f4e40724d51062a6fe19d364562b3ec",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "404.html": "b3dea88139773500380bdfdd94e57ed0",
"assets/AssetManifest.json": "7d86bf3d315a853ecb5ce16af6920217",
"assets/assets/icons/constr.png": "61369f8510faa5f563eda14f9a5ff6d6",
"assets/assets/icons/cv.png": "e431278ed756683f924bc233b99d0fc5",
"assets/assets/icons/d.png": "1734611e46c1797aa993d0d93e2b842a",
"assets/assets/icons/ff.png": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"assets/assets/icons/fg.png": "a29cfe9d7a8fdaad0a4a3cdaeb13ae3b",
"assets/assets/icons/fluff.png": "6b0c42261323df3cdba2c4d4c1293e96",
"assets/assets/icons/github.png": "1c5de4f2c596639442a45a7e0b0c3a5b",
"assets/assets/icons/js.png": "9951c2ca7e3fde1cdf6298b499ecf463",
"assets/assets/icons/rabbit.png": "a8a102197239eeff165f70557ae11827",
"assets/assets/icons/reddit.png": "34159899a4965e24ed66891cdb2b2e79",
"assets/assets/icons/spotify.png": "e456cfbbc762abfc3b1a6496c09a6d61",
"assets/assets/icons/twitter.png": "08d274bcaf71630fe630dce7373e3fde",
"assets/assets/icons/v.png": "12164167d2e7014350becbe19f4022f1",
"assets/assets/images/1.jpg": "4ae9e19d7ed56e17df5856771ab63e26",
"assets/assets/images/2.jpg": "4d8c05799dd3b16ff444dacfe861267a",
"assets/assets/images/avatar.jpg": "e960843092668f10506992dad400f9e8",
"assets/assets/images/f_logo.svg": "7e8f1c1dece0814d72c0a4003ba36fc4",
"assets/assets/images/git_image.jpg": "0d486f4d9dc4e9942de54c58bfea8bb2",
"assets/assets/images/mascot.png": "eab17a1048706ea5b9292fe61fd59cee",
"assets/assets/images/me.jpg": "9f343173642c54e26ca979363cca8bb8",
"assets/assets/images/skill.gif": "838b6ad0906cbaba13df3e466b5eaf2d",
"assets/assets/images/smear_loader.gif": "05b801cbb3d167d2b99f157c5c6a376c",
"assets/assets/svg/bubbles.svg": "3db336cf62a04eca02fc317046f8d252",
"assets/assets/svg/fail.svg": "8987cc956efe92145496e1e46447fb4e",
"assets/eye_blink.gif": "e566888221db79ed11f8d484de3f69aa",
"assets/FontManifest.json": "b87b76a280f4318c9fcde4d473053d7e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loading.gif": "6ee6bd4e483fea0dd5398d96a611becb",
"assets/NOTICES": "c5478626e78cd52cb8da002d4edd8e03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "a8a102197239eeff165f70557ae11827",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "a671a3f049cdbd7acc9c14d7748ffabf",
"icons/Icon-512.png": "9db3dda1eea6b12a0aad53dd4a4b0c2a",
"icons/Icon-maskable-192.png": "a671a3f049cdbd7acc9c14d7748ffabf",
"icons/Icon-maskable-512.png": "9db3dda1eea6b12a0aad53dd4a4b0c2a",
"index.html": "68a35d4bf0f6287e79ee83ece51495a5",
"/": "68a35d4bf0f6287e79ee83ece51495a5",
"main.dart.js": "b87912b355eee77872016a35f527b22c",
"manifest.json": "e3a3b9c9191af07396eb7acc761f0a68",
"twitter.html": "8bec35fd998d6885a31654a38cfb7a84",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

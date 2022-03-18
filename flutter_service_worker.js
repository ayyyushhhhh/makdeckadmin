'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "01bd58ff144feff69d2d0fb294beec60",
"index.html": "52913b51094e975e3f48edf07c6bb039",
"/": "52913b51094e975e3f48edf07c6bb039",
"main.dart.js": "ee8b2ac7f83215efa97bfc142098cccc",
"404.html": "150150104227ea4438cfa4cafa995dc9",
"README.md": "ddabbda7596b072a502f9772f2a1e7ce",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "184a7d2d03f1320d538f73a6ddb25aa3",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/ORIG_HEAD": "8696e94435260a87a9ce384854723249",
".git/MERGE_MSG": "45664006c95410a718486396820c681e",
".git/config": "a34f29d3da3dfb1858b6f55d272f7d57",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/d285617abd496c6c4f4ebbdddab9ccbace0a99": "4c345a433a58b76394540bb5b605a876",
".git/objects/a4/59622284a9345850cc6efa8828f422b569afca": "f5ea823397b187ad7c9523afced915a5",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d0/7212c5aadef80b1df81b371261dde8d760d9d9": "11f938930ab30e9c629978dde533938d",
".git/objects/b3/4f2b11813140fe495375d4181e012b5b2365dc": "9fe66bc21dcd91ea3de7616d659e065f",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/b03403b7a34ad4d86eedfced0933bfcfbda49b": "5333333c9a76ff66fee873b6d53637d9",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/673a7c74ba0ed93b556362799b96d27d22e480": "1df423d542060ce9f36c2e13ace763f8",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/01aa93f5df9f7d59d16d87a7a517d49c0bd508": "000e893e64f5e1a385d9427380786af5",
".git/objects/e3/625a485fe3b851b73a39e013d643ac53433e7a": "122d0e6471fcf3facb9448f96598c7e1",
".git/objects/fe/d7885e12715b56cbd6af1a2a0b71334cdaa73b": "71059c74f4ddebd27eef6d1ba9610405",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/89/9a444944ae8fd8895f84c1e2332b56bb48d357": "0e6037f79dd8565a4747e047aa42cc77",
".git/objects/17/39d0afcab48f96eaf38dca73c866b486fc7e6c": "12d5d9377f73049dce54f1cd6e3e0c9f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/98f7e3f90a0f0ccdd77d84a3e63201d75089e7": "b8fdca4e1893c1b39e42ca0346c7d050",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/07283e2d1729e25fb3a7e65e7b57f4f5790860": "a01454988d2d4ced2f53f2959e7979a8",
".git/objects/30/c19f0b288c641c79cb576aec214908a7ee735c": "e4594fa4aa0d484f3399e1e27ad05b7a",
".git/objects/6d/c1e9b740906b7f73c5125b0ad86eca4915e004": "c07a3162365e435c4748a3db154ede08",
".git/objects/01/f89267acbba4b95a8254c49a15eed6cf432655": "c76bdd4bb61ea845e0245e7866853ed5",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0f/ee663adaa427579a9c30ee1fdcf990cd093ec9": "7398a77149241bc8cc15d78e62aba0e4",
".git/objects/90/993fce9ab9d62b437fdfd3cb98361eee458d2c": "3aea6748be0be4f92907e3cdadfd30d1",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d4/dde431586f5ed9c83af482b63a379ad3e1c3ad": "f3dec04ced64994096773d35203798e4",
".git/objects/dc/50eceb8565f4bc0288ad77360dacad9fa26746": "0578f4b8df3d0e449343be37e31b0542",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/d5/af430b7aa2d31b0932eb0fd97ebe5269c84a08": "aa0bdc33343989f8e4f110f967304618",
".git/objects/aa/8ec56680217daffad2f31d1cb241737e8e52ca": "ffb8bf6b145068bca93597484fa202fb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b0/26bdcbc34311ecb6d716319ac1bbb42e496865": "7e9c3db4bd4ddc99c76961326cdd2509",
".git/objects/a6/bcbe9cac8d4a7d28771306330187e841004b7e": "da2affe4f8d30cc8054470fbcbf06acd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/e1/67e70e2d3ea91809cd98d30b3a9e800d38ff41": "07e1b08e9f5c9b239f0fe6e3543f5cf9",
".git/objects/f0/33172dd03a97de7ff1b44e108b4c2277c15574": "fff15e7958937f6d3eff095d64787d0d",
".git/objects/c2/4e77071aec4183bb2582366ddc01444aa00915": "8dbc579a6b56c8e01c2bbaab0d59f39a",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/41/7c01c1b1bd11acacd9e8dada12b84991d8e28b": "84372d58bd6a2475f6d7f97d1b12b980",
".git/objects/83/e3b1b7f4a85b6202b33476011c21282ab97e3d": "8c6357c465f47fdd93fb8e9c96da46ea",
".git/objects/48/de9fb7c9d8792f93628064572f08ff1f514a2a": "580e6a8aee382dac7230d7f53ad0e050",
".git/objects/70/88b0c4cdcbf8f78a359f869c463f87d29d1d45": "a0c3d8e2f2c35f8a73129e5eccfa7fdc",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/de8e249af1b6d72aa7224e58acae4b670a6e47": "a8b4230cc8702295e0581dc14aa6ea55",
".git/objects/8b/3ab80495c2057a72fdb095aca782365dc8f39d": "67dab4981dcb2d90d33606106b209fe7",
".git/objects/22/c1c3e817217d1a329723bc1bef509e88028ef7": "ea600a03e3e4a9c59a2ed50f15c6f4a5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "000d293bc47ab59fbce9a63b5d11c272",
".git/logs/refs/heads/main": "adb71634a5e4842c9beb0f9c573fb0a7",
".git/logs/refs/remotes/origin/main": "da815150fd37a1be7eac18fb3fc298bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8696e94435260a87a9ce384854723249",
".git/refs/remotes/origin/main": "b5b943af7398c9e82e21cfe1d4a29e7f",
".git/index": "10b5f7d9604e25f62297778c299be89c",
".git/MERGE_HEAD": "b5b943af7398c9e82e21cfe1d4a29e7f",
".git/COMMIT_EDITMSG": "7ab56b686d96e36050fa52876b62c0df",
".git/FETCH_HEAD": "7f7bcb1e28b2688f37d6ac24fa4b9a28",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "c299b0579b2d60eb1422cd7bfb54cb0e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

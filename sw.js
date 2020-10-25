/*
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('sw-cache').then(function(cache) {
      return cache.add('index.html', '.editorconfig', 'browserconfig.xml', 'config.js', 'script.js', 'site.webmanifest', 'style.css', 
                       'files/alis_drz_hubu.mp3', 'files/alis_neni_problem.mp3', 'files/alis_upadne_curak.mp3', 'files/bzx_aaaaaaa.mp3', 'bzx_kretenskej_idiot.mp3', 'files/bzx_krypleee.mp3', 'files/bzx_to_je_debil.mp3', 'files/doktorilla_drz_hubu.mp3', 'files/medic_kulturni_sok.mp3', 'files/monstrum_nestoji.mp3', 'files/mysterion_bezim_vytahuju.mp3', 'files/mysterion_ja_ho_minul.mp3', 'files/mysterion_minul.mp3', 'files/palko_patro_do_patra.mp3', 'files/palko_skrz_kamen.mp3');
      })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
          return response || fetch(event.request);
        })
     );
});
*/
self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        return cache.addAll([/*'/',*/
                      'index.html',
                      '.editorconfig',
                      'browserconfig.xml',
                      'config.js',
                      'script.js',
                      'site.webmanifest',
                      'style.css', 
                      'files/alis_drz_hubu.mp3',
                      'files/alis_neni_problem.mp3',
                      'files/alis_upadne_curak.mp3',
                      'files/bzx_aaaaaaa.mp3',
                      'files/bzx_kretenskej_idiot.mp3',
                      'files/bzx_krypleee.mp3',
                      'files/bzx_to_je_debil.mp3',
                      'files/doktorilla_drz_hubu.mp3',
                      'files/medic_kulturni_sok.mp3',
                      'files/monstrum_nestoji.mp3',
                      'files/mysterion_bezim_vytahuju.mp3',
                      'files/mysterion_ja_ho_minul.mp3',
                      'files/mysterion_minul.mp3',
                      'files/palko_patro_do_patra.mp3',
                      'files/palko_skrz_kamen.mp3'
                      ]);
      })
    );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(res) {
      if (res) {
        return res;
      }
      else {
        return fetch(event.request);
      }
    })
   );
});

/* Internal Medicine Training Console (website) - offline copy.
   The page and schedule-data.json are always fetched fresh from the website
   when there is a connection; the saved copy is used only when offline, so
   residents can still open the last schedules they saw. */
const CACHE = "im-site-v30";
const SHELL = ["./", "schedule-data.json", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
const BASE = new URL("./", self.location).pathname;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(SHELL.map(p => c.add(p).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || !url.pathname.startsWith(BASE)) return;
  let key = url.pathname.slice(BASE.length);
  if (key === "" || key === "index.html") key = "./";
  if (!SHELL.includes(key)) return;
  e.respondWith(
    fetch(req, { cache: "no-store" }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
      return res;
    }).catch(() => caches.open(CACHE).then(c => c.match(key)).then(r => {
      if (!r) return Response.error();
      if (key !== "schedule-data.json") return r;
      const h = new Headers(r.headers); h.set("X-Site-Cache", "1");
      return r.blob().then(b => new Response(b, { status: 200, headers: h }));
    }))
  );
});

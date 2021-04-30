
shadow.cljs.devtools.client.env.module_loaded('app');

try { revert.core.init(); } catch (e) { console.error("An error occurred when calling (revert.core/init)"); throw(e); }
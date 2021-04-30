goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__56401){
var map__56402 = p__56401;
var map__56402__$1 = (((((!((map__56402 == null))))?(((((map__56402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56402):map__56402);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56402__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__56406_56435 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__56407_56436 = null;
var count__56408_56437 = (0);
var i__56409_56438 = (0);
while(true){
if((i__56409_56438 < count__56408_56437)){
var vec__56421_56439 = chunk__56407_56436.cljs$core$IIndexed$_nth$arity$2(null,i__56409_56438);
var k_56440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56421_56439,(0),null);
var cb_56441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56421_56439,(1),null);
try{var G__56425_56442 = cljs.core.deref(re_frame.trace.traces);
(cb_56441.cljs$core$IFn$_invoke$arity$1 ? cb_56441.cljs$core$IFn$_invoke$arity$1(G__56425_56442) : cb_56441.call(null,G__56425_56442));
}catch (e56424){var e_56443 = e56424;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56440,"while storing",cljs.core.deref(re_frame.trace.traces),e_56443], 0));
}

var G__56444 = seq__56406_56435;
var G__56445 = chunk__56407_56436;
var G__56446 = count__56408_56437;
var G__56447 = (i__56409_56438 + (1));
seq__56406_56435 = G__56444;
chunk__56407_56436 = G__56445;
count__56408_56437 = G__56446;
i__56409_56438 = G__56447;
continue;
} else {
var temp__5753__auto___56448 = cljs.core.seq(seq__56406_56435);
if(temp__5753__auto___56448){
var seq__56406_56449__$1 = temp__5753__auto___56448;
if(cljs.core.chunked_seq_QMARK_(seq__56406_56449__$1)){
var c__4556__auto___56450 = cljs.core.chunk_first(seq__56406_56449__$1);
var G__56451 = cljs.core.chunk_rest(seq__56406_56449__$1);
var G__56452 = c__4556__auto___56450;
var G__56453 = cljs.core.count(c__4556__auto___56450);
var G__56454 = (0);
seq__56406_56435 = G__56451;
chunk__56407_56436 = G__56452;
count__56408_56437 = G__56453;
i__56409_56438 = G__56454;
continue;
} else {
var vec__56426_56455 = cljs.core.first(seq__56406_56449__$1);
var k_56456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56426_56455,(0),null);
var cb_56457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56426_56455,(1),null);
try{var G__56430_56458 = cljs.core.deref(re_frame.trace.traces);
(cb_56457.cljs$core$IFn$_invoke$arity$1 ? cb_56457.cljs$core$IFn$_invoke$arity$1(G__56430_56458) : cb_56457.call(null,G__56430_56458));
}catch (e56429){var e_56459 = e56429;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56456,"while storing",cljs.core.deref(re_frame.trace.traces),e_56459], 0));
}

var G__56460 = cljs.core.next(seq__56406_56449__$1);
var G__56461 = null;
var G__56462 = (0);
var G__56463 = (0);
seq__56406_56435 = G__56460;
chunk__56407_56436 = G__56461;
count__56408_56437 = G__56462;
i__56409_56438 = G__56463;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map

goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__56739 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56740 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56740);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___56887 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___56887)){
var new_db_56888 = temp__5753__auto___56887;
var fexpr__56743_56889 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__56743_56889.cljs$core$IFn$_invoke$arity$1 ? fexpr__56743_56889.cljs$core$IFn$_invoke$arity$1(new_db_56888) : fexpr__56743_56889.call(null,new_db_56888));
} else {
}

var seq__56746 = cljs.core.seq(effects_without_db);
var chunk__56747 = null;
var count__56748 = (0);
var i__56749 = (0);
while(true){
if((i__56749 < count__56748)){
var vec__56786 = chunk__56747.cljs$core$IIndexed$_nth$arity$2(null,i__56749);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56786,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56786,(1),null);
var temp__5751__auto___56890 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56890)){
var effect_fn_56891 = temp__5751__auto___56890;
(effect_fn_56891.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56891.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56891.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56892 = seq__56746;
var G__56893 = chunk__56747;
var G__56894 = count__56748;
var G__56895 = (i__56749 + (1));
seq__56746 = G__56892;
chunk__56747 = G__56893;
count__56748 = G__56894;
i__56749 = G__56895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56746);
if(temp__5753__auto__){
var seq__56746__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56746__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56746__$1);
var G__56896 = cljs.core.chunk_rest(seq__56746__$1);
var G__56897 = c__4556__auto__;
var G__56898 = cljs.core.count(c__4556__auto__);
var G__56899 = (0);
seq__56746 = G__56896;
chunk__56747 = G__56897;
count__56748 = G__56898;
i__56749 = G__56899;
continue;
} else {
var vec__56796 = cljs.core.first(seq__56746__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56796,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56796,(1),null);
var temp__5751__auto___56900 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56900)){
var effect_fn_56901 = temp__5751__auto___56900;
(effect_fn_56901.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56901.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56901.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56902 = cljs.core.next(seq__56746__$1);
var G__56903 = null;
var G__56904 = (0);
var G__56905 = (0);
seq__56746 = G__56902;
chunk__56747 = G__56903;
count__56748 = G__56904;
i__56749 = G__56905;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56379__auto___56907 = re_frame.interop.now();
var duration__56380__auto___56908 = (end__56379__auto___56907 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56380__auto___56908,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56379__auto___56907);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56739);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___56910 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___56910)){
var new_db_56911 = temp__5753__auto___56910;
var fexpr__56801_56912 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__56801_56912.cljs$core$IFn$_invoke$arity$1 ? fexpr__56801_56912.cljs$core$IFn$_invoke$arity$1(new_db_56911) : fexpr__56801_56912.call(null,new_db_56911));
} else {
}

var seq__56802 = cljs.core.seq(effects_without_db);
var chunk__56803 = null;
var count__56804 = (0);
var i__56805 = (0);
while(true){
if((i__56805 < count__56804)){
var vec__56813 = chunk__56803.cljs$core$IIndexed$_nth$arity$2(null,i__56805);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56813,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56813,(1),null);
var temp__5751__auto___56917 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56917)){
var effect_fn_56918 = temp__5751__auto___56917;
(effect_fn_56918.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56918.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56918.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56919 = seq__56802;
var G__56920 = chunk__56803;
var G__56921 = count__56804;
var G__56922 = (i__56805 + (1));
seq__56802 = G__56919;
chunk__56803 = G__56920;
count__56804 = G__56921;
i__56805 = G__56922;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56802);
if(temp__5753__auto__){
var seq__56802__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56802__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56802__$1);
var G__56927 = cljs.core.chunk_rest(seq__56802__$1);
var G__56928 = c__4556__auto__;
var G__56929 = cljs.core.count(c__4556__auto__);
var G__56930 = (0);
seq__56802 = G__56927;
chunk__56803 = G__56928;
count__56804 = G__56929;
i__56805 = G__56930;
continue;
} else {
var vec__56818 = cljs.core.first(seq__56802__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56818,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56818,(1),null);
var temp__5751__auto___56931 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56931)){
var effect_fn_56932 = temp__5751__auto___56931;
(effect_fn_56932.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56932.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56932.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56933 = cljs.core.next(seq__56802__$1);
var G__56934 = null;
var G__56935 = (0);
var G__56936 = (0);
seq__56802 = G__56933;
chunk__56803 = G__56934;
count__56804 = G__56935;
i__56805 = G__56936;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__56821){
var map__56822 = p__56821;
var map__56822__$1 = (((((!((map__56822 == null))))?(((((map__56822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56822):map__56822);
var effect = map__56822__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56822__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56822__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__56825 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56826 = null;
var count__56827 = (0);
var i__56828 = (0);
while(true){
if((i__56828 < count__56827)){
var effect = chunk__56826.cljs$core$IIndexed$_nth$arity$2(null,i__56828);
re_frame.fx.dispatch_later(effect);


var G__56937 = seq__56825;
var G__56938 = chunk__56826;
var G__56939 = count__56827;
var G__56940 = (i__56828 + (1));
seq__56825 = G__56937;
chunk__56826 = G__56938;
count__56827 = G__56939;
i__56828 = G__56940;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56825);
if(temp__5753__auto__){
var seq__56825__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56825__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56825__$1);
var G__56941 = cljs.core.chunk_rest(seq__56825__$1);
var G__56942 = c__4556__auto__;
var G__56943 = cljs.core.count(c__4556__auto__);
var G__56944 = (0);
seq__56825 = G__56941;
chunk__56826 = G__56942;
count__56827 = G__56943;
i__56828 = G__56944;
continue;
} else {
var effect = cljs.core.first(seq__56825__$1);
re_frame.fx.dispatch_later(effect);


var G__56945 = cljs.core.next(seq__56825__$1);
var G__56946 = null;
var G__56947 = (0);
var G__56948 = (0);
seq__56825 = G__56945;
chunk__56826 = G__56946;
count__56827 = G__56947;
i__56828 = G__56948;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__56829 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__56830 = null;
var count__56831 = (0);
var i__56832 = (0);
while(true){
if((i__56832 < count__56831)){
var vec__56851 = chunk__56830.cljs$core$IIndexed$_nth$arity$2(null,i__56832);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56851,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56851,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___56949 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56949)){
var effect_fn_56950 = temp__5751__auto___56949;
(effect_fn_56950.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56950.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56950.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__56951 = seq__56829;
var G__56952 = chunk__56830;
var G__56953 = count__56831;
var G__56954 = (i__56832 + (1));
seq__56829 = G__56951;
chunk__56830 = G__56952;
count__56831 = G__56953;
i__56832 = G__56954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56829);
if(temp__5753__auto__){
var seq__56829__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56829__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56829__$1);
var G__56958 = cljs.core.chunk_rest(seq__56829__$1);
var G__56959 = c__4556__auto__;
var G__56960 = cljs.core.count(c__4556__auto__);
var G__56961 = (0);
seq__56829 = G__56958;
chunk__56830 = G__56959;
count__56831 = G__56960;
i__56832 = G__56961;
continue;
} else {
var vec__56854 = cljs.core.first(seq__56829__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56854,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56854,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___56963 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___56963)){
var effect_fn_56964 = temp__5751__auto___56963;
(effect_fn_56964.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56964.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56964.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__56966 = cljs.core.next(seq__56829__$1);
var G__56967 = null;
var G__56968 = (0);
var G__56969 = (0);
seq__56829 = G__56966;
chunk__56830 = G__56967;
count__56831 = G__56968;
i__56832 = G__56969;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__56872 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56873 = null;
var count__56874 = (0);
var i__56875 = (0);
while(true){
if((i__56875 < count__56874)){
var event = chunk__56873.cljs$core$IIndexed$_nth$arity$2(null,i__56875);
re_frame.router.dispatch(event);


var G__56972 = seq__56872;
var G__56973 = chunk__56873;
var G__56974 = count__56874;
var G__56975 = (i__56875 + (1));
seq__56872 = G__56972;
chunk__56873 = G__56973;
count__56874 = G__56974;
i__56875 = G__56975;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56872);
if(temp__5753__auto__){
var seq__56872__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56872__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56872__$1);
var G__56976 = cljs.core.chunk_rest(seq__56872__$1);
var G__56977 = c__4556__auto__;
var G__56978 = cljs.core.count(c__4556__auto__);
var G__56979 = (0);
seq__56872 = G__56976;
chunk__56873 = G__56977;
count__56874 = G__56978;
i__56875 = G__56979;
continue;
} else {
var event = cljs.core.first(seq__56872__$1);
re_frame.router.dispatch(event);


var G__56980 = cljs.core.next(seq__56872__$1);
var G__56981 = null;
var G__56982 = (0);
var G__56983 = (0);
seq__56872 = G__56980;
chunk__56873 = G__56981;
count__56874 = G__56982;
i__56875 = G__56983;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__56883 = cljs.core.seq(value);
var chunk__56884 = null;
var count__56885 = (0);
var i__56886 = (0);
while(true){
if((i__56886 < count__56885)){
var event = chunk__56884.cljs$core$IIndexed$_nth$arity$2(null,i__56886);
clear_event(event);


var G__56988 = seq__56883;
var G__56989 = chunk__56884;
var G__56990 = count__56885;
var G__56991 = (i__56886 + (1));
seq__56883 = G__56988;
chunk__56884 = G__56989;
count__56885 = G__56990;
i__56886 = G__56991;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56883);
if(temp__5753__auto__){
var seq__56883__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56883__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56883__$1);
var G__56995 = cljs.core.chunk_rest(seq__56883__$1);
var G__56996 = c__4556__auto__;
var G__56997 = cljs.core.count(c__4556__auto__);
var G__56998 = (0);
seq__56883 = G__56995;
chunk__56884 = G__56996;
count__56885 = G__56997;
i__56886 = G__56998;
continue;
} else {
var event = cljs.core.first(seq__56883__$1);
clear_event(event);


var G__56999 = cljs.core.next(seq__56883__$1);
var G__57000 = null;
var G__57001 = (0);
var G__57002 = (0);
seq__56883 = G__56999;
chunk__56884 = G__57000;
count__56885 = G__57001;
i__56886 = G__57002;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map

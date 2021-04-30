goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__66827,p__66828){
var map__66829 = p__66827;
var map__66829__$1 = (((((!((map__66829 == null))))?(((((map__66829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66829):map__66829);
var svc = map__66829__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66829__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66829__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66829__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__66830 = p__66828;
var map__66830__$1 = (((((!((map__66830 == null))))?(((((map__66830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66830):map__66830);
var msg = map__66830__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66830__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66830__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66830__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66830__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__66841,p__66842){
var map__66844 = p__66841;
var map__66844__$1 = (((((!((map__66844 == null))))?(((((map__66844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66844):map__66844);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66844__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__66845 = p__66842;
var map__66845__$1 = (((((!((map__66845 == null))))?(((((map__66845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66845):map__66845);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66845__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__66855,p__66856){
var map__66860 = p__66855;
var map__66860__$1 = (((((!((map__66860 == null))))?(((((map__66860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66860):map__66860);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66860__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66860__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__66861 = p__66856;
var map__66861__$1 = (((((!((map__66861 == null))))?(((((map__66861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66861):map__66861);
var msg = map__66861__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66861__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__66868,tid){
var map__66869 = p__66868;
var map__66869__$1 = (((((!((map__66869 == null))))?(((((map__66869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66869):map__66869);
var svc = map__66869__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66869__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__66880 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__66881 = null;
var count__66882 = (0);
var i__66883 = (0);
while(true){
if((i__66883 < count__66882)){
var vec__66894 = chunk__66881.cljs$core$IIndexed$_nth$arity$2(null,i__66883);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66894,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66894,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__66917 = seq__66880;
var G__66918 = chunk__66881;
var G__66919 = count__66882;
var G__66920 = (i__66883 + (1));
seq__66880 = G__66917;
chunk__66881 = G__66918;
count__66882 = G__66919;
i__66883 = G__66920;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__66880);
if(temp__5753__auto__){
var seq__66880__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66880__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66880__$1);
var G__66921 = cljs.core.chunk_rest(seq__66880__$1);
var G__66922 = c__4556__auto__;
var G__66923 = cljs.core.count(c__4556__auto__);
var G__66924 = (0);
seq__66880 = G__66921;
chunk__66881 = G__66922;
count__66882 = G__66923;
i__66883 = G__66924;
continue;
} else {
var vec__66900 = cljs.core.first(seq__66880__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66900,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66900,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__66925 = cljs.core.next(seq__66880__$1);
var G__66926 = null;
var G__66927 = (0);
var G__66928 = (0);
seq__66880 = G__66925;
chunk__66881 = G__66926;
count__66882 = G__66927;
i__66883 = G__66928;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__66871_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__66871_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__66872_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__66872_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__66873_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__66873_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__66874_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__66874_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__66903){
var map__66904 = p__66903;
var map__66904__$1 = (((((!((map__66904 == null))))?(((((map__66904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66904):map__66904);
var svc = map__66904__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66904__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66904__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

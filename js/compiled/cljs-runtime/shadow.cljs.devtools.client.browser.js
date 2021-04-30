goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67868 = arguments.length;
var i__4737__auto___67869 = (0);
while(true){
if((i__4737__auto___67869 < len__4736__auto___67868)){
args__4742__auto__.push((arguments[i__4737__auto___67869]));

var G__67870 = (i__4737__auto___67869 + (1));
i__4737__auto___67869 = G__67870;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq67611){
var G__67612 = cljs.core.first(seq67611);
var seq67611__$1 = cljs.core.next(seq67611);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67612,seq67611__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__67616 = cljs.core.seq(sources);
var chunk__67617 = null;
var count__67618 = (0);
var i__67619 = (0);
while(true){
if((i__67619 < count__67618)){
var map__67633 = chunk__67617.cljs$core$IIndexed$_nth$arity$2(null,i__67619);
var map__67633__$1 = (((((!((map__67633 == null))))?(((((map__67633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67633):map__67633);
var src = map__67633__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67633__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67633__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67633__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67633__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67635){var e_67874 = e67635;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67874);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67874.message)].join('')));
}

var G__67875 = seq__67616;
var G__67876 = chunk__67617;
var G__67877 = count__67618;
var G__67878 = (i__67619 + (1));
seq__67616 = G__67875;
chunk__67617 = G__67876;
count__67618 = G__67877;
i__67619 = G__67878;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67616);
if(temp__5753__auto__){
var seq__67616__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67616__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67616__$1);
var G__67879 = cljs.core.chunk_rest(seq__67616__$1);
var G__67880 = c__4556__auto__;
var G__67881 = cljs.core.count(c__4556__auto__);
var G__67882 = (0);
seq__67616 = G__67879;
chunk__67617 = G__67880;
count__67618 = G__67881;
i__67619 = G__67882;
continue;
} else {
var map__67636 = cljs.core.first(seq__67616__$1);
var map__67636__$1 = (((((!((map__67636 == null))))?(((((map__67636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67636):map__67636);
var src = map__67636__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67636__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67636__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67636__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67636__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e67640){var e_67883 = e67640;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_67883);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_67883.message)].join('')));
}

var G__67884 = cljs.core.next(seq__67616__$1);
var G__67885 = null;
var G__67886 = (0);
var G__67887 = (0);
seq__67616 = G__67884;
chunk__67617 = G__67885;
count__67618 = G__67886;
i__67619 = G__67887;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__67643 = cljs.core.seq(js_requires);
var chunk__67644 = null;
var count__67645 = (0);
var i__67646 = (0);
while(true){
if((i__67646 < count__67645)){
var js_ns = chunk__67644.cljs$core$IIndexed$_nth$arity$2(null,i__67646);
var require_str_67891 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67891);


var G__67892 = seq__67643;
var G__67893 = chunk__67644;
var G__67894 = count__67645;
var G__67895 = (i__67646 + (1));
seq__67643 = G__67892;
chunk__67644 = G__67893;
count__67645 = G__67894;
i__67646 = G__67895;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67643);
if(temp__5753__auto__){
var seq__67643__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67643__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67643__$1);
var G__67896 = cljs.core.chunk_rest(seq__67643__$1);
var G__67897 = c__4556__auto__;
var G__67898 = cljs.core.count(c__4556__auto__);
var G__67899 = (0);
seq__67643 = G__67896;
chunk__67644 = G__67897;
count__67645 = G__67898;
i__67646 = G__67899;
continue;
} else {
var js_ns = cljs.core.first(seq__67643__$1);
var require_str_67901 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_67901);


var G__67903 = cljs.core.next(seq__67643__$1);
var G__67904 = null;
var G__67905 = (0);
var G__67906 = (0);
seq__67643 = G__67903;
chunk__67644 = G__67904;
count__67645 = G__67905;
i__67646 = G__67906;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__67651){
var map__67654 = p__67651;
var map__67654__$1 = (((((!((map__67654 == null))))?(((((map__67654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67654):map__67654);
var msg = map__67654__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67654__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67654__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67657(s__67658){
return (new cljs.core.LazySeq(null,(function (){
var s__67658__$1 = s__67658;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__67658__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__67663 = cljs.core.first(xs__6308__auto__);
var map__67663__$1 = (((((!((map__67663 == null))))?(((((map__67663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67663):map__67663);
var src = map__67663__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67663__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67663__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__67658__$1,map__67663,map__67663__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__67654,map__67654__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67657_$_iter__67659(s__67660){
return (new cljs.core.LazySeq(null,((function (s__67658__$1,map__67663,map__67663__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__67654,map__67654__$1,msg,info,reload_info){
return (function (){
var s__67660__$1 = s__67660;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__67660__$1);
if(temp__5753__auto____$1){
var s__67660__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__67660__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__67660__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__67662 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__67661 = (0);
while(true){
if((i__67661 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__67661);
cljs.core.chunk_append(b__67662,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__67911 = (i__67661 + (1));
i__67661 = G__67911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67662),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67657_$_iter__67659(cljs.core.chunk_rest(s__67660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67662),null);
}
} else {
var warning = cljs.core.first(s__67660__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67657_$_iter__67659(cljs.core.rest(s__67660__$2)));
}
} else {
return null;
}
break;
}
});})(s__67658__$1,map__67663,map__67663__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__67654,map__67654__$1,msg,info,reload_info))
,null,null));
});})(s__67658__$1,map__67663,map__67663__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__67654,map__67654__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__67657(cljs.core.rest(s__67658__$1)));
} else {
var G__67915 = cljs.core.rest(s__67658__$1);
s__67658__$1 = G__67915;
continue;
}
} else {
var G__67916 = cljs.core.rest(s__67658__$1);
s__67658__$1 = G__67916;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__67673_67920 = cljs.core.seq(warnings);
var chunk__67674_67921 = null;
var count__67675_67922 = (0);
var i__67676_67923 = (0);
while(true){
if((i__67676_67923 < count__67675_67922)){
var map__67683_67924 = chunk__67674_67921.cljs$core$IIndexed$_nth$arity$2(null,i__67676_67923);
var map__67683_67925__$1 = (((((!((map__67683_67924 == null))))?(((((map__67683_67924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67683_67924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67683_67924):map__67683_67924);
var w_67926 = map__67683_67925__$1;
var msg_67927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683_67925__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683_67925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683_67925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67683_67925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67930)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67928),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67929),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67927__$1)].join(''));


var G__67931 = seq__67673_67920;
var G__67932 = chunk__67674_67921;
var G__67933 = count__67675_67922;
var G__67934 = (i__67676_67923 + (1));
seq__67673_67920 = G__67931;
chunk__67674_67921 = G__67932;
count__67675_67922 = G__67933;
i__67676_67923 = G__67934;
continue;
} else {
var temp__5753__auto___67936 = cljs.core.seq(seq__67673_67920);
if(temp__5753__auto___67936){
var seq__67673_67937__$1 = temp__5753__auto___67936;
if(cljs.core.chunked_seq_QMARK_(seq__67673_67937__$1)){
var c__4556__auto___67938 = cljs.core.chunk_first(seq__67673_67937__$1);
var G__67939 = cljs.core.chunk_rest(seq__67673_67937__$1);
var G__67940 = c__4556__auto___67938;
var G__67941 = cljs.core.count(c__4556__auto___67938);
var G__67942 = (0);
seq__67673_67920 = G__67939;
chunk__67674_67921 = G__67940;
count__67675_67922 = G__67941;
i__67676_67923 = G__67942;
continue;
} else {
var map__67685_67943 = cljs.core.first(seq__67673_67937__$1);
var map__67685_67944__$1 = (((((!((map__67685_67943 == null))))?(((((map__67685_67943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67685_67943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67685_67943):map__67685_67943);
var w_67945 = map__67685_67944__$1;
var msg_67946__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67685_67944__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_67947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67685_67944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_67948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67685_67944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_67949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67685_67944__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_67949)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_67947),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_67948),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_67946__$1)].join(''));


var G__67950 = cljs.core.next(seq__67673_67937__$1);
var G__67951 = null;
var G__67952 = (0);
var G__67953 = (0);
seq__67673_67920 = G__67950;
chunk__67674_67921 = G__67951;
count__67675_67922 = G__67952;
i__67676_67923 = G__67953;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__67650_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__67650_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__67689){
var map__67693 = p__67689;
var map__67693__$1 = (((((!((map__67693 == null))))?(((((map__67693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67693):map__67693);
var msg = map__67693__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67693__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__67695 = cljs.core.seq(updates);
var chunk__67697 = null;
var count__67698 = (0);
var i__67699 = (0);
while(true){
if((i__67699 < count__67698)){
var path = chunk__67697.cljs$core$IIndexed$_nth$arity$2(null,i__67699);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67739_67957 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67743_67958 = null;
var count__67744_67959 = (0);
var i__67745_67960 = (0);
while(true){
if((i__67745_67960 < count__67744_67959)){
var node_67961 = chunk__67743_67958.cljs$core$IIndexed$_nth$arity$2(null,i__67745_67960);
if(cljs.core.not(node_67961.shadow$old)){
var path_match_67963 = shadow.cljs.devtools.client.browser.match_paths(node_67961.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67963)){
var new_link_67964 = (function (){var G__67759 = node_67961.cloneNode(true);
G__67759.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67963),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67759;
})();
(node_67961.shadow$old = true);

(new_link_67964.onload = ((function (seq__67739_67957,chunk__67743_67958,count__67744_67959,i__67745_67960,seq__67695,chunk__67697,count__67698,i__67699,new_link_67964,path_match_67963,node_67961,path,map__67693,map__67693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_67961);
});})(seq__67739_67957,chunk__67743_67958,count__67744_67959,i__67745_67960,seq__67695,chunk__67697,count__67698,i__67699,new_link_67964,path_match_67963,node_67961,path,map__67693,map__67693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67963], 0));

goog.dom.insertSiblingAfter(new_link_67964,node_67961);


var G__67970 = seq__67739_67957;
var G__67971 = chunk__67743_67958;
var G__67972 = count__67744_67959;
var G__67973 = (i__67745_67960 + (1));
seq__67739_67957 = G__67970;
chunk__67743_67958 = G__67971;
count__67744_67959 = G__67972;
i__67745_67960 = G__67973;
continue;
} else {
var G__67974 = seq__67739_67957;
var G__67975 = chunk__67743_67958;
var G__67976 = count__67744_67959;
var G__67977 = (i__67745_67960 + (1));
seq__67739_67957 = G__67974;
chunk__67743_67958 = G__67975;
count__67744_67959 = G__67976;
i__67745_67960 = G__67977;
continue;
}
} else {
var G__67978 = seq__67739_67957;
var G__67979 = chunk__67743_67958;
var G__67980 = count__67744_67959;
var G__67981 = (i__67745_67960 + (1));
seq__67739_67957 = G__67978;
chunk__67743_67958 = G__67979;
count__67744_67959 = G__67980;
i__67745_67960 = G__67981;
continue;
}
} else {
var temp__5753__auto___67982 = cljs.core.seq(seq__67739_67957);
if(temp__5753__auto___67982){
var seq__67739_67983__$1 = temp__5753__auto___67982;
if(cljs.core.chunked_seq_QMARK_(seq__67739_67983__$1)){
var c__4556__auto___67984 = cljs.core.chunk_first(seq__67739_67983__$1);
var G__67986 = cljs.core.chunk_rest(seq__67739_67983__$1);
var G__67987 = c__4556__auto___67984;
var G__67988 = cljs.core.count(c__4556__auto___67984);
var G__67989 = (0);
seq__67739_67957 = G__67986;
chunk__67743_67958 = G__67987;
count__67744_67959 = G__67988;
i__67745_67960 = G__67989;
continue;
} else {
var node_67990 = cljs.core.first(seq__67739_67983__$1);
if(cljs.core.not(node_67990.shadow$old)){
var path_match_67991 = shadow.cljs.devtools.client.browser.match_paths(node_67990.getAttribute("href"),path);
if(cljs.core.truth_(path_match_67991)){
var new_link_67992 = (function (){var G__67761 = node_67990.cloneNode(true);
G__67761.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_67991),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67761;
})();
(node_67990.shadow$old = true);

(new_link_67992.onload = ((function (seq__67739_67957,chunk__67743_67958,count__67744_67959,i__67745_67960,seq__67695,chunk__67697,count__67698,i__67699,new_link_67992,path_match_67991,node_67990,seq__67739_67983__$1,temp__5753__auto___67982,path,map__67693,map__67693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_67990);
});})(seq__67739_67957,chunk__67743_67958,count__67744_67959,i__67745_67960,seq__67695,chunk__67697,count__67698,i__67699,new_link_67992,path_match_67991,node_67990,seq__67739_67983__$1,temp__5753__auto___67982,path,map__67693,map__67693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_67991], 0));

goog.dom.insertSiblingAfter(new_link_67992,node_67990);


var G__67993 = cljs.core.next(seq__67739_67983__$1);
var G__67994 = null;
var G__67995 = (0);
var G__67996 = (0);
seq__67739_67957 = G__67993;
chunk__67743_67958 = G__67994;
count__67744_67959 = G__67995;
i__67745_67960 = G__67996;
continue;
} else {
var G__67997 = cljs.core.next(seq__67739_67983__$1);
var G__67998 = null;
var G__67999 = (0);
var G__68000 = (0);
seq__67739_67957 = G__67997;
chunk__67743_67958 = G__67998;
count__67744_67959 = G__67999;
i__67745_67960 = G__68000;
continue;
}
} else {
var G__68001 = cljs.core.next(seq__67739_67983__$1);
var G__68002 = null;
var G__68003 = (0);
var G__68004 = (0);
seq__67739_67957 = G__68001;
chunk__67743_67958 = G__68002;
count__67744_67959 = G__68003;
i__67745_67960 = G__68004;
continue;
}
}
} else {
}
}
break;
}


var G__68005 = seq__67695;
var G__68006 = chunk__67697;
var G__68007 = count__67698;
var G__68008 = (i__67699 + (1));
seq__67695 = G__68005;
chunk__67697 = G__68006;
count__67698 = G__68007;
i__67699 = G__68008;
continue;
} else {
var G__68009 = seq__67695;
var G__68010 = chunk__67697;
var G__68011 = count__67698;
var G__68012 = (i__67699 + (1));
seq__67695 = G__68009;
chunk__67697 = G__68010;
count__67698 = G__68011;
i__67699 = G__68012;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__67695);
if(temp__5753__auto__){
var seq__67695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67695__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__67695__$1);
var G__68013 = cljs.core.chunk_rest(seq__67695__$1);
var G__68014 = c__4556__auto__;
var G__68015 = cljs.core.count(c__4556__auto__);
var G__68016 = (0);
seq__67695 = G__68013;
chunk__67697 = G__68014;
count__67698 = G__68015;
i__67699 = G__68016;
continue;
} else {
var path = cljs.core.first(seq__67695__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__67763_68017 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__67767_68018 = null;
var count__67768_68019 = (0);
var i__67769_68020 = (0);
while(true){
if((i__67769_68020 < count__67768_68019)){
var node_68021 = chunk__67767_68018.cljs$core$IIndexed$_nth$arity$2(null,i__67769_68020);
if(cljs.core.not(node_68021.shadow$old)){
var path_match_68022 = shadow.cljs.devtools.client.browser.match_paths(node_68021.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68022)){
var new_link_68023 = (function (){var G__67778 = node_68021.cloneNode(true);
G__67778.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68022),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67778;
})();
(node_68021.shadow$old = true);

(new_link_68023.onload = ((function (seq__67763_68017,chunk__67767_68018,count__67768_68019,i__67769_68020,seq__67695,chunk__67697,count__67698,i__67699,new_link_68023,path_match_68022,node_68021,path,seq__67695__$1,temp__5753__auto__,map__67693,map__67693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_68021);
});})(seq__67763_68017,chunk__67767_68018,count__67768_68019,i__67769_68020,seq__67695,chunk__67697,count__67698,i__67699,new_link_68023,path_match_68022,node_68021,path,seq__67695__$1,temp__5753__auto__,map__67693,map__67693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68022], 0));

goog.dom.insertSiblingAfter(new_link_68023,node_68021);


var G__68024 = seq__67763_68017;
var G__68025 = chunk__67767_68018;
var G__68026 = count__67768_68019;
var G__68027 = (i__67769_68020 + (1));
seq__67763_68017 = G__68024;
chunk__67767_68018 = G__68025;
count__67768_68019 = G__68026;
i__67769_68020 = G__68027;
continue;
} else {
var G__68028 = seq__67763_68017;
var G__68029 = chunk__67767_68018;
var G__68030 = count__67768_68019;
var G__68031 = (i__67769_68020 + (1));
seq__67763_68017 = G__68028;
chunk__67767_68018 = G__68029;
count__67768_68019 = G__68030;
i__67769_68020 = G__68031;
continue;
}
} else {
var G__68032 = seq__67763_68017;
var G__68033 = chunk__67767_68018;
var G__68034 = count__67768_68019;
var G__68035 = (i__67769_68020 + (1));
seq__67763_68017 = G__68032;
chunk__67767_68018 = G__68033;
count__67768_68019 = G__68034;
i__67769_68020 = G__68035;
continue;
}
} else {
var temp__5753__auto___68036__$1 = cljs.core.seq(seq__67763_68017);
if(temp__5753__auto___68036__$1){
var seq__67763_68037__$1 = temp__5753__auto___68036__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67763_68037__$1)){
var c__4556__auto___68038 = cljs.core.chunk_first(seq__67763_68037__$1);
var G__68039 = cljs.core.chunk_rest(seq__67763_68037__$1);
var G__68040 = c__4556__auto___68038;
var G__68041 = cljs.core.count(c__4556__auto___68038);
var G__68042 = (0);
seq__67763_68017 = G__68039;
chunk__67767_68018 = G__68040;
count__67768_68019 = G__68041;
i__67769_68020 = G__68042;
continue;
} else {
var node_68043 = cljs.core.first(seq__67763_68037__$1);
if(cljs.core.not(node_68043.shadow$old)){
var path_match_68044 = shadow.cljs.devtools.client.browser.match_paths(node_68043.getAttribute("href"),path);
if(cljs.core.truth_(path_match_68044)){
var new_link_68045 = (function (){var G__67780 = node_68043.cloneNode(true);
G__67780.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_68044),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__67780;
})();
(node_68043.shadow$old = true);

(new_link_68045.onload = ((function (seq__67763_68017,chunk__67767_68018,count__67768_68019,i__67769_68020,seq__67695,chunk__67697,count__67698,i__67699,new_link_68045,path_match_68044,node_68043,seq__67763_68037__$1,temp__5753__auto___68036__$1,path,seq__67695__$1,temp__5753__auto__,map__67693,map__67693__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_68043);
});})(seq__67763_68017,chunk__67767_68018,count__67768_68019,i__67769_68020,seq__67695,chunk__67697,count__67698,i__67699,new_link_68045,path_match_68044,node_68043,seq__67763_68037__$1,temp__5753__auto___68036__$1,path,seq__67695__$1,temp__5753__auto__,map__67693,map__67693__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_68044], 0));

goog.dom.insertSiblingAfter(new_link_68045,node_68043);


var G__68047 = cljs.core.next(seq__67763_68037__$1);
var G__68048 = null;
var G__68049 = (0);
var G__68050 = (0);
seq__67763_68017 = G__68047;
chunk__67767_68018 = G__68048;
count__67768_68019 = G__68049;
i__67769_68020 = G__68050;
continue;
} else {
var G__68051 = cljs.core.next(seq__67763_68037__$1);
var G__68052 = null;
var G__68053 = (0);
var G__68054 = (0);
seq__67763_68017 = G__68051;
chunk__67767_68018 = G__68052;
count__67768_68019 = G__68053;
i__67769_68020 = G__68054;
continue;
}
} else {
var G__68055 = cljs.core.next(seq__67763_68037__$1);
var G__68056 = null;
var G__68057 = (0);
var G__68058 = (0);
seq__67763_68017 = G__68055;
chunk__67767_68018 = G__68056;
count__67768_68019 = G__68057;
i__67769_68020 = G__68058;
continue;
}
}
} else {
}
}
break;
}


var G__68059 = cljs.core.next(seq__67695__$1);
var G__68060 = null;
var G__68061 = (0);
var G__68062 = (0);
seq__67695 = G__68059;
chunk__67697 = G__68060;
count__67698 = G__68061;
i__67699 = G__68062;
continue;
} else {
var G__68064 = cljs.core.next(seq__67695__$1);
var G__68065 = null;
var G__68066 = (0);
var G__68067 = (0);
seq__67695 = G__68064;
chunk__67697 = G__68065;
count__67698 = G__68066;
i__67699 = G__68067;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__67793){
var map__67795 = p__67793;
var map__67795__$1 = (((((!((map__67795 == null))))?(((((map__67795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67795):map__67795);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67795__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__67809){
var map__67810 = p__67809;
var map__67810__$1 = (((((!((map__67810 == null))))?(((((map__67810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67810):map__67810);
var _ = map__67810__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67810__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__67818,done,error){
var map__67819 = p__67818;
var map__67819__$1 = (((((!((map__67819 == null))))?(((((map__67819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67819):map__67819);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67819__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__67821,done,error){
var map__67822 = p__67821;
var map__67822__$1 = (((((!((map__67822 == null))))?(((((map__67822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67822):map__67822);
var msg = map__67822__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67822__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67822__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67822__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__67824){
var map__67825 = p__67824;
var map__67825__$1 = (((((!((map__67825 == null))))?(((((map__67825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67825):map__67825);
var src = map__67825__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67825__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__67836 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__67836) : done.call(null,G__67836));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__67839){
var map__67841 = p__67839;
var map__67841__$1 = (((((!((map__67841 == null))))?(((((map__67841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67841):map__67841);
var msg__$1 = map__67841__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67841__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e67843){var ex = e67843;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__67845){
var map__67846 = p__67845;
var map__67846__$1 = (((((!((map__67846 == null))))?(((((map__67846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67846):map__67846);
var env = map__67846__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67846__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__67853){
var map__67854 = p__67853;
var map__67854__$1 = (((((!((map__67854 == null))))?(((((map__67854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67854):map__67854);
var msg = map__67854__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67854__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__67859){
var map__67860 = p__67859;
var map__67860__$1 = (((((!((map__67860 == null))))?(((((map__67860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67860):map__67860);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67860__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__67864){
var map__67866 = p__67864;
var map__67866__$1 = (((((!((map__67866 == null))))?(((((map__67866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__67866):map__67866);
var svc = map__67866__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67866__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

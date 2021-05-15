goog.provide('revert.utils');
var module$node_modules$ethers$lib$index=shadow.js.require("module$node_modules$ethers$lib$index", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
revert.utils.weth_address = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
revert.utils._max_bn = (function revert$utils$_max_bn(a,b){
return module$node_modules$bignumber_DOT_js$bignumber.max(a,b);
});
revert.utils.max_bn = (function revert$utils$max_bn(numbers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(revert.utils._max_bn,numbers);
});
revert.utils.bn_QMARK_ = (function revert$utils$bn_QMARK_(n){
return module$node_modules$bignumber_DOT_js$bignumber.isBigNumber(n);
});
revert.utils.bn = (function revert$utils$bn(n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
revert.utils.fu = (function revert$utils$fu(n,u){
var units = bignumber.core.pow((new module$node_modules$bignumber_DOT_js$bignumber((10))),u);
return bignumber.core._SLASH_(n,units).toString();
});
revert.utils.pu = (function revert$utils$pu(n,u){
var units = bignumber.core.pow((new module$node_modules$bignumber_DOT_js$bignumber((10))),u);
var bign = (new module$node_modules$bignumber_DOT_js$bignumber(n));
return bignumber.core._STAR_(bign,units);
});
revert.utils.ethfu = (function revert$utils$ethfu(n,u){
return module$node_modules$ethers$lib$index.utils.formatUnits(n,u);
});
revert.utils.ethpu = (function revert$utils$ethpu(n,u){
return module$node_modules$ethers$lib$index.utils.parseUnits(n,u);
});
revert.utils.ebn__GT_bn = (function revert$utils$ebn__GT_bn(n,u){
return revert.utils.bn(revert.utils.ethfu(n,u));
});
revert.utils.ts__GT_datetime = (function revert$utils$ts__GT_datetime(ts){
return (new Date(((1000) * ts)));
});
revert.utils.datetime__GT_ts = (function revert$utils$datetime__GT_ts(dt){
return (dt.getTime() / (1000));
});
revert.utils.update_values = (function revert$utils$update_values(var_args){
var args__4742__auto__ = [];
var len__4736__auto___163331 = arguments.length;
var i__4737__auto___163332 = (0);
while(true){
if((i__4737__auto___163332 < len__4736__auto___163331)){
args__4742__auto__.push((arguments[i__4737__auto___163332]));

var G__163333 = (i__4737__auto___163332 + (1));
i__4737__auto___163332 = G__163333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return revert.utils.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(revert.utils.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__163312){
var vec__163313 = p__163312;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163313,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
}));

(revert.utils.update_values.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(revert.utils.update_values.cljs$lang$applyTo = (function (seq163309){
var G__163310 = cljs.core.first(seq163309);
var seq163309__$1 = cljs.core.next(seq163309);
var G__163311 = cljs.core.first(seq163309__$1);
var seq163309__$2 = cljs.core.next(seq163309__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__163310,G__163311,seq163309__$2);
}));

revert.utils.make_unix_ts = (function revert$utils$make_unix_ts(){
return Math.floor((Date.now() / (1000)));
});
revert.utils.seconds__GT_days = (function revert$utils$seconds__GT_days(seconds){
return (seconds / (((60) * (60)) * (24)));
});
revert.utils.set_query_string_BANG_ = (function revert$utils$set_query_string_BANG_(v){
var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname)].join('');
var url_SINGLEQUOTE_ = [url,"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
return window.history.pushState(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),url_SINGLEQUOTE_], null)),null,url_SINGLEQUOTE_);
});
revert.utils.set_hash_BANG_ = (function revert$utils$set_hash_BANG_(loc){
return (window.location.hash = loc);
});
revert.utils.str__GT_int = (function revert$utils$str__GT_int(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
/**
 * Recursively merges maps.
 */
revert.utils.deep_merge = (function revert$utils$deep_merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___163361 = arguments.length;
var i__4737__auto___163362 = (0);
while(true){
if((i__4737__auto___163362 < len__4736__auto___163361)){
args__4742__auto__.push((arguments[i__4737__auto___163362]));

var G__163363 = (i__4737__auto___163362 + (1));
i__4737__auto___163362 = G__163363;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return revert.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(revert.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var m = (function() { 
var revert$utils$m__delegate = function (xs){
if(cljs.core.truth_(cljs.core.some((function (p1__163316_SHARP_){
return ((cljs.core.map_QMARK_(p1__163316_SHARP_)) && ((!(cljs.core.record_QMARK_(p1__163316_SHARP_)))));
}),xs))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,revert$utils$m,xs);
} else {
return cljs.core.last(xs);
}
};
var revert$utils$m = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__163365__i = 0, G__163365__a = new Array(arguments.length -  0);
while (G__163365__i < G__163365__a.length) {G__163365__a[G__163365__i] = arguments[G__163365__i + 0]; ++G__163365__i;}
  xs = new cljs.core.IndexedSeq(G__163365__a,0,null);
} 
return revert$utils$m__delegate.call(this,xs);};
revert$utils$m.cljs$lang$maxFixedArity = 0;
revert$utils$m.cljs$lang$applyTo = (function (arglist__163366){
var xs = cljs.core.seq(arglist__163366);
return revert$utils$m__delegate(xs);
});
revert$utils$m.cljs$core$IFn$_invoke$arity$variadic = revert$utils$m__delegate;
return revert$utils$m;
})()
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(m,maps);
}));

(revert.utils.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(revert.utils.deep_merge.cljs$lang$applyTo = (function (seq163317){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq163317));
}));

revert.utils.dejs = (function revert$utils$dejs(form){
return clojure.walk.postwalk((function (x){
if(cljs.core.truth_(revert.utils.bn_QMARK_(x))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
}),form);
});
revert.utils.price_change = (function revert$utils$price_change(new_price,old_price){
return bignumber.core._STAR_(bignumber.core._(bignumber.core._SLASH_(new_price,old_price),(1)),(100));
});
/**
 * Returns the difference between percentace change
 *   in prices for token0 and token1
 */
revert.utils.price_divergence = (function revert$utils$price_divergence(p__163318,p__163319){
var vec__163320 = p__163318;
var token0_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163320,(0),null);
var token0_current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163320,(1),null);
var vec__163323 = p__163319;
var token1_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163323,(0),null);
var token1_current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__163323,(1),null);
var price0_change = revert.utils.price_change(token0_current,token0_init);
var price1_change = revert.utils.price_change(token1_current,token1_init);
return bignumber.core.abs(bignumber.core._(price0_change,price1_change));
});

//# sourceMappingURL=revert.utils.js.map

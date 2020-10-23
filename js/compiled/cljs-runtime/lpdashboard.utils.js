goog.provide('lpdashboard.utils');
var module$node_modules$ethers$dist$ethers_umd=shadow.js.require("module$node_modules$ethers$dist$ethers_umd", {});
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.utils.bn = (function lpdashboard$utils$bn(n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
});
lpdashboard.utils.fu = (function lpdashboard$utils$fu(n,u){
var units = bignumber.core.pow((new module$node_modules$bignumber_DOT_js$bignumber((10))),u);
return bignumber.core._SLASH_(n,units).toString();
});
lpdashboard.utils.pu = (function lpdashboard$utils$pu(n,u){
var units = bignumber.core.pow((new module$node_modules$bignumber_DOT_js$bignumber((10))),u);
var bign = (new module$node_modules$bignumber_DOT_js$bignumber(n));
return bignumber.core._STAR_(bign,units);
});
lpdashboard.utils.ethfu = (function lpdashboard$utils$ethfu(n,u){
return module$node_modules$ethers$dist$ethers_umd.utils.formatUnits(n,u);
});
lpdashboard.utils.ebn__GT_bn = (function lpdashboard$utils$ebn__GT_bn(n,u){
return lpdashboard.utils.bn(lpdashboard.utils.ethfu(n,u));
});
lpdashboard.utils.ts__GT_datetime = (function lpdashboard$utils$ts__GT_datetime(ts){
return (new Date(((1000) * ts)));
});
lpdashboard.utils.update_values = (function lpdashboard$utils$update_values(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27930 = arguments.length;
var i__4737__auto___27931 = (0);
while(true){
if((i__4737__auto___27931 < len__4736__auto___27930)){
args__4742__auto__.push((arguments[i__4737__auto___27931]));

var G__27932 = (i__4737__auto___27931 + (1));
i__4737__auto___27931 = G__27932;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return lpdashboard.utils.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(lpdashboard.utils.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__27926){
var vec__27927 = p__27926;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27927,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
}));

(lpdashboard.utils.update_values.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(lpdashboard.utils.update_values.cljs$lang$applyTo = (function (seq27923){
var G__27924 = cljs.core.first(seq27923);
var seq27923__$1 = cljs.core.next(seq27923);
var G__27925 = cljs.core.first(seq27923__$1);
var seq27923__$2 = cljs.core.next(seq27923__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27924,G__27925,seq27923__$2);
}));

lpdashboard.utils.make_unix_ts = (function lpdashboard$utils$make_unix_ts(){
return Math.floor((Date.now() / (1000)));
});

//# sourceMappingURL=lpdashboard.utils.js.map

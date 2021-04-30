goog.provide('bignumber.core');
bignumber.core.bignumber_QMARK_ = (function bignumber$core$bignumber_QMARK_(x){
var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return (x["toNumber"]);
} else {
return and__4115__auto__;
}
});
bignumber.core.apply_fn = (function bignumber$core$apply_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67425 = arguments.length;
var i__4737__auto___67426 = (0);
while(true){
if((i__4737__auto___67426 < len__4736__auto___67425)){
args__4742__auto__.push((arguments[i__4737__auto___67426]));

var G__67427 = (i__4737__auto___67426 + (1));
i__4737__auto___67426 = G__67427;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic = (function (bn_fn_name,native_fn,x,args){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.js_invoke,x,bn_fn_name,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(native_fn,x,args);
}
}));

(bignumber.core.apply_fn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(bignumber.core.apply_fn.cljs$lang$applyTo = (function (seq67036){
var G__67037 = cljs.core.first(seq67036);
var seq67036__$1 = cljs.core.next(seq67036);
var G__67038 = cljs.core.first(seq67036__$1);
var seq67036__$2 = cljs.core.next(seq67036__$1);
var G__67039 = cljs.core.first(seq67036__$2);
var seq67036__$3 = cljs.core.next(seq67036__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67037,G__67038,G__67039,seq67036__$3);
}));

bignumber.core.apply_arithmetic_fn = (function bignumber$core$apply_arithmetic_fn(bn_fn_name,native_fn,x,y,base){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,bn_fn_name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y,base], 0));
} else {
return (native_fn.cljs$core$IFn$_invoke$arity$2 ? native_fn.cljs$core$IFn$_invoke$arity$2(x,y) : native_fn.call(null,x,y));
}
});
bignumber.core.number = (function bignumber$core$number(x){
return bignumber.core.apply_fn("toNumber",(function (x__$1){
var x__$2 = parseFloat(x__$1);
if(cljs.core.truth_(isNaN(x__$2))){
return null;
} else {
return x__$2;
}
}),x);
});
bignumber.core.abs = (function bignumber$core$abs(x){
return bignumber.core.apply_fn("abs",Math.abs,x);
});
bignumber.core.ceil = (function bignumber$core$ceil(x){
return bignumber.core.apply_fn("ceil",Math.ceil,x);
});
bignumber.core.cmp = (function bignumber$core$cmp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67432 = arguments.length;
var i__4737__auto___67433 = (0);
while(true){
if((i__4737__auto___67433 < len__4736__auto___67432)){
args__4742__auto__.push((arguments[i__4737__auto___67433]));

var G__67435 = (i__4737__auto___67433 + (1));
i__4737__auto___67433 = G__67435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.cmp.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67078){
var vec__67079 = p__67078;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67079,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("cmp",cljs.core.compare,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base], 0));
}));

(bignumber.core.cmp.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.cmp.cljs$lang$applyTo = (function (seq67064){
var G__67065 = cljs.core.first(seq67064);
var seq67064__$1 = cljs.core.next(seq67064);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67065,seq67064__$1);
}));

bignumber.core.dp = (function bignumber$core$dp(x){
return bignumber.core.apply_fn("dp",cljs.core.identity,x);
});
bignumber.core._SLASH_ = (function bignumber$core$_SLASH_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67447 = arguments.length;
var i__4737__auto___67448 = (0);
while(true){
if((i__4737__auto___67448 < len__4736__auto___67447)){
args__4742__auto__.push((arguments[i__4737__auto___67448]));

var G__67449 = (i__4737__auto___67448 + (1));
i__4737__auto___67448 = G__67449;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67090){
var vec__67091 = p__67090;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67091,(0),null);
return bignumber.core.apply_arithmetic_fn("div",cljs.core.divide,x,y,base);
}));

(bignumber.core._SLASH_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._SLASH_.cljs$lang$applyTo = (function (seq67085){
var G__67086 = cljs.core.first(seq67085);
var seq67085__$1 = cljs.core.next(seq67085);
var G__67087 = cljs.core.first(seq67085__$1);
var seq67085__$2 = cljs.core.next(seq67085__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67086,G__67087,seq67085__$2);
}));

bignumber.core.div_to_int = (function bignumber$core$div_to_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67453 = arguments.length;
var i__4737__auto___67454 = (0);
while(true){
if((i__4737__auto___67454 < len__4736__auto___67453)){
args__4742__auto__.push((arguments[i__4737__auto___67454]));

var G__67455 = (i__4737__auto___67454 + (1));
i__4737__auto___67454 = G__67455;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core.div_to_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67113){
var vec__67114 = p__67113;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67114,(0),null);
return bignumber.core.apply_arithmetic_fn("divToInt",cljs.core.divide,x,y,base);
}));

(bignumber.core.div_to_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.div_to_int.cljs$lang$applyTo = (function (seq67100){
var G__67101 = cljs.core.first(seq67100);
var seq67100__$1 = cljs.core.next(seq67100);
var G__67102 = cljs.core.first(seq67100__$1);
var seq67100__$2 = cljs.core.next(seq67100__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67101,G__67102,seq67100__$2);
}));

bignumber.core._EQ_ = (function bignumber$core$_EQ_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67460 = arguments.length;
var i__4737__auto___67461 = (0);
while(true){
if((i__4737__auto___67461 < len__4736__auto___67460)){
args__4742__auto__.push((arguments[i__4737__auto___67461]));

var G__67463 = (i__4737__auto___67461 + (1));
i__4737__auto___67461 = G__67463;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67121){
var vec__67122 = p__67121;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67122,(0),null);
return bignumber.core.apply_arithmetic_fn("eq",cljs.core._EQ_,x,y,base);
}));

(bignumber.core._EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._EQ_.cljs$lang$applyTo = (function (seq67117){
var G__67118 = cljs.core.first(seq67117);
var seq67117__$1 = cljs.core.next(seq67117);
var G__67119 = cljs.core.first(seq67117__$1);
var seq67117__$2 = cljs.core.next(seq67117__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67118,G__67119,seq67117__$2);
}));

bignumber.core.floor = (function bignumber$core$floor(x){
return bignumber.core.apply_fn("floor",Math.floor,x);
});
bignumber.core._GT_ = (function bignumber$core$_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67464 = arguments.length;
var i__4737__auto___67465 = (0);
while(true){
if((i__4737__auto___67465 < len__4736__auto___67464)){
args__4742__auto__.push((arguments[i__4737__auto___67465]));

var G__67466 = (i__4737__auto___67465 + (1));
i__4737__auto___67465 = G__67466;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67141){
var vec__67144 = p__67141;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67144,(0),null);
return bignumber.core.apply_arithmetic_fn("gt",cljs.core._GT_,x,y,base);
}));

(bignumber.core._GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._GT_.cljs$lang$applyTo = (function (seq67130){
var G__67131 = cljs.core.first(seq67130);
var seq67130__$1 = cljs.core.next(seq67130);
var G__67132 = cljs.core.first(seq67130__$1);
var seq67130__$2 = cljs.core.next(seq67130__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67131,G__67132,seq67130__$2);
}));

bignumber.core._GT__EQ_ = (function bignumber$core$_GT__EQ_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67471 = arguments.length;
var i__4737__auto___67472 = (0);
while(true){
if((i__4737__auto___67472 < len__4736__auto___67471)){
args__4742__auto__.push((arguments[i__4737__auto___67472]));

var G__67473 = (i__4737__auto___67472 + (1));
i__4737__auto___67472 = G__67473;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67156){
var vec__67157 = p__67156;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67157,(0),null);
return bignumber.core.apply_arithmetic_fn("gte",cljs.core._GT__EQ_,x,y,base);
}));

(bignumber.core._GT__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._GT__EQ_.cljs$lang$applyTo = (function (seq67148){
var G__67149 = cljs.core.first(seq67148);
var seq67148__$1 = cljs.core.next(seq67148);
var G__67150 = cljs.core.first(seq67148__$1);
var seq67148__$2 = cljs.core.next(seq67148__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67149,G__67150,seq67148__$2);
}));

bignumber.core.finite_QMARK_ = (function bignumber$core$finite_QMARK_(x){
return bignumber.core.apply_fn("isFinite",cljs.core.complement(cljs.core.infinite_QMARK_),x);
});
bignumber.core.int_QMARK_ = (function bignumber$core$int_QMARK_(x){
return bignumber.core.apply_fn("isInt",cljs.core.int_QMARK_,x);
});
bignumber.core.nan_QMARK_ = (function bignumber$core$nan_QMARK_(x){
return bignumber.core.apply_fn("isNaN",isNaN,x);
});
bignumber.core.neg_QMARK_ = (function bignumber$core$neg_QMARK_(x){
return bignumber.core.apply_fn("isNeg",cljs.core.neg_QMARK_,x);
});
bignumber.core.zero_QMARK_ = (function bignumber$core$zero_QMARK_(x){
return bignumber.core.apply_fn("isZero",cljs.core.zero_QMARK_,x);
});
bignumber.core._LT_ = (function bignumber$core$_LT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67480 = arguments.length;
var i__4737__auto___67481 = (0);
while(true){
if((i__4737__auto___67481 < len__4736__auto___67480)){
args__4742__auto__.push((arguments[i__4737__auto___67481]));

var G__67482 = (i__4737__auto___67481 + (1));
i__4737__auto___67481 = G__67482;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67176){
var vec__67177 = p__67176;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67177,(0),null);
return bignumber.core.apply_arithmetic_fn("lt",cljs.core._LT_,x,y,base);
}));

(bignumber.core._LT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._LT_.cljs$lang$applyTo = (function (seq67171){
var G__67172 = cljs.core.first(seq67171);
var seq67171__$1 = cljs.core.next(seq67171);
var G__67173 = cljs.core.first(seq67171__$1);
var seq67171__$2 = cljs.core.next(seq67171__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67172,G__67173,seq67171__$2);
}));

bignumber.core._LT__EQ_ = (function bignumber$core$_LT__EQ_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67487 = arguments.length;
var i__4737__auto___67488 = (0);
while(true){
if((i__4737__auto___67488 < len__4736__auto___67487)){
args__4742__auto__.push((arguments[i__4737__auto___67488]));

var G__67489 = (i__4737__auto___67488 + (1));
i__4737__auto___67488 = G__67489;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67199){
var vec__67200 = p__67199;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67200,(0),null);
return bignumber.core.apply_arithmetic_fn("lte",cljs.core._LT__EQ_,x,y,base);
}));

(bignumber.core._LT__EQ_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._LT__EQ_.cljs$lang$applyTo = (function (seq67186){
var G__67187 = cljs.core.first(seq67186);
var seq67186__$1 = cljs.core.next(seq67186);
var G__67188 = cljs.core.first(seq67186__$1);
var seq67186__$2 = cljs.core.next(seq67186__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67187,G__67188,seq67186__$2);
}));

bignumber.core._ = (function bignumber$core$_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67491 = arguments.length;
var i__4737__auto___67492 = (0);
while(true){
if((i__4737__auto___67492 < len__4736__auto___67491)){
args__4742__auto__.push((arguments[i__4737__auto___67492]));

var G__67493 = (i__4737__auto___67492 + (1));
i__4737__auto___67492 = G__67493;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67213){
var vec__67214 = p__67213;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67214,(0),null);
return bignumber.core.apply_arithmetic_fn("minus",cljs.core._,x,y,base);
}));

(bignumber.core._.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._.cljs$lang$applyTo = (function (seq67204){
var G__67205 = cljs.core.first(seq67204);
var seq67204__$1 = cljs.core.next(seq67204);
var G__67206 = cljs.core.first(seq67204__$1);
var seq67204__$2 = cljs.core.next(seq67204__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67205,G__67206,seq67204__$2);
}));

bignumber.core.mod = (function bignumber$core$mod(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67494 = arguments.length;
var i__4737__auto___67495 = (0);
while(true){
if((i__4737__auto___67495 < len__4736__auto___67494)){
args__4742__auto__.push((arguments[i__4737__auto___67495]));

var G__67496 = (i__4737__auto___67495 + (1));
i__4737__auto___67495 = G__67496;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core.mod.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67225){
var vec__67227 = p__67225;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67227,(0),null);
return bignumber.core.apply_arithmetic_fn("mod",cljs.core.mod,x,y,base);
}));

(bignumber.core.mod.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.mod.cljs$lang$applyTo = (function (seq67222){
var G__67223 = cljs.core.first(seq67222);
var seq67222__$1 = cljs.core.next(seq67222);
var G__67224 = cljs.core.first(seq67222__$1);
var seq67222__$2 = cljs.core.next(seq67222__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67223,G__67224,seq67222__$2);
}));

bignumber.core.neg = (function bignumber$core$neg(x){
return bignumber.core.apply_fn("neg",cljs.core.unchecked_negate,x);
});
bignumber.core._PLUS_ = (function bignumber$core$_PLUS_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67497 = arguments.length;
var i__4737__auto___67498 = (0);
while(true){
if((i__4737__auto___67498 < len__4736__auto___67497)){
args__4742__auto__.push((arguments[i__4737__auto___67498]));

var G__67499 = (i__4737__auto___67498 + (1));
i__4737__auto___67498 = G__67499;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67246){
var vec__67247 = p__67246;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67247,(0),null);
return bignumber.core.apply_arithmetic_fn("plus",cljs.core._PLUS_,x,y,base);
}));

(bignumber.core._PLUS_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._PLUS_.cljs$lang$applyTo = (function (seq67237){
var G__67238 = cljs.core.first(seq67237);
var seq67237__$1 = cljs.core.next(seq67237);
var G__67239 = cljs.core.first(seq67237__$1);
var seq67237__$2 = cljs.core.next(seq67237__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67238,G__67239,seq67237__$2);
}));

bignumber.core.sd = (function bignumber$core$sd(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67504 = arguments.length;
var i__4737__auto___67505 = (0);
while(true){
if((i__4737__auto___67505 < len__4736__auto___67504)){
args__4742__auto__.push((arguments[i__4737__auto___67505]));

var G__67506 = (i__4737__auto___67505 + (1));
i__4737__auto___67505 = G__67506;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.sd.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67261){
var vec__67262 = p__67261;
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67262,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("sd",cljs.core.constantly(null),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([z], 0));
}));

(bignumber.core.sd.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.sd.cljs$lang$applyTo = (function (seq67255){
var G__67256 = cljs.core.first(seq67255);
var seq67255__$1 = cljs.core.next(seq67255);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67256,seq67255__$1);
}));

bignumber.core.round = (function bignumber$core$round(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67507 = arguments.length;
var i__4737__auto___67508 = (0);
while(true){
if((i__4737__auto___67508 < len__4736__auto___67507)){
args__4742__auto__.push((arguments[i__4737__auto___67508]));

var G__67509 = (i__4737__auto___67508 + (1));
i__4737__auto___67508 = G__67509;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.round.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67279){
var vec__67280 = p__67279;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67280,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67280,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("round",Math.round,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.round.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.round.cljs$lang$applyTo = (function (seq67270){
var G__67272 = cljs.core.first(seq67270);
var seq67270__$1 = cljs.core.next(seq67270);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67272,seq67270__$1);
}));

bignumber.core.shift = (function bignumber$core$shift(x,z){
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("shift",cljs.core.constantly(null),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bignumber.core.dp,z], 0));
});
bignumber.core.sqrt = (function bignumber$core$sqrt(x){
return bignumber.core.apply_fn("sqrt",Math.sqrt,x);
});
bignumber.core._STAR_ = (function bignumber$core$_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67510 = arguments.length;
var i__4737__auto___67511 = (0);
while(true){
if((i__4737__auto___67511 < len__4736__auto___67510)){
args__4742__auto__.push((arguments[i__4737__auto___67511]));

var G__67512 = (i__4737__auto___67511 + (1));
i__4737__auto___67511 = G__67512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,p__67301){
var vec__67302 = p__67301;
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67302,(0),null);
return bignumber.core.apply_arithmetic_fn("times",cljs.core._STAR_,x,y,base);
}));

(bignumber.core._STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core._STAR_.cljs$lang$applyTo = (function (seq67294){
var G__67295 = cljs.core.first(seq67294);
var seq67294__$1 = cljs.core.next(seq67294);
var G__67296 = cljs.core.first(seq67294__$1);
var seq67294__$2 = cljs.core.next(seq67294__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67295,G__67296,seq67294__$2);
}));

bignumber.core.digits = (function bignumber$core$digits(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67514 = arguments.length;
var i__4737__auto___67515 = (0);
while(true){
if((i__4737__auto___67515 < len__4736__auto___67514)){
args__4742__auto__.push((arguments[i__4737__auto___67515]));

var G__67516 = (i__4737__auto___67515 + (1));
i__4737__auto___67515 = G__67516;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.digits.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67316){
var vec__67320 = p__67316;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67320,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toDigits",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sd,rm], 0));
}));

(bignumber.core.digits.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.digits.cljs$lang$applyTo = (function (seq67308){
var G__67309 = cljs.core.first(seq67308);
var seq67308__$1 = cljs.core.next(seq67308);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67309,seq67308__$1);
}));

bignumber.core.exponential = (function bignumber$core$exponential(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67519 = arguments.length;
var i__4737__auto___67520 = (0);
while(true){
if((i__4737__auto___67520 < len__4736__auto___67519)){
args__4742__auto__.push((arguments[i__4737__auto___67520]));

var G__67521 = (i__4737__auto___67520 + (1));
i__4737__auto___67520 = G__67521;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.exponential.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67341){
var vec__67342 = p__67341;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67342,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67342,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toExponential",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.exponential.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.exponential.cljs$lang$applyTo = (function (seq67334){
var G__67335 = cljs.core.first(seq67334);
var seq67334__$1 = cljs.core.next(seq67334);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67335,seq67334__$1);
}));

bignumber.core.fixed = (function bignumber$core$fixed(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67524 = arguments.length;
var i__4737__auto___67525 = (0);
while(true){
if((i__4737__auto___67525 < len__4736__auto___67524)){
args__4742__auto__.push((arguments[i__4737__auto___67525]));

var G__67526 = (i__4737__auto___67525 + (1));
i__4737__auto___67525 = G__67526;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.fixed.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67349){
var vec__67350 = p__67349;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67350,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67350,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toFixed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.fixed.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.fixed.cljs$lang$applyTo = (function (seq67346){
var G__67347 = cljs.core.first(seq67346);
var seq67346__$1 = cljs.core.next(seq67346);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67347,seq67346__$1);
}));

bignumber.core.format = (function bignumber$core$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67531 = arguments.length;
var i__4737__auto___67532 = (0);
while(true){
if((i__4737__auto___67532 < len__4736__auto___67531)){
args__4742__auto__.push((arguments[i__4737__auto___67532]));

var G__67533 = (i__4737__auto___67532 + (1));
i__4737__auto___67532 = G__67533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67367){
var vec__67369 = p__67367;
var dp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67369,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67369,(1),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toFormat",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dp,rm], 0));
}));

(bignumber.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.format.cljs$lang$applyTo = (function (seq67361){
var G__67362 = cljs.core.first(seq67361);
var seq67361__$1 = cljs.core.next(seq67361);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67362,seq67361__$1);
}));

bignumber.core.fraction = (function bignumber$core$fraction(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67537 = arguments.length;
var i__4737__auto___67539 = (0);
while(true){
if((i__4737__auto___67539 < len__4736__auto___67537)){
args__4742__auto__.push((arguments[i__4737__auto___67539]));

var G__67542 = (i__4737__auto___67539 + (1));
i__4737__auto___67539 = G__67542;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.fraction.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67382){
var vec__67383 = p__67382;
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67383,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("toFraction",cljs.core.identity,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map], 0));
}));

(bignumber.core.fraction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.fraction.cljs$lang$applyTo = (function (seq67376){
var G__67377 = cljs.core.first(seq67376);
var seq67376__$1 = cljs.core.next(seq67376);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67377,seq67376__$1);
}));

bignumber.core.json = (function bignumber$core$json(x){
return bignumber.core.apply_fn("toJSON",JSON.stringify,x);
});
bignumber.core.pow = (function bignumber$core$pow(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67550 = arguments.length;
var i__4737__auto___67551 = (0);
while(true){
if((i__4737__auto___67551 < len__4736__auto___67550)){
args__4742__auto__.push((arguments[i__4737__auto___67551]));

var G__67553 = (i__4737__auto___67551 + (1));
i__4737__auto___67551 = G__67553;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bignumber.core.pow.cljs$core$IFn$_invoke$arity$variadic = (function (x,n,p__67392){
var vec__67393 = p__67392;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67393,(0),null);
return bignumber.core.apply_fn.cljs$core$IFn$_invoke$arity$variadic("pow",Math.pow,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,m], 0));
}));

(bignumber.core.pow.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bignumber.core.pow.cljs$lang$applyTo = (function (seq67389){
var G__67390 = cljs.core.first(seq67389);
var seq67389__$1 = cljs.core.next(seq67389);
var G__67391 = cljs.core.first(seq67389__$1);
var seq67389__$2 = cljs.core.next(seq67389__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67390,G__67391,seq67389__$2);
}));

bignumber.core.precision = (function bignumber$core$precision(var_args){
var args__4742__auto__ = [];
var len__4736__auto___67554 = arguments.length;
var i__4737__auto___67555 = (0);
while(true){
if((i__4737__auto___67555 < len__4736__auto___67554)){
args__4742__auto__.push((arguments[i__4737__auto___67555]));

var G__67556 = (i__4737__auto___67555 + (1));
i__4737__auto___67555 = G__67556;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(bignumber.core.precision.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__67408){
var vec__67410 = p__67408;
var sd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67410,(0),null);
var rm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67410,(1),null);
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"toPrecision",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sd,rm], 0));
}));

(bignumber.core.precision.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(bignumber.core.precision.cljs$lang$applyTo = (function (seq67404){
var G__67405 = cljs.core.first(seq67404);
var seq67404__$1 = cljs.core.next(seq67404);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67405,seq67404__$1);
}));

bignumber.core.trunc = (function bignumber$core$trunc(x){
if(cljs.core.truth_(bignumber.core.bignumber_QMARK_(x))){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(x,"trunc",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
if(typeof x === 'number'){
return (x | (0));
} else {
return x;

}
}
});
bignumber.core.value_of = (function bignumber$core$value_of(x){
return cljs.core.js_invoke(x,"valueOf");
});

//# sourceMappingURL=bignumber.core.js.map

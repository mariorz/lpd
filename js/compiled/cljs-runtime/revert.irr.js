goog.provide('revert.irr');
revert.irr.deriv = (function revert$irr$deriv(f,dx){
return (function (x){
return (((function (){var G__112354 = (x + dx);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__112354) : f.call(null,G__112354));
})() - (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x))) / dx);
});
});
revert.irr.make_improver = (function revert$irr$make_improver(f,dx){
return (function (guess){
return (guess - ((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(guess) : f.call(null,guess)) / revert.irr.deriv(f,dx)(guess)));
});
});
revert.irr.make_good_enough = (function revert$irr$make_good_enough(f,tolerance){
return (function (guess){
return (Math.abs((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(guess) : f.call(null,guess))) < tolerance);
});
});
revert.irr.iterative_improve = (function revert$irr$iterative_improve(x,improve,good_QMARK_){
if(cljs.core.truth_((good_QMARK_.cljs$core$IFn$_invoke$arity$1 ? good_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : good_QMARK_.call(null,x)))){
return x;
} else {
var G__112355 = (improve.cljs$core$IFn$_invoke$arity$1 ? improve.cljs$core$IFn$_invoke$arity$1(x) : improve.call(null,x));
var G__112356 = improve;
var G__112357 = good_QMARK_;
return (revert.irr.iterative_improve.cljs$core$IFn$_invoke$arity$3 ? revert.irr.iterative_improve.cljs$core$IFn$_invoke$arity$3(G__112355,G__112356,G__112357) : revert.irr.iterative_improve.call(null,G__112355,G__112356,G__112357));
}
});
revert.irr.solve = (function revert$irr$solve(f,guess,dx,tolerance){
return revert.irr.iterative_improve(guess,revert.irr.make_improver(f,dx),revert.irr.make_good_enough(f,tolerance));
});
revert.irr.pv = (function revert$irr$pv(var_args){
var G__112359 = arguments.length;
switch (G__112359) {
case 0:
return revert.irr.pv.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return revert.irr.pv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return revert.irr.pv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return revert.irr.pv.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(revert.irr.pv.cljs$core$IFn$_invoke$arity$0 = (function (){
return (0);
}));

(revert.irr.pv.cljs$core$IFn$_invoke$arity$1 = (function (i){
return ((1) / ((1) + i));
}));

(revert.irr.pv.cljs$core$IFn$_invoke$arity$2 = (function (i,t){
return Math.pow(revert.irr.pv.cljs$core$IFn$_invoke$arity$1(i),t);
}));

(revert.irr.pv.cljs$core$IFn$_invoke$arity$3 = (function (i,t,c){
return (c * revert.irr.pv.cljs$core$IFn$_invoke$arity$2(i,t));
}));

(revert.irr.pv.cljs$lang$maxFixedArity = 3);

revert.irr.npv = (function revert$irr$npv(i,t,cf){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(revert.irr.pv,i,t,cf));
});
revert.irr.irr = (function revert$irr$irr(t,cf,guess){
return revert.irr.solve((function (i){
return revert.irr.npv(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(i),t,cf);
}),guess,1.0E-6,1.0E-8);
});

//# sourceMappingURL=revert.irr.js.map

goog.provide('revert.tokens');
revert.tokens.symbol__GT_price = (function revert$tokens$symbol__GT_price(symbol,token_infos,vs_price){
try{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__163326_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),clojure.string.upper_case(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__163326_SHARP_)));
}),cljs.core.vals(token_infos)))),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(vs_price)),revert.utils.bn(0.0));
}catch (e163330){if((e163330 instanceof Error)){
var err = e163330;
return revert.utils.bn(0.0);
} else {
throw e163330;

}
}});
revert.tokens.token_symbol = (function revert$tokens$token_symbol(token_address,token_infos){
if((token_address == null)){
return token_address;
} else {
var symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_infos,clojure.string.lower_case(token_address)));
var or__4126__auto__ = symbol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return token_address;
}
}
});
revert.tokens.rewards_in_currency = (function revert$tokens$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?revert.utils.bn(0.0):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__163360_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__163360_SHARP_),revert.tokens.symbol__GT_price(p1__163360_SHARP_,token_prices,currency));
}),rewarded_currencies)));
if(cljs.core.truth_(res.isNaN())){
return revert.utils.bn(0.0);
} else {
return res;
}
});
revert.tokens.tokens_at_prices = (function revert$tokens$tokens_at_prices(tokens,token_prices){
var reward_tokens = cljs.core.keys(tokens);
var tokens_usd = revert.tokens.rewards_in_currency(tokens,"usd",token_prices);
var tokens_eth = revert.tokens.rewards_in_currency(tokens,"eth",token_prices);
return new cljs.core.PersistentArrayMap(null, 2, ["USD",tokens_usd,"ETH",tokens_eth], null);
});

//# sourceMappingURL=revert.tokens.js.map

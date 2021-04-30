goog.provide('revert.coingecko');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
revert.coingecko._LT_token_prices = (function revert$coingecko$_LT_token_prices(addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77188){
var state_val_77190 = (state_77188[(1)]);
if((state_val_77190 === (1))){
var inst_77167 = (state_77188[(7)]);
var inst_77168 = (state_77188[(8)]);
var inst_77164 = (state_77188[(9)]);
var inst_77164__$1 = ["https://api.coingecko.com/","api/v3/simple/token_price/ethereum?","vs_currencies=usd%2Ceth&include_last_updated_at=true","&contract_addresses="].join('');
var inst_77165 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",addresses);
var inst_77166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_77165);
var inst_77167__$1 = goog.string.urlEncode(inst_77166);
var inst_77168__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_77164__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_77167__$1)].join('');
var inst_77169 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_77170 = [false];
var inst_77171 = cljs.core.PersistentHashMap.fromArrays(inst_77169,inst_77170);
var inst_77172 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_77168__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77171], 0));
var state_77188__$1 = (function (){var statearr_77193 = state_77188;
(statearr_77193[(7)] = inst_77167__$1);

(statearr_77193[(8)] = inst_77168__$1);

(statearr_77193[(9)] = inst_77164__$1);

return statearr_77193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77188__$1,(2),inst_77172);
} else {
if((state_val_77190 === (2))){
var inst_77167 = (state_77188[(7)]);
var inst_77168 = (state_77188[(8)]);
var inst_77164 = (state_77188[(9)]);
var inst_77174 = (state_77188[(2)]);
var inst_77175 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77174);
var inst_77176 = (function (){var base_url = inst_77164;
var addy_args = inst_77167;
var full_url = inst_77168;
var data = inst_77175;
return (function (p1__77158_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__77158_SHARP_,new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137));
});
})();
var inst_77177 = revert.utils.update_values(inst_77175,inst_77176);
var inst_77178 = (function (){var base_url = inst_77164;
var addy_args = inst_77167;
var full_url = inst_77168;
var data = inst_77175;
var data_sans_ts = inst_77177;
return (function (p1__77159_SHARP_){
return revert.utils.update_values(p1__77159_SHARP_,(function (n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
}));
});
})();
var inst_77179 = revert.utils.update_values(inst_77177,inst_77178);
var inst_77180 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(inst_77175,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77179], 0));
var inst_77181 = cljs.core.keys(inst_77180);
var inst_77182 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,inst_77181);
var inst_77183 = (function (){var base_url = inst_77164;
var addy_args = inst_77167;
var full_url = inst_77168;
var data = inst_77175;
var data_sans_ts = inst_77177;
var data_SINGLEQUOTE_ = inst_77180;
return (function (p1__77161_SHARP_){
return clojure.set.rename_keys(p1__77161_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137),new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"usd","usd",2103592073),"usd",new cljs.core.Keyword(null,"eth","eth",1381694970),"eth"], null));
});
})();
var inst_77184 = cljs.core.vals(inst_77180);
var inst_77185 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77183,inst_77184);
var inst_77186 = cljs.core.zipmap(inst_77182,inst_77185);
var state_77188__$1 = state_77188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77188__$1,inst_77186);
} else {
return null;
}
}
});
return (function() {
var revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__ = null;
var revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____0 = (function (){
var statearr_77195 = [null,null,null,null,null,null,null,null,null,null];
(statearr_77195[(0)] = revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__);

(statearr_77195[(1)] = (1));

return statearr_77195;
});
var revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____1 = (function (state_77188){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77188);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77197){var ex__52189__auto__ = e77197;
var statearr_77198_77273 = state_77188;
(statearr_77198_77273[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77188[(4)]))){
var statearr_77199_77274 = state_77188;
(statearr_77199_77274[(1)] = cljs.core.first((state_77188[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77275 = state_77188;
state_77188 = G__77275;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__ = function(state_77188){
switch(arguments.length){
case 0:
return revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____1.call(this,state_77188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____0;
revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$coingecko$_LT_token_prices_$_state_machine__52186__auto____1;
return revert$coingecko$_LT_token_prices_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77200 = f__52209__auto__();
(statearr_77200[(6)] = c__52208__auto__);

return statearr_77200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.coingecko._LT_historic_token_prices = (function revert$coingecko$_LT_historic_token_prices(address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77236){
var state_val_77237 = (state_77236[(1)]);
if((state_val_77237 === (1))){
var inst_77226 = ["https://api.coingecko.com/","api/v3/coins/ethereum/contract/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"/market_chart/?vs_currency=usd&days=700"].join('');
var inst_77227 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_77228 = [false];
var inst_77229 = cljs.core.PersistentHashMap.fromArrays(inst_77227,inst_77228);
var inst_77230 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_77226,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77229], 0));
var state_77236__$1 = state_77236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77236__$1,(2),inst_77230);
} else {
if((state_val_77237 === (2))){
var inst_77232 = (state_77236[(2)]);
var inst_77233 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77232);
var inst_77234 = new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(inst_77233);
var state_77236__$1 = state_77236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77236__$1,inst_77234);
} else {
return null;
}
}
});
return (function() {
var revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__ = null;
var revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____0 = (function (){
var statearr_77238 = [null,null,null,null,null,null,null];
(statearr_77238[(0)] = revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__);

(statearr_77238[(1)] = (1));

return statearr_77238;
});
var revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____1 = (function (state_77236){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77236);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77239){var ex__52189__auto__ = e77239;
var statearr_77240_77281 = state_77236;
(statearr_77240_77281[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77236[(4)]))){
var statearr_77241_77282 = state_77236;
(statearr_77241_77282[(1)] = cljs.core.first((state_77236[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77283 = state_77236;
state_77236 = G__77283;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__ = function(state_77236){
switch(arguments.length){
case 0:
return revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____1.call(this,state_77236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____0;
revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto____1;
return revert$coingecko$_LT_historic_token_prices_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77243 = f__52209__auto__();
(statearr_77243[(6)] = c__52208__auto__);

return statearr_77243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.coingecko.js.map

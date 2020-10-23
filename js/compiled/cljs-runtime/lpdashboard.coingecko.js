goog.provide('lpdashboard.coingecko');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.coingecko._LT_token_prices = (function lpdashboard$coingecko$_LT_token_prices(addresses){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_27962){
var state_val_27963 = (state_27962[(1)]);
if((state_val_27963 === (1))){
var inst_27942 = (state_27962[(7)]);
var inst_27941 = (state_27962[(8)]);
var inst_27938 = (state_27962[(9)]);
var inst_27938__$1 = ["https://api.coingecko.com/","api/v3/simple/token_price/ethereum?","vs_currencies=usd%2Ceth&include_last_updated_at=true","&contract_addresses="].join('');
var inst_27939 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",addresses);
var inst_27940 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,inst_27939);
var inst_27941__$1 = goog.string.urlEncode(inst_27940);
var inst_27942__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27938__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27941__$1)].join('');
var inst_27943 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_27944 = [false];
var inst_27945 = cljs.core.PersistentHashMap.fromArrays(inst_27943,inst_27944);
var inst_27946 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_27942__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27945], 0));
var state_27962__$1 = (function (){var statearr_27999 = state_27962;
(statearr_27999[(7)] = inst_27942__$1);

(statearr_27999[(8)] = inst_27941__$1);

(statearr_27999[(9)] = inst_27938__$1);

return statearr_27999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27962__$1,(2),inst_27946);
} else {
if((state_val_27963 === (2))){
var inst_27942 = (state_27962[(7)]);
var inst_27941 = (state_27962[(8)]);
var inst_27938 = (state_27962[(9)]);
var inst_27948 = (state_27962[(2)]);
var inst_27949 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27948);
var inst_27950 = (function (){var base_url = inst_27938;
var addy_args = inst_27941;
var full_url = inst_27942;
var data = inst_27949;
return (function (p1__27934_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27934_SHARP_,new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137));
});
})();
var inst_27951 = lpdashboard.utils.update_values(inst_27949,inst_27950);
var inst_27952 = (function (){var base_url = inst_27938;
var addy_args = inst_27941;
var full_url = inst_27942;
var data = inst_27949;
var data_sans_ts = inst_27951;
return (function (p1__27935_SHARP_){
return lpdashboard.utils.update_values(p1__27935_SHARP_,(function (n){
return (new module$node_modules$bignumber_DOT_js$bignumber(cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)));
}));
});
})();
var inst_27953 = lpdashboard.utils.update_values(inst_27951,inst_27952);
var inst_27954 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(inst_27949,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27953], 0));
var inst_27955 = cljs.core.keys(inst_27954);
var inst_27956 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,inst_27955);
var inst_27957 = (function (){var base_url = inst_27938;
var addy_args = inst_27941;
var full_url = inst_27942;
var data = inst_27949;
var data_sans_ts = inst_27951;
var data_SINGLEQUOTE_ = inst_27954;
return (function (p1__27936_SHARP_){
return clojure.set.rename_keys(p1__27936_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137),new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"usd","usd",2103592073),"usd",new cljs.core.Keyword(null,"eth","eth",1381694970),"eth"], null));
});
})();
var inst_27958 = cljs.core.vals(inst_27954);
var inst_27959 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_27957,inst_27958);
var inst_27960 = cljs.core.zipmap(inst_27956,inst_27959);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27962__$1,inst_27960);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto__ = null;
var lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto____0 = (function (){
var statearr_28047 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28047[(0)] = lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto__);

(statearr_28047[(1)] = (1));

return statearr_28047;
});
var lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto____1 = (function (state_27962){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_27962);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28051){var ex__27579__auto__ = e28051;
var statearr_28052_28105 = state_27962;
(statearr_28052_28105[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_27962[(4)]))){
var statearr_28055_28111 = state_27962;
(statearr_28055_28111[(1)] = cljs.core.first((state_27962[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28118 = state_27962;
state_27962 = G__28118;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto__ = function(state_27962){
switch(arguments.length){
case 0:
return lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto____1.call(this,state_27962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto____0;
lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto____1;
return lpdashboard$coingecko$_LT_token_prices_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28060 = f__27668__auto__();
(statearr_28060[(6)] = c__27667__auto__);

return statearr_28060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});

//# sourceMappingURL=lpdashboard.coingecko.js.map

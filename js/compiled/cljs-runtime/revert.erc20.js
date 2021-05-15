goog.provide('revert.erc20');
revert.erc20._LT_uniswap_infos = (function revert$erc20$_LT_uniswap_infos(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67144){
var state_val_67145 = (state_67144[(1)]);
if((state_val_67145 === (1))){
var inst_67136 = revert.thegraph._LT_token_days_uni(token_addresses);
var state_67144__$1 = state_67144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67144__$1,(2),inst_67136);
} else {
if((state_val_67145 === (2))){
var inst_67138 = (state_67144[(2)]);
var inst_67139 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),inst_67138);
var inst_67140 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_67139);
var inst_67141 = cljs.core.count(inst_67140);
var inst_67142 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(inst_67141,inst_67138);
var state_67144__$1 = state_67144;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67144__$1,inst_67142);
} else {
return null;
}
}
});
return (function() {
var revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__ = null;
var revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_67166 = [null,null,null,null,null,null,null];
(statearr_67166[(0)] = revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__);

(statearr_67166[(1)] = (1));

return statearr_67166;
});
var revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____1 = (function (state_67144){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67144);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67168){var ex__52189__auto__ = e67168;
var statearr_67169_67340 = state_67144;
(statearr_67169_67340[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67144[(4)]))){
var statearr_67170_67342 = state_67144;
(statearr_67170_67342[(1)] = cljs.core.first((state_67144[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67343 = state_67144;
state_67144 = G__67343;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__ = function(state_67144){
switch(arguments.length){
case 0:
return revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____1.call(this,state_67144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____0;
revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto____1;
return revert$erc20$_LT_uniswap_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67173 = f__52209__auto__();
(statearr_67173[(6)] = c__52208__auto__);

return statearr_67173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.erc20._LT_sushiswap_infos = (function revert$erc20$_LT_sushiswap_infos(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67189){
var state_val_67190 = (state_67189[(1)]);
if((state_val_67190 === (1))){
var inst_67180 = revert.thegraph._LT_token_days_sushi(token_addresses);
var state_67189__$1 = state_67189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67189__$1,(2),inst_67180);
} else {
if((state_val_67190 === (2))){
var inst_67182 = (state_67189[(2)]);
var inst_67184 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),inst_67182);
var inst_67185 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_67184);
var inst_67186 = cljs.core.count(inst_67185);
var inst_67187 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(inst_67186,inst_67182);
var state_67189__$1 = state_67189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67189__$1,inst_67187);
} else {
return null;
}
}
});
return (function() {
var revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__ = null;
var revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_67196 = [null,null,null,null,null,null,null];
(statearr_67196[(0)] = revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__);

(statearr_67196[(1)] = (1));

return statearr_67196;
});
var revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____1 = (function (state_67189){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67189);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67198){var ex__52189__auto__ = e67198;
var statearr_67199_67353 = state_67189;
(statearr_67199_67353[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67189[(4)]))){
var statearr_67200_67355 = state_67189;
(statearr_67200_67355[(1)] = cljs.core.first((state_67189[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67357 = state_67189;
state_67189 = G__67357;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__ = function(state_67189){
switch(arguments.length){
case 0:
return revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____1.call(this,state_67189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____0;
revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto____1;
return revert$erc20$_LT_sushiswap_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67202 = f__52209__auto__();
(statearr_67202[(6)] = c__52208__auto__);

return statearr_67202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.erc20._LT_infos = (function revert$erc20$_LT_infos(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_67252){
var state_val_67257 = (state_67252[(1)]);
if((state_val_67257 === (1))){
var inst_67221 = (state_67252[(7)]);
var inst_67221__$1 = cljs.core.set(token_addresses);
var inst_67222 = cljs.core.vec(inst_67221__$1);
var inst_67223 = revert.erc20._LT_uniswap_infos(inst_67222);
var state_67252__$1 = (function (){var statearr_67265 = state_67252;
(statearr_67265[(7)] = inst_67221__$1);

return statearr_67265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67252__$1,(2),inst_67223);
} else {
if((state_val_67257 === (2))){
var inst_67233 = (state_67252[(8)]);
var inst_67221 = (state_67252[(7)]);
var inst_67226 = (state_67252[(9)]);
var inst_67226__$1 = (state_67252[(2)]);
var inst_67230 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),inst_67226__$1);
var inst_67231 = cljs.core.set(inst_67230);
var inst_67232 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(inst_67221,inst_67231);
var inst_67233__$1 = cljs.core.vec(inst_67232);
var inst_67234 = cljs.core.count(inst_67233__$1);
var inst_67235 = (inst_67234 > (0));
var state_67252__$1 = (function (){var statearr_67269 = state_67252;
(statearr_67269[(8)] = inst_67233__$1);

(statearr_67269[(9)] = inst_67226__$1);

return statearr_67269;
})();
if(cljs.core.truth_(inst_67235)){
var statearr_67274_67371 = state_67252__$1;
(statearr_67274_67371[(1)] = (3));

} else {
var statearr_67276_67373 = state_67252__$1;
(statearr_67276_67373[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (3))){
var inst_67233 = (state_67252[(8)]);
var inst_67237 = revert.erc20._LT_sushiswap_infos(inst_67233);
var state_67252__$1 = state_67252;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67252__$1,(6),inst_67237);
} else {
if((state_val_67257 === (4))){
var inst_67241 = cljs.core.PersistentVector.EMPTY;
var state_67252__$1 = state_67252;
var statearr_67282_67375 = state_67252__$1;
(statearr_67282_67375[(2)] = inst_67241);

(statearr_67282_67375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67257 === (5))){
var inst_67226 = (state_67252[(9)]);
var inst_67243 = (state_67252[(2)]);
var inst_67244 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_67226,inst_67243);
var state_67252__$1 = state_67252;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67252__$1,inst_67244);
} else {
if((state_val_67257 === (6))){
var inst_67239 = (state_67252[(2)]);
var state_67252__$1 = state_67252;
var statearr_67283_67384 = state_67252__$1;
(statearr_67283_67384[(2)] = inst_67239);

(statearr_67283_67384[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
});
return (function() {
var revert$erc20$_LT_infos_$_state_machine__52186__auto__ = null;
var revert$erc20$_LT_infos_$_state_machine__52186__auto____0 = (function (){
var statearr_67286 = [null,null,null,null,null,null,null,null,null,null];
(statearr_67286[(0)] = revert$erc20$_LT_infos_$_state_machine__52186__auto__);

(statearr_67286[(1)] = (1));

return statearr_67286;
});
var revert$erc20$_LT_infos_$_state_machine__52186__auto____1 = (function (state_67252){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_67252);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e67291){var ex__52189__auto__ = e67291;
var statearr_67292_67389 = state_67252;
(statearr_67292_67389[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_67252[(4)]))){
var statearr_67295_67391 = state_67252;
(statearr_67295_67391[(1)] = cljs.core.first((state_67252[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67395 = state_67252;
state_67252 = G__67395;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$erc20$_LT_infos_$_state_machine__52186__auto__ = function(state_67252){
switch(arguments.length){
case 0:
return revert$erc20$_LT_infos_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$erc20$_LT_infos_$_state_machine__52186__auto____1.call(this,state_67252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$erc20$_LT_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$erc20$_LT_infos_$_state_machine__52186__auto____0;
revert$erc20$_LT_infos_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$erc20$_LT_infos_$_state_machine__52186__auto____1;
return revert$erc20$_LT_infos_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_67297 = f__52209__auto__();
(statearr_67297[(6)] = c__52208__auto__);

return statearr_67297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.erc20.js.map

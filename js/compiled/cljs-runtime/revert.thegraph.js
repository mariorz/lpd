goog.provide('revert.thegraph');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
revert.thegraph.uni_subgraph_url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
revert.thegraph.sushi_subgraph_url = "https://api.thegraph.com/subgraphs/name/sushiswap/exchange";
revert.thegraph.blocks_subgraph_url = "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks";
revert.thegraph.snapshot_query_string = (function revert$thegraph$snapshot_query_string(user_address){
return ["{\n      liquidityPositionSnapshots(orderBy: timestamp,\n                                 orderDirection: desc,\n                                 where: {user: \"",clojure.string.lower_case(user_address),"\"}\n                                 first: 1000) {\n      block,\n      timestamp,\n      pair {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n    liquidityTokenBalance,\n    liquidityTokenTotalSupply,\n    token0PriceUSD,\n    token1PriceUSD,\n    reserve0,\n    reserve1,\n    reserveUSD\n    }\n   }"].join('');
});
revert.thegraph.some_pair = "0x0d0d65e7a7db277d3e0f5e1676325e75f3340455";
revert.thegraph.block_times_query_string = (function revert$thegraph$block_times_query_string(block_numbers){
return ["{blocks(where: {number_in: [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",block_numbers),"]}, first:1000)\n           {number,\n           timestamp}\n        }"].join('');
});
revert.thegraph.positions_query_string = (function revert$thegraph$positions_query_string(user,pairs){
return ["{\n      liquidityPositions( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77189_SHARP_){
return ["\"",clojure.string.lower_case(p1__77189_SHARP_),"-",clojure.string.lower_case(user),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n      id,\n      user,\n      liquidityTokenBalance,\n      pair {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n          reserveUSD,\n          reserveETH,\n          volumeUSD,\n          token0 {\n            id,\n            symbol,\n            name,\n            decimals,\n          }\n          token1 {\n            id,\n            symbol,\n            name,\n            decimals\n\n          }\n     }\n\n    }\n   }"].join('');
});
revert.thegraph.pairs_query_string = (function revert$thegraph$pairs_query_string(pairs){
return ["{\n      pairs( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77191_SHARP_){
return ["\"",clojure.string.lower_case(p1__77191_SHARP_),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n()\n          }\n     }\n\n    }\n   "].join('');
});
revert.thegraph.mints_query_string = (function revert$thegraph$mints_query_string(address){
return ["{\n      mints(where: {to: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(address),"\"}) {\n          id,\n          to,\n          timestamp,\n          liquidity,\n          amount0,\n          amount1,\n          pair {\n          id,\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n          transaction {\n             id,\n             blockNumber,\n             timestamp\n          }\n\n       }\n     }\n   "].join('');
});
revert.thegraph.pair_days_query_string = (function revert$thegraph$pair_days_query_string(pair_address){
return ["{\n      pairDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {pairAddress: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pair_address),"\"}\n                   first: 1000) {\n         id\n         date,\n         pairAddress,\n         token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         reserve0,\n         reserve1,\n         totalSupply,\n         reserveUSD,\n         dailyVolumeToken0,\n         dailyVolumeToken1,\n         dailyVolumeUSD,\n         dailyTxns\n       }\n     }\n   "].join('');
});
revert.thegraph.pair_days_query_string_sushi = (function revert$thegraph$pair_days_query_string_sushi(pair_address){
return ["{\n      pairDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {pair: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pair_address),"\"}\n                   first: 1000) {\n         id\n         date,\n         pair,\n         token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         reserve0,\n         reserve1,\n         totalSupply,\n         reserveUSD,\n         volumeToken0,\n         volumeToken1,\n         volumeUSD,\n         txCount\n       }\n     }\n   "].join('');
});
revert.thegraph.token_days_query_string = (function revert$thegraph$token_days_query_string(token_addresses){
return ["{\n      tokenDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   first: 1000,\n                   where: {token_in:[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77194_SHARP_){
return ["\"",clojure.string.lower_case(p1__77194_SHARP_),"\","].join('');
}),token_addresses))),"]}) {\n         id\n         date,\n         token {id, name, symbol, decimals, derivedETH},\n         priceUSD\n       }\n     }\n   "].join('');
});
revert.thegraph._LT_user_lps_uni = (function revert$thegraph$_LT_user_lps_uni(user_address,pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77224){
var state_val_77225 = (state_77224[(1)]);
if((state_val_77225 === (1))){
var inst_77201 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77202 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77203 = revert.thegraph.positions_query_string(user_address,pair_addresses);
var inst_77204 = [inst_77203];
var inst_77205 = cljs.core.PersistentHashMap.fromArrays(inst_77202,inst_77204);
var inst_77206 = cljs.core.clj__GT_js(inst_77205);
var inst_77207 = JSON.stringify(inst_77206);
var inst_77208 = [false,inst_77207];
var inst_77209 = cljs.core.PersistentHashMap.fromArrays(inst_77201,inst_77208);
var inst_77210 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77209], 0));
var state_77224__$1 = state_77224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77224__$1,(2),inst_77210);
} else {
if((state_val_77225 === (2))){
var inst_77212 = (state_77224[(2)]);
var inst_77213 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77212);
var inst_77214 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77213);
var inst_77215 = new cljs.core.Keyword(null,"liquidityPositions","liquidityPositions",589920368).cljs$core$IFn$_invoke$arity$1(inst_77214);
var inst_77216 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77217 = [new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590)];
var inst_77218 = (new cljs.core.PersistentVector(null,1,(5),inst_77216,inst_77217,null));
var inst_77219 = (function (){var data = inst_77212;
var positions = inst_77215;
var keys_numerical_vals = inst_77218;
return (function (p1__77196_SHARP_){
return revert.utils.pu(p1__77196_SHARP_,(0));
});
})();
var inst_77221 = (function (){var data = inst_77212;
var positions = inst_77215;
var keys_numerical_vals = inst_77218;
var num_parse_fn = inst_77219;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair));
var ts = num_parse_fn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair));
var resusd = num_parse_fn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(pair));
var reseth = num_parse_fn(new cljs.core.Keyword(null,"reserveETH","reserveETH",-1304809906).cljs$core$IFn$_invoke$arity$1(pair));
var volusd = num_parse_fn(new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963).cljs$core$IFn$_invoke$arity$1(pair));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var pair_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pair,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834),ts,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779),resusd,new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963),volusd], 0));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"pair","pair",-447516312),pair_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_77222 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77221,inst_77215);
var state_77224__$1 = state_77224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77224__$1,inst_77222);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_77242 = [null,null,null,null,null,null,null];
(statearr_77242[(0)] = revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__);

(statearr_77242[(1)] = (1));

return statearr_77242;
});
var revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____1 = (function (state_77224){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77224);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77244){var ex__52189__auto__ = e77244;
var statearr_77245_77611 = state_77224;
(statearr_77245_77611[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77224[(4)]))){
var statearr_77246_77612 = state_77224;
(statearr_77246_77612[(1)] = cljs.core.first((state_77224[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77613 = state_77224;
state_77224 = G__77613;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__ = function(state_77224){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____1.call(this,state_77224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77247 = f__52209__auto__();
(statearr_77247[(6)] = c__52208__auto__);

return statearr_77247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lps_sushi = (function revert$thegraph$_LT_user_lps_sushi(user_address,pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77271){
var state_val_77272 = (state_77271[(1)]);
if((state_val_77272 === (1))){
var inst_77249 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77250 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77251 = revert.thegraph.positions_query_string(user_address,pair_addresses);
var inst_77252 = [inst_77251];
var inst_77253 = cljs.core.PersistentHashMap.fromArrays(inst_77250,inst_77252);
var inst_77254 = cljs.core.clj__GT_js(inst_77253);
var inst_77255 = JSON.stringify(inst_77254);
var inst_77256 = [false,inst_77255];
var inst_77257 = cljs.core.PersistentHashMap.fromArrays(inst_77249,inst_77256);
var inst_77258 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77257], 0));
var state_77271__$1 = state_77271;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77271__$1,(2),inst_77258);
} else {
if((state_val_77272 === (2))){
var inst_77260 = (state_77271[(2)]);
var inst_77261 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77260);
var inst_77262 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77261);
var inst_77263 = new cljs.core.Keyword(null,"liquidityPositions","liquidityPositions",589920368).cljs$core$IFn$_invoke$arity$1(inst_77262);
var inst_77264 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_77265 = [new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590)];
var inst_77266 = (new cljs.core.PersistentVector(null,1,(5),inst_77264,inst_77265,null));
var inst_77267 = (function (){var data = inst_77260;
var positions = inst_77263;
var keys_numerical_vals = inst_77266;
return (function (p1__77248_SHARP_){
return revert.utils.pu(p1__77248_SHARP_,(0));
});
})();
var inst_77268 = (function (){var data = inst_77260;
var positions = inst_77263;
var keys_numerical_vals = inst_77266;
var num_parse_fn = inst_77267;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair));
var ts = num_parse_fn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair));
var resusd = num_parse_fn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(pair));
var reseth = num_parse_fn(new cljs.core.Keyword(null,"reserveETH","reserveETH",-1304809906).cljs$core$IFn$_invoke$arity$1(pair));
var volusd = num_parse_fn(new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963).cljs$core$IFn$_invoke$arity$1(pair));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var pair_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pair,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834),ts,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779),resusd,new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963),volusd], 0));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"pair","pair",-447516312),pair_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exchange","exchange",843073210),"sushiswap",new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_77269 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77268,inst_77263);
var state_77271__$1 = state_77271;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77271__$1,inst_77269);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_77276 = [null,null,null,null,null,null,null];
(statearr_77276[(0)] = revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__);

(statearr_77276[(1)] = (1));

return statearr_77276;
});
var revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____1 = (function (state_77271){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77271);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77277){var ex__52189__auto__ = e77277;
var statearr_77278_77660 = state_77271;
(statearr_77278_77660[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77271[(4)]))){
var statearr_77279_77662 = state_77271;
(statearr_77279_77662[(1)] = cljs.core.first((state_77271[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77663 = state_77271;
state_77271 = G__77663;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__ = function(state_77271){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____1.call(this,state_77271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77280 = f__52209__auto__();
(statearr_77280[(6)] = c__52208__auto__);

return statearr_77280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lps = (function revert$thegraph$_LT_user_lps(user_address,pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77292){
var state_val_77293 = (state_77292[(1)]);
if((state_val_77293 === (1))){
var inst_77284 = revert.thegraph._LT_user_lps_uni(user_address,pair_addresses);
var state_77292__$1 = state_77292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77292__$1,(2),inst_77284);
} else {
if((state_val_77293 === (2))){
var inst_77286 = (state_77292[(2)]);
var inst_77287 = revert.thegraph._LT_user_lps_sushi(user_address,pair_addresses);
var state_77292__$1 = (function (){var statearr_77294 = state_77292;
(statearr_77294[(7)] = inst_77286);

return statearr_77294;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77292__$1,(3),inst_77287);
} else {
if((state_val_77293 === (3))){
var inst_77286 = (state_77292[(7)]);
var inst_77289 = (state_77292[(2)]);
var inst_77290 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_77286,inst_77289);
var state_77292__$1 = state_77292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77292__$1,inst_77290);
} else {
return null;
}
}
}
});
return (function() {
var revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_77295 = [null,null,null,null,null,null,null,null];
(statearr_77295[(0)] = revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__);

(statearr_77295[(1)] = (1));

return statearr_77295;
});
var revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____1 = (function (state_77292){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77292);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77296){var ex__52189__auto__ = e77296;
var statearr_77297_77669 = state_77292;
(statearr_77297_77669[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77292[(4)]))){
var statearr_77298_77670 = state_77292;
(statearr_77298_77670[(1)] = cljs.core.first((state_77292[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77673 = state_77292;
state_77292 = G__77673;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__ = function(state_77292){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____1.call(this,state_77292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77299 = f__52209__auto__();
(statearr_77299[(6)] = c__52208__auto__);

return statearr_77299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lp_snapshots_uni = (function revert$thegraph$_LT_user_lp_snapshots_uni(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77320){
var state_val_77321 = (state_77320[(1)]);
if((state_val_77321 === (1))){
var inst_77301 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77302 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77303 = revert.thegraph.snapshot_query_string(user_address);
var inst_77304 = [inst_77303];
var inst_77305 = cljs.core.PersistentHashMap.fromArrays(inst_77302,inst_77304);
var inst_77306 = cljs.core.clj__GT_js(inst_77305);
var inst_77307 = JSON.stringify(inst_77306);
var inst_77308 = [false,inst_77307];
var inst_77309 = cljs.core.PersistentHashMap.fromArrays(inst_77301,inst_77308);
var inst_77310 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77309], 0));
var state_77320__$1 = state_77320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77320__$1,(2),inst_77310);
} else {
if((state_val_77321 === (2))){
var inst_77312 = (state_77320[(2)]);
var inst_77313 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77312);
var inst_77314 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77313);
var inst_77315 = new cljs.core.Keyword(null,"liquidityPositionSnapshots","liquidityPositionSnapshots",679672036).cljs$core$IFn$_invoke$arity$1(inst_77314);
var inst_77316 = (function (){var data = inst_77312;
var positions = inst_77315;
return (function (p1__77300_SHARP_){
return revert.utils.pu(p1__77300_SHARP_,(0));
});
})();
var inst_77317 = (function (){var data = inst_77312;
var positions = inst_77315;
var num_parse_fn = inst_77316;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(p));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(p));
var lts = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(p));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var rusd = num_parse_fn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(p));
var t0pusd = num_parse_fn(new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558).cljs$core$IFn$_invoke$arity$1(p));
var t1pusd = num_parse_fn(new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814).cljs$core$IFn$_invoke$arity$1(p));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb,new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934),lts,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779),rusd,new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558),t0pusd,new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814),t1pusd], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_77318 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77317,inst_77315);
var state_77320__$1 = state_77320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77320__$1,inst_77318);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_77322 = [null,null,null,null,null,null,null];
(statearr_77322[(0)] = revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__);

(statearr_77322[(1)] = (1));

return statearr_77322;
});
var revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____1 = (function (state_77320){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77320);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77323){var ex__52189__auto__ = e77323;
var statearr_77324_77686 = state_77320;
(statearr_77324_77686[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77320[(4)]))){
var statearr_77325_77687 = state_77320;
(statearr_77325_77687[(1)] = cljs.core.first((state_77320[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77689 = state_77320;
state_77320 = G__77689;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__ = function(state_77320){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____1.call(this,state_77320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77326 = f__52209__auto__();
(statearr_77326[(6)] = c__52208__auto__);

return statearr_77326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lp_snapshots_sushi = (function revert$thegraph$_LT_user_lp_snapshots_sushi(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77347){
var state_val_77348 = (state_77347[(1)]);
if((state_val_77348 === (1))){
var inst_77328 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77329 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77330 = revert.thegraph.snapshot_query_string(user_address);
var inst_77331 = [inst_77330];
var inst_77332 = cljs.core.PersistentHashMap.fromArrays(inst_77329,inst_77331);
var inst_77333 = cljs.core.clj__GT_js(inst_77332);
var inst_77334 = JSON.stringify(inst_77333);
var inst_77335 = [false,inst_77334];
var inst_77336 = cljs.core.PersistentHashMap.fromArrays(inst_77328,inst_77335);
var inst_77337 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77336], 0));
var state_77347__$1 = state_77347;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77347__$1,(2),inst_77337);
} else {
if((state_val_77348 === (2))){
var inst_77339 = (state_77347[(2)]);
var inst_77340 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77339);
var inst_77341 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77340);
var inst_77342 = new cljs.core.Keyword(null,"liquidityPositionSnapshots","liquidityPositionSnapshots",679672036).cljs$core$IFn$_invoke$arity$1(inst_77341);
var inst_77343 = (function (){var data = inst_77339;
var positions = inst_77342;
return (function (p1__77327_SHARP_){
return revert.utils.pu(p1__77327_SHARP_,(0));
});
})();
var inst_77344 = (function (){var data = inst_77339;
var positions = inst_77342;
var num_parse_fn = inst_77343;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(p));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(p));
var lts = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(p));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var rusd = num_parse_fn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(p));
var t0pusd = num_parse_fn(new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558).cljs$core$IFn$_invoke$arity$1(p));
var t1pusd = num_parse_fn(new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814).cljs$core$IFn$_invoke$arity$1(p));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"exchange","exchange",843073210),"sushiswap",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb,new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934),lts,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779),rusd,new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558),t0pusd,new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814),t1pusd], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_77345 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77344,inst_77342);
var state_77347__$1 = state_77347;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77347__$1,inst_77345);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_77349 = [null,null,null,null,null,null,null];
(statearr_77349[(0)] = revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__);

(statearr_77349[(1)] = (1));

return statearr_77349;
});
var revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____1 = (function (state_77347){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77347);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77350){var ex__52189__auto__ = e77350;
var statearr_77351_77694 = state_77347;
(statearr_77351_77694[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77347[(4)]))){
var statearr_77352_77695 = state_77347;
(statearr_77352_77695[(1)] = cljs.core.first((state_77347[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77696 = state_77347;
state_77347 = G__77696;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__ = function(state_77347){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____1.call(this,state_77347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77353 = f__52209__auto__();
(statearr_77353[(6)] = c__52208__auto__);

return statearr_77353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lp_snapshots = (function revert$thegraph$_LT_user_lp_snapshots(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77362){
var state_val_77363 = (state_77362[(1)]);
if((state_val_77363 === (1))){
var inst_77354 = revert.thegraph._LT_user_lp_snapshots_uni(user_address);
var state_77362__$1 = state_77362;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77362__$1,(2),inst_77354);
} else {
if((state_val_77363 === (2))){
var inst_77356 = (state_77362[(2)]);
var inst_77357 = revert.thegraph._LT_user_lp_snapshots_sushi(user_address);
var state_77362__$1 = (function (){var statearr_77364 = state_77362;
(statearr_77364[(7)] = inst_77356);

return statearr_77364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77362__$1,(3),inst_77357);
} else {
if((state_val_77363 === (3))){
var inst_77356 = (state_77362[(7)]);
var inst_77359 = (state_77362[(2)]);
var inst_77360 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_77356,inst_77359);
var state_77362__$1 = state_77362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77362__$1,inst_77360);
} else {
return null;
}
}
}
});
return (function() {
var revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____0 = (function (){
var statearr_77365 = [null,null,null,null,null,null,null,null];
(statearr_77365[(0)] = revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__);

(statearr_77365[(1)] = (1));

return statearr_77365;
});
var revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____1 = (function (state_77362){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77362);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77366){var ex__52189__auto__ = e77366;
var statearr_77367_77702 = state_77362;
(statearr_77367_77702[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77362[(4)]))){
var statearr_77368_77714 = state_77362;
(statearr_77368_77714[(1)] = cljs.core.first((state_77362[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77717 = state_77362;
state_77362 = G__77717;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__ = function(state_77362){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____1.call(this,state_77362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77369 = f__52209__auto__();
(statearr_77369[(6)] = c__52208__auto__);

return statearr_77369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_pairs_info = (function revert$thegraph$_LT_pairs_info(pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77384){
var state_val_77385 = (state_77384[(1)]);
if((state_val_77385 === (1))){
var inst_77370 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77371 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77372 = revert.thegraph.pairs_query_string(pair_addresses);
var inst_77373 = [inst_77372];
var inst_77374 = cljs.core.PersistentHashMap.fromArrays(inst_77371,inst_77373);
var inst_77375 = cljs.core.clj__GT_js(inst_77374);
var inst_77376 = JSON.stringify(inst_77375);
var inst_77377 = [false,inst_77376];
var inst_77378 = cljs.core.PersistentHashMap.fromArrays(inst_77370,inst_77377);
var inst_77379 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77378], 0));
var state_77384__$1 = state_77384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77384__$1,(2),inst_77379);
} else {
if((state_val_77385 === (2))){
var inst_77381 = (state_77384[(2)]);
var inst_77382 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77381);
var state_77384__$1 = state_77384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77384__$1,inst_77382);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____0 = (function (){
var statearr_77386 = [null,null,null,null,null,null,null];
(statearr_77386[(0)] = revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__);

(statearr_77386[(1)] = (1));

return statearr_77386;
});
var revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____1 = (function (state_77384){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77384);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77387){var ex__52189__auto__ = e77387;
var statearr_77388_77723 = state_77384;
(statearr_77388_77723[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77384[(4)]))){
var statearr_77389_77724 = state_77384;
(statearr_77389_77724[(1)] = cljs.core.first((state_77384[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77725 = state_77384;
state_77384 = G__77725;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__ = function(state_77384){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____1.call(this,state_77384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____0;
revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77390 = f__52209__auto__();
(statearr_77390[(6)] = c__52208__auto__);

return statearr_77390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_mints = (function revert$thegraph$_LT_user_mints(user_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77405){
var state_val_77406 = (state_77405[(1)]);
if((state_val_77406 === (1))){
var inst_77391 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77392 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77393 = revert.thegraph.mints_query_string(user_addresses);
var inst_77394 = [inst_77393];
var inst_77395 = cljs.core.PersistentHashMap.fromArrays(inst_77392,inst_77394);
var inst_77396 = cljs.core.clj__GT_js(inst_77395);
var inst_77397 = JSON.stringify(inst_77396);
var inst_77398 = [false,inst_77397];
var inst_77399 = cljs.core.PersistentHashMap.fromArrays(inst_77391,inst_77398);
var inst_77400 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77399], 0));
var state_77405__$1 = state_77405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77405__$1,(2),inst_77400);
} else {
if((state_val_77406 === (2))){
var inst_77402 = (state_77405[(2)]);
var inst_77403 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77402);
var state_77405__$1 = state_77405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77405__$1,inst_77403);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_77407 = [null,null,null,null,null,null,null];
(statearr_77407[(0)] = revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__);

(statearr_77407[(1)] = (1));

return statearr_77407;
});
var revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____1 = (function (state_77405){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77405);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77408){var ex__52189__auto__ = e77408;
var statearr_77409_77731 = state_77405;
(statearr_77409_77731[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77405[(4)]))){
var statearr_77410_77732 = state_77405;
(statearr_77410_77732[(1)] = cljs.core.first((state_77405[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77733 = state_77405;
state_77405 = G__77733;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__ = function(state_77405){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____1.call(this,state_77405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77411 = f__52209__auto__();
(statearr_77411[(6)] = c__52208__auto__);

return statearr_77411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_pair_days_sushi = (function revert$thegraph$_LT_pair_days_sushi(pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77430){
var state_val_77431 = (state_77430[(1)]);
if((state_val_77431 === (1))){
var inst_77412 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77413 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77414 = revert.thegraph.pair_days_query_string_sushi(pair_addresses);
var inst_77415 = [inst_77414];
var inst_77416 = cljs.core.PersistentHashMap.fromArrays(inst_77413,inst_77415);
var inst_77417 = cljs.core.clj__GT_js(inst_77416);
var inst_77418 = JSON.stringify(inst_77417);
var inst_77419 = [false,inst_77418];
var inst_77420 = cljs.core.PersistentHashMap.fromArrays(inst_77412,inst_77419);
var inst_77421 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77420], 0));
var state_77430__$1 = state_77430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77430__$1,(2),inst_77421);
} else {
if((state_val_77431 === (2))){
var inst_77423 = (state_77430[(2)]);
var inst_77424 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77423);
var inst_77425 = [new cljs.core.Keyword(null,"exchange","exchange",843073210)];
var inst_77426 = ["sushiswap"];
var inst_77427 = cljs.core.PersistentHashMap.fromArrays(inst_77425,inst_77426);
var inst_77428 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_77424,inst_77427);
var state_77430__$1 = state_77430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77430__$1,inst_77428);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_77432 = [null,null,null,null,null,null,null];
(statearr_77432[(0)] = revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__);

(statearr_77432[(1)] = (1));

return statearr_77432;
});
var revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____1 = (function (state_77430){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77430);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77433){var ex__52189__auto__ = e77433;
var statearr_77434_77737 = state_77430;
(statearr_77434_77737[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77430[(4)]))){
var statearr_77435_77738 = state_77430;
(statearr_77435_77738[(1)] = cljs.core.first((state_77430[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77739 = state_77430;
state_77430 = G__77739;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__ = function(state_77430){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____1.call(this,state_77430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77436 = f__52209__auto__();
(statearr_77436[(6)] = c__52208__auto__);

return statearr_77436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_pair_days_uni = (function revert$thegraph$_LT_pair_days_uni(pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77455){
var state_val_77456 = (state_77455[(1)]);
if((state_val_77456 === (1))){
var inst_77437 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77438 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77439 = revert.thegraph.pair_days_query_string(pair_addresses);
var inst_77440 = [inst_77439];
var inst_77441 = cljs.core.PersistentHashMap.fromArrays(inst_77438,inst_77440);
var inst_77442 = cljs.core.clj__GT_js(inst_77441);
var inst_77443 = JSON.stringify(inst_77442);
var inst_77444 = [false,inst_77443];
var inst_77445 = cljs.core.PersistentHashMap.fromArrays(inst_77437,inst_77444);
var inst_77446 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77445], 0));
var state_77455__$1 = state_77455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77455__$1,(2),inst_77446);
} else {
if((state_val_77456 === (2))){
var inst_77448 = (state_77455[(2)]);
var inst_77449 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77448);
var inst_77450 = [new cljs.core.Keyword(null,"exchange","exchange",843073210)];
var inst_77451 = ["uniswap"];
var inst_77452 = cljs.core.PersistentHashMap.fromArrays(inst_77450,inst_77451);
var inst_77453 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_77449,inst_77452);
var state_77455__$1 = state_77455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77455__$1,inst_77453);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_77457 = [null,null,null,null,null,null,null];
(statearr_77457[(0)] = revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__);

(statearr_77457[(1)] = (1));

return statearr_77457;
});
var revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____1 = (function (state_77455){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77455);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77458){var ex__52189__auto__ = e77458;
var statearr_77459_77759 = state_77455;
(statearr_77459_77759[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77455[(4)]))){
var statearr_77460_77760 = state_77455;
(statearr_77460_77760[(1)] = cljs.core.first((state_77455[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77761 = state_77455;
state_77455 = G__77761;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__ = function(state_77455){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____1.call(this,state_77455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77461 = f__52209__auto__();
(statearr_77461[(6)] = c__52208__auto__);

return statearr_77461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
/**
 * Normalizes keys between sushiswan and uniswap
 *   subgraph result keys
 */
revert.thegraph.normalize_volumes = (function revert$thegraph$normalize_volumes(dailys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dailyVolumeToken0","dailyVolumeToken0",193065224),(cljs.core.truth_(new cljs.core.Keyword(null,"volumeToken0","volumeToken0",-1972017992).cljs$core$IFn$_invoke$arity$1(x))?new cljs.core.Keyword(null,"volumeToken0","volumeToken0",-1972017992).cljs$core$IFn$_invoke$arity$1(x):new cljs.core.Keyword(null,"dailyVolumeToken0","dailyVolumeToken0",193065224).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword(null,"dailyVolumeToken1","dailyVolumeToken1",-1512254583),(cljs.core.truth_(new cljs.core.Keyword(null,"volumeToken1","volumeToken1",1876063821).cljs$core$IFn$_invoke$arity$1(x))?new cljs.core.Keyword(null,"volumeToken1","volumeToken1",1876063821).cljs$core$IFn$_invoke$arity$1(x):new cljs.core.Keyword(null,"dailyVolumeToken1","dailyVolumeToken1",-1512254583).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword(null,"dailyVolumeUSD","dailyVolumeUSD",957365427),(cljs.core.truth_(new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963).cljs$core$IFn$_invoke$arity$1(x))?new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963).cljs$core$IFn$_invoke$arity$1(x):new cljs.core.Keyword(null,"dailyVolumeUSD","dailyVolumeUSD",957365427).cljs$core$IFn$_invoke$arity$1(x))], null));
}),dailys);
});
revert.thegraph._LT_pair_days = (function revert$thegraph$_LT_pair_days(var_args){
var args__4742__auto__ = [];
var len__4736__auto___77767 = arguments.length;
var i__4737__auto___77768 = (0);
while(true){
if((i__4737__auto___77768 < len__4736__auto___77767)){
args__4742__auto__.push((arguments[i__4737__auto___77768]));

var G__77769 = (i__4737__auto___77768 + (1));
i__4737__auto___77768 = G__77769;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return revert.thegraph._LT_pair_days.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(revert.thegraph._LT_pair_days.cljs$core$IFn$_invoke$arity$variadic = (function (pair_address,limit,p__77466){
var map__77467 = p__77466;
var map__77467__$1 = (((((!((map__77467 == null))))?(((((map__77467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77467):map__77467);
var retries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77467__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(3));
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77512){
var state_val_77513 = (state_77512[(1)]);
if((state_val_77513 === (7))){
var state_77512__$1 = state_77512;
var statearr_77514_77774 = state_77512__$1;
(statearr_77514_77774[(2)] = "uniswap");

(statearr_77514_77774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (1))){
var inst_77469 = revert.thegraph._LT_pair_days_uni(pair_address);
var state_77512__$1 = state_77512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77512__$1,(2),inst_77469);
} else {
if((state_val_77513 === (4))){
var inst_77478 = revert.thegraph._LT_pair_days_sushi(pair_address);
var state_77512__$1 = state_77512;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77512__$1,(6),inst_77478);
} else {
if((state_val_77513 === (13))){
var inst_77505 = (state_77512[(2)]);
var state_77512__$1 = state_77512;
var statearr_77515_77776 = state_77512__$1;
(statearr_77515_77776[(2)] = inst_77505);

(statearr_77515_77776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (6))){
var inst_77480 = (state_77512[(2)]);
var state_77512__$1 = state_77512;
var statearr_77516_77778 = state_77512__$1;
(statearr_77516_77778[(2)] = inst_77480);

(statearr_77516_77778[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (3))){
var inst_77471 = (state_77512[(7)]);
var state_77512__$1 = state_77512;
var statearr_77517_77779 = state_77512__$1;
(statearr_77517_77779[(2)] = inst_77471);

(statearr_77517_77779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (12))){
var inst_77510 = (state_77512[(2)]);
var state_77512__$1 = state_77512;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77512__$1,inst_77510);
} else {
if((state_val_77513 === (2))){
var inst_77471 = (state_77512[(7)]);
var inst_77471__$1 = (state_77512[(2)]);
var inst_77472 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77471__$1);
var inst_77473 = new cljs.core.Keyword(null,"pairDayDatas","pairDayDatas",1515724059).cljs$core$IFn$_invoke$arity$1(inst_77472);
var inst_77474 = cljs.core.count(inst_77473);
var inst_77475 = (inst_77474 > (0));
var state_77512__$1 = (function (){var statearr_77518 = state_77512;
(statearr_77518[(7)] = inst_77471__$1);

return statearr_77518;
})();
if(cljs.core.truth_(inst_77475)){
var statearr_77519_77782 = state_77512__$1;
(statearr_77519_77782[(1)] = (3));

} else {
var statearr_77520_77783 = state_77512__$1;
(statearr_77520_77783[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (11))){
var inst_77482 = (state_77512[(8)]);
var inst_77471 = (state_77512[(7)]);
var inst_77488 = (state_77512[(9)]);
var inst_77495 = (state_77512[(10)]);
var inst_77507 = (function (){var uni_data = inst_77471;
var pair_data = inst_77482;
var pool_dailys = inst_77488;
var exchange = inst_77495;
return (function (pool){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),new cljs.core.Keyword(null,"token0-name","token0-name",1015863397),new cljs.core.Keyword(null,"token1-decimals","token1-decimals",300738309),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057),new cljs.core.Keyword(null,"token0-address","token0-address",635776650),new cljs.core.Keyword(null,"volume0","volume0",1792479946),new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579),new cljs.core.Keyword(null,"token1-name","token1-name",-103346988),new cljs.core.Keyword(null,"token0-decimals","token0-decimals",1310890041),new cljs.core.Keyword(null,"volume1","volume1",771282330),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),new cljs.core.Keyword(null,"volume-usd","volume-usd",-871740385)],[cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pool),/-/)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(pool),revert.utils.bn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool))),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"dailyVolumeToken0","dailyVolumeToken0",193065224).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool))),revert.utils.bn(new cljs.core.Keyword(null,"dailyVolumeToken1","dailyVolumeToken1",-1512254583).cljs$core$IFn$_invoke$arity$1(pool)),exchange,revert.utils.ts__GT_datetime(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"dailyVolumeUSD","dailyVolumeUSD",957365427).cljs$core$IFn$_invoke$arity$1(pool))]);
});
})();
var inst_77508 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77507,inst_77488);
var state_77512__$1 = state_77512;
var statearr_77521_77787 = state_77512__$1;
(statearr_77521_77787[(2)] = inst_77508);

(statearr_77521_77787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (9))){
var inst_77488 = (state_77512[(9)]);
var inst_77495 = (state_77512[(2)]);
var inst_77496 = cljs.core.count(inst_77488);
var inst_77497 = (inst_77496 === (0));
var inst_77498 = (retries > (0));
var inst_77499 = ((inst_77497) && (inst_77498));
var state_77512__$1 = (function (){var statearr_77522 = state_77512;
(statearr_77522[(10)] = inst_77495);

return statearr_77522;
})();
if(cljs.core.truth_(inst_77499)){
var statearr_77523_77806 = state_77512__$1;
(statearr_77523_77806[(1)] = (10));

} else {
var statearr_77524_77807 = state_77512__$1;
(statearr_77524_77807[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (5))){
var inst_77482 = (state_77512[(8)]);
var inst_77471 = (state_77512[(7)]);
var inst_77488 = (state_77512[(9)]);
var inst_77482__$1 = (state_77512[(2)]);
var inst_77483 = (function (){var uni_data = inst_77471;
var pair_data = inst_77482__$1;
return (function (p1__77462_SHARP_){
return (revert.utils.bn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(p1__77462_SHARP_)) > 0.0);
});
})();
var inst_77484 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77482__$1);
var inst_77485 = new cljs.core.Keyword(null,"pairDayDatas","pairDayDatas",1515724059).cljs$core$IFn$_invoke$arity$1(inst_77484);
var inst_77486 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(inst_77483,inst_77485);
var inst_77487 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,inst_77486);
var inst_77488__$1 = revert.thegraph.normalize_volumes(inst_77487);
var inst_77489 = cljs.core.first(inst_77488__$1);
var inst_77490 = new cljs.core.Keyword(null,"volumeToken0","volumeToken0",-1972017992).cljs$core$IFn$_invoke$arity$1(inst_77489);
var inst_77491 = (inst_77490 == null);
var state_77512__$1 = (function (){var statearr_77525 = state_77512;
(statearr_77525[(8)] = inst_77482__$1);

(statearr_77525[(9)] = inst_77488__$1);

return statearr_77525;
})();
if(cljs.core.truth_(inst_77491)){
var statearr_77526_77838 = state_77512__$1;
(statearr_77526_77838[(1)] = (7));

} else {
var statearr_77527_77839 = state_77512__$1;
(statearr_77527_77839[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77513 === (10))){
var inst_77501 = console.log("Retrying grahp dailys for:",pair_address);
var inst_77502 = (retries - (1));
var inst_77503 = revert.thegraph._LT_pair_days.cljs$core$IFn$_invoke$arity$variadic(pair_address,limit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"retries","retries",1888092808),inst_77502], 0));
var state_77512__$1 = (function (){var statearr_77528 = state_77512;
(statearr_77528[(11)] = inst_77501);

return statearr_77528;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77512__$1,(13),inst_77503);
} else {
if((state_val_77513 === (8))){
var state_77512__$1 = state_77512;
var statearr_77529_77840 = state_77512__$1;
(statearr_77529_77840[(2)] = "sushiswap");

(statearr_77529_77840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var revert$thegraph$state_machine__52186__auto__ = null;
var revert$thegraph$state_machine__52186__auto____0 = (function (){
var statearr_77530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77530[(0)] = revert$thegraph$state_machine__52186__auto__);

(statearr_77530[(1)] = (1));

return statearr_77530;
});
var revert$thegraph$state_machine__52186__auto____1 = (function (state_77512){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77512);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77531){var ex__52189__auto__ = e77531;
var statearr_77532_77843 = state_77512;
(statearr_77532_77843[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77512[(4)]))){
var statearr_77533_77845 = state_77512;
(statearr_77533_77845[(1)] = cljs.core.first((state_77512[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77846 = state_77512;
state_77512 = G__77846;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$state_machine__52186__auto__ = function(state_77512){
switch(arguments.length){
case 0:
return revert$thegraph$state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$state_machine__52186__auto____1.call(this,state_77512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$state_machine__52186__auto____0;
revert$thegraph$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$state_machine__52186__auto____1;
return revert$thegraph$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77534 = f__52209__auto__();
(statearr_77534[(6)] = c__52208__auto__);

return statearr_77534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));

(revert.thegraph._LT_pair_days.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(revert.thegraph._LT_pair_days.cljs$lang$applyTo = (function (seq77463){
var G__77464 = cljs.core.first(seq77463);
var seq77463__$1 = cljs.core.next(seq77463);
var G__77465 = cljs.core.first(seq77463__$1);
var seq77463__$2 = cljs.core.next(seq77463__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77464,G__77465,seq77463__$2);
}));

revert.thegraph._LT_token_days_uni = (function revert$thegraph$_LT_token_days_uni(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77553){
var state_val_77554 = (state_77553[(1)]);
if((state_val_77554 === (1))){
var inst_77535 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77536 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77537 = revert.thegraph.token_days_query_string(token_addresses);
var inst_77538 = [inst_77537];
var inst_77539 = cljs.core.PersistentHashMap.fromArrays(inst_77536,inst_77538);
var inst_77540 = cljs.core.clj__GT_js(inst_77539);
var inst_77541 = JSON.stringify(inst_77540);
var inst_77542 = [false,inst_77541];
var inst_77543 = cljs.core.PersistentHashMap.fromArrays(inst_77535,inst_77542);
var inst_77544 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77543], 0));
var state_77553__$1 = state_77553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77553__$1,(2),inst_77544);
} else {
if((state_val_77554 === (2))){
var inst_77546 = (state_77553[(2)]);
var inst_77547 = (function (){var data = inst_77546;
return (function (t){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"decimals","decimals",1715096484),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t))),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usd","usd",2103592073),revert.utils.bn(new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(t)], null);
});
})();
var inst_77548 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77546);
var inst_77549 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77548);
var inst_77550 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_77549);
var inst_77551 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77547,inst_77550);
var state_77553__$1 = state_77553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77553__$1,inst_77551);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_77555 = [null,null,null,null,null,null,null];
(statearr_77555[(0)] = revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__);

(statearr_77555[(1)] = (1));

return statearr_77555;
});
var revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____1 = (function (state_77553){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77553);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77556){var ex__52189__auto__ = e77556;
var statearr_77557_77857 = state_77553;
(statearr_77557_77857[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77553[(4)]))){
var statearr_77558_77859 = state_77553;
(statearr_77558_77859[(1)] = cljs.core.first((state_77553[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77860 = state_77553;
state_77553 = G__77860;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__ = function(state_77553){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____1.call(this,state_77553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77559 = f__52209__auto__();
(statearr_77559[(6)] = c__52208__auto__);

return statearr_77559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_token_days_sushi = (function revert$thegraph$_LT_token_days_sushi(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77578){
var state_val_77579 = (state_77578[(1)]);
if((state_val_77579 === (1))){
var inst_77560 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77561 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77562 = revert.thegraph.token_days_query_string(token_addresses);
var inst_77563 = [inst_77562];
var inst_77564 = cljs.core.PersistentHashMap.fromArrays(inst_77561,inst_77563);
var inst_77565 = cljs.core.clj__GT_js(inst_77564);
var inst_77566 = JSON.stringify(inst_77565);
var inst_77567 = [false,inst_77566];
var inst_77568 = cljs.core.PersistentHashMap.fromArrays(inst_77560,inst_77567);
var inst_77569 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77568], 0));
var state_77578__$1 = state_77578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77578__$1,(2),inst_77569);
} else {
if((state_val_77579 === (2))){
var inst_77571 = (state_77578[(2)]);
var inst_77572 = (function (){var data = inst_77571;
return (function (t){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"decimals","decimals",1715096484),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t))),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usd","usd",2103592073),revert.utils.bn(new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(t)], null);
});
})();
var inst_77573 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77571);
var inst_77574 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77573);
var inst_77575 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_77574);
var inst_77576 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77572,inst_77575);
var state_77578__$1 = state_77578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77578__$1,inst_77576);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_77580 = [null,null,null,null,null,null,null];
(statearr_77580[(0)] = revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__);

(statearr_77580[(1)] = (1));

return statearr_77580;
});
var revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____1 = (function (state_77578){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77578);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77581){var ex__52189__auto__ = e77581;
var statearr_77582_77872 = state_77578;
(statearr_77582_77872[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77578[(4)]))){
var statearr_77583_77879 = state_77578;
(statearr_77583_77879[(1)] = cljs.core.first((state_77578[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77884 = state_77578;
state_77578 = G__77884;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__ = function(state_77578){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____1.call(this,state_77578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77584 = f__52209__auto__();
(statearr_77584[(6)] = c__52208__auto__);

return statearr_77584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_block_times = (function revert$thegraph$_LT_block_times(block_numbers){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_77604){
var state_val_77605 = (state_77604[(1)]);
if((state_val_77605 === (1))){
var inst_77585 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_77586 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_77587 = revert.thegraph.block_times_query_string(block_numbers);
var inst_77588 = [inst_77587];
var inst_77589 = cljs.core.PersistentHashMap.fromArrays(inst_77586,inst_77588);
var inst_77590 = cljs.core.clj__GT_js(inst_77589);
var inst_77591 = JSON.stringify(inst_77590);
var inst_77592 = [false,inst_77591];
var inst_77593 = cljs.core.PersistentHashMap.fromArrays(inst_77585,inst_77592);
var inst_77594 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.blocks_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_77593], 0));
var state_77604__$1 = state_77604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_77604__$1,(2),inst_77594);
} else {
if((state_val_77605 === (2))){
var inst_77596 = (state_77604[(2)]);
var inst_77597 = (function (){var data = inst_77596;
return (function (p){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([revert.utils.str__GT_int(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(p))]);
});
})();
var inst_77598 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_77596);
var inst_77599 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_77598);
var inst_77600 = new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(inst_77599);
var inst_77601 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_77597,inst_77600);
var inst_77602 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,inst_77601);
var state_77604__$1 = state_77604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_77604__$1,inst_77602);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_block_times_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_block_times_$_state_machine__52186__auto____0 = (function (){
var statearr_77606 = [null,null,null,null,null,null,null];
(statearr_77606[(0)] = revert$thegraph$_LT_block_times_$_state_machine__52186__auto__);

(statearr_77606[(1)] = (1));

return statearr_77606;
});
var revert$thegraph$_LT_block_times_$_state_machine__52186__auto____1 = (function (state_77604){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_77604);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e77607){var ex__52189__auto__ = e77607;
var statearr_77608_77909 = state_77604;
(statearr_77608_77909[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_77604[(4)]))){
var statearr_77609_77912 = state_77604;
(statearr_77609_77912[(1)] = cljs.core.first((state_77604[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77913 = state_77604;
state_77604 = G__77913;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_block_times_$_state_machine__52186__auto__ = function(state_77604){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_block_times_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_block_times_$_state_machine__52186__auto____1.call(this,state_77604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_block_times_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_block_times_$_state_machine__52186__auto____0;
revert$thegraph$_LT_block_times_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_block_times_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_block_times_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_77610 = f__52209__auto__();
(statearr_77610[(6)] = c__52208__auto__);

return statearr_77610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.thegraph.js.map

goog.provide('revert.thegraph');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
revert.thegraph.uni_subgraph_url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
revert.thegraph.sushi_subgraph_url = "https://api.thegraph.com/subgraphs/name/sushiswap/exchange";
revert.thegraph.blocks_subgraph_url = "https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks";
revert.thegraph.univ3_subgraph_url = "https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-subgraph";
revert.thegraph.v3_pool_tokens_query_string = (function revert$thegraph$v3_pool_tokens_query_string(pool_address){
return ["{\n      poolDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {pool: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pool_address),"\"}\n                   first: 1) {\n         id\n         pool {id,\n         token0 {\n             id,\n         },\n         token1 {\n             id,\n\n         }}       }}"].join('');
});
revert.thegraph.v3_pool_days_query_string = (function revert$thegraph$v3_pool_days_query_string(pool_address,token0_address,token1_address){
return ["{\n      poolDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {pool: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pool_address),"\"}\n                   first: 1000) {\n         id\n         date,\n         pool {id,\n         token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         },\n         token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n         }},\n         liquidity,\n         sqrtPrice,\n         token0Price,\n         token1Price,\n         tick,\n         tvlUSD,\n         volumeToken0,\n         volumeToken1\n         volumeUSD,\n         txCount\n       },\n      tokenDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   where: {token_in: [\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token0_address),"\", \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token1_address),"\"]}\n                   first: 1000) {\n    date,\n    token {id},\n    priceUSD\n      }\n   }\n   "].join('');
});
revert.thegraph.v3_mints_query_string = (function revert$thegraph$v3_mints_query_string(account){
return ["{\n  mints(where: {origin:  \"",clojure.string.lower_case(account),"\"}) {\n    id,\n    transaction {\n      id,\n      blockNumber\n    }\n    pool {\n      id,\n      token0 {\n        id,\n        name,\n        symbol,\n        decimals,\n        derivedETH\n      },\n      token1 {\n        id,\n        name,\n        symbol,\n        decimals,\n        derivedETH\n      },\n      feeTier,\n      liquidity,\n      sqrtPrice,\n      tick\n      totalValueLockedToken0,\n      totalValueLockedToken1,\n      totalValueLockedETH,\n      totalValueLockedUSD,\n      liquidityProviderCount,\n    },\n    token0{\n      id\n    },\n    token1 {\n      id\n    },\n    amount,\n    amount0,\n    amount1,\n    amountUSD,\n    tickLower,\n    tickUpper\n  }\n  bundles(first: 5) {\n    id\n    ethPriceUSD\n  }\n}\n"].join('');
});
revert.thegraph.v3_burns_query_string = (function revert$thegraph$v3_burns_query_string(account){
return ["{\n  burns(where: {origin:  \"",clojure.string.lower_case(account),"\"}) {\n    id,\n    transaction {\n      id,\n      blockNumber\n    }\n    pool {\n      id,\n      token0 {\n        id\n      },\n      token1 {\n        id\n      },\n      feeTier,\n      liquidity,\n      sqrtPrice,\n      tick\n      totalValueLockedToken0,\n      totalValueLockedToken1,\n      totalValueLockedETH,\n      totalValueLockedUSD,\n      liquidityProviderCount,\n    },\n    token0{\n      id\n    },\n    token1 {\n      id\n    },\n    amount,\n    amount0,\n    amount1,\n    amountUSD,\n    tickLower,\n    tickUpper\n  }\n  bundles(first: 5) {\n    id\n    ethPriceUSD\n  }\n}\n"].join('');
});
revert.thegraph.snapshot_query_string = (function revert$thegraph$snapshot_query_string(user_address){
return ["{\n      liquidityPositionSnapshots(orderBy: timestamp,\n                                 orderDirection: desc,\n                                 where: {user: \"",clojure.string.lower_case(user_address),"\"}\n                                 first: 1000) {\n      block,\n      timestamp,\n      pair {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n    liquidityTokenBalance,\n    liquidityTokenTotalSupply,\n    token0PriceUSD,\n    token1PriceUSD,\n    reserve0,\n    reserve1,\n    reserveUSD\n    }\n   }"].join('');
});
revert.thegraph.some_pair = "0x0d0d65e7a7db277d3e0f5e1676325e75f3340455";
revert.thegraph.block_times_query_string = (function revert$thegraph$block_times_query_string(block_numbers){
return ["{blocks(where: {number_in: [",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",block_numbers),"]}, first:1000)\n           {number,\n           timestamp}\n        }"].join('');
});
revert.thegraph.positions_query_string = (function revert$thegraph$positions_query_string(user,pairs){
return ["{\n      liquidityPositions( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65699_SHARP_){
return ["\"",clojure.string.lower_case(p1__65699_SHARP_),"-",clojure.string.lower_case(user),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n      id,\n      user,\n      liquidityTokenBalance,\n      pair {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n          reserveUSD,\n          reserveETH,\n          volumeUSD,\n          token0 {\n            id,\n            symbol,\n            name,\n            decimals,\n          }\n          token1 {\n            id,\n            symbol,\n            name,\n            decimals\n\n          }\n     }\n\n    }\n   }"].join('');
});
revert.thegraph.pairs_query_string = (function revert$thegraph$pairs_query_string(pairs){
return ["{\n      pairs( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65700_SHARP_){
return ["\"",clojure.string.lower_case(p1__65700_SHARP_),"\","].join('');
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
return ["{\n      tokenDayDatas(orderBy: date,\n                   orderDirection: desc,\n                   first: 1000,\n                   where: {token_in:[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65701_SHARP_){
return ["\"",clojure.string.lower_case(p1__65701_SHARP_),"\","].join('');
}),token_addresses))),"]}) {\n         id\n         date,\n         token {id, name, symbol, decimals, derivedETH},\n         priceUSD\n       }\n     }\n   "].join('');
});
revert.thegraph._LT_user_lps_uni = (function revert$thegraph$_LT_user_lps_uni(user_address,pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65725){
var state_val_65726 = (state_65725[(1)]);
if((state_val_65726 === (1))){
var inst_65703 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65704 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65705 = revert.thegraph.positions_query_string(user_address,pair_addresses);
var inst_65706 = [inst_65705];
var inst_65707 = cljs.core.PersistentHashMap.fromArrays(inst_65704,inst_65706);
var inst_65708 = cljs.core.clj__GT_js(inst_65707);
var inst_65709 = JSON.stringify(inst_65708);
var inst_65710 = [false,inst_65709];
var inst_65711 = cljs.core.PersistentHashMap.fromArrays(inst_65703,inst_65710);
var inst_65712 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65711], 0));
var state_65725__$1 = state_65725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65725__$1,(2),inst_65712);
} else {
if((state_val_65726 === (2))){
var inst_65714 = (state_65725[(2)]);
var inst_65715 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65714);
var inst_65716 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65715);
var inst_65717 = new cljs.core.Keyword(null,"liquidityPositions","liquidityPositions",589920368).cljs$core$IFn$_invoke$arity$1(inst_65716);
var inst_65718 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65719 = [new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590)];
var inst_65720 = (new cljs.core.PersistentVector(null,1,(5),inst_65718,inst_65719,null));
var inst_65721 = (function (){var data = inst_65714;
var positions = inst_65717;
var keys_numerical_vals = inst_65720;
return (function (p1__65702_SHARP_){
return revert.utils.pu(p1__65702_SHARP_,(0));
});
})();
var inst_65722 = (function (){var data = inst_65714;
var positions = inst_65717;
var keys_numerical_vals = inst_65720;
var num_parse_fn = inst_65721;
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
var inst_65723 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65722,inst_65717);
var state_65725__$1 = state_65725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65725__$1,inst_65723);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_65727 = [null,null,null,null,null,null,null];
(statearr_65727[(0)] = revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__);

(statearr_65727[(1)] = (1));

return statearr_65727;
});
var revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____1 = (function (state_65725){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65725);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65728){var ex__52189__auto__ = e65728;
var statearr_65729_66219 = state_65725;
(statearr_65729_66219[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65725[(4)]))){
var statearr_65730_66220 = state_65725;
(statearr_65730_66220[(1)] = cljs.core.first((state_65725[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66221 = state_65725;
state_65725 = G__66221;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__ = function(state_65725){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____1.call(this,state_65725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lps_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65731 = f__52209__auto__();
(statearr_65731[(6)] = c__52208__auto__);

return statearr_65731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lps_sushi = (function revert$thegraph$_LT_user_lps_sushi(user_address,pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65755){
var state_val_65756 = (state_65755[(1)]);
if((state_val_65756 === (1))){
var inst_65733 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65734 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65735 = revert.thegraph.positions_query_string(user_address,pair_addresses);
var inst_65736 = [inst_65735];
var inst_65737 = cljs.core.PersistentHashMap.fromArrays(inst_65734,inst_65736);
var inst_65738 = cljs.core.clj__GT_js(inst_65737);
var inst_65739 = JSON.stringify(inst_65738);
var inst_65740 = [false,inst_65739];
var inst_65741 = cljs.core.PersistentHashMap.fromArrays(inst_65733,inst_65740);
var inst_65742 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65741], 0));
var state_65755__$1 = state_65755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65755__$1,(2),inst_65742);
} else {
if((state_val_65756 === (2))){
var inst_65744 = (state_65755[(2)]);
var inst_65745 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65744);
var inst_65746 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65745);
var inst_65747 = new cljs.core.Keyword(null,"liquidityPositions","liquidityPositions",589920368).cljs$core$IFn$_invoke$arity$1(inst_65746);
var inst_65748 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65749 = [new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590)];
var inst_65750 = (new cljs.core.PersistentVector(null,1,(5),inst_65748,inst_65749,null));
var inst_65751 = (function (){var data = inst_65744;
var positions = inst_65747;
var keys_numerical_vals = inst_65750;
return (function (p1__65732_SHARP_){
return revert.utils.pu(p1__65732_SHARP_,(0));
});
})();
var inst_65752 = (function (){var data = inst_65744;
var positions = inst_65747;
var keys_numerical_vals = inst_65750;
var num_parse_fn = inst_65751;
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
var inst_65753 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65752,inst_65747);
var state_65755__$1 = state_65755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65755__$1,inst_65753);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_65757 = [null,null,null,null,null,null,null];
(statearr_65757[(0)] = revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__);

(statearr_65757[(1)] = (1));

return statearr_65757;
});
var revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____1 = (function (state_65755){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65755);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65758){var ex__52189__auto__ = e65758;
var statearr_65759_66269 = state_65755;
(statearr_65759_66269[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65755[(4)]))){
var statearr_65760_66270 = state_65755;
(statearr_65760_66270[(1)] = cljs.core.first((state_65755[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66271 = state_65755;
state_65755 = G__66271;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__ = function(state_65755){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____1.call(this,state_65755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lps_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65761 = f__52209__auto__();
(statearr_65761[(6)] = c__52208__auto__);

return statearr_65761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lps = (function revert$thegraph$_LT_user_lps(user_address,pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65770){
var state_val_65771 = (state_65770[(1)]);
if((state_val_65771 === (1))){
var inst_65762 = revert.thegraph._LT_user_lps_uni(user_address,pair_addresses);
var state_65770__$1 = state_65770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65770__$1,(2),inst_65762);
} else {
if((state_val_65771 === (2))){
var inst_65764 = (state_65770[(2)]);
var inst_65765 = revert.thegraph._LT_user_lps_sushi(user_address,pair_addresses);
var state_65770__$1 = (function (){var statearr_65772 = state_65770;
(statearr_65772[(7)] = inst_65764);

return statearr_65772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65770__$1,(3),inst_65765);
} else {
if((state_val_65771 === (3))){
var inst_65764 = (state_65770[(7)]);
var inst_65767 = (state_65770[(2)]);
var inst_65768 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_65764,inst_65767);
var state_65770__$1 = state_65770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65770__$1,inst_65768);
} else {
return null;
}
}
}
});
return (function() {
var revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_65773 = [null,null,null,null,null,null,null,null];
(statearr_65773[(0)] = revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__);

(statearr_65773[(1)] = (1));

return statearr_65773;
});
var revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____1 = (function (state_65770){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65770);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65774){var ex__52189__auto__ = e65774;
var statearr_65775_66279 = state_65770;
(statearr_65775_66279[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65770[(4)]))){
var statearr_65776_66281 = state_65770;
(statearr_65776_66281[(1)] = cljs.core.first((state_65770[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66282 = state_65770;
state_65770 = G__66282;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__ = function(state_65770){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____1.call(this,state_65770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lps_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65777 = f__52209__auto__();
(statearr_65777[(6)] = c__52208__auto__);

return statearr_65777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lp_snapshots_uni = (function revert$thegraph$_LT_user_lp_snapshots_uni(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65798){
var state_val_65799 = (state_65798[(1)]);
if((state_val_65799 === (1))){
var inst_65779 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65780 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65781 = revert.thegraph.snapshot_query_string(user_address);
var inst_65782 = [inst_65781];
var inst_65783 = cljs.core.PersistentHashMap.fromArrays(inst_65780,inst_65782);
var inst_65784 = cljs.core.clj__GT_js(inst_65783);
var inst_65785 = JSON.stringify(inst_65784);
var inst_65786 = [false,inst_65785];
var inst_65787 = cljs.core.PersistentHashMap.fromArrays(inst_65779,inst_65786);
var inst_65788 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65787], 0));
var state_65798__$1 = state_65798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65798__$1,(2),inst_65788);
} else {
if((state_val_65799 === (2))){
var inst_65790 = (state_65798[(2)]);
var inst_65791 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65790);
var inst_65792 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65791);
var inst_65793 = new cljs.core.Keyword(null,"liquidityPositionSnapshots","liquidityPositionSnapshots",679672036).cljs$core$IFn$_invoke$arity$1(inst_65792);
var inst_65794 = (function (){var data = inst_65790;
var positions = inst_65793;
return (function (p1__65778_SHARP_){
return revert.utils.pu(p1__65778_SHARP_,(0));
});
})();
var inst_65795 = (function (){var data = inst_65790;
var positions = inst_65793;
var num_parse_fn = inst_65794;
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
var inst_65796 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65795,inst_65793);
var state_65798__$1 = state_65798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65798__$1,inst_65796);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_65800 = [null,null,null,null,null,null,null];
(statearr_65800[(0)] = revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__);

(statearr_65800[(1)] = (1));

return statearr_65800;
});
var revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____1 = (function (state_65798){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65798);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65801){var ex__52189__auto__ = e65801;
var statearr_65802_66294 = state_65798;
(statearr_65802_66294[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65798[(4)]))){
var statearr_65803_66296 = state_65798;
(statearr_65803_66296[(1)] = cljs.core.first((state_65798[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66298 = state_65798;
state_65798 = G__66298;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__ = function(state_65798){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____1.call(this,state_65798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lp_snapshots_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65804 = f__52209__auto__();
(statearr_65804[(6)] = c__52208__auto__);

return statearr_65804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lp_snapshots_sushi = (function revert$thegraph$_LT_user_lp_snapshots_sushi(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65825){
var state_val_65826 = (state_65825[(1)]);
if((state_val_65826 === (1))){
var inst_65806 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65807 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65808 = revert.thegraph.snapshot_query_string(user_address);
var inst_65809 = [inst_65808];
var inst_65810 = cljs.core.PersistentHashMap.fromArrays(inst_65807,inst_65809);
var inst_65811 = cljs.core.clj__GT_js(inst_65810);
var inst_65812 = JSON.stringify(inst_65811);
var inst_65813 = [false,inst_65812];
var inst_65814 = cljs.core.PersistentHashMap.fromArrays(inst_65806,inst_65813);
var inst_65815 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65814], 0));
var state_65825__$1 = state_65825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65825__$1,(2),inst_65815);
} else {
if((state_val_65826 === (2))){
var inst_65817 = (state_65825[(2)]);
var inst_65818 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65817);
var inst_65819 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65818);
var inst_65820 = new cljs.core.Keyword(null,"liquidityPositionSnapshots","liquidityPositionSnapshots",679672036).cljs$core$IFn$_invoke$arity$1(inst_65819);
var inst_65821 = (function (){var data = inst_65817;
var positions = inst_65820;
return (function (p1__65805_SHARP_){
return revert.utils.pu(p1__65805_SHARP_,(0));
});
})();
var inst_65822 = (function (){var data = inst_65817;
var positions = inst_65820;
var num_parse_fn = inst_65821;
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
var inst_65823 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65822,inst_65820);
var state_65825__$1 = state_65825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65825__$1,inst_65823);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_65827 = [null,null,null,null,null,null,null];
(statearr_65827[(0)] = revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__);

(statearr_65827[(1)] = (1));

return statearr_65827;
});
var revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____1 = (function (state_65825){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65825);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65828){var ex__52189__auto__ = e65828;
var statearr_65829_66302 = state_65825;
(statearr_65829_66302[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65825[(4)]))){
var statearr_65830_66303 = state_65825;
(statearr_65830_66303[(1)] = cljs.core.first((state_65825[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66304 = state_65825;
state_65825 = G__66304;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__ = function(state_65825){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____1.call(this,state_65825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lp_snapshots_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65831 = f__52209__auto__();
(statearr_65831[(6)] = c__52208__auto__);

return statearr_65831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_lp_snapshots = (function revert$thegraph$_LT_user_lp_snapshots(user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65840){
var state_val_65841 = (state_65840[(1)]);
if((state_val_65841 === (1))){
var inst_65832 = revert.thegraph._LT_user_lp_snapshots_uni(user_address);
var state_65840__$1 = state_65840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65840__$1,(2),inst_65832);
} else {
if((state_val_65841 === (2))){
var inst_65834 = (state_65840[(2)]);
var inst_65835 = revert.thegraph._LT_user_lp_snapshots_sushi(user_address);
var state_65840__$1 = (function (){var statearr_65842 = state_65840;
(statearr_65842[(7)] = inst_65834);

return statearr_65842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65840__$1,(3),inst_65835);
} else {
if((state_val_65841 === (3))){
var inst_65834 = (state_65840[(7)]);
var inst_65837 = (state_65840[(2)]);
var inst_65838 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_65834,inst_65837);
var state_65840__$1 = state_65840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65840__$1,inst_65838);
} else {
return null;
}
}
}
});
return (function() {
var revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____0 = (function (){
var statearr_65843 = [null,null,null,null,null,null,null,null];
(statearr_65843[(0)] = revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__);

(statearr_65843[(1)] = (1));

return statearr_65843;
});
var revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____1 = (function (state_65840){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65840);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65844){var ex__52189__auto__ = e65844;
var statearr_65845_66305 = state_65840;
(statearr_65845_66305[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65840[(4)]))){
var statearr_65846_66306 = state_65840;
(statearr_65846_66306[(1)] = cljs.core.first((state_65840[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66307 = state_65840;
state_65840 = G__66307;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__ = function(state_65840){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____1.call(this,state_65840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_lp_snapshots_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65847 = f__52209__auto__();
(statearr_65847[(6)] = c__52208__auto__);

return statearr_65847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_pairs_info = (function revert$thegraph$_LT_pairs_info(pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65862){
var state_val_65863 = (state_65862[(1)]);
if((state_val_65863 === (1))){
var inst_65848 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65849 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65850 = revert.thegraph.pairs_query_string(pair_addresses);
var inst_65851 = [inst_65850];
var inst_65852 = cljs.core.PersistentHashMap.fromArrays(inst_65849,inst_65851);
var inst_65853 = cljs.core.clj__GT_js(inst_65852);
var inst_65854 = JSON.stringify(inst_65853);
var inst_65855 = [false,inst_65854];
var inst_65856 = cljs.core.PersistentHashMap.fromArrays(inst_65848,inst_65855);
var inst_65857 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65856], 0));
var state_65862__$1 = state_65862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65862__$1,(2),inst_65857);
} else {
if((state_val_65863 === (2))){
var inst_65859 = (state_65862[(2)]);
var inst_65860 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65859);
var state_65862__$1 = state_65862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65862__$1,inst_65860);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____0 = (function (){
var statearr_65864 = [null,null,null,null,null,null,null];
(statearr_65864[(0)] = revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__);

(statearr_65864[(1)] = (1));

return statearr_65864;
});
var revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____1 = (function (state_65862){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65862);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65865){var ex__52189__auto__ = e65865;
var statearr_65866_66327 = state_65862;
(statearr_65866_66327[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65862[(4)]))){
var statearr_65867_66329 = state_65862;
(statearr_65867_66329[(1)] = cljs.core.first((state_65862[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66331 = state_65862;
state_65862 = G__66331;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__ = function(state_65862){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____1.call(this,state_65862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____0;
revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_pairs_info_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65868 = f__52209__auto__();
(statearr_65868[(6)] = c__52208__auto__);

return statearr_65868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_user_mints = (function revert$thegraph$_LT_user_mints(user_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65883){
var state_val_65884 = (state_65883[(1)]);
if((state_val_65884 === (1))){
var inst_65869 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65870 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65871 = revert.thegraph.mints_query_string(user_addresses);
var inst_65872 = [inst_65871];
var inst_65873 = cljs.core.PersistentHashMap.fromArrays(inst_65870,inst_65872);
var inst_65874 = cljs.core.clj__GT_js(inst_65873);
var inst_65875 = JSON.stringify(inst_65874);
var inst_65876 = [false,inst_65875];
var inst_65877 = cljs.core.PersistentHashMap.fromArrays(inst_65869,inst_65876);
var inst_65878 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65877], 0));
var state_65883__$1 = state_65883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65883__$1,(2),inst_65878);
} else {
if((state_val_65884 === (2))){
var inst_65880 = (state_65883[(2)]);
var inst_65881 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65880);
var state_65883__$1 = state_65883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65883__$1,inst_65881);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_65885 = [null,null,null,null,null,null,null];
(statearr_65885[(0)] = revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__);

(statearr_65885[(1)] = (1));

return statearr_65885;
});
var revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____1 = (function (state_65883){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65883);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65886){var ex__52189__auto__ = e65886;
var statearr_65887_66339 = state_65883;
(statearr_65887_66339[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65883[(4)]))){
var statearr_65888_66340 = state_65883;
(statearr_65888_66340[(1)] = cljs.core.first((state_65883[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66341 = state_65883;
state_65883 = G__66341;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__ = function(state_65883){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____1.call(this,state_65883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____0;
revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_user_mints_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_user_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65889 = f__52209__auto__();
(statearr_65889[(6)] = c__52208__auto__);

return statearr_65889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_pair_days_sushi = (function revert$thegraph$_LT_pair_days_sushi(pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65908){
var state_val_65909 = (state_65908[(1)]);
if((state_val_65909 === (1))){
var inst_65890 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65891 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65892 = revert.thegraph.pair_days_query_string_sushi(pair_addresses);
var inst_65893 = [inst_65892];
var inst_65894 = cljs.core.PersistentHashMap.fromArrays(inst_65891,inst_65893);
var inst_65895 = cljs.core.clj__GT_js(inst_65894);
var inst_65896 = JSON.stringify(inst_65895);
var inst_65897 = [false,inst_65896];
var inst_65898 = cljs.core.PersistentHashMap.fromArrays(inst_65890,inst_65897);
var inst_65899 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65898], 0));
var state_65908__$1 = state_65908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65908__$1,(2),inst_65899);
} else {
if((state_val_65909 === (2))){
var inst_65901 = (state_65908[(2)]);
var inst_65902 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65901);
var inst_65903 = [new cljs.core.Keyword(null,"exchange","exchange",843073210)];
var inst_65904 = ["sushiswap"];
var inst_65905 = cljs.core.PersistentHashMap.fromArrays(inst_65903,inst_65904);
var inst_65906 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_65902,inst_65905);
var state_65908__$1 = state_65908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65908__$1,inst_65906);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_65910 = [null,null,null,null,null,null,null];
(statearr_65910[(0)] = revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__);

(statearr_65910[(1)] = (1));

return statearr_65910;
});
var revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____1 = (function (state_65908){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65908);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65911){var ex__52189__auto__ = e65911;
var statearr_65912_66343 = state_65908;
(statearr_65912_66343[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65908[(4)]))){
var statearr_65913_66344 = state_65908;
(statearr_65913_66344[(1)] = cljs.core.first((state_65908[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66347 = state_65908;
state_65908 = G__66347;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__ = function(state_65908){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____1.call(this,state_65908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_pair_days_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65914 = f__52209__auto__();
(statearr_65914[(6)] = c__52208__auto__);

return statearr_65914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_pair_days_uni = (function revert$thegraph$_LT_pair_days_uni(pair_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65933){
var state_val_65934 = (state_65933[(1)]);
if((state_val_65934 === (1))){
var inst_65915 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_65916 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_65917 = revert.thegraph.pair_days_query_string(pair_addresses);
var inst_65918 = [inst_65917];
var inst_65919 = cljs.core.PersistentHashMap.fromArrays(inst_65916,inst_65918);
var inst_65920 = cljs.core.clj__GT_js(inst_65919);
var inst_65921 = JSON.stringify(inst_65920);
var inst_65922 = [false,inst_65921];
var inst_65923 = cljs.core.PersistentHashMap.fromArrays(inst_65915,inst_65922);
var inst_65924 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_65923], 0));
var state_65933__$1 = state_65933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65933__$1,(2),inst_65924);
} else {
if((state_val_65934 === (2))){
var inst_65926 = (state_65933[(2)]);
var inst_65927 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_65926);
var inst_65928 = [new cljs.core.Keyword(null,"exchange","exchange",843073210)];
var inst_65929 = ["uniswap"];
var inst_65930 = cljs.core.PersistentHashMap.fromArrays(inst_65928,inst_65929);
var inst_65931 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_65927,inst_65930);
var state_65933__$1 = state_65933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65933__$1,inst_65931);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_65935 = [null,null,null,null,null,null,null];
(statearr_65935[(0)] = revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__);

(statearr_65935[(1)] = (1));

return statearr_65935;
});
var revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____1 = (function (state_65933){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65933);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e65936){var ex__52189__auto__ = e65936;
var statearr_65937_66348 = state_65933;
(statearr_65937_66348[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65933[(4)]))){
var statearr_65938_66349 = state_65933;
(statearr_65938_66349[(1)] = cljs.core.first((state_65933[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66350 = state_65933;
state_65933 = G__66350;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__ = function(state_65933){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____1.call(this,state_65933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_pair_days_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_65939 = f__52209__auto__();
(statearr_65939[(6)] = c__52208__auto__);

return statearr_65939;
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
var len__4736__auto___66362 = arguments.length;
var i__4737__auto___66368 = (0);
while(true){
if((i__4737__auto___66368 < len__4736__auto___66362)){
args__4742__auto__.push((arguments[i__4737__auto___66368]));

var G__66372 = (i__4737__auto___66368 + (1));
i__4737__auto___66368 = G__66372;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return revert.thegraph._LT_pair_days.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(revert.thegraph._LT_pair_days.cljs$core$IFn$_invoke$arity$variadic = (function (pair_address,limit,p__65944){
var map__65945 = p__65944;
var map__65945__$1 = (((((!((map__65945 == null))))?(((((map__65945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65945):map__65945);
var retries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65945__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(3));
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_65990){
var state_val_65991 = (state_65990[(1)]);
if((state_val_65991 === (7))){
var state_65990__$1 = state_65990;
var statearr_65992_66373 = state_65990__$1;
(statearr_65992_66373[(2)] = "uniswap");

(statearr_65992_66373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (1))){
var inst_65947 = revert.thegraph._LT_pair_days_uni(pair_address);
var state_65990__$1 = state_65990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65990__$1,(2),inst_65947);
} else {
if((state_val_65991 === (4))){
var inst_65956 = revert.thegraph._LT_pair_days_sushi(pair_address);
var state_65990__$1 = state_65990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65990__$1,(6),inst_65956);
} else {
if((state_val_65991 === (13))){
var inst_65983 = (state_65990[(2)]);
var state_65990__$1 = state_65990;
var statearr_65993_66377 = state_65990__$1;
(statearr_65993_66377[(2)] = inst_65983);

(statearr_65993_66377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (6))){
var inst_65958 = (state_65990[(2)]);
var state_65990__$1 = state_65990;
var statearr_65994_66379 = state_65990__$1;
(statearr_65994_66379[(2)] = inst_65958);

(statearr_65994_66379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (3))){
var inst_65949 = (state_65990[(7)]);
var state_65990__$1 = state_65990;
var statearr_65995_66381 = state_65990__$1;
(statearr_65995_66381[(2)] = inst_65949);

(statearr_65995_66381[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (12))){
var inst_65988 = (state_65990[(2)]);
var state_65990__$1 = state_65990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65990__$1,inst_65988);
} else {
if((state_val_65991 === (2))){
var inst_65949 = (state_65990[(7)]);
var inst_65949__$1 = (state_65990[(2)]);
var inst_65950 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65949__$1);
var inst_65951 = new cljs.core.Keyword(null,"pairDayDatas","pairDayDatas",1515724059).cljs$core$IFn$_invoke$arity$1(inst_65950);
var inst_65952 = cljs.core.count(inst_65951);
var inst_65953 = (inst_65952 > (0));
var state_65990__$1 = (function (){var statearr_65996 = state_65990;
(statearr_65996[(7)] = inst_65949__$1);

return statearr_65996;
})();
if(cljs.core.truth_(inst_65953)){
var statearr_65997_66383 = state_65990__$1;
(statearr_65997_66383[(1)] = (3));

} else {
var statearr_65998_66385 = state_65990__$1;
(statearr_65998_66385[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (11))){
var inst_65966 = (state_65990[(8)]);
var inst_65973 = (state_65990[(9)]);
var inst_65949 = (state_65990[(7)]);
var inst_65960 = (state_65990[(10)]);
var inst_65985 = (function (){var uni_data = inst_65949;
var pair_data = inst_65960;
var pool_dailys = inst_65966;
var exchange = inst_65973;
return (function (pool){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),new cljs.core.Keyword(null,"token0-name","token0-name",1015863397),new cljs.core.Keyword(null,"token1-decimals","token1-decimals",300738309),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057),new cljs.core.Keyword(null,"token0-address","token0-address",635776650),new cljs.core.Keyword(null,"volume0","volume0",1792479946),new cljs.core.Keyword(null,"reserve-usd","reserve-usd",690317745),new cljs.core.Keyword(null,"total-supply","total-supply",1447638579),new cljs.core.Keyword(null,"token1-name","token1-name",-103346988),new cljs.core.Keyword(null,"token0-decimals","token0-decimals",1310890041),new cljs.core.Keyword(null,"volume1","volume1",771282330),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),new cljs.core.Keyword(null,"volume-usd","volume-usd",-871740385)],[cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pool),/-/)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(pool),revert.utils.bn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool))),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"dailyVolumeToken0","dailyVolumeToken0",193065224).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pool))),revert.utils.bn(new cljs.core.Keyword(null,"dailyVolumeToken1","dailyVolumeToken1",-1512254583).cljs$core$IFn$_invoke$arity$1(pool)),exchange,revert.utils.ts__GT_datetime(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(pool)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pool)),revert.utils.bn(new cljs.core.Keyword(null,"dailyVolumeUSD","dailyVolumeUSD",957365427).cljs$core$IFn$_invoke$arity$1(pool))]);
});
})();
var inst_65986 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_65985,inst_65966);
var state_65990__$1 = state_65990;
var statearr_65999_66391 = state_65990__$1;
(statearr_65999_66391[(2)] = inst_65986);

(statearr_65999_66391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (9))){
var inst_65966 = (state_65990[(8)]);
var inst_65973 = (state_65990[(2)]);
var inst_65974 = cljs.core.count(inst_65966);
var inst_65975 = (inst_65974 === (0));
var inst_65976 = (retries > (0));
var inst_65977 = ((inst_65975) && (inst_65976));
var state_65990__$1 = (function (){var statearr_66000 = state_65990;
(statearr_66000[(9)] = inst_65973);

return statearr_66000;
})();
if(cljs.core.truth_(inst_65977)){
var statearr_66001_66393 = state_65990__$1;
(statearr_66001_66393[(1)] = (10));

} else {
var statearr_66002_66394 = state_65990__$1;
(statearr_66002_66394[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (5))){
var inst_65966 = (state_65990[(8)]);
var inst_65949 = (state_65990[(7)]);
var inst_65960 = (state_65990[(10)]);
var inst_65960__$1 = (state_65990[(2)]);
var inst_65961 = (function (){var uni_data = inst_65949;
var pair_data = inst_65960__$1;
return (function (p1__65940_SHARP_){
return (revert.utils.bn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(p1__65940_SHARP_)) > 0.0);
});
})();
var inst_65962 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_65960__$1);
var inst_65963 = new cljs.core.Keyword(null,"pairDayDatas","pairDayDatas",1515724059).cljs$core$IFn$_invoke$arity$1(inst_65962);
var inst_65964 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(inst_65961,inst_65963);
var inst_65965 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit,inst_65964);
var inst_65966__$1 = revert.thegraph.normalize_volumes(inst_65965);
var inst_65967 = cljs.core.first(inst_65966__$1);
var inst_65968 = new cljs.core.Keyword(null,"volumeToken0","volumeToken0",-1972017992).cljs$core$IFn$_invoke$arity$1(inst_65967);
var inst_65969 = (inst_65968 == null);
var state_65990__$1 = (function (){var statearr_66003 = state_65990;
(statearr_66003[(8)] = inst_65966__$1);

(statearr_66003[(10)] = inst_65960__$1);

return statearr_66003;
})();
if(cljs.core.truth_(inst_65969)){
var statearr_66004_66395 = state_65990__$1;
(statearr_66004_66395[(1)] = (7));

} else {
var statearr_66005_66396 = state_65990__$1;
(statearr_66005_66396[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65991 === (10))){
var inst_65979 = console.log("Retrying grahp dailys for:",pair_address);
var inst_65980 = (retries - (1));
var inst_65981 = revert.thegraph._LT_pair_days.cljs$core$IFn$_invoke$arity$variadic(pair_address,limit,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"retries","retries",1888092808),inst_65980], 0));
var state_65990__$1 = (function (){var statearr_66006 = state_65990;
(statearr_66006[(11)] = inst_65979);

return statearr_66006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65990__$1,(13),inst_65981);
} else {
if((state_val_65991 === (8))){
var state_65990__$1 = state_65990;
var statearr_66007_66397 = state_65990__$1;
(statearr_66007_66397[(2)] = "sushiswap");

(statearr_66007_66397[(1)] = (9));


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
var statearr_66008 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66008[(0)] = revert$thegraph$state_machine__52186__auto__);

(statearr_66008[(1)] = (1));

return statearr_66008;
});
var revert$thegraph$state_machine__52186__auto____1 = (function (state_65990){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_65990);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66009){var ex__52189__auto__ = e66009;
var statearr_66010_66398 = state_65990;
(statearr_66010_66398[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_65990[(4)]))){
var statearr_66011_66400 = state_65990;
(statearr_66011_66400[(1)] = cljs.core.first((state_65990[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66402 = state_65990;
state_65990 = G__66402;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$state_machine__52186__auto__ = function(state_65990){
switch(arguments.length){
case 0:
return revert$thegraph$state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$state_machine__52186__auto____1.call(this,state_65990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$state_machine__52186__auto____0;
revert$thegraph$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$state_machine__52186__auto____1;
return revert$thegraph$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66012 = f__52209__auto__();
(statearr_66012[(6)] = c__52208__auto__);

return statearr_66012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));

(revert.thegraph._LT_pair_days.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(revert.thegraph._LT_pair_days.cljs$lang$applyTo = (function (seq65941){
var G__65942 = cljs.core.first(seq65941);
var seq65941__$1 = cljs.core.next(seq65941);
var G__65943 = cljs.core.first(seq65941__$1);
var seq65941__$2 = cljs.core.next(seq65941__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65942,G__65943,seq65941__$2);
}));

revert.thegraph._LT_token_days_uni = (function revert$thegraph$_LT_token_days_uni(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66031){
var state_val_66032 = (state_66031[(1)]);
if((state_val_66032 === (1))){
var inst_66013 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66014 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66015 = revert.thegraph.token_days_query_string(token_addresses);
var inst_66016 = [inst_66015];
var inst_66017 = cljs.core.PersistentHashMap.fromArrays(inst_66014,inst_66016);
var inst_66018 = cljs.core.clj__GT_js(inst_66017);
var inst_66019 = JSON.stringify(inst_66018);
var inst_66020 = [false,inst_66019];
var inst_66021 = cljs.core.PersistentHashMap.fromArrays(inst_66013,inst_66020);
var inst_66022 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66021], 0));
var state_66031__$1 = state_66031;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66031__$1,(2),inst_66022);
} else {
if((state_val_66032 === (2))){
var inst_66024 = (state_66031[(2)]);
var inst_66025 = (function (){var data = inst_66024;
return (function (t){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"decimals","decimals",1715096484),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t))),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usd","usd",2103592073),revert.utils.bn(new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(t)], null);
});
})();
var inst_66026 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66024);
var inst_66027 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_66026);
var inst_66028 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_66027);
var inst_66029 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66025,inst_66028);
var state_66031__$1 = state_66031;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66031__$1,inst_66029);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____0 = (function (){
var statearr_66033 = [null,null,null,null,null,null,null];
(statearr_66033[(0)] = revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__);

(statearr_66033[(1)] = (1));

return statearr_66033;
});
var revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____1 = (function (state_66031){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66031);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66034){var ex__52189__auto__ = e66034;
var statearr_66035_66454 = state_66031;
(statearr_66035_66454[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66031[(4)]))){
var statearr_66036_66455 = state_66031;
(statearr_66036_66455[(1)] = cljs.core.first((state_66031[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66457 = state_66031;
state_66031 = G__66457;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__ = function(state_66031){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____1.call(this,state_66031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____0;
revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_token_days_uni_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66037 = f__52209__auto__();
(statearr_66037[(6)] = c__52208__auto__);

return statearr_66037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_token_days_sushi = (function revert$thegraph$_LT_token_days_sushi(token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66056){
var state_val_66057 = (state_66056[(1)]);
if((state_val_66057 === (1))){
var inst_66038 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66039 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66040 = revert.thegraph.token_days_query_string(token_addresses);
var inst_66041 = [inst_66040];
var inst_66042 = cljs.core.PersistentHashMap.fromArrays(inst_66039,inst_66041);
var inst_66043 = cljs.core.clj__GT_js(inst_66042);
var inst_66044 = JSON.stringify(inst_66043);
var inst_66045 = [false,inst_66044];
var inst_66046 = cljs.core.PersistentHashMap.fromArrays(inst_66038,inst_66045);
var inst_66047 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.sushi_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66046], 0));
var state_66056__$1 = state_66056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66056__$1,(2),inst_66047);
} else {
if((state_val_66057 === (2))){
var inst_66049 = (state_66056[(2)]);
var inst_66050 = (function (){var data = inst_66049;
return (function (t){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t)),new cljs.core.Keyword(null,"decimals","decimals",1715096484),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(t))),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"usd","usd",2103592073),revert.utils.bn(new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(t))], null),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(t)], null);
});
})();
var inst_66051 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66049);
var inst_66052 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_66051);
var inst_66053 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_66052);
var inst_66054 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66050,inst_66053);
var state_66056__$1 = state_66056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66056__$1,inst_66054);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____0 = (function (){
var statearr_66058 = [null,null,null,null,null,null,null];
(statearr_66058[(0)] = revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__);

(statearr_66058[(1)] = (1));

return statearr_66058;
});
var revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____1 = (function (state_66056){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66056);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66059){var ex__52189__auto__ = e66059;
var statearr_66060_66465 = state_66056;
(statearr_66060_66465[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66056[(4)]))){
var statearr_66061_66467 = state_66056;
(statearr_66061_66467[(1)] = cljs.core.first((state_66056[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66468 = state_66056;
state_66056 = G__66468;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__ = function(state_66056){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____1.call(this,state_66056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____0;
revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_token_days_sushi_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66062 = f__52209__auto__();
(statearr_66062[(6)] = c__52208__auto__);

return statearr_66062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_block_times = (function revert$thegraph$_LT_block_times(block_numbers){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66082){
var state_val_66083 = (state_66082[(1)]);
if((state_val_66083 === (1))){
var inst_66063 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66064 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66065 = revert.thegraph.block_times_query_string(block_numbers);
var inst_66066 = [inst_66065];
var inst_66067 = cljs.core.PersistentHashMap.fromArrays(inst_66064,inst_66066);
var inst_66068 = cljs.core.clj__GT_js(inst_66067);
var inst_66069 = JSON.stringify(inst_66068);
var inst_66070 = [false,inst_66069];
var inst_66071 = cljs.core.PersistentHashMap.fromArrays(inst_66063,inst_66070);
var inst_66072 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.blocks_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66071], 0));
var state_66082__$1 = state_66082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66082__$1,(2),inst_66072);
} else {
if((state_val_66083 === (2))){
var inst_66074 = (state_66082[(2)]);
var inst_66075 = (function (){var data = inst_66074;
return (function (p){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([revert.utils.str__GT_int(new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(p)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(p))]);
});
})();
var inst_66076 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66074);
var inst_66077 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_66076);
var inst_66078 = new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(inst_66077);
var inst_66079 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66075,inst_66078);
var inst_66080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,inst_66079);
var state_66082__$1 = state_66082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66082__$1,inst_66080);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_block_times_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_block_times_$_state_machine__52186__auto____0 = (function (){
var statearr_66084 = [null,null,null,null,null,null,null];
(statearr_66084[(0)] = revert$thegraph$_LT_block_times_$_state_machine__52186__auto__);

(statearr_66084[(1)] = (1));

return statearr_66084;
});
var revert$thegraph$_LT_block_times_$_state_machine__52186__auto____1 = (function (state_66082){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66082);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66085){var ex__52189__auto__ = e66085;
var statearr_66086_66477 = state_66082;
(statearr_66086_66477[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66082[(4)]))){
var statearr_66087_66479 = state_66082;
(statearr_66087_66479[(1)] = cljs.core.first((state_66082[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66482 = state_66082;
state_66082 = G__66482;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_block_times_$_state_machine__52186__auto__ = function(state_66082){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_block_times_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_block_times_$_state_machine__52186__auto____1.call(this,state_66082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_block_times_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_block_times_$_state_machine__52186__auto____0;
revert$thegraph$_LT_block_times_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_block_times_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_block_times_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66088 = f__52209__auto__();
(statearr_66088[(6)] = c__52208__auto__);

return statearr_66088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_v3_user_mints = (function revert$thegraph$_LT_v3_user_mints(user_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66103){
var state_val_66104 = (state_66103[(1)]);
if((state_val_66104 === (1))){
var inst_66089 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66090 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66091 = revert.thegraph.v3_mints_query_string(user_addresses);
var inst_66092 = [inst_66091];
var inst_66093 = cljs.core.PersistentHashMap.fromArrays(inst_66090,inst_66092);
var inst_66094 = cljs.core.clj__GT_js(inst_66093);
var inst_66095 = JSON.stringify(inst_66094);
var inst_66096 = [false,inst_66095];
var inst_66097 = cljs.core.PersistentHashMap.fromArrays(inst_66089,inst_66096);
var inst_66098 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.univ3_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66097], 0));
var state_66103__$1 = state_66103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66103__$1,(2),inst_66098);
} else {
if((state_val_66104 === (2))){
var inst_66100 = (state_66103[(2)]);
var inst_66101 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66100);
var state_66103__$1 = state_66103;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66103__$1,inst_66101);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto____0 = (function (){
var statearr_66105 = [null,null,null,null,null,null,null];
(statearr_66105[(0)] = revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto__);

(statearr_66105[(1)] = (1));

return statearr_66105;
});
var revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto____1 = (function (state_66103){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66103);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66106){var ex__52189__auto__ = e66106;
var statearr_66107_66510 = state_66103;
(statearr_66107_66510[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66103[(4)]))){
var statearr_66108_66513 = state_66103;
(statearr_66108_66513[(1)] = cljs.core.first((state_66103[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66514 = state_66103;
state_66103 = G__66514;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto__ = function(state_66103){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto____1.call(this,state_66103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto____0;
revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_v3_user_mints_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66109 = f__52209__auto__();
(statearr_66109[(6)] = c__52208__auto__);

return statearr_66109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_v3_user_burns = (function revert$thegraph$_LT_v3_user_burns(user_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66124){
var state_val_66125 = (state_66124[(1)]);
if((state_val_66125 === (1))){
var inst_66110 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66111 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66112 = revert.thegraph.v3_burns_query_string(user_addresses);
var inst_66113 = [inst_66112];
var inst_66114 = cljs.core.PersistentHashMap.fromArrays(inst_66111,inst_66113);
var inst_66115 = cljs.core.clj__GT_js(inst_66114);
var inst_66116 = JSON.stringify(inst_66115);
var inst_66117 = [false,inst_66116];
var inst_66118 = cljs.core.PersistentHashMap.fromArrays(inst_66110,inst_66117);
var inst_66119 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.univ3_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66118], 0));
var state_66124__$1 = state_66124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66124__$1,(2),inst_66119);
} else {
if((state_val_66125 === (2))){
var inst_66121 = (state_66124[(2)]);
var inst_66122 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66121);
var state_66124__$1 = state_66124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66124__$1,inst_66122);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto____0 = (function (){
var statearr_66126 = [null,null,null,null,null,null,null];
(statearr_66126[(0)] = revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto__);

(statearr_66126[(1)] = (1));

return statearr_66126;
});
var revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto____1 = (function (state_66124){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66124);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66127){var ex__52189__auto__ = e66127;
var statearr_66128_66521 = state_66124;
(statearr_66128_66521[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66124[(4)]))){
var statearr_66129_66524 = state_66124;
(statearr_66129_66524[(1)] = cljs.core.first((state_66124[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66525 = state_66124;
state_66124 = G__66525;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto__ = function(state_66124){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto____1.call(this,state_66124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto____0;
revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_v3_user_burns_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66130 = f__52209__auto__();
(statearr_66130[(6)] = c__52208__auto__);

return statearr_66130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.thegraph._LT_v3_pool_days = (function revert$thegraph$_LT_v3_pool_days(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66528 = arguments.length;
var i__4737__auto___66529 = (0);
while(true){
if((i__4737__auto___66529 < len__4736__auto___66528)){
args__4742__auto__.push((arguments[i__4737__auto___66529]));

var G__66530 = (i__4737__auto___66529 + (1));
i__4737__auto___66529 = G__66530;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return revert.thegraph._LT_v3_pool_days.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(revert.thegraph._LT_v3_pool_days.cljs$core$IFn$_invoke$arity$variadic = (function (pool_address,token0_address,token1_address,p__66135){
var map__66136 = p__66135;
var map__66136__$1 = (((((!((map__66136 == null))))?(((((map__66136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66136):map__66136);
var retries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66136__$1,new cljs.core.Keyword(null,"retries","retries",1888092808),(3));
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66176){
var state_val_66177 = (state_66176[(1)]);
if((state_val_66177 === (1))){
var inst_66139 = (state_66176[(7)]);
var inst_66138 = (state_66176[(8)]);
var inst_66140 = (state_66176[(9)]);
var inst_66138__$1 = clojure.string.lower_case(pool_address);
var inst_66139__$1 = clojure.string.lower_case(token0_address);
var inst_66140__$1 = clojure.string.lower_case(token1_address);
var inst_66141 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66142 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66143 = revert.thegraph.v3_pool_days_query_string(inst_66138__$1,inst_66139__$1,inst_66140__$1);
var inst_66144 = [inst_66143];
var inst_66145 = cljs.core.PersistentHashMap.fromArrays(inst_66142,inst_66144);
var inst_66146 = cljs.core.clj__GT_js(inst_66145);
var inst_66147 = JSON.stringify(inst_66146);
var inst_66148 = [false,inst_66147];
var inst_66149 = cljs.core.PersistentHashMap.fromArrays(inst_66141,inst_66148);
var inst_66150 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.univ3_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66149], 0));
var state_66176__$1 = (function (){var statearr_66178 = state_66176;
(statearr_66178[(7)] = inst_66139__$1);

(statearr_66178[(8)] = inst_66138__$1);

(statearr_66178[(9)] = inst_66140__$1);

return statearr_66178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66176__$1,(2),inst_66150);
} else {
if((state_val_66177 === (2))){
var inst_66139 = (state_66176[(7)]);
var inst_66138 = (state_66176[(8)]);
var inst_66140 = (state_66176[(9)]);
var inst_66154 = (state_66176[(10)]);
var inst_66159 = (state_66176[(11)]);
var inst_66152 = (state_66176[(12)]);
var inst_66152__$1 = (state_66176[(2)]);
var inst_66153 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66152__$1);
var inst_66154__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_66153);
var inst_66155 = (function (){var pool_address__$1 = inst_66138;
var token0_address__$1 = inst_66139;
var token1_address__$1 = inst_66140;
var data = inst_66152__$1;
var resp = inst_66154__$1;
return (function (x){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([clojure.string.lower_case(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x))),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"priceUSD","priceUSD",-1334063672).cljs$core$IFn$_invoke$arity$1(x)])]);
});
})();
var inst_66156 = new cljs.core.Keyword(null,"tokenDayDatas","tokenDayDatas",-1316618186).cljs$core$IFn$_invoke$arity$1(inst_66154__$1);
var inst_66157 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66155,inst_66156);
var inst_66158 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(revert.utils.deep_merge,inst_66157);
var inst_66159__$1 = new cljs.core.Keyword(null,"poolDayDatas","poolDayDatas",1159773980).cljs$core$IFn$_invoke$arity$1(inst_66154__$1);
var inst_66160 = cljs.core.count(inst_66159__$1);
var inst_66161 = (inst_66160 === (0));
var inst_66162 = (retries > (0));
var inst_66163 = ((inst_66161) && (inst_66162));
var state_66176__$1 = (function (){var statearr_66179 = state_66176;
(statearr_66179[(13)] = inst_66158);

(statearr_66179[(10)] = inst_66154__$1);

(statearr_66179[(11)] = inst_66159__$1);

(statearr_66179[(12)] = inst_66152__$1);

return statearr_66179;
})();
if(cljs.core.truth_(inst_66163)){
var statearr_66180_66542 = state_66176__$1;
(statearr_66180_66542[(1)] = (3));

} else {
var statearr_66181_66543 = state_66176__$1;
(statearr_66181_66543[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66177 === (3))){
var inst_66139 = (state_66176[(7)]);
var inst_66138 = (state_66176[(8)]);
var inst_66140 = (state_66176[(9)]);
var inst_66165 = console.log("Retrying grahp dailys for:",inst_66138);
var inst_66166 = (retries - (1));
var inst_66167 = revert.thegraph._LT_v3_pool_days.cljs$core$IFn$_invoke$arity$variadic(inst_66138,inst_66139,inst_66140,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"retries","retries",1888092808),inst_66166], 0));
var state_66176__$1 = (function (){var statearr_66182 = state_66176;
(statearr_66182[(14)] = inst_66165);

return statearr_66182;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66176__$1,(6),inst_66167);
} else {
if((state_val_66177 === (4))){
var inst_66139 = (state_66176[(7)]);
var inst_66138 = (state_66176[(8)]);
var inst_66158 = (state_66176[(13)]);
var inst_66140 = (state_66176[(9)]);
var inst_66154 = (state_66176[(10)]);
var inst_66159 = (state_66176[(11)]);
var inst_66152 = (state_66176[(12)]);
var inst_66171 = (function (){var pool_address__$1 = inst_66138;
var token0_address__$1 = inst_66139;
var token1_address__$1 = inst_66140;
var data = inst_66152;
var resp = inst_66154;
var token_prices = inst_66158;
var pool_dailys = inst_66159;
return (function (pool_day){
var pool_address__$2 = clojure.string.lower_case(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day)));
var token0 = clojure.string.lower_case(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))));
var token1 = clojure.string.lower_case(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))));
var date = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(pool_day);
var price0_usd = revert.utils.bn(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(token_prices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0,date], null)));
var price1_usd = revert.utils.bn(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(token_prices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token1,date], null)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"sqrt-price","sqrt-price",-1731016639),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"token1-price-usd","token1-price-usd",1599608260),new cljs.core.Keyword(null,"token0-name","token0-name",1015863397),new cljs.core.Keyword(null,"token1-decimals","token1-decimals",300738309),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),new cljs.core.Keyword(null,"token1-address","token1-address",1722914057),new cljs.core.Keyword(null,"token0-address","token0-address",635776650),new cljs.core.Keyword(null,"volume0","volume0",1792479946),new cljs.core.Keyword(null,"reserves-usd","reserves-usd",-1642061394),new cljs.core.Keyword(null,"token0-price","token0-price",-2129638674),new cljs.core.Keyword(null,"token0-price-usd","token0-price-usd",294696273),new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039),new cljs.core.Keyword(null,"token1-name","token1-name",-103346988),new cljs.core.Keyword(null,"token1-price","token1-price",-1722013195),new cljs.core.Keyword(null,"token0-decimals","token0-decimals",1310890041),new cljs.core.Keyword(null,"volume1","volume1",771282330),new cljs.core.Keyword(null,"exchange","exchange",843073210),new cljs.core.Keyword(null,"timestamp","timestamp",579478971),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),new cljs.core.Keyword(null,"volume-usd","volume-usd",-871740385)],[revert.utils.str__GT_int(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(pool_day)),new cljs.core.Keyword(null,"sqrtPrice","sqrtPrice",905790111).cljs$core$IFn$_invoke$arity$1(pool_day),clojure.string.lower_case(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))),date,price1_usd,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day)))),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))),token1,token0,revert.utils.bn(new cljs.core.Keyword(null,"volumeToken0","volumeToken0",-1972017992).cljs$core$IFn$_invoke$arity$1(pool_day)),revert.utils.bn(new cljs.core.Keyword(null,"tvlUSD","tvlUSD",872336598).cljs$core$IFn$_invoke$arity$1(pool_day)),revert.utils.bn(new cljs.core.Keyword(null,"token0Price","token0Price",-709377461).cljs$core$IFn$_invoke$arity$1(pool_day)),price0_usd,revert.utils.bn(new cljs.core.Keyword(null,"liquidity","liquidity",-1677645039).cljs$core$IFn$_invoke$arity$1(pool_day)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))),revert.utils.bn(new cljs.core.Keyword(null,"token1Price","token1Price",1130011715).cljs$core$IFn$_invoke$arity$1(pool_day)),revert.utils.str__GT_int(new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day)))),revert.utils.bn(new cljs.core.Keyword(null,"volumeToken1","volumeToken1",1876063821).cljs$core$IFn$_invoke$arity$1(pool_day)),"uniswapv3",revert.utils.ts__GT_datetime(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(pool_day)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(pool_day))),revert.utils.bn(new cljs.core.Keyword(null,"volumeUSD","volumeUSD",-445054963).cljs$core$IFn$_invoke$arity$1(pool_day))]);
});
})();
var inst_66172 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_66171,inst_66159);
var state_66176__$1 = state_66176;
var statearr_66183_66547 = state_66176__$1;
(statearr_66183_66547[(2)] = inst_66172);

(statearr_66183_66547[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66177 === (5))){
var inst_66174 = (state_66176[(2)]);
var state_66176__$1 = state_66176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66176__$1,inst_66174);
} else {
if((state_val_66177 === (6))){
var inst_66169 = (state_66176[(2)]);
var state_66176__$1 = state_66176;
var statearr_66184_66549 = state_66176__$1;
(statearr_66184_66549[(2)] = inst_66169);

(statearr_66184_66549[(1)] = (5));


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
var revert$thegraph$state_machine__52186__auto__ = null;
var revert$thegraph$state_machine__52186__auto____0 = (function (){
var statearr_66185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66185[(0)] = revert$thegraph$state_machine__52186__auto__);

(statearr_66185[(1)] = (1));

return statearr_66185;
});
var revert$thegraph$state_machine__52186__auto____1 = (function (state_66176){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66176);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66186){var ex__52189__auto__ = e66186;
var statearr_66187_66550 = state_66176;
(statearr_66187_66550[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66176[(4)]))){
var statearr_66188_66551 = state_66176;
(statearr_66188_66551[(1)] = cljs.core.first((state_66176[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66557 = state_66176;
state_66176 = G__66557;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$state_machine__52186__auto__ = function(state_66176){
switch(arguments.length){
case 0:
return revert$thegraph$state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$state_machine__52186__auto____1.call(this,state_66176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$state_machine__52186__auto____0;
revert$thegraph$state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$state_machine__52186__auto____1;
return revert$thegraph$state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66189 = f__52209__auto__();
(statearr_66189[(6)] = c__52208__auto__);

return statearr_66189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}));

(revert.thegraph._LT_v3_pool_days.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(revert.thegraph._LT_v3_pool_days.cljs$lang$applyTo = (function (seq66131){
var G__66132 = cljs.core.first(seq66131);
var seq66131__$1 = cljs.core.next(seq66131);
var G__66133 = cljs.core.first(seq66131__$1);
var seq66131__$2 = cljs.core.next(seq66131__$1);
var G__66134 = cljs.core.first(seq66131__$2);
var seq66131__$3 = cljs.core.next(seq66131__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66132,G__66133,G__66134,seq66131__$3);
}));

revert.thegraph._LT_v3_pool_tokens = (function revert$thegraph$_LT_v3_pool_tokens(pool_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_66212){
var state_val_66213 = (state_66212[(1)]);
if((state_val_66213 === (1))){
var inst_66190 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_66191 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_66192 = revert.thegraph.v3_pool_tokens_query_string(pool_address);
var inst_66193 = [inst_66192];
var inst_66194 = cljs.core.PersistentHashMap.fromArrays(inst_66191,inst_66193);
var inst_66195 = cljs.core.clj__GT_js(inst_66194);
var inst_66196 = JSON.stringify(inst_66195);
var inst_66197 = [false,inst_66196];
var inst_66198 = cljs.core.PersistentHashMap.fromArrays(inst_66190,inst_66197);
var inst_66199 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(revert.thegraph.univ3_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_66198], 0));
var state_66212__$1 = state_66212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66212__$1,(2),inst_66199);
} else {
if((state_val_66213 === (2))){
var inst_66201 = (state_66212[(2)]);
var inst_66202 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token0","token0",1683274894));
var inst_66203 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_66204 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(inst_66202,inst_66203);
var inst_66205 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_66201);
var inst_66206 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_66205);
var inst_66207 = new cljs.core.Keyword(null,"poolDayDatas","poolDayDatas",1159773980).cljs$core$IFn$_invoke$arity$1(inst_66206);
var inst_66208 = cljs.core.first(inst_66207);
var inst_66209 = new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(inst_66208);
var inst_66210 = inst_66204(inst_66209);
var state_66212__$1 = state_66212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66212__$1,inst_66210);
} else {
return null;
}
}
});
return (function() {
var revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto__ = null;
var revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto____0 = (function (){
var statearr_66214 = [null,null,null,null,null,null,null];
(statearr_66214[(0)] = revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto__);

(statearr_66214[(1)] = (1));

return statearr_66214;
});
var revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto____1 = (function (state_66212){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_66212);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e66215){var ex__52189__auto__ = e66215;
var statearr_66216_66576 = state_66212;
(statearr_66216_66576[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_66212[(4)]))){
var statearr_66217_66577 = state_66212;
(statearr_66217_66577[(1)] = cljs.core.first((state_66212[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66578 = state_66212;
state_66212 = G__66578;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto__ = function(state_66212){
switch(arguments.length){
case 0:
return revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto____1.call(this,state_66212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto____0;
revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto____1;
return revert$thegraph$_LT_v3_pool_tokens_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_66218 = f__52209__auto__();
(statearr_66218[(6)] = c__52208__auto__);

return statearr_66218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.thegraph.js.map

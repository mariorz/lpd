goog.provide('lpdashboard.thegraph');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.thegraph.uni_subgraph_url = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";
lpdashboard.thegraph.snapshot_query_string = (function lpdashboard$thegraph$snapshot_query_string(user_address){
return ["{\n      liquidityPositionSnapshots(orderBy: timestamp,\n                                 where: {user: \"",clojure.string.lower_case(user_address),"\"}\n                                 first: 1000) {\n      block,\n      timestamp,\n      pair {\n          id,\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n    liquidityTokenBalance,\n    liquidityTokenTotalSupply,\n    token0PriceUSD,\n    token1PriceUSD,\n    reserve0,\n    reserve1,\n    reserveUSD\n    }\n   }"].join('');
});
lpdashboard.thegraph.some_pair = "0x0d0d65e7a7db277d3e0f5e1676325e75f3340455";
lpdashboard.thegraph.positions_query_string = (function lpdashboard$thegraph$positions_query_string(user,pairs){
return ["{\n      liquidityPositions( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27933_SHARP_){
return ["\"",clojure.string.lower_case(p1__27933_SHARP_),"-",clojure.string.lower_case(user),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n      pair {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     },\n    liquidityTokenBalance\n    }\n   }"].join('');
});
lpdashboard.thegraph.pairs_query_string = (function lpdashboard$thegraph$pairs_query_string(pairs){
return ["{\n      pairs( where: {id_in: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27937_SHARP_){
return ["\"",clojure.string.lower_case(p1__27937_SHARP_),"\","].join('');
}),pairs))),"]}\n                                 first: 1000) {\n          id,\n          reserve0,\n          reserve1,\n          totalSupply,\n\n          token0 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n          token1 {\n             id,\n            symbol,\n            name,\n            decimals\n\n          }\n     }\n\n    }\n   "].join('');
});
lpdashboard.thegraph._LT_user_lps = (function lpdashboard$thegraph$_LT_user_lps(user_address,pair_addresses){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_27989){
var state_val_27990 = (state_27989[(1)]);
if((state_val_27990 === (1))){
var inst_27965 = cljs.core.clj__GT_js(pair_addresses);
var inst_27966 = console.log(inst_27965);
var inst_27967 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_27968 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_27969 = lpdashboard.thegraph.positions_query_string(user_address,pair_addresses);
var inst_27970 = [inst_27969];
var inst_27971 = cljs.core.PersistentHashMap.fromArrays(inst_27968,inst_27970);
var inst_27972 = cljs.core.clj__GT_js(inst_27971);
var inst_27973 = JSON.stringify(inst_27972);
var inst_27974 = [false,inst_27973];
var inst_27975 = cljs.core.PersistentHashMap.fromArrays(inst_27967,inst_27974);
var inst_27976 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_27975], 0));
var state_27989__$1 = (function (){var statearr_28043 = state_27989;
(statearr_28043[(7)] = inst_27966);

return statearr_28043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27989__$1,(2),inst_27976);
} else {
if((state_val_27990 === (2))){
var inst_27966 = (state_27989[(7)]);
var inst_27978 = (state_27989[(2)]);
var inst_27979 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_27978);
var inst_27980 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_27979);
var inst_27981 = new cljs.core.Keyword(null,"liquidityPositions","liquidityPositions",589920368).cljs$core$IFn$_invoke$arity$1(inst_27980);
var inst_27982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27983 = [new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590)];
var inst_27984 = (new cljs.core.PersistentVector(null,1,(5),inst_27982,inst_27983,null));
var inst_27985 = (function (){var _ = inst_27966;
var data = inst_27978;
var positions = inst_27981;
var keys_numerical_vals = inst_27984;
return (function (p1__27964_SHARP_){
return lpdashboard.utils.pu(p1__27964_SHARP_,(2));
});
})();
var inst_27986 = (function (){var _ = inst_27966;
var data = inst_27978;
var positions = inst_27981;
var keys_numerical_vals = inst_27984;
var num_parse_fn = inst_27985;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair));
var ts = num_parse_fn(new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var pair_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(pair,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834),ts], 0));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"pair","pair",-447516312),pair_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_27987 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_27986,inst_27981);
var state_27989__$1 = state_27989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27989__$1,inst_27987);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto__ = null;
var lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto____0 = (function (){
var statearr_28053 = [null,null,null,null,null,null,null,null];
(statearr_28053[(0)] = lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto__);

(statearr_28053[(1)] = (1));

return statearr_28053;
});
var lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto____1 = (function (state_27989){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_27989);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28056){var ex__27579__auto__ = e28056;
var statearr_28057_28180 = state_27989;
(statearr_28057_28180[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_27989[(4)]))){
var statearr_28059_28181 = state_27989;
(statearr_28059_28181[(1)] = cljs.core.first((state_27989[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28182 = state_27989;
state_27989 = G__28182;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto__ = function(state_27989){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto____1.call(this,state_27989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto____0;
lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto____1;
return lpdashboard$thegraph$_LT_user_lps_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28063 = f__27668__auto__();
(statearr_28063[(6)] = c__27667__auto__);

return statearr_28063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.thegraph._LT_user_lp_snapshots = (function lpdashboard$thegraph$_LT_user_lp_snapshots(user_address){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28088){
var state_val_28089 = (state_28088[(1)]);
if((state_val_28089 === (1))){
var inst_28068 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_28070 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_28071 = lpdashboard.thegraph.snapshot_query_string(user_address);
var inst_28072 = [inst_28071];
var inst_28073 = cljs.core.PersistentHashMap.fromArrays(inst_28070,inst_28072);
var inst_28074 = cljs.core.clj__GT_js(inst_28073);
var inst_28075 = JSON.stringify(inst_28074);
var inst_28076 = [false,inst_28075];
var inst_28077 = cljs.core.PersistentHashMap.fromArrays(inst_28068,inst_28076);
var inst_28078 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28077], 0));
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28088__$1,(2),inst_28078);
} else {
if((state_val_28089 === (2))){
var inst_28080 = (state_28088[(2)]);
var inst_28081 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28080);
var inst_28082 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_28081);
var inst_28083 = new cljs.core.Keyword(null,"liquidityPositionSnapshots","liquidityPositionSnapshots",679672036).cljs$core$IFn$_invoke$arity$1(inst_28082);
var inst_28084 = (function (){var data = inst_28080;
var positions = inst_28083;
return (function (p1__28066_SHARP_){
return lpdashboard.utils.pu(p1__28066_SHARP_,(2));
});
})();
var inst_28085 = (function (){var data = inst_28080;
var positions = inst_28083;
var num_parse_fn = inst_28084;
return (function (p){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p);
var r0 = num_parse_fn(new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(p));
var r1 = num_parse_fn(new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(p));
var lts = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(p));
var ltb = num_parse_fn(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(p));
var rusd = num_parse_fn(new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779).cljs$core$IFn$_invoke$arity$1(p));
var t0pusd = num_parse_fn(new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558).cljs$core$IFn$_invoke$arity$1(p));
var t1pusd = num_parse_fn(new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814).cljs$core$IFn$_invoke$arity$1(p));
var p_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773),r0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236),r1,new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590),ltb,new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934),lts,new cljs.core.Keyword(null,"reserveUSD","reserveUSD",517385779),rusd,new cljs.core.Keyword(null,"token0PriceUSD","token0PriceUSD",718600558),t0pusd,new cljs.core.Keyword(null,"token1PriceUSD","token1PriceUSD",1431769814),t1pusd], 0));
return p_SINGLEQUOTE_;
});
})();
var inst_28086 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_28085,inst_28083);
var state_28088__$1 = state_28088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28088__$1,inst_28086);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto__ = null;
var lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto____0 = (function (){
var statearr_28099 = [null,null,null,null,null,null,null];
(statearr_28099[(0)] = lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto__);

(statearr_28099[(1)] = (1));

return statearr_28099;
});
var lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto____1 = (function (state_28088){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28088);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28100){var ex__27579__auto__ = e28100;
var statearr_28101_28204 = state_28088;
(statearr_28101_28204[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28088[(4)]))){
var statearr_28102_28206 = state_28088;
(statearr_28102_28206[(1)] = cljs.core.first((state_28088[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28208 = state_28088;
state_28088 = G__28208;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto____0;
lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto____1;
return lpdashboard$thegraph$_LT_user_lp_snapshots_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28104 = f__27668__auto__();
(statearr_28104[(6)] = c__27667__auto__);

return statearr_28104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});
lpdashboard.thegraph._LT_pairs_info = (function lpdashboard$thegraph$_LT_pairs_info(pair_addresses){
var c__27667__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27668__auto__ = (function (){var switch__27575__auto__ = (function (state_28149){
var state_val_28150 = (state_28149[(1)]);
if((state_val_28150 === (1))){
var inst_28124 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"body","body",-2049205669)];
var inst_28136 = [new cljs.core.Keyword(null,"query","query",-1288509510)];
var inst_28137 = lpdashboard.thegraph.pairs_query_string(pair_addresses);
var inst_28138 = [inst_28137];
var inst_28139 = cljs.core.PersistentHashMap.fromArrays(inst_28136,inst_28138);
var inst_28140 = cljs.core.clj__GT_js(inst_28139);
var inst_28141 = JSON.stringify(inst_28140);
var inst_28142 = [false,inst_28141];
var inst_28143 = cljs.core.PersistentHashMap.fromArrays(inst_28124,inst_28142);
var inst_28144 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.thegraph.uni_subgraph_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28143], 0));
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28149__$1,(2),inst_28144);
} else {
if((state_val_28150 === (2))){
var inst_28146 = (state_28149[(2)]);
var inst_28147 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28146);
var state_28149__$1 = state_28149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28149__$1,inst_28147);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto__ = null;
var lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto____0 = (function (){
var statearr_28155 = [null,null,null,null,null,null,null];
(statearr_28155[(0)] = lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto__);

(statearr_28155[(1)] = (1));

return statearr_28155;
});
var lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto____1 = (function (state_28149){
while(true){
var ret_value__27577__auto__ = (function (){try{while(true){
var result__27578__auto__ = switch__27575__auto__(state_28149);
if(cljs.core.keyword_identical_QMARK_(result__27578__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27578__auto__;
}
break;
}
}catch (e28157){var ex__27579__auto__ = e28157;
var statearr_28158_28214 = state_28149;
(statearr_28158_28214[(2)] = ex__27579__auto__);


if(cljs.core.seq((state_28149[(4)]))){
var statearr_28159_28215 = state_28149;
(statearr_28159_28215[(1)] = cljs.core.first((state_28149[(4)])));

} else {
throw ex__27579__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27577__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28216 = state_28149;
state_28149 = G__28216;
continue;
} else {
return ret_value__27577__auto__;
}
break;
}
});
lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto__ = function(state_28149){
switch(arguments.length){
case 0:
return lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto____0.call(this);
case 1:
return lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto____1.call(this,state_28149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto____0;
lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto____1;
return lpdashboard$thegraph$_LT_pairs_info_$_state_machine__27576__auto__;
})()
})();
var state__27669__auto__ = (function (){var statearr_28163 = f__27668__auto__();
(statearr_28163[(6)] = c__27667__auto__);

return statearr_28163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27669__auto__);
}));

return c__27667__auto__;
});

//# sourceMappingURL=lpdashboard.thegraph.js.map

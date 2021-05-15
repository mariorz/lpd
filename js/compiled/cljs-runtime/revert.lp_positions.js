goog.provide('revert.lp_positions');
var module$node_modules$$webcarrot$xirr$cjs$index=shadow.js.require("module$node_modules$$webcarrot$xirr$cjs$index", {});
revert.lp_positions.eth_fees = (function revert$lp_positions$eth_fees(parsed_tx){
try{var gas_price = new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var gas_used = new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var eth_paid = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,gas_price)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,gas_used))))?bignumber.core._STAR_(gas_used,gas_price):revert.utils.bn(0.0));
return eth_paid;
}catch (e83954){if((e83954 instanceof Error)){
var err = e83954;
console.log("eth-fees fn err:",err);

return revert.utils.bn(0.0);
} else {
throw e83954;

}
}});
revert.lp_positions.fees_paid = (function revert$lp_positions$fees_paid(lp_position){
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var minting_fees = ((cljs.core.empty_QMARK_(mints))?revert.utils.bn(0.0):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.lp_positions.eth_fees,mints)));
var burns = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var burning_fees = ((cljs.core.empty_QMARK_(burns))?revert.utils.bn(0.0):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.lp_positions.eth_fees,burns)));
return bignumber.core._PLUS_(burning_fees,minting_fees);
});
revert.lp_positions.get_current_earned = (function revert$lp_positions$get_current_earned(lp_snapshot){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_snapshot))));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
} else {
return and__4115__auto__;
}
})())){
var token = clojure.string.lower_case(new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qty = new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_snapshot))));
var qty_SINGLEQUOTE_ = (cljs.core.truth_(qty)?qty:revert.utils.bn(0.0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),qty_SINGLEQUOTE_,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
} else {
return null;
}
});
revert.lp_positions.token_unclaimed_from_contract = (function revert$lp_positions$token_unclaimed_from_contract(rewards_map){
var token = clojure.string.lower_case(new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(rewards_map));
var qty = new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(rewards_map);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",token)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),qty,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
revert.lp_positions.all_unclaimed_for_contract = (function revert$lp_positions$all_unclaimed_for_contract(rewards_maps){
return revert.lp_positions.token_unclaimed_from_contract(rewards_maps);
});
revert.lp_positions.all_snapshot_unclaimed = (function revert$lp_positions$all_snapshot_unclaimed(lp_position){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83955_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__83955_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(revert.lp_positions.all_unclaimed_for_contract,new cljs.core.Keyword(null,"rewards","rewards",-1173924062)),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_position)));
});
revert.lp_positions.unclaimed_rewards = (function revert$lp_positions$unclaimed_rewards(lp_position,tokens){
var claimed = revert.lp_positions.get_current_earned(lp_position);
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__83956_SHARP_){
return revert.tokens.token_symbol(p1__83956_SHARP_,tokens);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),claimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
});
revert.lp_positions.token_claimed_from_contract = (function revert$lp_positions$token_claimed_from_contract(rewards_map){
var token = clojure.string.lower_case(new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(rewards_map));
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(rewards_map));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?revert.utils.bn(0.0):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",token)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
revert.lp_positions.all_claims_for_contract = (function revert$lp_positions$all_claims_for_contract(rewards_maps){
return revert.lp_positions.token_claimed_from_contract(rewards_maps);
});
revert.lp_positions.all_snapshot_claimed = (function revert$lp_positions$all_snapshot_claimed(lp_position){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83957_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__83957_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(revert.lp_positions.all_claims_for_contract,new cljs.core.Keyword(null,"rewards","rewards",-1173924062)),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_position)));
});
revert.lp_positions.make_paid_rewards = (function revert$lp_positions$make_paid_rewards(reward){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(reward);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83958_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__83958_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"token","token",-1211463215),token], null));
}),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(reward));
});
revert.lp_positions.all_paid_rewards = (function revert$lp_positions$all_paid_rewards(lp_position){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.lp_positions.make_paid_rewards,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(lp_position))));
});
revert.lp_positions.claimed_rewards = (function revert$lp_positions$claimed_rewards(lp_position,tokens){
var claimed = revert.lp_positions.all_snapshot_claimed(lp_position);
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__83959_SHARP_){
return revert.tokens.token_symbol(p1__83959_SHARP_,tokens);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),claimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
});
revert.lp_positions.minted_lps = (function revert$lp_positions$minted_lps(lp_position){
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY)){
return revert.utils.bn(0.0);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys);
}
});
revert.lp_positions.burned_lps = (function revert$lp_positions$burned_lps(lp_position){
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY)){
return revert.utils.bn(0.0);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys);
}
});
revert.lp_positions.position_lps = (function revert$lp_positions$position_lps(lp_position){
var minted = revert.lp_positions.minted_lps(lp_position);
var burned = revert.lp_positions.burned_lps(lp_position);
return revert.utils.max_bn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bignumber.core._(minted,burned),revert.utils.bn("0.0")], null));
});
revert.lp_positions.current_assets = (function revert$lp_positions$current_assets(lp_position,pool){
var pos_lps = revert.lp_positions.position_lps(lp_position);
var pool_portion = bignumber.core._SLASH_(pos_lps,revert.pools.total_lps(pool));
var pool_reserves = revert.pools.reserves(pool);
return cljs.core.zipmap(cljs.core.keys(pool_reserves),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pr){
return bignumber.core._STAR_(pr,pool_portion);
}),cljs.core.vals(pool_reserves)));
});
revert.lp_positions.v3current_assets = (function revert$lp_positions$v3current_assets(lp_position,pool){
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_position);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_position);
var amount0 = new cljs.core.Keyword(null,"amount0","amount0",1622313786).cljs$core$IFn$_invoke$arity$1(lp_position);
var amount1 = new cljs.core.Keyword(null,"amount1","amount1",-1116934036).cljs$core$IFn$_invoke$arity$1(lp_position);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,amount0,token1,amount1]);
});
revert.lp_positions.v3_uncollected_fees = (function revert$lp_positions$v3_uncollected_fees(lp_position,tokens){
var token0_address = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_position);
var token1_address = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_position);
var token0_symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token0_address));
var token1_symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token1_address));
var amount0 = new cljs.core.Keyword(null,"pending-fees0","pending-fees0",-179091945).cljs$core$IFn$_invoke$arity$1(lp_position);
var amount1 = new cljs.core.Keyword(null,"pending-fees1","pending-fees1",-295544402).cljs$core$IFn$_invoke$arity$1(lp_position);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token0_symbol,amount0,token1_symbol,amount1]);
});
revert.lp_positions.v3_uncollected_fees_addys = (function revert$lp_positions$v3_uncollected_fees_addys(lp_position,tokens){
var token0_address = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_position);
var token1_address = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_position);
var amount0 = new cljs.core.Keyword(null,"pending-fees0","pending-fees0",-179091945).cljs$core$IFn$_invoke$arity$1(lp_position);
var amount1 = new cljs.core.Keyword(null,"pending-fees1","pending-fees1",-295544402).cljs$core$IFn$_invoke$arity$1(lp_position);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token0_address,amount0,token1_address,amount1]);
});
revert.lp_positions.v3_collected_fees = (function revert$lp_positions$v3_collected_fees(lp_position,tokens){
var token0_address = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_position);
var token1_address = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_position);
var token0_symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token0_address));
var token1_symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,token1_address));
var withdrawals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),new cljs.core.Keyword(null,"collects","collects",1088780924).cljs$core$IFn$_invoke$arity$1(lp_position));
var zeroed = cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0_address,token1_address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.utils.bn(0.0),revert.utils.bn(0.0)], null));
var summed = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zeroed,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,withdrawals)], 0));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token0_symbol,cljs.core.get.cljs$core$IFn$_invoke$arity$2(summed,token0_address),token1_symbol,cljs.core.get.cljs$core$IFn$_invoke$arity$2(summed,token1_address)]);
});
revert.lp_positions.v3_collected_fees_addys = (function revert$lp_positions$v3_collected_fees_addys(lp_position,tokens){
var token0_address = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(lp_position);
var token1_address = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(lp_position);
var withdrawals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),new cljs.core.Keyword(null,"collects","collects",1088780924).cljs$core$IFn$_invoke$arity$1(lp_position));
var zeroed = cljs.core.zipmap(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token0_address,token1_address], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.utils.bn(0.0),revert.utils.bn(0.0)], null));
var summed = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zeroed,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,withdrawals)], 0));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token0_address,cljs.core.get.cljs$core$IFn$_invoke$arity$2(summed,token0_address),token1_address,cljs.core.get.cljs$core$IFn$_invoke$arity$2(summed,token1_address)]);
});
revert.lp_positions.tokens_deposited = (function revert$lp_positions$tokens_deposited(lp_position){
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deposits","deposits",-1544951296),mints);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,deposits);
});
revert.lp_positions.tokens_withdrawn = (function revert$lp_positions$tokens_withdrawn(lp_position){
var deposited = revert.lp_positions.tokens_deposited(lp_position);
var zeroed = cljs.core.zipmap(cljs.core.keys(deposited),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [revert.utils.bn(0.0),revert.utils.bn(0.0)], null));
var burns = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var withdrawals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),burns);
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([zeroed,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,withdrawals)], 0));
});
revert.lp_positions.invested_assets = (function revert$lp_positions$invested_assets(lp_position){
return revert.lp_positions.tokens_deposited(lp_position);
});
revert.lp_positions.withdrawan_assets = (function revert$lp_positions$withdrawan_assets(lp_position,pool){
return revert.lp_positions.tokens_withdrawn(lp_position);
});
revert.lp_positions.diff_assets = (function revert$lp_positions$diff_assets(lp_position,pool){
var deposited = revert.lp_positions.tokens_deposited(lp_position);
var withdrawn = revert.lp_positions.tokens_withdrawn(lp_position);
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([revert.lp_positions.current_assets(lp_position,pool),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deposited,withdrawn], 0))], 0));
});
revert.lp_positions.v3diff_assets = (function revert$lp_positions$v3diff_assets(lp_position,pool){
var deposited = revert.lp_positions.tokens_deposited(lp_position);
var withdrawn = revert.lp_positions.tokens_withdrawn(lp_position);
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([revert.lp_positions.v3current_assets(lp_position,pool),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deposited,withdrawn], 0))], 0));
});
revert.lp_positions.compute_assets_value = (function revert$lp_positions$compute_assets_value(current,tokens){
var priced_tokens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.contains_QMARK_(tokens,k);
}),cljs.core.keys(current));
if((cljs.core.count(priced_tokens) > (0))){
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,s),new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens,s))));
}),priced_tokens));
if(cljs.core.truth_((function (){var and__4115__auto__ = revert.utils.bn_QMARK_(res);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(res.isNaN());
} else {
return and__4115__auto__;
}
})())){
return res;
} else {
return revert.utils.bn("0.00");
}
} else {
return revert.utils.bn("0.00");
}
});
revert.lp_positions.assets_value = (function revert$lp_positions$assets_value(lp_position,pool,tokens){
return revert.lp_positions.compute_assets_value(revert.lp_positions.current_assets(lp_position,pool),tokens);
});
revert.lp_positions.v3assets_value = (function revert$lp_positions$v3assets_value(lp_position,pool,tokens){
return revert.lp_positions.compute_assets_value(revert.lp_positions.v3current_assets(lp_position,pool),tokens);
});
revert.lp_positions.total_rewards = (function revert$lp_positions$total_rewards(lp_position,pool,tokens){
var rewards_claimed = revert.lp_positions.all_snapshot_claimed(lp_position);
var rewards_claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewards_claimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),rewards_claimed));
var rewards_unclaimed = revert.lp_positions.all_snapshot_unclaimed(lp_position);
var rewards_unclaimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewards_unclaimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),rewards_unclaimed));
var all_rewards = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards_claimed_SINGLEQUOTE_,rewards_unclaimed_SINGLEQUOTE_], 0));
if((cljs.core.count(all_rewards) > (0))){
return revert.lp_positions.compute_assets_value(all_rewards,tokens);
} else {
return revert.utils.bn(0.0);
}
});
revert.lp_positions.pool_pnl = (function revert$lp_positions$pool_pnl(lp_position,pool,tokens){
return revert.lp_positions.compute_assets_value(revert.lp_positions.diff_assets(lp_position,pool),tokens);
});
revert.lp_positions.v3pool_pnl = (function revert$lp_positions$v3pool_pnl(lp_position,pool,tokens){
var ppnl = revert.lp_positions.v3diff_assets(lp_position,pool);
var fees_collected = revert.lp_positions.v3_collected_fees_addys(lp_position,tokens);
var fees_uncollected = revert.lp_positions.v3_uncollected_fees_addys(lp_position,tokens);
var all_fees = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fees_collected,fees_uncollected], 0));
return revert.lp_positions.compute_assets_value(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ppnl,all_fees], 0)),tokens);
});
revert.lp_positions.total_pnl = (function revert$lp_positions$total_pnl(lp_position,pool,tokens){
var ppnl = revert.lp_positions.diff_assets(lp_position,pool);
var rewards_claimed = revert.lp_positions.all_snapshot_claimed(lp_position);
var rewards_claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewards_claimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),rewards_claimed));
var rewards_unclaimed = revert.lp_positions.all_snapshot_unclaimed(lp_position);
var rewards_unclaimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewards_unclaimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),rewards_unclaimed));
var gas_cost_eth = revert.lp_positions.fees_paid(lp_position);
var gas_costs = cljs.core.PersistentArrayMap.createAsIfByAssoc([revert.utils.weth_address,bignumber.core._STAR_(revert.utils.bn("-1.0"),gas_cost_eth)]);
var all_rewards = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards_claimed_SINGLEQUOTE_,rewards_unclaimed_SINGLEQUOTE_], 0));
return revert.lp_positions.compute_assets_value(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ppnl,all_rewards,gas_costs], 0)),tokens);
});
revert.lp_positions.v3total_pnl = (function revert$lp_positions$v3total_pnl(lp_position,pool,tokens){
var ppnl = revert.lp_positions.v3diff_assets(lp_position,pool);
var rewards_claimed = revert.lp_positions.all_snapshot_claimed(lp_position);
var rewards_claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewards_claimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),rewards_claimed));
var rewards_unclaimed = revert.lp_positions.all_snapshot_unclaimed(lp_position);
var rewards_unclaimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),rewards_unclaimed),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),rewards_unclaimed));
var fees_collected = revert.lp_positions.v3_collected_fees_addys(lp_position,tokens);
var fees_uncollected = revert.lp_positions.v3_uncollected_fees_addys(lp_position,tokens);
var gas_cost_eth = revert.lp_positions.fees_paid(lp_position);
var gas_costs = cljs.core.PersistentArrayMap.createAsIfByAssoc([revert.utils.weth_address,bignumber.core._STAR_(revert.utils.bn("-1.0"),gas_cost_eth)]);
var all_fees = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fees_collected,fees_uncollected], 0));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_fees], 0));
var ___$1 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gas_costs], 0));
var ___$2 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ppnl], 0));
return revert.lp_positions.compute_assets_value(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ppnl,all_fees,gas_costs], 0)),tokens);
});
revert.lp_positions.deposit_flow = (function revert$lp_positions$deposit_flow(mint,tokens,blocks_ts){
var block_ts = revert.utils.ts__GT_datetime(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_ts,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(mint)));
var deposit_value = bignumber.core._STAR_(revert.utils.bn("-1"),revert.lp_positions.compute_assets_value(new cljs.core.Keyword(null,"deposits","deposits",-1544951296).cljs$core$IFn$_invoke$arity$1(mint),tokens));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"amount","amount",364489504),deposit_value.toNumber(),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(block_ts)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deposits","deposits",-1544951296)], null);
});
revert.lp_positions.gas_flow = (function revert$lp_positions$gas_flow(mint,tokens,blocks_ts){
var block_ts = revert.utils.ts__GT_datetime(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_ts,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(mint)));
var eth_paid = bignumber.core._STAR_(new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(mint),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(mint));
var gas_value = bignumber.core._STAR_(revert.utils.bn("-1"),revert.lp_positions.compute_assets_value(cljs.core.PersistentArrayMap.createAsIfByAssoc([revert.utils.weth_address,eth_paid]),tokens));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"amount","amount",364489504),gas_value.toNumber(),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(block_ts)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904)], null);
});
revert.lp_positions.mint_flows = (function revert$lp_positions$mint_flows(lp_position,tokens,blocks_ts){
var deposit_flows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83960_SHARP_){
return revert.lp_positions.deposit_flow(p1__83960_SHARP_,tokens,blocks_ts);
}),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position));
var gas_flows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83961_SHARP_){
return revert.lp_positions.gas_flow(p1__83961_SHARP_,tokens,blocks_ts);
}),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(deposit_flows,gas_flows);
});
revert.lp_positions.withdrawal_flow = (function revert$lp_positions$withdrawal_flow(burn,tokens,blocks_ts){
var block_ts = revert.utils.ts__GT_datetime(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_ts,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(burn)));
var withdrawal_value = revert.lp_positions.compute_assets_value(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911).cljs$core$IFn$_invoke$arity$1(burn),tokens);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"amount","amount",364489504),withdrawal_value.toNumber(),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(block_ts)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911)], null);
});
revert.lp_positions.burn_flows = (function revert$lp_positions$burn_flows(lp_position,tokens,blocks_ts){
var withdrawal_flows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83962_SHARP_){
return revert.lp_positions.withdrawal_flow(p1__83962_SHARP_,tokens,blocks_ts);
}),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position));
var gas_flows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83963_SHARP_){
return revert.lp_positions.gas_flow(p1__83963_SHARP_,tokens,blocks_ts);
}),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(withdrawal_flows,gas_flows);
});
revert.lp_positions.reward_flow = (function revert$lp_positions$reward_flow(reward,tokens,blocks_ts){
var block_ts = revert.utils.ts__GT_datetime(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_ts,new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(reward)));
var reward_value = revert.lp_positions.compute_assets_value(cljs.core.PersistentArrayMap.createAsIfByAssoc([clojure.string.lower_case(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(reward)),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(reward)]),tokens);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"amount","amount",364489504),reward_value.toNumber(),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date(block_ts)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"claimed-rewards","claimed-rewards",647454101)], null);
});
revert.lp_positions.rewards_flows = (function revert$lp_positions$rewards_flows(lp_position,tokens,blocks_ts){
var paid_rewards = revert.lp_positions.all_paid_rewards(lp_position);
var flows = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83964_SHARP_){
return revert.lp_positions.reward_flow(p1__83964_SHARP_,tokens,blocks_ts);
}),paid_rewards);
return flows;
});
revert.lp_positions.pending_rewards_flows = (function revert$lp_positions$pending_rewards_flows(lp_position,tokens){
var unclaimed_rewards = revert.lp_positions.all_snapshot_unclaimed(lp_position);
var unclaimed_rewards_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([clojure.string.lower_case(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(r)),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(r)]);
}),unclaimed_rewards));
var unclaimed_value = revert.lp_positions.compute_assets_value(unclaimed_rewards_SINGLEQUOTE_,tokens);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"amount","amount",364489504),unclaimed_value.toNumber(),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560)], null)], null);
});
revert.lp_positions.cash_flows = (function revert$lp_positions$cash_flows(lp_position,pool,tokens,blocks_ts){
var mints = revert.lp_positions.mint_flows(lp_position,tokens,blocks_ts);
var burns = revert.lp_positions.burn_flows(lp_position,tokens,blocks_ts);
var rewards = revert.lp_positions.rewards_flows(lp_position,tokens,blocks_ts);
var assets_value = revert.lp_positions.assets_value(lp_position,pool,tokens);
var assets = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),assets_value.toNumber(),new cljs.core.Keyword(null,"date","date",-1463434462),(new Date())], null)], null);
var pending_rewards = revert.lp_positions.pending_rewards_flows(lp_position,tokens);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mints,burns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards,assets,pending_rewards], 0)));
});
revert.lp_positions.total_irr = (function revert$lp_positions$total_irr(lp_position,pool,tokens,blocks_ts){
try{var flows = revert.lp_positions.cash_flows(lp_position,pool,tokens,blocks_ts);
var flows_SINGLEQUOTE_ = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"amount","amount",364489504),parseFloat(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(m).toFixed((2)))], null));
}),flows);
var irr = module$node_modules$$webcarrot$xirr$cjs$index.xirr(cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(flows_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([0.1,1.0E-10,(2000),(200)], 0)));
return bignumber.core._STAR_(revert.utils.bn(irr),revert.utils.bn("100"));
}catch (e83965){if((e83965 instanceof Error)){
var err = e83965;
console.log(["xirr error:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));

return revert.utils.bn("0.0");
} else {
throw e83965;

}
}});
revert.lp_positions.balance_reducer = (function revert$lp_positions$balance_reducer(state,flow){
var init_time = new cljs.core.Keyword(null,"init-time","init-time",-1956875994).cljs$core$IFn$_invoke$arity$1(state);
var next_time = revert.utils.datetime__GT_ts(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(flow));
var time_block = (next_time - new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state));
var next_balance = (new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(flow) + new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(state));
var next_avgbal = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(time_block,(0)))?new cljs.core.Keyword(null,"avg-balance","avg-balance",2078223285).cljs$core$IFn$_invoke$arity$1(state):(((new cljs.core.Keyword(null,"avg-balance","avg-balance",2078223285).cljs$core$IFn$_invoke$arity$1(state) * (new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state) - init_time)) + (new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(state) * time_block)) / (next_time - init_time)));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"avg-balance","avg-balance",2078223285),next_avgbal,new cljs.core.Keyword(null,"init-time","init-time",-1956875994),init_time,new cljs.core.Keyword(null,"balance","balance",418967409),next_balance,new cljs.core.Keyword(null,"time","time",1385887882),next_time], null);
});
/**
 * Should return one number, the avg balance for the period
 *   in the cash flows.
 */
revert.lp_positions.average_balance = (function revert$lp_positions$average_balance(lp_position,pool,tokens,blocks_ts){
var flows = revert.lp_positions.cash_flows(lp_position,pool,tokens,blocks_ts);
var relevant_flows = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__83966_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deposits","deposits",-1544951296),null,new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),null,new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__83966_SHARP_));
}),flows);
var first_deposit = cljs.core.first(relevant_flows);
var current_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"amount","amount",364489504),0.0,new cljs.core.Keyword(null,"date","date",-1463434462),revert.utils.ts__GT_datetime(revert.utils.make_unix_ts())], null);
var avg_balance = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(revert.lp_positions.balance_reducer,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"avg-banace","avg-banace",-590734316),0.0,new cljs.core.Keyword(null,"init-time","init-time",-1956875994),revert.utils.datetime__GT_ts(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(first_deposit)),new cljs.core.Keyword(null,"time","time",1385887882),revert.utils.datetime__GT_ts(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(first_deposit)),new cljs.core.Keyword(null,"balance","balance",418967409),0.0], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(relevant_flows,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_state], null)));
return avg_balance;
});
revert.lp_positions.total_apr = (function revert$lp_positions$total_apr(lp_position,pool,tokens,blocks_ts){
try{var balance_state = revert.lp_positions.average_balance(lp_position,pool,tokens,blocks_ts);
var avg_balance = ((-1) * new cljs.core.Keyword(null,"avg-balance","avg-balance",2078223285).cljs$core$IFn$_invoke$arity$1(balance_state));
var total_pnl = revert.lp_positions.total_pnl(lp_position,pool,tokens);
var first_block = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position))));
var first_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_ts,first_block);
var timediff = (revert.utils.make_unix_ts() - first_ts);
var daysdiff = revert.utils.bn(revert.utils.seconds__GT_days(timediff));
var year_portion = bignumber.core._SLASH_(daysdiff,revert.utils.bn("365"));
var multiplier = bignumber.core._SLASH_(revert.utils.bn("1"),year_portion);
return bignumber.core._STAR_(bignumber.core._STAR_(bignumber.core._SLASH_(total_pnl,avg_balance),multiplier),revert.utils.bn("100.0"));
}catch (e83967){if((e83967 instanceof Error)){
var err = e83967;
console.log(["apr error:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));

return revert.utils.bn("0.0");
} else {
throw e83967;

}
}});
revert.lp_positions.v3total_apr = (function revert$lp_positions$v3total_apr(lp_position,pool,tokens,blocks_ts){
try{var balance_state = revert.lp_positions.average_balance(lp_position,pool,tokens,blocks_ts);
var avg_balance = ((-1) * new cljs.core.Keyword(null,"avg-balance","avg-balance",2078223285).cljs$core$IFn$_invoke$arity$1(balance_state));
var total_pnl = revert.lp_positions.v3total_pnl(lp_position,pool,tokens);
var first_block = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position))));
var first_ts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(blocks_ts,first_block);
var timediff = (revert.utils.make_unix_ts() - first_ts);
var daysdiff = revert.utils.bn(revert.utils.seconds__GT_days(timediff));
var year_portion = bignumber.core._SLASH_(daysdiff,revert.utils.bn("365"));
var multiplier = bignumber.core._SLASH_(revert.utils.bn("1"),year_portion);
return bignumber.core._STAR_(bignumber.core._STAR_(bignumber.core._SLASH_(total_pnl,avg_balance),multiplier),revert.utils.bn("100.0"));
}catch (e83968){if((e83968 instanceof Error)){
var err = e83968;
console.log(["apr error:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err)].join(''));

return revert.utils.bn("0.0");
} else {
throw e83968;

}
}});
revert.lp_positions.assets_value_all = (function revert$lp_positions$assets_value_all(lp_positions,v3lp_positions,pools,v3pools,tokens){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83969_SHARP_){
return revert.lp_positions.assets_value(p1__83969_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83969_SHARP_)),tokens);
}),lp_positions),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83970_SHARP_){
return revert.lp_positions.v3assets_value(p1__83970_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(v3pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83970_SHARP_)),tokens);
}),v3lp_positions)));
});
revert.lp_positions.gas_costs_all = (function revert$lp_positions$gas_costs_all(lp_positions,pools,tokens){
var gas_cost_eth = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.lp_positions.fees_paid,lp_positions));
var eth_price = revert.tokens.symbol__GT_price("WETH",tokens,"usd");
var gas_cost_usd = bignumber.core._STAR_(gas_cost_eth,eth_price);
return gas_cost_usd;
});
revert.lp_positions.rewards_all = (function revert$lp_positions$rewards_all(lp_positions,pools,tokens){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83971_SHARP_){
return revert.lp_positions.total_rewards(p1__83971_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83971_SHARP_)),tokens);
}),lp_positions));
});
revert.lp_positions.pool_pnl_all = (function revert$lp_positions$pool_pnl_all(lp_positions,v3lp_positions,pools,v3pools,tokens){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83972_SHARP_){
return revert.lp_positions.pool_pnl(p1__83972_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83972_SHARP_)),tokens);
}),lp_positions),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83973_SHARP_){
return revert.lp_positions.v3pool_pnl(p1__83973_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(v3pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83973_SHARP_)),tokens);
}),v3lp_positions)));
});
revert.lp_positions.total_pnl_all = (function revert$lp_positions$total_pnl_all(lp_positions,v3lp_positions,pools,v3pools,tokens){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83974_SHARP_){
return revert.lp_positions.total_pnl(p1__83974_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83974_SHARP_)),tokens);
}),lp_positions),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__83975_SHARP_){
return revert.lp_positions.v3total_pnl(p1__83975_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(v3pools,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__83975_SHARP_)),tokens);
}),v3lp_positions)));
});
revert.lp_positions.block_numbers = (function revert$lp_positions$block_numbers(lp_position){
var mint_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position));
var burn_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position));
var collect_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"collect","collect",-284321549).cljs$core$IFn$_invoke$arity$1(lp_position));
var rewards_claimed = revert.lp_positions.all_paid_rewards(lp_position);
var reward_blocks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block-number","block-number",-935510961),rewards_claimed);
var blocks = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(mint_blocks,burn_blocks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reward_blocks,collect_blocks], 0));
return blocks;
});

//# sourceMappingURL=revert.lp_positions.js.map

goog.provide('lpdashboard.core');
var module$node_modules$bignumber_DOT_js$bignumber=shadow.js.require("module$node_modules$bignumber_DOT_js$bignumber", {});
lpdashboard.core.address0 = "0x0000000000000000000000000000000000000000";
lpdashboard.core.provider = lpdashboard.ethereum.provider;
lpdashboard.core.state_example = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),"some-address",new cljs.core.Keyword(null,"token-info","token-info",-589167623),new cljs.core.PersistentArrayMap(null, 3, ["eth",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"ETH",new cljs.core.Keyword(null,"address","address",559499426),null,new cljs.core.Keyword(null,"name","name",1843675177),"Ether",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",100.0,"eth",(1)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",101.1,"eth",(1)], null)], null)], null),"0x3",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"COMP",new cljs.core.Keyword(null,"address","address",559499426),"0x33",new cljs.core.Keyword(null,"name","name",1843675177),"Compound",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null),"0x2",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"MTA",new cljs.core.Keyword(null,"address","address",559499426),"0x21",new cljs.core.Keyword(null,"name","name",1843675177),"meta",new cljs.core.Keyword(null,"decimals","decimals",1715096484),(18),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"122323","usd",1.0,"eth",0.1], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),"121323","usd",1.1,"eth",0.2], null)], null)], null)], null),new cljs.core.Keyword(null,"lps","lps",2143562451),new cljs.core.PersistentArrayMap(null, 1, ["0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["token0-address","token1-address"], null)], null),new cljs.core.Keyword(null,"unknown-destinations","unknown-destinations",1396541565),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address1",new cljs.core.Keyword(null,"reason","reason",-2070751759),"lp matching failed",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),"address2",new cljs.core.Keyword(null,"reason","reason",-2070751759),"could not identify contract",new cljs.core.Keyword(null,"tx-hashes","tx-hashes",-1159336772),cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.Keyword(null,"mints","mints",-278208376),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"deposits","deposits",-1544951296),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"burns","burns",1858509067),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),(2),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x123",new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),0.1,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),(100),new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),(200),new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(2),"token1-address",0.2], null)], null)], null),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),(1223324),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(100),new cljs.core.Keyword(null,"reserves","reserves",-1935017122),new cljs.core.PersistentArrayMap(null, 2, ["token0-address",(25),"token1-address",(40)], null)], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(10),new cljs.core.Keyword(null,"staked","staked",-1857531165),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-address","token-address",872304132),"z",new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"example",new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),(1),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),(1)], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x2323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12343)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),(1),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),"0x1323",new cljs.core.Keyword(null,"block-number","block-number",-935510961),(12243)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),"x",new cljs.core.Keyword(null,"lp-address","lp-address",-1398247764),"y",new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"z",new cljs.core.Keyword(null,"reward-token-symbol","reward-token-symbol",-1647197588),"p",new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),(1),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),"z"], null);
lpdashboard.core.instruction = "Connect account or enter address";
if((typeof lpdashboard !== 'undefined') && (typeof lpdashboard.core !== 'undefined') && (typeof lpdashboard.core.app_state !== 'undefined')){
} else {
lpdashboard.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),(((lpdashboard.core.provider == null))?"requires metamask":lpdashboard.core.instruction),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),null,new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),null,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),null], null));
}
lpdashboard.core.separator_str = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
lpdashboard.core.render_totals = (function lpdashboard$core$render_totals(account,state,lp_positions,totals,currency){
var _ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steps","steps",-128433302)], null),cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.separator_str], null)], 0));
var total_pnl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(totals),currency).toFormat((2));
var rewards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(totals),currency).toFormat((2));
var pool_pnl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(totals),currency).toFormat((2));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.app_state,cljs.core.into,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"title","title",636505583),account,new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437),lp_positions,new cljs.core.Keyword(null,"full-state","full-state",576263053),state,new cljs.core.Keyword(null,"account","account",718006320),account,new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),total_pnl,new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),pool_pnl,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards], null));
});
lpdashboard.core.render_loading = (function lpdashboard$core$render_loading(){
return cljs.core.reset_BANG_(lpdashboard.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),lpdashboard.core.instruction,new cljs.core.Keyword(null,"steps","steps",-128433302),cljs.core.PersistentVector.EMPTY], null));
});
lpdashboard.core.render_account = (function lpdashboard$core$render_account(account){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118481){
var state_val_118482 = (state_118481[(1)]);
if((state_val_118482 === (1))){
var inst_118463 = lpdashboard.core.render_loading();
var inst_118464 = (lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core._LT_get_account_state.cljs$core$IFn$_invoke$arity$1(account) : lpdashboard.core._LT_get_account_state.call(null,account));
var state_118481__$1 = (function (){var statearr_118483 = state_118481;
(statearr_118483[(7)] = inst_118463);

return statearr_118483;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118481__$1,(2),inst_118464);
} else {
if((state_val_118482 === (2))){
var inst_118466 = (state_118481[(2)]);
var inst_118467 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118468 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_118469 = (new cljs.core.PersistentVector(null,1,(5),inst_118467,inst_118468,null));
var inst_118470 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118471 = ["Computing account PNL ..."];
var inst_118472 = (new cljs.core.PersistentVector(null,1,(5),inst_118470,inst_118471,null));
var inst_118473 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_118469,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_118472], 0));
var inst_118474 = (lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.compute_totals.cljs$core$IFn$_invoke$arity$1(inst_118466) : lpdashboard.core.compute_totals.call(null,inst_118466));
var inst_118475 = (function (){var _ = inst_118473;
var account_state = inst_118466;
var totals = inst_118474;
return (function (p1__118462_SHARP_){
var G__118484 = p1__118462_SHARP_;
var G__118485 = new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(account_state);
return (lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2 ? lpdashboard.core.lp_position_map.cljs$core$IFn$_invoke$arity$2(G__118484,G__118485) : lpdashboard.core.lp_position_map.call(null,G__118484,G__118485));
});
})();
var inst_118476 = new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(inst_118466);
var inst_118477 = cljs.core.vals(inst_118476);
var inst_118478 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_118475,inst_118477);
var inst_118479 = lpdashboard.core.render_totals(account,inst_118466,inst_118478,inst_118474,"USD");
var state_118481__$1 = state_118481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118481__$1,inst_118479);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$render_account_$_state_machine__36685__auto__ = null;
var lpdashboard$core$render_account_$_state_machine__36685__auto____0 = (function (){
var statearr_118486 = [null,null,null,null,null,null,null,null];
(statearr_118486[(0)] = lpdashboard$core$render_account_$_state_machine__36685__auto__);

(statearr_118486[(1)] = (1));

return statearr_118486;
});
var lpdashboard$core$render_account_$_state_machine__36685__auto____1 = (function (state_118481){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118481);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118487){var ex__36688__auto__ = e118487;
var statearr_118488_120045 = state_118481;
(statearr_118488_120045[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118481[(4)]))){
var statearr_118489_120046 = state_118481;
(statearr_118489_120046[(1)] = cljs.core.first((state_118481[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120047 = state_118481;
state_118481 = G__120047;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$render_account_$_state_machine__36685__auto__ = function(state_118481){
switch(arguments.length){
case 0:
return lpdashboard$core$render_account_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$render_account_$_state_machine__36685__auto____1.call(this,state_118481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$render_account_$_state_machine__36685__auto____0;
lpdashboard$core$render_account_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$render_account_$_state_machine__36685__auto____1;
return lpdashboard$core$render_account_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118490 = f__36777__auto__();
(statearr_118490[(6)] = c__36776__auto__);

return statearr_118490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.render_tx_link = (function lpdashboard$core$render_tx_link(tx){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://etherscan.io/tx/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx)].join('')], null),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(tx,(0),(6))], null)," "], null);
});
lpdashboard.core.render_lp_pos = (function lpdashboard$core$render_lp_pos(lp_pos,lp){
var snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp));
var stakes = new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot);
var farms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),stakes);
var rewards = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stakes], 0));
var claimed = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rewards], 0));
var claim_txs = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),claimed));
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"u","u",-1156634785),clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(lp_pos))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Pool PnL: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Gas costs: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null),((((0) < cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD")))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Staking Rewards: ",cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lp_pos)),"USD").toFormat((2))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Current: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118491){
var vec__118492 = p__118491;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118492,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118492,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Invested: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118495){
var vec__118496 = p__118495;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118496,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118496,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"invested","invested",19182926).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Withdrawn: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118499){
var vec__118500 = p__118499;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118500,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118500,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Diffs: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__118503){
var vec__118504 = p__118503;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118504,(0),null);
var qty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118504,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qty.toFormat((2)))," "].join('');
}),new cljs.core.Keyword(null,"diffs","diffs",-1720136241).cljs$core$IFn$_invoke$arity$1(lp_pos)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Mints:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)),new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp))], null),((((0) < cljs.core.count(new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Burns:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200)),new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp))], null):null),((((0) < cljs.core.count(claim_txs)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Claimed Rewards:",cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.render_tx_link,claim_txs)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.separator_str], null)], null);
});
lpdashboard.core.web3_connect = (function lpdashboard$core$web3_connect(){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118536){
var state_val_118537 = (state_118536[(1)]);
if((state_val_118537 === (7))){
var inst_118518 = (state_118536[(7)]);
var inst_118525 = (function(){throw inst_118518})();
var state_118536__$1 = state_118536;
var statearr_118538_120048 = state_118536__$1;
(statearr_118538_120048[(2)] = inst_118525);

(statearr_118538_120048[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118537 === (1))){
var state_118536__$1 = state_118536;
var statearr_118539_120049 = state_118536__$1;
(statearr_118539_120049[(2)] = null);

(statearr_118539_120049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118537 === (4))){
var inst_118507 = (state_118536[(2)]);
var inst_118508 = console.log("Could not enable web3 in browser",inst_118507);
var state_118536__$1 = state_118536;
var statearr_118540_120050 = state_118536__$1;
(statearr_118540_120050[(2)] = inst_118508);

(statearr_118540_120050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118537 === (6))){
var inst_118518 = (state_118536[(7)]);
var inst_118518__$1 = (state_118536[(2)]);
var inst_118519 = (inst_118518__$1 instanceof cljs.core.ExceptionInfo);
var inst_118520 = cljs.core.ex_data(inst_118518__$1);
var inst_118521 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118520);
var inst_118522 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118521,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118523 = ((inst_118519) && (inst_118522));
var state_118536__$1 = (function (){var statearr_118541 = state_118536;
(statearr_118541[(7)] = inst_118518__$1);

return statearr_118541;
})();
if(cljs.core.truth_(inst_118523)){
var statearr_118542_120051 = state_118536__$1;
(statearr_118542_120051[(1)] = (7));

} else {
var statearr_118543_120052 = state_118536__$1;
(statearr_118543_120052[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118537 === (3))){
var inst_118534 = (state_118536[(2)]);
var state_118536__$1 = state_118536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118536__$1,inst_118534);
} else {
if((state_val_118537 === (2))){
var _ = (function (){var statearr_118545 = state_118536;
(statearr_118545[(4)] = cljs.core.cons((5),(state_118536[(4)])));

return statearr_118545;
})();
var inst_118514 = window.ethereum;
var inst_118515 = inst_118514.enable();
var inst_118516 = cljs.core.async.interop.p__GT_c(inst_118515);
var state_118536__$1 = state_118536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118536__$1,(6),inst_118516);
} else {
if((state_val_118537 === (9))){
var inst_118528 = (state_118536[(2)]);
var inst_118529 = cljs.core.first(inst_118528);
var inst_118530 = console.log("connected-account",inst_118529);
var inst_118531 = lpdashboard.core.render_account(inst_118529);
var _ = (function (){var statearr_118546 = state_118536;
(statearr_118546[(4)] = cljs.core.rest((state_118536[(4)])));

return statearr_118546;
})();
var state_118536__$1 = (function (){var statearr_118547 = state_118536;
(statearr_118547[(8)] = inst_118530);

return statearr_118547;
})();
var statearr_118548_120053 = state_118536__$1;
(statearr_118548_120053[(2)] = inst_118531);

(statearr_118548_120053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118537 === (5))){
var _ = (function (){var statearr_118549 = state_118536;
(statearr_118549[(4)] = cljs.core.rest((state_118536[(4)])));

return statearr_118549;
})();
var state_118536__$1 = state_118536;
var ex118544 = (state_118536__$1[(2)]);
var statearr_118550_120054 = state_118536__$1;
(statearr_118550_120054[(5)] = ex118544);


if((ex118544 instanceof Error)){
var statearr_118551_120055 = state_118536__$1;
(statearr_118551_120055[(1)] = (4));

(statearr_118551_120055[(5)] = null);

} else {
throw ex118544;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118537 === (8))){
var inst_118518 = (state_118536[(7)]);
var state_118536__$1 = state_118536;
var statearr_118552_120056 = state_118536__$1;
(statearr_118552_120056[(2)] = inst_118518);

(statearr_118552_120056[(1)] = (9));


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
});
return (function() {
var lpdashboard$core$web3_connect_$_state_machine__36685__auto__ = null;
var lpdashboard$core$web3_connect_$_state_machine__36685__auto____0 = (function (){
var statearr_118553 = [null,null,null,null,null,null,null,null,null];
(statearr_118553[(0)] = lpdashboard$core$web3_connect_$_state_machine__36685__auto__);

(statearr_118553[(1)] = (1));

return statearr_118553;
});
var lpdashboard$core$web3_connect_$_state_machine__36685__auto____1 = (function (state_118536){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118536);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118554){var ex__36688__auto__ = e118554;
var statearr_118555_120057 = state_118536;
(statearr_118555_120057[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118536[(4)]))){
var statearr_118556_120058 = state_118536;
(statearr_118556_120058[(1)] = cljs.core.first((state_118536[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120059 = state_118536;
state_118536 = G__120059;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$web3_connect_$_state_machine__36685__auto__ = function(state_118536){
switch(arguments.length){
case 0:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$web3_connect_$_state_machine__36685__auto____1.call(this,state_118536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____0;
lpdashboard$core$web3_connect_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$web3_connect_$_state_machine__36685__auto____1;
return lpdashboard$core$web3_connect_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118557 = f__36777__auto__();
(statearr_118557[(6)] = c__36776__auto__);

return statearr_118557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.connecting_component = (function lpdashboard$core$connecting_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Connect account",new cljs.core.Keyword(null,"on-click","on-click",1632826543),lpdashboard.core.web3_connect], null)], null)], null);
});
lpdashboard.core.submit_component = (function lpdashboard$core$submit_component(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return lpdashboard.core.render_account(cljs.core.deref(value));
})], null)], null);
});
lpdashboard.core.atom_input = (function lpdashboard$core$atom_input(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__118558_SHARP_){
return cljs.core.reset_BANG_(value,p1__118558_SHARP_.target.value);
})], null)], null),lpdashboard.core.submit_component(value)], null);
});
lpdashboard.core.shared_state = (function lpdashboard$core$shared_state(){
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("foo");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The value is now: ",cljs.core.deref(val)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Change it here: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.atom_input,val], null)], null)], null);
});
});
lpdashboard.core.hello_world = (function lpdashboard$core$hello_world(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"log"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.connecting_component()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),lpdashboard.core.atom_input(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x], null);
}),new cljs.core.Keyword(null,"steps","steps",-128433302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"------- ACCOUNT PNL --------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Total PnL: ",new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"PnL From Pools: ",new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Rewards Accrued: ",new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))], null)], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------OPEN LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__118559_SHARP_){
return lpdashboard.core.render_lp_pos(p1__118559_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__118559_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__118560_SHARP_){
return bignumber.core._LT_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__118560_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null),(((!((new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state)) == null))))?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"-------CLOSED LP POSITIONS--------"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__118561_SHARP_){
return lpdashboard.core.render_lp_pos(p1__118561_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"full-state","full-state",576263053).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p1__118561_SHARP_)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__118562_SHARP_){
return bignumber.core._GT__EQ_((new module$node_modules$bignumber_DOT_js$bignumber("0.000001")),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.vals(new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(p1__118562_SHARP_))));
}),new cljs.core.Keyword(null,"lp-positions","lp-positions",-1448546437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(lpdashboard.core.app_state))))], null):null)], null)], null);
});
lpdashboard.core.start = (function lpdashboard$core$start(){
var G__118563 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.hello_world], null);
var G__118564 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__118563,G__118564) : reagent.core.render_component.call(null,G__118563,G__118564));
});
lpdashboard.core.init = (function lpdashboard$core$init(){
return lpdashboard.core.start();
});
goog.exportSymbol('lpdashboard.core.init', lpdashboard.core.init);
lpdashboard.core.stop = (function lpdashboard$core$stop(){
return console.log("stop");
});
lpdashboard.core._LT_staking_rewards_earned = (function lpdashboard$core$_LT_staking_rewards_earned(staking_address,rewards_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118585){
var state_val_118586 = (state_118585[(1)]);
if((state_val_118586 === (1))){
var inst_118565 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var inst_118566 = lpdashboard.ethereum._LT_token_decimals(rewards_address);
var state_118585__$1 = (function (){var statearr_118587 = state_118585;
(statearr_118587[(7)] = inst_118565);

return statearr_118587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118585__$1,(2),inst_118566);
} else {
if((state_val_118586 === (2))){
var inst_118565 = (state_118585[(7)]);
var inst_118568 = (state_118585[(2)]);
var inst_118569 = inst_118565.earned(user_address);
var inst_118570 = cljs.core.async.interop.p__GT_c(inst_118569);
var state_118585__$1 = (function (){var statearr_118588 = state_118585;
(statearr_118588[(8)] = inst_118568);

return statearr_118588;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118585__$1,(3),inst_118570);
} else {
if((state_val_118586 === (3))){
var inst_118572 = (state_118585[(9)]);
var inst_118572__$1 = (state_118585[(2)]);
var inst_118573 = (inst_118572__$1 instanceof cljs.core.ExceptionInfo);
var inst_118574 = cljs.core.ex_data(inst_118572__$1);
var inst_118575 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118574);
var inst_118576 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118575,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118577 = ((inst_118573) && (inst_118576));
var state_118585__$1 = (function (){var statearr_118589 = state_118585;
(statearr_118589[(9)] = inst_118572__$1);

return statearr_118589;
})();
if(cljs.core.truth_(inst_118577)){
var statearr_118590_120060 = state_118585__$1;
(statearr_118590_120060[(1)] = (4));

} else {
var statearr_118591_120061 = state_118585__$1;
(statearr_118591_120061[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118586 === (4))){
var inst_118572 = (state_118585[(9)]);
var inst_118579 = (function(){throw inst_118572})();
var state_118585__$1 = state_118585;
var statearr_118592_120062 = state_118585__$1;
(statearr_118592_120062[(2)] = inst_118579);

(statearr_118592_120062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118586 === (5))){
var inst_118572 = (state_118585[(9)]);
var state_118585__$1 = state_118585;
var statearr_118593_120063 = state_118585__$1;
(statearr_118593_120063[(2)] = inst_118572);

(statearr_118593_120063[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118586 === (6))){
var inst_118568 = (state_118585[(8)]);
var inst_118582 = (state_118585[(2)]);
var inst_118583 = lpdashboard.utils.ebn__GT_bn(inst_118582,inst_118568);
var state_118585__$1 = state_118585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118585__$1,inst_118583);
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
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0 = (function (){
var statearr_118594 = [null,null,null,null,null,null,null,null,null,null];
(statearr_118594[(0)] = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__);

(statearr_118594[(1)] = (1));

return statearr_118594;
});
var lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1 = (function (state_118585){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118585);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118595){var ex__36688__auto__ = e118595;
var statearr_118596_120064 = state_118585;
(statearr_118596_120064[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118585[(4)]))){
var statearr_118597_120065 = state_118585;
(statearr_118597_120065[(1)] = cljs.core.first((state_118585[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120066 = state_118585;
state_118585 = G__120066;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__ = function(state_118585){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1.call(this,state_118585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_earned_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118598 = f__36777__auto__();
(statearr_118598[(6)] = c__36776__auto__);

return statearr_118598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_rewards_token = (function lpdashboard$core$_LT_staking_rewards_token(staking_address){
var staking_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sr_abi,staking_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118672){
var state_val_118673 = (state_118672[(1)]);
if((state_val_118673 === (7))){
var inst_118601 = (state_118672[(2)]);
var inst_118602 = console.log("prob getting sushi failback:",staking_address);
var state_118672__$1 = (function (){var statearr_118674 = state_118672;
(statearr_118674[(7)] = inst_118601);

(statearr_118674[(8)] = inst_118602);

return statearr_118674;
})();
var statearr_118675_120067 = state_118672__$1;
(statearr_118675_120067[(2)] = null);

(statearr_118675_120067[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (20))){
var inst_118645 = (state_118672[(2)]);
var _ = (function (){var statearr_118676 = state_118672;
(statearr_118676[(4)] = cljs.core.rest((state_118672[(4)])));

return statearr_118676;
})();
var state_118672__$1 = state_118672;
var statearr_118677_120068 = state_118672__$1;
(statearr_118677_120068[(2)] = inst_118645);

(statearr_118677_120068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (1))){
var state_118672__$1 = state_118672;
var statearr_118678_120069 = state_118672__$1;
(statearr_118678_120069[(2)] = null);

(statearr_118678_120069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (24))){
var inst_118657 = (state_118672[(9)]);
var state_118672__$1 = state_118672;
var statearr_118679_120070 = state_118672__$1;
(statearr_118679_120070[(2)] = inst_118657);

(statearr_118679_120070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (4))){
var inst_118599 = (state_118672[(2)]);
var inst_118600 = console.log("prob getting rewards token:",staking_address);
var state_118672__$1 = (function (){var statearr_118681 = state_118672;
(statearr_118681[(10)] = inst_118600);

(statearr_118681[(11)] = inst_118599);

return statearr_118681;
})();
var statearr_118682_120071 = state_118672__$1;
(statearr_118682_120071[(2)] = null);

(statearr_118682_120071[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (15))){
var inst_118623 = (state_118672[(2)]);
var _ = (function (){var statearr_118683 = state_118672;
(statearr_118683[(4)] = cljs.core.rest((state_118672[(4)])));

return statearr_118683;
})();
var state_118672__$1 = state_118672;
var statearr_118684_120072 = state_118672__$1;
(statearr_118684_120072[(2)] = inst_118623);

(statearr_118684_120072[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (21))){
var _ = (function (){var statearr_118685 = state_118672;
(statearr_118685[(4)] = cljs.core.rest((state_118672[(4)])));

return statearr_118685;
})();
var state_118672__$1 = state_118672;
var ex118680 = (state_118672__$1[(2)]);
var statearr_118686_120073 = state_118672__$1;
(statearr_118686_120073[(5)] = ex118680);


if((ex118680 instanceof Error)){
var statearr_118687_120074 = state_118672__$1;
(statearr_118687_120074[(1)] = (4));

(statearr_118687_120074[(5)] = null);

} else {
throw ex118680;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (13))){
var inst_118613 = (state_118672[(12)]);
var inst_118620 = (function(){throw inst_118613})();
var state_118672__$1 = state_118672;
var statearr_118688_120075 = state_118672__$1;
(statearr_118688_120075[(2)] = inst_118620);

(statearr_118688_120075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (22))){
var inst_118657 = (state_118672[(9)]);
var inst_118657__$1 = (state_118672[(2)]);
var inst_118658 = (inst_118657__$1 instanceof cljs.core.ExceptionInfo);
var inst_118659 = cljs.core.ex_data(inst_118657__$1);
var inst_118660 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118659);
var inst_118661 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118660,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118662 = ((inst_118658) && (inst_118661));
var state_118672__$1 = (function (){var statearr_118689 = state_118672;
(statearr_118689[(9)] = inst_118657__$1);

return statearr_118689;
})();
if(cljs.core.truth_(inst_118662)){
var statearr_118690_120076 = state_118672__$1;
(statearr_118690_120076[(1)] = (23));

} else {
var statearr_118691_120077 = state_118672__$1;
(statearr_118691_120077[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (6))){
var inst_118648 = (state_118672[(2)]);
var state_118672__$1 = state_118672;
var statearr_118692_120078 = state_118672__$1;
(statearr_118692_120078[(2)] = inst_118648);

(statearr_118692_120078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (25))){
var inst_118667 = (state_118672[(2)]);
var _ = (function (){var statearr_118693 = state_118672;
(statearr_118693[(4)] = cljs.core.rest((state_118672[(4)])));

return statearr_118693;
})();
var state_118672__$1 = state_118672;
var statearr_118694_120079 = state_118672__$1;
(statearr_118694_120079[(2)] = inst_118667);

(statearr_118694_120079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (17))){
var inst_118635 = (state_118672[(13)]);
var inst_118635__$1 = (state_118672[(2)]);
var inst_118636 = (inst_118635__$1 instanceof cljs.core.ExceptionInfo);
var inst_118637 = cljs.core.ex_data(inst_118635__$1);
var inst_118638 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118637);
var inst_118639 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118638,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118640 = ((inst_118636) && (inst_118639));
var state_118672__$1 = (function (){var statearr_118695 = state_118672;
(statearr_118695[(13)] = inst_118635__$1);

return statearr_118695;
})();
if(cljs.core.truth_(inst_118640)){
var statearr_118696_120080 = state_118672__$1;
(statearr_118696_120080[(1)] = (18));

} else {
var statearr_118697_120081 = state_118672__$1;
(statearr_118697_120081[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (3))){
var inst_118670 = (state_118672[(2)]);
var state_118672__$1 = state_118672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118672__$1,inst_118670);
} else {
if((state_val_118673 === (12))){
var inst_118613 = (state_118672[(12)]);
var inst_118613__$1 = (state_118672[(2)]);
var inst_118614 = (inst_118613__$1 instanceof cljs.core.ExceptionInfo);
var inst_118615 = cljs.core.ex_data(inst_118613__$1);
var inst_118616 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118615);
var inst_118617 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118616,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118618 = ((inst_118614) && (inst_118617));
var state_118672__$1 = (function (){var statearr_118698 = state_118672;
(statearr_118698[(12)] = inst_118613__$1);

return statearr_118698;
})();
if(cljs.core.truth_(inst_118618)){
var statearr_118699_120082 = state_118672__$1;
(statearr_118699_120082[(1)] = (13));

} else {
var statearr_118700_120083 = state_118672__$1;
(statearr_118700_120083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (2))){
var _ = (function (){var statearr_118701 = state_118672;
(statearr_118701[(4)] = cljs.core.cons((21),(state_118672[(4)])));

return statearr_118701;
})();
var inst_118654 = staking_contract.rewardsToken();
var inst_118655 = cljs.core.async.interop.p__GT_c(inst_118654);
var state_118672__$1 = state_118672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118672__$1,(22),inst_118655);
} else {
if((state_val_118673 === (23))){
var inst_118657 = (state_118672[(9)]);
var inst_118664 = (function(){throw inst_118657})();
var state_118672__$1 = state_118672;
var statearr_118703_120084 = state_118672__$1;
(statearr_118703_120084[(2)] = inst_118664);

(statearr_118703_120084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (19))){
var inst_118635 = (state_118672[(13)]);
var state_118672__$1 = state_118672;
var statearr_118704_120085 = state_118672__$1;
(statearr_118704_120085[(2)] = inst_118635);

(statearr_118704_120085[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (11))){
var _ = (function (){var statearr_118705 = state_118672;
(statearr_118705[(4)] = cljs.core.rest((state_118672[(4)])));

return statearr_118705;
})();
var state_118672__$1 = state_118672;
var ex118702 = (state_118672__$1[(2)]);
var statearr_118706_120086 = state_118672__$1;
(statearr_118706_120086[(5)] = ex118702);


if((ex118702 instanceof Error)){
var statearr_118707_120087 = state_118672__$1;
(statearr_118707_120087[(1)] = (10));

(statearr_118707_120087[(5)] = null);

} else {
throw ex118702;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (9))){
var inst_118626 = (state_118672[(2)]);
var state_118672__$1 = state_118672;
var statearr_118708_120088 = state_118672__$1;
(statearr_118708_120088[(2)] = inst_118626);

(statearr_118708_120088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (5))){
var _ = (function (){var statearr_118710 = state_118672;
(statearr_118710[(4)] = cljs.core.cons((16),(state_118672[(4)])));

return statearr_118710;
})();
var inst_118632 = staking_contract.sushi();
var inst_118633 = cljs.core.async.interop.p__GT_c(inst_118632);
var state_118672__$1 = state_118672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118672__$1,(17),inst_118633);
} else {
if((state_val_118673 === (14))){
var inst_118613 = (state_118672[(12)]);
var state_118672__$1 = state_118672;
var statearr_118711_120089 = state_118672__$1;
(statearr_118711_120089[(2)] = inst_118613);

(statearr_118711_120089[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (16))){
var _ = (function (){var statearr_118712 = state_118672;
(statearr_118712[(4)] = cljs.core.rest((state_118672[(4)])));

return statearr_118712;
})();
var state_118672__$1 = state_118672;
var ex118709 = (state_118672__$1[(2)]);
var statearr_118713_120090 = state_118672__$1;
(statearr_118713_120090[(5)] = ex118709);


if((ex118709 instanceof Error)){
var statearr_118714_120091 = state_118672__$1;
(statearr_118714_120091[(1)] = (7));

(statearr_118714_120091[(5)] = null);

} else {
throw ex118709;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (10))){
var inst_118603 = (state_118672[(2)]);
var inst_118604 = console.log("prob getting cream failback:",staking_address);
var state_118672__$1 = (function (){var statearr_118715 = state_118672;
(statearr_118715[(14)] = inst_118603);

return statearr_118715;
})();
var statearr_118716_120092 = state_118672__$1;
(statearr_118716_120092[(2)] = inst_118604);

(statearr_118716_120092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (18))){
var inst_118635 = (state_118672[(13)]);
var inst_118642 = (function(){throw inst_118635})();
var state_118672__$1 = state_118672;
var statearr_118717_120093 = state_118672__$1;
(statearr_118717_120093[(2)] = inst_118642);

(statearr_118717_120093[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118673 === (8))){
var _ = (function (){var statearr_118718 = state_118672;
(statearr_118718[(4)] = cljs.core.cons((11),(state_118672[(4)])));

return statearr_118718;
})();
var inst_118610 = staking_contract.cream();
var inst_118611 = cljs.core.async.interop.p__GT_c(inst_118610);
var state_118672__$1 = state_118672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118672__$1,(12),inst_118611);
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
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0 = (function (){
var statearr_118719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_118719[(0)] = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__);

(statearr_118719[(1)] = (1));

return statearr_118719;
});
var lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1 = (function (state_118672){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118672);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118720){var ex__36688__auto__ = e118720;
var statearr_118721_120094 = state_118672;
(statearr_118721_120094[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118672[(4)]))){
var statearr_118722_120095 = state_118672;
(statearr_118722_120095[(1)] = cljs.core.first((state_118672[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120096 = state_118672;
state_118672 = G__120096;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__ = function(state_118672){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1.call(this,state_118672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_rewards_token_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118723 = f__36777__auto__();
(statearr_118723[(6)] = c__36776__auto__);

return statearr_118723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_prop = (function lpdashboard$core$_LT_staked_prop(staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118760){
var state_val_118761 = (state_118760[(1)]);
if((state_val_118761 === (7))){
var inst_118746 = (state_118760[(7)]);
var inst_118746__$1 = (state_118760[(2)]);
var inst_118747 = (inst_118746__$1 instanceof cljs.core.ExceptionInfo);
var inst_118748 = cljs.core.ex_data(inst_118746__$1);
var inst_118749 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118748);
var inst_118750 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118749,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118751 = ((inst_118747) && (inst_118750));
var state_118760__$1 = (function (){var statearr_118762 = state_118760;
(statearr_118762[(7)] = inst_118746__$1);

return statearr_118762;
})();
if(cljs.core.truth_(inst_118751)){
var statearr_118763_120097 = state_118760__$1;
(statearr_118763_120097[(1)] = (8));

} else {
var statearr_118764_120098 = state_118760__$1;
(statearr_118764_120098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118761 === (1))){
var inst_118724 = lpdashboard.ethereum.make_erc20(staking_address);
var inst_118725 = lpdashboard.ethereum._LT_token_decimals(staking_address);
var state_118760__$1 = (function (){var statearr_118765 = state_118760;
(statearr_118765[(8)] = inst_118724);

return statearr_118765;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118760__$1,(2),inst_118725);
} else {
if((state_val_118761 === (4))){
var inst_118731 = (state_118760[(9)]);
var inst_118738 = (function(){throw inst_118731})();
var state_118760__$1 = state_118760;
var statearr_118766_120099 = state_118760__$1;
(statearr_118766_120099[(2)] = inst_118738);

(statearr_118766_120099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118761 === (6))){
var inst_118724 = (state_118760[(8)]);
var inst_118727 = (state_118760[(10)]);
var inst_118741 = (state_118760[(2)]);
var inst_118742 = lpdashboard.utils.ebn__GT_bn(inst_118741,inst_118727);
var inst_118743 = inst_118724.totalSupply();
var inst_118744 = cljs.core.async.interop.p__GT_c(inst_118743);
var state_118760__$1 = (function (){var statearr_118767 = state_118760;
(statearr_118767[(11)] = inst_118742);

return statearr_118767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118760__$1,(7),inst_118744);
} else {
if((state_val_118761 === (3))){
var inst_118731 = (state_118760[(9)]);
var inst_118731__$1 = (state_118760[(2)]);
var inst_118732 = (inst_118731__$1 instanceof cljs.core.ExceptionInfo);
var inst_118733 = cljs.core.ex_data(inst_118731__$1);
var inst_118734 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118733);
var inst_118735 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118734,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118736 = ((inst_118732) && (inst_118735));
var state_118760__$1 = (function (){var statearr_118768 = state_118760;
(statearr_118768[(9)] = inst_118731__$1);

return statearr_118768;
})();
if(cljs.core.truth_(inst_118736)){
var statearr_118769_120100 = state_118760__$1;
(statearr_118769_120100[(1)] = (4));

} else {
var statearr_118770_120101 = state_118760__$1;
(statearr_118770_120101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118761 === (2))){
var inst_118724 = (state_118760[(8)]);
var inst_118727 = (state_118760[(2)]);
var inst_118728 = inst_118724.balanceOf(user_address);
var inst_118729 = cljs.core.async.interop.p__GT_c(inst_118728);
var state_118760__$1 = (function (){var statearr_118771 = state_118760;
(statearr_118771[(10)] = inst_118727);

return statearr_118771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118760__$1,(3),inst_118729);
} else {
if((state_val_118761 === (9))){
var inst_118746 = (state_118760[(7)]);
var state_118760__$1 = state_118760;
var statearr_118772_120102 = state_118760__$1;
(statearr_118772_120102[(2)] = inst_118746);

(statearr_118772_120102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118761 === (5))){
var inst_118731 = (state_118760[(9)]);
var state_118760__$1 = state_118760;
var statearr_118773_120103 = state_118760__$1;
(statearr_118773_120103[(2)] = inst_118731);

(statearr_118773_120103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118761 === (10))){
var inst_118742 = (state_118760[(11)]);
var inst_118727 = (state_118760[(10)]);
var inst_118756 = (state_118760[(2)]);
var inst_118757 = lpdashboard.utils.ebn__GT_bn(inst_118756,inst_118727);
var inst_118758 = bignumber.core._SLASH_(inst_118742,inst_118757);
var state_118760__$1 = state_118760;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118760__$1,inst_118758);
} else {
if((state_val_118761 === (8))){
var inst_118746 = (state_118760[(7)]);
var inst_118753 = (function(){throw inst_118746})();
var state_118760__$1 = state_118760;
var statearr_118774_120104 = state_118760__$1;
(statearr_118774_120104[(2)] = inst_118753);

(statearr_118774_120104[(1)] = (10));


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
});
return (function() {
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0 = (function (){
var statearr_118775 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_118775[(0)] = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__);

(statearr_118775[(1)] = (1));

return statearr_118775;
});
var lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1 = (function (state_118760){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118760);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118776){var ex__36688__auto__ = e118776;
var statearr_118777_120105 = state_118760;
(statearr_118777_120105[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118760[(4)]))){
var statearr_118778_120106 = state_118760;
(statearr_118778_120106[(1)] = cljs.core.first((state_118760[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120107 = state_118760;
state_118760 = G__120107;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__ = function(state_118760){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1.call(this,state_118760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_prop_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118779 = f__36777__auto__();
(statearr_118779[(6)] = c__36776__auto__);

return statearr_118779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staking_pool_lps = (function lpdashboard$core$_LT_staking_pool_lps(lp_address,staking_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118811){
var state_val_118812 = (state_118811[(1)]);
if((state_val_118812 === (7))){
var inst_118798 = (state_118811[(7)]);
var inst_118805 = (function(){throw inst_118798})();
var state_118811__$1 = state_118811;
var statearr_118813_120108 = state_118811__$1;
(statearr_118813_120108[(2)] = inst_118805);

(statearr_118813_120108[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118812 === (1))){
var inst_118780 = (state_118811[(8)]);
var inst_118780__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_118781 = inst_118780__$1.decimals();
var inst_118782 = cljs.core.async.interop.p__GT_c(inst_118781);
var state_118811__$1 = (function (){var statearr_118814 = state_118811;
(statearr_118814[(8)] = inst_118780__$1);

return statearr_118814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118811__$1,(2),inst_118782);
} else {
if((state_val_118812 === (4))){
var inst_118784 = (state_118811[(9)]);
var state_118811__$1 = state_118811;
var statearr_118815_120109 = state_118811__$1;
(statearr_118815_120109[(2)] = inst_118784);

(statearr_118815_120109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118812 === (6))){
var inst_118798 = (state_118811[(7)]);
var inst_118798__$1 = (state_118811[(2)]);
var inst_118799 = (inst_118798__$1 instanceof cljs.core.ExceptionInfo);
var inst_118800 = cljs.core.ex_data(inst_118798__$1);
var inst_118801 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118800);
var inst_118802 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118801,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118803 = ((inst_118799) && (inst_118802));
var state_118811__$1 = (function (){var statearr_118816 = state_118811;
(statearr_118816[(7)] = inst_118798__$1);

return statearr_118816;
})();
if(cljs.core.truth_(inst_118803)){
var statearr_118817_120110 = state_118811__$1;
(statearr_118817_120110[(1)] = (7));

} else {
var statearr_118818_120111 = state_118811__$1;
(statearr_118818_120111[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118812 === (3))){
var inst_118784 = (state_118811[(9)]);
var inst_118791 = (function(){throw inst_118784})();
var state_118811__$1 = state_118811;
var statearr_118819_120112 = state_118811__$1;
(statearr_118819_120112[(2)] = inst_118791);

(statearr_118819_120112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118812 === (2))){
var inst_118784 = (state_118811[(9)]);
var inst_118784__$1 = (state_118811[(2)]);
var inst_118785 = (inst_118784__$1 instanceof cljs.core.ExceptionInfo);
var inst_118786 = cljs.core.ex_data(inst_118784__$1);
var inst_118787 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118786);
var inst_118788 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118787,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118789 = ((inst_118785) && (inst_118788));
var state_118811__$1 = (function (){var statearr_118820 = state_118811;
(statearr_118820[(9)] = inst_118784__$1);

return statearr_118820;
})();
if(cljs.core.truth_(inst_118789)){
var statearr_118821_120113 = state_118811__$1;
(statearr_118821_120113[(1)] = (3));

} else {
var statearr_118822_120114 = state_118811__$1;
(statearr_118822_120114[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118812 === (9))){
var inst_118794 = (state_118811[(10)]);
var inst_118808 = (state_118811[(2)]);
var inst_118809 = lpdashboard.utils.ebn__GT_bn(inst_118808,inst_118794);
var state_118811__$1 = state_118811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118811__$1,inst_118809);
} else {
if((state_val_118812 === (5))){
var inst_118780 = (state_118811[(8)]);
var inst_118794 = (state_118811[(2)]);
var inst_118795 = inst_118780.balanceOf(staking_address);
var inst_118796 = cljs.core.async.interop.p__GT_c(inst_118795);
var state_118811__$1 = (function (){var statearr_118823 = state_118811;
(statearr_118823[(10)] = inst_118794);

return statearr_118823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118811__$1,(6),inst_118796);
} else {
if((state_val_118812 === (8))){
var inst_118798 = (state_118811[(7)]);
var state_118811__$1 = state_118811;
var statearr_118824_120115 = state_118811__$1;
(statearr_118824_120115[(2)] = inst_118798);

(statearr_118824_120115[(1)] = (9));


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
});
return (function() {
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0 = (function (){
var statearr_118825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_118825[(0)] = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__);

(statearr_118825[(1)] = (1));

return statearr_118825;
});
var lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1 = (function (state_118811){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118811);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118826){var ex__36688__auto__ = e118826;
var statearr_118827_120116 = state_118811;
(statearr_118827_120116[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118811[(4)]))){
var statearr_118828_120117 = state_118811;
(statearr_118828_120117[(1)] = cljs.core.first((state_118811[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120118 = state_118811;
state_118811 = G__120118;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__ = function(state_118811){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1.call(this,state_118811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staking_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118829 = f__36777__auto__();
(statearr_118829[(6)] = c__36776__auto__);

return statearr_118829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_lps = (function lpdashboard$core$_LT_total_pool_lps(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118850){
var state_val_118851 = (state_118850[(1)]);
if((state_val_118851 === (1))){
var inst_118830 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_118831 = lpdashboard.ethereum._LT_token_decimals(lp_address);
var state_118850__$1 = (function (){var statearr_118852 = state_118850;
(statearr_118852[(7)] = inst_118830);

return statearr_118852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118850__$1,(2),inst_118831);
} else {
if((state_val_118851 === (2))){
var inst_118830 = (state_118850[(7)]);
var inst_118833 = (state_118850[(2)]);
var inst_118834 = inst_118830.totalSupply();
var inst_118835 = cljs.core.async.interop.p__GT_c(inst_118834);
var state_118850__$1 = (function (){var statearr_118853 = state_118850;
(statearr_118853[(8)] = inst_118833);

return statearr_118853;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118850__$1,(3),inst_118835);
} else {
if((state_val_118851 === (3))){
var inst_118837 = (state_118850[(9)]);
var inst_118837__$1 = (state_118850[(2)]);
var inst_118838 = (inst_118837__$1 instanceof cljs.core.ExceptionInfo);
var inst_118839 = cljs.core.ex_data(inst_118837__$1);
var inst_118840 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118839);
var inst_118841 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118840,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118842 = ((inst_118838) && (inst_118841));
var state_118850__$1 = (function (){var statearr_118854 = state_118850;
(statearr_118854[(9)] = inst_118837__$1);

return statearr_118854;
})();
if(cljs.core.truth_(inst_118842)){
var statearr_118855_120119 = state_118850__$1;
(statearr_118855_120119[(1)] = (4));

} else {
var statearr_118856_120120 = state_118850__$1;
(statearr_118856_120120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118851 === (4))){
var inst_118837 = (state_118850[(9)]);
var inst_118844 = (function(){throw inst_118837})();
var state_118850__$1 = state_118850;
var statearr_118857_120121 = state_118850__$1;
(statearr_118857_120121[(2)] = inst_118844);

(statearr_118857_120121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118851 === (5))){
var inst_118837 = (state_118850[(9)]);
var state_118850__$1 = state_118850;
var statearr_118858_120122 = state_118850__$1;
(statearr_118858_120122[(2)] = inst_118837);

(statearr_118858_120122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118851 === (6))){
var inst_118833 = (state_118850[(8)]);
var inst_118847 = (state_118850[(2)]);
var inst_118848 = lpdashboard.utils.ebn__GT_bn(inst_118847,inst_118833);
var state_118850__$1 = state_118850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118850__$1,inst_118848);
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
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0 = (function (){
var statearr_118859 = [null,null,null,null,null,null,null,null,null,null];
(statearr_118859[(0)] = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__);

(statearr_118859[(1)] = (1));

return statearr_118859;
});
var lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1 = (function (state_118850){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118850);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118860){var ex__36688__auto__ = e118860;
var statearr_118861_120123 = state_118850;
(statearr_118861_120123[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118850[(4)]))){
var statearr_118862_120124 = state_118850;
(statearr_118862_120124[(1)] = cljs.core.first((state_118850[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120125 = state_118850;
state_118850 = G__120125;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__ = function(state_118850){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1.call(this,state_118850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_lps_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118863 = f__36777__auto__();
(statearr_118863[(6)] = c__36776__auto__);

return statearr_118863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_tokens = (function lpdashboard$core$_LT_lp_pool_tokens(lp_address){
var lp_contract = lpdashboard.ethereum.make_erc20(lp_address);
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118896){
var state_val_118897 = (state_118896[(1)]);
if((state_val_118897 === (7))){
var inst_118882 = (state_118896[(7)]);
var inst_118889 = (function(){throw inst_118882})();
var state_118896__$1 = state_118896;
var statearr_118898_120126 = state_118896__$1;
(statearr_118898_120126[(2)] = inst_118889);

(statearr_118898_120126[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118897 === (1))){
var inst_118864 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118865 = lp_contract.token0();
var inst_118866 = cljs.core.async.interop.p__GT_c(inst_118865);
var state_118896__$1 = (function (){var statearr_118899 = state_118896;
(statearr_118899[(8)] = inst_118864);

return statearr_118899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118896__$1,(2),inst_118866);
} else {
if((state_val_118897 === (4))){
var inst_118868 = (state_118896[(9)]);
var state_118896__$1 = state_118896;
var statearr_118900_120127 = state_118896__$1;
(statearr_118900_120127[(2)] = inst_118868);

(statearr_118900_120127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118897 === (6))){
var inst_118882 = (state_118896[(7)]);
var inst_118882__$1 = (state_118896[(2)]);
var inst_118883 = (inst_118882__$1 instanceof cljs.core.ExceptionInfo);
var inst_118884 = cljs.core.ex_data(inst_118882__$1);
var inst_118885 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118884);
var inst_118886 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118885,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118887 = ((inst_118883) && (inst_118886));
var state_118896__$1 = (function (){var statearr_118901 = state_118896;
(statearr_118901[(7)] = inst_118882__$1);

return statearr_118901;
})();
if(cljs.core.truth_(inst_118887)){
var statearr_118902_120128 = state_118896__$1;
(statearr_118902_120128[(1)] = (7));

} else {
var statearr_118903_120129 = state_118896__$1;
(statearr_118903_120129[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118897 === (3))){
var inst_118868 = (state_118896[(9)]);
var inst_118875 = (function(){throw inst_118868})();
var state_118896__$1 = state_118896;
var statearr_118904_120130 = state_118896__$1;
(statearr_118904_120130[(2)] = inst_118875);

(statearr_118904_120130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118897 === (2))){
var inst_118868 = (state_118896[(9)]);
var inst_118868__$1 = (state_118896[(2)]);
var inst_118869 = (inst_118868__$1 instanceof cljs.core.ExceptionInfo);
var inst_118870 = cljs.core.ex_data(inst_118868__$1);
var inst_118871 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118870);
var inst_118872 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118871,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118873 = ((inst_118869) && (inst_118872));
var state_118896__$1 = (function (){var statearr_118905 = state_118896;
(statearr_118905[(9)] = inst_118868__$1);

return statearr_118905;
})();
if(cljs.core.truth_(inst_118873)){
var statearr_118906_120131 = state_118896__$1;
(statearr_118906_120131[(1)] = (3));

} else {
var statearr_118907_120132 = state_118896__$1;
(statearr_118907_120132[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118897 === (9))){
var inst_118878 = (state_118896[(10)]);
var inst_118864 = (state_118896[(8)]);
var inst_118892 = (state_118896[(2)]);
var inst_118893 = [inst_118878,inst_118892];
var inst_118894 = (new cljs.core.PersistentVector(null,2,(5),inst_118864,inst_118893,null));
var state_118896__$1 = state_118896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118896__$1,inst_118894);
} else {
if((state_val_118897 === (5))){
var inst_118878 = (state_118896[(2)]);
var inst_118879 = lp_contract.token1();
var inst_118880 = cljs.core.async.interop.p__GT_c(inst_118879);
var state_118896__$1 = (function (){var statearr_118908 = state_118896;
(statearr_118908[(10)] = inst_118878);

return statearr_118908;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118896__$1,(6),inst_118880);
} else {
if((state_val_118897 === (8))){
var inst_118882 = (state_118896[(7)]);
var state_118896__$1 = state_118896;
var statearr_118909_120133 = state_118896__$1;
(statearr_118909_120133[(2)] = inst_118882);

(statearr_118909_120133[(1)] = (9));


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
});
return (function() {
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0 = (function (){
var statearr_118910 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_118910[(0)] = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__);

(statearr_118910[(1)] = (1));

return statearr_118910;
});
var lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1 = (function (state_118896){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118896);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118911){var ex__36688__auto__ = e118911;
var statearr_118912_120134 = state_118896;
(statearr_118912_120134[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118896[(4)]))){
var statearr_118913_120135 = state_118896;
(statearr_118913_120135[(1)] = cljs.core.first((state_118896[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120136 = state_118896;
state_118896 = G__120136;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__ = function(state_118896){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1.call(this,state_118896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_tokens_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118914 = f__36777__auto__();
(statearr_118914[(6)] = c__36776__auto__);

return statearr_118914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_lp_pool_symbols = (function lpdashboard$core$_LT_lp_pool_symbols(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_118954){
var state_val_118955 = (state_118954[(1)]);
if((state_val_118955 === (7))){
var inst_118940 = (state_118954[(7)]);
var inst_118940__$1 = (state_118954[(2)]);
var inst_118941 = (inst_118940__$1 instanceof cljs.core.ExceptionInfo);
var inst_118942 = cljs.core.ex_data(inst_118940__$1);
var inst_118943 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118942);
var inst_118944 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118943,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118945 = ((inst_118941) && (inst_118944));
var state_118954__$1 = (function (){var statearr_118956 = state_118954;
(statearr_118956[(7)] = inst_118940__$1);

return statearr_118956;
})();
if(cljs.core.truth_(inst_118945)){
var statearr_118957_120137 = state_118954__$1;
(statearr_118957_120137[(1)] = (8));

} else {
var statearr_118958_120138 = state_118954__$1;
(statearr_118958_120138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118955 === (1))){
var inst_118915 = lpdashboard.core._LT_lp_pool_tokens(lp_address);
var state_118954__$1 = state_118954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118954__$1,(2),inst_118915);
} else {
if((state_val_118955 === (4))){
var inst_118926 = (state_118954[(8)]);
var inst_118933 = (function(){throw inst_118926})();
var state_118954__$1 = state_118954;
var statearr_118959_120139 = state_118954__$1;
(statearr_118959_120139[(2)] = inst_118933);

(statearr_118959_120139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118955 === (6))){
var inst_118921 = (state_118954[(9)]);
var inst_118936 = (state_118954[(2)]);
var inst_118937 = inst_118921.symbol();
var inst_118938 = cljs.core.async.interop.p__GT_c(inst_118937);
var state_118954__$1 = (function (){var statearr_118960 = state_118954;
(statearr_118960[(10)] = inst_118936);

return statearr_118960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118954__$1,(7),inst_118938);
} else {
if((state_val_118955 === (3))){
var inst_118926 = (state_118954[(8)]);
var inst_118926__$1 = (state_118954[(2)]);
var inst_118927 = (inst_118926__$1 instanceof cljs.core.ExceptionInfo);
var inst_118928 = cljs.core.ex_data(inst_118926__$1);
var inst_118929 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118928);
var inst_118930 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118929,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118931 = ((inst_118927) && (inst_118930));
var state_118954__$1 = (function (){var statearr_118961 = state_118954;
(statearr_118961[(8)] = inst_118926__$1);

return statearr_118961;
})();
if(cljs.core.truth_(inst_118931)){
var statearr_118962_120140 = state_118954__$1;
(statearr_118962_120140[(1)] = (4));

} else {
var statearr_118963_120141 = state_118954__$1;
(statearr_118963_120141[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118955 === (2))){
var inst_118917 = (state_118954[(2)]);
var inst_118918 = cljs.core.first(inst_118917);
var inst_118919 = lpdashboard.ethereum.make_erc20(inst_118918);
var inst_118920 = cljs.core.second(inst_118917);
var inst_118921 = lpdashboard.ethereum.make_erc20(inst_118920);
var inst_118922 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_118923 = inst_118919.symbol();
var inst_118924 = cljs.core.async.interop.p__GT_c(inst_118923);
var state_118954__$1 = (function (){var statearr_118964 = state_118954;
(statearr_118964[(11)] = inst_118922);

(statearr_118964[(9)] = inst_118921);

return statearr_118964;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_118954__$1,(3),inst_118924);
} else {
if((state_val_118955 === (9))){
var inst_118940 = (state_118954[(7)]);
var state_118954__$1 = state_118954;
var statearr_118965_120142 = state_118954__$1;
(statearr_118965_120142[(2)] = inst_118940);

(statearr_118965_120142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118955 === (5))){
var inst_118926 = (state_118954[(8)]);
var state_118954__$1 = state_118954;
var statearr_118966_120143 = state_118954__$1;
(statearr_118966_120143[(2)] = inst_118926);

(statearr_118966_120143[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_118955 === (10))){
var inst_118922 = (state_118954[(11)]);
var inst_118936 = (state_118954[(10)]);
var inst_118950 = (state_118954[(2)]);
var inst_118951 = [inst_118936,inst_118950];
var inst_118952 = (new cljs.core.PersistentVector(null,2,(5),inst_118922,inst_118951,null));
var state_118954__$1 = state_118954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_118954__$1,inst_118952);
} else {
if((state_val_118955 === (8))){
var inst_118940 = (state_118954[(7)]);
var inst_118947 = (function(){throw inst_118940})();
var state_118954__$1 = state_118954;
var statearr_118967_120144 = state_118954__$1;
(statearr_118967_120144[(2)] = inst_118947);

(statearr_118967_120144[(1)] = (10));


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
});
return (function() {
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0 = (function (){
var statearr_118968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_118968[(0)] = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__);

(statearr_118968[(1)] = (1));

return statearr_118968;
});
var lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1 = (function (state_118954){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_118954);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e118969){var ex__36688__auto__ = e118969;
var statearr_118970_120145 = state_118954;
(statearr_118970_120145[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_118954[(4)]))){
var statearr_118971_120146 = state_118954;
(statearr_118971_120146[(1)] = cljs.core.first((state_118954[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120147 = state_118954;
state_118954 = G__120147;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__ = function(state_118954){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1.call(this,state_118954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_lp_pool_symbols_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_118972 = f__36777__auto__();
(statearr_118972[(6)] = c__36776__auto__);

return statearr_118972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_total_pool_reserves = (function lpdashboard$core$_LT_total_pool_reserves(lp_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119030){
var state_val_119031 = (state_119030[(1)]);
if((state_val_119031 === (7))){
var inst_118991 = (state_119030[(7)]);
var inst_118998 = (function(){throw inst_118991})();
var state_119030__$1 = state_119030;
var statearr_119032_120148 = state_119030__$1;
(statearr_119032_120148[(2)] = inst_118998);

(statearr_119032_120148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (1))){
var inst_118973 = (state_119030[(8)]);
var inst_118973__$1 = lpdashboard.ethereum.make_erc20(lp_address);
var inst_118974 = inst_118973__$1.token0();
var inst_118975 = cljs.core.async.interop.p__GT_c(inst_118974);
var state_119030__$1 = (function (){var statearr_119033 = state_119030;
(statearr_119033[(8)] = inst_118973__$1);

return statearr_119033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119030__$1,(2),inst_118975);
} else {
if((state_val_119031 === (4))){
var inst_118977 = (state_119030[(9)]);
var state_119030__$1 = state_119030;
var statearr_119034_120149 = state_119030__$1;
(statearr_119034_120149[(2)] = inst_118977);

(statearr_119034_120149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (15))){
var inst_119004 = (state_119030[(10)]);
var inst_119007 = (state_119030[(11)]);
var inst_119021 = (state_119030[(2)]);
var inst_119022 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119023 = cljs.core.first(inst_119021);
var inst_119024 = lpdashboard.utils.ebn__GT_bn(inst_119023,inst_119004);
var inst_119025 = cljs.core.second(inst_119021);
var inst_119026 = lpdashboard.utils.ebn__GT_bn(inst_119025,inst_119007);
var inst_119027 = [inst_119024,inst_119026];
var inst_119028 = (new cljs.core.PersistentVector(null,2,(5),inst_119022,inst_119027,null));
var state_119030__$1 = state_119030;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119030__$1,inst_119028);
} else {
if((state_val_119031 === (13))){
var inst_119011 = (state_119030[(12)]);
var inst_119018 = (function(){throw inst_119011})();
var state_119030__$1 = state_119030;
var statearr_119035_120150 = state_119030__$1;
(statearr_119035_120150[(2)] = inst_119018);

(statearr_119035_120150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (6))){
var inst_118991 = (state_119030[(7)]);
var inst_118991__$1 = (state_119030[(2)]);
var inst_118992 = (inst_118991__$1 instanceof cljs.core.ExceptionInfo);
var inst_118993 = cljs.core.ex_data(inst_118991__$1);
var inst_118994 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118993);
var inst_118995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118994,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118996 = ((inst_118992) && (inst_118995));
var state_119030__$1 = (function (){var statearr_119036 = state_119030;
(statearr_119036[(7)] = inst_118991__$1);

return statearr_119036;
})();
if(cljs.core.truth_(inst_118996)){
var statearr_119037_120151 = state_119030__$1;
(statearr_119037_120151[(1)] = (7));

} else {
var statearr_119038_120152 = state_119030__$1;
(statearr_119038_120152[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (3))){
var inst_118977 = (state_119030[(9)]);
var inst_118984 = (function(){throw inst_118977})();
var state_119030__$1 = state_119030;
var statearr_119039_120153 = state_119030__$1;
(statearr_119039_120153[(2)] = inst_118984);

(statearr_119039_120153[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (12))){
var inst_119011 = (state_119030[(12)]);
var inst_119011__$1 = (state_119030[(2)]);
var inst_119012 = (inst_119011__$1 instanceof cljs.core.ExceptionInfo);
var inst_119013 = cljs.core.ex_data(inst_119011__$1);
var inst_119014 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119013);
var inst_119015 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119014,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119016 = ((inst_119012) && (inst_119015));
var state_119030__$1 = (function (){var statearr_119040 = state_119030;
(statearr_119040[(12)] = inst_119011__$1);

return statearr_119040;
})();
if(cljs.core.truth_(inst_119016)){
var statearr_119041_120154 = state_119030__$1;
(statearr_119041_120154[(1)] = (13));

} else {
var statearr_119042_120155 = state_119030__$1;
(statearr_119042_120155[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (2))){
var inst_118977 = (state_119030[(9)]);
var inst_118977__$1 = (state_119030[(2)]);
var inst_118978 = (inst_118977__$1 instanceof cljs.core.ExceptionInfo);
var inst_118979 = cljs.core.ex_data(inst_118977__$1);
var inst_118980 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_118979);
var inst_118981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_118980,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_118982 = ((inst_118978) && (inst_118981));
var state_119030__$1 = (function (){var statearr_119043 = state_119030;
(statearr_119043[(9)] = inst_118977__$1);

return statearr_119043;
})();
if(cljs.core.truth_(inst_118982)){
var statearr_119044_120156 = state_119030__$1;
(statearr_119044_120156[(1)] = (3));

} else {
var statearr_119045_120157 = state_119030__$1;
(statearr_119045_120157[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (11))){
var inst_118973 = (state_119030[(8)]);
var inst_119007 = (state_119030[(2)]);
var inst_119008 = inst_118973.getReserves();
var inst_119009 = cljs.core.async.interop.p__GT_c(inst_119008);
var state_119030__$1 = (function (){var statearr_119046 = state_119030;
(statearr_119046[(11)] = inst_119007);

return statearr_119046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119030__$1,(12),inst_119009);
} else {
if((state_val_119031 === (9))){
var inst_118987 = (state_119030[(13)]);
var inst_119001 = (state_119030[(2)]);
var inst_119002 = lpdashboard.ethereum._LT_token_decimals(inst_118987);
var state_119030__$1 = (function (){var statearr_119047 = state_119030;
(statearr_119047[(14)] = inst_119001);

return statearr_119047;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119030__$1,(10),inst_119002);
} else {
if((state_val_119031 === (5))){
var inst_118973 = (state_119030[(8)]);
var inst_118987 = (state_119030[(2)]);
var inst_118988 = inst_118973.token1();
var inst_118989 = cljs.core.async.interop.p__GT_c(inst_118988);
var state_119030__$1 = (function (){var statearr_119048 = state_119030;
(statearr_119048[(13)] = inst_118987);

return statearr_119048;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119030__$1,(6),inst_118989);
} else {
if((state_val_119031 === (14))){
var inst_119011 = (state_119030[(12)]);
var state_119030__$1 = state_119030;
var statearr_119049_120158 = state_119030__$1;
(statearr_119049_120158[(2)] = inst_119011);

(statearr_119049_120158[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119031 === (10))){
var inst_119001 = (state_119030[(14)]);
var inst_119004 = (state_119030[(2)]);
var inst_119005 = lpdashboard.ethereum._LT_token_decimals(inst_119001);
var state_119030__$1 = (function (){var statearr_119050 = state_119030;
(statearr_119050[(10)] = inst_119004);

return statearr_119050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119030__$1,(11),inst_119005);
} else {
if((state_val_119031 === (8))){
var inst_118991 = (state_119030[(7)]);
var state_119030__$1 = state_119030;
var statearr_119051_120159 = state_119030__$1;
(statearr_119051_120159[(2)] = inst_118991);

(statearr_119051_120159[(1)] = (9));


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
}
}
});
return (function() {
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0 = (function (){
var statearr_119052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119052[(0)] = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__);

(statearr_119052[(1)] = (1));

return statearr_119052;
});
var lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1 = (function (state_119030){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119030);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119053){var ex__36688__auto__ = e119053;
var statearr_119054_120160 = state_119030;
(statearr_119054_120160[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119030[(4)]))){
var statearr_119055_120161 = state_119030;
(statearr_119055_120161[(1)] = cljs.core.first((state_119030[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120162 = state_119030;
state_119030 = G__120162;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__ = function(state_119030){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1.call(this,state_119030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_total_pool_reserves_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119056 = f__36777__auto__();
(statearr_119056[(6)] = c__36776__auto__);

return statearr_119056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.staked_lps = (function lpdashboard$core$staked_lps(staked_proportion,staked_balance){
return bignumber.core._STAR_(staked_proportion,staked_balance);
});
lpdashboard.core.proportion_reserves = (function lpdashboard$core$proportion_reserves(token_reserve,lp_proportion){
return bignumber.core._STAR_(token_reserve,lp_proportion);
});
lpdashboard.core.proportion_lps = (function lpdashboard$core$proportion_lps(lps,total_lps){
return bignumber.core._SLASH_(lps,total_lps);
});
lpdashboard.core.staked_positions = (function lpdashboard$core$staked_positions(lp_reserves,total_lps,lp_staked,lp_symbols){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635),lp_staked,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),lpdashboard.core.proportion_reserves(cljs.core.first(lp_reserves),lpdashboard.core.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),cljs.core.first(lp_symbols),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),lpdashboard.core.proportion_reserves(cljs.core.second(lp_reserves),lpdashboard.core.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),cljs.core.second(lp_symbols)], null);
});
lpdashboard.core._LT_make_sashimi_pool_index = (function lpdashboard$core$_LT_make_sashimi_pool_index(staking_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119082){
var state_val_119083 = (state_119082[(1)]);
if((state_val_119083 === (1))){
var inst_119057 = (state_119082[(7)]);
var inst_119057__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var inst_119058 = inst_119057__$1.poolLength();
var inst_119059 = cljs.core.async.interop.p__GT_c(inst_119058);
var state_119082__$1 = (function (){var statearr_119084 = state_119082;
(statearr_119084[(7)] = inst_119057__$1);

return statearr_119084;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119082__$1,(2),inst_119059);
} else {
if((state_val_119083 === (2))){
var inst_119061 = (state_119082[(8)]);
var inst_119061__$1 = (state_119082[(2)]);
var inst_119062 = (inst_119061__$1 instanceof cljs.core.ExceptionInfo);
var inst_119063 = cljs.core.ex_data(inst_119061__$1);
var inst_119064 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119063);
var inst_119065 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119064,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119066 = ((inst_119062) && (inst_119065));
var state_119082__$1 = (function (){var statearr_119085 = state_119082;
(statearr_119085[(8)] = inst_119061__$1);

return statearr_119085;
})();
if(cljs.core.truth_(inst_119066)){
var statearr_119086_120163 = state_119082__$1;
(statearr_119086_120163[(1)] = (3));

} else {
var statearr_119087_120164 = state_119082__$1;
(statearr_119087_120164[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119083 === (3))){
var inst_119061 = (state_119082[(8)]);
var inst_119068 = (function(){throw inst_119061})();
var state_119082__$1 = state_119082;
var statearr_119088_120165 = state_119082__$1;
(statearr_119088_120165[(2)] = inst_119068);

(statearr_119088_120165[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119083 === (4))){
var inst_119061 = (state_119082[(8)]);
var state_119082__$1 = state_119082;
var statearr_119089_120166 = state_119082__$1;
(statearr_119089_120166[(2)] = inst_119061);

(statearr_119089_120166[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119083 === (5))){
var inst_119057 = (state_119082[(7)]);
var inst_119071 = (state_119082[(2)]);
var inst_119072 = cljs.core.identity(inst_119071);
var inst_119073 = (function (){var contract = inst_119057;
var many_pools = inst_119072;
return (function (p){
var c__36776__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119110){
var state_val_119111 = (state_119110[(1)]);
if((state_val_119111 === (1))){
var inst_119090 = contract.poolInfo(p);
var inst_119091 = cljs.core.async.interop.p__GT_c(inst_119090);
var state_119110__$1 = state_119110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119110__$1,(2),inst_119091);
} else {
if((state_val_119111 === (2))){
var inst_119093 = (state_119110[(7)]);
var inst_119093__$1 = (state_119110[(2)]);
var inst_119094 = (inst_119093__$1 instanceof cljs.core.ExceptionInfo);
var inst_119095 = cljs.core.ex_data(inst_119093__$1);
var inst_119096 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119095);
var inst_119097 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119096,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119098 = ((inst_119094) && (inst_119097));
var state_119110__$1 = (function (){var statearr_119112 = state_119110;
(statearr_119112[(7)] = inst_119093__$1);

return statearr_119112;
})();
if(cljs.core.truth_(inst_119098)){
var statearr_119113_120167 = state_119110__$1;
(statearr_119113_120167[(1)] = (3));

} else {
var statearr_119114_120168 = state_119110__$1;
(statearr_119114_120168[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119111 === (3))){
var inst_119093 = (state_119110[(7)]);
var inst_119100 = (function(){throw inst_119093})();
var state_119110__$1 = state_119110;
var statearr_119115_120169 = state_119110__$1;
(statearr_119115_120169[(2)] = inst_119100);

(statearr_119115_120169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119111 === (4))){
var inst_119093 = (state_119110[(7)]);
var state_119110__$1 = state_119110;
var statearr_119116_120170 = state_119110__$1;
(statearr_119116_120170[(2)] = inst_119093);

(statearr_119116_120170[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119111 === (5))){
var inst_119103 = (state_119110[(2)]);
var inst_119104 = cljs.core.first(inst_119103);
var inst_119105 = clojure.string.lower_case(inst_119104);
var inst_119106 = [inst_119105];
var inst_119107 = [p];
var inst_119108 = cljs.core.PersistentHashMap.fromArrays(inst_119106,inst_119107);
var state_119110__$1 = state_119110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119110__$1,inst_119108);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0 = (function (){
var statearr_119117 = [null,null,null,null,null,null,null,null];
(statearr_119117[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_119117[(1)] = (1));

return statearr_119117;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_119110){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119110);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119118){var ex__36688__auto__ = e119118;
var statearr_119119_120171 = state_119110;
(statearr_119119_120171[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119110[(4)]))){
var statearr_119120_120172 = state_119110;
(statearr_119120_120172[(1)] = cljs.core.first((state_119110[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120173 = state_119110;
state_119110 = G__120173;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_119110){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_119110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119121 = f__36777__auto__();
(statearr_119121[(6)] = c__36776__auto____$1);

return statearr_119121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto____$1;
});
})();
var inst_119074 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_119072);
var inst_119075 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119073,inst_119074);
var inst_119076 = cljs.core.PersistentHashMap.EMPTY;
var inst_119077 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_119075);
var inst_119078 = cljs.core.async.reduce(cljs.core.merge,inst_119076,inst_119077);
var state_119082__$1 = state_119082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119082__$1,(6),inst_119078);
} else {
if((state_val_119083 === (6))){
var inst_119080 = (state_119082[(2)]);
var state_119082__$1 = state_119082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119082__$1,inst_119080);
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
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0 = (function (){
var statearr_119122 = [null,null,null,null,null,null,null,null,null];
(statearr_119122[(0)] = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__);

(statearr_119122[(1)] = (1));

return statearr_119122;
});
var lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1 = (function (state_119082){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119082);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119123){var ex__36688__auto__ = e119123;
var statearr_119124_120174 = state_119082;
(statearr_119124_120174[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119082[(4)]))){
var statearr_119125_120175 = state_119082;
(statearr_119125_120175[(1)] = cljs.core.first((state_119082[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120176 = state_119082;
state_119082 = G__120176;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__ = function(state_119082){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1.call(this,state_119082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_make_sashimi_pool_index_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119126 = f__36777__auto__();
(statearr_119126[(6)] = c__36776__auto__);

return statearr_119126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.make_paid_rewards = (function lpdashboard$core$make_paid_rewards(parsed_transfer){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(parsed_transfer)], null);
});
lpdashboard.core._LT_staked_lp_positions_sr = (function lpdashboard$core$_LT_staked_lp_positions_sr(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119166){
var state_val_119167 = (state_119166[(1)]);
if((state_val_119167 === (7))){
var inst_119149 = (state_119166[(7)]);
var inst_119145 = (state_119166[(8)]);
var inst_119149__$1 = (state_119166[(2)]);
var inst_119150 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re:",inst_119149__$1], 0));
var inst_119151 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_119145,staking_address,user_address);
var state_119166__$1 = (function (){var statearr_119168 = state_119166;
(statearr_119168[(9)] = inst_119150);

(statearr_119168[(7)] = inst_119149__$1);

return statearr_119168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(8),inst_119151);
} else {
if((state_val_119167 === (1))){
var inst_119127 = lpdashboard.core._LT_staked_prop(staking_address,user_address);
var state_119166__$1 = state_119166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(2),inst_119127);
} else {
if((state_val_119167 === (4))){
var inst_119137 = (state_119166[(10)]);
var inst_119137__$1 = (state_119166[(2)]);
var inst_119138 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["total-unis:",inst_119137__$1], 0));
var inst_119139 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_119166__$1 = (function (){var statearr_119169 = state_119166;
(statearr_119169[(10)] = inst_119137__$1);

(statearr_119169[(11)] = inst_119138);

return statearr_119169;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(5),inst_119139);
} else {
if((state_val_119167 === (6))){
var inst_119145 = (state_119166[(8)]);
var inst_119145__$1 = (state_119166[(2)]);
var inst_119146 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rt:",inst_119145__$1], 0));
var inst_119147 = lpdashboard.core._LT_staking_rewards_earned(staking_address,inst_119145__$1,user_address);
var state_119166__$1 = (function (){var statearr_119170 = state_119166;
(statearr_119170[(12)] = inst_119146);

(statearr_119170[(8)] = inst_119145__$1);

return statearr_119170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(7),inst_119147);
} else {
if((state_val_119167 === (3))){
var inst_119129 = (state_119166[(13)]);
var inst_119133 = (state_119166[(14)]);
var inst_119132 = (state_119166[(2)]);
var inst_119133__$1 = lpdashboard.core.staked_lps(inst_119129,inst_119132);
var inst_119134 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["my-unis:",inst_119133__$1], 0));
var inst_119135 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_119166__$1 = (function (){var statearr_119171 = state_119166;
(statearr_119171[(14)] = inst_119133__$1);

(statearr_119171[(15)] = inst_119134);

return statearr_119171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(4),inst_119135);
} else {
if((state_val_119167 === (2))){
var inst_119129 = (state_119166[(2)]);
var inst_119130 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_119166__$1 = (function (){var statearr_119172 = state_119166;
(statearr_119172[(13)] = inst_119129);

return statearr_119172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(3),inst_119130);
} else {
if((state_val_119167 === (9))){
var inst_119141 = (state_119166[(16)]);
var inst_119137 = (state_119166[(10)]);
var inst_119133 = (state_119166[(14)]);
var inst_119155 = (state_119166[(17)]);
var inst_119149 = (state_119166[(7)]);
var inst_119145 = (state_119166[(8)]);
var inst_119158 = (state_119166[(2)]);
var inst_119159 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["tpr",inst_119158], 0));
var inst_119160 = lpdashboard.core.staked_positions(inst_119158,inst_119137,inst_119133,inst_119141);
var inst_119161 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_119162 = [inst_119149,inst_119145,inst_119155];
var inst_119163 = cljs.core.PersistentHashMap.fromArrays(inst_119161,inst_119162);
var inst_119164 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_119160,inst_119163);
var state_119166__$1 = (function (){var statearr_119173 = state_119166;
(statearr_119173[(18)] = inst_119159);

return statearr_119173;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_119166__$1,inst_119164);
} else {
if((state_val_119167 === (5))){
var inst_119141 = (state_119166[(16)]);
var inst_119141__$1 = (state_119166[(2)]);
var inst_119142 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["lp-symbols:",inst_119141__$1], 0));
var inst_119143 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_119166__$1 = (function (){var statearr_119174 = state_119166;
(statearr_119174[(16)] = inst_119141__$1);

(statearr_119174[(19)] = inst_119142);

return statearr_119174;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(6),inst_119143);
} else {
if((state_val_119167 === (8))){
var inst_119153 = (state_119166[(2)]);
var inst_119154 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rtr:",inst_119153], 0));
var inst_119155 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_119153);
var inst_119156 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_119166__$1 = (function (){var statearr_119175 = state_119166;
(statearr_119175[(17)] = inst_119155);

(statearr_119175[(20)] = inst_119154);

return statearr_119175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119166__$1,(9),inst_119156);
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
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0 = (function (){
var statearr_119176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119176[(0)] = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__);

(statearr_119176[(1)] = (1));

return statearr_119176;
});
var lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1 = (function (state_119166){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119166);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119177){var ex__36688__auto__ = e119177;
var statearr_119178_120177 = state_119166;
(statearr_119178_120177[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119166[(4)]))){
var statearr_119179_120178 = state_119166;
(statearr_119179_120178[(1)] = cljs.core.first((state_119166[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120179 = state_119166;
state_119166 = G__120179;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__ = function(state_119166){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1.call(this,state_119166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sr_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119180 = f__36777__auto__();
(statearr_119180[(6)] = c__36776__auto__);

return statearr_119180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_lpbar = (function lpdashboard$core$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119232){
var state_val_119233 = (state_119232[(1)]);
if((state_val_119233 === (7))){
var inst_119201 = (state_119232[(2)]);
var inst_119202 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_119232__$1 = (function (){var statearr_119234 = state_119232;
(statearr_119234[(7)] = inst_119201);

return statearr_119234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119232__$1,(8),inst_119202);
} else {
if((state_val_119233 === (1))){
var inst_119181 = (state_119232[(8)]);
var inst_119181__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.lpbar_abi,staking_address);
var inst_119182 = inst_119181__$1.lpBalance(user_address);
var inst_119183 = cljs.core.async.interop.p__GT_c(inst_119182);
var state_119232__$1 = (function (){var statearr_119235 = state_119232;
(statearr_119235[(8)] = inst_119181__$1);

return statearr_119235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119232__$1,(2),inst_119183);
} else {
if((state_val_119233 === (4))){
var inst_119185 = (state_119232[(9)]);
var state_119232__$1 = state_119232;
var statearr_119236_120180 = state_119232__$1;
(statearr_119236_120180[(2)] = inst_119185);

(statearr_119236_120180[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (15))){
var inst_119230 = (state_119232[(2)]);
var state_119232__$1 = state_119232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119232__$1,inst_119230);
} else {
if((state_val_119233 === (13))){
var inst_119195 = (state_119232[(10)]);
var inst_119201 = (state_119232[(7)]);
var inst_119204 = (state_119232[(11)]);
var inst_119198 = (state_119232[(12)]);
var inst_119223 = lpdashboard.core.staked_positions(inst_119204,inst_119198,inst_119195,inst_119201);
var state_119232__$1 = state_119232;
var statearr_119237_120181 = state_119232__$1;
(statearr_119237_120181[(2)] = inst_119223);

(statearr_119237_120181[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (6))){
var inst_119198 = (state_119232[(2)]);
var inst_119199 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_119232__$1 = (function (){var statearr_119238 = state_119232;
(statearr_119238[(12)] = inst_119198);

return statearr_119238;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119232__$1,(7),inst_119199);
} else {
if((state_val_119233 === (3))){
var inst_119185 = (state_119232[(9)]);
var inst_119192 = (function(){throw inst_119185})();
var state_119232__$1 = state_119232;
var statearr_119239_120182 = state_119232__$1;
(statearr_119239_120182[(2)] = inst_119192);

(statearr_119239_120182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (12))){
var inst_119218 = (state_119232[(13)]);
var inst_119218__$1 = (state_119232[(2)]);
var inst_119219 = clojure.string.lower_case(inst_119218__$1);
var inst_119220 = clojure.string.lower_case(lp_address);
var inst_119221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119219,inst_119220);
var state_119232__$1 = (function (){var statearr_119240 = state_119232;
(statearr_119240[(13)] = inst_119218__$1);

return statearr_119240;
})();
if(inst_119221){
var statearr_119241_120183 = state_119232__$1;
(statearr_119241_120183[(1)] = (13));

} else {
var statearr_119242_120184 = state_119232__$1;
(statearr_119242_120184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (2))){
var inst_119185 = (state_119232[(9)]);
var inst_119185__$1 = (state_119232[(2)]);
var inst_119186 = (inst_119185__$1 instanceof cljs.core.ExceptionInfo);
var inst_119187 = cljs.core.ex_data(inst_119185__$1);
var inst_119188 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119187);
var inst_119189 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119188,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119190 = ((inst_119186) && (inst_119189));
var state_119232__$1 = (function (){var statearr_119243 = state_119232;
(statearr_119243[(9)] = inst_119185__$1);

return statearr_119243;
})();
if(cljs.core.truth_(inst_119190)){
var statearr_119244_120185 = state_119232__$1;
(statearr_119244_120185[(1)] = (3));

} else {
var statearr_119245_120186 = state_119232__$1;
(statearr_119245_120186[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (11))){
var inst_119208 = (state_119232[(14)]);
var state_119232__$1 = state_119232;
var statearr_119246_120187 = state_119232__$1;
(statearr_119246_120187[(2)] = inst_119208);

(statearr_119246_120187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (9))){
var inst_119208 = (state_119232[(14)]);
var inst_119208__$1 = (state_119232[(2)]);
var inst_119209 = (inst_119208__$1 instanceof cljs.core.ExceptionInfo);
var inst_119210 = cljs.core.ex_data(inst_119208__$1);
var inst_119211 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119210);
var inst_119212 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119211,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119213 = ((inst_119209) && (inst_119212));
var state_119232__$1 = (function (){var statearr_119247 = state_119232;
(statearr_119247[(14)] = inst_119208__$1);

return statearr_119247;
})();
if(cljs.core.truth_(inst_119213)){
var statearr_119248_120188 = state_119232__$1;
(statearr_119248_120188[(1)] = (10));

} else {
var statearr_119249_120189 = state_119232__$1;
(statearr_119249_120189[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (5))){
var inst_119195 = (state_119232[(2)]);
var inst_119196 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_119232__$1 = (function (){var statearr_119250 = state_119232;
(statearr_119250[(10)] = inst_119195);

return statearr_119250;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119232__$1,(6),inst_119196);
} else {
if((state_val_119233 === (14))){
var inst_119218 = (state_119232[(13)]);
var inst_119225 = console.log("lp addresses do not match:",staking_address,lp_address,inst_119218);
var inst_119226 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_119227 = [(0),(0)];
var inst_119228 = cljs.core.PersistentHashMap.fromArrays(inst_119226,inst_119227);
var state_119232__$1 = (function (){var statearr_119251 = state_119232;
(statearr_119251[(15)] = inst_119225);

return statearr_119251;
})();
var statearr_119252_120190 = state_119232__$1;
(statearr_119252_120190[(2)] = inst_119228);

(statearr_119252_120190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (10))){
var inst_119208 = (state_119232[(14)]);
var inst_119215 = (function(){throw inst_119208})();
var state_119232__$1 = state_119232;
var statearr_119253_120191 = state_119232__$1;
(statearr_119253_120191[(2)] = inst_119215);

(statearr_119253_120191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119233 === (8))){
var inst_119181 = (state_119232[(8)]);
var inst_119204 = (state_119232[(2)]);
var inst_119205 = inst_119181.lp();
var inst_119206 = cljs.core.async.interop.p__GT_c(inst_119205);
var state_119232__$1 = (function (){var statearr_119254 = state_119232;
(statearr_119254[(11)] = inst_119204);

return statearr_119254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119232__$1,(9),inst_119206);
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
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0 = (function (){
var statearr_119255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119255[(0)] = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__);

(statearr_119255[(1)] = (1));

return statearr_119255;
});
var lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1 = (function (state_119232){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119232);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119256){var ex__36688__auto__ = e119256;
var statearr_119257_120192 = state_119232;
(statearr_119257_120192[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119232[(4)]))){
var statearr_119258_120193 = state_119232;
(statearr_119258_120193[(1)] = cljs.core.first((state_119232[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120194 = state_119232;
state_119232 = G__120194;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__ = function(state_119232){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1.call(this,state_119232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_lpbar_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119259 = f__36777__auto__();
(statearr_119259[(6)] = c__36776__auto__);

return statearr_119259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_sashimi_plate = (function lpdashboard$core$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119341){
var state_val_119342 = (state_119341[(1)]);
if((state_val_119342 === (7))){
var inst_119289 = (state_119341[(7)]);
var inst_119289__$1 = (state_119341[(2)]);
var inst_119290 = (inst_119289__$1 instanceof cljs.core.ExceptionInfo);
var inst_119291 = cljs.core.ex_data(inst_119289__$1);
var inst_119292 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119291);
var inst_119293 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119292,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119294 = ((inst_119290) && (inst_119293));
var state_119341__$1 = (function (){var statearr_119343 = state_119341;
(statearr_119343[(7)] = inst_119289__$1);

return statearr_119343;
})();
if(cljs.core.truth_(inst_119294)){
var statearr_119344_120195 = state_119341__$1;
(statearr_119344_120195[(1)] = (8));

} else {
var statearr_119345_120196 = state_119341__$1;
(statearr_119345_120196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (20))){
var inst_119284 = (state_119341[(8)]);
var inst_119315 = (state_119341[(9)]);
var inst_119334 = console.log("lp addresses do not match:",inst_119284,lp_address,inst_119315);
var inst_119335 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361)];
var inst_119336 = [(0),(0)];
var inst_119337 = cljs.core.PersistentHashMap.fromArrays(inst_119335,inst_119336);
var state_119341__$1 = (function (){var statearr_119346 = state_119341;
(statearr_119346[(10)] = inst_119334);

return statearr_119346;
})();
var statearr_119347_120197 = state_119341__$1;
(statearr_119347_120197[(2)] = inst_119337);

(statearr_119347_120197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (1))){
var inst_119260 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.erc20_abi,staking_address);
var inst_119261 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(lpdashboard.core.provider,staking_address,user_address);
var state_119341__$1 = (function (){var statearr_119348 = state_119341;
(statearr_119348[(11)] = inst_119260);

return statearr_119348;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(2),inst_119261);
} else {
if((state_val_119342 === (4))){
var inst_119269 = (state_119341[(12)]);
var inst_119276 = (function(){throw inst_119269})();
var state_119341__$1 = state_119341;
var statearr_119349_120198 = state_119341__$1;
(statearr_119349_120198[(2)] = inst_119276);

(statearr_119349_120198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (15))){
var inst_119318 = (state_119341[(2)]);
var inst_119319 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_119341__$1 = (function (){var statearr_119350 = state_119341;
(statearr_119350[(13)] = inst_119318);

return statearr_119350;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(16),inst_119319);
} else {
if((state_val_119342 === (21))){
var inst_119339 = (state_119341[(2)]);
var state_119341__$1 = state_119341;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119341__$1,inst_119339);
} else {
if((state_val_119342 === (13))){
var inst_119304 = (state_119341[(14)]);
var state_119341__$1 = state_119341;
var statearr_119351_120199 = state_119341__$1;
(statearr_119351_120199[(2)] = inst_119304);

(statearr_119351_120199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (6))){
var inst_119263 = (state_119341[(15)]);
var inst_119282 = (state_119341[(16)]);
var inst_119284 = (state_119341[(8)]);
var inst_119285 = (state_119341[(17)]);
var inst_119279 = (state_119341[(2)]);
var inst_119280 = lpdashboard.ethereum.sashimi_iface.parseTransaction(inst_119279);
var inst_119281 = inst_119280.args;
var inst_119282__$1 = inst_119281.pid;
var inst_119283 = cljs.core.first(inst_119263);
var inst_119284__$1 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_119283);
var inst_119285__$1 = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,inst_119284__$1);
var inst_119286 = inst_119285__$1.userInfo(inst_119282__$1,user_address);
var inst_119287 = cljs.core.async.interop.p__GT_c(inst_119286);
var state_119341__$1 = (function (){var statearr_119352 = state_119341;
(statearr_119352[(16)] = inst_119282__$1);

(statearr_119352[(8)] = inst_119284__$1);

(statearr_119352[(17)] = inst_119285__$1);

return statearr_119352;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(7),inst_119287);
} else {
if((state_val_119342 === (17))){
var inst_119324 = (state_119341[(2)]);
var inst_119325 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_119341__$1 = (function (){var statearr_119353 = state_119341;
(statearr_119353[(18)] = inst_119324);

return statearr_119353;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(18),inst_119325);
} else {
if((state_val_119342 === (3))){
var inst_119269 = (state_119341[(12)]);
var inst_119269__$1 = (state_119341[(2)]);
var inst_119270 = (inst_119269__$1 instanceof cljs.core.ExceptionInfo);
var inst_119271 = cljs.core.ex_data(inst_119269__$1);
var inst_119272 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119271);
var inst_119273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119272,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119274 = ((inst_119270) && (inst_119273));
var state_119341__$1 = (function (){var statearr_119354 = state_119341;
(statearr_119354[(12)] = inst_119269__$1);

return statearr_119354;
})();
if(cljs.core.truth_(inst_119274)){
var statearr_119355_120200 = state_119341__$1;
(statearr_119355_120200[(1)] = (4));

} else {
var statearr_119356_120201 = state_119341__$1;
(statearr_119356_120201[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (12))){
var inst_119304 = (state_119341[(14)]);
var inst_119311 = (function(){throw inst_119304})();
var state_119341__$1 = state_119341;
var statearr_119357_120202 = state_119341__$1;
(statearr_119357_120202[(2)] = inst_119311);

(statearr_119357_120202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (2))){
var inst_119263 = (state_119341[(15)]);
var inst_119263__$1 = (state_119341[(2)]);
var inst_119264 = cljs.core.first(inst_119263__$1);
var inst_119265 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_119264);
var inst_119266 = lpdashboard.core.provider.getTransaction(inst_119265);
var inst_119267 = cljs.core.async.interop.p__GT_c(inst_119266);
var state_119341__$1 = (function (){var statearr_119358 = state_119341;
(statearr_119358[(15)] = inst_119263__$1);

return statearr_119358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(3),inst_119267);
} else {
if((state_val_119342 === (19))){
var inst_119324 = (state_119341[(18)]);
var inst_119321 = (state_119341[(19)]);
var inst_119327 = (state_119341[(20)]);
var inst_119300 = (state_119341[(21)]);
var inst_119332 = lpdashboard.core.staked_positions(inst_119327,inst_119321,inst_119300,inst_119324);
var state_119341__$1 = state_119341;
var statearr_119359_120203 = state_119341__$1;
(statearr_119359_120203[(2)] = inst_119332);

(statearr_119359_120203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (11))){
var inst_119304 = (state_119341[(14)]);
var inst_119304__$1 = (state_119341[(2)]);
var inst_119305 = (inst_119304__$1 instanceof cljs.core.ExceptionInfo);
var inst_119306 = cljs.core.ex_data(inst_119304__$1);
var inst_119307 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119306);
var inst_119308 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119307,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119309 = ((inst_119305) && (inst_119308));
var state_119341__$1 = (function (){var statearr_119360 = state_119341;
(statearr_119360[(14)] = inst_119304__$1);

return statearr_119360;
})();
if(cljs.core.truth_(inst_119309)){
var statearr_119361_120204 = state_119341__$1;
(statearr_119361_120204[(1)] = (12));

} else {
var statearr_119362_120205 = state_119341__$1;
(statearr_119362_120205[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (9))){
var inst_119289 = (state_119341[(7)]);
var state_119341__$1 = state_119341;
var statearr_119363_120206 = state_119341__$1;
(statearr_119363_120206[(2)] = inst_119289);

(statearr_119363_120206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (5))){
var inst_119269 = (state_119341[(12)]);
var state_119341__$1 = state_119341;
var statearr_119364_120207 = state_119341__$1;
(statearr_119364_120207[(2)] = inst_119269);

(statearr_119364_120207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (14))){
var inst_119314 = (state_119341[(2)]);
var inst_119315 = cljs.core.first(inst_119314);
var inst_119316 = lpdashboard.core._LT_staking_pool_lps(lp_address,staking_address);
var state_119341__$1 = (function (){var statearr_119365 = state_119341;
(statearr_119365[(9)] = inst_119315);

return statearr_119365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(15),inst_119316);
} else {
if((state_val_119342 === (16))){
var inst_119321 = (state_119341[(2)]);
var inst_119322 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_119341__$1 = (function (){var statearr_119366 = state_119341;
(statearr_119366[(19)] = inst_119321);

return statearr_119366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(17),inst_119322);
} else {
if((state_val_119342 === (10))){
var inst_119282 = (state_119341[(16)]);
var inst_119285 = (state_119341[(17)]);
var inst_119299 = (state_119341[(2)]);
var inst_119300 = cljs.core.first(inst_119299);
var inst_119301 = inst_119285.poolInfo(inst_119282);
var inst_119302 = cljs.core.async.interop.p__GT_c(inst_119301);
var state_119341__$1 = (function (){var statearr_119367 = state_119341;
(statearr_119367[(21)] = inst_119300);

return statearr_119367;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119341__$1,(11),inst_119302);
} else {
if((state_val_119342 === (18))){
var inst_119315 = (state_119341[(9)]);
var inst_119327 = (state_119341[(2)]);
var inst_119328 = clojure.string.lower_case(inst_119315);
var inst_119329 = clojure.string.lower_case(lp_address);
var inst_119330 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119328,inst_119329);
var state_119341__$1 = (function (){var statearr_119368 = state_119341;
(statearr_119368[(20)] = inst_119327);

return statearr_119368;
})();
if(inst_119330){
var statearr_119369_120208 = state_119341__$1;
(statearr_119369_120208[(1)] = (19));

} else {
var statearr_119370_120209 = state_119341__$1;
(statearr_119370_120209[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119342 === (8))){
var inst_119289 = (state_119341[(7)]);
var inst_119296 = (function(){throw inst_119289})();
var state_119341__$1 = state_119341;
var statearr_119371_120210 = state_119341__$1;
(statearr_119371_120210[(2)] = inst_119296);

(statearr_119371_120210[(1)] = (10));


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
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0 = (function (){
var statearr_119372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119372[(0)] = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__);

(statearr_119372[(1)] = (1));

return statearr_119372;
});
var lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1 = (function (state_119341){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119341);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119373){var ex__36688__auto__ = e119373;
var statearr_119374_120211 = state_119341;
(statearr_119374_120211[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119341[(4)]))){
var statearr_119375_120212 = state_119341;
(statearr_119375_120212[(1)] = cljs.core.first((state_119341[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120213 = state_119341;
state_119341 = G__120213;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__ = function(state_119341){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1.call(this,state_119341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_sashimi_plate_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119376 = f__36777__auto__();
(statearr_119376[(6)] = c__36776__auto__);

return statearr_119376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions_by_event = (function lpdashboard$core$_LT_staked_lp_positions_by_event(lp_destination,user_address){
var staking_address = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var lp_address = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var tx_hash = new cljs.core.Keyword(null,"txhash","txhash",149174990).cljs$core$IFn$_invoke$arity$1(lp_destination);
var sc = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.event_detector_abi,staking_address);
var sc_uni = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.uni_detector_abi,staking_address);
var cheff_contract = lpdashboard.ethereum.make_contract(lpdashboard.ethereum.sashimi_abi,staking_address);
var deposit_filter = (sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Deposit.call(null,user_address));
var _ = (deposit_filter.fromBlock = (0));
var ___$1 = (deposit_filter.toBlock = "latest");
var staked_filter = (sc.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Staked.call(null,user_address));
var ___$2 = (staked_filter.fromBlock = (0));
var ___$3 = (staked_filter.toBlock = "latest");
var staked_filter2 = (sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc_uni.filters.Staked.call(null,user_address));
var ___$4 = (staked_filter2.fromBlock = (0));
var ___$5 = (staked_filter2.toBlock = "latest");
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119554){
var state_val_119555 = (state_119554[(1)]);
if((state_val_119555 === (7))){
var inst_119404 = (state_119554[(7)]);
var inst_119411 = (function(){throw inst_119404})();
var state_119554__$1 = state_119554;
var statearr_119556_120214 = state_119554__$1;
(statearr_119556_120214[(2)] = inst_119411);

(statearr_119556_120214[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (20))){
var inst_119550 = (state_119554[(2)]);
var state_119554__$1 = state_119554;
var statearr_119557_120215 = state_119554__$1;
(statearr_119557_120215[(2)] = inst_119550);

(statearr_119557_120215[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (27))){
var inst_119466 = (state_119554[(8)]);
var state_119554__$1 = state_119554;
var statearr_119558_120216 = state_119554__$1;
(statearr_119558_120216[(2)] = inst_119466);

(statearr_119558_120216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (1))){
var inst_119383 = (function (){return (function (p1__119377_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__119377_SHARP_.transactionHash);
});
})();
var inst_119384 = lpdashboard.core.provider.getLogs(staked_filter);
var inst_119385 = cljs.core.async.interop.p__GT_c(inst_119384);
var state_119554__$1 = (function (){var statearr_119559 = state_119554;
(statearr_119559[(9)] = inst_119383);

return statearr_119559;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(2),inst_119385);
} else {
if((state_val_119555 === (24))){
var inst_119461 = (state_119554[(10)]);
var inst_119446 = (state_119554[(11)]);
var inst_119460 = (state_119554[(2)]);
var inst_119461__$1 = cljs.core.first(inst_119460);
var inst_119462 = lpdashboard.utils.ebn__GT_bn(inst_119461__$1,(18));
var inst_119463 = cheff_contract.poolInfo(inst_119446);
var inst_119464 = cljs.core.async.interop.p__GT_c(inst_119463);
var state_119554__$1 = (function (){var statearr_119560 = state_119554;
(statearr_119560[(12)] = inst_119462);

(statearr_119560[(10)] = inst_119461__$1);

return statearr_119560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(25),inst_119464);
} else {
if((state_val_119555 === (39))){
var inst_119442 = (state_119554[(13)]);
var inst_119480 = (state_119554[(14)]);
var inst_119499 = (state_119554[(15)]);
var inst_119462 = (state_119554[(12)]);
var inst_119483 = (state_119554[(16)]);
var inst_119445 = (state_119554[(17)]);
var inst_119496 = (state_119554[(18)]);
var inst_119461 = (state_119554[(10)]);
var inst_119446 = (state_119554[(11)]);
var inst_119516 = (state_119554[(19)]);
var inst_119489 = (state_119554[(20)]);
var inst_119506 = (state_119554[(21)]);
var inst_119508 = (state_119554[(22)]);
var inst_119486 = (state_119554[(23)]);
var inst_119493 = (state_119554[(24)]);
var inst_119502 = (state_119554[(25)]);
var inst_119399 = (state_119554[(26)]);
var inst_119504 = (state_119554[(27)]);
var inst_119416 = (state_119554[(28)]);
var inst_119477 = (state_119554[(29)]);
var inst_119476 = (state_119554[(30)]);
var inst_119519 = (state_119554[(2)]);
var inst_119520 = (function (){var staking_pool_lp_address = inst_119477;
var lp_symbols = inst_119483;
var lp_transfers_in = inst_119502;
var rewards_token = inst_119489;
var pool_pid = inst_119446;
var deposit_data = inst_119445;
var lp_deposits = inst_119506;
var my_lps_staked_SINGLEQUOTE_ = inst_119462;
var my_lps_staked = inst_119461;
var all_staking_deposits = inst_119499;
var staked = inst_119399;
var total_pool_reserves = inst_119486;
var pids = inst_119508;
var pool_info = inst_119476;
var reward_transfers = inst_119496;
var staked2 = inst_119416;
var total_unis = inst_119480;
var lp_decimals = (18);
var lp_transfers_hashes = inst_119504;
var all_staking_withdrawals = inst_119519;
var pid = inst_119516;
var rewards_earned = inst_119493;
var deposit = inst_119442;
return (function (p1__119381_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__119381_SHARP_),pid);
});
})();
var inst_119521 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_119519,inst_119499);
var inst_119522 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119520,inst_119521);
var inst_119523 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_119522);
var inst_119524 = cljs.core.set(inst_119523);
var inst_119525 = (function (){var staking_pool_lp_address = inst_119477;
var lp_symbols = inst_119483;
var lp_transfers_in = inst_119502;
var rewards_token = inst_119489;
var pool_pid = inst_119446;
var deposit_data = inst_119445;
var lp_deposits = inst_119506;
var my_lps_staked_SINGLEQUOTE_ = inst_119462;
var my_lps_staked = inst_119461;
var all_staking_deposits = inst_119499;
var staked = inst_119399;
var total_pool_reserves = inst_119486;
var pids = inst_119508;
var pool_info = inst_119476;
var reward_transfers = inst_119496;
var staked2 = inst_119416;
var total_unis = inst_119480;
var relevant_txids = inst_119524;
var lp_decimals = (18);
var lp_transfers_hashes = inst_119504;
var all_staking_withdrawals = inst_119519;
var pid = inst_119516;
var rewards_earned = inst_119493;
var deposit = inst_119442;
return (function (p1__119382_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__119382_SHARP_));
});
})();
var inst_119526 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119525,inst_119496);
var inst_119527 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.make_paid_rewards,inst_119526);
var inst_119528 = clojure.string.lower_case(inst_119477);
var inst_119529 = clojure.string.lower_case(lp_address);
var inst_119530 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119528,inst_119529);
var state_119554__$1 = (function (){var statearr_119561 = state_119554;
(statearr_119561[(31)] = inst_119527);

return statearr_119561;
})();
if(inst_119530){
var statearr_119562_120217 = state_119554__$1;
(statearr_119562_120217[(1)] = (40));

} else {
var statearr_119563_120218 = state_119554__$1;
(statearr_119563_120218[(1)] = (41));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (4))){
var inst_119387 = (state_119554[(32)]);
var state_119554__$1 = state_119554;
var statearr_119564_120219 = state_119554__$1;
(statearr_119564_120219[(2)] = inst_119387);

(statearr_119564_120219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (15))){
var inst_119430 = (state_119554[(33)]);
var inst_119437 = (function(){throw inst_119430})();
var state_119554__$1 = state_119554;
var statearr_119565_120220 = state_119554__$1;
(statearr_119565_120220[(2)] = inst_119437);

(statearr_119565_120220[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (21))){
var inst_119450 = (state_119554[(34)]);
var inst_119450__$1 = (state_119554[(2)]);
var inst_119451 = (inst_119450__$1 instanceof cljs.core.ExceptionInfo);
var inst_119452 = cljs.core.ex_data(inst_119450__$1);
var inst_119453 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119452);
var inst_119454 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119453,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119455 = ((inst_119451) && (inst_119454));
var state_119554__$1 = (function (){var statearr_119566 = state_119554;
(statearr_119566[(34)] = inst_119450__$1);

return statearr_119566;
})();
if(cljs.core.truth_(inst_119455)){
var statearr_119567_120221 = state_119554__$1;
(statearr_119567_120221[(1)] = (22));

} else {
var statearr_119568_120222 = state_119554__$1;
(statearr_119568_120222[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (31))){
var inst_119486 = (state_119554[(2)]);
var inst_119487 = lpdashboard.core._LT_staking_rewards_token(staking_address);
var state_119554__$1 = (function (){var statearr_119569 = state_119554;
(statearr_119569[(23)] = inst_119486);

return statearr_119569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(32),inst_119487);
} else {
if((state_val_119555 === (32))){
var inst_119489 = (state_119554[(20)]);
var inst_119489__$1 = (state_119554[(2)]);
var inst_119490 = [new cljs.core.Keyword(null,"qty","qty",155560951)];
var inst_119491 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_119492 = [inst_119491];
var inst_119493 = cljs.core.PersistentHashMap.fromArrays(inst_119490,inst_119492);
var inst_119494 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,inst_119489__$1,staking_address,user_address);
var state_119554__$1 = (function (){var statearr_119570 = state_119554;
(statearr_119570[(20)] = inst_119489__$1);

(statearr_119570[(24)] = inst_119493);

return statearr_119570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(33),inst_119494);
} else {
if((state_val_119555 === (40))){
var inst_119480 = (state_119554[(14)]);
var inst_119462 = (state_119554[(12)]);
var inst_119483 = (state_119554[(16)]);
var inst_119527 = (state_119554[(31)]);
var inst_119489 = (state_119554[(20)]);
var inst_119486 = (state_119554[(23)]);
var inst_119493 = (state_119554[(24)]);
var inst_119532 = lpdashboard.core.staked_positions(inst_119486,inst_119480,inst_119462,inst_119483);
var inst_119533 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_119534 = [inst_119493,inst_119489,inst_119527];
var inst_119535 = cljs.core.PersistentHashMap.fromArrays(inst_119533,inst_119534);
var inst_119536 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_119532,inst_119535);
var state_119554__$1 = state_119554;
var statearr_119571_120223 = state_119554__$1;
(statearr_119571_120223[(2)] = inst_119536);

(statearr_119571_120223[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (33))){
var inst_119496 = (state_119554[(2)]);
var inst_119497 = lpdashboard.ethereum._LT_user_token_deposits(lpdashboard.core.provider,staking_address,user_address);
var state_119554__$1 = (function (){var statearr_119572 = state_119554;
(statearr_119572[(18)] = inst_119496);

return statearr_119572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(34),inst_119497);
} else {
if((state_val_119555 === (13))){
var inst_119424 = (state_119554[(2)]);
var state_119554__$1 = state_119554;
var statearr_119573_120224 = state_119554__$1;
(statearr_119573_120224[(2)] = inst_119424);

(statearr_119573_120224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (22))){
var inst_119450 = (state_119554[(34)]);
var inst_119457 = (function(){throw inst_119450})();
var state_119554__$1 = state_119554;
var statearr_119574_120225 = state_119554__$1;
(statearr_119574_120225[(2)] = inst_119457);

(statearr_119574_120225[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (36))){
var inst_119508 = (state_119554[(22)]);
var inst_119512 = cljs.core.first(inst_119508);
var state_119554__$1 = state_119554;
var statearr_119575_120226 = state_119554__$1;
(statearr_119575_120226[(2)] = inst_119512);

(statearr_119575_120226[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (41))){
var inst_119480 = (state_119554[(14)]);
var inst_119483 = (state_119554[(16)]);
var inst_119527 = (state_119554[(31)]);
var inst_119446 = (state_119554[(11)]);
var inst_119489 = (state_119554[(20)]);
var inst_119486 = (state_119554[(23)]);
var inst_119493 = (state_119554[(24)]);
var inst_119477 = (state_119554[(29)]);
var inst_119538 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_119446);
var inst_119539 = console.log("lp addresses do not match:",staking_address,lp_address,inst_119477,"pid",inst_119538);
var inst_119540 = (new module$node_modules$bignumber_DOT_js$bignumber("0"));
var inst_119541 = lpdashboard.core.staked_positions(inst_119486,inst_119480,inst_119540,inst_119483);
var inst_119542 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_119543 = [inst_119493,inst_119489,inst_119527];
var inst_119544 = cljs.core.PersistentHashMap.fromArrays(inst_119542,inst_119543);
var inst_119545 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_119541,inst_119544);
var state_119554__$1 = (function (){var statearr_119576 = state_119554;
(statearr_119576[(35)] = inst_119539);

return statearr_119576;
})();
var statearr_119577_120227 = state_119554__$1;
(statearr_119577_120227[(2)] = inst_119545);

(statearr_119577_120227[(1)] = (42));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (29))){
var inst_119480 = (state_119554[(2)]);
var inst_119481 = lpdashboard.core._LT_lp_pool_symbols(lp_address);
var state_119554__$1 = (function (){var statearr_119578 = state_119554;
(statearr_119578[(14)] = inst_119480);

return statearr_119578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(30),inst_119481);
} else {
if((state_val_119555 === (6))){
var inst_119404 = (state_119554[(7)]);
var inst_119404__$1 = (state_119554[(2)]);
var inst_119405 = (inst_119404__$1 instanceof cljs.core.ExceptionInfo);
var inst_119406 = cljs.core.ex_data(inst_119404__$1);
var inst_119407 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119406);
var inst_119408 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119407,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119409 = ((inst_119405) && (inst_119408));
var state_119554__$1 = (function (){var statearr_119579 = state_119554;
(statearr_119579[(7)] = inst_119404__$1);

return statearr_119579;
})();
if(cljs.core.truth_(inst_119409)){
var statearr_119580_120228 = state_119554__$1;
(statearr_119580_120228[(1)] = (7));

} else {
var statearr_119581_120229 = state_119554__$1;
(statearr_119581_120229[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (28))){
var inst_119476 = (state_119554[(30)]);
var inst_119476__$1 = (state_119554[(2)]);
var inst_119477 = cljs.core.first(inst_119476__$1);
var inst_119478 = lpdashboard.core._LT_total_pool_lps(lp_address);
var state_119554__$1 = (function (){var statearr_119582 = state_119554;
(statearr_119582[(29)] = inst_119477);

(statearr_119582[(30)] = inst_119476__$1);

return statearr_119582;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(29),inst_119478);
} else {
if((state_val_119555 === (25))){
var inst_119466 = (state_119554[(8)]);
var inst_119466__$1 = (state_119554[(2)]);
var inst_119467 = (inst_119466__$1 instanceof cljs.core.ExceptionInfo);
var inst_119468 = cljs.core.ex_data(inst_119466__$1);
var inst_119469 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119468);
var inst_119470 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119469,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119471 = ((inst_119467) && (inst_119470));
var state_119554__$1 = (function (){var statearr_119583 = state_119554;
(statearr_119583[(8)] = inst_119466__$1);

return statearr_119583;
})();
if(cljs.core.truth_(inst_119471)){
var statearr_119584_120230 = state_119554__$1;
(statearr_119584_120230[(1)] = (26));

} else {
var statearr_119585_120231 = state_119554__$1;
(statearr_119585_120231[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (34))){
var inst_119499 = (state_119554[(2)]);
var inst_119500 = lpdashboard.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(lpdashboard.core.provider,lp_address,user_address,staking_address);
var state_119554__$1 = (function (){var statearr_119586 = state_119554;
(statearr_119586[(15)] = inst_119499);

return statearr_119586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(35),inst_119500);
} else {
if((state_val_119555 === (17))){
var inst_119442 = (state_119554[(13)]);
var inst_119426 = (state_119554[(36)]);
var inst_119440 = (state_119554[(2)]);
var inst_119441 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119426,inst_119440);
var inst_119442__$1 = cljs.core.first(inst_119441);
var inst_119443 = (inst_119442__$1 == null);
var state_119554__$1 = (function (){var statearr_119587 = state_119554;
(statearr_119587[(13)] = inst_119442__$1);

return statearr_119587;
})();
if(cljs.core.truth_(inst_119443)){
var statearr_119588_120232 = state_119554__$1;
(statearr_119588_120232[(1)] = (18));

} else {
var statearr_119589_120233 = state_119554__$1;
(statearr_119589_120233[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (3))){
var inst_119387 = (state_119554[(32)]);
var inst_119394 = (function(){throw inst_119387})();
var state_119554__$1 = state_119554;
var statearr_119590_120234 = state_119554__$1;
(statearr_119590_120234[(2)] = inst_119394);

(statearr_119590_120234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (12))){
var inst_119552 = (state_119554[(2)]);
var state_119554__$1 = state_119554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119554__$1,inst_119552);
} else {
if((state_val_119555 === (2))){
var inst_119387 = (state_119554[(32)]);
var inst_119387__$1 = (state_119554[(2)]);
var inst_119388 = (inst_119387__$1 instanceof cljs.core.ExceptionInfo);
var inst_119389 = cljs.core.ex_data(inst_119387__$1);
var inst_119390 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119389);
var inst_119391 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119390,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119392 = ((inst_119388) && (inst_119391));
var state_119554__$1 = (function (){var statearr_119591 = state_119554;
(statearr_119591[(32)] = inst_119387__$1);

return statearr_119591;
})();
if(cljs.core.truth_(inst_119392)){
var statearr_119592_120235 = state_119554__$1;
(statearr_119592_120235[(1)] = (3));

} else {
var statearr_119593_120236 = state_119554__$1;
(statearr_119593_120236[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (23))){
var inst_119450 = (state_119554[(34)]);
var state_119554__$1 = state_119554;
var statearr_119594_120237 = state_119554__$1;
(statearr_119594_120237[(2)] = inst_119450);

(statearr_119594_120237[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (35))){
var inst_119442 = (state_119554[(13)]);
var inst_119480 = (state_119554[(14)]);
var inst_119499 = (state_119554[(15)]);
var inst_119462 = (state_119554[(12)]);
var inst_119483 = (state_119554[(16)]);
var inst_119445 = (state_119554[(17)]);
var inst_119496 = (state_119554[(18)]);
var inst_119461 = (state_119554[(10)]);
var inst_119446 = (state_119554[(11)]);
var inst_119489 = (state_119554[(20)]);
var inst_119506 = (state_119554[(21)]);
var inst_119508 = (state_119554[(22)]);
var inst_119486 = (state_119554[(23)]);
var inst_119493 = (state_119554[(24)]);
var inst_119502 = (state_119554[(25)]);
var inst_119399 = (state_119554[(26)]);
var inst_119504 = (state_119554[(27)]);
var inst_119416 = (state_119554[(28)]);
var inst_119477 = (state_119554[(29)]);
var inst_119476 = (state_119554[(30)]);
var inst_119502__$1 = (state_119554[(2)]);
var inst_119503 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_119502__$1);
var inst_119504__$1 = cljs.core.set(inst_119503);
var inst_119505 = (function (){var staking_pool_lp_address = inst_119477;
var lp_symbols = inst_119483;
var lp_transfers_in = inst_119502__$1;
var rewards_token = inst_119489;
var pool_pid = inst_119446;
var deposit_data = inst_119445;
var my_lps_staked_SINGLEQUOTE_ = inst_119462;
var my_lps_staked = inst_119461;
var all_staking_deposits = inst_119499;
var staked = inst_119399;
var total_pool_reserves = inst_119486;
var pool_info = inst_119476;
var reward_transfers = inst_119496;
var staked2 = inst_119416;
var total_unis = inst_119480;
var lp_decimals = (18);
var lp_transfers_hashes = inst_119504__$1;
var rewards_earned = inst_119493;
var deposit = inst_119442;
return (function (p1__119380_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__119380_SHARP_));
});
})();
var inst_119506__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119505,inst_119499);
var inst_119507 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_119506__$1);
var inst_119508__$1 = cljs.core.set(inst_119507);
var inst_119509 = cljs.core.count(inst_119508__$1);
var inst_119510 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_119509,(1));
var state_119554__$1 = (function (){var statearr_119595 = state_119554;
(statearr_119595[(21)] = inst_119506__$1);

(statearr_119595[(22)] = inst_119508__$1);

(statearr_119595[(25)] = inst_119502__$1);

(statearr_119595[(27)] = inst_119504__$1);

return statearr_119595;
})();
if(inst_119510){
var statearr_119596_120238 = state_119554__$1;
(statearr_119596_120238[(1)] = (36));

} else {
var statearr_119597_120239 = state_119554__$1;
(statearr_119597_120239[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (19))){
var state_119554__$1 = state_119554;
var statearr_119598_120240 = state_119554__$1;
(statearr_119598_120240[(2)] = null);

(statearr_119598_120240[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (11))){
var inst_119399 = (state_119554[(26)]);
var inst_119416 = (state_119554[(28)]);
var inst_119426 = (function (){var staked = inst_119399;
var staked2 = inst_119416;
return (function (p1__119379_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__119379_SHARP_.transactionHash);
});
})();
var inst_119427 = lpdashboard.core.provider.getLogs(deposit_filter);
var inst_119428 = cljs.core.async.interop.p__GT_c(inst_119427);
var state_119554__$1 = (function (){var statearr_119599 = state_119554;
(statearr_119599[(36)] = inst_119426);

return statearr_119599;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(14),inst_119428);
} else {
if((state_val_119555 === (9))){
var inst_119400 = (state_119554[(37)]);
var inst_119399 = (state_119554[(26)]);
var inst_119416 = (state_119554[(28)]);
var inst_119414 = (state_119554[(2)]);
var inst_119415 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119400,inst_119414);
var inst_119416__$1 = cljs.core.first(inst_119415);
var inst_119417 = (inst_119399 == null);
var inst_119418 = (inst_119416__$1 == null);
var inst_119419 = ((inst_119417) && (inst_119418));
var inst_119420 = cljs.core.not(inst_119419);
var state_119554__$1 = (function (){var statearr_119600 = state_119554;
(statearr_119600[(28)] = inst_119416__$1);

return statearr_119600;
})();
if(inst_119420){
var statearr_119601_120241 = state_119554__$1;
(statearr_119601_120241[(1)] = (10));

} else {
var statearr_119602_120242 = state_119554__$1;
(statearr_119602_120242[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (5))){
var inst_119383 = (state_119554[(9)]);
var inst_119399 = (state_119554[(26)]);
var inst_119397 = (state_119554[(2)]);
var inst_119398 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119383,inst_119397);
var inst_119399__$1 = cljs.core.first(inst_119398);
var inst_119400 = (function (){var staked = inst_119399__$1;
return (function (p1__119378_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__119378_SHARP_.transactionHash);
});
})();
var inst_119401 = lpdashboard.core.provider.getLogs(staked_filter2);
var inst_119402 = cljs.core.async.interop.p__GT_c(inst_119401);
var state_119554__$1 = (function (){var statearr_119603 = state_119554;
(statearr_119603[(37)] = inst_119400);

(statearr_119603[(26)] = inst_119399__$1);

return statearr_119603;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(6),inst_119402);
} else {
if((state_val_119555 === (14))){
var inst_119430 = (state_119554[(33)]);
var inst_119430__$1 = (state_119554[(2)]);
var inst_119431 = (inst_119430__$1 instanceof cljs.core.ExceptionInfo);
var inst_119432 = cljs.core.ex_data(inst_119430__$1);
var inst_119433 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119432);
var inst_119434 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119433,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119435 = ((inst_119431) && (inst_119434));
var state_119554__$1 = (function (){var statearr_119604 = state_119554;
(statearr_119604[(33)] = inst_119430__$1);

return statearr_119604;
})();
if(cljs.core.truth_(inst_119435)){
var statearr_119605_120243 = state_119554__$1;
(statearr_119605_120243[(1)] = (15));

} else {
var statearr_119606_120244 = state_119554__$1;
(statearr_119606_120244[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (26))){
var inst_119466 = (state_119554[(8)]);
var inst_119473 = (function(){throw inst_119466})();
var state_119554__$1 = state_119554;
var statearr_119607_120245 = state_119554__$1;
(statearr_119607_120245[(2)] = inst_119473);

(statearr_119607_120245[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (16))){
var inst_119430 = (state_119554[(33)]);
var state_119554__$1 = state_119554;
var statearr_119608_120246 = state_119554__$1;
(statearr_119608_120246[(2)] = inst_119430);

(statearr_119608_120246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (38))){
var inst_119516 = (state_119554[(2)]);
var inst_119517 = lpdashboard.ethereum._LT_user_token_withdrawals(lpdashboard.core.provider,staking_address,user_address);
var state_119554__$1 = (function (){var statearr_119609 = state_119554;
(statearr_119609[(19)] = inst_119516);

return statearr_119609;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(39),inst_119517);
} else {
if((state_val_119555 === (30))){
var inst_119483 = (state_119554[(2)]);
var inst_119484 = lpdashboard.core._LT_total_pool_reserves(lp_address);
var state_119554__$1 = (function (){var statearr_119610 = state_119554;
(statearr_119610[(16)] = inst_119483);

return statearr_119610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(31),inst_119484);
} else {
if((state_val_119555 === (10))){
var inst_119422 = lpdashboard.core._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_119554__$1 = state_119554;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(13),inst_119422);
} else {
if((state_val_119555 === (18))){
var inst_119442 = (state_119554[(13)]);
var inst_119445 = (state_119554[(17)]);
var inst_119446 = (state_119554[(11)]);
var inst_119445__$1 = lpdashboard.ethereum.decode_event_data(inst_119442);
var inst_119446__$1 = inst_119445__$1.pid;
var inst_119447 = cheff_contract.userInfo(inst_119446__$1,user_address);
var inst_119448 = cljs.core.async.interop.p__GT_c(inst_119447);
var state_119554__$1 = (function (){var statearr_119611 = state_119554;
(statearr_119611[(17)] = inst_119445__$1);

(statearr_119611[(11)] = inst_119446__$1);

return statearr_119611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119554__$1,(21),inst_119448);
} else {
if((state_val_119555 === (42))){
var inst_119547 = (state_119554[(2)]);
var state_119554__$1 = state_119554;
var statearr_119612_120247 = state_119554__$1;
(statearr_119612_120247[(2)] = inst_119547);

(statearr_119612_120247[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (37))){
var inst_119508 = (state_119554[(22)]);
var inst_119514 = cljs.core.first(inst_119508);
var state_119554__$1 = state_119554;
var statearr_119613_120248 = state_119554__$1;
(statearr_119613_120248[(2)] = inst_119514);

(statearr_119613_120248[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119555 === (8))){
var inst_119404 = (state_119554[(7)]);
var state_119554__$1 = state_119554;
var statearr_119614_120249 = state_119554__$1;
(statearr_119614_120249[(2)] = inst_119404);

(statearr_119614_120249[(1)] = (9));


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
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0 = (function (){
var statearr_119615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119615[(0)] = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__);

(statearr_119615[(1)] = (1));

return statearr_119615;
});
var lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1 = (function (state_119554){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119554);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119616){var ex__36688__auto__ = e119616;
var statearr_119617_120250 = state_119554;
(statearr_119617_120250[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119554[(4)]))){
var statearr_119618_120251 = state_119554;
(statearr_119618_120251[(1)] = cljs.core.first((state_119554[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120252 = state_119554;
state_119554 = G__120252;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__ = function(state_119554){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1.call(this,state_119554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_by_event_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119619 = f__36777__auto__();
(statearr_119619[(6)] = c__36776__auto__);

return statearr_119619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_staked_lp_positions = (function lpdashboard$core$_LT_staked_lp_positions(lp_destination,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119662){
var state_val_119663 = (state_119662[(1)]);
if((state_val_119663 === (7))){
var inst_119633 = (state_119662[(7)]);
var inst_119640 = (function(){throw inst_119633})();
var state_119662__$1 = state_119662;
var statearr_119664_120253 = state_119662__$1;
(statearr_119664_120253[(2)] = inst_119640);

(statearr_119664_120253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (1))){
var inst_119621 = (state_119662[(8)]);
var inst_119620 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_119621__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_119622 = lpdashboard.ethereum.make_erc20(inst_119621__$1);
var state_119662__$1 = (function (){var statearr_119665 = state_119662;
(statearr_119665[(9)] = inst_119622);

(statearr_119665[(8)] = inst_119621__$1);

(statearr_119665[(10)] = inst_119620);

return statearr_119665;
})();
var statearr_119666_120254 = state_119662__$1;
(statearr_119666_120254[(2)] = null);

(statearr_119666_120254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (4))){
var inst_119621 = (state_119662[(8)]);
var inst_119620 = (state_119662[(10)]);
var inst_119623 = (state_119662[(2)]);
var inst_119624 = console.log("no name for lp, stkaing:",inst_119620,inst_119621);
var state_119662__$1 = (function (){var statearr_119667 = state_119662;
(statearr_119667[(11)] = inst_119623);

return statearr_119667;
})();
var statearr_119668_120255 = state_119662__$1;
(statearr_119668_120255[(2)] = inst_119624);

(statearr_119668_120255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (15))){
var inst_119655 = lpdashboard.core._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_119662__$1 = state_119662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119662__$1,(16),inst_119655);
} else {
if((state_val_119663 === (13))){
var inst_119621 = (state_119662[(8)]);
var inst_119620 = (state_119662[(10)]);
var inst_119651 = lpdashboard.core._LT_staked_lp_positions_sashimi_plate(inst_119620,inst_119621,user_address);
var state_119662__$1 = state_119662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119662__$1,(14),inst_119651);
} else {
if((state_val_119663 === (6))){
var inst_119633 = (state_119662[(7)]);
var inst_119633__$1 = (state_119662[(2)]);
var inst_119634 = (inst_119633__$1 instanceof cljs.core.ExceptionInfo);
var inst_119635 = cljs.core.ex_data(inst_119633__$1);
var inst_119636 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_119635);
var inst_119637 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_119636,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_119638 = ((inst_119634) && (inst_119637));
var state_119662__$1 = (function (){var statearr_119669 = state_119662;
(statearr_119669[(7)] = inst_119633__$1);

return statearr_119669;
})();
if(cljs.core.truth_(inst_119638)){
var statearr_119670_120256 = state_119662__$1;
(statearr_119670_120256[(1)] = (7));

} else {
var statearr_119671_120257 = state_119662__$1;
(statearr_119671_120257[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (3))){
var inst_119646 = (state_119662[(2)]);
var state_119662__$1 = state_119662;
var G__119672_120258 = inst_119646;
switch (G__119672_120258) {
case "LpBar":
var statearr_119673_120260 = state_119662__$1;
(statearr_119673_120260[(1)] = (11));


break;
case "sv Uniswap V2":
var statearr_119674_120261 = state_119662__$1;
(statearr_119674_120261[(1)] = (13));


break;
default:
var statearr_119675_120262 = state_119662__$1;
(statearr_119675_120262[(1)] = (15));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (12))){
var inst_119649 = (state_119662[(2)]);
var state_119662__$1 = state_119662;
var statearr_119676_120263 = state_119662__$1;
(statearr_119676_120263[(2)] = inst_119649);

(statearr_119676_120263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (2))){
var inst_119622 = (state_119662[(9)]);
var _ = (function (){var statearr_119677 = state_119662;
(statearr_119677[(4)] = cljs.core.cons((5),(state_119662[(4)])));

return statearr_119677;
})();
var inst_119630 = inst_119622.name();
var inst_119631 = cljs.core.async.interop.p__GT_c(inst_119630);
var state_119662__$1 = state_119662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119662__$1,(6),inst_119631);
} else {
if((state_val_119663 === (11))){
var inst_119621 = (state_119662[(8)]);
var inst_119620 = (state_119662[(10)]);
var inst_119647 = lpdashboard.core._LT_staked_lp_positions_lpbar(inst_119620,inst_119621,user_address);
var state_119662__$1 = state_119662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119662__$1,(12),inst_119647);
} else {
if((state_val_119663 === (9))){
var inst_119643 = (state_119662[(2)]);
var _ = (function (){var statearr_119679 = state_119662;
(statearr_119679[(4)] = cljs.core.rest((state_119662[(4)])));

return statearr_119679;
})();
var state_119662__$1 = state_119662;
var statearr_119680_120264 = state_119662__$1;
(statearr_119680_120264[(2)] = inst_119643);

(statearr_119680_120264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (5))){
var _ = (function (){var statearr_119681 = state_119662;
(statearr_119681[(4)] = cljs.core.rest((state_119662[(4)])));

return statearr_119681;
})();
var state_119662__$1 = state_119662;
var ex119678 = (state_119662__$1[(2)]);
var statearr_119682_120265 = state_119662__$1;
(statearr_119682_120265[(5)] = ex119678);


if((ex119678 instanceof Error)){
var statearr_119683_120266 = state_119662__$1;
(statearr_119683_120266[(1)] = (4));

(statearr_119683_120266[(5)] = null);

} else {
throw ex119678;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (14))){
var inst_119653 = (state_119662[(2)]);
var state_119662__$1 = state_119662;
var statearr_119684_120267 = state_119662__$1;
(statearr_119684_120267[(2)] = inst_119653);

(statearr_119684_120267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (16))){
var inst_119657 = (state_119662[(2)]);
var state_119662__$1 = state_119662;
var statearr_119685_120268 = state_119662__$1;
(statearr_119685_120268[(2)] = inst_119657);

(statearr_119685_120268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_119663 === (10))){
var inst_119660 = (state_119662[(2)]);
var state_119662__$1 = state_119662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119662__$1,inst_119660);
} else {
if((state_val_119663 === (8))){
var inst_119633 = (state_119662[(7)]);
var state_119662__$1 = state_119662;
var statearr_119686_120269 = state_119662__$1;
(statearr_119686_120269[(2)] = inst_119633);

(statearr_119686_120269[(1)] = (9));


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
}
}
}
});
return (function() {
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_119687 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119687[(0)] = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__);

(statearr_119687[(1)] = (1));

return statearr_119687;
});
var lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1 = (function (state_119662){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119662);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119688){var ex__36688__auto__ = e119688;
var statearr_119689_120270 = state_119662;
(statearr_119689_120270[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119662[(4)]))){
var statearr_119690_120271 = state_119662;
(statearr_119690_120271[(1)] = cljs.core.first((state_119662[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120272 = state_119662;
state_119662 = G__120272;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__ = function(state_119662){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1.call(this,state_119662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_staked_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119691 = f__36777__auto__();
(statearr_119691[(6)] = c__36776__auto__);

return statearr_119691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_graph_uniswap_positions = (function lpdashboard$core$_LT_graph_uniswap_positions(user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119705){
var state_val_119706 = (state_119705[(1)]);
if((state_val_119706 === (1))){
var inst_119692 = lpdashboard.thegraph._LT_user_lp_snapshots(user_address);
var state_119705__$1 = state_119705;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119705__$1,(2),inst_119692);
} else {
if((state_val_119706 === (2))){
var inst_119694 = (state_119705[(7)]);
var inst_119694__$1 = (state_119705[(2)]);
var inst_119695 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312));
var inst_119696 = (lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1 ? lpdashboard.core.most_recent_snapshots.cljs$core$IFn$_invoke$arity$1(inst_119694__$1) : lpdashboard.core.most_recent_snapshots.call(null,inst_119694__$1));
var inst_119697 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119695,inst_119696);
var inst_119698 = lpdashboard.thegraph._LT_user_lps(user_address,inst_119697);
var state_119705__$1 = (function (){var statearr_119707 = state_119705;
(statearr_119707[(7)] = inst_119694__$1);

return statearr_119707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119705__$1,(3),inst_119698);
} else {
if((state_val_119706 === (3))){
var inst_119694 = (state_119705[(7)]);
var inst_119700 = (state_119705[(2)]);
var inst_119701 = [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.Keyword(null,"positions","positions",-1380538434)];
var inst_119702 = [user_address,inst_119694,inst_119700];
var inst_119703 = cljs.core.PersistentHashMap.fromArrays(inst_119701,inst_119702);
var state_119705__$1 = state_119705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119705__$1,inst_119703);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_119708 = [null,null,null,null,null,null,null,null];
(statearr_119708[(0)] = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__);

(statearr_119708[(1)] = (1));

return statearr_119708;
});
var lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1 = (function (state_119705){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119705);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119709){var ex__36688__auto__ = e119709;
var statearr_119710_120273 = state_119705;
(statearr_119710_120273[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119705[(4)]))){
var statearr_119711_120274 = state_119705;
(statearr_119711_120274[(1)] = cljs.core.first((state_119705[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120275 = state_119705;
state_119705 = G__120275;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__ = function(state_119705){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1.call(this,state_119705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_graph_uniswap_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119712 = f__36777__auto__();
(statearr_119712[(6)] = c__36776__auto__);

return statearr_119712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.lp_proportion = (function lpdashboard$core$lp_proportion(s){
return bignumber.core._SLASH_(new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"liquidityTokenTotalSupply","liquidityTokenTotalSupply",914982934).cljs$core$IFn$_invoke$arity$1(s));
});
lpdashboard.core.abridged_snapshot = (function lpdashboard$core$abridged_snapshot(s){
var datetime = (new Date(((1000) * new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(s))));
var token0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var token1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var prop = lpdashboard.core.lp_proportion(s);
var token0_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(s));
var token1_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(s));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datetime","datetime",494675702),datetime,new cljs.core.Keyword(null,"balances","balances",-1047003019),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token0),token0_balance,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token1),token1_balance])], null);
});
lpdashboard.core.snapshot_balances = (function lpdashboard$core$snapshot_balances(s){
var datetime = (new Date(((1000) * new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(s))));
var token0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var token1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(s)));
var prop = lpdashboard.core.lp_proportion(s);
var token0_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(s));
var token1_balance = bignumber.core._STAR_(prop,new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(s));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),token0,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),token1,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),token0_balance,new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),token1_balance], null);
});
lpdashboard.core.last_lp_snapshots = (function lpdashboard$core$last_lp_snapshots(snapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),snapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__119713_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__119713_SHARP_);
})),cljs.core.vals(pair_snapshots));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312))(s),new cljs.core.Keyword(null,"pos","pos",-864607220),lpdashboard.core.snapshot_balances(s)], null);
}),last_snapshots);
});
/**
 * Returns most recent snapshot for each LP pair where
 * `gsnapshots` is a coll of LPSnapshots as returned
 *  by `thegraph/<user-lp-snapshots`
 */
lpdashboard.core.most_recent_snapshots = (function lpdashboard$core$most_recent_snapshots(gsnapshots){
var pair_snapshots = cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pair","pair",-447516312)),gsnapshots);
var last_snapshots = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.last,(function (p1__119714_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"timestamp","timestamp",579478971),p1__119714_SHARP_);
})),cljs.core.vals(pair_snapshots));
return last_snapshots;
});
lpdashboard.core.gposition__GT_pool = (function lpdashboard$core$gposition__GT_pool(gposition){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var pair_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),pair_address,new cljs.core.Keyword(null,"exchange","exchange",843073210),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address0,address1], null)], null);
});
lpdashboard.core.gposition__GT_token_info = (function lpdashboard$core$gposition__GT_token_info(gposition,token_prices){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
var symbol0 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token0);
var symbol1 = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token1);
var name0 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token0);
var name1 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token1);
var decimals0 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token0);
var decimals1 = new cljs.core.Keyword(null,"decimals","decimals",1715096484).cljs$core$IFn$_invoke$arity$1(token1);
var token0_price = (function (){var fexpr__119715 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address0);
return (fexpr__119715.cljs$core$IFn$_invoke$arity$1 ? fexpr__119715.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__119715.call(null,token_prices));
})();
var token1_price = (function (){var fexpr__119716 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(address1);
return (fexpr__119716.cljs$core$IFn$_invoke$arity$1 ? fexpr__119716.cljs$core$IFn$_invoke$arity$1(token_prices) : fexpr__119716.call(null,token_prices));
})();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([address0,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol0,new cljs.core.Keyword(null,"address","address",559499426),address0,new cljs.core.Keyword(null,"name","name",1843675177),name0,new cljs.core.Keyword(null,"decimals","decimals",1715096484),decimals0,new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137).cljs$core$IFn$_invoke$arity$1(token0_price),"usd",new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(token0_price),"eth",new cljs.core.Keyword(null,"eth","eth",1381694970).cljs$core$IFn$_invoke$arity$1(token0_price)], null)], null)], null),address1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),symbol1,new cljs.core.Keyword(null,"address","address",559499426),address1,new cljs.core.Keyword(null,"name","name",1843675177),name1,new cljs.core.Keyword(null,"decimals","decimals",1715096484),decimals1,new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ts","ts",1617209904),new cljs.core.Keyword(null,"last_updated_at","last_updated_at",-606070137).cljs$core$IFn$_invoke$arity$1(token1_price),"usd",new cljs.core.Keyword(null,"usd","usd",2103592073).cljs$core$IFn$_invoke$arity$1(token1_price),"eth",new cljs.core.Keyword(null,"eth","eth",1381694970).cljs$core$IFn$_invoke$arity$1(token1_price)], null)], null)], null)]);
});
lpdashboard.core.gposition__GT_lpsnapshot = (function lpdashboard$core$gposition__GT_lpsnapshot(gposition,staked_positions){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
var reserve0 = new cljs.core.Keyword(null,"reserve0","reserve0",-136543773).cljs$core$IFn$_invoke$arity$1(pair);
var reserve1 = new cljs.core.Keyword(null,"reserve1","reserve1",-1349066236).cljs$core$IFn$_invoke$arity$1(pair);
var total_shares = new cljs.core.Keyword(null,"totalSupply","totalSupply",1895246834).cljs$core$IFn$_invoke$arity$1(pair);
var user_shares = new cljs.core.Keyword(null,"liquidityTokenBalance","liquidityTokenBalance",1186124590).cljs$core$IFn$_invoke$arity$1(gposition);
var relevant_stakes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119717_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__119717_SHARP_));
}),staked_positions);
var lp_stakes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),(cljs.core.truth_(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s))], null),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(s))], null)], null):cljs.core.PersistentVector.EMPTY)], null);
}),relevant_stakes);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ts","ts",1617209904),lpdashboard.utils.make_unix_ts(),new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"volumes","volumes",-889277072),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),total_shares,new cljs.core.Keyword(null,"reserves","reserves",-1935017122),cljs.core.PersistentArrayMap.createAsIfByAssoc([address0,reserve0,address1,reserve1])], null),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),user_shares,new cljs.core.Keyword(null,"staked","staked",-1857531165),lp_stakes], null);
});
lpdashboard.core.make_lp = (function lpdashboard$core$make_lp(gposition,staked_positions,mints,burns){
var pair = new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(gposition);
var lp_address = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(pair);
var token0 = new cljs.core.Keyword(null,"token0","token0",1683274894).cljs$core$IFn$_invoke$arity$1(pair);
var token1 = new cljs.core.Keyword(null,"token1","token1",879943564).cljs$core$IFn$_invoke$arity$1(pair);
var address0 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token0);
var address1 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token1);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([lp_address,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pool","pool",-1814211613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"address","address",559499426),lp_address,new cljs.core.Keyword(null,"excahnge","excahnge",2142352275),"uniswap",new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [address0,address1], null)], null),new cljs.core.Keyword(null,"unkown-destinations","unkown-destinations",386546499),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"mints","mints",-278208376),mints,new cljs.core.Keyword(null,"burns","burns",1858509067),burns,new cljs.core.Keyword(null,"snapshots","snapshots",941363956),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lpdashboard.core.gposition__GT_lpsnapshot(gposition,staked_positions)], null)], null)]);
});
/**
 * Makes an initial user state from a map of
 *   the most recent avail `graph-snapshots`
 *   as returned by `<graph-uniswap-positions``
 */
lpdashboard.core.make_state = (function lpdashboard$core$make_state(graph_positions,staked_positions,token_info,mints,burns){
var user_address = new cljs.core.Keyword(null,"user-address","user-address",-2070986675).cljs$core$IFn$_invoke$arity$1(graph_positions);
var positions = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(graph_positions);
var snapshot_lps = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119718_SHARP_){
return lpdashboard.core.make_lp(p1__119718_SHARP_,staked_positions,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mints,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__119718_SHARP_))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(burns,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pair","pair",-447516312).cljs$core$IFn$_invoke$arity$1(p1__119718_SHARP_))));
}),positions));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-address","user-address",-2070986675),user_address,new cljs.core.Keyword(null,"token-info","token-info",-589167623),token_info,new cljs.core.Keyword(null,"lps","lps",2143562451),snapshot_lps], null);
});
lpdashboard.core.get_current_earned = (function lpdashboard$core$get_current_earned(lp_snapshot){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qty = new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot))))));
var qty_SINGLEQUOTE_ = (cljs.core.truth_(qty)?qty:(new module$node_modules$bignumber_DOT_js$bignumber("0")));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),qty_SINGLEQUOTE_,new cljs.core.Keyword(null,"token","token",-1211463215),token], null)], null);
});
lpdashboard.core.token_claimed_from_contract = (function lpdashboard$core$token_claimed_from_contract(rewards_map){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(rewards_map);
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(rewards_map));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.all_claims_for_contract = (function lpdashboard$core$all_claims_for_contract(rewards_maps){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.token_claimed_from_contract,rewards_maps);
});
lpdashboard.core.all_snapshot_claimed = (function lpdashboard$core$all_snapshot_claimed(snapshot){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.all_claims_for_contract,new cljs.core.Keyword(null,"rewards","rewards",-1173924062)),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(snapshot)));
});
lpdashboard.core.get_current_claimed = (function lpdashboard$core$get_current_claimed(lp_snapshot){
var token = new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot)))));
var qtys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"rewards","rewards",-1173924062).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(lp_snapshot))))));
var claims_summed = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(qtys,cljs.core.List.EMPTY))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,qtys));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qty","qty",155560951),claims_summed,new cljs.core.Keyword(null,"token","token",-1211463215),token], null);
});
lpdashboard.core.lp_position_map_example = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.PersistentArrayMap(null, 2, ["MTA",3998.584402,"WETH",12.744], null),new cljs.core.Keyword(null,"reward","reward",-887240948),new cljs.core.PersistentArrayMap(null, 1, ["MTA",824.8436457935455], null),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.PersistentArrayMap(null, 2, ["MTA",2500.5402,"WETH",20.744], null),new cljs.core.Keyword(null,"fees","fees",-2100264520),new cljs.core.PersistentArrayMap(null, 1, ["ETH",0.0021], null)], null);
lpdashboard.core.token_symbol = (function lpdashboard$core$token_symbol(token_address,token_info){
if((token_address == null)){
return token_address;
} else {
var symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,clojure.string.lower_case(token_address)));
var or__4126__auto__ = symbol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return token_address;
}
}
});
lpdashboard.core.minted_lp = (function lpdashboard$core$minted_lp(lp_position){
return null;
});
lpdashboard.core.burned_lp = (function lpdashboard$core$burned_lp(lp_position){
return null;
});
lpdashboard.core.tokens_deposited = (function lpdashboard$core$tokens_deposited(lp_position){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token1 = cljs.core.first(tokens);
var token2 = cljs.core.second(tokens);
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deposits","deposits",-1544951296),mints);
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119722_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__119722_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119723_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__119723_SHARP_,token2);
}),deposits);
var token1_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token1_deposits));
var token2_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token2_deposits));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token1,token1_total,token2,token2_total]);
});
lpdashboard.core.tokens_withdrawn = (function lpdashboard$core$tokens_withdrawn(lp_position){
var tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token1 = cljs.core.first(tokens);
var token2 = cljs.core.second(tokens);
var mints = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),mints);
var token1_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119724_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__119724_SHARP_,token1);
}),deposits);
var token2_deposits = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119725_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__119725_SHARP_,token2);
}),deposits);
var token1_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token1_deposits));
var token2_total = ((cljs.core.empty_QMARK_(deposits))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,token2_deposits));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([token1,token1_total,token2,token2_total]);
});
lpdashboard.core.eth_fees = (function lpdashboard$core$eth_fees(parsed_tx){
var gas_price = new cljs.core.Keyword(null,"gas-price","gas-price",1139675337).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var gas_used = new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278).cljs$core$IFn$_invoke$arity$1(parsed_tx);
var eth_paid = bignumber.core._STAR_(gas_used,gas_price);
return eth_paid;
});
lpdashboard.core.fees_paid = (function lpdashboard$core$fees_paid(lp_position){
var mints = new cljs.core.Keyword(null,"mints","mints",-278208376).cljs$core$IFn$_invoke$arity$1(lp_position);
var minting_fees = ((cljs.core.empty_QMARK_(mints))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.eth_fees,mints)));
var burns = new cljs.core.Keyword(null,"burns","burns",1858509067).cljs$core$IFn$_invoke$arity$1(lp_position);
var burning_fees = ((cljs.core.empty_QMARK_(burns))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.eth_fees,burns)));
return bignumber.core._PLUS_(burning_fees,minting_fees);
});
lpdashboard.core.pretty_price = (function lpdashboard$core$pretty_price(p__119726){
var vec__119727 = p__119726;
var token_address = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119727,(0),null);
var token_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119727,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(token_data),new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(token_data)]);
});
lpdashboard.core.lp_prices = (function lpdashboard$core$lp_prices(lp_position,token_info){
var latest_snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position));
var pool_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var earned = lpdashboard.core.all_snapshot_claimed(latest_snapshot);
var rewards_tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),earned);
var all_tokens = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pool_tokens,rewards_tokens));
return cljs.core.select_keys(token_info,all_tokens);
});
lpdashboard.core.symbol__GT_price = (function lpdashboard$core$symbol__GT_price(symbol,token_prices,vs_price){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"prices","prices",970580849).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119730_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.upper_case(symbol),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__119730_SHARP_));
}),cljs.core.vals(token_prices))))),clojure.string.lower_case(vs_price));
});
lpdashboard.core.rewards_in_currency = (function lpdashboard$core$rewards_in_currency(rewards,currency,token_prices){
var rewarded_currencies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.keys(rewards));
var res = ((cljs.core.empty_QMARK_(rewarded_currencies))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119731_SHARP_){
return bignumber.core._STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rewards,p1__119731_SHARP_),lpdashboard.core.symbol__GT_price(p1__119731_SHARP_,token_prices,currency));
}),rewarded_currencies)));
if(cljs.core.truth_(res.isNaN())){
return (new module$node_modules$bignumber_DOT_js$bignumber("0"));
} else {
return res;
}
});
lpdashboard.core.tokens_at_prices = (function lpdashboard$core$tokens_at_prices(tokens,token_prices){
var reward_tokens = cljs.core.keys(tokens);
var tokens_usd = lpdashboard.core.rewards_in_currency(tokens,"usd",token_prices);
var tokens_eth = lpdashboard.core.rewards_in_currency(tokens,"eth",token_prices);
return new cljs.core.PersistentArrayMap(null, 2, ["USD",tokens_usd,"ETH",tokens_eth], null);
});
lpdashboard.core.gas_at_prices = (function lpdashboard$core$gas_at_prices(fees_paid,token_prices){
return new cljs.core.PersistentArrayMap(null, 2, ["ETH",fees_paid,"USD",bignumber.core._STAR_(fees_paid,lpdashboard.core.symbol__GT_price("WETH",token_prices,"usd"))], null);
});
lpdashboard.core.lp_pnl = (function lpdashboard$core$lp_pnl(diffs,total_fees,rewards,token_prices){
var pool_pnl = lpdashboard.core.tokens_at_prices(diffs,token_prices);
var rewards__$1 = lpdashboard.core.tokens_at_prices(rewards,token_prices);
var gas_costs = lpdashboard.core.gas_at_prices(total_fees,token_prices);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),pool_pnl,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards__$1,new cljs.core.Keyword(null,"gas-costs","gas-costs",-1172157904),gas_costs,new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pool_pnl,rewards__$1], 0)),gas_costs], 0))], null);
});
lpdashboard.core.lp_position_map = (function lpdashboard$core$lp_position_map(lp_position,token_info){
var pool_tokens = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position));
var token_symbols = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119732_SHARP_){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_info,p1__119732_SHARP_));
}),pool_tokens);
var latest_snapshot = cljs.core.first(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(lp_position));
var pool_lps = cljs.core.identity(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(latest_snapshot)));
var wallet_lps = cljs.core.identity(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872).cljs$core$IFn$_invoke$arity$1(latest_snapshot));
var staked_lps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872)),new cljs.core.Keyword(null,"staked","staked",-1857531165).cljs$core$IFn$_invoke$arity$1(latest_snapshot))));
var user_lps = bignumber.core._PLUS_(wallet_lps,staked_lps);
var lp_portion = bignumber.core._SLASH_(user_lps,pool_lps);
var token_reserves = new cljs.core.Keyword(null,"reserves","reserves",-1935017122).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(latest_snapshot));
var reserve_shares = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.isNaN())){
return (new module$node_modules$bignumber_DOT_js$bignumber("0.00"));
} else {
return x;
}
}),(function (p1__119733_SHARP_){
return bignumber.core._STAR_(lp_portion,p1__119733_SHARP_);
})),cljs.core.vals(token_reserves));
var current = cljs.core.zipmap(token_symbols,reserve_shares);
var earned = lpdashboard.core.get_current_earned(latest_snapshot);
var earned_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__119734_SHARP_){
return lpdashboard.core.token_symbol(p1__119734_SHARP_,token_info);
}),new cljs.core.Keyword(null,"token","token",-1211463215)),earned),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),earned));
var claimed = cljs.core.identity(lpdashboard.core.all_snapshot_claimed(latest_snapshot));
var claimed_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119735_SHARP_){
return lpdashboard.core.token_symbol(p1__119735_SHARP_,token_info);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),claimed)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qty","qty",155560951),claimed));
var rewards = bignumber.core._PLUS_(new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(earned),new cljs.core.Keyword(null,"qty","qty",155560951).cljs$core$IFn$_invoke$arity$1(cljs.core.first(claimed)));
var rewards_token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(earned);
var rtoken_symbol = lpdashboard.core.token_symbol(rewards_token,token_info);
var rewards_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(rtoken_symbol))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentArrayMap.createAsIfByAssoc([rtoken_symbol,rewards]));
var rewards_SINGLEQUOTE___$1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(bignumber.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([claimed_SINGLEQUOTE_,earned_SINGLEQUOTE_], 0));
var minted_lp = lpdashboard.core.minted_lp(lp_position);
var total_invested = lpdashboard.core.tokens_deposited(lp_position);
var total_invested_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119736_SHARP_){
return lpdashboard.core.token_symbol(p1__119736_SHARP_,token_info);
}),cljs.core.keys(total_invested)),cljs.core.vals(total_invested));
var burned_lp = lpdashboard.core.burned_lp(lp_position);
var total_withdrawals = lpdashboard.core.tokens_withdrawn(lp_position);
var total_withdrawals_SINGLEQUOTE_ = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119737_SHARP_){
return lpdashboard.core.token_symbol(p1__119737_SHARP_,token_info);
}),cljs.core.keys(total_withdrawals)),cljs.core.vals(total_withdrawals));
var token_symbols__$1 = cljs.core.keys(total_invested_SINGLEQUOTE_);
var total_initial = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119738_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_invested_SINGLEQUOTE_,p1__119738_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119739_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_withdrawals_SINGLEQUOTE_,p1__119739_SHARP_);
}),token_symbols__$1)));
var token_diffs = cljs.core.zipmap(token_symbols__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (a,b){
return bignumber.core._(a,b);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119740_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current,p1__119740_SHARP_);
}),token_symbols__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119741_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(total_initial,p1__119741_SHARP_);
}),token_symbols__$1)));
var total_fees = lpdashboard.core.fees_paid(lp_position);
var relevant_prices = lpdashboard.core.lp_prices(lp_position,token_info);
var pnl = lpdashboard.core.lp_pnl(token_diffs,total_fees,rewards_SINGLEQUOTE___$1,token_info);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),new cljs.core.Keyword(null,"pnl","pnl",-430398483),new cljs.core.Keyword(null,"invested","invested",19182926),new cljs.core.Keyword(null,"diffs","diffs",-1720136241),new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.Keyword(null,"withdrawn","withdrawn",-1226474510),new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"fees","fees",-2100264520),new cljs.core.Keyword(null,"symbols","symbols",1211743)],[new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp_position)),rewards_SINGLEQUOTE___$1,pnl,total_invested_SINGLEQUOTE_,token_diffs,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.pretty_price,relevant_prices)),total_withdrawals_SINGLEQUOTE_,current,total_initial,new cljs.core.PersistentArrayMap(null, 1, ["ETH",total_fees], null),token_symbols__$1]);
});
lpdashboard.core.make_burn_map = (function lpdashboard$core$make_burn_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = cljs.core.first(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = cljs.core.second(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = lpdashboard.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = lpdashboard.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.ethereum.decode_transfer_data,re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119742_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__119742_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(p1__119742_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var burn_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119743_SHARP_){
return lpdashboard.ethereum.decode_burn_data(p1__119743_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_burns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119744_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__119744_SHARP_)));
}),burn_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_burns));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_burns));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-burned","lp-burned",1399053754),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"withdrawals","withdrawals",-1952766911),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
lpdashboard.core.make_mint_map = (function lpdashboard$core$make_mint_map(lp_pool,user_address,mint_txr,token1_decimals,token2_decimals){
var tx = new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(mint_txr);
var re = new cljs.core.Keyword(null,"receipt","receipt",1871350913).cljs$core$IFn$_invoke$arity$1(mint_txr);
var lp_address = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var token0 = cljs.core.first(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var token1 = cljs.core.second(new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool));
var txhash = tx.hash;
var block_number = tx.blockNumber;
var pool_decimals = (18);
var gas_decimals = (0);
var eth_decimals = (18);
var gas_price = lpdashboard.utils.ebn__GT_bn(tx.gasPrice,eth_decimals);
var gas_used = lpdashboard.utils.ebn__GT_bn(re.gasUsed,gas_decimals);
var transfer_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119745_SHARP_){
return lpdashboard.ethereum.decode_transfer_data(p1__119745_SHARP_,pool_decimals);
}),re.logs));
var lp_transfers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119746_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"token-address","token-address",872304132).cljs$core$IFn$_invoke$arity$1(p1__119746_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(user_address),clojure.string.lower_case(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(p1__119746_SHARP_)))));
}),transfer_logs);
var lp_qty = ((cljs.core.empty_QMARK_(lp_transfers))?(new module$node_modules$bignumber_DOT_js$bignumber("0")):cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),lp_transfers)));
var mint_logs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119747_SHARP_){
return lpdashboard.ethereum.decode_mint_data(p1__119747_SHARP_,token1_decimals,token2_decimals);
}),re.logs));
var lp_mints = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119748_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(lp_address),clojure.string.lower_case(new cljs.core.Keyword(null,"pair-address","pair-address",1269659792).cljs$core$IFn$_invoke$arity$1(p1__119748_SHARP_)));
}),mint_logs);
var token0_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount0","amount0",1622313786),lp_mints));
var token1_qty = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount1","amount1",-1116934036),lp_mints));
if((((token0_qty > (0))) && ((token1_qty > (0))) && ((lp_qty > (0))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"block-number","block-number",-935510961),block_number,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),txhash,new cljs.core.Keyword(null,"lp-minted","lp-minted",1571078360),lp_qty,new cljs.core.Keyword(null,"gas-price","gas-price",1139675337),gas_price,new cljs.core.Keyword(null,"gas-used","gas-used",-1992155278),gas_used,new cljs.core.Keyword(null,"deposits","deposits",-1544951296),cljs.core.PersistentArrayMap.createAsIfByAssoc([token0,token0_qty,token1,token1_qty])], null);
} else {
return null;
}
});
lpdashboard.core._LT_get_lp_mints = (function lpdashboard$core$_LT_get_lp_mints(lp_pool,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119775){
var state_val_119776 = (state_119775[(1)]);
if((state_val_119776 === (1))){
var inst_119753 = (state_119775[(7)]);
var inst_119751 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_119752 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_119753__$1 = cljs.core.first(inst_119752);
var inst_119754 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_119755 = cljs.core.second(inst_119754);
var inst_119756 = lpdashboard.ethereum._LT_token_decimals(inst_119753__$1);
var state_119775__$1 = (function (){var statearr_119777 = state_119775;
(statearr_119777[(8)] = inst_119755);

(statearr_119777[(9)] = inst_119751);

(statearr_119777[(7)] = inst_119753__$1);

return statearr_119777;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119775__$1,(2),inst_119756);
} else {
if((state_val_119776 === (2))){
var inst_119755 = (state_119775[(8)]);
var inst_119758 = (state_119775[(2)]);
var inst_119759 = lpdashboard.ethereum._LT_token_decimals(inst_119755);
var state_119775__$1 = (function (){var statearr_119778 = state_119775;
(statearr_119778[(10)] = inst_119758);

return statearr_119778;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119775__$1,(3),inst_119759);
} else {
if((state_val_119776 === (3))){
var inst_119751 = (state_119775[(9)]);
var inst_119761 = (state_119775[(2)]);
var inst_119762 = lpdashboard.ethereum._LT_user_lp_mint_transfers(lpdashboard.core.provider,inst_119751,user_address);
var state_119775__$1 = (function (){var statearr_119779 = state_119775;
(statearr_119779[(11)] = inst_119761);

return statearr_119779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119775__$1,(4),inst_119762);
} else {
if((state_val_119776 === (4))){
var inst_119758 = (state_119775[(10)]);
var inst_119761 = (state_119775[(11)]);
var inst_119755 = (state_119775[(8)]);
var inst_119751 = (state_119775[(9)]);
var inst_119753 = (state_119775[(7)]);
var inst_119767 = (state_119775[(12)]);
var inst_119764 = (state_119775[(13)]);
var inst_119764__$1 = (state_119775[(2)]);
var inst_119765 = (function (){var pair_address = inst_119751;
var token1_address = inst_119753;
var token2_address = inst_119755;
var token1_decimals = inst_119758;
var token2_decimals = inst_119761;
var mint_transfers = inst_119764__$1;
return (function (p1__119749_SHARP_){
return p1__119749_SHARP_.transactionHash;
});
})();
var inst_119766 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119765,inst_119764__$1);
var inst_119767__$1 = cljs.core.set(inst_119766);
var inst_119768 = lpdashboard.ethereum._LT_get_trxs(inst_119767__$1);
var state_119775__$1 = (function (){var statearr_119780 = state_119775;
(statearr_119780[(12)] = inst_119767__$1);

(statearr_119780[(13)] = inst_119764__$1);

return statearr_119780;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119775__$1,(5),inst_119768);
} else {
if((state_val_119776 === (5))){
var inst_119758 = (state_119775[(10)]);
var inst_119761 = (state_119775[(11)]);
var inst_119755 = (state_119775[(8)]);
var inst_119751 = (state_119775[(9)]);
var inst_119753 = (state_119775[(7)]);
var inst_119767 = (state_119775[(12)]);
var inst_119764 = (state_119775[(13)]);
var inst_119770 = (state_119775[(2)]);
var inst_119771 = (function (){var pair_address = inst_119751;
var token1_address = inst_119753;
var token2_address = inst_119755;
var token1_decimals = inst_119758;
var token2_decimals = inst_119761;
var mint_transfers = inst_119764;
var mint_hashes = inst_119767;
var mint_txrs = inst_119770;
return (function (p1__119750_SHARP_){
return lpdashboard.core.make_mint_map(lp_pool,user_address,p1__119750_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_119772 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119771,inst_119770);
var inst_119773 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_119772);
var state_119775__$1 = state_119775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119775__$1,inst_119773);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0 = (function (){
var statearr_119781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119781[(0)] = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__);

(statearr_119781[(1)] = (1));

return statearr_119781;
});
var lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1 = (function (state_119775){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119775);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119782){var ex__36688__auto__ = e119782;
var statearr_119783_120276 = state_119775;
(statearr_119783_120276[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119775[(4)]))){
var statearr_119784_120277 = state_119775;
(statearr_119784_120277[(1)] = cljs.core.first((state_119775[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120278 = state_119775;
state_119775 = G__120278;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__ = function(state_119775){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1.call(this,state_119775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119785 = f__36777__auto__();
(statearr_119785[(6)] = c__36776__auto__);

return statearr_119785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_lp_burns = (function lpdashboard$core$_LT_get_lp_burns(lp_pool,user_address){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119812){
var state_val_119813 = (state_119812[(1)]);
if((state_val_119813 === (1))){
var inst_119790 = (state_119812[(7)]);
var inst_119788 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_119789 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_119790__$1 = cljs.core.first(inst_119789);
var inst_119791 = new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(lp_pool);
var inst_119792 = cljs.core.second(inst_119791);
var inst_119793 = lpdashboard.ethereum._LT_token_decimals(inst_119790__$1);
var state_119812__$1 = (function (){var statearr_119814 = state_119812;
(statearr_119814[(8)] = inst_119792);

(statearr_119814[(9)] = inst_119788);

(statearr_119814[(7)] = inst_119790__$1);

return statearr_119814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119812__$1,(2),inst_119793);
} else {
if((state_val_119813 === (2))){
var inst_119792 = (state_119812[(8)]);
var inst_119795 = (state_119812[(2)]);
var inst_119796 = lpdashboard.ethereum._LT_token_decimals(inst_119792);
var state_119812__$1 = (function (){var statearr_119815 = state_119812;
(statearr_119815[(10)] = inst_119795);

return statearr_119815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119812__$1,(3),inst_119796);
} else {
if((state_val_119813 === (3))){
var inst_119788 = (state_119812[(9)]);
var inst_119798 = (state_119812[(2)]);
var inst_119799 = lpdashboard.ethereum._LT_user_lp_burn_transfers(lpdashboard.core.provider,inst_119788,user_address);
var state_119812__$1 = (function (){var statearr_119816 = state_119812;
(statearr_119816[(11)] = inst_119798);

return statearr_119816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119812__$1,(4),inst_119799);
} else {
if((state_val_119813 === (4))){
var inst_119795 = (state_119812[(10)]);
var inst_119792 = (state_119812[(8)]);
var inst_119788 = (state_119812[(9)]);
var inst_119790 = (state_119812[(7)]);
var inst_119804 = (state_119812[(12)]);
var inst_119798 = (state_119812[(11)]);
var inst_119801 = (state_119812[(13)]);
var inst_119801__$1 = (state_119812[(2)]);
var inst_119802 = (function (){var pair_address = inst_119788;
var token1_address = inst_119790;
var token2_address = inst_119792;
var token1_decimals = inst_119795;
var token2_decimals = inst_119798;
var burn_transfers = inst_119801__$1;
return (function (p1__119786_SHARP_){
return p1__119786_SHARP_.transactionHash;
});
})();
var inst_119803 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119802,inst_119801__$1);
var inst_119804__$1 = cljs.core.set(inst_119803);
var inst_119805 = lpdashboard.ethereum._LT_get_trxs(inst_119804__$1);
var state_119812__$1 = (function (){var statearr_119817 = state_119812;
(statearr_119817[(12)] = inst_119804__$1);

(statearr_119817[(13)] = inst_119801__$1);

return statearr_119817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119812__$1,(5),inst_119805);
} else {
if((state_val_119813 === (5))){
var inst_119795 = (state_119812[(10)]);
var inst_119792 = (state_119812[(8)]);
var inst_119788 = (state_119812[(9)]);
var inst_119790 = (state_119812[(7)]);
var inst_119804 = (state_119812[(12)]);
var inst_119798 = (state_119812[(11)]);
var inst_119801 = (state_119812[(13)]);
var inst_119807 = (state_119812[(2)]);
var inst_119808 = (function (){var pair_address = inst_119788;
var token1_address = inst_119790;
var token2_address = inst_119792;
var token1_decimals = inst_119795;
var token2_decimals = inst_119798;
var burn_transfers = inst_119801;
var burn_hashes = inst_119804;
var burn_txrs = inst_119807;
return (function (p1__119787_SHARP_){
return lpdashboard.core.make_burn_map(lp_pool,user_address,p1__119787_SHARP_,token1_decimals,token2_decimals);
});
})();
var inst_119809 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119808,inst_119807);
var inst_119810 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_119809);
var state_119812__$1 = state_119812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119812__$1,inst_119810);
} else {
return null;
}
}
}
}
}
});
return (function() {
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0 = (function (){
var statearr_119818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_119818[(0)] = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__);

(statearr_119818[(1)] = (1));

return statearr_119818;
});
var lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1 = (function (state_119812){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119812);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119819){var ex__36688__auto__ = e119819;
var statearr_119820_120279 = state_119812;
(statearr_119820_120279[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119812[(4)]))){
var statearr_119821_120280 = state_119812;
(statearr_119821_120280[(1)] = cljs.core.first((state_119812[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120281 = state_119812;
state_119812 = G__120281;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__ = function(state_119812){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1.call(this,state_119812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_lp_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119822 = f__36777__auto__();
(statearr_119822[(6)] = c__36776__auto__);

return statearr_119822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core._LT_get_user_mints = (function lpdashboard$core$_LT_get_user_mints(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119831){
var state_val_119832 = (state_119831[(1)]);
if((state_val_119832 === (1))){
var inst_119823 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_119824 = [inst_119823];
var inst_119825 = lpdashboard.core._LT_get_lp_mints(p,user_address);
var state_119831__$1 = (function (){var statearr_119833 = state_119831;
(statearr_119833[(7)] = inst_119824);

return statearr_119833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119831__$1,(2),inst_119825);
} else {
if((state_val_119832 === (2))){
var inst_119824 = (state_119831[(7)]);
var inst_119827 = (state_119831[(2)]);
var inst_119828 = [inst_119827];
var inst_119829 = cljs.core.PersistentHashMap.fromArrays(inst_119824,inst_119828);
var state_119831__$1 = state_119831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119831__$1,inst_119829);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0 = (function (){
var statearr_119834 = [null,null,null,null,null,null,null,null];
(statearr_119834[(0)] = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__);

(statearr_119834[(1)] = (1));

return statearr_119834;
});
var lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1 = (function (state_119831){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119831);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119835){var ex__36688__auto__ = e119835;
var statearr_119836_120282 = state_119831;
(statearr_119836_120282[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119831[(4)]))){
var statearr_119837_120283 = state_119831;
(statearr_119837_120283[(1)] = cljs.core.first((state_119831[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120284 = state_119831;
state_119831 = G__120284;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__ = function(state_119831){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1.call(this,state_119831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_mints_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119838 = f__36777__auto__();
(statearr_119838[(6)] = c__36776__auto__);

return statearr_119838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_get_user_burns = (function lpdashboard$core$_LT_get_user_burns(user_address,lp_pools){
var mints = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119847){
var state_val_119848 = (state_119847[(1)]);
if((state_val_119848 === (1))){
var inst_119839 = new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(p);
var inst_119840 = [inst_119839];
var inst_119841 = lpdashboard.core._LT_get_lp_burns(p,user_address);
var state_119847__$1 = (function (){var statearr_119849 = state_119847;
(statearr_119849[(7)] = inst_119840);

return statearr_119849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119847__$1,(2),inst_119841);
} else {
if((state_val_119848 === (2))){
var inst_119840 = (state_119847[(7)]);
var inst_119843 = (state_119847[(2)]);
var inst_119844 = [inst_119843];
var inst_119845 = cljs.core.PersistentHashMap.fromArrays(inst_119840,inst_119844);
var state_119847__$1 = state_119847;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119847__$1,inst_119845);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0 = (function (){
var statearr_119850 = [null,null,null,null,null,null,null,null];
(statearr_119850[(0)] = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__);

(statearr_119850[(1)] = (1));

return statearr_119850;
});
var lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1 = (function (state_119847){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119847);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119851){var ex__36688__auto__ = e119851;
var statearr_119852_120285 = state_119847;
(statearr_119852_120285[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119847[(4)]))){
var statearr_119853_120286 = state_119847;
(statearr_119853_120286[(1)] = cljs.core.first((state_119847[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120287 = state_119847;
state_119847 = G__120287;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__ = function(state_119847){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1.call(this,state_119847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_user_burns_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119854 = f__36777__auto__();
(statearr_119854[(6)] = c__36776__auto__);

return statearr_119854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),lp_pools);
return cljs.core.async.reduce(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(mints));
});
lpdashboard.core._LT_user_lp_destinations = (function lpdashboard$core$_LT_user_lp_destinations(snapshots,user_address){
var token_addresses = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215),lpdashboard.core.last_lp_snapshots(snapshots));
var destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119860){
var state_val_119861 = (state_119860[(1)]);
if((state_val_119861 === (1))){
var inst_119856 = lpdashboard.ethereum._LT_user_token_destinations(lpdashboard.core.provider,x,user_address);
var state_119860__$1 = state_119860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119860__$1,(2),inst_119856);
} else {
if((state_val_119861 === (2))){
var inst_119858 = (state_119860[(2)]);
var state_119860__$1 = state_119860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119860__$1,inst_119858);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0 = (function (){
var statearr_119862 = [null,null,null,null,null,null,null];
(statearr_119862[(0)] = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__);

(statearr_119862[(1)] = (1));

return statearr_119862;
});
var lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1 = (function (state_119860){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119860);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119863){var ex__36688__auto__ = e119863;
var statearr_119864_120288 = state_119860;
(statearr_119864_120288[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119860[(4)]))){
var statearr_119865_120289 = state_119860;
(statearr_119865_120289[(1)] = cljs.core.first((state_119860[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120290 = state_119860;
state_119860 = G__120290;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__ = function(state_119860){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1.call(this,state_119860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_destinations_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119866 = f__36777__auto__();
(statearr_119866[(6)] = c__36776__auto__);

return statearr_119866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__119855_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__119855_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
lpdashboard.core._LT_user_lp_positions = (function lpdashboard$core$_LT_user_lp_positions(destinations,user_address){
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119877){
var state_val_119878 = (state_119877[(1)]);
if((state_val_119878 === (1))){
var inst_119868 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_119869 = lpdashboard.core._LT_staked_lp_positions(x,user_address);
var state_119877__$1 = (function (){var statearr_119879 = state_119877;
(statearr_119879[(7)] = inst_119868);

return statearr_119879;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119877__$1,(2),inst_119869);
} else {
if((state_val_119878 === (2))){
var inst_119868 = (state_119877[(7)]);
var inst_119871 = (state_119877[(2)]);
var inst_119872 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_119873 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_119874 = [inst_119871,inst_119872,inst_119873];
var inst_119875 = cljs.core.PersistentHashMap.fromArrays(inst_119868,inst_119874);
var state_119877__$1 = state_119877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119877__$1,inst_119875);
} else {
return null;
}
}
});
return (function() {
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0 = (function (){
var statearr_119880 = [null,null,null,null,null,null,null,null];
(statearr_119880[(0)] = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__);

(statearr_119880[(1)] = (1));

return statearr_119880;
});
var lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1 = (function (state_119877){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119877);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119881){var ex__36688__auto__ = e119881;
var statearr_119882_120291 = state_119877;
(statearr_119882_120291[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119877[(4)]))){
var statearr_119883_120292 = state_119877;
(statearr_119883_120292[(1)] = cljs.core.first((state_119877[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120293 = state_119877;
state_119877 = G__120293;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__ = function(state_119877){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1.call(this,state_119877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_lp_positions_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119884 = f__36777__auto__();
(statearr_119884[(6)] = c__36776__auto__);

return statearr_119884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
}),destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__119867_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__119867_SHARP_)));
}),cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions)));
});
lpdashboard.core._LT_user_get_staked = (function lpdashboard$core$_LT_user_get_staked(user_address,user_snapshots){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_119897){
var state_val_119898 = (state_119897[(1)]);
if((state_val_119898 === (1))){
var inst_119886 = lpdashboard.core.last_lp_snapshots(user_snapshots);
var inst_119887 = lpdashboard.core._LT_user_lp_destinations(user_snapshots,user_address);
var state_119897__$1 = (function (){var statearr_119899 = state_119897;
(statearr_119899[(7)] = inst_119886);

return statearr_119899;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119897__$1,(2),inst_119887);
} else {
if((state_val_119898 === (2))){
var inst_119889 = (state_119897[(8)]);
var inst_119889__$1 = (state_119897[(2)]);
var inst_119890 = lpdashboard.core._LT_user_lp_positions(inst_119889__$1,user_address);
var state_119897__$1 = (function (){var statearr_119900 = state_119897;
(statearr_119900[(8)] = inst_119889__$1);

return statearr_119900;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_119897__$1,(3),inst_119890);
} else {
if((state_val_119898 === (3))){
var inst_119889 = (state_119897[(8)]);
var inst_119886 = (state_119897[(7)]);
var inst_119892 = (state_119897[(2)]);
var inst_119893 = (function (){var lsnapshots = inst_119886;
var user_destinations = inst_119889;
var user_positions = inst_119892;
return (function (p1__119885_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__119885_SHARP_)));
});
})();
var inst_119894 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_119892,inst_119886);
var inst_119895 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_119893,inst_119894);
var state_119897__$1 = state_119897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_119897__$1,inst_119895);
} else {
return null;
}
}
}
});
return (function() {
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0 = (function (){
var statearr_119901 = [null,null,null,null,null,null,null,null,null];
(statearr_119901[(0)] = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__);

(statearr_119901[(1)] = (1));

return statearr_119901;
});
var lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1 = (function (state_119897){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_119897);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e119902){var ex__36688__auto__ = e119902;
var statearr_119903_120294 = state_119897;
(statearr_119903_120294[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_119897[(4)]))){
var statearr_119904_120295 = state_119897;
(statearr_119904_120295[(1)] = cljs.core.first((state_119897[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120296 = state_119897;
state_119897 = G__120296;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__ = function(state_119897){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1.call(this,state_119897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_user_get_staked_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_119905 = f__36777__auto__();
(statearr_119905[(6)] = c__36776__auto__);

return statearr_119905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.sum_pairs = (function lpdashboard$core$sum_pairs(pair_positions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__119907){
var vec__119908 = p__119907;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__119908,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(v),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",-864607220)], null),cljs.core.assoc,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"pos","pos",-864607220)),v)),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"pos","pos",-864607220)),v))], 0));
}),cljs.core.group_by(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__119906_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__119906_SHARP_,new cljs.core.Keyword(null,"dst","dst",844682948));
}),pair_positions)));
});
lpdashboard.core.get_pair = (function lpdashboard$core$get_pair(pair_positions,token0,token1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__119911_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token0,new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__119911_SHARP_)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token1,new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__119911_SHARP_)))));
}),pair_positions);
});
lpdashboard.core.rsfarmer_address = "0x1231c75850bf52851736891a39790a82bcc2e2c4";
lpdashboard.core.rsfarmer_dst1 = "0x9EC7De79572312d00f536b856B9E6fE7d0a37AF1";
lpdashboard.core.rsfarmer_lp2 = "0x2155128c06c4ee4b751c23d9403c07648afa5f5a";
lpdashboard.core.rsfarmer_lp1 = "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852";
lpdashboard.core.rsfarmer_dst3 = "0xc5D00a4E730fC2e1C77764A74E5F1308A460de7F";
lpdashboard.core.rsfarmer_lp3 = "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc";
lpdashboard.core.pool_in_sashimi = "0x1629b0259e6e5c315b8eea09fd1a4d0a26291f98";
lpdashboard.core.sashimi_cheff = "0x1DaeD74ed1dD7C9Dabbe51361ac90A69d851234D";
lpdashboard.core.reward_tokens = (function lpdashboard$core$reward_tokens(staked_positions){
return cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"pos","pos",-864607220)),staked_positions))));
});
lpdashboard.core.pooled_tokens = (function lpdashboard$core$pooled_tokens(positions){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token0","token0",1683274894)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"token1","token1",879943564))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),positions)], 0))));
});
lpdashboard.core.make_token_info = (function lpdashboard$core$make_token_info(token_infos,token_prices){
var z = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"address","address",559499426),token_infos),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ti){
var token_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_prices,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(ti));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(ti,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prices","prices",970580849),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.keys(token_price)),cljs.core.vals(token_price))], null)], null));
}),token_infos));
return z;
});
lpdashboard.core.snapshot__GT_symbols = (function lpdashboard$core$snapshot__GT_symbols(snapshot){
return ["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(snapshot))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(snapshot)))].join('');
});
lpdashboard.core._LT_get_account_state = (function lpdashboard$core$_LT_get_account_state(account_or_name){
var c__36776__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36777__auto__ = (function (){var switch__36684__auto__ = (function (state_120027){
var state_val_120028 = (state_120027[(1)]);
if((state_val_120028 === (1))){
var inst_119914 = lpdashboard.ethereum._LT_resolve_address(account_or_name);
var state_120027__$1 = state_120027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(2),inst_119914);
} else {
if((state_val_120028 === (2))){
var inst_119916 = (state_120027[(7)]);
var inst_119916__$1 = (state_120027[(2)]);
var inst_119917 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119918 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119919 = (new cljs.core.PersistentVector(null,1,(5),inst_119917,inst_119918,null));
var inst_119920 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119919,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Seeking Uniswap \uD83E\uDD84 Pools ..."], 0));
var inst_119921 = lpdashboard.core._LT_graph_uniswap_positions(inst_119916__$1);
var state_120027__$1 = (function (){var statearr_120029 = state_120027;
(statearr_120029[(7)] = inst_119916__$1);

(statearr_120029[(8)] = inst_119920);

return statearr_120029;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(3),inst_119921);
} else {
if((state_val_120028 === (3))){
var inst_119916 = (state_120027[(7)]);
var inst_119925 = (state_120027[(9)]);
var inst_119927 = (state_120027[(10)]);
var inst_119932 = (state_120027[(11)]);
var inst_119923 = (state_120027[(12)]);
var inst_119923__$1 = (state_120027[(2)]);
var inst_119924 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_119923__$1);
var inst_119925__$1 = lpdashboard.core.last_lp_snapshots(inst_119924);
var inst_119926 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.snapshot__GT_symbols,inst_119925__$1);
var inst_119927__$1 = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",inst_119926);
var inst_119928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119929 = cljs.core.count(inst_119925__$1);
var inst_119930 = ["Account ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_or_name),"\nhas provided liquidity to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_119929)," pools:\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_119927__$1)].join('');
var inst_119931 = [new cljs.core.Keyword(null,"pre","pre",2118456869),inst_119930];
var inst_119932__$1 = (new cljs.core.PersistentVector(null,2,(5),inst_119928,inst_119931,null));
var inst_119933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119934 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119935 = (new cljs.core.PersistentVector(null,1,(5),inst_119933,inst_119934,null));
var inst_119936 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119935,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119932__$1], 0));
var inst_119937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119938 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119939 = (new cljs.core.PersistentVector(null,1,(5),inst_119937,inst_119938,null));
var inst_119940 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119939,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Locating Staked LP Tokens ..."], 0));
var inst_119941 = new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(inst_119923__$1);
var inst_119942 = lpdashboard.core._LT_user_get_staked(inst_119916,inst_119941);
var state_120027__$1 = (function (){var statearr_120030 = state_120027;
(statearr_120030[(9)] = inst_119925__$1);

(statearr_120030[(10)] = inst_119927__$1);

(statearr_120030[(11)] = inst_119932__$1);

(statearr_120030[(12)] = inst_119923__$1);

(statearr_120030[(13)] = inst_119936);

(statearr_120030[(14)] = inst_119940);

return statearr_120030;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(4),inst_119942);
} else {
if((state_val_120028 === (4))){
var inst_119916 = (state_120027[(7)]);
var inst_119944 = (state_120027[(15)]);
var inst_119925 = (state_120027[(9)]);
var inst_119927 = (state_120027[(10)]);
var inst_119932 = (state_120027[(11)]);
var inst_119923 = (state_120027[(12)]);
var inst_119944__$1 = (state_120027[(2)]);
var inst_119945 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948),inst_119944__$1);
var inst_119946 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,inst_119945);
var inst_119947 = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(inst_119946);
var inst_119948 = cljs.core.count(inst_119947);
var inst_119949 = ["Account has staked LP tokens in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_119948)," distinct staking contracts ..."].join('');
var inst_119950 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119951 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119952 = (new cljs.core.PersistentVector(null,1,(5),inst_119950,inst_119951,null));
var inst_119953 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119952,cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119949], 0));
var inst_119954 = (function (){var account = inst_119916;
var _ = inst_119953;
var graph_positions = inst_119923;
var last_snaps = inst_119925;
var pair_symbols = inst_119927;
var many_pools_step = inst_119932;
var staked = inst_119944__$1;
var many_stakes_step = inst_119949;
return (function (p1__119913_SHARP_){
return clojure.set.rename_keys(p1__119913_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"address","address",559499426)], null));
});
})();
var inst_119955 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token0","token0",1683274894),new cljs.core.Keyword(null,"token1","token1",879943564));
var inst_119956 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_119923);
var inst_119957 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pair","pair",-447516312),inst_119956);
var inst_119958 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_119955,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119957], 0));
var inst_119959 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_119954,inst_119958);
var inst_119960 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_119923);
var inst_119961 = lpdashboard.core.pooled_tokens(inst_119960);
var inst_119962 = lpdashboard.core.reward_tokens(inst_119944__$1);
var inst_119963 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(inst_119961,inst_119962,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"], 0));
var inst_119964 = cljs.core.set(inst_119963);
var inst_119965 = lpdashboard.ethereum._LT_erc20_infos(inst_119962);
var state_120027__$1 = (function (){var statearr_120031 = state_120027;
(statearr_120031[(15)] = inst_119944__$1);

(statearr_120031[(16)] = inst_119959);

(statearr_120031[(17)] = inst_119964);

return statearr_120031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(5),inst_119965);
} else {
if((state_val_120028 === (5))){
var inst_119959 = (state_120027[(16)]);
var inst_119964 = (state_120027[(17)]);
var inst_119967 = (state_120027[(2)]);
var inst_119968 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_119959,inst_119967);
var inst_119969 = cljs.core.set(inst_119968);
var inst_119970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119971 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119972 = (new cljs.core.PersistentVector(null,1,(5),inst_119970,inst_119971,null));
var inst_119973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119974 = ["Getting token prices..."];
var inst_119975 = (new cljs.core.PersistentVector(null,1,(5),inst_119973,inst_119974,null));
var inst_119976 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119972,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119975], 0));
var inst_119977 = lpdashboard.coingecko._LT_token_prices(inst_119964);
var state_120027__$1 = (function (){var statearr_120032 = state_120027;
(statearr_120032[(18)] = inst_119976);

(statearr_120032[(19)] = inst_119969);

return statearr_120032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(6),inst_119977);
} else {
if((state_val_120028 === (6))){
var inst_119916 = (state_120027[(7)]);
var inst_119981 = (state_120027[(20)]);
var inst_119923 = (state_120027[(12)]);
var inst_119979 = (state_120027[(2)]);
var inst_119980 = new cljs.core.Keyword(null,"positions","positions",-1380538434).cljs$core$IFn$_invoke$arity$1(inst_119923);
var inst_119981__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lpdashboard.core.gposition__GT_pool,inst_119980);
var inst_119982 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119983 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119984 = (new cljs.core.PersistentVector(null,1,(5),inst_119982,inst_119983,null));
var inst_119985 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119986 = ["Getting LP Mint events from account..."];
var inst_119987 = (new cljs.core.PersistentVector(null,1,(5),inst_119985,inst_119986,null));
var inst_119988 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119984,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_119987], 0));
var inst_119989 = lpdashboard.core._LT_get_user_mints(inst_119916,inst_119981__$1);
var state_120027__$1 = (function (){var statearr_120033 = state_120027;
(statearr_120033[(20)] = inst_119981__$1);

(statearr_120033[(21)] = inst_119988);

(statearr_120033[(22)] = inst_119979);

return statearr_120033;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(7),inst_119989);
} else {
if((state_val_120028 === (7))){
var inst_119916 = (state_120027[(7)]);
var inst_119981 = (state_120027[(20)]);
var inst_119991 = (state_120027[(23)]);
var inst_119991__$1 = (state_120027[(2)]);
var inst_119992 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119993 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_119994 = (new cljs.core.PersistentVector(null,1,(5),inst_119992,inst_119993,null));
var inst_119995 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_119996 = cljs.core.vals(inst_119991__$1);
var inst_119997 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_119996);
var inst_119998 = cljs.core.count(inst_119997);
var inst_119999 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_119998)," LP Mint events by account"].join('');
var inst_120000 = [inst_119999];
var inst_120001 = (new cljs.core.PersistentVector(null,1,(5),inst_119995,inst_120000,null));
var inst_120002 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_119994,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_120001], 0));
var inst_120003 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120004 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_120005 = (new cljs.core.PersistentVector(null,1,(5),inst_120003,inst_120004,null));
var inst_120006 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120007 = ["Getting LP Burn events from account..."];
var inst_120008 = (new cljs.core.PersistentVector(null,1,(5),inst_120006,inst_120007,null));
var inst_120009 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_120005,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_120008], 0));
var inst_120010 = lpdashboard.core._LT_get_user_burns(inst_119916,inst_119981);
var state_120027__$1 = (function (){var statearr_120034 = state_120027;
(statearr_120034[(23)] = inst_119991__$1);

(statearr_120034[(24)] = inst_120009);

(statearr_120034[(25)] = inst_120002);

return statearr_120034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_120027__$1,(8),inst_120010);
} else {
if((state_val_120028 === (8))){
var inst_119944 = (state_120027[(15)]);
var inst_119991 = (state_120027[(23)]);
var inst_119923 = (state_120027[(12)]);
var inst_119969 = (state_120027[(19)]);
var inst_119979 = (state_120027[(22)]);
var inst_120012 = (state_120027[(2)]);
var inst_120013 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120014 = [new cljs.core.Keyword(null,"steps","steps",-128433302)];
var inst_120015 = (new cljs.core.PersistentVector(null,1,(5),inst_120013,inst_120014,null));
var inst_120016 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_120017 = cljs.core.vals(inst_120012);
var inst_120018 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,inst_120017);
var inst_120019 = cljs.core.count(inst_120018);
var inst_120020 = ["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_120019)," LP Burn events from account"].join('');
var inst_120021 = [inst_120020];
var inst_120022 = (new cljs.core.PersistentVector(null,1,(5),inst_120016,inst_120021,null));
var inst_120023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(lpdashboard.core.app_state,cljs.core.update_in,inst_120015,cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_120022], 0));
var inst_120024 = lpdashboard.core.make_token_info(inst_119969,inst_119979);
var inst_120025 = lpdashboard.core.make_state(inst_119923,inst_119944,inst_120024,inst_119991,inst_120012);
var state_120027__$1 = (function (){var statearr_120035 = state_120027;
(statearr_120035[(26)] = inst_120023);

return statearr_120035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_120027__$1,inst_120025);
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
});
return (function() {
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__ = null;
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0 = (function (){
var statearr_120036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_120036[(0)] = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__);

(statearr_120036[(1)] = (1));

return statearr_120036;
});
var lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1 = (function (state_120027){
while(true){
var ret_value__36686__auto__ = (function (){try{while(true){
var result__36687__auto__ = switch__36684__auto__(state_120027);
if(cljs.core.keyword_identical_QMARK_(result__36687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36687__auto__;
}
break;
}
}catch (e120037){var ex__36688__auto__ = e120037;
var statearr_120038_120297 = state_120027;
(statearr_120038_120297[(2)] = ex__36688__auto__);


if(cljs.core.seq((state_120027[(4)]))){
var statearr_120039_120298 = state_120027;
(statearr_120039_120298[(1)] = cljs.core.first((state_120027[(4)])));

} else {
throw ex__36688__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__120299 = state_120027;
state_120027 = G__120299;
continue;
} else {
return ret_value__36686__auto__;
}
break;
}
});
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__ = function(state_120027){
switch(arguments.length){
case 0:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0.call(this);
case 1:
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1.call(this,state_120027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$0 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____0;
lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__.cljs$core$IFn$_invoke$arity$1 = lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto____1;
return lpdashboard$core$_LT_get_account_state_$_state_machine__36685__auto__;
})()
})();
var state__36778__auto__ = (function (){var statearr_120040 = f__36777__auto__();
(statearr_120040[(6)] = c__36776__auto__);

return statearr_120040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36778__auto__);
}));

return c__36776__auto__;
});
lpdashboard.core.lend_uni_address = "0xab3f9bf1d81ddb224a2014e98b238638824bcf20";
lpdashboard.core.lend_address = "0x80fb784b7ed66730e8b1dbd9820afd29931aab03";
lpdashboard.core.yfi_address = "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e";
lpdashboard.core.yfi_uni_address = "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28";
lpdashboard.core.comp_address = "0xc00e94cb662c3520282e6f5717214004a7f26888";
lpdashboard.core.comp_uni_address = "0xcffdded873554f362ac02f8fb1f02e5ada10516f";
lpdashboard.core.snx_address = "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f";
lpdashboard.core.zapp_in_address = "0x80c5e6908368cb9db503ba968d7ec5a565bfb389";
lpdashboard.core.symbol__GT_address = (function lpdashboard$core$symbol__GT_address(symbol,state){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__120041_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__120041_SHARP_),symbol);
}),cljs.core.vals(new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)))));
});
lpdashboard.core.tokens__GT_lp = (function lpdashboard$core$tokens__GT_lp(token1,token2,state){
return null;
});
lpdashboard.core.lp_tokens = (function lpdashboard$core$lp_tokens(lp){
return new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(lp));
});
lpdashboard.core.pair__GT_address = (function lpdashboard$core$pair__GT_address(symbol1,symbol2,state){
var token1 = lpdashboard.core.symbol__GT_address(symbol1,state);
var token2 = lpdashboard.core.symbol__GT_address(symbol2,state);
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pool","pool",-1814211613).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__120042_SHARP_){
return ((cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__120042_SHARP_)),token1)) && (cljs.core.contains_QMARK_(cljs.core.set(lpdashboard.core.lp_tokens(p1__120042_SHARP_)),token2)));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))))));
});
lpdashboard.core.symbols__GT_lp = (function lpdashboard$core$symbols__GT_lp(symbol1,symbol2,state){
var lp_address = lpdashboard.core.pair__GT_address(symbol1,symbol2,state);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state),lp_address);
});
lpdashboard.core.symbols__GT_pos = (function lpdashboard$core$symbols__GT_pos(symbol1,symbol2,state){
var lp = lpdashboard.core.symbols__GT_lp(symbol1,symbol2,state);
return lpdashboard.core.lp_position_map(lp,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state));
});
lpdashboard.core.compute_total = (function lpdashboard$core$compute_total(pnl_key,state){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,bignumber.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__120043_SHARP_){
var G__120044 = new cljs.core.Keyword(null,"pnl","pnl",-430398483).cljs$core$IFn$_invoke$arity$1(lpdashboard.core.lp_position_map(p1__120043_SHARP_,new cljs.core.Keyword(null,"token-info","token-info",-589167623).cljs$core$IFn$_invoke$arity$1(state)));
return (pnl_key.cljs$core$IFn$_invoke$arity$1 ? pnl_key.cljs$core$IFn$_invoke$arity$1(G__120044) : pnl_key.call(null,G__120044));
}),cljs.core.vals(new cljs.core.Keyword(null,"lps","lps",2143562451).cljs$core$IFn$_invoke$arity$1(state))));
});
lpdashboard.core.compute_totals = (function lpdashboard$core$compute_totals(state){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rewards","rewards",-1173924062),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"rewards","rewards",-1173924062),state),new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"pool-pnl","pool-pnl",1002024130),state),new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),lpdashboard.core.compute_total(new cljs.core.Keyword(null,"total-pnl","total-pnl",1020592454),state)], null);
});

//# sourceMappingURL=lpdashboard.core.js.map

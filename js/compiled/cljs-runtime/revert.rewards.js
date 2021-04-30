goog.provide('revert.rewards');
revert.rewards.get_earned = (function revert$rewards$get_earned(contract,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87767){
var state_val_87768 = (state_87767[(1)]);
if((state_val_87768 === (1))){
var inst_87748 = contract.earned(user_address);
var inst_87750 = cljs.core.async.interop.p__GT_c(inst_87748);
var state_87767__$1 = state_87767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87767__$1,(2),inst_87750);
} else {
if((state_val_87768 === (2))){
var inst_87752 = (state_87767[(7)]);
var inst_87752__$1 = (state_87767[(2)]);
var inst_87755 = (inst_87752__$1 instanceof cljs.core.ExceptionInfo);
var inst_87756 = cljs.core.ex_data(inst_87752__$1);
var inst_87757 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87756);
var inst_87758 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87757,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87759 = ((inst_87755) && (inst_87758));
var state_87767__$1 = (function (){var statearr_87772 = state_87767;
(statearr_87772[(7)] = inst_87752__$1);

return statearr_87772;
})();
if(cljs.core.truth_(inst_87759)){
var statearr_87775_89706 = state_87767__$1;
(statearr_87775_89706[(1)] = (3));

} else {
var statearr_87776_89707 = state_87767__$1;
(statearr_87776_89707[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87768 === (3))){
var inst_87752 = (state_87767[(7)]);
var inst_87762 = (function(){throw inst_87752})();
var state_87767__$1 = state_87767;
var statearr_87781_89708 = state_87767__$1;
(statearr_87781_89708[(2)] = inst_87762);

(statearr_87781_89708[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87768 === (4))){
var inst_87752 = (state_87767[(7)]);
var state_87767__$1 = state_87767;
var statearr_87783_89709 = state_87767__$1;
(statearr_87783_89709[(2)] = inst_87752);

(statearr_87783_89709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87768 === (5))){
var inst_87765 = (state_87767[(2)]);
var state_87767__$1 = state_87767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87767__$1,inst_87765);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$get_earned_$_state_machine__52186__auto__ = null;
var revert$rewards$get_earned_$_state_machine__52186__auto____0 = (function (){
var statearr_87791 = [null,null,null,null,null,null,null,null];
(statearr_87791[(0)] = revert$rewards$get_earned_$_state_machine__52186__auto__);

(statearr_87791[(1)] = (1));

return statearr_87791;
});
var revert$rewards$get_earned_$_state_machine__52186__auto____1 = (function (state_87767){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87767);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87792){var ex__52189__auto__ = e87792;
var statearr_87793_89710 = state_87767;
(statearr_87793_89710[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87767[(4)]))){
var statearr_87794_89711 = state_87767;
(statearr_87794_89711[(1)] = cljs.core.first((state_87767[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89712 = state_87767;
state_87767 = G__89712;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$get_earned_$_state_machine__52186__auto__ = function(state_87767){
switch(arguments.length){
case 0:
return revert$rewards$get_earned_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$get_earned_$_state_machine__52186__auto____1.call(this,state_87767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$get_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$get_earned_$_state_machine__52186__auto____0;
revert$rewards$get_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$get_earned_$_state_machine__52186__auto____1;
return revert$rewards$get_earned_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87797 = f__52209__auto__();
(statearr_87797[(6)] = c__52208__auto__);

return statearr_87797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staking_rewards_earned = (function revert$rewards$_LT_staking_rewards_earned(staking_address,rewards_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_87826){
var state_val_87827 = (state_87826[(1)]);
if((state_val_87827 === (1))){
var state_87826__$1 = state_87826;
var statearr_87831_89713 = state_87826__$1;
(statearr_87831_89713[(2)] = null);

(statearr_87831_89713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87827 === (2))){
var _ = (function (){var statearr_87832 = state_87826;
(statearr_87832[(4)] = cljs.core.cons((5),(state_87826[(4)])));

return statearr_87832;
})();
var inst_87811 = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var inst_87812 = revert.ethereum._LT_token_decimals(rewards_address);
var state_87826__$1 = (function (){var statearr_87833 = state_87826;
(statearr_87833[(7)] = inst_87811);

return statearr_87833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87826__$1,(6),inst_87812);
} else {
if((state_val_87827 === (3))){
var inst_87823 = (state_87826[(2)]);
var state_87826__$1 = state_87826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_87826__$1,inst_87823);
} else {
if((state_val_87827 === (4))){
var inst_87804 = (state_87826[(2)]);
var inst_87805 = revert.utils.bn((0));
var state_87826__$1 = (function (){var statearr_87838 = state_87826;
(statearr_87838[(8)] = inst_87804);

return statearr_87838;
})();
var statearr_87840_89714 = state_87826__$1;
(statearr_87840_89714[(2)] = inst_87805);

(statearr_87840_89714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87827 === (5))){
var _ = (function (){var statearr_87841 = state_87826;
(statearr_87841[(4)] = cljs.core.rest((state_87826[(4)])));

return statearr_87841;
})();
var state_87826__$1 = state_87826;
var ex87835 = (state_87826__$1[(2)]);
var statearr_87842_89729 = state_87826__$1;
(statearr_87842_89729[(5)] = ex87835);


if((ex87835 instanceof Error)){
var statearr_87845_89732 = state_87826__$1;
(statearr_87845_89732[(1)] = (4));

(statearr_87845_89732[(5)] = null);

} else {
throw ex87835;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87827 === (6))){
var inst_87811 = (state_87826[(7)]);
var inst_87814 = (state_87826[(2)]);
var inst_87816 = revert.rewards.get_earned(inst_87811,user_address);
var state_87826__$1 = (function (){var statearr_87847 = state_87826;
(statearr_87847[(9)] = inst_87814);

return statearr_87847;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_87826__$1,(7),inst_87816);
} else {
if((state_val_87827 === (7))){
var inst_87814 = (state_87826[(9)]);
var inst_87819 = (state_87826[(2)]);
var inst_87820 = revert.utils.ebn__GT_bn(inst_87819,inst_87814);
var _ = (function (){var statearr_87848 = state_87826;
(statearr_87848[(4)] = cljs.core.rest((state_87826[(4)])));

return statearr_87848;
})();
var state_87826__$1 = state_87826;
var statearr_87849_89733 = state_87826__$1;
(statearr_87849_89733[(2)] = inst_87820);

(statearr_87849_89733[(1)] = (3));


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
});
return (function() {
var revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____0 = (function (){
var statearr_87853 = [null,null,null,null,null,null,null,null,null,null];
(statearr_87853[(0)] = revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__);

(statearr_87853[(1)] = (1));

return statearr_87853;
});
var revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____1 = (function (state_87826){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_87826);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e87855){var ex__52189__auto__ = e87855;
var statearr_87856_89738 = state_87826;
(statearr_87856_89738[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_87826[(4)]))){
var statearr_87857_89740 = state_87826;
(statearr_87857_89740[(1)] = cljs.core.first((state_87826[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89742 = state_87826;
state_87826 = G__89742;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__ = function(state_87826){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____1.call(this,state_87826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_87863 = f__52209__auto__();
(statearr_87863[(6)] = c__52208__auto__);

return statearr_87863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staking_rewards_token_failback = (function revert$rewards$_LT_staking_rewards_token_failback(staking_address){
var staking_contract = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88092){
var state_val_88093 = (state_88092[(1)]);
if((state_val_88093 === (65))){
var inst_88049 = (state_88092[(7)]);
var inst_88049__$1 = (state_88092[(2)]);
var inst_88051 = (inst_88049__$1 instanceof cljs.core.ExceptionInfo);
var inst_88052 = cljs.core.ex_data(inst_88049__$1);
var inst_88053 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88052);
var inst_88054 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88053,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88055 = ((inst_88051) && (inst_88054));
var state_88092__$1 = (function (){var statearr_88094 = state_88092;
(statearr_88094[(7)] = inst_88049__$1);

return statearr_88094;
})();
if(cljs.core.truth_(inst_88055)){
var statearr_88095_89747 = state_88092__$1;
(statearr_88095_89747[(1)] = (66));

} else {
var statearr_88096_89748 = state_88092__$1;
(statearr_88096_89748[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (70))){
var inst_88074 = (state_88092[(8)]);
var inst_88074__$1 = (state_88092[(2)]);
var inst_88075 = (inst_88074__$1 instanceof cljs.core.ExceptionInfo);
var inst_88076 = cljs.core.ex_data(inst_88074__$1);
var inst_88077 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88076);
var inst_88078 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88077,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88079 = ((inst_88075) && (inst_88078));
var state_88092__$1 = (function (){var statearr_88097 = state_88092;
(statearr_88097[(8)] = inst_88074__$1);

return statearr_88097;
})();
if(cljs.core.truth_(inst_88079)){
var statearr_88100_89750 = state_88092__$1;
(statearr_88100_89750[(1)] = (71));

} else {
var statearr_88101_89751 = state_88092__$1;
(statearr_88101_89751[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (62))){
var inst_88027 = (state_88092[(9)]);
var state_88092__$1 = state_88092;
var statearr_88104_89753 = state_88092__$1;
(statearr_88104_89753[(2)] = inst_88027);

(statearr_88104_89753[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (7))){
var inst_87868 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88105 = state_88092;
(statearr_88105[(10)] = inst_87868);

return statearr_88105;
})();
var statearr_88106_89757 = state_88092__$1;
(statearr_88106_89757[(2)] = null);

(statearr_88106_89757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (59))){
var _ = (function (){var statearr_88109 = state_88092;
(statearr_88109[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88109;
})();
var state_88092__$1 = state_88092;
var ex88103 = (state_88092__$1[(2)]);
var statearr_88111_89770 = state_88092__$1;
(statearr_88111_89770[(5)] = ex88103);


if((ex88103 instanceof Error)){
var statearr_88112_89773 = state_88092__$1;
(statearr_88112_89773[(1)] = (10));

(statearr_88112_89773[(5)] = null);

} else {
throw ex88103;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (20))){
var _ = (function (){var statearr_88116 = state_88092;
(statearr_88116[(4)] = cljs.core.cons((39),(state_88092[(4)])));

return statearr_88116;
})();
var inst_87930 = staking_contract.apy();
var inst_87931 = cljs.core.async.interop.p__GT_c(inst_87930);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(40),inst_87931);
} else {
if((state_val_88093 === (72))){
var inst_88074 = (state_88092[(8)]);
var state_88092__$1 = state_88092;
var statearr_88117_89774 = state_88092__$1;
(statearr_88117_89774[(2)] = inst_88074);

(statearr_88117_89774[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (58))){
var inst_88015 = (state_88092[(2)]);
var _ = (function (){var statearr_88118 = state_88092;
(statearr_88118[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88118;
})();
var state_88092__$1 = state_88092;
var statearr_88119_89777 = state_88092__$1;
(statearr_88119_89777[(2)] = inst_88015);

(statearr_88119_89777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (60))){
var inst_88027 = (state_88092[(9)]);
var inst_88027__$1 = (state_88092[(2)]);
var inst_88028 = (inst_88027__$1 instanceof cljs.core.ExceptionInfo);
var inst_88029 = cljs.core.ex_data(inst_88027__$1);
var inst_88030 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88029);
var inst_88031 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88030,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88032 = ((inst_88028) && (inst_88031));
var state_88092__$1 = (function (){var statearr_88120 = state_88092;
(statearr_88120[(9)] = inst_88027__$1);

return statearr_88120;
})();
if(cljs.core.truth_(inst_88032)){
var statearr_88121_89780 = state_88092__$1;
(statearr_88121_89780[(1)] = (61));

} else {
var statearr_88122_89781 = state_88092__$1;
(statearr_88122_89781[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (27))){
var inst_87899 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88124_89783 = state_88092__$1;
(statearr_88124_89783[(2)] = inst_87899);

(statearr_88124_89783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (1))){
var state_88092__$1 = state_88092;
var statearr_88125_89784 = state_88092__$1;
(statearr_88125_89784[(2)] = null);

(statearr_88125_89784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (69))){
var _ = (function (){var statearr_88126 = state_88092;
(statearr_88126[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88126;
})();
var state_88092__$1 = state_88092;
var ex88123 = (state_88092__$1[(2)]);
var statearr_88127_89787 = state_88092__$1;
(statearr_88127_89787[(5)] = ex88123);


if((ex88123 instanceof Error)){
var statearr_88128_89789 = state_88092__$1;
(statearr_88128_89789[(1)] = (4));

(statearr_88128_89789[(5)] = null);

} else {
throw ex88123;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (24))){
var inst_87924 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88130_89791 = state_88092__$1;
(statearr_88130_89791[(2)] = inst_87924);

(statearr_88130_89791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (55))){
var inst_88005 = (state_88092[(11)]);
var inst_88005__$1 = (state_88092[(2)]);
var inst_88006 = (inst_88005__$1 instanceof cljs.core.ExceptionInfo);
var inst_88007 = cljs.core.ex_data(inst_88005__$1);
var inst_88008 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88007);
var inst_88009 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88008,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88010 = ((inst_88006) && (inst_88009));
var state_88092__$1 = (function (){var statearr_88131 = state_88092;
(statearr_88131[(11)] = inst_88005__$1);

return statearr_88131;
})();
if(cljs.core.truth_(inst_88010)){
var statearr_88132_89793 = state_88092__$1;
(statearr_88132_89793[(1)] = (56));

} else {
var statearr_88133_89794 = state_88092__$1;
(statearr_88133_89794[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (39))){
var _ = (function (){var statearr_88134 = state_88092;
(statearr_88134[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88134;
})();
var state_88092__$1 = state_88092;
var ex88129 = (state_88092__$1[(2)]);
var statearr_88135_89809 = state_88092__$1;
(statearr_88135_89809[(5)] = ex88129);


if((ex88129 instanceof Error)){
var statearr_88136_89810 = state_88092__$1;
(statearr_88136_89810[(1)] = (22));

(statearr_88136_89810[(5)] = null);

} else {
throw ex88129;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (46))){
var inst_87956 = (state_88092[(12)]);
var inst_87965 = (function(){throw inst_87956})();
var state_88092__$1 = state_88092;
var statearr_88138_89811 = state_88092__$1;
(statearr_88138_89811[(2)] = inst_87965);

(statearr_88138_89811[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (4))){
var inst_87867 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88139 = state_88092;
(statearr_88139[(13)] = inst_87867);

return statearr_88139;
})();
var statearr_88140_89812 = state_88092__$1;
(statearr_88140_89812[(2)] = null);

(statearr_88140_89812[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (54))){
var _ = (function (){var statearr_88141 = state_88092;
(statearr_88141[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88141;
})();
var state_88092__$1 = state_88092;
var ex88137 = (state_88092__$1[(2)]);
var statearr_88142_89816 = state_88092__$1;
(statearr_88142_89816[(5)] = ex88137);


if((ex88137 instanceof Error)){
var statearr_88143_89817 = state_88092__$1;
(statearr_88143_89817[(1)] = (13));

(statearr_88143_89817[(5)] = null);

} else {
throw ex88137;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (15))){
var inst_87995 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88144_89818 = state_88092__$1;
(statearr_88144_89818[(2)] = inst_87995);

(statearr_88144_89818[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (48))){
var inst_87968 = (state_88092[(2)]);
var _ = (function (){var statearr_88146 = state_88092;
(statearr_88146[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88146;
})();
var state_88092__$1 = state_88092;
var statearr_88148_89821 = state_88092__$1;
(statearr_88148_89821[(2)] = inst_87968);

(statearr_88148_89821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (50))){
var inst_87980 = (state_88092[(14)]);
var inst_87980__$1 = (state_88092[(2)]);
var inst_87982 = (inst_87980__$1 instanceof cljs.core.ExceptionInfo);
var inst_87983 = cljs.core.ex_data(inst_87980__$1);
var inst_87984 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87983);
var inst_87986 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87984,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87987 = ((inst_87982) && (inst_87986));
var state_88092__$1 = (function (){var statearr_88150 = state_88092;
(statearr_88150[(14)] = inst_87980__$1);

return statearr_88150;
})();
if(cljs.core.truth_(inst_87987)){
var statearr_88151_89822 = state_88092__$1;
(statearr_88151_89822[(1)] = (51));

} else {
var statearr_88152_89824 = state_88092__$1;
(statearr_88152_89824[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (21))){
var inst_87946 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88153_89825 = state_88092__$1;
(statearr_88153_89825[(2)] = inst_87946);

(statearr_88153_89825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (31))){
var inst_87886 = (state_88092[(15)]);
var inst_87893 = (function(){throw inst_87886})();
var state_88092__$1 = state_88092;
var statearr_88154_89828 = state_88092__$1;
(statearr_88154_89828[(2)] = inst_87893);

(statearr_88154_89828[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (32))){
var inst_87886 = (state_88092[(15)]);
var state_88092__$1 = state_88092;
var statearr_88155_89829 = state_88092__$1;
(statearr_88155_89829[(2)] = inst_87886);

(statearr_88155_89829[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (40))){
var inst_87933 = (state_88092[(16)]);
var inst_87933__$1 = (state_88092[(2)]);
var inst_87934 = (inst_87933__$1 instanceof cljs.core.ExceptionInfo);
var inst_87935 = cljs.core.ex_data(inst_87933__$1);
var inst_87936 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87935);
var inst_87937 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87936,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87938 = ((inst_87934) && (inst_87937));
var state_88092__$1 = (function (){var statearr_88157 = state_88092;
(statearr_88157[(16)] = inst_87933__$1);

return statearr_88157;
})();
if(cljs.core.truth_(inst_87938)){
var statearr_88159_89832 = state_88092__$1;
(statearr_88159_89832[(1)] = (41));

} else {
var statearr_88160_89833 = state_88092__$1;
(statearr_88160_89833[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (56))){
var inst_88005 = (state_88092[(11)]);
var inst_88012 = (function(){throw inst_88005})();
var state_88092__$1 = state_88092;
var statearr_88162_89834 = state_88092__$1;
(statearr_88162_89834[(2)] = inst_88012);

(statearr_88162_89834[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (33))){
var inst_87896 = (state_88092[(2)]);
var _ = (function (){var statearr_88163 = state_88092;
(statearr_88163[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88163;
})();
var state_88092__$1 = state_88092;
var statearr_88164_89836 = state_88092__$1;
(statearr_88164_89836[(2)] = inst_87896);

(statearr_88164_89836[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (13))){
var inst_87871 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88165 = state_88092;
(statearr_88165[(17)] = inst_87871);

return statearr_88165;
})();
var statearr_88166_89840 = state_88092__$1;
(statearr_88166_89840[(2)] = null);

(statearr_88166_89840[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (22))){
var inst_87874 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88167 = state_88092;
(statearr_88167[(18)] = inst_87874);

return statearr_88167;
})();
var statearr_88168_89853 = state_88092__$1;
(statearr_88168_89853[(2)] = null);

(statearr_88168_89853[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (36))){
var inst_87909 = (state_88092[(19)]);
var inst_87918 = (function(){throw inst_87909})();
var state_88092__$1 = state_88092;
var statearr_88169_89856 = state_88092__$1;
(statearr_88169_89856[(2)] = inst_87918);

(statearr_88169_89856[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (41))){
var inst_87933 = (state_88092[(16)]);
var inst_87940 = (function(){throw inst_87933})();
var state_88092__$1 = state_88092;
var statearr_88170_89857 = state_88092__$1;
(statearr_88170_89857[(2)] = inst_87940);

(statearr_88170_89857[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (43))){
var inst_87943 = (state_88092[(2)]);
var _ = (function (){var statearr_88172 = state_88092;
(statearr_88172[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88172;
})();
var state_88092__$1 = state_88092;
var statearr_88173_89858 = state_88092__$1;
(statearr_88173_89858[(2)] = inst_87943);

(statearr_88173_89858[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (61))){
var inst_88027 = (state_88092[(9)]);
var inst_88034 = (function(){throw inst_88027})();
var state_88092__$1 = state_88092;
var statearr_88178_89860 = state_88092__$1;
(statearr_88178_89860[(2)] = inst_88034);

(statearr_88178_89860[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (29))){
var _ = (function (){var statearr_88179 = state_88092;
(statearr_88179[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88179;
})();
var state_88092__$1 = state_88092;
var ex88171 = (state_88092__$1[(2)]);
var statearr_88180_89863 = state_88092__$1;
(statearr_88180_89863[(5)] = ex88171);


if((ex88171 instanceof Error)){
var statearr_88181_89864 = state_88092__$1;
(statearr_88181_89864[(1)] = (28));

(statearr_88181_89864[(5)] = null);

} else {
throw ex88171;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (44))){
var _ = (function (){var statearr_88182 = state_88092;
(statearr_88182[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88182;
})();
var state_88092__$1 = state_88092;
var ex88174 = (state_88092__$1[(2)]);
var statearr_88185_89867 = state_88092__$1;
(statearr_88185_89867[(5)] = ex88174);


if((ex88174 instanceof Error)){
var statearr_88186_89868 = state_88092__$1;
(statearr_88186_89868[(1)] = (19));

(statearr_88186_89868[(5)] = null);

} else {
throw ex88174;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (6))){
var inst_88064 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88189_89869 = state_88092__$1;
(statearr_88189_89869[(2)] = inst_88064);

(statearr_88189_89869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (28))){
var inst_87876 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88190 = state_88092;
(statearr_88190[(20)] = inst_87876);

return statearr_88190;
})();
var statearr_88191_89873 = state_88092__$1;
(statearr_88191_89873[(2)] = null);

(statearr_88191_89873[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (64))){
var _ = (function (){var statearr_88192 = state_88092;
(statearr_88192[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88192;
})();
var state_88092__$1 = state_88092;
var ex88188 = (state_88092__$1[(2)]);
var statearr_88193_89875 = state_88092__$1;
(statearr_88193_89875[(5)] = ex88188);


if((ex88188 instanceof Error)){
var statearr_88194_89876 = state_88092__$1;
(statearr_88194_89876[(1)] = (7));

(statearr_88194_89876[(5)] = null);

} else {
throw ex88188;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (51))){
var inst_87980 = (state_88092[(14)]);
var inst_87989 = (function(){throw inst_87980})();
var state_88092__$1 = state_88092;
var statearr_88196_89878 = state_88092__$1;
(statearr_88196_89878[(2)] = inst_87989);

(statearr_88196_89878[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (25))){
var inst_87875 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88197 = state_88092;
(statearr_88197[(21)] = inst_87875);

return statearr_88197;
})();
var statearr_88201_89879 = state_88092__$1;
(statearr_88201_89879[(2)] = null);

(statearr_88201_89879[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (34))){
var _ = (function (){var statearr_88202 = state_88092;
(statearr_88202[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88202;
})();
var state_88092__$1 = state_88092;
var ex88195 = (state_88092__$1[(2)]);
var statearr_88204_89891 = state_88092__$1;
(statearr_88204_89891[(5)] = ex88195);


if((ex88195 instanceof Error)){
var statearr_88205_89892 = state_88092__$1;
(statearr_88205_89892[(1)] = (25));

(statearr_88205_89892[(5)] = null);

} else {
throw ex88195;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (17))){
var _ = (function (){var statearr_88206 = state_88092;
(statearr_88206[(4)] = cljs.core.cons((44),(state_88092[(4)])));

return statearr_88206;
})();
var inst_87953 = staking_contract.token();
var inst_87954 = cljs.core.async.interop.p__GT_c(inst_87953);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(45),inst_87954);
} else {
if((state_val_88093 === (3))){
var inst_88087 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88092__$1,inst_88087);
} else {
if((state_val_88093 === (12))){
var inst_88018 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88207_89893 = state_88092__$1;
(statearr_88207_89893[(2)] = inst_88018);

(statearr_88207_89893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (2))){
var _ = (function (){var statearr_88208 = state_88092;
(statearr_88208[(4)] = cljs.core.cons((69),(state_88092[(4)])));

return statearr_88208;
})();
var inst_88070 = staking_contract.rewardsToken();
var inst_88072 = cljs.core.async.interop.p__GT_c(inst_88070);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(70),inst_88072);
} else {
if((state_val_88093 === (66))){
var inst_88049 = (state_88092[(7)]);
var inst_88058 = (function(){throw inst_88049})();
var state_88092__$1 = state_88092;
var statearr_88209_89895 = state_88092__$1;
(statearr_88209_89895[(2)] = inst_88058);

(statearr_88209_89895[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (23))){
var _ = (function (){var statearr_88210 = state_88092;
(statearr_88210[(4)] = cljs.core.cons((34),(state_88092[(4)])));

return statearr_88210;
})();
var inst_87906 = staking_contract.boostToken();
var inst_87907 = cljs.core.async.interop.p__GT_c(inst_87906);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(35),inst_87907);
} else {
if((state_val_88093 === (47))){
var inst_87956 = (state_88092[(12)]);
var state_88092__$1 = state_88092;
var statearr_88211_89899 = state_88092__$1;
(statearr_88211_89899[(2)] = inst_87956);

(statearr_88211_89899[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (35))){
var inst_87909 = (state_88092[(19)]);
var inst_87909__$1 = (state_88092[(2)]);
var inst_87912 = (inst_87909__$1 instanceof cljs.core.ExceptionInfo);
var inst_87913 = cljs.core.ex_data(inst_87909__$1);
var inst_87914 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87913);
var inst_87915 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87914,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87916 = ((inst_87912) && (inst_87915));
var state_88092__$1 = (function (){var statearr_88212 = state_88092;
(statearr_88212[(19)] = inst_87909__$1);

return statearr_88212;
})();
if(cljs.core.truth_(inst_87916)){
var statearr_88213_89901 = state_88092__$1;
(statearr_88213_89901[(1)] = (36));

} else {
var statearr_88214_89902 = state_88092__$1;
(statearr_88214_89902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (19))){
var inst_87873 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88215 = state_88092;
(statearr_88215[(22)] = inst_87873);

return statearr_88215;
})();
var statearr_88216_89903 = state_88092__$1;
(statearr_88216_89903[(2)] = null);

(statearr_88216_89903[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (57))){
var inst_88005 = (state_88092[(11)]);
var state_88092__$1 = state_88092;
var statearr_88217_89904 = state_88092__$1;
(statearr_88217_89904[(2)] = inst_88005);

(statearr_88217_89904[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (68))){
var inst_88061 = (state_88092[(2)]);
var _ = (function (){var statearr_88218 = state_88092;
(statearr_88218[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88218;
})();
var state_88092__$1 = state_88092;
var statearr_88219_89909 = state_88092__$1;
(statearr_88219_89909[(2)] = inst_88061);

(statearr_88219_89909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (11))){
var _ = (function (){var statearr_88220 = state_88092;
(statearr_88220[(4)] = cljs.core.cons((54),(state_88092[(4)])));

return statearr_88220;
})();
var inst_88002 = staking_contract.yam();
var inst_88003 = cljs.core.async.interop.p__GT_c(inst_88002);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(55),inst_88003);
} else {
if((state_val_88093 === (9))){
var inst_88040 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88221_89916 = state_88092__$1;
(statearr_88221_89916[(2)] = inst_88040);

(statearr_88221_89916[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (5))){
var _ = (function (){var statearr_88222 = state_88092;
(statearr_88222[(4)] = cljs.core.cons((64),(state_88092[(4)])));

return statearr_88222;
})();
var inst_88046 = staking_contract.sushi();
var inst_88047 = cljs.core.async.interop.p__GT_c(inst_88046);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(65),inst_88047);
} else {
if((state_val_88093 === (14))){
var _ = (function (){var statearr_88223 = state_88092;
(statearr_88223[(4)] = cljs.core.cons((49),(state_88092[(4)])));

return statearr_88223;
})();
var inst_87977 = staking_contract.sashimi();
var inst_87978 = cljs.core.async.interop.p__GT_c(inst_87977);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(50),inst_87978);
} else {
if((state_val_88093 === (45))){
var inst_87956 = (state_88092[(12)]);
var inst_87956__$1 = (state_88092[(2)]);
var inst_87958 = (inst_87956__$1 instanceof cljs.core.ExceptionInfo);
var inst_87960 = cljs.core.ex_data(inst_87956__$1);
var inst_87961 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87960);
var inst_87962 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87961,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87963 = ((inst_87958) && (inst_87962));
var state_88092__$1 = (function (){var statearr_88224 = state_88092;
(statearr_88224[(12)] = inst_87956__$1);

return statearr_88224;
})();
if(cljs.core.truth_(inst_87963)){
var statearr_88225_89920 = state_88092__$1;
(statearr_88225_89920[(1)] = (46));

} else {
var statearr_88226_89921 = state_88092__$1;
(statearr_88226_89921[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (53))){
var inst_87992 = (state_88092[(2)]);
var _ = (function (){var statearr_88227 = state_88092;
(statearr_88227[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88227;
})();
var state_88092__$1 = state_88092;
var statearr_88228_89923 = state_88092__$1;
(statearr_88228_89923[(2)] = inst_87992);

(statearr_88228_89923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (26))){
var _ = (function (){var statearr_88229 = state_88092;
(statearr_88229[(4)] = cljs.core.cons((29),(state_88092[(4)])));

return statearr_88229;
})();
var inst_87883 = staking_contract.cream();
var inst_87884 = cljs.core.async.interop.p__GT_c(inst_87883);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(30),inst_87884);
} else {
if((state_val_88093 === (16))){
var inst_87872 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88230 = state_88092;
(statearr_88230[(23)] = inst_87872);

return statearr_88230;
})();
var statearr_88231_89925 = state_88092__$1;
(statearr_88231_89925[(2)] = null);

(statearr_88231_89925[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (38))){
var inst_87921 = (state_88092[(2)]);
var _ = (function (){var statearr_88232 = state_88092;
(statearr_88232[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88232;
})();
var state_88092__$1 = state_88092;
var statearr_88233_89926 = state_88092__$1;
(statearr_88233_89926[(2)] = inst_87921);

(statearr_88233_89926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (30))){
var inst_87886 = (state_88092[(15)]);
var inst_87886__$1 = (state_88092[(2)]);
var inst_87887 = (inst_87886__$1 instanceof cljs.core.ExceptionInfo);
var inst_87888 = cljs.core.ex_data(inst_87886__$1);
var inst_87889 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_87888);
var inst_87890 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_87889,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_87891 = ((inst_87887) && (inst_87890));
var state_88092__$1 = (function (){var statearr_88234 = state_88092;
(statearr_88234[(15)] = inst_87886__$1);

return statearr_88234;
})();
if(cljs.core.truth_(inst_87891)){
var statearr_88235_89932 = state_88092__$1;
(statearr_88235_89932[(1)] = (31));

} else {
var statearr_88236_89933 = state_88092__$1;
(statearr_88236_89933[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (73))){
var inst_88084 = (state_88092[(2)]);
var _ = (function (){var statearr_88237 = state_88092;
(statearr_88237[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88237;
})();
var state_88092__$1 = state_88092;
var statearr_88238_89934 = state_88092__$1;
(statearr_88238_89934[(2)] = inst_88084);

(statearr_88238_89934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (10))){
var inst_87869 = (state_88092[(2)]);
var state_88092__$1 = (function (){var statearr_88239 = state_88092;
(statearr_88239[(24)] = inst_87869);

return statearr_88239;
})();
var statearr_88240_89935 = state_88092__$1;
(statearr_88240_89935[(2)] = null);

(statearr_88240_89935[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (18))){
var inst_87971 = (state_88092[(2)]);
var state_88092__$1 = state_88092;
var statearr_88241_89938 = state_88092__$1;
(statearr_88241_89938[(2)] = inst_87971);

(statearr_88241_89938[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (52))){
var inst_87980 = (state_88092[(14)]);
var state_88092__$1 = state_88092;
var statearr_88242_89939 = state_88092__$1;
(statearr_88242_89939[(2)] = inst_87980);

(statearr_88242_89939[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (67))){
var inst_88049 = (state_88092[(7)]);
var state_88092__$1 = state_88092;
var statearr_88243_89943 = state_88092__$1;
(statearr_88243_89943[(2)] = inst_88049);

(statearr_88243_89943[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (71))){
var inst_88074 = (state_88092[(8)]);
var inst_88081 = (function(){throw inst_88074})();
var state_88092__$1 = state_88092;
var statearr_88244_89944 = state_88092__$1;
(statearr_88244_89944[(2)] = inst_88081);

(statearr_88244_89944[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (42))){
var inst_87933 = (state_88092[(16)]);
var state_88092__$1 = state_88092;
var statearr_88245_89945 = state_88092__$1;
(statearr_88245_89945[(2)] = inst_87933);

(statearr_88245_89945[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (37))){
var inst_87909 = (state_88092[(19)]);
var state_88092__$1 = state_88092;
var statearr_88246_89947 = state_88092__$1;
(statearr_88246_89947[(2)] = inst_87909);

(statearr_88246_89947[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (63))){
var inst_88037 = (state_88092[(2)]);
var _ = (function (){var statearr_88248 = state_88092;
(statearr_88248[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88248;
})();
var state_88092__$1 = state_88092;
var statearr_88249_89949 = state_88092__$1;
(statearr_88249_89949[(2)] = inst_88037);

(statearr_88249_89949[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88093 === (8))){
var _ = (function (){var statearr_88250 = state_88092;
(statearr_88250[(4)] = cljs.core.cons((59),(state_88092[(4)])));

return statearr_88250;
})();
var inst_88024 = staking_contract.rewardToken();
var inst_88025 = cljs.core.async.interop.p__GT_c(inst_88024);
var state_88092__$1 = state_88092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88092__$1,(60),inst_88025);
} else {
if((state_val_88093 === (49))){
var _ = (function (){var statearr_88251 = state_88092;
(statearr_88251[(4)] = cljs.core.rest((state_88092[(4)])));

return statearr_88251;
})();
var state_88092__$1 = state_88092;
var ex88247 = (state_88092__$1[(2)]);
var statearr_88252_89953 = state_88092__$1;
(statearr_88252_89953[(5)] = ex88247);


if((ex88247 instanceof Error)){
var statearr_88253_89955 = state_88092__$1;
(statearr_88253_89955[(1)] = (16));

(statearr_88253_89955[(5)] = null);

} else {
throw ex88247;

}

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
var revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____0 = (function (){
var statearr_88254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88254[(0)] = revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__);

(statearr_88254[(1)] = (1));

return statearr_88254;
});
var revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____1 = (function (state_88092){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88092);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88255){var ex__52189__auto__ = e88255;
var statearr_88256_89960 = state_88092;
(statearr_88256_89960[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88092[(4)]))){
var statearr_88257_89961 = state_88092;
(statearr_88257_89961[(1)] = cljs.core.first((state_88092[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89963 = state_88092;
state_88092 = G__89963;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__ = function(state_88092){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____1.call(this,state_88092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88258 = f__52209__auto__();
(statearr_88258[(6)] = c__52208__auto__);

return statearr_88258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards.reward_methods = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rewardsToken","sushi","yam","sashimi","token","apy","boostToken","cream","mithShare","rewardToken"], null);
revert.rewards._LT_staking_rewards_token = (function revert$rewards$_LT_staking_rewards_token(staking_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88302){
var state_val_88303 = (state_88302[(1)]);
if((state_val_88303 === (7))){
var inst_88294 = (state_88302[(2)]);
var state_88302__$1 = state_88302;
var statearr_88304_89969 = state_88302__$1;
(statearr_88304_89969[(2)] = inst_88294);

(statearr_88304_89969[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (1))){
var inst_88260 = revert.ethereum._LT_get_bytecode(staking_address);
var state_88302__$1 = state_88302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88302__$1,(2),inst_88260);
} else {
if((state_val_88303 === (4))){
var inst_88296 = revert.rewards._LT_staking_rewards_token_failback(staking_address);
var state_88302__$1 = state_88302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88302__$1,(14),inst_88296);
} else {
if((state_val_88303 === (13))){
var inst_88291 = (state_88302[(2)]);
var _ = (function (){var statearr_88305 = state_88302;
(statearr_88305[(4)] = cljs.core.rest((state_88302[(4)])));

return statearr_88305;
})();
var state_88302__$1 = state_88302;
var statearr_88306_89971 = state_88302__$1;
(statearr_88306_89971[(2)] = inst_88291);

(statearr_88306_89971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (6))){
var inst_88269 = (state_88302[(7)]);
var inst_88267 = (state_88302[(8)]);
var _ = (function (){var statearr_88307 = state_88302;
(statearr_88307[(4)] = cljs.core.cons((9),(state_88302[(4)])));

return statearr_88307;
})();
var inst_88278 = cljs.core.js_invoke(inst_88269,inst_88267);
var inst_88279 = cljs.core.async.interop.p__GT_c(inst_88278);
var state_88302__$1 = state_88302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88302__$1,(10),inst_88279);
} else {
if((state_val_88303 === (3))){
var inst_88269 = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var state_88302__$1 = (function (){var statearr_88308 = state_88302;
(statearr_88308[(7)] = inst_88269);

return statearr_88308;
})();
var statearr_88309_89973 = state_88302__$1;
(statearr_88309_89973[(2)] = null);

(statearr_88309_89973[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (12))){
var inst_88281 = (state_88302[(9)]);
var state_88302__$1 = state_88302;
var statearr_88310_89974 = state_88302__$1;
(statearr_88310_89974[(2)] = inst_88281);

(statearr_88310_89974[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (2))){
var inst_88267 = (state_88302[(8)]);
var inst_88262 = (state_88302[(2)]);
var inst_88263 = (function (){var contract_code = inst_88262;
return (function (method_name){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([method_name,revert.ethereum.has_method_QMARK_(contract_code,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name),"()"].join(''))]);
});
})();
var inst_88264 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_88263,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([revert.rewards.reward_methods], 0));
var inst_88265 = (function (){var contract_code = inst_88262;
var tested_methods = inst_88264;
return (function (p1__88259_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__88259_SHARP_),true);
});
})();
var inst_88266 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_88265,inst_88264);
var inst_88267__$1 = cljs.core.ffirst(inst_88266);
var state_88302__$1 = (function (){var statearr_88312 = state_88302;
(statearr_88312[(8)] = inst_88267__$1);

return statearr_88312;
})();
if(cljs.core.truth_(inst_88267__$1)){
var statearr_88313_89975 = state_88302__$1;
(statearr_88313_89975[(1)] = (3));

} else {
var statearr_88314_89976 = state_88302__$1;
(statearr_88314_89976[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (11))){
var inst_88281 = (state_88302[(9)]);
var inst_88288 = (function(){throw inst_88281})();
var state_88302__$1 = state_88302;
var statearr_88315_89978 = state_88302__$1;
(statearr_88315_89978[(2)] = inst_88288);

(statearr_88315_89978[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (9))){
var _ = (function (){var statearr_88316 = state_88302;
(statearr_88316[(4)] = cljs.core.rest((state_88302[(4)])));

return statearr_88316;
})();
var state_88302__$1 = state_88302;
var ex88311 = (state_88302__$1[(2)]);
var statearr_88317_89979 = state_88302__$1;
(statearr_88317_89979[(5)] = ex88311);


if((ex88311 instanceof Error)){
var statearr_88318_89980 = state_88302__$1;
(statearr_88318_89980[(1)] = (8));

(statearr_88318_89980[(5)] = null);

} else {
throw ex88311;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (5))){
var inst_88300 = (state_88302[(2)]);
var state_88302__$1 = state_88302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88302__$1,inst_88300);
} else {
if((state_val_88303 === (14))){
var inst_88298 = (state_88302[(2)]);
var state_88302__$1 = state_88302;
var statearr_88319_89981 = state_88302__$1;
(statearr_88319_89981[(2)] = inst_88298);

(statearr_88319_89981[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (10))){
var inst_88281 = (state_88302[(9)]);
var inst_88281__$1 = (state_88302[(2)]);
var inst_88282 = (inst_88281__$1 instanceof cljs.core.ExceptionInfo);
var inst_88283 = cljs.core.ex_data(inst_88281__$1);
var inst_88284 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88283);
var inst_88285 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88284,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88286 = ((inst_88282) && (inst_88285));
var state_88302__$1 = (function (){var statearr_88320 = state_88302;
(statearr_88320[(9)] = inst_88281__$1);

return statearr_88320;
})();
if(cljs.core.truth_(inst_88286)){
var statearr_88321_89982 = state_88302__$1;
(statearr_88321_89982[(1)] = (11));

} else {
var statearr_88322_89983 = state_88302__$1;
(statearr_88322_89983[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88303 === (8))){
var inst_88267 = (state_88302[(8)]);
var inst_88270 = (state_88302[(2)]);
var inst_88271 = ["err getting staking token for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(staking_address),"with method:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_88267)].join('');
var inst_88272 = console.log(inst_88271);
var state_88302__$1 = (function (){var statearr_88323 = state_88302;
(statearr_88323[(10)] = inst_88270);

return statearr_88323;
})();
var statearr_88324_89984 = state_88302__$1;
(statearr_88324_89984[(2)] = inst_88272);

(statearr_88324_89984[(1)] = (7));


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
});
return (function() {
var revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____0 = (function (){
var statearr_88325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88325[(0)] = revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__);

(statearr_88325[(1)] = (1));

return statearr_88325;
});
var revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____1 = (function (state_88302){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88302);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88326){var ex__52189__auto__ = e88326;
var statearr_88327_89987 = state_88302;
(statearr_88327_89987[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88302[(4)]))){
var statearr_88328_89988 = state_88302;
(statearr_88328_89988[(1)] = cljs.core.first((state_88302[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89990 = state_88302;
state_88302 = G__89990;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__ = function(state_88302){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____1.call(this,state_88302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88329 = f__52209__auto__();
(statearr_88329[(6)] = c__52208__auto__);

return statearr_88329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_sr_staked_lps = (function revert$rewards$_LT_sr_staked_lps(staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88334){
var state_val_88335 = (state_88334[(1)]);
if((state_val_88335 === (1))){
var inst_88330 = revert.ethereum._LT_user_token_balance(user_address,staking_address);
var state_88334__$1 = state_88334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88334__$1,(2),inst_88330);
} else {
if((state_val_88335 === (2))){
var inst_88332 = (state_88334[(2)]);
var state_88334__$1 = state_88334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88334__$1,inst_88332);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_88336 = [null,null,null,null,null,null,null];
(statearr_88336[(0)] = revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__);

(statearr_88336[(1)] = (1));

return statearr_88336;
});
var revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____1 = (function (state_88334){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88334);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88337){var ex__52189__auto__ = e88337;
var statearr_88338_89995 = state_88334;
(statearr_88338_89995[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88334[(4)]))){
var statearr_88339_89996 = state_88334;
(statearr_88339_89996[(1)] = cljs.core.first((state_88334[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__89997 = state_88334;
state_88334 = G__89997;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__ = function(state_88334){
switch(arguments.length){
case 0:
return revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____1.call(this,state_88334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____0;
revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____1;
return revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88340 = f__52209__auto__();
(statearr_88340[(6)] = c__52208__auto__);

return statearr_88340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staking_pool_lps = (function revert$rewards$_LT_staking_pool_lps(lp_address,staking_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88345){
var state_val_88346 = (state_88345[(1)]);
if((state_val_88346 === (1))){
var inst_88341 = revert.ethereum._LT_user_token_balance(staking_address,lp_address);
var state_88345__$1 = state_88345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88345__$1,(2),inst_88341);
} else {
if((state_val_88346 === (2))){
var inst_88343 = (state_88345[(2)]);
var state_88345__$1 = state_88345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88345__$1,inst_88343);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_88347 = [null,null,null,null,null,null,null];
(statearr_88347[(0)] = revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__);

(statearr_88347[(1)] = (1));

return statearr_88347;
});
var revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____1 = (function (state_88345){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88345);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88348){var ex__52189__auto__ = e88348;
var statearr_88349_90002 = state_88345;
(statearr_88349_90002[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88345[(4)]))){
var statearr_88350_90003 = state_88345;
(statearr_88350_90003[(1)] = cljs.core.first((state_88345[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90004 = state_88345;
state_88345 = G__90004;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__ = function(state_88345){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____1.call(this,state_88345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88351 = f__52209__auto__();
(statearr_88351[(6)] = c__52208__auto__);

return statearr_88351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_total_pool_lps = (function revert$rewards$_LT_total_pool_lps(lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88369){
var state_val_88370 = (state_88369[(1)]);
if((state_val_88370 === (1))){
var inst_88352 = revert.ethereum.make_erc20(lp_address);
var inst_88353 = inst_88352.totalSupply();
var inst_88354 = cljs.core.async.interop.p__GT_c(inst_88353);
var state_88369__$1 = state_88369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88369__$1,(2),inst_88354);
} else {
if((state_val_88370 === (2))){
var inst_88356 = (state_88369[(7)]);
var inst_88356__$1 = (state_88369[(2)]);
var inst_88357 = (inst_88356__$1 instanceof cljs.core.ExceptionInfo);
var inst_88358 = cljs.core.ex_data(inst_88356__$1);
var inst_88359 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88358);
var inst_88360 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88359,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88361 = ((inst_88357) && (inst_88360));
var state_88369__$1 = (function (){var statearr_88371 = state_88369;
(statearr_88371[(7)] = inst_88356__$1);

return statearr_88371;
})();
if(cljs.core.truth_(inst_88361)){
var statearr_88372_90008 = state_88369__$1;
(statearr_88372_90008[(1)] = (3));

} else {
var statearr_88373_90009 = state_88369__$1;
(statearr_88373_90009[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88370 === (3))){
var inst_88356 = (state_88369[(7)]);
var inst_88363 = (function(){throw inst_88356})();
var state_88369__$1 = state_88369;
var statearr_88374_90012 = state_88369__$1;
(statearr_88374_90012[(2)] = inst_88363);

(statearr_88374_90012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88370 === (4))){
var inst_88356 = (state_88369[(7)]);
var state_88369__$1 = state_88369;
var statearr_88375_90013 = state_88369__$1;
(statearr_88375_90013[(2)] = inst_88356);

(statearr_88375_90013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88370 === (5))){
var inst_88366 = (state_88369[(2)]);
var inst_88367 = revert.utils.ebn__GT_bn(inst_88366,(18));
var state_88369__$1 = state_88369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88369__$1,inst_88367);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_88376 = [null,null,null,null,null,null,null,null];
(statearr_88376[(0)] = revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__);

(statearr_88376[(1)] = (1));

return statearr_88376;
});
var revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____1 = (function (state_88369){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88369);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88377){var ex__52189__auto__ = e88377;
var statearr_88378_90016 = state_88369;
(statearr_88378_90016[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88369[(4)]))){
var statearr_88379_90017 = state_88369;
(statearr_88379_90017[(1)] = cljs.core.first((state_88369[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90019 = state_88369;
state_88369 = G__90019;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__ = function(state_88369){
switch(arguments.length){
case 0:
return revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____1.call(this,state_88369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____0;
revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____1;
return revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88380 = f__52209__auto__();
(statearr_88380[(6)] = c__52208__auto__);

return statearr_88380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_lp_pool_tokens = (function revert$rewards$_LT_lp_pool_tokens(lp_address){
var lp_contract = revert.ethereum.make_erc20(lp_address);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88413){
var state_val_88414 = (state_88413[(1)]);
if((state_val_88414 === (7))){
var inst_88399 = (state_88413[(7)]);
var inst_88406 = (function(){throw inst_88399})();
var state_88413__$1 = state_88413;
var statearr_88415_90022 = state_88413__$1;
(statearr_88415_90022[(2)] = inst_88406);

(statearr_88415_90022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88414 === (1))){
var inst_88381 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88382 = lp_contract.token0();
var inst_88383 = cljs.core.async.interop.p__GT_c(inst_88382);
var state_88413__$1 = (function (){var statearr_88416 = state_88413;
(statearr_88416[(8)] = inst_88381);

return statearr_88416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88413__$1,(2),inst_88383);
} else {
if((state_val_88414 === (4))){
var inst_88385 = (state_88413[(9)]);
var state_88413__$1 = state_88413;
var statearr_88417_90023 = state_88413__$1;
(statearr_88417_90023[(2)] = inst_88385);

(statearr_88417_90023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88414 === (6))){
var inst_88399 = (state_88413[(7)]);
var inst_88399__$1 = (state_88413[(2)]);
var inst_88400 = (inst_88399__$1 instanceof cljs.core.ExceptionInfo);
var inst_88401 = cljs.core.ex_data(inst_88399__$1);
var inst_88402 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88401);
var inst_88403 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88402,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88404 = ((inst_88400) && (inst_88403));
var state_88413__$1 = (function (){var statearr_88418 = state_88413;
(statearr_88418[(7)] = inst_88399__$1);

return statearr_88418;
})();
if(cljs.core.truth_(inst_88404)){
var statearr_88419_90027 = state_88413__$1;
(statearr_88419_90027[(1)] = (7));

} else {
var statearr_88420_90028 = state_88413__$1;
(statearr_88420_90028[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88414 === (3))){
var inst_88385 = (state_88413[(9)]);
var inst_88392 = (function(){throw inst_88385})();
var state_88413__$1 = state_88413;
var statearr_88421_90030 = state_88413__$1;
(statearr_88421_90030[(2)] = inst_88392);

(statearr_88421_90030[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88414 === (2))){
var inst_88385 = (state_88413[(9)]);
var inst_88385__$1 = (state_88413[(2)]);
var inst_88386 = (inst_88385__$1 instanceof cljs.core.ExceptionInfo);
var inst_88387 = cljs.core.ex_data(inst_88385__$1);
var inst_88388 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88387);
var inst_88389 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88388,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88390 = ((inst_88386) && (inst_88389));
var state_88413__$1 = (function (){var statearr_88422 = state_88413;
(statearr_88422[(9)] = inst_88385__$1);

return statearr_88422;
})();
if(cljs.core.truth_(inst_88390)){
var statearr_88423_90032 = state_88413__$1;
(statearr_88423_90032[(1)] = (3));

} else {
var statearr_88424_90033 = state_88413__$1;
(statearr_88424_90033[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88414 === (9))){
var inst_88381 = (state_88413[(8)]);
var inst_88395 = (state_88413[(10)]);
var inst_88409 = (state_88413[(2)]);
var inst_88410 = [inst_88395,inst_88409];
var inst_88411 = (new cljs.core.PersistentVector(null,2,(5),inst_88381,inst_88410,null));
var state_88413__$1 = state_88413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88413__$1,inst_88411);
} else {
if((state_val_88414 === (5))){
var inst_88395 = (state_88413[(2)]);
var inst_88396 = lp_contract.token1();
var inst_88397 = cljs.core.async.interop.p__GT_c(inst_88396);
var state_88413__$1 = (function (){var statearr_88425 = state_88413;
(statearr_88425[(10)] = inst_88395);

return statearr_88425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88413__$1,(6),inst_88397);
} else {
if((state_val_88414 === (8))){
var inst_88399 = (state_88413[(7)]);
var state_88413__$1 = state_88413;
var statearr_88426_90036 = state_88413__$1;
(statearr_88426_90036[(2)] = inst_88399);

(statearr_88426_90036[(1)] = (9));


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
var revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____0 = (function (){
var statearr_88427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_88427[(0)] = revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__);

(statearr_88427[(1)] = (1));

return statearr_88427;
});
var revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____1 = (function (state_88413){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88413);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88428){var ex__52189__auto__ = e88428;
var statearr_88429_90037 = state_88413;
(statearr_88429_90037[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88413[(4)]))){
var statearr_88430_90038 = state_88413;
(statearr_88430_90038[(1)] = cljs.core.first((state_88413[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90039 = state_88413;
state_88413 = G__90039;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__ = function(state_88413){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____1.call(this,state_88413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88431 = f__52209__auto__();
(statearr_88431[(6)] = c__52208__auto__);

return statearr_88431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_lp_pool_symbols = (function revert$rewards$_LT_lp_pool_symbols(lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88471){
var state_val_88472 = (state_88471[(1)]);
if((state_val_88472 === (7))){
var inst_88457 = (state_88471[(7)]);
var inst_88457__$1 = (state_88471[(2)]);
var inst_88458 = (inst_88457__$1 instanceof cljs.core.ExceptionInfo);
var inst_88459 = cljs.core.ex_data(inst_88457__$1);
var inst_88460 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88459);
var inst_88461 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88460,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88462 = ((inst_88458) && (inst_88461));
var state_88471__$1 = (function (){var statearr_88473 = state_88471;
(statearr_88473[(7)] = inst_88457__$1);

return statearr_88473;
})();
if(cljs.core.truth_(inst_88462)){
var statearr_88474_90043 = state_88471__$1;
(statearr_88474_90043[(1)] = (8));

} else {
var statearr_88475_90044 = state_88471__$1;
(statearr_88475_90044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88472 === (1))){
var inst_88432 = revert.rewards._LT_lp_pool_tokens(lp_address);
var state_88471__$1 = state_88471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88471__$1,(2),inst_88432);
} else {
if((state_val_88472 === (4))){
var inst_88443 = (state_88471[(8)]);
var inst_88450 = (function(){throw inst_88443})();
var state_88471__$1 = state_88471;
var statearr_88476_90045 = state_88471__$1;
(statearr_88476_90045[(2)] = inst_88450);

(statearr_88476_90045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88472 === (6))){
var inst_88438 = (state_88471[(9)]);
var inst_88453 = (state_88471[(2)]);
var inst_88454 = inst_88438.symbol();
var inst_88455 = cljs.core.async.interop.p__GT_c(inst_88454);
var state_88471__$1 = (function (){var statearr_88477 = state_88471;
(statearr_88477[(10)] = inst_88453);

return statearr_88477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88471__$1,(7),inst_88455);
} else {
if((state_val_88472 === (3))){
var inst_88443 = (state_88471[(8)]);
var inst_88443__$1 = (state_88471[(2)]);
var inst_88444 = (inst_88443__$1 instanceof cljs.core.ExceptionInfo);
var inst_88445 = cljs.core.ex_data(inst_88443__$1);
var inst_88446 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88445);
var inst_88447 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88446,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88448 = ((inst_88444) && (inst_88447));
var state_88471__$1 = (function (){var statearr_88478 = state_88471;
(statearr_88478[(8)] = inst_88443__$1);

return statearr_88478;
})();
if(cljs.core.truth_(inst_88448)){
var statearr_88479_90050 = state_88471__$1;
(statearr_88479_90050[(1)] = (4));

} else {
var statearr_88480_90051 = state_88471__$1;
(statearr_88480_90051[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88472 === (2))){
var inst_88434 = (state_88471[(2)]);
var inst_88435 = cljs.core.first(inst_88434);
var inst_88436 = revert.ethereum.make_erc20(inst_88435);
var inst_88437 = cljs.core.second(inst_88434);
var inst_88438 = revert.ethereum.make_erc20(inst_88437);
var inst_88439 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88440 = inst_88436.symbol();
var inst_88441 = cljs.core.async.interop.p__GT_c(inst_88440);
var state_88471__$1 = (function (){var statearr_88481 = state_88471;
(statearr_88481[(11)] = inst_88439);

(statearr_88481[(9)] = inst_88438);

return statearr_88481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88471__$1,(3),inst_88441);
} else {
if((state_val_88472 === (9))){
var inst_88457 = (state_88471[(7)]);
var state_88471__$1 = state_88471;
var statearr_88482_90053 = state_88471__$1;
(statearr_88482_90053[(2)] = inst_88457);

(statearr_88482_90053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88472 === (5))){
var inst_88443 = (state_88471[(8)]);
var state_88471__$1 = state_88471;
var statearr_88483_90054 = state_88471__$1;
(statearr_88483_90054[(2)] = inst_88443);

(statearr_88483_90054[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88472 === (10))){
var inst_88453 = (state_88471[(10)]);
var inst_88439 = (state_88471[(11)]);
var inst_88467 = (state_88471[(2)]);
var inst_88468 = [inst_88453,inst_88467];
var inst_88469 = (new cljs.core.PersistentVector(null,2,(5),inst_88439,inst_88468,null));
var state_88471__$1 = state_88471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88471__$1,inst_88469);
} else {
if((state_val_88472 === (8))){
var inst_88457 = (state_88471[(7)]);
var inst_88464 = (function(){throw inst_88457})();
var state_88471__$1 = state_88471;
var statearr_88484_90056 = state_88471__$1;
(statearr_88484_90056[(2)] = inst_88464);

(statearr_88484_90056[(1)] = (10));


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
var revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____0 = (function (){
var statearr_88485 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88485[(0)] = revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__);

(statearr_88485[(1)] = (1));

return statearr_88485;
});
var revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____1 = (function (state_88471){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88471);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88486){var ex__52189__auto__ = e88486;
var statearr_88487_90058 = state_88471;
(statearr_88487_90058[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88471[(4)]))){
var statearr_88488_90059 = state_88471;
(statearr_88488_90059[(1)] = cljs.core.first((state_88471[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90060 = state_88471;
state_88471 = G__90060;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__ = function(state_88471){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____1.call(this,state_88471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88489 = f__52209__auto__();
(statearr_88489[(6)] = c__52208__auto__);

return statearr_88489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_total_pool_reserves = (function revert$rewards$_LT_total_pool_reserves(lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88514){
var state_val_88515 = (state_88514[(1)]);
if((state_val_88515 === (1))){
var inst_88490 = (state_88514[(7)]);
var inst_88490__$1 = revert.ethereum.make_erc20(lp_address);
var inst_88491 = revert.pools._LT_token0(inst_88490__$1);
var state_88514__$1 = (function (){var statearr_88516 = state_88514;
(statearr_88516[(7)] = inst_88490__$1);

return statearr_88516;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88514__$1,(2),inst_88491);
} else {
if((state_val_88515 === (2))){
var inst_88490 = (state_88514[(7)]);
var inst_88493 = (state_88514[(2)]);
var inst_88494 = revert.pools._LT_token1(inst_88490);
var state_88514__$1 = (function (){var statearr_88517 = state_88514;
(statearr_88517[(8)] = inst_88493);

return statearr_88517;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88514__$1,(3),inst_88494);
} else {
if((state_val_88515 === (3))){
var inst_88493 = (state_88514[(8)]);
var inst_88496 = (state_88514[(2)]);
var inst_88497 = revert.ethereum._LT_token_decimals(inst_88493);
var state_88514__$1 = (function (){var statearr_88518 = state_88514;
(statearr_88518[(9)] = inst_88496);

return statearr_88518;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88514__$1,(4),inst_88497);
} else {
if((state_val_88515 === (4))){
var inst_88496 = (state_88514[(9)]);
var inst_88499 = (state_88514[(2)]);
var inst_88500 = revert.ethereum._LT_token_decimals(inst_88496);
var state_88514__$1 = (function (){var statearr_88519 = state_88514;
(statearr_88519[(10)] = inst_88499);

return statearr_88519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88514__$1,(5),inst_88500);
} else {
if((state_val_88515 === (5))){
var inst_88490 = (state_88514[(7)]);
var inst_88502 = (state_88514[(2)]);
var inst_88503 = revert.pools._LT_get_reserves(inst_88490);
var state_88514__$1 = (function (){var statearr_88520 = state_88514;
(statearr_88520[(11)] = inst_88502);

return statearr_88520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88514__$1,(6),inst_88503);
} else {
if((state_val_88515 === (6))){
var inst_88499 = (state_88514[(10)]);
var inst_88502 = (state_88514[(11)]);
var inst_88505 = (state_88514[(2)]);
var inst_88506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_88507 = cljs.core.first(inst_88505);
var inst_88508 = revert.utils.ebn__GT_bn(inst_88507,inst_88499);
var inst_88509 = cljs.core.second(inst_88505);
var inst_88510 = revert.utils.ebn__GT_bn(inst_88509,inst_88502);
var inst_88511 = [inst_88508,inst_88510];
var inst_88512 = (new cljs.core.PersistentVector(null,2,(5),inst_88506,inst_88511,null));
var state_88514__$1 = state_88514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88514__$1,inst_88512);
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
var revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____0 = (function (){
var statearr_88521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88521[(0)] = revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__);

(statearr_88521[(1)] = (1));

return statearr_88521;
});
var revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____1 = (function (state_88514){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88514);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88522){var ex__52189__auto__ = e88522;
var statearr_88523_90062 = state_88514;
(statearr_88523_90062[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88514[(4)]))){
var statearr_88524_90063 = state_88514;
(statearr_88524_90063[(1)] = cljs.core.first((state_88514[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90064 = state_88514;
state_88514 = G__90064;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__ = function(state_88514){
switch(arguments.length){
case 0:
return revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____1.call(this,state_88514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____0;
revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____1;
return revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88525 = f__52209__auto__();
(statearr_88525[(6)] = c__52208__auto__);

return statearr_88525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards.staked_lps = (function revert$rewards$staked_lps(staked_proportion,staked_balance){
return bignumber.core._STAR_(staked_proportion,staked_balance);
});
revert.rewards.proportion_reserves = (function revert$rewards$proportion_reserves(token_reserve,lp_proportion){
return bignumber.core._STAR_(token_reserve,lp_proportion);
});
revert.rewards.proportion_lps = (function revert$rewards$proportion_lps(lps,total_lps){
return bignumber.core._SLASH_(lps,total_lps);
});
revert.rewards.staked_positions = (function revert$rewards$staked_positions(lp_reserves,total_lps,lp_staked,lp_symbols){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635),lp_staked,new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),revert.rewards.proportion_reserves(cljs.core.first(lp_reserves),revert.rewards.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token0-symbol","token0-symbol",1935160103),cljs.core.first(lp_symbols),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),revert.rewards.proportion_reserves(cljs.core.second(lp_reserves),revert.rewards.proportion_lps(lp_staked,total_lps)),new cljs.core.Keyword(null,"token1-symbol","token1-symbol",99450685),cljs.core.second(lp_symbols)], null);
});
revert.rewards._LT_pool_length = (function revert$rewards$_LT_pool_length(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88541){
var state_val_88542 = (state_88541[(1)]);
if((state_val_88542 === (1))){
var inst_88526 = contract.poolLength();
var inst_88527 = cljs.core.async.interop.p__GT_c(inst_88526);
var state_88541__$1 = state_88541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88541__$1,(2),inst_88527);
} else {
if((state_val_88542 === (2))){
var inst_88529 = (state_88541[(7)]);
var inst_88529__$1 = (state_88541[(2)]);
var inst_88530 = (inst_88529__$1 instanceof cljs.core.ExceptionInfo);
var inst_88531 = cljs.core.ex_data(inst_88529__$1);
var inst_88532 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88531);
var inst_88533 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88532,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88534 = ((inst_88530) && (inst_88533));
var state_88541__$1 = (function (){var statearr_88543 = state_88541;
(statearr_88543[(7)] = inst_88529__$1);

return statearr_88543;
})();
if(cljs.core.truth_(inst_88534)){
var statearr_88544_90065 = state_88541__$1;
(statearr_88544_90065[(1)] = (3));

} else {
var statearr_88545_90066 = state_88541__$1;
(statearr_88545_90066[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88542 === (3))){
var inst_88529 = (state_88541[(7)]);
var inst_88536 = (function(){throw inst_88529})();
var state_88541__$1 = state_88541;
var statearr_88546_90067 = state_88541__$1;
(statearr_88546_90067[(2)] = inst_88536);

(statearr_88546_90067[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88542 === (4))){
var inst_88529 = (state_88541[(7)]);
var state_88541__$1 = state_88541;
var statearr_88547_90068 = state_88541__$1;
(statearr_88547_90068[(2)] = inst_88529);

(statearr_88547_90068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88542 === (5))){
var inst_88539 = (state_88541[(2)]);
var state_88541__$1 = state_88541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88541__$1,inst_88539);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_pool_length_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_pool_length_$_state_machine__52186__auto____0 = (function (){
var statearr_88548 = [null,null,null,null,null,null,null,null];
(statearr_88548[(0)] = revert$rewards$_LT_pool_length_$_state_machine__52186__auto__);

(statearr_88548[(1)] = (1));

return statearr_88548;
});
var revert$rewards$_LT_pool_length_$_state_machine__52186__auto____1 = (function (state_88541){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88541);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88549){var ex__52189__auto__ = e88549;
var statearr_88550_90069 = state_88541;
(statearr_88550_90069[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88541[(4)]))){
var statearr_88551_90070 = state_88541;
(statearr_88551_90070[(1)] = cljs.core.first((state_88541[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90071 = state_88541;
state_88541 = G__90071;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_pool_length_$_state_machine__52186__auto__ = function(state_88541){
switch(arguments.length){
case 0:
return revert$rewards$_LT_pool_length_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_pool_length_$_state_machine__52186__auto____1.call(this,state_88541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_pool_length_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_pool_length_$_state_machine__52186__auto____0;
revert$rewards$_LT_pool_length_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_pool_length_$_state_machine__52186__auto____1;
return revert$rewards$_LT_pool_length_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88552 = f__52209__auto__();
(statearr_88552[(6)] = c__52208__auto__);

return statearr_88552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_pool_info = (function revert$rewards$_LT_pool_info(contract,pid){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88568){
var state_val_88569 = (state_88568[(1)]);
if((state_val_88569 === (1))){
var inst_88553 = contract.poolInfo(pid);
var inst_88554 = cljs.core.async.interop.p__GT_c(inst_88553);
var state_88568__$1 = state_88568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88568__$1,(2),inst_88554);
} else {
if((state_val_88569 === (2))){
var inst_88556 = (state_88568[(7)]);
var inst_88556__$1 = (state_88568[(2)]);
var inst_88557 = (inst_88556__$1 instanceof cljs.core.ExceptionInfo);
var inst_88558 = cljs.core.ex_data(inst_88556__$1);
var inst_88559 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88558);
var inst_88560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88559,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88561 = ((inst_88557) && (inst_88560));
var state_88568__$1 = (function (){var statearr_88570 = state_88568;
(statearr_88570[(7)] = inst_88556__$1);

return statearr_88570;
})();
if(cljs.core.truth_(inst_88561)){
var statearr_88571_90072 = state_88568__$1;
(statearr_88571_90072[(1)] = (3));

} else {
var statearr_88572_90073 = state_88568__$1;
(statearr_88572_90073[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88569 === (3))){
var inst_88556 = (state_88568[(7)]);
var inst_88563 = (function(){throw inst_88556})();
var state_88568__$1 = state_88568;
var statearr_88573_90074 = state_88568__$1;
(statearr_88573_90074[(2)] = inst_88563);

(statearr_88573_90074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88569 === (4))){
var inst_88556 = (state_88568[(7)]);
var state_88568__$1 = state_88568;
var statearr_88574_90075 = state_88568__$1;
(statearr_88574_90075[(2)] = inst_88556);

(statearr_88574_90075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88569 === (5))){
var inst_88566 = (state_88568[(2)]);
var state_88568__$1 = state_88568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88568__$1,inst_88566);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_pool_info_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_pool_info_$_state_machine__52186__auto____0 = (function (){
var statearr_88575 = [null,null,null,null,null,null,null,null];
(statearr_88575[(0)] = revert$rewards$_LT_pool_info_$_state_machine__52186__auto__);

(statearr_88575[(1)] = (1));

return statearr_88575;
});
var revert$rewards$_LT_pool_info_$_state_machine__52186__auto____1 = (function (state_88568){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88568);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88576){var ex__52189__auto__ = e88576;
var statearr_88577_90076 = state_88568;
(statearr_88577_90076[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88568[(4)]))){
var statearr_88578_90077 = state_88568;
(statearr_88578_90077[(1)] = cljs.core.first((state_88568[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90078 = state_88568;
state_88568 = G__90078;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_pool_info_$_state_machine__52186__auto__ = function(state_88568){
switch(arguments.length){
case 0:
return revert$rewards$_LT_pool_info_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_pool_info_$_state_machine__52186__auto____1.call(this,state_88568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_pool_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_pool_info_$_state_machine__52186__auto____0;
revert$rewards$_LT_pool_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_pool_info_$_state_machine__52186__auto____1;
return revert$rewards$_LT_pool_info_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88579 = f__52209__auto__();
(statearr_88579[(6)] = c__52208__auto__);

return statearr_88579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_make_sashimi_pool_index = (function revert$rewards$_LT_make_sashimi_pool_index(staking_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88593){
var state_val_88594 = (state_88593[(1)]);
if((state_val_88594 === (1))){
var inst_88580 = (state_88593[(7)]);
var inst_88580__$1 = revert.ethereum.make_contract(revert.ethereum.sashimi_abi,staking_address);
var inst_88581 = revert.rewards._LT_pool_length(inst_88580__$1);
var state_88593__$1 = (function (){var statearr_88595 = state_88593;
(statearr_88595[(7)] = inst_88580__$1);

return statearr_88595;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88593__$1,(2),inst_88581);
} else {
if((state_val_88594 === (2))){
var inst_88580 = (state_88593[(7)]);
var inst_88583 = (state_88593[(2)]);
var inst_88584 = (function (){var contract = inst_88580;
var many_pools = inst_88583;
return (function (p){
var c__52208__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88605){
var state_val_88606 = (state_88605[(1)]);
if((state_val_88606 === (1))){
var inst_88596 = revert.rewards._LT_pool_info(contract,p);
var state_88605__$1 = state_88605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88605__$1,(2),inst_88596);
} else {
if((state_val_88606 === (2))){
var inst_88598 = (state_88605[(2)]);
var inst_88599 = cljs.core.first(inst_88598);
var inst_88600 = clojure.string.lower_case(inst_88599);
var inst_88601 = [inst_88600];
var inst_88602 = [p];
var inst_88603 = cljs.core.PersistentHashMap.fromArrays(inst_88601,inst_88602);
var state_88605__$1 = state_88605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88605__$1,inst_88603);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0 = (function (){
var statearr_88607 = [null,null,null,null,null,null,null];
(statearr_88607[(0)] = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__);

(statearr_88607[(1)] = (1));

return statearr_88607;
});
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1 = (function (state_88605){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88605);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88608){var ex__52189__auto__ = e88608;
var statearr_88609_90079 = state_88605;
(statearr_88609_90079[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88605[(4)]))){
var statearr_88610_90080 = state_88605;
(statearr_88610_90080[(1)] = cljs.core.first((state_88605[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90081 = state_88605;
state_88605 = G__90081;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = function(state_88605){
switch(arguments.length){
case 0:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1.call(this,state_88605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0;
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1;
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88611 = f__52209__auto__();
(statearr_88611[(6)] = c__52208__auto____$1);

return statearr_88611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto____$1;
});
})();
var inst_88585 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_88583);
var inst_88586 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_88584,inst_88585);
var inst_88587 = cljs.core.PersistentHashMap.EMPTY;
var inst_88588 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_88586);
var inst_88589 = cljs.core.async.reduce(cljs.core.merge,inst_88587,inst_88588);
var state_88593__$1 = state_88593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88593__$1,(3),inst_88589);
} else {
if((state_val_88594 === (3))){
var inst_88591 = (state_88593[(2)]);
var state_88593__$1 = state_88593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88593__$1,inst_88591);
} else {
return null;
}
}
}
});
return (function() {
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0 = (function (){
var statearr_88612 = [null,null,null,null,null,null,null,null];
(statearr_88612[(0)] = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__);

(statearr_88612[(1)] = (1));

return statearr_88612;
});
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1 = (function (state_88593){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88593);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88613){var ex__52189__auto__ = e88613;
var statearr_88614_90082 = state_88593;
(statearr_88614_90082[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88593[(4)]))){
var statearr_88615_90083 = state_88593;
(statearr_88615_90083[(1)] = cljs.core.first((state_88593[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90084 = state_88593;
state_88593 = G__90084;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = function(state_88593){
switch(arguments.length){
case 0:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1.call(this,state_88593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0;
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1;
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88616 = f__52209__auto__();
(statearr_88616[(6)] = c__52208__auto__);

return statearr_88616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards.make_paid_rewards = (function revert$rewards$make_paid_rewards(parsed_transfer){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"qty","qty",155560951),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(parsed_transfer),new cljs.core.Keyword(null,"block-number","block-number",-935510961),new cljs.core.Keyword(null,"block-number","block-number",-935510961).cljs$core$IFn$_invoke$arity$1(parsed_transfer)], null);
});
revert.rewards._LT_staked_lp_positions_pjar = (function revert$rewards$_LT_staked_lp_positions_pjar(lp_address,staking_address,user_address){
try{var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88665){
var state_val_88666 = (state_88665[(1)]);
if((state_val_88666 === (7))){
var inst_88637 = (state_88665[(7)]);
var inst_88637__$1 = (state_88665[(2)]);
var state_88665__$1 = (function (){var statearr_88667 = state_88665;
(statearr_88667[(7)] = inst_88637__$1);

return statearr_88667;
})();
if(cljs.core.truth_(inst_88637__$1)){
var statearr_88668_90085 = state_88665__$1;
(statearr_88668_90085[(1)] = (8));

} else {
var statearr_88669_90086 = state_88665__$1;
(statearr_88669_90086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88666 === (1))){
var inst_88618 = revert.ethereum._LT_user_token_balance(user_address,staking_address);
var state_88665__$1 = state_88665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(2),inst_88618);
} else {
if((state_val_88666 === (4))){
var inst_88623 = (state_88665[(8)]);
var inst_88620 = (state_88665[(9)]);
var inst_88626 = (state_88665[(2)]);
var inst_88627 = bignumber.core._SLASH_(inst_88620,inst_88623);
var inst_88628 = bignumber.core._STAR_(inst_88627,inst_88626);
var inst_88629 = revert.rewards._LT_total_pool_lps(lp_address);
var state_88665__$1 = (function (){var statearr_88670 = state_88665;
(statearr_88670[(10)] = inst_88628);

return statearr_88670;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(5),inst_88629);
} else {
if((state_val_88666 === (15))){
var inst_88650 = (state_88665[(2)]);
var state_88665__$1 = state_88665;
var statearr_88671_90087 = state_88665__$1;
(statearr_88671_90087[(2)] = inst_88650);

(statearr_88671_90087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88666 === (13))){
var inst_88652 = cljs.core.PersistentVector.EMPTY;
var state_88665__$1 = state_88665;
var statearr_88672_90088 = state_88665__$1;
(statearr_88672_90088[(2)] = inst_88652);

(statearr_88672_90088[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88666 === (6))){
var inst_88634 = (state_88665[(2)]);
var inst_88635 = revert.rewards._LT_staking_rewards_token(staking_address);
var state_88665__$1 = (function (){var statearr_88673 = state_88665;
(statearr_88673[(11)] = inst_88634);

return statearr_88673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(7),inst_88635);
} else {
if((state_val_88666 === (3))){
var inst_88623 = (state_88665[(2)]);
var inst_88624 = revert.ethereum._LT_pickle_jar_balance(staking_address);
var state_88665__$1 = (function (){var statearr_88674 = state_88665;
(statearr_88674[(8)] = inst_88623);

return statearr_88674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(4),inst_88624);
} else {
if((state_val_88666 === (12))){
var inst_88637 = (state_88665[(7)]);
var inst_88647 = cljs.core.deref(revert.ethereum.provider);
var inst_88648 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_88647,inst_88637,staking_address,user_address);
var state_88665__$1 = state_88665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(15),inst_88648);
} else {
if((state_val_88666 === (2))){
var inst_88620 = (state_88665[(2)]);
var inst_88621 = revert.ethereum._LT_token_total_supply(staking_address);
var state_88665__$1 = (function (){var statearr_88675 = state_88665;
(statearr_88675[(9)] = inst_88620);

return statearr_88675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(3),inst_88621);
} else {
if((state_val_88666 === (11))){
var inst_88641 = (state_88665[(2)]);
var state_88665__$1 = state_88665;
var statearr_88676_90089 = state_88665__$1;
(statearr_88676_90089[(2)] = inst_88641);

(statearr_88676_90089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88666 === (9))){
var inst_88643 = revert.utils.bn("0.0");
var state_88665__$1 = state_88665;
var statearr_88677_90090 = state_88665__$1;
(statearr_88677_90090[(2)] = inst_88643);

(statearr_88677_90090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88666 === (5))){
var inst_88631 = (state_88665[(2)]);
var inst_88632 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_88665__$1 = (function (){var statearr_88678 = state_88665;
(statearr_88678[(12)] = inst_88631);

return statearr_88678;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(6),inst_88632);
} else {
if((state_val_88666 === (14))){
var inst_88654 = (state_88665[(2)]);
var inst_88655 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_88654);
var inst_88656 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_88665__$1 = (function (){var statearr_88679 = state_88665;
(statearr_88679[(13)] = inst_88655);

return statearr_88679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(16),inst_88656);
} else {
if((state_val_88666 === (16))){
var inst_88634 = (state_88665[(11)]);
var inst_88645 = (state_88665[(14)]);
var inst_88655 = (state_88665[(13)]);
var inst_88628 = (state_88665[(10)]);
var inst_88637 = (state_88665[(7)]);
var inst_88631 = (state_88665[(12)]);
var inst_88658 = (state_88665[(2)]);
var inst_88659 = revert.rewards.staked_positions(inst_88658,inst_88631,inst_88628,inst_88634);
var inst_88660 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_88661 = [inst_88645,inst_88637,inst_88655];
var inst_88662 = cljs.core.PersistentHashMap.fromArrays(inst_88660,inst_88661);
var inst_88663 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_88659,inst_88662);
var state_88665__$1 = state_88665;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88665__$1,inst_88663);
} else {
if((state_val_88666 === (10))){
var inst_88637 = (state_88665[(7)]);
var inst_88645 = (state_88665[(2)]);
var state_88665__$1 = (function (){var statearr_88680 = state_88665;
(statearr_88680[(14)] = inst_88645);

return statearr_88680;
})();
if(cljs.core.truth_(inst_88637)){
var statearr_88681_90091 = state_88665__$1;
(statearr_88681_90091[(1)] = (12));

} else {
var statearr_88682_90092 = state_88665__$1;
(statearr_88682_90092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88666 === (8))){
var inst_88637 = (state_88665[(7)]);
var inst_88639 = revert.rewards._LT_staking_rewards_earned(staking_address,inst_88637,user_address);
var state_88665__$1 = state_88665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88665__$1,(11),inst_88639);
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
var revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____0 = (function (){
var statearr_88683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88683[(0)] = revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__);

(statearr_88683[(1)] = (1));

return statearr_88683;
});
var revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____1 = (function (state_88665){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88665);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88684){var ex__52189__auto__ = e88684;
var statearr_88685_90093 = state_88665;
(statearr_88685_90093[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88665[(4)]))){
var statearr_88686_90094 = state_88665;
(statearr_88686_90094[(1)] = cljs.core.first((state_88665[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90095 = state_88665;
state_88665 = G__90095;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__ = function(state_88665){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____1.call(this,state_88665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88687 = f__52209__auto__();
(statearr_88687[(6)] = c__52208__auto__);

return statearr_88687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}catch (e88617){if((e88617 instanceof Error)){
var err = e88617;
return null;
} else {
throw e88617;

}
}});
revert.rewards.pickle_uni_jars = cljs.core.PersistentHashMap.fromArrays(["0xceff51756c56ceffca006cd410b03ffc46dd3a58","0xa478c2975ab1ea89e8196811f51a7b7ade33eb11","0xd4405f0704621dbe9d4dea60e128e0c3b26bddbd","0x06da0fd433c1a5d7a4faa01111c044910a184553","0x10b47177e92ef9d5c6059055d92ddf6290848991","0x87da823b6fc8eb8575a235a824690fda94674c88","0x088ee5007c98a9677165d78dd2109ae4a3d04d0c","0x3e78f2e7dade07ea685f8612f00477fd97162f1e","0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc","0xc9cb53b48a2f3a9e75982685644c1870f1405ccb","0xbb2b8038a1640196fbe3e38816f3e67cba72d940","0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f","0x066f3a3b7c8fa077c71b9184d862ed0a4d5cf3e0","0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852","0x397ff1542f962076d0bfe58ea045ffa2d347aca0"],["0xde74b6c547bd574c3527316a2ee30cd8f6041525","0xCffA068F1E44D98D3753966eBd58D4CFe3BB5162","0x2350fc7268F3f5a6cC31f26c38f706E41547505d","0xa7a37ae5cb163a3147de83f15e15d8e5f94d6bce","0x5eff6d166d66bacbc1bf52e2c54dd391ae6b1f48","0x3bcd97dca7b1ced292687c97702725f37af01cac","0x3261D9408604CC8607b687980D40135aFA26FfED","0x748712686a78737da0b7643df78fdf2778dc5944","0x53Bf2E62fA20e2b4522f05de3597890Ec1b352C6","0xC66583Dd4E25b3cfc8D881F6DbaD8288C7f5Fd30","0xc80090AA05374d336875907372EE4ee636CBC562","0x55282da27a3a02ffe599f6d11314d239dac89135","0x0faa189afe8ae97de1d2f01e471297678842146d","0x09FC573c502037B149ba87782ACC81cF093EC6ef","0x8c2d16b7f6d3f989eb4878ecf13d695a7d504e43"]);
revert.rewards._LT_staked_lp_positions_pjar_redirect = (function revert$rewards$_LT_staked_lp_positions_pjar_redirect(lp_address,staking_address,user_address){
try{var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88707){
var state_val_88708 = (state_88707[(1)]);
if((state_val_88708 === (1))){
var inst_88689 = revert.ethereum._LT_pickle_jar_balance(staking_address);
var state_88707__$1 = state_88707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88707__$1,(2),inst_88689);
} else {
if((state_val_88708 === (2))){
var inst_88691 = (state_88707[(2)]);
var inst_88692 = revert.utils.bn((0));
var inst_88693 = bignumber.core._EQ_(inst_88691,inst_88692);
var state_88707__$1 = state_88707;
if(cljs.core.truth_(inst_88693)){
var statearr_88709_90096 = state_88707__$1;
(statearr_88709_90096[(1)] = (3));

} else {
var statearr_88710_90097 = state_88707__$1;
(statearr_88710_90097[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88708 === (3))){
var inst_88695 = clojure.string.lower_case(lp_address);
var inst_88696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(revert.rewards.pickle_uni_jars,inst_88695);
var inst_88697 = revert.rewards._LT_staked_lp_positions_pjar(lp_address,inst_88696,user_address);
var state_88707__$1 = state_88707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88707__$1,(6),inst_88697);
} else {
if((state_val_88708 === (4))){
var inst_88701 = revert.rewards._LT_staked_lp_positions_pjar(lp_address,staking_address,user_address);
var state_88707__$1 = state_88707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88707__$1,(7),inst_88701);
} else {
if((state_val_88708 === (5))){
var inst_88705 = (state_88707[(2)]);
var state_88707__$1 = state_88707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88707__$1,inst_88705);
} else {
if((state_val_88708 === (6))){
var inst_88699 = (state_88707[(2)]);
var state_88707__$1 = state_88707;
var statearr_88711_90098 = state_88707__$1;
(statearr_88711_90098[(2)] = inst_88699);

(statearr_88711_90098[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88708 === (7))){
var inst_88703 = (state_88707[(2)]);
var state_88707__$1 = state_88707;
var statearr_88712_90099 = state_88707__$1;
(statearr_88712_90099[(2)] = inst_88703);

(statearr_88712_90099[(1)] = (5));


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
});
return (function() {
var revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____0 = (function (){
var statearr_88713 = [null,null,null,null,null,null,null];
(statearr_88713[(0)] = revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__);

(statearr_88713[(1)] = (1));

return statearr_88713;
});
var revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____1 = (function (state_88707){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88707);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88714){var ex__52189__auto__ = e88714;
var statearr_88715_90100 = state_88707;
(statearr_88715_90100[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88707[(4)]))){
var statearr_88716_90101 = state_88707;
(statearr_88716_90101[(1)] = cljs.core.first((state_88707[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90102 = state_88707;
state_88707 = G__90102;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__ = function(state_88707){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____1.call(this,state_88707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88717 = f__52209__auto__();
(statearr_88717[(6)] = c__52208__auto__);

return statearr_88717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}catch (e88688){if((e88688 instanceof Error)){
var err = e88688;
return null;
} else {
throw e88688;

}
}});
revert.rewards._LT_rewards_paid_sr = (function revert$rewards$_LT_rewards_paid_sr(staking_address,user_address){
var ac = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var claimed_filter = (ac.filters.RewardPaid.cljs$core$IFn$_invoke$arity$1 ? ac.filters.RewardPaid.cljs$core$IFn$_invoke$arity$1(user_address) : ac.filters.RewardPaid.call(null,user_address));
var _ = (claimed_filter.fromBlock = (0));
var ___$1 = (claimed_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88734){
var state_val_88735 = (state_88734[(1)]);
if((state_val_88735 === (1))){
var inst_88718 = cljs.core.deref(revert.ethereum.provider);
var inst_88719 = inst_88718.getLogs(claimed_filter);
var inst_88720 = cljs.core.async.interop.p__GT_c(inst_88719);
var state_88734__$1 = state_88734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88734__$1,(2),inst_88720);
} else {
if((state_val_88735 === (2))){
var inst_88722 = (state_88734[(7)]);
var inst_88722__$1 = (state_88734[(2)]);
var inst_88723 = (inst_88722__$1 instanceof cljs.core.ExceptionInfo);
var inst_88724 = cljs.core.ex_data(inst_88722__$1);
var inst_88725 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88724);
var inst_88726 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88725,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88727 = ((inst_88723) && (inst_88726));
var state_88734__$1 = (function (){var statearr_88736 = state_88734;
(statearr_88736[(7)] = inst_88722__$1);

return statearr_88736;
})();
if(cljs.core.truth_(inst_88727)){
var statearr_88737_90103 = state_88734__$1;
(statearr_88737_90103[(1)] = (3));

} else {
var statearr_88738_90104 = state_88734__$1;
(statearr_88738_90104[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88735 === (3))){
var inst_88722 = (state_88734[(7)]);
var inst_88729 = (function(){throw inst_88722})();
var state_88734__$1 = state_88734;
var statearr_88739_90105 = state_88734__$1;
(statearr_88739_90105[(2)] = inst_88729);

(statearr_88739_90105[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88735 === (4))){
var inst_88722 = (state_88734[(7)]);
var state_88734__$1 = state_88734;
var statearr_88740_90106 = state_88734__$1;
(statearr_88740_90106[(2)] = inst_88722);

(statearr_88740_90106[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88735 === (5))){
var inst_88732 = (state_88734[(2)]);
var state_88734__$1 = state_88734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88734__$1,inst_88732);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____0 = (function (){
var statearr_88741 = [null,null,null,null,null,null,null,null];
(statearr_88741[(0)] = revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__);

(statearr_88741[(1)] = (1));

return statearr_88741;
});
var revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____1 = (function (state_88734){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88734);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88742){var ex__52189__auto__ = e88742;
var statearr_88743_90107 = state_88734;
(statearr_88743_90107[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88734[(4)]))){
var statearr_88744_90108 = state_88734;
(statearr_88744_90108[(1)] = cljs.core.first((state_88734[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90109 = state_88734;
state_88734 = G__90109;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__ = function(state_88734){
switch(arguments.length){
case 0:
return revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____1.call(this,state_88734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____0;
revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____1;
return revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88745 = f__52209__auto__();
(statearr_88745[(6)] = c__52208__auto__);

return statearr_88745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_rewards_claimed_sr = (function revert$rewards$_LT_rewards_claimed_sr(staking_address,user_address){
var ac = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var claimed_filter = (ac.filters.RewardClaimed.cljs$core$IFn$_invoke$arity$1 ? ac.filters.RewardClaimed.cljs$core$IFn$_invoke$arity$1(user_address) : ac.filters.RewardClaimed.call(null,user_address));
var _ = (claimed_filter.fromBlock = (0));
var ___$1 = (claimed_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88762){
var state_val_88763 = (state_88762[(1)]);
if((state_val_88763 === (1))){
var inst_88746 = cljs.core.deref(revert.ethereum.provider);
var inst_88747 = inst_88746.getLogs(claimed_filter);
var inst_88748 = cljs.core.async.interop.p__GT_c(inst_88747);
var state_88762__$1 = state_88762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88762__$1,(2),inst_88748);
} else {
if((state_val_88763 === (2))){
var inst_88750 = (state_88762[(7)]);
var inst_88750__$1 = (state_88762[(2)]);
var inst_88751 = (inst_88750__$1 instanceof cljs.core.ExceptionInfo);
var inst_88752 = cljs.core.ex_data(inst_88750__$1);
var inst_88753 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88752);
var inst_88754 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88753,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88755 = ((inst_88751) && (inst_88754));
var state_88762__$1 = (function (){var statearr_88764 = state_88762;
(statearr_88764[(7)] = inst_88750__$1);

return statearr_88764;
})();
if(cljs.core.truth_(inst_88755)){
var statearr_88765_90110 = state_88762__$1;
(statearr_88765_90110[(1)] = (3));

} else {
var statearr_88766_90111 = state_88762__$1;
(statearr_88766_90111[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (3))){
var inst_88750 = (state_88762[(7)]);
var inst_88757 = (function(){throw inst_88750})();
var state_88762__$1 = state_88762;
var statearr_88767_90112 = state_88762__$1;
(statearr_88767_90112[(2)] = inst_88757);

(statearr_88767_90112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (4))){
var inst_88750 = (state_88762[(7)]);
var state_88762__$1 = state_88762;
var statearr_88768_90113 = state_88762__$1;
(statearr_88768_90113[(2)] = inst_88750);

(statearr_88768_90113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88763 === (5))){
var inst_88760 = (state_88762[(2)]);
var state_88762__$1 = state_88762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88762__$1,inst_88760);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____0 = (function (){
var statearr_88769 = [null,null,null,null,null,null,null,null];
(statearr_88769[(0)] = revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__);

(statearr_88769[(1)] = (1));

return statearr_88769;
});
var revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____1 = (function (state_88762){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88762);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88770){var ex__52189__auto__ = e88770;
var statearr_88771_90114 = state_88762;
(statearr_88771_90114[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88762[(4)]))){
var statearr_88772_90115 = state_88762;
(statearr_88772_90115[(1)] = cljs.core.first((state_88762[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90116 = state_88762;
state_88762 = G__90116;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__ = function(state_88762){
switch(arguments.length){
case 0:
return revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____1.call(this,state_88762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____0;
revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____1;
return revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88773 = f__52209__auto__();
(statearr_88773[(6)] = c__52208__auto__);

return statearr_88773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions_sr = (function revert$rewards$_LT_staked_lp_positions_sr(lp_address,staking_address,user_address){
try{var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88833){
var state_val_88834 = (state_88833[(1)]);
if((state_val_88834 === (7))){
var inst_88794 = revert.utils.bn("0.0");
var state_88833__$1 = state_88833;
var statearr_88835_90117 = state_88833__$1;
(statearr_88835_90117[(2)] = inst_88794);

(statearr_88835_90117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (1))){
var inst_88777 = revert.rewards._LT_sr_staked_lps(staking_address,user_address);
var state_88833__$1 = state_88833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(2),inst_88777);
} else {
if((state_val_88834 === (4))){
var inst_88785 = (state_88833[(2)]);
var inst_88786 = revert.rewards._LT_staking_rewards_token(staking_address);
var state_88833__$1 = (function (){var statearr_88836 = state_88833;
(statearr_88836[(7)] = inst_88785);

return statearr_88836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(5),inst_88786);
} else {
if((state_val_88834 === (15))){
var inst_88788 = (state_88833[(8)]);
var inst_88813 = cljs.core.deref(revert.ethereum.provider);
var inst_88814 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_88813,inst_88788,staking_address,user_address);
var state_88833__$1 = state_88833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(18),inst_88814);
} else {
if((state_val_88834 === (13))){
var inst_88808 = (state_88833[(9)]);
var inst_88799 = (state_88833[(10)]);
var inst_88788 = (state_88833[(8)]);
var inst_88782 = (state_88833[(11)]);
var inst_88796 = (state_88833[(12)]);
var inst_88779 = (state_88833[(13)]);
var inst_88785 = (state_88833[(7)]);
var inst_88808__$1 = (state_88833[(2)]);
var inst_88809 = (function (){var my_unis_staked = inst_88779;
var total_unis = inst_88782;
var lp_symbols = inst_88785;
var rewards_token = inst_88788;
var rewards_earned = inst_88796;
var rewards_paid = inst_88799;
var filtered_claims = inst_88808__$1;
return (function (p1__88774_SHARP_){
return p1__88774_SHARP_.transactionHash;
});
})();
var inst_88810 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_88809,inst_88808__$1);
var inst_88811 = cljs.core.set(inst_88810);
var state_88833__$1 = (function (){var statearr_88837 = state_88833;
(statearr_88837[(9)] = inst_88808__$1);

(statearr_88837[(14)] = inst_88811);

return statearr_88837;
})();
if(cljs.core.truth_(inst_88788)){
var statearr_88838_90118 = state_88833__$1;
(statearr_88838_90118[(1)] = (15));

} else {
var statearr_88839_90119 = state_88833__$1;
(statearr_88839_90119[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (6))){
var inst_88788 = (state_88833[(8)]);
var inst_88790 = revert.rewards._LT_staking_rewards_earned(staking_address,inst_88788,user_address);
var state_88833__$1 = state_88833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(9),inst_88790);
} else {
if((state_val_88834 === (17))){
var inst_88808 = (state_88833[(9)]);
var inst_88799 = (state_88833[(10)]);
var inst_88788 = (state_88833[(8)]);
var inst_88782 = (state_88833[(11)]);
var inst_88796 = (state_88833[(12)]);
var inst_88779 = (state_88833[(13)]);
var inst_88785 = (state_88833[(7)]);
var inst_88811 = (state_88833[(14)]);
var inst_88820 = (state_88833[(2)]);
var inst_88821 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_88820);
var inst_88822 = (function (){var lp_symbols = inst_88785;
var rewards_token = inst_88788;
var filtered_claims = inst_88808;
var paid_rewards = inst_88821;
var claim_hashes = inst_88811;
var my_unis_staked = inst_88779;
var reward_transfers = inst_88820;
var rewards_paid = inst_88799;
var total_unis = inst_88782;
var rewards_earned = inst_88796;
return (function (p1__88775_SHARP_){
return cljs.core.contains_QMARK_(claim_hashes,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__88775_SHARP_));
});
})();
var inst_88823 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_88822,inst_88821);
var inst_88824 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_88833__$1 = (function (){var statearr_88840 = state_88833;
(statearr_88840[(15)] = inst_88823);

return statearr_88840;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(19),inst_88824);
} else {
if((state_val_88834 === (3))){
var inst_88782 = (state_88833[(2)]);
var inst_88783 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_88833__$1 = (function (){var statearr_88841 = state_88833;
(statearr_88841[(11)] = inst_88782);

return statearr_88841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(4),inst_88783);
} else {
if((state_val_88834 === (12))){
var inst_88804 = revert.rewards._LT_rewards_claimed_sr(staking_address,user_address);
var state_88833__$1 = state_88833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(14),inst_88804);
} else {
if((state_val_88834 === (2))){
var inst_88779 = (state_88833[(2)]);
var inst_88780 = revert.rewards._LT_total_pool_lps(lp_address);
var state_88833__$1 = (function (){var statearr_88842 = state_88833;
(statearr_88842[(13)] = inst_88779);

return statearr_88842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(3),inst_88780);
} else {
if((state_val_88834 === (19))){
var inst_88823 = (state_88833[(15)]);
var inst_88788 = (state_88833[(8)]);
var inst_88782 = (state_88833[(11)]);
var inst_88796 = (state_88833[(12)]);
var inst_88779 = (state_88833[(13)]);
var inst_88785 = (state_88833[(7)]);
var inst_88826 = (state_88833[(2)]);
var inst_88827 = revert.rewards.staked_positions(inst_88826,inst_88782,inst_88779,inst_88785);
var inst_88828 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_88829 = [inst_88796,inst_88788,inst_88823];
var inst_88830 = cljs.core.PersistentHashMap.fromArrays(inst_88828,inst_88829);
var inst_88831 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_88827,inst_88830);
var state_88833__$1 = state_88833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88833__$1,inst_88831);
} else {
if((state_val_88834 === (11))){
var inst_88799 = (state_88833[(10)]);
var state_88833__$1 = state_88833;
var statearr_88843_90120 = state_88833__$1;
(statearr_88843_90120[(2)] = inst_88799);

(statearr_88843_90120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (9))){
var inst_88792 = (state_88833[(2)]);
var state_88833__$1 = state_88833;
var statearr_88844_90121 = state_88833__$1;
(statearr_88844_90121[(2)] = inst_88792);

(statearr_88844_90121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (5))){
var inst_88788 = (state_88833[(8)]);
var inst_88788__$1 = (state_88833[(2)]);
var state_88833__$1 = (function (){var statearr_88845 = state_88833;
(statearr_88845[(8)] = inst_88788__$1);

return statearr_88845;
})();
if(cljs.core.truth_(inst_88788__$1)){
var statearr_88846_90122 = state_88833__$1;
(statearr_88846_90122[(1)] = (6));

} else {
var statearr_88847_90123 = state_88833__$1;
(statearr_88847_90123[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (14))){
var inst_88806 = (state_88833[(2)]);
var state_88833__$1 = state_88833;
var statearr_88848_90124 = state_88833__$1;
(statearr_88848_90124[(2)] = inst_88806);

(statearr_88848_90124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (16))){
var inst_88818 = cljs.core.PersistentVector.EMPTY;
var state_88833__$1 = state_88833;
var statearr_88849_90125 = state_88833__$1;
(statearr_88849_90125[(2)] = inst_88818);

(statearr_88849_90125[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (10))){
var inst_88799 = (state_88833[(10)]);
var inst_88799__$1 = (state_88833[(2)]);
var inst_88800 = cljs.core.count(inst_88799__$1);
var inst_88801 = (inst_88800 > (0));
var state_88833__$1 = (function (){var statearr_88850 = state_88833;
(statearr_88850[(10)] = inst_88799__$1);

return statearr_88850;
})();
if(cljs.core.truth_(inst_88801)){
var statearr_88851_90126 = state_88833__$1;
(statearr_88851_90126[(1)] = (11));

} else {
var statearr_88852_90127 = state_88833__$1;
(statearr_88852_90127[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (18))){
var inst_88816 = (state_88833[(2)]);
var state_88833__$1 = state_88833;
var statearr_88853_90128 = state_88833__$1;
(statearr_88853_90128[(2)] = inst_88816);

(statearr_88853_90128[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88834 === (8))){
var inst_88796 = (state_88833[(2)]);
var inst_88797 = revert.rewards._LT_rewards_paid_sr(staking_address,user_address);
var state_88833__$1 = (function (){var statearr_88854 = state_88833;
(statearr_88854[(12)] = inst_88796);

return statearr_88854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88833__$1,(10),inst_88797);
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
});
return (function() {
var revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____0 = (function (){
var statearr_88855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88855[(0)] = revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__);

(statearr_88855[(1)] = (1));

return statearr_88855;
});
var revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____1 = (function (state_88833){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88833);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88856){var ex__52189__auto__ = e88856;
var statearr_88857_90129 = state_88833;
(statearr_88857_90129[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88833[(4)]))){
var statearr_88858_90130 = state_88833;
(statearr_88858_90130[(1)] = cljs.core.first((state_88833[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90131 = state_88833;
state_88833 = G__90131;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__ = function(state_88833){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____1.call(this,state_88833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88859 = f__52209__auto__();
(statearr_88859[(6)] = c__52208__auto__);

return statearr_88859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}catch (e88776){if((e88776 instanceof Error)){
var err = e88776;
return null;
} else {
throw e88776;

}
}});
revert.rewards._LT_lp_balance = (function revert$rewards$_LT_lp_balance(contract,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88875){
var state_val_88876 = (state_88875[(1)]);
if((state_val_88876 === (1))){
var inst_88860 = contract.lpBalance(user_address);
var inst_88861 = cljs.core.async.interop.p__GT_c(inst_88860);
var state_88875__$1 = state_88875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88875__$1,(2),inst_88861);
} else {
if((state_val_88876 === (2))){
var inst_88863 = (state_88875[(7)]);
var inst_88863__$1 = (state_88875[(2)]);
var inst_88864 = (inst_88863__$1 instanceof cljs.core.ExceptionInfo);
var inst_88865 = cljs.core.ex_data(inst_88863__$1);
var inst_88866 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88865);
var inst_88867 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88866,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88868 = ((inst_88864) && (inst_88867));
var state_88875__$1 = (function (){var statearr_88877 = state_88875;
(statearr_88877[(7)] = inst_88863__$1);

return statearr_88877;
})();
if(cljs.core.truth_(inst_88868)){
var statearr_88878_90132 = state_88875__$1;
(statearr_88878_90132[(1)] = (3));

} else {
var statearr_88879_90133 = state_88875__$1;
(statearr_88879_90133[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88876 === (3))){
var inst_88863 = (state_88875[(7)]);
var inst_88870 = (function(){throw inst_88863})();
var state_88875__$1 = state_88875;
var statearr_88880_90134 = state_88875__$1;
(statearr_88880_90134[(2)] = inst_88870);

(statearr_88880_90134[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88876 === (4))){
var inst_88863 = (state_88875[(7)]);
var state_88875__$1 = state_88875;
var statearr_88881_90135 = state_88875__$1;
(statearr_88881_90135[(2)] = inst_88863);

(statearr_88881_90135[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88876 === (5))){
var inst_88873 = (state_88875[(2)]);
var state_88875__$1 = state_88875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88875__$1,inst_88873);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____0 = (function (){
var statearr_88882 = [null,null,null,null,null,null,null,null];
(statearr_88882[(0)] = revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__);

(statearr_88882[(1)] = (1));

return statearr_88882;
});
var revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____1 = (function (state_88875){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88875);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88883){var ex__52189__auto__ = e88883;
var statearr_88884_90136 = state_88875;
(statearr_88884_90136[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88875[(4)]))){
var statearr_88885_90137 = state_88875;
(statearr_88885_90137[(1)] = cljs.core.first((state_88875[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90138 = state_88875;
state_88875 = G__90138;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__ = function(state_88875){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____1.call(this,state_88875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88886 = f__52209__auto__();
(statearr_88886[(6)] = c__52208__auto__);

return statearr_88886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_lp = (function revert$rewards$_LT_lp(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88902){
var state_val_88903 = (state_88902[(1)]);
if((state_val_88903 === (1))){
var inst_88887 = contract.lp();
var inst_88888 = cljs.core.async.interop.p__GT_c(inst_88887);
var state_88902__$1 = state_88902;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88902__$1,(2),inst_88888);
} else {
if((state_val_88903 === (2))){
var inst_88890 = (state_88902[(7)]);
var inst_88890__$1 = (state_88902[(2)]);
var inst_88891 = (inst_88890__$1 instanceof cljs.core.ExceptionInfo);
var inst_88892 = cljs.core.ex_data(inst_88890__$1);
var inst_88893 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88892);
var inst_88894 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88893,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88895 = ((inst_88891) && (inst_88894));
var state_88902__$1 = (function (){var statearr_88904 = state_88902;
(statearr_88904[(7)] = inst_88890__$1);

return statearr_88904;
})();
if(cljs.core.truth_(inst_88895)){
var statearr_88905_90139 = state_88902__$1;
(statearr_88905_90139[(1)] = (3));

} else {
var statearr_88906_90140 = state_88902__$1;
(statearr_88906_90140[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88903 === (3))){
var inst_88890 = (state_88902[(7)]);
var inst_88897 = (function(){throw inst_88890})();
var state_88902__$1 = state_88902;
var statearr_88907_90141 = state_88902__$1;
(statearr_88907_90141[(2)] = inst_88897);

(statearr_88907_90141[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88903 === (4))){
var inst_88890 = (state_88902[(7)]);
var state_88902__$1 = state_88902;
var statearr_88908_90142 = state_88902__$1;
(statearr_88908_90142[(2)] = inst_88890);

(statearr_88908_90142[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88903 === (5))){
var inst_88900 = (state_88902[(2)]);
var state_88902__$1 = state_88902;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88902__$1,inst_88900);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_lp_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_lp_$_state_machine__52186__auto____0 = (function (){
var statearr_88909 = [null,null,null,null,null,null,null,null];
(statearr_88909[(0)] = revert$rewards$_LT_lp_$_state_machine__52186__auto__);

(statearr_88909[(1)] = (1));

return statearr_88909;
});
var revert$rewards$_LT_lp_$_state_machine__52186__auto____1 = (function (state_88902){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88902);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88910){var ex__52189__auto__ = e88910;
var statearr_88911_90143 = state_88902;
(statearr_88911_90143[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88902[(4)]))){
var statearr_88912_90144 = state_88902;
(statearr_88912_90144[(1)] = cljs.core.first((state_88902[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90145 = state_88902;
state_88902 = G__90145;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_$_state_machine__52186__auto__ = function(state_88902){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_$_state_machine__52186__auto____1.call(this,state_88902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88913 = f__52209__auto__();
(statearr_88913[(6)] = c__52208__auto__);

return statearr_88913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions_lpbar = (function revert$rewards$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_88945){
var state_val_88946 = (state_88945[(1)]);
if((state_val_88946 === (7))){
var inst_88920 = (state_88945[(7)]);
var inst_88926 = (state_88945[(8)]);
var inst_88917 = (state_88945[(9)]);
var inst_88923 = (state_88945[(10)]);
var inst_88934 = revert.rewards.staked_positions(inst_88926,inst_88920,inst_88917,inst_88923);
var state_88945__$1 = state_88945;
var statearr_88947_90146 = state_88945__$1;
(statearr_88947_90146[(2)] = inst_88934);

(statearr_88947_90146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88946 === (1))){
var inst_88914 = (state_88945[(11)]);
var inst_88914__$1 = revert.ethereum.make_contract(revert.ethereum.lpbar_abi,staking_address);
var inst_88915 = revert.rewards._LT_lp_balance(inst_88914__$1,user_address);
var state_88945__$1 = (function (){var statearr_88948 = state_88945;
(statearr_88948[(11)] = inst_88914__$1);

return statearr_88948;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88945__$1,(2),inst_88915);
} else {
if((state_val_88946 === (4))){
var inst_88923 = (state_88945[(2)]);
var inst_88924 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_88945__$1 = (function (){var statearr_88949 = state_88945;
(statearr_88949[(10)] = inst_88923);

return statearr_88949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88945__$1,(5),inst_88924);
} else {
if((state_val_88946 === (6))){
var inst_88929 = (state_88945[(2)]);
var inst_88930 = clojure.string.lower_case(inst_88929);
var inst_88931 = clojure.string.lower_case(lp_address);
var inst_88932 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88930,inst_88931);
var state_88945__$1 = state_88945;
if(inst_88932){
var statearr_88950_90147 = state_88945__$1;
(statearr_88950_90147[(1)] = (7));

} else {
var statearr_88951_90148 = state_88945__$1;
(statearr_88951_90148[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_88946 === (3))){
var inst_88920 = (state_88945[(2)]);
var inst_88921 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_88945__$1 = (function (){var statearr_88952 = state_88945;
(statearr_88952[(7)] = inst_88920);

return statearr_88952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88945__$1,(4),inst_88921);
} else {
if((state_val_88946 === (2))){
var inst_88917 = (state_88945[(2)]);
var inst_88918 = revert.rewards._LT_total_pool_lps(lp_address);
var state_88945__$1 = (function (){var statearr_88953 = state_88945;
(statearr_88953[(9)] = inst_88917);

return statearr_88953;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88945__$1,(3),inst_88918);
} else {
if((state_val_88946 === (9))){
var inst_88943 = (state_88945[(2)]);
var state_88945__$1 = state_88945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_88945__$1,inst_88943);
} else {
if((state_val_88946 === (5))){
var inst_88914 = (state_88945[(11)]);
var inst_88926 = (state_88945[(2)]);
var inst_88927 = revert.rewards._LT_lp(inst_88914);
var state_88945__$1 = (function (){var statearr_88954 = state_88945;
(statearr_88954[(8)] = inst_88926);

return statearr_88954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_88945__$1,(6),inst_88927);
} else {
if((state_val_88946 === (8))){
var inst_88936 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635)];
var inst_88937 = revert.utils.bn((0));
var inst_88938 = revert.utils.bn((0));
var inst_88939 = revert.utils.bn((0));
var inst_88940 = [inst_88937,inst_88938,inst_88939];
var inst_88941 = cljs.core.PersistentHashMap.fromArrays(inst_88936,inst_88940);
var state_88945__$1 = state_88945;
var statearr_88955_90149 = state_88945__$1;
(statearr_88955_90149[(2)] = inst_88941);

(statearr_88955_90149[(1)] = (9));


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
var revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____0 = (function (){
var statearr_88956 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_88956[(0)] = revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__);

(statearr_88956[(1)] = (1));

return statearr_88956;
});
var revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____1 = (function (state_88945){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_88945);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e88957){var ex__52189__auto__ = e88957;
var statearr_88958_90150 = state_88945;
(statearr_88958_90150[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_88945[(4)]))){
var statearr_88959_90151 = state_88945;
(statearr_88959_90151[(1)] = cljs.core.first((state_88945[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90152 = state_88945;
state_88945 = G__90152;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__ = function(state_88945){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____1.call(this,state_88945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_88960 = f__52209__auto__();
(statearr_88960[(6)] = c__52208__auto__);

return statearr_88960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions_sashimi_plate = (function revert$rewards$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89035){
var state_val_89036 = (state_89035[(1)]);
if((state_val_89036 === (7))){
var inst_88992 = (state_89035[(7)]);
var inst_88992__$1 = (state_89035[(2)]);
var inst_88993 = (inst_88992__$1 instanceof cljs.core.ExceptionInfo);
var inst_88994 = cljs.core.ex_data(inst_88992__$1);
var inst_88995 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88994);
var inst_88996 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88995,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88997 = ((inst_88993) && (inst_88996));
var state_89035__$1 = (function (){var statearr_89037 = state_89035;
(statearr_89037[(7)] = inst_88992__$1);

return statearr_89037;
})();
if(cljs.core.truth_(inst_88997)){
var statearr_89038_90153 = state_89035__$1;
(statearr_89038_90153[(1)] = (8));

} else {
var statearr_89039_90154 = state_89035__$1;
(statearr_89039_90154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (1))){
var inst_88961 = revert.ethereum.make_contract(revert.ethereum.erc20_abi,staking_address);
var inst_88962 = cljs.core.deref(revert.ethereum.provider);
var inst_88963 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(inst_88962,staking_address,user_address);
var state_89035__$1 = (function (){var statearr_89040 = state_89035;
(statearr_89040[(8)] = inst_88961);

return statearr_89040;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(2),inst_88963);
} else {
if((state_val_89036 === (4))){
var inst_88972 = (state_89035[(9)]);
var inst_88979 = (function(){throw inst_88972})();
var state_89035__$1 = state_89035;
var statearr_89041_90155 = state_89035__$1;
(statearr_89041_90155[(2)] = inst_88979);

(statearr_89041_90155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (15))){
var inst_89007 = (state_89035[(10)]);
var inst_89019 = (state_89035[(2)]);
var inst_89020 = clojure.string.lower_case(inst_89007);
var inst_89021 = clojure.string.lower_case(lp_address);
var inst_89022 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89020,inst_89021);
var state_89035__$1 = (function (){var statearr_89042 = state_89035;
(statearr_89042[(11)] = inst_89019);

return statearr_89042;
})();
if(inst_89022){
var statearr_89043_90156 = state_89035__$1;
(statearr_89043_90156[(1)] = (16));

} else {
var statearr_89044_90157 = state_89035__$1;
(statearr_89044_90157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (13))){
var inst_89013 = (state_89035[(2)]);
var inst_89014 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_89035__$1 = (function (){var statearr_89045 = state_89035;
(statearr_89045[(12)] = inst_89013);

return statearr_89045;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(14),inst_89014);
} else {
if((state_val_89036 === (6))){
var inst_88985 = (state_89035[(13)]);
var inst_88988 = (state_89035[(14)]);
var inst_88965 = (state_89035[(15)]);
var inst_88982 = (state_89035[(2)]);
var inst_88983 = revert.ethereum.sashimi_iface.parseTransaction(inst_88982);
var inst_88984 = inst_88983.args;
var inst_88985__$1 = inst_88984.pid;
var inst_88986 = cljs.core.first(inst_88965);
var inst_88987 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_88986);
var inst_88988__$1 = revert.ethereum.make_contract(revert.ethereum.sashimi_abi,inst_88987);
var inst_88989 = inst_88988__$1.userInfo(inst_88985__$1,user_address);
var inst_88990 = cljs.core.async.interop.p__GT_c(inst_88989);
var state_89035__$1 = (function (){var statearr_89046 = state_89035;
(statearr_89046[(13)] = inst_88985__$1);

(statearr_89046[(14)] = inst_88988__$1);

return statearr_89046;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(7),inst_88990);
} else {
if((state_val_89036 === (17))){
var inst_89026 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635)];
var inst_89027 = revert.utils.bn((0));
var inst_89028 = revert.utils.bn((0));
var inst_89029 = revert.utils.bn((0));
var inst_89030 = [inst_89027,inst_89028,inst_89029];
var inst_89031 = cljs.core.PersistentHashMap.fromArrays(inst_89026,inst_89030);
var state_89035__$1 = state_89035;
var statearr_89047_90158 = state_89035__$1;
(statearr_89047_90158[(2)] = inst_89031);

(statearr_89047_90158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (3))){
var inst_88972 = (state_89035[(9)]);
var inst_88972__$1 = (state_89035[(2)]);
var inst_88973 = (inst_88972__$1 instanceof cljs.core.ExceptionInfo);
var inst_88974 = cljs.core.ex_data(inst_88972__$1);
var inst_88975 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_88974);
var inst_88976 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_88975,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_88977 = ((inst_88973) && (inst_88976));
var state_89035__$1 = (function (){var statearr_89048 = state_89035;
(statearr_89048[(9)] = inst_88972__$1);

return statearr_89048;
})();
if(cljs.core.truth_(inst_88977)){
var statearr_89049_90159 = state_89035__$1;
(statearr_89049_90159[(1)] = (4));

} else {
var statearr_89050_90160 = state_89035__$1;
(statearr_89050_90160[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (12))){
var inst_89010 = (state_89035[(2)]);
var inst_89011 = revert.rewards._LT_total_pool_lps(lp_address);
var state_89035__$1 = (function (){var statearr_89051 = state_89035;
(statearr_89051[(16)] = inst_89010);

return statearr_89051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(13),inst_89011);
} else {
if((state_val_89036 === (2))){
var inst_88965 = (state_89035[(15)]);
var inst_88965__$1 = (state_89035[(2)]);
var inst_88966 = cljs.core.deref(revert.ethereum.provider);
var inst_88967 = cljs.core.first(inst_88965__$1);
var inst_88968 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_88967);
var inst_88969 = inst_88966.getTransaction(inst_88968);
var inst_88970 = cljs.core.async.interop.p__GT_c(inst_88969);
var state_89035__$1 = (function (){var statearr_89052 = state_89035;
(statearr_89052[(15)] = inst_88965__$1);

return statearr_89052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(3),inst_88970);
} else {
if((state_val_89036 === (11))){
var inst_89006 = (state_89035[(2)]);
var inst_89007 = cljs.core.first(inst_89006);
var inst_89008 = revert.rewards._LT_staking_pool_lps(lp_address,staking_address);
var state_89035__$1 = (function (){var statearr_89053 = state_89035;
(statearr_89053[(10)] = inst_89007);

return statearr_89053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(12),inst_89008);
} else {
if((state_val_89036 === (9))){
var inst_88992 = (state_89035[(7)]);
var state_89035__$1 = state_89035;
var statearr_89054_90161 = state_89035__$1;
(statearr_89054_90161[(2)] = inst_88992);

(statearr_89054_90161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (5))){
var inst_88972 = (state_89035[(9)]);
var state_89035__$1 = state_89035;
var statearr_89055_90162 = state_89035__$1;
(statearr_89055_90162[(2)] = inst_88972);

(statearr_89055_90162[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (14))){
var inst_89016 = (state_89035[(2)]);
var inst_89017 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_89035__$1 = (function (){var statearr_89056 = state_89035;
(statearr_89056[(17)] = inst_89016);

return statearr_89056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(15),inst_89017);
} else {
if((state_val_89036 === (16))){
var inst_89016 = (state_89035[(17)]);
var inst_89003 = (state_89035[(18)]);
var inst_89019 = (state_89035[(11)]);
var inst_89013 = (state_89035[(12)]);
var inst_89024 = revert.rewards.staked_positions(inst_89019,inst_89013,inst_89003,inst_89016);
var state_89035__$1 = state_89035;
var statearr_89057_90163 = state_89035__$1;
(statearr_89057_90163[(2)] = inst_89024);

(statearr_89057_90163[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89036 === (10))){
var inst_88985 = (state_89035[(13)]);
var inst_88988 = (state_89035[(14)]);
var inst_89002 = (state_89035[(2)]);
var inst_89003 = cljs.core.first(inst_89002);
var inst_89004 = revert.rewards._LT_pool_info(inst_88988,inst_88985);
var state_89035__$1 = (function (){var statearr_89058 = state_89035;
(statearr_89058[(18)] = inst_89003);

return statearr_89058;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89035__$1,(11),inst_89004);
} else {
if((state_val_89036 === (18))){
var inst_89033 = (state_89035[(2)]);
var state_89035__$1 = state_89035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89035__$1,inst_89033);
} else {
if((state_val_89036 === (8))){
var inst_88992 = (state_89035[(7)]);
var inst_88999 = (function(){throw inst_88992})();
var state_89035__$1 = state_89035;
var statearr_89059_90164 = state_89035__$1;
(statearr_89059_90164[(2)] = inst_88999);

(statearr_89059_90164[(1)] = (10));


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
});
return (function() {
var revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____0 = (function (){
var statearr_89060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89060[(0)] = revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__);

(statearr_89060[(1)] = (1));

return statearr_89060;
});
var revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____1 = (function (state_89035){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89035);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89061){var ex__52189__auto__ = e89061;
var statearr_89062_90165 = state_89035;
(statearr_89062_90165[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89035[(4)]))){
var statearr_89063_90166 = state_89035;
(statearr_89063_90166[(1)] = cljs.core.first((state_89035[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90167 = state_89035;
state_89035 = G__90167;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__ = function(state_89035){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____1.call(this,state_89035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89064 = f__52209__auto__();
(statearr_89064[(6)] = c__52208__auto__);

return statearr_89064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards.deposit_pid = (function revert$rewards$deposit_pid(contract){
return contract.pid;
});
revert.rewards._LT_staked_lp_positions_by_event = (function revert$rewards$_LT_staked_lp_positions_by_event(lp_destination,user_address){
var staking_address = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var lp_address = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var tx_hash = new cljs.core.Keyword(null,"txhash","txhash",149174990).cljs$core$IFn$_invoke$arity$1(lp_destination);
var sc = revert.ethereum.make_contract(revert.ethereum.event_detector_abi,staking_address);
var sc_uni = revert.ethereum.make_contract(revert.ethereum.uni_detector_abi,staking_address);
var cheff_contract = revert.ethereum.make_contract(revert.ethereum.sashimi_abi,staking_address);
var deposit_filter = (sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Deposit.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Deposit.call(null,user_address));
var _ = (deposit_filter.fromBlock = (0));
var ___$1 = (deposit_filter.toBlock = "latest");
var staked_filter = (sc.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc.filters.Staked.call(null,user_address));
var ___$2 = (staked_filter.fromBlock = (0));
var ___$3 = (staked_filter.toBlock = "latest");
var staked_filter2 = (sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1 ? sc_uni.filters.Staked.cljs$core$IFn$_invoke$arity$1(user_address) : sc_uni.filters.Staked.call(null,user_address));
var ___$4 = (staked_filter2.fromBlock = (0));
var ___$5 = (staked_filter2.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89273){
var state_val_89274 = (state_89273[(1)]);
if((state_val_89274 === (7))){
var inst_89094 = (state_89273[(7)]);
var inst_89101 = (function(){throw inst_89094})();
var state_89273__$1 = state_89273;
var statearr_89275_90168 = state_89273__$1;
(statearr_89275_90168[(2)] = inst_89101);

(statearr_89275_90168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (20))){
var inst_89269 = (state_89273[(2)]);
var state_89273__$1 = state_89273;
var statearr_89276_90169 = state_89273__$1;
(statearr_89276_90169[(2)] = inst_89269);

(statearr_89276_90169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (27))){
var inst_89163 = (state_89273[(8)]);
var inst_89170 = (function(){throw inst_89163})();
var state_89273__$1 = state_89273;
var statearr_89277_90170 = state_89273__$1;
(statearr_89277_90170[(2)] = inst_89170);

(statearr_89277_90170[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (1))){
var inst_89071 = (function (){return (function (p1__89065_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__89065_SHARP_.transactionHash);
});
})();
var inst_89072 = cljs.core.deref(revert.ethereum.provider);
var inst_89073 = inst_89072.getLogs(staked_filter);
var inst_89074 = cljs.core.async.interop.p__GT_c(inst_89073);
var state_89273__$1 = (function (){var statearr_89278 = state_89273;
(statearr_89278[(9)] = inst_89071);

return statearr_89278;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(2),inst_89074);
} else {
if((state_val_89274 === (24))){
var inst_89147 = (state_89273[(10)]);
var state_89273__$1 = state_89273;
var statearr_89279_90171 = state_89273__$1;
(statearr_89279_90171[(2)] = inst_89147);

(statearr_89279_90171[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (39))){
var inst_89197 = (state_89273[(11)]);
var inst_89204 = (function(){throw inst_89197})();
var state_89273__$1 = state_89273;
var statearr_89280_90172 = state_89273__$1;
(statearr_89280_90172[(2)] = inst_89204);

(statearr_89280_90172[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (46))){
var inst_89229 = (state_89273[(12)]);
var inst_89235 = cljs.core.first(inst_89229);
var state_89273__$1 = state_89273;
var statearr_89281_90173 = state_89273__$1;
(statearr_89281_90173[(2)] = inst_89235);

(statearr_89281_90173[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (4))){
var inst_89076 = (state_89273[(13)]);
var state_89273__$1 = state_89273;
var statearr_89282_90174 = state_89273__$1;
(statearr_89282_90174[(2)] = inst_89076);

(statearr_89282_90174[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (15))){
var inst_89121 = (state_89273[(14)]);
var inst_89128 = (function(){throw inst_89121})();
var state_89273__$1 = state_89273;
var statearr_89283_90175 = state_89273__$1;
(statearr_89283_90175[(2)] = inst_89128);

(statearr_89283_90175[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (48))){
var inst_89223 = (state_89273[(15)]);
var inst_89227 = (state_89273[(16)]);
var inst_89177 = (state_89273[(17)]);
var inst_89186 = (state_89273[(18)]);
var inst_89229 = (state_89273[(12)]);
var inst_89237 = (state_89273[(19)]);
var inst_89174 = (state_89273[(20)]);
var inst_89219 = (state_89273[(21)]);
var inst_89183 = (state_89273[(22)]);
var inst_89173 = (state_89273[(23)]);
var inst_89225 = (state_89273[(24)]);
var inst_89159 = (state_89273[(25)]);
var inst_89140 = (state_89273[(26)]);
var inst_89106 = (state_89273[(27)]);
var inst_89211 = (state_89273[(28)]);
var inst_89215 = (state_89273[(29)]);
var inst_89143 = (state_89273[(30)]);
var inst_89088 = (state_89273[(31)]);
var inst_89133 = (state_89273[(32)]);
var inst_89180 = (state_89273[(33)]);
var inst_89158 = (state_89273[(34)]);
var inst_89241 = (state_89273[(2)]);
var inst_89242 = (function (){var staking_pool_lp_address = inst_89174;
var lp_symbols = inst_89180;
var lp_transfers_in = inst_89223;
var rewards_token = inst_89186;
var pool_pid = inst_89143;
var deposit_data = inst_89140;
var lp_deposits = inst_89227;
var my_lps_staked_SINGLEQUOTE_ = inst_89159;
var my_lps_staked = inst_89158;
var all_staking_deposits = inst_89219;
var staked = inst_89088;
var total_pool_reserves = inst_89183;
var pids = inst_89229;
var pool_info = inst_89173;
var reward_transfers = inst_89215;
var staked2 = inst_89106;
var total_unis = inst_89177;
var lp_decimals = (18);
var lp_transfers_hashes = inst_89225;
var all_staking_withdrawals = inst_89241;
var pid = inst_89237;
var rewards_earned = inst_89211;
var deposit = inst_89133;
return (function (p1__89069_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__89069_SHARP_),pid);
});
})();
var inst_89243 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_89241,inst_89219);
var inst_89244 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89242,inst_89243);
var inst_89245 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_89244);
var inst_89246 = cljs.core.set(inst_89245);
var inst_89247 = (function (){var staking_pool_lp_address = inst_89174;
var lp_symbols = inst_89180;
var lp_transfers_in = inst_89223;
var rewards_token = inst_89186;
var pool_pid = inst_89143;
var deposit_data = inst_89140;
var lp_deposits = inst_89227;
var my_lps_staked_SINGLEQUOTE_ = inst_89159;
var my_lps_staked = inst_89158;
var all_staking_deposits = inst_89219;
var staked = inst_89088;
var total_pool_reserves = inst_89183;
var pids = inst_89229;
var pool_info = inst_89173;
var reward_transfers = inst_89215;
var staked2 = inst_89106;
var total_unis = inst_89177;
var relevant_txids = inst_89246;
var lp_decimals = (18);
var lp_transfers_hashes = inst_89225;
var all_staking_withdrawals = inst_89241;
var pid = inst_89237;
var rewards_earned = inst_89211;
var deposit = inst_89133;
return (function (p1__89070_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__89070_SHARP_));
});
})();
var inst_89248 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89247,inst_89215);
var inst_89249 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_89248);
var inst_89250 = clojure.string.lower_case(inst_89174);
var inst_89251 = clojure.string.lower_case(lp_address);
var inst_89252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89250,inst_89251);
var state_89273__$1 = (function (){var statearr_89284 = state_89273;
(statearr_89284[(35)] = inst_89249);

return statearr_89284;
})();
if(inst_89252){
var statearr_89285_90176 = state_89273__$1;
(statearr_89285_90176[(1)] = (49));

} else {
var statearr_89286_90177 = state_89273__$1;
(statearr_89286_90177[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (50))){
var inst_89177 = (state_89273[(17)]);
var inst_89186 = (state_89273[(18)]);
var inst_89249 = (state_89273[(35)]);
var inst_89183 = (state_89273[(22)]);
var inst_89211 = (state_89273[(28)]);
var inst_89180 = (state_89273[(33)]);
var inst_89260 = revert.utils.bn((0));
var inst_89261 = revert.rewards.staked_positions(inst_89183,inst_89177,inst_89260,inst_89180);
var inst_89262 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_89263 = [inst_89211,inst_89186,inst_89249];
var inst_89264 = cljs.core.PersistentHashMap.fromArrays(inst_89262,inst_89263);
var inst_89265 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_89261,inst_89264);
var state_89273__$1 = state_89273;
var statearr_89287_90178 = state_89273__$1;
(statearr_89287_90178[(2)] = inst_89265);

(statearr_89287_90178[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (21))){
var inst_89138 = (state_89273[(2)]);
var state_89273__$1 = state_89273;
var statearr_89288_90179 = state_89273__$1;
(statearr_89288_90179[(2)] = inst_89138);

(statearr_89288_90179[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (31))){
var inst_89180 = (state_89273[(2)]);
var inst_89181 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_89273__$1 = (function (){var statearr_89289 = state_89273;
(statearr_89289[(33)] = inst_89180);

return statearr_89289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(32),inst_89181);
} else {
if((state_val_89274 === (32))){
var inst_89183 = (state_89273[(2)]);
var inst_89184 = revert.rewards._LT_staking_rewards_token(staking_address);
var state_89273__$1 = (function (){var statearr_89290 = state_89273;
(statearr_89290[(22)] = inst_89183);

return statearr_89290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(33),inst_89184);
} else {
if((state_val_89274 === (40))){
var inst_89197 = (state_89273[(11)]);
var state_89273__$1 = state_89273;
var statearr_89291_90180 = state_89273__$1;
(statearr_89291_90180[(2)] = inst_89197);

(statearr_89291_90180[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (33))){
var inst_89186 = (state_89273[(2)]);
var state_89273__$1 = (function (){var statearr_89292 = state_89273;
(statearr_89292[(18)] = inst_89186);

return statearr_89292;
})();
var statearr_89293_90181 = state_89273__$1;
(statearr_89293_90181[(2)] = null);

(statearr_89293_90181[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (13))){
var inst_89114 = (state_89273[(2)]);
var state_89273__$1 = state_89273;
var statearr_89294_90182 = state_89273__$1;
(statearr_89294_90182[(2)] = inst_89114);

(statearr_89294_90182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (22))){
var inst_89147 = (state_89273[(10)]);
var inst_89147__$1 = (state_89273[(2)]);
var inst_89148 = (inst_89147__$1 instanceof cljs.core.ExceptionInfo);
var inst_89149 = cljs.core.ex_data(inst_89147__$1);
var inst_89150 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89149);
var inst_89151 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89150,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89152 = ((inst_89148) && (inst_89151));
var state_89273__$1 = (function (){var statearr_89295 = state_89273;
(statearr_89295[(10)] = inst_89147__$1);

return statearr_89295;
})();
if(cljs.core.truth_(inst_89152)){
var statearr_89296_90183 = state_89273__$1;
(statearr_89296_90183[(1)] = (23));

} else {
var statearr_89297_90184 = state_89273__$1;
(statearr_89297_90184[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (36))){
var inst_89187 = (state_89273[(2)]);
var inst_89188 = revert.utils.bn((0));
var state_89273__$1 = (function (){var statearr_89298 = state_89273;
(statearr_89298[(36)] = inst_89187);

return statearr_89298;
})();
var statearr_89299_90185 = state_89273__$1;
(statearr_89299_90185[(2)] = inst_89188);

(statearr_89299_90185[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (41))){
var inst_89207 = (state_89273[(2)]);
var inst_89208 = revert.utils.ebn__GT_bn(inst_89207,(18));
var ___$6 = (function (){var statearr_89300 = state_89273;
(statearr_89300[(4)] = cljs.core.rest((state_89273[(4)])));

return statearr_89300;
})();
var state_89273__$1 = state_89273;
var statearr_89301_90186 = state_89273__$1;
(statearr_89301_90186[(2)] = inst_89208);

(statearr_89301_90186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (43))){
var inst_89219 = (state_89273[(2)]);
var inst_89220 = cljs.core.deref(revert.ethereum.provider);
var inst_89221 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_89220,lp_address,user_address,staking_address);
var state_89273__$1 = (function (){var statearr_89302 = state_89273;
(statearr_89302[(21)] = inst_89219);

return statearr_89302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(44),inst_89221);
} else {
if((state_val_89274 === (29))){
var inst_89173 = (state_89273[(23)]);
var inst_89173__$1 = (state_89273[(2)]);
var inst_89174 = cljs.core.first(inst_89173__$1);
var inst_89175 = revert.rewards._LT_total_pool_lps(lp_address);
var state_89273__$1 = (function (){var statearr_89303 = state_89273;
(statearr_89303[(20)] = inst_89174);

(statearr_89303[(23)] = inst_89173__$1);

return statearr_89303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(30),inst_89175);
} else {
if((state_val_89274 === (44))){
var inst_89223 = (state_89273[(15)]);
var inst_89227 = (state_89273[(16)]);
var inst_89177 = (state_89273[(17)]);
var inst_89186 = (state_89273[(18)]);
var inst_89229 = (state_89273[(12)]);
var inst_89174 = (state_89273[(20)]);
var inst_89219 = (state_89273[(21)]);
var inst_89183 = (state_89273[(22)]);
var inst_89173 = (state_89273[(23)]);
var inst_89225 = (state_89273[(24)]);
var inst_89159 = (state_89273[(25)]);
var inst_89140 = (state_89273[(26)]);
var inst_89106 = (state_89273[(27)]);
var inst_89211 = (state_89273[(28)]);
var inst_89215 = (state_89273[(29)]);
var inst_89143 = (state_89273[(30)]);
var inst_89088 = (state_89273[(31)]);
var inst_89133 = (state_89273[(32)]);
var inst_89180 = (state_89273[(33)]);
var inst_89158 = (state_89273[(34)]);
var inst_89223__$1 = (state_89273[(2)]);
var inst_89224 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_89223__$1);
var inst_89225__$1 = cljs.core.set(inst_89224);
var inst_89226 = (function (){var staking_pool_lp_address = inst_89174;
var lp_symbols = inst_89180;
var lp_transfers_in = inst_89223__$1;
var rewards_token = inst_89186;
var pool_pid = inst_89143;
var deposit_data = inst_89140;
var my_lps_staked_SINGLEQUOTE_ = inst_89159;
var my_lps_staked = inst_89158;
var all_staking_deposits = inst_89219;
var staked = inst_89088;
var total_pool_reserves = inst_89183;
var pool_info = inst_89173;
var reward_transfers = inst_89215;
var staked2 = inst_89106;
var total_unis = inst_89177;
var lp_decimals = (18);
var lp_transfers_hashes = inst_89225__$1;
var rewards_earned = inst_89211;
var deposit = inst_89133;
return (function (p1__89068_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__89068_SHARP_));
});
})();
var inst_89227__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89226,inst_89219);
var inst_89228 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_89227__$1);
var inst_89229__$1 = cljs.core.set(inst_89228);
var inst_89230 = cljs.core.count(inst_89229__$1);
var inst_89231 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_89230,(1));
var state_89273__$1 = (function (){var statearr_89304 = state_89273;
(statearr_89304[(15)] = inst_89223__$1);

(statearr_89304[(16)] = inst_89227__$1);

(statearr_89304[(12)] = inst_89229__$1);

(statearr_89304[(24)] = inst_89225__$1);

return statearr_89304;
})();
if(inst_89231){
var statearr_89305_90187 = state_89273__$1;
(statearr_89305_90187[(1)] = (45));

} else {
var statearr_89306_90188 = state_89273__$1;
(statearr_89306_90188[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (6))){
var inst_89094 = (state_89273[(7)]);
var inst_89094__$1 = (state_89273[(2)]);
var inst_89095 = (inst_89094__$1 instanceof cljs.core.ExceptionInfo);
var inst_89096 = cljs.core.ex_data(inst_89094__$1);
var inst_89097 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89096);
var inst_89098 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89097,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89099 = ((inst_89095) && (inst_89098));
var state_89273__$1 = (function (){var statearr_89307 = state_89273;
(statearr_89307[(7)] = inst_89094__$1);

return statearr_89307;
})();
if(cljs.core.truth_(inst_89099)){
var statearr_89308_90189 = state_89273__$1;
(statearr_89308_90189[(1)] = (7));

} else {
var statearr_89309_90190 = state_89273__$1;
(statearr_89309_90190[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (28))){
var inst_89163 = (state_89273[(8)]);
var state_89273__$1 = state_89273;
var statearr_89310_90191 = state_89273__$1;
(statearr_89310_90191[(2)] = inst_89163);

(statearr_89310_90191[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (51))){
var inst_89267 = (state_89273[(2)]);
var state_89273__$1 = state_89273;
var statearr_89311_90192 = state_89273__$1;
(statearr_89311_90192[(2)] = inst_89267);

(statearr_89311_90192[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (25))){
var inst_89143 = (state_89273[(30)]);
var inst_89158 = (state_89273[(34)]);
var inst_89157 = (state_89273[(2)]);
var inst_89158__$1 = cljs.core.first(inst_89157);
var inst_89159 = revert.utils.ebn__GT_bn(inst_89158__$1,(18));
var inst_89160 = cheff_contract.poolInfo(inst_89143);
var inst_89161 = cljs.core.async.interop.p__GT_c(inst_89160);
var state_89273__$1 = (function (){var statearr_89312 = state_89273;
(statearr_89312[(25)] = inst_89159);

(statearr_89312[(34)] = inst_89158__$1);

return statearr_89312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(26),inst_89161);
} else {
if((state_val_89274 === (34))){
var inst_89143 = (state_89273[(30)]);
var ___$6 = (function (){var statearr_89313 = state_89273;
(statearr_89313[(4)] = cljs.core.cons((37),(state_89273[(4)])));

return statearr_89313;
})();
var inst_89194 = cheff_contract.pendingSushi(inst_89143,user_address);
var inst_89195 = cljs.core.async.interop.p__GT_c(inst_89194);
var state_89273__$1 = state_89273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(38),inst_89195);
} else {
if((state_val_89274 === (17))){
var inst_89116 = (state_89273[(37)]);
var inst_89133 = (state_89273[(32)]);
var inst_89131 = (state_89273[(2)]);
var inst_89132 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89116,inst_89131);
var inst_89133__$1 = cljs.core.first(inst_89132);
var inst_89134 = (inst_89133__$1 == null);
var state_89273__$1 = (function (){var statearr_89314 = state_89273;
(statearr_89314[(32)] = inst_89133__$1);

return statearr_89314;
})();
if(cljs.core.truth_(inst_89134)){
var statearr_89315_90193 = state_89273__$1;
(statearr_89315_90193[(1)] = (18));

} else {
var statearr_89316_90194 = state_89273__$1;
(statearr_89316_90194[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (3))){
var inst_89076 = (state_89273[(13)]);
var inst_89083 = (function(){throw inst_89076})();
var state_89273__$1 = state_89273;
var statearr_89317_90195 = state_89273__$1;
(statearr_89317_90195[(2)] = inst_89083);

(statearr_89317_90195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (12))){
var inst_89271 = (state_89273[(2)]);
var state_89273__$1 = state_89273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89273__$1,inst_89271);
} else {
if((state_val_89274 === (2))){
var inst_89076 = (state_89273[(13)]);
var inst_89076__$1 = (state_89273[(2)]);
var inst_89077 = (inst_89076__$1 instanceof cljs.core.ExceptionInfo);
var inst_89078 = cljs.core.ex_data(inst_89076__$1);
var inst_89079 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89078);
var inst_89080 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89079,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89081 = ((inst_89077) && (inst_89080));
var state_89273__$1 = (function (){var statearr_89318 = state_89273;
(statearr_89318[(13)] = inst_89076__$1);

return statearr_89318;
})();
if(cljs.core.truth_(inst_89081)){
var statearr_89319_90196 = state_89273__$1;
(statearr_89319_90196[(1)] = (3));

} else {
var statearr_89320_90197 = state_89273__$1;
(statearr_89320_90197[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (23))){
var inst_89147 = (state_89273[(10)]);
var inst_89154 = (function(){throw inst_89147})();
var state_89273__$1 = state_89273;
var statearr_89321_90198 = state_89273__$1;
(statearr_89321_90198[(2)] = inst_89154);

(statearr_89321_90198[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (47))){
var inst_89237 = (state_89273[(2)]);
var inst_89238 = cljs.core.deref(revert.ethereum.provider);
var inst_89239 = revert.ethereum._LT_user_token_withdrawals(inst_89238,staking_address,user_address);
var state_89273__$1 = (function (){var statearr_89322 = state_89273;
(statearr_89322[(19)] = inst_89237);

return statearr_89322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(48),inst_89239);
} else {
if((state_val_89274 === (35))){
var inst_89186 = (state_89273[(18)]);
var inst_89211 = (state_89273[(2)]);
var inst_89212 = cljs.core.deref(revert.ethereum.provider);
var inst_89213 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_89212,inst_89186,staking_address,user_address);
var state_89273__$1 = (function (){var statearr_89323 = state_89273;
(statearr_89323[(28)] = inst_89211);

return statearr_89323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(42),inst_89213);
} else {
if((state_val_89274 === (19))){
var inst_89140 = (state_89273[(26)]);
var inst_89143 = (state_89273[(30)]);
var inst_89133 = (state_89273[(32)]);
var inst_89140__$1 = revert.ethereum.decode_event_data(inst_89133);
var inst_89141 = revert.rewards.deposit_pid(inst_89140__$1);
var inst_89142 = revert.utils.ebn__GT_bn(inst_89141,(0));
var inst_89143__$1 = inst_89142.toNumber();
var inst_89144 = cheff_contract.userInfo(inst_89143__$1,user_address);
var inst_89145 = cljs.core.async.interop.p__GT_c(inst_89144);
var state_89273__$1 = (function (){var statearr_89324 = state_89273;
(statearr_89324[(26)] = inst_89140__$1);

(statearr_89324[(30)] = inst_89143__$1);

return statearr_89324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(22),inst_89145);
} else {
if((state_val_89274 === (11))){
var inst_89106 = (state_89273[(27)]);
var inst_89088 = (state_89273[(31)]);
var inst_89116 = (function (){var staked = inst_89088;
var staked2 = inst_89106;
return (function (p1__89067_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__89067_SHARP_.transactionHash);
});
})();
var inst_89117 = cljs.core.deref(revert.ethereum.provider);
var inst_89118 = inst_89117.getLogs(deposit_filter);
var inst_89119 = cljs.core.async.interop.p__GT_c(inst_89118);
var state_89273__$1 = (function (){var statearr_89325 = state_89273;
(statearr_89325[(37)] = inst_89116);

return statearr_89325;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(14),inst_89119);
} else {
if((state_val_89274 === (9))){
var inst_89106 = (state_89273[(27)]);
var inst_89089 = (state_89273[(38)]);
var inst_89088 = (state_89273[(31)]);
var inst_89104 = (state_89273[(2)]);
var inst_89105 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89089,inst_89104);
var inst_89106__$1 = cljs.core.first(inst_89105);
var inst_89107 = (inst_89088 == null);
var inst_89108 = (inst_89106__$1 == null);
var inst_89109 = ((inst_89107) && (inst_89108));
var inst_89110 = cljs.core.not(inst_89109);
var state_89273__$1 = (function (){var statearr_89326 = state_89273;
(statearr_89326[(27)] = inst_89106__$1);

return statearr_89326;
})();
if(inst_89110){
var statearr_89327_90199 = state_89273__$1;
(statearr_89327_90199[(1)] = (10));

} else {
var statearr_89328_90200 = state_89273__$1;
(statearr_89328_90200[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (5))){
var inst_89071 = (state_89273[(9)]);
var inst_89088 = (state_89273[(31)]);
var inst_89086 = (state_89273[(2)]);
var inst_89087 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89071,inst_89086);
var inst_89088__$1 = cljs.core.first(inst_89087);
var inst_89089 = (function (){var staked = inst_89088__$1;
return (function (p1__89066_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__89066_SHARP_.transactionHash);
});
})();
var inst_89090 = cljs.core.deref(revert.ethereum.provider);
var inst_89091 = inst_89090.getLogs(staked_filter2);
var inst_89092 = cljs.core.async.interop.p__GT_c(inst_89091);
var state_89273__$1 = (function (){var statearr_89329 = state_89273;
(statearr_89329[(38)] = inst_89089);

(statearr_89329[(31)] = inst_89088__$1);

return statearr_89329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(6),inst_89092);
} else {
if((state_val_89274 === (14))){
var inst_89121 = (state_89273[(14)]);
var inst_89121__$1 = (state_89273[(2)]);
var inst_89122 = (inst_89121__$1 instanceof cljs.core.ExceptionInfo);
var inst_89123 = cljs.core.ex_data(inst_89121__$1);
var inst_89124 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89123);
var inst_89125 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89124,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89126 = ((inst_89122) && (inst_89125));
var state_89273__$1 = (function (){var statearr_89330 = state_89273;
(statearr_89330[(14)] = inst_89121__$1);

return statearr_89330;
})();
if(cljs.core.truth_(inst_89126)){
var statearr_89331_90201 = state_89273__$1;
(statearr_89331_90201[(1)] = (15));

} else {
var statearr_89332_90202 = state_89273__$1;
(statearr_89332_90202[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (45))){
var inst_89229 = (state_89273[(12)]);
var inst_89233 = cljs.core.first(inst_89229);
var state_89273__$1 = state_89273;
var statearr_89333_90203 = state_89273__$1;
(statearr_89333_90203[(2)] = inst_89233);

(statearr_89333_90203[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (26))){
var inst_89163 = (state_89273[(8)]);
var inst_89163__$1 = (state_89273[(2)]);
var inst_89164 = (inst_89163__$1 instanceof cljs.core.ExceptionInfo);
var inst_89165 = cljs.core.ex_data(inst_89163__$1);
var inst_89166 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89165);
var inst_89167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89166,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89168 = ((inst_89164) && (inst_89167));
var state_89273__$1 = (function (){var statearr_89334 = state_89273;
(statearr_89334[(8)] = inst_89163__$1);

return statearr_89334;
})();
if(cljs.core.truth_(inst_89168)){
var statearr_89335_90204 = state_89273__$1;
(statearr_89335_90204[(1)] = (27));

} else {
var statearr_89336_90205 = state_89273__$1;
(statearr_89336_90205[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (16))){
var inst_89121 = (state_89273[(14)]);
var state_89273__$1 = state_89273;
var statearr_89337_90206 = state_89273__$1;
(statearr_89337_90206[(2)] = inst_89121);

(statearr_89337_90206[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (38))){
var inst_89197 = (state_89273[(11)]);
var inst_89197__$1 = (state_89273[(2)]);
var inst_89198 = (inst_89197__$1 instanceof cljs.core.ExceptionInfo);
var inst_89199 = cljs.core.ex_data(inst_89197__$1);
var inst_89200 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89199);
var inst_89201 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89200,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89202 = ((inst_89198) && (inst_89201));
var state_89273__$1 = (function (){var statearr_89338 = state_89273;
(statearr_89338[(11)] = inst_89197__$1);

return statearr_89338;
})();
if(cljs.core.truth_(inst_89202)){
var statearr_89339_90207 = state_89273__$1;
(statearr_89339_90207[(1)] = (39));

} else {
var statearr_89340_90208 = state_89273__$1;
(statearr_89340_90208[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (30))){
var inst_89177 = (state_89273[(2)]);
var inst_89178 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_89273__$1 = (function (){var statearr_89341 = state_89273;
(statearr_89341[(17)] = inst_89177);

return statearr_89341;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(31),inst_89178);
} else {
if((state_val_89274 === (10))){
var inst_89112 = revert.rewards._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_89273__$1 = state_89273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(13),inst_89112);
} else {
if((state_val_89274 === (18))){
var inst_89136 = revert.rewards._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_89273__$1 = state_89273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(21),inst_89136);
} else {
if((state_val_89274 === (42))){
var inst_89215 = (state_89273[(2)]);
var inst_89216 = cljs.core.deref(revert.ethereum.provider);
var inst_89217 = revert.ethereum._LT_user_token_deposits(inst_89216,staking_address,user_address);
var state_89273__$1 = (function (){var statearr_89343 = state_89273;
(statearr_89343[(29)] = inst_89215);

return statearr_89343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89273__$1,(43),inst_89217);
} else {
if((state_val_89274 === (37))){
var ___$6 = (function (){var statearr_89344 = state_89273;
(statearr_89344[(4)] = cljs.core.rest((state_89273[(4)])));

return statearr_89344;
})();
var state_89273__$1 = state_89273;
var ex89342 = (state_89273__$1[(2)]);
var statearr_89345_90209 = state_89273__$1;
(statearr_89345_90209[(5)] = ex89342);


if((ex89342 instanceof Object)){
var statearr_89346_90210 = state_89273__$1;
(statearr_89346_90210[(1)] = (36));

(statearr_89346_90210[(5)] = null);

} else {
throw ex89342;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (8))){
var inst_89094 = (state_89273[(7)]);
var state_89273__$1 = state_89273;
var statearr_89347_90211 = state_89273__$1;
(statearr_89347_90211[(2)] = inst_89094);

(statearr_89347_90211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89274 === (49))){
var inst_89177 = (state_89273[(17)]);
var inst_89186 = (state_89273[(18)]);
var inst_89249 = (state_89273[(35)]);
var inst_89183 = (state_89273[(22)]);
var inst_89159 = (state_89273[(25)]);
var inst_89211 = (state_89273[(28)]);
var inst_89180 = (state_89273[(33)]);
var inst_89254 = revert.rewards.staked_positions(inst_89183,inst_89177,inst_89159,inst_89180);
var inst_89255 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_89256 = [inst_89211,inst_89186,inst_89249];
var inst_89257 = cljs.core.PersistentHashMap.fromArrays(inst_89255,inst_89256);
var inst_89258 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_89254,inst_89257);
var state_89273__$1 = state_89273;
var statearr_89348_90212 = state_89273__$1;
(statearr_89348_90212[(2)] = inst_89258);

(statearr_89348_90212[(1)] = (51));


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
var revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____0 = (function (){
var statearr_89349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89349[(0)] = revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__);

(statearr_89349[(1)] = (1));

return statearr_89349;
});
var revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____1 = (function (state_89273){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89273);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89350){var ex__52189__auto__ = e89350;
var statearr_89351_90213 = state_89273;
(statearr_89351_90213[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89273[(4)]))){
var statearr_89352_90214 = state_89273;
(statearr_89352_90214[(1)] = cljs.core.first((state_89273[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90215 = state_89273;
state_89273 = G__90215;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__ = function(state_89273){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____1.call(this,state_89273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89353 = f__52209__auto__();
(statearr_89353[(6)] = c__52208__auto__);

return statearr_89353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_alchemix_claims = (function revert$rewards$_LT_alchemix_claims(staking_address,user_address,pid){
var ac = revert.ethereum.make_contract(revert.ethereum.alchemix_abi,staking_address);
var claimed_filter = (ac.filters.TokensClaimed.cljs$core$IFn$_invoke$arity$2 ? ac.filters.TokensClaimed.cljs$core$IFn$_invoke$arity$2(user_address,pid) : ac.filters.TokensClaimed.call(null,user_address,pid));
var _ = (claimed_filter.fromBlock = (0));
var ___$1 = (claimed_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89370){
var state_val_89371 = (state_89370[(1)]);
if((state_val_89371 === (1))){
var inst_89354 = cljs.core.deref(revert.ethereum.provider);
var inst_89355 = inst_89354.getLogs(claimed_filter);
var inst_89356 = cljs.core.async.interop.p__GT_c(inst_89355);
var state_89370__$1 = state_89370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89370__$1,(2),inst_89356);
} else {
if((state_val_89371 === (2))){
var inst_89358 = (state_89370[(7)]);
var inst_89358__$1 = (state_89370[(2)]);
var inst_89359 = (inst_89358__$1 instanceof cljs.core.ExceptionInfo);
var inst_89360 = cljs.core.ex_data(inst_89358__$1);
var inst_89361 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89360);
var inst_89362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89361,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89363 = ((inst_89359) && (inst_89362));
var state_89370__$1 = (function (){var statearr_89372 = state_89370;
(statearr_89372[(7)] = inst_89358__$1);

return statearr_89372;
})();
if(cljs.core.truth_(inst_89363)){
var statearr_89373_90216 = state_89370__$1;
(statearr_89373_90216[(1)] = (3));

} else {
var statearr_89374_90217 = state_89370__$1;
(statearr_89374_90217[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89371 === (3))){
var inst_89358 = (state_89370[(7)]);
var inst_89365 = (function(){throw inst_89358})();
var state_89370__$1 = state_89370;
var statearr_89375_90218 = state_89370__$1;
(statearr_89375_90218[(2)] = inst_89365);

(statearr_89375_90218[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89371 === (4))){
var inst_89358 = (state_89370[(7)]);
var state_89370__$1 = state_89370;
var statearr_89376_90219 = state_89370__$1;
(statearr_89376_90219[(2)] = inst_89358);

(statearr_89376_90219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89371 === (5))){
var inst_89368 = (state_89370[(2)]);
var state_89370__$1 = state_89370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89370__$1,inst_89368);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____0 = (function (){
var statearr_89377 = [null,null,null,null,null,null,null,null];
(statearr_89377[(0)] = revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__);

(statearr_89377[(1)] = (1));

return statearr_89377;
});
var revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____1 = (function (state_89370){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89370);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89378){var ex__52189__auto__ = e89378;
var statearr_89379_90220 = state_89370;
(statearr_89379_90220[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89370[(4)]))){
var statearr_89380_90221 = state_89370;
(statearr_89380_90221[(1)] = cljs.core.first((state_89370[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90222 = state_89370;
state_89370 = G__90222;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__ = function(state_89370){
switch(arguments.length){
case 0:
return revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____1.call(this,state_89370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____0;
revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____1;
return revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89381 = f__52209__auto__();
(statearr_89381[(6)] = c__52208__auto__);

return statearr_89381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_get_stake_unclaimed = (function revert$rewards$_LT_get_stake_unclaimed(contract,user_address,pid){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89397){
var state_val_89398 = (state_89397[(1)]);
if((state_val_89398 === (1))){
var inst_89382 = contract.getStakeTotalUnclaimed(user_address,pid);
var inst_89383 = cljs.core.async.interop.p__GT_c(inst_89382);
var state_89397__$1 = state_89397;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89397__$1,(2),inst_89383);
} else {
if((state_val_89398 === (2))){
var inst_89385 = (state_89397[(7)]);
var inst_89385__$1 = (state_89397[(2)]);
var inst_89386 = (inst_89385__$1 instanceof cljs.core.ExceptionInfo);
var inst_89387 = cljs.core.ex_data(inst_89385__$1);
var inst_89388 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89387);
var inst_89389 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89388,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89390 = ((inst_89386) && (inst_89389));
var state_89397__$1 = (function (){var statearr_89399 = state_89397;
(statearr_89399[(7)] = inst_89385__$1);

return statearr_89399;
})();
if(cljs.core.truth_(inst_89390)){
var statearr_89400_90223 = state_89397__$1;
(statearr_89400_90223[(1)] = (3));

} else {
var statearr_89401_90224 = state_89397__$1;
(statearr_89401_90224[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89398 === (3))){
var inst_89385 = (state_89397[(7)]);
var inst_89392 = (function(){throw inst_89385})();
var state_89397__$1 = state_89397;
var statearr_89402_90225 = state_89397__$1;
(statearr_89402_90225[(2)] = inst_89392);

(statearr_89402_90225[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89398 === (4))){
var inst_89385 = (state_89397[(7)]);
var state_89397__$1 = state_89397;
var statearr_89403_90226 = state_89397__$1;
(statearr_89403_90226[(2)] = inst_89385);

(statearr_89403_90226[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89398 === (5))){
var inst_89395 = (state_89397[(2)]);
var state_89397__$1 = state_89397;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89397__$1,inst_89395);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____0 = (function (){
var statearr_89404 = [null,null,null,null,null,null,null,null];
(statearr_89404[(0)] = revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__);

(statearr_89404[(1)] = (1));

return statearr_89404;
});
var revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____1 = (function (state_89397){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89397);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89405){var ex__52189__auto__ = e89405;
var statearr_89406_90227 = state_89397;
(statearr_89406_90227[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89397[(4)]))){
var statearr_89407_90228 = state_89397;
(statearr_89407_90228[(1)] = cljs.core.first((state_89397[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90229 = state_89397;
state_89397 = G__90229;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__ = function(state_89397){
switch(arguments.length){
case 0:
return revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____1.call(this,state_89397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____0;
revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____1;
return revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89408 = f__52209__auto__();
(statearr_89408[(6)] = c__52208__auto__);

return statearr_89408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_get_stake_deposited = (function revert$rewards$_LT_get_stake_deposited(contract,user_address,pid){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89424){
var state_val_89425 = (state_89424[(1)]);
if((state_val_89425 === (1))){
var inst_89409 = contract.getStakeTotalDeposited(user_address,pid);
var inst_89410 = cljs.core.async.interop.p__GT_c(inst_89409);
var state_89424__$1 = state_89424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89424__$1,(2),inst_89410);
} else {
if((state_val_89425 === (2))){
var inst_89412 = (state_89424[(7)]);
var inst_89412__$1 = (state_89424[(2)]);
var inst_89413 = (inst_89412__$1 instanceof cljs.core.ExceptionInfo);
var inst_89414 = cljs.core.ex_data(inst_89412__$1);
var inst_89415 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89414);
var inst_89416 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89415,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89417 = ((inst_89413) && (inst_89416));
var state_89424__$1 = (function (){var statearr_89426 = state_89424;
(statearr_89426[(7)] = inst_89412__$1);

return statearr_89426;
})();
if(cljs.core.truth_(inst_89417)){
var statearr_89427_90230 = state_89424__$1;
(statearr_89427_90230[(1)] = (3));

} else {
var statearr_89428_90231 = state_89424__$1;
(statearr_89428_90231[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89425 === (3))){
var inst_89412 = (state_89424[(7)]);
var inst_89419 = (function(){throw inst_89412})();
var state_89424__$1 = state_89424;
var statearr_89429_90232 = state_89424__$1;
(statearr_89429_90232[(2)] = inst_89419);

(statearr_89429_90232[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89425 === (4))){
var inst_89412 = (state_89424[(7)]);
var state_89424__$1 = state_89424;
var statearr_89430_90233 = state_89424__$1;
(statearr_89430_90233[(2)] = inst_89412);

(statearr_89430_90233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89425 === (5))){
var inst_89422 = (state_89424[(2)]);
var state_89424__$1 = state_89424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89424__$1,inst_89422);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____0 = (function (){
var statearr_89431 = [null,null,null,null,null,null,null,null];
(statearr_89431[(0)] = revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__);

(statearr_89431[(1)] = (1));

return statearr_89431;
});
var revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____1 = (function (state_89424){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89424);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89432){var ex__52189__auto__ = e89432;
var statearr_89433_90234 = state_89424;
(statearr_89433_90234[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89424[(4)]))){
var statearr_89434_90235 = state_89424;
(statearr_89434_90235[(1)] = cljs.core.first((state_89424[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90236 = state_89424;
state_89424 = G__90236;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__ = function(state_89424){
switch(arguments.length){
case 0:
return revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____1.call(this,state_89424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____0;
revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____1;
return revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89435 = f__52209__auto__();
(statearr_89435[(6)] = c__52208__auto__);

return statearr_89435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_get_token_pool_ids = (function revert$rewards$_LT_get_token_pool_ids(contract,lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89451){
var state_val_89452 = (state_89451[(1)]);
if((state_val_89452 === (1))){
var inst_89436 = contract.tokenPoolIds(lp_address);
var inst_89437 = cljs.core.async.interop.p__GT_c(inst_89436);
var state_89451__$1 = state_89451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89451__$1,(2),inst_89437);
} else {
if((state_val_89452 === (2))){
var inst_89439 = (state_89451[(7)]);
var inst_89439__$1 = (state_89451[(2)]);
var inst_89440 = (inst_89439__$1 instanceof cljs.core.ExceptionInfo);
var inst_89441 = cljs.core.ex_data(inst_89439__$1);
var inst_89442 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89441);
var inst_89443 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89442,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89444 = ((inst_89440) && (inst_89443));
var state_89451__$1 = (function (){var statearr_89453 = state_89451;
(statearr_89453[(7)] = inst_89439__$1);

return statearr_89453;
})();
if(cljs.core.truth_(inst_89444)){
var statearr_89454_90237 = state_89451__$1;
(statearr_89454_90237[(1)] = (3));

} else {
var statearr_89455_90238 = state_89451__$1;
(statearr_89455_90238[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89452 === (3))){
var inst_89439 = (state_89451[(7)]);
var inst_89446 = (function(){throw inst_89439})();
var state_89451__$1 = state_89451;
var statearr_89456_90239 = state_89451__$1;
(statearr_89456_90239[(2)] = inst_89446);

(statearr_89456_90239[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89452 === (4))){
var inst_89439 = (state_89451[(7)]);
var state_89451__$1 = state_89451;
var statearr_89457_90240 = state_89451__$1;
(statearr_89457_90240[(2)] = inst_89439);

(statearr_89457_90240[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89452 === (5))){
var inst_89449 = (state_89451[(2)]);
var state_89451__$1 = state_89451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89451__$1,inst_89449);
} else {
return null;
}
}
}
}
}
});
return (function() {
var revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____0 = (function (){
var statearr_89458 = [null,null,null,null,null,null,null,null];
(statearr_89458[(0)] = revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__);

(statearr_89458[(1)] = (1));

return statearr_89458;
});
var revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____1 = (function (state_89451){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89451);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89459){var ex__52189__auto__ = e89459;
var statearr_89460_90241 = state_89451;
(statearr_89460_90241[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89451[(4)]))){
var statearr_89461_90242 = state_89451;
(statearr_89461_90242[(1)] = cljs.core.first((state_89451[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90243 = state_89451;
state_89451 = G__90243;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__ = function(state_89451){
switch(arguments.length){
case 0:
return revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____1.call(this,state_89451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____0;
revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____1;
return revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89462 = f__52209__auto__();
(statearr_89462[(6)] = c__52208__auto__);

return statearr_89462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_alchemix_rewards = (function revert$rewards$_LT_alchemix_rewards(lp_address,staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89535){
var state_val_89536 = (state_89535[(1)]);
if((state_val_89536 === (7))){
var inst_89484 = (state_89535[(7)]);
var inst_89491 = (function(){throw inst_89484})();
var state_89535__$1 = state_89535;
var statearr_89537_90244 = state_89535__$1;
(statearr_89537_90244[(2)] = inst_89491);

(statearr_89537_90244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (1))){
var inst_89465 = (state_89535[(8)]);
var inst_89465__$1 = revert.ethereum.make_contract(revert.ethereum.alchemix_abi,staking_address);
var inst_89466 = inst_89465__$1.reward();
var inst_89467 = cljs.core.async.interop.p__GT_c(inst_89466);
var state_89535__$1 = (function (){var statearr_89538 = state_89535;
(statearr_89538[(8)] = inst_89465__$1);

return statearr_89538;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(2),inst_89467);
} else {
if((state_val_89536 === (4))){
var inst_89469 = (state_89535[(9)]);
var state_89535__$1 = state_89535;
var statearr_89539_90245 = state_89535__$1;
(statearr_89539_90245[(2)] = inst_89469);

(statearr_89539_90245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (15))){
var inst_89521 = (state_89535[(2)]);
var inst_89522 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_89535__$1 = (function (){var statearr_89540 = state_89535;
(statearr_89540[(10)] = inst_89521);

return statearr_89540;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(16),inst_89522);
} else {
if((state_val_89536 === (13))){
var inst_89505 = (state_89535[(11)]);
var inst_89480 = (state_89535[(12)]);
var inst_89502 = (state_89535[(13)]);
var inst_89498 = (state_89535[(14)]);
var inst_89494 = (state_89535[(15)]);
var inst_89479 = (state_89535[(16)]);
var inst_89465 = (state_89535[(8)]);
var inst_89509 = (state_89535[(2)]);
var inst_89510 = (function (){var alchemy_contract = inst_89465;
var reward_token = inst_89479;
var reward_contract = inst_89480;
var decimals = inst_89494;
var pool_id = inst_89498;
var pending_rewards = inst_89502;
var filtered_claims = inst_89505;
var reward_transfers = inst_89509;
return (function (p1__89463_SHARP_){
return p1__89463_SHARP_.transactionHash;
});
})();
var inst_89511 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_89510,inst_89505);
var inst_89512 = cljs.core.set(inst_89511);
var inst_89513 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_89509);
var inst_89514 = (function (){var filtered_claims = inst_89505;
var reward_token = inst_89479;
var decimals = inst_89494;
var paid_rewards = inst_89513;
var claim_hashes = inst_89512;
var reward_contract = inst_89480;
var reward_transfers = inst_89509;
var pending_rewards = inst_89502;
var alchemy_contract = inst_89465;
var pool_id = inst_89498;
return (function (p1__89464_SHARP_){
return cljs.core.contains_QMARK_(claim_hashes,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__89464_SHARP_));
});
})();
var inst_89515 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89514,inst_89513);
var inst_89516 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_89535__$1 = (function (){var statearr_89541 = state_89535;
(statearr_89541[(17)] = inst_89515);

return statearr_89541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(14),inst_89516);
} else {
if((state_val_89536 === (6))){
var inst_89484 = (state_89535[(7)]);
var inst_89484__$1 = (state_89535[(2)]);
var inst_89485 = (inst_89484__$1 instanceof cljs.core.ExceptionInfo);
var inst_89486 = cljs.core.ex_data(inst_89484__$1);
var inst_89487 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89486);
var inst_89488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89487,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89489 = ((inst_89485) && (inst_89488));
var state_89535__$1 = (function (){var statearr_89542 = state_89535;
(statearr_89542[(7)] = inst_89484__$1);

return statearr_89542;
})();
if(cljs.core.truth_(inst_89489)){
var statearr_89543_90246 = state_89535__$1;
(statearr_89543_90246[(1)] = (7));

} else {
var statearr_89544_90247 = state_89535__$1;
(statearr_89544_90247[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (17))){
var inst_89521 = (state_89535[(10)]);
var inst_89524 = (state_89535[(18)]);
var inst_89518 = (state_89535[(19)]);
var inst_89502 = (state_89535[(13)]);
var inst_89515 = (state_89535[(17)]);
var inst_89479 = (state_89535[(16)]);
var inst_89527 = (state_89535[(2)]);
var inst_89528 = revert.utils.ebn__GT_bn(inst_89527,(18));
var inst_89529 = revert.rewards.staked_positions(inst_89518,inst_89521,inst_89528,inst_89524);
var inst_89530 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429)];
var inst_89531 = [inst_89502,inst_89515,inst_89479];
var inst_89532 = cljs.core.PersistentHashMap.fromArrays(inst_89530,inst_89531);
var inst_89533 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_89529,inst_89532);
var state_89535__$1 = state_89535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89535__$1,inst_89533);
} else {
if((state_val_89536 === (3))){
var inst_89469 = (state_89535[(9)]);
var inst_89476 = (function(){throw inst_89469})();
var state_89535__$1 = state_89535;
var statearr_89545_90248 = state_89535__$1;
(statearr_89545_90248[(2)] = inst_89476);

(statearr_89545_90248[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (12))){
var inst_89479 = (state_89535[(16)]);
var inst_89505 = (state_89535[(2)]);
var inst_89506 = cljs.core.deref(revert.ethereum.provider);
var inst_89507 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_89506,inst_89479,null,user_address);
var state_89535__$1 = (function (){var statearr_89546 = state_89535;
(statearr_89546[(11)] = inst_89505);

return statearr_89546;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(13),inst_89507);
} else {
if((state_val_89536 === (2))){
var inst_89469 = (state_89535[(9)]);
var inst_89469__$1 = (state_89535[(2)]);
var inst_89470 = (inst_89469__$1 instanceof cljs.core.ExceptionInfo);
var inst_89471 = cljs.core.ex_data(inst_89469__$1);
var inst_89472 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89471);
var inst_89473 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89472,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89474 = ((inst_89470) && (inst_89473));
var state_89535__$1 = (function (){var statearr_89547 = state_89535;
(statearr_89547[(9)] = inst_89469__$1);

return statearr_89547;
})();
if(cljs.core.truth_(inst_89474)){
var statearr_89548_90249 = state_89535__$1;
(statearr_89548_90249[(1)] = (3));

} else {
var statearr_89549_90250 = state_89535__$1;
(statearr_89549_90250[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89536 === (11))){
var inst_89498 = (state_89535[(14)]);
var inst_89494 = (state_89535[(15)]);
var inst_89501 = (state_89535[(2)]);
var inst_89502 = revert.utils.ebn__GT_bn(inst_89501,inst_89494);
var inst_89503 = revert.rewards._LT_alchemix_claims(staking_address,user_address,inst_89498);
var state_89535__$1 = (function (){var statearr_89550 = state_89535;
(statearr_89550[(13)] = inst_89502);

return statearr_89550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(12),inst_89503);
} else {
if((state_val_89536 === (9))){
var inst_89465 = (state_89535[(8)]);
var inst_89494 = (state_89535[(2)]);
var inst_89495 = revert.rewards._LT_get_token_pool_ids(inst_89465,lp_address);
var state_89535__$1 = (function (){var statearr_89551 = state_89535;
(statearr_89551[(15)] = inst_89494);

return statearr_89551;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(10),inst_89495);
} else {
if((state_val_89536 === (5))){
var inst_89480 = (state_89535[(12)]);
var inst_89479 = (state_89535[(16)]);
var inst_89479__$1 = (state_89535[(2)]);
var inst_89480__$1 = revert.ethereum.make_erc20(inst_89479__$1);
var inst_89481 = inst_89480__$1.decimals();
var inst_89482 = cljs.core.async.interop.p__GT_c(inst_89481);
var state_89535__$1 = (function (){var statearr_89552 = state_89535;
(statearr_89552[(12)] = inst_89480__$1);

(statearr_89552[(16)] = inst_89479__$1);

return statearr_89552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(6),inst_89482);
} else {
if((state_val_89536 === (14))){
var inst_89518 = (state_89535[(2)]);
var inst_89519 = revert.rewards._LT_total_pool_lps(lp_address);
var state_89535__$1 = (function (){var statearr_89553 = state_89535;
(statearr_89553[(19)] = inst_89518);

return statearr_89553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(15),inst_89519);
} else {
if((state_val_89536 === (16))){
var inst_89498 = (state_89535[(14)]);
var inst_89465 = (state_89535[(8)]);
var inst_89524 = (state_89535[(2)]);
var inst_89525 = revert.rewards._LT_get_stake_deposited(inst_89465,user_address,inst_89498);
var state_89535__$1 = (function (){var statearr_89554 = state_89535;
(statearr_89554[(18)] = inst_89524);

return statearr_89554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(17),inst_89525);
} else {
if((state_val_89536 === (10))){
var inst_89498 = (state_89535[(14)]);
var inst_89465 = (state_89535[(8)]);
var inst_89497 = (state_89535[(2)]);
var inst_89498__$1 = (inst_89497 - (1));
var inst_89499 = revert.rewards._LT_get_stake_unclaimed(inst_89465,user_address,inst_89498__$1);
var state_89535__$1 = (function (){var statearr_89555 = state_89535;
(statearr_89555[(14)] = inst_89498__$1);

return statearr_89555;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89535__$1,(11),inst_89499);
} else {
if((state_val_89536 === (8))){
var inst_89484 = (state_89535[(7)]);
var state_89535__$1 = state_89535;
var statearr_89556_90251 = state_89535__$1;
(statearr_89556_90251[(2)] = inst_89484);

(statearr_89556_90251[(1)] = (9));


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
});
return (function() {
var revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____0 = (function (){
var statearr_89557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89557[(0)] = revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__);

(statearr_89557[(1)] = (1));

return statearr_89557;
});
var revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____1 = (function (state_89535){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89535);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89558){var ex__52189__auto__ = e89558;
var statearr_89559_90252 = state_89535;
(statearr_89559_90252[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89535[(4)]))){
var statearr_89560_90253 = state_89535;
(statearr_89560_90253[(1)] = cljs.core.first((state_89535[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90254 = state_89535;
state_89535 = G__90254;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__ = function(state_89535){
switch(arguments.length){
case 0:
return revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____1.call(this,state_89535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____0;
revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____1;
return revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89561 = f__52209__auto__();
(statearr_89561[(6)] = c__52208__auto__);

return statearr_89561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions = (function revert$rewards$_LT_staked_lp_positions(lp_destination,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89615){
var state_val_89616 = (state_89615[(1)]);
if((state_val_89616 === (7))){
var inst_89574 = (state_89615[(7)]);
var inst_89581 = (function(){throw inst_89574})();
var state_89615__$1 = state_89615;
var statearr_89617_90255 = state_89615__$1;
(statearr_89617_90255[(2)] = inst_89581);

(statearr_89617_90255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (20))){
var inst_89602 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
var statearr_89618_90256 = state_89615__$1;
(statearr_89618_90256[(2)] = inst_89602);

(statearr_89618_90256[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (1))){
var inst_89563 = (state_89615[(8)]);
var inst_89562 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_89563__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_89564 = revert.ethereum.make_erc20(inst_89563__$1);
var state_89615__$1 = (function (){var statearr_89619 = state_89615;
(statearr_89619[(9)] = inst_89564);

(statearr_89619[(8)] = inst_89563__$1);

(statearr_89619[(10)] = inst_89562);

return statearr_89619;
})();
var statearr_89620_90257 = state_89615__$1;
(statearr_89620_90257[(2)] = null);

(statearr_89620_90257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (4))){
var inst_89565 = (state_89615[(2)]);
var state_89615__$1 = (function (){var statearr_89621 = state_89615;
(statearr_89621[(11)] = inst_89565);

return statearr_89621;
})();
var statearr_89622_90258 = state_89615__$1;
(statearr_89622_90258[(2)] = null);

(statearr_89622_90258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (15))){
var inst_89563 = (state_89615[(8)]);
var inst_89562 = (state_89615[(10)]);
var inst_89592 = revert.rewards._LT_staked_lp_positions_lpbar(inst_89562,inst_89563,user_address);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89615__$1,(16),inst_89592);
} else {
if((state_val_89616 === (21))){
var inst_89604 = revert.rewards._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89615__$1,(22),inst_89604);
} else {
if((state_val_89616 === (13))){
var inst_89587 = (state_89615[(12)]);
var state_89615__$1 = state_89615;
var G__89623_90259 = inst_89587;
switch (G__89623_90259) {
case "LpBar":
var statearr_89624_90261 = state_89615__$1;
(statearr_89624_90261[(1)] = (15));


break;
case "sv Uniswap V2":
var statearr_89625_90262 = state_89615__$1;
(statearr_89625_90262[(1)] = (17));


break;
case "pickling Uniswap V2":
var statearr_89626_90263 = state_89615__$1;
(statearr_89626_90263[(1)] = (19));


break;
default:
var statearr_89627_90264 = state_89615__$1;
(statearr_89627_90264[(1)] = (21));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (22))){
var inst_89606 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
var statearr_89628_90265 = state_89615__$1;
(statearr_89628_90265[(2)] = inst_89606);

(statearr_89628_90265[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (6))){
var inst_89574 = (state_89615[(7)]);
var inst_89574__$1 = (state_89615[(2)]);
var inst_89575 = (inst_89574__$1 instanceof cljs.core.ExceptionInfo);
var inst_89576 = cljs.core.ex_data(inst_89574__$1);
var inst_89577 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_89576);
var inst_89578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_89577,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_89579 = ((inst_89575) && (inst_89578));
var state_89615__$1 = (function (){var statearr_89629 = state_89615;
(statearr_89629[(7)] = inst_89574__$1);

return statearr_89629;
})();
if(cljs.core.truth_(inst_89579)){
var statearr_89630_90266 = state_89615__$1;
(statearr_89630_90266[(1)] = (7));

} else {
var statearr_89631_90267 = state_89615__$1;
(statearr_89631_90267[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (17))){
var inst_89563 = (state_89615[(8)]);
var inst_89562 = (state_89615[(10)]);
var inst_89596 = revert.rewards._LT_staked_lp_positions_sashimi_plate(inst_89562,inst_89563,user_address);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89615__$1,(18),inst_89596);
} else {
if((state_val_89616 === (3))){
var inst_89563 = (state_89615[(8)]);
var inst_89587 = (state_89615[(2)]);
var inst_89611 = clojure.string.lower_case(inst_89563);
var state_89615__$1 = (function (){var statearr_89632 = state_89615;
(statearr_89632[(12)] = inst_89587);

return statearr_89632;
})();
var G__89633_90268 = inst_89611;
switch (G__89633_90268) {
case "0xab8e74017a8cc7c15ffccd726603790d26d7deca":
var statearr_89634_90270 = state_89615__$1;
(statearr_89634_90270[(1)] = (11));


break;
default:
var statearr_89635_90271 = state_89615__$1;
(statearr_89635_90271[(1)] = (13));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (12))){
var inst_89590 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
var statearr_89636_90272 = state_89615__$1;
(statearr_89636_90272[(2)] = inst_89590);

(statearr_89636_90272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (2))){
var inst_89564 = (state_89615[(9)]);
var _ = (function (){var statearr_89637 = state_89615;
(statearr_89637[(4)] = cljs.core.cons((5),(state_89615[(4)])));

return statearr_89637;
})();
var inst_89571 = inst_89564.name();
var inst_89572 = cljs.core.async.interop.p__GT_c(inst_89571);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89615__$1,(6),inst_89572);
} else {
if((state_val_89616 === (19))){
var inst_89563 = (state_89615[(8)]);
var inst_89562 = (state_89615[(10)]);
var inst_89600 = revert.rewards._LT_staked_lp_positions_pjar_redirect(inst_89562,inst_89563,user_address);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89615__$1,(20),inst_89600);
} else {
if((state_val_89616 === (11))){
var inst_89563 = (state_89615[(8)]);
var inst_89562 = (state_89615[(10)]);
var inst_89588 = revert.rewards._LT_alchemix_rewards(inst_89562,inst_89563,user_address);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89615__$1,(12),inst_89588);
} else {
if((state_val_89616 === (9))){
var inst_89584 = (state_89615[(2)]);
var _ = (function (){var statearr_89639 = state_89615;
(statearr_89639[(4)] = cljs.core.rest((state_89615[(4)])));

return statearr_89639;
})();
var state_89615__$1 = state_89615;
var statearr_89640_90273 = state_89615__$1;
(statearr_89640_90273[(2)] = inst_89584);

(statearr_89640_90273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (5))){
var _ = (function (){var statearr_89641 = state_89615;
(statearr_89641[(4)] = cljs.core.rest((state_89615[(4)])));

return statearr_89641;
})();
var state_89615__$1 = state_89615;
var ex89638 = (state_89615__$1[(2)]);
var statearr_89642_90274 = state_89615__$1;
(statearr_89642_90274[(5)] = ex89638);


if((ex89638 instanceof Error)){
var statearr_89643_90275 = state_89615__$1;
(statearr_89643_90275[(1)] = (4));

(statearr_89643_90275[(5)] = null);

} else {
throw ex89638;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (14))){
var inst_89609 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
var statearr_89644_90276 = state_89615__$1;
(statearr_89644_90276[(2)] = inst_89609);

(statearr_89644_90276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (16))){
var inst_89594 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
var statearr_89645_90277 = state_89615__$1;
(statearr_89645_90277[(2)] = inst_89594);

(statearr_89645_90277[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (10))){
var inst_89613 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89615__$1,inst_89613);
} else {
if((state_val_89616 === (18))){
var inst_89598 = (state_89615[(2)]);
var state_89615__$1 = state_89615;
var statearr_89646_90278 = state_89615__$1;
(statearr_89646_90278[(2)] = inst_89598);

(statearr_89646_90278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_89616 === (8))){
var inst_89574 = (state_89615[(7)]);
var state_89615__$1 = state_89615;
var statearr_89647_90279 = state_89615__$1;
(statearr_89647_90279[(2)] = inst_89574);

(statearr_89647_90279[(1)] = (9));


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
});
return (function() {
var revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_89648 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_89648[(0)] = revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__);

(statearr_89648[(1)] = (1));

return statearr_89648;
});
var revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____1 = (function (state_89615){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89615);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89649){var ex__52189__auto__ = e89649;
var statearr_89650_90280 = state_89615;
(statearr_89650_90280[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89615[(4)]))){
var statearr_89651_90281 = state_89615;
(statearr_89651_90281[(1)] = cljs.core.first((state_89615[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90282 = state_89615;
state_89615 = G__90282;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__ = function(state_89615){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____1.call(this,state_89615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89652 = f__52209__auto__();
(statearr_89652[(6)] = c__52208__auto__);

return statearr_89652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_account_lp_positions = (function revert$rewards$_LT_account_lp_positions(user_address,txs_out){
var unique_destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.vals(cljs.core.group_by((function (p1__89653_SHARP_){
return cljs.core.select_keys(p1__89653_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"to","to",192099007)], null));
}),txs_out)));
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89666){
var state_val_89667 = (state_89666[(1)]);
if((state_val_89667 === (1))){
var inst_89655 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"stakings","stakings",872334993),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_89656 = revert.rewards._LT_staked_lp_positions(x,user_address);
var state_89666__$1 = (function (){var statearr_89668 = state_89666;
(statearr_89668[(7)] = inst_89655);

return statearr_89668;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89666__$1,(2),inst_89656);
} else {
if((state_val_89667 === (2))){
var inst_89655 = (state_89666[(7)]);
var inst_89658 = (state_89666[(2)]);
var inst_89659 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_89660 = (function (){return (function (p1__89654_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(p1__89654_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__89654_SHARP_))));
});
})();
var inst_89661 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_89660,txs_out);
var inst_89662 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_89663 = [inst_89658,inst_89659,inst_89661,inst_89662];
var inst_89664 = cljs.core.PersistentHashMap.fromArrays(inst_89655,inst_89663);
var state_89666__$1 = state_89666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89666__$1,inst_89664);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_89669 = [null,null,null,null,null,null,null,null];
(statearr_89669[(0)] = revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__);

(statearr_89669[(1)] = (1));

return statearr_89669;
});
var revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____1 = (function (state_89666){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89666);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89670){var ex__52189__auto__ = e89670;
var statearr_89671_90283 = state_89666;
(statearr_89671_90283[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89666[(4)]))){
var statearr_89672_90284 = state_89666;
(statearr_89672_90284[(1)] = cljs.core.first((state_89666[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90285 = state_89666;
state_89666 = G__90285;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__ = function(state_89666){
switch(arguments.length){
case 0:
return revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____1.call(this,state_89666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____0;
revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____1;
return revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89673 = f__52209__auto__();
(statearr_89673[(6)] = c__52208__auto__);

return statearr_89673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),unique_destinations);
return cljs.core.async.reduce(cljs.core.conj,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(positions));
});
revert.rewards._LT_token_destinations = (function revert$rewards$_LT_token_destinations(user_address,token_addresses){
var destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (t){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89680){
var state_val_89681 = (state_89680[(1)]);
if((state_val_89681 === (1))){
var inst_89675 = cljs.core.deref(revert.ethereum.provider);
var inst_89676 = revert.ethereum._LT_user_token_destinations(inst_89675,t,user_address);
var state_89680__$1 = state_89680;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89680__$1,(2),inst_89676);
} else {
if((state_val_89681 === (2))){
var inst_89678 = (state_89680[(2)]);
var state_89680__$1 = state_89680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89680__$1,inst_89678);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____0 = (function (){
var statearr_89682 = [null,null,null,null,null,null,null];
(statearr_89682[(0)] = revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__);

(statearr_89682[(1)] = (1));

return statearr_89682;
});
var revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____1 = (function (state_89680){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89680);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89683){var ex__52189__auto__ = e89683;
var statearr_89684_90286 = state_89680;
(statearr_89684_90286[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89680[(4)]))){
var statearr_89685_90287 = state_89680;
(statearr_89685_90287[(1)] = cljs.core.first((state_89680[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90288 = state_89680;
state_89680 = G__90288;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__ = function(state_89680){
switch(arguments.length){
case 0:
return revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____1.call(this,state_89680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____0;
revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____1;
return revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89686 = f__52209__auto__();
(statearr_89686[(6)] = c__52208__auto__);

return statearr_89686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__89674_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__89674_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
revert.rewards.format_staking = (function revert$rewards$format_staking(staking_destination){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(staking_destination),new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(staking_destination),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),(cljs.core.truth_(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination))], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"",new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),revert.utils.bn(0.0),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),cljs.core.PersistentVector.EMPTY], null))], null);
});
revert.rewards._LT_token_stakings = (function revert$rewards$_LT_token_stakings(user_address,token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_89698){
var state_val_89699 = (state_89698[(1)]);
if((state_val_89699 === (1))){
var inst_89687 = revert.rewards._LT_token_destinations(user_address,token_addresses);
var state_89698__$1 = state_89698;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89698__$1,(2),inst_89687);
} else {
if((state_val_89699 === (2))){
var inst_89689 = (state_89698[(7)]);
var inst_89689__$1 = (state_89698[(2)]);
var inst_89690 = revert.rewards._LT_account_lp_positions(user_address,inst_89689__$1);
var state_89698__$1 = (function (){var statearr_89700 = state_89698;
(statearr_89700[(7)] = inst_89689__$1);

return statearr_89700;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_89698__$1,(3),inst_89690);
} else {
if((state_val_89699 === (3))){
var inst_89689 = (state_89698[(7)]);
var inst_89692 = (state_89698[(2)]);
var inst_89693 = [new cljs.core.Keyword(null,"txs-out","txs-out",1295820330),new cljs.core.Keyword(null,"stakings","stakings",872334993)];
var inst_89694 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.rewards.format_staking,inst_89692);
var inst_89695 = [inst_89689,inst_89694];
var inst_89696 = cljs.core.PersistentHashMap.fromArrays(inst_89693,inst_89695);
var state_89698__$1 = state_89698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_89698__$1,inst_89696);
} else {
return null;
}
}
}
});
return (function() {
var revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____0 = (function (){
var statearr_89701 = [null,null,null,null,null,null,null,null];
(statearr_89701[(0)] = revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__);

(statearr_89701[(1)] = (1));

return statearr_89701;
});
var revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____1 = (function (state_89698){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_89698);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e89702){var ex__52189__auto__ = e89702;
var statearr_89703_90289 = state_89698;
(statearr_89703_90289[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_89698[(4)]))){
var statearr_89704_90290 = state_89698;
(statearr_89704_90290[(1)] = cljs.core.first((state_89698[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90291 = state_89698;
state_89698 = G__90291;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__ = function(state_89698){
switch(arguments.length){
case 0:
return revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____1.call(this,state_89698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____0;
revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____1;
return revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_89705 = f__52209__auto__();
(statearr_89705[(6)] = c__52208__auto__);

return statearr_89705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.rewards.js.map

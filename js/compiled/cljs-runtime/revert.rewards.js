goog.provide('revert.rewards');
revert.rewards.get_earned = (function revert$rewards$get_earned(contract,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74602){
var state_val_74603 = (state_74602[(1)]);
if((state_val_74603 === (1))){
var inst_74587 = contract.earned(user_address);
var inst_74588 = cljs.core.async.interop.p__GT_c(inst_74587);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74602__$1,(2),inst_74588);
} else {
if((state_val_74603 === (2))){
var inst_74590 = (state_74602[(7)]);
var inst_74590__$1 = (state_74602[(2)]);
var inst_74591 = (inst_74590__$1 instanceof cljs.core.ExceptionInfo);
var inst_74592 = cljs.core.ex_data(inst_74590__$1);
var inst_74593 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74592);
var inst_74594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74593,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74595 = ((inst_74591) && (inst_74594));
var state_74602__$1 = (function (){var statearr_74608 = state_74602;
(statearr_74608[(7)] = inst_74590__$1);

return statearr_74608;
})();
if(cljs.core.truth_(inst_74595)){
var statearr_74609_76616 = state_74602__$1;
(statearr_74609_76616[(1)] = (3));

} else {
var statearr_74610_76617 = state_74602__$1;
(statearr_74610_76617[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (3))){
var inst_74590 = (state_74602[(7)]);
var inst_74597 = (function(){throw inst_74590})();
var state_74602__$1 = state_74602;
var statearr_74613_76618 = state_74602__$1;
(statearr_74613_76618[(2)] = inst_74597);

(statearr_74613_76618[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (4))){
var inst_74590 = (state_74602[(7)]);
var state_74602__$1 = state_74602;
var statearr_74615_76619 = state_74602__$1;
(statearr_74615_76619[(2)] = inst_74590);

(statearr_74615_76619[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74603 === (5))){
var inst_74600 = (state_74602[(2)]);
var state_74602__$1 = state_74602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74602__$1,inst_74600);
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
var statearr_74616 = [null,null,null,null,null,null,null,null];
(statearr_74616[(0)] = revert$rewards$get_earned_$_state_machine__52186__auto__);

(statearr_74616[(1)] = (1));

return statearr_74616;
});
var revert$rewards$get_earned_$_state_machine__52186__auto____1 = (function (state_74602){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74602);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74617){var ex__52189__auto__ = e74617;
var statearr_74618_76620 = state_74602;
(statearr_74618_76620[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74602[(4)]))){
var statearr_74620_76621 = state_74602;
(statearr_74620_76621[(1)] = cljs.core.first((state_74602[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76622 = state_74602;
state_74602 = G__76622;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$get_earned_$_state_machine__52186__auto__ = function(state_74602){
switch(arguments.length){
case 0:
return revert$rewards$get_earned_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$get_earned_$_state_machine__52186__auto____1.call(this,state_74602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$get_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$get_earned_$_state_machine__52186__auto____0;
revert$rewards$get_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$get_earned_$_state_machine__52186__auto____1;
return revert$rewards$get_earned_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74624 = f__52209__auto__();
(statearr_74624[(6)] = c__52208__auto__);

return statearr_74624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staking_rewards_earned = (function revert$rewards$_LT_staking_rewards_earned(staking_address,rewards_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74649){
var state_val_74650 = (state_74649[(1)]);
if((state_val_74650 === (1))){
var state_74649__$1 = state_74649;
var statearr_74651_76623 = state_74649__$1;
(statearr_74651_76623[(2)] = null);

(statearr_74651_76623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74650 === (2))){
var _ = (function (){var statearr_74652 = state_74649;
(statearr_74652[(4)] = cljs.core.cons((5),(state_74649[(4)])));

return statearr_74652;
})();
var inst_74636 = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var inst_74637 = revert.ethereum._LT_token_decimals(rewards_address);
var state_74649__$1 = (function (){var statearr_74653 = state_74649;
(statearr_74653[(7)] = inst_74636);

return statearr_74653;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74649__$1,(6),inst_74637);
} else {
if((state_val_74650 === (3))){
var inst_74646 = (state_74649[(2)]);
var state_74649__$1 = state_74649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74649__$1,inst_74646);
} else {
if((state_val_74650 === (4))){
var inst_74628 = (state_74649[(2)]);
var inst_74629 = revert.utils.bn((0));
var state_74649__$1 = (function (){var statearr_74656 = state_74649;
(statearr_74656[(8)] = inst_74628);

return statearr_74656;
})();
var statearr_74657_76640 = state_74649__$1;
(statearr_74657_76640[(2)] = inst_74629);

(statearr_74657_76640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74650 === (5))){
var _ = (function (){var statearr_74658 = state_74649;
(statearr_74658[(4)] = cljs.core.rest((state_74649[(4)])));

return statearr_74658;
})();
var state_74649__$1 = state_74649;
var ex74654 = (state_74649__$1[(2)]);
var statearr_74660_76641 = state_74649__$1;
(statearr_74660_76641[(5)] = ex74654);


if((ex74654 instanceof Error)){
var statearr_74661_76642 = state_74649__$1;
(statearr_74661_76642[(1)] = (4));

(statearr_74661_76642[(5)] = null);

} else {
throw ex74654;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74650 === (6))){
var inst_74636 = (state_74649[(7)]);
var inst_74639 = (state_74649[(2)]);
var inst_74640 = revert.rewards.get_earned(inst_74636,user_address);
var state_74649__$1 = (function (){var statearr_74662 = state_74649;
(statearr_74662[(9)] = inst_74639);

return statearr_74662;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74649__$1,(7),inst_74640);
} else {
if((state_val_74650 === (7))){
var inst_74639 = (state_74649[(9)]);
var inst_74642 = (state_74649[(2)]);
var inst_74643 = revert.utils.ebn__GT_bn(inst_74642,inst_74639);
var _ = (function (){var statearr_74666 = state_74649;
(statearr_74666[(4)] = cljs.core.rest((state_74649[(4)])));

return statearr_74666;
})();
var state_74649__$1 = state_74649;
var statearr_74668_76646 = state_74649__$1;
(statearr_74668_76646[(2)] = inst_74643);

(statearr_74668_76646[(1)] = (3));


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
var statearr_74669 = [null,null,null,null,null,null,null,null,null,null];
(statearr_74669[(0)] = revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__);

(statearr_74669[(1)] = (1));

return statearr_74669;
});
var revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____1 = (function (state_74649){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74649);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e74670){var ex__52189__auto__ = e74670;
var statearr_74671_76650 = state_74649;
(statearr_74671_76650[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74649[(4)]))){
var statearr_74672_76651 = state_74649;
(statearr_74672_76651[(1)] = cljs.core.first((state_74649[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76653 = state_74649;
state_74649 = G__76653;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__ = function(state_74649){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____1.call(this,state_74649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_rewards_earned_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_74675 = f__52209__auto__();
(statearr_74675[(6)] = c__52208__auto__);

return statearr_74675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staking_rewards_token_failback = (function revert$rewards$_LT_staking_rewards_token_failback(staking_address){
var staking_contract = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_74891){
var state_val_74892 = (state_74891[(1)]);
if((state_val_74892 === (65))){
var inst_74852 = (state_74891[(7)]);
var inst_74852__$1 = (state_74891[(2)]);
var inst_74853 = (inst_74852__$1 instanceof cljs.core.ExceptionInfo);
var inst_74854 = cljs.core.ex_data(inst_74852__$1);
var inst_74855 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74854);
var inst_74856 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74855,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74857 = ((inst_74853) && (inst_74856));
var state_74891__$1 = (function (){var statearr_74894 = state_74891;
(statearr_74894[(7)] = inst_74852__$1);

return statearr_74894;
})();
if(cljs.core.truth_(inst_74857)){
var statearr_74895_76658 = state_74891__$1;
(statearr_74895_76658[(1)] = (66));

} else {
var statearr_74896_76659 = state_74891__$1;
(statearr_74896_76659[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (70))){
var inst_74874 = (state_74891[(8)]);
var inst_74874__$1 = (state_74891[(2)]);
var inst_74875 = (inst_74874__$1 instanceof cljs.core.ExceptionInfo);
var inst_74876 = cljs.core.ex_data(inst_74874__$1);
var inst_74877 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74876);
var inst_74878 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74877,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74879 = ((inst_74875) && (inst_74878));
var state_74891__$1 = (function (){var statearr_74897 = state_74891;
(statearr_74897[(8)] = inst_74874__$1);

return statearr_74897;
})();
if(cljs.core.truth_(inst_74879)){
var statearr_74898_76664 = state_74891__$1;
(statearr_74898_76664[(1)] = (71));

} else {
var statearr_74899_76665 = state_74891__$1;
(statearr_74899_76665[(1)] = (72));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (62))){
var inst_74830 = (state_74891[(9)]);
var state_74891__$1 = state_74891;
var statearr_74901_76675 = state_74891__$1;
(statearr_74901_76675[(2)] = inst_74830);

(statearr_74901_76675[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (7))){
var inst_74677 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_74902 = state_74891;
(statearr_74902[(10)] = inst_74677);

return statearr_74902;
})();
var statearr_74903_76689 = state_74891__$1;
(statearr_74903_76689[(2)] = null);

(statearr_74903_76689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (59))){
var _ = (function (){var statearr_74904 = state_74891;
(statearr_74904[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74904;
})();
var state_74891__$1 = state_74891;
var ex74900 = (state_74891__$1[(2)]);
var statearr_74905_76712 = state_74891__$1;
(statearr_74905_76712[(5)] = ex74900);


if((ex74900 instanceof Error)){
var statearr_74907_76713 = state_74891__$1;
(statearr_74907_76713[(1)] = (10));

(statearr_74907_76713[(5)] = null);

} else {
throw ex74900;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (20))){
var _ = (function (){var statearr_74909 = state_74891;
(statearr_74909[(4)] = cljs.core.cons((39),(state_74891[(4)])));

return statearr_74909;
})();
var inst_74736 = staking_contract.apy();
var inst_74737 = cljs.core.async.interop.p__GT_c(inst_74736);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(40),inst_74737);
} else {
if((state_val_74892 === (72))){
var inst_74874 = (state_74891[(8)]);
var state_74891__$1 = state_74891;
var statearr_74911_76714 = state_74891__$1;
(statearr_74911_76714[(2)] = inst_74874);

(statearr_74911_76714[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (58))){
var inst_74818 = (state_74891[(2)]);
var _ = (function (){var statearr_74912 = state_74891;
(statearr_74912[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74912;
})();
var state_74891__$1 = state_74891;
var statearr_74913_76717 = state_74891__$1;
(statearr_74913_76717[(2)] = inst_74818);

(statearr_74913_76717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (60))){
var inst_74830 = (state_74891[(9)]);
var inst_74830__$1 = (state_74891[(2)]);
var inst_74831 = (inst_74830__$1 instanceof cljs.core.ExceptionInfo);
var inst_74832 = cljs.core.ex_data(inst_74830__$1);
var inst_74833 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74832);
var inst_74834 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74833,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74835 = ((inst_74831) && (inst_74834));
var state_74891__$1 = (function (){var statearr_74914 = state_74891;
(statearr_74914[(9)] = inst_74830__$1);

return statearr_74914;
})();
if(cljs.core.truth_(inst_74835)){
var statearr_74915_76720 = state_74891__$1;
(statearr_74915_76720[(1)] = (61));

} else {
var statearr_74916_76722 = state_74891__$1;
(statearr_74916_76722[(1)] = (62));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (27))){
var inst_74707 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_74918_76723 = state_74891__$1;
(statearr_74918_76723[(2)] = inst_74707);

(statearr_74918_76723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (1))){
var state_74891__$1 = state_74891;
var statearr_74919_76725 = state_74891__$1;
(statearr_74919_76725[(2)] = null);

(statearr_74919_76725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (69))){
var _ = (function (){var statearr_74920 = state_74891;
(statearr_74920[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74920;
})();
var state_74891__$1 = state_74891;
var ex74917 = (state_74891__$1[(2)]);
var statearr_74921_76726 = state_74891__$1;
(statearr_74921_76726[(5)] = ex74917);


if((ex74917 instanceof Error)){
var statearr_74922_76728 = state_74891__$1;
(statearr_74922_76728[(1)] = (4));

(statearr_74922_76728[(5)] = null);

} else {
throw ex74917;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (24))){
var inst_74730 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_74924_76729 = state_74891__$1;
(statearr_74924_76729[(2)] = inst_74730);

(statearr_74924_76729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (55))){
var inst_74808 = (state_74891[(11)]);
var inst_74808__$1 = (state_74891[(2)]);
var inst_74809 = (inst_74808__$1 instanceof cljs.core.ExceptionInfo);
var inst_74810 = cljs.core.ex_data(inst_74808__$1);
var inst_74811 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74810);
var inst_74812 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74811,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74813 = ((inst_74809) && (inst_74812));
var state_74891__$1 = (function (){var statearr_74925 = state_74891;
(statearr_74925[(11)] = inst_74808__$1);

return statearr_74925;
})();
if(cljs.core.truth_(inst_74813)){
var statearr_74926_76732 = state_74891__$1;
(statearr_74926_76732[(1)] = (56));

} else {
var statearr_74927_76733 = state_74891__$1;
(statearr_74927_76733[(1)] = (57));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (39))){
var _ = (function (){var statearr_74928 = state_74891;
(statearr_74928[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74928;
})();
var state_74891__$1 = state_74891;
var ex74923 = (state_74891__$1[(2)]);
var statearr_74929_76737 = state_74891__$1;
(statearr_74929_76737[(5)] = ex74923);


if((ex74923 instanceof Error)){
var statearr_74930_76738 = state_74891__$1;
(statearr_74930_76738[(1)] = (22));

(statearr_74930_76738[(5)] = null);

} else {
throw ex74923;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (46))){
var inst_74763 = (state_74891[(12)]);
var inst_74771 = (function(){throw inst_74763})();
var state_74891__$1 = state_74891;
var statearr_74932_76741 = state_74891__$1;
(statearr_74932_76741[(2)] = inst_74771);

(statearr_74932_76741[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (4))){
var inst_74676 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_74933 = state_74891;
(statearr_74933[(13)] = inst_74676);

return statearr_74933;
})();
var statearr_74934_76744 = state_74891__$1;
(statearr_74934_76744[(2)] = null);

(statearr_74934_76744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (54))){
var _ = (function (){var statearr_74935 = state_74891;
(statearr_74935[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74935;
})();
var state_74891__$1 = state_74891;
var ex74931 = (state_74891__$1[(2)]);
var statearr_74936_76745 = state_74891__$1;
(statearr_74936_76745[(5)] = ex74931);


if((ex74931 instanceof Error)){
var statearr_74937_76746 = state_74891__$1;
(statearr_74937_76746[(1)] = (13));

(statearr_74937_76746[(5)] = null);

} else {
throw ex74931;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (15))){
var inst_74799 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_74938_76749 = state_74891__$1;
(statearr_74938_76749[(2)] = inst_74799);

(statearr_74938_76749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (48))){
var inst_74774 = (state_74891[(2)]);
var _ = (function (){var statearr_74939 = state_74891;
(statearr_74939[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74939;
})();
var state_74891__$1 = state_74891;
var statearr_74940_76751 = state_74891__$1;
(statearr_74940_76751[(2)] = inst_74774);

(statearr_74940_76751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (50))){
var inst_74786 = (state_74891[(14)]);
var inst_74786__$1 = (state_74891[(2)]);
var inst_74787 = (inst_74786__$1 instanceof cljs.core.ExceptionInfo);
var inst_74788 = cljs.core.ex_data(inst_74786__$1);
var inst_74789 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74788);
var inst_74790 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74789,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74791 = ((inst_74787) && (inst_74790));
var state_74891__$1 = (function (){var statearr_74941 = state_74891;
(statearr_74941[(14)] = inst_74786__$1);

return statearr_74941;
})();
if(cljs.core.truth_(inst_74791)){
var statearr_74942_76754 = state_74891__$1;
(statearr_74942_76754[(1)] = (51));

} else {
var statearr_74943_76755 = state_74891__$1;
(statearr_74943_76755[(1)] = (52));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (21))){
var inst_74754 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_74944_76757 = state_74891__$1;
(statearr_74944_76757[(2)] = inst_74754);

(statearr_74944_76757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (31))){
var inst_74693 = (state_74891[(15)]);
var inst_74701 = (function(){throw inst_74693})();
var state_74891__$1 = state_74891;
var statearr_74945_76758 = state_74891__$1;
(statearr_74945_76758[(2)] = inst_74701);

(statearr_74945_76758[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (32))){
var inst_74693 = (state_74891[(15)]);
var state_74891__$1 = state_74891;
var statearr_74946_76760 = state_74891__$1;
(statearr_74946_76760[(2)] = inst_74693);

(statearr_74946_76760[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (40))){
var inst_74739 = (state_74891[(16)]);
var inst_74739__$1 = (state_74891[(2)]);
var inst_74741 = (inst_74739__$1 instanceof cljs.core.ExceptionInfo);
var inst_74742 = cljs.core.ex_data(inst_74739__$1);
var inst_74743 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74742);
var inst_74744 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74743,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74745 = ((inst_74741) && (inst_74744));
var state_74891__$1 = (function (){var statearr_74947 = state_74891;
(statearr_74947[(16)] = inst_74739__$1);

return statearr_74947;
})();
if(cljs.core.truth_(inst_74745)){
var statearr_74948_76764 = state_74891__$1;
(statearr_74948_76764[(1)] = (41));

} else {
var statearr_74949_76765 = state_74891__$1;
(statearr_74949_76765[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (56))){
var inst_74808 = (state_74891[(11)]);
var inst_74815 = (function(){throw inst_74808})();
var state_74891__$1 = state_74891;
var statearr_74950_76767 = state_74891__$1;
(statearr_74950_76767[(2)] = inst_74815);

(statearr_74950_76767[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (33))){
var inst_74704 = (state_74891[(2)]);
var _ = (function (){var statearr_74952 = state_74891;
(statearr_74952[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74952;
})();
var state_74891__$1 = state_74891;
var statearr_74954_76768 = state_74891__$1;
(statearr_74954_76768[(2)] = inst_74704);

(statearr_74954_76768[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (13))){
var inst_74679 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_74956 = state_74891;
(statearr_74956[(17)] = inst_74679);

return statearr_74956;
})();
var statearr_74957_76773 = state_74891__$1;
(statearr_74957_76773[(2)] = null);

(statearr_74957_76773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (22))){
var inst_74682 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_74958 = state_74891;
(statearr_74958[(18)] = inst_74682);

return statearr_74958;
})();
var statearr_74959_76784 = state_74891__$1;
(statearr_74959_76784[(2)] = null);

(statearr_74959_76784[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (36))){
var inst_74717 = (state_74891[(19)]);
var inst_74724 = (function(){throw inst_74717})();
var state_74891__$1 = state_74891;
var statearr_74960_76785 = state_74891__$1;
(statearr_74960_76785[(2)] = inst_74724);

(statearr_74960_76785[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (41))){
var inst_74739 = (state_74891[(16)]);
var inst_74747 = (function(){throw inst_74739})();
var state_74891__$1 = state_74891;
var statearr_74961_76786 = state_74891__$1;
(statearr_74961_76786[(2)] = inst_74747);

(statearr_74961_76786[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (43))){
var inst_74751 = (state_74891[(2)]);
var _ = (function (){var statearr_74963 = state_74891;
(statearr_74963[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74963;
})();
var state_74891__$1 = state_74891;
var statearr_74964_76788 = state_74891__$1;
(statearr_74964_76788[(2)] = inst_74751);

(statearr_74964_76788[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (61))){
var inst_74830 = (state_74891[(9)]);
var inst_74837 = (function(){throw inst_74830})();
var state_74891__$1 = state_74891;
var statearr_74966_76791 = state_74891__$1;
(statearr_74966_76791[(2)] = inst_74837);

(statearr_74966_76791[(1)] = (63));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (29))){
var _ = (function (){var statearr_74967 = state_74891;
(statearr_74967[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74967;
})();
var state_74891__$1 = state_74891;
var ex74962 = (state_74891__$1[(2)]);
var statearr_74968_76793 = state_74891__$1;
(statearr_74968_76793[(5)] = ex74962);


if((ex74962 instanceof Error)){
var statearr_74969_76794 = state_74891__$1;
(statearr_74969_76794[(1)] = (28));

(statearr_74969_76794[(5)] = null);

} else {
throw ex74962;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (44))){
var _ = (function (){var statearr_74971 = state_74891;
(statearr_74971[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74971;
})();
var state_74891__$1 = state_74891;
var ex74965 = (state_74891__$1[(2)]);
var statearr_74973_76796 = state_74891__$1;
(statearr_74973_76796[(5)] = ex74965);


if((ex74965 instanceof Error)){
var statearr_74974_76798 = state_74891__$1;
(statearr_74974_76798[(1)] = (19));

(statearr_74974_76798[(5)] = null);

} else {
throw ex74965;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (6))){
var inst_74865 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_74977_76801 = state_74891__$1;
(statearr_74977_76801[(2)] = inst_74865);

(statearr_74977_76801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (28))){
var inst_74684 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_74978 = state_74891;
(statearr_74978[(20)] = inst_74684);

return statearr_74978;
})();
var statearr_74979_76803 = state_74891__$1;
(statearr_74979_76803[(2)] = null);

(statearr_74979_76803[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (64))){
var _ = (function (){var statearr_74980 = state_74891;
(statearr_74980[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74980;
})();
var state_74891__$1 = state_74891;
var ex74975 = (state_74891__$1[(2)]);
var statearr_74981_76805 = state_74891__$1;
(statearr_74981_76805[(5)] = ex74975);


if((ex74975 instanceof Error)){
var statearr_74982_76806 = state_74891__$1;
(statearr_74982_76806[(1)] = (7));

(statearr_74982_76806[(5)] = null);

} else {
throw ex74975;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (51))){
var inst_74786 = (state_74891[(14)]);
var inst_74793 = (function(){throw inst_74786})();
var state_74891__$1 = state_74891;
var statearr_74984_76807 = state_74891__$1;
(statearr_74984_76807[(2)] = inst_74793);

(statearr_74984_76807[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (25))){
var inst_74683 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_74985 = state_74891;
(statearr_74985[(21)] = inst_74683);

return statearr_74985;
})();
var statearr_74986_76819 = state_74891__$1;
(statearr_74986_76819[(2)] = null);

(statearr_74986_76819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (34))){
var _ = (function (){var statearr_74987 = state_74891;
(statearr_74987[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_74987;
})();
var state_74891__$1 = state_74891;
var ex74983 = (state_74891__$1[(2)]);
var statearr_74988_76823 = state_74891__$1;
(statearr_74988_76823[(5)] = ex74983);


if((ex74983 instanceof Error)){
var statearr_74989_76824 = state_74891__$1;
(statearr_74989_76824[(1)] = (25));

(statearr_74989_76824[(5)] = null);

} else {
throw ex74983;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (17))){
var _ = (function (){var statearr_74990 = state_74891;
(statearr_74990[(4)] = cljs.core.cons((44),(state_74891[(4)])));

return statearr_74990;
})();
var inst_74760 = staking_contract.token();
var inst_74761 = cljs.core.async.interop.p__GT_c(inst_74760);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(45),inst_74761);
} else {
if((state_val_74892 === (3))){
var inst_74887 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_74891__$1,inst_74887);
} else {
if((state_val_74892 === (12))){
var inst_74821 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_74991_76828 = state_74891__$1;
(statearr_74991_76828[(2)] = inst_74821);

(statearr_74991_76828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (2))){
var _ = (function (){var statearr_74994 = state_74891;
(statearr_74994[(4)] = cljs.core.cons((69),(state_74891[(4)])));

return statearr_74994;
})();
var inst_74871 = staking_contract.rewardsToken();
var inst_74872 = cljs.core.async.interop.p__GT_c(inst_74871);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(70),inst_74872);
} else {
if((state_val_74892 === (66))){
var inst_74852 = (state_74891[(7)]);
var inst_74859 = (function(){throw inst_74852})();
var state_74891__$1 = state_74891;
var statearr_74995_76831 = state_74891__$1;
(statearr_74995_76831[(2)] = inst_74859);

(statearr_74995_76831[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (23))){
var _ = (function (){var statearr_74996 = state_74891;
(statearr_74996[(4)] = cljs.core.cons((34),(state_74891[(4)])));

return statearr_74996;
})();
var inst_74714 = staking_contract.boostToken();
var inst_74715 = cljs.core.async.interop.p__GT_c(inst_74714);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(35),inst_74715);
} else {
if((state_val_74892 === (47))){
var inst_74763 = (state_74891[(12)]);
var state_74891__$1 = state_74891;
var statearr_74997_76833 = state_74891__$1;
(statearr_74997_76833[(2)] = inst_74763);

(statearr_74997_76833[(1)] = (48));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (35))){
var inst_74717 = (state_74891[(19)]);
var inst_74717__$1 = (state_74891[(2)]);
var inst_74718 = (inst_74717__$1 instanceof cljs.core.ExceptionInfo);
var inst_74719 = cljs.core.ex_data(inst_74717__$1);
var inst_74720 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74719);
var inst_74721 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74720,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74722 = ((inst_74718) && (inst_74721));
var state_74891__$1 = (function (){var statearr_74998 = state_74891;
(statearr_74998[(19)] = inst_74717__$1);

return statearr_74998;
})();
if(cljs.core.truth_(inst_74722)){
var statearr_74999_76837 = state_74891__$1;
(statearr_74999_76837[(1)] = (36));

} else {
var statearr_75000_76838 = state_74891__$1;
(statearr_75000_76838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (19))){
var inst_74681 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_75001 = state_74891;
(statearr_75001[(22)] = inst_74681);

return statearr_75001;
})();
var statearr_75003_76840 = state_74891__$1;
(statearr_75003_76840[(2)] = null);

(statearr_75003_76840[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (57))){
var inst_74808 = (state_74891[(11)]);
var state_74891__$1 = state_74891;
var statearr_75005_76841 = state_74891__$1;
(statearr_75005_76841[(2)] = inst_74808);

(statearr_75005_76841[(1)] = (58));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (68))){
var inst_74862 = (state_74891[(2)]);
var _ = (function (){var statearr_75006 = state_74891;
(statearr_75006[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_75006;
})();
var state_74891__$1 = state_74891;
var statearr_75007_76846 = state_74891__$1;
(statearr_75007_76846[(2)] = inst_74862);

(statearr_75007_76846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (11))){
var _ = (function (){var statearr_75008 = state_74891;
(statearr_75008[(4)] = cljs.core.cons((54),(state_74891[(4)])));

return statearr_75008;
})();
var inst_74805 = staking_contract.yam();
var inst_74806 = cljs.core.async.interop.p__GT_c(inst_74805);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(55),inst_74806);
} else {
if((state_val_74892 === (9))){
var inst_74843 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_75009_76861 = state_74891__$1;
(statearr_75009_76861[(2)] = inst_74843);

(statearr_75009_76861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (5))){
var _ = (function (){var statearr_75010 = state_74891;
(statearr_75010[(4)] = cljs.core.cons((64),(state_74891[(4)])));

return statearr_75010;
})();
var inst_74849 = staking_contract.sushi();
var inst_74850 = cljs.core.async.interop.p__GT_c(inst_74849);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(65),inst_74850);
} else {
if((state_val_74892 === (14))){
var _ = (function (){var statearr_75012 = state_74891;
(statearr_75012[(4)] = cljs.core.cons((49),(state_74891[(4)])));

return statearr_75012;
})();
var inst_74783 = staking_contract.sashimi();
var inst_74784 = cljs.core.async.interop.p__GT_c(inst_74783);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(50),inst_74784);
} else {
if((state_val_74892 === (45))){
var inst_74763 = (state_74891[(12)]);
var inst_74763__$1 = (state_74891[(2)]);
var inst_74765 = (inst_74763__$1 instanceof cljs.core.ExceptionInfo);
var inst_74766 = cljs.core.ex_data(inst_74763__$1);
var inst_74767 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74766);
var inst_74768 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74767,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74769 = ((inst_74765) && (inst_74768));
var state_74891__$1 = (function (){var statearr_75013 = state_74891;
(statearr_75013[(12)] = inst_74763__$1);

return statearr_75013;
})();
if(cljs.core.truth_(inst_74769)){
var statearr_75014_76863 = state_74891__$1;
(statearr_75014_76863[(1)] = (46));

} else {
var statearr_75015_76865 = state_74891__$1;
(statearr_75015_76865[(1)] = (47));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (53))){
var inst_74796 = (state_74891[(2)]);
var _ = (function (){var statearr_75018 = state_74891;
(statearr_75018[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_75018;
})();
var state_74891__$1 = state_74891;
var statearr_75019_76867 = state_74891__$1;
(statearr_75019_76867[(2)] = inst_74796);

(statearr_75019_76867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (26))){
var _ = (function (){var statearr_75021 = state_74891;
(statearr_75021[(4)] = cljs.core.cons((29),(state_74891[(4)])));

return statearr_75021;
})();
var inst_74690 = staking_contract.cream();
var inst_74691 = cljs.core.async.interop.p__GT_c(inst_74690);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(30),inst_74691);
} else {
if((state_val_74892 === (16))){
var inst_74680 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_75022 = state_74891;
(statearr_75022[(23)] = inst_74680);

return statearr_75022;
})();
var statearr_75023_76870 = state_74891__$1;
(statearr_75023_76870[(2)] = null);

(statearr_75023_76870[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (38))){
var inst_74727 = (state_74891[(2)]);
var _ = (function (){var statearr_75024 = state_74891;
(statearr_75024[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_75024;
})();
var state_74891__$1 = state_74891;
var statearr_75025_76872 = state_74891__$1;
(statearr_75025_76872[(2)] = inst_74727);

(statearr_75025_76872[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (30))){
var inst_74693 = (state_74891[(15)]);
var inst_74693__$1 = (state_74891[(2)]);
var inst_74695 = (inst_74693__$1 instanceof cljs.core.ExceptionInfo);
var inst_74696 = cljs.core.ex_data(inst_74693__$1);
var inst_74697 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_74696);
var inst_74698 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_74697,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_74699 = ((inst_74695) && (inst_74698));
var state_74891__$1 = (function (){var statearr_75026 = state_74891;
(statearr_75026[(15)] = inst_74693__$1);

return statearr_75026;
})();
if(cljs.core.truth_(inst_74699)){
var statearr_75027_76876 = state_74891__$1;
(statearr_75027_76876[(1)] = (31));

} else {
var statearr_75028_76877 = state_74891__$1;
(statearr_75028_76877[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (73))){
var inst_74884 = (state_74891[(2)]);
var _ = (function (){var statearr_75029 = state_74891;
(statearr_75029[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_75029;
})();
var state_74891__$1 = state_74891;
var statearr_75030_76879 = state_74891__$1;
(statearr_75030_76879[(2)] = inst_74884);

(statearr_75030_76879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (10))){
var inst_74678 = (state_74891[(2)]);
var state_74891__$1 = (function (){var statearr_75031 = state_74891;
(statearr_75031[(24)] = inst_74678);

return statearr_75031;
})();
var statearr_75032_76880 = state_74891__$1;
(statearr_75032_76880[(2)] = null);

(statearr_75032_76880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (18))){
var inst_74777 = (state_74891[(2)]);
var state_74891__$1 = state_74891;
var statearr_75034_76882 = state_74891__$1;
(statearr_75034_76882[(2)] = inst_74777);

(statearr_75034_76882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (52))){
var inst_74786 = (state_74891[(14)]);
var state_74891__$1 = state_74891;
var statearr_75036_76893 = state_74891__$1;
(statearr_75036_76893[(2)] = inst_74786);

(statearr_75036_76893[(1)] = (53));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (67))){
var inst_74852 = (state_74891[(7)]);
var state_74891__$1 = state_74891;
var statearr_75038_76894 = state_74891__$1;
(statearr_75038_76894[(2)] = inst_74852);

(statearr_75038_76894[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (71))){
var inst_74874 = (state_74891[(8)]);
var inst_74881 = (function(){throw inst_74874})();
var state_74891__$1 = state_74891;
var statearr_75040_76895 = state_74891__$1;
(statearr_75040_76895[(2)] = inst_74881);

(statearr_75040_76895[(1)] = (73));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (42))){
var inst_74739 = (state_74891[(16)]);
var state_74891__$1 = state_74891;
var statearr_75041_76896 = state_74891__$1;
(statearr_75041_76896[(2)] = inst_74739);

(statearr_75041_76896[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (37))){
var inst_74717 = (state_74891[(19)]);
var state_74891__$1 = state_74891;
var statearr_75042_76897 = state_74891__$1;
(statearr_75042_76897[(2)] = inst_74717);

(statearr_75042_76897[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (63))){
var inst_74840 = (state_74891[(2)]);
var _ = (function (){var statearr_75044 = state_74891;
(statearr_75044[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_75044;
})();
var state_74891__$1 = state_74891;
var statearr_75045_76898 = state_74891__$1;
(statearr_75045_76898[(2)] = inst_74840);

(statearr_75045_76898[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_74892 === (8))){
var _ = (function (){var statearr_75046 = state_74891;
(statearr_75046[(4)] = cljs.core.cons((59),(state_74891[(4)])));

return statearr_75046;
})();
var inst_74827 = staking_contract.rewardToken();
var inst_74828 = cljs.core.async.interop.p__GT_c(inst_74827);
var state_74891__$1 = state_74891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_74891__$1,(60),inst_74828);
} else {
if((state_val_74892 === (49))){
var _ = (function (){var statearr_75047 = state_74891;
(statearr_75047[(4)] = cljs.core.rest((state_74891[(4)])));

return statearr_75047;
})();
var state_74891__$1 = state_74891;
var ex75043 = (state_74891__$1[(2)]);
var statearr_75048_76903 = state_74891__$1;
(statearr_75048_76903[(5)] = ex75043);


if((ex75043 instanceof Error)){
var statearr_75049_76904 = state_74891__$1;
(statearr_75049_76904[(1)] = (16));

(statearr_75049_76904[(5)] = null);

} else {
throw ex75043;

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
var statearr_75051 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75051[(0)] = revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__);

(statearr_75051[(1)] = (1));

return statearr_75051;
});
var revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____1 = (function (state_74891){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_74891);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75052){var ex__52189__auto__ = e75052;
var statearr_75053_76906 = state_74891;
(statearr_75053_76906[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_74891[(4)]))){
var statearr_75054_76907 = state_74891;
(statearr_75054_76907[(1)] = cljs.core.first((state_74891[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76908 = state_74891;
state_74891 = G__76908;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__ = function(state_74891){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____1.call(this,state_74891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_rewards_token_failback_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75055 = f__52209__auto__();
(statearr_75055[(6)] = c__52208__auto__);

return statearr_75055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards.reward_methods = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rewardsToken","sushi","yam","sashimi","token","apy","boostToken","cream","mithShare","rewardToken"], null);
revert.rewards._LT_staking_rewards_token = (function revert$rewards$_LT_staking_rewards_token(staking_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75104){
var state_val_75105 = (state_75104[(1)]);
if((state_val_75105 === (7))){
var inst_75095 = (state_75104[(2)]);
var state_75104__$1 = state_75104;
var statearr_75106_76919 = state_75104__$1;
(statearr_75106_76919[(2)] = inst_75095);

(statearr_75106_76919[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (1))){
var inst_75061 = revert.ethereum._LT_get_bytecode(staking_address);
var state_75104__$1 = state_75104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75104__$1,(2),inst_75061);
} else {
if((state_val_75105 === (4))){
var inst_75097 = revert.rewards._LT_staking_rewards_token_failback(staking_address);
var state_75104__$1 = state_75104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75104__$1,(14),inst_75097);
} else {
if((state_val_75105 === (13))){
var inst_75092 = (state_75104[(2)]);
var _ = (function (){var statearr_75108 = state_75104;
(statearr_75108[(4)] = cljs.core.rest((state_75104[(4)])));

return statearr_75108;
})();
var state_75104__$1 = state_75104;
var statearr_75109_76920 = state_75104__$1;
(statearr_75109_76920[(2)] = inst_75092);

(statearr_75109_76920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (6))){
var inst_75068 = (state_75104[(7)]);
var inst_75070 = (state_75104[(8)]);
var _ = (function (){var statearr_75110 = state_75104;
(statearr_75110[(4)] = cljs.core.cons((9),(state_75104[(4)])));

return statearr_75110;
})();
var inst_75079 = cljs.core.js_invoke(inst_75070,inst_75068);
var inst_75080 = cljs.core.async.interop.p__GT_c(inst_75079);
var state_75104__$1 = state_75104;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75104__$1,(10),inst_75080);
} else {
if((state_val_75105 === (3))){
var inst_75070 = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var state_75104__$1 = (function (){var statearr_75111 = state_75104;
(statearr_75111[(8)] = inst_75070);

return statearr_75111;
})();
var statearr_75113_76921 = state_75104__$1;
(statearr_75113_76921[(2)] = null);

(statearr_75113_76921[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (12))){
var inst_75082 = (state_75104[(9)]);
var state_75104__$1 = state_75104;
var statearr_75114_76923 = state_75104__$1;
(statearr_75114_76923[(2)] = inst_75082);

(statearr_75114_76923[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (2))){
var inst_75068 = (state_75104[(7)]);
var inst_75063 = (state_75104[(2)]);
var inst_75064 = (function (){var contract_code = inst_75063;
return (function (method_name){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([method_name,revert.ethereum.has_method_QMARK_(contract_code,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name),"()"].join(''))]);
});
})();
var inst_75065 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(inst_75064,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([revert.rewards.reward_methods], 0));
var inst_75066 = (function (){var contract_code = inst_75063;
var tested_methods = inst_75065;
return (function (p1__75057_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__75057_SHARP_),true);
});
})();
var inst_75067 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_75066,inst_75065);
var inst_75068__$1 = cljs.core.ffirst(inst_75067);
var state_75104__$1 = (function (){var statearr_75116 = state_75104;
(statearr_75116[(7)] = inst_75068__$1);

return statearr_75116;
})();
if(cljs.core.truth_(inst_75068__$1)){
var statearr_75117_76927 = state_75104__$1;
(statearr_75117_76927[(1)] = (3));

} else {
var statearr_75118_76929 = state_75104__$1;
(statearr_75118_76929[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (11))){
var inst_75082 = (state_75104[(9)]);
var inst_75089 = (function(){throw inst_75082})();
var state_75104__$1 = state_75104;
var statearr_75119_76930 = state_75104__$1;
(statearr_75119_76930[(2)] = inst_75089);

(statearr_75119_76930[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (9))){
var _ = (function (){var statearr_75120 = state_75104;
(statearr_75120[(4)] = cljs.core.rest((state_75104[(4)])));

return statearr_75120;
})();
var state_75104__$1 = state_75104;
var ex75115 = (state_75104__$1[(2)]);
var statearr_75122_76932 = state_75104__$1;
(statearr_75122_76932[(5)] = ex75115);


if((ex75115 instanceof Error)){
var statearr_75123_76934 = state_75104__$1;
(statearr_75123_76934[(1)] = (8));

(statearr_75123_76934[(5)] = null);

} else {
throw ex75115;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (5))){
var inst_75101 = (state_75104[(2)]);
var state_75104__$1 = state_75104;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75104__$1,inst_75101);
} else {
if((state_val_75105 === (14))){
var inst_75099 = (state_75104[(2)]);
var state_75104__$1 = state_75104;
var statearr_75124_76935 = state_75104__$1;
(statearr_75124_76935[(2)] = inst_75099);

(statearr_75124_76935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (10))){
var inst_75082 = (state_75104[(9)]);
var inst_75082__$1 = (state_75104[(2)]);
var inst_75083 = (inst_75082__$1 instanceof cljs.core.ExceptionInfo);
var inst_75084 = cljs.core.ex_data(inst_75082__$1);
var inst_75085 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75084);
var inst_75086 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75085,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75087 = ((inst_75083) && (inst_75086));
var state_75104__$1 = (function (){var statearr_75126 = state_75104;
(statearr_75126[(9)] = inst_75082__$1);

return statearr_75126;
})();
if(cljs.core.truth_(inst_75087)){
var statearr_75127_76939 = state_75104__$1;
(statearr_75127_76939[(1)] = (11));

} else {
var statearr_75128_76940 = state_75104__$1;
(statearr_75128_76940[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75105 === (8))){
var inst_75068 = (state_75104[(7)]);
var inst_75071 = (state_75104[(2)]);
var inst_75072 = ["err getting staking token for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(staking_address),"with method:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_75068)].join('');
var inst_75073 = console.log(inst_75072);
var state_75104__$1 = (function (){var statearr_75129 = state_75104;
(statearr_75129[(10)] = inst_75071);

return statearr_75129;
})();
var statearr_75130_76943 = state_75104__$1;
(statearr_75130_76943[(2)] = inst_75073);

(statearr_75130_76943[(1)] = (7));


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
var statearr_75132 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75132[(0)] = revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__);

(statearr_75132[(1)] = (1));

return statearr_75132;
});
var revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____1 = (function (state_75104){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75104);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75133){var ex__52189__auto__ = e75133;
var statearr_75134_76947 = state_75104;
(statearr_75134_76947[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75104[(4)]))){
var statearr_75135_76948 = state_75104;
(statearr_75135_76948[(1)] = cljs.core.first((state_75104[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76949 = state_75104;
state_75104 = G__76949;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__ = function(state_75104){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____1.call(this,state_75104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_rewards_token_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75136 = f__52209__auto__();
(statearr_75136[(6)] = c__52208__auto__);

return statearr_75136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_sr_staked_lps = (function revert$rewards$_LT_sr_staked_lps(staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75141){
var state_val_75142 = (state_75141[(1)]);
if((state_val_75142 === (1))){
var inst_75137 = revert.ethereum._LT_user_token_balance(user_address,staking_address);
var state_75141__$1 = state_75141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75141__$1,(2),inst_75137);
} else {
if((state_val_75142 === (2))){
var inst_75139 = (state_75141[(2)]);
var state_75141__$1 = state_75141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75141__$1,inst_75139);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_75143 = [null,null,null,null,null,null,null];
(statearr_75143[(0)] = revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__);

(statearr_75143[(1)] = (1));

return statearr_75143;
});
var revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____1 = (function (state_75141){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75141);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75144){var ex__52189__auto__ = e75144;
var statearr_75145_76955 = state_75141;
(statearr_75145_76955[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75141[(4)]))){
var statearr_75146_76956 = state_75141;
(statearr_75146_76956[(1)] = cljs.core.first((state_75141[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76959 = state_75141;
state_75141 = G__76959;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__ = function(state_75141){
switch(arguments.length){
case 0:
return revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____1.call(this,state_75141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____0;
revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto____1;
return revert$rewards$_LT_sr_staked_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75147 = f__52209__auto__();
(statearr_75147[(6)] = c__52208__auto__);

return statearr_75147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staking_pool_lps = (function revert$rewards$_LT_staking_pool_lps(lp_address,staking_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75152){
var state_val_75153 = (state_75152[(1)]);
if((state_val_75153 === (1))){
var inst_75148 = revert.ethereum._LT_user_token_balance(staking_address,lp_address);
var state_75152__$1 = state_75152;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75152__$1,(2),inst_75148);
} else {
if((state_val_75153 === (2))){
var inst_75150 = (state_75152[(2)]);
var state_75152__$1 = state_75152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75152__$1,inst_75150);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____0 = (function (){
var statearr_75154 = [null,null,null,null,null,null,null];
(statearr_75154[(0)] = revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__);

(statearr_75154[(1)] = (1));

return statearr_75154;
});
var revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____1 = (function (state_75152){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75152);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75155){var ex__52189__auto__ = e75155;
var statearr_75156_76963 = state_75152;
(statearr_75156_76963[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75152[(4)]))){
var statearr_75157_76966 = state_75152;
(statearr_75157_76966[(1)] = cljs.core.first((state_75152[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76967 = state_75152;
state_75152 = G__76967;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__ = function(state_75152){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____1.call(this,state_75152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____0;
revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staking_pool_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75158 = f__52209__auto__();
(statearr_75158[(6)] = c__52208__auto__);

return statearr_75158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_total_pool_lps = (function revert$rewards$_LT_total_pool_lps(lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75176){
var state_val_75177 = (state_75176[(1)]);
if((state_val_75177 === (1))){
var inst_75159 = revert.ethereum.make_erc20(lp_address);
var inst_75160 = inst_75159.totalSupply();
var inst_75161 = cljs.core.async.interop.p__GT_c(inst_75160);
var state_75176__$1 = state_75176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75176__$1,(2),inst_75161);
} else {
if((state_val_75177 === (2))){
var inst_75163 = (state_75176[(7)]);
var inst_75163__$1 = (state_75176[(2)]);
var inst_75164 = (inst_75163__$1 instanceof cljs.core.ExceptionInfo);
var inst_75165 = cljs.core.ex_data(inst_75163__$1);
var inst_75166 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75165);
var inst_75167 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75166,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75168 = ((inst_75164) && (inst_75167));
var state_75176__$1 = (function (){var statearr_75182 = state_75176;
(statearr_75182[(7)] = inst_75163__$1);

return statearr_75182;
})();
if(cljs.core.truth_(inst_75168)){
var statearr_75184_76973 = state_75176__$1;
(statearr_75184_76973[(1)] = (3));

} else {
var statearr_75185_76975 = state_75176__$1;
(statearr_75185_76975[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75177 === (3))){
var inst_75163 = (state_75176[(7)]);
var inst_75170 = (function(){throw inst_75163})();
var state_75176__$1 = state_75176;
var statearr_75186_76976 = state_75176__$1;
(statearr_75186_76976[(2)] = inst_75170);

(statearr_75186_76976[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75177 === (4))){
var inst_75163 = (state_75176[(7)]);
var state_75176__$1 = state_75176;
var statearr_75187_76977 = state_75176__$1;
(statearr_75187_76977[(2)] = inst_75163);

(statearr_75187_76977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75177 === (5))){
var inst_75173 = (state_75176[(2)]);
var inst_75174 = revert.utils.ebn__GT_bn(inst_75173,(18));
var state_75176__$1 = state_75176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75176__$1,inst_75174);
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
var statearr_75189 = [null,null,null,null,null,null,null,null];
(statearr_75189[(0)] = revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__);

(statearr_75189[(1)] = (1));

return statearr_75189;
});
var revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____1 = (function (state_75176){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75176);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75190){var ex__52189__auto__ = e75190;
var statearr_75191_76978 = state_75176;
(statearr_75191_76978[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75176[(4)]))){
var statearr_75192_76979 = state_75176;
(statearr_75192_76979[(1)] = cljs.core.first((state_75176[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76980 = state_75176;
state_75176 = G__76980;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__ = function(state_75176){
switch(arguments.length){
case 0:
return revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____1.call(this,state_75176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____0;
revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto____1;
return revert$rewards$_LT_total_pool_lps_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75193 = f__52209__auto__();
(statearr_75193[(6)] = c__52208__auto__);

return statearr_75193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_lp_pool_tokens = (function revert$rewards$_LT_lp_pool_tokens(lp_address){
var lp_contract = revert.ethereum.make_erc20(lp_address);
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75231){
var state_val_75232 = (state_75231[(1)]);
if((state_val_75232 === (7))){
var inst_75216 = (state_75231[(7)]);
var inst_75224 = (function(){throw inst_75216})();
var state_75231__$1 = state_75231;
var statearr_75234_76982 = state_75231__$1;
(statearr_75234_76982[(2)] = inst_75224);

(statearr_75234_76982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75232 === (1))){
var inst_75194 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75195 = lp_contract.token0();
var inst_75196 = cljs.core.async.interop.p__GT_c(inst_75195);
var state_75231__$1 = (function (){var statearr_75239 = state_75231;
(statearr_75239[(8)] = inst_75194);

return statearr_75239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75231__$1,(2),inst_75196);
} else {
if((state_val_75232 === (4))){
var inst_75198 = (state_75231[(9)]);
var state_75231__$1 = state_75231;
var statearr_75240_76983 = state_75231__$1;
(statearr_75240_76983[(2)] = inst_75198);

(statearr_75240_76983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75232 === (6))){
var inst_75216 = (state_75231[(7)]);
var inst_75216__$1 = (state_75231[(2)]);
var inst_75218 = (inst_75216__$1 instanceof cljs.core.ExceptionInfo);
var inst_75219 = cljs.core.ex_data(inst_75216__$1);
var inst_75220 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75219);
var inst_75221 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75220,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75222 = ((inst_75218) && (inst_75221));
var state_75231__$1 = (function (){var statearr_75241 = state_75231;
(statearr_75241[(7)] = inst_75216__$1);

return statearr_75241;
})();
if(cljs.core.truth_(inst_75222)){
var statearr_75243_76984 = state_75231__$1;
(statearr_75243_76984[(1)] = (7));

} else {
var statearr_75247_76985 = state_75231__$1;
(statearr_75247_76985[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75232 === (3))){
var inst_75198 = (state_75231[(9)]);
var inst_75206 = (function(){throw inst_75198})();
var state_75231__$1 = state_75231;
var statearr_75249_76986 = state_75231__$1;
(statearr_75249_76986[(2)] = inst_75206);

(statearr_75249_76986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75232 === (2))){
var inst_75198 = (state_75231[(9)]);
var inst_75198__$1 = (state_75231[(2)]);
var inst_75200 = (inst_75198__$1 instanceof cljs.core.ExceptionInfo);
var inst_75201 = cljs.core.ex_data(inst_75198__$1);
var inst_75202 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75201);
var inst_75203 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75202,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75204 = ((inst_75200) && (inst_75203));
var state_75231__$1 = (function (){var statearr_75250 = state_75231;
(statearr_75250[(9)] = inst_75198__$1);

return statearr_75250;
})();
if(cljs.core.truth_(inst_75204)){
var statearr_75251_76987 = state_75231__$1;
(statearr_75251_76987[(1)] = (3));

} else {
var statearr_75252_76988 = state_75231__$1;
(statearr_75252_76988[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75232 === (9))){
var inst_75194 = (state_75231[(8)]);
var inst_75209 = (state_75231[(10)]);
var inst_75227 = (state_75231[(2)]);
var inst_75228 = [inst_75209,inst_75227];
var inst_75229 = (new cljs.core.PersistentVector(null,2,(5),inst_75194,inst_75228,null));
var state_75231__$1 = state_75231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75231__$1,inst_75229);
} else {
if((state_val_75232 === (5))){
var inst_75209 = (state_75231[(2)]);
var inst_75213 = lp_contract.token1();
var inst_75214 = cljs.core.async.interop.p__GT_c(inst_75213);
var state_75231__$1 = (function (){var statearr_75254 = state_75231;
(statearr_75254[(10)] = inst_75209);

return statearr_75254;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75231__$1,(6),inst_75214);
} else {
if((state_val_75232 === (8))){
var inst_75216 = (state_75231[(7)]);
var state_75231__$1 = state_75231;
var statearr_75255_76989 = state_75231__$1;
(statearr_75255_76989[(2)] = inst_75216);

(statearr_75255_76989[(1)] = (9));


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
var statearr_75256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_75256[(0)] = revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__);

(statearr_75256[(1)] = (1));

return statearr_75256;
});
var revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____1 = (function (state_75231){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75231);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75257){var ex__52189__auto__ = e75257;
var statearr_75258_76992 = state_75231;
(statearr_75258_76992[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75231[(4)]))){
var statearr_75260_76993 = state_75231;
(statearr_75260_76993[(1)] = cljs.core.first((state_75231[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__76994 = state_75231;
state_75231 = G__76994;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__ = function(state_75231){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____1.call(this,state_75231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_pool_tokens_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75261 = f__52209__auto__();
(statearr_75261[(6)] = c__52208__auto__);

return statearr_75261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_lp_pool_symbols = (function revert$rewards$_LT_lp_pool_symbols(lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75302){
var state_val_75303 = (state_75302[(1)]);
if((state_val_75303 === (7))){
var inst_75288 = (state_75302[(7)]);
var inst_75288__$1 = (state_75302[(2)]);
var inst_75289 = (inst_75288__$1 instanceof cljs.core.ExceptionInfo);
var inst_75290 = cljs.core.ex_data(inst_75288__$1);
var inst_75291 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75290);
var inst_75292 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75291,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75293 = ((inst_75289) && (inst_75292));
var state_75302__$1 = (function (){var statearr_75304 = state_75302;
(statearr_75304[(7)] = inst_75288__$1);

return statearr_75304;
})();
if(cljs.core.truth_(inst_75293)){
var statearr_75305_76997 = state_75302__$1;
(statearr_75305_76997[(1)] = (8));

} else {
var statearr_75306_76999 = state_75302__$1;
(statearr_75306_76999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75303 === (1))){
var inst_75262 = revert.rewards._LT_lp_pool_tokens(lp_address);
var state_75302__$1 = state_75302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75302__$1,(2),inst_75262);
} else {
if((state_val_75303 === (4))){
var inst_75273 = (state_75302[(8)]);
var inst_75281 = (function(){throw inst_75273})();
var state_75302__$1 = state_75302;
var statearr_75307_77002 = state_75302__$1;
(statearr_75307_77002[(2)] = inst_75281);

(statearr_75307_77002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75303 === (6))){
var inst_75268 = (state_75302[(9)]);
var inst_75284 = (state_75302[(2)]);
var inst_75285 = inst_75268.symbol();
var inst_75286 = cljs.core.async.interop.p__GT_c(inst_75285);
var state_75302__$1 = (function (){var statearr_75308 = state_75302;
(statearr_75308[(10)] = inst_75284);

return statearr_75308;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75302__$1,(7),inst_75286);
} else {
if((state_val_75303 === (3))){
var inst_75273 = (state_75302[(8)]);
var inst_75273__$1 = (state_75302[(2)]);
var inst_75275 = (inst_75273__$1 instanceof cljs.core.ExceptionInfo);
var inst_75276 = cljs.core.ex_data(inst_75273__$1);
var inst_75277 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75276);
var inst_75278 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75277,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75279 = ((inst_75275) && (inst_75278));
var state_75302__$1 = (function (){var statearr_75309 = state_75302;
(statearr_75309[(8)] = inst_75273__$1);

return statearr_75309;
})();
if(cljs.core.truth_(inst_75279)){
var statearr_75310_77004 = state_75302__$1;
(statearr_75310_77004[(1)] = (4));

} else {
var statearr_75311_77006 = state_75302__$1;
(statearr_75311_77006[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75303 === (2))){
var inst_75264 = (state_75302[(2)]);
var inst_75265 = cljs.core.first(inst_75264);
var inst_75266 = revert.ethereum.make_erc20(inst_75265);
var inst_75267 = cljs.core.second(inst_75264);
var inst_75268 = revert.ethereum.make_erc20(inst_75267);
var inst_75269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75270 = inst_75266.symbol();
var inst_75271 = cljs.core.async.interop.p__GT_c(inst_75270);
var state_75302__$1 = (function (){var statearr_75313 = state_75302;
(statearr_75313[(9)] = inst_75268);

(statearr_75313[(11)] = inst_75269);

return statearr_75313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75302__$1,(3),inst_75271);
} else {
if((state_val_75303 === (9))){
var inst_75288 = (state_75302[(7)]);
var state_75302__$1 = state_75302;
var statearr_75314_77010 = state_75302__$1;
(statearr_75314_77010[(2)] = inst_75288);

(statearr_75314_77010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75303 === (5))){
var inst_75273 = (state_75302[(8)]);
var state_75302__$1 = state_75302;
var statearr_75315_77012 = state_75302__$1;
(statearr_75315_77012[(2)] = inst_75273);

(statearr_75315_77012[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75303 === (10))){
var inst_75284 = (state_75302[(10)]);
var inst_75269 = (state_75302[(11)]);
var inst_75298 = (state_75302[(2)]);
var inst_75299 = [inst_75284,inst_75298];
var inst_75300 = (new cljs.core.PersistentVector(null,2,(5),inst_75269,inst_75299,null));
var state_75302__$1 = state_75302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75302__$1,inst_75300);
} else {
if((state_val_75303 === (8))){
var inst_75288 = (state_75302[(7)]);
var inst_75295 = (function(){throw inst_75288})();
var state_75302__$1 = state_75302;
var statearr_75316_77014 = state_75302__$1;
(statearr_75316_77014[(2)] = inst_75295);

(statearr_75316_77014[(1)] = (10));


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
var statearr_75317 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75317[(0)] = revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__);

(statearr_75317[(1)] = (1));

return statearr_75317;
});
var revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____1 = (function (state_75302){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75302);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75318){var ex__52189__auto__ = e75318;
var statearr_75319_77017 = state_75302;
(statearr_75319_77017[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75302[(4)]))){
var statearr_75320_77019 = state_75302;
(statearr_75320_77019[(1)] = cljs.core.first((state_75302[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77021 = state_75302;
state_75302 = G__77021;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__ = function(state_75302){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____1.call(this,state_75302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_pool_symbols_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75323 = f__52209__auto__();
(statearr_75323[(6)] = c__52208__auto__);

return statearr_75323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_total_pool_reserves = (function revert$rewards$_LT_total_pool_reserves(lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75348){
var state_val_75349 = (state_75348[(1)]);
if((state_val_75349 === (1))){
var inst_75324 = (state_75348[(7)]);
var inst_75324__$1 = revert.ethereum.make_erc20(lp_address);
var inst_75325 = revert.pools._LT_token0(inst_75324__$1);
var state_75348__$1 = (function (){var statearr_75357 = state_75348;
(statearr_75357[(7)] = inst_75324__$1);

return statearr_75357;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75348__$1,(2),inst_75325);
} else {
if((state_val_75349 === (2))){
var inst_75324 = (state_75348[(7)]);
var inst_75327 = (state_75348[(2)]);
var inst_75328 = revert.pools._LT_token1(inst_75324);
var state_75348__$1 = (function (){var statearr_75358 = state_75348;
(statearr_75358[(8)] = inst_75327);

return statearr_75358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75348__$1,(3),inst_75328);
} else {
if((state_val_75349 === (3))){
var inst_75327 = (state_75348[(8)]);
var inst_75330 = (state_75348[(2)]);
var inst_75331 = revert.ethereum._LT_token_decimals(inst_75327);
var state_75348__$1 = (function (){var statearr_75359 = state_75348;
(statearr_75359[(9)] = inst_75330);

return statearr_75359;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75348__$1,(4),inst_75331);
} else {
if((state_val_75349 === (4))){
var inst_75330 = (state_75348[(9)]);
var inst_75333 = (state_75348[(2)]);
var inst_75334 = revert.ethereum._LT_token_decimals(inst_75330);
var state_75348__$1 = (function (){var statearr_75360 = state_75348;
(statearr_75360[(10)] = inst_75333);

return statearr_75360;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75348__$1,(5),inst_75334);
} else {
if((state_val_75349 === (5))){
var inst_75324 = (state_75348[(7)]);
var inst_75336 = (state_75348[(2)]);
var inst_75337 = revert.pools._LT_get_reserves(inst_75324);
var state_75348__$1 = (function (){var statearr_75361 = state_75348;
(statearr_75361[(11)] = inst_75336);

return statearr_75361;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75348__$1,(6),inst_75337);
} else {
if((state_val_75349 === (6))){
var inst_75336 = (state_75348[(11)]);
var inst_75333 = (state_75348[(10)]);
var inst_75339 = (state_75348[(2)]);
var inst_75340 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_75341 = cljs.core.first(inst_75339);
var inst_75342 = revert.utils.ebn__GT_bn(inst_75341,inst_75333);
var inst_75343 = cljs.core.second(inst_75339);
var inst_75344 = revert.utils.ebn__GT_bn(inst_75343,inst_75336);
var inst_75345 = [inst_75342,inst_75344];
var inst_75346 = (new cljs.core.PersistentVector(null,2,(5),inst_75340,inst_75345,null));
var state_75348__$1 = state_75348;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75348__$1,inst_75346);
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
var statearr_75369 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75369[(0)] = revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__);

(statearr_75369[(1)] = (1));

return statearr_75369;
});
var revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____1 = (function (state_75348){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75348);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75370){var ex__52189__auto__ = e75370;
var statearr_75371_77034 = state_75348;
(statearr_75371_77034[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75348[(4)]))){
var statearr_75372_77035 = state_75348;
(statearr_75372_77035[(1)] = cljs.core.first((state_75348[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77036 = state_75348;
state_75348 = G__77036;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__ = function(state_75348){
switch(arguments.length){
case 0:
return revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____1.call(this,state_75348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____0;
revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto____1;
return revert$rewards$_LT_total_pool_reserves_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75375 = f__52209__auto__();
(statearr_75375[(6)] = c__52208__auto__);

return statearr_75375;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75401){
var state_val_75402 = (state_75401[(1)]);
if((state_val_75402 === (1))){
var inst_75386 = contract.poolLength();
var inst_75387 = cljs.core.async.interop.p__GT_c(inst_75386);
var state_75401__$1 = state_75401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75401__$1,(2),inst_75387);
} else {
if((state_val_75402 === (2))){
var inst_75389 = (state_75401[(7)]);
var inst_75389__$1 = (state_75401[(2)]);
var inst_75390 = (inst_75389__$1 instanceof cljs.core.ExceptionInfo);
var inst_75391 = cljs.core.ex_data(inst_75389__$1);
var inst_75392 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75391);
var inst_75393 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75392,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75394 = ((inst_75390) && (inst_75393));
var state_75401__$1 = (function (){var statearr_75407 = state_75401;
(statearr_75407[(7)] = inst_75389__$1);

return statearr_75407;
})();
if(cljs.core.truth_(inst_75394)){
var statearr_75409_77042 = state_75401__$1;
(statearr_75409_77042[(1)] = (3));

} else {
var statearr_75410_77044 = state_75401__$1;
(statearr_75410_77044[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75402 === (3))){
var inst_75389 = (state_75401[(7)]);
var inst_75396 = (function(){throw inst_75389})();
var state_75401__$1 = state_75401;
var statearr_75411_77046 = state_75401__$1;
(statearr_75411_77046[(2)] = inst_75396);

(statearr_75411_77046[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75402 === (4))){
var inst_75389 = (state_75401[(7)]);
var state_75401__$1 = state_75401;
var statearr_75412_77047 = state_75401__$1;
(statearr_75412_77047[(2)] = inst_75389);

(statearr_75412_77047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75402 === (5))){
var inst_75399 = (state_75401[(2)]);
var state_75401__$1 = state_75401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75401__$1,inst_75399);
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
var statearr_75413 = [null,null,null,null,null,null,null,null];
(statearr_75413[(0)] = revert$rewards$_LT_pool_length_$_state_machine__52186__auto__);

(statearr_75413[(1)] = (1));

return statearr_75413;
});
var revert$rewards$_LT_pool_length_$_state_machine__52186__auto____1 = (function (state_75401){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75401);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75414){var ex__52189__auto__ = e75414;
var statearr_75415_77050 = state_75401;
(statearr_75415_77050[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75401[(4)]))){
var statearr_75416_77051 = state_75401;
(statearr_75416_77051[(1)] = cljs.core.first((state_75401[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77052 = state_75401;
state_75401 = G__77052;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_pool_length_$_state_machine__52186__auto__ = function(state_75401){
switch(arguments.length){
case 0:
return revert$rewards$_LT_pool_length_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_pool_length_$_state_machine__52186__auto____1.call(this,state_75401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_pool_length_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_pool_length_$_state_machine__52186__auto____0;
revert$rewards$_LT_pool_length_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_pool_length_$_state_machine__52186__auto____1;
return revert$rewards$_LT_pool_length_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75417 = f__52209__auto__();
(statearr_75417[(6)] = c__52208__auto__);

return statearr_75417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_pool_info = (function revert$rewards$_LT_pool_info(contract,pid){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75433){
var state_val_75434 = (state_75433[(1)]);
if((state_val_75434 === (1))){
var inst_75418 = contract.poolInfo(pid);
var inst_75419 = cljs.core.async.interop.p__GT_c(inst_75418);
var state_75433__$1 = state_75433;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75433__$1,(2),inst_75419);
} else {
if((state_val_75434 === (2))){
var inst_75421 = (state_75433[(7)]);
var inst_75421__$1 = (state_75433[(2)]);
var inst_75422 = (inst_75421__$1 instanceof cljs.core.ExceptionInfo);
var inst_75423 = cljs.core.ex_data(inst_75421__$1);
var inst_75424 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75423);
var inst_75425 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75424,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75426 = ((inst_75422) && (inst_75425));
var state_75433__$1 = (function (){var statearr_75435 = state_75433;
(statearr_75435[(7)] = inst_75421__$1);

return statearr_75435;
})();
if(cljs.core.truth_(inst_75426)){
var statearr_75436_77057 = state_75433__$1;
(statearr_75436_77057[(1)] = (3));

} else {
var statearr_75437_77058 = state_75433__$1;
(statearr_75437_77058[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75434 === (3))){
var inst_75421 = (state_75433[(7)]);
var inst_75428 = (function(){throw inst_75421})();
var state_75433__$1 = state_75433;
var statearr_75438_77060 = state_75433__$1;
(statearr_75438_77060[(2)] = inst_75428);

(statearr_75438_77060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75434 === (4))){
var inst_75421 = (state_75433[(7)]);
var state_75433__$1 = state_75433;
var statearr_75439_77061 = state_75433__$1;
(statearr_75439_77061[(2)] = inst_75421);

(statearr_75439_77061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75434 === (5))){
var inst_75431 = (state_75433[(2)]);
var state_75433__$1 = state_75433;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75433__$1,inst_75431);
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
var statearr_75440 = [null,null,null,null,null,null,null,null];
(statearr_75440[(0)] = revert$rewards$_LT_pool_info_$_state_machine__52186__auto__);

(statearr_75440[(1)] = (1));

return statearr_75440;
});
var revert$rewards$_LT_pool_info_$_state_machine__52186__auto____1 = (function (state_75433){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75433);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75441){var ex__52189__auto__ = e75441;
var statearr_75442_77064 = state_75433;
(statearr_75442_77064[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75433[(4)]))){
var statearr_75443_77065 = state_75433;
(statearr_75443_77065[(1)] = cljs.core.first((state_75433[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77066 = state_75433;
state_75433 = G__77066;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_pool_info_$_state_machine__52186__auto__ = function(state_75433){
switch(arguments.length){
case 0:
return revert$rewards$_LT_pool_info_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_pool_info_$_state_machine__52186__auto____1.call(this,state_75433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_pool_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_pool_info_$_state_machine__52186__auto____0;
revert$rewards$_LT_pool_info_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_pool_info_$_state_machine__52186__auto____1;
return revert$rewards$_LT_pool_info_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75444 = f__52209__auto__();
(statearr_75444[(6)] = c__52208__auto__);

return statearr_75444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_make_sashimi_pool_index = (function revert$rewards$_LT_make_sashimi_pool_index(staking_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75465){
var state_val_75466 = (state_75465[(1)]);
if((state_val_75466 === (1))){
var inst_75446 = (state_75465[(7)]);
var inst_75446__$1 = revert.ethereum.make_contract(revert.ethereum.sashimi_abi,staking_address);
var inst_75448 = revert.rewards._LT_pool_length(inst_75446__$1);
var state_75465__$1 = (function (){var statearr_75467 = state_75465;
(statearr_75467[(7)] = inst_75446__$1);

return statearr_75467;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75465__$1,(2),inst_75448);
} else {
if((state_val_75466 === (2))){
var inst_75446 = (state_75465[(7)]);
var inst_75450 = (state_75465[(2)]);
var inst_75454 = (function (){var contract = inst_75446;
var many_pools = inst_75450;
return (function (p){
var c__52208__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75477){
var state_val_75478 = (state_75477[(1)]);
if((state_val_75478 === (1))){
var inst_75468 = revert.rewards._LT_pool_info(contract,p);
var state_75477__$1 = state_75477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75477__$1,(2),inst_75468);
} else {
if((state_val_75478 === (2))){
var inst_75470 = (state_75477[(2)]);
var inst_75471 = cljs.core.first(inst_75470);
var inst_75472 = clojure.string.lower_case(inst_75471);
var inst_75473 = [inst_75472];
var inst_75474 = [p];
var inst_75475 = cljs.core.PersistentHashMap.fromArrays(inst_75473,inst_75474);
var state_75477__$1 = state_75477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75477__$1,inst_75475);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0 = (function (){
var statearr_75486 = [null,null,null,null,null,null,null];
(statearr_75486[(0)] = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__);

(statearr_75486[(1)] = (1));

return statearr_75486;
});
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1 = (function (state_75477){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75477);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75488){var ex__52189__auto__ = e75488;
var statearr_75489_77072 = state_75477;
(statearr_75489_77072[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75477[(4)]))){
var statearr_75490_77073 = state_75477;
(statearr_75490_77073[(1)] = cljs.core.first((state_75477[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77074 = state_75477;
state_75477 = G__77074;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = function(state_75477){
switch(arguments.length){
case 0:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1.call(this,state_75477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0;
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1;
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75493 = f__52209__auto__();
(statearr_75493[(6)] = c__52208__auto____$1);

return statearr_75493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto____$1;
});
})();
var inst_75455 = cljs.core.range.cljs$core$IFn$_invoke$arity$1(inst_75450);
var inst_75456 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_75454,inst_75455);
var inst_75458 = cljs.core.PersistentHashMap.EMPTY;
var inst_75459 = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(inst_75456);
var inst_75460 = cljs.core.async.reduce(cljs.core.merge,inst_75458,inst_75459);
var state_75465__$1 = state_75465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75465__$1,(3),inst_75460);
} else {
if((state_val_75466 === (3))){
var inst_75462 = (state_75465[(2)]);
var state_75465__$1 = state_75465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75465__$1,inst_75462);
} else {
return null;
}
}
}
});
return (function() {
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0 = (function (){
var statearr_75495 = [null,null,null,null,null,null,null,null];
(statearr_75495[(0)] = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__);

(statearr_75495[(1)] = (1));

return statearr_75495;
});
var revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1 = (function (state_75465){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75465);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75496){var ex__52189__auto__ = e75496;
var statearr_75497_77078 = state_75465;
(statearr_75497_77078[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75465[(4)]))){
var statearr_75498_77079 = state_75465;
(statearr_75498_77079[(1)] = cljs.core.first((state_75465[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77080 = state_75465;
state_75465 = G__77080;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__ = function(state_75465){
switch(arguments.length){
case 0:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1.call(this,state_75465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____0;
revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto____1;
return revert$rewards$_LT_make_sashimi_pool_index_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75499 = f__52209__auto__();
(statearr_75499[(6)] = c__52208__auto__);

return statearr_75499;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75557){
var state_val_75558 = (state_75557[(1)]);
if((state_val_75558 === (7))){
var inst_75528 = (state_75557[(7)]);
var inst_75528__$1 = (state_75557[(2)]);
var state_75557__$1 = (function (){var statearr_75562 = state_75557;
(statearr_75562[(7)] = inst_75528__$1);

return statearr_75562;
})();
if(cljs.core.truth_(inst_75528__$1)){
var statearr_75563_77083 = state_75557__$1;
(statearr_75563_77083[(1)] = (8));

} else {
var statearr_75564_77084 = state_75557__$1;
(statearr_75564_77084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75558 === (1))){
var inst_75505 = revert.ethereum._LT_user_token_balance(user_address,staking_address);
var state_75557__$1 = state_75557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(2),inst_75505);
} else {
if((state_val_75558 === (4))){
var inst_75507 = (state_75557[(8)]);
var inst_75510 = (state_75557[(9)]);
var inst_75514 = (state_75557[(2)]);
var inst_75515 = bignumber.core._SLASH_(inst_75507,inst_75510);
var inst_75516 = bignumber.core._STAR_(inst_75515,inst_75514);
var inst_75517 = revert.rewards._LT_total_pool_lps(lp_address);
var state_75557__$1 = (function (){var statearr_75565 = state_75557;
(statearr_75565[(10)] = inst_75516);

return statearr_75565;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(5),inst_75517);
} else {
if((state_val_75558 === (15))){
var inst_75541 = (state_75557[(2)]);
var state_75557__$1 = state_75557;
var statearr_75566_77087 = state_75557__$1;
(statearr_75566_77087[(2)] = inst_75541);

(statearr_75566_77087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75558 === (13))){
var inst_75543 = cljs.core.PersistentVector.EMPTY;
var state_75557__$1 = state_75557;
var statearr_75567_77089 = state_75557__$1;
(statearr_75567_77089[(2)] = inst_75543);

(statearr_75567_77089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75558 === (6))){
var inst_75525 = (state_75557[(2)]);
var inst_75526 = revert.rewards._LT_staking_rewards_token(staking_address);
var state_75557__$1 = (function (){var statearr_75568 = state_75557;
(statearr_75568[(11)] = inst_75525);

return statearr_75568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(7),inst_75526);
} else {
if((state_val_75558 === (3))){
var inst_75510 = (state_75557[(2)]);
var inst_75512 = revert.ethereum._LT_pickle_jar_balance(staking_address);
var state_75557__$1 = (function (){var statearr_75569 = state_75557;
(statearr_75569[(9)] = inst_75510);

return statearr_75569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(4),inst_75512);
} else {
if((state_val_75558 === (12))){
var inst_75528 = (state_75557[(7)]);
var inst_75538 = cljs.core.deref(revert.ethereum.provider);
var inst_75539 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_75538,inst_75528,staking_address,user_address);
var state_75557__$1 = state_75557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(15),inst_75539);
} else {
if((state_val_75558 === (2))){
var inst_75507 = (state_75557[(2)]);
var inst_75508 = revert.ethereum._LT_token_total_supply(staking_address);
var state_75557__$1 = (function (){var statearr_75570 = state_75557;
(statearr_75570[(8)] = inst_75507);

return statearr_75570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(3),inst_75508);
} else {
if((state_val_75558 === (11))){
var inst_75532 = (state_75557[(2)]);
var state_75557__$1 = state_75557;
var statearr_75571_77091 = state_75557__$1;
(statearr_75571_77091[(2)] = inst_75532);

(statearr_75571_77091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75558 === (9))){
var inst_75534 = revert.utils.bn("0.0");
var state_75557__$1 = state_75557;
var statearr_75572_77093 = state_75557__$1;
(statearr_75572_77093[(2)] = inst_75534);

(statearr_75572_77093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75558 === (5))){
var inst_75519 = (state_75557[(2)]);
var inst_75523 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_75557__$1 = (function (){var statearr_75573 = state_75557;
(statearr_75573[(12)] = inst_75519);

return statearr_75573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(6),inst_75523);
} else {
if((state_val_75558 === (14))){
var inst_75545 = (state_75557[(2)]);
var inst_75546 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_75545);
var inst_75547 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_75557__$1 = (function (){var statearr_75574 = state_75557;
(statearr_75574[(13)] = inst_75546);

return statearr_75574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(16),inst_75547);
} else {
if((state_val_75558 === (16))){
var inst_75536 = (state_75557[(14)]);
var inst_75525 = (state_75557[(11)]);
var inst_75519 = (state_75557[(12)]);
var inst_75528 = (state_75557[(7)]);
var inst_75546 = (state_75557[(13)]);
var inst_75516 = (state_75557[(10)]);
var inst_75549 = (state_75557[(2)]);
var inst_75550 = revert.rewards.staked_positions(inst_75549,inst_75519,inst_75516,inst_75525);
var inst_75551 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_75552 = [inst_75536,inst_75528,inst_75546];
var inst_75553 = cljs.core.PersistentHashMap.fromArrays(inst_75551,inst_75552);
var inst_75554 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_75550,inst_75553);
var state_75557__$1 = state_75557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75557__$1,inst_75554);
} else {
if((state_val_75558 === (10))){
var inst_75528 = (state_75557[(7)]);
var inst_75536 = (state_75557[(2)]);
var state_75557__$1 = (function (){var statearr_75575 = state_75557;
(statearr_75575[(14)] = inst_75536);

return statearr_75575;
})();
if(cljs.core.truth_(inst_75528)){
var statearr_75576_77095 = state_75557__$1;
(statearr_75576_77095[(1)] = (12));

} else {
var statearr_75577_77096 = state_75557__$1;
(statearr_75577_77096[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75558 === (8))){
var inst_75528 = (state_75557[(7)]);
var inst_75530 = revert.rewards._LT_staking_rewards_earned(staking_address,inst_75528,user_address);
var state_75557__$1 = state_75557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75557__$1,(11),inst_75530);
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
var statearr_75580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75580[(0)] = revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__);

(statearr_75580[(1)] = (1));

return statearr_75580;
});
var revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____1 = (function (state_75557){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75557);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75584){var ex__52189__auto__ = e75584;
var statearr_75585_77097 = state_75557;
(statearr_75585_77097[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75557[(4)]))){
var statearr_75586_77098 = state_75557;
(statearr_75586_77098[(1)] = cljs.core.first((state_75557[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77099 = state_75557;
state_75557 = G__77099;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__ = function(state_75557){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____1.call(this,state_75557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_pjar_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75587 = f__52209__auto__();
(statearr_75587[(6)] = c__52208__auto__);

return statearr_75587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}catch (e75504){if((e75504 instanceof Error)){
var err = e75504;
return null;
} else {
throw e75504;

}
}});
revert.rewards.pickle_uni_jars = cljs.core.PersistentHashMap.fromArrays(["0xceff51756c56ceffca006cd410b03ffc46dd3a58","0xa478c2975ab1ea89e8196811f51a7b7ade33eb11","0xd4405f0704621dbe9d4dea60e128e0c3b26bddbd","0x06da0fd433c1a5d7a4faa01111c044910a184553","0x10b47177e92ef9d5c6059055d92ddf6290848991","0x87da823b6fc8eb8575a235a824690fda94674c88","0x088ee5007c98a9677165d78dd2109ae4a3d04d0c","0x3e78f2e7dade07ea685f8612f00477fd97162f1e","0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc","0xc9cb53b48a2f3a9e75982685644c1870f1405ccb","0xbb2b8038a1640196fbe3e38816f3e67cba72d940","0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f","0x066f3a3b7c8fa077c71b9184d862ed0a4d5cf3e0","0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852","0x397ff1542f962076d0bfe58ea045ffa2d347aca0"],["0xde74b6c547bd574c3527316a2ee30cd8f6041525","0xCffA068F1E44D98D3753966eBd58D4CFe3BB5162","0x2350fc7268F3f5a6cC31f26c38f706E41547505d","0xa7a37ae5cb163a3147de83f15e15d8e5f94d6bce","0x5eff6d166d66bacbc1bf52e2c54dd391ae6b1f48","0x3bcd97dca7b1ced292687c97702725f37af01cac","0x3261D9408604CC8607b687980D40135aFA26FfED","0x748712686a78737da0b7643df78fdf2778dc5944","0x53Bf2E62fA20e2b4522f05de3597890Ec1b352C6","0xC66583Dd4E25b3cfc8D881F6DbaD8288C7f5Fd30","0xc80090AA05374d336875907372EE4ee636CBC562","0x55282da27a3a02ffe599f6d11314d239dac89135","0x0faa189afe8ae97de1d2f01e471297678842146d","0x09FC573c502037B149ba87782ACC81cF093EC6ef","0x8c2d16b7f6d3f989eb4878ecf13d695a7d504e43"]);
revert.rewards._LT_staked_lp_positions_pjar_redirect = (function revert$rewards$_LT_staked_lp_positions_pjar_redirect(lp_address,staking_address,user_address){
try{var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75607){
var state_val_75608 = (state_75607[(1)]);
if((state_val_75608 === (1))){
var inst_75589 = revert.ethereum._LT_pickle_jar_balance(staking_address);
var state_75607__$1 = state_75607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75607__$1,(2),inst_75589);
} else {
if((state_val_75608 === (2))){
var inst_75591 = (state_75607[(2)]);
var inst_75592 = revert.utils.bn((0));
var inst_75593 = bignumber.core._EQ_(inst_75591,inst_75592);
var state_75607__$1 = state_75607;
if(cljs.core.truth_(inst_75593)){
var statearr_75609_77100 = state_75607__$1;
(statearr_75609_77100[(1)] = (3));

} else {
var statearr_75610_77101 = state_75607__$1;
(statearr_75610_77101[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75608 === (3))){
var inst_75595 = clojure.string.lower_case(lp_address);
var inst_75596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(revert.rewards.pickle_uni_jars,inst_75595);
var inst_75597 = revert.rewards._LT_staked_lp_positions_pjar(lp_address,inst_75596,user_address);
var state_75607__$1 = state_75607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75607__$1,(6),inst_75597);
} else {
if((state_val_75608 === (4))){
var inst_75601 = revert.rewards._LT_staked_lp_positions_pjar(lp_address,staking_address,user_address);
var state_75607__$1 = state_75607;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75607__$1,(7),inst_75601);
} else {
if((state_val_75608 === (5))){
var inst_75605 = (state_75607[(2)]);
var state_75607__$1 = state_75607;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75607__$1,inst_75605);
} else {
if((state_val_75608 === (6))){
var inst_75599 = (state_75607[(2)]);
var state_75607__$1 = state_75607;
var statearr_75611_77102 = state_75607__$1;
(statearr_75611_77102[(2)] = inst_75599);

(statearr_75611_77102[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75608 === (7))){
var inst_75603 = (state_75607[(2)]);
var state_75607__$1 = state_75607;
var statearr_75612_77103 = state_75607__$1;
(statearr_75612_77103[(2)] = inst_75603);

(statearr_75612_77103[(1)] = (5));


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
var statearr_75613 = [null,null,null,null,null,null,null];
(statearr_75613[(0)] = revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__);

(statearr_75613[(1)] = (1));

return statearr_75613;
});
var revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____1 = (function (state_75607){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75607);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75614){var ex__52189__auto__ = e75614;
var statearr_75615_77104 = state_75607;
(statearr_75615_77104[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75607[(4)]))){
var statearr_75616_77105 = state_75607;
(statearr_75616_77105[(1)] = cljs.core.first((state_75607[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77106 = state_75607;
state_75607 = G__77106;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__ = function(state_75607){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____1.call(this,state_75607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_pjar_redirect_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75617 = f__52209__auto__();
(statearr_75617[(6)] = c__52208__auto__);

return statearr_75617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}catch (e75588){if((e75588 instanceof Error)){
var err = e75588;
return null;
} else {
throw e75588;

}
}});
revert.rewards._LT_rewards_paid_sr = (function revert$rewards$_LT_rewards_paid_sr(staking_address,user_address){
var ac = revert.ethereum.make_contract(revert.ethereum.sr_abi,staking_address);
var claimed_filter = (ac.filters.RewardPaid.cljs$core$IFn$_invoke$arity$1 ? ac.filters.RewardPaid.cljs$core$IFn$_invoke$arity$1(user_address) : ac.filters.RewardPaid.call(null,user_address));
var _ = (claimed_filter.fromBlock = (0));
var ___$1 = (claimed_filter.toBlock = "latest");
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75634){
var state_val_75635 = (state_75634[(1)]);
if((state_val_75635 === (1))){
var inst_75618 = cljs.core.deref(revert.ethereum.provider);
var inst_75619 = inst_75618.getLogs(claimed_filter);
var inst_75620 = cljs.core.async.interop.p__GT_c(inst_75619);
var state_75634__$1 = state_75634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75634__$1,(2),inst_75620);
} else {
if((state_val_75635 === (2))){
var inst_75622 = (state_75634[(7)]);
var inst_75622__$1 = (state_75634[(2)]);
var inst_75623 = (inst_75622__$1 instanceof cljs.core.ExceptionInfo);
var inst_75624 = cljs.core.ex_data(inst_75622__$1);
var inst_75625 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75624);
var inst_75626 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75625,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75627 = ((inst_75623) && (inst_75626));
var state_75634__$1 = (function (){var statearr_75636 = state_75634;
(statearr_75636[(7)] = inst_75622__$1);

return statearr_75636;
})();
if(cljs.core.truth_(inst_75627)){
var statearr_75637_77107 = state_75634__$1;
(statearr_75637_77107[(1)] = (3));

} else {
var statearr_75638_77108 = state_75634__$1;
(statearr_75638_77108[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75635 === (3))){
var inst_75622 = (state_75634[(7)]);
var inst_75629 = (function(){throw inst_75622})();
var state_75634__$1 = state_75634;
var statearr_75639_77109 = state_75634__$1;
(statearr_75639_77109[(2)] = inst_75629);

(statearr_75639_77109[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75635 === (4))){
var inst_75622 = (state_75634[(7)]);
var state_75634__$1 = state_75634;
var statearr_75640_77110 = state_75634__$1;
(statearr_75640_77110[(2)] = inst_75622);

(statearr_75640_77110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75635 === (5))){
var inst_75632 = (state_75634[(2)]);
var state_75634__$1 = state_75634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75634__$1,inst_75632);
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
var statearr_75642 = [null,null,null,null,null,null,null,null];
(statearr_75642[(0)] = revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__);

(statearr_75642[(1)] = (1));

return statearr_75642;
});
var revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____1 = (function (state_75634){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75634);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75643){var ex__52189__auto__ = e75643;
var statearr_75644_77111 = state_75634;
(statearr_75644_77111[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75634[(4)]))){
var statearr_75645_77112 = state_75634;
(statearr_75645_77112[(1)] = cljs.core.first((state_75634[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77113 = state_75634;
state_75634 = G__77113;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__ = function(state_75634){
switch(arguments.length){
case 0:
return revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____1.call(this,state_75634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____0;
revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto____1;
return revert$rewards$_LT_rewards_paid_sr_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75646 = f__52209__auto__();
(statearr_75646[(6)] = c__52208__auto__);

return statearr_75646;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75663){
var state_val_75664 = (state_75663[(1)]);
if((state_val_75664 === (1))){
var inst_75647 = cljs.core.deref(revert.ethereum.provider);
var inst_75648 = inst_75647.getLogs(claimed_filter);
var inst_75649 = cljs.core.async.interop.p__GT_c(inst_75648);
var state_75663__$1 = state_75663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75663__$1,(2),inst_75649);
} else {
if((state_val_75664 === (2))){
var inst_75651 = (state_75663[(7)]);
var inst_75651__$1 = (state_75663[(2)]);
var inst_75652 = (inst_75651__$1 instanceof cljs.core.ExceptionInfo);
var inst_75653 = cljs.core.ex_data(inst_75651__$1);
var inst_75654 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75653);
var inst_75655 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75654,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75656 = ((inst_75652) && (inst_75655));
var state_75663__$1 = (function (){var statearr_75666 = state_75663;
(statearr_75666[(7)] = inst_75651__$1);

return statearr_75666;
})();
if(cljs.core.truth_(inst_75656)){
var statearr_75667_77114 = state_75663__$1;
(statearr_75667_77114[(1)] = (3));

} else {
var statearr_75668_77115 = state_75663__$1;
(statearr_75668_77115[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75664 === (3))){
var inst_75651 = (state_75663[(7)]);
var inst_75658 = (function(){throw inst_75651})();
var state_75663__$1 = state_75663;
var statearr_75669_77116 = state_75663__$1;
(statearr_75669_77116[(2)] = inst_75658);

(statearr_75669_77116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75664 === (4))){
var inst_75651 = (state_75663[(7)]);
var state_75663__$1 = state_75663;
var statearr_75670_77117 = state_75663__$1;
(statearr_75670_77117[(2)] = inst_75651);

(statearr_75670_77117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75664 === (5))){
var inst_75661 = (state_75663[(2)]);
var state_75663__$1 = state_75663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75663__$1,inst_75661);
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
var statearr_75671 = [null,null,null,null,null,null,null,null];
(statearr_75671[(0)] = revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__);

(statearr_75671[(1)] = (1));

return statearr_75671;
});
var revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____1 = (function (state_75663){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75663);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75672){var ex__52189__auto__ = e75672;
var statearr_75673_77118 = state_75663;
(statearr_75673_77118[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75663[(4)]))){
var statearr_75674_77119 = state_75663;
(statearr_75674_77119[(1)] = cljs.core.first((state_75663[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77120 = state_75663;
state_75663 = G__77120;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__ = function(state_75663){
switch(arguments.length){
case 0:
return revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____1.call(this,state_75663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____0;
revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto____1;
return revert$rewards$_LT_rewards_claimed_sr_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75675 = f__52209__auto__();
(statearr_75675[(6)] = c__52208__auto__);

return statearr_75675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions_sr = (function revert$rewards$_LT_staked_lp_positions_sr(lp_address,staking_address,user_address){
try{var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75735){
var state_val_75736 = (state_75735[(1)]);
if((state_val_75736 === (7))){
var inst_75696 = revert.utils.bn("0.0");
var state_75735__$1 = state_75735;
var statearr_75737_77121 = state_75735__$1;
(statearr_75737_77121[(2)] = inst_75696);

(statearr_75737_77121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (1))){
var inst_75679 = revert.rewards._LT_sr_staked_lps(staking_address,user_address);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(2),inst_75679);
} else {
if((state_val_75736 === (4))){
var inst_75687 = (state_75735[(2)]);
var inst_75688 = revert.rewards._LT_staking_rewards_token(staking_address);
var state_75735__$1 = (function (){var statearr_75738 = state_75735;
(statearr_75738[(7)] = inst_75687);

return statearr_75738;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(5),inst_75688);
} else {
if((state_val_75736 === (15))){
var inst_75690 = (state_75735[(8)]);
var inst_75715 = cljs.core.deref(revert.ethereum.provider);
var inst_75716 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_75715,inst_75690,staking_address,user_address);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(18),inst_75716);
} else {
if((state_val_75736 === (13))){
var inst_75681 = (state_75735[(9)]);
var inst_75690 = (state_75735[(8)]);
var inst_75710 = (state_75735[(10)]);
var inst_75701 = (state_75735[(11)]);
var inst_75687 = (state_75735[(7)]);
var inst_75684 = (state_75735[(12)]);
var inst_75698 = (state_75735[(13)]);
var inst_75710__$1 = (state_75735[(2)]);
var inst_75711 = (function (){var my_unis_staked = inst_75681;
var total_unis = inst_75684;
var lp_symbols = inst_75687;
var rewards_token = inst_75690;
var rewards_earned = inst_75698;
var rewards_paid = inst_75701;
var filtered_claims = inst_75710__$1;
return (function (p1__75676_SHARP_){
return p1__75676_SHARP_.transactionHash;
});
})();
var inst_75712 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_75711,inst_75710__$1);
var inst_75713 = cljs.core.set(inst_75712);
var state_75735__$1 = (function (){var statearr_75739 = state_75735;
(statearr_75739[(14)] = inst_75713);

(statearr_75739[(10)] = inst_75710__$1);

return statearr_75739;
})();
if(cljs.core.truth_(inst_75690)){
var statearr_75740_77122 = state_75735__$1;
(statearr_75740_77122[(1)] = (15));

} else {
var statearr_75741_77123 = state_75735__$1;
(statearr_75741_77123[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (6))){
var inst_75690 = (state_75735[(8)]);
var inst_75692 = revert.rewards._LT_staking_rewards_earned(staking_address,inst_75690,user_address);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(9),inst_75692);
} else {
if((state_val_75736 === (17))){
var inst_75713 = (state_75735[(14)]);
var inst_75681 = (state_75735[(9)]);
var inst_75690 = (state_75735[(8)]);
var inst_75710 = (state_75735[(10)]);
var inst_75701 = (state_75735[(11)]);
var inst_75687 = (state_75735[(7)]);
var inst_75684 = (state_75735[(12)]);
var inst_75698 = (state_75735[(13)]);
var inst_75722 = (state_75735[(2)]);
var inst_75723 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_75722);
var inst_75724 = (function (){var lp_symbols = inst_75687;
var rewards_token = inst_75690;
var filtered_claims = inst_75710;
var paid_rewards = inst_75723;
var claim_hashes = inst_75713;
var my_unis_staked = inst_75681;
var reward_transfers = inst_75722;
var rewards_paid = inst_75701;
var total_unis = inst_75684;
var rewards_earned = inst_75698;
return (function (p1__75677_SHARP_){
return cljs.core.contains_QMARK_(claim_hashes,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__75677_SHARP_));
});
})();
var inst_75725 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_75724,inst_75723);
var inst_75726 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_75735__$1 = (function (){var statearr_75742 = state_75735;
(statearr_75742[(15)] = inst_75725);

return statearr_75742;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(19),inst_75726);
} else {
if((state_val_75736 === (3))){
var inst_75684 = (state_75735[(2)]);
var inst_75685 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_75735__$1 = (function (){var statearr_75743 = state_75735;
(statearr_75743[(12)] = inst_75684);

return statearr_75743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(4),inst_75685);
} else {
if((state_val_75736 === (12))){
var inst_75706 = revert.rewards._LT_rewards_claimed_sr(staking_address,user_address);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(14),inst_75706);
} else {
if((state_val_75736 === (2))){
var inst_75681 = (state_75735[(2)]);
var inst_75682 = revert.rewards._LT_total_pool_lps(lp_address);
var state_75735__$1 = (function (){var statearr_75744 = state_75735;
(statearr_75744[(9)] = inst_75681);

return statearr_75744;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(3),inst_75682);
} else {
if((state_val_75736 === (19))){
var inst_75681 = (state_75735[(9)]);
var inst_75690 = (state_75735[(8)]);
var inst_75687 = (state_75735[(7)]);
var inst_75684 = (state_75735[(12)]);
var inst_75698 = (state_75735[(13)]);
var inst_75725 = (state_75735[(15)]);
var inst_75728 = (state_75735[(2)]);
var inst_75729 = revert.rewards.staked_positions(inst_75728,inst_75684,inst_75681,inst_75687);
var inst_75730 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_75731 = [inst_75698,inst_75690,inst_75725];
var inst_75732 = cljs.core.PersistentHashMap.fromArrays(inst_75730,inst_75731);
var inst_75733 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_75729,inst_75732);
var state_75735__$1 = state_75735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75735__$1,inst_75733);
} else {
if((state_val_75736 === (11))){
var inst_75701 = (state_75735[(11)]);
var state_75735__$1 = state_75735;
var statearr_75748_77124 = state_75735__$1;
(statearr_75748_77124[(2)] = inst_75701);

(statearr_75748_77124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (9))){
var inst_75694 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75749_77125 = state_75735__$1;
(statearr_75749_77125[(2)] = inst_75694);

(statearr_75749_77125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (5))){
var inst_75690 = (state_75735[(8)]);
var inst_75690__$1 = (state_75735[(2)]);
var state_75735__$1 = (function (){var statearr_75750 = state_75735;
(statearr_75750[(8)] = inst_75690__$1);

return statearr_75750;
})();
if(cljs.core.truth_(inst_75690__$1)){
var statearr_75751_77126 = state_75735__$1;
(statearr_75751_77126[(1)] = (6));

} else {
var statearr_75752_77127 = state_75735__$1;
(statearr_75752_77127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (14))){
var inst_75708 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75753_77128 = state_75735__$1;
(statearr_75753_77128[(2)] = inst_75708);

(statearr_75753_77128[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (16))){
var inst_75720 = cljs.core.PersistentVector.EMPTY;
var state_75735__$1 = state_75735;
var statearr_75754_77129 = state_75735__$1;
(statearr_75754_77129[(2)] = inst_75720);

(statearr_75754_77129[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (10))){
var inst_75701 = (state_75735[(11)]);
var inst_75701__$1 = (state_75735[(2)]);
var inst_75702 = cljs.core.count(inst_75701__$1);
var inst_75703 = (inst_75702 > (0));
var state_75735__$1 = (function (){var statearr_75755 = state_75735;
(statearr_75755[(11)] = inst_75701__$1);

return statearr_75755;
})();
if(cljs.core.truth_(inst_75703)){
var statearr_75756_77130 = state_75735__$1;
(statearr_75756_77130[(1)] = (11));

} else {
var statearr_75757_77131 = state_75735__$1;
(statearr_75757_77131[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (18))){
var inst_75718 = (state_75735[(2)]);
var state_75735__$1 = state_75735;
var statearr_75758_77132 = state_75735__$1;
(statearr_75758_77132[(2)] = inst_75718);

(statearr_75758_77132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75736 === (8))){
var inst_75698 = (state_75735[(2)]);
var inst_75699 = revert.rewards._LT_rewards_paid_sr(staking_address,user_address);
var state_75735__$1 = (function (){var statearr_75759 = state_75735;
(statearr_75759[(13)] = inst_75698);

return statearr_75759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75735__$1,(10),inst_75699);
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
var statearr_75760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75760[(0)] = revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__);

(statearr_75760[(1)] = (1));

return statearr_75760;
});
var revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____1 = (function (state_75735){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75735);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75761){var ex__52189__auto__ = e75761;
var statearr_75762_77133 = state_75735;
(statearr_75762_77133[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75735[(4)]))){
var statearr_75763_77134 = state_75735;
(statearr_75763_77134[(1)] = cljs.core.first((state_75735[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77135 = state_75735;
state_75735 = G__77135;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__ = function(state_75735){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____1.call(this,state_75735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_sr_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75764 = f__52209__auto__();
(statearr_75764[(6)] = c__52208__auto__);

return statearr_75764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}catch (e75678){if((e75678 instanceof Error)){
var err = e75678;
return null;
} else {
throw e75678;

}
}});
revert.rewards._LT_lp_balance = (function revert$rewards$_LT_lp_balance(contract,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75781){
var state_val_75782 = (state_75781[(1)]);
if((state_val_75782 === (1))){
var inst_75766 = contract.lpBalance(user_address);
var inst_75767 = cljs.core.async.interop.p__GT_c(inst_75766);
var state_75781__$1 = state_75781;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75781__$1,(2),inst_75767);
} else {
if((state_val_75782 === (2))){
var inst_75769 = (state_75781[(7)]);
var inst_75769__$1 = (state_75781[(2)]);
var inst_75770 = (inst_75769__$1 instanceof cljs.core.ExceptionInfo);
var inst_75771 = cljs.core.ex_data(inst_75769__$1);
var inst_75772 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75771);
var inst_75773 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75772,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75774 = ((inst_75770) && (inst_75773));
var state_75781__$1 = (function (){var statearr_75783 = state_75781;
(statearr_75783[(7)] = inst_75769__$1);

return statearr_75783;
})();
if(cljs.core.truth_(inst_75774)){
var statearr_75784_77136 = state_75781__$1;
(statearr_75784_77136[(1)] = (3));

} else {
var statearr_75785_77137 = state_75781__$1;
(statearr_75785_77137[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75782 === (3))){
var inst_75769 = (state_75781[(7)]);
var inst_75776 = (function(){throw inst_75769})();
var state_75781__$1 = state_75781;
var statearr_75786_77138 = state_75781__$1;
(statearr_75786_77138[(2)] = inst_75776);

(statearr_75786_77138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75782 === (4))){
var inst_75769 = (state_75781[(7)]);
var state_75781__$1 = state_75781;
var statearr_75787_77139 = state_75781__$1;
(statearr_75787_77139[(2)] = inst_75769);

(statearr_75787_77139[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75782 === (5))){
var inst_75779 = (state_75781[(2)]);
var state_75781__$1 = state_75781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75781__$1,inst_75779);
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
var statearr_75788 = [null,null,null,null,null,null,null,null];
(statearr_75788[(0)] = revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__);

(statearr_75788[(1)] = (1));

return statearr_75788;
});
var revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____1 = (function (state_75781){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75781);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75789){var ex__52189__auto__ = e75789;
var statearr_75790_77140 = state_75781;
(statearr_75790_77140[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75781[(4)]))){
var statearr_75791_77141 = state_75781;
(statearr_75791_77141[(1)] = cljs.core.first((state_75781[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77142 = state_75781;
state_75781 = G__77142;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__ = function(state_75781){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____1.call(this,state_75781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_balance_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_balance_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75792 = f__52209__auto__();
(statearr_75792[(6)] = c__52208__auto__);

return statearr_75792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_lp = (function revert$rewards$_LT_lp(contract){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75808){
var state_val_75809 = (state_75808[(1)]);
if((state_val_75809 === (1))){
var inst_75793 = contract.lp();
var inst_75794 = cljs.core.async.interop.p__GT_c(inst_75793);
var state_75808__$1 = state_75808;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75808__$1,(2),inst_75794);
} else {
if((state_val_75809 === (2))){
var inst_75796 = (state_75808[(7)]);
var inst_75796__$1 = (state_75808[(2)]);
var inst_75797 = (inst_75796__$1 instanceof cljs.core.ExceptionInfo);
var inst_75798 = cljs.core.ex_data(inst_75796__$1);
var inst_75799 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75798);
var inst_75800 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75799,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75801 = ((inst_75797) && (inst_75800));
var state_75808__$1 = (function (){var statearr_75810 = state_75808;
(statearr_75810[(7)] = inst_75796__$1);

return statearr_75810;
})();
if(cljs.core.truth_(inst_75801)){
var statearr_75811_77143 = state_75808__$1;
(statearr_75811_77143[(1)] = (3));

} else {
var statearr_75812_77144 = state_75808__$1;
(statearr_75812_77144[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75809 === (3))){
var inst_75796 = (state_75808[(7)]);
var inst_75803 = (function(){throw inst_75796})();
var state_75808__$1 = state_75808;
var statearr_75813_77145 = state_75808__$1;
(statearr_75813_77145[(2)] = inst_75803);

(statearr_75813_77145[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75809 === (4))){
var inst_75796 = (state_75808[(7)]);
var state_75808__$1 = state_75808;
var statearr_75814_77146 = state_75808__$1;
(statearr_75814_77146[(2)] = inst_75796);

(statearr_75814_77146[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75809 === (5))){
var inst_75806 = (state_75808[(2)]);
var state_75808__$1 = state_75808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75808__$1,inst_75806);
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
var statearr_75815 = [null,null,null,null,null,null,null,null];
(statearr_75815[(0)] = revert$rewards$_LT_lp_$_state_machine__52186__auto__);

(statearr_75815[(1)] = (1));

return statearr_75815;
});
var revert$rewards$_LT_lp_$_state_machine__52186__auto____1 = (function (state_75808){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75808);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75816){var ex__52189__auto__ = e75816;
var statearr_75817_77147 = state_75808;
(statearr_75817_77147[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75808[(4)]))){
var statearr_75818_77148 = state_75808;
(statearr_75818_77148[(1)] = cljs.core.first((state_75808[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77149 = state_75808;
state_75808 = G__77149;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_lp_$_state_machine__52186__auto__ = function(state_75808){
switch(arguments.length){
case 0:
return revert$rewards$_LT_lp_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_lp_$_state_machine__52186__auto____1.call(this,state_75808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_lp_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_lp_$_state_machine__52186__auto____0;
revert$rewards$_LT_lp_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_lp_$_state_machine__52186__auto____1;
return revert$rewards$_LT_lp_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75819 = f__52209__auto__();
(statearr_75819[(6)] = c__52208__auto__);

return statearr_75819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions_lpbar = (function revert$rewards$_LT_staked_lp_positions_lpbar(lp_address,staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75851){
var state_val_75852 = (state_75851[(1)]);
if((state_val_75852 === (7))){
var inst_75823 = (state_75851[(7)]);
var inst_75832 = (state_75851[(8)]);
var inst_75829 = (state_75851[(9)]);
var inst_75826 = (state_75851[(10)]);
var inst_75840 = revert.rewards.staked_positions(inst_75832,inst_75826,inst_75823,inst_75829);
var state_75851__$1 = state_75851;
var statearr_75853_77150 = state_75851__$1;
(statearr_75853_77150[(2)] = inst_75840);

(statearr_75853_77150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75852 === (1))){
var inst_75820 = (state_75851[(11)]);
var inst_75820__$1 = revert.ethereum.make_contract(revert.ethereum.lpbar_abi,staking_address);
var inst_75821 = revert.rewards._LT_lp_balance(inst_75820__$1,user_address);
var state_75851__$1 = (function (){var statearr_75854 = state_75851;
(statearr_75854[(11)] = inst_75820__$1);

return statearr_75854;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75851__$1,(2),inst_75821);
} else {
if((state_val_75852 === (4))){
var inst_75829 = (state_75851[(2)]);
var inst_75830 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_75851__$1 = (function (){var statearr_75858 = state_75851;
(statearr_75858[(9)] = inst_75829);

return statearr_75858;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75851__$1,(5),inst_75830);
} else {
if((state_val_75852 === (6))){
var inst_75835 = (state_75851[(2)]);
var inst_75836 = clojure.string.lower_case(inst_75835);
var inst_75837 = clojure.string.lower_case(lp_address);
var inst_75838 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75836,inst_75837);
var state_75851__$1 = state_75851;
if(inst_75838){
var statearr_75859_77151 = state_75851__$1;
(statearr_75859_77151[(1)] = (7));

} else {
var statearr_75860_77152 = state_75851__$1;
(statearr_75860_77152[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75852 === (3))){
var inst_75826 = (state_75851[(2)]);
var inst_75827 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_75851__$1 = (function (){var statearr_75861 = state_75851;
(statearr_75861[(10)] = inst_75826);

return statearr_75861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75851__$1,(4),inst_75827);
} else {
if((state_val_75852 === (2))){
var inst_75823 = (state_75851[(2)]);
var inst_75824 = revert.rewards._LT_total_pool_lps(lp_address);
var state_75851__$1 = (function (){var statearr_75862 = state_75851;
(statearr_75862[(7)] = inst_75823);

return statearr_75862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75851__$1,(3),inst_75824);
} else {
if((state_val_75852 === (9))){
var inst_75849 = (state_75851[(2)]);
var state_75851__$1 = state_75851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75851__$1,inst_75849);
} else {
if((state_val_75852 === (5))){
var inst_75820 = (state_75851[(11)]);
var inst_75832 = (state_75851[(2)]);
var inst_75833 = revert.rewards._LT_lp(inst_75820);
var state_75851__$1 = (function (){var statearr_75863 = state_75851;
(statearr_75863[(8)] = inst_75832);

return statearr_75863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75851__$1,(6),inst_75833);
} else {
if((state_val_75852 === (8))){
var inst_75842 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635)];
var inst_75843 = revert.utils.bn((0));
var inst_75844 = revert.utils.bn((0));
var inst_75845 = revert.utils.bn((0));
var inst_75846 = [inst_75843,inst_75844,inst_75845];
var inst_75847 = cljs.core.PersistentHashMap.fromArrays(inst_75842,inst_75846);
var state_75851__$1 = state_75851;
var statearr_75864_77153 = state_75851__$1;
(statearr_75864_77153[(2)] = inst_75847);

(statearr_75864_77153[(1)] = (9));


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
var statearr_75865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75865[(0)] = revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__);

(statearr_75865[(1)] = (1));

return statearr_75865;
});
var revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____1 = (function (state_75851){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75851);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75866){var ex__52189__auto__ = e75866;
var statearr_75867_77154 = state_75851;
(statearr_75867_77154[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75851[(4)]))){
var statearr_75868_77155 = state_75851;
(statearr_75868_77155[(1)] = cljs.core.first((state_75851[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77156 = state_75851;
state_75851 = G__77156;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__ = function(state_75851){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____1.call(this,state_75851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_lpbar_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75869 = f__52209__auto__();
(statearr_75869[(6)] = c__52208__auto__);

return statearr_75869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions_sashimi_plate = (function revert$rewards$_LT_staked_lp_positions_sashimi_plate(lp_address,staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_75944){
var state_val_75945 = (state_75944[(1)]);
if((state_val_75945 === (7))){
var inst_75901 = (state_75944[(7)]);
var inst_75901__$1 = (state_75944[(2)]);
var inst_75902 = (inst_75901__$1 instanceof cljs.core.ExceptionInfo);
var inst_75903 = cljs.core.ex_data(inst_75901__$1);
var inst_75904 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75903);
var inst_75905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75904,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75906 = ((inst_75902) && (inst_75905));
var state_75944__$1 = (function (){var statearr_75946 = state_75944;
(statearr_75946[(7)] = inst_75901__$1);

return statearr_75946;
})();
if(cljs.core.truth_(inst_75906)){
var statearr_75947_77157 = state_75944__$1;
(statearr_75947_77157[(1)] = (8));

} else {
var statearr_75948_77158 = state_75944__$1;
(statearr_75948_77158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (1))){
var inst_75870 = revert.ethereum.make_contract(revert.ethereum.erc20_abi,staking_address);
var inst_75871 = cljs.core.deref(revert.ethereum.provider);
var inst_75872 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$3(inst_75871,staking_address,user_address);
var state_75944__$1 = (function (){var statearr_75949 = state_75944;
(statearr_75949[(8)] = inst_75870);

return statearr_75949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(2),inst_75872);
} else {
if((state_val_75945 === (4))){
var inst_75881 = (state_75944[(9)]);
var inst_75888 = (function(){throw inst_75881})();
var state_75944__$1 = state_75944;
var statearr_75950_77159 = state_75944__$1;
(statearr_75950_77159[(2)] = inst_75888);

(statearr_75950_77159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (15))){
var inst_75916 = (state_75944[(10)]);
var inst_75928 = (state_75944[(2)]);
var inst_75929 = clojure.string.lower_case(inst_75916);
var inst_75930 = clojure.string.lower_case(lp_address);
var inst_75931 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75929,inst_75930);
var state_75944__$1 = (function (){var statearr_75951 = state_75944;
(statearr_75951[(11)] = inst_75928);

return statearr_75951;
})();
if(inst_75931){
var statearr_75952_77160 = state_75944__$1;
(statearr_75952_77160[(1)] = (16));

} else {
var statearr_75953_77161 = state_75944__$1;
(statearr_75953_77161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (13))){
var inst_75922 = (state_75944[(2)]);
var inst_75923 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_75944__$1 = (function (){var statearr_75954 = state_75944;
(statearr_75954[(12)] = inst_75922);

return statearr_75954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(14),inst_75923);
} else {
if((state_val_75945 === (6))){
var inst_75874 = (state_75944[(13)]);
var inst_75897 = (state_75944[(14)]);
var inst_75894 = (state_75944[(15)]);
var inst_75891 = (state_75944[(2)]);
var inst_75892 = revert.ethereum.sashimi_iface.parseTransaction(inst_75891);
var inst_75893 = inst_75892.args;
var inst_75894__$1 = inst_75893.pid;
var inst_75895 = cljs.core.first(inst_75874);
var inst_75896 = new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(inst_75895);
var inst_75897__$1 = revert.ethereum.make_contract(revert.ethereum.sashimi_abi,inst_75896);
var inst_75898 = inst_75897__$1.userInfo(inst_75894__$1,user_address);
var inst_75899 = cljs.core.async.interop.p__GT_c(inst_75898);
var state_75944__$1 = (function (){var statearr_75955 = state_75944;
(statearr_75955[(14)] = inst_75897__$1);

(statearr_75955[(15)] = inst_75894__$1);

return statearr_75955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(7),inst_75899);
} else {
if((state_val_75945 === (17))){
var inst_75935 = [new cljs.core.Keyword(null,"token0-balance","token0-balance",873721950),new cljs.core.Keyword(null,"token1-balance","token1-balance",-2115462361),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635)];
var inst_75936 = revert.utils.bn((0));
var inst_75937 = revert.utils.bn((0));
var inst_75938 = revert.utils.bn((0));
var inst_75939 = [inst_75936,inst_75937,inst_75938];
var inst_75940 = cljs.core.PersistentHashMap.fromArrays(inst_75935,inst_75939);
var state_75944__$1 = state_75944;
var statearr_75956_77162 = state_75944__$1;
(statearr_75956_77162[(2)] = inst_75940);

(statearr_75956_77162[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (3))){
var inst_75881 = (state_75944[(9)]);
var inst_75881__$1 = (state_75944[(2)]);
var inst_75882 = (inst_75881__$1 instanceof cljs.core.ExceptionInfo);
var inst_75883 = cljs.core.ex_data(inst_75881__$1);
var inst_75884 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75883);
var inst_75885 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75884,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75886 = ((inst_75882) && (inst_75885));
var state_75944__$1 = (function (){var statearr_75957 = state_75944;
(statearr_75957[(9)] = inst_75881__$1);

return statearr_75957;
})();
if(cljs.core.truth_(inst_75886)){
var statearr_75958_77163 = state_75944__$1;
(statearr_75958_77163[(1)] = (4));

} else {
var statearr_75959_77164 = state_75944__$1;
(statearr_75959_77164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (12))){
var inst_75919 = (state_75944[(2)]);
var inst_75920 = revert.rewards._LT_total_pool_lps(lp_address);
var state_75944__$1 = (function (){var statearr_75960 = state_75944;
(statearr_75960[(16)] = inst_75919);

return statearr_75960;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(13),inst_75920);
} else {
if((state_val_75945 === (2))){
var inst_75874 = (state_75944[(13)]);
var inst_75874__$1 = (state_75944[(2)]);
var inst_75875 = cljs.core.deref(revert.ethereum.provider);
var inst_75876 = cljs.core.first(inst_75874__$1);
var inst_75877 = new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(inst_75876);
var inst_75878 = inst_75875.getTransaction(inst_75877);
var inst_75879 = cljs.core.async.interop.p__GT_c(inst_75878);
var state_75944__$1 = (function (){var statearr_75961 = state_75944;
(statearr_75961[(13)] = inst_75874__$1);

return statearr_75961;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(3),inst_75879);
} else {
if((state_val_75945 === (11))){
var inst_75915 = (state_75944[(2)]);
var inst_75916 = cljs.core.first(inst_75915);
var inst_75917 = revert.rewards._LT_staking_pool_lps(lp_address,staking_address);
var state_75944__$1 = (function (){var statearr_75962 = state_75944;
(statearr_75962[(10)] = inst_75916);

return statearr_75962;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(12),inst_75917);
} else {
if((state_val_75945 === (9))){
var inst_75901 = (state_75944[(7)]);
var state_75944__$1 = state_75944;
var statearr_75963_77165 = state_75944__$1;
(statearr_75963_77165[(2)] = inst_75901);

(statearr_75963_77165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (5))){
var inst_75881 = (state_75944[(9)]);
var state_75944__$1 = state_75944;
var statearr_75964_77166 = state_75944__$1;
(statearr_75964_77166[(2)] = inst_75881);

(statearr_75964_77166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (14))){
var inst_75925 = (state_75944[(2)]);
var inst_75926 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_75944__$1 = (function (){var statearr_75965 = state_75944;
(statearr_75965[(17)] = inst_75925);

return statearr_75965;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(15),inst_75926);
} else {
if((state_val_75945 === (16))){
var inst_75928 = (state_75944[(11)]);
var inst_75912 = (state_75944[(18)]);
var inst_75925 = (state_75944[(17)]);
var inst_75922 = (state_75944[(12)]);
var inst_75933 = revert.rewards.staked_positions(inst_75928,inst_75922,inst_75912,inst_75925);
var state_75944__$1 = state_75944;
var statearr_75966_77167 = state_75944__$1;
(statearr_75966_77167[(2)] = inst_75933);

(statearr_75966_77167[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_75945 === (10))){
var inst_75897 = (state_75944[(14)]);
var inst_75894 = (state_75944[(15)]);
var inst_75911 = (state_75944[(2)]);
var inst_75912 = cljs.core.first(inst_75911);
var inst_75913 = revert.rewards._LT_pool_info(inst_75897,inst_75894);
var state_75944__$1 = (function (){var statearr_75967 = state_75944;
(statearr_75967[(18)] = inst_75912);

return statearr_75967;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_75944__$1,(11),inst_75913);
} else {
if((state_val_75945 === (18))){
var inst_75942 = (state_75944[(2)]);
var state_75944__$1 = state_75944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_75944__$1,inst_75942);
} else {
if((state_val_75945 === (8))){
var inst_75901 = (state_75944[(7)]);
var inst_75908 = (function(){throw inst_75901})();
var state_75944__$1 = state_75944;
var statearr_75968_77168 = state_75944__$1;
(statearr_75968_77168[(2)] = inst_75908);

(statearr_75968_77168[(1)] = (10));


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
var statearr_75969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_75969[(0)] = revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__);

(statearr_75969[(1)] = (1));

return statearr_75969;
});
var revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____1 = (function (state_75944){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_75944);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e75970){var ex__52189__auto__ = e75970;
var statearr_75971_77169 = state_75944;
(statearr_75971_77169[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_75944[(4)]))){
var statearr_75972_77170 = state_75944;
(statearr_75972_77170[(1)] = cljs.core.first((state_75944[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77171 = state_75944;
state_75944 = G__77171;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__ = function(state_75944){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____1.call(this,state_75944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_sashimi_plate_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_75973 = f__52209__auto__();
(statearr_75973[(6)] = c__52208__auto__);

return statearr_75973;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76182){
var state_val_76183 = (state_76182[(1)]);
if((state_val_76183 === (7))){
var inst_76003 = (state_76182[(7)]);
var inst_76010 = (function(){throw inst_76003})();
var state_76182__$1 = state_76182;
var statearr_76184_77172 = state_76182__$1;
(statearr_76184_77172[(2)] = inst_76010);

(statearr_76184_77172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (20))){
var inst_76178 = (state_76182[(2)]);
var state_76182__$1 = state_76182;
var statearr_76185_77173 = state_76182__$1;
(statearr_76185_77173[(2)] = inst_76178);

(statearr_76185_77173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (27))){
var inst_76072 = (state_76182[(8)]);
var inst_76079 = (function(){throw inst_76072})();
var state_76182__$1 = state_76182;
var statearr_76186_77174 = state_76182__$1;
(statearr_76186_77174[(2)] = inst_76079);

(statearr_76186_77174[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (1))){
var inst_75980 = (function (){return (function (p1__75974_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__75974_SHARP_.transactionHash);
});
})();
var inst_75981 = cljs.core.deref(revert.ethereum.provider);
var inst_75982 = inst_75981.getLogs(staked_filter);
var inst_75983 = cljs.core.async.interop.p__GT_c(inst_75982);
var state_76182__$1 = (function (){var statearr_76187 = state_76182;
(statearr_76187[(9)] = inst_75980);

return statearr_76187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(2),inst_75983);
} else {
if((state_val_76183 === (24))){
var inst_76056 = (state_76182[(10)]);
var state_76182__$1 = state_76182;
var statearr_76188_77175 = state_76182__$1;
(statearr_76188_77175[(2)] = inst_76056);

(statearr_76188_77175[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (39))){
var inst_76106 = (state_76182[(11)]);
var inst_76113 = (function(){throw inst_76106})();
var state_76182__$1 = state_76182;
var statearr_76189_77176 = state_76182__$1;
(statearr_76189_77176[(2)] = inst_76113);

(statearr_76189_77176[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (46))){
var inst_76138 = (state_76182[(12)]);
var inst_76144 = cljs.core.first(inst_76138);
var state_76182__$1 = state_76182;
var statearr_76190_77177 = state_76182__$1;
(statearr_76190_77177[(2)] = inst_76144);

(statearr_76190_77177[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (4))){
var inst_75985 = (state_76182[(13)]);
var state_76182__$1 = state_76182;
var statearr_76191_77178 = state_76182__$1;
(statearr_76191_77178[(2)] = inst_75985);

(statearr_76191_77178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (15))){
var inst_76030 = (state_76182[(14)]);
var inst_76037 = (function(){throw inst_76030})();
var state_76182__$1 = state_76182;
var statearr_76192_77179 = state_76182__$1;
(statearr_76192_77179[(2)] = inst_76037);

(statearr_76192_77179[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (48))){
var inst_76015 = (state_76182[(15)]);
var inst_76086 = (state_76182[(16)]);
var inst_75997 = (state_76182[(17)]);
var inst_76092 = (state_76182[(18)]);
var inst_76068 = (state_76182[(19)]);
var inst_76089 = (state_76182[(20)]);
var inst_76120 = (state_76182[(21)]);
var inst_76136 = (state_76182[(22)]);
var inst_76095 = (state_76182[(23)]);
var inst_76052 = (state_76182[(24)]);
var inst_76082 = (state_76182[(25)]);
var inst_76134 = (state_76182[(26)]);
var inst_76124 = (state_76182[(27)]);
var inst_76049 = (state_76182[(28)]);
var inst_76146 = (state_76182[(29)]);
var inst_76083 = (state_76182[(30)]);
var inst_76138 = (state_76182[(12)]);
var inst_76042 = (state_76182[(31)]);
var inst_76132 = (state_76182[(32)]);
var inst_76128 = (state_76182[(33)]);
var inst_76067 = (state_76182[(34)]);
var inst_76150 = (state_76182[(2)]);
var inst_76151 = (function (){var staking_pool_lp_address = inst_76083;
var lp_symbols = inst_76089;
var lp_transfers_in = inst_76132;
var rewards_token = inst_76095;
var pool_pid = inst_76052;
var deposit_data = inst_76049;
var lp_deposits = inst_76136;
var my_lps_staked_SINGLEQUOTE_ = inst_76068;
var my_lps_staked = inst_76067;
var all_staking_deposits = inst_76128;
var staked = inst_75997;
var total_pool_reserves = inst_76092;
var pids = inst_76138;
var pool_info = inst_76082;
var reward_transfers = inst_76124;
var staked2 = inst_76015;
var total_unis = inst_76086;
var lp_decimals = (18);
var lp_transfers_hashes = inst_76134;
var all_staking_withdrawals = inst_76150;
var pid = inst_76146;
var rewards_earned = inst_76120;
var deposit = inst_76042;
return (function (p1__75978_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698).cljs$core$IFn$_invoke$arity$1(p1__75978_SHARP_),pid);
});
})();
var inst_76152 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_76150,inst_76128);
var inst_76153 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_76151,inst_76152);
var inst_76154 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_76153);
var inst_76155 = cljs.core.set(inst_76154);
var inst_76156 = (function (){var staking_pool_lp_address = inst_76083;
var lp_symbols = inst_76089;
var lp_transfers_in = inst_76132;
var rewards_token = inst_76095;
var pool_pid = inst_76052;
var deposit_data = inst_76049;
var lp_deposits = inst_76136;
var my_lps_staked_SINGLEQUOTE_ = inst_76068;
var my_lps_staked = inst_76067;
var all_staking_deposits = inst_76128;
var staked = inst_75997;
var total_pool_reserves = inst_76092;
var pids = inst_76138;
var pool_info = inst_76082;
var reward_transfers = inst_76124;
var staked2 = inst_76015;
var total_unis = inst_76086;
var relevant_txids = inst_76155;
var lp_decimals = (18);
var lp_transfers_hashes = inst_76134;
var all_staking_withdrawals = inst_76150;
var pid = inst_76146;
var rewards_earned = inst_76120;
var deposit = inst_76042;
return (function (p1__75979_SHARP_){
return cljs.core.contains_QMARK_(relevant_txids,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__75979_SHARP_));
});
})();
var inst_76157 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_76156,inst_76124);
var inst_76158 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_76157);
var inst_76159 = clojure.string.lower_case(inst_76083);
var inst_76160 = clojure.string.lower_case(lp_address);
var inst_76161 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76159,inst_76160);
var state_76182__$1 = (function (){var statearr_76194 = state_76182;
(statearr_76194[(35)] = inst_76158);

return statearr_76194;
})();
if(inst_76161){
var statearr_76195_77180 = state_76182__$1;
(statearr_76195_77180[(1)] = (49));

} else {
var statearr_76196_77181 = state_76182__$1;
(statearr_76196_77181[(1)] = (50));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (50))){
var inst_76086 = (state_76182[(16)]);
var inst_76092 = (state_76182[(18)]);
var inst_76089 = (state_76182[(20)]);
var inst_76120 = (state_76182[(21)]);
var inst_76095 = (state_76182[(23)]);
var inst_76158 = (state_76182[(35)]);
var inst_76169 = revert.utils.bn((0));
var inst_76170 = revert.rewards.staked_positions(inst_76092,inst_76086,inst_76169,inst_76089);
var inst_76171 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_76172 = [inst_76120,inst_76095,inst_76158];
var inst_76173 = cljs.core.PersistentHashMap.fromArrays(inst_76171,inst_76172);
var inst_76174 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_76170,inst_76173);
var state_76182__$1 = state_76182;
var statearr_76197_77182 = state_76182__$1;
(statearr_76197_77182[(2)] = inst_76174);

(statearr_76197_77182[(1)] = (51));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (21))){
var inst_76047 = (state_76182[(2)]);
var state_76182__$1 = state_76182;
var statearr_76198_77183 = state_76182__$1;
(statearr_76198_77183[(2)] = inst_76047);

(statearr_76198_77183[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (31))){
var inst_76089 = (state_76182[(2)]);
var inst_76090 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_76182__$1 = (function (){var statearr_76199 = state_76182;
(statearr_76199[(20)] = inst_76089);

return statearr_76199;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(32),inst_76090);
} else {
if((state_val_76183 === (32))){
var inst_76092 = (state_76182[(2)]);
var inst_76093 = revert.rewards._LT_staking_rewards_token(staking_address);
var state_76182__$1 = (function (){var statearr_76200 = state_76182;
(statearr_76200[(18)] = inst_76092);

return statearr_76200;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(33),inst_76093);
} else {
if((state_val_76183 === (40))){
var inst_76106 = (state_76182[(11)]);
var state_76182__$1 = state_76182;
var statearr_76201_77184 = state_76182__$1;
(statearr_76201_77184[(2)] = inst_76106);

(statearr_76201_77184[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (33))){
var inst_76095 = (state_76182[(2)]);
var state_76182__$1 = (function (){var statearr_76202 = state_76182;
(statearr_76202[(23)] = inst_76095);

return statearr_76202;
})();
var statearr_76203_77185 = state_76182__$1;
(statearr_76203_77185[(2)] = null);

(statearr_76203_77185[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (13))){
var inst_76023 = (state_76182[(2)]);
var state_76182__$1 = state_76182;
var statearr_76204_77186 = state_76182__$1;
(statearr_76204_77186[(2)] = inst_76023);

(statearr_76204_77186[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (22))){
var inst_76056 = (state_76182[(10)]);
var inst_76056__$1 = (state_76182[(2)]);
var inst_76057 = (inst_76056__$1 instanceof cljs.core.ExceptionInfo);
var inst_76058 = cljs.core.ex_data(inst_76056__$1);
var inst_76059 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76058);
var inst_76060 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76059,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76061 = ((inst_76057) && (inst_76060));
var state_76182__$1 = (function (){var statearr_76205 = state_76182;
(statearr_76205[(10)] = inst_76056__$1);

return statearr_76205;
})();
if(cljs.core.truth_(inst_76061)){
var statearr_76206_77187 = state_76182__$1;
(statearr_76206_77187[(1)] = (23));

} else {
var statearr_76207_77188 = state_76182__$1;
(statearr_76207_77188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (36))){
var inst_76096 = (state_76182[(2)]);
var inst_76097 = revert.utils.bn((0));
var state_76182__$1 = (function (){var statearr_76208 = state_76182;
(statearr_76208[(36)] = inst_76096);

return statearr_76208;
})();
var statearr_76209_77189 = state_76182__$1;
(statearr_76209_77189[(2)] = inst_76097);

(statearr_76209_77189[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (41))){
var inst_76116 = (state_76182[(2)]);
var inst_76117 = revert.utils.ebn__GT_bn(inst_76116,(18));
var ___$6 = (function (){var statearr_76210 = state_76182;
(statearr_76210[(4)] = cljs.core.rest((state_76182[(4)])));

return statearr_76210;
})();
var state_76182__$1 = state_76182;
var statearr_76211_77190 = state_76182__$1;
(statearr_76211_77190[(2)] = inst_76117);

(statearr_76211_77190[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (43))){
var inst_76128 = (state_76182[(2)]);
var inst_76129 = cljs.core.deref(revert.ethereum.provider);
var inst_76130 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_76129,lp_address,user_address,staking_address);
var state_76182__$1 = (function (){var statearr_76212 = state_76182;
(statearr_76212[(33)] = inst_76128);

return statearr_76212;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(44),inst_76130);
} else {
if((state_val_76183 === (29))){
var inst_76082 = (state_76182[(25)]);
var inst_76082__$1 = (state_76182[(2)]);
var inst_76083 = cljs.core.first(inst_76082__$1);
var inst_76084 = revert.rewards._LT_total_pool_lps(lp_address);
var state_76182__$1 = (function (){var statearr_76213 = state_76182;
(statearr_76213[(25)] = inst_76082__$1);

(statearr_76213[(30)] = inst_76083);

return statearr_76213;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(30),inst_76084);
} else {
if((state_val_76183 === (44))){
var inst_76015 = (state_76182[(15)]);
var inst_76086 = (state_76182[(16)]);
var inst_75997 = (state_76182[(17)]);
var inst_76092 = (state_76182[(18)]);
var inst_76068 = (state_76182[(19)]);
var inst_76089 = (state_76182[(20)]);
var inst_76120 = (state_76182[(21)]);
var inst_76136 = (state_76182[(22)]);
var inst_76095 = (state_76182[(23)]);
var inst_76052 = (state_76182[(24)]);
var inst_76082 = (state_76182[(25)]);
var inst_76134 = (state_76182[(26)]);
var inst_76124 = (state_76182[(27)]);
var inst_76049 = (state_76182[(28)]);
var inst_76083 = (state_76182[(30)]);
var inst_76138 = (state_76182[(12)]);
var inst_76042 = (state_76182[(31)]);
var inst_76132 = (state_76182[(32)]);
var inst_76128 = (state_76182[(33)]);
var inst_76067 = (state_76182[(34)]);
var inst_76132__$1 = (state_76182[(2)]);
var inst_76133 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hash","hash",-13781596),inst_76132__$1);
var inst_76134__$1 = cljs.core.set(inst_76133);
var inst_76135 = (function (){var staking_pool_lp_address = inst_76083;
var lp_symbols = inst_76089;
var lp_transfers_in = inst_76132__$1;
var rewards_token = inst_76095;
var pool_pid = inst_76052;
var deposit_data = inst_76049;
var my_lps_staked_SINGLEQUOTE_ = inst_76068;
var my_lps_staked = inst_76067;
var all_staking_deposits = inst_76128;
var staked = inst_75997;
var total_pool_reserves = inst_76092;
var pool_info = inst_76082;
var reward_transfers = inst_76124;
var staked2 = inst_76015;
var total_unis = inst_76086;
var lp_decimals = (18);
var lp_transfers_hashes = inst_76134__$1;
var rewards_earned = inst_76120;
var deposit = inst_76042;
return (function (p1__75977_SHARP_){
return cljs.core.contains_QMARK_(lp_transfers_hashes,new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(p1__75977_SHARP_));
});
})();
var inst_76136__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_76135,inst_76128);
var inst_76137 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pid","pid",1018387698),inst_76136__$1);
var inst_76138__$1 = cljs.core.set(inst_76137);
var inst_76139 = cljs.core.count(inst_76138__$1);
var inst_76140 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(inst_76139,(1));
var state_76182__$1 = (function (){var statearr_76214 = state_76182;
(statearr_76214[(22)] = inst_76136__$1);

(statearr_76214[(26)] = inst_76134__$1);

(statearr_76214[(12)] = inst_76138__$1);

(statearr_76214[(32)] = inst_76132__$1);

return statearr_76214;
})();
if(inst_76140){
var statearr_76215_77191 = state_76182__$1;
(statearr_76215_77191[(1)] = (45));

} else {
var statearr_76216_77192 = state_76182__$1;
(statearr_76216_77192[(1)] = (46));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (6))){
var inst_76003 = (state_76182[(7)]);
var inst_76003__$1 = (state_76182[(2)]);
var inst_76004 = (inst_76003__$1 instanceof cljs.core.ExceptionInfo);
var inst_76005 = cljs.core.ex_data(inst_76003__$1);
var inst_76006 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76005);
var inst_76007 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76006,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76008 = ((inst_76004) && (inst_76007));
var state_76182__$1 = (function (){var statearr_76217 = state_76182;
(statearr_76217[(7)] = inst_76003__$1);

return statearr_76217;
})();
if(cljs.core.truth_(inst_76008)){
var statearr_76218_77193 = state_76182__$1;
(statearr_76218_77193[(1)] = (7));

} else {
var statearr_76219_77194 = state_76182__$1;
(statearr_76219_77194[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (28))){
var inst_76072 = (state_76182[(8)]);
var state_76182__$1 = state_76182;
var statearr_76220_77195 = state_76182__$1;
(statearr_76220_77195[(2)] = inst_76072);

(statearr_76220_77195[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (51))){
var inst_76176 = (state_76182[(2)]);
var state_76182__$1 = state_76182;
var statearr_76221_77196 = state_76182__$1;
(statearr_76221_77196[(2)] = inst_76176);

(statearr_76221_77196[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (25))){
var inst_76052 = (state_76182[(24)]);
var inst_76067 = (state_76182[(34)]);
var inst_76066 = (state_76182[(2)]);
var inst_76067__$1 = cljs.core.first(inst_76066);
var inst_76068 = revert.utils.ebn__GT_bn(inst_76067__$1,(18));
var inst_76069 = cheff_contract.poolInfo(inst_76052);
var inst_76070 = cljs.core.async.interop.p__GT_c(inst_76069);
var state_76182__$1 = (function (){var statearr_76222 = state_76182;
(statearr_76222[(19)] = inst_76068);

(statearr_76222[(34)] = inst_76067__$1);

return statearr_76222;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(26),inst_76070);
} else {
if((state_val_76183 === (34))){
var inst_76052 = (state_76182[(24)]);
var ___$6 = (function (){var statearr_76223 = state_76182;
(statearr_76223[(4)] = cljs.core.cons((37),(state_76182[(4)])));

return statearr_76223;
})();
var inst_76103 = cheff_contract.pendingSushi(inst_76052,user_address);
var inst_76104 = cljs.core.async.interop.p__GT_c(inst_76103);
var state_76182__$1 = state_76182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(38),inst_76104);
} else {
if((state_val_76183 === (17))){
var inst_76025 = (state_76182[(37)]);
var inst_76042 = (state_76182[(31)]);
var inst_76040 = (state_76182[(2)]);
var inst_76041 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_76025,inst_76040);
var inst_76042__$1 = cljs.core.first(inst_76041);
var inst_76043 = (inst_76042__$1 == null);
var state_76182__$1 = (function (){var statearr_76224 = state_76182;
(statearr_76224[(31)] = inst_76042__$1);

return statearr_76224;
})();
if(cljs.core.truth_(inst_76043)){
var statearr_76225_77197 = state_76182__$1;
(statearr_76225_77197[(1)] = (18));

} else {
var statearr_76226_77198 = state_76182__$1;
(statearr_76226_77198[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (3))){
var inst_75985 = (state_76182[(13)]);
var inst_75992 = (function(){throw inst_75985})();
var state_76182__$1 = state_76182;
var statearr_76227_77199 = state_76182__$1;
(statearr_76227_77199[(2)] = inst_75992);

(statearr_76227_77199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (12))){
var inst_76180 = (state_76182[(2)]);
var state_76182__$1 = state_76182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76182__$1,inst_76180);
} else {
if((state_val_76183 === (2))){
var inst_75985 = (state_76182[(13)]);
var inst_75985__$1 = (state_76182[(2)]);
var inst_75986 = (inst_75985__$1 instanceof cljs.core.ExceptionInfo);
var inst_75987 = cljs.core.ex_data(inst_75985__$1);
var inst_75988 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_75987);
var inst_75989 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_75988,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_75990 = ((inst_75986) && (inst_75989));
var state_76182__$1 = (function (){var statearr_76228 = state_76182;
(statearr_76228[(13)] = inst_75985__$1);

return statearr_76228;
})();
if(cljs.core.truth_(inst_75990)){
var statearr_76229_77200 = state_76182__$1;
(statearr_76229_77200[(1)] = (3));

} else {
var statearr_76230_77201 = state_76182__$1;
(statearr_76230_77201[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (23))){
var inst_76056 = (state_76182[(10)]);
var inst_76063 = (function(){throw inst_76056})();
var state_76182__$1 = state_76182;
var statearr_76231_77202 = state_76182__$1;
(statearr_76231_77202[(2)] = inst_76063);

(statearr_76231_77202[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (47))){
var inst_76146 = (state_76182[(2)]);
var inst_76147 = cljs.core.deref(revert.ethereum.provider);
var inst_76148 = revert.ethereum._LT_user_token_withdrawals(inst_76147,staking_address,user_address);
var state_76182__$1 = (function (){var statearr_76232 = state_76182;
(statearr_76232[(29)] = inst_76146);

return statearr_76232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(48),inst_76148);
} else {
if((state_val_76183 === (35))){
var inst_76095 = (state_76182[(23)]);
var inst_76120 = (state_76182[(2)]);
var inst_76121 = cljs.core.deref(revert.ethereum.provider);
var inst_76122 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_76121,inst_76095,staking_address,user_address);
var state_76182__$1 = (function (){var statearr_76233 = state_76182;
(statearr_76233[(21)] = inst_76120);

return statearr_76233;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(42),inst_76122);
} else {
if((state_val_76183 === (19))){
var inst_76052 = (state_76182[(24)]);
var inst_76049 = (state_76182[(28)]);
var inst_76042 = (state_76182[(31)]);
var inst_76049__$1 = revert.ethereum.decode_event_data(inst_76042);
var inst_76050 = revert.rewards.deposit_pid(inst_76049__$1);
var inst_76051 = revert.utils.ebn__GT_bn(inst_76050,(0));
var inst_76052__$1 = inst_76051.toNumber();
var inst_76053 = cheff_contract.userInfo(inst_76052__$1,user_address);
var inst_76054 = cljs.core.async.interop.p__GT_c(inst_76053);
var state_76182__$1 = (function (){var statearr_76234 = state_76182;
(statearr_76234[(24)] = inst_76052__$1);

(statearr_76234[(28)] = inst_76049__$1);

return statearr_76234;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(22),inst_76054);
} else {
if((state_val_76183 === (11))){
var inst_76015 = (state_76182[(15)]);
var inst_75997 = (state_76182[(17)]);
var inst_76025 = (function (){var staked = inst_75997;
var staked2 = inst_76015;
return (function (p1__75976_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__75976_SHARP_.transactionHash);
});
})();
var inst_76026 = cljs.core.deref(revert.ethereum.provider);
var inst_76027 = inst_76026.getLogs(deposit_filter);
var inst_76028 = cljs.core.async.interop.p__GT_c(inst_76027);
var state_76182__$1 = (function (){var statearr_76235 = state_76182;
(statearr_76235[(37)] = inst_76025);

return statearr_76235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(14),inst_76028);
} else {
if((state_val_76183 === (9))){
var inst_76015 = (state_76182[(15)]);
var inst_75997 = (state_76182[(17)]);
var inst_75998 = (state_76182[(38)]);
var inst_76013 = (state_76182[(2)]);
var inst_76014 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_75998,inst_76013);
var inst_76015__$1 = cljs.core.first(inst_76014);
var inst_76016 = (inst_75997 == null);
var inst_76017 = (inst_76015__$1 == null);
var inst_76018 = ((inst_76016) && (inst_76017));
var inst_76019 = cljs.core.not(inst_76018);
var state_76182__$1 = (function (){var statearr_76236 = state_76182;
(statearr_76236[(15)] = inst_76015__$1);

return statearr_76236;
})();
if(inst_76019){
var statearr_76237_77203 = state_76182__$1;
(statearr_76237_77203[(1)] = (10));

} else {
var statearr_76238_77204 = state_76182__$1;
(statearr_76238_77204[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (5))){
var inst_75997 = (state_76182[(17)]);
var inst_75980 = (state_76182[(9)]);
var inst_75995 = (state_76182[(2)]);
var inst_75996 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_75980,inst_75995);
var inst_75997__$1 = cljs.core.first(inst_75996);
var inst_75998 = (function (){var staked = inst_75997__$1;
return (function (p1__75975_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tx_hash,p1__75975_SHARP_.transactionHash);
});
})();
var inst_75999 = cljs.core.deref(revert.ethereum.provider);
var inst_76000 = inst_75999.getLogs(staked_filter2);
var inst_76001 = cljs.core.async.interop.p__GT_c(inst_76000);
var state_76182__$1 = (function (){var statearr_76239 = state_76182;
(statearr_76239[(17)] = inst_75997__$1);

(statearr_76239[(38)] = inst_75998);

return statearr_76239;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(6),inst_76001);
} else {
if((state_val_76183 === (14))){
var inst_76030 = (state_76182[(14)]);
var inst_76030__$1 = (state_76182[(2)]);
var inst_76031 = (inst_76030__$1 instanceof cljs.core.ExceptionInfo);
var inst_76032 = cljs.core.ex_data(inst_76030__$1);
var inst_76033 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76032);
var inst_76034 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76033,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76035 = ((inst_76031) && (inst_76034));
var state_76182__$1 = (function (){var statearr_76240 = state_76182;
(statearr_76240[(14)] = inst_76030__$1);

return statearr_76240;
})();
if(cljs.core.truth_(inst_76035)){
var statearr_76241_77205 = state_76182__$1;
(statearr_76241_77205[(1)] = (15));

} else {
var statearr_76242_77206 = state_76182__$1;
(statearr_76242_77206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (45))){
var inst_76138 = (state_76182[(12)]);
var inst_76142 = cljs.core.first(inst_76138);
var state_76182__$1 = state_76182;
var statearr_76243_77207 = state_76182__$1;
(statearr_76243_77207[(2)] = inst_76142);

(statearr_76243_77207[(1)] = (47));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (26))){
var inst_76072 = (state_76182[(8)]);
var inst_76072__$1 = (state_76182[(2)]);
var inst_76073 = (inst_76072__$1 instanceof cljs.core.ExceptionInfo);
var inst_76074 = cljs.core.ex_data(inst_76072__$1);
var inst_76075 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76074);
var inst_76076 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76075,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76077 = ((inst_76073) && (inst_76076));
var state_76182__$1 = (function (){var statearr_76244 = state_76182;
(statearr_76244[(8)] = inst_76072__$1);

return statearr_76244;
})();
if(cljs.core.truth_(inst_76077)){
var statearr_76245_77208 = state_76182__$1;
(statearr_76245_77208[(1)] = (27));

} else {
var statearr_76246_77209 = state_76182__$1;
(statearr_76246_77209[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (16))){
var inst_76030 = (state_76182[(14)]);
var state_76182__$1 = state_76182;
var statearr_76247_77210 = state_76182__$1;
(statearr_76247_77210[(2)] = inst_76030);

(statearr_76247_77210[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (38))){
var inst_76106 = (state_76182[(11)]);
var inst_76106__$1 = (state_76182[(2)]);
var inst_76107 = (inst_76106__$1 instanceof cljs.core.ExceptionInfo);
var inst_76108 = cljs.core.ex_data(inst_76106__$1);
var inst_76109 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76108);
var inst_76110 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76109,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76111 = ((inst_76107) && (inst_76110));
var state_76182__$1 = (function (){var statearr_76248 = state_76182;
(statearr_76248[(11)] = inst_76106__$1);

return statearr_76248;
})();
if(cljs.core.truth_(inst_76111)){
var statearr_76249_77211 = state_76182__$1;
(statearr_76249_77211[(1)] = (39));

} else {
var statearr_76250_77212 = state_76182__$1;
(statearr_76250_77212[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (30))){
var inst_76086 = (state_76182[(2)]);
var inst_76087 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_76182__$1 = (function (){var statearr_76251 = state_76182;
(statearr_76251[(16)] = inst_76086);

return statearr_76251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(31),inst_76087);
} else {
if((state_val_76183 === (10))){
var inst_76021 = revert.rewards._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_76182__$1 = state_76182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(13),inst_76021);
} else {
if((state_val_76183 === (18))){
var inst_76045 = revert.rewards._LT_staked_lp_positions_sr(lp_address,staking_address,user_address);
var state_76182__$1 = state_76182;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(21),inst_76045);
} else {
if((state_val_76183 === (42))){
var inst_76124 = (state_76182[(2)]);
var inst_76125 = cljs.core.deref(revert.ethereum.provider);
var inst_76126 = revert.ethereum._LT_user_token_deposits(inst_76125,staking_address,user_address);
var state_76182__$1 = (function (){var statearr_76253 = state_76182;
(statearr_76253[(27)] = inst_76124);

return statearr_76253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76182__$1,(43),inst_76126);
} else {
if((state_val_76183 === (37))){
var ___$6 = (function (){var statearr_76254 = state_76182;
(statearr_76254[(4)] = cljs.core.rest((state_76182[(4)])));

return statearr_76254;
})();
var state_76182__$1 = state_76182;
var ex76252 = (state_76182__$1[(2)]);
var statearr_76255_77213 = state_76182__$1;
(statearr_76255_77213[(5)] = ex76252);


if((ex76252 instanceof Object)){
var statearr_76256_77214 = state_76182__$1;
(statearr_76256_77214[(1)] = (36));

(statearr_76256_77214[(5)] = null);

} else {
throw ex76252;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (8))){
var inst_76003 = (state_76182[(7)]);
var state_76182__$1 = state_76182;
var statearr_76257_77215 = state_76182__$1;
(statearr_76257_77215[(2)] = inst_76003);

(statearr_76257_77215[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76183 === (49))){
var inst_76086 = (state_76182[(16)]);
var inst_76092 = (state_76182[(18)]);
var inst_76068 = (state_76182[(19)]);
var inst_76089 = (state_76182[(20)]);
var inst_76120 = (state_76182[(21)]);
var inst_76095 = (state_76182[(23)]);
var inst_76158 = (state_76182[(35)]);
var inst_76163 = revert.rewards.staked_positions(inst_76092,inst_76086,inst_76068,inst_76089);
var inst_76164 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434)];
var inst_76165 = [inst_76120,inst_76095,inst_76158];
var inst_76166 = cljs.core.PersistentHashMap.fromArrays(inst_76164,inst_76165);
var inst_76167 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_76163,inst_76166);
var state_76182__$1 = state_76182;
var statearr_76258_77216 = state_76182__$1;
(statearr_76258_77216[(2)] = inst_76167);

(statearr_76258_77216[(1)] = (51));


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
var statearr_76259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76259[(0)] = revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__);

(statearr_76259[(1)] = (1));

return statearr_76259;
});
var revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____1 = (function (state_76182){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76182);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76260){var ex__52189__auto__ = e76260;
var statearr_76261_77217 = state_76182;
(statearr_76261_77217[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76182[(4)]))){
var statearr_76262_77218 = state_76182;
(statearr_76262_77218[(1)] = cljs.core.first((state_76182[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77219 = state_76182;
state_76182 = G__77219;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__ = function(state_76182){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____1.call(this,state_76182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_by_event_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76263 = f__52209__auto__();
(statearr_76263[(6)] = c__52208__auto__);

return statearr_76263;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76280){
var state_val_76281 = (state_76280[(1)]);
if((state_val_76281 === (1))){
var inst_76264 = cljs.core.deref(revert.ethereum.provider);
var inst_76265 = inst_76264.getLogs(claimed_filter);
var inst_76266 = cljs.core.async.interop.p__GT_c(inst_76265);
var state_76280__$1 = state_76280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76280__$1,(2),inst_76266);
} else {
if((state_val_76281 === (2))){
var inst_76268 = (state_76280[(7)]);
var inst_76268__$1 = (state_76280[(2)]);
var inst_76269 = (inst_76268__$1 instanceof cljs.core.ExceptionInfo);
var inst_76270 = cljs.core.ex_data(inst_76268__$1);
var inst_76271 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76270);
var inst_76272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76271,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76273 = ((inst_76269) && (inst_76272));
var state_76280__$1 = (function (){var statearr_76282 = state_76280;
(statearr_76282[(7)] = inst_76268__$1);

return statearr_76282;
})();
if(cljs.core.truth_(inst_76273)){
var statearr_76283_77220 = state_76280__$1;
(statearr_76283_77220[(1)] = (3));

} else {
var statearr_76284_77221 = state_76280__$1;
(statearr_76284_77221[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76281 === (3))){
var inst_76268 = (state_76280[(7)]);
var inst_76275 = (function(){throw inst_76268})();
var state_76280__$1 = state_76280;
var statearr_76285_77222 = state_76280__$1;
(statearr_76285_77222[(2)] = inst_76275);

(statearr_76285_77222[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76281 === (4))){
var inst_76268 = (state_76280[(7)]);
var state_76280__$1 = state_76280;
var statearr_76286_77223 = state_76280__$1;
(statearr_76286_77223[(2)] = inst_76268);

(statearr_76286_77223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76281 === (5))){
var inst_76278 = (state_76280[(2)]);
var state_76280__$1 = state_76280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76280__$1,inst_76278);
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
var statearr_76287 = [null,null,null,null,null,null,null,null];
(statearr_76287[(0)] = revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__);

(statearr_76287[(1)] = (1));

return statearr_76287;
});
var revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____1 = (function (state_76280){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76280);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76288){var ex__52189__auto__ = e76288;
var statearr_76289_77224 = state_76280;
(statearr_76289_77224[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76280[(4)]))){
var statearr_76290_77225 = state_76280;
(statearr_76290_77225[(1)] = cljs.core.first((state_76280[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77226 = state_76280;
state_76280 = G__77226;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__ = function(state_76280){
switch(arguments.length){
case 0:
return revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____1.call(this,state_76280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____0;
revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto____1;
return revert$rewards$_LT_alchemix_claims_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76291 = f__52209__auto__();
(statearr_76291[(6)] = c__52208__auto__);

return statearr_76291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_get_stake_unclaimed = (function revert$rewards$_LT_get_stake_unclaimed(contract,user_address,pid){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76307){
var state_val_76308 = (state_76307[(1)]);
if((state_val_76308 === (1))){
var inst_76292 = contract.getStakeTotalUnclaimed(user_address,pid);
var inst_76293 = cljs.core.async.interop.p__GT_c(inst_76292);
var state_76307__$1 = state_76307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76307__$1,(2),inst_76293);
} else {
if((state_val_76308 === (2))){
var inst_76295 = (state_76307[(7)]);
var inst_76295__$1 = (state_76307[(2)]);
var inst_76296 = (inst_76295__$1 instanceof cljs.core.ExceptionInfo);
var inst_76297 = cljs.core.ex_data(inst_76295__$1);
var inst_76298 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76297);
var inst_76299 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76298,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76300 = ((inst_76296) && (inst_76299));
var state_76307__$1 = (function (){var statearr_76309 = state_76307;
(statearr_76309[(7)] = inst_76295__$1);

return statearr_76309;
})();
if(cljs.core.truth_(inst_76300)){
var statearr_76310_77227 = state_76307__$1;
(statearr_76310_77227[(1)] = (3));

} else {
var statearr_76311_77228 = state_76307__$1;
(statearr_76311_77228[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76308 === (3))){
var inst_76295 = (state_76307[(7)]);
var inst_76302 = (function(){throw inst_76295})();
var state_76307__$1 = state_76307;
var statearr_76312_77229 = state_76307__$1;
(statearr_76312_77229[(2)] = inst_76302);

(statearr_76312_77229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76308 === (4))){
var inst_76295 = (state_76307[(7)]);
var state_76307__$1 = state_76307;
var statearr_76313_77230 = state_76307__$1;
(statearr_76313_77230[(2)] = inst_76295);

(statearr_76313_77230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76308 === (5))){
var inst_76305 = (state_76307[(2)]);
var state_76307__$1 = state_76307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76307__$1,inst_76305);
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
var statearr_76314 = [null,null,null,null,null,null,null,null];
(statearr_76314[(0)] = revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__);

(statearr_76314[(1)] = (1));

return statearr_76314;
});
var revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____1 = (function (state_76307){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76307);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76315){var ex__52189__auto__ = e76315;
var statearr_76316_77231 = state_76307;
(statearr_76316_77231[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76307[(4)]))){
var statearr_76317_77232 = state_76307;
(statearr_76317_77232[(1)] = cljs.core.first((state_76307[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77233 = state_76307;
state_76307 = G__77233;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__ = function(state_76307){
switch(arguments.length){
case 0:
return revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____1.call(this,state_76307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____0;
revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto____1;
return revert$rewards$_LT_get_stake_unclaimed_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76318 = f__52209__auto__();
(statearr_76318[(6)] = c__52208__auto__);

return statearr_76318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_get_stake_deposited = (function revert$rewards$_LT_get_stake_deposited(contract,user_address,pid){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76334){
var state_val_76335 = (state_76334[(1)]);
if((state_val_76335 === (1))){
var inst_76319 = contract.getStakeTotalDeposited(user_address,pid);
var inst_76320 = cljs.core.async.interop.p__GT_c(inst_76319);
var state_76334__$1 = state_76334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76334__$1,(2),inst_76320);
} else {
if((state_val_76335 === (2))){
var inst_76322 = (state_76334[(7)]);
var inst_76322__$1 = (state_76334[(2)]);
var inst_76323 = (inst_76322__$1 instanceof cljs.core.ExceptionInfo);
var inst_76324 = cljs.core.ex_data(inst_76322__$1);
var inst_76325 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76324);
var inst_76326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76325,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76327 = ((inst_76323) && (inst_76326));
var state_76334__$1 = (function (){var statearr_76336 = state_76334;
(statearr_76336[(7)] = inst_76322__$1);

return statearr_76336;
})();
if(cljs.core.truth_(inst_76327)){
var statearr_76337_77234 = state_76334__$1;
(statearr_76337_77234[(1)] = (3));

} else {
var statearr_76338_77235 = state_76334__$1;
(statearr_76338_77235[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76335 === (3))){
var inst_76322 = (state_76334[(7)]);
var inst_76329 = (function(){throw inst_76322})();
var state_76334__$1 = state_76334;
var statearr_76339_77236 = state_76334__$1;
(statearr_76339_77236[(2)] = inst_76329);

(statearr_76339_77236[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76335 === (4))){
var inst_76322 = (state_76334[(7)]);
var state_76334__$1 = state_76334;
var statearr_76340_77237 = state_76334__$1;
(statearr_76340_77237[(2)] = inst_76322);

(statearr_76340_77237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76335 === (5))){
var inst_76332 = (state_76334[(2)]);
var state_76334__$1 = state_76334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76334__$1,inst_76332);
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
var statearr_76341 = [null,null,null,null,null,null,null,null];
(statearr_76341[(0)] = revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__);

(statearr_76341[(1)] = (1));

return statearr_76341;
});
var revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____1 = (function (state_76334){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76334);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76342){var ex__52189__auto__ = e76342;
var statearr_76343_77238 = state_76334;
(statearr_76343_77238[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76334[(4)]))){
var statearr_76344_77239 = state_76334;
(statearr_76344_77239[(1)] = cljs.core.first((state_76334[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77240 = state_76334;
state_76334 = G__77240;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__ = function(state_76334){
switch(arguments.length){
case 0:
return revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____1.call(this,state_76334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____0;
revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto____1;
return revert$rewards$_LT_get_stake_deposited_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76345 = f__52209__auto__();
(statearr_76345[(6)] = c__52208__auto__);

return statearr_76345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_get_token_pool_ids = (function revert$rewards$_LT_get_token_pool_ids(contract,lp_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76361){
var state_val_76362 = (state_76361[(1)]);
if((state_val_76362 === (1))){
var inst_76346 = contract.tokenPoolIds(lp_address);
var inst_76347 = cljs.core.async.interop.p__GT_c(inst_76346);
var state_76361__$1 = state_76361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76361__$1,(2),inst_76347);
} else {
if((state_val_76362 === (2))){
var inst_76349 = (state_76361[(7)]);
var inst_76349__$1 = (state_76361[(2)]);
var inst_76350 = (inst_76349__$1 instanceof cljs.core.ExceptionInfo);
var inst_76351 = cljs.core.ex_data(inst_76349__$1);
var inst_76352 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76351);
var inst_76353 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76352,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76354 = ((inst_76350) && (inst_76353));
var state_76361__$1 = (function (){var statearr_76363 = state_76361;
(statearr_76363[(7)] = inst_76349__$1);

return statearr_76363;
})();
if(cljs.core.truth_(inst_76354)){
var statearr_76364_77241 = state_76361__$1;
(statearr_76364_77241[(1)] = (3));

} else {
var statearr_76365_77242 = state_76361__$1;
(statearr_76365_77242[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76362 === (3))){
var inst_76349 = (state_76361[(7)]);
var inst_76356 = (function(){throw inst_76349})();
var state_76361__$1 = state_76361;
var statearr_76366_77243 = state_76361__$1;
(statearr_76366_77243[(2)] = inst_76356);

(statearr_76366_77243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76362 === (4))){
var inst_76349 = (state_76361[(7)]);
var state_76361__$1 = state_76361;
var statearr_76367_77244 = state_76361__$1;
(statearr_76367_77244[(2)] = inst_76349);

(statearr_76367_77244[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76362 === (5))){
var inst_76359 = (state_76361[(2)]);
var state_76361__$1 = state_76361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76361__$1,inst_76359);
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
var statearr_76368 = [null,null,null,null,null,null,null,null];
(statearr_76368[(0)] = revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__);

(statearr_76368[(1)] = (1));

return statearr_76368;
});
var revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____1 = (function (state_76361){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76361);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76369){var ex__52189__auto__ = e76369;
var statearr_76370_77245 = state_76361;
(statearr_76370_77245[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76361[(4)]))){
var statearr_76371_77246 = state_76361;
(statearr_76371_77246[(1)] = cljs.core.first((state_76361[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77247 = state_76361;
state_76361 = G__77247;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__ = function(state_76361){
switch(arguments.length){
case 0:
return revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____1.call(this,state_76361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____0;
revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto____1;
return revert$rewards$_LT_get_token_pool_ids_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76372 = f__52209__auto__();
(statearr_76372[(6)] = c__52208__auto__);

return statearr_76372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_alchemix_rewards = (function revert$rewards$_LT_alchemix_rewards(lp_address,staking_address,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76445){
var state_val_76446 = (state_76445[(1)]);
if((state_val_76446 === (7))){
var inst_76394 = (state_76445[(7)]);
var inst_76401 = (function(){throw inst_76394})();
var state_76445__$1 = state_76445;
var statearr_76447_77248 = state_76445__$1;
(statearr_76447_77248[(2)] = inst_76401);

(statearr_76447_77248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76446 === (1))){
var inst_76375 = (state_76445[(8)]);
var inst_76375__$1 = revert.ethereum.make_contract(revert.ethereum.alchemix_abi,staking_address);
var inst_76376 = inst_76375__$1.reward();
var inst_76377 = cljs.core.async.interop.p__GT_c(inst_76376);
var state_76445__$1 = (function (){var statearr_76448 = state_76445;
(statearr_76448[(8)] = inst_76375__$1);

return statearr_76448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(2),inst_76377);
} else {
if((state_val_76446 === (4))){
var inst_76379 = (state_76445[(9)]);
var state_76445__$1 = state_76445;
var statearr_76449_77249 = state_76445__$1;
(statearr_76449_77249[(2)] = inst_76379);

(statearr_76449_77249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76446 === (15))){
var inst_76431 = (state_76445[(2)]);
var inst_76432 = revert.rewards._LT_lp_pool_symbols(lp_address);
var state_76445__$1 = (function (){var statearr_76450 = state_76445;
(statearr_76450[(10)] = inst_76431);

return statearr_76450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(16),inst_76432);
} else {
if((state_val_76446 === (13))){
var inst_76389 = (state_76445[(11)]);
var inst_76408 = (state_76445[(12)]);
var inst_76375 = (state_76445[(8)]);
var inst_76412 = (state_76445[(13)]);
var inst_76390 = (state_76445[(14)]);
var inst_76415 = (state_76445[(15)]);
var inst_76404 = (state_76445[(16)]);
var inst_76419 = (state_76445[(2)]);
var inst_76420 = (function (){var alchemy_contract = inst_76375;
var reward_token = inst_76389;
var reward_contract = inst_76390;
var decimals = inst_76404;
var pool_id = inst_76408;
var pending_rewards = inst_76412;
var filtered_claims = inst_76415;
var reward_transfers = inst_76419;
return (function (p1__76373_SHARP_){
return p1__76373_SHARP_.transactionHash;
});
})();
var inst_76421 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_76420,inst_76415);
var inst_76422 = cljs.core.set(inst_76421);
var inst_76423 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(revert.rewards.make_paid_rewards,inst_76419);
var inst_76424 = (function (){var filtered_claims = inst_76415;
var reward_token = inst_76389;
var decimals = inst_76404;
var paid_rewards = inst_76423;
var claim_hashes = inst_76422;
var reward_contract = inst_76390;
var reward_transfers = inst_76419;
var pending_rewards = inst_76412;
var alchemy_contract = inst_76375;
var pool_id = inst_76408;
return (function (p1__76374_SHARP_){
return cljs.core.contains_QMARK_(claim_hashes,new cljs.core.Keyword(null,"tx-hash","tx-hash",-1256378200).cljs$core$IFn$_invoke$arity$1(p1__76374_SHARP_));
});
})();
var inst_76425 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_76424,inst_76423);
var inst_76426 = revert.rewards._LT_total_pool_reserves(lp_address);
var state_76445__$1 = (function (){var statearr_76451 = state_76445;
(statearr_76451[(17)] = inst_76425);

return statearr_76451;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(14),inst_76426);
} else {
if((state_val_76446 === (6))){
var inst_76394 = (state_76445[(7)]);
var inst_76394__$1 = (state_76445[(2)]);
var inst_76395 = (inst_76394__$1 instanceof cljs.core.ExceptionInfo);
var inst_76396 = cljs.core.ex_data(inst_76394__$1);
var inst_76397 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76396);
var inst_76398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76397,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76399 = ((inst_76395) && (inst_76398));
var state_76445__$1 = (function (){var statearr_76452 = state_76445;
(statearr_76452[(7)] = inst_76394__$1);

return statearr_76452;
})();
if(cljs.core.truth_(inst_76399)){
var statearr_76453_77250 = state_76445__$1;
(statearr_76453_77250[(1)] = (7));

} else {
var statearr_76454_77251 = state_76445__$1;
(statearr_76454_77251[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76446 === (17))){
var inst_76431 = (state_76445[(10)]);
var inst_76389 = (state_76445[(11)]);
var inst_76428 = (state_76445[(18)]);
var inst_76425 = (state_76445[(17)]);
var inst_76412 = (state_76445[(13)]);
var inst_76434 = (state_76445[(19)]);
var inst_76437 = (state_76445[(2)]);
var inst_76438 = revert.utils.ebn__GT_bn(inst_76437,(18));
var inst_76439 = revert.rewards.staked_positions(inst_76428,inst_76431,inst_76438,inst_76434);
var inst_76440 = [new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429)];
var inst_76441 = [inst_76412,inst_76425,inst_76389];
var inst_76442 = cljs.core.PersistentHashMap.fromArrays(inst_76440,inst_76441);
var inst_76443 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_76439,inst_76442);
var state_76445__$1 = state_76445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76445__$1,inst_76443);
} else {
if((state_val_76446 === (3))){
var inst_76379 = (state_76445[(9)]);
var inst_76386 = (function(){throw inst_76379})();
var state_76445__$1 = state_76445;
var statearr_76455_77252 = state_76445__$1;
(statearr_76455_77252[(2)] = inst_76386);

(statearr_76455_77252[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76446 === (12))){
var inst_76389 = (state_76445[(11)]);
var inst_76415 = (state_76445[(2)]);
var inst_76416 = cljs.core.deref(revert.ethereum.provider);
var inst_76417 = revert.ethereum._LT_user_token_transfers.cljs$core$IFn$_invoke$arity$4(inst_76416,inst_76389,null,user_address);
var state_76445__$1 = (function (){var statearr_76456 = state_76445;
(statearr_76456[(15)] = inst_76415);

return statearr_76456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(13),inst_76417);
} else {
if((state_val_76446 === (2))){
var inst_76379 = (state_76445[(9)]);
var inst_76379__$1 = (state_76445[(2)]);
var inst_76380 = (inst_76379__$1 instanceof cljs.core.ExceptionInfo);
var inst_76381 = cljs.core.ex_data(inst_76379__$1);
var inst_76382 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76381);
var inst_76383 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76382,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76384 = ((inst_76380) && (inst_76383));
var state_76445__$1 = (function (){var statearr_76457 = state_76445;
(statearr_76457[(9)] = inst_76379__$1);

return statearr_76457;
})();
if(cljs.core.truth_(inst_76384)){
var statearr_76458_77253 = state_76445__$1;
(statearr_76458_77253[(1)] = (3));

} else {
var statearr_76459_77254 = state_76445__$1;
(statearr_76459_77254[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76446 === (11))){
var inst_76408 = (state_76445[(12)]);
var inst_76404 = (state_76445[(16)]);
var inst_76411 = (state_76445[(2)]);
var inst_76412 = revert.utils.ebn__GT_bn(inst_76411,inst_76404);
var inst_76413 = revert.rewards._LT_alchemix_claims(staking_address,user_address,inst_76408);
var state_76445__$1 = (function (){var statearr_76460 = state_76445;
(statearr_76460[(13)] = inst_76412);

return statearr_76460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(12),inst_76413);
} else {
if((state_val_76446 === (9))){
var inst_76375 = (state_76445[(8)]);
var inst_76404 = (state_76445[(2)]);
var inst_76405 = revert.rewards._LT_get_token_pool_ids(inst_76375,lp_address);
var state_76445__$1 = (function (){var statearr_76461 = state_76445;
(statearr_76461[(16)] = inst_76404);

return statearr_76461;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(10),inst_76405);
} else {
if((state_val_76446 === (5))){
var inst_76389 = (state_76445[(11)]);
var inst_76390 = (state_76445[(14)]);
var inst_76389__$1 = (state_76445[(2)]);
var inst_76390__$1 = revert.ethereum.make_erc20(inst_76389__$1);
var inst_76391 = inst_76390__$1.decimals();
var inst_76392 = cljs.core.async.interop.p__GT_c(inst_76391);
var state_76445__$1 = (function (){var statearr_76462 = state_76445;
(statearr_76462[(11)] = inst_76389__$1);

(statearr_76462[(14)] = inst_76390__$1);

return statearr_76462;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(6),inst_76392);
} else {
if((state_val_76446 === (14))){
var inst_76428 = (state_76445[(2)]);
var inst_76429 = revert.rewards._LT_total_pool_lps(lp_address);
var state_76445__$1 = (function (){var statearr_76463 = state_76445;
(statearr_76463[(18)] = inst_76428);

return statearr_76463;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(15),inst_76429);
} else {
if((state_val_76446 === (16))){
var inst_76408 = (state_76445[(12)]);
var inst_76375 = (state_76445[(8)]);
var inst_76434 = (state_76445[(2)]);
var inst_76435 = revert.rewards._LT_get_stake_deposited(inst_76375,user_address,inst_76408);
var state_76445__$1 = (function (){var statearr_76464 = state_76445;
(statearr_76464[(19)] = inst_76434);

return statearr_76464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(17),inst_76435);
} else {
if((state_val_76446 === (10))){
var inst_76408 = (state_76445[(12)]);
var inst_76375 = (state_76445[(8)]);
var inst_76407 = (state_76445[(2)]);
var inst_76408__$1 = (inst_76407 - (1));
var inst_76409 = revert.rewards._LT_get_stake_unclaimed(inst_76375,user_address,inst_76408__$1);
var state_76445__$1 = (function (){var statearr_76465 = state_76445;
(statearr_76465[(12)] = inst_76408__$1);

return statearr_76465;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76445__$1,(11),inst_76409);
} else {
if((state_val_76446 === (8))){
var inst_76394 = (state_76445[(7)]);
var state_76445__$1 = state_76445;
var statearr_76466_77255 = state_76445__$1;
(statearr_76466_77255[(2)] = inst_76394);

(statearr_76466_77255[(1)] = (9));


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
var statearr_76467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76467[(0)] = revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__);

(statearr_76467[(1)] = (1));

return statearr_76467;
});
var revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____1 = (function (state_76445){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76445);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76468){var ex__52189__auto__ = e76468;
var statearr_76469_77256 = state_76445;
(statearr_76469_77256[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76445[(4)]))){
var statearr_76470_77257 = state_76445;
(statearr_76470_77257[(1)] = cljs.core.first((state_76445[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77258 = state_76445;
state_76445 = G__77258;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__ = function(state_76445){
switch(arguments.length){
case 0:
return revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____1.call(this,state_76445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____0;
revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto____1;
return revert$rewards$_LT_alchemix_rewards_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76471 = f__52209__auto__();
(statearr_76471[(6)] = c__52208__auto__);

return statearr_76471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_staked_lp_positions = (function revert$rewards$_LT_staked_lp_positions(lp_destination,user_address){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76525){
var state_val_76526 = (state_76525[(1)]);
if((state_val_76526 === (7))){
var inst_76484 = (state_76525[(7)]);
var inst_76491 = (function(){throw inst_76484})();
var state_76525__$1 = state_76525;
var statearr_76527_77259 = state_76525__$1;
(statearr_76527_77259[(2)] = inst_76491);

(statearr_76527_77259[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (20))){
var inst_76512 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
var statearr_76528_77260 = state_76525__$1;
(statearr_76528_77260[(2)] = inst_76512);

(statearr_76528_77260[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (1))){
var inst_76473 = (state_76525[(8)]);
var inst_76472 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_76473__$1 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(lp_destination);
var inst_76474 = revert.ethereum.make_erc20(inst_76473__$1);
var state_76525__$1 = (function (){var statearr_76529 = state_76525;
(statearr_76529[(8)] = inst_76473__$1);

(statearr_76529[(9)] = inst_76472);

(statearr_76529[(10)] = inst_76474);

return statearr_76529;
})();
var statearr_76530_77261 = state_76525__$1;
(statearr_76530_77261[(2)] = null);

(statearr_76530_77261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (4))){
var inst_76475 = (state_76525[(2)]);
var state_76525__$1 = (function (){var statearr_76531 = state_76525;
(statearr_76531[(11)] = inst_76475);

return statearr_76531;
})();
var statearr_76532_77262 = state_76525__$1;
(statearr_76532_77262[(2)] = null);

(statearr_76532_77262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (15))){
var inst_76473 = (state_76525[(8)]);
var inst_76472 = (state_76525[(9)]);
var inst_76502 = revert.rewards._LT_staked_lp_positions_lpbar(inst_76472,inst_76473,user_address);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76525__$1,(16),inst_76502);
} else {
if((state_val_76526 === (21))){
var inst_76514 = revert.rewards._LT_staked_lp_positions_by_event(lp_destination,user_address);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76525__$1,(22),inst_76514);
} else {
if((state_val_76526 === (13))){
var inst_76497 = (state_76525[(12)]);
var state_76525__$1 = state_76525;
var G__76533_77263 = inst_76497;
switch (G__76533_77263) {
case "LpBar":
var statearr_76534_77265 = state_76525__$1;
(statearr_76534_77265[(1)] = (15));


break;
case "sv Uniswap V2":
var statearr_76535_77266 = state_76525__$1;
(statearr_76535_77266[(1)] = (17));


break;
case "pickling Uniswap V2":
var statearr_76536_77267 = state_76525__$1;
(statearr_76536_77267[(1)] = (19));


break;
default:
var statearr_76537_77268 = state_76525__$1;
(statearr_76537_77268[(1)] = (21));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (22))){
var inst_76516 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
var statearr_76538_77269 = state_76525__$1;
(statearr_76538_77269[(2)] = inst_76516);

(statearr_76538_77269[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (6))){
var inst_76484 = (state_76525[(7)]);
var inst_76484__$1 = (state_76525[(2)]);
var inst_76485 = (inst_76484__$1 instanceof cljs.core.ExceptionInfo);
var inst_76486 = cljs.core.ex_data(inst_76484__$1);
var inst_76487 = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(inst_76486);
var inst_76488 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_76487,new cljs.core.Keyword(null,"promise-error","promise-error",-90673560));
var inst_76489 = ((inst_76485) && (inst_76488));
var state_76525__$1 = (function (){var statearr_76539 = state_76525;
(statearr_76539[(7)] = inst_76484__$1);

return statearr_76539;
})();
if(cljs.core.truth_(inst_76489)){
var statearr_76540_77270 = state_76525__$1;
(statearr_76540_77270[(1)] = (7));

} else {
var statearr_76541_77271 = state_76525__$1;
(statearr_76541_77271[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (17))){
var inst_76473 = (state_76525[(8)]);
var inst_76472 = (state_76525[(9)]);
var inst_76506 = revert.rewards._LT_staked_lp_positions_sashimi_plate(inst_76472,inst_76473,user_address);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76525__$1,(18),inst_76506);
} else {
if((state_val_76526 === (3))){
var inst_76473 = (state_76525[(8)]);
var inst_76497 = (state_76525[(2)]);
var inst_76521 = clojure.string.lower_case(inst_76473);
var state_76525__$1 = (function (){var statearr_76542 = state_76525;
(statearr_76542[(12)] = inst_76497);

return statearr_76542;
})();
var G__76543_77272 = inst_76521;
switch (G__76543_77272) {
case "0xab8e74017a8cc7c15ffccd726603790d26d7deca":
var statearr_76544_77274 = state_76525__$1;
(statearr_76544_77274[(1)] = (11));


break;
default:
var statearr_76545_77275 = state_76525__$1;
(statearr_76545_77275[(1)] = (13));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (12))){
var inst_76500 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
var statearr_76546_77276 = state_76525__$1;
(statearr_76546_77276[(2)] = inst_76500);

(statearr_76546_77276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (2))){
var inst_76474 = (state_76525[(10)]);
var _ = (function (){var statearr_76547 = state_76525;
(statearr_76547[(4)] = cljs.core.cons((5),(state_76525[(4)])));

return statearr_76547;
})();
var inst_76481 = inst_76474.name();
var inst_76482 = cljs.core.async.interop.p__GT_c(inst_76481);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76525__$1,(6),inst_76482);
} else {
if((state_val_76526 === (19))){
var inst_76473 = (state_76525[(8)]);
var inst_76472 = (state_76525[(9)]);
var inst_76510 = revert.rewards._LT_staked_lp_positions_pjar_redirect(inst_76472,inst_76473,user_address);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76525__$1,(20),inst_76510);
} else {
if((state_val_76526 === (11))){
var inst_76473 = (state_76525[(8)]);
var inst_76472 = (state_76525[(9)]);
var inst_76498 = revert.rewards._LT_alchemix_rewards(inst_76472,inst_76473,user_address);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76525__$1,(12),inst_76498);
} else {
if((state_val_76526 === (9))){
var inst_76494 = (state_76525[(2)]);
var _ = (function (){var statearr_76549 = state_76525;
(statearr_76549[(4)] = cljs.core.rest((state_76525[(4)])));

return statearr_76549;
})();
var state_76525__$1 = state_76525;
var statearr_76550_77277 = state_76525__$1;
(statearr_76550_77277[(2)] = inst_76494);

(statearr_76550_77277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (5))){
var _ = (function (){var statearr_76551 = state_76525;
(statearr_76551[(4)] = cljs.core.rest((state_76525[(4)])));

return statearr_76551;
})();
var state_76525__$1 = state_76525;
var ex76548 = (state_76525__$1[(2)]);
var statearr_76552_77278 = state_76525__$1;
(statearr_76552_77278[(5)] = ex76548);


if((ex76548 instanceof Error)){
var statearr_76553_77279 = state_76525__$1;
(statearr_76553_77279[(1)] = (4));

(statearr_76553_77279[(5)] = null);

} else {
throw ex76548;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (14))){
var inst_76519 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
var statearr_76554_77280 = state_76525__$1;
(statearr_76554_77280[(2)] = inst_76519);

(statearr_76554_77280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (16))){
var inst_76504 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
var statearr_76555_77281 = state_76525__$1;
(statearr_76555_77281[(2)] = inst_76504);

(statearr_76555_77281[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (10))){
var inst_76523 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76525__$1,inst_76523);
} else {
if((state_val_76526 === (18))){
var inst_76508 = (state_76525[(2)]);
var state_76525__$1 = state_76525;
var statearr_76556_77282 = state_76525__$1;
(statearr_76556_77282[(2)] = inst_76508);

(statearr_76556_77282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_76526 === (8))){
var inst_76484 = (state_76525[(7)]);
var state_76525__$1 = state_76525;
var statearr_76557_77283 = state_76525__$1;
(statearr_76557_77283[(2)] = inst_76484);

(statearr_76557_77283[(1)] = (9));


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
var statearr_76558 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_76558[(0)] = revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__);

(statearr_76558[(1)] = (1));

return statearr_76558;
});
var revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____1 = (function (state_76525){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76525);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76559){var ex__52189__auto__ = e76559;
var statearr_76560_77284 = state_76525;
(statearr_76560_77284[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76525[(4)]))){
var statearr_76561_77285 = state_76525;
(statearr_76561_77285[(1)] = cljs.core.first((state_76525[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77286 = state_76525;
state_76525 = G__77286;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__ = function(state_76525){
switch(arguments.length){
case 0:
return revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____1.call(this,state_76525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____0;
revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto____1;
return revert$rewards$_LT_staked_lp_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76562 = f__52209__auto__();
(statearr_76562[(6)] = c__52208__auto__);

return statearr_76562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});
revert.rewards._LT_account_lp_positions = (function revert$rewards$_LT_account_lp_positions(user_address,txs_out){
var unique_destinations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.vals(cljs.core.group_by((function (p1__76563_SHARP_){
return cljs.core.select_keys(p1__76563_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"to","to",192099007)], null));
}),txs_out)));
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76576){
var state_val_76577 = (state_76576[(1)]);
if((state_val_76577 === (1))){
var inst_76565 = [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"stakings","stakings",872334993),new cljs.core.Keyword(null,"token","token",-1211463215)];
var inst_76566 = revert.rewards._LT_staked_lp_positions(x,user_address);
var state_76576__$1 = (function (){var statearr_76578 = state_76576;
(statearr_76578[(7)] = inst_76565);

return statearr_76578;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76576__$1,(2),inst_76566);
} else {
if((state_val_76577 === (2))){
var inst_76565 = (state_76576[(7)]);
var inst_76568 = (state_76576[(2)]);
var inst_76569 = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x);
var inst_76570 = (function (){return (function (p1__76564_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(p1__76564_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(p1__76564_SHARP_))));
});
})();
var inst_76571 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_76570,txs_out);
var inst_76572 = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(x);
var inst_76573 = [inst_76568,inst_76569,inst_76571,inst_76572];
var inst_76574 = cljs.core.PersistentHashMap.fromArrays(inst_76565,inst_76573);
var state_76576__$1 = state_76576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76576__$1,inst_76574);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____0 = (function (){
var statearr_76579 = [null,null,null,null,null,null,null,null];
(statearr_76579[(0)] = revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__);

(statearr_76579[(1)] = (1));

return statearr_76579;
});
var revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____1 = (function (state_76576){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76576);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76580){var ex__52189__auto__ = e76580;
var statearr_76581_77287 = state_76576;
(statearr_76581_77287[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76576[(4)]))){
var statearr_76582_77288 = state_76576;
(statearr_76582_77288[(1)] = cljs.core.first((state_76576[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77289 = state_76576;
state_76576 = G__77289;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__ = function(state_76576){
switch(arguments.length){
case 0:
return revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____1.call(this,state_76576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____0;
revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto____1;
return revert$rewards$_LT_account_lp_positions_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76583 = f__52209__auto__();
(statearr_76583[(6)] = c__52208__auto__);

return statearr_76583;
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
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76590){
var state_val_76591 = (state_76590[(1)]);
if((state_val_76591 === (1))){
var inst_76585 = cljs.core.deref(revert.ethereum.provider);
var inst_76586 = revert.ethereum._LT_user_token_destinations(inst_76585,t,user_address);
var state_76590__$1 = state_76590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76590__$1,(2),inst_76586);
} else {
if((state_val_76591 === (2))){
var inst_76588 = (state_76590[(2)]);
var state_76590__$1 = state_76590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76590__$1,inst_76588);
} else {
return null;
}
}
});
return (function() {
var revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____0 = (function (){
var statearr_76592 = [null,null,null,null,null,null,null];
(statearr_76592[(0)] = revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__);

(statearr_76592[(1)] = (1));

return statearr_76592;
});
var revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____1 = (function (state_76590){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76590);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76593){var ex__52189__auto__ = e76593;
var statearr_76594_77290 = state_76590;
(statearr_76594_77290[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76590[(4)]))){
var statearr_76595_77291 = state_76590;
(statearr_76595_77291[(1)] = cljs.core.first((state_76590[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77292 = state_76590;
state_76590 = G__77292;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__ = function(state_76590){
switch(arguments.length){
case 0:
return revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____1.call(this,state_76590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____0;
revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_token_destinations_$_state_machine__52186__auto____1;
return revert$rewards$_LT_token_destinations_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76596 = f__52209__auto__();
(statearr_76596[(6)] = c__52208__auto__);

return statearr_76596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
}),token_addresses);
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((function (p1__76584_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,p1__76584_SHARP_);
}),cljs.core.async.reduce(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(destinations)));
});
revert.rewards.format_staking = (function revert$rewards$format_staking(staking_destination){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(staking_destination),new cljs.core.Keyword(null,"staking-address","staking-address",-1925510066),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(staking_destination),new cljs.core.Keyword(null,"lp-shares","lp-shares",1649711872),new cljs.core.Keyword(null,"lp-staked","lp-staked",-58887635).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"stakings","stakings",872334993),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"txhash","txhash",149174990),new cljs.core.Keyword(null,"stakings","stakings",872334993).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"rewards","rewards",-1173924062),(cljs.core.truth_(new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),new cljs.core.Keyword(null,"rewards-token","rewards-token",-1696819429).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination)),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(staking_destination))], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reward-token-address","reward-token-address",687235957),"",new cljs.core.Keyword(null,"pending-rewards","pending-rewards",-1726300560),revert.utils.bn(0.0),new cljs.core.Keyword(null,"paid-rewards","paid-rewards",-1122397434),cljs.core.PersistentVector.EMPTY], null))], null);
});
revert.rewards._LT_token_stakings = (function revert$rewards$_LT_token_stakings(user_address,token_addresses){
var c__52208__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__52209__auto__ = (function (){var switch__52185__auto__ = (function (state_76608){
var state_val_76609 = (state_76608[(1)]);
if((state_val_76609 === (1))){
var inst_76597 = revert.rewards._LT_token_destinations(user_address,token_addresses);
var state_76608__$1 = state_76608;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76608__$1,(2),inst_76597);
} else {
if((state_val_76609 === (2))){
var inst_76599 = (state_76608[(7)]);
var inst_76599__$1 = (state_76608[(2)]);
var inst_76600 = revert.rewards._LT_account_lp_positions(user_address,inst_76599__$1);
var state_76608__$1 = (function (){var statearr_76610 = state_76608;
(statearr_76610[(7)] = inst_76599__$1);

return statearr_76610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_76608__$1,(3),inst_76600);
} else {
if((state_val_76609 === (3))){
var inst_76599 = (state_76608[(7)]);
var inst_76602 = (state_76608[(2)]);
var inst_76603 = [new cljs.core.Keyword(null,"txs-out","txs-out",1295820330),new cljs.core.Keyword(null,"stakings","stakings",872334993)];
var inst_76604 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(revert.rewards.format_staking,inst_76602);
var inst_76605 = [inst_76599,inst_76604];
var inst_76606 = cljs.core.PersistentHashMap.fromArrays(inst_76603,inst_76605);
var state_76608__$1 = state_76608;
return cljs.core.async.impl.ioc_helpers.return_chan(state_76608__$1,inst_76606);
} else {
return null;
}
}
}
});
return (function() {
var revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__ = null;
var revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____0 = (function (){
var statearr_76611 = [null,null,null,null,null,null,null,null];
(statearr_76611[(0)] = revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__);

(statearr_76611[(1)] = (1));

return statearr_76611;
});
var revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____1 = (function (state_76608){
while(true){
var ret_value__52187__auto__ = (function (){try{while(true){
var result__52188__auto__ = switch__52185__auto__(state_76608);
if(cljs.core.keyword_identical_QMARK_(result__52188__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__52188__auto__;
}
break;
}
}catch (e76612){var ex__52189__auto__ = e76612;
var statearr_76613_77293 = state_76608;
(statearr_76613_77293[(2)] = ex__52189__auto__);


if(cljs.core.seq((state_76608[(4)]))){
var statearr_76614_77294 = state_76608;
(statearr_76614_77294[(1)] = cljs.core.first((state_76608[(4)])));

} else {
throw ex__52189__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__52187__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77295 = state_76608;
state_76608 = G__77295;
continue;
} else {
return ret_value__52187__auto__;
}
break;
}
});
revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__ = function(state_76608){
switch(arguments.length){
case 0:
return revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____0.call(this);
case 1:
return revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____1.call(this,state_76608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$0 = revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____0;
revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__.cljs$core$IFn$_invoke$arity$1 = revert$rewards$_LT_token_stakings_$_state_machine__52186__auto____1;
return revert$rewards$_LT_token_stakings_$_state_machine__52186__auto__;
})()
})();
var state__52210__auto__ = (function (){var statearr_76615 = f__52209__auto__();
(statearr_76615[(6)] = c__52208__auto__);

return statearr_76615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__52210__auto__);
}));

return c__52208__auto__;
});

//# sourceMappingURL=revert.rewards.js.map

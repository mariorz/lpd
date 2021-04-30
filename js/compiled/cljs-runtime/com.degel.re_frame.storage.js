goog.provide('com.degel.re_frame.storage');
cljs.core.enable_console_print_BANG_();
com.degel.re_frame.storage.storage_area = (function com$degel$re_frame$storage$storage_area(session_QMARK_){
return (window[(cljs.core.truth_(session_QMARK_)?"sessionStorage":"localStorage")]);
});
re_frame.core.reg_cofx(new cljs.core.Keyword("storage","empty?","storage/empty?",1437836069),(function (coeffects,p__50382){
var map__50383 = p__50382;
var map__50383__$1 = (((((!((map__50383 == null))))?(((((map__50383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50383):map__50383);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50383__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword("storage","empty?","storage/empty?",1437836069),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.degel.re_frame.storage.storage_area(session_QMARK_).length));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("storage","get","storage/get",-729607478),(function (coeffects,p__50385){
var map__50386 = p__50385;
var map__50386__$1 = (((((!((map__50386 == null))))?(((((map__50386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50386):map__50386);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword("storage","get","storage/get",-729607478),(function (){var storage = com.degel.re_frame.storage.storage_area(session_QMARK_);
if(cljs.core.truth_(names)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,name__$1){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([name__$1,storage.getItem(name__$1)]));
}),cljs.core.PersistentArrayMap.EMPTY,names);
} else {
return storage.getItem(name);
}
})());
}));
com.degel.re_frame.storage.get_all_pairs = (function com$degel$re_frame$storage$get_all_pairs(session_QMARK_){
var storage = com.degel.re_frame.storage.storage_area(session_QMARK_);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function com$degel$re_frame$storage$get_all_pairs_$_iter__50388(s__50389){
return (new cljs.core.LazySeq(null,(function (){
var s__50389__$1 = s__50389;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__50389__$1);
if(temp__5753__auto__){
var s__50389__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50389__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__50389__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__50391 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__50390 = (0);
while(true){
if((i__50390 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__50390);
cljs.core.chunk_append(b__50391,(function (){var name = storage.key(n);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([name,storage.getItem(name)]);
})());

var G__50414 = (i__50390 + (1));
i__50390 = G__50414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50391),com$degel$re_frame$storage$get_all_pairs_$_iter__50388(cljs.core.chunk_rest(s__50389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50391),null);
}
} else {
var n = cljs.core.first(s__50389__$2);
return cljs.core.cons((function (){var name = storage.key(n);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([name,storage.getItem(name)]);
})(),com$degel$re_frame$storage$get_all_pairs_$_iter__50388(cljs.core.rest(s__50389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(storage.length));
})());
});
re_frame.core.reg_cofx(new cljs.core.Keyword("storage","all","storage/all",-1539481783),(function (coeffects,p__50392){
var map__50393 = p__50392;
var map__50393__$1 = (((((!((map__50393 == null))))?(((((map__50393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50393):map__50393);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50393__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword("storage","all","storage/all",-1539481783),com.degel.re_frame.storage.get_all_pairs(session_QMARK_));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("storage","keys","storage/keys",-1359042691),(function (coeffects,p__50395){
var map__50396 = p__50395;
var map__50396__$1 = (((((!((map__50396 == null))))?(((((map__50396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50396):map__50396);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50396__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword("storage","keys","storage/keys",-1359042691),cljs.core.keys(com.degel.re_frame.storage.get_all_pairs(session_QMARK_)));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("storage","vals","storage/vals",-1105731606),(function (coeffects,p__50398){
var map__50399 = p__50398;
var map__50399__$1 = (((((!((map__50399 == null))))?(((((map__50399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50399):map__50399);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50399__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword("storage","keys","storage/keys",-1359042691),cljs.core.vals(com.degel.re_frame.storage.get_all_pairs(session_QMARK_)));
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("storage","count","storage/count",255616960),(function (coeffects,p__50401){
var map__50402 = p__50401;
var map__50402__$1 = (((((!((map__50402 == null))))?(((((map__50402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50402):map__50402);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50402__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coeffects,new cljs.core.Keyword("storage","count","storage/count",255616960),com.degel.re_frame.storage.storage_area(session_QMARK_).length);
}));
com.degel.re_frame.storage.set_one_item = (function com$degel$re_frame$storage$set_one_item(storage,name,value){
return storage.setItem(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
re_frame.core.reg_fx(new cljs.core.Keyword("storage","set","storage/set",-2122866619),(function com$degel$re_frame$storage$storage_set_effect(p__50404){
var map__50405 = p__50404;
var map__50405__$1 = (((((!((map__50405 == null))))?(((((map__50405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50405):map__50405);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
var pairs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"pairs","pairs",614609779));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50405__$1,new cljs.core.Keyword(null,"value","value",305978217));
var storage = com.degel.re_frame.storage.storage_area(session_QMARK_);
if(cljs.core.truth_(pairs)){
return cljs.core.run_BANG_((function (p__50407){
var map__50408 = p__50407;
var map__50408__$1 = (((((!((map__50408 == null))))?(((((map__50408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50408):map__50408);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50408__$1,new cljs.core.Keyword(null,"value","value",305978217));
return com.degel.re_frame.storage.set_one_item(storage,name__$1,value__$1);
}),pairs);
} else {
return com.degel.re_frame.storage.set_one_item(storage,name,value);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("storage","remove","storage/remove",1735937899),(function com$degel$re_frame$storage$storage_remove_effect(p__50411){
var map__50412 = p__50411;
var map__50412__$1 = (((((!((map__50412 == null))))?(((((map__50412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50412):map__50412);
var session_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"session?","session?",67230903));
var names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"names","names",-1943074658));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var storage = com.degel.re_frame.storage.storage_area(session_QMARK_);
if(cljs.core.truth_(names)){
return cljs.core.run_BANG_((function (p1__50410_SHARP_){
return storage.removeItem(p1__50410_SHARP_);
}),names);
} else {
return storage.removeItem(name);
}
}));

//# sourceMappingURL=com.degel.re_frame.storage.js.map

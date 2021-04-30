goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_64667 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_64667(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_64673 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_64673(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__63958 = coll;
var G__63959 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__63958,G__63959) : shadow.dom.lazy_native_coll_seq.call(null,G__63958,G__63959));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__64019 = arguments.length;
switch (G__64019) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__64044 = arguments.length;
switch (G__64044) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__64082 = arguments.length;
switch (G__64082) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__64089 = arguments.length;
switch (G__64089) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__64101 = arguments.length;
switch (G__64101) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__64105 = arguments.length;
switch (G__64105) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e64110){if((e64110 instanceof Object)){
var e = e64110;
return console.log("didnt support attachEvent",el,e);
} else {
throw e64110;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__64119 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__64120 = null;
var count__64121 = (0);
var i__64122 = (0);
while(true){
if((i__64122 < count__64121)){
var el = chunk__64120.cljs$core$IIndexed$_nth$arity$2(null,i__64122);
var handler_64695__$1 = ((function (seq__64119,chunk__64120,count__64121,i__64122,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64119,chunk__64120,count__64121,i__64122,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_64695__$1);


var G__64696 = seq__64119;
var G__64697 = chunk__64120;
var G__64698 = count__64121;
var G__64699 = (i__64122 + (1));
seq__64119 = G__64696;
chunk__64120 = G__64697;
count__64121 = G__64698;
i__64122 = G__64699;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64119);
if(temp__5753__auto__){
var seq__64119__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64119__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64119__$1);
var G__64700 = cljs.core.chunk_rest(seq__64119__$1);
var G__64701 = c__4556__auto__;
var G__64702 = cljs.core.count(c__4556__auto__);
var G__64703 = (0);
seq__64119 = G__64700;
chunk__64120 = G__64701;
count__64121 = G__64702;
i__64122 = G__64703;
continue;
} else {
var el = cljs.core.first(seq__64119__$1);
var handler_64705__$1 = ((function (seq__64119,chunk__64120,count__64121,i__64122,el,seq__64119__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__64119,chunk__64120,count__64121,i__64122,el,seq__64119__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_64705__$1);


var G__64706 = cljs.core.next(seq__64119__$1);
var G__64707 = null;
var G__64708 = (0);
var G__64709 = (0);
seq__64119 = G__64706;
chunk__64120 = G__64707;
count__64121 = G__64708;
i__64122 = G__64709;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__64128 = arguments.length;
switch (G__64128) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__64129 = cljs.core.seq(events);
var chunk__64130 = null;
var count__64131 = (0);
var i__64132 = (0);
while(true){
if((i__64132 < count__64131)){
var vec__64145 = chunk__64130.cljs$core$IIndexed$_nth$arity$2(null,i__64132);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64145,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__64713 = seq__64129;
var G__64714 = chunk__64130;
var G__64715 = count__64131;
var G__64716 = (i__64132 + (1));
seq__64129 = G__64713;
chunk__64130 = G__64714;
count__64131 = G__64715;
i__64132 = G__64716;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64129);
if(temp__5753__auto__){
var seq__64129__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64129__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64129__$1);
var G__64718 = cljs.core.chunk_rest(seq__64129__$1);
var G__64719 = c__4556__auto__;
var G__64720 = cljs.core.count(c__4556__auto__);
var G__64721 = (0);
seq__64129 = G__64718;
chunk__64130 = G__64719;
count__64131 = G__64720;
i__64132 = G__64721;
continue;
} else {
var vec__64148 = cljs.core.first(seq__64129__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64148,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__64722 = cljs.core.next(seq__64129__$1);
var G__64723 = null;
var G__64724 = (0);
var G__64725 = (0);
seq__64129 = G__64722;
chunk__64130 = G__64723;
count__64131 = G__64724;
i__64132 = G__64725;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__64151 = cljs.core.seq(styles);
var chunk__64152 = null;
var count__64153 = (0);
var i__64154 = (0);
while(true){
if((i__64154 < count__64153)){
var vec__64161 = chunk__64152.cljs$core$IIndexed$_nth$arity$2(null,i__64154);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64161,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64161,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__64727 = seq__64151;
var G__64728 = chunk__64152;
var G__64729 = count__64153;
var G__64730 = (i__64154 + (1));
seq__64151 = G__64727;
chunk__64152 = G__64728;
count__64153 = G__64729;
i__64154 = G__64730;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64151);
if(temp__5753__auto__){
var seq__64151__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64151__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64151__$1);
var G__64731 = cljs.core.chunk_rest(seq__64151__$1);
var G__64732 = c__4556__auto__;
var G__64733 = cljs.core.count(c__4556__auto__);
var G__64734 = (0);
seq__64151 = G__64731;
chunk__64152 = G__64732;
count__64153 = G__64733;
i__64154 = G__64734;
continue;
} else {
var vec__64164 = cljs.core.first(seq__64151__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64164,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__64735 = cljs.core.next(seq__64151__$1);
var G__64736 = null;
var G__64737 = (0);
var G__64738 = (0);
seq__64151 = G__64735;
chunk__64152 = G__64736;
count__64153 = G__64737;
i__64154 = G__64738;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__64167_64740 = key;
var G__64167_64741__$1 = (((G__64167_64740 instanceof cljs.core.Keyword))?G__64167_64740.fqn:null);
switch (G__64167_64741__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_64745 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_64745,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_64745,"aria-");
}
})())){
el.setAttribute(ks_64745,value);
} else {
(el[ks_64745] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__64168){
var map__64169 = p__64168;
var map__64169__$1 = (((((!((map__64169 == null))))?(((((map__64169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__64169):map__64169);
var props = map__64169__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64169__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__64171 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64171,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64171,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64171,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__64174 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__64174,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__64174;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__64176 = arguments.length;
switch (G__64176) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__64177){
var vec__64178 = p__64177;
var seq__64179 = cljs.core.seq(vec__64178);
var first__64180 = cljs.core.first(seq__64179);
var seq__64179__$1 = cljs.core.next(seq__64179);
var nn = first__64180;
var first__64180__$1 = cljs.core.first(seq__64179__$1);
var seq__64179__$2 = cljs.core.next(seq__64179__$1);
var np = first__64180__$1;
var nc = seq__64179__$2;
var node = vec__64178;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64181 = nn;
var G__64182 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64181,G__64182) : create_fn.call(null,G__64181,G__64182));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__64183 = nn;
var G__64184 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__64183,G__64184) : create_fn.call(null,G__64183,G__64184));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__64185 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64185,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64185,(1),null);
var seq__64188_64762 = cljs.core.seq(node_children);
var chunk__64189_64763 = null;
var count__64190_64764 = (0);
var i__64191_64765 = (0);
while(true){
if((i__64191_64765 < count__64190_64764)){
var child_struct_64766 = chunk__64189_64763.cljs$core$IIndexed$_nth$arity$2(null,i__64191_64765);
var children_64767 = shadow.dom.dom_node(child_struct_64766);
if(cljs.core.seq_QMARK_(children_64767)){
var seq__64216_64768 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64767));
var chunk__64218_64769 = null;
var count__64219_64770 = (0);
var i__64220_64771 = (0);
while(true){
if((i__64220_64771 < count__64219_64770)){
var child_64773 = chunk__64218_64769.cljs$core$IIndexed$_nth$arity$2(null,i__64220_64771);
if(cljs.core.truth_(child_64773)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64773);


var G__64775 = seq__64216_64768;
var G__64776 = chunk__64218_64769;
var G__64777 = count__64219_64770;
var G__64778 = (i__64220_64771 + (1));
seq__64216_64768 = G__64775;
chunk__64218_64769 = G__64776;
count__64219_64770 = G__64777;
i__64220_64771 = G__64778;
continue;
} else {
var G__64779 = seq__64216_64768;
var G__64780 = chunk__64218_64769;
var G__64781 = count__64219_64770;
var G__64782 = (i__64220_64771 + (1));
seq__64216_64768 = G__64779;
chunk__64218_64769 = G__64780;
count__64219_64770 = G__64781;
i__64220_64771 = G__64782;
continue;
}
} else {
var temp__5753__auto___64783 = cljs.core.seq(seq__64216_64768);
if(temp__5753__auto___64783){
var seq__64216_64784__$1 = temp__5753__auto___64783;
if(cljs.core.chunked_seq_QMARK_(seq__64216_64784__$1)){
var c__4556__auto___64785 = cljs.core.chunk_first(seq__64216_64784__$1);
var G__64786 = cljs.core.chunk_rest(seq__64216_64784__$1);
var G__64787 = c__4556__auto___64785;
var G__64788 = cljs.core.count(c__4556__auto___64785);
var G__64789 = (0);
seq__64216_64768 = G__64786;
chunk__64218_64769 = G__64787;
count__64219_64770 = G__64788;
i__64220_64771 = G__64789;
continue;
} else {
var child_64790 = cljs.core.first(seq__64216_64784__$1);
if(cljs.core.truth_(child_64790)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64790);


var G__64791 = cljs.core.next(seq__64216_64784__$1);
var G__64792 = null;
var G__64793 = (0);
var G__64794 = (0);
seq__64216_64768 = G__64791;
chunk__64218_64769 = G__64792;
count__64219_64770 = G__64793;
i__64220_64771 = G__64794;
continue;
} else {
var G__64795 = cljs.core.next(seq__64216_64784__$1);
var G__64796 = null;
var G__64797 = (0);
var G__64798 = (0);
seq__64216_64768 = G__64795;
chunk__64218_64769 = G__64796;
count__64219_64770 = G__64797;
i__64220_64771 = G__64798;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64767);
}


var G__64799 = seq__64188_64762;
var G__64800 = chunk__64189_64763;
var G__64801 = count__64190_64764;
var G__64802 = (i__64191_64765 + (1));
seq__64188_64762 = G__64799;
chunk__64189_64763 = G__64800;
count__64190_64764 = G__64801;
i__64191_64765 = G__64802;
continue;
} else {
var temp__5753__auto___64803 = cljs.core.seq(seq__64188_64762);
if(temp__5753__auto___64803){
var seq__64188_64806__$1 = temp__5753__auto___64803;
if(cljs.core.chunked_seq_QMARK_(seq__64188_64806__$1)){
var c__4556__auto___64808 = cljs.core.chunk_first(seq__64188_64806__$1);
var G__64809 = cljs.core.chunk_rest(seq__64188_64806__$1);
var G__64810 = c__4556__auto___64808;
var G__64811 = cljs.core.count(c__4556__auto___64808);
var G__64812 = (0);
seq__64188_64762 = G__64809;
chunk__64189_64763 = G__64810;
count__64190_64764 = G__64811;
i__64191_64765 = G__64812;
continue;
} else {
var child_struct_64813 = cljs.core.first(seq__64188_64806__$1);
var children_64814 = shadow.dom.dom_node(child_struct_64813);
if(cljs.core.seq_QMARK_(children_64814)){
var seq__64226_64817 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_64814));
var chunk__64228_64818 = null;
var count__64229_64819 = (0);
var i__64230_64820 = (0);
while(true){
if((i__64230_64820 < count__64229_64819)){
var child_64821 = chunk__64228_64818.cljs$core$IIndexed$_nth$arity$2(null,i__64230_64820);
if(cljs.core.truth_(child_64821)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64821);


var G__64822 = seq__64226_64817;
var G__64823 = chunk__64228_64818;
var G__64824 = count__64229_64819;
var G__64825 = (i__64230_64820 + (1));
seq__64226_64817 = G__64822;
chunk__64228_64818 = G__64823;
count__64229_64819 = G__64824;
i__64230_64820 = G__64825;
continue;
} else {
var G__64826 = seq__64226_64817;
var G__64827 = chunk__64228_64818;
var G__64828 = count__64229_64819;
var G__64829 = (i__64230_64820 + (1));
seq__64226_64817 = G__64826;
chunk__64228_64818 = G__64827;
count__64229_64819 = G__64828;
i__64230_64820 = G__64829;
continue;
}
} else {
var temp__5753__auto___64830__$1 = cljs.core.seq(seq__64226_64817);
if(temp__5753__auto___64830__$1){
var seq__64226_64831__$1 = temp__5753__auto___64830__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64226_64831__$1)){
var c__4556__auto___64832 = cljs.core.chunk_first(seq__64226_64831__$1);
var G__64833 = cljs.core.chunk_rest(seq__64226_64831__$1);
var G__64834 = c__4556__auto___64832;
var G__64835 = cljs.core.count(c__4556__auto___64832);
var G__64836 = (0);
seq__64226_64817 = G__64833;
chunk__64228_64818 = G__64834;
count__64229_64819 = G__64835;
i__64230_64820 = G__64836;
continue;
} else {
var child_64841 = cljs.core.first(seq__64226_64831__$1);
if(cljs.core.truth_(child_64841)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_64841);


var G__64842 = cljs.core.next(seq__64226_64831__$1);
var G__64843 = null;
var G__64844 = (0);
var G__64845 = (0);
seq__64226_64817 = G__64842;
chunk__64228_64818 = G__64843;
count__64229_64819 = G__64844;
i__64230_64820 = G__64845;
continue;
} else {
var G__64846 = cljs.core.next(seq__64226_64831__$1);
var G__64847 = null;
var G__64848 = (0);
var G__64849 = (0);
seq__64226_64817 = G__64846;
chunk__64228_64818 = G__64847;
count__64229_64819 = G__64848;
i__64230_64820 = G__64849;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_64814);
}


var G__64850 = cljs.core.next(seq__64188_64806__$1);
var G__64851 = null;
var G__64852 = (0);
var G__64853 = (0);
seq__64188_64762 = G__64850;
chunk__64189_64763 = G__64851;
count__64190_64764 = G__64852;
i__64191_64765 = G__64853;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__64235 = cljs.core.seq(node);
var chunk__64236 = null;
var count__64237 = (0);
var i__64238 = (0);
while(true){
if((i__64238 < count__64237)){
var n = chunk__64236.cljs$core$IIndexed$_nth$arity$2(null,i__64238);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64856 = seq__64235;
var G__64857 = chunk__64236;
var G__64858 = count__64237;
var G__64859 = (i__64238 + (1));
seq__64235 = G__64856;
chunk__64236 = G__64857;
count__64237 = G__64858;
i__64238 = G__64859;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64235);
if(temp__5753__auto__){
var seq__64235__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64235__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64235__$1);
var G__64860 = cljs.core.chunk_rest(seq__64235__$1);
var G__64861 = c__4556__auto__;
var G__64862 = cljs.core.count(c__4556__auto__);
var G__64863 = (0);
seq__64235 = G__64860;
chunk__64236 = G__64861;
count__64237 = G__64862;
i__64238 = G__64863;
continue;
} else {
var n = cljs.core.first(seq__64235__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__64864 = cljs.core.next(seq__64235__$1);
var G__64865 = null;
var G__64866 = (0);
var G__64867 = (0);
seq__64235 = G__64864;
chunk__64236 = G__64865;
count__64237 = G__64866;
i__64238 = G__64867;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__64240 = arguments.length;
switch (G__64240) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__64246 = arguments.length;
switch (G__64246) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__64248 = arguments.length;
switch (G__64248) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___64881 = arguments.length;
var i__4737__auto___64883 = (0);
while(true){
if((i__4737__auto___64883 < len__4736__auto___64881)){
args__4742__auto__.push((arguments[i__4737__auto___64883]));

var G__64886 = (i__4737__auto___64883 + (1));
i__4737__auto___64883 = G__64886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__64255_64887 = cljs.core.seq(nodes);
var chunk__64256_64888 = null;
var count__64257_64889 = (0);
var i__64258_64890 = (0);
while(true){
if((i__64258_64890 < count__64257_64889)){
var node_64894 = chunk__64256_64888.cljs$core$IIndexed$_nth$arity$2(null,i__64258_64890);
fragment.appendChild(shadow.dom._to_dom(node_64894));


var G__64895 = seq__64255_64887;
var G__64896 = chunk__64256_64888;
var G__64897 = count__64257_64889;
var G__64898 = (i__64258_64890 + (1));
seq__64255_64887 = G__64895;
chunk__64256_64888 = G__64896;
count__64257_64889 = G__64897;
i__64258_64890 = G__64898;
continue;
} else {
var temp__5753__auto___64899 = cljs.core.seq(seq__64255_64887);
if(temp__5753__auto___64899){
var seq__64255_64900__$1 = temp__5753__auto___64899;
if(cljs.core.chunked_seq_QMARK_(seq__64255_64900__$1)){
var c__4556__auto___64901 = cljs.core.chunk_first(seq__64255_64900__$1);
var G__64902 = cljs.core.chunk_rest(seq__64255_64900__$1);
var G__64903 = c__4556__auto___64901;
var G__64904 = cljs.core.count(c__4556__auto___64901);
var G__64905 = (0);
seq__64255_64887 = G__64902;
chunk__64256_64888 = G__64903;
count__64257_64889 = G__64904;
i__64258_64890 = G__64905;
continue;
} else {
var node_64906 = cljs.core.first(seq__64255_64900__$1);
fragment.appendChild(shadow.dom._to_dom(node_64906));


var G__64910 = cljs.core.next(seq__64255_64900__$1);
var G__64911 = null;
var G__64912 = (0);
var G__64913 = (0);
seq__64255_64887 = G__64910;
chunk__64256_64888 = G__64911;
count__64257_64889 = G__64912;
i__64258_64890 = G__64913;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq64254){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq64254));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__64259_64914 = cljs.core.seq(scripts);
var chunk__64260_64915 = null;
var count__64261_64916 = (0);
var i__64262_64917 = (0);
while(true){
if((i__64262_64917 < count__64261_64916)){
var vec__64273_64918 = chunk__64260_64915.cljs$core$IIndexed$_nth$arity$2(null,i__64262_64917);
var script_tag_64919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64273_64918,(0),null);
var script_body_64920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64273_64918,(1),null);
eval(script_body_64920);


var G__64921 = seq__64259_64914;
var G__64922 = chunk__64260_64915;
var G__64923 = count__64261_64916;
var G__64924 = (i__64262_64917 + (1));
seq__64259_64914 = G__64921;
chunk__64260_64915 = G__64922;
count__64261_64916 = G__64923;
i__64262_64917 = G__64924;
continue;
} else {
var temp__5753__auto___64925 = cljs.core.seq(seq__64259_64914);
if(temp__5753__auto___64925){
var seq__64259_64926__$1 = temp__5753__auto___64925;
if(cljs.core.chunked_seq_QMARK_(seq__64259_64926__$1)){
var c__4556__auto___64927 = cljs.core.chunk_first(seq__64259_64926__$1);
var G__64928 = cljs.core.chunk_rest(seq__64259_64926__$1);
var G__64929 = c__4556__auto___64927;
var G__64930 = cljs.core.count(c__4556__auto___64927);
var G__64931 = (0);
seq__64259_64914 = G__64928;
chunk__64260_64915 = G__64929;
count__64261_64916 = G__64930;
i__64262_64917 = G__64931;
continue;
} else {
var vec__64276_64932 = cljs.core.first(seq__64259_64926__$1);
var script_tag_64933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64276_64932,(0),null);
var script_body_64934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64276_64932,(1),null);
eval(script_body_64934);


var G__64936 = cljs.core.next(seq__64259_64926__$1);
var G__64937 = null;
var G__64938 = (0);
var G__64939 = (0);
seq__64259_64914 = G__64936;
chunk__64260_64915 = G__64937;
count__64261_64916 = G__64938;
i__64262_64917 = G__64939;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__64280){
var vec__64281 = p__64280;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64281,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64281,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__64286 = arguments.length;
switch (G__64286) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__64295 = cljs.core.seq(style_keys);
var chunk__64296 = null;
var count__64297 = (0);
var i__64298 = (0);
while(true){
if((i__64298 < count__64297)){
var it = chunk__64296.cljs$core$IIndexed$_nth$arity$2(null,i__64298);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64951 = seq__64295;
var G__64952 = chunk__64296;
var G__64953 = count__64297;
var G__64954 = (i__64298 + (1));
seq__64295 = G__64951;
chunk__64296 = G__64952;
count__64297 = G__64953;
i__64298 = G__64954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__64295);
if(temp__5753__auto__){
var seq__64295__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64295__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__64295__$1);
var G__64955 = cljs.core.chunk_rest(seq__64295__$1);
var G__64956 = c__4556__auto__;
var G__64957 = cljs.core.count(c__4556__auto__);
var G__64958 = (0);
seq__64295 = G__64955;
chunk__64296 = G__64956;
count__64297 = G__64957;
i__64298 = G__64958;
continue;
} else {
var it = cljs.core.first(seq__64295__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__64959 = cljs.core.next(seq__64295__$1);
var G__64960 = null;
var G__64961 = (0);
var G__64962 = (0);
seq__64295 = G__64959;
chunk__64296 = G__64960;
count__64297 = G__64961;
i__64298 = G__64962;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64304,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64320 = k64304;
var G__64320__$1 = (((G__64320 instanceof cljs.core.Keyword))?G__64320.fqn:null);
switch (G__64320__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64304,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64321){
var vec__64322 = p__64321;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64322,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64322,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64303){
var self__ = this;
var G__64303__$1 = this;
return (new cljs.core.RecordIter((0),G__64303__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64305,other64306){
var self__ = this;
var this64305__$1 = this;
return (((!((other64306 == null)))) && ((this64305__$1.constructor === other64306.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64305__$1.x,other64306.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64305__$1.y,other64306.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64305__$1.__extmap,other64306.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64303){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64350 = cljs.core.keyword_identical_QMARK_;
var expr__64351 = k__4388__auto__;
if(cljs.core.truth_((pred__64350.cljs$core$IFn$_invoke$arity$2 ? pred__64350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__64351) : pred__64350.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__64351)))){
return (new shadow.dom.Coordinate(G__64303,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64350.cljs$core$IFn$_invoke$arity$2 ? pred__64350.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__64351) : pred__64350.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__64351)))){
return (new shadow.dom.Coordinate(self__.x,G__64303,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64303),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64303){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__64303,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__64311){
var extmap__4419__auto__ = (function (){var G__64360 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64311,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__64311)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64360);
} else {
return G__64360;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__64311),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__64311),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k64370,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__64377 = k64370;
var G__64377__$1 = (((G__64377 instanceof cljs.core.Keyword))?G__64377.fqn:null);
switch (G__64377__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k64370,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__64384){
var vec__64385 = p__64384;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64385,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64385,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64369){
var self__ = this;
var G__64369__$1 = this;
return (new cljs.core.RecordIter((0),G__64369__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this64371,other64372){
var self__ = this;
var this64371__$1 = this;
return (((!((other64372 == null)))) && ((this64371__$1.constructor === other64372.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.w,other64372.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.h,other64372.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this64371__$1.__extmap,other64372.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__64369){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__64399 = cljs.core.keyword_identical_QMARK_;
var expr__64400 = k__4388__auto__;
if(cljs.core.truth_((pred__64399.cljs$core$IFn$_invoke$arity$2 ? pred__64399.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__64400) : pred__64399.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__64400)))){
return (new shadow.dom.Size(G__64369,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__64399.cljs$core$IFn$_invoke$arity$2 ? pred__64399.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__64400) : pred__64399.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__64400)))){
return (new shadow.dom.Size(self__.w,G__64369,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__64369),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__64369){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__64369,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__64374){
var extmap__4419__auto__ = (function (){var G__64407 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__64374,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__64374)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__64407);
} else {
return G__64407;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__64374),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__64374),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__65025 = (i + (1));
var G__65026 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__65025;
ret = G__65026;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__64424){
var vec__64425 = p__64424;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64425,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64425,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__64437 = arguments.length;
switch (G__64437) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__65034 = ps;
var G__65035 = (i + (1));
el__$1 = G__65034;
i = G__65035;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__64472 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64472,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64472,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64472,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__64476_65043 = cljs.core.seq(props);
var chunk__64477_65044 = null;
var count__64478_65045 = (0);
var i__64479_65046 = (0);
while(true){
if((i__64479_65046 < count__64478_65045)){
var vec__64502_65047 = chunk__64477_65044.cljs$core$IIndexed$_nth$arity$2(null,i__64479_65046);
var k_65048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64502_65047,(0),null);
var v_65049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64502_65047,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_65048);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65048),v_65049);


var G__65052 = seq__64476_65043;
var G__65053 = chunk__64477_65044;
var G__65054 = count__64478_65045;
var G__65055 = (i__64479_65046 + (1));
seq__64476_65043 = G__65052;
chunk__64477_65044 = G__65053;
count__64478_65045 = G__65054;
i__64479_65046 = G__65055;
continue;
} else {
var temp__5753__auto___65056 = cljs.core.seq(seq__64476_65043);
if(temp__5753__auto___65056){
var seq__64476_65057__$1 = temp__5753__auto___65056;
if(cljs.core.chunked_seq_QMARK_(seq__64476_65057__$1)){
var c__4556__auto___65058 = cljs.core.chunk_first(seq__64476_65057__$1);
var G__65059 = cljs.core.chunk_rest(seq__64476_65057__$1);
var G__65061 = c__4556__auto___65058;
var G__65062 = cljs.core.count(c__4556__auto___65058);
var G__65063 = (0);
seq__64476_65043 = G__65059;
chunk__64477_65044 = G__65061;
count__64478_65045 = G__65062;
i__64479_65046 = G__65063;
continue;
} else {
var vec__64515_65069 = cljs.core.first(seq__64476_65057__$1);
var k_65070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64515_65069,(0),null);
var v_65071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64515_65069,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_65070);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_65070),v_65071);


var G__65077 = cljs.core.next(seq__64476_65057__$1);
var G__65078 = null;
var G__65079 = (0);
var G__65080 = (0);
seq__64476_65043 = G__65077;
chunk__64477_65044 = G__65078;
count__64478_65045 = G__65079;
i__64479_65046 = G__65080;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__64522 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64522,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64522,(1),null);
var seq__64525_65083 = cljs.core.seq(node_children);
var chunk__64527_65084 = null;
var count__64528_65085 = (0);
var i__64529_65086 = (0);
while(true){
if((i__64529_65086 < count__64528_65085)){
var child_struct_65087 = chunk__64527_65084.cljs$core$IIndexed$_nth$arity$2(null,i__64529_65086);
if((!((child_struct_65087 == null)))){
if(typeof child_struct_65087 === 'string'){
var text_65088 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65088),child_struct_65087].join(''));
} else {
var children_65089 = shadow.dom.svg_node(child_struct_65087);
if(cljs.core.seq_QMARK_(children_65089)){
var seq__64567_65092 = cljs.core.seq(children_65089);
var chunk__64569_65093 = null;
var count__64570_65094 = (0);
var i__64571_65095 = (0);
while(true){
if((i__64571_65095 < count__64570_65094)){
var child_65100 = chunk__64569_65093.cljs$core$IIndexed$_nth$arity$2(null,i__64571_65095);
if(cljs.core.truth_(child_65100)){
node.appendChild(child_65100);


var G__65102 = seq__64567_65092;
var G__65103 = chunk__64569_65093;
var G__65104 = count__64570_65094;
var G__65105 = (i__64571_65095 + (1));
seq__64567_65092 = G__65102;
chunk__64569_65093 = G__65103;
count__64570_65094 = G__65104;
i__64571_65095 = G__65105;
continue;
} else {
var G__65106 = seq__64567_65092;
var G__65107 = chunk__64569_65093;
var G__65108 = count__64570_65094;
var G__65109 = (i__64571_65095 + (1));
seq__64567_65092 = G__65106;
chunk__64569_65093 = G__65107;
count__64570_65094 = G__65108;
i__64571_65095 = G__65109;
continue;
}
} else {
var temp__5753__auto___65110 = cljs.core.seq(seq__64567_65092);
if(temp__5753__auto___65110){
var seq__64567_65111__$1 = temp__5753__auto___65110;
if(cljs.core.chunked_seq_QMARK_(seq__64567_65111__$1)){
var c__4556__auto___65112 = cljs.core.chunk_first(seq__64567_65111__$1);
var G__65113 = cljs.core.chunk_rest(seq__64567_65111__$1);
var G__65114 = c__4556__auto___65112;
var G__65115 = cljs.core.count(c__4556__auto___65112);
var G__65116 = (0);
seq__64567_65092 = G__65113;
chunk__64569_65093 = G__65114;
count__64570_65094 = G__65115;
i__64571_65095 = G__65116;
continue;
} else {
var child_65118 = cljs.core.first(seq__64567_65111__$1);
if(cljs.core.truth_(child_65118)){
node.appendChild(child_65118);


var G__65119 = cljs.core.next(seq__64567_65111__$1);
var G__65120 = null;
var G__65121 = (0);
var G__65122 = (0);
seq__64567_65092 = G__65119;
chunk__64569_65093 = G__65120;
count__64570_65094 = G__65121;
i__64571_65095 = G__65122;
continue;
} else {
var G__65125 = cljs.core.next(seq__64567_65111__$1);
var G__65126 = null;
var G__65127 = (0);
var G__65128 = (0);
seq__64567_65092 = G__65125;
chunk__64569_65093 = G__65126;
count__64570_65094 = G__65127;
i__64571_65095 = G__65128;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65089);
}
}


var G__65129 = seq__64525_65083;
var G__65130 = chunk__64527_65084;
var G__65131 = count__64528_65085;
var G__65132 = (i__64529_65086 + (1));
seq__64525_65083 = G__65129;
chunk__64527_65084 = G__65130;
count__64528_65085 = G__65131;
i__64529_65086 = G__65132;
continue;
} else {
var G__65133 = seq__64525_65083;
var G__65134 = chunk__64527_65084;
var G__65135 = count__64528_65085;
var G__65136 = (i__64529_65086 + (1));
seq__64525_65083 = G__65133;
chunk__64527_65084 = G__65134;
count__64528_65085 = G__65135;
i__64529_65086 = G__65136;
continue;
}
} else {
var temp__5753__auto___65137 = cljs.core.seq(seq__64525_65083);
if(temp__5753__auto___65137){
var seq__64525_65138__$1 = temp__5753__auto___65137;
if(cljs.core.chunked_seq_QMARK_(seq__64525_65138__$1)){
var c__4556__auto___65139 = cljs.core.chunk_first(seq__64525_65138__$1);
var G__65140 = cljs.core.chunk_rest(seq__64525_65138__$1);
var G__65141 = c__4556__auto___65139;
var G__65142 = cljs.core.count(c__4556__auto___65139);
var G__65143 = (0);
seq__64525_65083 = G__65140;
chunk__64527_65084 = G__65141;
count__64528_65085 = G__65142;
i__64529_65086 = G__65143;
continue;
} else {
var child_struct_65146 = cljs.core.first(seq__64525_65138__$1);
if((!((child_struct_65146 == null)))){
if(typeof child_struct_65146 === 'string'){
var text_65148 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_65148),child_struct_65146].join(''));
} else {
var children_65149 = shadow.dom.svg_node(child_struct_65146);
if(cljs.core.seq_QMARK_(children_65149)){
var seq__64596_65150 = cljs.core.seq(children_65149);
var chunk__64598_65151 = null;
var count__64599_65152 = (0);
var i__64600_65153 = (0);
while(true){
if((i__64600_65153 < count__64599_65152)){
var child_65154 = chunk__64598_65151.cljs$core$IIndexed$_nth$arity$2(null,i__64600_65153);
if(cljs.core.truth_(child_65154)){
node.appendChild(child_65154);


var G__65155 = seq__64596_65150;
var G__65156 = chunk__64598_65151;
var G__65157 = count__64599_65152;
var G__65158 = (i__64600_65153 + (1));
seq__64596_65150 = G__65155;
chunk__64598_65151 = G__65156;
count__64599_65152 = G__65157;
i__64600_65153 = G__65158;
continue;
} else {
var G__65159 = seq__64596_65150;
var G__65160 = chunk__64598_65151;
var G__65161 = count__64599_65152;
var G__65162 = (i__64600_65153 + (1));
seq__64596_65150 = G__65159;
chunk__64598_65151 = G__65160;
count__64599_65152 = G__65161;
i__64600_65153 = G__65162;
continue;
}
} else {
var temp__5753__auto___65163__$1 = cljs.core.seq(seq__64596_65150);
if(temp__5753__auto___65163__$1){
var seq__64596_65165__$1 = temp__5753__auto___65163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__64596_65165__$1)){
var c__4556__auto___65166 = cljs.core.chunk_first(seq__64596_65165__$1);
var G__65167 = cljs.core.chunk_rest(seq__64596_65165__$1);
var G__65168 = c__4556__auto___65166;
var G__65169 = cljs.core.count(c__4556__auto___65166);
var G__65170 = (0);
seq__64596_65150 = G__65167;
chunk__64598_65151 = G__65168;
count__64599_65152 = G__65169;
i__64600_65153 = G__65170;
continue;
} else {
var child_65171 = cljs.core.first(seq__64596_65165__$1);
if(cljs.core.truth_(child_65171)){
node.appendChild(child_65171);


var G__65172 = cljs.core.next(seq__64596_65165__$1);
var G__65173 = null;
var G__65174 = (0);
var G__65175 = (0);
seq__64596_65150 = G__65172;
chunk__64598_65151 = G__65173;
count__64599_65152 = G__65174;
i__64600_65153 = G__65175;
continue;
} else {
var G__65176 = cljs.core.next(seq__64596_65165__$1);
var G__65177 = null;
var G__65178 = (0);
var G__65179 = (0);
seq__64596_65150 = G__65176;
chunk__64598_65151 = G__65177;
count__64599_65152 = G__65178;
i__64600_65153 = G__65179;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_65149);
}
}


var G__65180 = cljs.core.next(seq__64525_65138__$1);
var G__65181 = null;
var G__65182 = (0);
var G__65183 = (0);
seq__64525_65083 = G__65180;
chunk__64527_65084 = G__65181;
count__64528_65085 = G__65182;
i__64529_65086 = G__65183;
continue;
} else {
var G__65185 = cljs.core.next(seq__64525_65138__$1);
var G__65186 = null;
var G__65187 = (0);
var G__65188 = (0);
seq__64525_65083 = G__65185;
chunk__64527_65084 = G__65186;
count__64528_65085 = G__65187;
i__64529_65086 = G__65188;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65195 = arguments.length;
var i__4737__auto___65196 = (0);
while(true){
if((i__4737__auto___65196 < len__4736__auto___65195)){
args__4742__auto__.push((arguments[i__4737__auto___65196]));

var G__65197 = (i__4737__auto___65196 + (1));
i__4737__auto___65196 = G__65197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq64637){
var G__64638 = cljs.core.first(seq64637);
var seq64637__$1 = cljs.core.next(seq64637);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64638,seq64637__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__64649 = arguments.length;
switch (G__64649) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__61048__auto___65205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_64655){
var state_val_64656 = (state_64655[(1)]);
if((state_val_64656 === (1))){
var state_64655__$1 = state_64655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64655__$1,(2),once_or_cleanup);
} else {
if((state_val_64656 === (2))){
var inst_64652 = (state_64655[(2)]);
var inst_64653 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_64655__$1 = (function (){var statearr_64659 = state_64655;
(statearr_64659[(7)] = inst_64652);

return statearr_64659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64655__$1,inst_64653);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__60805__auto__ = null;
var shadow$dom$state_machine__60805__auto____0 = (function (){
var statearr_64660 = [null,null,null,null,null,null,null,null];
(statearr_64660[(0)] = shadow$dom$state_machine__60805__auto__);

(statearr_64660[(1)] = (1));

return statearr_64660;
});
var shadow$dom$state_machine__60805__auto____1 = (function (state_64655){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_64655);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e64661){var ex__60808__auto__ = e64661;
var statearr_64662_65212 = state_64655;
(statearr_64662_65212[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_64655[(4)]))){
var statearr_64663_65213 = state_64655;
(statearr_64663_65213[(1)] = cljs.core.first((state_64655[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65214 = state_64655;
state_64655 = G__65214;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
shadow$dom$state_machine__60805__auto__ = function(state_64655){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__60805__auto____0.call(this);
case 1:
return shadow$dom$state_machine__60805__auto____1.call(this,state_64655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__60805__auto____0;
shadow$dom$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__60805__auto____1;
return shadow$dom$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_64664 = f__61049__auto__();
(statearr_64664[(6)] = c__61048__auto___65205);

return statearr_64664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

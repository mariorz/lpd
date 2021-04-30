goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__61116 = arguments.length;
switch (G__61116) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61118 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61118 = (function (f,blockable,meta61119){
this.f = f;
this.blockable = blockable;
this.meta61119 = meta61119;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61120,meta61119__$1){
var self__ = this;
var _61120__$1 = this;
return (new cljs.core.async.t_cljs$core$async61118(self__.f,self__.blockable,meta61119__$1));
}));

(cljs.core.async.t_cljs$core$async61118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61120){
var self__ = this;
var _61120__$1 = this;
return self__.meta61119;
}));

(cljs.core.async.t_cljs$core$async61118.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61118.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61118.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async61118.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async61118.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta61119","meta61119",1186998725,null)], null);
}));

(cljs.core.async.t_cljs$core$async61118.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61118.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61118");

(cljs.core.async.t_cljs$core$async61118.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61118");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61118.
 */
cljs.core.async.__GT_t_cljs$core$async61118 = (function cljs$core$async$__GT_t_cljs$core$async61118(f__$1,blockable__$1,meta61119){
return (new cljs.core.async.t_cljs$core$async61118(f__$1,blockable__$1,meta61119));
});

}

return (new cljs.core.async.t_cljs$core$async61118(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__61137 = arguments.length;
switch (G__61137) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__61142 = arguments.length;
switch (G__61142) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__61150 = arguments.length;
switch (G__61150) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_63037 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63037) : fn1.call(null,val_63037));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_63037) : fn1.call(null,val_63037));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__61157 = arguments.length;
switch (G__61157) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___63047 = n;
var x_63049 = (0);
while(true){
if((x_63049 < n__4613__auto___63047)){
(a[x_63049] = x_63049);

var G__63051 = (x_63049 + (1));
x_63049 = G__63051;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61167 = (function (flag,meta61168){
this.flag = flag;
this.meta61168 = meta61168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61169,meta61168__$1){
var self__ = this;
var _61169__$1 = this;
return (new cljs.core.async.t_cljs$core$async61167(self__.flag,meta61168__$1));
}));

(cljs.core.async.t_cljs$core$async61167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61169){
var self__ = this;
var _61169__$1 = this;
return self__.meta61168;
}));

(cljs.core.async.t_cljs$core$async61167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async61167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta61168","meta61168",230915,null)], null);
}));

(cljs.core.async.t_cljs$core$async61167.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61167");

(cljs.core.async.t_cljs$core$async61167.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61167");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61167.
 */
cljs.core.async.__GT_t_cljs$core$async61167 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async61167(flag__$1,meta61168){
return (new cljs.core.async.t_cljs$core$async61167(flag__$1,meta61168));
});

}

return (new cljs.core.async.t_cljs$core$async61167(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61174 = (function (flag,cb,meta61175){
this.flag = flag;
this.cb = cb;
this.meta61175 = meta61175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61176,meta61175__$1){
var self__ = this;
var _61176__$1 = this;
return (new cljs.core.async.t_cljs$core$async61174(self__.flag,self__.cb,meta61175__$1));
}));

(cljs.core.async.t_cljs$core$async61174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61176){
var self__ = this;
var _61176__$1 = this;
return self__.meta61175;
}));

(cljs.core.async.t_cljs$core$async61174.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61174.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async61174.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async61174.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async61174.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta61175","meta61175",1655545952,null)], null);
}));

(cljs.core.async.t_cljs$core$async61174.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61174.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61174");

(cljs.core.async.t_cljs$core$async61174.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61174");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61174.
 */
cljs.core.async.__GT_t_cljs$core$async61174 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async61174(flag__$1,cb__$1,meta61175){
return (new cljs.core.async.t_cljs$core$async61174(flag__$1,cb__$1,meta61175));
});

}

return (new cljs.core.async.t_cljs$core$async61174(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61182_SHARP_){
var G__61184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61182_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61184) : fret.call(null,G__61184));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__61183_SHARP_){
var G__61185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61183_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__61185) : fret.call(null,G__61185));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__63066 = (i + (1));
i = G__63066;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63068 = arguments.length;
var i__4737__auto___63069 = (0);
while(true){
if((i__4737__auto___63069 < len__4736__auto___63068)){
args__4742__auto__.push((arguments[i__4737__auto___63069]));

var G__63070 = (i__4737__auto___63069 + (1));
i__4737__auto___63069 = G__63070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__61193){
var map__61195 = p__61193;
var map__61195__$1 = (((((!((map__61195 == null))))?(((((map__61195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61195):map__61195);
var opts = map__61195__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq61188){
var G__61189 = cljs.core.first(seq61188);
var seq61188__$1 = cljs.core.next(seq61188);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61189,seq61188__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__61210 = arguments.length;
switch (G__61210) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__61048__auto___63079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61249){
var state_val_61251 = (state_61249[(1)]);
if((state_val_61251 === (7))){
var inst_61244 = (state_61249[(2)]);
var state_61249__$1 = state_61249;
var statearr_61262_63080 = state_61249__$1;
(statearr_61262_63080[(2)] = inst_61244);

(statearr_61262_63080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (1))){
var state_61249__$1 = state_61249;
var statearr_61263_63081 = state_61249__$1;
(statearr_61263_63081[(2)] = null);

(statearr_61263_63081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (4))){
var inst_61218 = (state_61249[(7)]);
var inst_61218__$1 = (state_61249[(2)]);
var inst_61221 = (inst_61218__$1 == null);
var state_61249__$1 = (function (){var statearr_61264 = state_61249;
(statearr_61264[(7)] = inst_61218__$1);

return statearr_61264;
})();
if(cljs.core.truth_(inst_61221)){
var statearr_61265_63085 = state_61249__$1;
(statearr_61265_63085[(1)] = (5));

} else {
var statearr_61266_63086 = state_61249__$1;
(statearr_61266_63086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (13))){
var state_61249__$1 = state_61249;
var statearr_61267_63087 = state_61249__$1;
(statearr_61267_63087[(2)] = null);

(statearr_61267_63087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (6))){
var inst_61218 = (state_61249[(7)]);
var state_61249__$1 = state_61249;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61249__$1,(11),to,inst_61218);
} else {
if((state_val_61251 === (3))){
var inst_61247 = (state_61249[(2)]);
var state_61249__$1 = state_61249;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61249__$1,inst_61247);
} else {
if((state_val_61251 === (12))){
var state_61249__$1 = state_61249;
var statearr_61282_63089 = state_61249__$1;
(statearr_61282_63089[(2)] = null);

(statearr_61282_63089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (2))){
var state_61249__$1 = state_61249;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61249__$1,(4),from);
} else {
if((state_val_61251 === (11))){
var inst_61235 = (state_61249[(2)]);
var state_61249__$1 = state_61249;
if(cljs.core.truth_(inst_61235)){
var statearr_61283_63090 = state_61249__$1;
(statearr_61283_63090[(1)] = (12));

} else {
var statearr_61284_63091 = state_61249__$1;
(statearr_61284_63091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (9))){
var state_61249__$1 = state_61249;
var statearr_61286_63092 = state_61249__$1;
(statearr_61286_63092[(2)] = null);

(statearr_61286_63092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (5))){
var state_61249__$1 = state_61249;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61288_63096 = state_61249__$1;
(statearr_61288_63096[(1)] = (8));

} else {
var statearr_61290_63097 = state_61249__$1;
(statearr_61290_63097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (14))){
var inst_61242 = (state_61249[(2)]);
var state_61249__$1 = state_61249;
var statearr_61291_63098 = state_61249__$1;
(statearr_61291_63098[(2)] = inst_61242);

(statearr_61291_63098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (10))){
var inst_61228 = (state_61249[(2)]);
var state_61249__$1 = state_61249;
var statearr_61292_63100 = state_61249__$1;
(statearr_61292_63100[(2)] = inst_61228);

(statearr_61292_63100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61251 === (8))){
var inst_61224 = cljs.core.async.close_BANG_(to);
var state_61249__$1 = state_61249;
var statearr_61295_63101 = state_61249__$1;
(statearr_61295_63101[(2)] = inst_61224);

(statearr_61295_63101[(1)] = (10));


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
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_61297 = [null,null,null,null,null,null,null,null];
(statearr_61297[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_61297[(1)] = (1));

return statearr_61297;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_61249){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61249);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61298){var ex__60808__auto__ = e61298;
var statearr_61299_63105 = state_61249;
(statearr_61299_63105[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61249[(4)]))){
var statearr_61301_63106 = state_61249;
(statearr_61301_63106[(1)] = cljs.core.first((state_61249[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63107 = state_61249;
state_61249 = G__63107;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_61249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_61249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61302 = f__61049__auto__();
(statearr_61302[(6)] = c__61048__auto___63079);

return statearr_61302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__61312){
var vec__61314 = p__61312;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61314,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61314,(1),null);
var job = vec__61314;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__61048__auto___63112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61325){
var state_val_61326 = (state_61325[(1)]);
if((state_val_61326 === (1))){
var state_61325__$1 = state_61325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61325__$1,(2),res,v);
} else {
if((state_val_61326 === (2))){
var inst_61322 = (state_61325[(2)]);
var inst_61323 = cljs.core.async.close_BANG_(res);
var state_61325__$1 = (function (){var statearr_61330 = state_61325;
(statearr_61330[(7)] = inst_61322);

return statearr_61330;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_61325__$1,inst_61323);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0 = (function (){
var statearr_61331 = [null,null,null,null,null,null,null,null];
(statearr_61331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__);

(statearr_61331[(1)] = (1));

return statearr_61331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1 = (function (state_61325){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61325);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61332){var ex__60808__auto__ = e61332;
var statearr_61333_63116 = state_61325;
(statearr_61333_63116[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61325[(4)]))){
var statearr_61334_63117 = state_61325;
(statearr_61334_63117[(1)] = cljs.core.first((state_61325[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63119 = state_61325;
state_61325 = G__63119;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = function(state_61325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1.call(this,state_61325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61335 = f__61049__auto__();
(statearr_61335[(6)] = c__61048__auto___63112);

return statearr_61335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__61343){
var vec__61344 = p__61343;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61344,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61344,(1),null);
var job = vec__61344;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___63123 = n;
var __63124 = (0);
while(true){
if((__63124 < n__4613__auto___63123)){
var G__61347_63125 = type;
var G__61347_63126__$1 = (((G__61347_63125 instanceof cljs.core.Keyword))?G__61347_63125.fqn:null);
switch (G__61347_63126__$1) {
case "compute":
var c__61048__auto___63128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63124,c__61048__auto___63128,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async){
return (function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = ((function (__63124,c__61048__auto___63128,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async){
return (function (state_61360){
var state_val_61361 = (state_61360[(1)]);
if((state_val_61361 === (1))){
var state_61360__$1 = state_61360;
var statearr_61362_63130 = state_61360__$1;
(statearr_61362_63130[(2)] = null);

(statearr_61362_63130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (2))){
var state_61360__$1 = state_61360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61360__$1,(4),jobs);
} else {
if((state_val_61361 === (3))){
var inst_61358 = (state_61360[(2)]);
var state_61360__$1 = state_61360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61360__$1,inst_61358);
} else {
if((state_val_61361 === (4))){
var inst_61350 = (state_61360[(2)]);
var inst_61351 = process(inst_61350);
var state_61360__$1 = state_61360;
if(cljs.core.truth_(inst_61351)){
var statearr_61364_63132 = state_61360__$1;
(statearr_61364_63132[(1)] = (5));

} else {
var statearr_61365_63133 = state_61360__$1;
(statearr_61365_63133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (5))){
var state_61360__$1 = state_61360;
var statearr_61366_63134 = state_61360__$1;
(statearr_61366_63134[(2)] = null);

(statearr_61366_63134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (6))){
var state_61360__$1 = state_61360;
var statearr_61369_63135 = state_61360__$1;
(statearr_61369_63135[(2)] = null);

(statearr_61369_63135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61361 === (7))){
var inst_61356 = (state_61360[(2)]);
var state_61360__$1 = state_61360;
var statearr_61372_63136 = state_61360__$1;
(statearr_61372_63136[(2)] = inst_61356);

(statearr_61372_63136[(1)] = (3));


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
});})(__63124,c__61048__auto___63128,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async))
;
return ((function (__63124,switch__60804__auto__,c__61048__auto___63128,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0 = (function (){
var statearr_61373 = [null,null,null,null,null,null,null];
(statearr_61373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__);

(statearr_61373[(1)] = (1));

return statearr_61373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1 = (function (state_61360){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61360);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61374){var ex__60808__auto__ = e61374;
var statearr_61375_63140 = state_61360;
(statearr_61375_63140[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61360[(4)]))){
var statearr_61376_63141 = state_61360;
(statearr_61376_63141[(1)] = cljs.core.first((state_61360[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63142 = state_61360;
state_61360 = G__63142;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = function(state_61360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1.call(this,state_61360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__;
})()
;})(__63124,switch__60804__auto__,c__61048__auto___63128,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async))
})();
var state__61050__auto__ = (function (){var statearr_61378 = f__61049__auto__();
(statearr_61378[(6)] = c__61048__auto___63128);

return statearr_61378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
});})(__63124,c__61048__auto___63128,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async))
);


break;
case "async":
var c__61048__auto___63143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__63124,c__61048__auto___63143,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async){
return (function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = ((function (__63124,c__61048__auto___63143,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async){
return (function (state_61391){
var state_val_61392 = (state_61391[(1)]);
if((state_val_61392 === (1))){
var state_61391__$1 = state_61391;
var statearr_61394_63144 = state_61391__$1;
(statearr_61394_63144[(2)] = null);

(statearr_61394_63144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (2))){
var state_61391__$1 = state_61391;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61391__$1,(4),jobs);
} else {
if((state_val_61392 === (3))){
var inst_61389 = (state_61391[(2)]);
var state_61391__$1 = state_61391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61391__$1,inst_61389);
} else {
if((state_val_61392 === (4))){
var inst_61381 = (state_61391[(2)]);
var inst_61382 = async(inst_61381);
var state_61391__$1 = state_61391;
if(cljs.core.truth_(inst_61382)){
var statearr_61396_63146 = state_61391__$1;
(statearr_61396_63146[(1)] = (5));

} else {
var statearr_61397_63147 = state_61391__$1;
(statearr_61397_63147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (5))){
var state_61391__$1 = state_61391;
var statearr_61398_63150 = state_61391__$1;
(statearr_61398_63150[(2)] = null);

(statearr_61398_63150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (6))){
var state_61391__$1 = state_61391;
var statearr_61399_63151 = state_61391__$1;
(statearr_61399_63151[(2)] = null);

(statearr_61399_63151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61392 === (7))){
var inst_61387 = (state_61391[(2)]);
var state_61391__$1 = state_61391;
var statearr_61401_63152 = state_61391__$1;
(statearr_61401_63152[(2)] = inst_61387);

(statearr_61401_63152[(1)] = (3));


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
});})(__63124,c__61048__auto___63143,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async))
;
return ((function (__63124,switch__60804__auto__,c__61048__auto___63143,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0 = (function (){
var statearr_61404 = [null,null,null,null,null,null,null];
(statearr_61404[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__);

(statearr_61404[(1)] = (1));

return statearr_61404;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1 = (function (state_61391){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61391);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61405){var ex__60808__auto__ = e61405;
var statearr_61406_63172 = state_61391;
(statearr_61406_63172[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61391[(4)]))){
var statearr_61407_63173 = state_61391;
(statearr_61407_63173[(1)] = cljs.core.first((state_61391[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63174 = state_61391;
state_61391 = G__63174;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = function(state_61391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1.call(this,state_61391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__;
})()
;})(__63124,switch__60804__auto__,c__61048__auto___63143,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async))
})();
var state__61050__auto__ = (function (){var statearr_61410 = f__61049__auto__();
(statearr_61410[(6)] = c__61048__auto___63143);

return statearr_61410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
});})(__63124,c__61048__auto___63143,G__61347_63125,G__61347_63126__$1,n__4613__auto___63123,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61347_63126__$1)].join('')));

}

var G__63176 = (__63124 + (1));
__63124 = G__63176;
continue;
} else {
}
break;
}

var c__61048__auto___63177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61438){
var state_val_61439 = (state_61438[(1)]);
if((state_val_61439 === (7))){
var inst_61434 = (state_61438[(2)]);
var state_61438__$1 = state_61438;
var statearr_61441_63179 = state_61438__$1;
(statearr_61441_63179[(2)] = inst_61434);

(statearr_61441_63179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61439 === (1))){
var state_61438__$1 = state_61438;
var statearr_61444_63182 = state_61438__$1;
(statearr_61444_63182[(2)] = null);

(statearr_61444_63182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61439 === (4))){
var inst_61415 = (state_61438[(7)]);
var inst_61415__$1 = (state_61438[(2)]);
var inst_61416 = (inst_61415__$1 == null);
var state_61438__$1 = (function (){var statearr_61445 = state_61438;
(statearr_61445[(7)] = inst_61415__$1);

return statearr_61445;
})();
if(cljs.core.truth_(inst_61416)){
var statearr_61446_63185 = state_61438__$1;
(statearr_61446_63185[(1)] = (5));

} else {
var statearr_61447_63186 = state_61438__$1;
(statearr_61447_63186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61439 === (6))){
var inst_61415 = (state_61438[(7)]);
var inst_61420 = (state_61438[(8)]);
var inst_61420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_61421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_61423 = [inst_61415,inst_61420__$1];
var inst_61424 = (new cljs.core.PersistentVector(null,2,(5),inst_61421,inst_61423,null));
var state_61438__$1 = (function (){var statearr_61448 = state_61438;
(statearr_61448[(8)] = inst_61420__$1);

return statearr_61448;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61438__$1,(8),jobs,inst_61424);
} else {
if((state_val_61439 === (3))){
var inst_61436 = (state_61438[(2)]);
var state_61438__$1 = state_61438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61438__$1,inst_61436);
} else {
if((state_val_61439 === (2))){
var state_61438__$1 = state_61438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61438__$1,(4),from);
} else {
if((state_val_61439 === (9))){
var inst_61430 = (state_61438[(2)]);
var state_61438__$1 = (function (){var statearr_61449 = state_61438;
(statearr_61449[(9)] = inst_61430);

return statearr_61449;
})();
var statearr_61452_63190 = state_61438__$1;
(statearr_61452_63190[(2)] = null);

(statearr_61452_63190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61439 === (5))){
var inst_61418 = cljs.core.async.close_BANG_(jobs);
var state_61438__$1 = state_61438;
var statearr_61454_63193 = state_61438__$1;
(statearr_61454_63193[(2)] = inst_61418);

(statearr_61454_63193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61439 === (8))){
var inst_61420 = (state_61438[(8)]);
var inst_61427 = (state_61438[(2)]);
var state_61438__$1 = (function (){var statearr_61455 = state_61438;
(statearr_61455[(10)] = inst_61427);

return statearr_61455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61438__$1,(9),results,inst_61420);
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
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0 = (function (){
var statearr_61456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__);

(statearr_61456[(1)] = (1));

return statearr_61456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1 = (function (state_61438){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61438);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61457){var ex__60808__auto__ = e61457;
var statearr_61458_63198 = state_61438;
(statearr_61458_63198[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61438[(4)]))){
var statearr_61459_63199 = state_61438;
(statearr_61459_63199[(1)] = cljs.core.first((state_61438[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63200 = state_61438;
state_61438 = G__63200;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = function(state_61438){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1.call(this,state_61438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61461 = f__61049__auto__();
(statearr_61461[(6)] = c__61048__auto___63177);

return statearr_61461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


var c__61048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61499){
var state_val_61500 = (state_61499[(1)]);
if((state_val_61500 === (7))){
var inst_61495 = (state_61499[(2)]);
var state_61499__$1 = state_61499;
var statearr_61502_63204 = state_61499__$1;
(statearr_61502_63204[(2)] = inst_61495);

(statearr_61502_63204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (20))){
var state_61499__$1 = state_61499;
var statearr_61503_63205 = state_61499__$1;
(statearr_61503_63205[(2)] = null);

(statearr_61503_63205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (1))){
var state_61499__$1 = state_61499;
var statearr_61504_63206 = state_61499__$1;
(statearr_61504_63206[(2)] = null);

(statearr_61504_63206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (4))){
var inst_61464 = (state_61499[(7)]);
var inst_61464__$1 = (state_61499[(2)]);
var inst_61465 = (inst_61464__$1 == null);
var state_61499__$1 = (function (){var statearr_61505 = state_61499;
(statearr_61505[(7)] = inst_61464__$1);

return statearr_61505;
})();
if(cljs.core.truth_(inst_61465)){
var statearr_61506_63210 = state_61499__$1;
(statearr_61506_63210[(1)] = (5));

} else {
var statearr_61507_63211 = state_61499__$1;
(statearr_61507_63211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (15))){
var inst_61477 = (state_61499[(8)]);
var state_61499__$1 = state_61499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61499__$1,(18),to,inst_61477);
} else {
if((state_val_61500 === (21))){
var inst_61490 = (state_61499[(2)]);
var state_61499__$1 = state_61499;
var statearr_61509_63212 = state_61499__$1;
(statearr_61509_63212[(2)] = inst_61490);

(statearr_61509_63212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (13))){
var inst_61492 = (state_61499[(2)]);
var state_61499__$1 = (function (){var statearr_61510 = state_61499;
(statearr_61510[(9)] = inst_61492);

return statearr_61510;
})();
var statearr_61511_63213 = state_61499__$1;
(statearr_61511_63213[(2)] = null);

(statearr_61511_63213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (6))){
var inst_61464 = (state_61499[(7)]);
var state_61499__$1 = state_61499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61499__$1,(11),inst_61464);
} else {
if((state_val_61500 === (17))){
var inst_61485 = (state_61499[(2)]);
var state_61499__$1 = state_61499;
if(cljs.core.truth_(inst_61485)){
var statearr_61512_63214 = state_61499__$1;
(statearr_61512_63214[(1)] = (19));

} else {
var statearr_61513_63215 = state_61499__$1;
(statearr_61513_63215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (3))){
var inst_61497 = (state_61499[(2)]);
var state_61499__$1 = state_61499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61499__$1,inst_61497);
} else {
if((state_val_61500 === (12))){
var inst_61474 = (state_61499[(10)]);
var state_61499__$1 = state_61499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61499__$1,(14),inst_61474);
} else {
if((state_val_61500 === (2))){
var state_61499__$1 = state_61499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61499__$1,(4),results);
} else {
if((state_val_61500 === (19))){
var state_61499__$1 = state_61499;
var statearr_61514_63216 = state_61499__$1;
(statearr_61514_63216[(2)] = null);

(statearr_61514_63216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (11))){
var inst_61474 = (state_61499[(2)]);
var state_61499__$1 = (function (){var statearr_61515 = state_61499;
(statearr_61515[(10)] = inst_61474);

return statearr_61515;
})();
var statearr_61516_63217 = state_61499__$1;
(statearr_61516_63217[(2)] = null);

(statearr_61516_63217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (9))){
var state_61499__$1 = state_61499;
var statearr_61518_63218 = state_61499__$1;
(statearr_61518_63218[(2)] = null);

(statearr_61518_63218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (5))){
var state_61499__$1 = state_61499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61519_63220 = state_61499__$1;
(statearr_61519_63220[(1)] = (8));

} else {
var statearr_61521_63221 = state_61499__$1;
(statearr_61521_63221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (14))){
var inst_61477 = (state_61499[(8)]);
var inst_61477__$1 = (state_61499[(2)]);
var inst_61478 = (inst_61477__$1 == null);
var inst_61479 = cljs.core.not(inst_61478);
var state_61499__$1 = (function (){var statearr_61522 = state_61499;
(statearr_61522[(8)] = inst_61477__$1);

return statearr_61522;
})();
if(inst_61479){
var statearr_61523_63223 = state_61499__$1;
(statearr_61523_63223[(1)] = (15));

} else {
var statearr_61524_63224 = state_61499__$1;
(statearr_61524_63224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (16))){
var state_61499__$1 = state_61499;
var statearr_61526_63225 = state_61499__$1;
(statearr_61526_63225[(2)] = false);

(statearr_61526_63225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (10))){
var inst_61471 = (state_61499[(2)]);
var state_61499__$1 = state_61499;
var statearr_61529_63227 = state_61499__$1;
(statearr_61529_63227[(2)] = inst_61471);

(statearr_61529_63227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (18))){
var inst_61482 = (state_61499[(2)]);
var state_61499__$1 = state_61499;
var statearr_61530_63230 = state_61499__$1;
(statearr_61530_63230[(2)] = inst_61482);

(statearr_61530_63230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61500 === (8))){
var inst_61468 = cljs.core.async.close_BANG_(to);
var state_61499__$1 = state_61499;
var statearr_61531_63231 = state_61499__$1;
(statearr_61531_63231[(2)] = inst_61468);

(statearr_61531_63231[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0 = (function (){
var statearr_61534 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_61534[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__);

(statearr_61534[(1)] = (1));

return statearr_61534;
});
var cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1 = (function (state_61499){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61499);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61536){var ex__60808__auto__ = e61536;
var statearr_61537_63234 = state_61499;
(statearr_61537_63234[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61499[(4)]))){
var statearr_61538_63235 = state_61499;
(statearr_61538_63235[(1)] = cljs.core.first((state_61499[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63239 = state_61499;
state_61499 = G__63239;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__ = function(state_61499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1.call(this,state_61499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__60805__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61539 = f__61049__auto__();
(statearr_61539[(6)] = c__61048__auto__);

return statearr_61539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));

return c__61048__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__61541 = arguments.length;
switch (G__61541) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__61547 = arguments.length;
switch (G__61547) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__61552 = arguments.length;
switch (G__61552) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__61048__auto___63245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61584){
var state_val_61585 = (state_61584[(1)]);
if((state_val_61585 === (7))){
var inst_61579 = (state_61584[(2)]);
var state_61584__$1 = state_61584;
var statearr_61586_63250 = state_61584__$1;
(statearr_61586_63250[(2)] = inst_61579);

(statearr_61586_63250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (1))){
var state_61584__$1 = state_61584;
var statearr_61587_63251 = state_61584__$1;
(statearr_61587_63251[(2)] = null);

(statearr_61587_63251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (4))){
var inst_61558 = (state_61584[(7)]);
var inst_61558__$1 = (state_61584[(2)]);
var inst_61560 = (inst_61558__$1 == null);
var state_61584__$1 = (function (){var statearr_61588 = state_61584;
(statearr_61588[(7)] = inst_61558__$1);

return statearr_61588;
})();
if(cljs.core.truth_(inst_61560)){
var statearr_61589_63255 = state_61584__$1;
(statearr_61589_63255[(1)] = (5));

} else {
var statearr_61591_63256 = state_61584__$1;
(statearr_61591_63256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (13))){
var state_61584__$1 = state_61584;
var statearr_61594_63257 = state_61584__$1;
(statearr_61594_63257[(2)] = null);

(statearr_61594_63257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (6))){
var inst_61558 = (state_61584[(7)]);
var inst_61566 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_61558) : p.call(null,inst_61558));
var state_61584__$1 = state_61584;
if(cljs.core.truth_(inst_61566)){
var statearr_61595_63258 = state_61584__$1;
(statearr_61595_63258[(1)] = (9));

} else {
var statearr_61596_63259 = state_61584__$1;
(statearr_61596_63259[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (3))){
var inst_61581 = (state_61584[(2)]);
var state_61584__$1 = state_61584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61584__$1,inst_61581);
} else {
if((state_val_61585 === (12))){
var state_61584__$1 = state_61584;
var statearr_61597_63263 = state_61584__$1;
(statearr_61597_63263[(2)] = null);

(statearr_61597_63263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (2))){
var state_61584__$1 = state_61584;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61584__$1,(4),ch);
} else {
if((state_val_61585 === (11))){
var inst_61558 = (state_61584[(7)]);
var inst_61570 = (state_61584[(2)]);
var state_61584__$1 = state_61584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61584__$1,(8),inst_61570,inst_61558);
} else {
if((state_val_61585 === (9))){
var state_61584__$1 = state_61584;
var statearr_61598_63264 = state_61584__$1;
(statearr_61598_63264[(2)] = tc);

(statearr_61598_63264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (5))){
var inst_61562 = cljs.core.async.close_BANG_(tc);
var inst_61563 = cljs.core.async.close_BANG_(fc);
var state_61584__$1 = (function (){var statearr_61599 = state_61584;
(statearr_61599[(8)] = inst_61562);

return statearr_61599;
})();
var statearr_61601_63265 = state_61584__$1;
(statearr_61601_63265[(2)] = inst_61563);

(statearr_61601_63265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (14))){
var inst_61577 = (state_61584[(2)]);
var state_61584__$1 = state_61584;
var statearr_61604_63266 = state_61584__$1;
(statearr_61604_63266[(2)] = inst_61577);

(statearr_61604_63266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (10))){
var state_61584__$1 = state_61584;
var statearr_61606_63267 = state_61584__$1;
(statearr_61606_63267[(2)] = fc);

(statearr_61606_63267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61585 === (8))){
var inst_61572 = (state_61584[(2)]);
var state_61584__$1 = state_61584;
if(cljs.core.truth_(inst_61572)){
var statearr_61608_63268 = state_61584__$1;
(statearr_61608_63268[(1)] = (12));

} else {
var statearr_61609_63269 = state_61584__$1;
(statearr_61609_63269[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_61610 = [null,null,null,null,null,null,null,null,null];
(statearr_61610[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_61610[(1)] = (1));

return statearr_61610;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_61584){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61584);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61611){var ex__60808__auto__ = e61611;
var statearr_61612_63284 = state_61584;
(statearr_61612_63284[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61584[(4)]))){
var statearr_61613_63285 = state_61584;
(statearr_61613_63285[(1)] = cljs.core.first((state_61584[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63299 = state_61584;
state_61584 = G__63299;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_61584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_61584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61614 = f__61049__auto__();
(statearr_61614[(6)] = c__61048__auto___63245);

return statearr_61614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__61048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61640){
var state_val_61641 = (state_61640[(1)]);
if((state_val_61641 === (7))){
var inst_61636 = (state_61640[(2)]);
var state_61640__$1 = state_61640;
var statearr_61642_63326 = state_61640__$1;
(statearr_61642_63326[(2)] = inst_61636);

(statearr_61642_63326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (1))){
var inst_61619 = init;
var inst_61620 = inst_61619;
var state_61640__$1 = (function (){var statearr_61643 = state_61640;
(statearr_61643[(7)] = inst_61620);

return statearr_61643;
})();
var statearr_61644_63330 = state_61640__$1;
(statearr_61644_63330[(2)] = null);

(statearr_61644_63330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (4))){
var inst_61623 = (state_61640[(8)]);
var inst_61623__$1 = (state_61640[(2)]);
var inst_61624 = (inst_61623__$1 == null);
var state_61640__$1 = (function (){var statearr_61645 = state_61640;
(statearr_61645[(8)] = inst_61623__$1);

return statearr_61645;
})();
if(cljs.core.truth_(inst_61624)){
var statearr_61646_63333 = state_61640__$1;
(statearr_61646_63333[(1)] = (5));

} else {
var statearr_61647_63334 = state_61640__$1;
(statearr_61647_63334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (6))){
var inst_61620 = (state_61640[(7)]);
var inst_61623 = (state_61640[(8)]);
var inst_61627 = (state_61640[(9)]);
var inst_61627__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_61620,inst_61623) : f.call(null,inst_61620,inst_61623));
var inst_61628 = cljs.core.reduced_QMARK_(inst_61627__$1);
var state_61640__$1 = (function (){var statearr_61648 = state_61640;
(statearr_61648[(9)] = inst_61627__$1);

return statearr_61648;
})();
if(inst_61628){
var statearr_61649_63337 = state_61640__$1;
(statearr_61649_63337[(1)] = (8));

} else {
var statearr_61650_63338 = state_61640__$1;
(statearr_61650_63338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (3))){
var inst_61638 = (state_61640[(2)]);
var state_61640__$1 = state_61640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61640__$1,inst_61638);
} else {
if((state_val_61641 === (2))){
var state_61640__$1 = state_61640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61640__$1,(4),ch);
} else {
if((state_val_61641 === (9))){
var inst_61627 = (state_61640[(9)]);
var inst_61620 = inst_61627;
var state_61640__$1 = (function (){var statearr_61654 = state_61640;
(statearr_61654[(7)] = inst_61620);

return statearr_61654;
})();
var statearr_61655_63341 = state_61640__$1;
(statearr_61655_63341[(2)] = null);

(statearr_61655_63341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (5))){
var inst_61620 = (state_61640[(7)]);
var state_61640__$1 = state_61640;
var statearr_61656_63342 = state_61640__$1;
(statearr_61656_63342[(2)] = inst_61620);

(statearr_61656_63342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (10))){
var inst_61634 = (state_61640[(2)]);
var state_61640__$1 = state_61640;
var statearr_61657_63344 = state_61640__$1;
(statearr_61657_63344[(2)] = inst_61634);

(statearr_61657_63344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61641 === (8))){
var inst_61627 = (state_61640[(9)]);
var inst_61630 = cljs.core.deref(inst_61627);
var state_61640__$1 = state_61640;
var statearr_61658_63347 = state_61640__$1;
(statearr_61658_63347[(2)] = inst_61630);

(statearr_61658_63347[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__60805__auto__ = null;
var cljs$core$async$reduce_$_state_machine__60805__auto____0 = (function (){
var statearr_61663 = [null,null,null,null,null,null,null,null,null,null];
(statearr_61663[(0)] = cljs$core$async$reduce_$_state_machine__60805__auto__);

(statearr_61663[(1)] = (1));

return statearr_61663;
});
var cljs$core$async$reduce_$_state_machine__60805__auto____1 = (function (state_61640){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61640);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61664){var ex__60808__auto__ = e61664;
var statearr_61665_63351 = state_61640;
(statearr_61665_63351[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61640[(4)]))){
var statearr_61666_63353 = state_61640;
(statearr_61666_63353[(1)] = cljs.core.first((state_61640[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63355 = state_61640;
state_61640 = G__63355;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__60805__auto__ = function(state_61640){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__60805__auto____1.call(this,state_61640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__60805__auto____0;
cljs$core$async$reduce_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__60805__auto____1;
return cljs$core$async$reduce_$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61667 = f__61049__auto__();
(statearr_61667[(6)] = c__61048__auto__);

return statearr_61667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));

return c__61048__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__61048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61676){
var state_val_61677 = (state_61676[(1)]);
if((state_val_61677 === (1))){
var inst_61671 = cljs.core.async.reduce(f__$1,init,ch);
var state_61676__$1 = state_61676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61676__$1,(2),inst_61671);
} else {
if((state_val_61677 === (2))){
var inst_61673 = (state_61676[(2)]);
var inst_61674 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_61673) : f__$1.call(null,inst_61673));
var state_61676__$1 = state_61676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61676__$1,inst_61674);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__60805__auto__ = null;
var cljs$core$async$transduce_$_state_machine__60805__auto____0 = (function (){
var statearr_61678 = [null,null,null,null,null,null,null];
(statearr_61678[(0)] = cljs$core$async$transduce_$_state_machine__60805__auto__);

(statearr_61678[(1)] = (1));

return statearr_61678;
});
var cljs$core$async$transduce_$_state_machine__60805__auto____1 = (function (state_61676){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61676);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61679){var ex__60808__auto__ = e61679;
var statearr_61680_63363 = state_61676;
(statearr_61680_63363[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61676[(4)]))){
var statearr_61681_63364 = state_61676;
(statearr_61681_63364[(1)] = cljs.core.first((state_61676[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63366 = state_61676;
state_61676 = G__63366;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__60805__auto__ = function(state_61676){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__60805__auto____1.call(this,state_61676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__60805__auto____0;
cljs$core$async$transduce_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__60805__auto____1;
return cljs$core$async$transduce_$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61682 = f__61049__auto__();
(statearr_61682[(6)] = c__61048__auto__);

return statearr_61682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));

return c__61048__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__61689 = arguments.length;
switch (G__61689) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__61048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61714){
var state_val_61715 = (state_61714[(1)]);
if((state_val_61715 === (7))){
var inst_61696 = (state_61714[(2)]);
var state_61714__$1 = state_61714;
var statearr_61716_63372 = state_61714__$1;
(statearr_61716_63372[(2)] = inst_61696);

(statearr_61716_63372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (1))){
var inst_61690 = cljs.core.seq(coll);
var inst_61691 = inst_61690;
var state_61714__$1 = (function (){var statearr_61718 = state_61714;
(statearr_61718[(7)] = inst_61691);

return statearr_61718;
})();
var statearr_61720_63373 = state_61714__$1;
(statearr_61720_63373[(2)] = null);

(statearr_61720_63373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (4))){
var inst_61691 = (state_61714[(7)]);
var inst_61694 = cljs.core.first(inst_61691);
var state_61714__$1 = state_61714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_61714__$1,(7),ch,inst_61694);
} else {
if((state_val_61715 === (13))){
var inst_61708 = (state_61714[(2)]);
var state_61714__$1 = state_61714;
var statearr_61722_63374 = state_61714__$1;
(statearr_61722_63374[(2)] = inst_61708);

(statearr_61722_63374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (6))){
var inst_61699 = (state_61714[(2)]);
var state_61714__$1 = state_61714;
if(cljs.core.truth_(inst_61699)){
var statearr_61723_63375 = state_61714__$1;
(statearr_61723_63375[(1)] = (8));

} else {
var statearr_61724_63376 = state_61714__$1;
(statearr_61724_63376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (3))){
var inst_61712 = (state_61714[(2)]);
var state_61714__$1 = state_61714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61714__$1,inst_61712);
} else {
if((state_val_61715 === (12))){
var state_61714__$1 = state_61714;
var statearr_61725_63377 = state_61714__$1;
(statearr_61725_63377[(2)] = null);

(statearr_61725_63377[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (2))){
var inst_61691 = (state_61714[(7)]);
var state_61714__$1 = state_61714;
if(cljs.core.truth_(inst_61691)){
var statearr_61726_63378 = state_61714__$1;
(statearr_61726_63378[(1)] = (4));

} else {
var statearr_61727_63379 = state_61714__$1;
(statearr_61727_63379[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (11))){
var inst_61705 = cljs.core.async.close_BANG_(ch);
var state_61714__$1 = state_61714;
var statearr_61728_63380 = state_61714__$1;
(statearr_61728_63380[(2)] = inst_61705);

(statearr_61728_63380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (9))){
var state_61714__$1 = state_61714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_61729_63381 = state_61714__$1;
(statearr_61729_63381[(1)] = (11));

} else {
var statearr_61730_63382 = state_61714__$1;
(statearr_61730_63382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (5))){
var inst_61691 = (state_61714[(7)]);
var state_61714__$1 = state_61714;
var statearr_61731_63383 = state_61714__$1;
(statearr_61731_63383[(2)] = inst_61691);

(statearr_61731_63383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (10))){
var inst_61710 = (state_61714[(2)]);
var state_61714__$1 = state_61714;
var statearr_61732_63385 = state_61714__$1;
(statearr_61732_63385[(2)] = inst_61710);

(statearr_61732_63385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61715 === (8))){
var inst_61691 = (state_61714[(7)]);
var inst_61701 = cljs.core.next(inst_61691);
var inst_61691__$1 = inst_61701;
var state_61714__$1 = (function (){var statearr_61733 = state_61714;
(statearr_61733[(7)] = inst_61691__$1);

return statearr_61733;
})();
var statearr_61734_63386 = state_61714__$1;
(statearr_61734_63386[(2)] = null);

(statearr_61734_63386[(1)] = (2));


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
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_61737 = [null,null,null,null,null,null,null,null];
(statearr_61737[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_61737[(1)] = (1));

return statearr_61737;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_61714){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61714);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e61739){var ex__60808__auto__ = e61739;
var statearr_61740_63388 = state_61714;
(statearr_61740_63388[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61714[(4)]))){
var statearr_61741_63389 = state_61714;
(statearr_61741_63389[(1)] = cljs.core.first((state_61714[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63390 = state_61714;
state_61714 = G__63390;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_61714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_61714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_61742 = f__61049__auto__();
(statearr_61742[(6)] = c__61048__auto__);

return statearr_61742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));

return c__61048__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__61744 = arguments.length;
switch (G__61744) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_63392 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_63392(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_63393 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_63393(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_63394 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_63394(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_63395 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_63395(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async61754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async61754 = (function (ch,cs,meta61755){
this.ch = ch;
this.cs = cs;
this.meta61755 = meta61755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61756,meta61755__$1){
var self__ = this;
var _61756__$1 = this;
return (new cljs.core.async.t_cljs$core$async61754(self__.ch,self__.cs,meta61755__$1));
}));

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61756){
var self__ = this;
var _61756__$1 = this;
return self__.meta61755;
}));

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async61754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async61754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta61755","meta61755",1576005538,null)], null);
}));

(cljs.core.async.t_cljs$core$async61754.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async61754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async61754");

(cljs.core.async.t_cljs$core$async61754.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async61754");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async61754.
 */
cljs.core.async.__GT_t_cljs$core$async61754 = (function cljs$core$async$mult_$___GT_t_cljs$core$async61754(ch__$1,cs__$1,meta61755){
return (new cljs.core.async.t_cljs$core$async61754(ch__$1,cs__$1,meta61755));
});

}

return (new cljs.core.async.t_cljs$core$async61754(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__61048__auto___63396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_61900){
var state_val_61901 = (state_61900[(1)]);
if((state_val_61901 === (7))){
var inst_61896 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61902_63397 = state_61900__$1;
(statearr_61902_63397[(2)] = inst_61896);

(statearr_61902_63397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (20))){
var inst_61801 = (state_61900[(7)]);
var inst_61813 = cljs.core.first(inst_61801);
var inst_61814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61813,(0),null);
var inst_61815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61813,(1),null);
var state_61900__$1 = (function (){var statearr_61904 = state_61900;
(statearr_61904[(8)] = inst_61814);

return statearr_61904;
})();
if(cljs.core.truth_(inst_61815)){
var statearr_61905_63399 = state_61900__$1;
(statearr_61905_63399[(1)] = (22));

} else {
var statearr_61906_63400 = state_61900__$1;
(statearr_61906_63400[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (27))){
var inst_61845 = (state_61900[(9)]);
var inst_61768 = (state_61900[(10)]);
var inst_61843 = (state_61900[(11)]);
var inst_61850 = (state_61900[(12)]);
var inst_61850__$1 = cljs.core._nth(inst_61843,inst_61845);
var inst_61851 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61850__$1,inst_61768,done);
var state_61900__$1 = (function (){var statearr_61907 = state_61900;
(statearr_61907[(12)] = inst_61850__$1);

return statearr_61907;
})();
if(cljs.core.truth_(inst_61851)){
var statearr_61908_63401 = state_61900__$1;
(statearr_61908_63401[(1)] = (30));

} else {
var statearr_61909_63402 = state_61900__$1;
(statearr_61909_63402[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (1))){
var state_61900__$1 = state_61900;
var statearr_61910_63403 = state_61900__$1;
(statearr_61910_63403[(2)] = null);

(statearr_61910_63403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (24))){
var inst_61801 = (state_61900[(7)]);
var inst_61820 = (state_61900[(2)]);
var inst_61821 = cljs.core.next(inst_61801);
var inst_61779 = inst_61821;
var inst_61780 = null;
var inst_61781 = (0);
var inst_61782 = (0);
var state_61900__$1 = (function (){var statearr_61914 = state_61900;
(statearr_61914[(13)] = inst_61782);

(statearr_61914[(14)] = inst_61820);

(statearr_61914[(15)] = inst_61780);

(statearr_61914[(16)] = inst_61781);

(statearr_61914[(17)] = inst_61779);

return statearr_61914;
})();
var statearr_61915_63407 = state_61900__$1;
(statearr_61915_63407[(2)] = null);

(statearr_61915_63407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (39))){
var state_61900__$1 = state_61900;
var statearr_61920_63408 = state_61900__$1;
(statearr_61920_63408[(2)] = null);

(statearr_61920_63408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (4))){
var inst_61768 = (state_61900[(10)]);
var inst_61768__$1 = (state_61900[(2)]);
var inst_61770 = (inst_61768__$1 == null);
var state_61900__$1 = (function (){var statearr_61921 = state_61900;
(statearr_61921[(10)] = inst_61768__$1);

return statearr_61921;
})();
if(cljs.core.truth_(inst_61770)){
var statearr_61922_63411 = state_61900__$1;
(statearr_61922_63411[(1)] = (5));

} else {
var statearr_61923_63412 = state_61900__$1;
(statearr_61923_63412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (15))){
var inst_61782 = (state_61900[(13)]);
var inst_61780 = (state_61900[(15)]);
var inst_61781 = (state_61900[(16)]);
var inst_61779 = (state_61900[(17)]);
var inst_61797 = (state_61900[(2)]);
var inst_61798 = (inst_61782 + (1));
var tmp61916 = inst_61780;
var tmp61917 = inst_61781;
var tmp61918 = inst_61779;
var inst_61779__$1 = tmp61918;
var inst_61780__$1 = tmp61916;
var inst_61781__$1 = tmp61917;
var inst_61782__$1 = inst_61798;
var state_61900__$1 = (function (){var statearr_61924 = state_61900;
(statearr_61924[(13)] = inst_61782__$1);

(statearr_61924[(15)] = inst_61780__$1);

(statearr_61924[(16)] = inst_61781__$1);

(statearr_61924[(18)] = inst_61797);

(statearr_61924[(17)] = inst_61779__$1);

return statearr_61924;
})();
var statearr_61925_63415 = state_61900__$1;
(statearr_61925_63415[(2)] = null);

(statearr_61925_63415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (21))){
var inst_61824 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61929_63417 = state_61900__$1;
(statearr_61929_63417[(2)] = inst_61824);

(statearr_61929_63417[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (31))){
var inst_61850 = (state_61900[(12)]);
var inst_61854 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61850);
var state_61900__$1 = state_61900;
var statearr_61930_63418 = state_61900__$1;
(statearr_61930_63418[(2)] = inst_61854);

(statearr_61930_63418[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (32))){
var inst_61845 = (state_61900[(9)]);
var inst_61843 = (state_61900[(11)]);
var inst_61844 = (state_61900[(19)]);
var inst_61842 = (state_61900[(20)]);
var inst_61856 = (state_61900[(2)]);
var inst_61857 = (inst_61845 + (1));
var tmp61926 = inst_61843;
var tmp61927 = inst_61844;
var tmp61928 = inst_61842;
var inst_61842__$1 = tmp61928;
var inst_61843__$1 = tmp61926;
var inst_61844__$1 = tmp61927;
var inst_61845__$1 = inst_61857;
var state_61900__$1 = (function (){var statearr_61931 = state_61900;
(statearr_61931[(9)] = inst_61845__$1);

(statearr_61931[(11)] = inst_61843__$1);

(statearr_61931[(19)] = inst_61844__$1);

(statearr_61931[(20)] = inst_61842__$1);

(statearr_61931[(21)] = inst_61856);

return statearr_61931;
})();
var statearr_61932_63419 = state_61900__$1;
(statearr_61932_63419[(2)] = null);

(statearr_61932_63419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (40))){
var inst_61869 = (state_61900[(22)]);
var inst_61873 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_61869);
var state_61900__$1 = state_61900;
var statearr_61933_63420 = state_61900__$1;
(statearr_61933_63420[(2)] = inst_61873);

(statearr_61933_63420[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (33))){
var inst_61860 = (state_61900[(23)]);
var inst_61862 = cljs.core.chunked_seq_QMARK_(inst_61860);
var state_61900__$1 = state_61900;
if(inst_61862){
var statearr_61934_63421 = state_61900__$1;
(statearr_61934_63421[(1)] = (36));

} else {
var statearr_61935_63422 = state_61900__$1;
(statearr_61935_63422[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (13))){
var inst_61791 = (state_61900[(24)]);
var inst_61794 = cljs.core.async.close_BANG_(inst_61791);
var state_61900__$1 = state_61900;
var statearr_61936_63423 = state_61900__$1;
(statearr_61936_63423[(2)] = inst_61794);

(statearr_61936_63423[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (22))){
var inst_61814 = (state_61900[(8)]);
var inst_61817 = cljs.core.async.close_BANG_(inst_61814);
var state_61900__$1 = state_61900;
var statearr_61937_63424 = state_61900__$1;
(statearr_61937_63424[(2)] = inst_61817);

(statearr_61937_63424[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (36))){
var inst_61860 = (state_61900[(23)]);
var inst_61864 = cljs.core.chunk_first(inst_61860);
var inst_61865 = cljs.core.chunk_rest(inst_61860);
var inst_61866 = cljs.core.count(inst_61864);
var inst_61842 = inst_61865;
var inst_61843 = inst_61864;
var inst_61844 = inst_61866;
var inst_61845 = (0);
var state_61900__$1 = (function (){var statearr_61938 = state_61900;
(statearr_61938[(9)] = inst_61845);

(statearr_61938[(11)] = inst_61843);

(statearr_61938[(19)] = inst_61844);

(statearr_61938[(20)] = inst_61842);

return statearr_61938;
})();
var statearr_61939_63425 = state_61900__$1;
(statearr_61939_63425[(2)] = null);

(statearr_61939_63425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (41))){
var inst_61860 = (state_61900[(23)]);
var inst_61875 = (state_61900[(2)]);
var inst_61876 = cljs.core.next(inst_61860);
var inst_61842 = inst_61876;
var inst_61843 = null;
var inst_61844 = (0);
var inst_61845 = (0);
var state_61900__$1 = (function (){var statearr_61940 = state_61900;
(statearr_61940[(9)] = inst_61845);

(statearr_61940[(11)] = inst_61843);

(statearr_61940[(19)] = inst_61844);

(statearr_61940[(25)] = inst_61875);

(statearr_61940[(20)] = inst_61842);

return statearr_61940;
})();
var statearr_61941_63426 = state_61900__$1;
(statearr_61941_63426[(2)] = null);

(statearr_61941_63426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (43))){
var state_61900__$1 = state_61900;
var statearr_61942_63427 = state_61900__$1;
(statearr_61942_63427[(2)] = null);

(statearr_61942_63427[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (29))){
var inst_61884 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61943_63428 = state_61900__$1;
(statearr_61943_63428[(2)] = inst_61884);

(statearr_61943_63428[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (44))){
var inst_61893 = (state_61900[(2)]);
var state_61900__$1 = (function (){var statearr_61944 = state_61900;
(statearr_61944[(26)] = inst_61893);

return statearr_61944;
})();
var statearr_61945_63429 = state_61900__$1;
(statearr_61945_63429[(2)] = null);

(statearr_61945_63429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (6))){
var inst_61834 = (state_61900[(27)]);
var inst_61833 = cljs.core.deref(cs);
var inst_61834__$1 = cljs.core.keys(inst_61833);
var inst_61835 = cljs.core.count(inst_61834__$1);
var inst_61836 = cljs.core.reset_BANG_(dctr,inst_61835);
var inst_61841 = cljs.core.seq(inst_61834__$1);
var inst_61842 = inst_61841;
var inst_61843 = null;
var inst_61844 = (0);
var inst_61845 = (0);
var state_61900__$1 = (function (){var statearr_61946 = state_61900;
(statearr_61946[(9)] = inst_61845);

(statearr_61946[(28)] = inst_61836);

(statearr_61946[(27)] = inst_61834__$1);

(statearr_61946[(11)] = inst_61843);

(statearr_61946[(19)] = inst_61844);

(statearr_61946[(20)] = inst_61842);

return statearr_61946;
})();
var statearr_61947_63430 = state_61900__$1;
(statearr_61947_63430[(2)] = null);

(statearr_61947_63430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (28))){
var inst_61860 = (state_61900[(23)]);
var inst_61842 = (state_61900[(20)]);
var inst_61860__$1 = cljs.core.seq(inst_61842);
var state_61900__$1 = (function (){var statearr_61948 = state_61900;
(statearr_61948[(23)] = inst_61860__$1);

return statearr_61948;
})();
if(inst_61860__$1){
var statearr_61949_63431 = state_61900__$1;
(statearr_61949_63431[(1)] = (33));

} else {
var statearr_61950_63432 = state_61900__$1;
(statearr_61950_63432[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (25))){
var inst_61845 = (state_61900[(9)]);
var inst_61844 = (state_61900[(19)]);
var inst_61847 = (inst_61845 < inst_61844);
var inst_61848 = inst_61847;
var state_61900__$1 = state_61900;
if(cljs.core.truth_(inst_61848)){
var statearr_61951_63433 = state_61900__$1;
(statearr_61951_63433[(1)] = (27));

} else {
var statearr_61952_63434 = state_61900__$1;
(statearr_61952_63434[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (34))){
var state_61900__$1 = state_61900;
var statearr_61953_63435 = state_61900__$1;
(statearr_61953_63435[(2)] = null);

(statearr_61953_63435[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (17))){
var state_61900__$1 = state_61900;
var statearr_61954_63436 = state_61900__$1;
(statearr_61954_63436[(2)] = null);

(statearr_61954_63436[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (3))){
var inst_61898 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_61900__$1,inst_61898);
} else {
if((state_val_61901 === (12))){
var inst_61829 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61955_63437 = state_61900__$1;
(statearr_61955_63437[(2)] = inst_61829);

(statearr_61955_63437[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (2))){
var state_61900__$1 = state_61900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61900__$1,(4),ch);
} else {
if((state_val_61901 === (23))){
var state_61900__$1 = state_61900;
var statearr_61956_63438 = state_61900__$1;
(statearr_61956_63438[(2)] = null);

(statearr_61956_63438[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (35))){
var inst_61882 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61957_63439 = state_61900__$1;
(statearr_61957_63439[(2)] = inst_61882);

(statearr_61957_63439[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (19))){
var inst_61801 = (state_61900[(7)]);
var inst_61805 = cljs.core.chunk_first(inst_61801);
var inst_61806 = cljs.core.chunk_rest(inst_61801);
var inst_61807 = cljs.core.count(inst_61805);
var inst_61779 = inst_61806;
var inst_61780 = inst_61805;
var inst_61781 = inst_61807;
var inst_61782 = (0);
var state_61900__$1 = (function (){var statearr_61958 = state_61900;
(statearr_61958[(13)] = inst_61782);

(statearr_61958[(15)] = inst_61780);

(statearr_61958[(16)] = inst_61781);

(statearr_61958[(17)] = inst_61779);

return statearr_61958;
})();
var statearr_61959_63443 = state_61900__$1;
(statearr_61959_63443[(2)] = null);

(statearr_61959_63443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (11))){
var inst_61801 = (state_61900[(7)]);
var inst_61779 = (state_61900[(17)]);
var inst_61801__$1 = cljs.core.seq(inst_61779);
var state_61900__$1 = (function (){var statearr_61960 = state_61900;
(statearr_61960[(7)] = inst_61801__$1);

return statearr_61960;
})();
if(inst_61801__$1){
var statearr_61961_63447 = state_61900__$1;
(statearr_61961_63447[(1)] = (16));

} else {
var statearr_61962_63448 = state_61900__$1;
(statearr_61962_63448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (9))){
var inst_61831 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61963_63451 = state_61900__$1;
(statearr_61963_63451[(2)] = inst_61831);

(statearr_61963_63451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (5))){
var inst_61777 = cljs.core.deref(cs);
var inst_61778 = cljs.core.seq(inst_61777);
var inst_61779 = inst_61778;
var inst_61780 = null;
var inst_61781 = (0);
var inst_61782 = (0);
var state_61900__$1 = (function (){var statearr_61964 = state_61900;
(statearr_61964[(13)] = inst_61782);

(statearr_61964[(15)] = inst_61780);

(statearr_61964[(16)] = inst_61781);

(statearr_61964[(17)] = inst_61779);

return statearr_61964;
})();
var statearr_61965_63452 = state_61900__$1;
(statearr_61965_63452[(2)] = null);

(statearr_61965_63452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (14))){
var state_61900__$1 = state_61900;
var statearr_61966_63453 = state_61900__$1;
(statearr_61966_63453[(2)] = null);

(statearr_61966_63453[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (45))){
var inst_61890 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61967_63454 = state_61900__$1;
(statearr_61967_63454[(2)] = inst_61890);

(statearr_61967_63454[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (26))){
var inst_61834 = (state_61900[(27)]);
var inst_61886 = (state_61900[(2)]);
var inst_61887 = cljs.core.seq(inst_61834);
var state_61900__$1 = (function (){var statearr_61968 = state_61900;
(statearr_61968[(29)] = inst_61886);

return statearr_61968;
})();
if(inst_61887){
var statearr_61969_63455 = state_61900__$1;
(statearr_61969_63455[(1)] = (42));

} else {
var statearr_61970_63456 = state_61900__$1;
(statearr_61970_63456[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (16))){
var inst_61801 = (state_61900[(7)]);
var inst_61803 = cljs.core.chunked_seq_QMARK_(inst_61801);
var state_61900__$1 = state_61900;
if(inst_61803){
var statearr_61971_63457 = state_61900__$1;
(statearr_61971_63457[(1)] = (19));

} else {
var statearr_61972_63458 = state_61900__$1;
(statearr_61972_63458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (38))){
var inst_61879 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61973_63460 = state_61900__$1;
(statearr_61973_63460[(2)] = inst_61879);

(statearr_61973_63460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (30))){
var state_61900__$1 = state_61900;
var statearr_61976_63461 = state_61900__$1;
(statearr_61976_63461[(2)] = null);

(statearr_61976_63461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (10))){
var inst_61782 = (state_61900[(13)]);
var inst_61780 = (state_61900[(15)]);
var inst_61790 = cljs.core._nth(inst_61780,inst_61782);
var inst_61791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61790,(0),null);
var inst_61792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_61790,(1),null);
var state_61900__$1 = (function (){var statearr_61982 = state_61900;
(statearr_61982[(24)] = inst_61791);

return statearr_61982;
})();
if(cljs.core.truth_(inst_61792)){
var statearr_61988_63462 = state_61900__$1;
(statearr_61988_63462[(1)] = (13));

} else {
var statearr_61990_63463 = state_61900__$1;
(statearr_61990_63463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (18))){
var inst_61827 = (state_61900[(2)]);
var state_61900__$1 = state_61900;
var statearr_61993_63464 = state_61900__$1;
(statearr_61993_63464[(2)] = inst_61827);

(statearr_61993_63464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (42))){
var state_61900__$1 = state_61900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_61900__$1,(45),dchan);
} else {
if((state_val_61901 === (37))){
var inst_61860 = (state_61900[(23)]);
var inst_61768 = (state_61900[(10)]);
var inst_61869 = (state_61900[(22)]);
var inst_61869__$1 = cljs.core.first(inst_61860);
var inst_61870 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_61869__$1,inst_61768,done);
var state_61900__$1 = (function (){var statearr_61999 = state_61900;
(statearr_61999[(22)] = inst_61869__$1);

return statearr_61999;
})();
if(cljs.core.truth_(inst_61870)){
var statearr_62000_63468 = state_61900__$1;
(statearr_62000_63468[(1)] = (39));

} else {
var statearr_62001_63469 = state_61900__$1;
(statearr_62001_63469[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_61901 === (8))){
var inst_61782 = (state_61900[(13)]);
var inst_61781 = (state_61900[(16)]);
var inst_61784 = (inst_61782 < inst_61781);
var inst_61785 = inst_61784;
var state_61900__$1 = state_61900;
if(cljs.core.truth_(inst_61785)){
var statearr_62003_63470 = state_61900__$1;
(statearr_62003_63470[(1)] = (10));

} else {
var statearr_62005_63474 = state_61900__$1;
(statearr_62005_63474[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__60805__auto__ = null;
var cljs$core$async$mult_$_state_machine__60805__auto____0 = (function (){
var statearr_62011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62011[(0)] = cljs$core$async$mult_$_state_machine__60805__auto__);

(statearr_62011[(1)] = (1));

return statearr_62011;
});
var cljs$core$async$mult_$_state_machine__60805__auto____1 = (function (state_61900){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_61900);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62014){var ex__60808__auto__ = e62014;
var statearr_62016_63475 = state_61900;
(statearr_62016_63475[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_61900[(4)]))){
var statearr_62019_63476 = state_61900;
(statearr_62019_63476[(1)] = cljs.core.first((state_61900[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63477 = state_61900;
state_61900 = G__63477;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__60805__auto__ = function(state_61900){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__60805__auto____1.call(this,state_61900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__60805__auto____0;
cljs$core$async$mult_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__60805__auto____1;
return cljs$core$async$mult_$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62020 = f__61049__auto__();
(statearr_62020[(6)] = c__61048__auto___63396);

return statearr_62020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__62024 = arguments.length;
switch (G__62024) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_63479 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_63479(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_63480 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_63480(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_63484 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_63484(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_63487 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_63487(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_63489 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_63489(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___63493 = arguments.length;
var i__4737__auto___63494 = (0);
while(true){
if((i__4737__auto___63494 < len__4736__auto___63493)){
args__4742__auto__.push((arguments[i__4737__auto___63494]));

var G__63495 = (i__4737__auto___63494 + (1));
i__4737__auto___63494 = G__63495;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__62039){
var map__62040 = p__62039;
var map__62040__$1 = (((((!((map__62040 == null))))?(((((map__62040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62040):map__62040);
var opts = map__62040__$1;
var statearr_62042_63499 = state;
(statearr_62042_63499[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_62047_63500 = state;
(statearr_62047_63500[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_62048_63501 = state;
(statearr_62048_63501[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq62032){
var G__62033 = cljs.core.first(seq62032);
var seq62032__$1 = cljs.core.next(seq62032);
var G__62034 = cljs.core.first(seq62032__$1);
var seq62032__$2 = cljs.core.next(seq62032__$1);
var G__62035 = cljs.core.first(seq62032__$2);
var seq62032__$3 = cljs.core.next(seq62032__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62033,G__62034,G__62035,seq62032__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62059 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62059 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62060){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta62060 = meta62060;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62061,meta62060__$1){
var self__ = this;
var _62061__$1 = this;
return (new cljs.core.async.t_cljs$core$async62059(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62060__$1));
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62061){
var self__ = this;
var _62061__$1 = this;
return self__.meta62060;
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62059.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async62059.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta62060","meta62060",-811903085,null)], null);
}));

(cljs.core.async.t_cljs$core$async62059.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62059.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62059");

(cljs.core.async.t_cljs$core$async62059.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62059");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62059.
 */
cljs.core.async.__GT_t_cljs$core$async62059 = (function cljs$core$async$mix_$___GT_t_cljs$core$async62059(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62060){
return (new cljs.core.async.t_cljs$core$async62059(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62060));
});

}

return (new cljs.core.async.t_cljs$core$async62059(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61048__auto___63528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62182){
var state_val_62183 = (state_62182[(1)]);
if((state_val_62183 === (7))){
var inst_62093 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62184_63530 = state_62182__$1;
(statearr_62184_63530[(2)] = inst_62093);

(statearr_62184_63530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (20))){
var inst_62105 = (state_62182[(7)]);
var state_62182__$1 = state_62182;
var statearr_62185_63532 = state_62182__$1;
(statearr_62185_63532[(2)] = inst_62105);

(statearr_62185_63532[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (27))){
var state_62182__$1 = state_62182;
var statearr_62188_63534 = state_62182__$1;
(statearr_62188_63534[(2)] = null);

(statearr_62188_63534[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (1))){
var inst_62077 = (state_62182[(8)]);
var inst_62077__$1 = calc_state();
var inst_62079 = (inst_62077__$1 == null);
var inst_62080 = cljs.core.not(inst_62079);
var state_62182__$1 = (function (){var statearr_62189 = state_62182;
(statearr_62189[(8)] = inst_62077__$1);

return statearr_62189;
})();
if(inst_62080){
var statearr_62190_63537 = state_62182__$1;
(statearr_62190_63537[(1)] = (2));

} else {
var statearr_62191_63538 = state_62182__$1;
(statearr_62191_63538[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (24))){
var inst_62129 = (state_62182[(9)]);
var inst_62141 = (state_62182[(10)]);
var inst_62155 = (state_62182[(11)]);
var inst_62155__$1 = (inst_62129.cljs$core$IFn$_invoke$arity$1 ? inst_62129.cljs$core$IFn$_invoke$arity$1(inst_62141) : inst_62129.call(null,inst_62141));
var state_62182__$1 = (function (){var statearr_62192 = state_62182;
(statearr_62192[(11)] = inst_62155__$1);

return statearr_62192;
})();
if(cljs.core.truth_(inst_62155__$1)){
var statearr_62193_63540 = state_62182__$1;
(statearr_62193_63540[(1)] = (29));

} else {
var statearr_62194_63542 = state_62182__$1;
(statearr_62194_63542[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (4))){
var inst_62096 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62096)){
var statearr_62195_63545 = state_62182__$1;
(statearr_62195_63545[(1)] = (8));

} else {
var statearr_62200_63547 = state_62182__$1;
(statearr_62200_63547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (15))){
var inst_62123 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62123)){
var statearr_62201_63548 = state_62182__$1;
(statearr_62201_63548[(1)] = (19));

} else {
var statearr_62202_63550 = state_62182__$1;
(statearr_62202_63550[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (21))){
var inst_62128 = (state_62182[(12)]);
var inst_62128__$1 = (state_62182[(2)]);
var inst_62129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62128__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62128__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62128__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_62182__$1 = (function (){var statearr_62203 = state_62182;
(statearr_62203[(9)] = inst_62129);

(statearr_62203[(12)] = inst_62128__$1);

(statearr_62203[(13)] = inst_62130);

return statearr_62203;
})();
return cljs.core.async.ioc_alts_BANG_(state_62182__$1,(22),inst_62131);
} else {
if((state_val_62183 === (31))){
var inst_62164 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62164)){
var statearr_62205_63553 = state_62182__$1;
(statearr_62205_63553[(1)] = (32));

} else {
var statearr_62206_63554 = state_62182__$1;
(statearr_62206_63554[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (32))){
var inst_62140 = (state_62182[(14)]);
var state_62182__$1 = state_62182;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62182__$1,(35),out,inst_62140);
} else {
if((state_val_62183 === (33))){
var inst_62128 = (state_62182[(12)]);
var inst_62105 = inst_62128;
var state_62182__$1 = (function (){var statearr_62207 = state_62182;
(statearr_62207[(7)] = inst_62105);

return statearr_62207;
})();
var statearr_62208_63555 = state_62182__$1;
(statearr_62208_63555[(2)] = null);

(statearr_62208_63555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (13))){
var inst_62105 = (state_62182[(7)]);
var inst_62112 = inst_62105.cljs$lang$protocol_mask$partition0$;
var inst_62113 = (inst_62112 & (64));
var inst_62114 = inst_62105.cljs$core$ISeq$;
var inst_62115 = (cljs.core.PROTOCOL_SENTINEL === inst_62114);
var inst_62116 = ((inst_62113) || (inst_62115));
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62116)){
var statearr_62209_63559 = state_62182__$1;
(statearr_62209_63559[(1)] = (16));

} else {
var statearr_62210_63560 = state_62182__$1;
(statearr_62210_63560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (22))){
var inst_62140 = (state_62182[(14)]);
var inst_62141 = (state_62182[(10)]);
var inst_62139 = (state_62182[(2)]);
var inst_62140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62139,(0),null);
var inst_62141__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62139,(1),null);
var inst_62142 = (inst_62140__$1 == null);
var inst_62143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62141__$1,change);
var inst_62144 = ((inst_62142) || (inst_62143));
var state_62182__$1 = (function (){var statearr_62214 = state_62182;
(statearr_62214[(14)] = inst_62140__$1);

(statearr_62214[(10)] = inst_62141__$1);

return statearr_62214;
})();
if(cljs.core.truth_(inst_62144)){
var statearr_62215_63561 = state_62182__$1;
(statearr_62215_63561[(1)] = (23));

} else {
var statearr_62216_63562 = state_62182__$1;
(statearr_62216_63562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (36))){
var inst_62128 = (state_62182[(12)]);
var inst_62105 = inst_62128;
var state_62182__$1 = (function (){var statearr_62217 = state_62182;
(statearr_62217[(7)] = inst_62105);

return statearr_62217;
})();
var statearr_62218_63563 = state_62182__$1;
(statearr_62218_63563[(2)] = null);

(statearr_62218_63563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (29))){
var inst_62155 = (state_62182[(11)]);
var state_62182__$1 = state_62182;
var statearr_62219_63564 = state_62182__$1;
(statearr_62219_63564[(2)] = inst_62155);

(statearr_62219_63564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (6))){
var state_62182__$1 = state_62182;
var statearr_62220_63566 = state_62182__$1;
(statearr_62220_63566[(2)] = false);

(statearr_62220_63566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (28))){
var inst_62151 = (state_62182[(2)]);
var inst_62152 = calc_state();
var inst_62105 = inst_62152;
var state_62182__$1 = (function (){var statearr_62221 = state_62182;
(statearr_62221[(15)] = inst_62151);

(statearr_62221[(7)] = inst_62105);

return statearr_62221;
})();
var statearr_62222_63569 = state_62182__$1;
(statearr_62222_63569[(2)] = null);

(statearr_62222_63569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (25))){
var inst_62178 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62223_63571 = state_62182__$1;
(statearr_62223_63571[(2)] = inst_62178);

(statearr_62223_63571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (34))){
var inst_62176 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62224_63572 = state_62182__$1;
(statearr_62224_63572[(2)] = inst_62176);

(statearr_62224_63572[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (17))){
var state_62182__$1 = state_62182;
var statearr_62225_63573 = state_62182__$1;
(statearr_62225_63573[(2)] = false);

(statearr_62225_63573[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (3))){
var state_62182__$1 = state_62182;
var statearr_62226_63574 = state_62182__$1;
(statearr_62226_63574[(2)] = false);

(statearr_62226_63574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (12))){
var inst_62180 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62182__$1,inst_62180);
} else {
if((state_val_62183 === (2))){
var inst_62077 = (state_62182[(8)]);
var inst_62084 = inst_62077.cljs$lang$protocol_mask$partition0$;
var inst_62085 = (inst_62084 & (64));
var inst_62087 = inst_62077.cljs$core$ISeq$;
var inst_62088 = (cljs.core.PROTOCOL_SENTINEL === inst_62087);
var inst_62089 = ((inst_62085) || (inst_62088));
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62089)){
var statearr_62227_63575 = state_62182__$1;
(statearr_62227_63575[(1)] = (5));

} else {
var statearr_62228_63576 = state_62182__$1;
(statearr_62228_63576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (23))){
var inst_62140 = (state_62182[(14)]);
var inst_62146 = (inst_62140 == null);
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62146)){
var statearr_62229_63577 = state_62182__$1;
(statearr_62229_63577[(1)] = (26));

} else {
var statearr_62230_63578 = state_62182__$1;
(statearr_62230_63578[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (35))){
var inst_62167 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
if(cljs.core.truth_(inst_62167)){
var statearr_62231_63583 = state_62182__$1;
(statearr_62231_63583[(1)] = (36));

} else {
var statearr_62232_63584 = state_62182__$1;
(statearr_62232_63584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (19))){
var inst_62105 = (state_62182[(7)]);
var inst_62125 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62105);
var state_62182__$1 = state_62182;
var statearr_62237_63585 = state_62182__$1;
(statearr_62237_63585[(2)] = inst_62125);

(statearr_62237_63585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (11))){
var inst_62105 = (state_62182[(7)]);
var inst_62109 = (inst_62105 == null);
var inst_62110 = cljs.core.not(inst_62109);
var state_62182__$1 = state_62182;
if(inst_62110){
var statearr_62238_63587 = state_62182__$1;
(statearr_62238_63587[(1)] = (13));

} else {
var statearr_62239_63591 = state_62182__$1;
(statearr_62239_63591[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (9))){
var inst_62077 = (state_62182[(8)]);
var state_62182__$1 = state_62182;
var statearr_62240_63592 = state_62182__$1;
(statearr_62240_63592[(2)] = inst_62077);

(statearr_62240_63592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (5))){
var state_62182__$1 = state_62182;
var statearr_62241_63593 = state_62182__$1;
(statearr_62241_63593[(2)] = true);

(statearr_62241_63593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (14))){
var state_62182__$1 = state_62182;
var statearr_62242_63594 = state_62182__$1;
(statearr_62242_63594[(2)] = false);

(statearr_62242_63594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (26))){
var inst_62141 = (state_62182[(10)]);
var inst_62148 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_62141);
var state_62182__$1 = state_62182;
var statearr_62243_63595 = state_62182__$1;
(statearr_62243_63595[(2)] = inst_62148);

(statearr_62243_63595[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (16))){
var state_62182__$1 = state_62182;
var statearr_62244_63599 = state_62182__$1;
(statearr_62244_63599[(2)] = true);

(statearr_62244_63599[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (38))){
var inst_62172 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62246_63601 = state_62182__$1;
(statearr_62246_63601[(2)] = inst_62172);

(statearr_62246_63601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (30))){
var inst_62129 = (state_62182[(9)]);
var inst_62141 = (state_62182[(10)]);
var inst_62130 = (state_62182[(13)]);
var inst_62158 = cljs.core.empty_QMARK_(inst_62129);
var inst_62160 = (inst_62130.cljs$core$IFn$_invoke$arity$1 ? inst_62130.cljs$core$IFn$_invoke$arity$1(inst_62141) : inst_62130.call(null,inst_62141));
var inst_62161 = cljs.core.not(inst_62160);
var inst_62162 = ((inst_62158) && (inst_62161));
var state_62182__$1 = state_62182;
var statearr_62247_63603 = state_62182__$1;
(statearr_62247_63603[(2)] = inst_62162);

(statearr_62247_63603[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (10))){
var inst_62077 = (state_62182[(8)]);
var inst_62101 = (state_62182[(2)]);
var inst_62102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62101,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_62103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62101,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_62104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62101,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_62105 = inst_62077;
var state_62182__$1 = (function (){var statearr_62248 = state_62182;
(statearr_62248[(16)] = inst_62103);

(statearr_62248[(7)] = inst_62105);

(statearr_62248[(17)] = inst_62102);

(statearr_62248[(18)] = inst_62104);

return statearr_62248;
})();
var statearr_62249_63607 = state_62182__$1;
(statearr_62249_63607[(2)] = null);

(statearr_62249_63607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (18))){
var inst_62120 = (state_62182[(2)]);
var state_62182__$1 = state_62182;
var statearr_62252_63608 = state_62182__$1;
(statearr_62252_63608[(2)] = inst_62120);

(statearr_62252_63608[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (37))){
var state_62182__$1 = state_62182;
var statearr_62253_63609 = state_62182__$1;
(statearr_62253_63609[(2)] = null);

(statearr_62253_63609[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62183 === (8))){
var inst_62077 = (state_62182[(8)]);
var inst_62098 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_62077);
var state_62182__$1 = state_62182;
var statearr_62254_63610 = state_62182__$1;
(statearr_62254_63610[(2)] = inst_62098);

(statearr_62254_63610[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__60805__auto__ = null;
var cljs$core$async$mix_$_state_machine__60805__auto____0 = (function (){
var statearr_62255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62255[(0)] = cljs$core$async$mix_$_state_machine__60805__auto__);

(statearr_62255[(1)] = (1));

return statearr_62255;
});
var cljs$core$async$mix_$_state_machine__60805__auto____1 = (function (state_62182){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62182);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62256){var ex__60808__auto__ = e62256;
var statearr_62257_63612 = state_62182;
(statearr_62257_63612[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62182[(4)]))){
var statearr_62258_63613 = state_62182;
(statearr_62258_63613[(1)] = cljs.core.first((state_62182[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63615 = state_62182;
state_62182 = G__63615;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__60805__auto__ = function(state_62182){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__60805__auto____1.call(this,state_62182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__60805__auto____0;
cljs$core$async$mix_$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__60805__auto____1;
return cljs$core$async$mix_$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62259 = f__61049__auto__();
(statearr_62259[(6)] = c__61048__auto___63528);

return statearr_62259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_63616 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_63616(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_63622 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_63622(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_63624 = (function() {
var G__63625 = null;
var G__63625__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__63625__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__63625 = function(p,v){
switch(arguments.length){
case 1:
return G__63625__1.call(this,p);
case 2:
return G__63625__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__63625.cljs$core$IFn$_invoke$arity$1 = G__63625__1;
G__63625.cljs$core$IFn$_invoke$arity$2 = G__63625__2;
return G__63625;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__62268 = arguments.length;
switch (G__62268) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63624(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_63624(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__62273 = arguments.length;
switch (G__62273) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__62271_SHARP_){
if(cljs.core.truth_((p1__62271_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__62271_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__62271_SHARP_.call(null,topic)))){
return p1__62271_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__62271_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62274 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62274 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta62275){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta62275 = meta62275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62276,meta62275__$1){
var self__ = this;
var _62276__$1 = this;
return (new cljs.core.async.t_cljs$core$async62274(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta62275__$1));
}));

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62276){
var self__ = this;
var _62276__$1 = this;
return self__.meta62275;
}));

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async62274.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async62274.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta62275","meta62275",-191936604,null)], null);
}));

(cljs.core.async.t_cljs$core$async62274.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62274");

(cljs.core.async.t_cljs$core$async62274.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62274");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62274.
 */
cljs.core.async.__GT_t_cljs$core$async62274 = (function cljs$core$async$__GT_t_cljs$core$async62274(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62275){
return (new cljs.core.async.t_cljs$core$async62274(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta62275));
});

}

return (new cljs.core.async.t_cljs$core$async62274(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__61048__auto___63634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62353){
var state_val_62354 = (state_62353[(1)]);
if((state_val_62354 === (7))){
var inst_62348 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
var statearr_62355_63635 = state_62353__$1;
(statearr_62355_63635[(2)] = inst_62348);

(statearr_62355_63635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (20))){
var state_62353__$1 = state_62353;
var statearr_62356_63637 = state_62353__$1;
(statearr_62356_63637[(2)] = null);

(statearr_62356_63637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (1))){
var state_62353__$1 = state_62353;
var statearr_62358_63638 = state_62353__$1;
(statearr_62358_63638[(2)] = null);

(statearr_62358_63638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (24))){
var inst_62329 = (state_62353[(7)]);
var inst_62340 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_62329);
var state_62353__$1 = state_62353;
var statearr_62359_63639 = state_62353__$1;
(statearr_62359_63639[(2)] = inst_62340);

(statearr_62359_63639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (4))){
var inst_62280 = (state_62353[(8)]);
var inst_62280__$1 = (state_62353[(2)]);
var inst_62281 = (inst_62280__$1 == null);
var state_62353__$1 = (function (){var statearr_62360 = state_62353;
(statearr_62360[(8)] = inst_62280__$1);

return statearr_62360;
})();
if(cljs.core.truth_(inst_62281)){
var statearr_62361_63640 = state_62353__$1;
(statearr_62361_63640[(1)] = (5));

} else {
var statearr_62362_63641 = state_62353__$1;
(statearr_62362_63641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (15))){
var inst_62323 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
var statearr_62363_63644 = state_62353__$1;
(statearr_62363_63644[(2)] = inst_62323);

(statearr_62363_63644[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (21))){
var inst_62345 = (state_62353[(2)]);
var state_62353__$1 = (function (){var statearr_62364 = state_62353;
(statearr_62364[(9)] = inst_62345);

return statearr_62364;
})();
var statearr_62365_63645 = state_62353__$1;
(statearr_62365_63645[(2)] = null);

(statearr_62365_63645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (13))){
var inst_62305 = (state_62353[(10)]);
var inst_62307 = cljs.core.chunked_seq_QMARK_(inst_62305);
var state_62353__$1 = state_62353;
if(inst_62307){
var statearr_62366_63646 = state_62353__$1;
(statearr_62366_63646[(1)] = (16));

} else {
var statearr_62367_63647 = state_62353__$1;
(statearr_62367_63647[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (22))){
var inst_62337 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
if(cljs.core.truth_(inst_62337)){
var statearr_62368_63648 = state_62353__$1;
(statearr_62368_63648[(1)] = (23));

} else {
var statearr_62369_63649 = state_62353__$1;
(statearr_62369_63649[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (6))){
var inst_62329 = (state_62353[(7)]);
var inst_62331 = (state_62353[(11)]);
var inst_62280 = (state_62353[(8)]);
var inst_62329__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_62280) : topic_fn.call(null,inst_62280));
var inst_62330 = cljs.core.deref(mults);
var inst_62331__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_62330,inst_62329__$1);
var state_62353__$1 = (function (){var statearr_62370 = state_62353;
(statearr_62370[(7)] = inst_62329__$1);

(statearr_62370[(11)] = inst_62331__$1);

return statearr_62370;
})();
if(cljs.core.truth_(inst_62331__$1)){
var statearr_62371_63650 = state_62353__$1;
(statearr_62371_63650[(1)] = (19));

} else {
var statearr_62373_63651 = state_62353__$1;
(statearr_62373_63651[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (25))){
var inst_62342 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
var statearr_62376_63652 = state_62353__$1;
(statearr_62376_63652[(2)] = inst_62342);

(statearr_62376_63652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (17))){
var inst_62305 = (state_62353[(10)]);
var inst_62314 = cljs.core.first(inst_62305);
var inst_62315 = cljs.core.async.muxch_STAR_(inst_62314);
var inst_62316 = cljs.core.async.close_BANG_(inst_62315);
var inst_62317 = cljs.core.next(inst_62305);
var inst_62290 = inst_62317;
var inst_62291 = null;
var inst_62292 = (0);
var inst_62293 = (0);
var state_62353__$1 = (function (){var statearr_62377 = state_62353;
(statearr_62377[(12)] = inst_62292);

(statearr_62377[(13)] = inst_62316);

(statearr_62377[(14)] = inst_62293);

(statearr_62377[(15)] = inst_62291);

(statearr_62377[(16)] = inst_62290);

return statearr_62377;
})();
var statearr_62378_63653 = state_62353__$1;
(statearr_62378_63653[(2)] = null);

(statearr_62378_63653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (3))){
var inst_62350 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62353__$1,inst_62350);
} else {
if((state_val_62354 === (12))){
var inst_62325 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
var statearr_62379_63654 = state_62353__$1;
(statearr_62379_63654[(2)] = inst_62325);

(statearr_62379_63654[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (2))){
var state_62353__$1 = state_62353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62353__$1,(4),ch);
} else {
if((state_val_62354 === (23))){
var state_62353__$1 = state_62353;
var statearr_62380_63655 = state_62353__$1;
(statearr_62380_63655[(2)] = null);

(statearr_62380_63655[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (19))){
var inst_62331 = (state_62353[(11)]);
var inst_62280 = (state_62353[(8)]);
var inst_62335 = cljs.core.async.muxch_STAR_(inst_62331);
var state_62353__$1 = state_62353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62353__$1,(22),inst_62335,inst_62280);
} else {
if((state_val_62354 === (11))){
var inst_62305 = (state_62353[(10)]);
var inst_62290 = (state_62353[(16)]);
var inst_62305__$1 = cljs.core.seq(inst_62290);
var state_62353__$1 = (function (){var statearr_62381 = state_62353;
(statearr_62381[(10)] = inst_62305__$1);

return statearr_62381;
})();
if(inst_62305__$1){
var statearr_62383_63656 = state_62353__$1;
(statearr_62383_63656[(1)] = (13));

} else {
var statearr_62384_63657 = state_62353__$1;
(statearr_62384_63657[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (9))){
var inst_62327 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
var statearr_62385_63658 = state_62353__$1;
(statearr_62385_63658[(2)] = inst_62327);

(statearr_62385_63658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (5))){
var inst_62287 = cljs.core.deref(mults);
var inst_62288 = cljs.core.vals(inst_62287);
var inst_62289 = cljs.core.seq(inst_62288);
var inst_62290 = inst_62289;
var inst_62291 = null;
var inst_62292 = (0);
var inst_62293 = (0);
var state_62353__$1 = (function (){var statearr_62387 = state_62353;
(statearr_62387[(12)] = inst_62292);

(statearr_62387[(14)] = inst_62293);

(statearr_62387[(15)] = inst_62291);

(statearr_62387[(16)] = inst_62290);

return statearr_62387;
})();
var statearr_62391_63659 = state_62353__$1;
(statearr_62391_63659[(2)] = null);

(statearr_62391_63659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (14))){
var state_62353__$1 = state_62353;
var statearr_62395_63660 = state_62353__$1;
(statearr_62395_63660[(2)] = null);

(statearr_62395_63660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (16))){
var inst_62305 = (state_62353[(10)]);
var inst_62309 = cljs.core.chunk_first(inst_62305);
var inst_62310 = cljs.core.chunk_rest(inst_62305);
var inst_62311 = cljs.core.count(inst_62309);
var inst_62290 = inst_62310;
var inst_62291 = inst_62309;
var inst_62292 = inst_62311;
var inst_62293 = (0);
var state_62353__$1 = (function (){var statearr_62396 = state_62353;
(statearr_62396[(12)] = inst_62292);

(statearr_62396[(14)] = inst_62293);

(statearr_62396[(15)] = inst_62291);

(statearr_62396[(16)] = inst_62290);

return statearr_62396;
})();
var statearr_62397_63663 = state_62353__$1;
(statearr_62397_63663[(2)] = null);

(statearr_62397_63663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (10))){
var inst_62292 = (state_62353[(12)]);
var inst_62293 = (state_62353[(14)]);
var inst_62291 = (state_62353[(15)]);
var inst_62290 = (state_62353[(16)]);
var inst_62298 = cljs.core._nth(inst_62291,inst_62293);
var inst_62300 = cljs.core.async.muxch_STAR_(inst_62298);
var inst_62301 = cljs.core.async.close_BANG_(inst_62300);
var inst_62302 = (inst_62293 + (1));
var tmp62392 = inst_62292;
var tmp62393 = inst_62291;
var tmp62394 = inst_62290;
var inst_62290__$1 = tmp62394;
var inst_62291__$1 = tmp62393;
var inst_62292__$1 = tmp62392;
var inst_62293__$1 = inst_62302;
var state_62353__$1 = (function (){var statearr_62399 = state_62353;
(statearr_62399[(12)] = inst_62292__$1);

(statearr_62399[(14)] = inst_62293__$1);

(statearr_62399[(15)] = inst_62291__$1);

(statearr_62399[(16)] = inst_62290__$1);

(statearr_62399[(17)] = inst_62301);

return statearr_62399;
})();
var statearr_62400_63665 = state_62353__$1;
(statearr_62400_63665[(2)] = null);

(statearr_62400_63665[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (18))){
var inst_62320 = (state_62353[(2)]);
var state_62353__$1 = state_62353;
var statearr_62401_63666 = state_62353__$1;
(statearr_62401_63666[(2)] = inst_62320);

(statearr_62401_63666[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62354 === (8))){
var inst_62292 = (state_62353[(12)]);
var inst_62293 = (state_62353[(14)]);
var inst_62295 = (inst_62293 < inst_62292);
var inst_62296 = inst_62295;
var state_62353__$1 = state_62353;
if(cljs.core.truth_(inst_62296)){
var statearr_62402_63667 = state_62353__$1;
(statearr_62402_63667[(1)] = (10));

} else {
var statearr_62403_63668 = state_62353__$1;
(statearr_62403_63668[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62404[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62404[(1)] = (1));

return statearr_62404;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62353){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62353);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62405){var ex__60808__auto__ = e62405;
var statearr_62406_63673 = state_62353;
(statearr_62406_63673[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62353[(4)]))){
var statearr_62407_63676 = state_62353;
(statearr_62407_63676[(1)] = cljs.core.first((state_62353[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63678 = state_62353;
state_62353 = G__63678;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62411 = f__61049__auto__();
(statearr_62411[(6)] = c__61048__auto___63634);

return statearr_62411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__62414 = arguments.length;
switch (G__62414) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__62419 = arguments.length;
switch (G__62419) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__62424 = arguments.length;
switch (G__62424) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__61048__auto___63692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62468){
var state_val_62469 = (state_62468[(1)]);
if((state_val_62469 === (7))){
var state_62468__$1 = state_62468;
var statearr_62470_63693 = state_62468__$1;
(statearr_62470_63693[(2)] = null);

(statearr_62470_63693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (1))){
var state_62468__$1 = state_62468;
var statearr_62471_63694 = state_62468__$1;
(statearr_62471_63694[(2)] = null);

(statearr_62471_63694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (4))){
var inst_62429 = (state_62468[(7)]);
var inst_62428 = (state_62468[(8)]);
var inst_62431 = (inst_62429 < inst_62428);
var state_62468__$1 = state_62468;
if(cljs.core.truth_(inst_62431)){
var statearr_62473_63695 = state_62468__$1;
(statearr_62473_63695[(1)] = (6));

} else {
var statearr_62474_63696 = state_62468__$1;
(statearr_62474_63696[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (15))){
var inst_62454 = (state_62468[(9)]);
var inst_62459 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_62454);
var state_62468__$1 = state_62468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62468__$1,(17),out,inst_62459);
} else {
if((state_val_62469 === (13))){
var inst_62454 = (state_62468[(9)]);
var inst_62454__$1 = (state_62468[(2)]);
var inst_62455 = cljs.core.some(cljs.core.nil_QMARK_,inst_62454__$1);
var state_62468__$1 = (function (){var statearr_62475 = state_62468;
(statearr_62475[(9)] = inst_62454__$1);

return statearr_62475;
})();
if(cljs.core.truth_(inst_62455)){
var statearr_62476_63698 = state_62468__$1;
(statearr_62476_63698[(1)] = (14));

} else {
var statearr_62477_63699 = state_62468__$1;
(statearr_62477_63699[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (6))){
var state_62468__$1 = state_62468;
var statearr_62480_63700 = state_62468__$1;
(statearr_62480_63700[(2)] = null);

(statearr_62480_63700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (17))){
var inst_62461 = (state_62468[(2)]);
var state_62468__$1 = (function (){var statearr_62485 = state_62468;
(statearr_62485[(10)] = inst_62461);

return statearr_62485;
})();
var statearr_62486_63703 = state_62468__$1;
(statearr_62486_63703[(2)] = null);

(statearr_62486_63703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (3))){
var inst_62466 = (state_62468[(2)]);
var state_62468__$1 = state_62468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62468__$1,inst_62466);
} else {
if((state_val_62469 === (12))){
var _ = (function (){var statearr_62488 = state_62468;
(statearr_62488[(4)] = cljs.core.rest((state_62468[(4)])));

return statearr_62488;
})();
var state_62468__$1 = state_62468;
var ex62484 = (state_62468__$1[(2)]);
var statearr_62489_63704 = state_62468__$1;
(statearr_62489_63704[(5)] = ex62484);


if((ex62484 instanceof Object)){
var statearr_62490_63705 = state_62468__$1;
(statearr_62490_63705[(1)] = (11));

(statearr_62490_63705[(5)] = null);

} else {
throw ex62484;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (2))){
var inst_62427 = cljs.core.reset_BANG_(dctr,cnt);
var inst_62428 = cnt;
var inst_62429 = (0);
var state_62468__$1 = (function (){var statearr_62494 = state_62468;
(statearr_62494[(7)] = inst_62429);

(statearr_62494[(8)] = inst_62428);

(statearr_62494[(11)] = inst_62427);

return statearr_62494;
})();
var statearr_62495_63708 = state_62468__$1;
(statearr_62495_63708[(2)] = null);

(statearr_62495_63708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (11))){
var inst_62433 = (state_62468[(2)]);
var inst_62434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_62468__$1 = (function (){var statearr_62496 = state_62468;
(statearr_62496[(12)] = inst_62433);

return statearr_62496;
})();
var statearr_62497_63709 = state_62468__$1;
(statearr_62497_63709[(2)] = inst_62434);

(statearr_62497_63709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (9))){
var inst_62429 = (state_62468[(7)]);
var _ = (function (){var statearr_62503 = state_62468;
(statearr_62503[(4)] = cljs.core.cons((12),(state_62468[(4)])));

return statearr_62503;
})();
var inst_62440 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_62429) : chs__$1.call(null,inst_62429));
var inst_62441 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_62429) : done.call(null,inst_62429));
var inst_62442 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_62440,inst_62441);
var ___$1 = (function (){var statearr_62505 = state_62468;
(statearr_62505[(4)] = cljs.core.rest((state_62468[(4)])));

return statearr_62505;
})();
var state_62468__$1 = state_62468;
var statearr_62506_63710 = state_62468__$1;
(statearr_62506_63710[(2)] = inst_62442);

(statearr_62506_63710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (5))){
var inst_62452 = (state_62468[(2)]);
var state_62468__$1 = (function (){var statearr_62507 = state_62468;
(statearr_62507[(13)] = inst_62452);

return statearr_62507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62468__$1,(13),dchan);
} else {
if((state_val_62469 === (14))){
var inst_62457 = cljs.core.async.close_BANG_(out);
var state_62468__$1 = state_62468;
var statearr_62508_63711 = state_62468__$1;
(statearr_62508_63711[(2)] = inst_62457);

(statearr_62508_63711[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (16))){
var inst_62464 = (state_62468[(2)]);
var state_62468__$1 = state_62468;
var statearr_62514_63712 = state_62468__$1;
(statearr_62514_63712[(2)] = inst_62464);

(statearr_62514_63712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (10))){
var inst_62429 = (state_62468[(7)]);
var inst_62445 = (state_62468[(2)]);
var inst_62446 = (inst_62429 + (1));
var inst_62429__$1 = inst_62446;
var state_62468__$1 = (function (){var statearr_62515 = state_62468;
(statearr_62515[(7)] = inst_62429__$1);

(statearr_62515[(14)] = inst_62445);

return statearr_62515;
})();
var statearr_62516_63713 = state_62468__$1;
(statearr_62516_63713[(2)] = null);

(statearr_62516_63713[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62469 === (8))){
var inst_62450 = (state_62468[(2)]);
var state_62468__$1 = state_62468;
var statearr_62519_63714 = state_62468__$1;
(statearr_62519_63714[(2)] = inst_62450);

(statearr_62519_63714[(1)] = (5));


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
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62520 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62520[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62520[(1)] = (1));

return statearr_62520;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62468){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62468);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62521){var ex__60808__auto__ = e62521;
var statearr_62522_63715 = state_62468;
(statearr_62522_63715[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62468[(4)]))){
var statearr_62523_63716 = state_62468;
(statearr_62523_63716[(1)] = cljs.core.first((state_62468[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63717 = state_62468;
state_62468 = G__63717;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62524 = f__61049__auto__();
(statearr_62524[(6)] = c__61048__auto___63692);

return statearr_62524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__62527 = arguments.length;
switch (G__62527) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61048__auto___63720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62564){
var state_val_62565 = (state_62564[(1)]);
if((state_val_62565 === (7))){
var inst_62539 = (state_62564[(7)]);
var inst_62538 = (state_62564[(8)]);
var inst_62538__$1 = (state_62564[(2)]);
var inst_62539__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62538__$1,(0),null);
var inst_62540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_62538__$1,(1),null);
var inst_62541 = (inst_62539__$1 == null);
var state_62564__$1 = (function (){var statearr_62566 = state_62564;
(statearr_62566[(7)] = inst_62539__$1);

(statearr_62566[(8)] = inst_62538__$1);

(statearr_62566[(9)] = inst_62540);

return statearr_62566;
})();
if(cljs.core.truth_(inst_62541)){
var statearr_62574_63721 = state_62564__$1;
(statearr_62574_63721[(1)] = (8));

} else {
var statearr_62575_63722 = state_62564__$1;
(statearr_62575_63722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (1))){
var inst_62528 = cljs.core.vec(chs);
var inst_62529 = inst_62528;
var state_62564__$1 = (function (){var statearr_62576 = state_62564;
(statearr_62576[(10)] = inst_62529);

return statearr_62576;
})();
var statearr_62577_63723 = state_62564__$1;
(statearr_62577_63723[(2)] = null);

(statearr_62577_63723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (4))){
var inst_62529 = (state_62564[(10)]);
var state_62564__$1 = state_62564;
return cljs.core.async.ioc_alts_BANG_(state_62564__$1,(7),inst_62529);
} else {
if((state_val_62565 === (6))){
var inst_62560 = (state_62564[(2)]);
var state_62564__$1 = state_62564;
var statearr_62578_63724 = state_62564__$1;
(statearr_62578_63724[(2)] = inst_62560);

(statearr_62578_63724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (3))){
var inst_62562 = (state_62564[(2)]);
var state_62564__$1 = state_62564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62564__$1,inst_62562);
} else {
if((state_val_62565 === (2))){
var inst_62529 = (state_62564[(10)]);
var inst_62531 = cljs.core.count(inst_62529);
var inst_62532 = (inst_62531 > (0));
var state_62564__$1 = state_62564;
if(cljs.core.truth_(inst_62532)){
var statearr_62582_63725 = state_62564__$1;
(statearr_62582_63725[(1)] = (4));

} else {
var statearr_62583_63728 = state_62564__$1;
(statearr_62583_63728[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (11))){
var inst_62529 = (state_62564[(10)]);
var inst_62553 = (state_62564[(2)]);
var tmp62579 = inst_62529;
var inst_62529__$1 = tmp62579;
var state_62564__$1 = (function (){var statearr_62584 = state_62564;
(statearr_62584[(10)] = inst_62529__$1);

(statearr_62584[(11)] = inst_62553);

return statearr_62584;
})();
var statearr_62585_63729 = state_62564__$1;
(statearr_62585_63729[(2)] = null);

(statearr_62585_63729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (9))){
var inst_62539 = (state_62564[(7)]);
var state_62564__$1 = state_62564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62564__$1,(11),out,inst_62539);
} else {
if((state_val_62565 === (5))){
var inst_62558 = cljs.core.async.close_BANG_(out);
var state_62564__$1 = state_62564;
var statearr_62586_63730 = state_62564__$1;
(statearr_62586_63730[(2)] = inst_62558);

(statearr_62586_63730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (10))){
var inst_62556 = (state_62564[(2)]);
var state_62564__$1 = state_62564;
var statearr_62587_63733 = state_62564__$1;
(statearr_62587_63733[(2)] = inst_62556);

(statearr_62587_63733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62565 === (8))){
var inst_62529 = (state_62564[(10)]);
var inst_62539 = (state_62564[(7)]);
var inst_62538 = (state_62564[(8)]);
var inst_62540 = (state_62564[(9)]);
var inst_62543 = (function (){var cs = inst_62529;
var vec__62534 = inst_62538;
var v = inst_62539;
var c = inst_62540;
return (function (p1__62525_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__62525_SHARP_);
});
})();
var inst_62549 = cljs.core.filterv(inst_62543,inst_62529);
var inst_62529__$1 = inst_62549;
var state_62564__$1 = (function (){var statearr_62588 = state_62564;
(statearr_62588[(10)] = inst_62529__$1);

return statearr_62588;
})();
var statearr_62589_63736 = state_62564__$1;
(statearr_62589_63736[(2)] = null);

(statearr_62589_63736[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62590 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62590[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62590[(1)] = (1));

return statearr_62590;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62564){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62564);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62591){var ex__60808__auto__ = e62591;
var statearr_62592_63739 = state_62564;
(statearr_62592_63739[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62564[(4)]))){
var statearr_62593_63740 = state_62564;
(statearr_62593_63740[(1)] = cljs.core.first((state_62564[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63741 = state_62564;
state_62564 = G__63741;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62594 = f__61049__auto__();
(statearr_62594[(6)] = c__61048__auto___63720);

return statearr_62594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__62596 = arguments.length;
switch (G__62596) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61048__auto___63751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62620){
var state_val_62621 = (state_62620[(1)]);
if((state_val_62621 === (7))){
var inst_62602 = (state_62620[(7)]);
var inst_62602__$1 = (state_62620[(2)]);
var inst_62603 = (inst_62602__$1 == null);
var inst_62604 = cljs.core.not(inst_62603);
var state_62620__$1 = (function (){var statearr_62623 = state_62620;
(statearr_62623[(7)] = inst_62602__$1);

return statearr_62623;
})();
if(inst_62604){
var statearr_62624_63752 = state_62620__$1;
(statearr_62624_63752[(1)] = (8));

} else {
var statearr_62625_63753 = state_62620__$1;
(statearr_62625_63753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (1))){
var inst_62597 = (0);
var state_62620__$1 = (function (){var statearr_62626 = state_62620;
(statearr_62626[(8)] = inst_62597);

return statearr_62626;
})();
var statearr_62627_63758 = state_62620__$1;
(statearr_62627_63758[(2)] = null);

(statearr_62627_63758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (4))){
var state_62620__$1 = state_62620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62620__$1,(7),ch);
} else {
if((state_val_62621 === (6))){
var inst_62615 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
var statearr_62628_63759 = state_62620__$1;
(statearr_62628_63759[(2)] = inst_62615);

(statearr_62628_63759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (3))){
var inst_62617 = (state_62620[(2)]);
var inst_62618 = cljs.core.async.close_BANG_(out);
var state_62620__$1 = (function (){var statearr_62629 = state_62620;
(statearr_62629[(9)] = inst_62617);

return statearr_62629;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62620__$1,inst_62618);
} else {
if((state_val_62621 === (2))){
var inst_62597 = (state_62620[(8)]);
var inst_62599 = (inst_62597 < n);
var state_62620__$1 = state_62620;
if(cljs.core.truth_(inst_62599)){
var statearr_62630_63760 = state_62620__$1;
(statearr_62630_63760[(1)] = (4));

} else {
var statearr_62631_63761 = state_62620__$1;
(statearr_62631_63761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (11))){
var inst_62597 = (state_62620[(8)]);
var inst_62607 = (state_62620[(2)]);
var inst_62608 = (inst_62597 + (1));
var inst_62597__$1 = inst_62608;
var state_62620__$1 = (function (){var statearr_62633 = state_62620;
(statearr_62633[(8)] = inst_62597__$1);

(statearr_62633[(10)] = inst_62607);

return statearr_62633;
})();
var statearr_62634_63762 = state_62620__$1;
(statearr_62634_63762[(2)] = null);

(statearr_62634_63762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (9))){
var state_62620__$1 = state_62620;
var statearr_62635_63763 = state_62620__$1;
(statearr_62635_63763[(2)] = null);

(statearr_62635_63763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (5))){
var state_62620__$1 = state_62620;
var statearr_62636_63764 = state_62620__$1;
(statearr_62636_63764[(2)] = null);

(statearr_62636_63764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (10))){
var inst_62612 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
var statearr_62637_63765 = state_62620__$1;
(statearr_62637_63765[(2)] = inst_62612);

(statearr_62637_63765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (8))){
var inst_62602 = (state_62620[(7)]);
var state_62620__$1 = state_62620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62620__$1,(11),out,inst_62602);
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
});
return (function() {
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62638[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62638[(1)] = (1));

return statearr_62638;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62620){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62620);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62639){var ex__60808__auto__ = e62639;
var statearr_62640_63766 = state_62620;
(statearr_62640_63766[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62620[(4)]))){
var statearr_62641_63767 = state_62620;
(statearr_62641_63767[(1)] = cljs.core.first((state_62620[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63768 = state_62620;
state_62620 = G__63768;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62646 = f__61049__auto__();
(statearr_62646[(6)] = c__61048__auto___63751);

return statearr_62646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62648 = (function (f,ch,meta62649){
this.f = f;
this.ch = ch;
this.meta62649 = meta62649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62650,meta62649__$1){
var self__ = this;
var _62650__$1 = this;
return (new cljs.core.async.t_cljs$core$async62648(self__.f,self__.ch,meta62649__$1));
}));

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62650){
var self__ = this;
var _62650__$1 = this;
return self__.meta62649;
}));

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62659 = (function (f,ch,meta62649,_,fn1,meta62660){
this.f = f;
this.ch = ch;
this.meta62649 = meta62649;
this._ = _;
this.fn1 = fn1;
this.meta62660 = meta62660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62661,meta62660__$1){
var self__ = this;
var _62661__$1 = this;
return (new cljs.core.async.t_cljs$core$async62659(self__.f,self__.ch,self__.meta62649,self__._,self__.fn1,meta62660__$1));
}));

(cljs.core.async.t_cljs$core$async62659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62661){
var self__ = this;
var _62661__$1 = this;
return self__.meta62660;
}));

(cljs.core.async.t_cljs$core$async62659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async62659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async62659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__62647_SHARP_){
var G__62664 = (((p1__62647_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__62647_SHARP_) : self__.f.call(null,p1__62647_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__62664) : f1.call(null,G__62664));
});
}));

(cljs.core.async.t_cljs$core$async62659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62649","meta62649",1819858612,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async62648","cljs.core.async/t_cljs$core$async62648",-517029807,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta62660","meta62660",-877555954,null)], null);
}));

(cljs.core.async.t_cljs$core$async62659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62659");

(cljs.core.async.t_cljs$core$async62659.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62659.
 */
cljs.core.async.__GT_t_cljs$core$async62659 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62659(f__$1,ch__$1,meta62649__$1,___$2,fn1__$1,meta62660){
return (new cljs.core.async.t_cljs$core$async62659(f__$1,ch__$1,meta62649__$1,___$2,fn1__$1,meta62660));
});

}

return (new cljs.core.async.t_cljs$core$async62659(self__.f,self__.ch,self__.meta62649,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__62665 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__62665) : self__.f.call(null,G__62665));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async62648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62649","meta62649",1819858612,null)], null);
}));

(cljs.core.async.t_cljs$core$async62648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62648");

(cljs.core.async.t_cljs$core$async62648.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62648.
 */
cljs.core.async.__GT_t_cljs$core$async62648 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async62648(f__$1,ch__$1,meta62649){
return (new cljs.core.async.t_cljs$core$async62648(f__$1,ch__$1,meta62649));
});

}

return (new cljs.core.async.t_cljs$core$async62648(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62666 = (function (f,ch,meta62667){
this.f = f;
this.ch = ch;
this.meta62667 = meta62667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62668,meta62667__$1){
var self__ = this;
var _62668__$1 = this;
return (new cljs.core.async.t_cljs$core$async62666(self__.f,self__.ch,meta62667__$1));
}));

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62668){
var self__ = this;
var _62668__$1 = this;
return self__.meta62667;
}));

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async62666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62667","meta62667",1975057161,null)], null);
}));

(cljs.core.async.t_cljs$core$async62666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62666");

(cljs.core.async.t_cljs$core$async62666.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62666.
 */
cljs.core.async.__GT_t_cljs$core$async62666 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async62666(f__$1,ch__$1,meta62667){
return (new cljs.core.async.t_cljs$core$async62666(f__$1,ch__$1,meta62667));
});

}

return (new cljs.core.async.t_cljs$core$async62666(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async62670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62670 = (function (p,ch,meta62671){
this.p = p;
this.ch = ch;
this.meta62671 = meta62671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62672,meta62671__$1){
var self__ = this;
var _62672__$1 = this;
return (new cljs.core.async.t_cljs$core$async62670(self__.p,self__.ch,meta62671__$1));
}));

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62672){
var self__ = this;
var _62672__$1 = this;
return self__.meta62671;
}));

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async62670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async62670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta62671","meta62671",641193864,null)], null);
}));

(cljs.core.async.t_cljs$core$async62670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async62670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62670");

(cljs.core.async.t_cljs$core$async62670.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async62670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async62670.
 */
cljs.core.async.__GT_t_cljs$core$async62670 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async62670(p__$1,ch__$1,meta62671){
return (new cljs.core.async.t_cljs$core$async62670(p__$1,ch__$1,meta62671));
});

}

return (new cljs.core.async.t_cljs$core$async62670(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__62675 = arguments.length;
switch (G__62675) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61048__auto___63802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62696){
var state_val_62697 = (state_62696[(1)]);
if((state_val_62697 === (7))){
var inst_62692 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62698_63803 = state_62696__$1;
(statearr_62698_63803[(2)] = inst_62692);

(statearr_62698_63803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (1))){
var state_62696__$1 = state_62696;
var statearr_62699_63804 = state_62696__$1;
(statearr_62699_63804[(2)] = null);

(statearr_62699_63804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (4))){
var inst_62678 = (state_62696[(7)]);
var inst_62678__$1 = (state_62696[(2)]);
var inst_62679 = (inst_62678__$1 == null);
var state_62696__$1 = (function (){var statearr_62700 = state_62696;
(statearr_62700[(7)] = inst_62678__$1);

return statearr_62700;
})();
if(cljs.core.truth_(inst_62679)){
var statearr_62701_63805 = state_62696__$1;
(statearr_62701_63805[(1)] = (5));

} else {
var statearr_62702_63806 = state_62696__$1;
(statearr_62702_63806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (6))){
var inst_62678 = (state_62696[(7)]);
var inst_62683 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_62678) : p.call(null,inst_62678));
var state_62696__$1 = state_62696;
if(cljs.core.truth_(inst_62683)){
var statearr_62703_63807 = state_62696__$1;
(statearr_62703_63807[(1)] = (8));

} else {
var statearr_62704_63808 = state_62696__$1;
(statearr_62704_63808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (3))){
var inst_62694 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62696__$1,inst_62694);
} else {
if((state_val_62697 === (2))){
var state_62696__$1 = state_62696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62696__$1,(4),ch);
} else {
if((state_val_62697 === (11))){
var inst_62686 = (state_62696[(2)]);
var state_62696__$1 = state_62696;
var statearr_62705_63814 = state_62696__$1;
(statearr_62705_63814[(2)] = inst_62686);

(statearr_62705_63814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (9))){
var state_62696__$1 = state_62696;
var statearr_62706_63815 = state_62696__$1;
(statearr_62706_63815[(2)] = null);

(statearr_62706_63815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (5))){
var inst_62681 = cljs.core.async.close_BANG_(out);
var state_62696__$1 = state_62696;
var statearr_62707_63816 = state_62696__$1;
(statearr_62707_63816[(2)] = inst_62681);

(statearr_62707_63816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (10))){
var inst_62689 = (state_62696[(2)]);
var state_62696__$1 = (function (){var statearr_62708 = state_62696;
(statearr_62708[(8)] = inst_62689);

return statearr_62708;
})();
var statearr_62709_63817 = state_62696__$1;
(statearr_62709_63817[(2)] = null);

(statearr_62709_63817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62697 === (8))){
var inst_62678 = (state_62696[(7)]);
var state_62696__$1 = state_62696;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62696__$1,(11),out,inst_62678);
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
});
return (function() {
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62710 = [null,null,null,null,null,null,null,null,null];
(statearr_62710[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62710[(1)] = (1));

return statearr_62710;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62696){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62696);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62711){var ex__60808__auto__ = e62711;
var statearr_62712_63821 = state_62696;
(statearr_62712_63821[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62696[(4)]))){
var statearr_62713_63826 = state_62696;
(statearr_62713_63826[(1)] = cljs.core.first((state_62696[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63827 = state_62696;
state_62696 = G__63827;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62696){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62714 = f__61049__auto__();
(statearr_62714[(6)] = c__61048__auto___63802);

return statearr_62714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__62716 = arguments.length;
switch (G__62716) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__61048__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62778){
var state_val_62779 = (state_62778[(1)]);
if((state_val_62779 === (7))){
var inst_62774 = (state_62778[(2)]);
var state_62778__$1 = state_62778;
var statearr_62780_63829 = state_62778__$1;
(statearr_62780_63829[(2)] = inst_62774);

(statearr_62780_63829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (20))){
var inst_62744 = (state_62778[(7)]);
var inst_62755 = (state_62778[(2)]);
var inst_62756 = cljs.core.next(inst_62744);
var inst_62730 = inst_62756;
var inst_62731 = null;
var inst_62732 = (0);
var inst_62733 = (0);
var state_62778__$1 = (function (){var statearr_62781 = state_62778;
(statearr_62781[(8)] = inst_62755);

(statearr_62781[(9)] = inst_62732);

(statearr_62781[(10)] = inst_62730);

(statearr_62781[(11)] = inst_62733);

(statearr_62781[(12)] = inst_62731);

return statearr_62781;
})();
var statearr_62782_63830 = state_62778__$1;
(statearr_62782_63830[(2)] = null);

(statearr_62782_63830[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (1))){
var state_62778__$1 = state_62778;
var statearr_62783_63835 = state_62778__$1;
(statearr_62783_63835[(2)] = null);

(statearr_62783_63835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (4))){
var inst_62719 = (state_62778[(13)]);
var inst_62719__$1 = (state_62778[(2)]);
var inst_62720 = (inst_62719__$1 == null);
var state_62778__$1 = (function (){var statearr_62784 = state_62778;
(statearr_62784[(13)] = inst_62719__$1);

return statearr_62784;
})();
if(cljs.core.truth_(inst_62720)){
var statearr_62785_63836 = state_62778__$1;
(statearr_62785_63836[(1)] = (5));

} else {
var statearr_62786_63837 = state_62778__$1;
(statearr_62786_63837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (15))){
var state_62778__$1 = state_62778;
var statearr_62790_63841 = state_62778__$1;
(statearr_62790_63841[(2)] = null);

(statearr_62790_63841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (21))){
var state_62778__$1 = state_62778;
var statearr_62791_63842 = state_62778__$1;
(statearr_62791_63842[(2)] = null);

(statearr_62791_63842[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (13))){
var inst_62732 = (state_62778[(9)]);
var inst_62730 = (state_62778[(10)]);
var inst_62733 = (state_62778[(11)]);
var inst_62731 = (state_62778[(12)]);
var inst_62740 = (state_62778[(2)]);
var inst_62741 = (inst_62733 + (1));
var tmp62787 = inst_62732;
var tmp62788 = inst_62730;
var tmp62789 = inst_62731;
var inst_62730__$1 = tmp62788;
var inst_62731__$1 = tmp62789;
var inst_62732__$1 = tmp62787;
var inst_62733__$1 = inst_62741;
var state_62778__$1 = (function (){var statearr_62792 = state_62778;
(statearr_62792[(9)] = inst_62732__$1);

(statearr_62792[(10)] = inst_62730__$1);

(statearr_62792[(11)] = inst_62733__$1);

(statearr_62792[(12)] = inst_62731__$1);

(statearr_62792[(14)] = inst_62740);

return statearr_62792;
})();
var statearr_62793_63844 = state_62778__$1;
(statearr_62793_63844[(2)] = null);

(statearr_62793_63844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (22))){
var state_62778__$1 = state_62778;
var statearr_62794_63847 = state_62778__$1;
(statearr_62794_63847[(2)] = null);

(statearr_62794_63847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (6))){
var inst_62719 = (state_62778[(13)]);
var inst_62728 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62719) : f.call(null,inst_62719));
var inst_62729 = cljs.core.seq(inst_62728);
var inst_62730 = inst_62729;
var inst_62731 = null;
var inst_62732 = (0);
var inst_62733 = (0);
var state_62778__$1 = (function (){var statearr_62795 = state_62778;
(statearr_62795[(9)] = inst_62732);

(statearr_62795[(10)] = inst_62730);

(statearr_62795[(11)] = inst_62733);

(statearr_62795[(12)] = inst_62731);

return statearr_62795;
})();
var statearr_62796_63855 = state_62778__$1;
(statearr_62796_63855[(2)] = null);

(statearr_62796_63855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (17))){
var inst_62744 = (state_62778[(7)]);
var inst_62748 = cljs.core.chunk_first(inst_62744);
var inst_62749 = cljs.core.chunk_rest(inst_62744);
var inst_62750 = cljs.core.count(inst_62748);
var inst_62730 = inst_62749;
var inst_62731 = inst_62748;
var inst_62732 = inst_62750;
var inst_62733 = (0);
var state_62778__$1 = (function (){var statearr_62797 = state_62778;
(statearr_62797[(9)] = inst_62732);

(statearr_62797[(10)] = inst_62730);

(statearr_62797[(11)] = inst_62733);

(statearr_62797[(12)] = inst_62731);

return statearr_62797;
})();
var statearr_62800_63856 = state_62778__$1;
(statearr_62800_63856[(2)] = null);

(statearr_62800_63856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (3))){
var inst_62776 = (state_62778[(2)]);
var state_62778__$1 = state_62778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62778__$1,inst_62776);
} else {
if((state_val_62779 === (12))){
var inst_62764 = (state_62778[(2)]);
var state_62778__$1 = state_62778;
var statearr_62801_63857 = state_62778__$1;
(statearr_62801_63857[(2)] = inst_62764);

(statearr_62801_63857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (2))){
var state_62778__$1 = state_62778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62778__$1,(4),in$);
} else {
if((state_val_62779 === (23))){
var inst_62772 = (state_62778[(2)]);
var state_62778__$1 = state_62778;
var statearr_62802_63858 = state_62778__$1;
(statearr_62802_63858[(2)] = inst_62772);

(statearr_62802_63858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (19))){
var inst_62759 = (state_62778[(2)]);
var state_62778__$1 = state_62778;
var statearr_62807_63859 = state_62778__$1;
(statearr_62807_63859[(2)] = inst_62759);

(statearr_62807_63859[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (11))){
var inst_62730 = (state_62778[(10)]);
var inst_62744 = (state_62778[(7)]);
var inst_62744__$1 = cljs.core.seq(inst_62730);
var state_62778__$1 = (function (){var statearr_62808 = state_62778;
(statearr_62808[(7)] = inst_62744__$1);

return statearr_62808;
})();
if(inst_62744__$1){
var statearr_62809_63860 = state_62778__$1;
(statearr_62809_63860[(1)] = (14));

} else {
var statearr_62810_63861 = state_62778__$1;
(statearr_62810_63861[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (9))){
var inst_62766 = (state_62778[(2)]);
var inst_62767 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_62778__$1 = (function (){var statearr_62811 = state_62778;
(statearr_62811[(15)] = inst_62766);

return statearr_62811;
})();
if(cljs.core.truth_(inst_62767)){
var statearr_62812_63870 = state_62778__$1;
(statearr_62812_63870[(1)] = (21));

} else {
var statearr_62813_63872 = state_62778__$1;
(statearr_62813_63872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (5))){
var inst_62722 = cljs.core.async.close_BANG_(out);
var state_62778__$1 = state_62778;
var statearr_62814_63874 = state_62778__$1;
(statearr_62814_63874[(2)] = inst_62722);

(statearr_62814_63874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (14))){
var inst_62744 = (state_62778[(7)]);
var inst_62746 = cljs.core.chunked_seq_QMARK_(inst_62744);
var state_62778__$1 = state_62778;
if(inst_62746){
var statearr_62815_63875 = state_62778__$1;
(statearr_62815_63875[(1)] = (17));

} else {
var statearr_62816_63876 = state_62778__$1;
(statearr_62816_63876[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (16))){
var inst_62762 = (state_62778[(2)]);
var state_62778__$1 = state_62778;
var statearr_62817_63880 = state_62778__$1;
(statearr_62817_63880[(2)] = inst_62762);

(statearr_62817_63880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62779 === (10))){
var inst_62733 = (state_62778[(11)]);
var inst_62731 = (state_62778[(12)]);
var inst_62738 = cljs.core._nth(inst_62731,inst_62733);
var state_62778__$1 = state_62778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62778__$1,(13),out,inst_62738);
} else {
if((state_val_62779 === (18))){
var inst_62744 = (state_62778[(7)]);
var inst_62753 = cljs.core.first(inst_62744);
var state_62778__$1 = state_62778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62778__$1,(20),out,inst_62753);
} else {
if((state_val_62779 === (8))){
var inst_62732 = (state_62778[(9)]);
var inst_62733 = (state_62778[(11)]);
var inst_62735 = (inst_62733 < inst_62732);
var inst_62736 = inst_62735;
var state_62778__$1 = state_62778;
if(cljs.core.truth_(inst_62736)){
var statearr_62818_63881 = state_62778__$1;
(statearr_62818_63881[(1)] = (10));

} else {
var statearr_62819_63882 = state_62778__$1;
(statearr_62819_63882[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__60805__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__60805__auto____0 = (function (){
var statearr_62820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62820[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__60805__auto__);

(statearr_62820[(1)] = (1));

return statearr_62820;
});
var cljs$core$async$mapcat_STAR__$_state_machine__60805__auto____1 = (function (state_62778){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62778);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62821){var ex__60808__auto__ = e62821;
var statearr_62822_63883 = state_62778;
(statearr_62822_63883[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62778[(4)]))){
var statearr_62823_63886 = state_62778;
(statearr_62823_63886[(1)] = cljs.core.first((state_62778[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63887 = state_62778;
state_62778 = G__63887;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__60805__auto__ = function(state_62778){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__60805__auto____1.call(this,state_62778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__60805__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__60805__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62824 = f__61049__auto__();
(statearr_62824[(6)] = c__61048__auto__);

return statearr_62824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));

return c__61048__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__62826 = arguments.length;
switch (G__62826) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__62828 = arguments.length;
switch (G__62828) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__62831 = arguments.length;
switch (G__62831) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61048__auto___63908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62855){
var state_val_62856 = (state_62855[(1)]);
if((state_val_62856 === (7))){
var inst_62850 = (state_62855[(2)]);
var state_62855__$1 = state_62855;
var statearr_62857_63909 = state_62855__$1;
(statearr_62857_63909[(2)] = inst_62850);

(statearr_62857_63909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (1))){
var inst_62832 = null;
var state_62855__$1 = (function (){var statearr_62858 = state_62855;
(statearr_62858[(7)] = inst_62832);

return statearr_62858;
})();
var statearr_62859_63910 = state_62855__$1;
(statearr_62859_63910[(2)] = null);

(statearr_62859_63910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (4))){
var inst_62835 = (state_62855[(8)]);
var inst_62835__$1 = (state_62855[(2)]);
var inst_62836 = (inst_62835__$1 == null);
var inst_62837 = cljs.core.not(inst_62836);
var state_62855__$1 = (function (){var statearr_62860 = state_62855;
(statearr_62860[(8)] = inst_62835__$1);

return statearr_62860;
})();
if(inst_62837){
var statearr_62861_63911 = state_62855__$1;
(statearr_62861_63911[(1)] = (5));

} else {
var statearr_62862_63912 = state_62855__$1;
(statearr_62862_63912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (6))){
var state_62855__$1 = state_62855;
var statearr_62863_63913 = state_62855__$1;
(statearr_62863_63913[(2)] = null);

(statearr_62863_63913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (3))){
var inst_62852 = (state_62855[(2)]);
var inst_62853 = cljs.core.async.close_BANG_(out);
var state_62855__$1 = (function (){var statearr_62864 = state_62855;
(statearr_62864[(9)] = inst_62852);

return statearr_62864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_62855__$1,inst_62853);
} else {
if((state_val_62856 === (2))){
var state_62855__$1 = state_62855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62855__$1,(4),ch);
} else {
if((state_val_62856 === (11))){
var inst_62835 = (state_62855[(8)]);
var inst_62844 = (state_62855[(2)]);
var inst_62832 = inst_62835;
var state_62855__$1 = (function (){var statearr_62865 = state_62855;
(statearr_62865[(7)] = inst_62832);

(statearr_62865[(10)] = inst_62844);

return statearr_62865;
})();
var statearr_62866_63914 = state_62855__$1;
(statearr_62866_63914[(2)] = null);

(statearr_62866_63914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (9))){
var inst_62835 = (state_62855[(8)]);
var state_62855__$1 = state_62855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62855__$1,(11),out,inst_62835);
} else {
if((state_val_62856 === (5))){
var inst_62835 = (state_62855[(8)]);
var inst_62832 = (state_62855[(7)]);
var inst_62839 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62835,inst_62832);
var state_62855__$1 = state_62855;
if(inst_62839){
var statearr_62868_63915 = state_62855__$1;
(statearr_62868_63915[(1)] = (8));

} else {
var statearr_62869_63919 = state_62855__$1;
(statearr_62869_63919[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (10))){
var inst_62847 = (state_62855[(2)]);
var state_62855__$1 = state_62855;
var statearr_62870_63920 = state_62855__$1;
(statearr_62870_63920[(2)] = inst_62847);

(statearr_62870_63920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62856 === (8))){
var inst_62832 = (state_62855[(7)]);
var tmp62867 = inst_62832;
var inst_62832__$1 = tmp62867;
var state_62855__$1 = (function (){var statearr_62871 = state_62855;
(statearr_62871[(7)] = inst_62832__$1);

return statearr_62871;
})();
var statearr_62872_63923 = state_62855__$1;
(statearr_62872_63923[(2)] = null);

(statearr_62872_63923[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62873 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62873[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62873[(1)] = (1));

return statearr_62873;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62855){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62855);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62874){var ex__60808__auto__ = e62874;
var statearr_62875_63928 = state_62855;
(statearr_62875_63928[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62855[(4)]))){
var statearr_62876_63929 = state_62855;
(statearr_62876_63929[(1)] = cljs.core.first((state_62855[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63930 = state_62855;
state_62855 = G__63930;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62877 = f__61049__auto__();
(statearr_62877[(6)] = c__61048__auto___63908);

return statearr_62877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__62879 = arguments.length;
switch (G__62879) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61048__auto___63933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_62917){
var state_val_62918 = (state_62917[(1)]);
if((state_val_62918 === (7))){
var inst_62913 = (state_62917[(2)]);
var state_62917__$1 = state_62917;
var statearr_62919_63936 = state_62917__$1;
(statearr_62919_63936[(2)] = inst_62913);

(statearr_62919_63936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (1))){
var inst_62880 = (new Array(n));
var inst_62881 = inst_62880;
var inst_62882 = (0);
var state_62917__$1 = (function (){var statearr_62920 = state_62917;
(statearr_62920[(7)] = inst_62881);

(statearr_62920[(8)] = inst_62882);

return statearr_62920;
})();
var statearr_62921_63939 = state_62917__$1;
(statearr_62921_63939[(2)] = null);

(statearr_62921_63939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (4))){
var inst_62885 = (state_62917[(9)]);
var inst_62885__$1 = (state_62917[(2)]);
var inst_62886 = (inst_62885__$1 == null);
var inst_62887 = cljs.core.not(inst_62886);
var state_62917__$1 = (function (){var statearr_62922 = state_62917;
(statearr_62922[(9)] = inst_62885__$1);

return statearr_62922;
})();
if(inst_62887){
var statearr_62923_63942 = state_62917__$1;
(statearr_62923_63942[(1)] = (5));

} else {
var statearr_62924_63943 = state_62917__$1;
(statearr_62924_63943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (15))){
var inst_62907 = (state_62917[(2)]);
var state_62917__$1 = state_62917;
var statearr_62925_63944 = state_62917__$1;
(statearr_62925_63944[(2)] = inst_62907);

(statearr_62925_63944[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (13))){
var state_62917__$1 = state_62917;
var statearr_62926_63946 = state_62917__$1;
(statearr_62926_63946[(2)] = null);

(statearr_62926_63946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (6))){
var inst_62882 = (state_62917[(8)]);
var inst_62903 = (inst_62882 > (0));
var state_62917__$1 = state_62917;
if(cljs.core.truth_(inst_62903)){
var statearr_62927_63950 = state_62917__$1;
(statearr_62927_63950[(1)] = (12));

} else {
var statearr_62928_63951 = state_62917__$1;
(statearr_62928_63951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (3))){
var inst_62915 = (state_62917[(2)]);
var state_62917__$1 = state_62917;
return cljs.core.async.impl.ioc_helpers.return_chan(state_62917__$1,inst_62915);
} else {
if((state_val_62918 === (12))){
var inst_62881 = (state_62917[(7)]);
var inst_62905 = cljs.core.vec(inst_62881);
var state_62917__$1 = state_62917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62917__$1,(15),out,inst_62905);
} else {
if((state_val_62918 === (2))){
var state_62917__$1 = state_62917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_62917__$1,(4),ch);
} else {
if((state_val_62918 === (11))){
var inst_62897 = (state_62917[(2)]);
var inst_62898 = (new Array(n));
var inst_62881 = inst_62898;
var inst_62882 = (0);
var state_62917__$1 = (function (){var statearr_62932 = state_62917;
(statearr_62932[(10)] = inst_62897);

(statearr_62932[(7)] = inst_62881);

(statearr_62932[(8)] = inst_62882);

return statearr_62932;
})();
var statearr_62933_63961 = state_62917__$1;
(statearr_62933_63961[(2)] = null);

(statearr_62933_63961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (9))){
var inst_62881 = (state_62917[(7)]);
var inst_62895 = cljs.core.vec(inst_62881);
var state_62917__$1 = state_62917;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_62917__$1,(11),out,inst_62895);
} else {
if((state_val_62918 === (5))){
var inst_62881 = (state_62917[(7)]);
var inst_62885 = (state_62917[(9)]);
var inst_62882 = (state_62917[(8)]);
var inst_62890 = (state_62917[(11)]);
var inst_62889 = (inst_62881[inst_62882] = inst_62885);
var inst_62890__$1 = (inst_62882 + (1));
var inst_62891 = (inst_62890__$1 < n);
var state_62917__$1 = (function (){var statearr_62935 = state_62917;
(statearr_62935[(12)] = inst_62889);

(statearr_62935[(11)] = inst_62890__$1);

return statearr_62935;
})();
if(cljs.core.truth_(inst_62891)){
var statearr_62936_63972 = state_62917__$1;
(statearr_62936_63972[(1)] = (8));

} else {
var statearr_62937_63973 = state_62917__$1;
(statearr_62937_63973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (14))){
var inst_62910 = (state_62917[(2)]);
var inst_62911 = cljs.core.async.close_BANG_(out);
var state_62917__$1 = (function (){var statearr_62939 = state_62917;
(statearr_62939[(13)] = inst_62910);

return statearr_62939;
})();
var statearr_62940_63981 = state_62917__$1;
(statearr_62940_63981[(2)] = inst_62911);

(statearr_62940_63981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (10))){
var inst_62901 = (state_62917[(2)]);
var state_62917__$1 = state_62917;
var statearr_62941_63985 = state_62917__$1;
(statearr_62941_63985[(2)] = inst_62901);

(statearr_62941_63985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62918 === (8))){
var inst_62881 = (state_62917[(7)]);
var inst_62890 = (state_62917[(11)]);
var tmp62938 = inst_62881;
var inst_62881__$1 = tmp62938;
var inst_62882 = inst_62890;
var state_62917__$1 = (function (){var statearr_62942 = state_62917;
(statearr_62942[(7)] = inst_62881__$1);

(statearr_62942[(8)] = inst_62882);

return statearr_62942;
})();
var statearr_62943_63987 = state_62917__$1;
(statearr_62943_63987[(2)] = null);

(statearr_62943_63987[(1)] = (2));


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
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_62944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62944[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_62944[(1)] = (1));

return statearr_62944;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_62917){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_62917);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e62945){var ex__60808__auto__ = e62945;
var statearr_62946_63994 = state_62917;
(statearr_62946_63994[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_62917[(4)]))){
var statearr_62947_63995 = state_62917;
(statearr_62947_63995[(1)] = cljs.core.first((state_62917[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63997 = state_62917;
state_62917 = G__63997;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_62917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_62917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_62949 = f__61049__auto__();
(statearr_62949[(6)] = c__61048__auto___63933);

return statearr_62949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__62954 = arguments.length;
switch (G__62954) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__61048__auto___64011 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__61049__auto__ = (function (){var switch__60804__auto__ = (function (state_63000){
var state_val_63001 = (state_63000[(1)]);
if((state_val_63001 === (7))){
var inst_62996 = (state_63000[(2)]);
var state_63000__$1 = state_63000;
var statearr_63003_64014 = state_63000__$1;
(statearr_63003_64014[(2)] = inst_62996);

(statearr_63003_64014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (1))){
var inst_62959 = [];
var inst_62960 = inst_62959;
var inst_62961 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_63000__$1 = (function (){var statearr_63005 = state_63000;
(statearr_63005[(7)] = inst_62961);

(statearr_63005[(8)] = inst_62960);

return statearr_63005;
})();
var statearr_63006_64016 = state_63000__$1;
(statearr_63006_64016[(2)] = null);

(statearr_63006_64016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (4))){
var inst_62964 = (state_63000[(9)]);
var inst_62964__$1 = (state_63000[(2)]);
var inst_62965 = (inst_62964__$1 == null);
var inst_62966 = cljs.core.not(inst_62965);
var state_63000__$1 = (function (){var statearr_63007 = state_63000;
(statearr_63007[(9)] = inst_62964__$1);

return statearr_63007;
})();
if(inst_62966){
var statearr_63008_64020 = state_63000__$1;
(statearr_63008_64020[(1)] = (5));

} else {
var statearr_63009_64021 = state_63000__$1;
(statearr_63009_64021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (15))){
var inst_62990 = (state_63000[(2)]);
var state_63000__$1 = state_63000;
var statearr_63010_64022 = state_63000__$1;
(statearr_63010_64022[(2)] = inst_62990);

(statearr_63010_64022[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (13))){
var state_63000__$1 = state_63000;
var statearr_63011_64023 = state_63000__$1;
(statearr_63011_64023[(2)] = null);

(statearr_63011_64023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (6))){
var inst_62960 = (state_63000[(8)]);
var inst_62985 = inst_62960.length;
var inst_62986 = (inst_62985 > (0));
var state_63000__$1 = state_63000;
if(cljs.core.truth_(inst_62986)){
var statearr_63012_64024 = state_63000__$1;
(statearr_63012_64024[(1)] = (12));

} else {
var statearr_63013_64029 = state_63000__$1;
(statearr_63013_64029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (3))){
var inst_62998 = (state_63000[(2)]);
var state_63000__$1 = state_63000;
return cljs.core.async.impl.ioc_helpers.return_chan(state_63000__$1,inst_62998);
} else {
if((state_val_63001 === (12))){
var inst_62960 = (state_63000[(8)]);
var inst_62988 = cljs.core.vec(inst_62960);
var state_63000__$1 = state_63000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63000__$1,(15),out,inst_62988);
} else {
if((state_val_63001 === (2))){
var state_63000__$1 = state_63000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_63000__$1,(4),ch);
} else {
if((state_val_63001 === (11))){
var inst_62964 = (state_63000[(9)]);
var inst_62968 = (state_63000[(10)]);
var inst_62978 = (state_63000[(2)]);
var inst_62979 = [];
var inst_62980 = inst_62979.push(inst_62964);
var inst_62960 = inst_62979;
var inst_62961 = inst_62968;
var state_63000__$1 = (function (){var statearr_63014 = state_63000;
(statearr_63014[(7)] = inst_62961);

(statearr_63014[(11)] = inst_62980);

(statearr_63014[(12)] = inst_62978);

(statearr_63014[(8)] = inst_62960);

return statearr_63014;
})();
var statearr_63015_64050 = state_63000__$1;
(statearr_63015_64050[(2)] = null);

(statearr_63015_64050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (9))){
var inst_62960 = (state_63000[(8)]);
var inst_62976 = cljs.core.vec(inst_62960);
var state_63000__$1 = state_63000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_63000__$1,(11),out,inst_62976);
} else {
if((state_val_63001 === (5))){
var inst_62964 = (state_63000[(9)]);
var inst_62961 = (state_63000[(7)]);
var inst_62968 = (state_63000[(10)]);
var inst_62968__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_62964) : f.call(null,inst_62964));
var inst_62969 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_62968__$1,inst_62961);
var inst_62970 = cljs.core.keyword_identical_QMARK_(inst_62961,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_62971 = ((inst_62969) || (inst_62970));
var state_63000__$1 = (function (){var statearr_63017 = state_63000;
(statearr_63017[(10)] = inst_62968__$1);

return statearr_63017;
})();
if(cljs.core.truth_(inst_62971)){
var statearr_63018_64058 = state_63000__$1;
(statearr_63018_64058[(1)] = (8));

} else {
var statearr_63019_64063 = state_63000__$1;
(statearr_63019_64063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (14))){
var inst_62993 = (state_63000[(2)]);
var inst_62994 = cljs.core.async.close_BANG_(out);
var state_63000__$1 = (function (){var statearr_63021 = state_63000;
(statearr_63021[(13)] = inst_62993);

return statearr_63021;
})();
var statearr_63022_64072 = state_63000__$1;
(statearr_63022_64072[(2)] = inst_62994);

(statearr_63022_64072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (10))){
var inst_62983 = (state_63000[(2)]);
var state_63000__$1 = state_63000;
var statearr_63023_64076 = state_63000__$1;
(statearr_63023_64076[(2)] = inst_62983);

(statearr_63023_64076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63001 === (8))){
var inst_62964 = (state_63000[(9)]);
var inst_62960 = (state_63000[(8)]);
var inst_62968 = (state_63000[(10)]);
var inst_62973 = inst_62960.push(inst_62964);
var tmp63020 = inst_62960;
var inst_62960__$1 = tmp63020;
var inst_62961 = inst_62968;
var state_63000__$1 = (function (){var statearr_63024 = state_63000;
(statearr_63024[(14)] = inst_62973);

(statearr_63024[(7)] = inst_62961);

(statearr_63024[(8)] = inst_62960__$1);

return statearr_63024;
})();
var statearr_63025_64083 = state_63000__$1;
(statearr_63025_64083[(2)] = null);

(statearr_63025_64083[(1)] = (2));


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
var cljs$core$async$state_machine__60805__auto__ = null;
var cljs$core$async$state_machine__60805__auto____0 = (function (){
var statearr_63026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63026[(0)] = cljs$core$async$state_machine__60805__auto__);

(statearr_63026[(1)] = (1));

return statearr_63026;
});
var cljs$core$async$state_machine__60805__auto____1 = (function (state_63000){
while(true){
var ret_value__60806__auto__ = (function (){try{while(true){
var result__60807__auto__ = switch__60804__auto__(state_63000);
if(cljs.core.keyword_identical_QMARK_(result__60807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__60807__auto__;
}
break;
}
}catch (e63027){var ex__60808__auto__ = e63027;
var statearr_63028_64084 = state_63000;
(statearr_63028_64084[(2)] = ex__60808__auto__);


if(cljs.core.seq((state_63000[(4)]))){
var statearr_63029_64085 = state_63000;
(statearr_63029_64085[(1)] = cljs.core.first((state_63000[(4)])));

} else {
throw ex__60808__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__60806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64086 = state_63000;
state_63000 = G__64086;
continue;
} else {
return ret_value__60806__auto__;
}
break;
}
});
cljs$core$async$state_machine__60805__auto__ = function(state_63000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__60805__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__60805__auto____1.call(this,state_63000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__60805__auto____0;
cljs$core$async$state_machine__60805__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__60805__auto____1;
return cljs$core$async$state_machine__60805__auto__;
})()
})();
var state__61050__auto__ = (function (){var statearr_63030 = f__61049__auto__();
(statearr_63030[(6)] = c__61048__auto___64011);

return statearr_63030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__61050__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

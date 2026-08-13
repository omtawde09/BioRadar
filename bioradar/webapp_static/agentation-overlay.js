"use strict";var AgentationOverlay=(()=>{var I3=Object.create;var eh=Object.defineProperty;var B3=Object.getOwnPropertyDescriptor;var z3=Object.getOwnPropertyNames;var U3=Object.getPrototypeOf,H3=Object.prototype.hasOwnProperty;var Oi=(a,l)=>()=>{try{return l||a((l={exports:{}}).exports,l),l.exports}catch(u){throw l=0,u}},F3=(a,l)=>{for(var u in l)eh(a,u,{get:l[u],enumerable:!0})},F5=(a,l,u,h)=>{if(l&&typeof l=="object"||typeof l=="function")for(let p of z3(l))!H3.call(a,p)&&p!==u&&eh(a,p,{get:()=>l[p],enumerable:!(h=B3(l,p))||h.enumerable});return a};var Un=(a,l,u)=>(u=a!=null?I3(U3(a)):{},F5(l||!a||!a.__esModule?eh(u,"default",{value:a,enumerable:!0}):u,a)),P3=a=>F5(eh({},"__esModule",{value:!0}),a);var P5=Oi((an,th)=>{"use strict";(function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var a="18.3.1",l=Symbol.for("react.element"),u=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),I=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),P=Symbol.iterator,pe="@@iterator";function Q(_){if(_===null||typeof _!="object")return null;var S=P&&_[P]||_[pe];return typeof S=="function"?S:null}var K={current:null},_e={transition:null},ge={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},De={current:null},Qe={},Dt=null;function ye(_){Dt=_}Qe.setExtraStackFrame=function(_){Dt=_},Qe.getCurrentStack=null,Qe.getStackAddendum=function(){var _="";Dt&&(_+=Dt);var S=Qe.getCurrentStack;return S&&(_+=S()||""),_};var Kt=!1,vt=!1,gt=!1,Je=!1,dt=!1,Re={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:_e,ReactCurrentOwner:De};Re.ReactDebugCurrentFrame=Qe,Re.ReactCurrentActQueue=ge;function He(_){{for(var S=arguments.length,W=new Array(S>1?S-1:0),q=1;q<S;q++)W[q-1]=arguments[q];rt("warn",_,W)}}function we(_){{for(var S=arguments.length,W=new Array(S>1?S-1:0),q=1;q<S;q++)W[q-1]=arguments[q];rt("error",_,W)}}function rt(_,S,W){{var q=Re.ReactDebugCurrentFrame,be=q.getStackAddendum();be!==""&&(S+="%s",W=W.concat([be]));var ot=W.map(function(Le){return String(Le)});ot.unshift("Warning: "+S),Function.prototype.apply.call(console[_],console,ot)}}var Wt={};function de(_,S){{var W=_.constructor,q=W&&(W.displayName||W.name)||"ReactClass",be=q+"."+S;if(Wt[be])return;we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",S,q),Wt[be]=!0}}var et={isMounted:function(_){return!1},enqueueForceUpdate:function(_,S,W){de(_,"forceUpdate")},enqueueReplaceState:function(_,S,W,q){de(_,"replaceState")},enqueueSetState:function(_,S,W,q){de(_,"setState")}},Et=Object.assign,sn={};Object.freeze(sn);function bn(_,S,W){this.props=_,this.context=S,this.refs=sn,this.updater=W||et}bn.prototype.isReactComponent={},bn.prototype.setState=function(_,S){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,S,"setState")},bn.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};{var Sn={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},qr=function(_,S){Object.defineProperty(bn.prototype,_,{get:function(){He("%s(...) is deprecated in plain JavaScript React classes. %s",S[0],S[1])}})};for(var ir in Sn)Sn.hasOwnProperty(ir)&&qr(ir,Sn[ir])}function br(){}br.prototype=bn.prototype;function lr(_,S,W){this.props=_,this.context=S,this.refs=sn,this.updater=W||et}var sr=lr.prototype=new br;sr.constructor=lr,Et(sr,bn.prototype),sr.isPureReactComponent=!0;function tr(){var _={current:null};return Object.seal(_),_}var Mr=Array.isArray;function En(_){return Mr(_)}function Kn(_){{var S=typeof Symbol=="function"&&Symbol.toStringTag,W=S&&_[Symbol.toStringTag]||_.constructor.name||"Object";return W}}function gn(_){try{return In(_),!1}catch{return!0}}function In(_){return""+_}function yn(_){if(gn(_))return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Kn(_)),In(_)}function Zn(_,S,W){var q=_.displayName;if(q)return q;var be=S.displayName||S.name||"";return be!==""?W+"("+be+")":W}function Ln(_){return _.displayName||"Context"}function tt(_){if(_==null)return null;if(typeof _.tag=="number"&&we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof _=="function")return _.displayName||_.name||null;if(typeof _=="string")return _;switch(_){case h:return"Fragment";case u:return"Portal";case y:return"Profiler";case p:return"StrictMode";case Y:return"Suspense";case N:return"SuspenseList"}if(typeof _=="object")switch(_.$$typeof){case I:var S=_;return Ln(S)+".Consumer";case d:var W=_;return Ln(W._context)+".Provider";case E:return Zn(_,_.render,"ForwardRef");case F:var q=_.displayName||null;return q!==null?q:tt(_.type)||"Memo";case A:{var be=_,ot=be._payload,Le=be._init;try{return tt(Le(ot))}catch{return null}}}return null}var se=Object.prototype.hasOwnProperty,qe={key:!0,ref:!0,__self:!0,__source:!0},st,_t,We;We={};function jt(_){if(se.call(_,"ref")){var S=Object.getOwnPropertyDescriptor(_,"ref").get;if(S&&S.isReactWarning)return!1}return _.ref!==void 0}function Ut(_){if(se.call(_,"key")){var S=Object.getOwnPropertyDescriptor(_,"key").get;if(S&&S.isReactWarning)return!1}return _.key!==void 0}function Ht(_,S){var W=function(){st||(st=!0,we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",S))};W.isReactWarning=!0,Object.defineProperty(_,"key",{get:W,configurable:!0})}function ut(_,S){var W=function(){_t||(_t=!0,we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",S))};W.isReactWarning=!0,Object.defineProperty(_,"ref",{get:W,configurable:!0})}function Ge(_){if(typeof _.ref=="string"&&De.current&&_.__self&&De.current.stateNode!==_.__self){var S=tt(De.current.type);We[S]||(we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S,_.ref),We[S]=!0)}}var $=function(_,S,W,q,be,ot,Le){var Ot={$$typeof:l,type:_,key:S,ref:W,props:Le,_owner:ot};return Ot._store={},Object.defineProperty(Ot._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Ot,"_self",{configurable:!1,enumerable:!1,writable:!1,value:q}),Object.defineProperty(Ot,"_source",{configurable:!1,enumerable:!1,writable:!1,value:be}),Object.freeze&&(Object.freeze(Ot.props),Object.freeze(Ot)),Ot};function j(_,S,W){var q,be={},ot=null,Le=null,Ot=null,Yt=null;if(S!=null){jt(S)&&(Le=S.ref,Ge(S)),Ut(S)&&(yn(S.key),ot=""+S.key),Ot=S.__self===void 0?null:S.__self,Yt=S.__source===void 0?null:S.__source;for(q in S)se.call(S,q)&&!qe.hasOwnProperty(q)&&(be[q]=S[q])}var Qt=arguments.length-2;if(Qt===1)be.children=W;else if(Qt>1){for(var hn=Array(Qt),pn=0;pn<Qt;pn++)hn[pn]=arguments[pn+2];Object.freeze&&Object.freeze(hn),be.children=hn}if(_&&_.defaultProps){var wn=_.defaultProps;for(q in wn)be[q]===void 0&&(be[q]=wn[q])}if(ot||Le){var Qn=typeof _=="function"?_.displayName||_.name||"Unknown":_;ot&&Ht(be,Qn),Le&&ut(be,Qn)}return $(_,ot,Le,Ot,Yt,De.current,be)}function O(_,S){var W=$(_.type,S,_.ref,_._self,_._source,_._owner,_.props);return W}function B(_,S,W){if(_==null)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+_+".");var q,be=Et({},_.props),ot=_.key,Le=_.ref,Ot=_._self,Yt=_._source,Qt=_._owner;if(S!=null){jt(S)&&(Le=S.ref,Qt=De.current),Ut(S)&&(yn(S.key),ot=""+S.key);var hn;_.type&&_.type.defaultProps&&(hn=_.type.defaultProps);for(q in S)se.call(S,q)&&!qe.hasOwnProperty(q)&&(S[q]===void 0&&hn!==void 0?be[q]=hn[q]:be[q]=S[q])}var pn=arguments.length-2;if(pn===1)be.children=W;else if(pn>1){for(var wn=Array(pn),Qn=0;Qn<pn;Qn++)wn[Qn]=arguments[Qn+2];be.children=wn}return $(_.type,ot,Le,Ot,Yt,Qt,be)}function ae(_){return typeof _=="object"&&_!==null&&_.$$typeof===l}var ve=".",te=":";function Me(_){var S=/[=:]/g,W={"=":"=0",":":"=2"},q=_.replace(S,function(be){return W[be]});return"$"+q}var ze=!1,Ct=/\/+/g;function it(_){return _.replace(Ct,"$&/")}function Oe(_,S){return typeof _=="object"&&_!==null&&_.key!=null?(yn(_.key),Me(""+_.key)):S.toString(36)}function ct(_,S,W,q,be){var ot=typeof _;(ot==="undefined"||ot==="boolean")&&(_=null);var Le=!1;if(_===null)Le=!0;else switch(ot){case"string":case"number":Le=!0;break;case"object":switch(_.$$typeof){case l:case u:Le=!0}}if(Le){var Ot=_,Yt=be(Ot),Qt=q===""?ve+Oe(Ot,0):q;if(En(Yt)){var hn="";Qt!=null&&(hn=it(Qt)+"/"),ct(Yt,S,hn,"",function(ci){return ci})}else Yt!=null&&(ae(Yt)&&(Yt.key&&(!Ot||Ot.key!==Yt.key)&&yn(Yt.key),Yt=O(Yt,W+(Yt.key&&(!Ot||Ot.key!==Yt.key)?it(""+Yt.key)+"/":"")+Qt)),S.push(Yt));return 1}var pn,wn,Qn=0,nr=q===""?ve:q+te;if(En(_))for(var si=0;si<_.length;si++)pn=_[si],wn=nr+Oe(pn,si),Qn+=ct(pn,S,W,wn,be);else{var ur=Q(_);if(typeof ur=="function"){var Bi=_;ur===Bi.entries&&(ze||He("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ze=!0);for(var _l=ur.call(Bi),zi,ui=0;!(zi=_l.next()).done;)pn=zi.value,wn=nr+Oe(pn,ui++),Qn+=ct(pn,S,W,wn,be)}else if(ot==="object"){var at=String(_);throw new Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}}return Qn}function Ye(_,S,W){if(_==null)return _;var q=[],be=0;return ct(_,q,"","",function(ot){return S.call(W,ot,be++)}),q}function xt(_){var S=0;return Ye(_,function(){S++}),S}function Pe(_,S,W){Ye(_,function(){S.apply(this,arguments)},W)}function nn(_){return Ye(_,function(S){return S})||[]}function qt(_){if(!ae(_))throw new Error("React.Children.only expected to receive a single React element child.");return _}function Lt(_){var S={$$typeof:I,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};S.Provider={$$typeof:d,_context:S};var W=!1,q=!1,be=!1;{var ot={$$typeof:I,_context:S};Object.defineProperties(ot,{Provider:{get:function(){return q||(q=!0,we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),S.Provider},set:function(Le){S.Provider=Le}},_currentValue:{get:function(){return S._currentValue},set:function(Le){S._currentValue=Le}},_currentValue2:{get:function(){return S._currentValue2},set:function(Le){S._currentValue2=Le}},_threadCount:{get:function(){return S._threadCount},set:function(Le){S._threadCount=Le}},Consumer:{get:function(){return W||(W=!0,we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),S.Consumer}},displayName:{get:function(){return S.displayName},set:function(Le){be||(He("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",Le),be=!0)}}}),S.Consumer=ot}return S._currentRenderer=null,S._currentRenderer2=null,S}var Ft=-1,lt=0,fn=1,Jn=2;function xr(_){if(_._status===Ft){var S=_._result,W=S();if(W.then(function(ot){if(_._status===lt||_._status===Ft){var Le=_;Le._status=fn,Le._result=ot}},function(ot){if(_._status===lt||_._status===Ft){var Le=_;Le._status=Jn,Le._result=ot}}),_._status===Ft){var q=_;q._status=lt,q._result=W}}if(_._status===fn){var be=_._result;return be===void 0&&we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,be),"default"in be||we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,be),be.default}else throw _._result}function _r(_){var S={_status:Ft,_result:_},W={$$typeof:A,_payload:S,_init:xr};{var q,be;Object.defineProperties(W,{defaultProps:{configurable:!0,get:function(){return q},set:function(ot){we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),q=ot,Object.defineProperty(W,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return be},set:function(ot){we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),be=ot,Object.defineProperty(W,"propTypes",{enumerable:!0})}}})}return W}function Vn(_){_!=null&&_.$$typeof===F?we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof _!="function"?we("forwardRef requires a render function but was given %s.",_===null?"null":typeof _):_.length!==0&&_.length!==2&&we("forwardRef render functions accept exactly two parameters: props and ref. %s",_.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),_!=null&&(_.defaultProps!=null||_.propTypes!=null)&&we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var S={$$typeof:E,render:_};{var W;Object.defineProperty(S,"displayName",{enumerable:!1,configurable:!0,get:function(){return W},set:function(q){W=q,!_.name&&!_.displayName&&(_.displayName=q)}})}return S}var wr;wr=Symbol.for("react.module.reference");function Bo(_){return!!(typeof _=="string"||typeof _=="function"||_===h||_===y||dt||_===p||_===Y||_===N||Je||_===ee||Kt||vt||gt||typeof _=="object"&&_!==null&&(_.$$typeof===A||_.$$typeof===F||_.$$typeof===d||_.$$typeof===I||_.$$typeof===E||_.$$typeof===wr||_.getModuleId!==void 0))}function On(_,S){Bo(_)||we("memo: The first argument must be a component. Instead received: %s",_===null?"null":typeof _);var W={$$typeof:F,type:_,compare:S===void 0?null:S};{var q;Object.defineProperty(W,"displayName",{enumerable:!1,configurable:!0,get:function(){return q},set:function(be){q=be,!_.name&&!_.displayName&&(_.displayName=be)}})}return W}function k(){var _=K.current;return _===null&&we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),_}function le(_){var S=k();if(_._context!==void 0){var W=_._context;W.Consumer===_?we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):W.Provider===_&&we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return S.useContext(_)}function Ce(_){var S=k();return S.useState(_)}function fe(_,S,W){var q=k();return q.useReducer(_,S,W)}function kt(_){var S=k();return S.useRef(_)}function Zt(_,S){var W=k();return W.useEffect(_,S)}function ht(_,S){var W=k();return W.useInsertionEffect(_,S)}function Nt(_,S){var W=k();return W.useLayoutEffect(_,S)}function Cr(_,S){var W=k();return W.useCallback(_,S)}function Nn(_,S){var W=k();return W.useMemo(_,S)}function Xn(_,S,W){var q=k();return q.useImperativeHandle(_,S,W)}function Wr(_,S){{var W=k();return W.useDebugValue(_,S)}}function ta(){var _=k();return _.useTransition()}function uo(_){var S=k();return S.useDeferredValue(_)}function Dr(){var _=k();return _.useId()}function co(_,S,W){var q=k();return q.useSyncExternalStore(_,S,W)}var Rt=0,yo,Gr,Ia,Ni,ha,pa,_a;function Kr(){}Kr.__reactDisabledLog=!0;function Ai(){{if(Rt===0){yo=console.log,Gr=console.info,Ia=console.warn,Ni=console.error,ha=console.group,pa=console.groupCollapsed,_a=console.groupEnd;var _={configurable:!0,enumerable:!0,value:Kr,writable:!0};Object.defineProperties(console,{info:_,log:_,warn:_,error:_,group:_,groupCollapsed:_,groupEnd:_})}Rt++}}function fo(){{if(Rt--,Rt===0){var _={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Et({},_,{value:yo}),info:Et({},_,{value:Gr}),warn:Et({},_,{value:Ia}),error:Et({},_,{value:Ni}),group:Et({},_,{value:ha}),groupCollapsed:Et({},_,{value:pa}),groupEnd:Et({},_,{value:_a})})}Rt<0&&we("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var fl=Re.ReactCurrentDispatcher,ri;function ma(_,S,W){{if(ri===void 0)try{throw Error()}catch(be){var q=be.stack.trim().match(/\n( *(at )?)/);ri=q&&q[1]||""}return`
`+ri+_}}var zo=!1,na;{var hl=typeof WeakMap=="function"?WeakMap:Map;na=new hl}function su(_,S){if(!_||zo)return"";{var W=na.get(_);if(W!==void 0)return W}var q;zo=!0;var be=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var ot;ot=fl.current,fl.current=null,Ai();try{if(S){var Le=function(){throw Error()};if(Object.defineProperty(Le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Le,[])}catch(nr){q=nr}Reflect.construct(_,[],Le)}else{try{Le.call()}catch(nr){q=nr}_.call(Le.prototype)}}else{try{throw Error()}catch(nr){q=nr}_()}}catch(nr){if(nr&&q&&typeof nr.stack=="string"){for(var Ot=nr.stack.split(`
`),Yt=q.stack.split(`
`),Qt=Ot.length-1,hn=Yt.length-1;Qt>=1&&hn>=0&&Ot[Qt]!==Yt[hn];)hn--;for(;Qt>=1&&hn>=0;Qt--,hn--)if(Ot[Qt]!==Yt[hn]){if(Qt!==1||hn!==1)do if(Qt--,hn--,hn<0||Ot[Qt]!==Yt[hn]){var pn=`
`+Ot[Qt].replace(" at new "," at ");return _.displayName&&pn.includes("<anonymous>")&&(pn=pn.replace("<anonymous>",_.displayName)),typeof _=="function"&&na.set(_,pn),pn}while(Qt>=1&&hn>=0);break}}}finally{zo=!1,fl.current=ot,fo(),Error.prepareStackTrace=be}var wn=_?_.displayName||_.name:"",Qn=wn?ma(wn):"";return typeof _=="function"&&na.set(_,Qn),Qn}function ns(_,S,W){return su(_,!1)}function Jc(_){var S=_.prototype;return!!(S&&S.isReactComponent)}function oi(_,S,W){if(_==null)return"";if(typeof _=="function")return su(_,Jc(_));if(typeof _=="string")return ma(_);switch(_){case Y:return ma("Suspense");case N:return ma("SuspenseList")}if(typeof _=="object")switch(_.$$typeof){case E:return ns(_.render);case F:return oi(_.type,S,W);case A:{var q=_,be=q._payload,ot=q._init;try{return oi(ot(be),S,W)}catch{}}}return""}var uu={},ai=Re.ReactDebugCurrentFrame;function ii(_){if(_){var S=_._owner,W=oi(_.type,_._source,S?S.type:null);ai.setExtraStackFrame(W)}else ai.setExtraStackFrame(null)}function ga(_,S,W,q,be){{var ot=Function.call.bind(se);for(var Le in _)if(ot(_,Le)){var Ot=void 0;try{if(typeof _[Le]!="function"){var Yt=Error((q||"React class")+": "+W+" type `"+Le+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof _[Le]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Yt.name="Invariant Violation",Yt}Ot=_[Le](S,Le,q,W,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Qt){Ot=Qt}Ot&&!(Ot instanceof Error)&&(ii(be),we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",q||"React class",W,Le,typeof Ot),ii(null)),Ot instanceof Error&&!(Ot.message in uu)&&(uu[Ot.message]=!0,ii(be),we("Failed %s type: %s",W,Ot.message),ii(null))}}}function An(_){if(_){var S=_._owner,W=oi(_.type,_._source,S?S.type:null);ye(W)}else ye(null)}var Uo;Uo=!1;function Xt(){if(De.current){var _=tt(De.current.type);if(_)return`

Check the render method of \``+_+"`."}return""}function Lr(_){if(_!==void 0){var S=_.fileName.replace(/^.*[\\\/]/,""),W=_.lineNumber;return`

Check your code at `+S+":"+W+"."}return""}function rs(_){return _!=null?Lr(_.__source):""}var Bt={};function os(_){var S=Xt();if(!S){var W=typeof _=="string"?_:_.displayName||_.name;W&&(S=`

Check the top-level render call using <`+W+">.")}return S}function mt(_,S){if(!(!_._store||_._store.validated||_.key!=null)){_._store.validated=!0;var W=os(S);if(!Bt[W]){Bt[W]=!0;var q="";_&&_._owner&&_._owner!==De.current&&(q=" It was passed a child from "+tt(_._owner.type)+"."),An(_),we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',W,q),An(null)}}}function Ba(_,S){if(typeof _=="object"){if(En(_))for(var W=0;W<_.length;W++){var q=_[W];ae(q)&&mt(q,S)}else if(ae(_))_._store&&(_._store.validated=!0);else if(_){var be=Q(_);if(typeof be=="function"&&be!==_.entries)for(var ot=be.call(_),Le;!(Le=ot.next()).done;)ae(Le.value)&&mt(Le.value,S)}}}function Ar(_){{var S=_.type;if(S==null||typeof S=="string")return;var W;if(typeof S=="function")W=S.propTypes;else if(typeof S=="object"&&(S.$$typeof===E||S.$$typeof===F))W=S.propTypes;else return;if(W){var q=tt(S);ga(W,_.props,"prop",q,_)}else if(S.PropTypes!==void 0&&!Uo){Uo=!0;var be=tt(S);we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",be||"Unknown")}typeof S.getDefaultProps=="function"&&!S.getDefaultProps.isReactClassApproved&&we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function as(_){{for(var S=Object.keys(_.props),W=0;W<S.length;W++){var q=S[W];if(q!=="children"&&q!=="key"){An(_),we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",q),An(null);break}}_.ref!==null&&(An(_),we("Invalid attribute `ref` supplied to `React.Fragment`."),An(null))}}function kr(_,S,W){var q=Bo(_);if(!q){var be="";(_===void 0||typeof _=="object"&&_!==null&&Object.keys(_).length===0)&&(be+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var ot=rs(S);ot?be+=ot:be+=Xt();var Le;_===null?Le="null":En(_)?Le="array":_!==void 0&&_.$$typeof===l?(Le="<"+(tt(_.type)||"Unknown")+" />",be=" Did you accidentally export a JSX literal instead of a component?"):Le=typeof _,we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Le,be)}var Ot=j.apply(this,arguments);if(Ot==null)return Ot;if(q)for(var Yt=2;Yt<arguments.length;Yt++)Ba(arguments[Yt],_);return _===h?as(Ot):Ar(Ot),Ot}var Fn=!1;function cu(_){var S=kr.bind(null,_);return S.type=_,Fn||(Fn=!0,He("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(S,"type",{enumerable:!1,get:function(){return He("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:_}),_}}),S}function vo(_,S,W){for(var q=B.apply(this,arguments),be=2;be<arguments.length;be++)Ba(arguments[be],q.type);return Ar(q),q}function mr(_,S){var W=_e.transition;_e.transition={};var q=_e.transition;_e.transition._updatedFibers=new Set;try{_()}finally{if(_e.transition=W,W===null&&q._updatedFibers){var be=q._updatedFibers.size;be>10&&He("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),q._updatedFibers.clear()}}}var xn=!1,za=null;function $i(_){if(za===null)try{var S=("require"+Math.random()).slice(0,7),W=th&&th[S];za=W.call(th,"timers").setImmediate}catch{za=function(be){xn===!1&&(xn=!0,typeof MessageChannel>"u"&&we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var ot=new MessageChannel;ot.port1.onmessage=be,ot.port2.postMessage(void 0)}}return za(_)}var Sr=0,Ho=!1;function Bn(_){{var S=Sr;Sr++,ge.current===null&&(ge.current=[]);var W=ge.isBatchingLegacy,q;try{if(ge.isBatchingLegacy=!0,q=_(),!W&&ge.didScheduleLegacyUpdate){var be=ge.current;be!==null&&(ge.didScheduleLegacyUpdate=!1,Po(be))}}catch(wn){throw Ua(S),wn}finally{ge.isBatchingLegacy=W}if(q!==null&&typeof q=="object"&&typeof q.then=="function"){var ot=q,Le=!1,Ot={then:function(wn,Qn){Le=!0,ot.then(function(nr){Ua(S),Sr===0?Fo(nr,wn,Qn):wn(nr)},function(nr){Ua(S),Qn(nr)})}};return!Ho&&typeof Promise<"u"&&Promise.resolve().then(function(){}).then(function(){Le||(Ho=!0,we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),Ot}else{var Yt=q;if(Ua(S),Sr===0){var Qt=ge.current;Qt!==null&&(Po(Qt),ge.current=null);var hn={then:function(wn,Qn){ge.current===null?(ge.current=[],Fo(Yt,wn,Qn)):wn(Yt)}};return hn}else{var pn={then:function(wn,Qn){wn(Yt)}};return pn}}}}function Ua(_){_!==Sr-1&&we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),Sr=_}function Fo(_,S,W){{var q=ge.current;if(q!==null)try{Po(q),$i(function(){q.length===0?(ge.current=null,S(_)):Fo(_,S,W)})}catch(be){W(be)}else S(_)}}var ya=!1;function Po(_){if(!ya){ya=!0;var S=0;try{for(;S<_.length;S++){var W=_[S];do W=W(!0);while(W!==null)}_.length=0}catch(q){throw _=_.slice(S+1),q}finally{ya=!1}}}var li=kr,Ii=vo,pl=cu,Ha={map:Ye,forEach:Pe,count:xt,toArray:nn,only:qt};an.Children=Ha,an.Component=bn,an.Fragment=h,an.Profiler=y,an.PureComponent=lr,an.StrictMode=p,an.Suspense=Y,an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Re,an.act=Bn,an.cloneElement=Ii,an.createContext=Lt,an.createElement=li,an.createFactory=pl,an.createRef=tr,an.forwardRef=Vn,an.isValidElement=ae,an.lazy=_r,an.memo=On,an.startTransition=mr,an.unstable_act=Bn,an.useCallback=Cr,an.useContext=le,an.useDebugValue=Wr,an.useDeferredValue=uo,an.useEffect=Zt,an.useId=Dr,an.useImperativeHandle=Xn,an.useInsertionEffect=ht,an.useLayoutEffect=Nt,an.useMemo=Nn,an.useReducer=fe,an.useRef=kt,an.useState=Ce,an.useSyncExternalStore=co,an.useTransition=ta,an.version=a,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()});var fa=Oi((fE,j5)=>{"use strict";j5.exports=P5()});var W5=Oi(jn=>{"use strict";(function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var a=!1,l=!1,u=5;function h(O,B){var ae=O.length;O.push(B),d(O,B,ae)}function p(O){return O.length===0?null:O[0]}function y(O){if(O.length===0)return null;var B=O[0],ae=O.pop();return ae!==B&&(O[0]=ae,I(O,ae,0)),B}function d(O,B,ae){for(var ve=ae;ve>0;){var te=ve-1>>>1,Me=O[te];if(E(Me,B)>0)O[te]=B,O[ve]=Me,ve=te;else return}}function I(O,B,ae){for(var ve=ae,te=O.length,Me=te>>>1;ve<Me;){var ze=(ve+1)*2-1,Ct=O[ze],it=ze+1,Oe=O[it];if(E(Ct,B)<0)it<te&&E(Oe,Ct)<0?(O[ve]=Oe,O[it]=B,ve=it):(O[ve]=Ct,O[ze]=B,ve=ze);else if(it<te&&E(Oe,B)<0)O[ve]=Oe,O[it]=B,ve=it;else return}}function E(O,B){var ae=O.sortIndex-B.sortIndex;return ae!==0?ae:O.id-B.id}var Y=1,N=2,F=3,A=4,ee=5;function P(O,B){}var pe=typeof performance=="object"&&typeof performance.now=="function";if(pe){var Q=performance;jn.unstable_now=function(){return Q.now()}}else{var K=Date,_e=K.now();jn.unstable_now=function(){return K.now()-_e}}var ge=1073741823,De=-1,Qe=250,Dt=5e3,ye=1e4,Kt=ge,vt=[],gt=[],Je=1,dt=null,Re=F,He=!1,we=!1,rt=!1,Wt=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,et=typeof setImmediate<"u"?setImmediate:null,Et=typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0?navigator.scheduling.isInputPending.bind(navigator.scheduling):null;function sn(O){for(var B=p(gt);B!==null;){if(B.callback===null)y(gt);else if(B.startTime<=O)y(gt),B.sortIndex=B.expirationTime,h(vt,B);else return;B=p(gt)}}function bn(O){if(rt=!1,sn(O),!we)if(p(vt)!==null)we=!0,Ht(Sn);else{var B=p(gt);B!==null&&ut(bn,B.startTime-O)}}function Sn(O,B){we=!1,rt&&(rt=!1,Ge()),He=!0;var ae=Re;try{if(l)try{return qr(O,B)}catch(te){if(dt!==null){var ve=jn.unstable_now();dt.isQueued=!1}throw te}else return qr(O,B)}finally{dt=null,Re=ae,He=!1}}function qr(O,B){var ae=B;for(sn(ae),dt=p(vt);dt!==null&&!a&&!(dt.expirationTime>ae&&(!O||se()));){var ve=dt.callback;if(typeof ve=="function"){dt.callback=null,Re=dt.priorityLevel;var te=dt.expirationTime<=ae,Me=ve(te);ae=jn.unstable_now(),typeof Me=="function"?dt.callback=Me:dt===p(vt)&&y(vt),sn(ae)}else y(vt);dt=p(vt)}if(dt!==null)return!0;var ze=p(gt);return ze!==null&&ut(bn,ze.startTime-ae),!1}function ir(O,B){switch(O){case Y:case N:case F:case A:case ee:break;default:O=F}var ae=Re;Re=O;try{return B()}finally{Re=ae}}function br(O){var B;switch(Re){case Y:case N:case F:B=F;break;default:B=Re;break}var ae=Re;Re=B;try{return O()}finally{Re=ae}}function lr(O){var B=Re;return function(){var ae=Re;Re=B;try{return O.apply(this,arguments)}finally{Re=ae}}}function sr(O,B,ae){var ve=jn.unstable_now(),te;if(typeof ae=="object"&&ae!==null){var Me=ae.delay;typeof Me=="number"&&Me>0?te=ve+Me:te=ve}else te=ve;var ze;switch(O){case Y:ze=De;break;case N:ze=Qe;break;case ee:ze=Kt;break;case A:ze=ye;break;case F:default:ze=Dt;break}var Ct=te+ze,it={id:Je++,callback:B,priorityLevel:O,startTime:te,expirationTime:Ct,sortIndex:-1};return te>ve?(it.sortIndex=te,h(gt,it),p(vt)===null&&it===p(gt)&&(rt?Ge():rt=!0,ut(bn,te-ve))):(it.sortIndex=Ct,h(vt,it),!we&&!He&&(we=!0,Ht(Sn))),it}function tr(){}function Mr(){!we&&!He&&(we=!0,Ht(Sn))}function En(){return p(vt)}function Kn(O){O.callback=null}function gn(){return Re}var In=!1,yn=null,Zn=-1,Ln=u,tt=-1;function se(){var O=jn.unstable_now()-tt;return!(O<Ln)}function qe(){}function st(O){if(O<0||O>125){console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}O>0?Ln=Math.floor(1e3/O):Ln=u}var _t=function(){if(yn!==null){var O=jn.unstable_now();tt=O;var B=!0,ae=!0;try{ae=yn(B,O)}finally{ae?We():(In=!1,yn=null)}}else In=!1},We;if(typeof et=="function")We=function(){et(_t)};else if(typeof MessageChannel<"u"){var jt=new MessageChannel,Ut=jt.port2;jt.port1.onmessage=_t,We=function(){Ut.postMessage(null)}}else We=function(){Wt(_t,0)};function Ht(O){yn=O,In||(In=!0,We())}function ut(O,B){Zn=Wt(function(){O(jn.unstable_now())},B)}function Ge(){de(Zn),Zn=-1}var $=qe,j=null;jn.unstable_IdlePriority=ee,jn.unstable_ImmediatePriority=Y,jn.unstable_LowPriority=A,jn.unstable_NormalPriority=F,jn.unstable_Profiling=j,jn.unstable_UserBlockingPriority=N,jn.unstable_cancelCallback=Kn,jn.unstable_continueExecution=Mr,jn.unstable_forceFrameRate=st,jn.unstable_getCurrentPriorityLevel=gn,jn.unstable_getFirstCallbackNode=En,jn.unstable_next=br,jn.unstable_pauseExecution=tr,jn.unstable_requestPaint=$,jn.unstable_runWithPriority=ir,jn.unstable_scheduleCallback=sr,jn.unstable_shouldYield=se,jn.unstable_wrapCallback=lr,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()});var V5=Oi((pE,Y5)=>{"use strict";Y5.exports=W5()});var X5=Oi(Jo=>{"use strict";(function(){"use strict";typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var a=fa(),l=V5(),u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,h=!1;function p(e){h=e}function y(e){if(!h){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];I("warn",e,n)}}function d(e){if(!h){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];I("error",e,n)}}function I(e,t,n){{var r=u.ReactDebugCurrentFrame,o=r.getStackAddendum();o!==""&&(t+="%s",n=n.concat([o]));var i=n.map(function(s){return String(s)});i.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,i)}}var E=0,Y=1,N=2,F=3,A=4,ee=5,P=6,pe=7,Q=8,K=9,_e=10,ge=11,De=12,Qe=13,Dt=14,ye=15,Kt=16,vt=17,gt=18,Je=19,dt=21,Re=22,He=23,we=24,rt=25,Wt=!0,de=!1,et=!1,Et=!1,sn=!1,bn=!0,Sn=!1,qr=!0,ir=!0,br=!0,lr=!0,sr=new Set,tr={},Mr={};function En(e,t){Kn(e,t),Kn(e+"Capture",t)}function Kn(e,t){tr[e]&&d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),tr[e]=t;{var n=e.toLowerCase();Mr[n]=e,e==="onDoubleClick"&&(Mr.ondblclick=e)}for(var r=0;r<t.length;r++)sr.add(t[r])}var gn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",In=Object.prototype.hasOwnProperty;function yn(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Zn(e){try{return Ln(e),!1}catch{return!0}}function Ln(e){return""+e}function tt(e,t){if(Zn(e))return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",t,yn(e)),Ln(e)}function se(e){if(Zn(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",yn(e)),Ln(e)}function qe(e,t){if(Zn(e))return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.",t,yn(e)),Ln(e)}function st(e,t){if(Zn(e))return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",t,yn(e)),Ln(e)}function _t(e){if(Zn(e))return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",yn(e)),Ln(e)}function We(e){if(Zn(e))return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",yn(e)),Ln(e)}var jt=0,Ut=1,Ht=2,ut=3,Ge=4,$=5,j=6,O=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",B=O+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",ae=new RegExp("^["+O+"]["+B+"]*$"),ve={},te={};function Me(e){return In.call(te,e)?!0:In.call(ve,e)?!1:ae.test(e)?(te[e]=!0,!0):(ve[e]=!0,d("Invalid attribute name: `%s`",e),!1)}function ze(e,t,n){return t!==null?t.type===jt:n?!1:e.length>2&&(e[0]==="o"||e[0]==="O")&&(e[1]==="n"||e[1]==="N")}function Ct(e,t,n,r){if(n!==null&&n.type===jt)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":{if(r)return!1;if(n!==null)return!n.acceptsBooleans;var o=e.toLowerCase().slice(0,5);return o!=="data-"&&o!=="aria-"}default:return!1}}function it(e,t,n,r){if(t===null||typeof t>"u"||Ct(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case ut:return!t;case Ge:return t===!1;case $:return isNaN(t);case j:return isNaN(t)||t<1}return!1}function Oe(e){return Ye.hasOwnProperty(e)?Ye[e]:null}function ct(e,t,n,r,o,i,s){this.acceptsBooleans=t===Ht||t===ut||t===Ge,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var Ye={},xt=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];xt.forEach(function(e){Ye[e]=new ct(e,jt,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],n=e[1];Ye[t]=new ct(t,Ut,!1,n,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ye[e]=new ct(e,Ht,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ye[e]=new ct(e,Ht,!1,e,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){Ye[e]=new ct(e,ut,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Ye[e]=new ct(e,ut,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Ye[e]=new ct(e,Ge,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Ye[e]=new ct(e,j,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Ye[e]=new ct(e,$,!1,e.toLowerCase(),null,!1,!1)});var Pe=/[\-\:]([a-z])/g,nn=function(e){return e[1].toUpperCase()};["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(function(e){var t=e.replace(Pe,nn);Ye[t]=new ct(t,Ut,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(function(e){var t=e.replace(Pe,nn);Ye[t]=new ct(t,Ut,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Pe,nn);Ye[t]=new ct(t,Ut,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Ye[e]=new ct(e,Ut,!1,e.toLowerCase(),null,!1,!1)});var qt="xlinkHref";Ye[qt]=new ct("xlinkHref",Ut,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Ye[e]=new ct(e,Ut,!1,e.toLowerCase(),null,!0,!0)});var Lt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,Ft=!1;function lt(e){!Ft&&Lt.test(e)&&(Ft=!0,d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}function fn(e,t,n,r){if(r.mustUseProperty){var o=r.propertyName;return e[o]}else{tt(n,t),r.sanitizeURL&&lt(""+n);var i=r.attributeName,s=null;if(r.type===Ge){if(e.hasAttribute(i)){var c=e.getAttribute(i);return c===""?!0:it(t,n,r,!1)?c:c===""+n?n:c}}else if(e.hasAttribute(i)){if(it(t,n,r,!1))return e.getAttribute(i);if(r.type===ut)return n;s=e.getAttribute(i)}return it(t,n,r,!1)?s===null?n:s:s===""+n?n:s}}function Jn(e,t,n,r){{if(!Me(t))return;if(!e.hasAttribute(t))return n===void 0?void 0:null;var o=e.getAttribute(t);return tt(n,t),o===""+n?n:o}}function xr(e,t,n,r){var o=Oe(t);if(!ze(t,o,r)){if(it(t,n,o,r)&&(n=null),r||o===null){if(Me(t)){var i=t;n===null?e.removeAttribute(i):(tt(n,t),e.setAttribute(i,""+n))}return}var s=o.mustUseProperty;if(s){var c=o.propertyName;if(n===null){var f=o.type;e[c]=f===ut?!1:""}else e[c]=n;return}var v=o.attributeName,x=o.attributeNamespace;if(n===null)e.removeAttribute(v);else{var L=o.type,D;L===ut||L===Ge&&n===!0?D="":(tt(n,v),D=""+n,o.sanitizeURL&&lt(D.toString())),x?e.setAttributeNS(x,v,D):e.setAttribute(v,D)}}}var _r=Symbol.for("react.element"),Vn=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Bo=Symbol.for("react.strict_mode"),On=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),le=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),kt=Symbol.for("react.suspense_list"),Zt=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Nt=Symbol.for("react.scope"),Cr=Symbol.for("react.debug_trace_mode"),Nn=Symbol.for("react.offscreen"),Xn=Symbol.for("react.legacy_hidden"),Wr=Symbol.for("react.cache"),ta=Symbol.for("react.tracing_marker"),uo=Symbol.iterator,Dr="@@iterator";function co(e){if(e===null||typeof e!="object")return null;var t=uo&&e[uo]||e[Dr];return typeof t=="function"?t:null}var Rt=Object.assign,yo=0,Gr,Ia,Ni,ha,pa,_a,Kr;function Ai(){}Ai.__reactDisabledLog=!0;function fo(){{if(yo===0){Gr=console.log,Ia=console.info,Ni=console.warn,ha=console.error,pa=console.group,_a=console.groupCollapsed,Kr=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ai,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}yo++}}function fl(){{if(yo--,yo===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Rt({},e,{value:Gr}),info:Rt({},e,{value:Ia}),warn:Rt({},e,{value:Ni}),error:Rt({},e,{value:ha}),group:Rt({},e,{value:pa}),groupCollapsed:Rt({},e,{value:_a}),groupEnd:Rt({},e,{value:Kr})})}yo<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ri=u.ReactCurrentDispatcher,ma;function zo(e,t,n){{if(ma===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ma=r&&r[1]||""}return`
`+ma+e}}var na=!1,hl;{var su=typeof WeakMap=="function"?WeakMap:Map;hl=new su}function ns(e,t){if(!e||na)return"";{var n=hl.get(e);if(n!==void 0)return n}var r;na=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var i;i=ri.current,ri.current=null,fo();try{if(t){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(X){r=X}Reflect.construct(e,[],s)}else{try{s.call()}catch(X){r=X}e.call(s.prototype)}}else{try{throw Error()}catch(X){r=X}e()}}catch(X){if(X&&r&&typeof X.stack=="string"){for(var c=X.stack.split(`
`),f=r.stack.split(`
`),v=c.length-1,x=f.length-1;v>=1&&x>=0&&c[v]!==f[x];)x--;for(;v>=1&&x>=0;v--,x--)if(c[v]!==f[x]){if(v!==1||x!==1)do if(v--,x--,x<0||c[v]!==f[x]){var L=`
`+c[v].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),typeof e=="function"&&hl.set(e,L),L}while(v>=1&&x>=0);break}}}finally{na=!1,ri.current=i,fl(),Error.prepareStackTrace=o}var D=e?e.displayName||e.name:"",V=D?zo(D):"";return typeof e=="function"&&hl.set(e,V),V}function Jc(e,t,n){return ns(e,!0)}function oi(e,t,n){return ns(e,!1)}function uu(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ai(e,t,n){if(e==null)return"";if(typeof e=="function")return ns(e,uu(e));if(typeof e=="string")return zo(e);switch(e){case fe:return zo("Suspense");case kt:return zo("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case Ce:return oi(e.render);case Zt:return ai(e.type,t,n);case ht:{var r=e,o=r._payload,i=r._init;try{return ai(i(o),t,n)}catch{}}}return""}function ii(e){var t=e._debugOwner?e._debugOwner.type:null,n=e._debugSource;switch(e.tag){case ee:return zo(e.type);case Kt:return zo("Lazy");case Qe:return zo("Suspense");case Je:return zo("SuspenseList");case E:case N:case ye:return oi(e.type);case ge:return oi(e.type.render);case Y:return Jc(e.type);default:return""}}function ga(e){try{var t="",n=e;do t+=ii(n),n=n.return;while(n);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function An(e,t,n){var r=e.displayName;if(r)return r;var o=t.displayName||t.name||"";return o!==""?n+"("+o+")":n}function Uo(e){return e.displayName||"Context"}function Xt(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case Vn:return"Portal";case On:return"Profiler";case Bo:return"StrictMode";case fe:return"Suspense";case kt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:var t=e;return Uo(t)+".Consumer";case k:var n=e;return Uo(n._context)+".Provider";case Ce:return An(e,e.render,"ForwardRef");case Zt:var r=e.displayName||null;return r!==null?r:Xt(e.type)||"Memo";case ht:{var o=e,i=o._payload,s=o._init;try{return Xt(s(i))}catch{return null}}}return null}function Lr(e,t,n){var r=t.displayName||t.name||"";return e.displayName||(r!==""?n+"("+r+")":n)}function rs(e){return e.displayName||"Context"}function Bt(e){var t=e.tag,n=e.type;switch(t){case we:return"Cache";case K:var r=n;return rs(r)+".Consumer";case _e:var o=n;return rs(o._context)+".Provider";case gt:return"DehydratedFragment";case ge:return Lr(n,n.render,"ForwardRef");case pe:return"Fragment";case ee:return n;case A:return"Portal";case F:return"Root";case P:return"Text";case Kt:return Xt(n);case Q:return n===Bo?"StrictMode":"Mode";case Re:return"Offscreen";case De:return"Profiler";case dt:return"Scope";case Qe:return"Suspense";case Je:return"SuspenseList";case rt:return"TracingMarker";case Y:case E:case vt:case N:case Dt:case ye:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;break}return null}var os=u.ReactDebugCurrentFrame,mt=null,Ba=!1;function Ar(){{if(mt===null)return null;var e=mt._debugOwner;if(e!==null&&typeof e<"u")return Bt(e)}return null}function as(){return mt===null?"":ga(mt)}function kr(){os.getCurrentStack=null,mt=null,Ba=!1}function Fn(e){os.getCurrentStack=e===null?null:as,mt=e,Ba=!1}function cu(){return mt}function vo(e){Ba=e}function mr(e){return""+e}function xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return We(e),e;default:return""}}var za={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function $i(e,t){za[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function Sr(e){var t=e.type,n=e.nodeName;return n&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ho(e){return e._valueTracker}function Bn(e){e._valueTracker=null}function Ua(e){var t="";return e&&(Sr(e)?t=e.checked?"true":"false":t=e.value),t}function Fo(e){var t=Sr(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);We(e[t]);var r=""+e[t];if(!(e.hasOwnProperty(t)||typeof n>"u"||typeof n.get!="function"||typeof n.set!="function")){var o=n.get,i=n.set;Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(c){We(c),r=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable});var s={getValue:function(){return r},setValue:function(c){We(c),r=""+c},stopTracking:function(){Bn(e),delete e[t]}};return s}}function ya(e){Ho(e)||(e._valueTracker=Fo(e))}function Po(e){if(!e)return!1;var t=Ho(e);if(!t)return!0;var n=t.getValue(),r=Ua(e);return r!==n?(t.setValue(r),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ii=!1,pl=!1,Ha=!1,_=!1;function S(e){var t=e.type==="checkbox"||e.type==="radio";return t?e.checked!=null:e.value!=null}function W(e,t){var n=e,r=t.checked,o=Rt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??n._wrapperState.initialChecked});return o}function q(e,t){$i("input",t),t.checked!==void 0&&t.defaultChecked!==void 0&&!pl&&(d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",Ar()||"A component",t.type),pl=!0),t.value!==void 0&&t.defaultValue!==void 0&&!Ii&&(d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",Ar()||"A component",t.type),Ii=!0);var n=e,r=t.defaultValue==null?"":t.defaultValue;n._wrapperState={initialChecked:t.checked!=null?t.checked:t.defaultChecked,initialValue:xn(t.value!=null?t.value:r),controlled:S(t)}}function be(e,t){var n=e,r=t.checked;r!=null&&xr(n,"checked",r,!1)}function ot(e,t){var n=e;{var r=S(t);!n._wrapperState.controlled&&r&&!_&&(d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),_=!0),n._wrapperState.controlled&&!r&&!Ha&&(d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),Ha=!0)}be(e,t);var o=xn(t.value),i=t.type;if(o!=null)i==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=mr(o)):n.value!==mr(o)&&(n.value=mr(o));else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}t.hasOwnProperty("value")?Qt(n,t.type,o):t.hasOwnProperty("defaultValue")&&Qt(n,t.type,xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(n.defaultChecked=!!t.defaultChecked)}function Le(e,t,n){var r=e;if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type,i=o==="submit"||o==="reset";if(i&&(t.value===void 0||t.value===null))return;var s=mr(r._wrapperState.initialValue);n||s!==r.value&&(r.value=s),r.defaultValue=s}var c=r.name;c!==""&&(r.name=""),r.defaultChecked=!r.defaultChecked,r.defaultChecked=!!r._wrapperState.initialChecked,c!==""&&(r.name=c)}function Ot(e,t){var n=e;ot(n,t),Yt(n,t)}function Yt(e,t){var n=t.name;if(t.type==="radio"&&n!=null){for(var r=e;r.parentNode;)r=r.parentNode;tt(n,"name");for(var o=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),i=0;i<o.length;i++){var s=o[i];if(!(s===e||s.form!==e.form)){var c=Ud(s);if(!c)throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Po(s),ot(s,c)}}}}function Qt(e,t,n){(t!=="number"||li(e.ownerDocument)!==e)&&(n==null?e.defaultValue=mr(e._wrapperState.initialValue):e.defaultValue!==mr(n)&&(e.defaultValue=mr(n)))}var hn=!1,pn=!1,wn=!1;function Qn(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?a.Children.forEach(t.children,function(n){n!=null&&(typeof n=="string"||typeof n=="number"||pn||(pn=!0,d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):t.dangerouslySetInnerHTML!=null&&(wn||(wn=!0,d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))),t.selected!=null&&!hn&&(d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),hn=!0)}function nr(e,t){t.value!=null&&e.setAttribute("value",mr(xn(t.value)))}var si=Array.isArray;function ur(e){return si(e)}var Bi;Bi=!1;function _l(){var e=Ar();return e?`

Check the render method of \``+e+"`.":""}var zi=["value","defaultValue"];function ui(e){{$i("select",e);for(var t=0;t<zi.length;t++){var n=zi[t];if(e[n]!=null){var r=ur(e[n]);e.multiple&&!r?d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,_l()):!e.multiple&&r&&d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,_l())}}}}function at(e,t,n,r){var o=e.options;if(t){for(var i=n,s={},c=0;c<i.length;c++)s["$"+i[c]]=!0;for(var f=0;f<o.length;f++){var v=s.hasOwnProperty("$"+o[f].value);o[f].selected!==v&&(o[f].selected=v),v&&r&&(o[f].defaultSelected=!0)}}else{for(var x=mr(xn(n)),L=null,D=0;D<o.length;D++){if(o[D].value===x){o[D].selected=!0,r&&(o[D].defaultSelected=!0);return}L===null&&!o[D].disabled&&(L=o[D])}L!==null&&(L.selected=!0)}}function ci(e,t){return Rt({},t,{value:void 0})}function du(e,t){var n=e;ui(t),n._wrapperState={wasMultiple:!!t.multiple},t.value!==void 0&&t.defaultValue!==void 0&&!Bi&&(d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),Bi=!0)}function vh(e,t){var n=e;n.multiple=!!t.multiple;var r=t.value;r!=null?at(n,!!t.multiple,r,!1):t.defaultValue!=null&&at(n,!!t.multiple,t.defaultValue,!0)}function fu(e,t){var n=e,r=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!t.multiple;var o=t.value;o!=null?at(n,!!t.multiple,o,!1):r!==!!t.multiple&&(t.defaultValue!=null?at(n,!!t.multiple,t.defaultValue,!0):at(n,!!t.multiple,t.multiple?[]:"",!1))}function Ui(e,t){var n=e,r=t.value;r!=null&&at(n,!!t.multiple,r,!1)}var ml=!1;function is(e,t){var n=e;if(t.dangerouslySetInnerHTML!=null)throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");var r=Rt({},t,{value:void 0,defaultValue:void 0,children:mr(n._wrapperState.initialValue)});return r}function hu(e,t){var n=e;$i("textarea",t),t.value!==void 0&&t.defaultValue!==void 0&&!ml&&(d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",Ar()||"A component"),ml=!0);var r=t.value;if(r==null){var o=t.children,i=t.defaultValue;if(o!=null){d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");{if(i!=null)throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(ur(o)){if(o.length>1)throw new Error("<textarea> can only have at most one child.");o=o[0]}i=o}}i==null&&(i=""),r=i}n._wrapperState={initialValue:xn(r)}}function gl(e,t){var n=e,r=xn(t.value),o=xn(t.defaultValue);if(r!=null){var i=mr(r);i!==n.value&&(n.value=i),t.defaultValue==null&&n.defaultValue!==i&&(n.defaultValue=i)}o!=null&&(n.defaultValue=mr(o))}function ls(e,t){var n=e,r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function ed(e,t){gl(e,t)}var Mo="http://www.w3.org/1999/xhtml",ra="http://www.w3.org/1998/Math/MathML",pu="http://www.w3.org/2000/svg";function yl(e){switch(e){case"svg":return pu;case"math":return ra;default:return Mo}}function vl(e,t){return e==null||e===Mo?yl(t):e===pu&&t==="foreignObject"?Mo:e}var ss=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e},us,td=ss(function(e,t){if(e.namespaceURI===pu&&!("innerHTML"in e)){us=us||document.createElement("div"),us.innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=us.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild);return}e.innerHTML=t}),gr=1,jo=3,rr=8,va=9,di=11,ba=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===jo){n.nodeValue=t;return}}e.textContent=t},bh={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};function nd(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var b=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(e){b.forEach(function(t){Hi[nd(t,e)]=Hi[e]})});function C(e,t,n){var r=t==null||typeof t=="boolean"||t==="";return r?"":!n&&typeof t=="number"&&t!==0&&!(Hi.hasOwnProperty(e)&&Hi[e])?t+"px":(st(t,e),(""+t).trim())}var R=/([A-Z])/g,T=/^ms-/;function M(e){return e.replace(R,"-$1").toLowerCase().replace(T,"-ms-")}var ne=function(){};{var xe=/^(?:webkit|moz|o)[A-Z]/,Se=/^-ms-/,je=/-(.)/g,nt=/;\s*$/,Ke={},Tt={},Gt=!1,pt=!1,Ue=function(e){return e.replace(je,function(t,n){return n.toUpperCase()})},cr=function(e){Ke.hasOwnProperty(e)&&Ke[e]||(Ke[e]=!0,d("Unsupported style property %s. Did you mean %s?",e,Ue(e.replace(Se,"ms-"))))},Rn=function(e){Ke.hasOwnProperty(e)&&Ke[e]||(Ke[e]=!0,d("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},Er=function(e,t){Tt.hasOwnProperty(t)&&Tt[t]||(Tt[t]=!0,d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,e,t.replace(nt,"")))},Cn=function(e,t){Gt||(Gt=!0,d("`NaN` is an invalid value for the `%s` css style property.",e))},dr=function(e,t){pt||(pt=!0,d("`Infinity` is an invalid value for the `%s` css style property.",e))};ne=function(e,t){e.indexOf("-")>-1?cr(e):xe.test(e)?Rn(e):nt.test(t)&&Er(e,t),typeof t=="number"&&(isNaN(t)?Cn(e,t):isFinite(t)||dr(e,t))}}var Mt=ne;function Pt(e){{var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];if(o!=null){var i=r.indexOf("--")===0;t+=n+(i?r:M(r))+":",t+=C(r,o,i),n=";"}}return t||null}}function qn(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0;o||Mt(r,t[r]);var i=C(r,t[r],o);r==="float"&&(r="cssFloat"),o?n.setProperty(r,i):n[r]=i}}function or(e){return e==null||typeof e=="boolean"||e===""}function Do(e){var t={};for(var n in e)for(var r=bh[n]||[n],o=0;o<r.length;o++)t[r[o]]=n;return t}function Lo(e,t){{if(!t)return;var n=Do(e),r=Do(t),o={};for(var i in n){var s=n[i],c=r[i];if(c&&s!==c){var f=s+","+c;if(o[f])continue;o[f]=!0,d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",or(e[s])?"Removing":"Updating",s,c)}}}}var $r={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},bl=Rt({menuitem:!0},$r),fi="__html";function oa(e,t){if(t){if(bl[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw new Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if(typeof t.dangerouslySetInnerHTML!="object"||!(fi in t.dangerouslySetInnerHTML))throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&t.children!=null&&d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),t.style!=null&&typeof t.style!="object")throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function zn(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wo={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},Fa={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},Fi={},xh=new RegExp("^(aria)-["+B+"]*$"),wh=new RegExp("^(aria)[A-Z]["+B+"]*$");function Ch(e,t){{if(In.call(Fi,t)&&Fi[t])return!0;if(wh.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=Fa.hasOwnProperty(n)?n:null;if(r==null)return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Fi[t]=!0,!0;if(t!==r)return d("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),Fi[t]=!0,!0}if(xh.test(t)){var o=t.toLowerCase(),i=Fa.hasOwnProperty(o)?o:null;if(i==null)return Fi[t]=!0,!1;if(t!==i)return d("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,i),Fi[t]=!0,!0}}return!0}function Yb(e,t){{var n=[];for(var r in t){var o=Ch(e,r);o||n.push(r)}var i=n.map(function(s){return"`"+s+"`"}).join(", ");n.length===1?d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",i,e):n.length>1&&d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",i,e)}}function Vb(e,t){zn(e,t)||Yb(e,t)}var Yg=!1;function Xb(e,t){{if(e!=="input"&&e!=="textarea"&&e!=="select")return;t!=null&&t.value===null&&!Yg&&(Yg=!0,e==="select"&&t.multiple?d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e))}}var Vg=function(){};{var bo={},Xg=/^on./,Qb=/^on[^A-Z]/,qb=new RegExp("^(aria)-["+B+"]*$"),Gb=new RegExp("^(aria)[A-Z]["+B+"]*$");Vg=function(e,t,n,r){if(In.call(bo,t)&&bo[t])return!0;var o=t.toLowerCase();if(o==="onfocusin"||o==="onfocusout")return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),bo[t]=!0,!0;if(r!=null){var i=r.registrationNameDependencies,s=r.possibleRegistrationNames;if(i.hasOwnProperty(t))return!0;var c=s.hasOwnProperty(o)?s[o]:null;if(c!=null)return d("Invalid event handler property `%s`. Did you mean `%s`?",t,c),bo[t]=!0,!0;if(Xg.test(t))return d("Unknown event handler property `%s`. It will be ignored.",t),bo[t]=!0,!0}else if(Xg.test(t))return Qb.test(t)&&d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),bo[t]=!0,!0;if(qb.test(t)||Gb.test(t))return!0;if(o==="innerhtml")return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),bo[t]=!0,!0;if(o==="aria")return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),bo[t]=!0,!0;if(o==="is"&&n!==null&&n!==void 0&&typeof n!="string")return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),bo[t]=!0,!0;if(typeof n=="number"&&isNaN(n))return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),bo[t]=!0,!0;var f=Oe(t),v=f!==null&&f.type===jt;if(Wo.hasOwnProperty(o)){var x=Wo[o];if(x!==t)return d("Invalid DOM property `%s`. Did you mean `%s`?",t,x),bo[t]=!0,!0}else if(!v&&t!==o)return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,o),bo[t]=!0,!0;return typeof n=="boolean"&&Ct(t,n,f,!1)?(n?d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),bo[t]=!0,!0):v?!0:Ct(t,n,f,!1)?(bo[t]=!0,!1):((n==="false"||n==="true")&&f!==null&&f.type===ut&&(d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),bo[t]=!0),!0)}}var Kb=function(e,t,n){{var r=[];for(var o in t){var i=Vg(e,o,t[o],n);i||r.push(o)}var s=r.map(function(c){return"`"+c+"`"}).join(", ");r.length===1?d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",s,e):r.length>1&&d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",s,e)}};function Zb(e,t,n){zn(e,t)||Kb(e,t,n)}var Qg=1,kh=2,_u=4,Jb=Qg|kh|_u,mu=null;function e2(e){mu!==null&&d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),mu=e}function t2(){mu===null&&d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),mu=null}function n2(e){return e===mu}function Sh(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===jo?t.parentNode:t}var Eh=null,cs=null,ds=null;function qg(e){var t=qi(e);if(t){if(typeof Eh!="function")throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=t.stateNode;if(n){var r=Ud(n);Eh(t.stateNode,t.type,r)}}}function r2(e){Eh=e}function Gg(e){cs?ds?ds.push(e):ds=[e]:cs=e}function o2(){return cs!==null||ds!==null}function Kg(){if(cs){var e=cs,t=ds;if(cs=null,ds=null,qg(e),t)for(var n=0;n<t.length;n++)qg(t[n])}}var Zg=function(e,t){return e(t)},Jg=function(){},Rh=!1;function a2(){var e=o2();e&&(Jg(),Kg())}function ey(e,t,n){if(Rh)return e(t,n);Rh=!0;try{return Zg(e,t,n)}finally{Rh=!1,a2()}}function i2(e,t,n){Zg=e,Jg=n}function l2(e){return e==="button"||e==="input"||e==="select"||e==="textarea"}function s2(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!!(n.disabled&&l2(t));default:return!1}}function gu(e,t){var n=e.stateNode;if(n===null)return null;var r=Ud(n);if(r===null)return null;var o=r[t];if(s2(t,e.type,r))return null;if(o&&typeof o!="function")throw new Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof o+"` type.");return o}var Th=!1;if(gn)try{var yu={};Object.defineProperty(yu,"passive",{get:function(){Th=!0}}),window.addEventListener("test",yu,yu),window.removeEventListener("test",yu,yu)}catch{Th=!1}function ty(e,t,n,r,o,i,s,c,f){var v=Array.prototype.slice.call(arguments,3);try{t.apply(n,v)}catch(x){this.onError(x)}}var ny=ty;if(typeof window<"u"&&typeof window.dispatchEvent=="function"&&typeof document<"u"&&typeof document.createEvent=="function"){var Mh=document.createElement("react");ny=function(t,n,r,o,i,s,c,f,v){if(typeof document>"u"||document===null)throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var x=document.createEvent("Event"),L=!1,D=!0,V=window.event,X=Object.getOwnPropertyDescriptor(window,"event");function G(){Mh.removeEventListener(Z,ft,!1),typeof window.event<"u"&&window.hasOwnProperty("event")&&(window.event=V)}var Te=Array.prototype.slice.call(arguments,3);function ft(){L=!0,G(),n.apply(r,Te),D=!1}var Ze,Jt=!1,en=!1;function U(H){if(Ze=H.error,Jt=!0,Ze===null&&H.colno===0&&H.lineno===0&&(en=!0),H.defaultPrevented&&Ze!=null&&typeof Ze=="object")try{Ze._suppressLogging=!0}catch{}}var Z="react-"+(t||"invokeguardedcallback");if(window.addEventListener("error",U),Mh.addEventListener(Z,ft,!1),x.initEvent(Z,!1,!1),Mh.dispatchEvent(x),X&&Object.defineProperty(window,"event",X),L&&D&&(Jt?en&&(Ze=new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):Ze=new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`),this.onError(Ze)),window.removeEventListener("error",U),!L)return G(),ty.apply(this,arguments)}}var u2=ny,fs=!1,rd=null,od=!1,Dh=null,c2={onError:function(e){fs=!0,rd=e}};function Lh(e,t,n,r,o,i,s,c,f){fs=!1,rd=null,u2.apply(c2,arguments)}function d2(e,t,n,r,o,i,s,c,f){if(Lh.apply(this,arguments),fs){var v=Oh();od||(od=!0,Dh=v)}}function f2(){if(od){var e=Dh;throw od=!1,Dh=null,e}}function h2(){return fs}function Oh(){if(fs){var e=rd;return fs=!1,rd=null,e}else throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}function hs(e){return e._reactInternals}function p2(e){return e._reactInternals!==void 0}function _2(e,t){e._reactInternals=t}var wt=0,ps=1,Or=2,ln=4,xl=16,vu=32,Nh=64,_n=128,hi=256,Pi=512,wl=1024,xa=2048,pi=4096,Cl=8192,ad=16384,m2=xa|ln|Nh|Pi|wl|ad,g2=32767,bu=32768,xo=65536,Ah=131072,ry=1048576,$h=2097152,kl=4194304,Ih=8388608,_i=16777216,id=33554432,Bh=ln|wl|0,zh=Or|ln|xl|vu|Pi|pi|Cl,xu=ln|Nh|Pi|Cl,_s=xa|xl,mi=kl|Ih|$h,y2=u.ReactCurrentOwner;function Sl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{var r=t;do t=r,(t.flags&(Or|pi))!==wt&&(n=t.return),r=t.return;while(r)}return t.tag===F?n:null}function oy(e){if(e.tag===Qe){var t=e.memoizedState;if(t===null){var n=e.alternate;n!==null&&(t=n.memoizedState)}if(t!==null)return t.dehydrated}return null}function ay(e){return e.tag===F?e.stateNode.containerInfo:null}function v2(e){return Sl(e)===e}function b2(e){{var t=y2.current;if(t!==null&&t.tag===Y){var n=t,r=n.stateNode;r._warnedAboutRefsInRender||d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",Bt(n)||"A component"),r._warnedAboutRefsInRender=!0}}var o=hs(e);return o?Sl(o)===o:!1}function iy(e){if(Sl(e)!==e)throw new Error("Unable to find node on an unmounted component.")}function ly(e){var t=e.alternate;if(!t){var n=Sl(e);if(n===null)throw new Error("Unable to find node on an unmounted component.");return n!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){var c=i.return;if(c!==null){r=o=c;continue}break}if(i.child===s.child){for(var f=i.child;f;){if(f===r)return iy(i),e;if(f===o)return iy(i),t;f=f.sibling}throw new Error("Unable to find node on an unmounted component.")}if(r.return!==o.return)r=i,o=s;else{for(var v=!1,x=i.child;x;){if(x===r){v=!0,r=i,o=s;break}if(x===o){v=!0,o=i,r=s;break}x=x.sibling}if(!v){for(x=s.child;x;){if(x===r){v=!0,r=s,o=i;break}if(x===o){v=!0,o=s,r=i;break}x=x.sibling}if(!v)throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==o)throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(r.tag!==F)throw new Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t}function sy(e){var t=ly(e);return t!==null?uy(t):null}function uy(e){if(e.tag===ee||e.tag===P)return e;for(var t=e.child;t!==null;){var n=uy(t);if(n!==null)return n;t=t.sibling}return null}function x2(e){var t=ly(e);return t!==null?cy(t):null}function cy(e){if(e.tag===ee||e.tag===P)return e;for(var t=e.child;t!==null;){if(t.tag!==A){var n=cy(t);if(n!==null)return n}t=t.sibling}return null}var dy=l.unstable_scheduleCallback,w2=l.unstable_cancelCallback,C2=l.unstable_shouldYield,k2=l.unstable_requestPaint,Yr=l.unstable_now,S2=l.unstable_getCurrentPriorityLevel,ld=l.unstable_ImmediatePriority,Uh=l.unstable_UserBlockingPriority,El=l.unstable_NormalPriority,E2=l.unstable_LowPriority,Hh=l.unstable_IdlePriority,R2=l.unstable_yieldValue,T2=l.unstable_setDisableYieldValue,Rl=null,Zr=null,Ae=null,Pa=!1,wa=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u";function M2(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{ir&&(e=Rt({},e,{getLaneLabelMap:$2,injectProfilingHooks:A2})),Rl=t.inject(e),Zr=t}catch(n){d("React instrumentation encountered an error: %s.",n)}return!!t.checkDCE}function D2(e,t){if(Zr&&typeof Zr.onScheduleFiberRoot=="function")try{Zr.onScheduleFiberRoot(Rl,e,t)}catch(n){Pa||(Pa=!0,d("React instrumentation encountered an error: %s",n))}}function L2(e,t){if(Zr&&typeof Zr.onCommitFiberRoot=="function")try{var n=(e.current.flags&_n)===_n;if(br){var r;switch(t){case Xo:r=ld;break;case yi:r=Uh;break;case vi:r=El;break;case pd:r=Hh;break;default:r=El;break}Zr.onCommitFiberRoot(Rl,e,r,n)}else Zr.onCommitFiberRoot(Rl,e,void 0,n)}catch(o){Pa||(Pa=!0,d("React instrumentation encountered an error: %s",o))}}function O2(e){if(Zr&&typeof Zr.onPostCommitFiberRoot=="function")try{Zr.onPostCommitFiberRoot(Rl,e)}catch(t){Pa||(Pa=!0,d("React instrumentation encountered an error: %s",t))}}function N2(e){if(Zr&&typeof Zr.onCommitFiberUnmount=="function")try{Zr.onCommitFiberUnmount(Rl,e)}catch(t){Pa||(Pa=!0,d("React instrumentation encountered an error: %s",t))}}function Vr(e){if(typeof R2=="function"&&(T2(e),p(e)),Zr&&typeof Zr.setStrictMode=="function")try{Zr.setStrictMode(Rl,e)}catch(t){Pa||(Pa=!0,d("React instrumentation encountered an error: %s",t))}}function A2(e){Ae=e}function $2(){{for(var e=new Map,t=1,n=0;n<Ph;n++){var r=tx(t);e.set(t,r),t*=2}return e}}function I2(e){Ae!==null&&typeof Ae.markCommitStarted=="function"&&Ae.markCommitStarted(e)}function fy(){Ae!==null&&typeof Ae.markCommitStopped=="function"&&Ae.markCommitStopped()}function wu(e){Ae!==null&&typeof Ae.markComponentRenderStarted=="function"&&Ae.markComponentRenderStarted(e)}function ms(){Ae!==null&&typeof Ae.markComponentRenderStopped=="function"&&Ae.markComponentRenderStopped()}function B2(e){Ae!==null&&typeof Ae.markComponentPassiveEffectMountStarted=="function"&&Ae.markComponentPassiveEffectMountStarted(e)}function z2(){Ae!==null&&typeof Ae.markComponentPassiveEffectMountStopped=="function"&&Ae.markComponentPassiveEffectMountStopped()}function U2(e){Ae!==null&&typeof Ae.markComponentPassiveEffectUnmountStarted=="function"&&Ae.markComponentPassiveEffectUnmountStarted(e)}function H2(){Ae!==null&&typeof Ae.markComponentPassiveEffectUnmountStopped=="function"&&Ae.markComponentPassiveEffectUnmountStopped()}function F2(e){Ae!==null&&typeof Ae.markComponentLayoutEffectMountStarted=="function"&&Ae.markComponentLayoutEffectMountStarted(e)}function P2(){Ae!==null&&typeof Ae.markComponentLayoutEffectMountStopped=="function"&&Ae.markComponentLayoutEffectMountStopped()}function hy(e){Ae!==null&&typeof Ae.markComponentLayoutEffectUnmountStarted=="function"&&Ae.markComponentLayoutEffectUnmountStarted(e)}function py(){Ae!==null&&typeof Ae.markComponentLayoutEffectUnmountStopped=="function"&&Ae.markComponentLayoutEffectUnmountStopped()}function j2(e,t,n){Ae!==null&&typeof Ae.markComponentErrored=="function"&&Ae.markComponentErrored(e,t,n)}function W2(e,t,n){Ae!==null&&typeof Ae.markComponentSuspended=="function"&&Ae.markComponentSuspended(e,t,n)}function Y2(e){Ae!==null&&typeof Ae.markLayoutEffectsStarted=="function"&&Ae.markLayoutEffectsStarted(e)}function V2(){Ae!==null&&typeof Ae.markLayoutEffectsStopped=="function"&&Ae.markLayoutEffectsStopped()}function X2(e){Ae!==null&&typeof Ae.markPassiveEffectsStarted=="function"&&Ae.markPassiveEffectsStarted(e)}function Q2(){Ae!==null&&typeof Ae.markPassiveEffectsStopped=="function"&&Ae.markPassiveEffectsStopped()}function _y(e){Ae!==null&&typeof Ae.markRenderStarted=="function"&&Ae.markRenderStarted(e)}function q2(){Ae!==null&&typeof Ae.markRenderYielded=="function"&&Ae.markRenderYielded()}function my(){Ae!==null&&typeof Ae.markRenderStopped=="function"&&Ae.markRenderStopped()}function G2(e){Ae!==null&&typeof Ae.markRenderScheduled=="function"&&Ae.markRenderScheduled(e)}function K2(e,t){Ae!==null&&typeof Ae.markForceUpdateScheduled=="function"&&Ae.markForceUpdateScheduled(e,t)}function Fh(e,t){Ae!==null&&typeof Ae.markStateUpdateScheduled=="function"&&Ae.markStateUpdateScheduled(e,t)}var yt=0,rn=1,Tn=2,yr=8,ja=16,gy=Math.clz32?Math.clz32:ex,Z2=Math.log,J2=Math.LN2;function ex(e){var t=e>>>0;return t===0?32:31-(Z2(t)/J2|0)|0}var Ph=31,ue=0,Xr=0,At=1,gs=2,gi=4,Tl=8,Wa=16,Cu=32,ys=4194240,ku=64,jh=128,Wh=256,Yh=512,Vh=1024,Xh=2048,Qh=4096,qh=8192,Gh=16384,Kh=32768,Zh=65536,Jh=131072,ep=262144,tp=524288,np=1048576,rp=2097152,sd=130023424,vs=4194304,op=8388608,ap=16777216,ip=33554432,lp=67108864,yy=vs,Su=134217728,vy=268435455,Eu=268435456,Ml=536870912,Yo=1073741824;function tx(e){{if(e&At)return"Sync";if(e&gs)return"InputContinuousHydration";if(e&gi)return"InputContinuous";if(e&Tl)return"DefaultHydration";if(e&Wa)return"Default";if(e&Cu)return"TransitionHydration";if(e&ys)return"Transition";if(e&sd)return"Retry";if(e&Su)return"SelectiveHydration";if(e&Eu)return"IdleHydration";if(e&Ml)return"Idle";if(e&Yo)return"Offscreen"}}var Gn=-1,ud=ku,cd=vs;function Ru(e){switch(Dl(e)){case At:return At;case gs:return gs;case gi:return gi;case Tl:return Tl;case Wa:return Wa;case Cu:return Cu;case ku:case jh:case Wh:case Yh:case Vh:case Xh:case Qh:case qh:case Gh:case Kh:case Zh:case Jh:case ep:case tp:case np:case rp:return e&ys;case vs:case op:case ap:case ip:case lp:return e&sd;case Su:return Su;case Eu:return Eu;case Ml:return Ml;case Yo:return Yo;default:return d("Should have found matching lanes. This is a bug in React."),e}}function dd(e,t){var n=e.pendingLanes;if(n===ue)return ue;var r=ue,o=e.suspendedLanes,i=e.pingedLanes,s=n&vy;if(s!==ue){var c=s&~o;if(c!==ue)r=Ru(c);else{var f=s&i;f!==ue&&(r=Ru(f))}}else{var v=n&~o;v!==ue?r=Ru(v):i!==ue&&(r=Ru(i))}if(r===ue)return ue;if(t!==ue&&t!==r&&(t&o)===ue){var x=Dl(r),L=Dl(t);if(x>=L||x===Wa&&(L&ys)!==ue)return t}(r&gi)!==ue&&(r|=n&Wa);var D=e.entangledLanes;if(D!==ue)for(var V=e.entanglements,X=r&D;X>0;){var G=Ll(X),Te=1<<G;r|=V[G],X&=~Te}return r}function nx(e,t){for(var n=e.eventTimes,r=Gn;t>0;){var o=Ll(t),i=1<<o,s=n[o];s>r&&(r=s),t&=~i}return r}function rx(e,t){switch(e){case At:case gs:case gi:return t+250;case Tl:case Wa:case Cu:case ku:case jh:case Wh:case Yh:case Vh:case Xh:case Qh:case qh:case Gh:case Kh:case Zh:case Jh:case ep:case tp:case np:case rp:return t+5e3;case vs:case op:case ap:case ip:case lp:return Gn;case Su:case Eu:case Ml:case Yo:return Gn;default:return d("Should have found matching lanes. This is a bug in React."),Gn}}function ox(e,t){for(var n=e.pendingLanes,r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,s=n;s>0;){var c=Ll(s),f=1<<c,v=i[c];v===Gn?((f&r)===ue||(f&o)!==ue)&&(i[c]=rx(f,t)):v<=t&&(e.expiredLanes|=f),s&=~f}}function ax(e){return Ru(e.pendingLanes)}function sp(e){var t=e.pendingLanes&~Yo;return t!==ue?t:t&Yo?Yo:ue}function ix(e){return(e&At)!==ue}function up(e){return(e&vy)!==ue}function by(e){return(e&sd)===e}function lx(e){var t=At|gi|Wa;return(e&t)===ue}function sx(e){return(e&ys)===e}function fd(e,t){var n=gs|gi|Tl|Wa;return(t&n)!==ue}function ux(e,t){return(t&e.expiredLanes)!==ue}function xy(e){return(e&ys)!==ue}function wy(){var e=ud;return ud<<=1,(ud&ys)===ue&&(ud=ku),e}function cx(){var e=cd;return cd<<=1,(cd&sd)===ue&&(cd=vs),e}function Dl(e){return e&-e}function Tu(e){return Dl(e)}function Ll(e){return 31-gy(e)}function cp(e){return Ll(e)}function Vo(e,t){return(e&t)!==ue}function bs(e,t){return(e&t)===t}function Vt(e,t){return e|t}function hd(e,t){return e&~t}function Cy(e,t){return e&t}function lE(e){return e}function dx(e,t){return e!==Xr&&e<t?e:t}function dp(e){for(var t=[],n=0;n<Ph;n++)t.push(e);return t}function Mu(e,t,n){e.pendingLanes|=t,t!==Ml&&(e.suspendedLanes=ue,e.pingedLanes=ue);var r=e.eventTimes,o=cp(t);r[o]=n}function fx(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var n=e.expirationTimes,r=t;r>0;){var o=Ll(r),i=1<<o;n[o]=Gn,r&=~i}}function ky(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function hx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=ue,e.pingedLanes=ue,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var r=e.entanglements,o=e.eventTimes,i=e.expirationTimes,s=n;s>0;){var c=Ll(s),f=1<<c;r[c]=ue,o[c]=Gn,i[c]=Gn,s&=~f}}function fp(e,t){for(var n=e.entangledLanes|=t,r=e.entanglements,o=n;o;){var i=Ll(o),s=1<<i;s&t|r[i]&t&&(r[i]|=t),o&=~s}}function px(e,t){var n=Dl(t),r;switch(n){case gi:r=gs;break;case Wa:r=Tl;break;case ku:case jh:case Wh:case Yh:case Vh:case Xh:case Qh:case qh:case Gh:case Kh:case Zh:case Jh:case ep:case tp:case np:case rp:case vs:case op:case ap:case ip:case lp:r=Cu;break;case Ml:r=Eu;break;default:r=Xr;break}return(r&(e.suspendedLanes|t))!==Xr?Xr:r}function Sy(e,t,n){if(wa)for(var r=e.pendingUpdatersLaneMap;n>0;){var o=cp(n),i=1<<o,s=r[o];s.add(t),n&=~i}}function Ey(e,t){if(wa)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;t>0;){var o=cp(t),i=1<<o,s=n[o];s.size>0&&(s.forEach(function(c){var f=c.alternate;(f===null||!r.has(f))&&r.add(c)}),s.clear()),t&=~i}}function Ry(e,t){return null}var Xo=At,yi=gi,vi=Wa,pd=Ml,Du=Xr;function Ca(){return Du}function Qr(e){Du=e}function _x(e,t){var n=Du;try{return Du=e,t()}finally{Du=n}}function mx(e,t){return e!==0&&e<t?e:t}function gx(e,t){return e===0||e>t?e:t}function hp(e,t){return e!==0&&e<t}function Ty(e){var t=Dl(e);return hp(Xo,t)?hp(yi,t)?up(t)?vi:pd:yi:Xo}function _d(e){var t=e.current.memoizedState;return t.isDehydrated}var My;function yx(e){My=e}function vx(e){My(e)}var pp;function bx(e){pp=e}var Dy;function xx(e){Dy=e}var Ly;function wx(e){Ly=e}var Oy;function Cx(e){Oy=e}var _p=!1,md=[],ji=null,Wi=null,Yi=null,Lu=new Map,Ou=new Map,Vi=[],kx=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput","copy","cut","paste","click","change","contextmenu","reset","submit"];function Sx(e){return kx.indexOf(e)>-1}function Ex(e,t,n,r,o){return{blockedOn:e,domEventName:t,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]}}function Ny(e,t){switch(e){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":{var n=t.pointerId;Lu.delete(n);break}case"gotpointercapture":case"lostpointercapture":{var r=t.pointerId;Ou.delete(r);break}}}function Nu(e,t,n,r,o,i){if(e===null||e.nativeEvent!==i){var s=Ex(t,n,r,o,i);if(t!==null){var c=qi(t);c!==null&&pp(c)}return s}e.eventSystemFlags|=r;var f=e.targetContainers;return o!==null&&f.indexOf(o)===-1&&f.push(o),e}function Rx(e,t,n,r,o){switch(t){case"focusin":{var i=o;return ji=Nu(ji,e,t,n,r,i),!0}case"dragenter":{var s=o;return Wi=Nu(Wi,e,t,n,r,s),!0}case"mouseover":{var c=o;return Yi=Nu(Yi,e,t,n,r,c),!0}case"pointerover":{var f=o,v=f.pointerId;return Lu.set(v,Nu(Lu.get(v)||null,e,t,n,r,f)),!0}case"gotpointercapture":{var x=o,L=x.pointerId;return Ou.set(L,Nu(Ou.get(L)||null,e,t,n,r,x)),!0}}return!1}function Ay(e){var t=Al(e.target);if(t!==null){var n=Sl(t);if(n!==null){var r=n.tag;if(r===Qe){var o=oy(n);if(o!==null){e.blockedOn=o,Oy(e.priority,function(){Dy(n)});return}}else if(r===F){var i=n.stateNode;if(_d(i)){e.blockedOn=ay(n);return}}}}e.blockedOn=null}function Tx(e){for(var t=Ly(),n={blockedOn:null,target:e,priority:t},r=0;r<Vi.length&&hp(t,Vi[r].priority);r++);Vi.splice(r,0,n),r===0&&Ay(n)}function gd(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;t.length>0;){var n=t[0],r=yp(e.domEventName,e.eventSystemFlags,n,e.nativeEvent);if(r===null){var o=e.nativeEvent,i=new o.constructor(o.type,o);e2(i),o.target.dispatchEvent(i),t2()}else{var s=qi(r);return s!==null&&pp(s),e.blockedOn=r,!1}t.shift()}return!0}function $y(e,t,n){gd(e)&&n.delete(t)}function Mx(){_p=!1,ji!==null&&gd(ji)&&(ji=null),Wi!==null&&gd(Wi)&&(Wi=null),Yi!==null&&gd(Yi)&&(Yi=null),Lu.forEach($y),Ou.forEach($y)}function Au(e,t){e.blockedOn===t&&(e.blockedOn=null,_p||(_p=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Mx)))}function $u(e){if(md.length>0){Au(md[0],e);for(var t=1;t<md.length;t++){var n=md[t];n.blockedOn===e&&(n.blockedOn=null)}}ji!==null&&Au(ji,e),Wi!==null&&Au(Wi,e),Yi!==null&&Au(Yi,e);var r=function(c){return Au(c,e)};Lu.forEach(r),Ou.forEach(r);for(var o=0;o<Vi.length;o++){var i=Vi[o];i.blockedOn===e&&(i.blockedOn=null)}for(;Vi.length>0;){var s=Vi[0];if(s.blockedOn!==null)break;Ay(s),s.blockedOn===null&&Vi.shift()}}var xs=u.ReactCurrentBatchConfig,mp=!0;function Iy(e){mp=!!e}function Dx(){return mp}function Lx(e,t,n){var r=By(t),o;switch(r){case Xo:o=Ox;break;case yi:o=Nx;break;case vi:default:o=gp;break}return o.bind(null,t,n,e)}function Ox(e,t,n,r){var o=Ca(),i=xs.transition;xs.transition=null;try{Qr(Xo),gp(e,t,n,r)}finally{Qr(o),xs.transition=i}}function Nx(e,t,n,r){var o=Ca(),i=xs.transition;xs.transition=null;try{Qr(yi),gp(e,t,n,r)}finally{Qr(o),xs.transition=i}}function gp(e,t,n,r){mp&&Ax(e,t,n,r)}function Ax(e,t,n,r){var o=yp(e,t,n,r);if(o===null){Op(e,t,r,yd,n),Ny(e,r);return}if(Rx(o,e,t,n,r)){r.stopPropagation();return}if(Ny(e,r),t&_u&&Sx(e)){for(;o!==null;){var i=qi(o);i!==null&&vx(i);var s=yp(e,t,n,r);if(s===null&&Op(e,t,r,yd,n),s===o)break;o=s}o!==null&&r.stopPropagation();return}Op(e,t,r,null,n)}var yd=null;function yp(e,t,n,r){yd=null;var o=Sh(r),i=Al(o);if(i!==null){var s=Sl(i);if(s===null)i=null;else{var c=s.tag;if(c===Qe){var f=oy(s);if(f!==null)return f;i=null}else if(c===F){var v=s.stateNode;if(_d(v))return ay(s);i=null}else s!==i&&(i=null)}}return yd=i,null}function By(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return Xo;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return yi;case"message":{var t=S2();switch(t){case ld:return Xo;case Uh:return yi;case El:case E2:return vi;case Hh:return pd;default:return vi}}default:return vi}}function $x(e,t,n){return e.addEventListener(t,n,!1),n}function Ix(e,t,n){return e.addEventListener(t,n,!0),n}function Bx(e,t,n,r){return e.addEventListener(t,n,{capture:!0,passive:r}),n}function zx(e,t,n,r){return e.addEventListener(t,n,{passive:r}),n}var Iu=null,vp=null,Bu=null;function Ux(e){return Iu=e,vp=Uy(),!0}function Hx(){Iu=null,vp=null,Bu=null}function zy(){if(Bu)return Bu;var e,t=vp,n=t.length,r,o=Uy(),i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);var c=r>1?1-r:void 0;return Bu=o.slice(e,c),Bu}function Uy(){return"value"in Iu?Iu.value:Iu.textContent}function vd(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),t>=32||t===13?t:0}function bd(){return!0}function Hy(){return!1}function Qo(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var c in e)if(e.hasOwnProperty(c)){var f=e[c];f?this[c]=f(i):this[c]=i[c]}var v=i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1;return v?this.isDefaultPrevented=bd:this.isDefaultPrevented=Hy,this.isPropagationStopped=Hy,this}return Rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bd)},persist:function(){},isPersistent:bd}),t}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bp=Qo(ws),zu=Rt({},ws,{view:0,detail:0}),Fx=Qo(zu),xp,wp,Uu;function Px(e){e!==Uu&&(Uu&&e.type==="mousemove"?(xp=e.screenX-Uu.screenX,wp=e.screenY-Uu.screenY):(xp=0,wp=0),Uu=e)}var xd=Rt({},zu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(Px(e),xp)},movementY:function(e){return"movementY"in e?e.movementY:wp}}),Fy=Qo(xd),jx=Rt({},xd,{dataTransfer:0}),Wx=Qo(jx),Yx=Rt({},zu,{relatedTarget:0}),Cp=Qo(Yx),Vx=Rt({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Xx=Qo(Vx),Qx=Rt({},ws,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qx=Qo(Qx),Gx=Rt({},ws,{data:0}),Py=Qo(Gx),Kx=Py,Zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};function ew(e){if(e.key){var t=Zx[e.key]||e.key;if(t!=="Unidentified")return t}if(e.type==="keypress"){var n=vd(e);return n===13?"Enter":String.fromCharCode(n)}return e.type==="keydown"||e.type==="keyup"?Jx[e.keyCode]||"Unidentified":""}var tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=tw[e];return r?!!n[r]:!1}function kp(e){return nw}var rw=Rt({},zu,{key:ew,code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(e){return e.type==="keypress"?vd(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vd(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ow=Qo(rw),aw=Rt({},xd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jy=Qo(aw),iw=Rt({},zu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),lw=Qo(iw),sw=Rt({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),uw=Qo(sw),cw=Rt({},xd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dw=Qo(cw),fw=[9,13,27,32],Wy=229,Sp=gn&&"CompositionEvent"in window,Hu=null;gn&&"documentMode"in document&&(Hu=document.documentMode);var hw=gn&&"TextEvent"in window&&!Hu,Yy=gn&&(!Sp||Hu&&Hu>8&&Hu<=11),Vy=32,Xy=String.fromCharCode(Vy);function pw(){En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),En("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),En("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"])}var Qy=!1;function _w(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function mw(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}function gw(e,t){return e==="keydown"&&t.keyCode===Wy}function qy(e,t){switch(e){case"keyup":return fw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==Wy;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gy(e){var t=e.detail;return typeof t=="object"&&"data"in t?t.data:null}function Ky(e){return e.locale==="ko"}var Cs=!1;function yw(e,t,n,r,o){var i,s;if(Sp?i=mw(t):Cs?qy(t,r)&&(i="onCompositionEnd"):gw(t,r)&&(i="onCompositionStart"),!i)return null;Yy&&!Ky(r)&&(!Cs&&i==="onCompositionStart"?Cs=Ux(o):i==="onCompositionEnd"&&Cs&&(s=zy()));var c=Ed(n,i);if(c.length>0){var f=new Py(i,t,null,r,o);if(e.push({event:f,listeners:c}),s)f.data=s;else{var v=Gy(r);v!==null&&(f.data=v)}}}function vw(e,t){switch(e){case"compositionend":return Gy(t);case"keypress":var n=t.which;return n!==Vy?null:(Qy=!0,Xy);case"textInput":var r=t.data;return r===Xy&&Qy?null:r;default:return null}}function bw(e,t){if(Cs){if(e==="compositionend"||!Sp&&qy(e,t)){var n=zy();return Hx(),Cs=!1,n}return null}switch(e){case"paste":return null;case"keypress":if(!_w(t)){if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yy&&!Ky(t)?null:t.data;default:return null}}function xw(e,t,n,r,o){var i;if(hw?i=vw(t,r):i=bw(t,r),!i)return null;var s=Ed(n,"onBeforeInput");if(s.length>0){var c=new Kx("onBeforeInput","beforeinput",null,r,o);e.push({event:c,listeners:s}),c.data=i}}function ww(e,t,n,r,o,i,s){yw(e,t,n,r,o),xw(e,t,n,r,o)}var Cw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zy(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cw[e.type]:t==="textarea"}function kw(e){if(!gn)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n=typeof r[t]=="function"}return n}function Sw(){En("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"])}function Jy(e,t,n,r){Gg(r);var o=Ed(t,"onChange");if(o.length>0){var i=new bp("onChange","change",null,n,r);e.push({event:i,listeners:o})}}var Fu=null,Pu=null;function Ew(e){var t=e.nodeName&&e.nodeName.toLowerCase();return t==="select"||t==="input"&&e.type==="file"}function Rw(e){var t=[];Jy(t,Pu,e,Sh(e)),ey(Tw,t)}function Tw(e){g0(e,0)}function wd(e){var t=Ms(e);if(Po(t))return e}function Mw(e,t){if(e==="change")return t}var e0=!1;gn&&(e0=kw("input")&&(!document.documentMode||document.documentMode>9));function Dw(e,t){Fu=e,Pu=t,Fu.attachEvent("onpropertychange",n0)}function t0(){Fu&&(Fu.detachEvent("onpropertychange",n0),Fu=null,Pu=null)}function n0(e){e.propertyName==="value"&&wd(Pu)&&Rw(e)}function Lw(e,t,n){e==="focusin"?(t0(),Dw(t,n)):e==="focusout"&&t0()}function Ow(e,t){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wd(Pu)}function Nw(e){var t=e.nodeName;return t&&t.toLowerCase()==="input"&&(e.type==="checkbox"||e.type==="radio")}function Aw(e,t){if(e==="click")return wd(t)}function $w(e,t){if(e==="input"||e==="change")return wd(t)}function Iw(e){var t=e._wrapperState;!t||!t.controlled||e.type!=="number"||Qt(e,"number",e.value)}function Bw(e,t,n,r,o,i,s){var c=n?Ms(n):window,f,v;if(Ew(c)?f=Mw:Zy(c)?e0?f=$w:(f=Ow,v=Lw):Nw(c)&&(f=Aw),f){var x=f(t,n);if(x){Jy(e,x,r,o);return}}v&&v(t,c,n),t==="focusout"&&Iw(c)}function zw(){Kn("onMouseEnter",["mouseout","mouseover"]),Kn("onMouseLeave",["mouseout","mouseover"]),Kn("onPointerEnter",["pointerout","pointerover"]),Kn("onPointerLeave",["pointerout","pointerover"])}function Uw(e,t,n,r,o,i,s){var c=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout";if(c&&!n2(r)){var v=r.relatedTarget||r.fromElement;if(v&&(Al(v)||rc(v)))return}if(!(!f&&!c)){var x;if(o.window===o)x=o;else{var L=o.ownerDocument;L?x=L.defaultView||L.parentWindow:x=window}var D,V;if(f){var X=r.relatedTarget||r.toElement;if(D=n,V=X?Al(X):null,V!==null){var G=Sl(V);(V!==G||V.tag!==ee&&V.tag!==P)&&(V=null)}}else D=null,V=n;if(D!==V){var Te=Fy,ft="onMouseLeave",Ze="onMouseEnter",Jt="mouse";(t==="pointerout"||t==="pointerover")&&(Te=jy,ft="onPointerLeave",Ze="onPointerEnter",Jt="pointer");var en=D==null?x:Ms(D),U=V==null?x:Ms(V),Z=new Te(ft,Jt+"leave",D,r,o);Z.target=en,Z.relatedTarget=U;var H=null,me=Al(o);if(me===n){var Ie=new Te(Ze,Jt+"enter",V,r,o);Ie.target=U,Ie.relatedTarget=en,H=Ie}u4(e,Z,H,D,V)}}}function Hw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qo=typeof Object.is=="function"?Object.is:Hw;function ju(e,t){if(qo(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if(!In.call(t,i)||!qo(e[i],t[i]))return!1}return!0}function r0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fw(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function o0(e,t){for(var n=r0(e),r=0,o=0;n;){if(n.nodeType===jo){if(o=r+n.textContent.length,r<=t&&o>=t)return{node:n,offset:t-r};r=o}n=r0(Fw(n))}}function Pw(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||r.rangeCount===0)return null;var o=r.anchorNode,i=r.anchorOffset,s=r.focusNode,c=r.focusOffset;try{o.nodeType,s.nodeType}catch{return null}return jw(e,o,i,s,c)}function jw(e,t,n,r,o){var i=0,s=-1,c=-1,f=0,v=0,x=e,L=null;e:for(;;){for(var D=null;x===t&&(n===0||x.nodeType===jo)&&(s=i+n),x===r&&(o===0||x.nodeType===jo)&&(c=i+o),x.nodeType===jo&&(i+=x.nodeValue.length),(D=x.firstChild)!==null;)L=x,x=D;for(;;){if(x===e)break e;if(L===t&&++f===n&&(s=i),L===r&&++v===o&&(c=i),(D=x.nextSibling)!==null)break;x=L,L=x.parentNode}x=D}return s===-1||c===-1?null:{start:s,end:c}}function Ww(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;if(r.getSelection){var o=r.getSelection(),i=e.textContent.length,s=Math.min(t.start,i),c=t.end===void 0?s:Math.min(t.end,i);if(!o.extend&&s>c){var f=c;c=s,s=f}var v=o0(e,s),x=o0(e,c);if(v&&x){if(o.rangeCount===1&&o.anchorNode===v.node&&o.anchorOffset===v.offset&&o.focusNode===x.node&&o.focusOffset===x.offset)return;var L=n.createRange();L.setStart(v.node,v.offset),o.removeAllRanges(),s>c?(o.addRange(L),o.extend(x.node,x.offset)):(L.setEnd(x.node,x.offset),o.addRange(L))}}}function a0(e){return e&&e.nodeType===jo}function i0(e,t){return!e||!t?!1:e===t?!0:a0(e)?!1:a0(t)?i0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1}function Yw(e){return e&&e.ownerDocument&&i0(e.ownerDocument.documentElement,e)}function Vw(e){try{return typeof e.contentWindow.location.href=="string"}catch{return!1}}function l0(){for(var e=window,t=li();t instanceof e.HTMLIFrameElement;){if(Vw(t))e=t.contentWindow;else return t;t=li(e.document)}return t}function Ep(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xw(){var e=l0();return{focusedElem:e,selectionRange:Ep(e)?qw(e):null}}function Qw(e){var t=l0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&Yw(n)){r!==null&&Ep(n)&&Gw(n,r);for(var o=[],i=n;i=i.parentNode;)i.nodeType===gr&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});typeof n.focus=="function"&&n.focus();for(var s=0;s<o.length;s++){var c=o[s];c.element.scrollLeft=c.left,c.element.scrollTop=c.top}}}function qw(e){var t;return"selectionStart"in e?t={start:e.selectionStart,end:e.selectionEnd}:t=Pw(e),t||{start:0,end:0}}function Gw(e,t){var n=t.start,r=t.end;r===void 0&&(r=n),"selectionStart"in e?(e.selectionStart=n,e.selectionEnd=Math.min(r,e.value.length)):Ww(e,t)}var Kw=gn&&"documentMode"in document&&document.documentMode<=11;function Zw(){En("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"])}var ks=null,Rp=null,Wu=null,Tp=!1;function Jw(e){if("selectionStart"in e&&Ep(e))return{start:e.selectionStart,end:e.selectionEnd};var t=e.ownerDocument&&e.ownerDocument.defaultView||window,n=t.getSelection();return{anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}}function e4(e){return e.window===e?e.document:e.nodeType===va?e:e.ownerDocument}function s0(e,t,n){var r=e4(n);if(!(Tp||ks==null||ks!==li(r))){var o=Jw(ks);if(!Wu||!ju(Wu,o)){Wu=o;var i=Ed(Rp,"onSelect");if(i.length>0){var s=new bp("onSelect","select",null,t,n);e.push({event:s,listeners:i}),s.target=ks}}}}function t4(e,t,n,r,o,i,s){var c=n?Ms(n):window;switch(t){case"focusin":(Zy(c)||c.contentEditable==="true")&&(ks=c,Rp=n,Wu=null);break;case"focusout":ks=null,Rp=null,Wu=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,s0(e,r,o);break;case"selectionchange":if(Kw)break;case"keydown":case"keyup":s0(e,r,o)}}function Cd(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ss={animationend:Cd("Animation","AnimationEnd"),animationiteration:Cd("Animation","AnimationIteration"),animationstart:Cd("Animation","AnimationStart"),transitionend:Cd("Transition","TransitionEnd")},Mp={},u0={};gn&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function kd(e){if(Mp[e])return Mp[e];if(!Ss[e])return e;var t=Ss[e];for(var n in t)if(t.hasOwnProperty(n)&&n in u0)return Mp[e]=t[n];return e}var c0=kd("animationend"),d0=kd("animationiteration"),f0=kd("animationstart"),h0=kd("transitionend"),p0=new Map,_0=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];function Xi(e,t){p0.set(e,t),En(t,[e])}function n4(){for(var e=0;e<_0.length;e++){var t=_0[e],n=t.toLowerCase(),r=t[0].toUpperCase()+t.slice(1);Xi(n,"on"+r)}Xi(c0,"onAnimationEnd"),Xi(d0,"onAnimationIteration"),Xi(f0,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(h0,"onTransitionEnd")}function r4(e,t,n,r,o,i,s){var c=p0.get(t);if(c!==void 0){var f=bp,v=t;switch(t){case"keypress":if(vd(r)===0)return;case"keydown":case"keyup":f=ow;break;case"focusin":v="focus",f=Cp;break;case"focusout":v="blur",f=Cp;break;case"beforeblur":case"afterblur":f=Cp;break;case"click":if(r.button===2)return;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=lw;break;case c0:case d0:case f0:f=Xx;break;case h0:f=uw;break;case"scroll":f=Fx;break;case"wheel":f=dw;break;case"copy":case"cut":case"paste":f=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=jy;break}var x=(i&_u)!==0;{var L=!x&&t==="scroll",D=l4(n,c,r.type,x,L);if(D.length>0){var V=new f(c,v,null,r,o);e.push({event:V,listeners:D})}}}}n4(),zw(),Sw(),Zw(),pw();function o4(e,t,n,r,o,i,s){r4(e,t,n,r,o,i);var c=(i&Jb)===0;c&&(Uw(e,t,n,r,o),Bw(e,t,n,r,o),t4(e,t,n,r,o),ww(e,t,n,r,o))}var Yu=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],Dp=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(Yu));function m0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,d2(r,t,void 0,e),e.currentTarget=null}function a4(e,t,n){var r;if(n)for(var o=t.length-1;o>=0;o--){var i=t[o],s=i.instance,c=i.currentTarget,f=i.listener;if(s!==r&&e.isPropagationStopped())return;m0(e,f,c),r=s}else for(var v=0;v<t.length;v++){var x=t[v],L=x.instance,D=x.currentTarget,V=x.listener;if(L!==r&&e.isPropagationStopped())return;m0(e,V,D),r=L}}function g0(e,t){for(var n=(t&_u)!==0,r=0;r<e.length;r++){var o=e[r],i=o.event,s=o.listeners;a4(i,s,n)}f2()}function i4(e,t,n,r,o){var i=Sh(n),s=[];o4(s,e,r,n,i,t),g0(s,t)}function er(e,t){Dp.has(e)||d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n=!1,r=IC(t),o=c4(e,n);r.has(o)||(y0(t,e,kh,n),r.add(o))}function Lp(e,t,n){Dp.has(e)&&!t&&d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var r=0;t&&(r|=_u),y0(n,e,r,t)}var Sd="_reactListening"+Math.random().toString(36).slice(2);function Vu(e){if(!e[Sd]){e[Sd]=!0,sr.forEach(function(n){n!=="selectionchange"&&(Dp.has(n)||Lp(n,!1,e),Lp(n,!0,e))});var t=e.nodeType===va?e:e.ownerDocument;t!==null&&(t[Sd]||(t[Sd]=!0,Lp("selectionchange",!1,t)))}}function y0(e,t,n,r,o){var i=Lx(e,t,n),s=void 0;Th&&(t==="touchstart"||t==="touchmove"||t==="wheel")&&(s=!0),e=e;var c;r?s!==void 0?c=Bx(e,t,i,s):c=Ix(e,t,i):s!==void 0?c=zx(e,t,i,s):c=$x(e,t,i)}function v0(e,t){return e===t||e.nodeType===rr&&e.parentNode===t}function Op(e,t,n,r,o){var i=r;if((t&Qg)===0&&(t&kh)===0){var s=o;if(r!==null){var c=r;e:for(;;){if(c===null)return;var f=c.tag;if(f===F||f===A){var v=c.stateNode.containerInfo;if(v0(v,s))break;if(f===A)for(var x=c.return;x!==null;){var L=x.tag;if(L===F||L===A){var D=x.stateNode.containerInfo;if(v0(D,s))return}x=x.return}for(;v!==null;){var V=Al(v);if(V===null)return;var X=V.tag;if(X===ee||X===P){c=i=V;continue e}v=v.parentNode}}c=c.return}}}ey(function(){return i4(e,t,n,i)})}function Xu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function l4(e,t,n,r,o,i){for(var s=t!==null?t+"Capture":null,c=r?s:t,f=[],v=e,x=null;v!==null;){var L=v,D=L.stateNode,V=L.tag;if(V===ee&&D!==null&&(x=D,c!==null)){var X=gu(v,c);X!=null&&f.push(Xu(v,X,x))}if(o)break;v=v.return}return f}function Ed(e,t){for(var n=t+"Capture",r=[],o=e;o!==null;){var i=o,s=i.stateNode,c=i.tag;if(c===ee&&s!==null){var f=s,v=gu(o,n);v!=null&&r.unshift(Xu(o,v,f));var x=gu(o,t);x!=null&&r.push(Xu(o,x,f))}o=o.return}return r}function Es(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==ee);return e||null}function s4(e,t){for(var n=e,r=t,o=0,i=n;i;i=Es(i))o++;for(var s=0,c=r;c;c=Es(c))s++;for(;o-s>0;)n=Es(n),o--;for(;s-o>0;)r=Es(r),s--;for(var f=o;f--;){if(n===r||r!==null&&n===r.alternate)return n;n=Es(n),r=Es(r)}return null}function b0(e,t,n,r,o){for(var i=t._reactName,s=[],c=n;c!==null&&c!==r;){var f=c,v=f.alternate,x=f.stateNode,L=f.tag;if(v!==null&&v===r)break;if(L===ee&&x!==null){var D=x;if(o){var V=gu(c,i);V!=null&&s.unshift(Xu(c,V,D))}else if(!o){var X=gu(c,i);X!=null&&s.push(Xu(c,X,D))}}c=c.return}s.length!==0&&e.push({event:t,listeners:s})}function u4(e,t,n,r,o){var i=r&&o?s4(r,o):null;r!==null&&b0(e,t,r,i,!1),o!==null&&n!==null&&b0(e,n,o,i,!0)}function c4(e,t){return e+"__"+(t?"capture":"bubble")}var Oo=!1,Qu="dangerouslySetInnerHTML",Rd="suppressContentEditableWarning",Qi="suppressHydrationWarning",x0="autoFocus",Ol="children",Nl="style",Td="__html",Np,Md,qu,w0,Dd,C0,k0;Np={dialog:!0,webview:!0},Md=function(e,t){Vb(e,t),Xb(e,t),Zb(e,t,{registrationNameDependencies:tr,possibleRegistrationNames:Mr})},C0=gn&&!document.documentMode,qu=function(e,t,n){if(!Oo){var r=Ld(n),o=Ld(t);o!==r&&(Oo=!0,d("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(o),JSON.stringify(r)))}},w0=function(e){if(!Oo){Oo=!0;var t=[];e.forEach(function(n){t.push(n)}),d("Extra attributes from the server: %s",t)}},Dd=function(e,t){t===!1?d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):d("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},k0=function(e,t){var n=e.namespaceURI===Mo?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};var d4=/\r\n?/g,f4=/\u0000|\uFFFD/g;function Ld(e){_t(e);var t=typeof e=="string"?e:""+e;return t.replace(d4,`
`).replace(f4,"")}function Od(e,t,n,r){var o=Ld(t),i=Ld(e);if(i!==o&&(r&&(Oo||(Oo=!0,d('Text content did not match. Server: "%s" Client: "%s"',i,o))),n&&Wt))throw new Error("Text content does not match server-rendered HTML.")}function S0(e){return e.nodeType===va?e:e.ownerDocument}function h4(){}function Nd(e){e.onclick=h4}function p4(e,t,n,r,o){for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];if(i===Nl)s&&Object.freeze(s),qn(t,s);else if(i===Qu){var c=s?s[Td]:void 0;c!=null&&td(t,c)}else if(i===Ol)if(typeof s=="string"){var f=e!=="textarea"||s!=="";f&&ba(t,s)}else typeof s=="number"&&ba(t,""+s);else i===Rd||i===Qi||i===x0||(tr.hasOwnProperty(i)?s!=null&&(typeof s!="function"&&Dd(i,s),i==="onScroll"&&er("scroll",t)):s!=null&&xr(t,i,s,o))}}function _4(e,t,n,r){for(var o=0;o<t.length;o+=2){var i=t[o],s=t[o+1];i===Nl?qn(e,s):i===Qu?td(e,s):i===Ol?ba(e,s):xr(e,i,s,r)}}function m4(e,t,n,r){var o,i=S0(n),s,c=r;if(c===Mo&&(c=yl(e)),c===Mo){if(o=zn(e,t),!o&&e!==e.toLowerCase()&&d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),e==="script"){var f=i.createElement("div");f.innerHTML="<script><\/script>";var v=f.firstChild;s=f.removeChild(v)}else if(typeof t.is=="string")s=i.createElement(e,{is:t.is});else if(s=i.createElement(e),e==="select"){var x=s;t.multiple?x.multiple=!0:t.size&&(x.size=t.size)}}else s=i.createElementNS(c,e);return c===Mo&&!o&&Object.prototype.toString.call(s)==="[object HTMLUnknownElement]"&&!In.call(Np,e)&&(Np[e]=!0,d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),s}function g4(e,t){return S0(t).createTextNode(e)}function y4(e,t,n,r){var o=zn(t,n);Md(t,n);var i;switch(t){case"dialog":er("cancel",e),er("close",e),i=n;break;case"iframe":case"object":case"embed":er("load",e),i=n;break;case"video":case"audio":for(var s=0;s<Yu.length;s++)er(Yu[s],e);i=n;break;case"source":er("error",e),i=n;break;case"img":case"image":case"link":er("error",e),er("load",e),i=n;break;case"details":er("toggle",e),i=n;break;case"input":q(e,n),i=W(e,n),er("invalid",e);break;case"option":Qn(e,n),i=n;break;case"select":du(e,n),i=ci(e,n),er("invalid",e);break;case"textarea":hu(e,n),i=is(e,n),er("invalid",e);break;default:i=n}switch(oa(t,i),p4(t,e,r,i,o),t){case"input":ya(e),Le(e,n,!1);break;case"textarea":ya(e),ls(e);break;case"option":nr(e,n);break;case"select":vh(e,n);break;default:typeof i.onClick=="function"&&Nd(e);break}}function v4(e,t,n,r,o){Md(t,r);var i=null,s,c;switch(t){case"input":s=W(e,n),c=W(e,r),i=[];break;case"select":s=ci(e,n),c=ci(e,r),i=[];break;case"textarea":s=is(e,n),c=is(e,r),i=[];break;default:s=n,c=r,typeof s.onClick!="function"&&typeof c.onClick=="function"&&Nd(e);break}oa(t,c);var f,v,x=null;for(f in s)if(!(c.hasOwnProperty(f)||!s.hasOwnProperty(f)||s[f]==null))if(f===Nl){var L=s[f];for(v in L)L.hasOwnProperty(v)&&(x||(x={}),x[v]="")}else f===Qu||f===Ol||f===Rd||f===Qi||f===x0||(tr.hasOwnProperty(f)?i||(i=[]):(i=i||[]).push(f,null));for(f in c){var D=c[f],V=s?.[f];if(!(!c.hasOwnProperty(f)||D===V||D==null&&V==null))if(f===Nl)if(D&&Object.freeze(D),V){for(v in V)V.hasOwnProperty(v)&&(!D||!D.hasOwnProperty(v))&&(x||(x={}),x[v]="");for(v in D)D.hasOwnProperty(v)&&V[v]!==D[v]&&(x||(x={}),x[v]=D[v])}else x||(i||(i=[]),i.push(f,x)),x=D;else if(f===Qu){var X=D?D[Td]:void 0,G=V?V[Td]:void 0;X!=null&&G!==X&&(i=i||[]).push(f,X)}else f===Ol?(typeof D=="string"||typeof D=="number")&&(i=i||[]).push(f,""+D):f===Rd||f===Qi||(tr.hasOwnProperty(f)?(D!=null&&(typeof D!="function"&&Dd(f,D),f==="onScroll"&&er("scroll",e)),!i&&V!==D&&(i=[])):(i=i||[]).push(f,D))}return x&&(Lo(x,c[Nl]),(i=i||[]).push(Nl,x)),i}function b4(e,t,n,r,o){n==="input"&&o.type==="radio"&&o.name!=null&&be(e,o);var i=zn(n,r),s=zn(n,o);switch(_4(e,t,i,s),n){case"input":ot(e,o);break;case"textarea":gl(e,o);break;case"select":fu(e,o);break}}function x4(e){{var t=e.toLowerCase();return Wo.hasOwnProperty(t)&&Wo[t]||null}}function w4(e,t,n,r,o,i,s){var c,f;switch(c=zn(t,n),Md(t,n),t){case"dialog":er("cancel",e),er("close",e);break;case"iframe":case"object":case"embed":er("load",e);break;case"video":case"audio":for(var v=0;v<Yu.length;v++)er(Yu[v],e);break;case"source":er("error",e);break;case"img":case"image":case"link":er("error",e),er("load",e);break;case"details":er("toggle",e);break;case"input":q(e,n),er("invalid",e);break;case"option":Qn(e,n);break;case"select":du(e,n),er("invalid",e);break;case"textarea":hu(e,n),er("invalid",e);break}oa(t,n);{f=new Set;for(var x=e.attributes,L=0;L<x.length;L++){var D=x[L].name.toLowerCase();switch(D){case"value":break;case"checked":break;case"selected":break;default:f.add(x[L].name)}}}var V=null;for(var X in n)if(n.hasOwnProperty(X)){var G=n[X];if(X===Ol)typeof G=="string"?e.textContent!==G&&(n[Qi]!==!0&&Od(e.textContent,G,i,s),V=[Ol,G]):typeof G=="number"&&e.textContent!==""+G&&(n[Qi]!==!0&&Od(e.textContent,G,i,s),V=[Ol,""+G]);else if(tr.hasOwnProperty(X))G!=null&&(typeof G!="function"&&Dd(X,G),X==="onScroll"&&er("scroll",e));else if(s&&typeof c=="boolean"){var Te=void 0,ft=c&&Sn?null:Oe(X);if(n[Qi]!==!0){if(!(X===Rd||X===Qi||X==="value"||X==="checked"||X==="selected")){if(X===Qu){var Ze=e.innerHTML,Jt=G?G[Td]:void 0;if(Jt!=null){var en=k0(e,Jt);en!==Ze&&qu(X,Ze,en)}}else if(X===Nl){if(f.delete(X),C0){var U=Pt(G);Te=e.getAttribute("style"),U!==Te&&qu(X,Te,U)}}else if(c&&!Sn)f.delete(X.toLowerCase()),Te=Jn(e,X,G),G!==Te&&qu(X,Te,G);else if(!ze(X,ft,c)&&!it(X,G,ft,c)){var Z=!1;if(ft!==null)f.delete(ft.attributeName),Te=fn(e,X,G,ft);else{var H=r;if(H===Mo&&(H=yl(t)),H===Mo)f.delete(X.toLowerCase());else{var me=x4(X);me!==null&&me!==X&&(Z=!0,f.delete(me)),f.delete(X)}Te=Jn(e,X,G)}var Ie=Sn;!Ie&&G!==Te&&!Z&&qu(X,Te,G)}}}}}switch(s&&f.size>0&&n[Qi]!==!0&&w0(f),t){case"input":ya(e),Le(e,n,!0);break;case"textarea":ya(e),ls(e);break;case"select":case"option":break;default:typeof n.onClick=="function"&&Nd(e);break}return V}function C4(e,t,n){var r=e.nodeValue!==t;return r}function Ap(e,t){{if(Oo)return;Oo=!0,d("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase())}}function $p(e,t){{if(Oo)return;Oo=!0,d('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase())}}function Ip(e,t,n){{if(Oo)return;Oo=!0,d("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase())}}function Bp(e,t){{if(t===""||Oo)return;Oo=!0,d('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())}}function k4(e,t,n){switch(t){case"input":Ot(e,n);return;case"textarea":ed(e,n);return;case"select":Ui(e,n);return}}var Gu=function(){},Ku=function(){};{var S4=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],E0=["applet","caption","html","table","td","th","marquee","object","template","foreignObject","desc","title"],E4=E0.concat(["button"]),R4=["dd","dt","li","option","optgroup","p","rp","rt"],R0={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};Ku=function(e,t){var n=Rt({},e||R0),r={tag:t};return E0.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),E4.indexOf(t)!==-1&&(n.pTagInButtonScope=null),S4.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t==="form"&&(n.formTag=r),t==="a"&&(n.aTagInScope=r),t==="button"&&(n.buttonTagInScope=r),t==="nobr"&&(n.nobrTagInScope=r),t==="p"&&(n.pTagInButtonScope=r),t==="li"&&(n.listItemTagAutoclosing=r),(t==="dd"||t==="dt")&&(n.dlItemTagAutoclosing=r),n};var T4=function(e,t){switch(t){case"select":return e==="option"||e==="optgroup"||e==="#text";case"optgroup":return e==="option"||e==="#text";case"option":return e==="#text";case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return R4.indexOf(t)===-1;case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null}return!0},M4=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},T0={};Gu=function(e,t,n){n=n||R0;var r=n.current,o=r&&r.tag;t!=null&&(e!=null&&d("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var i=T4(e,o)?null:r,s=i?null:M4(e,n),c=i||s;if(c){var f=c.tag,v=!!i+"|"+e+"|"+f;if(!T0[v]){T0[v]=!0;var x=e,L="";if(e==="#text"?/\S/.test(t)?x="Text nodes":(x="Whitespace text nodes",L=" Make sure you don't have any extra whitespace between tags on each line of your source code."):x="<"+e+">",i){var D="";f==="table"&&e==="tr"&&(D+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",x,f,L,D)}else d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",x,f)}}}}var Ad="suppressHydrationWarning",$d="$",Id="/$",Zu="$?",Ju="$!",D4="style",zp=null,Up=null;function L4(e){var t,n,r=e.nodeType;switch(r){case va:case di:{t=r===va?"#document":"#fragment";var o=e.documentElement;n=o?o.namespaceURI:vl(null,"");break}default:{var i=r===rr?e.parentNode:e,s=i.namespaceURI||null;t=i.tagName,n=vl(s,t);break}}{var c=t.toLowerCase(),f=Ku(null,c);return{namespace:n,ancestorInfo:f}}}function O4(e,t,n){{var r=e,o=vl(r.namespace,t),i=Ku(r.ancestorInfo,t);return{namespace:o,ancestorInfo:i}}}function sE(e){return e}function N4(e){zp=Dx(),Up=Xw();var t=null;return Iy(!1),t}function A4(e){Qw(Up),Iy(zp),zp=null,Up=null}function $4(e,t,n,r,o){var i;{var s=r;if(Gu(e,null,s.ancestorInfo),typeof t.children=="string"||typeof t.children=="number"){var c=""+t.children,f=Ku(s.ancestorInfo,e);Gu(null,c,f)}i=s.namespace}var v=m4(e,t,n,i);return nc(o,v),Xp(v,t),v}function I4(e,t){e.appendChild(t)}function B4(e,t,n,r,o){switch(y4(e,t,n,r),t){case"button":case"input":case"select":case"textarea":return!!n.autoFocus;case"img":return!0;default:return!1}}function z4(e,t,n,r,o,i){{var s=i;if(typeof r.children!=typeof n.children&&(typeof r.children=="string"||typeof r.children=="number")){var c=""+r.children,f=Ku(s.ancestorInfo,t);Gu(null,c,f)}}return v4(e,t,n,r)}function Hp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function U4(e,t,n,r){{var o=n;Gu(null,e,o.ancestorInfo)}var i=g4(e,t);return nc(r,i),i}function H4(){var e=window.event;return e===void 0?vi:By(e.type)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,F4=typeof clearTimeout=="function"?clearTimeout:void 0,Pp=-1,M0=typeof Promise=="function"?Promise:void 0,P4=typeof queueMicrotask=="function"?queueMicrotask:typeof M0<"u"?function(e){return M0.resolve(null).then(e).catch(j4)}:Fp;function j4(e){setTimeout(function(){throw e})}function W4(e,t,n,r){switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();return;case"img":{n.src&&(e.src=n.src);return}}}function Y4(e,t,n,r,o,i){b4(e,t,n,r,o),Xp(e,o)}function D0(e){ba(e,"")}function V4(e,t,n){e.nodeValue=n}function X4(e,t){e.appendChild(t)}function Q4(e,t){var n;e.nodeType===rr?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t));var r=e._reactRootContainer;r==null&&n.onclick===null&&Nd(n)}function q4(e,t,n){e.insertBefore(t,n)}function G4(e,t,n){e.nodeType===rr?e.parentNode.insertBefore(t,n):e.insertBefore(t,n)}function K4(e,t){e.removeChild(t)}function Z4(e,t){e.nodeType===rr?e.parentNode.removeChild(t):e.removeChild(t)}function jp(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===rr){var i=o.data;if(i===Id)if(r===0){e.removeChild(o),$u(t);return}else r--;else(i===$d||i===Zu||i===Ju)&&r++}n=o}while(n);$u(t)}function J4(e,t){e.nodeType===rr?jp(e.parentNode,t):e.nodeType===gr&&jp(e,t),$u(e)}function eC(e){e=e;var t=e.style;typeof t.setProperty=="function"?t.setProperty("display","none","important"):t.display="none"}function tC(e){e.nodeValue=""}function nC(e,t){e=e;var n=t[D4],r=n!=null&&n.hasOwnProperty("display")?n.display:null;e.style.display=C("display",r)}function rC(e,t){e.nodeValue=t}function oC(e){e.nodeType===gr?e.textContent="":e.nodeType===va&&e.documentElement&&e.removeChild(e.documentElement)}function aC(e,t,n){return e.nodeType!==gr||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e}function iC(e,t){return t===""||e.nodeType!==jo?null:e}function lC(e){return e.nodeType!==rr?null:e}function L0(e){return e.data===Zu}function Wp(e){return e.data===Ju}function sC(e){var t=e.nextSibling&&e.nextSibling.dataset,n,r,o;return t&&(n=t.dgst,r=t.msg,o=t.stck),{message:r,digest:n,stack:o}}function uC(e,t){e._reactRetry=t}function Bd(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===gr||t===jo)break;if(t===rr){var n=e.data;if(n===$d||n===Ju||n===Zu)break;if(n===Id)return null}}return e}function ec(e){return Bd(e.nextSibling)}function cC(e){return Bd(e.firstChild)}function dC(e){return Bd(e.firstChild)}function fC(e){return Bd(e.nextSibling)}function hC(e,t,n,r,o,i,s){nc(i,e),Xp(e,n);var c;{var f=o;c=f.namespace}var v=(i.mode&rn)!==yt;return w4(e,t,n,c,r,v,s)}function pC(e,t,n,r){nc(n,e);var o=(n.mode&rn)!==yt;return C4(e,t)}function _C(e,t){nc(t,e)}function mC(e){for(var t=e.nextSibling,n=0;t;){if(t.nodeType===rr){var r=t.data;if(r===Id){if(n===0)return ec(t);n--}else(r===$d||r===Ju||r===Zu)&&n++}t=t.nextSibling}return null}function O0(e){for(var t=e.previousSibling,n=0;t;){if(t.nodeType===rr){var r=t.data;if(r===$d||r===Ju||r===Zu){if(n===0)return t;n--}else r===Id&&n++}t=t.previousSibling}return null}function gC(e){$u(e)}function yC(e){$u(e)}function vC(e){return e!=="head"&&e!=="body"}function bC(e,t,n,r){var o=!0;Od(t.nodeValue,n,r,o)}function xC(e,t,n,r,o,i){if(t[Ad]!==!0){var s=!0;Od(r.nodeValue,o,i,s)}}function wC(e,t){t.nodeType===gr?Ap(e,t):t.nodeType===rr||$p(e,t)}function CC(e,t){{var n=e.parentNode;n!==null&&(t.nodeType===gr?Ap(n,t):t.nodeType===rr||$p(n,t))}}function kC(e,t,n,r,o){(o||t[Ad]!==!0)&&(r.nodeType===gr?Ap(n,r):r.nodeType===rr||$p(n,r))}function SC(e,t,n){Ip(e,t)}function EC(e,t){Bp(e,t)}function RC(e,t,n){{var r=e.parentNode;r!==null&&Ip(r,t)}}function TC(e,t){{var n=e.parentNode;n!==null&&Bp(n,t)}}function MC(e,t,n,r,o,i){(i||t[Ad]!==!0)&&Ip(n,r)}function DC(e,t,n,r,o){(o||t[Ad]!==!0)&&Bp(n,r)}function LC(e){d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.nodeName.toLowerCase())}function OC(e){Vu(e)}var Rs=Math.random().toString(36).slice(2),Ts="__reactFiber$"+Rs,Yp="__reactProps$"+Rs,tc="__reactContainer$"+Rs,Vp="__reactEvents$"+Rs,NC="__reactListeners$"+Rs,AC="__reactHandles$"+Rs;function $C(e){delete e[Ts],delete e[Yp],delete e[Vp],delete e[NC],delete e[AC]}function nc(e,t){t[Ts]=e}function zd(e,t){t[tc]=e}function N0(e){e[tc]=null}function rc(e){return!!e[tc]}function Al(e){var t=e[Ts];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tc]||n[Ts],t){var r=t.alternate;if(t.child!==null||r!==null&&r.child!==null)for(var o=O0(e);o!==null;){var i=o[Ts];if(i)return i;o=O0(o)}return t}e=n,n=e.parentNode}return null}function qi(e){var t=e[Ts]||e[tc];return t&&(t.tag===ee||t.tag===P||t.tag===Qe||t.tag===F)?t:null}function Ms(e){if(e.tag===ee||e.tag===P)return e.stateNode;throw new Error("getNodeFromInstance: Invalid argument.")}function Ud(e){return e[Yp]||null}function Xp(e,t){e[Yp]=t}function IC(e){var t=e[Vp];return t===void 0&&(t=e[Vp]=new Set),t}var A0={},$0=u.ReactDebugCurrentFrame;function Hd(e){if(e){var t=e._owner,n=ai(e.type,e._source,t?t.type:null);$0.setExtraStackFrame(n)}else $0.setExtraStackFrame(null)}function ka(e,t,n,r,o){{var i=Function.call.bind(In);for(var s in e)if(i(e,s)){var c=void 0;try{if(typeof e[s]!="function"){var f=Error((r||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}c=e[s](t,s,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(v){c=v}c&&!(c instanceof Error)&&(Hd(o),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,s,typeof c),Hd(null)),c instanceof Error&&!(c.message in A0)&&(A0[c.message]=!0,Hd(o),d("Failed %s type: %s",n,c.message),Hd(null))}}}var Qp=[],Fd;Fd=[];var bi=-1;function Gi(e){return{current:e}}function ho(e,t){if(bi<0){d("Unexpected pop.");return}t!==Fd[bi]&&d("Unexpected Fiber popped."),e.current=Qp[bi],Qp[bi]=null,Fd[bi]=null,bi--}function po(e,t,n){bi++,Qp[bi]=e.current,Fd[bi]=n,e.current=t}var qp;qp={};var Go={};Object.freeze(Go);var xi=Gi(Go),Ya=Gi(!1),Gp=Go;function Ds(e,t,n){return n&&Va(t)?Gp:xi.current}function I0(e,t,n){{var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}}function Ls(e,t){{var n=e.type,r=n.contextTypes;if(!r)return Go;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={};for(var s in r)i[s]=t[s];{var c=Bt(e)||"Unknown";ka(r,i,"context",c)}return o&&I0(e,t,i),i}}function Pd(){return Ya.current}function Va(e){{var t=e.childContextTypes;return t!=null}}function jd(e){ho(Ya,e),ho(xi,e)}function Kp(e){ho(Ya,e),ho(xi,e)}function B0(e,t,n){{if(xi.current!==Go)throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");po(xi,t,e),po(Ya,n,e)}}function z0(e,t,n){{var r=e.stateNode,o=t.childContextTypes;if(typeof r.getChildContext!="function"){{var i=Bt(e)||"Unknown";qp[i]||(qp[i]=!0,d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",i,i))}return n}var s=r.getChildContext();for(var c in s)if(!(c in o))throw new Error((Bt(e)||"Unknown")+'.getChildContext(): key "'+c+'" is not defined in childContextTypes.');{var f=Bt(e)||"Unknown";ka(o,s,"child context",f)}return Rt({},n,s)}}function Wd(e){{var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||Go;return Gp=xi.current,po(xi,n,e),po(Ya,Ya.current,e),!0}}function U0(e,t,n){{var r=e.stateNode;if(!r)throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){var o=z0(e,t,Gp);r.__reactInternalMemoizedMergedChildContext=o,ho(Ya,e),ho(xi,e),po(xi,o,e),po(Ya,n,e)}else ho(Ya,e),po(Ya,n,e)}}function BC(e){{if(!v2(e)||e.tag!==Y)throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case F:return t.stateNode.context;case Y:{var n=t.type;if(Va(n))return t.stateNode.__reactInternalMemoizedMergedChildContext;break}}t=t.return}while(t!==null);throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}}var Ki=0,Yd=1,wi=null,Zp=!1,Jp=!1;function H0(e){wi===null?wi=[e]:wi.push(e)}function zC(e){Zp=!0,H0(e)}function F0(){Zp&&Zi()}function Zi(){if(!Jp&&wi!==null){Jp=!0;var e=0,t=Ca();try{var n=!0,r=wi;for(Qr(Xo);e<r.length;e++){var o=r[e];do o=o(n);while(o!==null)}wi=null,Zp=!1}catch(i){throw wi!==null&&(wi=wi.slice(e+1)),dy(ld,Zi),i}finally{Qr(t),Jp=!1}}return null}var Os=[],Ns=0,Vd=null,Xd=0,aa=[],ia=0,$l=null,Ci=1,ki="";function UC(e){return Bl(),(e.flags&ry)!==wt}function HC(e){return Bl(),Xd}function FC(){var e=ki,t=Ci,n=t&~PC(t);return n.toString(32)+e}function Il(e,t){Bl(),Os[Ns++]=Xd,Os[Ns++]=Vd,Vd=e,Xd=t}function P0(e,t,n){Bl(),aa[ia++]=Ci,aa[ia++]=ki,aa[ia++]=$l,$l=e;var r=Ci,o=ki,i=Qd(r)-1,s=r&~(1<<i),c=n+1,f=Qd(t)+i;if(f>30){var v=i-i%5,x=(1<<v)-1,L=(s&x).toString(32),D=s>>v,V=i-v,X=Qd(t)+V,G=c<<V,Te=G|D,ft=L+o;Ci=1<<X|Te,ki=ft}else{var Ze=c<<i,Jt=Ze|s,en=o;Ci=1<<f|Jt,ki=en}}function e_(e){Bl();var t=e.return;if(t!==null){var n=1,r=0;Il(e,n),P0(e,n,r)}}function Qd(e){return 32-gy(e)}function PC(e){return 1<<Qd(e)-1}function t_(e){for(;e===Vd;)Vd=Os[--Ns],Os[Ns]=null,Xd=Os[--Ns],Os[Ns]=null;for(;e===$l;)$l=aa[--ia],aa[ia]=null,ki=aa[--ia],aa[ia]=null,Ci=aa[--ia],aa[ia]=null}function jC(){return Bl(),$l!==null?{id:Ci,overflow:ki}:null}function WC(e,t){Bl(),aa[ia++]=Ci,aa[ia++]=ki,aa[ia++]=$l,Ci=t.id,ki=t.overflow,$l=e}function Bl(){eo()||d("Expected to be hydrating. This is a bug in React. Please file an issue.")}var Jr=null,la=null,Sa=!1,zl=!1,Ji=null;function YC(){Sa&&d("We should not be hydrating here. This is a bug in React. Please file a bug.")}function j0(){zl=!0}function VC(){return zl}function XC(e){var t=e.stateNode.containerInfo;return la=dC(t),Jr=e,Sa=!0,Ji=null,zl=!1,!0}function QC(e,t,n){return la=fC(t),Jr=e,Sa=!0,Ji=null,zl=!1,n!==null&&WC(e,n),!0}function W0(e,t){switch(e.tag){case F:{wC(e.stateNode.containerInfo,t);break}case ee:{var n=(e.mode&rn)!==yt;kC(e.type,e.memoizedProps,e.stateNode,t,n);break}case Qe:{var r=e.memoizedState;r.dehydrated!==null&&CC(r.dehydrated,t);break}}}function Y0(e,t){W0(e,t);var n=r3();n.stateNode=t,n.return=e;var r=e.deletions;r===null?(e.deletions=[n],e.flags|=xl):r.push(n)}function n_(e,t){{if(zl)return;switch(e.tag){case F:{var n=e.stateNode.containerInfo;switch(t.tag){case ee:var r=t.type,o=t.pendingProps;SC(n,r);break;case P:var i=t.pendingProps;EC(n,i);break}break}case ee:{var s=e.type,c=e.memoizedProps,f=e.stateNode;switch(t.tag){case ee:{var v=t.type,x=t.pendingProps,L=(e.mode&rn)!==yt;MC(s,c,f,v,x,L);break}case P:{var D=t.pendingProps,V=(e.mode&rn)!==yt;DC(s,c,f,D,V);break}}break}case Qe:{var X=e.memoizedState,G=X.dehydrated;if(G!==null)switch(t.tag){case ee:var Te=t.type,ft=t.pendingProps;RC(G,Te);break;case P:var Ze=t.pendingProps;TC(G,Ze);break}break}default:return}}}function V0(e,t){t.flags=t.flags&~pi|Or,n_(e,t)}function X0(e,t){switch(e.tag){case ee:{var n=e.type,r=e.pendingProps,o=aC(t,n);return o!==null?(e.stateNode=o,Jr=e,la=cC(o),!0):!1}case P:{var i=e.pendingProps,s=iC(t,i);return s!==null?(e.stateNode=s,Jr=e,la=null,!0):!1}case Qe:{var c=lC(t);if(c!==null){var f={dehydrated:c,treeContext:jC(),retryLane:Yo};e.memoizedState=f;var v=o3(c);return v.return=e,e.child=v,Jr=e,la=null,!0}return!1}default:return!1}}function r_(e){return(e.mode&rn)!==yt&&(e.flags&_n)===wt}function o_(e){throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function a_(e){if(Sa){var t=la;if(!t){r_(e)&&(n_(Jr,e),o_()),V0(Jr,e),Sa=!1,Jr=e;return}var n=t;if(!X0(e,t)){r_(e)&&(n_(Jr,e),o_()),t=ec(n);var r=Jr;if(!t||!X0(e,t)){V0(Jr,e),Sa=!1,Jr=e;return}Y0(r,n)}}}function qC(e,t,n){var r=e.stateNode,o=!zl,i=hC(r,e.type,e.memoizedProps,t,n,e,o);return e.updateQueue=i,i!==null}function GC(e){var t=e.stateNode,n=e.memoizedProps,r=pC(t,n,e);if(r){var o=Jr;if(o!==null)switch(o.tag){case F:{var i=o.stateNode.containerInfo,s=(o.mode&rn)!==yt;bC(i,t,n,s);break}case ee:{var c=o.type,f=o.memoizedProps,v=o.stateNode,x=(o.mode&rn)!==yt;xC(c,f,v,t,n,x);break}}}return r}function KC(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");_C(n,e)}function ZC(e){var t=e.memoizedState,n=t!==null?t.dehydrated:null;if(!n)throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return mC(n)}function Q0(e){for(var t=e.return;t!==null&&t.tag!==ee&&t.tag!==F&&t.tag!==Qe;)t=t.return;Jr=t}function qd(e){if(e!==Jr)return!1;if(!Sa)return Q0(e),Sa=!0,!1;if(e.tag!==F&&(e.tag!==ee||vC(e.type)&&!Hp(e.type,e.memoizedProps))){var t=la;if(t)if(r_(e))q0(e),o_();else for(;t;)Y0(e,t),t=ec(t)}return Q0(e),e.tag===Qe?la=ZC(e):la=Jr?ec(e.stateNode):null,!0}function JC(){return Sa&&la!==null}function q0(e){for(var t=la;t;)W0(e,t),t=ec(t)}function As(){Jr=null,la=null,Sa=!1,zl=!1}function G0(){Ji!==null&&(W1(Ji),Ji=null)}function eo(){return Sa}function i_(e){Ji===null?Ji=[e]:Ji.push(e)}var ek=u.ReactCurrentBatchConfig,tk=null;function nk(){return ek.transition}var Ea={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}};{var rk=function(e){for(var t=null,n=e;n!==null;)n.mode&yr&&(t=n),n=n.return;return t},Ul=function(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")},oc=[],ac=[],ic=[],lc=[],sc=[],uc=[],Hl=new Set;Ea.recordUnsafeLifecycleWarnings=function(e,t){Hl.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&oc.push(e),e.mode&yr&&typeof t.UNSAFE_componentWillMount=="function"&&ac.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&ic.push(e),e.mode&yr&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&lc.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&sc.push(e),e.mode&yr&&typeof t.UNSAFE_componentWillUpdate=="function"&&uc.push(e))},Ea.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;oc.length>0&&(oc.forEach(function(D){e.add(Bt(D)||"Component"),Hl.add(D.type)}),oc=[]);var t=new Set;ac.length>0&&(ac.forEach(function(D){t.add(Bt(D)||"Component"),Hl.add(D.type)}),ac=[]);var n=new Set;ic.length>0&&(ic.forEach(function(D){n.add(Bt(D)||"Component"),Hl.add(D.type)}),ic=[]);var r=new Set;lc.length>0&&(lc.forEach(function(D){r.add(Bt(D)||"Component"),Hl.add(D.type)}),lc=[]);var o=new Set;sc.length>0&&(sc.forEach(function(D){o.add(Bt(D)||"Component"),Hl.add(D.type)}),sc=[]);var i=new Set;if(uc.length>0&&(uc.forEach(function(D){i.add(Bt(D)||"Component"),Hl.add(D.type)}),uc=[]),t.size>0){var s=Ul(t);d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,s)}if(r.size>0){var c=Ul(r);d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`,c)}if(i.size>0){var f=Ul(i);d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,f)}if(e.size>0){var v=Ul(e);y(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,v)}if(n.size>0){var x=Ul(n);y(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,x)}if(o.size>0){var L=Ul(o);y(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,L)}};var Gd=new Map,K0=new Set;Ea.recordLegacyContextWarning=function(e,t){var n=rk(e);if(n===null){d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}if(!K0.has(e.type)){var r=Gd.get(n);(e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(r===void 0&&(r=[],Gd.set(n,r)),r.push(e))}},Ea.flushLegacyContextWarning=function(){Gd.forEach(function(e,t){if(e.length!==0){var n=e[0],r=new Set;e.forEach(function(i){r.add(Bt(i)||"Component"),K0.add(i.type)});var o=Ul(r);try{Fn(n),d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`,o)}finally{kr()}}})},Ea.discardPendingWarnings=function(){oc=[],ac=[],ic=[],lc=[],sc=[],uc=[],Gd=new Map}}var l_,s_,u_,c_,d_,Z0=function(e,t){};l_=!1,s_=!1,u_={},c_={},d_={},Z0=function(e,t){if(!(e===null||typeof e!="object")&&!(!e._store||e._store.validated||e.key!=null)){if(typeof e._store!="object")throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=Bt(t)||"Component";c_[n]||(c_[n]=!0,d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};function ok(e){return e.prototype&&e.prototype.isReactComponent}function cc(e,t,n){var r=n.ref;if(r!==null&&typeof r!="function"&&typeof r!="object"){if((e.mode&yr||qr)&&!(n._owner&&n._self&&n._owner.stateNode!==n._self)&&!(n._owner&&n._owner.tag!==Y)&&!(typeof n.type=="function"&&!ok(n.type))&&n._owner){var o=Bt(e)||"Component";u_[o]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',o,r),u_[o]=!0)}if(n._owner){var i=n._owner,s;if(i){var c=i;if(c.tag!==Y)throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");s=c.stateNode}if(!s)throw new Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");var f=s;qe(r,"ref");var v=""+r;if(t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===v)return t.ref;var x=function(L){var D=f.refs;L===null?delete D[v]:D[v]=L};return x._stringRef=v,x}else{if(typeof r!="string")throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw new Error("Element ref was specified as a string ("+r+`) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`)}}return r}function Kd(e,t){var n=Object.prototype.toString.call(t);throw new Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}function Zd(e){{var t=Bt(e)||"Component";if(d_[t])return;d_[t]=!0,d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.")}}function J0(e){var t=e._payload,n=e._init;return n(t)}function ev(e){function t(U,Z){if(e){var H=U.deletions;H===null?(U.deletions=[Z],U.flags|=xl):H.push(Z)}}function n(U,Z){if(!e)return null;for(var H=Z;H!==null;)t(U,H),H=H.sibling;return null}function r(U,Z){for(var H=new Map,me=Z;me!==null;)me.key!==null?H.set(me.key,me):H.set(me.index,me),me=me.sibling;return H}function o(U,Z){var H=ql(U,Z);return H.index=0,H.sibling=null,H}function i(U,Z,H){if(U.index=H,!e)return U.flags|=ry,Z;var me=U.alternate;if(me!==null){var Ie=me.index;return Ie<Z?(U.flags|=Or,Z):Ie}else return U.flags|=Or,Z}function s(U){return e&&U.alternate===null&&(U.flags|=Or),U}function c(U,Z,H,me){if(Z===null||Z.tag!==P){var Ie=lg(H,U.mode,me);return Ie.return=U,Ie}else{var Ne=o(Z,H);return Ne.return=U,Ne}}function f(U,Z,H,me){var Ie=H.type;if(Ie===wr)return x(U,Z,H.props.children,me,H.key);if(Z!==null&&(Z.elementType===Ie||i5(Z,H)||typeof Ie=="object"&&Ie!==null&&Ie.$$typeof===ht&&J0(Ie)===Z.type)){var Ne=o(Z,H.props);return Ne.ref=cc(U,Z,H),Ne.return=U,Ne._debugSource=H._source,Ne._debugOwner=H._owner,Ne}var St=ig(H,U.mode,me);return St.ref=cc(U,Z,H),St.return=U,St}function v(U,Z,H,me){if(Z===null||Z.tag!==A||Z.stateNode.containerInfo!==H.containerInfo||Z.stateNode.implementation!==H.implementation){var Ie=sg(H,U.mode,me);return Ie.return=U,Ie}else{var Ne=o(Z,H.children||[]);return Ne.return=U,Ne}}function x(U,Z,H,me,Ie){if(Z===null||Z.tag!==pe){var Ne=cl(H,U.mode,me,Ie);return Ne.return=U,Ne}else{var St=o(Z,H);return St.return=U,St}}function L(U,Z,H){if(typeof Z=="string"&&Z!==""||typeof Z=="number"){var me=lg(""+Z,U.mode,H);return me.return=U,me}if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case _r:{var Ie=ig(Z,U.mode,H);return Ie.ref=cc(U,null,Z),Ie.return=U,Ie}case Vn:{var Ne=sg(Z,U.mode,H);return Ne.return=U,Ne}case ht:{var St=Z._payload,zt=Z._init;return L(U,zt(St),H)}}if(ur(Z)||co(Z)){var Dn=cl(Z,U.mode,H,null);return Dn.return=U,Dn}Kd(U,Z)}return typeof Z=="function"&&Zd(U),null}function D(U,Z,H,me){var Ie=Z!==null?Z.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return Ie!==null?null:c(U,Z,""+H,me);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case _r:return H.key===Ie?f(U,Z,H,me):null;case Vn:return H.key===Ie?v(U,Z,H,me):null;case ht:{var Ne=H._payload,St=H._init;return D(U,Z,St(Ne),me)}}if(ur(H)||co(H))return Ie!==null?null:x(U,Z,H,me,null);Kd(U,H)}return typeof H=="function"&&Zd(U),null}function V(U,Z,H,me,Ie){if(typeof me=="string"&&me!==""||typeof me=="number"){var Ne=U.get(H)||null;return c(Z,Ne,""+me,Ie)}if(typeof me=="object"&&me!==null){switch(me.$$typeof){case _r:{var St=U.get(me.key===null?H:me.key)||null;return f(Z,St,me,Ie)}case Vn:{var zt=U.get(me.key===null?H:me.key)||null;return v(Z,zt,me,Ie)}case ht:var Dn=me._payload,un=me._init;return V(U,Z,H,un(Dn),Ie)}if(ur(me)||co(me)){var Rr=U.get(H)||null;return x(Z,Rr,me,Ie,null)}Kd(Z,me)}return typeof me=="function"&&Zd(Z),null}function X(U,Z,H){{if(typeof U!="object"||U===null)return Z;switch(U.$$typeof){case _r:case Vn:Z0(U,H);var me=U.key;if(typeof me!="string")break;if(Z===null){Z=new Set,Z.add(me);break}if(!Z.has(me)){Z.add(me);break}d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",me);break;case ht:var Ie=U._payload,Ne=U._init;X(Ne(Ie),Z,H);break}}return Z}function G(U,Z,H,me){for(var Ie=null,Ne=0;Ne<H.length;Ne++){var St=H[Ne];Ie=X(St,Ie,U)}for(var zt=null,Dn=null,un=Z,Rr=0,cn=0,vr=null;un!==null&&cn<H.length;cn++){un.index>cn?(vr=un,un=null):vr=un.sibling;var mo=D(U,un,H[cn],me);if(mo===null){un===null&&(un=vr);break}e&&un&&mo.alternate===null&&t(U,un),Rr=i(mo,Rr,cn),Dn===null?zt=mo:Dn.sibling=mo,Dn=mo,un=vr}if(cn===H.length){if(n(U,un),eo()){var lo=cn;Il(U,lo)}return zt}if(un===null){for(;cn<H.length;cn++){var Zo=L(U,H[cn],me);Zo!==null&&(Rr=i(Zo,Rr,cn),Dn===null?zt=Zo:Dn.sibling=Zo,Dn=Zo)}if(eo()){var So=cn;Il(U,So)}return zt}for(var Eo=r(U,un);cn<H.length;cn++){var go=V(Eo,U,cn,H[cn],me);go!==null&&(e&&go.alternate!==null&&Eo.delete(go.key===null?cn:go.key),Rr=i(go,Rr,cn),Dn===null?zt=go:Dn.sibling=go,Dn=go)}if(e&&Eo.forEach(function(Js){return t(U,Js)}),eo()){var Li=cn;Il(U,Li)}return zt}function Te(U,Z,H,me){var Ie=co(H);if(typeof Ie!="function")throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");{typeof Symbol=="function"&&H[Symbol.toStringTag]==="Generator"&&(s_||d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),s_=!0),H.entries===Ie&&(l_||d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),l_=!0);var Ne=Ie.call(H);if(Ne)for(var St=null,zt=Ne.next();!zt.done;zt=Ne.next()){var Dn=zt.value;St=X(Dn,St,U)}}var un=Ie.call(H);if(un==null)throw new Error("An iterable object provided no iterator.");for(var Rr=null,cn=null,vr=Z,mo=0,lo=0,Zo=null,So=un.next();vr!==null&&!So.done;lo++,So=un.next()){vr.index>lo?(Zo=vr,vr=null):Zo=vr.sibling;var Eo=D(U,vr,So.value,me);if(Eo===null){vr===null&&(vr=Zo);break}e&&vr&&Eo.alternate===null&&t(U,vr),mo=i(Eo,mo,lo),cn===null?Rr=Eo:cn.sibling=Eo,cn=Eo,vr=Zo}if(So.done){if(n(U,vr),eo()){var go=lo;Il(U,go)}return Rr}if(vr===null){for(;!So.done;lo++,So=un.next()){var Li=L(U,So.value,me);Li!==null&&(mo=i(Li,mo,lo),cn===null?Rr=Li:cn.sibling=Li,cn=Li)}if(eo()){var Js=lo;Il(U,Js)}return Rr}for(var Pc=r(U,vr);!So.done;lo++,So=un.next()){var ei=V(Pc,U,lo,So.value,me);ei!==null&&(e&&ei.alternate!==null&&Pc.delete(ei.key===null?lo:ei.key),mo=i(ei,mo,lo),cn===null?Rr=ei:cn.sibling=ei,cn=ei)}if(e&&Pc.forEach(function($3){return t(U,$3)}),eo()){var A3=lo;Il(U,A3)}return Rr}function ft(U,Z,H,me){if(Z!==null&&Z.tag===P){n(U,Z.sibling);var Ie=o(Z,H);return Ie.return=U,Ie}n(U,Z);var Ne=lg(H,U.mode,me);return Ne.return=U,Ne}function Ze(U,Z,H,me){for(var Ie=H.key,Ne=Z;Ne!==null;){if(Ne.key===Ie){var St=H.type;if(St===wr){if(Ne.tag===pe){n(U,Ne.sibling);var zt=o(Ne,H.props.children);return zt.return=U,zt._debugSource=H._source,zt._debugOwner=H._owner,zt}}else if(Ne.elementType===St||i5(Ne,H)||typeof St=="object"&&St!==null&&St.$$typeof===ht&&J0(St)===Ne.type){n(U,Ne.sibling);var Dn=o(Ne,H.props);return Dn.ref=cc(U,Ne,H),Dn.return=U,Dn._debugSource=H._source,Dn._debugOwner=H._owner,Dn}n(U,Ne);break}else t(U,Ne);Ne=Ne.sibling}if(H.type===wr){var un=cl(H.props.children,U.mode,me,H.key);return un.return=U,un}else{var Rr=ig(H,U.mode,me);return Rr.ref=cc(U,Z,H),Rr.return=U,Rr}}function Jt(U,Z,H,me){for(var Ie=H.key,Ne=Z;Ne!==null;){if(Ne.key===Ie)if(Ne.tag===A&&Ne.stateNode.containerInfo===H.containerInfo&&Ne.stateNode.implementation===H.implementation){n(U,Ne.sibling);var St=o(Ne,H.children||[]);return St.return=U,St}else{n(U,Ne);break}else t(U,Ne);Ne=Ne.sibling}var zt=sg(H,U.mode,me);return zt.return=U,zt}function en(U,Z,H,me){var Ie=typeof H=="object"&&H!==null&&H.type===wr&&H.key===null;if(Ie&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case _r:return s(Ze(U,Z,H,me));case Vn:return s(Jt(U,Z,H,me));case ht:var Ne=H._payload,St=H._init;return en(U,Z,St(Ne),me)}if(ur(H))return G(U,Z,H,me);if(co(H))return Te(U,Z,H,me);Kd(U,H)}return typeof H=="string"&&H!==""||typeof H=="number"?s(ft(U,Z,""+H,me)):(typeof H=="function"&&Zd(U),n(U,Z))}return en}var $s=ev(!0),tv=ev(!1);function ak(e,t){if(e!==null&&t.child!==e.child)throw new Error("Resuming work not yet implemented.");if(t.child!==null){var n=t.child,r=ql(n,n.pendingProps);for(t.child=r,r.return=t;n.sibling!==null;)n=n.sibling,r=r.sibling=ql(n,n.pendingProps),r.return=t;r.sibling=null}}function ik(e,t){for(var n=e.child;n!==null;)ZS(n,t),n=n.sibling}var f_=Gi(null),h_;h_={};var Jd=null,Is=null,p_=null,ef=!1;function tf(){Jd=null,Is=null,p_=null,ef=!1}function nv(){ef=!0}function rv(){ef=!1}function ov(e,t,n){po(f_,t._currentValue,e),t._currentValue=n,t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==h_&&d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=h_}function __(e,t){var n=f_.current;ho(f_,t),e._currentValue=n}function m_(e,t,n){for(var r=e;r!==null;){var o=r.alternate;if(bs(r.childLanes,t)?o!==null&&!bs(o.childLanes,t)&&(o.childLanes=Vt(o.childLanes,t)):(r.childLanes=Vt(r.childLanes,t),o!==null&&(o.childLanes=Vt(o.childLanes,t))),r===n)break;r=r.return}r!==n&&d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function lk(e,t,n){sk(e,t,n)}function sk(e,t,n){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var o=void 0,i=r.dependencies;if(i!==null){o=r.child;for(var s=i.firstContext;s!==null;){if(s.context===t){if(r.tag===Y){var c=Tu(n),f=Si(Gn,c);f.tag=rf;var v=r.updateQueue;if(v!==null){var x=v.shared,L=x.pending;L===null?f.next=f:(f.next=L.next,L.next=f),x.pending=f}}r.lanes=Vt(r.lanes,n);var D=r.alternate;D!==null&&(D.lanes=Vt(D.lanes,n)),m_(r.return,n,e),i.lanes=Vt(i.lanes,n);break}s=s.next}}else if(r.tag===_e)o=r.type===e.type?null:r.child;else if(r.tag===gt){var V=r.return;if(V===null)throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");V.lanes=Vt(V.lanes,n);var X=V.alternate;X!==null&&(X.lanes=Vt(X.lanes,n)),m_(V,n,e),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===e){o=null;break}var G=o.sibling;if(G!==null){G.return=o.return,o=G;break}o=o.return}r=o}}function Bs(e,t){Jd=e,Is=null,p_=null;var n=e.dependencies;if(n!==null){var r=n.firstContext;r!==null&&(Vo(n.lanes,t)&&Sc(),n.firstContext=null)}}function Nr(e){ef&&d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=e._currentValue;if(p_!==e){var n={context:e,memoizedValue:t,next:null};if(Is===null){if(Jd===null)throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");Is=n,Jd.dependencies={lanes:ue,firstContext:n}}else Is=Is.next=n}return t}var Fl=null;function g_(e){Fl===null?Fl=[e]:Fl.push(e)}function uk(){if(Fl!==null){for(var e=0;e<Fl.length;e++){var t=Fl[e],n=t.interleaved;if(n!==null){t.interleaved=null;var r=n.next,o=t.pending;if(o!==null){var i=o.next;o.next=r,n.next=i}t.pending=n}}Fl=null}}function av(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,g_(t)):(n.next=o.next,o.next=n),t.interleaved=n,nf(e,r)}function ck(e,t,n,r){var o=t.interleaved;o===null?(n.next=n,g_(t)):(n.next=o.next,o.next=n),t.interleaved=n}function dk(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,g_(t)):(n.next=o.next,o.next=n),t.interleaved=n,nf(e,r)}function No(e,t){return nf(e,t)}var fk=nf;function nf(e,t){e.lanes=Vt(e.lanes,t);var n=e.alternate;n!==null&&(n.lanes=Vt(n.lanes,t)),n===null&&(e.flags&(Or|pi))!==wt&&n5(e);for(var r=e,o=e.return;o!==null;)o.childLanes=Vt(o.childLanes,t),n=o.alternate,n!==null?n.childLanes=Vt(n.childLanes,t):(o.flags&(Or|pi))!==wt&&n5(e),r=o,o=o.return;if(r.tag===F){var i=r.stateNode;return i}else return null}var iv=0,lv=1,rf=2,y_=3,of=!1,v_,af;v_=!1,af=null;function b_(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:ue},effects:null};e.updateQueue=t}function sv(e,t){var n=t.updateQueue,r=e.updateQueue;if(n===r){var o={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects};t.updateQueue=o}}function Si(e,t){var n={eventTime:e,lane:t,tag:iv,payload:null,callback:null,next:null};return n}function el(e,t,n){var r=e.updateQueue;if(r===null)return null;var o=r.shared;if(af===o&&!v_&&(d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),v_=!0),_S()){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,fk(e,n)}else return dk(e,o,t,n)}function lf(e,t,n){var r=t.updateQueue;if(r!==null){var o=r.shared;if(xy(n)){var i=o.lanes;i=Cy(i,e.pendingLanes);var s=Vt(i,n);o.lanes=s,fp(e,s)}}}function x_(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null){var o=r.updateQueue;if(n===o){var i=null,s=null,c=n.firstBaseUpdate;if(c!==null){var f=c;do{var v={eventTime:f.eventTime,lane:f.lane,tag:f.tag,payload:f.payload,callback:f.callback,next:null};s===null?i=s=v:(s.next=v,s=v),f=f.next}while(f!==null);s===null?i=s=t:(s.next=t,s=t)}else i=s=t;n={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}}var x=n.lastBaseUpdate;x===null?n.firstBaseUpdate=t:x.next=t,n.lastBaseUpdate=t}function hk(e,t,n,r,o,i){switch(n.tag){case lv:{var s=n.payload;if(typeof s=="function"){nv();var c=s.call(i,r,o);{if(e.mode&yr){Vr(!0);try{s.call(i,r,o)}finally{Vr(!1)}}rv()}return c}return s}case y_:e.flags=e.flags&~xo|_n;case iv:{var f=n.payload,v;if(typeof f=="function"){nv(),v=f.call(i,r,o);{if(e.mode&yr){Vr(!0);try{f.call(i,r,o)}finally{Vr(!1)}}rv()}}else v=f;return v==null?r:Rt({},r,v)}case rf:return of=!0,r}return r}function sf(e,t,n,r){var o=e.updateQueue;of=!1,af=o.shared;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,c=o.shared.pending;if(c!==null){o.shared.pending=null;var f=c,v=f.next;f.next=null,s===null?i=v:s.next=v,s=f;var x=e.alternate;if(x!==null){var L=x.updateQueue,D=L.lastBaseUpdate;D!==s&&(D===null?L.firstBaseUpdate=v:D.next=v,L.lastBaseUpdate=f)}}if(i!==null){var V=o.baseState,X=ue,G=null,Te=null,ft=null,Ze=i;do{var Jt=Ze.lane,en=Ze.eventTime;if(bs(r,Jt)){if(ft!==null){var Z={eventTime:en,lane:Xr,tag:Ze.tag,payload:Ze.payload,callback:Ze.callback,next:null};ft=ft.next=Z}V=hk(e,o,Ze,V,t,n);var H=Ze.callback;if(H!==null&&Ze.lane!==Xr){e.flags|=Nh;var me=o.effects;me===null?o.effects=[Ze]:me.push(Ze)}}else{var U={eventTime:en,lane:Jt,tag:Ze.tag,payload:Ze.payload,callback:Ze.callback,next:null};ft===null?(Te=ft=U,G=V):ft=ft.next=U,X=Vt(X,Jt)}if(Ze=Ze.next,Ze===null){if(c=o.shared.pending,c===null)break;var Ie=c,Ne=Ie.next;Ie.next=null,Ze=Ne,o.lastBaseUpdate=Ie,o.shared.pending=null}}while(!0);ft===null&&(G=V),o.baseState=G,o.firstBaseUpdate=Te,o.lastBaseUpdate=ft;var St=o.shared.interleaved;if(St!==null){var zt=St;do X=Vt(X,zt.lane),zt=zt.next;while(zt!==St)}else i===null&&(o.shared.lanes=ue);Bc(X),e.lanes=X,e.memoizedState=V}af=null}function pk(e,t){if(typeof e!="function")throw new Error("Invalid argument passed as callback. Expected a function. Instead "+("received: "+e));e.call(t)}function uv(){of=!1}function uf(){return of}function cv(e,t,n){var r=t.effects;if(t.effects=null,r!==null)for(var o=0;o<r.length;o++){var i=r[o],s=i.callback;s!==null&&(i.callback=null,pk(s,n))}}var dc={},tl=Gi(dc),fc=Gi(dc),cf=Gi(dc);function df(e){if(e===dc)throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function dv(){var e=df(cf.current);return e}function w_(e,t){po(cf,t,e),po(fc,e,e),po(tl,dc,e);var n=L4(t);ho(tl,e),po(tl,n,e)}function zs(e){ho(tl,e),ho(fc,e),ho(cf,e)}function C_(){var e=df(tl.current);return e}function fv(e){var t=df(cf.current),n=df(tl.current),r=O4(n,e.type);n!==r&&(po(fc,e,e),po(tl,r,e))}function k_(e){fc.current===e&&(ho(tl,e),ho(fc,e))}var _k=0,hv=1,pv=1,hc=2,Ra=Gi(_k);function S_(e,t){return(e&t)!==0}function Us(e){return e&hv}function E_(e,t){return e&hv|t}function mk(e,t){return e|t}function nl(e,t){po(Ra,t,e)}function Hs(e){ho(Ra,e)}function gk(e,t){var n=e.memoizedState;if(n!==null)return n.dehydrated!==null;var r=e.memoizedProps;return!0}function ff(e){for(var t=e;t!==null;){if(t.tag===Qe){var n=t.memoizedState;if(n!==null){var r=n.dehydrated;if(r===null||L0(r)||Wp(r))return t}}else if(t.tag===Je&&t.memoizedProps.revealOrder!==void 0){var o=(t.flags&_n)!==wt;if(o)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)return null;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=0,Ir=1,Xa=2,Br=4,to=8,R_=[];function T_(){for(var e=0;e<R_.length;e++){var t=R_[e];t._workInProgressVersionPrimary=null}R_.length=0}function yk(e,t){var n=t._getVersion,r=n(t._source);e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r)}var $e=u.ReactCurrentDispatcher,pc=u.ReactCurrentBatchConfig,M_,Fs;M_=new Set;var Pl=ue,Mn=null,zr=null,Ur=null,hf=!1,_c=!1,mc=0,vk=0,bk=25,oe=null,sa=null,rl=-1,D_=!1;function vn(){{var e=oe;sa===null?sa=[e]:sa.push(e)}}function Ee(){{var e=oe;sa!==null&&(rl++,sa[rl]!==e&&xk(e))}}function Ps(e){e!=null&&!ur(e)&&d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",oe,typeof e)}function xk(e){{var t=Bt(Mn);if(!M_.has(t)&&(M_.add(t),sa!==null)){for(var n="",r=30,o=0;o<=rl;o++){for(var i=sa[o],s=o===rl?e:i,c=o+1+". "+i;c.length<r;)c+=" ";c+=s+`
`,n+=c}d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function _o(){throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function L_(e,t){if(D_)return!1;if(t===null)return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",oe),!1;e.length!==t.length&&d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,oe,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!qo(e[n],t[n]))return!1;return!0}function js(e,t,n,r,o,i){Pl=i,Mn=t,sa=e!==null?e._debugHookTypes:null,rl=-1,D_=e!==null&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=ue,e!==null&&e.memoizedState!==null?$e.current=Iv:sa!==null?$e.current=$v:$e.current=Av;var s=n(r,o);if(_c){var c=0;do{if(_c=!1,mc=0,c>=bk)throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");c+=1,D_=!1,zr=null,Ur=null,t.updateQueue=null,rl=-1,$e.current=Bv,s=n(r,o)}while(_c)}$e.current=Ef,t._debugHookTypes=sa;var f=zr!==null&&zr.next!==null;if(Pl=ue,Mn=null,zr=null,Ur=null,oe=null,sa=null,rl=-1,e!==null&&(e.flags&mi)!==(t.flags&mi)&&(e.mode&rn)!==yt&&d("Internal React error: Expected static flag was missing. Please notify the React team."),hf=!1,f)throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return s}function Ws(){var e=mc!==0;return mc=0,e}function _v(e,t,n){t.updateQueue=e.updateQueue,(t.mode&ja)!==yt?t.flags&=~(id|_i|xa|ln):t.flags&=~(xa|ln),e.lanes=hd(e.lanes,n)}function mv(){if($e.current=Ef,hf){for(var e=Mn.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hf=!1}Pl=ue,Mn=null,zr=null,Ur=null,sa=null,rl=-1,oe=null,Mv=!1,_c=!1,mc=0}function Qa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ur===null?Mn.memoizedState=Ur=e:Ur=Ur.next=e,Ur}function ua(){var e;if(zr===null){var t=Mn.alternate;t!==null?e=t.memoizedState:e=null}else e=zr.next;var n;if(Ur===null?n=Mn.memoizedState:n=Ur.next,n!==null)Ur=n,n=Ur.next,zr=e;else{if(e===null)throw new Error("Rendered more hooks than during the previous render.");zr=e;var r={memoizedState:zr.memoizedState,baseState:zr.baseState,baseQueue:zr.baseQueue,queue:zr.queue,next:null};Ur===null?Mn.memoizedState=Ur=r:Ur=Ur.next=r}return Ur}function gv(){return{lastEffect:null,stores:null}}function O_(e,t){return typeof t=="function"?t(e):t}function N_(e,t,n){var r=Qa(),o;n!==void 0?o=n(t):o=t,r.memoizedState=r.baseState=o;var i={pending:null,interleaved:null,lanes:ue,dispatch:null,lastRenderedReducer:e,lastRenderedState:o};r.queue=i;var s=i.dispatch=Sk.bind(null,Mn,i);return[r.memoizedState,s]}function A_(e,t,n){var r=ua(),o=r.queue;if(o===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var i=zr,s=i.baseQueue,c=o.pending;if(c!==null){if(s!==null){var f=s.next,v=c.next;s.next=v,c.next=f}i.baseQueue!==s&&d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),i.baseQueue=s=c,o.pending=null}if(s!==null){var x=s.next,L=i.baseState,D=null,V=null,X=null,G=x;do{var Te=G.lane;if(bs(Pl,Te)){if(X!==null){var Ze={lane:Xr,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};X=X.next=Ze}if(G.hasEagerState)L=G.eagerState;else{var Jt=G.action;L=e(L,Jt)}}else{var ft={lane:Te,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};X===null?(V=X=ft,D=L):X=X.next=ft,Mn.lanes=Vt(Mn.lanes,Te),Bc(Te)}G=G.next}while(G!==null&&G!==x);X===null?D=L:X.next=V,qo(L,r.memoizedState)||Sc(),r.memoizedState=L,r.baseState=D,r.baseQueue=X,o.lastRenderedState=L}var en=o.interleaved;if(en!==null){var U=en;do{var Z=U.lane;Mn.lanes=Vt(Mn.lanes,Z),Bc(Z),U=U.next}while(U!==en)}else s===null&&(o.lanes=ue);var H=o.dispatch;return[r.memoizedState,H]}function $_(e,t,n){var r=ua(),o=r.queue;if(o===null)throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");o.lastRenderedReducer=e;var i=o.dispatch,s=o.pending,c=r.memoizedState;if(s!==null){o.pending=null;var f=s.next,v=f;do{var x=v.action;c=e(c,x),v=v.next}while(v!==f);qo(c,r.memoizedState)||Sc(),r.memoizedState=c,r.baseQueue===null&&(r.baseState=c),o.lastRenderedState=c}return[c,i]}function uE(e,t,n){}function cE(e,t,n){}function I_(e,t,n){var r=Mn,o=Qa(),i,s=eo();if(s){if(n===void 0)throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");i=n(),Fs||i!==n()&&(d("The result of getServerSnapshot should be cached to avoid an infinite loop"),Fs=!0)}else{if(i=t(),!Fs){var c=t();qo(i,c)||(d("The result of getSnapshot should be cached to avoid an infinite loop"),Fs=!0)}var f=Yf();if(f===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");fd(f,Pl)||yv(r,t,i)}o.memoizedState=i;var v={value:i,getSnapshot:t};return o.queue=v,yf(bv.bind(null,r,v,e),[e]),r.flags|=xa,gc(Ir|to,vv.bind(null,r,v,i,t),void 0,null),i}function pf(e,t,n){var r=Mn,o=ua(),i=t();if(!Fs){var s=t();qo(i,s)||(d("The result of getSnapshot should be cached to avoid an infinite loop"),Fs=!0)}var c=o.memoizedState,f=!qo(c,i);f&&(o.memoizedState=i,Sc());var v=o.queue;if(vc(bv.bind(null,r,v,e),[e]),v.getSnapshot!==t||f||Ur!==null&&Ur.memoizedState.tag&Ir){r.flags|=xa,gc(Ir|to,vv.bind(null,r,v,i,t),void 0,null);var x=Yf();if(x===null)throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");fd(x,Pl)||yv(r,t,i)}return i}function yv(e,t,n){e.flags|=ad;var r={getSnapshot:t,value:n},o=Mn.updateQueue;if(o===null)o=gv(),Mn.updateQueue=o,o.stores=[r];else{var i=o.stores;i===null?o.stores=[r]:i.push(r)}}function vv(e,t,n,r){t.value=n,t.getSnapshot=r,xv(t)&&wv(e)}function bv(e,t,n){var r=function(){xv(t)&&wv(e)};return n(r)}function xv(e){var t=e.getSnapshot,n=e.value;try{var r=t();return!qo(n,r)}catch{return!0}}function wv(e){var t=No(e,At);t!==null&&jr(t,e,At,Gn)}function _f(e){var t=Qa();typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e;var n={pending:null,interleaved:null,lanes:ue,dispatch:null,lastRenderedReducer:O_,lastRenderedState:e};t.queue=n;var r=n.dispatch=Ek.bind(null,Mn,n);return[t.memoizedState,r]}function B_(e){return A_(O_)}function z_(e){return $_(O_)}function gc(e,t,n,r){var o={tag:e,create:t,destroy:n,deps:r,next:null},i=Mn.updateQueue;if(i===null)i=gv(),Mn.updateQueue=i,i.lastEffect=o.next=o;else{var s=i.lastEffect;if(s===null)i.lastEffect=o.next=o;else{var c=s.next;s.next=o,o.next=c,i.lastEffect=o}}return o}function U_(e){var t=Qa();{var n={current:e};return t.memoizedState=n,n}}function mf(e){var t=ua();return t.memoizedState}function yc(e,t,n,r){var o=Qa(),i=r===void 0?null:r;Mn.flags|=e,o.memoizedState=gc(Ir|t,n,void 0,i)}function gf(e,t,n,r){var o=ua(),i=r===void 0?null:r,s=void 0;if(zr!==null){var c=zr.memoizedState;if(s=c.destroy,i!==null){var f=c.deps;if(L_(i,f)){o.memoizedState=gc(t,n,s,i);return}}}Mn.flags|=e,o.memoizedState=gc(Ir|t,n,s,i)}function yf(e,t){return(Mn.mode&ja)!==yt?yc(id|xa|Ih,to,e,t):yc(xa|Ih,to,e,t)}function vc(e,t){return gf(xa,to,e,t)}function H_(e,t){return yc(ln,Xa,e,t)}function vf(e,t){return gf(ln,Xa,e,t)}function F_(e,t){var n=ln;return n|=kl,(Mn.mode&ja)!==yt&&(n|=_i),yc(n,Br,e,t)}function bf(e,t){return gf(ln,Br,e,t)}function Cv(e,t){if(typeof t=="function"){var n=t,r=e();return n(r),function(){n(null)}}else if(t!=null){var o=t;o.hasOwnProperty("current")||d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(o).join(", ")+"}");var i=e();return o.current=i,function(){o.current=null}}}function P_(e,t,n){typeof t!="function"&&d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null,o=ln;return o|=kl,(Mn.mode&ja)!==yt&&(o|=_i),yc(o,Br,Cv.bind(null,t,e),r)}function xf(e,t,n){typeof t!="function"&&d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null");var r=n!=null?n.concat([e]):null;return gf(ln,Br,Cv.bind(null,t,e),r)}function wk(e,t){}var wf=wk;function j_(e,t){var n=Qa(),r=t===void 0?null:t;return n.memoizedState=[e,r],e}function Cf(e,t){var n=ua(),r=t===void 0?null:t,o=n.memoizedState;if(o!==null&&r!==null){var i=o[1];if(L_(r,i))return o[0]}return n.memoizedState=[e,r],e}function W_(e,t){var n=Qa(),r=t===void 0?null:t,o=e();return n.memoizedState=[o,r],o}function kf(e,t){var n=ua(),r=t===void 0?null:t,o=n.memoizedState;if(o!==null&&r!==null){var i=o[1];if(L_(r,i))return o[0]}var s=e();return n.memoizedState=[s,r],s}function Y_(e){var t=Qa();return t.memoizedState=e,e}function kv(e){var t=ua(),n=zr,r=n.memoizedState;return Ev(t,r,e)}function Sv(e){var t=ua();if(zr===null)return t.memoizedState=e,e;var n=zr.memoizedState;return Ev(t,n,e)}function Ev(e,t,n){var r=!lx(Pl);if(r){if(!qo(n,t)){var o=wy();Mn.lanes=Vt(Mn.lanes,o),Bc(o),e.baseState=!0}return t}else return e.baseState&&(e.baseState=!1,Sc()),e.memoizedState=n,n}function Ck(e,t,n){var r=Ca();Qr(mx(r,yi)),e(!0);var o=pc.transition;pc.transition={};var i=pc.transition;pc.transition._updatedFibers=new Set;try{e(!1),t()}finally{if(Qr(r),pc.transition=o,o===null&&i._updatedFibers){var s=i._updatedFibers.size;s>10&&y("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),i._updatedFibers.clear()}}}function V_(){var e=_f(!1),t=e[0],n=e[1],r=Ck.bind(null,n),o=Qa();return o.memoizedState=r,[t,r]}function Rv(){var e=B_(),t=e[0],n=ua(),r=n.memoizedState;return[t,r]}function Tv(){var e=z_(),t=e[0],n=ua(),r=n.memoizedState;return[t,r]}var Mv=!1;function kk(){return Mv}function X_(){var e=Qa(),t=Yf(),n=t.identifierPrefix,r;if(eo()){var o=FC();r=":"+n+"R"+o;var i=mc++;i>0&&(r+="H"+i.toString(32)),r+=":"}else{var s=vk++;r=":"+n+"r"+s.toString(32)+":"}return e.memoizedState=r,r}function Sf(){var e=ua(),t=e.memoizedState;return t}function Sk(e,t,n){typeof arguments[3]=="function"&&d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=sl(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dv(e))Lv(t,o);else{var i=av(e,t,o,r);if(i!==null){var s=ko();jr(i,e,r,s),Ov(i,t,r)}}Nv(e,r)}function Ek(e,t,n){typeof arguments[3]=="function"&&d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=sl(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dv(e))Lv(t,o);else{var i=e.alternate;if(e.lanes===ue&&(i===null||i.lanes===ue)){var s=t.lastRenderedReducer;if(s!==null){var c;c=$e.current,$e.current=Ta;try{var f=t.lastRenderedState,v=s(f,n);if(o.hasEagerState=!0,o.eagerState=v,qo(v,f)){ck(e,t,o,r);return}}catch{}finally{$e.current=c}}}var x=av(e,t,o,r);if(x!==null){var L=ko();jr(x,e,r,L),Ov(x,t,r)}}Nv(e,r)}function Dv(e){var t=e.alternate;return e===Mn||t!==null&&t===Mn}function Lv(e,t){_c=hf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ov(e,t,n){if(xy(n)){var r=t.lanes;r=Cy(r,e.pendingLanes);var o=Vt(r,n);t.lanes=o,fp(e,o)}}function Nv(e,t,n){Fh(e,t)}var Ef={readContext:Nr,useCallback:_o,useContext:_o,useEffect:_o,useImperativeHandle:_o,useInsertionEffect:_o,useLayoutEffect:_o,useMemo:_o,useReducer:_o,useRef:_o,useState:_o,useDebugValue:_o,useDeferredValue:_o,useTransition:_o,useMutableSource:_o,useSyncExternalStore:_o,useId:_o,unstable_isNewReconciler:de},Av=null,$v=null,Iv=null,Bv=null,qa=null,Ta=null,Rf=null;{var Q_=function(){d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},$t=function(){d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};Av={readContext:function(e){return Nr(e)},useCallback:function(e,t){return oe="useCallback",vn(),Ps(t),j_(e,t)},useContext:function(e){return oe="useContext",vn(),Nr(e)},useEffect:function(e,t){return oe="useEffect",vn(),Ps(t),yf(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",vn(),Ps(n),P_(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",vn(),Ps(t),H_(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",vn(),Ps(t),F_(e,t)},useMemo:function(e,t){oe="useMemo",vn(),Ps(t);var n=$e.current;$e.current=qa;try{return W_(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",vn();var r=$e.current;$e.current=qa;try{return N_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",vn(),U_(e)},useState:function(e){oe="useState",vn();var t=$e.current;$e.current=qa;try{return _f(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",vn(),void 0},useDeferredValue:function(e){return oe="useDeferredValue",vn(),Y_(e)},useTransition:function(){return oe="useTransition",vn(),V_()},useMutableSource:function(e,t,n){return oe="useMutableSource",vn(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",vn(),I_(e,t,n)},useId:function(){return oe="useId",vn(),X_()},unstable_isNewReconciler:de},$v={readContext:function(e){return Nr(e)},useCallback:function(e,t){return oe="useCallback",Ee(),j_(e,t)},useContext:function(e){return oe="useContext",Ee(),Nr(e)},useEffect:function(e,t){return oe="useEffect",Ee(),yf(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",Ee(),P_(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",Ee(),H_(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",Ee(),F_(e,t)},useMemo:function(e,t){oe="useMemo",Ee();var n=$e.current;$e.current=qa;try{return W_(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",Ee();var r=$e.current;$e.current=qa;try{return N_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",Ee(),U_(e)},useState:function(e){oe="useState",Ee();var t=$e.current;$e.current=qa;try{return _f(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",Ee(),void 0},useDeferredValue:function(e){return oe="useDeferredValue",Ee(),Y_(e)},useTransition:function(){return oe="useTransition",Ee(),V_()},useMutableSource:function(e,t,n){return oe="useMutableSource",Ee(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",Ee(),I_(e,t,n)},useId:function(){return oe="useId",Ee(),X_()},unstable_isNewReconciler:de},Iv={readContext:function(e){return Nr(e)},useCallback:function(e,t){return oe="useCallback",Ee(),Cf(e,t)},useContext:function(e){return oe="useContext",Ee(),Nr(e)},useEffect:function(e,t){return oe="useEffect",Ee(),vc(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",Ee(),xf(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",Ee(),vf(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",Ee(),bf(e,t)},useMemo:function(e,t){oe="useMemo",Ee();var n=$e.current;$e.current=Ta;try{return kf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",Ee();var r=$e.current;$e.current=Ta;try{return A_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",Ee(),mf()},useState:function(e){oe="useState",Ee();var t=$e.current;$e.current=Ta;try{return B_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",Ee(),wf()},useDeferredValue:function(e){return oe="useDeferredValue",Ee(),kv(e)},useTransition:function(){return oe="useTransition",Ee(),Rv()},useMutableSource:function(e,t,n){return oe="useMutableSource",Ee(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",Ee(),pf(e,t)},useId:function(){return oe="useId",Ee(),Sf()},unstable_isNewReconciler:de},Bv={readContext:function(e){return Nr(e)},useCallback:function(e,t){return oe="useCallback",Ee(),Cf(e,t)},useContext:function(e){return oe="useContext",Ee(),Nr(e)},useEffect:function(e,t){return oe="useEffect",Ee(),vc(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",Ee(),xf(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",Ee(),vf(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",Ee(),bf(e,t)},useMemo:function(e,t){oe="useMemo",Ee();var n=$e.current;$e.current=Rf;try{return kf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",Ee();var r=$e.current;$e.current=Rf;try{return $_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",Ee(),mf()},useState:function(e){oe="useState",Ee();var t=$e.current;$e.current=Rf;try{return z_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",Ee(),wf()},useDeferredValue:function(e){return oe="useDeferredValue",Ee(),Sv(e)},useTransition:function(){return oe="useTransition",Ee(),Tv()},useMutableSource:function(e,t,n){return oe="useMutableSource",Ee(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",Ee(),pf(e,t)},useId:function(){return oe="useId",Ee(),Sf()},unstable_isNewReconciler:de},qa={readContext:function(e){return Q_(),Nr(e)},useCallback:function(e,t){return oe="useCallback",$t(),vn(),j_(e,t)},useContext:function(e){return oe="useContext",$t(),vn(),Nr(e)},useEffect:function(e,t){return oe="useEffect",$t(),vn(),yf(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",$t(),vn(),P_(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",$t(),vn(),H_(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",$t(),vn(),F_(e,t)},useMemo:function(e,t){oe="useMemo",$t(),vn();var n=$e.current;$e.current=qa;try{return W_(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",$t(),vn();var r=$e.current;$e.current=qa;try{return N_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",$t(),vn(),U_(e)},useState:function(e){oe="useState",$t(),vn();var t=$e.current;$e.current=qa;try{return _f(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",$t(),vn(),void 0},useDeferredValue:function(e){return oe="useDeferredValue",$t(),vn(),Y_(e)},useTransition:function(){return oe="useTransition",$t(),vn(),V_()},useMutableSource:function(e,t,n){return oe="useMutableSource",$t(),vn(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",$t(),vn(),I_(e,t,n)},useId:function(){return oe="useId",$t(),vn(),X_()},unstable_isNewReconciler:de},Ta={readContext:function(e){return Q_(),Nr(e)},useCallback:function(e,t){return oe="useCallback",$t(),Ee(),Cf(e,t)},useContext:function(e){return oe="useContext",$t(),Ee(),Nr(e)},useEffect:function(e,t){return oe="useEffect",$t(),Ee(),vc(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",$t(),Ee(),xf(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",$t(),Ee(),vf(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",$t(),Ee(),bf(e,t)},useMemo:function(e,t){oe="useMemo",$t(),Ee();var n=$e.current;$e.current=Ta;try{return kf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",$t(),Ee();var r=$e.current;$e.current=Ta;try{return A_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",$t(),Ee(),mf()},useState:function(e){oe="useState",$t(),Ee();var t=$e.current;$e.current=Ta;try{return B_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",$t(),Ee(),wf()},useDeferredValue:function(e){return oe="useDeferredValue",$t(),Ee(),kv(e)},useTransition:function(){return oe="useTransition",$t(),Ee(),Rv()},useMutableSource:function(e,t,n){return oe="useMutableSource",$t(),Ee(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",$t(),Ee(),pf(e,t)},useId:function(){return oe="useId",$t(),Ee(),Sf()},unstable_isNewReconciler:de},Rf={readContext:function(e){return Q_(),Nr(e)},useCallback:function(e,t){return oe="useCallback",$t(),Ee(),Cf(e,t)},useContext:function(e){return oe="useContext",$t(),Ee(),Nr(e)},useEffect:function(e,t){return oe="useEffect",$t(),Ee(),vc(e,t)},useImperativeHandle:function(e,t,n){return oe="useImperativeHandle",$t(),Ee(),xf(e,t,n)},useInsertionEffect:function(e,t){return oe="useInsertionEffect",$t(),Ee(),vf(e,t)},useLayoutEffect:function(e,t){return oe="useLayoutEffect",$t(),Ee(),bf(e,t)},useMemo:function(e,t){oe="useMemo",$t(),Ee();var n=$e.current;$e.current=Ta;try{return kf(e,t)}finally{$e.current=n}},useReducer:function(e,t,n){oe="useReducer",$t(),Ee();var r=$e.current;$e.current=Ta;try{return $_(e,t,n)}finally{$e.current=r}},useRef:function(e){return oe="useRef",$t(),Ee(),mf()},useState:function(e){oe="useState",$t(),Ee();var t=$e.current;$e.current=Ta;try{return z_(e)}finally{$e.current=t}},useDebugValue:function(e,t){return oe="useDebugValue",$t(),Ee(),wf()},useDeferredValue:function(e){return oe="useDeferredValue",$t(),Ee(),Sv(e)},useTransition:function(){return oe="useTransition",$t(),Ee(),Tv()},useMutableSource:function(e,t,n){return oe="useMutableSource",$t(),Ee(),void 0},useSyncExternalStore:function(e,t,n){return oe="useSyncExternalStore",$t(),Ee(),pf(e,t)},useId:function(){return oe="useId",$t(),Ee(),Sf()},unstable_isNewReconciler:de}}var ol=l.unstable_now,zv=0,Tf=-1,bc=-1,Mf=-1,q_=!1,Df=!1;function Uv(){return q_}function Rk(){Df=!0}function Tk(){q_=!1,Df=!1}function Mk(){q_=Df,Df=!1}function Hv(){return zv}function Fv(){zv=ol()}function G_(e){bc=ol(),e.actualStartTime<0&&(e.actualStartTime=ol())}function Pv(e){bc=-1}function Lf(e,t){if(bc>=0){var n=ol()-bc;e.actualDuration+=n,t&&(e.selfBaseDuration=n),bc=-1}}function Ga(e){if(Tf>=0){var t=ol()-Tf;Tf=-1;for(var n=e.return;n!==null;){switch(n.tag){case F:var r=n.stateNode;r.effectDuration+=t;return;case De:var o=n.stateNode;o.effectDuration+=t;return}n=n.return}}}function K_(e){if(Mf>=0){var t=ol()-Mf;Mf=-1;for(var n=e.return;n!==null;){switch(n.tag){case F:var r=n.stateNode;r!==null&&(r.passiveEffectDuration+=t);return;case De:var o=n.stateNode;o!==null&&(o.passiveEffectDuration+=t);return}n=n.return}}}function Ka(){Tf=ol()}function Z_(){Mf=ol()}function J_(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function Ma(e,t){if(e&&e.defaultProps){var n=Rt({},t),r=e.defaultProps;for(var o in r)n[o]===void 0&&(n[o]=r[o]);return n}return t}var em={},tm,nm,rm,om,am,jv,Of,im,lm,sm,xc;{tm=new Set,nm=new Set,rm=new Set,om=new Set,im=new Set,am=new Set,lm=new Set,sm=new Set,xc=new Set;var Wv=new Set;Of=function(e,t){if(!(e===null||typeof e=="function")){var n=t+"_"+e;Wv.has(n)||(Wv.add(n),d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},jv=function(e,t){if(t===void 0){var n=Xt(e)||"Component";am.has(n)||(am.add(n),d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},Object.defineProperty(em,"_processChildContext",{enumerable:!1,value:function(){throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(em)}function um(e,t,n,r){var o=e.memoizedState,i=n(r,o);{if(e.mode&yr){Vr(!0);try{i=n(r,o)}finally{Vr(!1)}}jv(t,i)}var s=i==null?o:Rt({},o,i);if(e.memoizedState=s,e.lanes===ue){var c=e.updateQueue;c.baseState=s}}var cm={isMounted:b2,enqueueSetState:function(e,t,n){var r=hs(e),o=ko(),i=sl(r),s=Si(o,i);s.payload=t,n!=null&&(Of(n,"setState"),s.callback=n);var c=el(r,s,i);c!==null&&(jr(c,r,i,o),lf(c,r,i)),Fh(r,i)},enqueueReplaceState:function(e,t,n){var r=hs(e),o=ko(),i=sl(r),s=Si(o,i);s.tag=lv,s.payload=t,n!=null&&(Of(n,"replaceState"),s.callback=n);var c=el(r,s,i);c!==null&&(jr(c,r,i,o),lf(c,r,i)),Fh(r,i)},enqueueForceUpdate:function(e,t){var n=hs(e),r=ko(),o=sl(n),i=Si(r,o);i.tag=rf,t!=null&&(Of(t,"forceUpdate"),i.callback=t);var s=el(n,i,o);s!==null&&(jr(s,n,o,r),lf(s,n,o)),K2(n,o)}};function Yv(e,t,n,r,o,i,s){var c=e.stateNode;if(typeof c.shouldComponentUpdate=="function"){var f=c.shouldComponentUpdate(r,i,s);{if(e.mode&yr){Vr(!0);try{f=c.shouldComponentUpdate(r,i,s)}finally{Vr(!1)}}f===void 0&&d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",Xt(t)||"Component")}return f}return t.prototype&&t.prototype.isPureReactComponent?!ju(n,r)||!ju(o,i):!0}function Dk(e,t,n){var r=e.stateNode;{var o=Xt(t)||"Component",i=r.render;i||(t.prototype&&typeof t.prototype.render=="function"?d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),r.getInitialState&&!r.getInitialState.isReactClassApproved&&!r.state&&d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),r.getDefaultProps&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),r.propTypes&&d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),r.contextType&&d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),t.childContextTypes&&!xc.has(t)&&(e.mode&yr)===yt&&(xc.add(t),d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`,o)),t.contextTypes&&!xc.has(t)&&(e.mode&yr)===yt&&(xc.add(t),d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`,o)),r.contextTypes&&d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!lm.has(t)&&(lm.add(t),d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o)),typeof r.componentShouldUpdate=="function"&&d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&typeof r.shouldComponentUpdate<"u"&&d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",Xt(t)||"A pure component"),typeof r.componentDidUnmount=="function"&&d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),typeof r.componentDidReceiveProps=="function"&&d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),typeof r.componentWillRecieveProps=="function"&&d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),typeof r.UNSAFE_componentWillRecieveProps=="function"&&d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o);var s=r.props!==n;r.props!==void 0&&s&&d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),r.defaultProps&&d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),typeof r.getSnapshotBeforeUpdate=="function"&&typeof r.componentDidUpdate!="function"&&!rm.has(t)&&(rm.add(t),d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",Xt(t))),typeof r.getDerivedStateFromProps=="function"&&d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),typeof r.getDerivedStateFromError=="function"&&d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),typeof t.getSnapshotBeforeUpdate=="function"&&d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o);var c=r.state;c&&(typeof c!="object"||ur(c))&&d("%s.state: must be set to an object or null",o),typeof r.getChildContext=="function"&&typeof t.childContextTypes!="object"&&d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o)}}function Vv(e,t){t.updater=cm,e.stateNode=t,_2(t,e),t._reactInternalInstance=em}function Xv(e,t,n){var r=!1,o=Go,i=Go,s=t.contextType;if("contextType"in t){var c=s===null||s!==void 0&&s.$$typeof===le&&s._context===void 0;if(!c&&!sm.has(t)){sm.add(t);var f="";s===void 0?f=" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof s!="object"?f=" However, it is set to a "+typeof s+".":s.$$typeof===k?f=" Did you accidentally pass the Context.Provider instead?":s._context!==void 0?f=" Did you accidentally pass the Context.Consumer instead?":f=" However, it is set to an object with keys {"+Object.keys(s).join(", ")+"}.",d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",Xt(t)||"Component",f)}}if(typeof s=="object"&&s!==null)i=Nr(s);else{o=Ds(e,t,!0);var v=t.contextTypes;r=v!=null,i=r?Ls(e,o):Go}var x=new t(n,i);if(e.mode&yr){Vr(!0);try{x=new t(n,i)}finally{Vr(!1)}}var L=e.memoizedState=x.state!==null&&x.state!==void 0?x.state:null;Vv(e,x);{if(typeof t.getDerivedStateFromProps=="function"&&L===null){var D=Xt(t)||"Component";nm.has(D)||(nm.add(D),d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",D,x.state===null?"null":"undefined",D))}if(typeof t.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"){var V=null,X=null,G=null;if(typeof x.componentWillMount=="function"&&x.componentWillMount.__suppressDeprecationWarning!==!0?V="componentWillMount":typeof x.UNSAFE_componentWillMount=="function"&&(V="UNSAFE_componentWillMount"),typeof x.componentWillReceiveProps=="function"&&x.componentWillReceiveProps.__suppressDeprecationWarning!==!0?X="componentWillReceiveProps":typeof x.UNSAFE_componentWillReceiveProps=="function"&&(X="UNSAFE_componentWillReceiveProps"),typeof x.componentWillUpdate=="function"&&x.componentWillUpdate.__suppressDeprecationWarning!==!0?G="componentWillUpdate":typeof x.UNSAFE_componentWillUpdate=="function"&&(G="UNSAFE_componentWillUpdate"),V!==null||X!==null||G!==null){var Te=Xt(t)||"Component",ft=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";om.has(Te)||(om.add(Te),d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,Te,ft,V!==null?`
  `+V:"",X!==null?`
  `+X:"",G!==null?`
  `+G:""))}}}return r&&I0(e,o,i),x}function Lk(e,t){var n=t.state;typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),n!==t.state&&(d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",Bt(e)||"Component"),cm.enqueueReplaceState(t,t.state,null))}function Qv(e,t,n,r){var o=t.state;if(typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==o){{var i=Bt(e)||"Component";tm.has(i)||(tm.add(i),d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",i))}cm.enqueueReplaceState(t,t.state,null)}}function dm(e,t,n,r){Dk(e,t,n);var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},b_(e);var i=t.contextType;if(typeof i=="object"&&i!==null)o.context=Nr(i);else{var s=Ds(e,t,!0);o.context=Ls(e,s)}{if(o.state===n){var c=Xt(t)||"Component";im.has(c)||(im.add(c),d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",c))}e.mode&yr&&Ea.recordLegacyContextWarning(e,o),Ea.recordUnsafeLifecycleWarnings(e,o)}o.state=e.memoizedState;var f=t.getDerivedStateFromProps;if(typeof f=="function"&&(um(e,t,f,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps!="function"&&typeof o.getSnapshotBeforeUpdate!="function"&&(typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")&&(Lk(e,o),sf(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"){var v=ln;v|=kl,(e.mode&ja)!==yt&&(v|=_i),e.flags|=v}}function Ok(e,t,n,r){var o=e.stateNode,i=e.memoizedProps;o.props=i;var s=o.context,c=t.contextType,f=Go;if(typeof c=="object"&&c!==null)f=Nr(c);else{var v=Ds(e,t,!0);f=Ls(e,v)}var x=t.getDerivedStateFromProps,L=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";!L&&(typeof o.UNSAFE_componentWillReceiveProps=="function"||typeof o.componentWillReceiveProps=="function")&&(i!==n||s!==f)&&Qv(e,o,n,f),uv();var D=e.memoizedState,V=o.state=D;if(sf(e,n,o,r),V=e.memoizedState,i===n&&D===V&&!Pd()&&!uf()){if(typeof o.componentDidMount=="function"){var X=ln;X|=kl,(e.mode&ja)!==yt&&(X|=_i),e.flags|=X}return!1}typeof x=="function"&&(um(e,t,x,n),V=e.memoizedState);var G=uf()||Yv(e,t,i,n,D,V,f);if(G){if(!L&&(typeof o.UNSAFE_componentWillMount=="function"||typeof o.componentWillMount=="function")&&(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"){var Te=ln;Te|=kl,(e.mode&ja)!==yt&&(Te|=_i),e.flags|=Te}}else{if(typeof o.componentDidMount=="function"){var ft=ln;ft|=kl,(e.mode&ja)!==yt&&(ft|=_i),e.flags|=ft}e.memoizedProps=n,e.memoizedState=V}return o.props=n,o.state=V,o.context=f,G}function Nk(e,t,n,r,o){var i=t.stateNode;sv(e,t);var s=t.memoizedProps,c=t.type===t.elementType?s:Ma(t.type,s);i.props=c;var f=t.pendingProps,v=i.context,x=n.contextType,L=Go;if(typeof x=="object"&&x!==null)L=Nr(x);else{var D=Ds(t,n,!0);L=Ls(t,D)}var V=n.getDerivedStateFromProps,X=typeof V=="function"||typeof i.getSnapshotBeforeUpdate=="function";!X&&(typeof i.UNSAFE_componentWillReceiveProps=="function"||typeof i.componentWillReceiveProps=="function")&&(s!==f||v!==L)&&Qv(t,i,r,L),uv();var G=t.memoizedState,Te=i.state=G;if(sf(t,r,i,o),Te=t.memoizedState,s===f&&G===Te&&!Pd()&&!uf()&&!et)return typeof i.componentDidUpdate=="function"&&(s!==e.memoizedProps||G!==e.memoizedState)&&(t.flags|=ln),typeof i.getSnapshotBeforeUpdate=="function"&&(s!==e.memoizedProps||G!==e.memoizedState)&&(t.flags|=wl),!1;typeof V=="function"&&(um(t,n,V,r),Te=t.memoizedState);var ft=uf()||Yv(t,n,c,r,G,Te,L)||et;return ft?(!X&&(typeof i.UNSAFE_componentWillUpdate=="function"||typeof i.componentWillUpdate=="function")&&(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,Te,L),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,Te,L)),typeof i.componentDidUpdate=="function"&&(t.flags|=ln),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=wl)):(typeof i.componentDidUpdate=="function"&&(s!==e.memoizedProps||G!==e.memoizedState)&&(t.flags|=ln),typeof i.getSnapshotBeforeUpdate=="function"&&(s!==e.memoizedProps||G!==e.memoizedState)&&(t.flags|=wl),t.memoizedProps=r,t.memoizedState=Te),i.props=r,i.state=Te,i.context=L,ft}function jl(e,t){return{value:e,source:t,stack:ga(t),digest:null}}function fm(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ak(e,t){return!0}function hm(e,t){try{var n=Ak(e,t);if(n===!1)return;var r=t.value,o=t.source,i=t.stack,s=i!==null?i:"";if(r!=null&&r._suppressLogging){if(e.tag===Y)return;console.error(r)}var c=o?Bt(o):null,f=c?"The above error occurred in the <"+c+"> component:":"The above error occurred in one of your React components:",v;if(e.tag===F)v=`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;else{var x=Bt(e)||"Anonymous";v="React will try to recreate this component tree from scratch "+("using the error boundary you provided, "+x+".")}var L=f+`
`+s+`

`+(""+v);console.error(L)}catch(D){setTimeout(function(){throw D})}}var $k=typeof WeakMap=="function"?WeakMap:Map;function qv(e,t,n){var r=Si(Gn,n);r.tag=y_,r.payload={element:null};var o=t.value;return r.callback=function(){OS(o),hm(e,t)},r}function pm(e,t,n){var r=Si(Gn,n);r.tag=y_;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){l5(e),hm(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){l5(e),hm(e,t),typeof o!="function"&&DS(this);var f=t.value,v=t.stack;this.componentDidCatch(f,{componentStack:v!==null?v:""}),typeof o!="function"&&(Vo(e.lanes,At)||d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",Bt(e)||"Unknown"))}),r}function Gv(e,t,n){var r=e.pingCache,o;if(r===null?(r=e.pingCache=new $k,o=new Set,r.set(t,o)):(o=r.get(t),o===void 0&&(o=new Set,r.set(t,o))),!o.has(n)){o.add(n);var i=NS.bind(null,e,t,n);wa&&zc(e,n),t.then(i,i)}}function Ik(e,t,n,r){var o=e.updateQueue;if(o===null){var i=new Set;i.add(n),e.updateQueue=i}else o.add(n)}function Bk(e,t){var n=e.tag;if((e.mode&rn)===yt&&(n===E||n===ge||n===ye)){var r=e.alternate;r?(e.updateQueue=r.updateQueue,e.memoizedState=r.memoizedState,e.lanes=r.lanes):(e.updateQueue=null,e.memoizedState=null)}}function Kv(e){var t=e;do{if(t.tag===Qe&&gk(t))return t;t=t.return}while(t!==null);return null}function Zv(e,t,n,r,o){if((e.mode&rn)===yt){if(e===t)e.flags|=xo;else{if(e.flags|=_n,n.flags|=Ah,n.flags&=~(m2|bu),n.tag===Y){var i=n.alternate;if(i===null)n.tag=vt;else{var s=Si(Gn,At);s.tag=rf,el(n,s,At)}}n.lanes=Vt(n.lanes,At)}return e}return e.flags|=xo,e.lanes=o,e}function zk(e,t,n,r,o){if(n.flags|=bu,wa&&zc(e,o),r!==null&&typeof r=="object"&&typeof r.then=="function"){var i=r;Bk(n),eo()&&n.mode&rn&&j0();var s=Kv(t);if(s!==null){s.flags&=~hi,Zv(s,t,n,e,o),s.mode&rn&&Gv(e,i,o),Ik(s,e,i);return}else{if(!ix(o)){Gv(e,i,o),Qm();return}var c=new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");r=c}}else if(eo()&&n.mode&rn){j0();var f=Kv(t);if(f!==null){(f.flags&xo)===wt&&(f.flags|=hi),Zv(f,t,n,e,o),i_(jl(r,n));return}}r=jl(r,n),wS(r);var v=t;do{switch(v.tag){case F:{var x=r;v.flags|=xo;var L=Tu(o);v.lanes=Vt(v.lanes,L);var D=qv(v,x,L);x_(v,D);return}case Y:var V=r,X=v.type,G=v.stateNode;if((v.flags&_n)===wt&&(typeof X.getDerivedStateFromError=="function"||G!==null&&typeof G.componentDidCatch=="function"&&!Z1(G))){v.flags|=xo;var Te=Tu(o);v.lanes=Vt(v.lanes,Te);var ft=pm(v,V,Te);x_(v,ft);return}break}v=v.return}while(v!==null)}function Uk(){return null}var wc=u.ReactCurrentOwner,Da=!1,_m,Cc,mm,gm,ym,Wl,vm,Nf,kc;_m={},Cc={},mm={},gm={},ym={},Wl=!1,vm={},Nf={},kc={};function wo(e,t,n,r){e===null?t.child=tv(t,null,n,r):t.child=$s(t,e.child,n,r)}function Hk(e,t,n,r){t.child=$s(t,e.child,null,r),t.child=$s(t,null,n,r)}function Jv(e,t,n,r,o){if(t.type!==t.elementType){var i=n.propTypes;i&&ka(i,r,"prop",Xt(n))}var s=n.render,c=t.ref,f,v;Bs(t,o),wu(t);{if(wc.current=t,vo(!0),f=js(e,t,s,r,c,o),v=Ws(),t.mode&yr){Vr(!0);try{f=js(e,t,s,r,c,o),v=Ws()}finally{Vr(!1)}}vo(!1)}return ms(),e!==null&&!Da?(_v(e,t,o),Ei(e,t,o)):(eo()&&v&&e_(t),t.flags|=ps,wo(e,t,f,o),t.child)}function e1(e,t,n,r,o){if(e===null){var i=n.type;if(GS(i)&&n.compare===null&&n.defaultProps===void 0){var s=i;return s=Zs(i),t.tag=ye,t.type=s,wm(t,i),t1(e,t,s,r,o)}{var c=i.propTypes;if(c&&ka(c,r,"prop",Xt(i)),n.defaultProps!==void 0){var f=Xt(i)||"Unknown";kc[f]||(d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.",f),kc[f]=!0)}}var v=ag(n.type,null,r,t,t.mode,o);return v.ref=t.ref,v.return=t,t.child=v,v}{var x=n.type,L=x.propTypes;L&&ka(L,r,"prop",Xt(x))}var D=e.child,V=Tm(e,o);if(!V){var X=D.memoizedProps,G=n.compare;if(G=G!==null?G:ju,G(X,r)&&e.ref===t.ref)return Ei(e,t,o)}t.flags|=ps;var Te=ql(D,r);return Te.ref=t.ref,Te.return=t,t.child=Te,Te}function t1(e,t,n,r,o){if(t.type!==t.elementType){var i=t.elementType;if(i.$$typeof===ht){var s=i,c=s._payload,f=s._init;try{i=f(c)}catch{i=null}var v=i&&i.propTypes;v&&ka(v,r,"prop",Xt(i))}}if(e!==null){var x=e.memoizedProps;if(ju(x,r)&&e.ref===t.ref&&t.type===e.type)if(Da=!1,t.pendingProps=r=x,Tm(e,o))(e.flags&Ah)!==wt&&(Da=!0);else return t.lanes=e.lanes,Ei(e,t,o)}return bm(e,t,n,r,o)}function n1(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden"||Et)if((t.mode&rn)===yt){var s={baseLanes:ue,cachePool:null,transitions:null};t.memoizedState=s,Vf(t,n)}else if(Vo(n,Yo)){var L={baseLanes:ue,cachePool:null,transitions:null};t.memoizedState=L;var D=i!==null?i.baseLanes:n;Vf(t,D)}else{var c=null,f;if(i!==null){var v=i.baseLanes;f=Vt(v,n)}else f=n;t.lanes=t.childLanes=Yo;var x={baseLanes:f,cachePool:c,transitions:null};return t.memoizedState=x,t.updateQueue=null,Vf(t,f),null}else{var V;i!==null?(V=Vt(i.baseLanes,n),t.memoizedState=null):V=n,Vf(t,V)}return wo(e,t,o,n),t.child}function Fk(e,t,n){var r=t.pendingProps;return wo(e,t,r,n),t.child}function Pk(e,t,n){var r=t.pendingProps.children;return wo(e,t,r,n),t.child}function jk(e,t,n){{t.flags|=ln;{var r=t.stateNode;r.effectDuration=0,r.passiveEffectDuration=0}}var o=t.pendingProps,i=o.children;return wo(e,t,i,n),t.child}function r1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=Pi,t.flags|=$h)}function bm(e,t,n,r,o){if(t.type!==t.elementType){var i=n.propTypes;i&&ka(i,r,"prop",Xt(n))}var s;{var c=Ds(t,n,!0);s=Ls(t,c)}var f,v;Bs(t,o),wu(t);{if(wc.current=t,vo(!0),f=js(e,t,n,r,s,o),v=Ws(),t.mode&yr){Vr(!0);try{f=js(e,t,n,r,s,o),v=Ws()}finally{Vr(!1)}}vo(!1)}return ms(),e!==null&&!Da?(_v(e,t,o),Ei(e,t,o)):(eo()&&v&&e_(t),t.flags|=ps,wo(e,t,f,o),t.child)}function o1(e,t,n,r,o){{switch(d3(t)){case!1:{var i=t.stateNode,s=t.type,c=new s(t.memoizedProps,i.context),f=c.state;i.updater.enqueueSetState(i,f,null);break}case!0:{t.flags|=_n,t.flags|=xo;var v=new Error("Simulated error coming from DevTools"),x=Tu(o);t.lanes=Vt(t.lanes,x);var L=pm(t,jl(v,t),x);x_(t,L);break}}if(t.type!==t.elementType){var D=n.propTypes;D&&ka(D,r,"prop",Xt(n))}}var V;Va(n)?(V=!0,Wd(t)):V=!1,Bs(t,o);var X=t.stateNode,G;X===null?($f(e,t),Xv(t,n,r),dm(t,n,r,o),G=!0):e===null?G=Ok(t,n,r,o):G=Nk(e,t,n,r,o);var Te=xm(e,t,n,G,V,o);{var ft=t.stateNode;G&&ft.props!==r&&(Wl||d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",Bt(t)||"a component"),Wl=!0)}return Te}function xm(e,t,n,r,o,i){r1(e,t);var s=(t.flags&_n)!==wt;if(!r&&!s)return o&&U0(t,n,!1),Ei(e,t,i);var c=t.stateNode;wc.current=t;var f;if(s&&typeof n.getDerivedStateFromError!="function")f=null,Pv();else{wu(t);{if(vo(!0),f=c.render(),t.mode&yr){Vr(!0);try{c.render()}finally{Vr(!1)}}vo(!1)}ms()}return t.flags|=ps,e!==null&&s?Hk(e,t,f,i):wo(e,t,f,i),t.memoizedState=c.state,o&&U0(t,n,!0),t.child}function a1(e){var t=e.stateNode;t.pendingContext?B0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&B0(e,t.context,!1),w_(e,t.containerInfo)}function Wk(e,t,n){if(a1(t),e===null)throw new Error("Should have a current fiber. This is a bug in React.");var r=t.pendingProps,o=t.memoizedState,i=o.element;sv(e,t),sf(t,r,null,n);var s=t.memoizedState,c=t.stateNode,f=s.element;if(o.isDehydrated){var v={element:f,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},x=t.updateQueue;if(x.baseState=v,t.memoizedState=v,t.flags&hi){var L=jl(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),t);return i1(e,t,f,n,L)}else if(f!==i){var D=jl(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t);return i1(e,t,f,n,D)}else{XC(t);var V=tv(t,null,f,n);t.child=V;for(var X=V;X;)X.flags=X.flags&~Or|pi,X=X.sibling}}else{if(As(),f===i)return Ei(e,t,n);wo(e,t,f,n)}return t.child}function i1(e,t,n,r,o){return As(),i_(o),t.flags|=hi,wo(e,t,n,r),t.child}function Yk(e,t,n){fv(t),e===null&&a_(t);var r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,c=Hp(r,o);return c?s=null:i!==null&&Hp(r,i)&&(t.flags|=vu),r1(e,t),wo(e,t,s,n),t.child}function Vk(e,t){return e===null&&a_(t),null}function Xk(e,t,n,r){$f(e,t);var o=t.pendingProps,i=n,s=i._payload,c=i._init,f=c(s);t.type=f;var v=t.tag=KS(f),x=Ma(f,o),L;switch(v){case E:return wm(t,f),t.type=f=Zs(f),L=bm(null,t,f,x,r),L;case Y:return t.type=f=Jm(f),L=o1(null,t,f,x,r),L;case ge:return t.type=f=eg(f),L=Jv(null,t,f,x,r),L;case Dt:{if(t.type!==t.elementType){var D=f.propTypes;D&&ka(D,x,"prop",Xt(f))}return L=e1(null,t,f,Ma(f.type,x),r),L}}var V="";throw f!==null&&typeof f=="object"&&f.$$typeof===ht&&(V=" Did you wrap a component in React.lazy() more than once?"),new Error("Element type is invalid. Received a promise that resolves to: "+f+". "+("Lazy element type must resolve to a class or function."+V))}function Qk(e,t,n,r,o){$f(e,t),t.tag=Y;var i;return Va(n)?(i=!0,Wd(t)):i=!1,Bs(t,o),Xv(t,n,r),dm(t,n,r,o),xm(null,t,n,!0,i,o)}function qk(e,t,n,r){$f(e,t);var o=t.pendingProps,i;{var s=Ds(t,n,!1);i=Ls(t,s)}Bs(t,r);var c,f;wu(t);{if(n.prototype&&typeof n.prototype.render=="function"){var v=Xt(n)||"Unknown";_m[v]||(d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",v,v),_m[v]=!0)}t.mode&yr&&Ea.recordLegacyContextWarning(t,null),vo(!0),wc.current=t,c=js(null,t,n,o,i,r),f=Ws(),vo(!1)}if(ms(),t.flags|=ps,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0){var x=Xt(n)||"Unknown";Cc[x]||(d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",x,x,x),Cc[x]=!0)}if(typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0){{var L=Xt(n)||"Unknown";Cc[L]||(d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",L,L,L),Cc[L]=!0)}t.tag=Y,t.memoizedState=null,t.updateQueue=null;var D=!1;return Va(n)?(D=!0,Wd(t)):D=!1,t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,b_(t),Vv(t,c),dm(t,n,o,r),xm(null,t,n,!0,D,r)}else{if(t.tag=E,t.mode&yr){Vr(!0);try{c=js(null,t,n,o,i,r),f=Ws()}finally{Vr(!1)}}return eo()&&f&&e_(t),wo(null,t,c,r),wm(t,n),t.child}}function wm(e,t){{if(t&&t.childContextTypes&&d("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),e.ref!==null){var n="",r=Ar();r&&(n+=`

Check the render method of \``+r+"`.");var o=r||"",i=e._debugSource;i&&(o=i.fileName+":"+i.lineNumber),ym[o]||(ym[o]=!0,d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if(t.defaultProps!==void 0){var s=Xt(t)||"Unknown";kc[s]||(d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.",s),kc[s]=!0)}if(typeof t.getDerivedStateFromProps=="function"){var c=Xt(t)||"Unknown";gm[c]||(d("%s: Function components do not support getDerivedStateFromProps.",c),gm[c]=!0)}if(typeof t.contextType=="object"&&t.contextType!==null){var f=Xt(t)||"Unknown";mm[f]||(d("%s: Function components do not support contextType.",f),mm[f]=!0)}}}var Cm={dehydrated:null,treeContext:null,retryLane:Xr};function km(e){return{baseLanes:e,cachePool:Uk(),transitions:null}}function Gk(e,t){var n=null;return{baseLanes:Vt(e.baseLanes,t),cachePool:n,transitions:e.transitions}}function Kk(e,t,n,r){if(t!==null){var o=t.memoizedState;if(o===null)return!1}return S_(e,hc)}function Zk(e,t){return hd(e.childLanes,t)}function l1(e,t,n){var r=t.pendingProps;f3(t)&&(t.flags|=_n);var o=Ra.current,i=!1,s=(t.flags&_n)!==wt;if(s||Kk(o,e)?(i=!0,t.flags&=~_n):(e===null||e.memoizedState!==null)&&(o=mk(o,pv)),o=Us(o),nl(t,o),e===null){a_(t);var c=t.memoizedState;if(c!==null){var f=c.dehydrated;if(f!==null)return r6(t,f)}var v=r.children,x=r.fallback;if(i){var L=Jk(t,v,x,n),D=t.child;return D.memoizedState=km(n),t.memoizedState=Cm,L}else return Sm(t,v)}else{var V=e.memoizedState;if(V!==null){var X=V.dehydrated;if(X!==null)return o6(e,t,s,r,X,V,n)}if(i){var G=r.fallback,Te=r.children,ft=t6(e,t,Te,G,n),Ze=t.child,Jt=e.child.memoizedState;return Ze.memoizedState=Jt===null?km(n):Gk(Jt,n),Ze.childLanes=Zk(e,n),t.memoizedState=Cm,ft}else{var en=r.children,U=e6(e,t,en,n);return t.memoizedState=null,U}}}function Sm(e,t,n){var r=e.mode,o={mode:"visible",children:t},i=Em(o,r);return i.return=e,e.child=i,i}function Jk(e,t,n,r){var o=e.mode,i=e.child,s={mode:"hidden",children:t},c,f;return(o&rn)===yt&&i!==null?(c=i,c.childLanes=ue,c.pendingProps=s,e.mode&Tn&&(c.actualDuration=0,c.actualStartTime=-1,c.selfBaseDuration=0,c.treeBaseDuration=0),f=cl(n,o,r,null)):(c=Em(s,o),f=cl(n,o,r,null)),c.return=e,f.return=e,c.sibling=f,e.child=c,f}function Em(e,t,n){return u5(e,t,ue,null)}function s1(e,t){return ql(e,t)}function e6(e,t,n,r){var o=e.child,i=o.sibling,s=s1(o,{mode:"visible",children:n});if((t.mode&rn)===yt&&(s.lanes=r),s.return=t,s.sibling=null,i!==null){var c=t.deletions;c===null?(t.deletions=[i],t.flags|=xl):c.push(i)}return t.child=s,s}function t6(e,t,n,r,o){var i=t.mode,s=e.child,c=s.sibling,f={mode:"hidden",children:n},v;if((i&rn)===yt&&t.child!==s){var x=t.child;v=x,v.childLanes=ue,v.pendingProps=f,t.mode&Tn&&(v.actualDuration=0,v.actualStartTime=-1,v.selfBaseDuration=s.selfBaseDuration,v.treeBaseDuration=s.treeBaseDuration),t.deletions=null}else v=s1(s,f),v.subtreeFlags=s.subtreeFlags&mi;var L;return c!==null?L=ql(c,r):(L=cl(r,i,o,null),L.flags|=Or),L.return=t,v.return=t,v.sibling=L,t.child=v,L}function Af(e,t,n,r){r!==null&&i_(r),$s(t,e.child,null,n);var o=t.pendingProps,i=o.children,s=Sm(t,i);return s.flags|=Or,t.memoizedState=null,s}function n6(e,t,n,r,o){var i=t.mode,s={mode:"visible",children:n},c=Em(s,i),f=cl(r,i,o,null);return f.flags|=Or,c.return=t,f.return=t,c.sibling=f,t.child=c,(t.mode&rn)!==yt&&$s(t,e.child,null,o),f}function r6(e,t,n){return(e.mode&rn)===yt?(d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),e.lanes=At):Wp(t)?e.lanes=Tl:e.lanes=Yo,null}function o6(e,t,n,r,o,i,s){if(n)if(t.flags&hi){t.flags&=~hi;var U=fm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));return Af(e,t,s,U)}else{if(t.memoizedState!==null)return t.child=e.child,t.flags|=_n,null;var Z=r.children,H=r.fallback,me=n6(e,t,Z,H,s),Ie=t.child;return Ie.memoizedState=km(s),t.memoizedState=Cm,me}else{if(YC(),(t.mode&rn)===yt)return Af(e,t,s,null);if(Wp(o)){var c,f,v;{var x=sC(o);c=x.digest,f=x.message,v=x.stack}var L;f?L=new Error(f):L=new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");var D=fm(L,c,v);return Af(e,t,s,D)}var V=Vo(s,e.childLanes);if(Da||V){var X=Yf();if(X!==null){var G=px(X,s);if(G!==Xr&&G!==i.retryLane){i.retryLane=G;var Te=Gn;No(e,G),jr(X,e,G,Te)}}Qm();var ft=fm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));return Af(e,t,s,ft)}else if(L0(o)){t.flags|=_n,t.child=e.child;var Ze=AS.bind(null,e);return uC(o,Ze),null}else{QC(t,o,i.treeContext);var Jt=r.children,en=Sm(t,Jt);return en.flags|=pi,en}}}function u1(e,t,n){e.lanes=Vt(e.lanes,t);var r=e.alternate;r!==null&&(r.lanes=Vt(r.lanes,t)),m_(e.return,t,n)}function a6(e,t,n){for(var r=t;r!==null;){if(r.tag===Qe){var o=r.memoizedState;o!==null&&u1(r,n,e)}else if(r.tag===Je)u1(r,n,e);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}function i6(e){for(var t=e,n=null;t!==null;){var r=t.alternate;r!==null&&ff(r)===null&&(n=t),t=t.sibling}return n}function l6(e){if(e!==void 0&&e!=="forwards"&&e!=="backwards"&&e!=="together"&&!vm[e])if(vm[e]=!0,typeof e=="string")switch(e.toLowerCase()){case"together":case"forwards":case"backwards":{d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break}case"forward":case"backward":{d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break}default:d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e);break}else d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}function s6(e,t){e!==void 0&&!Nf[e]&&(e!=="collapsed"&&e!=="hidden"?(Nf[e]=!0,d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',e)):t!=="forwards"&&t!=="backwards"&&(Nf[e]=!0,d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',e)))}function c1(e,t){{var n=ur(e),r=!n&&typeof co(e)=="function";if(n||r){var o=n?"array":"iterable";return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",o,t,o),!1}}return!0}function u6(e,t){if((t==="forwards"||t==="backwards")&&e!==void 0&&e!==null&&e!==!1)if(ur(e)){for(var n=0;n<e.length;n++)if(!c1(e[n],n))return}else{var r=co(e);if(typeof r=="function"){var o=r.call(e);if(o)for(var i=o.next(),s=0;!i.done;i=o.next()){if(!c1(i.value,s))return;s++}}else d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}function Rm(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function d1(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail,s=r.children;l6(o),s6(i,o),u6(s,o),wo(e,t,s,n);var c=Ra.current,f=S_(c,hc);if(f)c=E_(c,hc),t.flags|=_n;else{var v=e!==null&&(e.flags&_n)!==wt;v&&a6(t,t.child,n),c=Us(c)}if(nl(t,c),(t.mode&rn)===yt)t.memoizedState=null;else switch(o){case"forwards":{var x=i6(t.child),L;x===null?(L=t.child,t.child=null):(L=x.sibling,x.sibling=null),Rm(t,!1,L,x,i);break}case"backwards":{var D=null,V=t.child;for(t.child=null;V!==null;){var X=V.alternate;if(X!==null&&ff(X)===null){t.child=V;break}var G=V.sibling;V.sibling=D,D=V,V=G}Rm(t,!0,D,null,i);break}case"together":{Rm(t,!1,null,null,void 0);break}default:t.memoizedState=null}return t.child}function c6(e,t,n){w_(t,t.stateNode.containerInfo);var r=t.pendingProps;return e===null?t.child=$s(t,null,r,n):wo(e,t,r,n),t.child}var f1=!1;function d6(e,t,n){var r=t.type,o=r._context,i=t.pendingProps,s=t.memoizedProps,c=i.value;{"value"in i||f1||(f1=!0,d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var f=t.type.propTypes;f&&ka(f,i,"prop","Context.Provider")}if(ov(t,o,c),s!==null){var v=s.value;if(qo(v,c)){if(s.children===i.children&&!Pd())return Ei(e,t,n)}else lk(t,o,n)}var x=i.children;return wo(e,t,x,n),t.child}var h1=!1;function f6(e,t,n){var r=t.type;r._context===void 0?r!==r.Consumer&&(h1||(h1=!0,d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))):r=r._context;var o=t.pendingProps,i=o.children;typeof i!="function"&&d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),Bs(t,n);var s=Nr(r);wu(t);var c;return wc.current=t,vo(!0),c=i(s),vo(!1),ms(),t.flags|=ps,wo(e,t,c,n),t.child}function Sc(){Da=!0}function $f(e,t){(t.mode&rn)===yt&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=Or)}function Ei(e,t,n){return e!==null&&(t.dependencies=e.dependencies),Pv(),Bc(t.lanes),Vo(n,t.childLanes)?(ak(e,t),t.child):null}function h6(e,t,n){{var r=t.return;if(r===null)throw new Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var o=r.child;if(o===null)throw new Error("Expected parent to have a child.");for(;o.sibling!==t;)if(o=o.sibling,o===null)throw new Error("Expected to find the previous sibling.");o.sibling=n}var i=r.deletions;return i===null?(r.deletions=[e],r.flags|=xl):i.push(e),n.flags|=Or,n}}function Tm(e,t){var n=e.lanes;return!!Vo(n,t)}function p6(e,t,n){switch(t.tag){case F:a1(t);var r=t.stateNode;As();break;case ee:fv(t);break;case Y:{var o=t.type;Va(o)&&Wd(t);break}case A:w_(t,t.stateNode.containerInfo);break;case _e:{var i=t.memoizedProps.value,s=t.type._context;ov(t,s,i);break}case De:{var c=Vo(n,t.childLanes);c&&(t.flags|=ln);{var f=t.stateNode;f.effectDuration=0,f.passiveEffectDuration=0}}break;case Qe:{var v=t.memoizedState;if(v!==null){if(v.dehydrated!==null)return nl(t,Us(Ra.current)),t.flags|=_n,null;var x=t.child,L=x.childLanes;if(Vo(n,L))return l1(e,t,n);nl(t,Us(Ra.current));var D=Ei(e,t,n);return D!==null?D.sibling:null}else nl(t,Us(Ra.current));break}case Je:{var V=(e.flags&_n)!==wt,X=Vo(n,t.childLanes);if(V){if(X)return d1(e,t,n);t.flags|=_n}var G=t.memoizedState;if(G!==null&&(G.rendering=null,G.tail=null,G.lastEffect=null),nl(t,Ra.current),X)break;return null}case Re:case He:return t.lanes=ue,n1(e,t,n)}return Ei(e,t,n)}function p1(e,t,n){if(t._debugNeedsRemount&&e!==null)return h6(e,t,ag(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(e!==null){var r=e.memoizedProps,o=t.pendingProps;if(r!==o||Pd()||t.type!==e.type)Da=!0;else{var i=Tm(e,n);if(!i&&(t.flags&_n)===wt)return Da=!1,p6(e,t,n);(e.flags&Ah)!==wt?Da=!0:Da=!1}}else if(Da=!1,eo()&&UC(t)){var s=t.index,c=HC();P0(t,c,s)}switch(t.lanes=ue,t.tag){case N:return qk(e,t,t.type,n);case Kt:{var f=t.elementType;return Xk(e,t,f,n)}case E:{var v=t.type,x=t.pendingProps,L=t.elementType===v?x:Ma(v,x);return bm(e,t,v,L,n)}case Y:{var D=t.type,V=t.pendingProps,X=t.elementType===D?V:Ma(D,V);return o1(e,t,D,X,n)}case F:return Wk(e,t,n);case ee:return Yk(e,t,n);case P:return Vk(e,t);case Qe:return l1(e,t,n);case A:return c6(e,t,n);case ge:{var G=t.type,Te=t.pendingProps,ft=t.elementType===G?Te:Ma(G,Te);return Jv(e,t,G,ft,n)}case pe:return Fk(e,t,n);case Q:return Pk(e,t,n);case De:return jk(e,t,n);case _e:return d6(e,t,n);case K:return f6(e,t,n);case Dt:{var Ze=t.type,Jt=t.pendingProps,en=Ma(Ze,Jt);if(t.type!==t.elementType){var U=Ze.propTypes;U&&ka(U,en,"prop",Xt(Ze))}return en=Ma(Ze.type,en),e1(e,t,Ze,en,n)}case ye:return t1(e,t,t.type,t.pendingProps,n);case vt:{var Z=t.type,H=t.pendingProps,me=t.elementType===Z?H:Ma(Z,H);return Qk(e,t,Z,me,n)}case Je:return d1(e,t,n);case dt:break;case Re:return n1(e,t,n)}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function Ys(e){e.flags|=ln}function _1(e){e.flags|=Pi,e.flags|=$h}var m1,Mm,g1,y1;m1=function(e,t,n,r){for(var o=t.child;o!==null;){if(o.tag===ee||o.tag===P)I4(e,o.stateNode);else if(o.tag!==A){if(o.child!==null){o.child.return=o,o=o.child;continue}}if(o===t)return;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Mm=function(e,t){},g1=function(e,t,n,r,o){var i=e.memoizedProps;if(i!==r){var s=t.stateNode,c=C_(),f=z4(s,n,i,r,o,c);t.updateQueue=f,f&&Ys(t)}},y1=function(e,t,n,r){n!==r&&Ys(t)};function Ec(e,t){if(!eo())switch(e.tailMode){case"hidden":{for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e.tail=null:r.sibling=null;break}case"collapsed":{for(var o=e.tail,i=null;o!==null;)o.alternate!==null&&(i=o),o=o.sibling;i===null?!t&&e.tail!==null?e.tail.sibling=null:e.tail=null:i.sibling=null;break}}}function no(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=ue,r=wt;if(t){if((e.mode&Tn)!==yt){for(var f=e.selfBaseDuration,v=e.child;v!==null;)n=Vt(n,Vt(v.lanes,v.childLanes)),r|=v.subtreeFlags&mi,r|=v.flags&mi,f+=v.treeBaseDuration,v=v.sibling;e.treeBaseDuration=f}else for(var x=e.child;x!==null;)n=Vt(n,Vt(x.lanes,x.childLanes)),r|=x.subtreeFlags&mi,r|=x.flags&mi,x.return=e,x=x.sibling;e.subtreeFlags|=r}else{if((e.mode&Tn)!==yt){for(var o=e.actualDuration,i=e.selfBaseDuration,s=e.child;s!==null;)n=Vt(n,Vt(s.lanes,s.childLanes)),r|=s.subtreeFlags,r|=s.flags,o+=s.actualDuration,i+=s.treeBaseDuration,s=s.sibling;e.actualDuration=o,e.treeBaseDuration=i}else for(var c=e.child;c!==null;)n=Vt(n,Vt(c.lanes,c.childLanes)),r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;e.subtreeFlags|=r}return e.childLanes=n,t}function _6(e,t,n){if(JC()&&(t.mode&rn)!==yt&&(t.flags&_n)===wt)return q0(t),As(),t.flags|=hi|bu|xo,!1;var r=qd(t);if(n!==null&&n.dehydrated!==null)if(e===null){if(!r)throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(KC(t),no(t),(t.mode&Tn)!==yt){var o=n!==null;if(o){var i=t.child;i!==null&&(t.treeBaseDuration-=i.treeBaseDuration)}}return!1}else{if(As(),(t.flags&_n)===wt&&(t.memoizedState=null),t.flags|=ln,no(t),(t.mode&Tn)!==yt){var s=n!==null;if(s){var c=t.child;c!==null&&(t.treeBaseDuration-=c.treeBaseDuration)}}return!1}else return G0(),!0}function v1(e,t,n){var r=t.pendingProps;switch(t_(t),t.tag){case N:case Kt:case ye:case E:case ge:case pe:case Q:case De:case K:case Dt:return no(t),null;case Y:{var o=t.type;return Va(o)&&jd(t),no(t),null}case F:{var i=t.stateNode;if(zs(t),Kp(t),T_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),e===null||e.child===null){var s=qd(t);if(s)Ys(t);else if(e!==null){var c=e.memoizedState;(!c.isDehydrated||(t.flags&hi)!==wt)&&(t.flags|=wl,G0())}}return Mm(e,t),no(t),null}case ee:{k_(t);var f=dv(),v=t.type;if(e!==null&&t.stateNode!=null)g1(e,t,v,r,f),e.ref!==t.ref&&_1(t);else{if(!r){if(t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return no(t),null}var x=C_(),L=qd(t);if(L)qC(t,f,x)&&Ys(t);else{var D=$4(v,r,f,x,t);m1(D,t,!1,!1),t.stateNode=D,B4(D,v,r,f)&&Ys(t)}t.ref!==null&&_1(t)}return no(t),null}case P:{var V=r;if(e&&t.stateNode!=null){var X=e.memoizedProps;y1(e,t,X,V)}else{if(typeof V!="string"&&t.stateNode===null)throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var G=dv(),Te=C_(),ft=qd(t);ft?GC(t)&&Ys(t):t.stateNode=U4(V,G,Te,t)}return no(t),null}case Qe:{Hs(t);var Ze=t.memoizedState;if(e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){var Jt=_6(e,t,Ze);if(!Jt)return t.flags&xo?t:null}if((t.flags&_n)!==wt)return t.lanes=n,(t.mode&Tn)!==yt&&J_(t),t;var en=Ze!==null,U=e!==null&&e.memoizedState!==null;if(en!==U&&en){var Z=t.child;if(Z.flags|=Cl,(t.mode&rn)!==yt){var H=e===null&&(t.memoizedProps.unstable_avoidThisFallback!==!0||!sn);H||S_(Ra.current,pv)?xS():Qm()}}var me=t.updateQueue;if(me!==null&&(t.flags|=ln),no(t),(t.mode&Tn)!==yt&&en){var Ie=t.child;Ie!==null&&(t.treeBaseDuration-=Ie.treeBaseDuration)}return null}case A:return zs(t),Mm(e,t),e===null&&OC(t.stateNode.containerInfo),no(t),null;case _e:var Ne=t.type._context;return __(Ne,t),no(t),null;case vt:{var St=t.type;return Va(St)&&jd(t),no(t),null}case Je:{Hs(t);var zt=t.memoizedState;if(zt===null)return no(t),null;var Dn=(t.flags&_n)!==wt,un=zt.rendering;if(un===null)if(Dn)Ec(zt,!1);else{var Rr=CS()&&(e===null||(e.flags&_n)===wt);if(!Rr)for(var cn=t.child;cn!==null;){var vr=ff(cn);if(vr!==null){Dn=!0,t.flags|=_n,Ec(zt,!1);var mo=vr.updateQueue;return mo!==null&&(t.updateQueue=mo,t.flags|=ln),t.subtreeFlags=wt,ik(t,n),nl(t,E_(Ra.current,hc)),t.child}cn=cn.sibling}zt.tail!==null&&Yr()>F1()&&(t.flags|=_n,Dn=!0,Ec(zt,!1),t.lanes=yy)}else{if(!Dn){var lo=ff(un);if(lo!==null){t.flags|=_n,Dn=!0;var Zo=lo.updateQueue;if(Zo!==null&&(t.updateQueue=Zo,t.flags|=ln),Ec(zt,!0),zt.tail===null&&zt.tailMode==="hidden"&&!un.alternate&&!eo())return no(t),null}else Yr()*2-zt.renderingStartTime>F1()&&n!==Yo&&(t.flags|=_n,Dn=!0,Ec(zt,!1),t.lanes=yy)}if(zt.isBackwards)un.sibling=t.child,t.child=un;else{var So=zt.last;So!==null?So.sibling=un:t.child=un,zt.last=un}}if(zt.tail!==null){var Eo=zt.tail;zt.rendering=Eo,zt.tail=Eo.sibling,zt.renderingStartTime=Yr(),Eo.sibling=null;var go=Ra.current;return Dn?go=E_(go,hc):go=Us(go),nl(t,go),Eo}return no(t),null}case dt:break;case Re:case He:{Xm(t);var Li=t.memoizedState,Js=Li!==null;if(e!==null){var Pc=e.memoizedState,ei=Pc!==null;ei!==Js&&!Et&&(t.flags|=Cl)}return!Js||(t.mode&rn)===yt?no(t):Vo(Ja,Yo)&&(no(t),t.subtreeFlags&(Or|ln)&&(t.flags|=Cl)),null}case we:return null;case rt:return null}throw new Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function m6(e,t,n){switch(t_(t),t.tag){case Y:{var r=t.type;Va(r)&&jd(t);var o=t.flags;return o&xo?(t.flags=o&~xo|_n,(t.mode&Tn)!==yt&&J_(t),t):null}case F:{var i=t.stateNode;zs(t),Kp(t),T_();var s=t.flags;return(s&xo)!==wt&&(s&_n)===wt?(t.flags=s&~xo|_n,t):null}case ee:return k_(t),null;case Qe:{Hs(t);var c=t.memoizedState;if(c!==null&&c.dehydrated!==null){if(t.alternate===null)throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");As()}var f=t.flags;return f&xo?(t.flags=f&~xo|_n,(t.mode&Tn)!==yt&&J_(t),t):null}case Je:return Hs(t),null;case A:return zs(t),null;case _e:var v=t.type._context;return __(v,t),null;case Re:case He:return Xm(t),null;case we:return null;default:return null}}function b1(e,t,n){switch(t_(t),t.tag){case Y:{var r=t.type.childContextTypes;r!=null&&jd(t);break}case F:{var o=t.stateNode;zs(t),Kp(t),T_();break}case ee:{k_(t);break}case A:zs(t);break;case Qe:Hs(t);break;case Je:Hs(t);break;case _e:var i=t.type._context;__(i,t);break;case Re:case He:Xm(t);break}}var x1=null;x1=new Set;var If=!1,ro=!1,g6=typeof WeakSet=="function"?WeakSet:Set,Ve=null,Vs=null,Xs=null;function y6(e){Lh(null,function(){throw e}),Oh()}var v6=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,e.mode&Tn)try{Ka(),t.componentWillUnmount()}finally{Ga(e)}else t.componentWillUnmount()};function w1(e,t){try{al(Br,e)}catch(n){Pn(e,t,n)}}function Dm(e,t,n){try{v6(e,n)}catch(r){Pn(e,t,r)}}function b6(e,t,n){try{n.componentDidMount()}catch(r){Pn(e,t,r)}}function C1(e,t){try{E1(e)}catch(n){Pn(e,t,n)}}function Qs(e,t){var n=e.ref;if(n!==null)if(typeof n=="function"){var r;try{if(br&&lr&&e.mode&Tn)try{Ka(),r=n(null)}finally{Ga(e)}else r=n(null)}catch(o){Pn(e,t,o)}typeof r=="function"&&d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",Bt(e))}else n.current=null}function Bf(e,t,n){try{n()}catch(r){Pn(e,t,r)}}var k1=null,S1=!1;function x6(e,t){k1=N4(e.containerInfo),Ve=t,w6();var n=S1;return S1=!1,k1=null,n}function w6(){for(;Ve!==null;){var e=Ve,t=e.child;(e.subtreeFlags&Bh)!==wt&&t!==null?(t.return=e,Ve=t):C6()}}function C6(){for(;Ve!==null;){var e=Ve;Fn(e);try{k6(e)}catch(n){Pn(e,e.return,n)}kr();var t=e.sibling;if(t!==null){t.return=e.return,Ve=t;return}Ve=e.return}}function k6(e){var t=e.alternate,n=e.flags;if((n&wl)!==wt){switch(Fn(e),e.tag){case E:case ge:case ye:break;case Y:{if(t!==null){var r=t.memoizedProps,o=t.memoizedState,i=e.stateNode;e.type===e.elementType&&!Wl&&(i.props!==e.memoizedProps&&d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Bt(e)||"instance"),i.state!==e.memoizedState&&d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Bt(e)||"instance"));var s=i.getSnapshotBeforeUpdate(e.elementType===e.type?r:Ma(e.type,r),o);{var c=x1;s===void 0&&!c.has(e.type)&&(c.add(e.type),d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",Bt(e)))}i.__reactInternalSnapshotBeforeUpdate=s}break}case F:{{var f=e.stateNode;oC(f.containerInfo)}break}case ee:case P:case A:case vt:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}kr()}}function La(e,t,n){var r=t.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var i=o.next,s=i;do{if((s.tag&e)===e){var c=s.destroy;s.destroy=void 0,c!==void 0&&((e&to)!==Ao?U2(t):(e&Br)!==Ao&&hy(t),(e&Xa)!==Ao&&Uc(!0),Bf(t,n,c),(e&Xa)!==Ao&&Uc(!1),(e&to)!==Ao?H2():(e&Br)!==Ao&&py())}s=s.next}while(s!==i)}}function al(e,t){var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var o=r.next,i=o;do{if((i.tag&e)===e){(e&to)!==Ao?B2(t):(e&Br)!==Ao&&F2(t);var s=i.create;(e&Xa)!==Ao&&Uc(!0),i.destroy=s(),(e&Xa)!==Ao&&Uc(!1),(e&to)!==Ao?z2():(e&Br)!==Ao&&P2();{var c=i.destroy;if(c!==void 0&&typeof c!="function"){var f=void 0;(i.tag&Br)!==wt?f="useLayoutEffect":(i.tag&Xa)!==wt?f="useInsertionEffect":f="useEffect";var v=void 0;c===null?v=" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof c.then=="function"?v=`

It looks like you wrote `+f+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+f+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching`:v=" You returned: "+c,d("%s must not return anything besides a function, which is used for clean-up.%s",f,v)}}}i=i.next}while(i!==o)}}function S6(e,t){if((t.flags&ln)!==wt)switch(t.tag){case De:{var n=t.stateNode.passiveEffectDuration,r=t.memoizedProps,o=r.id,i=r.onPostCommit,s=Hv(),c=t.alternate===null?"mount":"update";Uv()&&(c="nested-update"),typeof i=="function"&&i(o,c,n,s);var f=t.return;e:for(;f!==null;){switch(f.tag){case F:var v=f.stateNode;v.passiveEffectDuration+=n;break e;case De:var x=f.stateNode;x.passiveEffectDuration+=n;break e}f=f.return}break}}}function E6(e,t,n,r){if((n.flags&xu)!==wt)switch(n.tag){case E:case ge:case ye:{if(!ro)if(n.mode&Tn)try{Ka(),al(Br|Ir,n)}finally{Ga(n)}else al(Br|Ir,n);break}case Y:{var o=n.stateNode;if(n.flags&ln&&!ro)if(t===null)if(n.type===n.elementType&&!Wl&&(o.props!==n.memoizedProps&&d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Bt(n)||"instance"),o.state!==n.memoizedState&&d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Bt(n)||"instance")),n.mode&Tn)try{Ka(),o.componentDidMount()}finally{Ga(n)}else o.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:Ma(n.type,t.memoizedProps),s=t.memoizedState;if(n.type===n.elementType&&!Wl&&(o.props!==n.memoizedProps&&d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Bt(n)||"instance"),o.state!==n.memoizedState&&d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Bt(n)||"instance")),n.mode&Tn)try{Ka(),o.componentDidUpdate(i,s,o.__reactInternalSnapshotBeforeUpdate)}finally{Ga(n)}else o.componentDidUpdate(i,s,o.__reactInternalSnapshotBeforeUpdate)}var c=n.updateQueue;c!==null&&(n.type===n.elementType&&!Wl&&(o.props!==n.memoizedProps&&d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Bt(n)||"instance"),o.state!==n.memoizedState&&d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Bt(n)||"instance")),cv(n,c,o));break}case F:{var f=n.updateQueue;if(f!==null){var v=null;if(n.child!==null)switch(n.child.tag){case ee:v=n.child.stateNode;break;case Y:v=n.child.stateNode;break}cv(n,f,v)}break}case ee:{var x=n.stateNode;if(t===null&&n.flags&ln){var L=n.type,D=n.memoizedProps;W4(x,L,D)}break}case P:break;case A:break;case De:{{var V=n.memoizedProps,X=V.onCommit,G=V.onRender,Te=n.stateNode.effectDuration,ft=Hv(),Ze=t===null?"mount":"update";Uv()&&(Ze="nested-update"),typeof G=="function"&&G(n.memoizedProps.id,Ze,n.actualDuration,n.treeBaseDuration,n.actualStartTime,ft);{typeof X=="function"&&X(n.memoizedProps.id,Ze,Te,ft),TS(n);var Jt=n.return;e:for(;Jt!==null;){switch(Jt.tag){case F:var en=Jt.stateNode;en.effectDuration+=Te;break e;case De:var U=Jt.stateNode;U.effectDuration+=Te;break e}Jt=Jt.return}}}break}case Qe:{A6(e,n);break}case Je:case vt:case dt:case Re:case He:case rt:break;default:throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}ro||n.flags&Pi&&E1(n)}function R6(e){switch(e.tag){case E:case ge:case ye:{if(e.mode&Tn)try{Ka(),w1(e,e.return)}finally{Ga(e)}else w1(e,e.return);break}case Y:{var t=e.stateNode;typeof t.componentDidMount=="function"&&b6(e,e.return,t),C1(e,e.return);break}case ee:{C1(e,e.return);break}}}function T6(e,t){for(var n=null,r=e;;){if(r.tag===ee){if(n===null){n=r;try{var o=r.stateNode;t?eC(o):nC(r.stateNode,r.memoizedProps)}catch(s){Pn(e,e.return,s)}}}else if(r.tag===P){if(n===null)try{var i=r.stateNode;t?tC(i):rC(i,r.memoizedProps)}catch(s){Pn(e,e.return,s)}}else if(!((r.tag===Re||r.tag===He)&&r.memoizedState!==null&&r!==e)){if(r.child!==null){r.child.return=r,r=r.child;continue}}if(r===e)return;for(;r.sibling===null;){if(r.return===null||r.return===e)return;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}}function E1(e){var t=e.ref;if(t!==null){var n=e.stateNode,r;if(e.tag===ee?r=n:r=n,typeof t=="function"){var o;if(e.mode&Tn)try{Ka(),o=t(r)}finally{Ga(e)}else o=t(r);typeof o=="function"&&d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",Bt(e))}else t.hasOwnProperty("current")||d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",Bt(e)),t.current=r}}function M6(e){var t=e.alternate;t!==null&&(t.return=null),e.return=null}function R1(e){var t=e.alternate;t!==null&&(e.alternate=null,R1(t));{if(e.child=null,e.deletions=null,e.sibling=null,e.tag===ee){var n=e.stateNode;n!==null&&$C(n)}e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}}function D6(e){for(var t=e.return;t!==null;){if(T1(t))return t;t=t.return}throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}function T1(e){return e.tag===ee||e.tag===F||e.tag===A}function M1(e){var t=e;e:for(;;){for(;t.sibling===null;){if(t.return===null||T1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==ee&&t.tag!==P&&t.tag!==gt;){if(t.flags&Or||t.child===null||t.tag===A)continue e;t.child.return=t,t=t.child}if(!(t.flags&Or))return t.stateNode}}function L6(e){var t=D6(e);switch(t.tag){case ee:{var n=t.stateNode;t.flags&vu&&(D0(n),t.flags&=~vu);var r=M1(e);Om(e,r,n);break}case F:case A:{var o=t.stateNode.containerInfo,i=M1(e);Lm(e,i,o);break}default:throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function Lm(e,t,n){var r=e.tag,o=r===ee||r===P;if(o){var i=e.stateNode;t?G4(n,i,t):Q4(n,i)}else if(r!==A){var s=e.child;if(s!==null){Lm(s,t,n);for(var c=s.sibling;c!==null;)Lm(c,t,n),c=c.sibling}}}function Om(e,t,n){var r=e.tag,o=r===ee||r===P;if(o){var i=e.stateNode;t?q4(n,i,t):X4(n,i)}else if(r!==A){var s=e.child;if(s!==null){Om(s,t,n);for(var c=s.sibling;c!==null;)Om(c,t,n),c=c.sibling}}}var oo=null,Oa=!1;function O6(e,t,n){{var r=t;e:for(;r!==null;){switch(r.tag){case ee:{oo=r.stateNode,Oa=!1;break e}case F:{oo=r.stateNode.containerInfo,Oa=!0;break e}case A:{oo=r.stateNode.containerInfo,Oa=!0;break e}}r=r.return}if(oo===null)throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");D1(e,t,n),oo=null,Oa=!1}M6(n)}function il(e,t,n){for(var r=n.child;r!==null;)D1(e,t,r),r=r.sibling}function D1(e,t,n){switch(N2(n),n.tag){case ee:ro||Qs(n,t);case P:{{var r=oo,o=Oa;oo=null,il(e,t,n),oo=r,Oa=o,oo!==null&&(Oa?Z4(oo,n.stateNode):K4(oo,n.stateNode))}return}case gt:{oo!==null&&(Oa?J4(oo,n.stateNode):jp(oo,n.stateNode));return}case A:{{var i=oo,s=Oa;oo=n.stateNode.containerInfo,Oa=!0,il(e,t,n),oo=i,Oa=s}return}case E:case ge:case Dt:case ye:{if(!ro){var c=n.updateQueue;if(c!==null){var f=c.lastEffect;if(f!==null){var v=f.next,x=v;do{var L=x,D=L.destroy,V=L.tag;D!==void 0&&((V&Xa)!==Ao?Bf(n,t,D):(V&Br)!==Ao&&(hy(n),n.mode&Tn?(Ka(),Bf(n,t,D),Ga(n)):Bf(n,t,D),py())),x=x.next}while(x!==v)}}}il(e,t,n);return}case Y:{if(!ro){Qs(n,t);var X=n.stateNode;typeof X.componentWillUnmount=="function"&&Dm(n,t,X)}il(e,t,n);return}case dt:{il(e,t,n);return}case Re:{if(n.mode&rn){var G=ro;ro=G||n.memoizedState!==null,il(e,t,n),ro=G}else il(e,t,n);break}default:{il(e,t,n);return}}}function N6(e){var t=e.memoizedState}function A6(e,t){var n=t.memoizedState;if(n===null){var r=t.alternate;if(r!==null){var o=r.memoizedState;if(o!==null){var i=o.dehydrated;i!==null&&yC(i)}}}}function L1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new g6),t.forEach(function(r){var o=$S.bind(null,e,r);if(!n.has(r)){if(n.add(r),wa)if(Vs!==null&&Xs!==null)zc(Xs,Vs);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");r.then(o,o)}})}}function $6(e,t,n){Vs=n,Xs=e,Fn(t),O1(t,e),Fn(t),Vs=null,Xs=null}function Na(e,t,n){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{O6(e,t,i)}catch(f){Pn(i,t,f)}}var s=cu();if(t.subtreeFlags&zh)for(var c=t.child;c!==null;)Fn(c),O1(c,e),c=c.sibling;Fn(s)}function O1(e,t,n){var r=e.alternate,o=e.flags;switch(e.tag){case E:case ge:case Dt:case ye:{if(Na(t,e),Za(e),o&ln){try{La(Xa|Ir,e,e.return),al(Xa|Ir,e)}catch(St){Pn(e,e.return,St)}if(e.mode&Tn){try{Ka(),La(Br|Ir,e,e.return)}catch(St){Pn(e,e.return,St)}Ga(e)}else try{La(Br|Ir,e,e.return)}catch(St){Pn(e,e.return,St)}}return}case Y:{Na(t,e),Za(e),o&Pi&&r!==null&&Qs(r,r.return);return}case ee:{Na(t,e),Za(e),o&Pi&&r!==null&&Qs(r,r.return);{if(e.flags&vu){var i=e.stateNode;try{D0(i)}catch(St){Pn(e,e.return,St)}}if(o&ln){var s=e.stateNode;if(s!=null){var c=e.memoizedProps,f=r!==null?r.memoizedProps:c,v=e.type,x=e.updateQueue;if(e.updateQueue=null,x!==null)try{Y4(s,x,v,f,c,e)}catch(St){Pn(e,e.return,St)}}}}return}case P:{if(Na(t,e),Za(e),o&ln){if(e.stateNode===null)throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var L=e.stateNode,D=e.memoizedProps,V=r!==null?r.memoizedProps:D;try{V4(L,V,D)}catch(St){Pn(e,e.return,St)}}return}case F:{if(Na(t,e),Za(e),o&ln&&r!==null){var X=r.memoizedState;if(X.isDehydrated)try{gC(t.containerInfo)}catch(St){Pn(e,e.return,St)}}return}case A:{Na(t,e),Za(e);return}case Qe:{Na(t,e),Za(e);var G=e.child;if(G.flags&Cl){var Te=G.stateNode,ft=G.memoizedState,Ze=ft!==null;if(Te.isHidden=Ze,Ze){var Jt=G.alternate!==null&&G.alternate.memoizedState!==null;Jt||bS()}}if(o&ln){try{N6(e)}catch(St){Pn(e,e.return,St)}L1(e)}return}case Re:{var en=r!==null&&r.memoizedState!==null;if(e.mode&rn){var U=ro;ro=U||en,Na(t,e),ro=U}else Na(t,e);if(Za(e),o&Cl){var Z=e.stateNode,H=e.memoizedState,me=H!==null,Ie=e;if(Z.isHidden=me,me&&!en&&(Ie.mode&rn)!==yt){Ve=Ie;for(var Ne=Ie.child;Ne!==null;)Ve=Ne,B6(Ne),Ne=Ne.sibling}T6(Ie,me)}return}case Je:{Na(t,e),Za(e),o&ln&&L1(e);return}case dt:return;default:{Na(t,e),Za(e);return}}}function Za(e){var t=e.flags;if(t&Or){try{L6(e)}catch(n){Pn(e,e.return,n)}e.flags&=~Or}t&pi&&(e.flags&=~pi)}function I6(e,t,n){Vs=n,Xs=t,Ve=e,N1(e,t,n),Vs=null,Xs=null}function N1(e,t,n){for(var r=(e.mode&rn)!==yt;Ve!==null;){var o=Ve,i=o.child;if(o.tag===Re&&r){var s=o.memoizedState!==null,c=s||If;if(c){Nm(e,t,n);continue}else{var f=o.alternate,v=f!==null&&f.memoizedState!==null,x=v||ro,L=If,D=ro;If=c,ro=x,ro&&!D&&(Ve=o,z6(o));for(var V=i;V!==null;)Ve=V,N1(V,t,n),V=V.sibling;Ve=o,If=L,ro=D,Nm(e,t,n);continue}}(o.subtreeFlags&xu)!==wt&&i!==null?(i.return=o,Ve=i):Nm(e,t,n)}}function Nm(e,t,n){for(;Ve!==null;){var r=Ve;if((r.flags&xu)!==wt){var o=r.alternate;Fn(r);try{E6(t,o,r,n)}catch(s){Pn(r,r.return,s)}kr()}if(r===e){Ve=null;return}var i=r.sibling;if(i!==null){i.return=r.return,Ve=i;return}Ve=r.return}}function B6(e){for(;Ve!==null;){var t=Ve,n=t.child;switch(t.tag){case E:case ge:case Dt:case ye:{if(t.mode&Tn)try{Ka(),La(Br,t,t.return)}finally{Ga(t)}else La(Br,t,t.return);break}case Y:{Qs(t,t.return);var r=t.stateNode;typeof r.componentWillUnmount=="function"&&Dm(t,t.return,r);break}case ee:{Qs(t,t.return);break}case Re:{var o=t.memoizedState!==null;if(o){A1(e);continue}break}}n!==null?(n.return=t,Ve=n):A1(e)}}function A1(e){for(;Ve!==null;){var t=Ve;if(t===e){Ve=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Ve=n;return}Ve=t.return}}function z6(e){for(;Ve!==null;){var t=Ve,n=t.child;if(t.tag===Re){var r=t.memoizedState!==null;if(r){$1(e);continue}}n!==null?(n.return=t,Ve=n):$1(e)}}function $1(e){for(;Ve!==null;){var t=Ve;Fn(t);try{R6(t)}catch(r){Pn(t,t.return,r)}if(kr(),t===e){Ve=null;return}var n=t.sibling;if(n!==null){n.return=t.return,Ve=n;return}Ve=t.return}}function U6(e,t,n,r){Ve=t,H6(t,e,n,r)}function H6(e,t,n,r){for(;Ve!==null;){var o=Ve,i=o.child;(o.subtreeFlags&_s)!==wt&&i!==null?(i.return=o,Ve=i):F6(e,t,n,r)}}function F6(e,t,n,r){for(;Ve!==null;){var o=Ve;if((o.flags&xa)!==wt){Fn(o);try{P6(t,o,n,r)}catch(s){Pn(o,o.return,s)}kr()}if(o===e){Ve=null;return}var i=o.sibling;if(i!==null){i.return=o.return,Ve=i;return}Ve=o.return}}function P6(e,t,n,r){switch(t.tag){case E:case ge:case ye:{if(t.mode&Tn){Z_();try{al(to|Ir,t)}finally{K_(t)}}else al(to|Ir,t);break}}}function j6(e){Ve=e,W6()}function W6(){for(;Ve!==null;){var e=Ve,t=e.child;if((Ve.flags&xl)!==wt){var n=e.deletions;if(n!==null){for(var r=0;r<n.length;r++){var o=n[r];Ve=o,X6(o,e)}{var i=e.alternate;if(i!==null){var s=i.child;if(s!==null){i.child=null;do{var c=s.sibling;s.sibling=null,s=c}while(s!==null)}}}Ve=e}}(e.subtreeFlags&_s)!==wt&&t!==null?(t.return=e,Ve=t):Y6()}}function Y6(){for(;Ve!==null;){var e=Ve;(e.flags&xa)!==wt&&(Fn(e),V6(e),kr());var t=e.sibling;if(t!==null){t.return=e.return,Ve=t;return}Ve=e.return}}function V6(e){switch(e.tag){case E:case ge:case ye:{e.mode&Tn?(Z_(),La(to|Ir,e,e.return),K_(e)):La(to|Ir,e,e.return);break}}}function X6(e,t){for(;Ve!==null;){var n=Ve;Fn(n),q6(n,t),kr();var r=n.child;r!==null?(r.return=n,Ve=r):Q6(e)}}function Q6(e){for(;Ve!==null;){var t=Ve,n=t.sibling,r=t.return;if(R1(t),t===e){Ve=null;return}if(n!==null){n.return=r,Ve=n;return}Ve=r}}function q6(e,t){switch(e.tag){case E:case ge:case ye:{e.mode&Tn?(Z_(),La(to,e,t),K_(e)):La(to,e,t);break}}}function G6(e){switch(e.tag){case E:case ge:case ye:{try{al(Br|Ir,e)}catch(n){Pn(e,e.return,n)}break}case Y:{var t=e.stateNode;try{t.componentDidMount()}catch(n){Pn(e,e.return,n)}break}}}function K6(e){switch(e.tag){case E:case ge:case ye:{try{al(to|Ir,e)}catch(t){Pn(e,e.return,t)}break}}}function Z6(e){switch(e.tag){case E:case ge:case ye:{try{La(Br|Ir,e,e.return)}catch(n){Pn(e,e.return,n)}break}case Y:{var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Dm(e,e.return,t);break}}}function J6(e){switch(e.tag){case E:case ge:case ye:try{La(to|Ir,e,e.return)}catch(t){Pn(e,e.return,t)}}}var eS=0,tS=1,nS=2,rS=3,oS=4;if(typeof Symbol=="function"&&Symbol.for){var Rc=Symbol.for;eS=Rc("selector.component"),tS=Rc("selector.has_pseudo_class"),nS=Rc("selector.role"),rS=Rc("selector.test_id"),oS=Rc("selector.text")}var aS=[];function iS(){aS.forEach(function(e){return e()})}var lS=u.ReactCurrentActQueue;function sS(e){{var t=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0,n=typeof jest<"u";return n&&t!==!1}}function I1(){{var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return!e&&lS.current!==null&&d("The current testing environment is not configured to support act(...)"),e}}var uS=Math.ceil,Am=u.ReactCurrentDispatcher,$m=u.ReactCurrentOwner,ao=u.ReactCurrentBatchConfig,Aa=u.ReactCurrentActQueue,Hr=0,B1=1,io=2,ca=4,Ri=0,Tc=1,Yl=2,zf=3,Mc=4,z1=5,Im=6,on=Hr,Co=null,fr=null,Fr=ue,Ja=ue,Bm=Gi(ue),Pr=Ri,Dc=null,zm=ue,Uf=ue,Lc=ue,Hf=ue,Oc=null,$o=null,Um=0,U1=500,H1=1/0,cS=500,Ti=null;function Nc(){H1=Yr()+cS}function F1(){return H1}var Ff=!1,Hm=null,qs=null,Vl=!1,ll=null,Ac=ue,Fm=[],Pm=null,dS=50,$c=0,jm=null,Wm=!1,Pf=!1,fS=50,Gs=0,jf=null,Ic=Gn,Wf=ue,P1=!1;function Yf(){return Co}function ko(){return(on&(io|ca))!==Hr?Yr():(Ic!==Gn||(Ic=Yr()),Ic)}function sl(e){var t=e.mode;if((t&rn)===yt)return At;if((on&io)!==Hr&&Fr!==ue)return Tu(Fr);var n=nk()!==tk;if(n){if(ao.transition!==null){var r=ao.transition;r._updatedFibers||(r._updatedFibers=new Set),r._updatedFibers.add(e)}return Wf===Xr&&(Wf=wy()),Wf}var o=Ca();if(o!==Xr)return o;var i=H4();return i}function hS(e){var t=e.mode;return(t&rn)===yt?At:cx()}function jr(e,t,n,r){BS(),P1&&d("useInsertionEffect must not schedule updates."),Wm&&(Pf=!0),Mu(e,n,r),(on&io)!==ue&&e===Co?HS(t):(wa&&Sy(e,t,n),FS(t),e===Co&&((on&io)===Hr&&(Lc=Vt(Lc,n)),Pr===Mc&&ul(e,Fr)),Io(e,r),n===At&&on===Hr&&(t.mode&rn)===yt&&!Aa.isBatchingLegacy&&(Nc(),F0()))}function pS(e,t,n){var r=e.current;r.lanes=t,Mu(e,t,n),Io(e,n)}function _S(e){return(on&io)!==Hr}function Io(e,t){var n=e.callbackNode;ox(e,t);var r=dd(e,e===Co?Fr:ue);if(r===ue){n!==null&&o5(n),e.callbackNode=null,e.callbackPriority=Xr;return}var o=Dl(r),i=e.callbackPriority;if(i===o&&!(Aa.current!==null&&n!==Km)){n==null&&i!==At&&d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}n!=null&&o5(n);var s;if(o===At)e.tag===Ki?(Aa.isBatchingLegacy!==null&&(Aa.didScheduleLegacyUpdate=!0),zC(Y1.bind(null,e))):H0(Y1.bind(null,e)),Aa.current!==null?Aa.current.push(Zi):P4(function(){(on&(io|ca))===Hr&&Zi()}),s=null;else{var c;switch(Ty(r)){case Xo:c=ld;break;case yi:c=Uh;break;case vi:c=El;break;case pd:c=Hh;break;default:c=El;break}s=Zm(c,j1.bind(null,e))}e.callbackPriority=o,e.callbackNode=s}function j1(e,t){if(Tk(),Ic=Gn,Wf=ue,(on&(io|ca))!==Hr)throw new Error("Should not already be working.");var n=e.callbackNode,r=Di();if(r&&e.callbackNode!==n)return null;var o=dd(e,e===Co?Fr:ue);if(o===ue)return null;var i=!fd(e,o)&&!ux(e,o)&&!t,s=i?SS(e,o):Xf(e,o);if(s!==Ri){if(s===Yl){var c=sp(e);c!==ue&&(o=c,s=Ym(e,c))}if(s===Tc){var f=Dc;throw Xl(e,ue),ul(e,o),Io(e,Yr()),f}if(s===Im)ul(e,o);else{var v=!fd(e,o),x=e.current.alternate;if(v&&!gS(x)){if(s=Xf(e,o),s===Yl){var L=sp(e);L!==ue&&(o=L,s=Ym(e,L))}if(s===Tc){var D=Dc;throw Xl(e,ue),ul(e,o),Io(e,Yr()),D}}e.finishedWork=x,e.finishedLanes=o,mS(e,s,o)}}return Io(e,Yr()),e.callbackNode===n?j1.bind(null,e):null}function Ym(e,t){var n=Oc;if(_d(e)){var r=Xl(e,t);r.flags|=hi,LC(e.containerInfo)}var o=Xf(e,t);if(o!==Yl){var i=$o;$o=n,i!==null&&W1(i)}return o}function W1(e){$o===null?$o=e:$o.push.apply($o,e)}function mS(e,t,n){switch(t){case Ri:case Tc:throw new Error("Root did not complete. This is a bug in React.");case Yl:{Ql(e,$o,Ti);break}case zf:{if(ul(e,n),by(n)&&!a5()){var r=Um+U1-Yr();if(r>10){var o=dd(e,ue);if(o!==ue)break;var i=e.suspendedLanes;if(!bs(i,n)){var s=ko();ky(e,i);break}e.timeoutHandle=Fp(Ql.bind(null,e,$o,Ti),r);break}}Ql(e,$o,Ti);break}case Mc:{if(ul(e,n),sx(n))break;if(!a5()){var c=nx(e,n),f=c,v=Yr()-f,x=IS(v)-v;if(x>10){e.timeoutHandle=Fp(Ql.bind(null,e,$o,Ti),x);break}}Ql(e,$o,Ti);break}case z1:{Ql(e,$o,Ti);break}default:throw new Error("Unknown root exit status.")}}function gS(e){for(var t=e;;){if(t.flags&ad){var n=t.updateQueue;if(n!==null){var r=n.stores;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o],s=i.getSnapshot,c=i.value;try{if(!qo(s(),c))return!1}catch{return!1}}}}var f=t.child;if(t.subtreeFlags&ad&&f!==null){f.return=t,t=f;continue}if(t===e)return!0;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}return!0}function ul(e,t){t=hd(t,Hf),t=hd(t,Lc),fx(e,t)}function Y1(e){if(Mk(),(on&(io|ca))!==Hr)throw new Error("Should not already be working.");Di();var t=dd(e,ue);if(!Vo(t,At))return Io(e,Yr()),null;var n=Xf(e,t);if(e.tag!==Ki&&n===Yl){var r=sp(e);r!==ue&&(t=r,n=Ym(e,r))}if(n===Tc){var o=Dc;throw Xl(e,ue),ul(e,t),Io(e,Yr()),o}if(n===Im)throw new Error("Root did not complete. This is a bug in React.");var i=e.current.alternate;return e.finishedWork=i,e.finishedLanes=t,Ql(e,$o,Ti),Io(e,Yr()),null}function yS(e,t){t!==ue&&(fp(e,Vt(t,At)),Io(e,Yr()),(on&(io|ca))===Hr&&(Nc(),Zi()))}function Vm(e,t){var n=on;on|=B1;try{return e(t)}finally{on=n,on===Hr&&!Aa.isBatchingLegacy&&(Nc(),F0())}}function vS(e,t,n,r,o){var i=Ca(),s=ao.transition;try{return ao.transition=null,Qr(Xo),e(t,n,r,o)}finally{Qr(i),ao.transition=s,on===Hr&&Nc()}}function Mi(e){ll!==null&&ll.tag===Ki&&(on&(io|ca))===Hr&&Di();var t=on;on|=B1;var n=ao.transition,r=Ca();try{return ao.transition=null,Qr(Xo),e?e():void 0}finally{Qr(r),ao.transition=n,on=t,(on&(io|ca))===Hr&&Zi()}}function V1(){return(on&(io|ca))!==Hr}function Vf(e,t){po(Bm,Ja,e),Ja=Vt(Ja,t),zm=Vt(zm,t)}function Xm(e){Ja=Bm.current,ho(Bm,e)}function Xl(e,t){e.finishedWork=null,e.finishedLanes=ue;var n=e.timeoutHandle;if(n!==Pp&&(e.timeoutHandle=Pp,F4(n)),fr!==null)for(var r=fr.return;r!==null;){var o=r.alternate;b1(o,r),r=r.return}Co=e;var i=ql(e.current,null);return fr=i,Fr=Ja=zm=t,Pr=Ri,Dc=null,Uf=ue,Lc=ue,Hf=ue,Oc=null,$o=null,uk(),Ea.discardPendingWarnings(),i}function X1(e,t){do{var n=fr;try{if(tf(),mv(),kr(),$m.current=null,n===null||n.return===null){Pr=Tc,Dc=t,fr=null;return}if(br&&n.mode&Tn&&Lf(n,!0),ir)if(ms(),t!==null&&typeof t=="object"&&typeof t.then=="function"){var r=t;W2(n,r,Fr)}else j2(n,t,Fr);zk(e,n.return,n,t,Fr),K1(n)}catch(o){t=o,fr===n&&n!==null?(n=n.return,fr=n):n=fr;continue}return}while(!0)}function Q1(){var e=Am.current;return Am.current=Ef,e===null?Ef:e}function q1(e){Am.current=e}function bS(){Um=Yr()}function Bc(e){Uf=Vt(e,Uf)}function xS(){Pr===Ri&&(Pr=zf)}function Qm(){(Pr===Ri||Pr===zf||Pr===Yl)&&(Pr=Mc),Co!==null&&(up(Uf)||up(Lc))&&ul(Co,Fr)}function wS(e){Pr!==Mc&&(Pr=Yl),Oc===null?Oc=[e]:Oc.push(e)}function CS(){return Pr===Ri}function Xf(e,t){var n=on;on|=io;var r=Q1();if(Co!==e||Fr!==t){if(wa){var o=e.memoizedUpdaters;o.size>0&&(zc(e,Fr),o.clear()),Ey(e,t)}Ti=Ry(),Xl(e,t)}_y(t);do try{kS();break}catch(i){X1(e,i)}while(!0);if(tf(),on=n,q1(r),fr!==null)throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return my(),Co=null,Fr=ue,Pr}function kS(){for(;fr!==null;)G1(fr)}function SS(e,t){var n=on;on|=io;var r=Q1();if(Co!==e||Fr!==t){if(wa){var o=e.memoizedUpdaters;o.size>0&&(zc(e,Fr),o.clear()),Ey(e,t)}Ti=Ry(),Nc(),Xl(e,t)}_y(t);do try{ES();break}catch(i){X1(e,i)}while(!0);return tf(),q1(r),on=n,fr!==null?(q2(),Ri):(my(),Co=null,Fr=ue,Pr)}function ES(){for(;fr!==null&&!C2();)G1(fr)}function G1(e){var t=e.alternate;Fn(e);var n;(e.mode&Tn)!==yt?(G_(e),n=qm(t,e,Ja),Lf(e,!0)):n=qm(t,e,Ja),kr(),e.memoizedProps=e.pendingProps,n===null?K1(e):fr=n,$m.current=null}function K1(e){var t=e;do{var n=t.alternate,r=t.return;if((t.flags&bu)===wt){Fn(t);var o=void 0;if((t.mode&Tn)===yt?o=v1(n,t,Ja):(G_(t),o=v1(n,t,Ja),Lf(t,!1)),kr(),o!==null){fr=o;return}}else{var i=m6(n,t);if(i!==null){i.flags&=g2,fr=i;return}if((t.mode&Tn)!==yt){Lf(t,!1);for(var s=t.actualDuration,c=t.child;c!==null;)s+=c.actualDuration,c=c.sibling;t.actualDuration=s}if(r!==null)r.flags|=bu,r.subtreeFlags=wt,r.deletions=null;else{Pr=Im,fr=null;return}}var f=t.sibling;if(f!==null){fr=f;return}t=r,fr=t}while(t!==null);Pr===Ri&&(Pr=z1)}function Ql(e,t,n){var r=Ca(),o=ao.transition;try{ao.transition=null,Qr(Xo),RS(e,t,n,r)}finally{ao.transition=o,Qr(r)}return null}function RS(e,t,n,r){do Di();while(ll!==null);if(zS(),(on&(io|ca))!==Hr)throw new Error("Should not already be working.");var o=e.finishedWork,i=e.finishedLanes;if(I2(i),o===null)return fy(),null;if(i===ue&&d("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=ue,o===e.current)throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e.callbackNode=null,e.callbackPriority=Xr;var s=Vt(o.lanes,o.childLanes);hx(e,s),e===Co&&(Co=null,fr=null,Fr=ue),((o.subtreeFlags&_s)!==wt||(o.flags&_s)!==wt)&&(Vl||(Vl=!0,Pm=n,Zm(El,function(){return Di(),null})));var c=(o.subtreeFlags&(Bh|zh|xu|_s))!==wt,f=(o.flags&(Bh|zh|xu|_s))!==wt;if(c||f){var v=ao.transition;ao.transition=null;var x=Ca();Qr(Xo);var L=on;on|=ca,$m.current=null;var D=x6(e,o);Fv(),$6(e,o,i),A4(e.containerInfo),e.current=o,Y2(i),I6(o,e,i),V2(),k2(),on=L,Qr(x),ao.transition=v}else e.current=o,Fv();var V=Vl;if(Vl?(Vl=!1,ll=e,Ac=i):(Gs=0,jf=null),s=e.pendingLanes,s===ue&&(qs=null),V||t5(e.current,!1),L2(o.stateNode,r),wa&&e.memoizedUpdaters.clear(),iS(),Io(e,Yr()),t!==null)for(var X=e.onRecoverableError,G=0;G<t.length;G++){var Te=t[G],ft=Te.stack,Ze=Te.digest;X(Te.value,{componentStack:ft,digest:Ze})}if(Ff){Ff=!1;var Jt=Hm;throw Hm=null,Jt}return Vo(Ac,At)&&e.tag!==Ki&&Di(),s=e.pendingLanes,Vo(s,At)?(Rk(),e===jm?$c++:($c=0,jm=e)):$c=0,Zi(),fy(),null}function Di(){if(ll!==null){var e=Ty(Ac),t=gx(vi,e),n=ao.transition,r=Ca();try{return ao.transition=null,Qr(t),MS()}finally{Qr(r),ao.transition=n}}return!1}function TS(e){Fm.push(e),Vl||(Vl=!0,Zm(El,function(){return Di(),null}))}function MS(){if(ll===null)return!1;var e=Pm;Pm=null;var t=ll,n=Ac;if(ll=null,Ac=ue,(on&(io|ca))!==Hr)throw new Error("Cannot flush passive effects while already rendering.");Wm=!0,Pf=!1,X2(n);var r=on;on|=ca,j6(t.current),U6(t,t.current,n,e);{var o=Fm;Fm=[];for(var i=0;i<o.length;i++){var s=o[i];S6(t,s)}}Q2(),t5(t.current,!0),on=r,Zi(),Pf?t===jf?Gs++:(Gs=0,jf=t):Gs=0,Wm=!1,Pf=!1,O2(t);{var c=t.current.stateNode;c.effectDuration=0,c.passiveEffectDuration=0}return!0}function Z1(e){return qs!==null&&qs.has(e)}function DS(e){qs===null?qs=new Set([e]):qs.add(e)}function LS(e){Ff||(Ff=!0,Hm=e)}var OS=LS;function J1(e,t,n){var r=jl(n,t),o=qv(e,r,At),i=el(e,o,At),s=ko();i!==null&&(Mu(i,At,s),Io(i,s))}function Pn(e,t,n){if(y6(n),Uc(!1),e.tag===F){J1(e,e,n);return}var r=null;for(r=t;r!==null;){if(r.tag===F){J1(r,e,n);return}else if(r.tag===Y){var o=r.type,i=r.stateNode;if(typeof o.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&!Z1(i)){var s=jl(n,e),c=pm(r,s,At),f=el(r,c,At),v=ko();f!==null&&(Mu(f,At,v),Io(f,v));return}}r=r.return}d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}function NS(e,t,n){var r=e.pingCache;r!==null&&r.delete(t);var o=ko();ky(e,n),PS(e),Co===e&&bs(Fr,n)&&(Pr===Mc||Pr===zf&&by(Fr)&&Yr()-Um<U1?Xl(e,ue):Hf=Vt(Hf,n)),Io(e,o)}function e5(e,t){t===Xr&&(t=hS(e));var n=ko(),r=No(e,t);r!==null&&(Mu(r,t,n),Io(r,n))}function AS(e){var t=e.memoizedState,n=Xr;t!==null&&(n=t.retryLane),e5(e,n)}function $S(e,t){var n=Xr,r;switch(e.tag){case Qe:r=e.stateNode;var o=e.memoizedState;o!==null&&(n=o.retryLane);break;case Je:r=e.stateNode;break;default:throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}r!==null&&r.delete(t),e5(e,n)}function IS(e){return e<120?120:e<480?480:e<1080?1080:e<1920?1920:e<3e3?3e3:e<4320?4320:uS(e/1960)*1960}function BS(){if($c>dS)throw $c=0,jm=null,new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");Gs>fS&&(Gs=0,jf=null,d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))}function zS(){Ea.flushLegacyContextWarning(),Ea.flushPendingUnsafeLifecycleWarnings()}function t5(e,t){Fn(e),Qf(e,_i,Z6),t&&Qf(e,id,J6),Qf(e,_i,G6),t&&Qf(e,id,K6),kr()}function Qf(e,t,n){for(var r=e,o=null;r!==null;){var i=r.subtreeFlags&t;r!==o&&r.child!==null&&i!==wt?r=r.child:((r.flags&t)!==wt&&n(r),r.sibling!==null?r=r.sibling:r=o=r.return)}}var qf=null;function n5(e){{if((on&io)!==Hr||!(e.mode&rn))return;var t=e.tag;if(t!==N&&t!==F&&t!==Y&&t!==E&&t!==ge&&t!==Dt&&t!==ye)return;var n=Bt(e)||"ReactComponent";if(qf!==null){if(qf.has(n))return;qf.add(n)}else qf=new Set([n]);var r=mt;try{Fn(e),d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{r?Fn(e):kr()}}}var qm;{var US=null;qm=function(e,t,n){var r=c5(US,t);try{return p1(e,t,n)}catch(i){if(VC()||i!==null&&typeof i=="object"&&typeof i.then=="function")throw i;if(tf(),mv(),b1(e,t),c5(t,r),t.mode&Tn&&G_(t),Lh(null,p1,null,e,t,n),h2()){var o=Oh();typeof o=="object"&&o!==null&&o._suppressLogging&&typeof i=="object"&&i!==null&&!i._suppressLogging&&(i._suppressLogging=!0)}throw i}}}var r5=!1,Gm;Gm=new Set;function HS(e){if(Ba&&!kk())switch(e.tag){case E:case ge:case ye:{var t=fr&&Bt(fr)||"Unknown",n=t;if(!Gm.has(n)){Gm.add(n);var r=Bt(e)||"Unknown";d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",r,t,t)}break}case Y:{r5||(d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),r5=!0);break}}}function zc(e,t){if(wa){var n=e.memoizedUpdaters;n.forEach(function(r){Sy(e,r,t)})}}var Km={};function Zm(e,t){{var n=Aa.current;return n!==null?(n.push(t),Km):dy(e,t)}}function o5(e){if(e!==Km)return w2(e)}function a5(){return Aa.current!==null}function FS(e){{if(e.mode&rn){if(!I1())return}else if(!sS()||on!==Hr||e.tag!==E&&e.tag!==ge&&e.tag!==ye)return;if(Aa.current===null){var t=mt;try{Fn(e),d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`,Bt(e))}finally{t?Fn(e):kr()}}}}function PS(e){e.tag!==Ki&&I1()&&Aa.current===null&&d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`)}function Uc(e){P1=e}var da=null,Ks=null,jS=function(e){da=e};function Zs(e){{if(da===null)return e;var t=da(e);return t===void 0?e:t.current}}function Jm(e){return Zs(e)}function eg(e){{if(da===null)return e;var t=da(e);if(t===void 0){if(e!=null&&typeof e.render=="function"){var n=Zs(e.render);if(e.render!==n){var r={$$typeof:Ce,render:n};return e.displayName!==void 0&&(r.displayName=e.displayName),r}}return e}return t.current}}function i5(e,t){{if(da===null)return!1;var n=e.elementType,r=t.type,o=!1,i=typeof r=="object"&&r!==null?r.$$typeof:null;switch(e.tag){case Y:{typeof r=="function"&&(o=!0);break}case E:{(typeof r=="function"||i===ht)&&(o=!0);break}case ge:{(i===Ce||i===ht)&&(o=!0);break}case Dt:case ye:{(i===Zt||i===ht)&&(o=!0);break}default:return!1}if(o){var s=da(n);if(s!==void 0&&s===da(r))return!0}return!1}}function l5(e){{if(da===null||typeof WeakSet!="function")return;Ks===null&&(Ks=new WeakSet),Ks.add(e)}}var WS=function(e,t){{if(da===null)return;var n=t.staleFamilies,r=t.updatedFamilies;Di(),Mi(function(){tg(e.current,r,n)})}},YS=function(e,t){{if(e.context!==Go)return;Di(),Mi(function(){Hc(t,e,null,null)})}};function tg(e,t,n){{var r=e.alternate,o=e.child,i=e.sibling,s=e.tag,c=e.type,f=null;switch(s){case E:case ye:case Y:f=c;break;case ge:f=c.render;break}if(da===null)throw new Error("Expected resolveFamily to be set during hot reload.");var v=!1,x=!1;if(f!==null){var L=da(f);L!==void 0&&(n.has(L)?x=!0:t.has(L)&&(s===Y?x=!0:v=!0))}if(Ks!==null&&(Ks.has(e)||r!==null&&Ks.has(r))&&(x=!0),x&&(e._debugNeedsRemount=!0),x||v){var D=No(e,At);D!==null&&jr(D,e,At,Gn)}o!==null&&!x&&tg(o,t,n),i!==null&&tg(i,t,n)}}var VS=function(e,t){{var n=new Set,r=new Set(t.map(function(o){return o.current}));return ng(e.current,r,n),n}};function ng(e,t,n){{var r=e.child,o=e.sibling,i=e.tag,s=e.type,c=null;switch(i){case E:case ye:case Y:c=s;break;case ge:c=s.render;break}var f=!1;c!==null&&t.has(c)&&(f=!0),f?XS(e,n):r!==null&&ng(r,t,n),o!==null&&ng(o,t,n)}}function XS(e,t){{var n=QS(e,t);if(n)return;for(var r=e;;){switch(r.tag){case ee:t.add(r.stateNode);return;case A:t.add(r.stateNode.containerInfo);return;case F:t.add(r.stateNode.containerInfo);return}if(r.return===null)throw new Error("Expected to reach root first.");r=r.return}}}function QS(e,t){for(var n=e,r=!1;;){if(n.tag===ee)r=!0,t.add(n.stateNode);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;n.sibling===null;){if(n.return===null||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}var rg;{rg=!1;try{var s5=Object.preventExtensions({})}catch{rg=!0}}function qS(e,t,n,r){this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,this.flags=wt,this.subtreeFlags=wt,this.deletions=null,this.lanes=ue,this.childLanes=ue,this.alternate=null,this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,!rg&&typeof Object.preventExtensions=="function"&&Object.preventExtensions(this)}var Ko=function(e,t,n,r){return new qS(e,t,n,r)};function og(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function GS(e){return typeof e=="function"&&!og(e)&&e.defaultProps===void 0}function KS(e){if(typeof e=="function")return og(e)?Y:E;if(e!=null){var t=e.$$typeof;if(t===Ce)return ge;if(t===Zt)return Dt}return N}function ql(e,t){var n=e.alternate;n===null?(n=Ko(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=wt,n.subtreeFlags=wt,n.deletions=null,n.actualDuration=0,n.actualStartTime=-1),n.flags=e.flags&mi,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;var r=e.dependencies;switch(n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case N:case E:case ye:n.type=Zs(e.type);break;case Y:n.type=Jm(e.type);break;case ge:n.type=eg(e.type);break}return n}function ZS(e,t){e.flags&=mi|Or;var n=e.alternate;if(n===null)e.childLanes=ue,e.lanes=t,e.child=null,e.subtreeFlags=wt,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0;else{e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=wt,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type;var r=n.dependencies;e.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}return e}function JS(e,t,n){var r;return e===Yd?(r=rn,t===!0&&(r|=yr,r|=ja)):r=yt,wa&&(r|=Tn),Ko(F,null,null,r)}function ag(e,t,n,r,o,i){var s=N,c=e;if(typeof e=="function")og(e)?(s=Y,c=Jm(c)):c=Zs(c);else if(typeof e=="string")s=ee;else e:switch(e){case wr:return cl(n.children,o,i,t);case Bo:s=Q,o|=yr,(o&rn)!==yt&&(o|=ja);break;case On:return e3(n,o,i,t);case fe:return t3(n,o,i,t);case kt:return n3(n,o,i,t);case Nn:return u5(n,o,i,t);case Xn:case Nt:case Wr:case ta:case Cr:default:{if(typeof e=="object"&&e!==null)switch(e.$$typeof){case k:s=_e;break e;case le:s=K;break e;case Ce:s=ge,c=eg(c);break e;case Zt:s=Dt;break e;case ht:s=Kt,c=null;break e}var f="";{(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(f+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=r?Bt(r):null;v&&(f+=`

Check the render method of \``+v+"`.")}throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) "+("but got: "+(e==null?e:typeof e)+"."+f))}}var x=Ko(s,n,t,o);return x.elementType=e,x.type=c,x.lanes=i,x._debugOwner=r,x}function ig(e,t,n){var r=null;r=e._owner;var o=e.type,i=e.key,s=e.props,c=ag(o,i,s,r,t,n);return c._debugSource=e._source,c._debugOwner=e._owner,c}function cl(e,t,n,r){var o=Ko(pe,e,r,t);return o.lanes=n,o}function e3(e,t,n,r){typeof e.id!="string"&&d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id);var o=Ko(De,e,r,t|Tn);return o.elementType=On,o.lanes=n,o.stateNode={effectDuration:0,passiveEffectDuration:0},o}function t3(e,t,n,r){var o=Ko(Qe,e,r,t);return o.elementType=fe,o.lanes=n,o}function n3(e,t,n,r){var o=Ko(Je,e,r,t);return o.elementType=kt,o.lanes=n,o}function u5(e,t,n,r){var o=Ko(Re,e,r,t);o.elementType=Nn,o.lanes=n;var i={isHidden:!1};return o.stateNode=i,o}function lg(e,t,n){var r=Ko(P,e,null,t);return r.lanes=n,r}function r3(){var e=Ko(ee,null,null,yt);return e.elementType="DELETED",e}function o3(e){var t=Ko(gt,null,null,yt);return t.stateNode=e,t}function sg(e,t,n){var r=e.children!==null?e.children:[],o=Ko(A,r,e.key,t);return o.lanes=n,o.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},o}function c5(e,t){return e===null&&(e=Ko(N,null,null,yt)),e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function a3(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=Pp,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=Xr,this.eventTimes=dp(ue),this.expirationTimes=dp(Gn),this.pendingLanes=ue,this.suspendedLanes=ue,this.pingedLanes=ue,this.expiredLanes=ue,this.mutableReadLanes=ue,this.finishedLanes=ue,this.entangledLanes=ue,this.entanglements=dp(ue),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0;{this.memoizedUpdaters=new Set;for(var i=this.pendingUpdatersLaneMap=[],s=0;s<Ph;s++)i.push(new Set)}switch(t){case Yd:this._debugRootType=n?"hydrateRoot()":"createRoot()";break;case Ki:this._debugRootType=n?"hydrate()":"render()";break}}function d5(e,t,n,r,o,i,s,c,f,v){var x=new a3(e,t,n,c,f),L=JS(t,i);x.current=L,L.stateNode=x;{var D={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null};L.memoizedState=D}return b_(L),x}var ug="18.3.1";function i3(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;return se(r),{$$typeof:Vn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}var cg,dg;cg=!1,dg={};function f5(e){if(!e)return Go;var t=hs(e),n=BC(t);if(t.tag===Y){var r=t.type;if(Va(r))return z0(t,r,n)}return n}function l3(e,t){{var n=hs(e);if(n===void 0){if(typeof e.render=="function")throw new Error("Unable to find node on an unmounted component.");var r=Object.keys(e).join(",");throw new Error("Argument appears to not be a ReactComponent. Keys: "+r)}var o=sy(n);if(o===null)return null;if(o.mode&yr){var i=Bt(n)||"Component";if(!dg[i]){dg[i]=!0;var s=mt;try{Fn(o),n.mode&yr?d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,i):d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,i)}finally{s?Fn(s):kr()}}}return o.stateNode}}function h5(e,t,n,r,o,i,s,c){var f=!1,v=null;return d5(e,t,f,v,n,r,o,i,s)}function p5(e,t,n,r,o,i,s,c,f,v){var x=!0,L=d5(n,r,x,e,o,i,s,c,f);L.context=f5(null);var D=L.current,V=ko(),X=sl(D),G=Si(V,X);return G.callback=t??null,el(D,G,X),pS(L,X,V),L}function Hc(e,t,n,r){D2(t,e);var o=t.current,i=ko(),s=sl(o);G2(s);var c=f5(n);t.context===null?t.context=c:t.pendingContext=c,Ba&&mt!==null&&!cg&&(cg=!0,d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,Bt(mt)||"Unknown"));var f=Si(i,s);f.payload={element:e},r=r===void 0?null:r,r!==null&&(typeof r!="function"&&d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),f.callback=r);var v=el(o,f,s);return v!==null&&(jr(v,o,s,i),lf(v,o,s)),s}function Gf(e){var t=e.current;return t.child?t.child.tag===ee?t.child.stateNode:t.child.stateNode:null}function s3(e){switch(e.tag){case F:{var t=e.stateNode;if(_d(t)){var n=ax(t);yS(t,n)}break}case Qe:{Mi(function(){var o=No(e,At);if(o!==null){var i=ko();jr(o,e,At,i)}});var r=At;fg(e,r);break}}}function _5(e,t){var n=e.memoizedState;n!==null&&n.dehydrated!==null&&(n.retryLane=dx(n.retryLane,t))}function fg(e,t){_5(e,t);var n=e.alternate;n&&_5(n,t)}function u3(e){if(e.tag===Qe){var t=Su,n=No(e,t);if(n!==null){var r=ko();jr(n,e,t,r)}fg(e,t)}}function c3(e){if(e.tag===Qe){var t=sl(e),n=No(e,t);if(n!==null){var r=ko();jr(n,e,t,r)}fg(e,t)}}function m5(e){var t=x2(e);return t===null?null:t.stateNode}var g5=function(e){return null};function d3(e){return g5(e)}var y5=function(e){return!1};function f3(e){return y5(e)}var v5=null,b5=null,x5=null,w5=null,C5=null,k5=null,S5=null,E5=null,R5=null;{var T5=function(e,t,n){var r=t[n],o=ur(e)?e.slice():Rt({},e);return n+1===t.length?(ur(o)?o.splice(r,1):delete o[r],o):(o[r]=T5(e[r],t,n+1),o)},M5=function(e,t){return T5(e,t,0)},D5=function(e,t,n,r){var o=t[r],i=ur(e)?e.slice():Rt({},e);if(r+1===t.length){var s=n[r];i[s]=i[o],ur(i)?i.splice(o,1):delete i[o]}else i[o]=D5(e[o],t,n,r+1);return i},L5=function(e,t,n){if(t.length!==n.length){y("copyWithRename() expects paths of the same length");return}else for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){y("copyWithRename() expects paths to be the same except for the deepest key");return}return D5(e,t,n,0)},O5=function(e,t,n,r){if(n>=t.length)return r;var o=t[n],i=ur(e)?e.slice():Rt({},e);return i[o]=O5(e[o],t,n+1,r),i},N5=function(e,t,n){return O5(e,t,0,n)},hg=function(e,t){for(var n=e.memoizedState;n!==null&&t>0;)n=n.next,t--;return n};v5=function(e,t,n,r){var o=hg(e,t);if(o!==null){var i=N5(o.memoizedState,n,r);o.memoizedState=i,o.baseState=i,e.memoizedProps=Rt({},e.memoizedProps);var s=No(e,At);s!==null&&jr(s,e,At,Gn)}},b5=function(e,t,n){var r=hg(e,t);if(r!==null){var o=M5(r.memoizedState,n);r.memoizedState=o,r.baseState=o,e.memoizedProps=Rt({},e.memoizedProps);var i=No(e,At);i!==null&&jr(i,e,At,Gn)}},x5=function(e,t,n,r){var o=hg(e,t);if(o!==null){var i=L5(o.memoizedState,n,r);o.memoizedState=i,o.baseState=i,e.memoizedProps=Rt({},e.memoizedProps);var s=No(e,At);s!==null&&jr(s,e,At,Gn)}},w5=function(e,t,n){e.pendingProps=N5(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=No(e,At);r!==null&&jr(r,e,At,Gn)},C5=function(e,t){e.pendingProps=M5(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var n=No(e,At);n!==null&&jr(n,e,At,Gn)},k5=function(e,t,n){e.pendingProps=L5(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=No(e,At);r!==null&&jr(r,e,At,Gn)},S5=function(e){var t=No(e,At);t!==null&&jr(t,e,At,Gn)},E5=function(e){g5=e},R5=function(e){y5=e}}function h3(e){var t=sy(e);return t===null?null:t.stateNode}function p3(e){return null}function _3(){return mt}function m3(e){var t=e.findFiberByHostInstance,n=u.ReactCurrentDispatcher;return M2({bundleType:e.bundleType,version:e.version,rendererPackageName:e.rendererPackageName,rendererConfig:e.rendererConfig,overrideHookState:v5,overrideHookStateDeletePath:b5,overrideHookStateRenamePath:x5,overrideProps:w5,overridePropsDeletePath:C5,overridePropsRenamePath:k5,setErrorHandler:E5,setSuspenseHandler:R5,scheduleUpdate:S5,currentDispatcherRef:n,findHostInstanceByFiber:h3,findFiberByHostInstance:t||p3,findHostInstancesForRefresh:VS,scheduleRefresh:WS,scheduleRoot:YS,setRefreshHandler:jS,getCurrentFiber:_3,reconcilerVersion:ug})}var A5=typeof reportError=="function"?reportError:function(e){console.error(e)};function pg(e){this._internalRoot=e}Kf.prototype.render=pg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw new Error("Cannot update an unmounted root.");{typeof arguments[1]=="function"?d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):Zf(arguments[1])?d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof arguments[1]<"u"&&d("You passed a second argument to root.render(...) but it only accepts one argument.");var n=t.containerInfo;if(n.nodeType!==rr){var r=m5(t.current);r&&r.parentNode!==n&&d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}}Hc(e,t,null,null)},Kf.prototype.unmount=pg.prototype.unmount=function(){typeof arguments[0]=="function"&&d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;V1()&&d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Mi(function(){Hc(null,e,null,null)}),N0(t)}};function g3(e,t){if(!Zf(e))throw new Error("createRoot(...): Target container is not a DOM element.");$5(e);var n=!1,r=!1,o="",i=A5,s=null;t!=null&&(t.hydrate?y("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===_r&&d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.transitionCallbacks!==void 0&&(s=t.transitionCallbacks));var c=h5(e,Yd,null,n,r,o,i);zd(c.current,e);var f=e.nodeType===rr?e.parentNode:e;return Vu(f),new pg(c)}function Kf(e){this._internalRoot=e}function y3(e){e&&Tx(e)}Kf.prototype.unstable_scheduleHydration=y3;function v3(e,t,n){if(!Zf(e))throw new Error("hydrateRoot(...): Target container is not a DOM element.");$5(e),t===void 0&&d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var r=n??null,o=n!=null&&n.hydratedSources||null,i=!1,s=!1,c="",f=A5;n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(f=n.onRecoverableError));var v=p5(t,null,e,Yd,r,i,s,c,f);if(zd(v.current,e),Vu(e),o)for(var x=0;x<o.length;x++){var L=o[x];yk(v,L)}return new Kf(v)}function Zf(e){return!!(e&&(e.nodeType===gr||e.nodeType===va||e.nodeType===di||!bn))}function Fc(e){return!!(e&&(e.nodeType===gr||e.nodeType===va||e.nodeType===di||e.nodeType===rr&&e.nodeValue===" react-mount-point-unstable "))}function $5(e){e.nodeType===gr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),rc(e)&&(e._reactRootContainer?d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}var b3=u.ReactCurrentOwner,I5;I5=function(e){if(e._reactRootContainer&&e.nodeType!==rr){var t=m5(e._reactRootContainer.current);t&&t.parentNode!==e&&d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=_g(e),o=!!(r&&qi(r));o&&!n&&d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),e.nodeType===gr&&e.tagName&&e.tagName.toUpperCase()==="BODY"&&d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")};function _g(e){return e?e.nodeType===va?e.documentElement:e.firstChild:null}function B5(){}function x3(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var D=Gf(s);i.call(D)}}var s=p5(t,r,e,Ki,null,!1,!1,"",B5);e._reactRootContainer=s,zd(s.current,e);var c=e.nodeType===rr?e.parentNode:e;return Vu(c),Mi(),s}else{for(var f;f=e.lastChild;)e.removeChild(f);if(typeof r=="function"){var v=r;r=function(){var D=Gf(x);v.call(D)}}var x=h5(e,Ki,null,!1,!1,"",B5);e._reactRootContainer=x,zd(x.current,e);var L=e.nodeType===rr?e.parentNode:e;return Vu(L),Mi(function(){Hc(t,x,n,r)}),x}}function w3(e,t){e!==null&&typeof e!="function"&&d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e)}function Jf(e,t,n,r,o){I5(n),w3(o===void 0?null:o,"render");var i=n._reactRootContainer,s;if(!i)s=x3(n,t,e,o,r);else{if(s=i,typeof o=="function"){var c=o;o=function(){var f=Gf(s);c.call(f)}}Hc(t,s,e,o)}return Gf(s)}var z5=!1;function C3(e){{z5||(z5=!0,d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));var t=b3.current;if(t!==null&&t.stateNode!==null){var n=t.stateNode._warnedAboutRefsInRender;n||d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",Xt(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0}}return e==null?null:e.nodeType===gr?e:l3(e,"findDOMNode")}function k3(e,t,n){if(d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!Fc(t))throw new Error("Target container is not a DOM element.");{var r=rc(t)&&t._reactRootContainer===void 0;r&&d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?")}return Jf(null,e,t,!0,n)}function S3(e,t,n){if(d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!Fc(t))throw new Error("Target container is not a DOM element.");{var r=rc(t)&&t._reactRootContainer===void 0;r&&d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?")}return Jf(null,e,t,!1,n)}function E3(e,t,n,r){if(d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!Fc(n))throw new Error("Target container is not a DOM element.");if(e==null||!p2(e))throw new Error("parentComponent must be a valid React Component");return Jf(e,t,n,!1,r)}var U5=!1;function R3(e){if(U5||(U5=!0,d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")),!Fc(e))throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");{var t=rc(e)&&e._reactRootContainer===void 0;t&&d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?")}if(e._reactRootContainer){{var n=_g(e),r=n&&!qi(n);r&&d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.")}return Mi(function(){Jf(null,null,e,!1,function(){e._reactRootContainer=null,N0(e)})}),!0}else{{var o=_g(e),i=!!(o&&qi(o)),s=e.nodeType===gr&&Fc(e.parentNode)&&!!e.parentNode._reactRootContainer;i&&d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",s?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component.")}return!1}}yx(s3),bx(u3),xx(c3),wx(Ca),Cx(_x),(typeof Map!="function"||Map.prototype==null||typeof Map.prototype.forEach!="function"||typeof Set!="function"||Set.prototype==null||typeof Set.prototype.clear!="function"||typeof Set.prototype.forEach!="function")&&d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),r2(k4),i2(Vm,vS,Mi);function T3(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(t))throw new Error("Target container is not a DOM element.");return i3(e,t,null,n)}function M3(e,t,n,r){return E3(e,t,n,r)}var mg={usingClientEntryPoint:!1,Events:[qi,Ms,Ud,Gg,Kg,Vm]};function D3(e,t){return mg.usingClientEntryPoint||d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),g3(e,t)}function L3(e,t,n){return mg.usingClientEntryPoint||d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),v3(e,t,n)}function O3(e){return V1()&&d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),Mi(e)}var N3=m3({findFiberByHostInstance:Al,bundleType:1,version:ug,rendererPackageName:"react-dom"});if(!N3&&gn&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&navigator.userAgent.indexOf("Edge")===-1||navigator.userAgent.indexOf("Firefox")>-1)){var H5=window.location.protocol;/^(https?|file):$/.test(H5)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+(H5==="file:"?`
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq`:""),"font-weight:bold")}Jo.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mg,Jo.createPortal=T3,Jo.createRoot=D3,Jo.findDOMNode=C3,Jo.flushSync=O3,Jo.hydrate=k3,Jo.hydrateRoot=L3,Jo.render=S3,Jo.unmountComponentAtNode=R3,Jo.unstable_batchedUpdates=Vm,Jo.unstable_renderSubtreeIntoContainer=M3,Jo.version=ug,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)})()});var nh=Oi((mE,Q5)=>{"use strict";Q5.exports=X5()});var q5=Oi(yg=>{"use strict";var gg=nh();jc=gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yg.createRoot=function(a,l){jc.usingClientEntryPoint=!0;try{return gg.createRoot(a,l)}finally{jc.usingClientEntryPoint=!1}},yg.hydrateRoot=function(a,l,u){jc.usingClientEntryPoint=!0;try{return gg.hydrateRoot(a,l,u)}finally{jc.usingClientEntryPoint=!1}};var jc});var G5=Oi(rh=>{"use strict";(function(){"use strict";var a=fa(),l=Symbol.for("react.element"),u=Symbol.for("react.portal"),h=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),I=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),P=Symbol.iterator,pe="@@iterator";function Q(k){if(k===null||typeof k!="object")return null;var le=P&&k[P]||k[pe];return typeof le=="function"?le:null}var K=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _e(k){{for(var le=arguments.length,Ce=new Array(le>1?le-1:0),fe=1;fe<le;fe++)Ce[fe-1]=arguments[fe];ge("error",k,Ce)}}function ge(k,le,Ce){{var fe=K.ReactDebugCurrentFrame,kt=fe.getStackAddendum();kt!==""&&(le+="%s",Ce=Ce.concat([kt]));var Zt=Ce.map(function(ht){return String(ht)});Zt.unshift("Warning: "+le),Function.prototype.apply.call(console[k],console,Zt)}}var De=!1,Qe=!1,Dt=!1,ye=!1,Kt=!1,vt;vt=Symbol.for("react.module.reference");function gt(k){return!!(typeof k=="string"||typeof k=="function"||k===h||k===y||Kt||k===p||k===Y||k===N||ye||k===ee||De||Qe||Dt||typeof k=="object"&&k!==null&&(k.$$typeof===A||k.$$typeof===F||k.$$typeof===d||k.$$typeof===I||k.$$typeof===E||k.$$typeof===vt||k.getModuleId!==void 0))}function Je(k,le,Ce){var fe=k.displayName;if(fe)return fe;var kt=le.displayName||le.name||"";return kt!==""?Ce+"("+kt+")":Ce}function dt(k){return k.displayName||"Context"}function Re(k){if(k==null)return null;if(typeof k.tag=="number"&&_e("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof k=="function")return k.displayName||k.name||null;if(typeof k=="string")return k;switch(k){case h:return"Fragment";case u:return"Portal";case y:return"Profiler";case p:return"StrictMode";case Y:return"Suspense";case N:return"SuspenseList"}if(typeof k=="object")switch(k.$$typeof){case I:var le=k;return dt(le)+".Consumer";case d:var Ce=k;return dt(Ce._context)+".Provider";case E:return Je(k,k.render,"ForwardRef");case F:var fe=k.displayName||null;return fe!==null?fe:Re(k.type)||"Memo";case A:{var kt=k,Zt=kt._payload,ht=kt._init;try{return Re(ht(Zt))}catch{return null}}}return null}var He=Object.assign,we=0,rt,Wt,de,et,Et,sn,bn;function Sn(){}Sn.__reactDisabledLog=!0;function qr(){{if(we===0){rt=console.log,Wt=console.info,de=console.warn,et=console.error,Et=console.group,sn=console.groupCollapsed,bn=console.groupEnd;var k={configurable:!0,enumerable:!0,value:Sn,writable:!0};Object.defineProperties(console,{info:k,log:k,warn:k,error:k,group:k,groupCollapsed:k,groupEnd:k})}we++}}function ir(){{if(we--,we===0){var k={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:He({},k,{value:rt}),info:He({},k,{value:Wt}),warn:He({},k,{value:de}),error:He({},k,{value:et}),group:He({},k,{value:Et}),groupCollapsed:He({},k,{value:sn}),groupEnd:He({},k,{value:bn})})}we<0&&_e("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var br=K.ReactCurrentDispatcher,lr;function sr(k,le,Ce){{if(lr===void 0)try{throw Error()}catch(kt){var fe=kt.stack.trim().match(/\n( *(at )?)/);lr=fe&&fe[1]||""}return`
`+lr+k}}var tr=!1,Mr;{var En=typeof WeakMap=="function"?WeakMap:Map;Mr=new En}function Kn(k,le){if(!k||tr)return"";{var Ce=Mr.get(k);if(Ce!==void 0)return Ce}var fe;tr=!0;var kt=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var Zt;Zt=br.current,br.current=null,qr();try{if(le){var ht=function(){throw Error()};if(Object.defineProperty(ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ht,[])}catch(Dr){fe=Dr}Reflect.construct(k,[],ht)}else{try{ht.call()}catch(Dr){fe=Dr}k.call(ht.prototype)}}else{try{throw Error()}catch(Dr){fe=Dr}k()}}catch(Dr){if(Dr&&fe&&typeof Dr.stack=="string"){for(var Nt=Dr.stack.split(`
`),Cr=fe.stack.split(`
`),Nn=Nt.length-1,Xn=Cr.length-1;Nn>=1&&Xn>=0&&Nt[Nn]!==Cr[Xn];)Xn--;for(;Nn>=1&&Xn>=0;Nn--,Xn--)if(Nt[Nn]!==Cr[Xn]){if(Nn!==1||Xn!==1)do if(Nn--,Xn--,Xn<0||Nt[Nn]!==Cr[Xn]){var Wr=`
`+Nt[Nn].replace(" at new "," at ");return k.displayName&&Wr.includes("<anonymous>")&&(Wr=Wr.replace("<anonymous>",k.displayName)),typeof k=="function"&&Mr.set(k,Wr),Wr}while(Nn>=1&&Xn>=0);break}}}finally{tr=!1,br.current=Zt,ir(),Error.prepareStackTrace=kt}var ta=k?k.displayName||k.name:"",uo=ta?sr(ta):"";return typeof k=="function"&&Mr.set(k,uo),uo}function gn(k,le,Ce){return Kn(k,!1)}function In(k){var le=k.prototype;return!!(le&&le.isReactComponent)}function yn(k,le,Ce){if(k==null)return"";if(typeof k=="function")return Kn(k,In(k));if(typeof k=="string")return sr(k);switch(k){case Y:return sr("Suspense");case N:return sr("SuspenseList")}if(typeof k=="object")switch(k.$$typeof){case E:return gn(k.render);case F:return yn(k.type,le,Ce);case A:{var fe=k,kt=fe._payload,Zt=fe._init;try{return yn(Zt(kt),le,Ce)}catch{}}}return""}var Zn=Object.prototype.hasOwnProperty,Ln={},tt=K.ReactDebugCurrentFrame;function se(k){if(k){var le=k._owner,Ce=yn(k.type,k._source,le?le.type:null);tt.setExtraStackFrame(Ce)}else tt.setExtraStackFrame(null)}function qe(k,le,Ce,fe,kt){{var Zt=Function.call.bind(Zn);for(var ht in k)if(Zt(k,ht)){var Nt=void 0;try{if(typeof k[ht]!="function"){var Cr=Error((fe||"React class")+": "+Ce+" type `"+ht+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof k[ht]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Cr.name="Invariant Violation",Cr}Nt=k[ht](le,ht,fe,Ce,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(Nn){Nt=Nn}Nt&&!(Nt instanceof Error)&&(se(kt),_e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",fe||"React class",Ce,ht,typeof Nt),se(null)),Nt instanceof Error&&!(Nt.message in Ln)&&(Ln[Nt.message]=!0,se(kt),_e("Failed %s type: %s",Ce,Nt.message),se(null))}}}var st=Array.isArray;function _t(k){return st(k)}function We(k){{var le=typeof Symbol=="function"&&Symbol.toStringTag,Ce=le&&k[Symbol.toStringTag]||k.constructor.name||"Object";return Ce}}function jt(k){try{return Ut(k),!1}catch{return!0}}function Ut(k){return""+k}function Ht(k){if(jt(k))return _e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",We(k)),Ut(k)}var ut=K.ReactCurrentOwner,Ge={key:!0,ref:!0,__self:!0,__source:!0},$,j,O;O={};function B(k){if(Zn.call(k,"ref")){var le=Object.getOwnPropertyDescriptor(k,"ref").get;if(le&&le.isReactWarning)return!1}return k.ref!==void 0}function ae(k){if(Zn.call(k,"key")){var le=Object.getOwnPropertyDescriptor(k,"key").get;if(le&&le.isReactWarning)return!1}return k.key!==void 0}function ve(k,le){if(typeof k.ref=="string"&&ut.current&&le&&ut.current.stateNode!==le){var Ce=Re(ut.current.type);O[Ce]||(_e('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',Re(ut.current.type),k.ref),O[Ce]=!0)}}function te(k,le){{var Ce=function(){$||($=!0,_e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",le))};Ce.isReactWarning=!0,Object.defineProperty(k,"key",{get:Ce,configurable:!0})}}function Me(k,le){{var Ce=function(){j||(j=!0,_e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",le))};Ce.isReactWarning=!0,Object.defineProperty(k,"ref",{get:Ce,configurable:!0})}}var ze=function(k,le,Ce,fe,kt,Zt,ht){var Nt={$$typeof:l,type:k,key:le,ref:Ce,props:ht,_owner:Zt};return Nt._store={},Object.defineProperty(Nt._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(Nt,"_self",{configurable:!1,enumerable:!1,writable:!1,value:fe}),Object.defineProperty(Nt,"_source",{configurable:!1,enumerable:!1,writable:!1,value:kt}),Object.freeze&&(Object.freeze(Nt.props),Object.freeze(Nt)),Nt};function Ct(k,le,Ce,fe,kt){{var Zt,ht={},Nt=null,Cr=null;Ce!==void 0&&(Ht(Ce),Nt=""+Ce),ae(le)&&(Ht(le.key),Nt=""+le.key),B(le)&&(Cr=le.ref,ve(le,kt));for(Zt in le)Zn.call(le,Zt)&&!Ge.hasOwnProperty(Zt)&&(ht[Zt]=le[Zt]);if(k&&k.defaultProps){var Nn=k.defaultProps;for(Zt in Nn)ht[Zt]===void 0&&(ht[Zt]=Nn[Zt])}if(Nt||Cr){var Xn=typeof k=="function"?k.displayName||k.name||"Unknown":k;Nt&&te(ht,Xn),Cr&&Me(ht,Xn)}return ze(k,Nt,Cr,kt,fe,ut.current,ht)}}var it=K.ReactCurrentOwner,Oe=K.ReactDebugCurrentFrame;function ct(k){if(k){var le=k._owner,Ce=yn(k.type,k._source,le?le.type:null);Oe.setExtraStackFrame(Ce)}else Oe.setExtraStackFrame(null)}var Ye;Ye=!1;function xt(k){return typeof k=="object"&&k!==null&&k.$$typeof===l}function Pe(){{if(it.current){var k=Re(it.current.type);if(k)return`

Check the render method of \``+k+"`."}return""}}function nn(k){{if(k!==void 0){var le=k.fileName.replace(/^.*[\\\/]/,""),Ce=k.lineNumber;return`

Check your code at `+le+":"+Ce+"."}return""}}var qt={};function Lt(k){{var le=Pe();if(!le){var Ce=typeof k=="string"?k:k.displayName||k.name;Ce&&(le=`

Check the top-level render call using <`+Ce+">.")}return le}}function Ft(k,le){{if(!k._store||k._store.validated||k.key!=null)return;k._store.validated=!0;var Ce=Lt(le);if(qt[Ce])return;qt[Ce]=!0;var fe="";k&&k._owner&&k._owner!==it.current&&(fe=" It was passed a child from "+Re(k._owner.type)+"."),ct(k),_e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',Ce,fe),ct(null)}}function lt(k,le){{if(typeof k!="object")return;if(_t(k))for(var Ce=0;Ce<k.length;Ce++){var fe=k[Ce];xt(fe)&&Ft(fe,le)}else if(xt(k))k._store&&(k._store.validated=!0);else if(k){var kt=Q(k);if(typeof kt=="function"&&kt!==k.entries)for(var Zt=kt.call(k),ht;!(ht=Zt.next()).done;)xt(ht.value)&&Ft(ht.value,le)}}}function fn(k){{var le=k.type;if(le==null||typeof le=="string")return;var Ce;if(typeof le=="function")Ce=le.propTypes;else if(typeof le=="object"&&(le.$$typeof===E||le.$$typeof===F))Ce=le.propTypes;else return;if(Ce){var fe=Re(le);qe(Ce,k.props,"prop",fe,k)}else if(le.PropTypes!==void 0&&!Ye){Ye=!0;var kt=Re(le);_e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",kt||"Unknown")}typeof le.getDefaultProps=="function"&&!le.getDefaultProps.isReactClassApproved&&_e("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jn(k){{for(var le=Object.keys(k.props),Ce=0;Ce<le.length;Ce++){var fe=le[Ce];if(fe!=="children"&&fe!=="key"){ct(k),_e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",fe),ct(null);break}}k.ref!==null&&(ct(k),_e("Invalid attribute `ref` supplied to `React.Fragment`."),ct(null))}}var xr={};function _r(k,le,Ce,fe,kt,Zt){{var ht=gt(k);if(!ht){var Nt="";(k===void 0||typeof k=="object"&&k!==null&&Object.keys(k).length===0)&&(Nt+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Cr=nn(kt);Cr?Nt+=Cr:Nt+=Pe();var Nn;k===null?Nn="null":_t(k)?Nn="array":k!==void 0&&k.$$typeof===l?(Nn="<"+(Re(k.type)||"Unknown")+" />",Nt=" Did you accidentally export a JSX literal instead of a component?"):Nn=typeof k,_e("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",Nn,Nt)}var Xn=Ct(k,le,Ce,kt,Zt);if(Xn==null)return Xn;if(ht){var Wr=le.children;if(Wr!==void 0)if(fe)if(_t(Wr)){for(var ta=0;ta<Wr.length;ta++)lt(Wr[ta],k);Object.freeze&&Object.freeze(Wr)}else _e("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else lt(Wr,k)}if(Zn.call(le,"key")){var uo=Re(k),Dr=Object.keys(le).filter(function(yo){return yo!=="key"}),co=Dr.length>0?"{key: someKey, "+Dr.join(": ..., ")+": ...}":"{key: someKey}";if(!xr[uo+co]){var Rt=Dr.length>0?"{"+Dr.join(": ..., ")+": ...}":"{}";_e(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,co,uo,Rt,uo),xr[uo+co]=!0}}return k===h?Jn(Xn):fn(Xn),Xn}}function Vn(k,le,Ce){return _r(k,le,Ce,!0)}function wr(k,le,Ce){return _r(k,le,Ce,!1)}var Bo=wr,On=Vn;rh.Fragment=h,rh.jsx=Bo,rh.jsxs=On})()});var so=Oi((vE,K5)=>{"use strict";K5.exports=G5()});var iE={};F3(iE,{initAgentation:()=>jg});var jb=Un(fa()),Wb=Un(q5());var z=Un(fa(),1),Cb=Un(nh(),1),hr=Un(fa(),1),ke=Un(so(),1),ar=Un(so(),1),ni=Un(fa(),1),Eb=Un(nh(),1),es=Un(so(),1),Og=Un(so(),1),mn=Un(fa(),1),g=Un(so(),1),Yn=Un(so(),1),pr=Un(fa(),1),m=Un(so(),1),It=Un(fa(),1),dn=Un(so(),1),Hb=Un(fa(),1),ea=Un(so(),1),Zc=Un(so(),1),Fb=Un(fa(),1),au=Un(so(),1),iu=Un(so(),1),Be=Un(so(),1),he=Un(so(),1),j3=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,W3={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(a)),a.textContent=j3}var Wn=W3,Y3=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,V3={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-components-icon-transitions");a||(a=document.createElement("style"),a.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(a)),a.textContent=Y3}var Hn=V3;var X3=({size:a=16})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:(0,ke.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var Q3=({size:a=24,style:l={}})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",style:l,children:[(0,ke.jsxs)("g",{clipPath:"url(#clip0_list_sparkle)",children:[(0,ke.jsx)("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),(0,ke.jsx)("defs",{children:(0,ke.jsx)("clipPath",{id:"clip0_list_sparkle",children:(0,ke.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),q3=({size:a=20,...l})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[(0,ke.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,ke.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var G3=({size:a=24,copied:l=!1,tint:u})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",style:u?{color:u,transition:"color 0.3s ease"}:void 0,children:[(0,ke.jsxs)("g",{className:`${Hn.iconState} ${l?Hn.hiddenScaled:Hn.visibleScaled}`,children:[(0,ke.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,ke.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,ke.jsxs)("g",{className:`${Hn.iconState} ${l?Hn.visibleScaled:Hn.hiddenScaled}`,children:[(0,ke.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),K3=({size:a=24,state:l="idle"})=>{let u=l==="idle",h=l==="sent",p=l==="failed",y=l==="sending";return(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[(0,ke.jsx)("g",{className:`${Hn.iconStateFast} ${u?Hn.visibleScaled:y?Hn.sending:Hn.hiddenScaled}`,children:(0,ke.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,ke.jsxs)("g",{className:`${Hn.iconStateFast} ${h?Hn.visibleScaled:Hn.hiddenScaled}`,children:[(0,ke.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ke.jsxs)("g",{className:`${Hn.iconStateFast} ${p?Hn.visibleScaled:Hn.hiddenScaled}`,children:[(0,ke.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,ke.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var Z3=({size:a=24,isOpen:l=!0})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[(0,ke.jsxs)("g",{className:`${Hn.iconFade} ${l?Hn.visible:Hn.hidden}`,children:[(0,ke.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ke.jsxs)("g",{className:`${Hn.iconFade} ${l?Hn.hidden:Hn.visible}`,children:[(0,ke.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,ke.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),J3=({size:a=24,isPaused:l=!1})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[(0,ke.jsxs)("g",{className:`${Hn.iconFadeFast} ${l?Hn.hidden:Hn.visible}`,children:[(0,ke.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,ke.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,ke.jsx)("path",{className:`${Hn.iconFadeFast} ${l?Hn.visible:Hn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var e8=({size:a=16})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[(0,ke.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var t8=({size:a=16})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:(0,ke.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var kb=({size:a=16})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[(0,ke.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,ke.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,ke.jsx)("defs",{children:(0,ke.jsx)("clipPath",{id:"clip0_2_53",children:(0,ke.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]}),n8=({size:a=24})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:(0,ke.jsx)("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),r8=({size:a=16})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",children:[(0,ke.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,ke.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),o8=({size:a=16})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",children:(0,ke.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),a8=({size:a=16})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ke.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),i8=({size:a=24})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ke.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),l8=({size:a=16})=>(0,ke.jsx)("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ke.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var s8=({size:a=24})=>(0,ke.jsxs)("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[(0,ke.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,ke.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,ke.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Sb=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],vg=Sb.flatMap(a=>[`:not([${a}])`,`:not([${a}] *)`]).join(""),Lg="feedback-freeze-styles",bg="__agentation_freeze";function u8(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:l=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};let a=window;return a[bg]||(a[bg]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),a[bg]}var tn=u8();typeof window<"u"&&!tn.installed&&(tn.origSetTimeout=window.setTimeout.bind(window),tn.origSetInterval=window.setInterval.bind(window),tn.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(a,l,...u)=>typeof a=="string"?tn.origSetTimeout(a,l):tn.origSetTimeout((...h)=>{tn.frozen?tn.frozenTimeoutQueue.push(()=>a(...h)):a(...h)},l,...u),window.setInterval=(a,l,...u)=>typeof a=="string"?tn.origSetInterval(a,l):tn.origSetInterval((...h)=>{tn.frozen||a(...h)},l,...u),window.requestAnimationFrame=a=>tn.origRAF(l=>{tn.frozen?tn.frozenRAFQueue.push(a):a(l)}),tn.installed=!0);var bt=tn.origSetTimeout,c8=tn.origSetInterval,ru=tn.origRAF;function d8(a){return a?Sb.some(l=>!!a.closest?.(`[${l}]`)):!1}function f8(){if(typeof document>"u"||tn.frozen)return;tn.frozen=!0,tn.frozenTimeoutQueue=[],tn.frozenRAFQueue=[];let a=document.getElementById(Lg);a||(a=document.createElement("style"),a.id=Lg),a.textContent=`
    *${vg},
    *${vg}::before,
    *${vg}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(a),tn.pausedAnimations=[];try{document.getAnimations().forEach(l=>{if(l.playState!=="running")return;let u=l.effect?.target;d8(u)||(l.pause(),tn.pausedAnimations.push(l))})}catch{}document.querySelectorAll("video").forEach(l=>{l.paused||(l.dataset.wasPaused="false",l.pause())})}function Z5(){if(typeof document>"u"||!tn.frozen)return;tn.frozen=!1;let a=tn.frozenTimeoutQueue;tn.frozenTimeoutQueue=[];for(let u of a)tn.origSetTimeout(()=>{if(tn.frozen){tn.frozenTimeoutQueue.push(u);return}try{u()}catch(h){console.warn("[agentation] Error replaying queued timeout:",h)}},0);let l=tn.frozenRAFQueue;tn.frozenRAFQueue=[];for(let u of l)tn.origRAF(h=>{if(tn.frozen){tn.frozenRAFQueue.push(u);return}u(h)});for(let u of tn.pausedAnimations)try{u.play()}catch(h){console.warn("[agentation] Error resuming animation:",h)}tn.pausedAnimations=[],document.getElementById(Lg)?.remove(),document.querySelectorAll("video").forEach(u=>{u.dataset.wasPaused==="false"&&(u.play().catch(()=>{}),delete u.dataset.wasPaused)})}function xg(a){if(!a)return;let l=u=>u.stopImmediatePropagation();document.addEventListener("focusin",l,!0),document.addEventListener("focusout",l,!0);try{a.focus()}finally{document.removeEventListener("focusin",l,!0),document.removeEventListener("focusout",l,!0)}}var mh=(0,hr.forwardRef)(function({element:l,timestamp:u,selectedText:h,placeholder:p="What should change?",initialValue:y="",submitLabel:d="Add",onSubmit:I,onCancel:E,onDelete:Y,style:N,accentColor:F="#3c82f7",isExiting:A=!1,lightMode:ee=!1,computedStyles:P},pe){let[Q,K]=(0,hr.useState)(y),[_e,ge]=(0,hr.useState)(!1),[De,Qe]=(0,hr.useState)("initial"),[Dt,ye]=(0,hr.useState)(!1),[Kt,vt]=(0,hr.useState)(!1),gt=(0,hr.useRef)(null),Je=(0,hr.useRef)(null),dt=(0,hr.useRef)(null),Re=(0,hr.useRef)(null);(0,hr.useEffect)(()=>{A&&De!=="exit"&&Qe("exit")},[A,De]),(0,hr.useEffect)(()=>{bt(()=>{Qe("enter")},0);let et=bt(()=>{Qe("entered")},200),Et=bt(()=>{let sn=gt.current;sn&&(xg(sn),sn.selectionStart=sn.selectionEnd=sn.value.length,sn.scrollTop=sn.scrollHeight)},50);return()=>{clearTimeout(et),clearTimeout(Et),dt.current&&clearTimeout(dt.current),Re.current&&clearTimeout(Re.current)}},[]);let He=(0,hr.useCallback)(()=>{Re.current&&clearTimeout(Re.current),ge(!0),Re.current=bt(()=>{ge(!1),xg(gt.current)},250)},[]);(0,hr.useImperativeHandle)(pe,()=>({shake:He}),[He]);let we=(0,hr.useCallback)(()=>{Qe("exit"),dt.current=bt(()=>{E()},150)},[E]),rt=(0,hr.useCallback)(()=>{Q.trim()&&I(Q.trim())},[Q,I]),Wt=(0,hr.useCallback)(et=>{et.stopPropagation(),!et.nativeEvent.isComposing&&(et.key==="Enter"&&!et.shiftKey&&(et.preventDefault(),rt()),et.key==="Escape"&&we())},[rt,we]),de=[Wn.popup,ee?Wn.light:"",De==="enter"?Wn.enter:"",De==="entered"?Wn.entered:"",De==="exit"?Wn.exit:"",_e?Wn.shake:""].filter(Boolean).join(" ");return(0,ar.jsxs)("div",{ref:Je,className:de,"data-annotation-popup":!0,style:N,onClick:et=>et.stopPropagation(),children:[(0,ar.jsxs)("div",{className:Wn.header,children:[P&&Object.keys(P).length>0?(0,ar.jsxs)("button",{className:Wn.headerToggle,onClick:()=>{let et=Kt;vt(!Kt),et&&bt(()=>xg(gt.current),0)},type:"button",children:[(0,ar.jsx)("svg",{className:`${Wn.chevron} ${Kt?Wn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ar.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,ar.jsx)("span",{className:Wn.element,children:l})]}):(0,ar.jsx)("span",{className:Wn.element,children:l}),u&&(0,ar.jsx)("span",{className:Wn.timestamp,children:u})]}),P&&Object.keys(P).length>0&&(0,ar.jsx)("div",{className:`${Wn.stylesWrapper} ${Kt?Wn.expanded:""}`,children:(0,ar.jsx)("div",{className:Wn.stylesInner,children:(0,ar.jsx)("div",{className:Wn.stylesBlock,children:Object.entries(P).map(([et,Et])=>(0,ar.jsxs)("div",{className:Wn.styleLine,children:[(0,ar.jsx)("span",{className:Wn.styleProperty,children:et.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,ar.jsx)("span",{className:Wn.styleValue,children:Et}),";"]},et))})})}),h&&(0,ar.jsxs)("div",{className:Wn.quote,children:["\u201C",h.slice(0,80),h.length>80?"...":"","\u201D"]}),(0,ar.jsx)("textarea",{ref:gt,className:Wn.textarea,style:{borderColor:Dt?F:void 0},placeholder:p,value:Q,onChange:et=>K(et.target.value),onFocus:()=>ye(!0),onBlur:()=>ye(!1),rows:2,onKeyDown:Wt}),(0,ar.jsxs)("div",{className:Wn.actions,children:[Y&&(0,ar.jsx)("div",{className:Wn.deleteWrapper,children:(0,ar.jsx)("button",{className:Wn.deleteButton,onClick:Y,type:"button",children:(0,ar.jsx)(i8,{size:22})})}),(0,ar.jsx)("button",{className:Wn.cancel,onClick:we,children:"Cancel"}),(0,ar.jsx)("button",{className:Wn.submit,style:{backgroundColor:F,opacity:Q.trim()?1:.4},onClick:rt,disabled:!Q.trim(),children:d})]})]})}),h8=({content:a,children:l,...u})=>{let[h,p]=(0,ni.useState)(!1),[y,d]=(0,ni.useState)(!1),[I,E]=(0,ni.useState)({top:0,right:0}),Y=(0,ni.useRef)(null),N=(0,ni.useRef)(null),F=(0,ni.useRef)(null),A=()=>{if(Y.current){let pe=Y.current.getBoundingClientRect();E({top:pe.top+pe.height/2,right:window.innerWidth-pe.left+8})}},ee=()=>{d(!0),F.current&&(clearTimeout(F.current),F.current=null),A(),N.current=bt(()=>{p(!0)},500)},P=()=>{N.current&&(clearTimeout(N.current),N.current=null),p(!1),F.current=bt(()=>{d(!1)},150)};return(0,ni.useEffect)(()=>()=>{N.current&&clearTimeout(N.current),F.current&&clearTimeout(F.current)},[]),(0,es.jsxs)(es.Fragment,{children:[(0,es.jsx)("span",{ref:Y,onMouseEnter:ee,onMouseLeave:P,...u,children:l}),y&&(0,Eb.createPortal)((0,es.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:I.top,right:I.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:h?1:0,transition:"opacity 0.15s ease"},children:a}),document.body)]})},p8=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,_8={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-help-tooltip-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(a)),a.textContent=p8}var J5=_8,Jl=({content:a})=>(0,Og.jsx)(h8,{className:J5.tooltip,content:a,children:(0,Og.jsx)(q3,{className:J5.tooltipIcon})}),Fe={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Rb=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Fe.navigation},{type:"header",label:"Header",...Fe.header},{type:"hero",label:"Hero",...Fe.hero},{type:"section",label:"Section",...Fe.section},{type:"sidebar",label:"Sidebar",...Fe.sidebar},{type:"footer",label:"Footer",...Fe.footer},{type:"modal",label:"Modal",...Fe.modal},{type:"banner",label:"Banner",...Fe.banner},{type:"drawer",label:"Drawer",...Fe.drawer},{type:"popover",label:"Popover",...Fe.popover},{type:"divider",label:"Divider",...Fe.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Fe.card},{type:"text",label:"Text",...Fe.text},{type:"image",label:"Image",...Fe.image},{type:"video",label:"Video",...Fe.video},{type:"table",label:"Table",...Fe.table},{type:"grid",label:"Grid",...Fe.grid},{type:"list",label:"List",...Fe.list},{type:"chart",label:"Chart",...Fe.chart},{type:"codeBlock",label:"Code Block",...Fe.codeBlock},{type:"map",label:"Map",...Fe.map},{type:"timeline",label:"Timeline",...Fe.timeline},{type:"calendar",label:"Calendar",...Fe.calendar},{type:"accordion",label:"Accordion",...Fe.accordion},{type:"carousel",label:"Carousel",...Fe.carousel},{type:"logo",label:"Logo",...Fe.logo},{type:"faq",label:"FAQ",...Fe.faq},{type:"gallery",label:"Gallery",...Fe.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Fe.button},{type:"input",label:"Input",...Fe.input},{type:"search",label:"Search",...Fe.search},{type:"form",label:"Form",...Fe.form},{type:"tabs",label:"Tabs",...Fe.tabs},{type:"dropdown",label:"Dropdown",...Fe.dropdown},{type:"toggle",label:"Toggle",...Fe.toggle},{type:"stepper",label:"Stepper",...Fe.stepper},{type:"rating",label:"Rating",...Fe.rating},{type:"fileUpload",label:"File Upload",...Fe.fileUpload},{type:"checkbox",label:"Checkbox",...Fe.checkbox},{type:"radio",label:"Radio",...Fe.radio},{type:"slider",label:"Slider",...Fe.slider},{type:"datePicker",label:"Date Picker",...Fe.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Fe.avatar},{type:"badge",label:"Badge",...Fe.badge},{type:"tag",label:"Tag",...Fe.tag},{type:"breadcrumb",label:"Breadcrumb",...Fe.breadcrumb},{type:"pagination",label:"Pagination",...Fe.pagination},{type:"progress",label:"Progress",...Fe.progress},{type:"alert",label:"Alert",...Fe.alert},{type:"toast",label:"Toast",...Fe.toast},{type:"notification",label:"Notification",...Fe.notification},{type:"tooltip",label:"Tooltip",...Fe.tooltip},{type:"stat",label:"Stat",...Fe.stat},{type:"skeleton",label:"Skeleton",...Fe.skeleton},{type:"chip",label:"Chip",...Fe.chip},{type:"icon",label:"Icon",...Fe.icon},{type:"spinner",label:"Spinner",...Fe.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Fe.pricing},{type:"testimonial",label:"Testimonial",...Fe.testimonial},{type:"cta",label:"CTA",...Fe.cta},{type:"productCard",label:"Product Card",...Fe.productCard},{type:"profile",label:"Profile",...Fe.profile},{type:"feature",label:"Feature",...Fe.feature},{type:"team",label:"Team",...Fe.team},{type:"login",label:"Login",...Fe.login},{type:"contact",label:"Contact",...Fe.contact}]}],$a={};for(let a of Rb)for(let l of a.items)$a[l.type]=l;function ie({w:a,h:l=3,strong:u}){return(0,g.jsx)("div",{style:{width:typeof a=="number"?`${a}px`:a,height:l,borderRadius:2,background:u?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function $n({w:a,h:l,radius:u=3,style:h}){return(0,g.jsx)("div",{style:{width:typeof a=="number"?`${a}px`:a,height:typeof l=="number"?`${l}px`:l,borderRadius:u,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...h}})}function To({size:a}){return(0,g.jsx)("div",{style:{width:a,height:a,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function m8({width:a,height:l}){let u=Math.max(8,l*.2);return(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${u}px`,gap:a*.02},children:[(0,g.jsx)($n,{w:Math.max(20,l*.5),h:Math.max(12,l*.4),radius:2}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",gap:a*.03,marginLeft:a*.04},children:[(0,g.jsx)(ie,{w:a*.06}),(0,g.jsx)(ie,{w:a*.07}),(0,g.jsx)(ie,{w:a*.05}),(0,g.jsx)(ie,{w:a*.06})]}),(0,g.jsx)($n,{w:a*.1,h:Math.min(28,l*.5),radius:4})]})}function g8({width:a,height:l,text:u}){return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.05},children:[u?(0,g.jsx)("span",{style:{fontSize:Math.min(20,l*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:u}):(0,g.jsx)(ie,{w:a*.5,h:Math.max(6,l*.04),strong:!0}),(0,g.jsx)(ie,{w:a*.6}),(0,g.jsx)(ie,{w:a*.4}),(0,g.jsx)($n,{w:Math.min(140,a*.2),h:Math.min(36,l*.12),radius:6,style:{marginTop:l*.06}})]})}function y8({width:a,height:l}){let u=Math.max(3,Math.floor(l/36));return(0,g.jsxs)("div",{style:{padding:a*.08,display:"flex",flexDirection:"column",gap:l*.03},children:[(0,g.jsx)(ie,{w:a*.6,h:4,strong:!0}),Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,g.jsx)($n,{w:10,h:10,radius:2}),(0,g.jsx)(ie,{w:a*(.4+p*17%30/100)})]},p))]})}function v8({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(a/160)));return(0,g.jsx)("div",{style:{display:"flex",padding:`${l*.12}px ${a*.03}px`,gap:a*.05},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,g.jsx)(ie,{w:"60%",h:3,strong:!0}),(0,g.jsx)(ie,{w:"80%",h:2}),(0,g.jsx)(ie,{w:"70%",h:2}),(0,g.jsx)(ie,{w:"60%",h:2})]},p))})}function b8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,g.jsx)(ie,{w:a*.3,h:4,strong:!0}),(0,g.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,g.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,g.jsx)(ie,{w:"90%"}),(0,g.jsx)(ie,{w:"70%"}),(0,g.jsx)(ie,{w:"80%"})]}),(0,g.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,g.jsx)($n,{w:70,h:26,radius:4}),(0,g.jsx)($n,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function x8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,g.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,g.jsx)(ie,{w:"70%",h:4,strong:!0}),(0,g.jsx)(ie,{w:"95%",h:2}),(0,g.jsx)(ie,{w:"85%",h:2}),(0,g.jsx)(ie,{w:"50%",h:2})]})]})}function w8({width:a,height:l,text:u}){if(u)return(0,g.jsx)("div",{style:{padding:4,fontSize:Math.min(14,l*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:u});let h=Math.max(2,Math.floor(l/18));return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,g.jsx)(ie,{w:a*.6,h:5,strong:!0}),Array.from({length:h},(p,y)=>(0,g.jsx)(ie,{w:`${70+y*13%25}%`,h:2},y))]})}function C8({width:a,height:l}){return(0,g.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,preserveAspectRatio:"none",fill:"none",children:[(0,g.jsx)("line",{x1:"0",y1:"0",x2:a,y2:l,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,g.jsx)("line",{x1:a,y1:"0",x2:"0",y2:l,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,g.jsx)("circle",{cx:a*.3,cy:l*.3,r:Math.min(a,l)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function k8({width:a,height:l}){let u=Math.max(2,Math.min(5,Math.floor(a/100))),h=Math.max(2,Math.min(6,Math.floor(l/32)));return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:u},(p,y)=>(0,g.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,g.jsx)(ie,{w:"70%",h:3,strong:!0})},y))}),Array.from({length:h},(p,y)=>(0,g.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:u},(d,I)=>(0,g.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,g.jsx)(ie,{w:`${50+(y*7+I*13)%40}%`,h:2})},I))},y))]})}function S8({width:a,height:l}){let u=Math.max(2,Math.floor(l/28));return(0,g.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,g.jsx)(To,{size:8}),(0,g.jsx)(ie,{w:`${55+p*17%35}%`,h:2})]},p))})}function E8({width:a,height:l,text:u}){return(0,g.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,l/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:u?(0,g.jsx)("span",{style:{fontSize:Math.min(13,l*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:u}):(0,g.jsx)(ie,{w:Math.max(20,a*.5),h:3,strong:!0})})}function R8({width:a,height:l}){return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,g.jsx)(ie,{w:Math.min(80,a*.3),h:2}),(0,g.jsx)("div",{style:{height:Math.min(36,l*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,g.jsx)(ie,{w:"40%",h:2})})]})}function T8({width:a,height:l}){let u=Math.max(2,Math.min(5,Math.floor(l/56)));return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:l*.04,padding:8},children:[Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,g.jsx)(ie,{w:60+p*17%30,h:2}),(0,g.jsx)($n,{w:"100%",h:28,radius:4})]},p)),(0,g.jsx)($n,{w:Math.min(120,a*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function M8({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(a/120)));return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:u},(h,p)=>(0,g.jsx)("div",{style:{padding:"8px 12px",borderBottom:p===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,g.jsx)(ie,{w:60,h:3,strong:p===0})},p))}),(0,g.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,g.jsx)(ie,{w:"80%",h:2}),(0,g.jsx)(ie,{w:"65%",h:2}),(0,g.jsx)(ie,{w:"75%",h:2})]})]})}function D8({width:a,height:l}){let u=Math.min(a,l)/2;return(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:[(0,g.jsx)("circle",{cx:a/2,cy:l/2,r:u-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,g.jsx)("circle",{cx:a/2,cy:l*.38,r:u*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,g.jsx)("path",{d:`M${a/2-u*.55} ${l*.78} C${a/2-u*.55} ${l*.55} ${a/2+u*.55} ${l*.55} ${a/2+u*.55} ${l*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function L8({width:a,height:l}){return(0,g.jsx)("div",{style:{height:"100%",borderRadius:l/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)(ie,{w:Math.max(16,a*.5),h:2,strong:!0})})}function O8({width:a,height:l}){return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.08},children:[(0,g.jsx)(ie,{w:a*.5,h:Math.max(5,l*.06),strong:!0}),(0,g.jsx)(ie,{w:a*.35})]})}function N8({width:a,height:l}){return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:l*.04,padding:a*.04},children:[(0,g.jsx)(ie,{w:a*.3,h:4,strong:!0}),(0,g.jsx)(ie,{w:a*.7}),(0,g.jsx)(ie,{w:a*.5}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",gap:a*.03,marginTop:l*.06},children:[(0,g.jsx)($n,{w:"33%",h:"100%",radius:4}),(0,g.jsx)($n,{w:"33%",h:"100%",radius:4}),(0,g.jsx)($n,{w:"33%",h:"100%",radius:4})]})]})}function A8({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(a/140))),h=Math.max(1,Math.min(3,Math.floor(l/120)));return(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${u}, 1fr)`,gridTemplateRows:`repeat(${h}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:u*h},(p,y)=>(0,g.jsx)($n,{w:"100%",h:"100%",radius:4},y))})}function $8({width:a,height:l}){let u=Math.max(2,Math.floor((l-32)/28));return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,g.jsx)(ie,{w:a*.5,h:3,strong:!0})}),(0,g.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:u},(h,p)=>(0,g.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:p===0?"var(--agd-fill)":"transparent"},children:(0,g.jsx)(ie,{w:`${50+p*17%35}%`,h:2,strong:p===0})},p))})]})}function I8({width:a,height:l}){let u=Math.min(a,l)/2;return(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"1",width:a-2,height:l-2,rx:u,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,g.jsx)("circle",{cx:a-u,cy:l/2,r:u*.7,fill:"var(--agd-bar)"})]})}function B8({width:a,height:l}){let u=Math.min(l/2,20);return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:u,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${u*.6}px`,gap:6},children:[(0,g.jsx)(To,{size:Math.min(14,l*.4)}),(0,g.jsx)(ie,{w:"50%",h:2})]})}function z8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,g.jsx)(To,{size:Math.min(20,l*.5)}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:"60%",h:3,strong:!0}),(0,g.jsx)(ie,{w:"80%",h:2})]}),(0,g.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function U8({width:a,height:l}){return(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:[(0,g.jsx)("rect",{x:"0",y:"0",width:a,height:l,rx:l/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,g.jsx)("rect",{x:"1",y:"1",width:a*.65,height:l-2,rx:(l-2)/2,fill:"var(--agd-bar)"})]})}function H8({width:a,height:l}){let u=Math.max(3,Math.min(7,Math.floor(a/50))),h=a/(u*2);return(0,g.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:u},(p,y)=>{let d=30+(y*37+17)%55;return(0,g.jsx)($n,{w:h,h:`${d}%`,radius:2},y)})})}function F8({width:a,height:l}){let u=Math.min(a,l)*.12;return(0,g.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,g.jsx)($n,{w:"100%",h:"100%",radius:4}),(0,g.jsx)("div",{style:{position:"absolute",width:u*2,height:u*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)("div",{style:{width:0,height:0,borderLeft:`${u*.6}px solid var(--agd-bar-strong)`,borderTop:`${u*.4}px solid transparent`,borderBottom:`${u*.4}px solid transparent`,marginLeft:u*.15}})})]})}function P8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)(ie,{w:"60%",h:2})}),(0,g.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function j8({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(a/80)));return(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[p>0&&(0,g.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,g.jsx)(ie,{w:40+p*13%20,h:2,strong:p===u-1})]},p))})}function W8({width:a,height:l}){let u=Math.max(3,Math.min(5,Math.floor(a/40))),h=Math.min(28,l*.8);return(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:u},(p,y)=>(0,g.jsx)($n,{w:h,h,radius:4,style:y===1?{background:"var(--agd-bar)"}:void 0},y))})}function Y8({width:a}){return(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,g.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function V8({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(l/40)));return(0,g.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:p===0?2:1},children:[(0,g.jsx)(ie,{w:`${40+p*17%25}%`,h:3,strong:!0}),(0,g.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:p===0?"\u25BC":"\u25B6"})]},p))})}function X8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,g.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,g.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,g.jsx)($n,{w:"100%",h:"100%",radius:4}),(0,g.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,g.jsx)(To,{size:5}),(0,g.jsx)(To,{size:5}),(0,g.jsx)(To,{size:5})]})]})}function Q8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:l*.04},children:[(0,g.jsx)(ie,{w:a*.4,h:3,strong:!0}),(0,g.jsx)(ie,{w:a*.3,h:6,strong:!0}),(0,g.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(u,h)=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,g.jsx)(To,{size:5}),(0,g.jsx)(ie,{w:`${50+h*17%35}%`,h:2})]},h))}),(0,g.jsx)($n,{w:a*.7,h:Math.min(32,l*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function q8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,g.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,g.jsx)(ie,{w:"90%",h:2}),(0,g.jsx)(ie,{w:"75%",h:2}),(0,g.jsx)(ie,{w:"60%",h:2})]}),(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,g.jsx)(To,{size:20}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,g.jsx)(ie,{w:60,h:3,strong:!0}),(0,g.jsx)(ie,{w:40,h:2})]})]})]})}function G8({width:a,height:l}){return(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.08},children:[(0,g.jsx)(ie,{w:a*.5,h:Math.max(4,l*.05),strong:!0}),(0,g.jsx)(ie,{w:a*.35}),(0,g.jsx)($n,{w:Math.min(140,a*.25),h:Math.min(32,l*.15),radius:6,style:{marginTop:l*.04,background:"var(--agd-bar)"}})]})}function K8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,g.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,g.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:"40%",h:3,strong:!0}),(0,g.jsx)(ie,{w:"70%",h:2})]})]})}function Z8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,g.jsx)(ie,{w:a*.4,h:3,strong:!0}),(0,g.jsx)($n,{w:60,h:Math.min(24,l*.6),radius:4})]})}function J8({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l*.06},children:[(0,g.jsx)(ie,{w:a*.5,h:2}),(0,g.jsx)(ie,{w:a*.4,h:Math.max(8,l*.18),strong:!0}),(0,g.jsx)(ie,{w:a*.3,h:2})]})}function e7({width:a,height:l}){let u=Math.max(3,Math.min(5,Math.floor(a/100))),h=Math.min(12,l*.35);return(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:u},(p,y)=>(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,g.jsx)("div",{style:{width:h,height:h,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:y===0?"var(--agd-bar)":"transparent",flexShrink:0}}),y<u-1&&(0,g.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},y))})}function t7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,g.jsx)(ie,{w:Math.max(16,a*.5),h:2,strong:!0}),(0,g.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function n7({width:a,height:l}){let h=Math.min(l*.7,a/7.5);return(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:h*.2},children:Array.from({length:5},(p,y)=>(0,g.jsx)("svg",{width:h,height:h,viewBox:"0 0 16 16",fill:"none",children:(0,g.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:y<3?"var(--agd-bar)":"none"})},y))})}function r7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,g.jsx)("line",{x1:0,y1:l*.3,x2:a,y2:l*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,g.jsx)("line",{x1:0,y1:l*.6,x2:a,y2:l*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,g.jsx)("line",{x1:a*.4,y1:0,x2:a*.6,y2:l,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,g.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,g.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,g.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,g.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function o7({width:a,height:l}){let u=Math.max(3,Math.min(5,Math.floor(l/60)));return(0,g.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,g.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,g.jsx)(To,{size:8}),p<u-1&&(0,g.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},p))}),(0,g.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:`${35+p*13%25}%`,h:3,strong:!0}),(0,g.jsx)(ie,{w:`${50+p*17%30}%`,h:2})]},p))})]})}function a7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l*.06},children:[(0,g.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,g.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,g.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,g.jsx)(ie,{w:a*.4,h:2}),(0,g.jsx)(ie,{w:a*.25,h:2})]})}function i7({width:a,height:l}){let u=Math.max(3,Math.min(8,Math.floor(l/20)));return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,g.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,g.jsx)(To,{size:6}),(0,g.jsx)(To,{size:6}),(0,g.jsx)(To,{size:6})]}),Array.from({length:u},(h,p)=>(0,g.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:p>0&&p<u-1?12:0},children:(0,g.jsx)(ie,{w:`${25+p*23%50}%`,h:2,strong:p===0})},p))]})}function l7({width:a,height:l}){let p=Math.min((a-16)/7,(l-40)/6);return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,g.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,g.jsx)(ie,{w:a*.3,h:3,strong:!0}),(0,g.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,g.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(y,d)=>(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:p*.6},children:(0,g.jsx)(ie,{w:p*.5,h:2})},`h${d}`)),Array.from({length:35},(y,d)=>(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:p},children:(0,g.jsx)("div",{style:{width:p*.6,height:p*.6,borderRadius:"50%",background:d===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:d===12?1:.3}})})},d))]})]})}function s7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,g.jsx)(To,{size:Math.min(32,l*.55)}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:"50%",h:3,strong:!0}),(0,g.jsx)(ie,{w:"75%",h:2})]}),(0,g.jsx)(ie,{w:30,h:2})]})}function u7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,g.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,g.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,g.jsx)(ie,{w:"65%",h:4,strong:!0}),(0,g.jsx)(ie,{w:"40%",h:3}),(0,g.jsx)("div",{style:{flex:1}}),(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,g.jsx)(ie,{w:"30%",h:5,strong:!0}),(0,g.jsx)($n,{w:Math.min(70,a*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function c7({width:a,height:l}){let u=Math.min(48,l*.3);return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:l*.06},children:[(0,g.jsx)(To,{size:u}),(0,g.jsx)(ie,{w:a*.45,h:4,strong:!0}),(0,g.jsx)(ie,{w:a*.3,h:2}),(0,g.jsxs)("div",{style:{display:"flex",gap:a*.08,marginTop:l*.04},children:[(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,g.jsx)(ie,{w:20,h:3,strong:!0}),(0,g.jsx)(ie,{w:28,h:2})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,g.jsx)(ie,{w:20,h:3,strong:!0}),(0,g.jsx)(ie,{w:28,h:2})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,g.jsx)(ie,{w:20,h:3,strong:!0}),(0,g.jsx)(ie,{w:28,h:2})]})]})]})}function d7({width:a,height:l}){let u=Math.max(a*.6,80),h=Math.max(3,Math.floor(l/40));return(0,g.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,g.jsx)("div",{style:{width:a-u,background:"var(--agd-fill)",opacity:.3}}),(0,g.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:a*.04},children:[(0,g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:l*.06},children:[(0,g.jsx)(ie,{w:u*.4,h:4,strong:!0}),(0,g.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:h},(p,y)=>(0,g.jsx)("div",{style:{padding:"6px 0"},children:(0,g.jsx)(ie,{w:`${50+y*17%35}%`,h:2,strong:y===0})},y))]})]})}function f7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,g.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,g.jsx)(ie,{w:"70%",h:3,strong:!0}),(0,g.jsx)(ie,{w:"90%",h:2}),(0,g.jsx)(ie,{w:"60%",h:2})]}),(0,g.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function h7({width:a,height:l}){let u=Math.min(l*.7,a*.3);return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:a*.08},children:[(0,g.jsx)($n,{w:u,h:u,radius:u*.25}),(0,g.jsx)(ie,{w:a*.45,h:Math.max(4,l*.2),strong:!0})]})}function p7({width:a,height:l}){let u=Math.max(2,Math.min(5,Math.floor(l/56)));return(0,g.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:p===0?2:1},children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,g.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,g.jsx)(ie,{w:a*(.3+p*13%25/100),h:3,strong:!0})]}),(0,g.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:p===0?"\u25BC":"\u25B6"})]},p))})}function _7({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(a/120))),h=Math.max(1,Math.min(3,Math.floor(l/120)));return(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${u}, 1fr)`,gridTemplateRows:`repeat(${h}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:u*h},(p,y)=>(0,g.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,g.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,g.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},y))})}function m7({width:a,height:l}){let u=Math.min(a,l);return(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:(l-u+2)/2,width:u-2,height:u-2,rx:u*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,g.jsx)("path",{d:`M${u*.25} ${l/2}l${u*.2} ${u*.2} ${u*.3}-${u*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function g7({width:a,height:l}){let u=Math.min(a,l)/2-1;return(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:[(0,g.jsx)("circle",{cx:a/2,cy:l/2,r:u,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,g.jsx)("circle",{cx:a/2,cy:l/2,r:u*.45,fill:"var(--agd-bar)"})]})}function y7({width:a,height:l}){let u=Math.max(2,l*.12),h=Math.min(l*.35,10),p=a*.55;return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,g.jsx)("div",{style:{width:"100%",height:u,borderRadius:u/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,g.jsx)("div",{style:{width:p,height:"100%",borderRadius:u/2,background:"var(--agd-bar)"}})}),(0,g.jsx)("div",{style:{position:"absolute",left:p-h,width:h*2,height:h*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function v7({width:a,height:l}){let u=Math.min(36,l*.15),h=7,p=4,y=Math.min((a-16)/h,(l-u-40)/(p+1));return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,g.jsxs)("div",{style:{height:u,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,g.jsx)(ie,{w:"40%",h:2}),(0,g.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,g.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,g.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,g.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,g.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,g.jsx)(ie,{w:a*.25,h:2,strong:!0}),(0,g.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,g.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${h}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:h*p},(d,I)=>(0,g.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:y},children:(0,g.jsx)("div",{style:{width:y*.5,height:y*.5,borderRadius:"50%",background:I===10?"var(--agd-bar)":"transparent"},children:(0,g.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:I===10?1:.25}})})})},I))})]})]})}function b7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:l*.08,padding:4},children:[(0,g.jsx)("div",{style:{width:"100%",height:l*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,g.jsx)("div",{style:{width:"70%",height:Math.max(6,l*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,g.jsx)("div",{style:{width:"90%",height:Math.max(4,l*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,g.jsx)("div",{style:{width:"50%",height:Math.max(4,l*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function x7({width:a,height:l}){return(0,g.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,g.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:l/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${l*.3}px`,gap:4},children:[(0,g.jsx)(ie,{w:"60%",h:2,strong:!0}),(0,g.jsx)("div",{style:{width:Math.max(6,l*.3),height:Math.max(6,l*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function w7({width:a,height:l}){let u=Math.min(a,l);return(0,g.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:(0,g.jsx)("path",{d:`M${a/2} ${(l-u)/2+u*.1}l${u*.12} ${u*.25} ${u*.28} ${u*.04}-${u*.2} ${u*.2} ${u*.05} ${u*.28}-${u*.25}-${u*.12}-${u*.25} ${u*.12} ${u*.05}-${u*.28}-${u*.2}-${u*.2} ${u*.28}-${u*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function C7({width:a,height:l}){let u=Math.min(a,l)/2-2;return(0,g.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${l}`,fill:"none",children:[(0,g.jsx)("circle",{cx:a/2,cy:l/2,r:u,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,g.jsx)("path",{d:`M${a/2} ${l/2-u}a${u} ${u} 0 0 1 ${u} ${u}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function k7({width:a,height:l}){let u=Math.min(36,l*.25,a*.12),h=Math.max(1,Math.min(3,Math.floor(l/80)));return(0,g.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:h},(p,y)=>(0,g.jsxs)("div",{style:{display:"flex",gap:a*.04,alignItems:"flex-start"},children:[(0,g.jsx)($n,{w:u,h:u,radius:u*.25}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,g.jsx)(ie,{w:`${40+y*13%20}%`,h:3,strong:!0}),(0,g.jsx)(ie,{w:`${60+y*17%25}%`,h:2})]})]},y))})}function S7({width:a,height:l}){let u=Math.max(2,Math.min(4,Math.floor(a/120))),h=Math.min(36,l*.25);return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:l*.06,padding:l*.06},children:[(0,g.jsx)(ie,{w:a*.3,h:4,strong:!0}),(0,g.jsx)("div",{style:{display:"flex",gap:a*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:u},(p,y)=>(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,g.jsx)(To,{size:h}),(0,g.jsx)(ie,{w:a*.12,h:3,strong:!0}),(0,g.jsx)(ie,{w:a*.08,h:2})]},y))})]})}function E7({width:a,height:l}){let u=Math.max(2,Math.min(3,Math.floor(l/80)));return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:a*.06,gap:l*.04},children:[(0,g.jsx)(ie,{w:a*.5,h:Math.max(5,l*.04),strong:!0}),(0,g.jsx)(ie,{w:a*.35,h:2}),(0,g.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:l*.03,marginTop:l*.04},children:Array.from({length:u},(h,p)=>(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:Math.min(60,a*.2),h:2}),(0,g.jsx)($n,{w:"100%",h:Math.min(32,l*.1),radius:4})]},p))}),(0,g.jsx)($n,{w:"100%",h:Math.min(36,l*.12),radius:6,style:{marginTop:l*.03,background:"var(--agd-bar)"}}),(0,g.jsx)(ie,{w:a*.4,h:2})]})}function R7({width:a,height:l}){return(0,g.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:a*.04,gap:l*.03},children:[(0,g.jsx)(ie,{w:a*.4,h:4,strong:!0}),(0,g.jsx)(ie,{w:a*.6,h:2}),(0,g.jsxs)("div",{style:{display:"flex",gap:6,marginTop:l*.03},children:[(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:50,h:2}),(0,g.jsx)($n,{w:"100%",h:Math.min(28,l*.1),radius:4})]}),(0,g.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:40,h:2}),(0,g.jsx)($n,{w:"100%",h:Math.min(28,l*.1),radius:4})]})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,g.jsx)(ie,{w:50,h:2}),(0,g.jsx)($n,{w:"100%",h:Math.min(28,l*.1),radius:4})]}),(0,g.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,g.jsx)(ie,{w:60,h:2}),(0,g.jsx)($n,{w:"100%",h:"100%",radius:4})]}),(0,g.jsx)($n,{w:Math.min(120,a*.3),h:Math.min(30,l*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var T7={navigation:m8,hero:g8,sidebar:y8,footer:v8,modal:b8,card:x8,text:w8,image:C8,table:k8,list:S8,button:E8,input:R8,form:T8,tabs:M8,avatar:D8,badge:L8,header:O8,section:N8,grid:A8,dropdown:$8,toggle:I8,search:B8,toast:z8,progress:U8,chart:H8,video:F8,tooltip:P8,breadcrumb:j8,pagination:W8,divider:Y8,accordion:V8,carousel:X8,pricing:Q8,testimonial:q8,cta:G8,alert:K8,banner:Z8,stat:J8,stepper:e7,tag:t7,rating:n7,map:r7,timeline:o7,fileUpload:a7,codeBlock:i7,calendar:l7,notification:s7,productCard:u7,profile:c7,drawer:d7,popover:f7,logo:h7,faq:p7,gallery:_7,checkbox:m7,radio:g7,slider:y7,datePicker:v7,skeleton:b7,chip:x7,icon:w7,spinner:C7,feature:k7,team:S7,login:E7,contact:R7};function M7({type:a,width:l,height:u,text:h}){let p=T7[a];return p?(0,g.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,g.jsx)(p,{width:l,height:u,text:h})}):(0,g.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,g.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:a})})}var D7=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,L7={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-design-mode-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(a)),a.textContent=D7}var re=L7,eu=24,oh=5;function eb(a,l,u,h,p){let y=1/0,d=1/0,I=a.x,E=a.x+a.width,Y=a.x+a.width/2,N=a.y,F=a.y+a.height,A=a.y+a.height/2,ee=!h,P=ee?[I,E,Y]:[...h.left?[I]:[],...h.right?[E]:[]],pe=ee?[N,F,A]:[...h.top?[N]:[],...h.bottom?[F]:[]],Q=[];for(let Je of l)u.has(Je.id)||Q.push(Je);p&&Q.push(...p);for(let Je of Q){let dt=Je.x,Re=Je.x+Je.width,He=Je.x+Je.width/2,we=Je.y,rt=Je.y+Je.height,Wt=Je.y+Je.height/2;for(let de of P)for(let et of[dt,Re,He]){let Et=et-de;Math.abs(Et)<oh&&Math.abs(Et)<Math.abs(y)&&(y=Et)}for(let de of pe)for(let et of[we,rt,Wt]){let Et=et-de;Math.abs(Et)<oh&&Math.abs(Et)<Math.abs(d)&&(d=Et)}}let K=Math.abs(y)<oh?y:0,_e=Math.abs(d)<oh?d:0,ge=[],De=new Set,Qe=I+K,Dt=E+K,ye=Y+K,Kt=N+_e,vt=F+_e,gt=A+_e;for(let Je of Q){let dt=Je.x,Re=Je.x+Je.width,He=Je.x+Je.width/2,we=Je.y,rt=Je.y+Je.height,Wt=Je.y+Je.height/2;for(let de of[dt,He,Re])for(let et of[Qe,ye,Dt])if(Math.abs(et-de)<.5){let Et=`x:${Math.round(de)}`;De.has(Et)||(De.add(Et),ge.push({axis:"x",pos:de}))}for(let de of[we,Wt,rt])for(let et of[Kt,gt,vt])if(Math.abs(et-de)<.5){let Et=`y:${Math.round(de)}`;De.has(Et)||(De.add(Et),ge.push({axis:"y",pos:de}))}}return{dx:K,dy:_e,guides:ge}}function tb(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function O7({placements:a,onChange:l,activeComponent:u,onActiveComponentChange:h,isDarkMode:p,exiting:y,onInteractionChange:d,className:I,passthrough:E,extraSnapRects:Y,onSelectionChange:N,deselectSignal:F,onDragMove:A,onDragEnd:ee,clearSignal:P,wireframe:pe}){let[Q,K]=(0,mn.useState)(new Set),[_e,ge]=(0,mn.useState)(null),[De,Qe]=(0,mn.useState)(null),[Dt,ye]=(0,mn.useState)(null),[Kt,vt]=(0,mn.useState)([]),[gt,Je]=(0,mn.useState)(null),[dt,Re]=(0,mn.useState)(!1),He=(0,mn.useRef)(!1),[we,rt]=(0,mn.useState)(new Set),Wt=(0,mn.useRef)(new Map),de=(0,mn.useRef)(null),et=(0,mn.useRef)(null),Et=(0,mn.useRef)(a);Et.current=a;let sn=(0,mn.useRef)(N);sn.current=N;let bn=(0,mn.useRef)(A);bn.current=A;let Sn=(0,mn.useRef)(ee);Sn.current=ee;let qr=(0,mn.useRef)(F);(0,mn.useEffect)(()=>{F!==qr.current&&(qr.current=F,K(new Set))},[F]);let ir=(0,mn.useRef)(P);(0,mn.useEffect)(()=>{if(P!==void 0&&P!==ir.current){ir.current=P;let se=new Set(Et.current.map(qe=>qe.id));se.size>0&&(rt(se),K(new Set),et.current=null,bt(()=>{l([]),rt(new Set)},180))}},[P,l]),(0,mn.useEffect)(()=>{let se=qe=>{let st=qe.target;if(!(st.tagName==="INPUT"||st.tagName==="TEXTAREA"||st.isContentEditable)){if((qe.key==="Backspace"||qe.key==="Delete")&&Q.size>0){qe.preventDefault();let We=new Set(Q);rt(We),K(new Set),bt(()=>{l(Et.current.filter(jt=>!We.has(jt.id))),rt(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(qe.key)&&Q.size>0){qe.preventDefault();let We=qe.shiftKey?20:1,jt=qe.key==="ArrowLeft"?-We:qe.key==="ArrowRight"?We:0,Ut=qe.key==="ArrowUp"?-We:qe.key==="ArrowDown"?We:0;l(a.map(Ht=>Q.has(Ht.id)?{...Ht,x:Math.max(0,Ht.x+jt),y:Math.max(0,Ht.y+Ut)}:Ht));return}if(qe.key==="Escape"){u?h(null):Q.size>0&&K(new Set);return}}};return document.addEventListener("keydown",se),()=>document.removeEventListener("keydown",se)},[Q,u,a,l,h]);let br=(0,mn.useCallback)(se=>{if(se.button!==0||E||se.target.closest(`.${re.placement}`))return;se.preventDefault(),se.stopPropagation();let st=window.scrollY,_t=se.clientX,We=se.clientY;if(u){et.current="place",d?.(!0);let jt=!1,Ut=_t,Ht=We,ut=$=>{Ut=$.clientX,Ht=$.clientY;let j=Math.abs(Ut-_t),O=Math.abs(Ht-We);if((j>5||O>5)&&(jt=!0),jt){let B=Math.min(_t,Ut),ae=Math.min(We,Ht),ve=Math.abs(Ut-_t),te=Math.abs(Ht-We);ge({x:B,y:ae,w:ve,h:te}),ye({x:$.clientX+12,y:$.clientY+12,text:`${Math.round(ve)} \xD7 ${Math.round(te)}`})}},Ge=$=>{window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",Ge),ge(null),ye(null),et.current=null,d?.(!1);let j=Fe[u],O,B,ae,ve;jt?(O=Math.min(_t,Ut),B=Math.min(We,Ht)+st,ae=Math.max(eu,Math.abs(Ut-_t)),ve=Math.max(eu,Math.abs(Ht-We))):(ae=j.width,ve=j.height,O=_t-ae/2,B=We+st-ve/2),O=Math.max(0,O),B=Math.max(0,B);let te={id:tb(),type:u,x:O,y:B,width:ae,height:ve,scrollY:st,timestamp:Date.now()},Me=[...a,te];l(Me),K(new Set([te.id])),h(null)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",Ge)}else{se.shiftKey||K(new Set),et.current="select";let jt=!1,Ut=ut=>{let Ge=Math.abs(ut.clientX-_t),$=Math.abs(ut.clientY-We);if((Ge>4||$>4)&&(jt=!0),jt){let j=Math.min(_t,ut.clientX),O=Math.min(We,ut.clientY);Qe({x:j,y:O,w:Math.abs(ut.clientX-_t),h:Math.abs(ut.clientY-We)})}},Ht=ut=>{if(window.removeEventListener("mousemove",Ut),window.removeEventListener("mouseup",Ht),et.current=null,jt){let Ge=Math.min(_t,ut.clientX),$=Math.min(We,ut.clientY)+st,j=Math.abs(ut.clientX-_t),O=Math.abs(ut.clientY-We),B=new Set(se.shiftKey?Q:new Set);for(let ae of a){let ve=ae.y-st;ae.x+ae.width>Ge&&ae.x<Ge+j&&ae.y+ae.height>$&&ae.y<$+O&&B.add(ae.id)}K(B)}Qe(null)};window.addEventListener("mousemove",Ut),window.addEventListener("mouseup",Ht)}},[u,E,a,l,Q]),lr=(0,mn.useCallback)((se,qe)=>{if(se.button!==0)return;let st=se.target;if(st.closest(`.${re.handle}`)||st.closest(`.${re.deleteButton}`))return;se.preventDefault(),se.stopPropagation();let _t;se.shiftKey?(_t=new Set(Q),_t.has(qe)?_t.delete(qe):_t.add(qe)):Q.has(qe)?_t=new Set(Q):_t=new Set([qe]),K(_t),(_t.size!==Q.size||[..._t].some(Me=>!Q.has(Me)))&&sn.current?.(_t,se.shiftKey);let jt=window.scrollY,Ut=se.clientX,Ht=se.clientY,ut=new Map;for(let Me of a)_t.has(Me.id)&&ut.set(Me.id,{x:Me.x,y:Me.y});et.current="move",d?.(!0);let Ge=!1,$=!1,j=a,O=0,B=0,ae=new Map;for(let Me of a)ut.has(Me.id)&&ae.set(Me.id,{w:Me.width,h:Me.height});let ve=Me=>{let ze=Me.clientX-Ut,Ct=Me.clientY-Ht;if((Math.abs(ze)>2||Math.abs(Ct)>2)&&(Ge=!0),!Ge)return;if(Me.altKey&&!$){$=!0;let lt=[];for(let fn of a)ut.has(fn.id)&&lt.push({...fn,id:tb(),timestamp:Date.now()});j=[...a,...lt]}let it=1/0,Oe=1/0,ct=-1/0,Ye=-1/0;for(let[lt,fn]of ut){let Jn=ae.get(lt);Jn&&(it=Math.min(it,fn.x+ze),Oe=Math.min(Oe,fn.y+Ct),ct=Math.max(ct,fn.x+ze+Jn.w),Ye=Math.max(Ye,fn.y+Ct+Jn.h))}let xt={x:it,y:Oe,width:ct-it,height:Ye-Oe},{dx:Pe,dy:nn,guides:qt}=eb(xt,j,new Set(ut.keys()),void 0,Y);vt(qt);let Lt=ze+Pe,Ft=Ct+nn;O=Lt,B=Ft,l(j.map(lt=>{let fn=ut.get(lt.id);return fn?{...lt,x:Math.max(0,fn.x+Lt),y:Math.max(0,fn.y+Ft)}:lt})),bn.current?.(Lt,Ft)},te=()=>{window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",te),et.current=null,d?.(!1),vt([]),Sn.current?.(O,B,Ge)};window.addEventListener("mousemove",ve),window.addEventListener("mouseup",te)},[Q,a,l,d]),sr=(0,mn.useCallback)((se,qe,st)=>{se.preventDefault(),se.stopPropagation();let _t=a.find(B=>B.id===qe);if(!_t)return;K(new Set([qe])),et.current="resize",d?.(!0);let We=se.clientX,jt=se.clientY,Ut=_t.width,Ht=_t.height,ut=_t.x,Ge=_t.y,$={left:st.includes("w"),right:st.includes("e"),top:st.includes("n"),bottom:st.includes("s")},j=B=>{let ae=B.clientX-We,ve=B.clientY-jt,te=Ut,Me=Ht,ze=ut,Ct=Ge;st.includes("e")&&(te=Math.max(eu,Ut+ae)),st.includes("w")&&(te=Math.max(eu,Ut-ae),ze=ut+Ut-te),st.includes("s")&&(Me=Math.max(eu,Ht+ve)),st.includes("n")&&(Me=Math.max(eu,Ht-ve),Ct=Ge+Ht-Me);let it={x:ze,y:Ct,width:te,height:Me},{dx:Oe,dy:ct,guides:Ye}=eb(it,Et.current,new Set([qe]),$,Y);vt(Ye),Oe!==0&&($.right?te+=Oe:$.left&&(ze+=Oe,te-=Oe)),ct!==0&&($.bottom?Me+=ct:$.top&&(Ct+=ct,Me-=ct)),l(Et.current.map(xt=>xt.id===qe?{...xt,x:ze,y:Ct,width:te,height:Me}:xt)),ye({x:B.clientX+12,y:B.clientY+12,text:`${Math.round(te)} \xD7 ${Math.round(Me)}`})},O=()=>{window.removeEventListener("mousemove",j),window.removeEventListener("mouseup",O),ye(null),et.current=null,d?.(!1),vt([])};window.addEventListener("mousemove",j),window.addEventListener("mouseup",O)},[a,l,d]),tr=(0,mn.useCallback)(se=>{et.current=null,rt(qe=>{let st=new Set(qe);return st.add(se),st}),K(qe=>{let st=new Set(qe);return st.delete(se),st}),bt(()=>{l(Et.current.filter(qe=>qe.id!==se)),rt(qe=>{let st=new Set(qe);return st.delete(se),st})},180)},[l]),Mr=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),En={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Kn=(0,mn.useCallback)(se=>{let qe=a.find(st=>st.id===se);qe&&(He.current=!!qe.text,Je(se),Re(!1))},[a]),gn=(0,mn.useCallback)(()=>{gt&&(Re(!0),bt(()=>{Je(null),Re(!1)},150))},[gt]);(0,mn.useEffect)(()=>{y&&gt&&gn()},[y]);let In=(0,mn.useCallback)(se=>{gt&&(l(a.map(qe=>qe.id===gt?{...qe,text:se.trim()||void 0}:qe)),gn())},[gt,a,l,gn]),yn=typeof window<"u"?window.scrollY:0,Zn=["nw","ne","se","sw"],Ln=pe?"#f97316":"#3c82f7",tt=[{dir:"n",cls:re.edgeN,arrow:(0,Yn.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Yn.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:Ln})})},{dir:"e",cls:re.edgeE,arrow:(0,Yn.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Yn.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:Ln})})},{dir:"s",cls:re.edgeS,arrow:(0,Yn.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Yn.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:Ln})})},{dir:"w",cls:re.edgeW,arrow:(0,Yn.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Yn.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:Ln})})}];return(0,Yn.jsxs)(Yn.Fragment,{children:[(0,Yn.jsx)("div",{ref:de,className:`${re.overlay} ${p?"":re.light} ${u?re.placing:""} ${E?re.passthrough:""} ${y?re.overlayExiting:""} ${pe?re.wireframe:""}${I?` ${I}`:""}`,"data-feedback-toolbar":!0,onMouseDown:br,children:a.map(se=>{let qe=Q.has(se.id),st=$a[se.type]?.label||se.type,_t=se.y-yn;return(0,Yn.jsxs)("div",{"data-design-placement":se.id,className:`${re.placement} ${qe?re.selected:""} ${we.has(se.id)?re.exiting:""}`,style:{left:se.x,top:_t,width:se.width,height:se.height,position:"fixed"},onMouseDown:We=>lr(We,se.id),onDoubleClick:()=>Kn(se.id),children:[(0,Yn.jsx)("span",{className:re.placementLabel,children:st}),(0,Yn.jsx)("span",{className:`${re.placementAnnotation} ${se.text?re.annotationVisible:""}`,children:(se.text&&Wt.current.set(se.id,se.text),se.text||Wt.current.get(se.id)||"")}),(0,Yn.jsx)("div",{className:re.placementContent,children:(0,Yn.jsx)(M7,{type:se.type,width:se.width,height:se.height,text:se.text})}),(0,Yn.jsx)("div",{className:re.deleteButton,onMouseDown:We=>We.stopPropagation(),onClick:()=>tr(se.id),children:"\u2715"}),Zn.map(We=>(0,Yn.jsx)("div",{className:`${re.handle} ${re[`handle${We.charAt(0).toUpperCase()}${We.slice(1)}`]}`,onMouseDown:jt=>sr(jt,se.id,We)},We)),tt.map(({dir:We,cls:jt,arrow:Ut})=>(0,Yn.jsx)("div",{className:`${re.edgeHandle} ${jt}`,onMouseDown:Ht=>sr(Ht,se.id,We),children:Ut},We))]},se.id)})}),gt&&(()=>{let se=a.find(Ge=>Ge.id===gt);if(!se)return null;let qe=se.y-yn,st=se.x+se.width/2,_t=qe-8,We=qe+se.height+8,jt=_t>200,Ut=We<window.innerHeight-100,Ht=Math.max(160,Math.min(window.innerWidth-160,st)),ut;return jt?ut={left:Ht,bottom:window.innerHeight-_t}:Ut?ut={left:Ht,top:We}:ut={left:Ht,top:Math.max(80,window.innerHeight/2-80)},(0,Yn.jsx)(mh,{element:$a[se.type]?.label||se.type,placeholder:En[se.type]||"Label or content text",initialValue:se.text??"",submitLabel:He.current?"Save":"Set",onSubmit:In,onCancel:gn,onDelete:He.current?()=>{In("")}:void 0,isExiting:dt,lightMode:!p,style:ut})})(),_e&&(0,Yn.jsx)("div",{className:re.drawBox,style:{left:_e.x,top:_e.y,width:_e.w,height:_e.h},"data-feedback-toolbar":!0}),De&&(0,Yn.jsx)("div",{className:re.selectBox,style:{left:De.x,top:De.y,width:De.w,height:De.h},"data-feedback-toolbar":!0}),Dt&&(0,Yn.jsx)("div",{className:re.sizeIndicator,style:{left:Dt.x,top:Dt.y},"data-feedback-toolbar":!0,children:Dt.text}),Kt.map((se,qe)=>(0,Yn.jsx)("div",{className:re.guideLine,style:se.axis==="x"?{position:"fixed",left:se.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:se.pos-yn,right:0,height:1},"data-feedback-toolbar":!0},`${se.axis}-${se.pos}-${qe}`))]})}function N7(a){if(!a)return"";let l=a.scrollTop>2,u=a.scrollTop+a.clientHeight<a.scrollHeight-2;return`${l?re.fadeTop:""} ${u?re.fadeBottom:""}`}var w="currentColor",J="0.5";function A7({type:a}){switch(a){case"navigation":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:w,opacity:".4"}),(0,m.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:w,opacity:".25"})]});case"header":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:w,opacity:".35"}),(0,m.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:w,opacity:".15"})]});case"hero":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:w,opacity:".35"}),(0,m.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:w,strokeWidth:J})]});case"section":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:w,opacity:".15"})]});case"sidebar":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:w,opacity:".15"})]});case"footer":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:w,opacity:".2"})]});case"modal":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:w,strokeWidth:J})]});case"divider":return(0,m.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,m.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:w,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:w,opacity:".04"}),(0,m.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:w,opacity:".12"})]});case"text":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:w,opacity:".12"})]});case"image":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"}),(0,m.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"})]});case"video":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:w,strokeWidth:J,fill:w,opacity:".15"})]});case"table":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:w,strokeWidth:".3",opacity:".25"}),(0,m.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:w,strokeWidth:".3",opacity:".25"}),(0,m.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"}),(0,m.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:w,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:w,strokeWidth:J})]});case"list":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:w,opacity:".2"})]});case"chart":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:w,opacity:".2"})]});case"accordion":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:w,strokeWidth:J})]});case"carousel":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:w,strokeWidth:J,opacity:".35"}),(0,m.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:w,strokeWidth:J,opacity:".35"}),(0,m.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:w,opacity:".35"}),(0,m.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:w,opacity:".15"}),(0,m.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:w,opacity:".15"})]});case"button":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:w,opacity:".25"})]});case"input":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:w,opacity:".12"})]});case"search":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:w,opacity:".12"})]});case"form":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:w,strokeWidth:J})]});case"tabs":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:w,strokeWidth:J})]});case"dropdown":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:w,strokeWidth:J,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:w,opacity:".3"})]});case"avatar":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:w,strokeWidth:J}),(0,m.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:w,strokeWidth:J})]});case"badge":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"})]});case"breadcrumb":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:w,strokeWidth:J,opacity:".2"}),(0,m.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("path",{d:"M14 7l1 1-1 1",stroke:w,strokeWidth:J,opacity:".2"}),(0,m.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:w,opacity:".15"})]});case"pagination":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:w,opacity:".15",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:w,strokeWidth:J})]});case"progress":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:w,opacity:".2"})]});case"toast":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".12"})]});case"tooltip":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:w,strokeWidth:J})]});case"pricing":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:w,opacity:".1"}),(0,m.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:w,opacity:".1"}),(0,m.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:w,opacity:".2"})]});case"testimonial":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:w,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,m.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:w,opacity:".12"}),(0,m.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:w,strokeWidth:J,opacity:".25"}),(0,m.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:w,opacity:".15"})]});case"cta":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:w,strokeWidth:J})]});case"alert":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:w,strokeWidth:"0.6",opacity:".5"}),(0,m.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:w,opacity:".5"}),(0,m.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:w,opacity:".2"})]});case"banner":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:w,strokeWidth:J})]});case"stat":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:w,opacity:".12"})]});case"stepper":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:w,opacity:".2",stroke:w,strokeWidth:J}),(0,m.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:w,strokeWidth:".4",opacity:".3"}),(0,m.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:w,strokeWidth:J}),(0,m.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:w,strokeWidth:".4",opacity:".3"}),(0,m.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:w,strokeWidth:J})]});case"tag":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:w,strokeWidth:J,opacity:".2"}),(0,m.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:w,strokeWidth:J,opacity:".2"})]});case"rating":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:w,opacity:".25"}),(0,m.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:w,opacity:".25"}),(0,m.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:w,strokeWidth:J,opacity:".25"})]});case"map":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:w,strokeWidth:".3",opacity:".15"}),(0,m.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:w,strokeWidth:".3",opacity:".15"}),(0,m.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:w,opacity:".15",stroke:w,strokeWidth:J})]});case"timeline":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:w,strokeWidth:".4",opacity:".25"}),(0,m.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:w,opacity:".2",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:w,opacity:".15"})]});case"fileUpload":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:w,strokeWidth:J,strokeDasharray:"2 1"}),(0,m.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:w,opacity:".15"})]});case"codeBlock":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:w,opacity:".3"}),(0,m.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:w,opacity:".3"}),(0,m.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:w,opacity:".3"}),(0,m.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:w,opacity:".12"})]});case"calendar":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:w,strokeWidth:".4",opacity:".25"}),(0,m.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:w,opacity:".2"}),(0,m.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:w,opacity:".3"}),(0,m.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:w,opacity:".2"})]});case"notification":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:w,strokeWidth:J,opacity:".25"}),(0,m.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:w,opacity:".12"}),(0,m.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:w,opacity:".25"})]});case"productCard":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:w,opacity:".04"}),(0,m.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:w,strokeWidth:J})]});case"profile":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:w,opacity:".12"})]});case"drawer":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:w,strokeWidth:J,opacity:".15"})]});case"popover":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:w,strokeWidth:J})]});case"logo":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:w,strokeWidth:J}),(0,m.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:w,strokeWidth:J,opacity:".3"}),(0,m.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:w,opacity:".12"})]});case"faq":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:w,opacity:".3",fontWeight:"bold",children:"?"}),(0,m.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:w,opacity:".12"}),(0,m.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:w,opacity:".3",fontWeight:"bold",children:"?"}),(0,m.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:w,opacity:".12"})]});case"gallery":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:w,strokeWidth:J})]});case"checkbox":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:w,strokeWidth:J,opacity:".35"})]});case"radio":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:w,strokeWidth:J}),(0,m.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:w,opacity:".3"})]});case"slider":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:w,strokeWidth:J})]});case"datePicker":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:w,opacity:".12"}),(0,m.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:w,strokeWidth:J,strokeDasharray:"2 1",opacity:".3"}),(0,m.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:w,opacity:".3"}),(0,m.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:w,opacity:".2"})]});case"skeleton":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:w,opacity:".08"}),(0,m.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:w,opacity:".08"}),(0,m.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:w,opacity:".08"})]});case"chip":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:w,opacity:".08",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:w,strokeWidth:J,opacity:".2"}),(0,m.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:w,strokeWidth:J,opacity:".2"}),(0,m.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:w,strokeWidth:J,opacity:".25"})]});case"icon":return(0,m.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,m.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:w,strokeWidth:J,opacity:".3"})});case"spinner":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:w,strokeWidth:J,opacity:".12"}),(0,m.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:w,strokeWidth:J,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:w,strokeWidth:J,opacity:".25"}),(0,m.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:w,opacity:".12"}),(0,m.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:w,opacity:".12"})]});case"team":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:w,strokeWidth:J,opacity:".5"}),(0,m.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:w,opacity:".15"}),(0,m.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:w,opacity:".1"})]});case"login":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:w,opacity:".25"}),(0,m.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:w,opacity:".2"})]});case"contact":return(0,m.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,m.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:w,opacity:".2"}),(0,m.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:w,strokeWidth:J}),(0,m.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:w,opacity:".2"})]});default:return null}}function $7({activeType:a,onSelect:l,onDragStart:u,scrollRef:h,fadeClass:p,blankCanvas:y}){return(0,m.jsx)("div",{ref:h,className:`${re.placeScroll} ${p||""}`,children:Rb.map(d=>(0,m.jsxs)("div",{className:re.paletteSection,children:[(0,m.jsx)("div",{className:re.paletteSectionTitle,children:d.section}),d.items.map(I=>(0,m.jsxs)("div",{className:`${re.paletteItem} ${a===I.type?re.active:""} ${y?re.wireframe:""}`,onClick:()=>l(I.type),onMouseDown:E=>{E.button===0&&u(I.type,E)},children:[(0,m.jsx)("div",{className:re.paletteItemIcon,children:(0,m.jsx)(A7,{type:I.type})}),(0,m.jsx)("span",{className:re.paletteItemLabel,children:I.label})]},I.type))]},d.section))})}function I7({value:a,suffix:l}){let[u,h]=(0,pr.useState)(null),[p,y]=(0,pr.useState)(l),[d,I]=(0,pr.useState)("up"),E=(0,pr.useRef)(a),Y=(0,pr.useRef)(l),N=(0,pr.useRef)(),F=u!==null&&p!==l;return(0,pr.useEffect)(()=>{if(a!==E.current){if(a===0){E.current=a,Y.current=l,h(null);return}I(a>E.current?"up":"down"),h(E.current),y(Y.current),E.current=a,Y.current=l,clearTimeout(N.current),N.current=bt(()=>h(null),250)}else Y.current=l},[a,l]),u===null?(0,m.jsxs)(m.Fragment,{children:[a,l?` ${l}`:""]}):F?(0,m.jsxs)("span",{className:re.rollingWrap,children:[(0,m.jsxs)("span",{style:{visibility:"hidden"},children:[a," ",l]}),(0,m.jsxs)("span",{className:`${re.rollingNum} ${d==="up"?re.exitUp:re.exitDown}`,children:[u," ",p]},`o${u}-${a}`),(0,m.jsxs)("span",{className:`${re.rollingNum} ${d==="up"?re.enterUp:re.enterDown}`,children:[a," ",l]},`n${a}`)]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("span",{className:re.rollingWrap,children:[(0,m.jsx)("span",{style:{visibility:"hidden"},children:a}),(0,m.jsx)("span",{className:`${re.rollingNum} ${d==="up"?re.exitUp:re.exitDown}`,children:u},`o${u}-${a}`),(0,m.jsx)("span",{className:`${re.rollingNum} ${d==="up"?re.enterUp:re.enterDown}`,children:a},`n${a}`)]}),l?` ${l}`:""]})}function B7({activeType:a,onSelect:l,isDarkMode:u,sectionCount:h,onDetectSections:p,visible:y,onExited:d,placementCount:I,onClearPlacements:E,onDragStart:Y,blankCanvas:N,onBlankCanvasChange:F,wireframePurpose:A,onWireframePurposeChange:ee,Tooltip:P}){let[pe,Q]=(0,pr.useState)(!1),[K,_e]=(0,pr.useState)("exit"),[ge,De]=(0,pr.useState)(!1),[Qe,Dt]=(0,pr.useState)(!0),ye=(0,pr.useRef)(0),Kt=(0,pr.useRef)(""),vt=(0,pr.useRef)(0),gt=(0,pr.useRef)(),Je=(0,pr.useRef)(null),[dt,Re]=(0,pr.useState)("");(0,pr.useEffect)(()=>(y?(Q(!0),clearTimeout(gt.current),cancelAnimationFrame(vt.current),vt.current=ru(()=>{vt.current=ru(()=>{_e("enter")})})):(cancelAnimationFrame(vt.current),_e("exit"),clearTimeout(gt.current),gt.current=bt(()=>{Q(!1),d?.()},200)),()=>cancelAnimationFrame(vt.current)),[y]);let He=I>0||h>0,we=I+h;if(we>0&&(ye.current=we,Kt.current=N?we===1?"Component":"Components":we===1?"Change":"Changes"),(0,pr.useEffect)(()=>{if(He)ge?Dt(!1):(Dt(!0),De(!0),ru(()=>{ru(()=>{Dt(!1)})}));else{Dt(!0);let Wt=bt(()=>De(!1),300);return()=>clearTimeout(Wt)}},[He]),(0,pr.useEffect)(()=>{if(!pe)return;let Wt=Je.current;if(!Wt)return;let de=()=>Re(N7(Wt));de(),Wt.addEventListener("scroll",de,{passive:!0});let et=new ResizeObserver(de);return et.observe(Wt),()=>{Wt.removeEventListener("scroll",de),et.disconnect()}},[pe]),!pe)return null;let rt=[];return I>0&&rt.push("placed"),h>0&&rt.push("captured"),(0,m.jsxs)("div",{className:`${re.palette} ${re[K]} ${u?"":re.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Wt=>Wt.stopPropagation(),onMouseDown:Wt=>Wt.stopPropagation(),onTransitionEnd:Wt=>{Wt.target===Wt.currentTarget&&(y||(clearTimeout(gt.current),Q(!1),_e("exit"),d?.()))},children:[(0,m.jsxs)("div",{className:re.paletteHeader,children:[(0,m.jsx)("div",{className:re.paletteHeaderTitle,children:"Layout Mode"}),(0,m.jsxs)("div",{className:re.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,m.jsx)("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,m.jsxs)("div",{className:`${re.canvasToggle} ${N?re.active:""}`,onClick:()=>F(!N),children:[(0,m.jsx)("span",{className:re.canvasToggleIcon,children:(0,m.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,m.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,m.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,m.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,m.jsx)("span",{className:re.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,m.jsx)("div",{className:`${re.wireframePurposeWrap} ${N?"":re.collapsed}`,children:(0,m.jsx)("div",{className:re.wireframePurposeInner,children:(0,m.jsx)("textarea",{className:re.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:A,onChange:Wt=>ee(Wt.target.value),rows:2})})}),(0,m.jsx)($7,{activeType:a,onSelect:l,onDragStart:Y,scrollRef:Je,fadeClass:dt,blankCanvas:N}),ge&&(0,m.jsx)("div",{className:`${re.paletteFooterWrap} ${Qe?re.footerHidden:""}`,children:(0,m.jsx)("div",{className:re.paletteFooterInner,children:(0,m.jsx)("div",{className:re.paletteFooterInnerContent,children:(0,m.jsxs)("div",{className:re.paletteFooter,children:[(0,m.jsx)("span",{className:re.paletteFooterCount,children:(0,m.jsx)(I7,{value:ye.current,suffix:Kt.current})}),(0,m.jsx)("button",{className:re.paletteFooterClear,onClick:E,children:"Clear"})]})})})})]})}function lu(a){if(a.parentElement)return a.parentElement;let l=a.getRootNode();return l instanceof ShadowRoot?l.host:null}function Ro(a,l){let u=a;for(;u;){if(u.matches(l))return u;u=lu(u)}return null}function z7(a,l=4){let u=[],h=a,p=0;for(;h&&p<l;){let y=h.tagName.toLowerCase();if(y==="html"||y==="body")break;let d=y;if(h.id)d=`#${h.id}`;else if(h.className&&typeof h.className=="string"){let E=h.className.split(/\s+/).find(Y=>Y.length>2&&!Y.match(/^[a-z]{1,2}$/)&&!Y.match(/[A-Z0-9]{5,}/));E&&(d=`.${E.split("_")[0]}`)}let I=lu(h);!h.parentElement&&I&&(d=`\u27E8shadow\u27E9 ${d}`),u.unshift(d),h=I,p++}return u.join(" > ")}function ou(a){let l=z7(a);if(a.dataset.element)return{name:a.dataset.element,path:l};let u=a.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(u)){let h=Ro(a,"svg");if(h){let p=lu(h);if(p instanceof HTMLElement)return{name:`graphic in ${ou(p).name}`,path:l}}return{name:"graphic element",path:l}}if(u==="svg"){let h=lu(a);if(h?.tagName.toLowerCase()==="button"){let p=h.textContent?.trim();return{name:p?`icon in "${p}" button`:"button icon",path:l}}return{name:"icon",path:l}}if(u==="button"){let h=a.textContent?.trim(),p=a.getAttribute("aria-label");return p?{name:`button [${p}]`,path:l}:{name:h?`button "${h.slice(0,25)}"`:"button",path:l}}if(u==="a"){let h=a.textContent?.trim(),p=a.getAttribute("href");return h?{name:`link "${h.slice(0,25)}"`,path:l}:p?{name:`link to ${p.slice(0,30)}`,path:l}:{name:"link",path:l}}if(u==="input"){let h=a.getAttribute("type")||"text",p=a.getAttribute("placeholder"),y=a.getAttribute("name");return p?{name:`input "${p}"`,path:l}:y?{name:`input [${y}]`,path:l}:{name:`${h} input`,path:l}}if(["h1","h2","h3","h4","h5","h6"].includes(u)){let h=a.textContent?.trim();return{name:h?`${u} "${h.slice(0,35)}"`:u,path:l}}if(u==="p"){let h=a.textContent?.trim();return h?{name:`paragraph: "${h.slice(0,40)}${h.length>40?"...":""}"`,path:l}:{name:"paragraph",path:l}}if(u==="span"||u==="label"){let h=a.textContent?.trim();return h&&h.length<40?{name:`"${h}"`,path:l}:{name:u,path:l}}if(u==="li"){let h=a.textContent?.trim();return h&&h.length<40?{name:`list item: "${h.slice(0,35)}"`,path:l}:{name:"list item",path:l}}if(u==="blockquote")return{name:"blockquote",path:l};if(u==="code"){let h=a.textContent?.trim();return h&&h.length<30?{name:`code: \`${h}\``,path:l}:{name:"code",path:l}}if(u==="pre")return{name:"code block",path:l};if(u==="img"){let h=a.getAttribute("alt");return{name:h?`image "${h.slice(0,30)}"`:"image",path:l}}if(u==="video")return{name:"video",path:l};if(["div","section","article","nav","header","footer","aside","main"].includes(u)){let h=a.className,p=a.getAttribute("role"),y=a.getAttribute("aria-label");if(y)return{name:`${u} [${y}]`,path:l};if(p)return{name:`${p}`,path:l};if(typeof h=="string"&&h){let d=h.split(/[\s_-]+/).map(I=>I.replace(/[A-Z0-9]{5,}.*$/,"")).filter(I=>I.length>2&&!/^[a-z]{1,2}$/.test(I)).slice(0,2);if(d.length>0)return{name:d.join(" "),path:l}}return{name:u==="div"?"container":u,path:l}}return{name:u,path:l}}function Wc(a){let l=[],u=a.textContent?.trim();u&&u.length<100&&l.push(u);let h=a.previousElementSibling;if(h){let y=h.textContent?.trim();y&&y.length<50&&l.unshift(`[before: "${y.slice(0,40)}"]`)}let p=a.nextElementSibling;if(p){let y=p.textContent?.trim();y&&y.length<50&&l.push(`[after: "${y.slice(0,40)}"]`)}return l.join(" ")}function ah(a){let l=lu(a);if(!l)return"";let p=(a.getRootNode()instanceof ShadowRoot&&a.parentElement?Array.from(a.parentElement.children):Array.from(l.children)).filter(N=>N!==a&&N instanceof HTMLElement);if(p.length===0)return"";let y=p.slice(0,4).map(N=>{let F=N.tagName.toLowerCase(),A=N.className,ee="";if(typeof A=="string"&&A){let P=A.split(/\s+/).map(pe=>pe.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(pe=>pe.length>2&&!/^[a-z]{1,2}$/.test(pe));P&&(ee=`.${P}`)}if(F==="button"||F==="a"){let P=N.textContent?.trim().slice(0,15);if(P)return`${F}${ee} "${P}"`}return`${F}${ee}`}),I=l.tagName.toLowerCase();if(typeof l.className=="string"&&l.className){let N=l.className.split(/\s+/).map(F=>F.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(F=>F.length>2&&!/^[a-z]{1,2}$/.test(F));N&&(I=`.${N}`)}let E=l.children.length,Y=E>y.length+1?` (${E} total in ${I})`:"";return y.join(", ")+Y}function Yc(a){let l=a.className;return typeof l!="string"||!l?"":l.split(/\s+/).filter(h=>h.length>0).map(h=>{let p=h.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return p?p[1]:h}).filter((h,p,y)=>y.indexOf(h)===p).join(", ")}var Tb=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),U7=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),H7=new Set(["input","textarea","select"]),F7=new Set(["img","video","canvas","svg"]),P7=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function ih(a){if(typeof window>"u")return{};let l=window.getComputedStyle(a),u={},h=a.tagName.toLowerCase(),p;U7.has(h)?p=["color","fontSize","fontWeight","fontFamily","lineHeight"]:h==="button"||h==="a"&&a.getAttribute("role")==="button"?p=["backgroundColor","color","padding","borderRadius","fontSize"]:H7.has(h)?p=["backgroundColor","color","padding","borderRadius","fontSize"]:F7.has(h)?p=["width","height","objectFit","borderRadius"]:P7.has(h)?p=["display","padding","margin","gap","backgroundColor"]:p=["color","fontSize","margin","padding","backgroundColor"];for(let y of p){let d=y.replace(/([A-Z])/g,"-$1").toLowerCase(),I=l.getPropertyValue(d);I&&!Tb.has(I)&&(u[y]=I)}return u}var j7=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function lh(a){if(typeof window>"u")return"";let l=window.getComputedStyle(a),u=[];for(let h of j7){let p=h.replace(/([A-Z])/g,"-$1").toLowerCase(),y=l.getPropertyValue(p);y&&!Tb.has(y)&&u.push(`${p}: ${y}`)}return u.join("; ")}function W7(a){if(!a)return;let l={},u=a.split(";").map(h=>h.trim()).filter(Boolean);for(let h of u){let p=h.indexOf(":");if(p>0){let y=h.slice(0,p).trim(),d=h.slice(p+1).trim();y&&d&&(l[y]=d)}}return Object.keys(l).length>0?l:void 0}function sh(a){let l=[],u=a.getAttribute("role"),h=a.getAttribute("aria-label"),p=a.getAttribute("aria-describedby"),y=a.getAttribute("tabindex"),d=a.getAttribute("aria-hidden");return u&&l.push(`role="${u}"`),h&&l.push(`aria-label="${h}"`),p&&l.push(`aria-describedby="${p}"`),y&&l.push(`tabindex=${y}`),d==="true"&&l.push("aria-hidden"),a.matches("a, button, input, select, textarea, [tabindex]")&&l.push("focusable"),l.join(", ")}function uh(a){let l=[],u=a;for(;u&&u.tagName.toLowerCase()!=="html";){let h=u.tagName.toLowerCase(),p=h;if(u.id)p=`${h}#${u.id}`;else if(u.className&&typeof u.className=="string"){let d=u.className.split(/\s+/).map(I=>I.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(I=>I.length>2);d&&(p=`${h}.${d}`)}let y=lu(u);!u.parentElement&&y&&(p=`\u27E8shadow\u27E9 ${p}`),l.unshift(p),u=y}return l.join(" > ")}var Y7=new Set(["nav","header","main","section","article","footer","aside"]),Ng={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},nb={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},V7=new Set(["script","style","noscript","link","meta"]),X7=40;function Mb(a){let l=a;for(;l&&l!==document.body&&l!==document.documentElement;){let u=window.getComputedStyle(l).position;if(u==="fixed"||u==="sticky")return!0;l=l.parentElement}return!1}function ts(a){let l=a.tagName.toLowerCase();if(["nav","header","footer","main"].includes(l)&&document.querySelectorAll(l).length===1)return l;if(a.id)return`#${CSS.escape(a.id)}`;if(a.className&&typeof a.className=="string"){let p=a.className.split(/\s+/).filter(y=>y.length>0).find(y=>y.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(y)&&!/^[a-z]{1,2}$/.test(y));if(p){let y=`${l}.${CSS.escape(p)}`;if(document.querySelectorAll(y).length===1)return y}}let u=a.parentElement;if(u){let p=Array.from(u.children).indexOf(a)+1;return`${u===document.body?"body":ts(u)} > ${l}:nth-child(${p})`}return l}function gh(a){let l=a.tagName.toLowerCase(),u=a.getAttribute("aria-label");if(u)return u;let h=a.getAttribute("role");if(h&&Ng[h])return Ng[h];if(nb[l])return nb[l];let p=a.querySelector("h1, h2, h3, h4, h5, h6");if(p){let d=p.textContent?.trim();if(d&&d.length<=50)return d;if(d)return d.slice(0,47)+"..."}let{name:y}=ou(a);return y.charAt(0).toUpperCase()+y.slice(1)}function Db(a){let l=a.className;return typeof l!="string"||!l?null:l.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2&&!/^[a-z]{1,2}$/.test(h))||null}function Lb(a){let l=a.textContent?.trim();if(!l)return null;let u=l.replace(/\s+/g," ");return u.length<=30?u:u.slice(0,30)+"\u2026"}function Q7(){let a=document.querySelector("main")||document.body,l=Array.from(a.children),u=l;a!==document.body&&l.length<3&&(u=Array.from(document.body.children));let h=[];return u.forEach((p,y)=>{if(!(p instanceof HTMLElement))return;let d=p.tagName.toLowerCase();if(V7.has(d)||p.hasAttribute("data-feedback-toolbar")||p.closest("[data-feedback-toolbar]"))return;let I=window.getComputedStyle(p);if(I.display==="none"||I.visibility==="hidden")return;let E=p.getBoundingClientRect();if(E.height<X7)return;let Y=Y7.has(d),N=p.getAttribute("role")&&Ng[p.getAttribute("role")],F=d==="div"&&E.height>=60;if(!Y&&!N&&!F)return;let A=window.scrollY,ee=Mb(p),P={x:E.x,y:ee?E.y:E.y+A,width:E.width,height:E.height};h.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:gh(p),tagName:d,selector:ts(p),role:p.getAttribute("role"),className:Db(p),textSnippet:Lb(p),originalRect:P,currentRect:{...P},originalIndex:y,isFixed:ee})}),h}function q7(a){let l=window.scrollY,u=a.getBoundingClientRect(),h=Mb(a),p={x:u.x,y:h?u.y:u.y+l,width:u.width,height:u.height},y=a.parentElement,d=0;return y&&(d=Array.from(y.children).indexOf(a)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:gh(a),tagName:a.tagName.toLowerCase(),selector:ts(a),role:a.getAttribute("role"),className:Db(a),textSnippet:Lb(a),originalRect:p,currentRect:{...p},originalIndex:d,isFixed:h}}var rb={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},ob=["nw","n","ne","e","se","s","sw","w"],ch=24,ab=16,dh=5;function ib(a,l,u,h){let p=1/0,y=1/0,d=a.x,I=a.x+a.width,E=a.x+a.width/2,Y=a.y,N=a.y+a.height,F=a.y+a.height/2,A=[];for(let ye of l)u.has(ye.id)||A.push(ye.currentRect);h&&A.push(...h);for(let ye of A){let Kt=ye.x,vt=ye.x+ye.width,gt=ye.x+ye.width/2,Je=ye.y,dt=ye.y+ye.height,Re=ye.y+ye.height/2;for(let He of[d,I,E])for(let we of[Kt,vt,gt]){let rt=we-He;Math.abs(rt)<dh&&Math.abs(rt)<Math.abs(p)&&(p=rt)}for(let He of[Y,N,F])for(let we of[Je,dt,Re]){let rt=we-He;Math.abs(rt)<dh&&Math.abs(rt)<Math.abs(y)&&(y=rt)}}let ee=Math.abs(p)<dh?p:0,P=Math.abs(y)<dh?y:0,pe=[],Q=new Set,K=d+ee,_e=I+ee,ge=E+ee,De=Y+P,Qe=N+P,Dt=F+P;for(let ye of A){let Kt=ye.x,vt=ye.x+ye.width,gt=ye.x+ye.width/2,Je=ye.y,dt=ye.y+ye.height,Re=ye.y+ye.height/2;for(let He of[Kt,gt,vt])for(let we of[K,ge,_e])if(Math.abs(we-He)<.5){let rt=`x:${Math.round(He)}`;Q.has(rt)||(Q.add(rt),pe.push({axis:"x",pos:He}))}for(let He of[Je,Re,dt])for(let we of[De,Dt,Qe])if(Math.abs(we-He)<.5){let rt=`y:${Math.round(He)}`;Q.has(rt)||(Q.add(rt),pe.push({axis:"y",pos:He}))}}return{dx:ee,dy:P,guides:pe}}var G7=new Set(["script","style","noscript","link","meta","br","hr"]);function lb(a){let l=a;for(;l&&l!==document.body&&l!==document.documentElement;){if(l.closest("[data-feedback-toolbar]"))return null;if(G7.has(l.tagName.toLowerCase())){l=l.parentElement;continue}let u=l.getBoundingClientRect();if(u.width>=ab&&u.height>=ab)return l;l=l.parentElement}return null}function K7({rearrangeState:a,onChange:l,isDarkMode:u,exiting:h,className:p,blankCanvas:y,extraSnapRects:d,onSelectionChange:I,deselectSignal:E,onDragMove:Y,onDragEnd:N,clearSignal:F}){let{sections:A}=a,ee=(0,It.useRef)(a);ee.current=a;let[P,pe]=(0,It.useState)(new Set),[Q,K]=(0,It.useState)(!1),_e=(0,It.useRef)(F);(0,It.useEffect)(()=>{F!==void 0&&F!==_e.current&&(_e.current=F,A.length>0&&K(!0))},[F,A.length]);let ge=(0,It.useRef)(E);(0,It.useEffect)(()=>{E!==ge.current&&(ge.current=E,pe(new Set))},[E]);let[De,Qe]=(0,It.useState)(null),[Dt,ye]=(0,It.useState)(!1),Kt=(0,It.useRef)(!1),vt=(0,It.useCallback)($=>{let j=A.find(O=>O.id===$);j&&(Kt.current=!!j.note,Qe($),ye(!1))},[A]),gt=(0,It.useCallback)(()=>{De&&(ye(!0),bt(()=>{Qe(null),ye(!1)},150))},[De]),Je=(0,It.useCallback)($=>{De&&(l({...a,sections:A.map(j=>j.id===De?{...j,note:$.trim()||void 0}:j)}),gt())},[De,A,a,l,gt]);(0,It.useEffect)(()=>{h&&De&&gt()},[h]);let[dt,Re]=(0,It.useState)(new Set),He=(0,It.useRef)(new Map),[we,rt]=(0,It.useState)(null),[Wt,de]=(0,It.useState)(null),[et,Et]=(0,It.useState)([]),[sn,bn]=(0,It.useState)(0),Sn=(0,It.useRef)(null),qr=(0,It.useRef)(new Set),ir=(0,It.useRef)(new Map),[br,lr]=(0,It.useState)(new Map),[sr,tr]=(0,It.useState)(new Map),Mr=(0,It.useRef)(new Set),En=(0,It.useRef)(new Map),Kn=(0,It.useRef)(I);Kn.current=I;let gn=(0,It.useRef)(Y);gn.current=Y;let In=(0,It.useRef)(N);In.current=N,(0,It.useEffect)(()=>{y&&pe(new Set)},[y]);let[yn,Zn]=(0,It.useState)(()=>!a.sections.some($=>{let j=$.originalRect,O=$.currentRect;return Math.abs(j.x-O.x)>1||Math.abs(j.y-O.y)>1||Math.abs(j.width-O.width)>1||Math.abs(j.height-O.height)>1}));(0,It.useEffect)(()=>{if(!yn){let $=bt(()=>Zn(!0),380);return()=>clearTimeout($)}},[]);let Ln=(0,It.useRef)(new Set);(0,It.useEffect)(()=>{Ln.current=new Set(A.map($=>$.selector))},[A]),(0,It.useEffect)(()=>{let $=()=>bn(window.scrollY);return $(),window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("resize",$,{passive:!0}),()=>{window.removeEventListener("scroll",$),window.removeEventListener("resize",$)}},[]),(0,It.useEffect)(()=>{let $=j=>{if(Sn.current){rt(null);return}let O=document.elementFromPoint(j.clientX,j.clientY);if(!O){rt(null);return}if(O.closest("[data-feedback-toolbar]")){rt(null);return}if(O.closest("[data-design-placement]")){rt(null);return}if(O.closest("[data-annotation-popup]")){rt(null);return}let B=lb(O);if(!B){rt(null);return}for(let ve of Ln.current)try{let te=document.querySelector(ve);if(te&&(te===B||B.contains(te))){rt(null);return}}catch{}let ae=B.getBoundingClientRect();rt({x:ae.x,y:ae.y,w:ae.width,h:ae.height})};return document.addEventListener("mousemove",$,{passive:!0}),()=>document.removeEventListener("mousemove",$)},[A]),(0,It.useEffect)(()=>{let $=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=$}},[]),(0,It.useEffect)(()=>{let $=j=>{if(Sn.current||j.button!==0)return;let O=j.target;if(!O||O.closest("[data-feedback-toolbar]")||O.closest("[data-design-placement]")||O.closest("[data-annotation-popup]"))return;let B=lb(O),ae=!1;if(B)for(let te of Ln.current)try{let Me=document.querySelector(te);if(Me&&(Me===B||B.contains(Me))){ae=!0;break}}catch{}let ve=!!(j.shiftKey||j.metaKey||j.ctrlKey);if(B&&!ae){j.preventDefault(),j.stopPropagation();let te=q7(B),Me=[...A,te],ze=[...a.originalOrder,te.id];l({...a,sections:Me,originalOrder:ze});let Ct=new Set([te.id]);pe(Ct),Kn.current?.(Ct,ve),rt(null);let it=j.clientX,Oe=j.clientY,ct={x:te.currentRect.x,y:te.currentRect.y},Ye=te.originalRect,xt=!1,Pe=0,nn=0;Sn.current="move";let qt=Ft=>{let lt=Ft.clientX-it,fn=Ft.clientY-Oe;if(!xt&&(Math.abs(lt)>2||Math.abs(fn)>2)&&(xt=!0),!xt)return;let Jn={x:ct.x+lt,y:ct.y+fn,width:te.currentRect.width,height:te.currentRect.height},xr=ib(Jn,Me,new Set([te.id]),d);Et(xr.guides);let _r=lt+xr.dx,Vn=fn+xr.dy;Pe=_r,nn=Vn;let wr=document.querySelector(`[data-rearrange-section="${te.id}"]`);wr&&(wr.style.transform=`translate(${_r}px, ${Vn}px)`),lr(new Map([[te.id,{x:ct.x+_r,y:ct.y+Vn,width:te.currentRect.width,height:te.currentRect.height}]])),gn.current?.(_r,Vn)},Lt=()=>{window.removeEventListener("mousemove",qt),window.removeEventListener("mouseup",Lt),Sn.current=null,Et([]),lr(new Map);let Ft=document.querySelector(`[data-rearrange-section="${te.id}"]`);Ft&&(Ft.style.transform=""),xt&&l({...a,sections:Me.map(lt=>lt.id===te.id?{...lt,currentRect:{...lt.currentRect,x:Math.max(0,ct.x+Pe),y:Math.max(0,ct.y+nn)}}:lt),originalOrder:ze}),In.current?.(Pe,nn,xt)};window.addEventListener("mousemove",qt),window.addEventListener("mouseup",Lt)}else if(ae&&B){j.preventDefault();for(let te of A)try{let Me=document.querySelector(te.selector);if(Me&&Me===B){let ze=new Set([te.id]);pe(ze),Kn.current?.(ze,ve);return}}catch{}ve||(pe(new Set),Kn.current?.(new Set,!1))}else ve||(pe(new Set),Kn.current?.(new Set,!1))};return document.addEventListener("mousedown",$,!0),()=>document.removeEventListener("mousedown",$,!0)},[A,a,l]),(0,It.useEffect)(()=>{let $=j=>{let O=j.target;if(!(O.tagName==="INPUT"||O.tagName==="TEXTAREA"||O.isContentEditable)){if((j.key==="Backspace"||j.key==="Delete")&&P.size>0){j.preventDefault();let B=new Set(P);Re(ae=>{let ve=new Set(ae);for(let te of B)ve.add(te);return ve}),pe(new Set),bt(()=>{let ae=ee.current;l({...ae,sections:ae.sections.filter(ve=>!B.has(ve.id)),originalOrder:ae.originalOrder.filter(ve=>!B.has(ve))}),Re(ve=>{let te=new Set(ve);for(let Me of B)te.delete(Me);return te})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(j.key)&&P.size>0){j.preventDefault();let B=j.shiftKey?20:1,ae=j.key==="ArrowLeft"?-B:j.key==="ArrowRight"?B:0,ve=j.key==="ArrowUp"?-B:j.key==="ArrowDown"?B:0;l({...a,sections:A.map(te=>P.has(te.id)?{...te,currentRect:{...te.currentRect,x:Math.max(0,te.currentRect.x+ae),y:Math.max(0,te.currentRect.y+ve)}}:te)});return}j.key==="Escape"&&P.size>0&&pe(new Set)}};return document.addEventListener("keydown",$),()=>document.removeEventListener("keydown",$)},[P,A,a,l]);let tt=(0,It.useCallback)(($,j)=>{if($.button!==0)return;let O=$.target;if(O.closest(`.${re.handle}`)||O.closest(`.${re.deleteButton}`))return;$.preventDefault(),$.stopPropagation();let B;$.shiftKey||$.metaKey||$.ctrlKey?(B=new Set(P),B.has(j)?B.delete(j):B.add(j)):P.has(j)?B=new Set(P):B=new Set([j]),pe(B),(B.size!==P.size||[...B].some(xt=>!P.has(xt)))&&Kn.current?.(B,!!($.shiftKey||$.metaKey||$.ctrlKey));let ve=$.clientX,te=$.clientY,Me=new Map;for(let xt of A)B.has(xt.id)&&Me.set(xt.id,{x:xt.currentRect.x,y:xt.currentRect.y});Sn.current="move";let ze=!1,Ct=0,it=0,Oe=new Map;for(let xt of A)if(B.has(xt.id)){let Pe=document.querySelector(`[data-rearrange-section="${xt.id}"]`);Oe.set(xt.id,{outlineEl:Pe,curW:xt.currentRect.width,curH:xt.currentRect.height})}let ct=xt=>{let Pe=xt.clientX-ve,nn=xt.clientY-te;if(Pe===0&&nn===0)return;ze=!0;let qt=1/0,Lt=1/0,Ft=-1/0,lt=-1/0;for(let[Vn,{curW:wr,curH:Bo}]of Oe){let On=Me.get(Vn);if(!On)continue;let k=On.x+Pe,le=On.y+nn;qt=Math.min(qt,k),Lt=Math.min(Lt,le),Ft=Math.max(Ft,k+wr),lt=Math.max(lt,le+Bo)}let fn=ib({x:qt,y:Lt,width:Ft-qt,height:lt-Lt},A,B,d),Jn=Pe+fn.dx,xr=nn+fn.dy;Ct=Jn,it=xr,Et(fn.guides);for(let[,{outlineEl:Vn}]of Oe)Vn&&(Vn.style.transform=`translate(${Jn}px, ${xr}px)`);let _r=new Map;for(let[Vn,{curW:wr,curH:Bo}]of Oe){let On=Me.get(Vn);if(On){let k={x:Math.max(0,On.x+Jn),y:Math.max(0,On.y+xr),width:wr,height:Bo};_r.set(Vn,k)}}lr(_r),gn.current?.(Jn,xr)},Ye=xt=>{window.removeEventListener("mousemove",ct),window.removeEventListener("mouseup",Ye),Sn.current=null,Et([]),lr(new Map);for(let[,{outlineEl:Pe}]of Oe)Pe&&(Pe.style.transform="");if(ze){let Pe=xt.clientX-ve,nn=xt.clientY-te;if(Math.abs(Pe)<5&&Math.abs(nn)<5)l({...a,sections:A.map(qt=>{let Lt=Me.get(qt.id);return Lt?{...qt,currentRect:{...qt.currentRect,x:Lt.x,y:Lt.y}}:qt})});else{l({...a,sections:A.map(qt=>{let Lt=Me.get(qt.id);return Lt?{...qt,currentRect:{...qt.currentRect,x:Math.max(0,Lt.x+Ct),y:Math.max(0,Lt.y+it)}}:qt})}),In.current?.(Ct,it,!0);return}}In.current?.(0,0,!1)};window.addEventListener("mousemove",ct),window.addEventListener("mouseup",Ye)},[P,A,a,l]),se=(0,It.useCallback)(($,j,O)=>{$.preventDefault(),$.stopPropagation();let B=A.find(Ye=>Ye.id===j);if(!B)return;pe(new Set([j])),Sn.current="resize";let ae=$.clientX,ve=$.clientY,te={...B.currentRect},Me=B.originalRect,ze=te.width/te.height,Ct={...te},it=document.querySelector(`[data-rearrange-section="${j}"]`),Oe=Ye=>{let xt=Ye.clientX-ae,Pe=Ye.clientY-ve,nn=te.x,qt=te.y,Lt=te.width,Ft=te.height;if(O.includes("e")&&(Lt=Math.max(ch,te.width+xt)),O.includes("w")&&(Lt=Math.max(ch,te.width-xt),nn=te.x+te.width-Lt),O.includes("s")&&(Ft=Math.max(ch,te.height+Pe)),O.includes("n")&&(Ft=Math.max(ch,te.height-Pe),qt=te.y+te.height-Ft),Ye.shiftKey)if(O.length===2){let fn=Math.abs(Lt-te.width),Jn=Math.abs(Ft-te.height);fn>Jn?Ft=Lt/ze:Lt=Ft*ze,O.includes("w")&&(nn=te.x+te.width-Lt),O.includes("n")&&(qt=te.y+te.height-Ft)}else O==="e"||O==="w"?Ft=Lt/ze:Lt=Ft*ze,O==="w"&&(nn=te.x+te.width-Lt),O==="n"&&(qt=te.y+te.height-Ft);Ct={x:nn,y:qt,width:Lt,height:Ft},it&&(it.style.left=`${nn}px`,it.style.top=`${qt-sn}px`,it.style.width=`${Lt}px`,it.style.height=`${Ft}px`),de({x:Ye.clientX+12,y:Ye.clientY+12,text:`${Math.round(Lt)} \xD7 ${Math.round(Ft)}`}),lr(new Map([[j,Ct]]))},ct=()=>{window.removeEventListener("mousemove",Oe),window.removeEventListener("mouseup",ct),de(null),Sn.current=null,lr(new Map),l({...a,sections:A.map(Ye=>Ye.id===j?{...Ye,currentRect:Ct}:Ye)})};window.addEventListener("mousemove",Oe),window.addEventListener("mouseup",ct)},[A,a,l,sn]),qe=(0,It.useCallback)($=>{Re(j=>{let O=new Set(j);return O.add($),O}),pe(j=>{let O=new Set(j);return O.delete($),O}),bt(()=>{let j=ee.current;l({...j,sections:j.sections.filter(O=>O.id!==$),originalOrder:j.originalOrder.filter(O=>O!==$)}),Re(O=>{let B=new Set(O);return B.delete($),B})},180)},[l]),st=$=>{let j=$.originalRect,O=$.currentRect;return Math.abs(j.x-O.x)>1||Math.abs(j.y-O.y)>1||Math.abs(j.width-O.width)>1||Math.abs(j.height-O.height)>1},_t=$=>{let j=$.originalRect,O=$.currentRect;return Math.abs(j.x-O.x)>1||Math.abs(j.y-O.y)>1},We=$=>{let j=$.originalRect,O=$.currentRect;return Math.abs(j.width-O.width)>1||Math.abs(j.height-O.height)>1};for(let $ of A)ir.current.has($.id)||(_t($)?ir.current.set($.id,"move"):We($)&&ir.current.set($.id,"resize"));for(let $ of ir.current.keys())A.some(j=>j.id===$)||ir.current.delete($);let jt=A.filter($=>{try{if(dt.has($.id)||P.has($.id))return!0;let j=document.querySelector($.selector);if(!j)return!1;let O=j.getBoundingClientRect(),B=$.originalRect;return Math.abs(O.width-B.width)+Math.abs(O.height-B.height)<200}catch{return!1}}),Ut=jt.filter($=>st($)),Ht=jt.filter($=>!st($)),ut=new Set(Ut.map($=>$.id));for(let $ of qr.current)ut.has($)||qr.current.delete($);let Ge=[...ut].sort().join(",");for(let $ of Ut)En.current.set($.id,{currentRect:$.currentRect,originalRect:$.originalRect,isFixed:$.isFixed});return(0,It.useEffect)(()=>{let $=Mr.current;Mr.current=ut;let j=new Map;for(let O of $)if(!ut.has(O)){if(!A.some(ae=>ae.id===O))continue;let B=En.current.get(O);B&&(j.set(O,{orig:B.originalRect,target:B.currentRect,isFixed:B.isFixed}),En.current.delete(O))}if(j.size>0){tr(B=>{let ae=new Map(B);for(let[ve,te]of j)ae.set(ve,te);return ae});let O=bt(()=>{tr(B=>{let ae=new Map(B);for(let ve of j.keys())ae.delete(ve);return ae})},250);return()=>clearTimeout(O)}},[Ge,A]),(0,dn.jsxs)(dn.Fragment,{children:[(0,dn.jsxs)("div",{className:`${re.rearrangeOverlay} ${u?"":re.light} ${h?re.overlayExiting:""}${p?` ${p}`:""}`,"data-feedback-toolbar":!0,children:[we&&(0,dn.jsx)("div",{className:re.hoverHighlight,style:{left:we.x,top:we.y,width:we.w,height:we.h}}),Ht.map($=>{let j=$.currentRect,O=$.isFixed?j.y:j.y-sn,B=rb,ae=P.has($.id);return(0,dn.jsxs)("div",{"data-rearrange-section":$.id,className:`${re.sectionOutline} ${ae?re.selected:""} ${Q||h||dt.has($.id)?re.exiting:""}`,style:{left:j.x,top:O,width:j.width,height:j.height,borderColor:B.border,backgroundColor:B.bg,...yn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ve=>tt(ve,$.id),onDoubleClick:()=>vt($.id),children:[(0,dn.jsx)("span",{className:re.sectionLabel,style:{backgroundColor:B.pill},children:$.label}),(0,dn.jsx)("span",{className:`${re.sectionAnnotation} ${$.note?re.annotationVisible:""}`,children:($.note&&He.current.set($.id,$.note),$.note||He.current.get($.id)||"")}),(0,dn.jsxs)("span",{className:re.sectionDimensions,children:[Math.round(j.width)," \xD7 ",Math.round(j.height)]}),(0,dn.jsx)("div",{className:re.deleteButton,onMouseDown:ve=>ve.stopPropagation(),onClick:()=>qe($.id),children:"\u2715"}),ob.map(ve=>(0,dn.jsx)("div",{className:`${re.handle} ${re[`handle${ve.charAt(0).toUpperCase()}${ve.slice(1)}`]}`,onMouseDown:te=>se(te,$.id,ve)},ve))]},$.id)}),Ut.map($=>{let j=$.currentRect,O=$.isFixed?j.y:j.y-sn,B=P.has($.id),ae=_t($),ve=We($);if(y&&!B)return null;let Me=!qr.current.has($.id);return Me&&qr.current.add($.id),(0,dn.jsxs)("div",{"data-rearrange-section":$.id,className:`${re.ghostOutline} ${B?re.selected:""} ${Q||h||dt.has($.id)?re.exiting:""}`,style:{left:j.x,top:O,width:j.width,height:j.height,...yn?{}:{opacity:0,animation:"none",transition:"none"},...Me?{}:{animation:"none"}},onMouseDown:ze=>tt(ze,$.id),onDoubleClick:()=>vt($.id),children:[(0,dn.jsx)("span",{className:re.sectionLabel,style:{backgroundColor:rb.pill},children:$.label}),(0,dn.jsx)("span",{className:`${re.sectionAnnotation} ${$.note?re.annotationVisible:""}`,children:($.note&&He.current.set($.id,$.note),$.note||He.current.get($.id)||"")}),(0,dn.jsxs)("span",{className:re.sectionDimensions,children:[Math.round(j.width)," \xD7 ",Math.round(j.height)]}),(0,dn.jsx)("div",{className:re.deleteButton,onMouseDown:ze=>ze.stopPropagation(),onClick:()=>qe($.id),children:"\u2715"}),ob.map(ze=>(0,dn.jsx)("div",{className:`${re.handle} ${re[`handle${ze.charAt(0).toUpperCase()}${ze.slice(1)}`]}`,onMouseDown:Ct=>se(Ct,$.id,ze)},ze)),(0,dn.jsx)("span",{className:re.ghostBadge,children:(()=>{let ze=ir.current.get($.id);if(ae&&ve){let[Ct,it]=ze==="resize"?["Resize","Move"]:["Move","Resize"];return(0,dn.jsxs)(dn.Fragment,{children:["Suggested ",Ct," ",(0,dn.jsxs)("span",{className:re.ghostBadgeExtra,children:["& ",it]})]})}return`Suggested ${ve?"Resize":"Move"}`})()})]},$.id)})]}),!y&&(()=>{let $=[];for(let j of Ut){let O=br.get(j.id);$.push({id:j.id,orig:j.originalRect,target:O||j.currentRect,isFixed:j.isFixed,isSelected:P.has(j.id),isExiting:dt.has(j.id)})}for(let[j,O]of br)if(!$.some(B=>B.id===j)){let B=A.find(ae=>ae.id===j);B&&$.push({id:j,orig:B.originalRect,target:O,isFixed:B.isFixed,isSelected:P.has(j)})}for(let[j,O]of sr)$.some(B=>B.id===j)||$.push({id:j,orig:O.orig,target:O.target,isFixed:O.isFixed,isSelected:!1,isExiting:!0});return $.length===0?null:(0,dn.jsxs)("svg",{className:`${re.connectorSvg} ${Q||h?re.connectorExiting:""}`,children:[$.map(({id:j,orig:O,target:B,isFixed:ae,isSelected:ve,isExiting:te})=>{let Me=O.x+O.width/2,ze=(ae?O.y:O.y-sn)+O.height/2,Ct=B.x+B.width/2,it=(ae?B.y:B.y-sn)+B.height/2,Oe=Ct-Me,ct=it-ze,Ye=Math.sqrt(Oe*Oe+ct*ct);if(Ye<2)return null;let xt=Math.min(1,Ye/40),Pe=Math.min(Ye*.3,60),nn=Ye>0?-ct/Ye:0,qt=Ye>0?Oe/Ye:0,Lt=(Me+Ct)/2+nn*Pe,Ft=(ze+it)/2+qt*Pe,lt=br.has(j),fn=lt||ve?1:.4,Jn=lt||ve?1:.5;return(0,dn.jsxs)("g",{className:te?re.connectorExiting:"",children:[(0,dn.jsx)("path",{className:re.connectorLine,d:`M ${Me} ${ze} Q ${Lt} ${Ft} ${Ct} ${it}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:fn*xt}),(0,dn.jsx)("circle",{className:re.connectorDot,cx:Me,cy:ze,r:4*xt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Jn*xt,filter:"url(#connDotShadow)"}),(0,dn.jsx)("circle",{className:re.connectorDot,cx:Ct,cy:it,r:4*xt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Jn*xt,filter:"url(#connDotShadow)"})]},`conn-${j}`)}),(0,dn.jsx)("defs",{children:(0,dn.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,dn.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),De&&(()=>{let $=A.find(it=>it.id===De);if(!$)return null;let j=$.currentRect,O=$.isFixed?j.y:j.y-sn,B=j.x+j.width/2,ae=O-8,ve=O+j.height+8,te=ae>200,Me=ve<window.innerHeight-100,ze=Math.max(160,Math.min(window.innerWidth-160,B)),Ct;return te?Ct={left:ze,bottom:window.innerHeight-ae}:Me?Ct={left:ze,top:ve}:Ct={left:ze,top:Math.max(80,window.innerHeight/2-80)},(0,dn.jsx)(mh,{element:$.label,placeholder:"Add a note about this section",initialValue:$.note??"",submitLabel:Kt.current?"Save":"Set",onSubmit:Je,onCancel:gt,onDelete:Kt.current?()=>{Je("")}:void 0,isExiting:Dt,lightMode:!u,style:Ct})})(),Wt&&(0,dn.jsx)("div",{className:re.sizeIndicator,style:{left:Wt.x,top:Wt.y},"data-feedback-toolbar":!0,children:Wt.text}),et.map(($,j)=>(0,dn.jsx)("div",{className:re.guideLine,style:$.axis==="x"?{position:"fixed",left:$.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:$.pos-sn,width:"100vw",height:1}},`${$.axis}-${$.pos}-${j}`))]})}var Ag=new Set(["script","style","noscript","link","meta","br","hr"]);function Z7(){let a=document.querySelector("main")||document.body,l=[],u=Array.from(a.children),h=a!==document.body&&u.length<3?Array.from(document.body.children):u;for(let p of h){if(!(p instanceof HTMLElement)||Ag.has(p.tagName.toLowerCase())||p.hasAttribute("data-feedback-toolbar"))continue;let y=window.getComputedStyle(p);if(y.display==="none"||y.visibility==="hidden")continue;let d=p.getBoundingClientRect();if(!(d.height<10||d.width<10)){l.push({label:gh(p),selector:ts(p),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height});for(let I of Array.from(p.children)){if(!(I instanceof HTMLElement)||Ag.has(I.tagName.toLowerCase())||I.hasAttribute("data-feedback-toolbar"))continue;let E=window.getComputedStyle(I);if(E.display==="none"||E.visibility==="hidden")continue;let Y=I.getBoundingClientRect();Y.height<10||Y.width<10||l.push({label:gh(I),selector:ts(I),top:Y.top,bottom:Y.bottom,left:Y.left,right:Y.right,area:Y.width*Y.height})}}}return l}function J7(a){let l=window.scrollY;return a.map(({label:u,selector:h,rect:p})=>{let y=p.y-l;return{label:u,selector:h,top:y,bottom:y+p.height,left:p.x,right:p.x+p.width,area:p.width*p.height}})}function e9(a){let l=window.scrollY,u=a.y-l,h=a.x;return{top:u,bottom:u+a.height,left:h,right:h+a.width,area:a.width*a.height}}function $g(a,l){let u=l?J7(l):Z7(),h=e9(a),p=null,y=null,d=null,I=null,E=null;for(let P of u){if(Math.abs(P.left-h.left)<2&&Math.abs(P.top-h.top)<2&&Math.abs(P.right-P.left-a.width)<2&&Math.abs(P.bottom-P.top-a.height)<2)continue;P.left<=h.left+2&&P.right>=h.right-2&&P.top<=h.top+2&&P.bottom>=h.bottom-2&&P.area>h.area*1.5&&(!E||P.area<E._area)&&(E={label:P.label,selector:P.selector,_area:P.area});let pe=h.right>P.left+5&&h.left<P.right-5,Q=h.bottom>P.top+5&&h.top<P.bottom-5;if(pe&&P.bottom<=h.top+5){let K=Math.round(h.top-P.bottom);(!p||K<p._dist)&&(p={label:P.label,selector:P.selector,gap:Math.max(0,K),_dist:K})}if(pe&&P.top>=h.bottom-5){let K=Math.round(P.top-h.bottom);(!y||K<y._dist)&&(y={label:P.label,selector:P.selector,gap:Math.max(0,K),_dist:K})}if(Q&&P.right<=h.left+5){let K=Math.round(h.left-P.right);(!d||K<d._dist)&&(d={label:P.label,selector:P.selector,gap:Math.max(0,K),_dist:K})}if(Q&&P.left>=h.right-5){let K=Math.round(P.left-h.right);(!I||K<I._dist)&&(I={label:P.label,selector:P.selector,gap:Math.max(0,K),_dist:K})}}let Y=window.innerWidth,N=window.innerHeight,F=n9(a,Y),A=P=>P?{label:P.label,selector:P.selector,gap:P.gap}:null,ee=t9(h,a,Y,N,E?{label:E.label,selector:E.selector,_area:E._area}:null,u);return{above:A(p),below:A(y),left:A(d),right:A(I),alignment:F,containedIn:E?{label:E.label,selector:E.selector}:null,outOfBounds:ee}}function t9(a,l,u,h,p,y){let d={},I=!1,E=[];if(a.left<-2&&E.push("left"),a.right>u+2&&E.push("right"),a.top<-2&&E.push("top"),a.bottom>h+2&&E.push("bottom"),E.length>0&&(d.viewport=E,I=!0),p){let Y=y.find(N=>N.label===p.label&&N.selector===p.selector&&Math.abs(N.area-p._area)<10);if(Y){let N=[];a.left<Y.left-2&&N.push("left"),a.right>Y.right+2&&N.push("right"),a.top<Y.top-2&&N.push("top"),a.bottom>Y.bottom+2&&N.push("bottom"),N.length>0&&(d.container={label:p.label,edges:N},I=!0)}}return I?d:null}function n9(a,l){if(a.width/l>.85)return"full-width";let h=a.x+a.width/2,p=l/2,y=h-p,d=l*.08;return Math.abs(y)<d?"center":y<0?"left":"right"}function Ob(a){switch(a){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Nb(a,l={}){let u=[];a.above&&u.push(`Below \`${a.above.label}\`${a.above.gap>0?` (${a.above.gap}px gap)`:""}`),a.below&&u.push(`Above \`${a.below.label}\`${a.below.gap>0?` (${a.below.gap}px gap)`:""}`),l.includeLeftRight&&(a.left&&u.push(`Right of \`${a.left.label}\`${a.left.gap>0?` (${a.left.gap}px gap)`:""}`),a.right&&u.push(`Left of \`${a.right.label}\`${a.right.gap>0?` (${a.right.gap}px gap)`:""}`));let h=Ob(a.alignment);return a.containedIn?u.push(`${h.charAt(0).toUpperCase()+h.slice(1)} in \`${a.containedIn.label}\``):u.push(`${h.charAt(0).toUpperCase()+h.slice(1)} in page`),l.includePixelRef&&l.pixelRef&&u.push(`Pixel ref: \`${l.pixelRef}\``),a.outOfBounds&&(a.outOfBounds.viewport&&u.push(`**Outside viewport** (${a.outOfBounds.viewport.join(", ")} edge${a.outOfBounds.viewport.length>1?"s":""})`),a.outOfBounds.container&&u.push(`**Outside \`${a.outOfBounds.container.label}\`** (${a.outOfBounds.container.edges.join(", ")} edge${a.outOfBounds.container.edges.length>1?"s":""})`)),u}function r9(a,l,u){let h=[];a.above&&h.push(`below \`${a.above.label}\``),a.below&&h.push(`above \`${a.below.label}\``),a.left&&h.push(`right of \`${a.left.label}\``),a.right&&h.push(`left of \`${a.right.label}\``),a.containedIn&&h.push(`inside \`${a.containedIn.label}\``),h.push(Ob(a.alignment)),a.outOfBounds?.viewport&&h.push(`**outside viewport** (${a.outOfBounds.viewport.join(", ")})`),a.outOfBounds?.container&&h.push(`**outside \`${a.outOfBounds.container.label}\`** (${a.outOfBounds.container.edges.join(", ")})`);let p=u?`, ${Math.round(u.width)}\xD7${Math.round(u.height)}px`:"";return`at (${Math.round(l.x)}, ${Math.round(l.y)})${p}: ${h.join(", ")}`}var sb=15;function ub(a){if(a.length<2)return[];let l=[],u=new Set;for(let h=0;h<a.length;h++){if(u.has(h))continue;let p=[h];for(let y=h+1;y<a.length;y++)u.has(y)||Math.abs(a[h].rect.y-a[y].rect.y)<sb&&p.push(y);if(p.length>=2){let y=p.map(E=>a[E]);y.sort((E,Y)=>E.rect.x-Y.rect.x);let d=[];for(let E=0;E<y.length-1;E++)d.push(Math.round(y[E+1].rect.x-(y[E].rect.x+y[E].rect.width)));let I=Math.round(y.reduce((E,Y)=>E+Y.rect.y,0)/y.length);l.push({labels:y.map(E=>E.label),type:"row",sharedEdge:I,gaps:d,avgGap:d.length?Math.round(d.reduce((E,Y)=>E+Y,0)/d.length):0}),p.forEach(E=>u.add(E))}}for(let h=0;h<a.length;h++){if(u.has(h))continue;let p=[h];for(let y=h+1;y<a.length;y++)u.has(y)||Math.abs(a[h].rect.x-a[y].rect.x)<sb&&p.push(y);if(p.length>=2){let y=p.map(E=>a[E]);y.sort((E,Y)=>E.rect.y-Y.rect.y);let d=[];for(let E=0;E<y.length-1;E++)d.push(Math.round(y[E+1].rect.y-(y[E].rect.y+y[E].rect.height)));let I=Math.round(y.reduce((E,Y)=>E+Y.rect.x,0)/y.length);l.push({labels:y.map(E=>E.label),type:"column",sharedEdge:I,gaps:d,avgGap:d.length?Math.round(d.reduce((E,Y)=>E+Y,0)/d.length):0}),p.forEach(E=>u.add(E))}}return l}function o9(a){if(a.length<2)return[];let l=ub(a.map(d=>({label:d.label,rect:d.originalRect}))),u=ub(a.map(d=>({label:d.label,rect:d.currentRect}))),h=[],p=new Set;for(let d of l){let I=new Set(d.labels),E=null,Y=0;for(let N of u){let F=N.labels.filter(A=>I.has(A)).length;F>=2&&F>Y&&(E=N,Y=F)}if(E){let N=E.labels.filter(A=>I.has(A)),F=N.join(", ");if(E.type!==d.type){let A=d.type==="row"?"y":"x",ee=E.type==="row"?"y":"x";h.push(`**${F}**: ${d.type} (${A}\u2248${d.sharedEdge}, ${d.avgGap}px gaps) \u2192 ${E.type} (${ee}\u2248${E.sharedEdge}, ${E.avgGap}px gaps)`)}else if(Math.abs(d.sharedEdge-E.sharedEdge)>20||Math.abs(d.avgGap-E.avgGap)>5){let A=d.type==="row"?"y":"x",ee=Math.abs(d.sharedEdge-E.sharedEdge)>20?` ${A}: ${d.sharedEdge} \u2192 ${E.sharedEdge}`:"",P=Math.abs(d.avgGap-E.avgGap)>5?` gaps: ${d.avgGap}px \u2192 ${E.avgGap}px`:"";h.push(`**${F}**: ${d.type} shifted \u2014${ee}${P}`)}N.forEach(A=>p.add(A))}else{let N=d.labels.join(", "),F=d.type==="row"?"y":"x";h.push(`**${N}**: ${d.type} (${F}\u2248${d.sharedEdge}) dissolved`),d.labels.forEach(A=>p.add(A))}}for(let d of u){if(d.labels.every(Y=>p.has(Y))||d.labels.filter(Y=>!p.has(Y)).length<2)continue;if(!l.some(Y=>Y.labels.filter(F=>d.labels.includes(F)).length>=2)){let Y=d.type==="row"?"y":"x";h.push(`**${d.labels.join(", ")}**: new ${d.type} (${Y}\u2248${d.sharedEdge}, ${d.avgGap}px gaps)`),d.labels.forEach(N=>p.add(N))}}let y=a.filter(d=>!p.has(d.label));if(y.length>=2){let d={};for(let I of y){let E=Math.round(I.currentRect.x/5)*5;(d[E]??(d[E]=[])).push(I.label)}for(let[I,E]of Object.entries(d))E.length>=2&&h.push(`**${E.join(", ")}**: shared left edge at x\u2248${I}`)}return h}function Ab(a){if(typeof document>"u")return{viewport:a,contentArea:null};let l=[],u=new Set,h=I=>{u.has(I)||I instanceof HTMLElement&&(I.hasAttribute("data-feedback-toolbar")||Ag.has(I.tagName.toLowerCase())||(u.add(I),l.push(I)))},p=document.querySelector("main");p&&h(p);let y=document.querySelector("[role='main']");y&&h(y);for(let I of Array.from(document.body.children))if(h(I),I.children){for(let E of Array.from(I.children))if(h(E),E.children)for(let Y of Array.from(E.children))h(Y)}let d=null;for(let I of l){let E=I.getBoundingClientRect();if(E.height<50)continue;let Y=getComputedStyle(I);if(Y.maxWidth&&Y.maxWidth!=="none"&&Y.maxWidth!=="0px"){(!d||E.width<d.rect.width)&&(d={el:I,rect:E});continue}!d&&E.width<a.width-20&&E.width>100&&(d={el:I,rect:E})}if(d){let{el:I,rect:E}=d;return{viewport:a,contentArea:{width:Math.round(E.width),left:Math.round(E.left),right:Math.round(E.right),centerX:Math.round(E.left+E.width/2),selector:ts(I)}}}return{viewport:a,contentArea:null}}function a9(a){if(typeof document>"u")return null;let l=document.querySelector(a);if(!l?.parentElement)return null;let u=getComputedStyle(l.parentElement),h={parentDisplay:u.display,parentSelector:ts(l.parentElement)};return u.display.includes("flex")&&(h.flexDirection=u.flexDirection),u.display.includes("grid")&&u.gridTemplateColumns!=="none"&&(h.gridCols=u.gridTemplateColumns),u.gap&&u.gap!=="normal"&&u.gap!=="0px"&&(h.gap=u.gap),h}function $b(a,l){let u=l.contentArea,h=u?u.width:l.viewport.width,p=u?u.left:0,y=u?u.centerX:Math.round(l.viewport.width/2),d=Math.round(a.x-p),I=Math.round(p+h-(a.x+a.width)),E=(a.width/h*100).toFixed(1),Y=a.x+a.width/2,N=Math.abs(Y-y)<20,F=a.width/h>.95,A=[];return F?A.push("`width: 100%` of container"):A.push(`left \`${d}px\` in container, right \`${I}px\`, width \`${E}%\` (\`${Math.round(a.width)}px\`)`),N&&!F&&A.push("centered \u2014 `margin-inline: auto`"),A.join(" \u2014 ")}function Ib(a){let{viewport:l,contentArea:u}=a,h=`### Reference Frame
`;if(h+=`- Viewport: \`${l.width}\xD7${l.height}px\`
`,u){let p=u;h+=`- Content area: \`${p.width}px\` wide, left edge at \`x=${p.left}\`, right at \`x=${p.right}\` (\`${p.selector}\`)
`,h+=`- Pixel \u2192 CSS translation:
`,h+=`  - **Horizontal position in container**: \`element.x - ${p.left}\` \u2192 use as \`margin-left\` or \`left\`
`,h+=`  - **Width as % of container**: \`element.width / ${p.width} \xD7 100\` \u2192 use as \`width: X%\`
`,h+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",h+=`  - **Centered**: if \`|element.centerX - ${p.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else h+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,h+=`- Pixel \u2192 CSS translation:
`,h+=`  - **Width as % of viewport**: \`element.width / ${l.width} \xD7 100\` \u2192 use as \`width: X%\`
`,h+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(l.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return h+=`
`,h}function i9(a){let l=a9(a);if(!l)return null;let u=`\`${l.parentDisplay}\``;return l.flexDirection&&(u+=`, flex-direction: \`${l.flexDirection}\``),l.gridCols&&(u+=`, grid-template-columns: \`${l.gridCols}\``),l.gap&&(u+=`, gap: \`${l.gap}\``),`Parent: ${u} (\`${l.parentSelector}\`)`}function cb(a,l,u,h="standard"){if(a.length===0)return"";let p=[...a].sort((Q,K)=>Math.abs(Q.y-K.y)<20?Q.x-K.x:Q.y-K.y),y="";if(u?.blankCanvas?(y+=`## Wireframe: New Page

`,u.wireframePurpose&&(y+=`> **Purpose:** ${u.wireframePurpose}
>
`),y+=`> ${a.length} component${a.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):y+=`## Design Layout

> ${a.length} component${a.length!==1?"s":""} placed

`,h==="compact")return y+=`### Components
`,p.forEach((Q,K)=>{let _e=$a[Q.type]?.label||Q.type;y+=`${K+1}. **${_e}** \u2014 \`${Math.round(Q.width)}\xD7${Math.round(Q.height)}px\` at \`(${Math.round(Q.x)}, ${Math.round(Q.y)})\`
`}),y;let d=Ab(l);y+=Ib(d),y+=`### Components
`,p.forEach((Q,K)=>{let _e=$a[Q.type]?.label||Q.type,ge={x:Q.x,y:Q.y,width:Q.width,height:Q.height};y+=`${K+1}. **${_e}** \u2014 \`${Math.round(Q.width)}\xD7${Math.round(Q.height)}px\` at \`(${Math.round(Q.x)}, ${Math.round(Q.y)})\`
`;let De=$g(ge),Dt=Nb(De,{includeLeftRight:h==="detailed"||h==="forensic"});for(let Kt of Dt)y+=`   - ${Kt}
`;let ye=$b(ge,d);ye&&(y+=`   - CSS: ${ye}
`)}),y+=`
### Layout Analysis
`;let I=[];for(let Q of p){let K=I.find(_e=>Math.abs(_e.y-Q.y)<30);K?K.items.push(Q):I.push({y:Q.y,items:[Q]})}if(I.sort((Q,K)=>Q.y-K.y),I.forEach((Q,K)=>{Q.items.sort((ge,De)=>ge.x-De.x);let _e=Q.items.map(ge=>$a[ge.type]?.label||ge.type);if(Q.items.length===1){let De=Q.items[0].width>l.width*.8;y+=`- Row ${K+1} (y\u2248${Math.round(Q.y)}): ${_e[0]}${De?" \u2014 full width":""}
`}else y+=`- Row ${K+1} (y\u2248${Math.round(Q.y)}): ${_e.join(" | ")} \u2014 ${Q.items.length} items side by side
`}),h==="detailed"||h==="forensic"){y+=`
### Spacing & Gaps
`;for(let Q=0;Q<p.length-1;Q++){let K=p[Q],_e=p[Q+1],ge=$a[K.type]?.label||K.type,De=$a[_e.type]?.label||_e.type,Qe=Math.round(_e.y-(K.y+K.height)),Dt=Math.round(_e.x-(K.x+K.width));Math.abs(K.y-_e.y)<30?y+=`- ${ge} \u2192 ${De}: \`${Dt}px\` horizontal gap
`:y+=`- ${ge} \u2192 ${De}: \`${Qe}px\` vertical gap
`}if(h==="forensic"&&p.length>2){y+=`
### All Pairwise Gaps
`;for(let Q=0;Q<p.length;Q++)for(let K=Q+1;K<p.length;K++){let _e=p[Q],ge=p[K],De=$a[_e.type]?.label||_e.type,Qe=$a[ge.type]?.label||ge.type,Dt=Math.round(ge.y-(_e.y+_e.height)),ye=Math.round(ge.x-(_e.x+_e.width));y+=`- ${De} \u2194 ${Qe}: h=\`${ye}px\` v=\`${Dt}px\`
`}}h==="forensic"&&(y+=`
### Z-Order (placement order)
`,a.forEach((Q,K)=>{let _e=$a[Q.type]?.label||Q.type;y+=`${K}. ${_e} at \`(${Math.round(Q.x)}, ${Math.round(Q.y)})\`
`}))}y+=`
### Suggested Implementation
`;let E=p.some(Q=>Q.type==="navigation"),Y=p.some(Q=>Q.type==="hero"),N=p.some(Q=>Q.type==="sidebar"),F=p.some(Q=>Q.type==="footer"),A=p.filter(Q=>Q.type==="card"),ee=p.filter(Q=>Q.type==="form"),P=p.filter(Q=>Q.type==="table"),pe=p.filter(Q=>Q.type==="modal");if(E&&(y+=`- Top navigation bar with logo + nav links + CTA
`),Y&&(y+=`- Hero section with heading, subtext, and call-to-action
`),N&&(y+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),A.length>1?y+=`- ${A.length}-column card grid \u2014 use CSS Grid or Flexbox
`:A.length===1&&(y+=`- Card component with image + content area
`),ee.length>0&&(y+=`- ${ee.length} form${ee.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),P.length>0&&(y+=`- Data table \u2014 consider sortable columns and pagination
`),pe.length>0&&(y+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),F&&(y+=`- Multi-column footer with links
`),h==="detailed"||h==="forensic"){if(y+=`
### CSS Suggestions
`,N){let Q=p.find(K=>K.type==="sidebar");y+=`- \`display: grid; grid-template-columns: ${Math.round(Q.width)}px 1fr;\`
`}if(A.length>1){let Q=Math.round(A[0].width);y+=`- \`display: grid; grid-template-columns: repeat(${A.length}, ${Q}px); gap: 16px;\`
`}E&&(y+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return y}function db(a,l="standard",u){let{sections:h}=a,p=[];for(let N of h){let F=N.originalRect,A=N.currentRect,ee=Math.abs(F.x-A.x)>1||Math.abs(F.y-A.y)>1,P=Math.abs(F.width-A.width)>1||Math.abs(F.height-A.height)>1;if(!ee&&!P){l==="forensic"&&p.push({section:N,posMoved:!1,sizeChanged:!1});continue}p.push({section:N,posMoved:ee,sizeChanged:P})}if(p.length===0||l!=="forensic"&&p.every(N=>!N.posMoved&&!N.sizeChanged))return"";let y=`## Suggested Layout Changes

`,d=u?u.width:typeof window<"u"?window.innerWidth:0,I=u?u.height:typeof window<"u"?window.innerHeight:0,E=Ab({width:d,height:I});l!=="compact"&&(y+=Ib(E)),l==="forensic"&&(y+=`> Detected at: \`${new Date(a.detectedAt).toISOString()}\`
`,y+=`> Total sections: ${h.length}

`);let Y=N=>h.map(F=>({label:F.label,selector:F.selector,rect:N==="original"?F.originalRect:F.currentRect}));y+=`**Changes:**
`;for(let{section:N,posMoved:F,sizeChanged:A}of p){let ee=N.originalRect,P=N.currentRect;if(!F&&!A){y+=`- ${N.label} \u2014 unchanged at (${Math.round(P.x)}, ${Math.round(P.y)}) ${Math.round(P.width)}\xD7${Math.round(P.height)}px
`;continue}if(l==="compact"){F&&A?y+=`- Suggested: move **${N.label}** to (${Math.round(P.x)}, ${Math.round(P.y)}) ${Math.round(P.width)}\xD7${Math.round(P.height)}px
`:F?y+=`- Suggested: move **${N.label}** to (${Math.round(P.x)}, ${Math.round(P.y)})
`:y+=`- Suggested: resize **${N.label}** to ${Math.round(P.width)}\xD7${Math.round(P.height)}px
`;continue}if(F&&A?y+=`- Suggested: move and resize **${N.label}**
`:F?y+=`- Suggested: move **${N.label}**
`:y+=`- Suggested: resize **${N.label}** from ${Math.round(ee.width)}\xD7${Math.round(ee.height)}px to ${Math.round(P.width)}\xD7${Math.round(P.height)}px
`,F){let Q=$g(ee,Y("original")),K=$g(P,Y("current")),_e=A?{width:ee.width,height:ee.height}:void 0;y+=`  - Currently ${r9(Q,{x:ee.x,y:ee.y},_e)}
`;let ge=A?{width:P.width,height:P.height}:void 0,De=`at (${Math.round(P.x)}, ${Math.round(P.y)})`,Qe=ge?`, ${Math.round(ge.width)}\xD7${Math.round(ge.height)}px`:"",ye=Nb(K,{includeLeftRight:l==="detailed"||l==="forensic"});if(ye.length>0){y+=`  - Suggested position ${De}${Qe}: ${ye[0]}
`;for(let vt=1;vt<ye.length;vt++)y+=`    ${ye[vt]}
`}else y+=`  - Suggested position ${De}${Qe}
`;let Kt=$b(P,E);Kt&&(y+=`  - CSS: ${Kt}
`)}let pe=i9(N.selector);if(pe&&(y+=`  - ${pe}
`),y+=`  - Selector: \`${N.selector}\`
`,l==="detailed"||l==="forensic"){let Q=N.className?`${N.tagName}.${N.className.split(" ")[0]}`:N.tagName;Q!==N.selector&&(y+=`  - Element: \`${Q}\`
`),N.role&&(y+=`  - Role: \`${N.role}\`
`),l==="forensic"&&N.textSnippet&&(y+=`  - Text: "${N.textSnippet}"
`)}l==="forensic"&&(y+=`  - Original rect: \`{ x: ${Math.round(ee.x)}, y: ${Math.round(ee.y)}, w: ${Math.round(ee.width)}, h: ${Math.round(ee.height)} }\`
`,y+=`  - Current rect: \`{ x: ${Math.round(P.x)}, y: ${Math.round(P.y)}, w: ${Math.round(P.width)}, h: ${Math.round(P.height)} }\`
`)}if(l!=="compact"){let N=p.filter(A=>A.posMoved).map(A=>({label:A.section.label,originalRect:A.section.originalRect,currentRect:A.section.currentRect})),F=o9(N);if(F.length>0){y+=`
### Layout Summary
`;for(let A of F)y+=`- ${A}
`}}if(l!=="compact"&&h.length>1){y+=`
### All Sections (current positions)
`;let N=[...h].sort((F,A)=>Math.abs(F.currentRect.y-A.currentRect.y)<20?F.currentRect.x-A.currentRect.x:F.currentRect.y-A.currentRect.y);for(let F of N){let A=F.currentRect,ee=Math.abs(A.x-F.originalRect.x)>1||Math.abs(A.y-F.originalRect.y)>1||Math.abs(A.width-F.originalRect.width)>1||Math.abs(A.height-F.originalRect.height)>1;y+=`- ${F.label}: \`${Math.round(A.width)}\xD7${Math.round(A.height)}px\` at \`(${Math.round(A.x)}, ${Math.round(A.y)})\`${ee?" \u2190 suggested":""}
`}}return y}var Ig="feedback-annotations-",Bb=7;function yh(a){return`${Ig}${a}`}function wg(a){if(typeof window>"u")return[];try{let l=localStorage.getItem(yh(a));if(!l)return[];let u=JSON.parse(l),h=Date.now()-Bb*24*60*60*1e3;return u.filter(p=>!p.timestamp||p.timestamp>h)}catch{return[]}}function zb(a,l){if(!(typeof window>"u"))try{localStorage.setItem(yh(a),JSON.stringify(l))}catch{}}function l9(){let a=new Map;if(typeof window>"u")return a;try{let l=Date.now()-Bb*24*60*60*1e3;for(let u=0;u<localStorage.length;u++){let h=localStorage.key(u);if(h?.startsWith(Ig)){let p=h.slice(Ig.length),y=localStorage.getItem(h);if(y){let I=JSON.parse(y).filter(E=>!E.timestamp||E.timestamp>l);I.length>0&&a.set(p,I)}}}}catch{}return a}function Vc(a,l,u){let h=l.map(p=>({...p,_syncedTo:u}));zb(a,h)}var Ug="agentation-design-";function s9(a){if(typeof window>"u")return[];try{let l=localStorage.getItem(`${Ug}${a}`);return l?JSON.parse(l):[]}catch{return[]}}function u9(a,l){if(!(typeof window>"u"))try{localStorage.setItem(`${Ug}${a}`,JSON.stringify(l))}catch{}}function c9(a){if(!(typeof window>"u"))try{localStorage.removeItem(`${Ug}${a}`)}catch{}}var Hg="agentation-rearrange-";function d9(a){if(typeof window>"u")return null;try{let l=localStorage.getItem(`${Hg}${a}`);return l?JSON.parse(l):null}catch{return null}}function f9(a,l){if(!(typeof window>"u"))try{localStorage.setItem(`${Hg}${a}`,JSON.stringify(l))}catch{}}function h9(a){if(!(typeof window>"u"))try{localStorage.removeItem(`${Hg}${a}`)}catch{}}var Fg="agentation-wireframe-";function p9(a){if(typeof window>"u")return null;try{let l=localStorage.getItem(`${Fg}${a}`);return l?JSON.parse(l):null}catch{return null}}function fb(a,l){if(!(typeof window>"u"))try{localStorage.setItem(`${Fg}${a}`,JSON.stringify(l))}catch{}}function fh(a){if(!(typeof window>"u"))try{localStorage.removeItem(`${Fg}${a}`)}catch{}}var Ub="agentation-session-";function Pg(a){return`${Ub}${a}`}function _9(a){if(typeof window>"u")return null;try{return localStorage.getItem(Pg(a))}catch{return null}}function Cg(a,l){if(!(typeof window>"u"))try{localStorage.setItem(Pg(a),l)}catch{}}function m9(a){if(!(typeof window>"u"))try{localStorage.removeItem(Pg(a))}catch{}}var Bg=`${Ub}toolbar-hidden`;function g9(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Bg)==="1"}catch{return!1}}function y9(a){if(!(typeof window>"u"))try{a?sessionStorage.setItem(Bg,"1"):sessionStorage.removeItem(Bg)}catch{}}async function kg(a,l){let u=await fetch(`${a}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:l})});if(!u.ok)throw new Error(`Failed to create session: ${u.status}`);return u.json()}async function hb(a,l){let u=await fetch(`${a}/sessions/${l}`);if(!u.ok)throw new Error(`Failed to get session: ${u.status}`);return u.json()}async function tu(a,l,u){let h=await fetch(`${a}/sessions/${l}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!h.ok)throw new Error(`Failed to sync annotation: ${h.status}`);return h.json()}async function pb(a,l,u){let h=await fetch(`${a}/annotations/${l}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(!h.ok)throw new Error(`Failed to update annotation: ${h.status}`);return h.json()}async function dl(a,l){let u=await fetch(`${a}/annotations/${l}`,{method:"DELETE"});if(!u.ok)throw new Error(`Failed to delete annotation: ${u.status}`)}var kn={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},_b=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),mb=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],v9=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function b9(a){let l=a?.mode??"filtered",u=_b;if(a?.skipExact){let h=a.skipExact instanceof Set?a.skipExact:new Set(a.skipExact);u=new Set([..._b,...h])}return{maxComponents:a?.maxComponents??6,maxDepth:a?.maxDepth??30,mode:l,skipExact:u,skipPatterns:a?.skipPatterns?[...mb,...a.skipPatterns]:mb,userPatterns:a?.userPatterns??v9,filter:a?.filter}}function x9(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function w9(a,l=10){let u=new Set,h=a,p=0;for(;h&&p<l;)h.className&&typeof h.className=="string"&&h.className.split(/\s+/).forEach(y=>{if(y.length>1){let d=y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();d.length>1&&u.add(d)}}),h=h.parentElement,p++;return u}function C9(a,l){let u=x9(a);for(let h of l){if(h===u)return!0;let p=u.split("-").filter(d=>d.length>2),y=h.split("-").filter(d=>d.length>2);for(let d of p)for(let I of y)if(d===I||d.includes(I)||I.includes(d))return!0}return!1}function k9(a,l,u,h){if(u.filter)return u.filter(a,l);switch(u.mode){case"all":return!0;case"filtered":return!(u.skipExact.has(a)||u.skipPatterns.some(p=>p.test(a)));case"smart":return u.skipExact.has(a)||u.skipPatterns.some(p=>p.test(a))?!1:!!(h&&C9(a,h)||u.userPatterns.some(p=>p.test(a)));default:return!0}}var nu=null,S9=new WeakMap;function Sg(a){return Object.keys(a).some(l=>l.startsWith("__reactFiber$")||l.startsWith("__reactInternalInstance$")||l.startsWith("__reactProps$"))}function E9(){if(nu!==null)return nu;if(typeof document>"u")return!1;if(document.body&&Sg(document.body))return nu=!0,!0;let a=["#root","#app","#__next","[data-reactroot]"];for(let l of a){let u=document.querySelector(l);if(u&&Sg(u))return nu=!0,!0}if(document.body){for(let l of document.body.children)if(Sg(l))return nu=!0,!0}return nu=!1,!1}var Xc={map:S9};function R9(a){return Object.keys(a).find(u=>u.startsWith("__reactFiber$")||u.startsWith("__reactInternalInstance$"))||null}function T9(a){let l=R9(a);return l?a[l]:null}function Gl(a){return a?a.displayName?a.displayName:a.name?a.name:null:null}function M9(a){let{tag:l,type:u,elementType:h}=a;if(l===kn.HostComponent||l===kn.HostText||l===kn.HostHoistable||l===kn.HostSingleton||l===kn.Fragment||l===kn.Mode||l===kn.Profiler||l===kn.DehydratedFragment||l===kn.HostRoot||l===kn.HostPortal||l===kn.ScopeComponent||l===kn.OffscreenComponent||l===kn.LegacyHiddenComponent||l===kn.CacheComponent||l===kn.TracingMarkerComponent||l===kn.Throw||l===kn.ViewTransitionComponent||l===kn.ActivityComponent)return null;if(l===kn.ForwardRef){let p=h;if(p?.render){let y=Gl(p.render);if(y)return y}return p?.displayName?p.displayName:Gl(u)}if(l===kn.MemoComponent||l===kn.SimpleMemoComponent){let p=h;if(p?.type){let y=Gl(p.type);if(y)return y}return p?.displayName?p.displayName:Gl(u)}if(l===kn.ContextProvider){let p=u;return p?._context?.displayName?`${p._context.displayName}.Provider`:null}if(l===kn.ContextConsumer){let p=u;return p?.displayName?`${p.displayName}.Consumer`:null}if(l===kn.LazyComponent){let p=h;return p?._status===1&&p._result?Gl(p._result):null}return l===kn.SuspenseComponent||l===kn.SuspenseListComponent?null:l===kn.IncompleteClassComponent||l===kn.IncompleteFunctionComponent||l===kn.FunctionComponent||l===kn.ClassComponent||l===kn.IndeterminateComponent?Gl(u):null}function D9(a){return a.length<=2||a.length<=3&&a===a.toLowerCase()}function L9(a,l){let u=b9(l),h=u.mode==="all";if(h){let E=Xc.map.get(a);if(E!==void 0)return E}if(!E9()){let E={path:null,components:[]};return h&&Xc.map.set(a,E),E}let p=u.mode==="smart"?w9(a):void 0,y=[];try{let E=T9(a),Y=0;for(;E&&Y<u.maxDepth&&y.length<u.maxComponents;){let N=M9(E);N&&!D9(N)&&k9(N,Y,u,p)&&y.push(N),E=E.return,Y++}}catch{let E={path:null,components:[]};return h&&Xc.map.set(a,E),E}if(y.length===0){let E={path:null,components:[]};return h&&Xc.map.set(a,E),E}let I={path:y.slice().reverse().map(E=>`<${E}>`).join(" "),components:y};return h&&Xc.map.set(a,I),I}var Qc={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function O9(a){if(!a||typeof a!="object")return null;let l=Object.keys(a),u=l.find(y=>y.startsWith("__reactFiber$"));if(u)return a[u]||null;let h=l.find(y=>y.startsWith("__reactInternalInstance$"));if(h)return a[h]||null;let p=l.find(y=>{if(!y.startsWith("__react"))return!1;let d=a[y];return d&&typeof d=="object"&&"_debugSource"in d});return p&&a[p]||null}function Kc(a){if(!a.type||typeof a.type=="string")return null;if(typeof a.type=="object"||typeof a.type=="function"){let l=a.type;if(l.displayName)return l.displayName;if(l.name)return l.name}return null}function N9(a,l=50){let u=a,h=0;for(;u&&h<l;){if(u._debugSource)return{source:u._debugSource,componentName:Kc(u)};if(u._debugOwner?._debugSource)return{source:u._debugOwner._debugSource,componentName:Kc(u._debugOwner)};u=u.return,h++}return null}function A9(a){let l=a,u=0,h=50;for(;l&&u<h;){let p=l,y=["_debugSource","__source","_source","debugSource"];for(let d of y){let I=p[d];if(I&&typeof I=="object"&&"fileName"in I)return{source:I,componentName:Kc(l)}}if(l.memoizedProps){let d=l.memoizedProps;if(d.__source&&typeof d.__source=="object"){let I=d.__source;if(I.fileName&&I.lineNumber)return{source:{fileName:I.fileName,lineNumber:I.lineNumber,columnNumber:I.columnNumber},componentName:Kc(l)}}}l=l.return,u++}return null}var hh=new Map;function $9(a){let l=a.tag,u=a.type,h=a.elementType;if(typeof u=="string"||u==null||typeof u=="function"&&u.prototype?.isReactComponent)return null;if((l===Qc.FunctionComponent||l===Qc.IndeterminateComponent)&&typeof u=="function")return u;if(l===Qc.ForwardRef&&h){let p=h.render;if(typeof p=="function")return p}if((l===Qc.MemoComponent||l===Qc.SimpleMemoComponent)&&h){let p=h.type;if(typeof p=="function")return p}return typeof u=="function"?u:null}function I9(){let a=Hb.default,l=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(l&&"H"in l)return{get:()=>l.H,set:h=>{l.H=h}};let u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(u){let h=u.ReactCurrentDispatcher;if(h&&"current"in h)return{get:()=>h.current,set:p=>{h.current=p}}}return null}function B9(a){let l=a.split(`
`),u=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],h=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,p=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let y of l){let d=y.trim();if(!d||u.some(E=>E.test(d)))continue;let I=h.exec(d)||p.exec(d);if(I)return{fileName:I[1],line:parseInt(I[2],10),column:parseInt(I[3],10)}}return null}function z9(a){let l=a;return l=l.replace(/[?#].*$/,""),l=l.replace(/^turbopack:\/\/\/\[project\]\//,""),l=l.replace(/^webpack-internal:\/\/\/\.\//,""),l=l.replace(/^webpack-internal:\/\/\//,""),l=l.replace(/^webpack:\/\/\/\.\//,""),l=l.replace(/^webpack:\/\/\//,""),l=l.replace(/^turbopack:\/\/\//,""),l=l.replace(/^https?:\/\/[^/]+\//,""),l=l.replace(/^file:\/\/\//,"/"),l=l.replace(/^\([^)]+\)\/\.\//,""),l=l.replace(/^\.\//,""),l}function U9(a){let l=$9(a);if(!l)return null;if(hh.has(l))return hh.get(l);let u=I9();if(!u)return hh.set(l,null),null;let h=u.get(),p=null;try{let y=new Proxy({},{get(){throw new Error("probe")}});u.set(y);try{l({})}catch(d){if(d instanceof Error&&d.message==="probe"&&d.stack){let I=B9(d.stack);I&&(p={fileName:z9(I.fileName),lineNumber:I.line,columnNumber:I.column,componentName:Kc(a)||void 0})}}}finally{u.set(h)}return hh.set(l,p),p}function H9(a,l=15){let u=a,h=0;for(;u&&h<l;){let p=U9(u);if(p)return p;u=u.return,h++}return null}function zg(a){let l=O9(a);if(!l)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let u=N9(l);if(u||(u=A9(l)),u?.source)return{found:!0,source:{fileName:u.source.fileName,lineNumber:u.source.lineNumber,columnNumber:u.source.columnNumber,componentName:u.componentName||void 0},isReactApp:!0,isProduction:!1};let h=H9(l);return h?{found:!0,source:h,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function F9(a,l="path"){let{fileName:u,lineNumber:h,columnNumber:p}=a,y=`${u}:${h}`;return p!==void 0&&(y+=`:${p}`),l==="vscode"?`vscode://file${u.startsWith("/")?"":"/"}${y}`:y}function P9(a,l=10){let u=a,h=0;for(;u&&h<l;){let p=zg(u);if(p.found)return p;u=u.parentElement,h++}return zg(a)}var j9=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,W9={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(a)),a.textContent=j9}var ce=W9,qc=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function gb(a,l,u="standard"){if(a.length===0)return"";let h=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",p=`## Page Feedback: ${l}
`;return u==="forensic"?(p+=`
**Environment:**
`,p+=`- Viewport: ${h}
`,typeof window<"u"&&(p+=`- URL: ${window.location.href}
`,p+=`- User Agent: ${navigator.userAgent}
`,p+=`- Timestamp: ${new Date().toISOString()}
`,p+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),p+=`
---
`):u!=="compact"&&(p+=`**Viewport:** ${h}
`),p+=`
`,a.forEach((y,d)=>{u==="compact"?(p+=`${d+1}. **${y.element}**${y.sourceFile?` (${y.sourceFile})`:""}: ${y.comment}`,y.selectedText&&(p+=` (re: "${y.selectedText.slice(0,30)}${y.selectedText.length>30?"...":""}")`),p+=`
`):u==="forensic"?(p+=`### ${d+1}. ${y.element}
`,y.isMultiSelect&&y.fullPath&&(p+=`*Forensic data shown for first element of selection*
`),y.fullPath&&(p+=`**Full DOM Path:** ${y.fullPath}
`),y.cssClasses&&(p+=`**CSS Classes:** ${y.cssClasses}
`),y.boundingBox&&(p+=`**Position:** x:${Math.round(y.boundingBox.x)}, y:${Math.round(y.boundingBox.y)} (${Math.round(y.boundingBox.width)}\xD7${Math.round(y.boundingBox.height)}px)
`),p+=`**Annotation at:** ${y.x.toFixed(1)}% from left, ${Math.round(y.y)}px from top
`,y.selectedText&&(p+=`**Selected text:** "${y.selectedText}"
`),y.nearbyText&&!y.selectedText&&(p+=`**Context:** ${y.nearbyText.slice(0,100)}
`),y.computedStyles&&(p+=`**Computed Styles:** ${y.computedStyles}
`),y.accessibility&&(p+=`**Accessibility:** ${y.accessibility}
`),y.nearbyElements&&(p+=`**Nearby Elements:** ${y.nearbyElements}
`),y.sourceFile&&(p+=`**Source:** ${y.sourceFile}
`),y.reactComponents&&(p+=`**React:** ${y.reactComponents}
`),p+=`**Feedback:** ${y.comment}

`):(p+=`### ${d+1}. ${y.element}
`,p+=`**Location:** ${y.elementPath}
`,y.sourceFile&&(p+=`**Source:** ${y.sourceFile}
`),y.reactComponents&&(p+=`**React:** ${y.reactComponents}
`),u==="detailed"&&(y.cssClasses&&(p+=`**Classes:** ${y.cssClasses}
`),y.boundingBox&&(p+=`**Position:** ${Math.round(y.boundingBox.x)}px, ${Math.round(y.boundingBox.y)}px (${Math.round(y.boundingBox.width)}\xD7${Math.round(y.boundingBox.height)}px)
`)),y.selectedText&&(p+=`**Selected text:** "${y.selectedText}"
`),u==="detailed"&&y.nearbyText&&!y.selectedText&&(p+=`**Context:** ${y.nearbyText.slice(0,100)}
`),p+=`**Feedback:** ${y.comment}

`)}),p.trim()}var Y9=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,V9={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",markerIn:"styles-module__markerIn___x4G8D",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",markerTooltip:"styles-module__markerTooltip___-VUm-",tooltipIn:"styles-module__tooltipIn___aJslQ",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-annotation-marker-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(a)),a.textContent=Y9}var Tr=V9;function yb({annotation:a,globalIndex:l,layerIndex:u,layerSize:h,isExiting:p,isClearing:y,isAnimated:d,isHovered:I,isDeleting:E,isEditingAny:Y,renumberFrom:N,markerClickBehavior:F,tooltipStyle:A,onHoverEnter:ee,onHoverLeave:P,onClick:pe,onContextMenu:Q}){let K=(I||E)&&!Y,_e=K&&F==="delete",ge=a.isMultiSelect,De=ge?"var(--agentation-color-green)":"var(--agentation-color-accent)",Qe=p?Tr.exit:y?Tr.clearing:d?"":Tr.enter,Dt=p?`${(h-1-u)*20}ms`:`${u*20}ms`;return(0,ea.jsxs)("div",{className:`${Tr.marker} ${ge?Tr.multiSelect:""} ${Qe} ${_e?Tr.hovered:""}`,"data-annotation-marker":!0,style:{left:`${a.x}%`,top:a.y,backgroundColor:_e?void 0:De,animationDelay:Dt},onMouseEnter:()=>ee(a),onMouseLeave:P,onClick:ye=>{ye.stopPropagation(),p||pe(a)},onContextMenu:Q?ye=>{F==="delete"&&(ye.preventDefault(),ye.stopPropagation(),p||Q(a))}:void 0,children:[K?_e?(0,ea.jsx)(kb,{size:ge?18:16}):(0,ea.jsx)(a8,{size:16}):(0,ea.jsx)("span",{className:N!==null&&l>=N?Tr.renumber:void 0,children:l+1}),I&&!Y&&(0,ea.jsxs)("div",{className:`${Tr.markerTooltip} ${Tr.enter}`,style:A,children:[(0,ea.jsxs)("span",{className:Tr.markerQuote,children:[a.element,a.selectedText&&` "${a.selectedText.slice(0,30)}${a.selectedText.length>30?"...":""}"`]}),(0,ea.jsx)("span",{className:Tr.markerNote,children:a.comment})]})]})}function X9({x:a,y:l,isMultiSelect:u,isExiting:h}){return(0,ea.jsx)("div",{className:`${Tr.marker} ${Tr.pending} ${u?Tr.multiSelect:""} ${h?Tr.exit:Tr.enter}`,style:{left:`${a}%`,top:l,backgroundColor:u?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:(0,ea.jsx)(X3,{size:12})})}function vb({annotation:a,fixed:l}){let u=a.isMultiSelect;return(0,ea.jsx)("div",{className:`${Tr.marker} ${l?Tr.fixed:""} ${Tr.hovered} ${u?Tr.multiSelect:""} ${Tr.exit}`,"data-annotation-marker":!0,style:{left:`${a.x}%`,top:a.y},children:(0,ea.jsx)(kb,{size:u?12:10})})}var Q9=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,q9={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-switch-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-switch-styles",document.head.appendChild(a)),a.textContent=Q9}var Eg=q9,Rg=({className:a="",...l})=>(0,Zc.jsxs)("div",{className:`${Eg.switchContainer} ${a}`,children:[(0,Zc.jsx)("input",{className:Eg.switchInput,type:"checkbox",...l}),(0,Zc.jsx)("div",{className:Eg.switchThumb})]}),G9=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,K9={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-checkbox-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(a)),a.textContent=G9}var ph=K9,Z9=({className:a="",...l})=>(0,au.jsxs)("div",{className:`${ph.checkboxContainer} ${a}`,children:[(0,au.jsx)("input",{className:ph.checkboxInput,type:"checkbox",...l}),(0,au.jsx)("svg",{className:ph.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,au.jsx)("path",{className:ph.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),J9=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,eE={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-checkbox-field-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(a)),a.textContent=J9}var bb=eE,xb=({className:a="",label:l,tooltip:u,checked:h,onChange:p,...y})=>{let d=(0,Fb.useId)();return(0,iu.jsxs)("div",{className:`${bb.container} ${a}`,...y,children:[(0,iu.jsx)(Z9,{id:d,onChange:p,checked:h}),(0,iu.jsx)("label",{className:bb.label,htmlFor:d,children:l}),u&&(0,iu.jsx)(Jl,{content:u})]})},tE=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,nE={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-settings-panel-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(a)),a.textContent=tE}var Xe=nE;function rE({settings:a,onSettingsChange:l,isDarkMode:u,onToggleTheme:h,isDevMode:p,connectionStatus:y,endpoint:d,isVisible:I,toolbarNearBottom:E,settingsPage:Y,onSettingsPageChange:N,onHideToolbar:F}){return(0,Be.jsx)("div",{className:`${Xe.settingsPanel} ${I?Xe.enter:Xe.exit}`,style:E?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:(0,Be.jsxs)("div",{className:Xe.settingsPanelContainer,children:[(0,Be.jsxs)("div",{className:`${Xe.settingsPage} ${Y==="automations"?Xe.slideLeft:""}`,children:[(0,Be.jsxs)("div",{className:Xe.settingsHeader,children:[(0,Be.jsx)("a",{className:Xe.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:(0,Be.jsx)("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Be.jsx)("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),(0,Be.jsxs)("p",{className:Xe.settingsVersion,children:["v","3.0.2"]}),(0,Be.jsx)("button",{className:Xe.themeToggle,onClick:h,title:u?"Switch to light mode":"Switch to dark mode",children:(0,Be.jsx)("span",{className:Xe.themeIconWrapper,children:(0,Be.jsx)("span",{className:Xe.themeIcon,children:u?(0,Be.jsx)(r8,{size:20}):(0,Be.jsx)(o8,{size:20})},u?"sun":"moon")})})]}),(0,Be.jsx)("div",{className:Xe.divider}),(0,Be.jsxs)("div",{className:Xe.settingsSection,children:[(0,Be.jsxs)("div",{className:Xe.settingsRow,children:[(0,Be.jsxs)("div",{className:Xe.settingsLabel,children:["Output Detail",(0,Be.jsx)(Jl,{content:"Controls how much detail is included in the copied output"})]}),(0,Be.jsxs)("button",{className:Xe.cycleButton,onClick:()=>{let ee=(qc.findIndex(P=>P.value===a.outputDetail)+1)%qc.length;l({outputDetail:qc[ee].value})},children:[(0,Be.jsx)("span",{className:Xe.cycleButtonText,children:qc.find(A=>A.value===a.outputDetail)?.label},a.outputDetail),(0,Be.jsx)("span",{className:Xe.cycleDots,children:qc.map(A=>(0,Be.jsx)("span",{className:`${Xe.cycleDot} ${a.outputDetail===A.value?Xe.active:""}`},A.value))})]})]}),(0,Be.jsxs)("div",{className:`${Xe.settingsRow} ${Xe.settingsRowMarginTop} ${p?"":Xe.settingsRowDisabled}`,children:[(0,Be.jsxs)("div",{className:Xe.settingsLabel,children:["React Components",(0,Be.jsx)(Jl,{content:p?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,Be.jsx)(Rg,{checked:p&&a.reactEnabled,onChange:A=>l({reactEnabled:A.target.checked}),disabled:!p})]}),(0,Be.jsxs)("div",{className:`${Xe.settingsRow} ${Xe.settingsRowMarginTop}`,children:[(0,Be.jsxs)("div",{className:Xe.settingsLabel,children:["Hide Until Restart",(0,Be.jsx)(Jl,{content:"Hides the toolbar until you open a new tab"})]}),(0,Be.jsx)(Rg,{checked:!1,onChange:A=>{A.target.checked&&F()}})]})]}),(0,Be.jsx)("div",{className:Xe.divider}),(0,Be.jsxs)("div",{className:Xe.settingsSection,children:[(0,Be.jsx)("div",{className:`${Xe.settingsLabel} ${Xe.settingsLabelMarker}`,children:"Marker Color"}),(0,Be.jsx)("div",{className:Xe.colorOptions,children:Gc.map(A=>(0,Be.jsx)("button",{className:`${Xe.colorOption} ${a.annotationColorId===A.id?Xe.selected:""}`,style:{"--swatch":A.srgb,"--swatch-p3":A.p3},onClick:()=>l({annotationColorId:A.id}),title:A.label,type:"button"},A.id))})]}),(0,Be.jsx)("div",{className:Xe.divider}),(0,Be.jsxs)("div",{className:Xe.settingsSection,children:[(0,Be.jsx)(xb,{className:"checkbox-field",label:"Clear on copy/send",checked:a.autoClearAfterCopy,onChange:A=>l({autoClearAfterCopy:A.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,Be.jsx)(xb,{className:Xe.checkboxField,label:"Block page interactions",checked:a.blockInteractions,onChange:A=>l({blockInteractions:A.target.checked})})]}),(0,Be.jsx)("div",{className:Xe.divider}),(0,Be.jsxs)("button",{className:Xe.settingsNavLink,onClick:()=>N("automations"),children:[(0,Be.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,Be.jsxs)("span",{className:Xe.settingsNavLinkRight,children:[d&&y!=="disconnected"&&(0,Be.jsx)("span",{className:`${Xe.mcpNavIndicator} ${Xe[y]}`}),(0,Be.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Be.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,Be.jsxs)("div",{className:`${Xe.settingsPage} ${Xe.automationsPage} ${Y==="automations"?Xe.slideIn:""}`,children:[(0,Be.jsxs)("button",{className:Xe.settingsBackButton,onClick:()=>N("main"),children:[(0,Be.jsx)(l8,{size:16}),(0,Be.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,Be.jsx)("div",{className:Xe.divider}),(0,Be.jsxs)("div",{className:Xe.settingsSection,children:[(0,Be.jsxs)("div",{className:Xe.settingsRow,children:[(0,Be.jsxs)("span",{className:Xe.automationHeader,children:["MCP Connection",(0,Be.jsx)(Jl,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),d&&(0,Be.jsx)("div",{className:`${Xe.mcpStatusDot} ${Xe[y]}`,title:y==="connected"?"Connected":y==="connecting"?"Connecting...":"Disconnected"})]}),(0,Be.jsxs)("p",{className:Xe.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,Be.jsx)("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Xe.learnMoreLink,children:"Learn more"})]})]}),(0,Be.jsx)("div",{className:Xe.divider}),(0,Be.jsxs)("div",{className:`${Xe.settingsSection} ${Xe.settingsSectionGrow}`,children:[(0,Be.jsxs)("div",{className:Xe.settingsRow,children:[(0,Be.jsxs)("span",{className:Xe.automationHeader,children:["Webhooks",(0,Be.jsx)(Jl,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,Be.jsxs)("div",{className:Xe.autoSendContainer,children:[(0,Be.jsx)("label",{htmlFor:"agentation-auto-send",className:`${Xe.autoSendLabel} ${a.webhooksEnabled?Xe.active:""} ${a.webhookUrl?"":Xe.disabled}`,children:"Auto-Send"}),(0,Be.jsx)(Rg,{id:"agentation-auto-send",checked:a.webhooksEnabled,onChange:A=>l({webhooksEnabled:A.target.checked}),disabled:!a.webhookUrl})]})]}),(0,Be.jsx)("p",{className:Xe.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,Be.jsx)("textarea",{className:Xe.webhookUrlInput,placeholder:"Webhook URL",value:a.webhookUrl,onKeyDown:A=>A.stopPropagation(),onChange:A=>l({webhookUrl:A.target.value})})]})]})]})})}function Tg(a,l="filtered"){let{name:u,path:h}=ou(a);if(l==="off")return{name:u,elementName:u,path:h,reactComponents:null};let p=L9(a,{mode:l});return{name:p.path?`${p.path} ${u}`:u,elementName:u,path:h,reactComponents:p.path}}var wb=!1,Mg={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},ti=a=>{if(!a||!a.trim())return!1;try{let l=new URL(a.trim());return l.protocol==="http:"||l.protocol==="https:"}catch{return!1}},oE={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},Gc=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],aE=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;let a=document.createElement("style");a.id="agentation-color-tokens",a.textContent=[...Gc.map(l=>`
      [data-agentation-accent="${l.id}"] {
        --agentation-color-accent: ${l.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${l.id}"] {
          --agentation-color-accent: ${l.p3};
        }
      }
    `),`:root {
      ${Gc.map(l=>`--agentation-color-${l.id}: ${l.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Gc.map(l=>`--agentation-color-${l.id}: ${l.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(a)};aE();function Kl(a,l){let u=document.elementFromPoint(a,l);if(!u)return null;for(;u?.shadowRoot;){let h=u.shadowRoot.elementFromPoint(a,l);if(!h||h===u)break;u=h}return u}function Dg(a){let l=a;for(;l&&l!==document.body;){let h=window.getComputedStyle(l).position;if(h==="fixed"||h==="sticky")return!0;l=l.parentElement}return!1}function Zl(a){return a.status!=="resolved"&&a.status!=="dismissed"}function _h(a){let l=zg(a),u=l.found?l:P9(a);if(u.found&&u.source)return F9(u.source,"path")}function Pb({demoAnnotations:a,demoDelay:l=1e3,enableDemoMode:u=!1,onAnnotationAdd:h,onAnnotationDelete:p,onAnnotationUpdate:y,onAnnotationsClear:d,onCopy:I,onSubmit:E,copyToClipboard:Y=!0,endpoint:N,sessionId:F,onSessionCreated:A,webhookUrl:ee,className:P}={}){let[pe,Q]=(0,z.useState)(!1),[K,_e]=(0,z.useState)([]),[ge,De]=(0,z.useState)(!0),[Qe,Dt]=(0,z.useState)(()=>g9()),[ye,Kt]=(0,z.useState)(!1),vt=(0,z.useRef)(null);(0,z.useEffect)(()=>{let b=R=>{let T=vt.current;T&&T.contains(R.target)&&R.stopPropagation()},C=["mousedown","click","pointerdown"];return C.forEach(R=>document.body.addEventListener(R,b)),()=>{C.forEach(R=>document.body.removeEventListener(R,b))}},[]);let[gt,Je]=(0,z.useState)(!1),[dt,Re]=(0,z.useState)(!1),[He,we]=(0,z.useState)(null),[rt,Wt]=(0,z.useState)({x:0,y:0}),[de,et]=(0,z.useState)(null),[Et,sn]=(0,z.useState)(!1),[bn,Sn]=(0,z.useState)("idle"),[qr,ir]=(0,z.useState)(!1),[br,lr]=(0,z.useState)(!1),[sr,tr]=(0,z.useState)(null),[Mr,En]=(0,z.useState)(null),[Kn,gn]=(0,z.useState)([]),[In,yn]=(0,z.useState)(null),[Zn,Ln]=(0,z.useState)(null),[tt,se]=(0,z.useState)(null),[qe,st]=(0,z.useState)(null),[_t,We]=(0,z.useState)([]),[jt,Ut]=(0,z.useState)(0),[Ht,ut]=(0,z.useState)(!1),[Ge,$]=(0,z.useState)(!1),[j,O]=(0,z.useState)(!1),[B,ae]=(0,z.useState)(!1),[ve,te]=(0,z.useState)(!1),[Me,ze]=(0,z.useState)("main"),[Ct,it]=(0,z.useState)(!1),[Oe,ct]=(0,z.useState)(!1),[Ye,xt]=(0,z.useState)(!1),[Pe,nn]=(0,z.useState)([]),[qt,Lt]=(0,z.useState)(null),Ft=(0,z.useRef)(!1),[lt,fn]=(0,z.useState)(!1),[Jn,xr]=(0,z.useState)(!1),[_r,Vn]=(0,z.useState)(1),[wr,Bo]=(0,z.useState)("new-page"),[On,k]=(0,z.useState)(""),[le,Ce]=(0,z.useState)(!1),[fe,kt]=(0,z.useState)(null),Zt=(0,z.useRef)(!1),ht=(0,z.useRef)({rearrange:null,placements:[]}),Nt=(0,z.useRef)({rearrange:null,placements:[]}),[Cr,Nn]=(0,z.useState)(0),[Xn,Wr]=(0,z.useState)(0),[ta,uo]=(0,z.useState)(0),[Dr,co]=(0,z.useState)(0),Rt=(0,z.useRef)(new Set),yo=(0,z.useRef)(new Set),Gr=(0,z.useRef)(null),Ia=(0,z.useRef)(),Ni=Oe&&pe&&!Ye&&lt;(0,z.useEffect)(()=>{if(Ni){xr(!1);let b=ru(()=>{xr(!0)});return()=>cancelAnimationFrame(b)}else xr(!1)},[Ni]);let ha=(0,z.useRef)(new Map),pa=(0,z.useRef)(new Map),_a=(0,z.useRef)(),[Kr,Ai]=(0,z.useState)(!1),[fo,fl]=(0,z.useState)([]),ri=(0,z.useRef)(fo);ri.current=fo;let[ma,zo]=(0,z.useState)(null),na=(0,z.useRef)(null),hl=(0,z.useRef)(!1),su=(0,z.useRef)([]),ns=(0,z.useRef)(0),Jc=(0,z.useRef)(null),oi=(0,z.useRef)(null),uu=(0,z.useRef)(1),[ai,ii]=(0,z.useState)(!1),ga=(0,z.useRef)(null),[An,Uo]=(0,z.useState)([]),Xt=(0,z.useRef)({cmd:!1,shift:!1}),Lr=()=>{it(!0)},rs=()=>{it(!1)},Bt=()=>{ai||(ga.current=bt(()=>ii(!0),850))},os=()=>{ga.current&&(clearTimeout(ga.current),ga.current=null),ii(!1),rs()};(0,z.useEffect)(()=>()=>{ga.current&&clearTimeout(ga.current)},[]);let[mt,Ba]=(0,z.useState)(()=>{try{let b=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Mg,...b,annotationColorId:Gc.find(C=>C.id===b.annotationColorId)?b.annotationColorId:Mg.annotationColorId}}catch{return Mg}}),[Ar,as]=(0,z.useState)(!0),[kr,Fn]=(0,z.useState)(!1),cu=()=>{vt.current?.classList.add(ce.disableTransitions),as(b=>!b),ru(()=>{vt.current?.classList.remove(ce.disableTransitions)})},vo=!0,mr=vo&&mt.reactEnabled?oE[mt.outputDetail]:"off",[xn,za]=(0,z.useState)(F??null),$i=(0,z.useRef)(!1),[Sr,Ho]=(0,z.useState)(N?"connecting":"disconnected"),[Bn,Ua]=(0,z.useState)(null),[Fo,ya]=(0,z.useState)(!1),[Po,li]=(0,z.useState)(null),Ii=(0,z.useRef)(!1),[pl,Ha]=(0,z.useState)(new Set),[_,S]=(0,z.useState)(new Set),[W,q]=(0,z.useState)(!1),[be,ot]=(0,z.useState)(!1),[Le,Ot]=(0,z.useState)(!1),Yt=(0,z.useRef)(null),Qt=(0,z.useRef)(null),hn=(0,z.useRef)(null),pn=(0,z.useRef)(null),wn=(0,z.useRef)(!1),Qn=(0,z.useRef)(0),nr=(0,z.useRef)(null),si=(0,z.useRef)(null),ur=8,Bi=50,_l=(0,z.useRef)(null),zi=(0,z.useRef)(null),ui=(0,z.useRef)(null),at=typeof window<"u"?window.location.pathname:"/";(0,z.useEffect)(()=>{if(B)te(!0);else{it(!1),ze("main");let b=bt(()=>te(!1),0);return()=>clearTimeout(b)}},[B]);let ci=pe&&ge&&!Oe;(0,z.useEffect)(()=>{if(ci){Re(!1),Je(!0),Ha(new Set);let b=bt(()=>{Ha(C=>{let R=new Set(C);return K.forEach(T=>R.add(T.id)),R})},350);return()=>clearTimeout(b)}else if(gt){Re(!0);let b=bt(()=>{Je(!1),Re(!1)},250);return()=>clearTimeout(b)}},[ci]),(0,z.useEffect)(()=>{$(!0),Ut(window.scrollY);let b=wg(at);_e(b.filter(Zl)),wb||(Fn(!0),wb=!0,bt(()=>Fn(!1),750));try{let C=localStorage.getItem("feedback-toolbar-theme");C!==null&&as(C==="dark")}catch{}try{let C=localStorage.getItem("feedback-toolbar-position");if(C){let R=JSON.parse(C);typeof R.x=="number"&&typeof R.y=="number"&&Ua(R)}}catch{}},[at]),(0,z.useEffect)(()=>{Ge&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(mt))},[mt,Ge]),(0,z.useEffect)(()=>{Ge&&localStorage.setItem("feedback-toolbar-theme",Ar?"dark":"light")},[Ar,Ge]);let du=(0,z.useRef)(!1);(0,z.useEffect)(()=>{let b=du.current;du.current=Fo,b&&!Fo&&Bn&&Ge&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Bn))},[Fo,Bn,Ge]),(0,z.useEffect)(()=>{if(!N||!Ge||$i.current)return;$i.current=!0,Ho("connecting"),(async()=>{try{let C=_9(at),R=F||C,T=!1;if(R)try{let M=await hb(N,R);za(M.id),Ho("connected"),Cg(at,M.id),T=!0;let ne=wg(at),xe=new Set(M.annotations.map(je=>je.id)),Se=ne.filter(je=>!xe.has(je.id));if(Se.length>0){let nt=`${typeof window<"u"?window.location.origin:""}${at}`,Tt=(await Promise.allSettled(Se.map(pt=>tu(N,M.id,{...pt,sessionId:M.id,url:nt})))).map((pt,Ue)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation:",pt.reason),Se[Ue])),Gt=[...M.annotations,...Tt];_e(Gt.filter(Zl)),Vc(at,Gt.filter(Zl),M.id)}else _e(M.annotations.filter(Zl)),Vc(at,M.annotations.filter(Zl),M.id)}catch(M){console.warn("[Agentation] Could not join session, creating new:",M),m9(at)}if(!T){let M=typeof window<"u"?window.location.href:"/",ne=await kg(N,M);za(ne.id),Ho("connected"),Cg(at,ne.id),A?.(ne.id);let xe=l9(),Se=typeof window<"u"?window.location.origin:"",je=[];for(let[nt,Ke]of xe){let Tt=Ke.filter(Ue=>!Ue._syncedTo);if(Tt.length===0)continue;let Gt=`${Se}${nt}`,pt=nt===at;je.push((async()=>{try{let Ue=pt?ne:await kg(N,Gt),Er=(await Promise.allSettled(Tt.map(Cn=>tu(N,Ue.id,{...Cn,sessionId:Ue.id,url:Gt})))).map((Cn,dr)=>Cn.status==="fulfilled"?Cn.value:(console.warn("[Agentation] Failed to sync annotation:",Cn.reason),Tt[dr])).filter(Zl);if(Vc(nt,Er,Ue.id),pt){let Cn=new Set(Tt.map(dr=>dr.id));_e(dr=>{let Mt=dr.filter(Pt=>!Cn.has(Pt.id));return[...Er,...Mt]})}}catch(Ue){console.warn(`[Agentation] Failed to sync annotations for ${nt}:`,Ue)}})())}await Promise.allSettled(je)}}catch(C){Ho("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",C)}})()},[N,F,Ge,A,at]),(0,z.useEffect)(()=>{if(!N||!Ge)return;let b=async()=>{try{(await fetch(`${N}/health`)).ok?Ho("connected"):Ho("disconnected")}catch{Ho("disconnected")}};b();let C=c8(b,1e4);return()=>clearInterval(C)},[N,Ge]),(0,z.useEffect)(()=>{if(!N||!Ge||!xn)return;let b=new EventSource(`${N}/sessions/${xn}/events`),C=["resolved","dismissed"],R=T=>{try{let M=JSON.parse(T.data);if(C.includes(M.payload?.status)){let ne=M.payload.id,xe=M.payload.kind;if(xe==="placement"){for(let[Se,je]of ha.current)if(je===ne){ha.current.delete(Se),nn(nt=>nt.filter(Ke=>Ke.id!==Se));break}}else if(xe==="rearrange"){for(let[Se,je]of pa.current)if(je===ne){pa.current.delete(Se),kt(nt=>{if(!nt)return null;let Ke=nt.sections.filter(Tt=>Tt.id!==Se);return Ke.length===0?null:{...nt,sections:Ke}});break}}else S(Se=>new Set(Se).add(ne)),bt(()=>{_e(Se=>Se.filter(je=>je.id!==ne)),S(Se=>{let je=new Set(Se);return je.delete(ne),je})},150)}}catch{}};return b.addEventListener("annotation.updated",R),()=>{b.removeEventListener("annotation.updated",R),b.close()}},[N,Ge,xn]),(0,z.useEffect)(()=>{if(!N||!Ge)return;let b=si.current==="disconnected",C=Sr==="connected";si.current=Sr,b&&C&&(async()=>{try{let T=wg(at);if(T.length===0)return;let ne=`${typeof window<"u"?window.location.origin:""}${at}`,xe=xn,Se=[];if(xe)try{Se=(await hb(N,xe)).annotations}catch{xe=null}xe||(xe=(await kg(N,ne)).id,za(xe),Cg(at,xe));let je=new Set(Se.map(Ke=>Ke.id)),nt=T.filter(Ke=>!je.has(Ke.id));if(nt.length>0){let Tt=(await Promise.allSettled(nt.map(Ue=>tu(N,xe,{...Ue,sessionId:xe,url:ne})))).map((Ue,cr)=>Ue.status==="fulfilled"?Ue.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Ue.reason),nt[cr])),pt=[...Se,...Tt].filter(Zl);_e(pt),Vc(at,pt,xe)}}catch(T){console.warn("[Agentation] Failed to sync on reconnect:",T)}})()},[Sr,N,Ge,xn,at]);let vh=(0,z.useCallback)(()=>{ye||(Kt(!0),ae(!1),Q(!1),bt(()=>{y9(!0),Dt(!0),Kt(!1)},400))},[ye]);(0,z.useEffect)(()=>{if(!u||!Ge||!a||a.length===0||K.length>0)return;let b=[];return b.push(bt(()=>{Q(!0)},l-200)),a.forEach((C,R)=>{let T=l+R*300;b.push(bt(()=>{let M=document.querySelector(C.selector);if(!M)return;let ne=M.getBoundingClientRect(),{name:xe,path:Se}=ou(M),je={id:`demo-${Date.now()}-${R}`,x:(ne.left+ne.width/2)/window.innerWidth*100,y:ne.top+ne.height/2+window.scrollY,comment:C.comment,element:xe,elementPath:Se,timestamp:Date.now(),selectedText:C.selectedText,boundingBox:{x:ne.left,y:ne.top+window.scrollY,width:ne.width,height:ne.height},nearbyText:Wc(M),cssClasses:Yc(M)};_e(nt=>[...nt,je])},T))}),()=>{b.forEach(clearTimeout)}},[u,Ge,a,l]),(0,z.useEffect)(()=>{let b=()=>{Ut(window.scrollY),ut(!0),ui.current&&clearTimeout(ui.current),ui.current=bt(()=>{ut(!1)},150)};return window.addEventListener("scroll",b,{passive:!0}),()=>{window.removeEventListener("scroll",b),ui.current&&clearTimeout(ui.current)}},[]),(0,z.useEffect)(()=>{Ge&&K.length>0?xn?Vc(at,K,xn):zb(at,K):Ge&&K.length===0&&localStorage.removeItem(yh(at))},[K,at,Ge,xn]),(0,z.useEffect)(()=>{if(Ge&&!Ft.current){Ft.current=!0;let b=s9(at);b.length>0&&nn(b)}},[Ge,at]),(0,z.useEffect)(()=>{Ge&&Ft.current&&!lt&&(Pe.length>0?u9(at,Pe):c9(at))},[Pe,at,Ge,lt]),(0,z.useEffect)(()=>{if(Ge&&!Zt.current){Zt.current=!0;let b=d9(at);if(b){let C={...b,sections:b.sections.map(R=>({...R,currentRect:R.currentRect??{...R.originalRect}}))};kt(C)}}},[Ge,at]),(0,z.useEffect)(()=>{Ge&&Zt.current&&!lt&&(fe?f9(at,fe):h9(at))},[fe,at,Ge,lt]);let fu=(0,z.useRef)(!1);(0,z.useEffect)(()=>{if(Ge&&!fu.current){fu.current=!0;let b=p9(at);b&&(Nt.current={rearrange:b.rearrange,placements:b.placements||[]},b.purpose&&k(b.purpose))}},[Ge,at]),(0,z.useEffect)(()=>{if(!Ge||!fu.current)return;let b=Nt.current;lt?(fe?.sections?.length??0)>0||Pe.length>0||On?fb(at,{rearrange:fe,placements:Pe,purpose:On}):fh(at):(b.rearrange?.sections?.length??0)>0||b.placements.length>0||On?fb(at,{rearrange:b.rearrange,placements:b.placements,purpose:On}):fh(at)},[fe,Pe,On,lt,at,Ge]),(0,z.useEffect)(()=>{Oe&&!fe&&kt({sections:[],originalOrder:[],detectedAt:Date.now()})},[Oe,fe]),(0,z.useEffect)(()=>{if(!N||!xn)return;let b=ha.current,C=new Set(Pe.map(R=>R.id));for(let R of Pe){if(b.has(R.id))continue;b.set(R.id,"");let T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at;tu(N,xn,{id:R.id,x:R.x/window.innerWidth*100,y:R.y,comment:`Place ${R.type} at (${Math.round(R.x)}, ${Math.round(R.y)}), ${R.width}\xD7${R.height}px${R.text?` \u2014 "${R.text}"`:""}`,element:`[design:${R.type}]`,elementPath:"[placement]",timestamp:R.timestamp,url:T,intent:"change",severity:"important",kind:"placement",placement:{componentType:R.type,width:R.width,height:R.height,scrollY:R.scrollY,text:R.text}}).then(M=>{b.has(R.id)&&b.set(R.id,M.id)}).catch(M=>{console.warn("[Agentation] Failed to sync placement annotation:",M),b.delete(R.id)})}for(let[R,T]of b)C.has(R)||(b.delete(R),T&&dl(N,T).catch(()=>{}))},[Pe,N,xn,at]),(0,z.useEffect)(()=>{if(!(!N||!xn))return _a.current&&clearTimeout(_a.current),_a.current=bt(()=>{let b=pa.current;if(!fe||fe.sections.length===0){for(let[,T]of b)T&&dl(N,T).catch(()=>{});b.clear();return}let C=new Set(fe.sections.map(T=>T.id)),R=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at;for(let T of fe.sections){let M=T.originalRect,ne=T.currentRect;if(!(Math.abs(M.x-ne.x)>1||Math.abs(M.y-ne.y)>1||Math.abs(M.width-ne.width)>1||Math.abs(M.height-ne.height)>1)){let je=b.get(T.id);je&&(b.delete(T.id),dl(N,je).catch(()=>{}));continue}let Se=b.get(T.id);Se?pb(N,Se,{comment:`Move ${T.label} section (${T.tagName}) \u2014 from (${Math.round(M.x)},${Math.round(M.y)}) ${Math.round(M.width)}\xD7${Math.round(M.height)} to (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}\xD7${Math.round(ne.height)}`}).catch(je=>{console.warn("[Agentation] Failed to update rearrange annotation:",je)}):(b.set(T.id,""),tu(N,xn,{id:T.id,x:ne.x/window.innerWidth*100,y:ne.y,comment:`Move ${T.label} section (${T.tagName}) \u2014 from (${Math.round(M.x)},${Math.round(M.y)}) ${Math.round(M.width)}\xD7${Math.round(M.height)} to (${Math.round(ne.x)},${Math.round(ne.y)}) ${Math.round(ne.width)}\xD7${Math.round(ne.height)}`,element:T.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:R,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:T.selector,label:T.label,tagName:T.tagName,originalRect:M,currentRect:ne}}).then(je=>{b.has(T.id)&&b.set(T.id,je.id)}).catch(je=>{console.warn("[Agentation] Failed to sync rearrange annotation:",je),b.delete(T.id)}))}for(let[T,M]of b)C.has(T)||(b.delete(T),M&&dl(N,M).catch(()=>{}))},300),()=>{_a.current&&clearTimeout(_a.current)}},[fe,N,xn,at]);let Ui=(0,z.useRef)(new Map);(0,z.useLayoutEffect)(()=>{let b=fe?.sections??[],C=new Set;if((Oe||Ye)&&pe)for(let R of b){C.add(R.id);try{let T=document.querySelector(R.selector);if(!T)continue;if(!Ui.current.has(R.id)){let M={transform:T.style.transform,transformOrigin:T.style.transformOrigin,opacity:T.style.opacity,position:T.style.position,zIndex:T.style.zIndex,display:T.style.display},ne=[],xe=T.parentElement;for(;xe&&xe!==document.body;){let je=getComputedStyle(xe);(je.overflow!=="visible"||je.overflowX!=="visible"||je.overflowY!=="visible")&&(ne.push({el:xe,overflow:xe.style.overflow}),xe.style.overflow="visible"),xe=xe.parentElement}getComputedStyle(T).display==="inline"&&(T.style.display="inline-block"),Ui.current.set(R.id,{el:T,origStyles:M,ancestors:ne}),T.style.transformOrigin="top left",T.style.zIndex="9999"}}catch{}}for(let[R,T]of Ui.current)if(!C.has(R)){let{el:M,origStyles:ne,ancestors:xe}=T;M.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",M.style.transform=ne.transform,M.style.transformOrigin=ne.transformOrigin,M.style.opacity=ne.opacity,M.style.position=ne.position,M.style.zIndex=ne.zIndex,Ui.current.delete(R),bt(()=>{M.style.transition="",M.style.display=ne.display;for(let Se of xe)Se.el.style.overflow=Se.overflow},450)}},[fe,Oe,Ye,pe]),(0,z.useEffect)(()=>()=>{for(let[,b]of Ui.current){let{el:C,origStyles:R,ancestors:T}=b;C.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",C.style.transform=R.transform,C.style.transformOrigin=R.transformOrigin,C.style.opacity=R.opacity,C.style.position=R.position,C.style.zIndex=R.zIndex,bt(()=>{C.style.transition="",C.style.display=R.display;for(let M of T)M.el.style.overflow=M.overflow},450)}Ui.current.clear()},[]);let ml=(0,z.useCallback)(()=>{xt(!0),ct(!1),Lt(null),clearTimeout(Ia.current),Ia.current=bt(()=>{xt(!1)},300)},[]),is=(0,z.useCallback)(()=>{Oe&&(xt(!0),ct(!1),Lt(null),clearTimeout(Ia.current),Ia.current=bt(()=>{xt(!1)},300)),Q(!1)},[Oe]),hu=(0,z.useCallback)(()=>{j||(f8(),O(!0))},[j]),gl=(0,z.useCallback)(()=>{j&&(Z5(),O(!1))},[j]),ls=(0,z.useCallback)(()=>{j?gl():hu()},[j,hu,gl]),ed=(0,z.useCallback)(()=>{if(An.length===0)return;let b=An[0],C=b.element,R=An.length>1,T=An.map(M=>M.element.getBoundingClientRect());if(R){let M={left:Math.min(...T.map(Ue=>Ue.left)),top:Math.min(...T.map(Ue=>Ue.top)),right:Math.max(...T.map(Ue=>Ue.right)),bottom:Math.max(...T.map(Ue=>Ue.bottom))},ne=An.slice(0,5).map(Ue=>Ue.name).join(", "),xe=An.length>5?` +${An.length-5} more`:"",Se=T.map(Ue=>({x:Ue.left,y:Ue.top+window.scrollY,width:Ue.width,height:Ue.height})),nt=An[An.length-1].element,Ke=T[T.length-1],Tt=Ke.left+Ke.width/2,Gt=Ke.top+Ke.height/2,pt=Dg(nt);et({x:Tt/window.innerWidth*100,y:pt?Gt:Gt+window.scrollY,clientY:Gt,element:`${An.length} elements: ${ne}${xe}`,elementPath:"multi-select",boundingBox:{x:M.left,y:M.top+window.scrollY,width:M.right-M.left,height:M.bottom-M.top},isMultiSelect:!0,isFixed:pt,elementBoundingBoxes:Se,multiSelectElements:An.map(Ue=>Ue.element),targetElement:nt,fullPath:uh(C),accessibility:sh(C),computedStyles:lh(C),computedStylesObj:ih(C),nearbyElements:ah(C),cssClasses:Yc(C),nearbyText:Wc(C),sourceFile:_h(C)})}else{let M=T[0],ne=Dg(C);et({x:M.left/window.innerWidth*100,y:ne?M.top:M.top+window.scrollY,clientY:M.top,element:b.name,elementPath:b.path,boundingBox:{x:M.left,y:ne?M.top:M.top+window.scrollY,width:M.width,height:M.height},isFixed:ne,fullPath:uh(C),accessibility:sh(C),computedStyles:lh(C),computedStylesObj:ih(C),nearbyElements:ah(C),cssClasses:Yc(C),nearbyText:Wc(C),reactComponents:b.reactComponents,sourceFile:_h(C)})}Uo([]),we(null)},[An]);(0,z.useEffect)(()=>{pe||(et(null),se(null),st(null),We([]),we(null),ae(!1),Uo([]),Xt.current={cmd:!1,shift:!1},j&&gl())},[pe,j,gl]),(0,z.useEffect)(()=>()=>{Z5()},[]),(0,z.useEffect)(()=>{if(!pe)return;let b=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),C=":not([data-agentation-root]):not([data-agentation-root] *)",R=document.createElement("style");return R.id="feedback-cursor-styles",R.textContent=`
      body ${C} {
        cursor: crosshair !important;
      }

      body :is(${b})${C} {
        cursor: text !important;
      }
    `,document.head.appendChild(R),()=>{let T=document.getElementById("feedback-cursor-styles");T&&T.remove()}},[pe]),(0,z.useEffect)(()=>{if(ma!==null&&pe)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[ma,pe]),(0,z.useEffect)(()=>{if(!pe||de||Kr||Oe)return;let b=C=>{let R=C.composedPath()[0]||C.target;if(Ro(R,"[data-feedback-toolbar]")){we(null);return}let T=Kl(C.clientX,C.clientY);if(!T||Ro(T,"[data-feedback-toolbar]")){we(null);return}let{name:M,elementName:ne,path:xe,reactComponents:Se}=Tg(T,mr),je=T.getBoundingClientRect();we({element:M,elementName:ne,elementPath:xe,rect:je,reactComponents:Se}),Wt({x:C.clientX,y:C.clientY})};return document.addEventListener("mousemove",b),()=>document.removeEventListener("mousemove",b)},[pe,de,Kr,Oe,mr,fo]);let Mo=(0,z.useCallback)(b=>{if(se(b),tr(null),En(null),gn([]),b.elementBoundingBoxes?.length){let C=[];for(let R of b.elementBoundingBoxes){let T=R.x+R.width/2,M=R.y+R.height/2-window.scrollY,ne=Kl(T,M);ne&&C.push(ne)}We(C),st(null)}else if(b.boundingBox){let C=b.boundingBox,R=C.x+C.width/2,T=b.isFixed?C.y+C.height/2:C.y+C.height/2-window.scrollY,M=Kl(R,T);if(M){let ne=M.getBoundingClientRect(),xe=ne.width/C.width,Se=ne.height/C.height;xe<.5||Se<.5?st(null):st(M)}else st(null);We([])}else st(null),We([])},[]);(0,z.useEffect)(()=>{if(!pe||Kr||Oe)return;let b=C=>{if(wn.current){wn.current=!1;return}let R=C.composedPath()[0]||C.target;if(Ro(R,"[data-feedback-toolbar]")||Ro(R,"[data-annotation-popup]")||Ro(R,"[data-annotation-marker]"))return;if(C.metaKey&&C.shiftKey&&!de&&!tt){C.preventDefault(),C.stopPropagation();let Rn=Kl(C.clientX,C.clientY);if(!Rn)return;let Er=Rn.getBoundingClientRect(),{name:Cn,path:dr,reactComponents:Mt}=Tg(Rn,mr),Pt=An.findIndex(qn=>qn.element===Rn);Pt>=0?Uo(qn=>qn.filter((or,Do)=>Do!==Pt)):Uo(qn=>[...qn,{element:Rn,rect:Er,name:Cn,path:dr,reactComponents:Mt??void 0}]);return}let T=Ro(R,"button, a, input, select, textarea, [role='button'], [onclick]");if(mt.blockInteractions&&T&&(C.preventDefault(),C.stopPropagation()),de){if(T&&!mt.blockInteractions)return;C.preventDefault(),_l.current?.shake();return}if(tt){if(T&&!mt.blockInteractions)return;C.preventDefault(),zi.current?.shake();return}C.preventDefault();let M=Kl(C.clientX,C.clientY);if(!M)return;let{name:ne,path:xe,reactComponents:Se}=Tg(M,mr),je=M.getBoundingClientRect(),nt=C.clientX/window.innerWidth*100,Ke=Dg(M),Tt=Ke?C.clientY:C.clientY+window.scrollY,Gt=window.getSelection(),pt;Gt&&Gt.toString().trim().length>0&&(pt=Gt.toString().trim().slice(0,500));let Ue=ih(M),cr=lh(M);et({x:nt,y:Tt,clientY:C.clientY,element:ne,elementPath:xe,selectedText:pt,boundingBox:{x:je.left,y:Ke?je.top:je.top+window.scrollY,width:je.width,height:je.height},nearbyText:Wc(M),cssClasses:Yc(M),isFixed:Ke,fullPath:uh(M),accessibility:sh(M),computedStyles:cr,computedStylesObj:Ue,nearbyElements:ah(M),reactComponents:Se??void 0,sourceFile:_h(M),targetElement:M}),we(null)};return document.addEventListener("click",b,!0),()=>document.removeEventListener("click",b,!0)},[pe,Kr,Oe,de,tt,mt.blockInteractions,mr,An]),(0,z.useEffect)(()=>{if(!pe)return;let b=T=>{T.key==="Meta"&&(Xt.current.cmd=!0),T.key==="Shift"&&(Xt.current.shift=!0)},C=T=>{let M=Xt.current.cmd&&Xt.current.shift;T.key==="Meta"&&(Xt.current.cmd=!1),T.key==="Shift"&&(Xt.current.shift=!1);let ne=Xt.current.cmd&&Xt.current.shift;M&&!ne&&An.length>0&&ed()},R=()=>{Xt.current={cmd:!1,shift:!1},Uo([])};return document.addEventListener("keydown",b),document.addEventListener("keyup",C),window.addEventListener("blur",R),()=>{document.removeEventListener("keydown",b),document.removeEventListener("keyup",C),window.removeEventListener("blur",R)}},[pe,An,ed]),(0,z.useEffect)(()=>{if(!pe||de||Kr||Oe)return;let b=C=>{let R=C.composedPath()[0]||C.target;Ro(R,"[data-feedback-toolbar]")||Ro(R,"[data-annotation-marker]")||Ro(R,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(R.tagName)||R.isContentEditable||(C.preventDefault(),Yt.current={x:C.clientX,y:C.clientY})};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[pe,de,Kr,Oe]),(0,z.useEffect)(()=>{if(!pe||de)return;let b=C=>{if(!Yt.current)return;let R=C.clientX-Yt.current.x,T=C.clientY-Yt.current.y,M=R*R+T*T,ne=ur*ur;if(!Le&&M>=ne&&(Qt.current=Yt.current,Ot(!0),C.preventDefault()),(Le||M>=ne)&&Qt.current){if(hn.current){let Mt=Math.min(Qt.current.x,C.clientX),Pt=Math.min(Qt.current.y,C.clientY),qn=Math.abs(C.clientX-Qt.current.x),or=Math.abs(C.clientY-Qt.current.y);hn.current.style.transform=`translate(${Mt}px, ${Pt}px)`,hn.current.style.width=`${qn}px`,hn.current.style.height=`${or}px`}let xe=Date.now();if(xe-Qn.current<Bi)return;Qn.current=xe;let Se=Qt.current.x,je=Qt.current.y,nt=Math.min(Se,C.clientX),Ke=Math.min(je,C.clientY),Tt=Math.max(Se,C.clientX),Gt=Math.max(je,C.clientY),pt=(nt+Tt)/2,Ue=(Ke+Gt)/2,cr=new Set,Rn=[[nt,Ke],[Tt,Ke],[nt,Gt],[Tt,Gt],[pt,Ue],[pt,Ke],[pt,Gt],[nt,Ue],[Tt,Ue]];for(let[Mt,Pt]of Rn){let qn=document.elementsFromPoint(Mt,Pt);for(let or of qn)or instanceof HTMLElement&&cr.add(or)}let Er=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Mt of Er)if(Mt instanceof HTMLElement){let Pt=Mt.getBoundingClientRect(),qn=Pt.left+Pt.width/2,or=Pt.top+Pt.height/2,Do=qn>=nt&&qn<=Tt&&or>=Ke&&or<=Gt,Lo=Math.min(Pt.right,Tt)-Math.max(Pt.left,nt),$r=Math.min(Pt.bottom,Gt)-Math.max(Pt.top,Ke),bl=Lo>0&&$r>0?Lo*$r:0,fi=Pt.width*Pt.height,oa=fi>0?bl/fi:0;(Do||oa>.5)&&cr.add(Mt)}let Cn=[],dr=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Mt of cr){if(Ro(Mt,"[data-feedback-toolbar]")||Ro(Mt,"[data-annotation-marker]"))continue;let Pt=Mt.getBoundingClientRect();if(!(Pt.width>window.innerWidth*.8&&Pt.height>window.innerHeight*.5)&&!(Pt.width<10||Pt.height<10)&&Pt.left<Tt&&Pt.right>nt&&Pt.top<Gt&&Pt.bottom>Ke){let qn=Mt.tagName,or=dr.has(qn);if(!or&&(qn==="DIV"||qn==="SPAN")){let Do=Mt.textContent&&Mt.textContent.trim().length>0,Lo=Mt.onclick!==null||Mt.getAttribute("role")==="button"||Mt.getAttribute("role")==="link"||Mt.classList.contains("clickable")||Mt.hasAttribute("data-clickable");(Do||Lo)&&!Mt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(or=!0)}if(or){let Do=!1;for(let Lo of Cn)if(Lo.left<=Pt.left&&Lo.right>=Pt.right&&Lo.top<=Pt.top&&Lo.bottom>=Pt.bottom){Do=!0;break}Do||Cn.push(Pt)}}}if(pn.current){let Mt=pn.current;for(;Mt.children.length>Cn.length;)Mt.removeChild(Mt.lastChild);Cn.forEach((Pt,qn)=>{let or=Mt.children[qn];or||(or=document.createElement("div"),or.className=ce.selectedElementHighlight,Mt.appendChild(or)),or.style.transform=`translate(${Pt.left}px, ${Pt.top}px)`,or.style.width=`${Pt.width}px`,or.style.height=`${Pt.height}px`})}}};return document.addEventListener("mousemove",b,{passive:!0}),()=>document.removeEventListener("mousemove",b)},[pe,de,Le,ur]),(0,z.useEffect)(()=>{if(!pe)return;let b=C=>{let R=Le,T=Qt.current;if(Le&&T){wn.current=!0;let M=Math.min(T.x,C.clientX),ne=Math.min(T.y,C.clientY),xe=Math.max(T.x,C.clientX),Se=Math.max(T.y,C.clientY),je=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(pt=>{if(!(pt instanceof HTMLElement)||Ro(pt,"[data-feedback-toolbar]")||Ro(pt,"[data-annotation-marker]"))return;let Ue=pt.getBoundingClientRect();Ue.width>window.innerWidth*.8&&Ue.height>window.innerHeight*.5||Ue.width<10||Ue.height<10||Ue.left<xe&&Ue.right>M&&Ue.top<Se&&Ue.bottom>ne&&je.push({element:pt,rect:Ue})});let Ke=je.filter(({element:pt})=>!je.some(({element:Ue})=>Ue!==pt&&pt.contains(Ue))),Tt=C.clientX/window.innerWidth*100,Gt=C.clientY+window.scrollY;if(Ke.length>0){let pt=Ke.reduce((dr,{rect:Mt})=>({left:Math.min(dr.left,Mt.left),top:Math.min(dr.top,Mt.top),right:Math.max(dr.right,Mt.right),bottom:Math.max(dr.bottom,Mt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Ue=Ke.slice(0,5).map(({element:dr})=>ou(dr).name).join(", "),cr=Ke.length>5?` +${Ke.length-5} more`:"",Rn=Ke[0].element,Er=ih(Rn),Cn=lh(Rn);et({x:Tt,y:Gt,clientY:C.clientY,element:`${Ke.length} elements: ${Ue}${cr}`,elementPath:"multi-select",boundingBox:{x:pt.left,y:pt.top+window.scrollY,width:pt.right-pt.left,height:pt.bottom-pt.top},isMultiSelect:!0,fullPath:uh(Rn),accessibility:sh(Rn),computedStyles:Cn,computedStylesObj:Er,nearbyElements:ah(Rn),cssClasses:Yc(Rn),nearbyText:Wc(Rn),sourceFile:_h(Rn)})}else{let pt=Math.abs(xe-M),Ue=Math.abs(Se-ne);pt>20&&Ue>20&&et({x:Tt,y:Gt,clientY:C.clientY,element:"Area selection",elementPath:`region at (${Math.round(M)}, ${Math.round(ne)})`,boundingBox:{x:M,y:ne+window.scrollY,width:pt,height:Ue},isMultiSelect:!0})}we(null)}else R&&(wn.current=!0);Yt.current=null,Qt.current=null,Ot(!1),pn.current&&(pn.current.innerHTML="")};return document.addEventListener("mouseup",b),()=>document.removeEventListener("mouseup",b)},[pe,Le]);let ra=(0,z.useCallback)(async(b,C,R)=>{let T=mt.webhookUrl||ee;if(!T||!mt.webhooksEnabled&&!R)return!1;try{return(await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:b,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...C})})).ok}catch(M){return console.warn("[Agentation] Webhook failed:",M),!1}},[ee,mt.webhookUrl,mt.webhooksEnabled]),pu=(0,z.useCallback)(b=>{if(!de)return;let C={id:Date.now().toString(),x:de.x,y:de.y,comment:b,element:de.element,elementPath:de.elementPath,timestamp:Date.now(),selectedText:de.selectedText,boundingBox:de.boundingBox,nearbyText:de.nearbyText,cssClasses:de.cssClasses,isMultiSelect:de.isMultiSelect,isFixed:de.isFixed,fullPath:de.fullPath,accessibility:de.accessibility,computedStyles:de.computedStyles,nearbyElements:de.nearbyElements,reactComponents:de.reactComponents,sourceFile:de.sourceFile,elementBoundingBoxes:de.elementBoundingBoxes,...N&&xn?{sessionId:xn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};_e(R=>[...R,C]),nr.current=C.id,bt(()=>{nr.current=null},300),bt(()=>{Ha(R=>new Set(R).add(C.id))},250),h?.(C),ra("annotation.add",{annotation:C}),q(!0),bt(()=>{et(null),q(!1)},150),window.getSelection()?.removeAllRanges(),N&&xn&&tu(N,xn,C).then(R=>{R.id!==C.id&&(_e(T=>T.map(M=>M.id===C.id?{...M,id:R.id}:M)),Ha(T=>{let M=new Set(T);return M.delete(C.id),M.add(R.id),M}))}).catch(R=>{console.warn("[Agentation] Failed to sync annotation:",R)})},[de,h,ra,N,xn]),yl=(0,z.useCallback)(()=>{q(!0),bt(()=>{et(null),q(!1)},150)},[]),vl=(0,z.useCallback)(b=>{let C=K.findIndex(T=>T.id===b),R=K[C];tt?.id===b&&(ot(!0),bt(()=>{se(null),st(null),We([]),ot(!1)},150)),yn(b),S(T=>new Set(T).add(b)),R&&(p?.(R),ra("annotation.delete",{annotation:R})),N&&dl(N,b).catch(T=>{console.warn("[Agentation] Failed to delete annotation from server:",T)}),bt(()=>{_e(T=>T.filter(M=>M.id!==b)),S(T=>{let M=new Set(T);return M.delete(b),M}),yn(null),C<K.length-1&&(Ln(C),bt(()=>Ln(null),200))},150)},[K,tt,p,ra,N]),ss=(0,z.useCallback)(b=>{if(!b){tr(null),En(null),gn([]);return}if(tr(b.id),b.elementBoundingBoxes?.length){let C=[];for(let R of b.elementBoundingBoxes){let T=R.x+R.width/2,M=R.y+R.height/2-window.scrollY,xe=document.elementsFromPoint(T,M).find(Se=>!Se.closest("[data-annotation-marker]")&&!Se.closest("[data-agentation-root]"));xe&&C.push(xe)}gn(C),En(null)}else if(b.boundingBox){let C=b.boundingBox,R=C.x+C.width/2,T=b.isFixed?C.y+C.height/2:C.y+C.height/2-window.scrollY,M=Kl(R,T);if(M){let ne=M.getBoundingClientRect(),xe=ne.width/C.width,Se=ne.height/C.height;xe<.5||Se<.5?En(null):En(M)}else En(null);gn([])}else En(null),gn([])},[]),us=(0,z.useCallback)(b=>{if(!tt)return;let C={...tt,comment:b};_e(R=>R.map(T=>T.id===tt.id?C:T)),y?.(C),ra("annotation.update",{annotation:C}),N&&pb(N,tt.id,{comment:b}).catch(R=>{console.warn("[Agentation] Failed to update annotation on server:",R)}),ot(!0),bt(()=>{se(null),st(null),We([]),ot(!1)},150)},[tt,y,ra,N]),td=(0,z.useCallback)(()=>{ot(!0),bt(()=>{se(null),st(null),We([]),ot(!1)},150)},[]),gr=(0,z.useCallback)(()=>{let b=K.length,C=Pe.length>0||!!fe;if(b===0&&fo.length===0&&!C)return;if(d?.(K),ra("annotations.clear",{annotations:K}),N){Promise.all(K.map(M=>dl(N,M.id).catch(ne=>{console.warn("[Agentation] Failed to delete annotation from server:",ne)})));for(let[,M]of ha.current)M&&dl(N,M).catch(()=>{});ha.current.clear();for(let[,M]of pa.current)M&&dl(N,M).catch(()=>{});pa.current.clear()}lr(!0),ir(!0),fl([]);let R=na.current;if(R){let M=R.getContext("2d");M&&M.clearRect(0,0,R.width,R.height)}(Pe.length>0||fe)&&(uo(M=>M+1),co(M=>M+1),bt(()=>{nn([]),kt(null)},200)),lt&&fn(!1),On&&k(""),Nt.current={rearrange:null,placements:[]},fh(at);let T=b*30+200;bt(()=>{_e([]),Ha(new Set),localStorage.removeItem(yh(at)),lr(!1)},T),bt(()=>ir(!1),1500)},[at,K,fo,Pe,fe,lt,On,d,ra,N]),jo=(0,z.useCallback)(async()=>{let b=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at,C=Oe&&lt,R;if(C){if(Pe.length===0&&!fe&&!On)return;R=""}else{if(R=gb(K,b,mt.outputDetail),!R&&fo.length===0&&Pe.length===0&&!fe)return;R||(R=`## Page Feedback: ${b}
`)}if(!C&&fo.length>0){let T=new Set;for(let Se of K)Se.drawingIndex!=null&&T.add(Se.drawingIndex);let M=na.current;M&&(M.style.visibility="hidden");let ne=[],xe=window.scrollY;for(let Se=0;Se<fo.length;Se++){if(T.has(Se))continue;let je=fo[Se];if(je.points.length<2)continue;let nt=je.fixed?je.points:je.points.map(zn=>({x:zn.x,y:zn.y-xe})),Ke=1/0,Tt=1/0,Gt=-1/0,pt=-1/0;for(let zn of nt)Ke=Math.min(Ke,zn.x),Tt=Math.min(Tt,zn.y),Gt=Math.max(Gt,zn.x),pt=Math.max(pt,zn.y);let Ue=Gt-Ke,cr=pt-Tt,Rn=Math.hypot(Ue,cr),Er=nt[0],Cn=nt[nt.length-1],dr=Math.hypot(Cn.x-Er.x,Cn.y-Er.y),Mt,Pt=dr<Rn*.35,qn=Ue/Math.max(cr,1);if(Pt&&Rn>20){let zn=Math.max(Ue,cr)*.15,Wo=0;for(let Fa of nt){let Fi=Fa.x-Ke<zn,xh=Gt-Fa.x<zn,wh=Fa.y-Tt<zn,Ch=pt-Fa.y<zn;(Fi||xh)&&(wh||Ch)&&Wo++}Mt=Wo>nt.length*.15?"box":"circle"}else qn>3&&cr<40?Mt="underline":dr>Rn*.5?Mt="arrow":Mt="drawing";let or=Math.min(10,nt.length),Do=Math.max(1,Math.floor(nt.length/or)),Lo=new Set,$r=[],bl=[Er];for(let zn=Do;zn<nt.length-1;zn+=Do)bl.push(nt[zn]);bl.push(Cn);for(let zn of bl){let Wo=Kl(zn.x,zn.y);if(!Wo||Lo.has(Wo)||Ro(Wo,"[data-feedback-toolbar]"))continue;Lo.add(Wo);let{name:Fa}=ou(Wo);$r.includes(Fa)||$r.push(Fa)}let fi=`${Math.round(Ke)},${Math.round(Tt)} \u2192 ${Math.round(Gt)},${Math.round(pt)}`,oa;(Mt==="circle"||Mt==="box")&&$r.length>0?oa=`${Mt==="box"?"Boxed":"Circled"} **${$r[0]}**${$r.length>1?` (and ${$r.slice(1).join(", ")})`:""} (region: ${fi})`:Mt==="underline"&&$r.length>0?oa=`Underlined **${$r[0]}** (${fi})`:Mt==="arrow"&&$r.length>=2?oa=`Arrow from **${$r[0]}** to **${$r[$r.length-1]}** (${Math.round(Er.x)},${Math.round(Er.y)} \u2192 ${Math.round(Cn.x)},${Math.round(Cn.y)})`:$r.length>0?oa=`${Mt==="arrow"?"Arrow":"Drawing"} near **${$r.join("**, **")}** (region: ${fi})`:oa=`Drawing at ${fi}`,ne.push(oa)}M&&(M.style.visibility=""),ne.length>0&&(R+=`
**Drawings:**
`,ne.forEach((Se,je)=>{R+=`${je+1}. ${Se}
`}))}if((Pe.length>0||C&&On)&&(R+=`
`+cb(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:lt,wireframePurpose:On||void 0},mt.outputDetail)),fe){let T=db(fe,mt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(R+=`
`+T)}if(Y)try{await navigator.clipboard.writeText(R)}catch{}I?.(R),sn(!0),bt(()=>sn(!1),2e3),mt.autoClearAfterCopy&&bt(()=>gr(),500)},[K,fo,Pe,fe,lt,Oe,wr,On,at,mt.outputDetail,mr,mt.autoClearAfterCopy,gr,Y,I]),rr=(0,z.useCallback)(async()=>{let b=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:at,C=gb(K,b,mt.outputDetail);if(!C&&Pe.length===0&&!fe)return;if(C||(C=`## Page Feedback: ${b}
`),Pe.length>0&&(C+=`
`+cb(Pe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:lt,wireframePurpose:On||void 0},mt.outputDetail)),fe){let T=db(fe,mt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(C+=`
`+T)}E&&E(C,K),Sn("sending"),await new Promise(T=>bt(T,150));let R=await ra("submit",{output:C,annotations:K},!0);Sn(R?"sent":"failed"),bt(()=>Sn("idle"),2500),R&&mt.autoClearAfterCopy&&bt(()=>gr(),500)},[E,ra,K,Pe,fe,lt,wr,at,mt.outputDetail,mr,mt.autoClearAfterCopy,gr]);(0,z.useEffect)(()=>{if(!Po)return;let b=10,C=T=>{let M=T.clientX-Po.x,ne=T.clientY-Po.y,xe=Math.sqrt(M*M+ne*ne);if(!Fo&&xe>b&&ya(!0),Fo||xe>b){let Se=Po.toolbarX+M,je=Po.toolbarY+ne,nt=20,Ke=337,Tt=44,pt=Ke-(pe?Sr==="connected"?297:257:44),Ue=nt-pt,cr=window.innerWidth-nt-Ke;Se=Math.max(Ue,Math.min(cr,Se)),je=Math.max(nt,Math.min(window.innerHeight-Tt-nt,je)),Ua({x:Se,y:je})}},R=()=>{Fo&&(Ii.current=!0),ya(!1),li(null)};return document.addEventListener("mousemove",C),document.addEventListener("mouseup",R),()=>{document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",R)}},[Po,Fo,pe,Sr]);let va=(0,z.useCallback)(b=>{if(b.target.closest("button")||b.target.closest("[data-agentation-settings-panel]"))return;let C=b.currentTarget.parentElement;if(!C)return;let R=C.getBoundingClientRect(),T=Bn?.x??R.left,M=Bn?.y??R.top;li({x:b.clientX,y:b.clientY,toolbarX:T,toolbarY:M})},[Bn]);if((0,z.useEffect)(()=>{if(!Bn)return;let b=()=>{let M=Bn.x,ne=Bn.y,je=20-(337-(pe?Sr==="connected"?297:257:44)),nt=window.innerWidth-20-337;M=Math.max(je,Math.min(nt,M)),ne=Math.max(20,Math.min(window.innerHeight-44-20,ne)),(M!==Bn.x||ne!==Bn.y)&&Ua({x:M,y:ne})};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[Bn,pe,Sr]),(0,z.useEffect)(()=>{let b=C=>{let R=C.target,T=R.tagName==="INPUT"||R.tagName==="TEXTAREA"||R.isContentEditable;if(C.key==="Escape"){if(Oe){qt?Lt(null):ml();return}if(Kr){Ai(!1);return}if(An.length>0){Uo([]);return}de||pe&&(Lr(),Q(!1))}if((C.metaKey||C.ctrlKey)&&C.shiftKey&&(C.key==="f"||C.key==="F")){C.preventDefault(),Lr(),pe?is():Q(!0);return}if(!(T||C.metaKey||C.ctrlKey)&&((C.key==="p"||C.key==="P")&&(C.preventDefault(),Lr(),ls()),(C.key==="l"||C.key==="L")&&(C.preventDefault(),Lr(),Kr&&Ai(!1),B&&ae(!1),de&&yl(),Oe?ml():ct(!0)),(C.key==="h"||C.key==="H")&&K.length>0&&(C.preventDefault(),Lr(),De(M=>!M)),(C.key==="c"||C.key==="C")&&(K.length>0||Pe.length>0||fe)&&(C.preventDefault(),Lr(),jo()),(C.key==="x"||C.key==="X")&&(K.length>0||Pe.length>0||fe)&&(C.preventDefault(),Lr(),gr(),Pe.length>0&&nn([]),fe&&kt(null)),C.key==="s"||C.key==="S")){let M=ti(mt.webhookUrl)||ti(ee||"");K.length>0&&M&&bn==="idle"&&(C.preventDefault(),Lr(),rr())}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[pe,Kr,Oe,qt,Pe,fe,de,K.length,mt.webhookUrl,ee,bn,rr,ls,jo,gr,An]),!Ge||Qe)return null;let di=K.length>0,ba=K.filter(b=>!_.has(b.id)&&b.kind!=="placement"&&b.kind!=="rearrange"),bh=ba.length>0,Hi=K.filter(b=>_.has(b.id)),nd=b=>{let ne=b.x/100*window.innerWidth,xe=typeof b.y=="string"?parseFloat(b.y):b.y,Se={};window.innerHeight-xe-22-10<80&&(Se.top="auto",Se.bottom="calc(100% + 10px)");let nt=ne-200/2,Ke=10;if(nt<Ke){let Tt=Ke-nt;Se.left=`calc(50% + ${Tt}px)`}else if(nt+200>window.innerWidth-Ke){let Tt=nt+200-(window.innerWidth-Ke);Se.left=`calc(50% - ${Tt}px)`}return Se};return(0,Cb.createPortal)((0,he.jsxs)("div",{ref:vt,style:{display:"contents"},"data-agentation-theme":Ar?"dark":"light","data-agentation-accent":mt.annotationColorId,"data-agentation-root":"",children:[(0,he.jsx)("div",{className:`${ce.toolbar}${P?` ${P}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Bn?{left:Bn.x,top:Bn.y,right:"auto",bottom:"auto"}:void 0,children:(0,he.jsxs)("div",{className:`${ce.toolbarContainer} ${pe?ce.expanded:ce.collapsed} ${kr?ce.entrance:""} ${ye?ce.hiding:""} ${!mt.webhooksEnabled&&(ti(mt.webhookUrl)||ti(ee||""))?ce.serverConnected:""}`,onClick:pe?void 0:b=>{if(Ii.current){Ii.current=!1,b.preventDefault();return}Q(!0)},onMouseDown:va,role:pe?void 0:"button",tabIndex:pe?-1:0,title:pe?void 0:"Start feedback mode",children:[(0,he.jsxs)("div",{className:`${ce.toggleContent} ${pe?ce.hidden:ce.visible}`,children:[(0,he.jsx)(Q3,{size:24}),bh&&(0,he.jsx)("span",{className:`${ce.badge} ${pe?ce.fadeOut:""} ${kr?ce.entrance:""}`,children:ba.length})]}),(0,he.jsxs)("div",{className:`${ce.controlsContent} ${pe?ce.visible:ce.hidden} ${Bn&&Bn.y<100?ce.tooltipBelow:""} ${Ct||B?ce.tooltipsHidden:""} ${ai?ce.tooltipsInSession:""}`,onMouseEnter:Bt,onMouseLeave:os,children:[(0,he.jsxs)("div",{className:`${ce.buttonWrapper} ${Bn&&Bn.x<120?ce.buttonWrapperAlignLeft:""}`,children:[(0,he.jsx)("button",{className:ce.controlButton,onClick:b=>{b.stopPropagation(),Lr(),ls()},"data-active":j,children:(0,he.jsx)(J3,{size:24,isPaused:j})}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:[j?"Resume animations":"Pause animations",(0,he.jsx)("span",{className:ce.shortcut,children:"P"})]})]}),(0,he.jsxs)("div",{className:ce.buttonWrapper,children:[(0,he.jsx)("button",{className:`${ce.controlButton} ${Ar?"":ce.light}`,onClick:b=>{b.stopPropagation(),Lr(),Kr&&Ai(!1),B&&ae(!1),de&&yl(),Oe?ml():ct(!0)},"data-active":Oe,style:Oe&&lt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,he.jsx)(s8,{size:21})}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:[Oe?"Exit layout mode":"Layout mode",(0,he.jsx)("span",{className:ce.shortcut,children:"L"})]})]}),(0,he.jsxs)("div",{className:ce.buttonWrapper,children:[(0,he.jsx)("button",{className:ce.controlButton,onClick:b=>{b.stopPropagation(),Lr(),De(!ge)},disabled:!di||Oe,children:(0,he.jsx)(Z3,{size:24,isOpen:ge})}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:[ge?"Hide markers":"Show markers",(0,he.jsx)("span",{className:ce.shortcut,children:"H"})]})]}),(0,he.jsxs)("div",{className:ce.buttonWrapper,children:[(0,he.jsx)("button",{className:`${ce.controlButton} ${Et?ce.statusShowing:""}`,onClick:b=>{b.stopPropagation(),Lr(),jo()},disabled:Oe&&lt?Pe.length===0&&!fe?.sections?.length:!di&&fo.length===0&&Pe.length===0&&!fe?.sections?.length,"data-active":Et,children:(0,he.jsx)(G3,{size:24,copied:Et,tint:Oe&&lt&&(Pe.length>0||fe?.sections?.length)?"#f97316":void 0})}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:[Oe&&lt?"Copy layout":"Copy feedback",(0,he.jsx)("span",{className:ce.shortcut,children:"C"})]})]}),(0,he.jsxs)("div",{className:`${ce.buttonWrapper} ${ce.sendButtonWrapper} ${pe&&!mt.webhooksEnabled&&(ti(mt.webhookUrl)||ti(ee||""))?ce.sendButtonVisible:""}`,children:[(0,he.jsxs)("button",{className:`${ce.controlButton} ${bn==="sent"||bn==="failed"?ce.statusShowing:""}`,onClick:b=>{b.stopPropagation(),Lr(),rr()},disabled:!di||!ti(mt.webhookUrl)&&!ti(ee||"")||bn==="sending","data-no-hover":bn==="sent"||bn==="failed",tabIndex:ti(mt.webhookUrl)||ti(ee||"")?0:-1,children:[(0,he.jsx)(K3,{size:24,state:bn}),di&&bn==="idle"&&(0,he.jsx)("span",{className:ce.buttonBadge,children:K.length})]}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:["Send Annotations",(0,he.jsx)("span",{className:ce.shortcut,children:"S"})]})]}),(0,he.jsxs)("div",{className:ce.buttonWrapper,children:[(0,he.jsx)("button",{className:ce.controlButton,onClick:b=>{b.stopPropagation(),Lr(),gr()},disabled:!di&&fo.length===0&&Pe.length===0&&!fe?.sections?.length,"data-danger":!0,children:(0,he.jsx)(t8,{size:24})}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:["Clear all",(0,he.jsx)("span",{className:ce.shortcut,children:"X"})]})]}),(0,he.jsxs)("div",{className:ce.buttonWrapper,children:[(0,he.jsx)("button",{className:ce.controlButton,onClick:b=>{b.stopPropagation(),Lr(),Oe&&ml(),ae(!B)},children:(0,he.jsx)(e8,{size:24})}),N&&Sr!=="disconnected"&&(0,he.jsx)("span",{className:`${ce.mcpIndicator} ${ce[Sr]} ${B?ce.hidden:""}`,title:Sr==="connected"?"MCP Connected":"MCP Connecting..."}),(0,he.jsx)("span",{className:ce.buttonTooltip,children:"Settings"})]}),(0,he.jsx)("div",{className:ce.divider}),(0,he.jsxs)("div",{className:`${ce.buttonWrapper} ${Bn&&typeof window<"u"&&Bn.x>window.innerWidth-120?ce.buttonWrapperAlignRight:""}`,children:[(0,he.jsx)("button",{className:ce.controlButton,onClick:b=>{b.stopPropagation(),Lr(),is()},children:(0,he.jsx)(n8,{size:24})}),(0,he.jsxs)("span",{className:ce.buttonTooltip,children:["Exit",(0,he.jsx)("span",{className:ce.shortcut,children:"Esc"})]})]})]}),(0,he.jsx)(B7,{visible:Oe&&pe,activeType:qt,onSelect:b=>{Lt(qt===b?null:b)},isDarkMode:Ar,sectionCount:fe?.sections.length??0,onDetectSections:()=>{let b=Q7(),C=fe?.sections??[],R=new Set(C.map(xe=>xe.selector)),T=b.filter(xe=>!R.has(xe.selector)),M=[...C,...T],ne=[...fe?.originalOrder??[],...T.map(xe=>xe.id)];kt({sections:M,originalOrder:ne,detectedAt:Date.now()})},placementCount:Pe.length,onClearPlacements:()=>{uo(b=>b+1),co(b=>b+1),bt(()=>{kt({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:lt,onBlankCanvasChange:b=>{let C={sections:[],originalOrder:[],detectedAt:Date.now()};b?(ht.current={rearrange:fe,placements:Pe},kt(Nt.current.rearrange||C),nn(Nt.current.placements),Lt(null)):(Nt.current={rearrange:fe,placements:Pe},kt(ht.current.rearrange||C),nn(ht.current.placements)),fn(b)},wireframePurpose:On,onWireframePurposeChange:k,Tooltip:Jl,onDragStart:(b,C)=>{C.preventDefault();let R=Fe[b],T=null,M=!1,ne=C.clientX,xe=C.clientY,je=C.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,nt=Tt=>{let Gt=Tt.clientX-ne,pt=Tt.clientY-xe;if(!M&&(Math.abs(Gt)>4||Math.abs(pt)>4)&&(M=!0,T=document.createElement("div"),T.className=`${re.dragPreview}${lt?` ${re.dragPreviewWireframe}`:""}`,document.body.appendChild(T)),!T)return;let Ue=Math.max(0,je-Tt.clientY),cr=Math.min(1,Ue/180),Rn=1-Math.pow(1-cr,2),Er=28,Cn=20,dr=Math.min(140,R.width*.18),Mt=Math.min(90,R.height*.18),Pt=Er+(dr-Er)*Rn,qn=Cn+(Mt-Cn)*Rn;T.style.width=`${Pt}px`,T.style.height=`${qn}px`,T.style.left=`${Tt.clientX-Pt/2}px`,T.style.top=`${Tt.clientY-qn/2}px`,T.style.opacity=`${.5+.5*Rn}`,T.textContent=Rn>.25?b:""},Ke=Tt=>{if(window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",Ke),T&&document.body.removeChild(T),M){let Gt=R.width,pt=R.height,Ue=window.scrollY,cr=Math.max(0,Tt.clientX-Gt/2),Rn=Math.max(0,Tt.clientY+Ue-pt/2),Er={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:b,x:cr,y:Rn,width:Gt,height:pt,scrollY:Ue,timestamp:Date.now()};nn(Cn=>[...Cn,Er]),Lt(null),Rt.current=new Set,Nn(Cn=>Cn+1)}};window.addEventListener("mousemove",nt),window.addEventListener("mouseup",Ke)}}),(0,he.jsx)(rE,{settings:mt,onSettingsChange:b=>Ba(C=>({...C,...b})),isDarkMode:Ar,onToggleTheme:cu,isDevMode:vo,connectionStatus:Sr,endpoint:N,isVisible:ve,toolbarNearBottom:!!Bn&&Bn.y<230,settingsPage:Me,onSettingsPageChange:ze,onHideToolbar:vh})]})}),(Oe||Ye)&&(0,he.jsx)("div",{className:`${re.blankCanvas} ${Jn?re.visible:""} ${le?re.gridActive:""}`,style:{"--canvas-opacity":_r},"data-feedback-toolbar":!0}),Oe&&lt&&Jn&&(0,he.jsxs)("div",{className:re.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,he.jsxs)("div",{className:re.wireframeOpacityRow,children:[(0,he.jsx)("span",{className:re.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,he.jsx)("input",{type:"range",className:re.wireframeOpacitySlider,min:0,max:1,step:.01,value:_r,onChange:b=>Vn(Number(b.target.value))})]}),(0,he.jsxs)("div",{className:re.wireframeNoticeTitleRow,children:[(0,he.jsx)("span",{className:re.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,he.jsx)("span",{className:re.wireframeNoticeDivider}),(0,he.jsx)("button",{className:re.wireframeStartOver,onClick:()=>{uo(b=>b+1),kt({sections:[],originalOrder:[],detectedAt:Date.now()}),Nt.current={rearrange:null,placements:[]},k(""),fh(at)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,he.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(Oe||Ye)&&(0,he.jsx)(O7,{placements:Pe,onChange:nn,activeComponent:Ye?null:qt,onActiveComponentChange:Lt,isDarkMode:Ar,exiting:Ye,onInteractionChange:Ce,passthrough:!qt,extraSnapRects:fe?.sections.map(b=>b.currentRect),deselectSignal:Cr,clearSignal:ta,wireframe:lt,onSelectionChange:(b,C)=>{Rt.current=b,C||(yo.current=new Set,Wr(R=>R+1))},onDragMove:(b,C)=>{let R=yo.current;if(!(!R.size||!fe)){if(!Gr.current){Gr.current=new Map;for(let T of fe.sections)R.has(T.id)&&Gr.current.set(T.id,{x:T.currentRect.x,y:T.currentRect.y})}for(let T of fe.sections){if(!R.has(T.id)||!Gr.current.get(T.id))continue;let ne=document.querySelector(`[data-rearrange-section="${T.id}"]`);ne&&(ne.style.transform=`translate(${b}px, ${C}px)`)}}},onDragEnd:(b,C,R)=>{let T=yo.current,M=Gr.current;if(Gr.current=null,!(!T.size||!fe||!M)){for(let ne of T){let xe=document.querySelector(`[data-rearrange-section="${ne}"]`);xe&&(xe.style.transform="")}R&&kt(ne=>ne&&{...ne,sections:ne.sections.map(xe=>{let Se=M.get(xe.id);return Se?{...xe,currentRect:{...xe.currentRect,x:Math.max(0,Se.x+b),y:Math.max(0,Se.y+C)}}:xe})})}}}),(Oe||Ye)&&fe&&(0,he.jsx)(K7,{rearrangeState:fe,onChange:kt,isDarkMode:Ar,exiting:Ye,blankCanvas:lt,extraSnapRects:Pe.map(b=>({x:b.x,y:b.y,width:b.width,height:b.height})),clearSignal:Dr,deselectSignal:Xn,onSelectionChange:(b,C)=>{yo.current=b,C||(Rt.current=new Set,Nn(R=>R+1))},onDragMove:(b,C)=>{let R=Rt.current;if(R.size){if(!Gr.current){Gr.current=new Map;for(let T of Pe)R.has(T.id)&&Gr.current.set(T.id,{x:T.x,y:T.y})}for(let T of R){let M=document.querySelector(`[data-design-placement="${T}"]`);M&&(M.style.transform=`translate(${b}px, ${C}px)`)}}},onDragEnd:(b,C,R)=>{let T=Rt.current,M=Gr.current;if(Gr.current=null,!(!T.size||!M)){for(let ne of T){let xe=document.querySelector(`[data-design-placement="${ne}"]`);xe&&(xe.style.transform="")}R&&nn(ne=>ne.map(xe=>{let Se=M.get(xe.id);return Se?{...xe,x:Math.max(0,Se.x+b),y:Math.max(0,Se.y+C)}:xe}))}}}),(0,he.jsx)("canvas",{ref:na,className:`${ce.drawCanvas} ${Kr?ce.active:""}`,style:{opacity:ci?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,he.jsxs)("div",{className:ce.markersLayer,"data-feedback-toolbar":!0,children:[gt&&ba.filter(b=>!b.isFixed).map((b,C,R)=>(0,he.jsx)(yb,{annotation:b,globalIndex:ba.findIndex(T=>T.id===b.id),layerIndex:C,layerSize:R.length,isExiting:dt,isClearing:br,isAnimated:pl.has(b.id),isHovered:!dt&&sr===b.id,isDeleting:In===b.id,isEditingAny:!!tt,renumberFrom:Zn,markerClickBehavior:mt.markerClickBehavior,tooltipStyle:nd(b),onHoverEnter:T=>!dt&&T.id!==nr.current&&ss(T),onHoverLeave:()=>ss(null),onClick:T=>mt.markerClickBehavior==="delete"?vl(T.id):Mo(T),onContextMenu:Mo},b.id)),gt&&!dt&&Hi.filter(b=>!b.isFixed).map(b=>(0,he.jsx)(vb,{annotation:b},b.id))]}),(0,he.jsxs)("div",{className:ce.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[gt&&ba.filter(b=>b.isFixed).map((b,C,R)=>(0,he.jsx)(yb,{annotation:b,globalIndex:ba.findIndex(T=>T.id===b.id),layerIndex:C,layerSize:R.length,isExiting:dt,isClearing:br,isAnimated:pl.has(b.id),isHovered:!dt&&sr===b.id,isDeleting:In===b.id,isEditingAny:!!tt,renumberFrom:Zn,markerClickBehavior:mt.markerClickBehavior,tooltipStyle:nd(b),onHoverEnter:T=>!dt&&T.id!==nr.current&&ss(T),onHoverLeave:()=>ss(null),onClick:T=>mt.markerClickBehavior==="delete"?vl(T.id):Mo(T),onContextMenu:Mo},b.id)),gt&&!dt&&Hi.filter(b=>b.isFixed).map(b=>(0,he.jsx)(vb,{annotation:b,fixed:!0},b.id))]}),pe&&(0,he.jsxs)("div",{className:ce.overlay,"data-feedback-toolbar":!0,style:de||tt?{zIndex:99999}:void 0,children:[He?.rect&&!de&&!Ht&&!Le&&(0,he.jsx)("div",{className:`${ce.hoverHighlight} ${ce.enter}`,style:{left:He.rect.left,top:He.rect.top,width:He.rect.width,height:He.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),An.filter(b=>document.contains(b.element)).map((b,C)=>{let R=b.element.getBoundingClientRect(),T=An.length>1;return(0,he.jsx)("div",{className:T?ce.multiSelectOutline:ce.singleSelectOutline,style:{position:"fixed",left:R.left,top:R.top,width:R.width,height:R.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},C)}),sr&&!de&&(()=>{let b=K.find(M=>M.id===sr);if(!b?.boundingBox)return null;if(b.elementBoundingBoxes?.length)return Kn.length>0?Kn.filter(M=>document.contains(M)).map((M,ne)=>{let xe=M.getBoundingClientRect();return(0,he.jsx)("div",{className:`${ce.multiSelectOutline} ${ce.enter}`,style:{left:xe.left,top:xe.top,width:xe.width,height:xe.height}},`hover-outline-live-${ne}`)}):b.elementBoundingBoxes.map((M,ne)=>(0,he.jsx)("div",{className:`${ce.multiSelectOutline} ${ce.enter}`,style:{left:M.x,top:M.y-jt,width:M.width,height:M.height}},`hover-outline-${ne}`));let C=Mr&&document.contains(Mr)?Mr.getBoundingClientRect():null,R=C?{x:C.left,y:C.top,width:C.width,height:C.height}:{x:b.boundingBox.x,y:b.isFixed?b.boundingBox.y:b.boundingBox.y-jt,width:b.boundingBox.width,height:b.boundingBox.height},T=b.isMultiSelect;return(0,he.jsx)("div",{className:`${T?ce.multiSelectOutline:ce.singleSelectOutline} ${ce.enter}`,style:{left:R.x,top:R.y,width:R.width,height:R.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),He&&!de&&!Ht&&!Le&&(0,he.jsxs)("div",{className:`${ce.hoverTooltip} ${ce.enter}`,style:{left:Math.max(8,Math.min(rt.x,window.innerWidth-100)),top:Math.max(rt.y-(He.reactComponents?48:32),8)},children:[He.reactComponents&&(0,he.jsx)("div",{className:ce.hoverReactPath,children:He.reactComponents}),(0,he.jsx)("div",{className:ce.hoverElementName,children:He.elementName})]}),de&&(0,he.jsxs)(he.Fragment,{children:[de.multiSelectElements?.length?de.multiSelectElements.filter(b=>document.contains(b)).map((b,C)=>{let R=b.getBoundingClientRect();return(0,he.jsx)("div",{className:`${ce.multiSelectOutline} ${W?ce.exit:ce.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`pending-multi-${C}`)}):de.targetElement&&document.contains(de.targetElement)?(()=>{let b=de.targetElement.getBoundingClientRect();return(0,he.jsx)("div",{className:`${ce.singleSelectOutline} ${W?ce.exit:ce.enter}`,style:{left:b.left,top:b.top,width:b.width,height:b.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():de.boundingBox&&(0,he.jsx)("div",{className:`${de.isMultiSelect?ce.multiSelectOutline:ce.singleSelectOutline} ${W?ce.exit:ce.enter}`,style:{left:de.boundingBox.x,top:de.boundingBox.y-jt,width:de.boundingBox.width,height:de.boundingBox.height,...de.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let b=de.x,C=de.isFixed?de.y:de.y-jt;return(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)(X9,{x:b,y:C,isMultiSelect:de.isMultiSelect,isExiting:W}),(0,he.jsx)(mh,{ref:_l,element:de.element,selectedText:de.selectedText,computedStyles:de.computedStylesObj,placeholder:de.element==="Area selection"?"What should change in this area?":de.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:pu,onCancel:yl,isExiting:W,lightMode:!Ar,accentColor:de.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,b/100*window.innerWidth)),...C>window.innerHeight-290?{bottom:window.innerHeight-C+20}:{top:C+20}}})]})})()]}),tt&&(0,he.jsxs)(he.Fragment,{children:[tt.elementBoundingBoxes?.length?_t.length>0?_t.filter(b=>document.contains(b)).map((b,C)=>{let R=b.getBoundingClientRect();return(0,he.jsx)("div",{className:`${ce.multiSelectOutline} ${ce.enter}`,style:{left:R.left,top:R.top,width:R.width,height:R.height}},`edit-multi-live-${C}`)}):tt.elementBoundingBoxes.map((b,C)=>(0,he.jsx)("div",{className:`${ce.multiSelectOutline} ${ce.enter}`,style:{left:b.x,top:b.y-jt,width:b.width,height:b.height}},`edit-multi-${C}`)):(()=>{let b=qe&&document.contains(qe)?qe.getBoundingClientRect():null,C=b?{x:b.left,y:b.top,width:b.width,height:b.height}:tt.boundingBox?{x:tt.boundingBox.x,y:tt.isFixed?tt.boundingBox.y:tt.boundingBox.y-jt,width:tt.boundingBox.width,height:tt.boundingBox.height}:null;return C?(0,he.jsx)("div",{className:`${tt.isMultiSelect?ce.multiSelectOutline:ce.singleSelectOutline} ${ce.enter}`,style:{left:C.x,top:C.y,width:C.width,height:C.height,...tt.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),(0,he.jsx)(mh,{ref:zi,element:tt.element,selectedText:tt.selectedText,computedStyles:W7(tt.computedStyles),placeholder:"Edit your feedback...",initialValue:tt.comment,submitLabel:"Save",onSubmit:us,onCancel:td,onDelete:()=>vl(tt.id),isExiting:be,lightMode:!Ar,accentColor:tt.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{let b=tt.isFixed?tt.y:tt.y-jt;return{left:Math.max(160,Math.min(window.innerWidth-160,tt.x/100*window.innerWidth)),...b>window.innerHeight-290?{bottom:window.innerHeight-b+20}:{top:b+20}}})()})]}),Le&&(0,he.jsxs)(he.Fragment,{children:[(0,he.jsx)("div",{ref:hn,className:ce.dragSelection}),(0,he.jsx)("div",{ref:pn,className:ce.highlightsContainer})]})]})]}),document.body)}var Wg=Un(so());function jg(){if(typeof window>"u"||typeof document>"u")return;let a=new URLSearchParams(window.location.search),l=a.get("agentation")==="true"||a.get("agentation")==="1",u=a.get("agentation")==="false"||a.get("agentation")==="0",h=window.__AGENTATION_CONFIG__||{};if(!(!u&&(l||h.enabled===!0||!0)))return;let d=document.getElementById("agentation-root");d||(d=document.createElement("div"),d.id="agentation-root",document.body.appendChild(d));let I=h.endpoint||"http://host.docker.internal:4747";try{(0,Wb.createRoot)(d).render((0,Wg.jsx)(jb.default.StrictMode,{children:(0,Wg.jsx)(Pb,{endpoint:I,sessionId:h.sessionId})}))}catch(E){console.warn("[Agentation] Failed to mount overlay:",E)}}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",jg):jg());return P3(iE);})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
  (**
   * Checks if an event is supported in the current execution environment.
   *
   * NOTE: This will not work correctly for non-generic events such as `change`,
   * `reset`, `load`, `error`, and `select`.
   *
   * Borrows from Modernizr.
   *
   * @param {string} eventNameSuffix Event name, e.g. "click".
   * @return {boolean} True if the event is supported.
   * @internal
   * @license Modernizr 3.0.0pre (Custom Build) | MIT
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/

if (self.CavalryLogger) { CavalryLogger.start_js(["7y7INFY"]); }

__d("NullStateMedia112.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 112 112",width:"1em",height:"1em"},a,{children:[a.title!=null&&h.jsx("title",{children:a.title}),a.children!=null&&h.jsx("defs",{children:a.children}),h.jsxs("g",{transform:"translate(-1 6)",children:[h.jsx("path",{d:"M18.5 12h86c4.7 0 8.5 3.9 8.5 8.7v70.6c0 4.8-3.8 8.7-8.5 8.7h-86a8.6 8.6 0 0 1-8.5-8.7V20.7c0-4.8 3.8-8.7 8.5-8.7z"}),h.jsx("path",{d:"M8.5 0h86c4.7 0 8.5 3.9 8.5 8.7v70.6c0 4.8-3.8 8.7-8.5 8.7h-86A8.6 8.6 0 0 1 0 79.3V8.7C0 3.9 3.8 0 8.5 0z"}),h.jsx("path",{d:"M86.8 13 103 34.3v45.1c0 4.8-3.8 8.6-8.5 8.6H7.8A8.5 8.5 0 0 1 0 82.8l34.6-45.7 16.7 16.7L86.8 13z"}),h.jsx("circle",{cx:18.5,cy:22.5,r:8.5})]})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("StoriesCometLeftRailLayout.react",["CometRouteRenderType","CometSection.react","MWChatOnMediaVisibilityOverrideContext","gkx","react","stylex","useMWIsCurrentRouteMediaViewerExperiment","useShouldShowMessagingEntrypointOnCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("gkx")("708253");function a(a){var b=a.children,e=a.hasRightRail,f=a.hideLeftRail;a=a.leftRail;var g=d("CometRouteRenderType").useIsHosted(),j=d("CometRouteRenderType").useIsPushView(),k=c("useShouldShowMessagingEntrypointOnCurrentRoute")("CHAT"),l=c("useMWIsCurrentRouteMediaViewerExperiment")();l=d("MWChatOnMediaVisibilityOverrideContext").useMWChatOnMediaVisibilityOverride(l);k=k&&l;l=g||!!f;g=h.jsx("div",{className:"o36gj0jk datstx6m hybvsw6c"+(e?" ltb2cvov f0t0fhil":"")+(e&&k?" ac6d9p2t":"")+(l?" mkhogb32":""),children:h.jsx(c("CometSection.react"),{className:c("stylex").dedupe({"background-color-1":"hybvsw6c","bottom-1":"i09qtzwb","font-size-1":"e9vueds3","height-1":"idiwt2bm","overflow-y-1":"eg9m0zos","position-1":"poy2od1o","top-1":"be9z9djy","width-1":"iyyx5f41"},i?null:{"top-1":"t38bcc6f"}),role:"navigation",children:a})});return h.jsxs("div",{className:"k4urcfbm j83agx80",children:[g,i&&j?h.jsx("div",{className:"kr520xx4 j9ispegn pmk7jnqg hzruof5a byvelhso n7fi1qx3 bfjqzvhc"}):null,h.jsx("div",{className:"l9j0dhe7 buofh1pr",children:b})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCometListItemGlimmer.react",["BaseGlimmer.react","BaseLoadingStateElement.react","Random","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a){babelHelpers.inheritsLoose(b,a);function b(){var b,c;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(b=c=a.call.apply(a,[this].concat(f))||this,c.itemSizes=Array(c.props.numberOfItems).fill().map(function(){return Math.floor(d("Random").random()*4)}),b)||babelHelpers.assertThisInitialized(c)}var e=b.prototype;e.render=function(){var a=this,b=this.itemSizes;return h.jsx(c("BaseLoadingStateElement.react"),{children:b.map(function(b,d){return h.jsxs("div",{className:"tw6a2znq sj5x9vvc d1544ag0 cxgpxx05 kkf49tns dicw6rsg cgat1ltu rs0gx3tq jifvfom9 j83agx80"+(a.props.isFriends?" cb02d2ww":""),children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex").dedupe({"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","height-1":"cb02d2ww","width-1":"ljni7pan"},a.props.isViewerSheet!==!0?{"height-1":"tv7at329","width-1":"thwo4zme"}:null),index:d}),h.jsx("div",{className:"h676nmdw dicw6rsg oi9244e8 rs0gx3tq buofh1pr j83agx80 bp9cbjyn",children:h.jsxs("div",{className:"buofh1pr",children:[h.jsx(c("BaseGlimmer.react"),{className:c("stylex").dedupe({"border-top-start-radius-1":"fni8adji","border-top-end-radius-1":"hgaippwi","border-bottom-end-radius-1":"fykbt5ly","border-bottom-start-radius-1":"ns4ygwem","height-1":"jnigpg78","margin-bottom-1":"dicw6rsg"},b===0?{"width-1":"n99xedck"}:null,b===1?{"width-1":"jico2p30"}:null,b===2?{"width-1":"ptrm0iwj"}:null,b===3?{"width-1":"k4urcfbm"}:null),index:d}),h.jsx(c("BaseGlimmer.react"),{className:"emzexkp1 aov4n071 ed3p1gfi ns4ygwem fykbt5ly hgaippwi fni8adji",index:d})]})})]},d)})})};return b}(h.PureComponent);a.defaultProps={isFriends:!1,numberOfItems:1};g["default"]=a}),98);
__d("StoriesCardHeaderGlimmer.react",["BaseGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isBackgroundBucket;a=a==null||a===!1;return h.jsxs("div",{className:"jifvfom9 j83agx80",children:[h.jsx(c("BaseGlimmer.react"),{className:"q676j6op qypqp5cg spb7xbtv bkmhp75w emlxlaya s45kfl79",index:0,theme:"light"}),a&&h.jsx("div",{className:"h676nmdw dicw6rsg oi9244e8 rs0gx3tq buofh1pr j83agx80 bp9cbjyn",children:h.jsxs("div",{className:"buofh1pr",children:[h.jsx(c("BaseGlimmer.react"),{className:"ptrm0iwj dicw6rsg i4qgphn6 ns4ygwem fykbt5ly hgaippwi fni8adji",index:0,theme:"light"}),h.jsx(c("BaseGlimmer.react"),{className:"emzexkp1 aov4n071 cyypbtt7 ns4ygwem fykbt5ly hgaippwi fni8adji",index:0,theme:"light"})]})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesBucketLoadingView.react",["StoriesCardHeaderGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){a=a.isBackgroundBucket;return h.jsx("div",{className:"k4urcfbm l9j0dhe7 jifvfom9 datstx6m cbu4d94t j83agx80 ppue9xd8 ll8tlv6m",children:h.jsx("div",{className:"eq70wtua en0ipb6w ozuftl9m",children:h.jsx(c("StoriesCardHeaderGlimmer.react"),{isBackgroundBucket:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesSuspensePauseContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isPaused:!1,setPause:function(a,b){}};c=a.createContext(b);g["default"]=c}),98);
__d("useStoriesViewerClose",["CometRouteRenderType","MessengerEnvironment","StoriesLoggerSession","StoriesLoggingConstants","cr:869845","gkx","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g){"use strict";var h=c("gkx")("708253");function a(){var a=d("CometRouteRenderType").useIsPushView(),e=c("useCometRouterDispatcher")();return function(f){var g=d("StoriesLoggerSession").getOpenViewerSource();d("StoriesLoggerSession").setCloseGesture(f);b("cr:869845")?c("MessengerEnvironment").messengerui?b("cr:869845").getInstance().closeDialogMessenger():g===c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE?b("cr:869845").getInstance().closeArchiveDialogAndRefresh():b("cr:869845").getInstance().navigateToEntryPoint():h&&f===c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.AUTO_EXIT&&(!a&&e&&e.goBack?e.goBack():a&&e&&e.popPushView&&e.popPushView())}}g["default"]=a}),98);
__d("StoriesCloseButton.react",["fbt","ix","CometPressable.react","IconSource","StoriesLoggingConstants","StoriesSuspensePauseContext","TetraIcon.react","cr:1032347","gkx","react","useStoriesViewerClose"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useContext,l=c("gkx")("708253");function a(a){a=a.dark;a=a===void 0?!1:a;var d=c("useStoriesViewerClose")(),e=k(c("StoriesSuspensePauseContext"));e=e.setPause;if(l)return null;var f=function(a){d(c("StoriesLoggingConstants").CLOSE_STORY_GESTURE.CLOSE_BUTTON_EXIT)};a=a?new(c("IconSource"))("FB",i("1351092"),24):new(c("IconSource"))("FB",i("1495001"),24);return j.jsxs("div",{className:"i2p6rm4e heur4gxb art1omkt kmdw4o4n kr520xx4 pmk7jnqg qwwmc0zo n7fi1qx3 j83agx80","data-testid":void 0,children:[b("cr:1032347")&&j.jsx(b("cr:1032347"),{setPause:e}),j.jsx(c("CometPressable.react"),{"aria-label":h._("Close"),display:"inline",onPress:f,overlayDisabled:!0,children:j.jsx("div",{className:"gu00c43d sjgh65i0 wkznzc2l tr9rh885 j83agx80 nhd2j8a9",children:j.jsx(c("TetraIcon.react"),{icon:a,size:24})})})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesUnselected.react",["StoriesCloseButton.react","cr:278","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(){return h.jsxs("div",{className:"k4urcfbm ni8dbmo4 q10oee1b taijpn5t datstx6m cbu4d94t j83agx80 qsy8amke bp9cbjyn",children:[h.jsx(c("StoriesCloseButton.react"),{dark:!0}),h.jsx(b("cr:278"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerOpenAnimationContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={duration:0,getAnimated:function(){return!1},setAnimated:c("emptyFunction"),transform:"",transformOrigin:""};e=a.createContext(b);g["default"]=e}),98);
__d("useStoriesAnimatedElement",["react","useLayoutEffect_SAFE_FOR_SSR"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function b(b){var d=h("Appear"),e=d[0],f=d[1];c("useLayoutEffect_SAFE_FOR_SSR")(function(){var c=a.requestAnimationFrame(function(){f("AppearActive")}),d=a.setTimeout(function(){f("AppearDone")},b);return function(){a.clearTimeout(d),a.cancelAnimationFrame(c)}},[f,b]);return[e]}g["default"]=b}),98);
__d("StoriesSuspenseCarouselBucketDataContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={setSideBucketAvailable:function(a){},sideBucketAvailable:!1};c=a.createContext(b);g["default"]=c}),98);
__d("useStoriesViewerBaseDimensions",["CometAppNavigationConstants","CometRouteRenderType","StoriesGating","StoriesSuspenseCarouselBucketDataContext","gkx","react","useCometWindowSize"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useContext,i=b.useState,j=12*2,k=44+12,l=43,m=.5625,n=1e3,o=20,p=200,q=100,r=c("gkx")("708253");function a(){var a=d("CometRouteRenderType").useIsPushView(),b=c("useCometWindowSize")(),e=b.innerHeight;b=b.innerWidth;var f=i(p),g=f[0];f=f[1];var s=h(c("StoriesSuspenseCarouselBucketDataContext"));s=s.sideBucketAvailable;var t=b>n,u=0;u=e-(j+k);!r?u-=l:r&&!a&&(u-=d("CometAppNavigationConstants").HEADER_HEIGHT);e=Math.round(u*m);a=b-(e+2*.6*e+2*g);e=!s||s&&!t;d("StoriesGating").shouldShowViewerV3()&&!e&&a<=o&&(g===p?f(q):u=Math.min(u,Math.round((b-2*g-o)/2.2/m)));a>p+o&&g===q&&f(p);return{gap:g,hasSideBucketSpace:t,height:u,width:Math.round(u*m)}}g["default"]=a}),98);
__d("useStoriesViewerDimensions",["StoriesViewerOpenAnimationContext","react","useStoriesAnimatedElement","useStoriesViewerBaseDimensions"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=babelHelpers["extends"]({},c("useStoriesViewerBaseDimensions")()),b=h(c("StoriesViewerOpenAnimationContext")),d=b.duration,e=b.getAnimated,f=b.setAnimated,g=b.transform;b=b.transformOrigin;d=c("useStoriesAnimatedElement")(d);d=d[0];if(!e())if(d==="Appear")return babelHelpers["extends"]({},a,{transform:g,transformOrigin:b});else f(!0);return babelHelpers["extends"]({},a,{transform:"",transformOrigin:b})}g["default"]=a}),98);
__d("StoriesCometPlaceholderWithNav.react",["fbt","StoriesBucketLoadingView.react","StoriesCometLeftRailLayout.react","StoriesCometListItemGlimmer.react","StoriesEnums","StoriesUnselected.react","TetraUnitHeader.react","react","stylex","useStoriesViewerDimensions"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.isNullState;b=b===void 0?!1:b;a=a.isPermalink;a=a===void 0?!1:a;var e=c("useStoriesViewerDimensions")(),f=d("StoriesEnums").BACKGROUND_STYLE.DEFAULT;b=b?i.jsx(c("StoriesUnselected.react"),{}):i.jsx("div",{className:"dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 puxov6c6 r893ighp ozuftl9m n851cfcs tvfksri0 n1l5q3vz btwxx1t3 j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47",style:e,children:i.jsx(c("StoriesBucketLoadingView.react"),{})});return i.jsx(c("StoriesCometLeftRailLayout.react"),{hasRightRail:!1,isPermalink:a,leftRail:i.jsxs(i.Fragment,{children:[i.jsx(c("TetraUnitHeader.react"),{headline:h._("Stories"),headlineColor:"primary",isSemanticHeading:!0,level:1,paddingTop:20}),i.jsx(c("TetraUnitHeader.react"),{headline:h._("Your story"),headlineColor:"secondary",level:3,paddingTop:16}),i.jsx(c("StoriesCometListItemGlimmer.react"),{numberOfItems:1}),i.jsx(c("TetraUnitHeader.react"),{headline:h._("All stories"),headlineColor:"secondary",level:3,paddingTop:8}),i.jsx(c("StoriesCometListItemGlimmer.react"),{isFriends:!0,numberOfItems:6})]}),children:i.jsx("div",{className:c("stylex").dedupe({"background-color-1":"tqsryivl","display-1":"j83agx80","height-1":"datstx6m","justify-content-1":"taijpn5t","width-1":"k4urcfbm"},f===d("StoriesEnums").BACKGROUND_STYLE.BLACK?{"background-color-1":"tqsryivl"}:null),children:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCometPlaceholder.react",["StoriesBucketLoadingView.react","StoriesCometPlaceholderWithNav.react","StoriesEnums","react","stylex","useStoriesViewerDimensions"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.isNullState;b=b===void 0?!1:b;var e=a.isPermalink;e=e===void 0?!1:e;a=a.leftRail;a=a===void 0?!0:a;var f=c("useStoriesViewerDimensions")(),g=d("StoriesEnums").BACKGROUND_STYLE.DEFAULT,i=!0;if(a&&i)return h.jsx(c("StoriesCometPlaceholderWithNav.react"),{isNullState:b,isPermalink:e,leftRail:a});i=h.jsx("div",{className:"dzlist6r msbwk0y7 flx89l3n ms05siws l9j0dhe7 stjgntxs ni8dbmo4 puxov6c6 r893ighp ozuftl9m n851cfcs tvfksri0 n1l5q3vz btwxx1t3 j83agx80 kzx2olss aot14ch1 p86d2i9g beltcj47",style:f,children:h.jsx(c("StoriesBucketLoadingView.react"),{})});return h.jsx("div",{className:c("stylex").dedupe({"background-color-1":"tqsryivl","display-1":"j83agx80","height-1":"datstx6m","justify-content-1":"taijpn5t","width-1":"k4urcfbm"},g===d("StoriesEnums").BACKGROUND_STYLE.BLACK?{"background-color-1":"tqsryivl"}:null),children:i})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCTAButton.react",["CometPressable.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.link,d=a.onClick;a=a.title;a=h.jsx("div",{className:"j1l0snac lce52004 mlh77y73 g0qnabr5 ltmttdrg a3bd9o3v qypqp5cg lrazzd5p jq4qci2q j83agx80 ljqsnud1 m2scej7v bp9cbjyn",children:a});return h.jsx("div",{className:"j1l0snac lce52004 mlh77y73 tkr6xdv7 d6emx29t ife1yexw stjgntxs ni8dbmo4 rq0escxv jze8crwl fzsosmu5 tkdtxxdq nvi9zq2q ddn55etz todgtsvd mher9iwd okr6w53f cft5xzfc",children:b!=null?h.jsx(c("CometPressable.react"),{hideHoverOverlay:!0,linkProps:{target:"_blank",url:b},onPress:d,children:a}):a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesNullState.react",["fbt","NullStateMedia112.svg.react","TetraTextPairing.react","react","stylex","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){var a=c("useCurrentDisplayMode")();a=a==="dark";return i.jsxs("div",{className:"taijpn5t cbu4d94t j83agx80 bp9cbjyn",children:[i.jsx("div",{className:"sej5wr8e",children:i.jsx(c("NullStateMedia112.svg.react"),{className:c("stylex").dedupe(a?{"fill-1":"idxvuxz3","height-1":"dqmwjwen","width-1":"ooia0uwo"}:{"fill-1":"r9slssoy","height-1":"dqmwjwen","width-1":"ooia0uwo"})})}),i.jsx(c("TetraTextPairing.react"),{bodyColor:"secondary",headline:h._("Select a story to open."),headlineColor:"secondary",level:2,textAlign:"center"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesNullStateImage.react",["fbt","NullStateMedia","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("TetraNullState.react"),{headline:h._("Select a story to open."),icon:c("NullStateMedia")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesGradientBackground.react",["StoriesEnums","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useEffect;function a(a){var b=a.direction,c=a.from,e=a.onLoad;a=a.to;i(function(){e&&e()},[e]);a=a;c=c;if(!(a!=null&&c!=null))return null;a=a!=null?a:c;c=c!=null?c:a;var f="";switch(b){case d("StoriesEnums").GRADIENT_DIRECTION.BL_TR:case d("StoriesEnums").GRADIENT_DIRECTION.TR_BL:f="45deg";break;case d("StoriesEnums").GRADIENT_DIRECTION.LEFT_RIGHT:case d("StoriesEnums").GRADIENT_DIRECTION.RIGHT_LEFT:f="to right";break;case d("StoriesEnums").GRADIENT_DIRECTION.TL_BR:case d("StoriesEnums").GRADIENT_DIRECTION.BR_TL:f="135deg";break;case d("StoriesEnums").GRADIENT_DIRECTION.TOP_BOTTOM:case d("StoriesEnums").GRADIENT_DIRECTION.BOTTOM_TOP:f="to bottom";break;default:f="0deg"}b={backgroundImage:"linear-gradient("+f+","+c+" 0%,"+a+" 100%)"};return h.jsx("div",{className:"k4urcfbm datstx6m",style:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesResizeToView.react",["fbt","ix","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(){return j.jsx("div",{children:j.jsx("div",{className:"k4urcfbm ni8dbmo4 taijpn5t sq4ovgn3 cbu4d94t j83agx80 tqsryivl bp9cbjyn",children:j.jsxs("div",{className:"o0t2es00 ljqsnud1",style:{verticalAlign:"middle"},children:[j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("580264"),24),size:24}),j.jsx("span",{className:"h4z51re5",children:h._("Expand your browser window to see this story")})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesTrayLoggerSessionContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={trackingStrings:new Map()};c=a.createContext(b);e=c;g["default"]=e}),98);
__d("StoriesTrayLoggerSessionProvider",["StoriesTrayLoggerSessionContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){var b=a.children,d=a.trackingStrings;a=i(function(){return{trackingStrings:d}},[d]);return h.jsx(c("StoriesTrayLoggerSessionContext").Provider,{value:a,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesShowEpdBlockToast",["fbt","cometPushToast","useToasterStateManager"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){var a=c("useToasterStateManager")(),b=h._("Messages can't be sent at the moment.");return function(){d("cometPushToast").cometPushErrorToast({message:b},void 0,a)}}g["default"]=a}),98);
__d("StoriesSuspenseCardModalContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={isMuted:!1,isOpen:!1,onMuteChanged:function(a){},setOpenModal:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("useStoriesSuspensePause",["StoriesLoggerContext","StoriesPauseReasons","Visibility","cr:809608","react","storiesViewerSuspenseEmitter"],(function(a,b,c,d,e,f,g){"use strict";e=d("react");var h=e.useCallback,i=e.useContext,j=e.useEffect,k=e.useRef,l=e.useState;function a(){var a=l(!1),e=a[0],f=a[1];a=i(c("StoriesLoggerContext"));var g=a.logger,m=k({}),n=h(function(a,b){if(a)m.current[b]=!0,f(a),g.pauseLog(!0,b);else{if(b===d("StoriesPauseReasons").CARD_CHANGE&&m.current[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]===!0){m.current=(a={},a[d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY]=!0,a)}else b===d("StoriesPauseReasons").CLICK_PAUSE_ICON||b===d("StoriesPauseReasons").KEYBOARD||b===d("StoriesPauseReasons").BUCKET_TRANSITION||b===d("StoriesPauseReasons").CARD_CHANGE||b===d("StoriesPauseReasons").VIEWER_SHEET_OVERLAY||b===d("StoriesPauseReasons").BUCKET_REFRESH?m.current={}:delete m.current[b];Object.keys(m.current).length===0&&(f(!1),g.pauseLog(!1,b))}},[g]);j(function(){return c("storiesViewerSuspenseEmitter").listenToPauseRequest(function(){return n.apply(void 0,arguments)})},[n]);j(function(){if(b("cr:809608")==null)return;var a=b("cr:809608")({onJewelHidden:function(){n(!1,d("StoriesPauseReasons").JEWEL)},onJewelShown:function(){n(!0,d("StoriesPauseReasons").JEWEL)}});return a},[n]);j(function(){var a=[c("Visibility").addListener(c("Visibility").HIDDEN,function(){return n(!0,d("StoriesPauseReasons").VISIBILITY_CHANGE)}),c("Visibility").addListener(c("Visibility").VISIBLE,function(){return n(!1,d("StoriesPauseReasons").VISIBILITY_CHANGE)})];return function(){a.forEach(function(a){return a.remove()})}},[n]);return[e,n]}g["default"]=a}),98);
__d("StoriesSuspensePauseContextProvider.react",["StoriesSuspensePauseContext","react","useStoriesSuspensePause"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;function a(a){a=a.children;var b=c("useStoriesSuspensePause")(),d=b[0],e=b[1];b=i(function(){return{isPaused:d,setPause:e}},[d,e]);return h.jsx(c("StoriesSuspensePauseContext").Provider,{value:b,children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EmojiInputDecorator",["EmojiRenderer","immutable"],(function(a,b,c,d,e,f,g){"use strict";var h=".",i="emoji";a=function(){function a(a,b,c){this.__installedDecorators={emojiDecorator:!0},this.$1=a,this.$2=b,this.$3=c,b&&Object.assign(this.__installedDecorators,b.__installedDecorators)}var b=a.prototype;b.getDecorations=function(a,b){var e=this.$2?this.$2.getDecorations(a,b).toArray():Array(a.getText().length).fill(null),f=0;d("EmojiRenderer").parse(a.getText()).forEach(function(a){var b=a.offset;a=b+a.length;var c=!0;for(var d=b;d<a;d++)if(e[d]!=null){c=!1;break}if(c){for(var d=b;d<a;d++)e[d]=i+h+f;f++}});return c("immutable").List(e)};b.getComponentForKey=function(a){return!this.$2||a.split(h)[0]===i?this.$1:this.$2.getComponentForKey(a)};b.getPropsForKey=function(a){return!this.$2||a.split(h)[0]===i?this.$3:this.$2.getPropsForKey(a)};return a}();g["default"]=a}),98);
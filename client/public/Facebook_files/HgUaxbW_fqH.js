if (self.CavalryLogger) { CavalryLogger.start_js(["r\/f6DY9"]); }

__d("CometPhotoPermalinkRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4123179801070133",metadata:{},name:"CometPhotoPermalinkRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"5874940725912271",metadata:{},name:"CometPhotoRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"4026980064008234",metadata:{},name:"CometPhotosLoggedOutCTAWrapperFooterDataQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoTagLayerQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3981244011991373",metadata:{},name:"CometPhotoTagLayerQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometPhotoPermalinkRoot.entrypoint",["CometPhotoPermalinkRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.routeParams;var c=a.comment_id,e=a.fbid,f=a.reply_comment_id;a=a.set;f=(f=f)!=null?f:c;c={UFI2CommentsProvider_commentsKey:"CometPhotoPermalinkRootQuery",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"PERMALINK",feedbackSource:2,focusCommentID:f!=null?String(f):null,mediasetToken:a,nodeID:e,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1};return{queries:{photoPermalinkRootQueryReference:{parameters:b("CometPhotoPermalinkRootQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("CometPhotoPermalinkRoot.react").__setRef("CometPhotoPermalinkRoot.entrypoint")};g["default"]=a}),98);
__d("CometPhotoRoot.entrypoint",["CometPhotoRootQuery$Parameters","CometPhotoTagLayerQuery$Parameters","CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var e=a.routeParams,f=e.comment_id,g=e.fbid,h=e.reply_comment_id;e=e.set;h=(h=h)!=null?h:f;a=(f=a.passthroughProps)==null?void 0:f.glbFileURIHackToRenderAs3D_DO_NOT_USE;f={UFI2CommentsProvider_commentsKey:"CometPhotoRootQuery",cometMediaViewerDeferNavButtonsQE:c("qex")._("105")!=="load_synchronously",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"COMET_MEDIA_VIEWER",feedbackSource:65,focusCommentID:h!=null?String(h):null,glbFileURIHackToRenderAs3D_DO_NOT_USE:a,isMediaset:e!=null,mediasetToken:e,nodeID:g,privacySelectorRenderLocation:"COMET_MEDIA_VIEWER",renderLocation:"permalink",scale:d("WebPixelRatio").get(),useDefaultActor:!1};h={nodeID:g,scale:d("WebPixelRatio").get()};a={photoRootQueryReference:{parameters:b("CometPhotoRootQuery$Parameters"),variables:f},photoTagLayerQueryReference:{parameters:b("CometPhotoTagLayerQuery$Parameters"),variables:h}};if(c("gkx")("1692176"))return{queries:babelHelpers["extends"]({},a,{loggedOutCTAfooterDataQueryReference:{parameters:b("CometPhotosLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{nodeID:g}}})};else return{queries:a}},root:c("JSResourceForInteraction")("CometPhotoRoot.react").__setRef("CometPhotoRoot.entrypoint")};g["default"]=a}),98);
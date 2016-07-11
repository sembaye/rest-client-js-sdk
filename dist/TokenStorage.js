Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _urijs=require('urijs');var _urijs2=_interopRequireDefault(_urijs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}

var ACCESS_TOKEN_KEY='rest_client_sdk.api.access_token';var

TokenStorage=function(){
function TokenStorage(tokenGenerator,asyncStorage){_classCallCheck(this,TokenStorage);
this._tokenGenerator=tokenGenerator;
this.setAsyncStorage(asyncStorage);}_createClass(TokenStorage,[{key:'setAsyncStorage',value:function setAsyncStorage(


asyncStorage){
this._asyncStorage=asyncStorage;}},{key:'hasAccessToken',value:function hasAccessToken()


{
return this._asyncStorage.getItem(ACCESS_TOKEN_KEY).
then(function(accessToken){return!!accessToken;});}},{key:'getAccessToken',value:function getAccessToken()


{
return this._asyncStorage.getItem(ACCESS_TOKEN_KEY).
then(function(token){return token&&JSON.parse(token).access_token;});}},{key:'logout',value:function logout()



{
return this._asyncStorage.removeItem(ACCESS_TOKEN_KEY);}},{key:'generateToken',value:function generateToken(


parameters){var _this=this;
return this._tokenGenerator.generateToken(parameters).
then(function(responseData){
return _this._storeAccessToken(responseData).
then(function(){return responseData;});});}},{key:'refreshToken',value:function refreshToken(





parameters){var _this2=this;
return this._asyncStorage.getItem(ACCESS_TOKEN_KEY).
then(function(token){return(
_this2._tokenGenerator.
refreshToken(JSON.parse(token),parameters).
then(function(responseData){return(
_this2._storeAccessToken(responseData).
then(function(){return responseData;}));}));});}},{key:'_storeAccessToken',value:function _storeAccessToken(





responseData){
return this._asyncStorage.
setItem(ACCESS_TOKEN_KEY,JSON.stringify(responseData));}}]);return TokenStorage;}();exports.default=




TokenStorage;
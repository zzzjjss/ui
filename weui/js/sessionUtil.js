function getSessionid(){
    if($.cookie("appSessionId")==null){
        var sessionId=getUrlParameter("appSessionId");
        if(sessionId==null){
          window.location="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8c939b3627cfb279&redirect_uri=http%3A%2F%2Fwww.518518.xyz%2Fcustomer%2FloginWithWechat&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
        }else{
          $.cookie("appSessionId",sessionId);
          return sessionId;
        }
      }else{
          return $.cookie("appSessionId");
      }
}
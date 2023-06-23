**Definition**

There are 2 methods you need to use for implementing single sign-on with Quick.
1.	sso.start() for starting sso request
2.	sso.validate() for validating user

**Usage of the Function**


**`sso.start({clientId=id,authorizeEndpoint=endpoint,redirectUri=uri,scope=scope})`**

you can use this method as below:
```
//qjson url that you want to come back after authentication
uri = 'http://localhost:3004/microui/supplierfinance/qjson/sso/callback'

//endpoint login url. 
endpoint='http://localhost:3004/sso_test.html'

//ask your auth service provider (client-id)
id = '90921d5e-34fd-4328-a8ed-57552f6b1125'

//ask your auth service provider.
scope='openid'

sso.start({clientId=id,authorizeEndpoint=endpoint,redirectUri=uri,scope=scope})
```




**`sso.validate({urlParams=params,tokenEndpoint=endpoint,type=type,onSuccess='onSuccess',onFail='onFail'})`**

you can use this method as below:

```
//for valdiation request, ask your auth service provider. (token endpoint)
endpoint = 'https://adfs.uatisbank/adfs/oauth2/token'

//after authentication redirect there will be querystring params (code,state)
params=Quick.getDeepLinkParams()
EM.trace(params)

//ask your auth service provider
type='plateau:sso:user:e'

sso.validate({urlParams=params,tokenEndpoint=endpoint,type=type,onSuccess='onSuccess',onFail='onFail'})
```

_examples: you should host sso_test.html in your local machine then open sso.txt as qjson_

<a href="" onclick="this.href='?q=qjsons/sso.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>sso.qjson</a>

<a href="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdScripts/singleSignOn/sso_test.html" target="_blank">sso_test.html</a>
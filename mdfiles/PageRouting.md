# Page Routing

To route to an another page in Quick use go methods as they described in below. 

## go

Route another page with the all parameters that are given to the method. 

> quick.go(...args)

### Sample Usage
> > ```js
> > quick.go('/microUI/moduleName/static/qjson/pageName.qjson')
> > ```

> > ```js
> > quick.go( pageTitle, '/microUI/moduleName/static/qjson/pageName.qjson', pageParams)
> > ```

> > ```js
> > quick.go('customer','RenderSecondPage')
> > ```

## Quick.go

It can be used for routing but with no parameters. It only accepts the apge path.

> > ```js
> > quick.Quick.go('/microUI/moduleName/static/qjson/pageName.qjson')
> > ```

## Quick.goHistory

To navigate between opened pages, give the step number parameter to this method and navigate to it. 

**Example usage**: First Page -> Second Page -> Third Page
Trigger goHistory inside the Third Page. (quick.Quick.goHistory(1))
Navigate to the First Page.

> quick.Quick.goHistory(step: number)
> > ```js
> > quick.Quick.goHistory(2)
> > ```

## Back

Routing to previous page. No parameter needed.

> quick.Quick.back()
> > ```js
> > quick.Quick.back()
> > ```

## Redirect

Attempt to open a URL, use the below methods.

### redirect

> quick.Quick.redirect()
> > ```js
> > quick.Quick.redirect()
> > ```

### SSO.start

> quick.Quick.sso.start({ clientId: string, authorizeEndpoint: string, redirectUri: string, scope: string })
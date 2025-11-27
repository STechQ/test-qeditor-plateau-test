**To register inputs (textfield,textarea etc.) validation, set **rules** property with quick rules function**
**Before submit page, use validation check methods.**
# Props

### rules
All input components have a **rules** prop which takes an array of quick rule functions below.

> required (message?)

> minLength (minLenght, message?)

> maxLength (maxLenght, message?)

> email (message?)

> iban (message?)

> regex (regexVal, message?)

> tckn (message?)

> vkn (message?)

**Usage Ex:**
Rules prop value of input components examples.
```
[Quick.validation.required(), Quick.validation.minLength(5, 'Enter at least 5 characters')]
```
```
[Quick.validation.minLength(100, LR('maxLenghtErrorMessage'))]
```


### validate-on-blur
Delays validation until blur event \
**Type:** Boolean \
**Default:** false



# Validation Methods
Before take an action on button click event, check validation of components using Quick methods.

### Quick.validateAll
Validates all registered inputs in page. Returns true if successful and false if not. \
`displayAlertBox`: Calls alert function in UI configuration (if not registered, calls default alert function) and shows alert box. Default value is true.

> quick.Quick.validateAll (displayAlertBox: boolean)

### Quick.validate
 Validates given component and all child inputs. Returns true if successful and false if not. \
` compEID`: Component Quick ID that will validate. It might be an input or an container component that has inputs. \
`displayAlertBox`: Calls alert function in UI configuration (if not registered, calls default alert function) and shows alert box. Default value is true. \

> quick.Quick.validate(compEID: string, displayAlertBox: boolean)


### Quick.alert
Shows alert component at the top of page. If custom alert box has registered on UI config, shows custom alert component.

> quick.Quick.alert(title: string)


**Usage Ex.1:**
Validates all page. If validation fails, shows alert box with default error message
On validation success routes page.

```js
let result = quick.Quick.validateAll()
quick.EM.trace('isValidationSuccess: ' + result)

if(result){
    quick.EM.trace('Redirect to X page..')
    quick.Quick.go('exampleMicroUI/secondExamplePage.js')
}
```

**Usage Ex.2:**
Validates spesific container component and does not show default alert message. If validation fails, shows alert box with given alert message. 

```js
let result = quick.Quick.validate('customerInfoGroupboxQID', false) 

if(!result){
   quick.Quick.alert('Please enter all required customer info fields') 
}
else{
   
}
```

### Reset Validation Usage


The Reset() function ensures that the set values and validations of the components are cleared.

The ResetValidation() function only clears validations, it has no effect on other variables.

While the reset() and resetValidation() functions affect the components it is used on, it also affects the other components in it when used on the VCard and VContainer components.

The uses of these two functions are as follows;

***Typescript Syntax :***      

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/typeSyntax.png)

***Qscript Syntax :***

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/qSyntax.png)

***Usage of Reset() function on VTextfield and VInlineDatePicker:*** 

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetComponent.gif)

***Usage of ResetValidation() function on VTextfield and VInlineDatePicker:*** 

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetComponentValidation.gif)

***Usage of Reset() function on VCard:***  

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetCard.gif)

***Usage of ResetValidation() function on VCard:***

![Icons_Sample](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/resetValidation/ResetCardValidation.gif)

***Example Qjson File :***


Example file: <a href="" onclick="this.href='?q=qjsons/resetAndResetValidationUsage.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>resetAndResetValidationUsage</a>

# Quick Release Notes - Sprint 28

## Vuetify 

### New Features

- Added component copy paste. Components can be copied on the same page or between different pages in the same browser via **ALT+C** and **ALT+V**.

  ![Select Parent](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/componentCopyPaste.gif)


- **withoutOverride** parameter has been added to **Quick.back** method. Thus, it can be done with the engine infrastructure instead of the back operation done in the shell application. (https://jira.softtech.com.tr/browse/PLT-11306)

```js
quick.Quick.back({ withoutOverride: true })
```

- Added **cryptography** field for iAM integrations.

```js
// quick.cryptography.generateKeyPair()
quick.cryptography.generateKeyPair(); // Returns Record<string, string>

// quick.cryptography.store(keyValue: Record<string,string>)
quick.cryptography.store({test: "Value 1"}); // void

// quick.Quick.platform.getDeviceId()
quick.Quick.platform.getDeviceId(); // Returns string

// quick.cryptography.hash.sha512(value: string)
quick.cryptography.hash.sha512("test"); // Returns string

// quick.cryptography.sign(value: string, privateKey: string, options: o? = { digestAlgorithm? = "sha512", padding? = "pkcs15"}) 
quick.cryptography.sign("test", "key1", {digestAlgorithm: "algorithm", padding: "myPadding"}); // Returns string 

``` 

- Added onClose event to LiveConnection component.

- Added media player named **QVideo** component to support video playback. 

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QVideo.png)

- Added blur event to VInlineDatepicker component.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VInlineDatePicker_blur.gif)

- Added maxLength prop to VAutocomplete component.

  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VAutocomplate-maxLength.gif)


- Added light prop to VCarousel component.

  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VCarousel-light.gif)
  
- nugdeTop, nudgeBottom, nudgeLeft and nudgeRight props added to Tooltip component.

  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/tooltipNudgeProps.gif)
  
  
### Bug Fixes

- Resolved an issue where **QLightbox** was exceeding right and bottom of the viewport when its dragged. Now dragging is limited to the viewport.

  ![Qlightbox_dragging_limited_to_viewport](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Qlightbox_dragging_limited_to_viewport.gif) 


- Resolved an issue regarding the panes of the Golden Layout component not deleting on different states. Now Golden Layout panes successfully gets deleted on every state and childNames prop is updated accordingly.

- **avoidClearableTabIndex** prop has added to **VCombobox** and **VAutocomplete** components. When the clearable property is set to true, the clearable icon gets the tabIndex. To avoid this, avoidClearableTabIndex prop can be set to true.( https://jira.softtech.com.tr/browse/PLT-11542 )

- **tabindex** prop has added to **VAutocomplete** component. ( https://jira.softtech.com.tr/browse/PLT-11615 )

- **filter** prop Event has added to **VAutocomplete** component for filter by turkish char.  ( https://jira.softtech.com.tr/browse/PLT-11780)

```js
 quick.return( itemText.toLocaleLowerCase('tr').indexOf(queryText.toLocaleLowerCase('tr')) > -1);
```	

  ![VAutocomplete_filter_turkishChar](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VAutocomplete_filter_turkishChar.gif)

- **columnMinWidth** and **columnWidth** props have added to **dxDataGrid** and **dxTreeList** components. 

- **width** and **format** props have added to **dxColumn** component which use for **dxDataGrid** and **dxTreeList**.

- **Quick.environment** has been added to take fields from **settings.yaml**

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/env-setting-yaml.png)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/env-ts.png)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/env-console.png)

- An **additionals** object has been added to the alert method so that it can detect the change when needed. Thus, we can send props or events in the object.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/alert-additionals-ts.png)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/alert-inside-additionals.png)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/alert-isPersistent-console.png)

- Input of special characters in the VInlineDatepicker component is blocked.

- The slot of the VRadioGroup component has been removed.

## Rally & Sprinkle

### New Features

- UI error message has been edited.

  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ui-hata-mesaji.png)

### Bug Fixes

 --

## Documentations - Editor Help 

- Most of the sample qjson files added to Discourse. 

- Most of the documents moved to Docusaurus.


## Quick Coral

- 39 screens done on IOS and 18 screens done on Android.(İşLeasing)

- 33 plt closed on IOS and 34 plt closed on Android

### Quick Android:

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/review_quick_anroid.gif" alt="review_quick_anroid" style="zoom: 67%;" />

- IAM integration done. The following functions have been added to the Bridge side: Appversion method, Method for DeviceUniqueID, Method to get Hash, Methods to create Public private key, Function for device model, Method to read private key from a permanent place, Method to become Sign.

- TextField validation message editing.

- Expansion panel active class edited.

- Coroutines usage analysis for the TextField component.

- FileInput layout fix.

  ![Android_FileInput](/Users/ismailkarakas/Desktop/Android_FileInput.jpg)

- QR reader component is implemented to be used for Simulator and MiniAppTester.

- Expansion panel bugs are fixed in parallel.

- Performance improvements.

- PLT support for screens opened for testing:

  Mobile Project Detail Branch Area arrangement.

     Components: 

  ​       	VCheckBox 

  ​					Adjusting the Padding values of the "Remember Me" Checkbox.

  ​					Editing Checkbox locations.

  ​	RenderingUI:

  ​           MainCss updates.
  
  ​		   Version updates
  
  ​	Bridge:
  
  ​			Bridge.ts updated.




### Quick IOS:

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/review_quick_coral_ios.gif" alt="review_quick_ios" style="zoom: 60%;" />


- Coding of IAM Version update methods

- Radiogroup edits were made.

- Unittest template for components added to project.

- Embedded banking developments continued. (Loading, pipeline, alert).

- PLT support was given.

  ​    QuickBridge
  ​	       applyErrors method added to BaseComponent
  
  ​           applyErrors method added to BaseViewModelDelegate protocol
  
  ​           max_width apply with % is disabled for VCol and VRow
  
  ​		   Bridge.ts updated.
  
  ​	QuickComponents:
  
  ​			VInlineDatePicker (Divider issue fixed.)
  
  ​			VBtnToggle (Fixed buttons adding twice to VBtnToggle)
  
  ​			FileInput icon size fix
  
  ​			VStepper scroll position fix
  
  ​			VTextField delegate fix
  
  ​			VCard divider fix
  
  ​			VRadio big icon fix
  
  ​			VRadioGroup reccursive search added for subviews
  
  ​			VCard clipstoBounds fix
  
  ​			StyleHelper default color changed to clearColor
  
  ​	RenderingUI:
  
  ​           MainCss updates.
  
  ​           Version updates.
  
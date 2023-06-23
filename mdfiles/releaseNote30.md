# Quick Release Notes - Sprint 30

## Vuetify 

### New Features

- Resolved an issue regarding childNames property of the Golden Layout component causing confusion for a subset of users. The property now has a read only attribute to prevent further confusion and problems.  

- A development has been made that allow access to instances of components added as slots. You can review the usage details in the VDatatable component documentation. ( https://jira.softtech.com.tr/browse/PLT-11267 )

- Log types can be filtered and printed now. Users can write the following line in the relevant event for use this feature.
```js
//This line provide users to get Error logs
quick.EM.trace("",{logType:Logtype.Error})

//This line provide users to get Trace logs
quick.EM.trace("",{logType:Logtype.Trace})

//This line provide users to get Warning logs
quick.EM.trace("",{logType:Logtype.Warning})
```
Users also should change the variable which is in the "settings.yaml" file of the current project called "yamlLogType". This option is not mandatory and default log type is "Trace"

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/yamlLog.png)

- removePane method is added to the Golden Layout component. Now the users can remove panes by using remove pane method. ( https://jira.softtech.com.tr/browse/PLT-11934 )
```js
components.{{goldenLayoutID}}.removePane(paneName: String)
```

- onRowPrepared event is added to the DxDataGrid component. It executes after making a change in a row. 

- The height property has been added to the VTextArea component. ( https://jira.softtech.com.tr/browse/PLT-12107 )

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/HeightProp.gif)

- The reset method has been added to the QPhoneInput component which makes it resettable.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QPhoneInputReset.gif)

  
### Bug Fixes

- You can use **forcePosition** property on Tooltip component when you have multiple scrolls on your page. ( https://jira.softtech.com.tr/browse/PLT-11239 )

- Fixed page content issue after saving pages containing QLegend component in editor. ( https://jira.softtech.com.tr/browse/PLT-11493 )
  
- When the input components such as VTextField, VComboBox, VTextArea were added under the VTab component, the text cursor looked white. It has been corrected by adding fix to the main CSS file. ( https://jira.softtech.com.tr/browse/PLT-11283 )

- On the Golden Layout component, the panes that closed in the runtime cannot be destroyed from the DOM. After this bug is fixed, the remove method is added to the other vue components also. ( https://jira.softtech.com.tr/browse/PLT-11934 )

- Some elements of a combobox that has many elements was not visible outside of the VTabs component. With CSS fix, the problem is solved. In the figures below, the view before and after bug fix can be seen. ( https://jira.softtech.com.tr/browse/PLT-11637 )

  ![VTabsBugBefore](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTabsBugBefore.png)   
  
  
  ![VTabsBugAfter](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTabsBugAfter.PNG)

  
## Rally & Sprinkle

### New Features

--

### Bug Fixes

- In UAT and INT environments, the page function and service calls were not working when the Quick 2.0 screens were opened in the multi-tab. It has been corrected by making development. ( https://jira.softtech.com.tr/browse/PLT-12034 )

- Resolved an issue regarding login page redirecting to sign up page instead of home page for the new users. Now the new users are correctly redirected to home page after they sign up and login to the INT environment. ( https://jira.softtech.com.tr/browse/PLT-12126 )


## Documentations - Editor Help 

- More of solved issues and their solution methods are added to Discourse. ( https://discourse.rally.softtech/ )


## Quick Coral

- 39 screens done on IOS and 18 screens done on Android at İş Leasing projects

- 23 plt closed on IOS and 34 plt closed on Android


### Quick Android:

  - Embedded Banking 

    Settings language completed

    QFrame completed

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QFrame_Android.gif" alt="review_quick_anroid" style="zoom: 30%;" />

  

  Performance:

  ​	Prevent drawer layout render per page

  ​	Handle ui components on background thread

  ​	Refactoring css runtime parsing reflection to build time parsing

  ​	Prevent yoga values to refresh ui if it has no changes

  ​	Loading freeze fix

- Example unit test support 

  (VAutoComplete and VButton)

- Leasing PLT Support

- PLT support for screens opened for testing

  Components: 

  ​		VAutoComplete completed

  ​		BaseInputComponent class developed for input components

  ​		VTextfield focus fix

  ​		VTextfield multiple event fix

  ​		VCard shadow fix

  ​		VButton background fix

  ​		VExpansionPanel backgorund fix

  ​		VDialog size fix

### Quick IOS:

- Embedded Banking 

  Settings language completed

  QFrame completed

- Scaling and sizing were done when selecting images in the FileInput component

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/language_Android.gif" alt="review_quick_anroid" style="zoom: 67%;" />

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QFrame_IOS.gif" alt="review_quick_anroid" style="zoom: 67%;" />

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Image_resize_and_scale_IOS.gif" alt="review_quick_anroid" style="zoom: 30%;" />



- Leasing KKT Support

- PLT support for screens opened for testing

- Unit test support for Moralabs

  Components:

  ​	DevExpress Component tests completed

  ​	Some components have been written unit tests

  ​	(VSlider, VautoComplete, VBadge, VFileInput, VCombobox, VTextfield, VRating, VRadio)

  ​	VCard shadow fix

  ​	VDivider temp fix for margin

  ​	VSelect selectedItems fix

  ​	VSelectItem NSObject inheritance added

  ​	VCheckbox initial value fix

  Bridge:

  ​	Shadow default alpha fix

  ​	Logs disabled

  ​	Build fix

  UI:
  	customcss update

  CSS:

  ​	all css issues are fixed

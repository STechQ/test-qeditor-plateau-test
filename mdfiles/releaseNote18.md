# Quick Release Notes - Sprint 18

## Vuetify 

###### **New Features:**

- quick.Quick.deleteComponent() has been integrated into mobile. It is used to dynamically delete the component on the screen. 
	`quick.Quick.deleteComponent()`
	
- Added new default Softtech theme in Quick editor. Details of the theme can be seen in https://zeroheight.com/45e2aa440/p/59d967-plateau-design-system.

- Custom icons can be used in Quick editor. Prefixes of new icons start with 'pdi-' and can be viewed in https://zeroheight.com/45e2aa440/p/507af7-icons.

	![Custom Icons](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/customIcons.gif)

- The **compareTableValue** field has been added for cases where text display is desired different from the compared fields in the comparison process. https://jira.softtech.com.tr/browse/PLT-7930

	![CompareTableValue](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/compareTableValue.gif)

- VInlineTimePicker component has been added to comparison components list. https://jira.softtech.com.tr/browse/PLT-6935

	![VInlineTimePicker Comparison](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VInlineTimePicker.gif)

- By adding the separateChar prop to the VInlineDatePicker component, the character used in date separations has been changed. https://jira.softtech.com.tr/browse/PLT-7637

	![VInlineDatePicker SepareteChar](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/datePickerSeparete.gif)

- QPhoneInput switching between languages was provided by adding the locale prop to enable English/Turkish support.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/phoneInputLocale.gif)  

- VInlineTimePicker max-min props  are added.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/inlineTimePicker-max-min.jpg)

- Pie Chart graphic  development is done.
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DoughnutChart.gif)

- tabIndex property is added to the input components, so that when the user clicks tab, the next component will be focused according to tabIndex order.
	
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/tabindex.gif)

- To resolve the moveable dialog request, QLightBox is updated in terms of visual properties. Sample qjson is created and added to documentation of QLightBox.
	
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/qlightbox.gif)

###### **Bug Fixes:**

- Fixed vStepper deficiencies on mobile. Missing functions have been made operational.  

- Fixed not showing 0 and false when displaying new values ​​in comparison operation ( Qlegend Component ). https://jira.softtech.com.tr/browse/PLT-7652

- Fixed deletion issue in internal components experienced in component deletion. https://jira.softtech.com.tr/browse/PLT-7542

- Fixed an issue in resetting the color of a colored component in the value comparison operation. https://jira.softtech.com.tr/browse/PLT-7565
	
	![Comparison Reset](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/resetCompare.gif)

- The DxDataGrid component could not be created at run time and the display problems were fixed. https://jira.softtech.com.tr/browse/PLT-7883

- VInlineDatePicker: resetValue value is fixed. Deletion of the old selected value when the customer's request is triggered by the change method.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DatePickerChange.gif)

- VEditDialog: Within the scope of the PLT-7830 issue, the rendering problem of the edit dialog component has been resolved to change the values of the datatable columns.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/edit_dialog.gif)

## Sprinkle

###### **New Features:**


###### **Bug Fixes:**


###### **Documentations:**

- RRate  : Writing the documentation for the RRate component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RRate
- RSwitch  : Writing the documentation for the Switch component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RSwitch
- RSearch  : Writing the documentation for the RSearch component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RSearch
- RDialog  : Writing the documentation for the RDialog component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RDialog

You can find the documents at https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/home

## IDE (version:)

###### **New Features:**

- IDE settings.yaml and containerServices.js are implemented to IDE so that you can edit the settings of your project in IDE.
	
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/IDE%20Settings.gif)

###### **Bug Fixes:**


## Android

- Fixed VCard click event problem.

- Mıssing Icons for Superapp added.

- Size changing problem for cached network images fixed- VImg Component.

- Checked Text styling for Label Component.

- Error on opening Campaign Detail page fixed.

- Fixed page size calculation problem when a components size changes after page loads.

- Fixed Layout changes on back action.

	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Animation.gif)
	
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/leasing_login.gif)
	
	![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/sifreolustur.gif)

- Made improvements on Label for text change conditions.

- Made improvements on text validation for VTextField

- Fixed VTextField component issues for leasing screens

- Fixed VTextField component validation message for leasing screens

- Fixed VCheckbox component issues for leasing screens

- Support and testing for components developed by Moralabs : Dialog, VStepper, VCarousel, InlineDatePicker, DatePicker, DocumentViewer, FileInput

- Validation improvements made on Engine.

- Improved parsing of Network QJSONs on Engine.

- Saving screen state and rendering with page id completed on Engine.

- Fixed margin problems on Engine. 

- Fixed YogaLayout and css bugs on Engine.

- Fixed bridge method bugs on Engine.

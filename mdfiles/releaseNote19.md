# Quick Release Notes - Sprint 19

## Vuetify 

###### **New Features:**

-  Data that are deleted in VDatatable are displayed with a chip on comparison process.
(https://jira.softtech.com.tr/browse/PLT-8106)
 ![VDatatable removed fields](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/compareValueDatatable.png)
- Fields that are DOM's property but not Vuetify prop are placed on the component instance. (https://jira.softtech.com.tr/browse/PLT-8069)
-  step and type props are added on VCombobox. (https://jira.softtech.com.tr/browse/PLT-8069)
- insert prop is added on VSwitch. (https://jira.softtech.com.tr/browse/PLT-8181)
-  attach prop is added on VDialog component (https://jira.softtech.com.tr/browse/PLT-7602)
-  In iOS, the vSelect selection list is opened in the middle of the screen like a dialog. 
	![VSelect_ShowItems_InMobile](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VSelect_ShowItems_InMobile.png)
-  Added vuetify events to VTextarea component.
	![VTextareaAddEvents](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTextareaAddEvents.PNG)
- VInlineTimePicker component is integrated on iOS.

	![VInlineDatepicker_InMobile](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VInlineDatepicker_InMobile.png)

- Integration of Nar alert structure through container services is provided

- FCM Cloud Messaging Integration and Technical Analysis

 Configuration Management: Config parameters will be defined in setting.yaml file. Firebase config parameters will be read from settings.yaml.

 getToken method in FCM component will provide the push notification token to communicate with the client. By connecting this token to their services, the users will be able to create their notifications. 

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/FCMsettingsyaml.png)

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/FCMmessaging.png)

FCM Technical Analysis Documentation: https://gitlab.softtech/quickpublic/quick/-/wikis/FCM-Technical-Analysis


###### **Bug Fixes:**
- Adjusted the browser's callbacks so that the browser does not act as its own callback and the shell manages the project's callbacks. (https://jira.softtech.com.tr/browse/PLT-8177)
- The rendering problem in some components has been fixed. (https://jira.softtech.com.tr/browse/PLT-7970)
- Fixed issue where VInlinepicker would not fit in resized VCol. (https://jira.softtech.com.tr/browse/PLT-6555)
-  VRadios added by default under VRadioGroup have been deleted from the editor.	![VRadioGroup_DeleteDefaultVRadio](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VRadioGroup_DeleteDefaultVRadio.gif)


## IDE 

###### **New Features:**

- Session component developments 
 When the session duration is completed, a dialog will appear indicating that the session duration has expired. The user has 30 seconds after the dialog screen to continue or terminate the session duration. If the time expires without the user responding, the login screen appears in the dialog. If login is successful, user's session time is extended.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/SessionDialog.gif)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/SessionLogin.PNG)

- Show password checkbox added to login page
 Show password checkbox has been added so that the user can see the password entered

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/showPassword.PNG)


## SPRINKLE

###### **New Features:**

- Quick 1.0 RIcon and RButton tooltip properties are added.
Tooltip property is added for RIcon and RButton components. Users can change position of the tooltip by using tooltipPosition prop. Also, users can give value to tooltip by tooltipLabel prop for RIcon.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/TooltipIcon.gif)

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/TooltipButton.gif)

- isMultiTab property is updated so that the screen can be opened in a new tab with left or middle click

###### **Component Documentations:**

- Rally UI 1.0 platforms topology documentation: https://wiki.softtech.com.tr/display/QU/Rally+UI+Topology
- Documentation of RColumnNumericInput component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnNumericInput
- Documentation of RColumnInput component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnInput
- Documentation of the RIcon component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RIcon
- Documentation of RColumnLink component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnLink
- Documentation of RColumnItems component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnItems
- Documentation of RAutoComplete component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RAutoComplete
- Documentation of RDialog component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RDialog
- Documentation of RColumnExpand component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnExpand
- Documentation of RColumn component  ->https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumn
- Documentation of RBadge component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RBadge
- Documentation of RColumnButton component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnButton
- Documentation of RColumnRadio component  ->https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnRadio
- Documentation of RColumnResource component  ->https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnResource
- Documentation of RLabel component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RLabel
- Documentation of RColumnMoney component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnMoney
- Documentation of RColumnPopup component -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnPopup
- Documentation of RBasicEditor component -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RBasicEditor
- Documentation of RTime component -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RTime
- Documentation of RColumnCheckBox component -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnCheckBox
- Documentation of RCheckBox component ->  https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RCheckBox
- Documentation of RColumnSelect component ->https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnSelect
- Documentation of RColumnDate component ->https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RColumnDate
- Documentation of RChips component ->https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RChips



## ANDROID

- Android Back button issue fixed.
- AppBar bugfix.
- Page rendering position bugfix.
- Absolute and fixed components bugfixes.
- VAlert component development completed.
- Quick Alert development completed.
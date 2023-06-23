# Quick Release Notes - Sprint 17

## Vuetify 

###### **New Features:**

- Removed the spacing and the footerdiv between the editor screen and its appearance in shells in run time. (https://jira.softtech.com.tr/browse/PLT-7510)
![DxDataGrid Prop](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Quick2_0_Run_Time.png)
- **Removed Vue warnings** and some improvements from printing to console.
- BigInt built-in object added to TypeScript. (https://jira.softtech.com.tr/browse/PLT-6889)
![BigInt built in object](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/bigint.gif)
- Added the ability to change icons over text prop.
![Icon text change](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iconChange.gif)
- By adding the showList method to the QLegend component, the external listing feature of the component has been updated. (https://jira.softtech.com.tr/browse/PLT-7252)
![Show List on QLegend](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/showList.png)
- **activeClass** prop is added on **VTabs**
- **elevation** prop is added on **VBtn**
- The code coverage ratio of the **quick-shrimp** project has been increased to **11.11%.**
- Partial CSS is applied on mobile. It was made in a way to get the information of the changed css on the page.
- An infrastructure that can go back more than one step in the history of the mobile application has been developed. Following code block means 'go back two times if possible.'
  `quick.Quick.goHistory(-2)`
- ImagePicker component has been made to work on Mobile.
- The default color value in the icon has been resolved with a change to the softtechtheme.css folder. (PLT-7373)
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/PhoneIncputIcon.png)
- AutoComplete dense prop added  (PLT-7567)
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/AutoCompleteDense.png)
- Unable to change label color in VRadio component. The problem was solved by opening children slot to the component and adding label slot. (PLT-7394)
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RadioCustomize.png)
- VAutoComplete blur event added (PLT-7633)
- VInlineDatepicker firstDayOfWeek prop added (PLT-7642)

- New line feature added to Tooltip component.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Tooltip_NewLine.png)

- Added auto insertion of \ sign and OpenOnlyIconClick prop to VInlineDatePicker component.(PLT-7540)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VInlineDatePicker_OpenOnlyIconClick.gif)

###### **Bug Fixes:**

- VCarousel deficiencies on mobile have been fixed. Missing functions have been made operational.
- Fixed VBottomSheet deficiencies on mobile. Missing functions have been made operational.
- GetCookie, setCookie functions have been arranged on mobile.
- qValue setting was made for VSelect component on mobile.
- Fixed non-editable issues when opening the DxDataGrid component and inserting it into an existing page. (https://jira.softtech.com.tr/browse/PLT-7413, https://jira.softtech.com.tr/browse/PLT-7414)
- Fixed DxDataGrid switch views on prop tab.
  ![DxDataGrid Prop](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DxDataGrid_Prop_Swicth.png)
- QMenu component's clear active class problem has been fixed.(PLT-7129) 
![QMenu](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Qmenu_Clear_ActiveClass_Problem.png)

## Sprinkle

###### **New Features:**

- Removed the spacing and the footerdiv between the editor screen and its appearance in shells in run time. (https://jira.softtech.com.tr/browse/PLT-7510)
  ![RunTime Screen Fixes](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Quick1_0_Run_Time.png)  

###### **Bug Fixes:**

- Integration has been made for the use of the quick.alert method on Quick2.0 and rallyUI screens.
- Ui css problem fixed.(PLT-7409, PLT-6449)

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Ui_Css_Problem.png)
###### **Documentations**

- RAlert document written
- RButton document written
- RDate document written
- RMoney document written
- RNumericInput document written
- RRadioGroup document written
- Rslider document written
- RTimePicker document written

You can find the documents at https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/home

## IDE (version:)

###### **New Features:**
Settings menu developments

- Creating settings files at application startup
- Opening JS type files listed under Application settings with textArea
- Loading application settings pipeline on qjson boot
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/SettingsList.png)
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/SettingsYaml.png)

###### **Bug Fixes:**

- Fixed issue where large sized qjsons could not be opened
## Android

- VTextField component completed.
- Edited QLabel component.
- Fixed VBtn component styles.
- Fixed VCheckbox component styles.
- VContainer component check.
- Network http post method bug fix.
- Rendering bug fixes. Some components are not rendered properly at screen.(VInlineDatePicker, Ghost)
- Network async calls bug fixes modified network error handling methods.
- Improvements for component styles.Partial css implementation.
- Some component props moved, and handled by engine module. 
- Bridge implementations. Added pageStarted method and rendering components with page id.
- Bug fixes for fixed and absolute components.
- Component development and code merge supports for Moralabs
- ImageView height problem solved
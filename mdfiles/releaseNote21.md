* # Quick Release Notes - Sprint 21

  ## Vuetify (version:)

  ### New Features:

  - rounded property is added to the VFooter component, that designates the border-radius applied to the component. 

  	![vFooter_rounded_Prop](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/vFooter_rounded_Prop.gif)
  
  - target property is added to the VBtn component, that designates the target attribute. This should only be applied when using the href prop.
  
  	![vBtn_target_Prop](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/vBtn_target_Prop.gif)
  
  - **dimensions** property is added to Golden Layout.
  
  - **closeOnClick** property is added to VMenu.
  
  - **Quick.theme.addTheme** and **Quick.theme.removeTheme** methods have been added. To use it, name of the theme has to be exist in **settings.yaml** inside of the **csspath** field. "devextreme" option is selected by default.
    ![Theme usage](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/themeTS.png)
    ![Theme yaml](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/themeYaml.png)
    
  - DevExtreme Turkish localization has been added. To use it, insert **devExLocaleCDNAddress** field into the **settings.yaml** file inside of the RegionalDefinition field. When LR is changed and if the devExLocaleCDNAddress is exist in the settings.yaml file, it will also be set as DevEx localization.
    ![DevExLocale](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/devexlocalization.png)
    
  - **col-auto** option has been added to **VCol** component.![col auto](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/col-auto.gif)
  
  
  
  Added dense property to QPhoneInput component.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QphoneInput_dense_prop.gif)
  
  
  
  
  
  - Vtabs backgroundColor prop is added. 
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VtabsBackgroundColorProp.gif)
  
  
  
  
  
  - In dxDataGrid component, allowColumnResizing provides users to resize columns and through columnResizingMode prop, mode can be changed as 'nextColumn' or 'widget'.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DxDataGrid_columnResizing.gif)
  
  
  
  
  
  - Components usage documents under gitlab.wiki.softtech are added to Help section in editor.
  
  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/help_menu.gif)
  
  
  
  
  
  - When you click on the body of QLightbox, it pops up on the screen.
  
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLightbox_bodyclick.gif)
  
  
  
  
  
  
  
  - Solo, flat, prependIcon and backgrounColor props added to VAutocomplete.
  
  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Autocomplete-props-Solo-Flat-Icon.gif)
  
  
  
  
  
  - Added allowAdding, allowUpdating, allowDeleting and mode props to dxEditing component.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/dxEditing_AddingUpdatingDeleting_props.gif)
  
  
  
  - **whiteSpace, textOverflow and overflow** props have been added **QLabel**.
  - **keyExpr** prop has been added to **DxDataGrid**.
  - **persistentHint** prop have been added to **VCheckbox, VFileInput, VOverFlowBtn, VRadioGroup, VSelect, VSwitch, VTextField and VTextArea**
  - **solo** prop has been to **VCombobox, VSelect and VTextArea**.
  - **soloInverted** prop has been to **VCombobox, VFileInput, VSelect, VTextField and VTextArea**.
  
  ### **Bug Fixes:**
  
  - The width problem in the components used inside the tooltip has been fixed.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/tooltip_column.png)
  
  
  
  - VInlineDatePicker manual input control for valid dates is provided.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VinlineDatePicker_manuel_entry.gif)
  
  
  
  
  
  - Max-min value control is provided in VInlineDatePicker manual entry.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VinlineDatePicker_min-max_manuel.gif)
  
  
  
  
  
  - Fixed the problem of the QLightbox component moving out of the render area.
  
    ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QLightBoxRenderAre.gif)
  
  - Added Doughnut component to libraryComponents for fix the runtime render error. ( https://jira.softtech.com.tr/browse/PLT-8655 ) 
  - If the QLightbox is turned off from an icon in the QLightbox, pressing the outside button and turning the QLightbox back on has been resolved. ( https://jira.softtech.com.tr/browse/PLT-8120)
  - Fixed the issue where the qValue value was null when the range prop of the VInlineDatepicker was selected.
  
  - Fixed the issue where the changed serviceDateformat to "YYYY-MM-DD" in RallyUI. (  https://jira.softtech.com.tr/browse/PLT-8961 )
  - DiscardSettings prop has been fixed.



## Sprinkle(sprinkle-ui version:)


### **Bug Fixes:**

- The problem of getting old process data with Quick.getmetadata() has been resolved.



Quick Coral :
------------------

- 8 Leasing screens in test and 6 screens done

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidOTP%20-%20Sprint21.png alt="Superapp Animation" style="zoom:15%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidCompanyDetail%20-%20Sprint21.png" alt="androidCompanyDetail" style="zoom:15%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidCalculator%20-%20Sprint21.jpeg" alt="WhatsApp Image 2021-11-29 at 10.37.42" style="zoom:32%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidPaymentPlanDetail%20-%20Sprint21.jpeg" style="zoom:32%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidAnouncements%20-%20Sprint21.jpeg" alt="WhatsApp Image 2021-11-29 at 10.37.56" style="zoom:32%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidAnouncementDetail%20-%20Sprint21.jpeg" alt="WhatsApp Image 2021-11-29 at 10.38.02" style="zoom:32%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidLogin%20-%20Sprint21.png" alt="Screenshot_1638173506" style="zoom:15%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidProjectDetail%20-%20Sprint21.png" alt="Screenshot_1638173548" style="zoom:15%;" /><img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidPasswordChange%20-%20Sprint21.png" style="zoom:15%;" />

  

  Quick Android:
  ------------------

- Inline DatePicker, Expansion Panel, VStepper, VBadge components tested and supported for Moralabs

- Işcep super app integration

- Edited VTextField formatting

- Updated object type for engine

- Expansionpanel icons changed and header text margin have been updated

- Fixed problems

  Invalidate components problem while adding dynamic component

  VDialog inner items visibility problem

  View rendering when observable value changed

  (If the value is empty at first and filled then, the width and height are 0 px)

  Call v8 thread at network response callbacks problem solved

  Scrollable areas margin and padding bug fixes 

  VTab bugs fixed

  Bottom Sheet and Substring problems solved

  Fixed FontWeight issues for QLabel

  The crashes on the otp screen have been resolved

  Problems on Payment Plan Detail screen have been resolved

- Components tested

  VTabs, VButtonToggle, VTextfield, VDivider

  

Quick iOS:
------------------

- Components which moralabs developed have been tested, feedback provided, The AutoComplete component has started to be developed

- Fixed problems:

  DocumentViewer data:text/html fix
  VImg base64 fix

  VTextarea scroll fix

  VSelect UI fix

  VBottomSheet height fix

  VCard text scroll fix

  VCarousel dynamic height disabled

  VExpansionPanel setCompClass fix

  VStepper arraySize control added

- Bridge

  hostTrigger parameter updated

  deleteComponent removeFromSuperView added

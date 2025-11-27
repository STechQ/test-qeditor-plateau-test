***Quick Release Notes - Sprint 20***

**IDE (version:)**

- **Quick Component Developtment**

  Quick component usage entegrated to Plateau IDE.



![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/IDE_QuickCompIntegration.gif)



Vuetify (version:)
------------------

### **New Features:**

  - The size value calculated according to the VIcon "xSmall-small-large-xLarge-size" property values ​​is transmitted to the mobile.

	![VIconSize](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VIconSize.PNG)

- Italic font option is added as an checkbox with other font emphasis.
  ![Editor Label After](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/italicOption.gif)
- Font-size of the labels which also affects runtime has been adjusted to not affect the middle area.
  ![Editor Label Before](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/editorLabelBefore.png)
  to
  ![Editor Label After](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/editorLabelAfter.png)
- TÜRİS link is added to domain prefix section.
![TÜRİS Link](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/turisDomain.png)

- **height** prop is added to *VAutocomplete*, *VCombobox*, *VDatePicker*, *VFileInput*, *VOverflowBtn*, *VSelect* and *VTextfield*.
- **dense** prop is added to *VOverflowBtn*.
- **maxheight** prop is added to *VMenu*.
- **white** option is added to *VBtn* color property.
  ![Editor Label Before](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/btnWhite.png)
- **Quick.alert** method on Quick 2.0 screens has been integrated to show different *alerts in RallyUI*.

- Added allowed dates prop added inlineDatePicker which only allows to select certain days.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VinlineDatePicker_allowedDates.gif)

- Added openOnHover, openOnFocus and openOnClick props to VMenu

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VMenuProps.gif)

- VSlider readOnly prop added to VSlider.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VsliderReadonlyProp.gif)

-  Added rowAlternationEnabled prop that provides DxDataGrid zebra view.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/dxdatagrid_rowAlternationEnabled.gif)

- Disabled property added for both text and autocomplete fields separately for QPhoneInput component.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/QPhoneInput_disabled.gif)

- click:clear event added for VAutoComplete component. When clearable property is switched on, users can trigger clear event by clicking onto the icon.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VAutoComplete_clickclear2.gif)

- Plateau IAM entegration refresh token implementation

### **Bug Fixes:**

- Removed the VAppBar height from being transmitted to mobile by decreasing it by a certain percentage. The height calculated according to the device is transmitted to the mobile without changing it.

- If the Component color value is given hex color code as '#ef5350', the mobile color transmission problem is resolved.

- Fixed the issue where the change in the DxColumn property was not reflected on the DxDataGrid table. (https://jira.softtech.com.tr/browse/PLT-8367)
- Provided the user a CSS code where the user can make adjustments on the width of the DxDataGrid Selection Column.(https://jira.softtech.com.tr/browse/PLT-8298)
- Provided a solution where the user can manipulate the size of the DxDataGrid Columns for a specific need. (https://jira.softtech.com.tr/browse/PLT-8499)
- Fixed the issues of column fixing on DxDataGrid and provided a guide on the usage of fixed and allowFixing properties of DxColumn. (https://jira.softtech.com.tr/browse/PLT-8315)

- Copy paste issue solved to get regex formatted value of the VTextfield

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VtextField_regex.gif)

- VInlineDatePicker clickclear pulled to null

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DatePickerClickClearNull.gif)
  
  ## Sprinkle(sprinkle-ui version:)

### **New Features:**

- Employee service mapping fix 

### **Bug Fixes:**

- Vuetify 2.0 screens renders problem solved in Rally UI
- RallyUI requestHeader undefined issue solved by arrange getHeader method.

### **Documentations**

- RallyCapsuleField : Writing the documentation for the RallyCapsuleField component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RCapsuleField 
- RallyCheckContainer  : Writing the documentation for the RallyCheckContainer component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RCheckContainer 
- RallyCollapse  : Writing the documentation for the RallyCollapse  component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RCollapse  
- RallyCollapseItem : Writing the documentation for the RallyCollapseItem component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RCollapseItem 
- RallyCustomerSearch : Writing the documentation for the RallyCustomerSearch component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RCustomerSearch 
- RallyDisplay : Writing the documentation for the RallyDisplay component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RDisplay
- RallyEventBus : Writing the documentation for the RallyEventBus component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/REventBus
- RallyInputMultiplier : Writing the documentation for the RallyInputMultiplier component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RInputMultiplier 
- RallyLayout : Writing the documentation for the RallyLayout component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RLayout 
- RallyNumber : Writing the documentation for the RallyNumber component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RNumber 
- RallyPagination : Writing the documentation for the RallyPagination component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RPagination 
- RallyPanel : Writing the documentation for the RallyPanel component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RPanel 
- RallyTabs : Writing the documentation for the RallyTabs component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RTabs 
- RallyTag : Writing the documentation for the RallyTag component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RTag 
- RallyTree : Writing the documentation for the RallyTree component  -> https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/RTree

You can find the other documents at https://gitlab.rally.softtech/rally/ngsp/rshell/-/wikis/home

Quick Coral :
------------------

- 6 Leasing screen has been completed and many plts formed on these screens have been closed

  Talep izleme

  Proje listesi

  Proforma

  Ayarlar

  Proje Detay

  Bloke Kaldırma

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosLeasingAyarlar.gif alt="Superapp Animation" style="zoom:30%;" /> <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosLeasingProjeler.gif alt="Superapp Animation" style="zoom:30%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosLeasingProforma.gif alt="Superapp Animation" style="zoom:30%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosLeasingTaleplerim.gif alt="Superapp Animation" style="zoom:30%;" />

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidOtp.gif alt="Superapp Animation" style="zoom:50%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidProjectDetail.png style="zoom:30%;" />

  Quick Android:
  ------------------

- BtnToggle component development completed

- VSelect component development completed

   <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidCalculator.jpg style="zoom:80%;" />

- Fixed issue for OTP screen from Leasing screens

   <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/androidOtp.gif alt="Superapp Animation" style="zoom:70%;" />


- QuickSdk proguard integration

- QuickSdk Android support libraries version conflict bug fixes

- SuperSdk back button bug fix

- SuperSdk işcep integration completed

   <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/superApp1.jpeg style="zoom:30%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/superApp2.jpeg style="zoom:30%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/superApp3.jpeg style="zoom:30%;" />


   <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/superApp4.jpeg style="zoom:30%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/superApp5.jpeg style="zoom:30%;" />

- Analyzed some Leasing screens

   Home

   Hesaplama Araçları

- Components auto height and width bug fix

- Moralabs engine support

   ScopeSlote

- Support was given to Moralabs components, and testing and feedback was provided for completed components.

   VFileInput, VInlineDatePicker, VDivider, VDialog


Quick iOS:
------------------

- Lottie loading animation added.

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iosLottieAnimation.gif alt="Superapp Animation" style="zoom:70%;" />

- Components tested.
(breadscrumbs, devexpress, bottomnavigation, vmenu, snackbar, vinlinedatepicker)

- The size value calculated according to the VIcon size "xSmall-small-large-xLarge-size" property values is transmitted to the mobile.
- The VAppBar height has been reduced by a certain percentage and the transmission to mobile has been removed. The height calculated according to the device is transmitted to the mobile without changing it.
- The mobile color transmission problem has been resolved when the Component color value is given hex color code as '#ef5350'.
# Quick Release Notes - Sprint 27

## Vuetify 

### New Features

- **Selecting Parent**: A tree view icon now appears when a user selects a component. The icon displays a list of parents of the current component when clicked, and now users can navigate through components by selecting up to 3 parents from the list.

  ![Select Parent](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/SelectParent.gif)


- A new popup window on Golden Layout now takes its title from the pane that is opened.

  ![Popup Title](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/popupTitle.PNG)
 

- IAM- Passing custom query parameter to identity provider (https://wiki.softtech.com.tr/display/QU/Plateau+UI+Entegrasyonu#PlateauUIEntegrasyonu-CONFIGUREPROJECT)

- Added clearable and hideMenu properties to the VInlineDatePicker component. The hideMenu property hides the popup menu on the component when used.

  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VInlineDatepicker_hideMenu.gif)
 

### Bug Fixes

- Fixed the VExpansionPanels qValue issue.

- When the pdf was displayed in QDocumentViewer, if the src was given in base64 format, the total page area was 0. This bug has been fixed.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/pdfExample.png)

- The problem of not resetting VTextfields with time type has been resolved.

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTimeTextFieldReset.gif)


## Rally & Sprinkle

### New Features

- CellClassData prop in RTable updated.  Users can change the style of a unique cell on the table. (Sample qjson file and usage explanation can be accessed via PLT-11168)

  ![image](http://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RTable_cellColor.PNG)
  

### Bug Fixes

- The minValue and maxValue controls of the RColumnNumericInput component are provided

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RColumnNumericInputMinMaxValue.gif)
  

- Fixed redirect issue after Iam logout

  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RallyIamRedirectIssue.gif)
  

- From the link created for new users in Rally UI, a redirect to the password change page was provided and the page was localized.
  
  ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RallyGeneratePassword.gif)


## Documentations - Editor Help 

- Our sample qjson files started to be added under discourse

- https://discourse.rally.softtech/ 

- https://discourse.rally.softtech/t/vtextfield-componentindeki-format-ve-formatvalues-propertylerinin-runtime-aninda-guncellenmesi/324

- https://discourse.rally.softtech/t/nar-ekranlarinda-kullanilan-vdatatable-komponentlerine-ait-rows-per-page-acildigi-zaman-sayfanin-farkli-noktalarinda-acilmasi/323

- https://discourse.rally.softtech/t/dxdatagrid-de-filtre-ya-da-siralama-uygulandiginda-filtreleri-temizle-butonunun-gorunur-olmamasi/322

- https://discourse.rally.softtech/t/dxdatagrid-komponentinin-ekran-yuklendiginde-refresh-olmamasi-ve-sayfada-ilk-sutunun-tum-satiri-kaplamasi/321

- https://discourse.rally.softtech/t/combobox-tan-yapilan-secimlere-gore-dxdatagrid-de-filtreleme-yapilmasi/223

- https://discourse.rally.softtech/t/vtextfield-componentinde-disaridan-paste-isleminin-engellenmesi/344

- https://discourse.rally.softtech/t/buton-uzerinde-vmenu-nun-tetiklenmesi/345


## Quick Coral

- 29 screens done on iOS and 11 screens done on Android. 

- 36 new plt on Android and 30 new plt on iOS

- 27 plt closed on iOS and 57 plt closed on Android

### Quick Android:

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/review_quick_anroid.gif" alt="review_quick_anroid" style="zoom: 67%;" />

- Simulator performance is upgraded

- Consent Manager is implemented

- QR Reader component is implemented

- Using QR_Reader component in Simulator and MiniAppTester activities is in progress

- Apply filter button was not working properly ;

  ​	Selected data did not appear correctly when applying the filter was called and returning to the page.

- Components: 

  ​	VFileInput : Crash fix  

  ​	VSelect : Height and Align fix  

  ​					Multiplexing of data issue fixed

  ​	Alert : Alert icon problem fixed

  ​	TextField : Text centering issue fixed

  ​	VRadio - VRadioGroup : Paddings fixed



### Quick IOS:

  <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/review_quick_coral_ios.gif" alt="review_quick_ios" style="zoom:60%;" />



- Quick and MiniApp simulator documentation updated.

- Development for embedded banking started. (loading, pipeline, alert)

- PLT support for screens for IsLeasing KKT :

  ​	VCard, VInlineDatePicker, VDialog, VSelect	

- Leasing IAM Methods Added

  ​	Appversion method

  ​	DeviceUniqueID method

  ​	Getting Hash method

  ​	Public-Private key generator methods

  ​	About device model method

  ​	Private key reader method

  ​	Signing method

- RenderingUI
   - MainCss updates     

 - QuickComponents

  - ExpansionPanels showPanels fix

  - VBtn block fix

  - InputBase messageText color update

  - mdi-minus icon added, expansion panel chevron fix


- QuickBridge

  - IAM Version Update developments
  - Brdigets updates
### *Quick Release Notes - Sprint 22



## Vuetify (version:)

### **New Features:**



- DxTreeList component that shows data in the form of a multi-column tree view is added.


![DxTreeList](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/DxTreeList.gif)





- The subcomponents of the **DxColumn** component can be managed from the children tab. 


![DxColumn Children](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/releasenotes/dxcolumn-child.gif)




- Made Chart components appear under Charts group. With the word "Chart" as a SearchKey, chart components are provided. Chart component documentation/examples have been added under help.
  
  ![VChart_Document_Information](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VChart_Document_Information.gif)


- Chart.js v2.9.4 version is uptated to Chart.js v3.6.1 version. ChartDataLabels v2.0.0 is used. Chart components can be examined in detail from the ChartJS. ChartDataLabels plugin is used for Chart components label. This is Highly customizable Chart.js plugin that displays labels on data for any type of charts. Datalabels properties are added to the all Chart components.  ( https://jira.softtech.com.tr/browse/PLT-7720 )

	https://www.chartjs.org/docs/latest/charts/bar.html
	https://www.chartjs.org/docs/latest/charts/doughnut.html
	https://www.chartjs.org/docs/latest/charts/line.html
	
	https://master--chartjs-plugin-datalabels.netlify.app/guide/options.html 
	https://master--chartjs-plugin-datalabels.netlify.app/samples/charts/bar.html
	https://master--chartjs-plugin-datalabels.netlify.app/samples/charts/doughnut.html
	https://master--chartjs-plugin-datalabels.netlify.app/samples/charts/line.html
	
	![VChart_ChartDataLabels](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VChart_ChartDataLabels.gif)

- tension property is added to the LineChart component, that Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.  ( https://jira.softtech.com.tr/browse/PLT-7720 )
	
	![LineChart_TensionProp](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/LineChart_TensionProp.gif)
	
- xDrawOnChartArea, yDrawOnChartArea, xDisplay, yDisplay properties are added to the LineChart and BarChart components. ( https://jira.softtech.com.tr/browse/PLT-7720 , https://jira.softtech.com.tr/browse/PLT-8531 )
  xDrawOnChartArea and yDrawOnChartArea : If true, draw lines on the chart area inside the axis lines. This is useful when there are multiple axes and you need to control which grid lines are drawn.
  xDisplay and yDisplay : If false, do not display grid lines for this axis. 	
	
	![LineChartAndBarChart_LinesDisplayProp](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/LineChartAndBarChart_LinesDisplayProp.gif)
	
- indexAxis property is added to the BarChart component. The base axis of the dataset. 'x' for vertical bars and 'y' for horizontal bars.  ( https://jira.softtech.com.tr/browse/PLT-8531 )
	
	![BarChart_indexAxisProp](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/BarChart_indexAxisProp.gif)
	     	

- title, titleDisplay, legendDisplay, legendPosition are added to the all Chart components. ( https://jira.softtech.com.tr/browse/PLT-8531 , https://jira.softtech.com.tr/browse/PLT-8617 )	
  title : Title text to display.
  titleDisplay : Is the title shown?	
  legendDisplay : Is the legend shown?
  legendPosition : Position of the legend.
  
  ![Charts_titleDisplay_legendDisplay_legendPosition_Prop](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/Charts_titleDisplay_legendDisplay_legendPosition_Prop.gif)



- In order to trigger an event on qjson with a shell application, trigger method has been opened on websdk.
- vTextfield ChildManager is added.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/vtextfieldchildmanager.gif)

- dxDatagrid onContentReady event is added.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/dxDatagrid-onContentReadyEvent.PNG)



- VCombobox errorCount prop is added

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VCombobox_errorCount.PNG)



- VInlineDatePicker compatibility with different date formats has been ensured.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VinlineDatePickerDifferentDateFormat.gif)



- VTextField maxlength prop could be replaceable with attr element.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VtextField-maxlength-prop.gif)

- Added onClear event to VInlineDatePicker.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VinlineDatePicker-onClick%20event.jpg)





- VCombobox click and blur events are added.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VCombobox_basicEvents.gif)



**### \**Bug Fixes:\****



- When copy-pasting the fields written with regex, the counter property has the correct value. ( https://jira.softtech.com.tr/browse/PLT-7511 )

	![VTextField_RegexCopyPasteCounter](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/VTextField_RegexCopyPasteCounter.gif)







- Components that doesnt shown in Rally shell added to Websdk.ts file. (VSnackbar and VListItemAction)




 **## Sprinkle(sprinkle-ui version:)**



**### \**New Features:\****



- **multipleSort** prop and **multipleSortChange** event are added on RTable. Sortable columns can be controlled with the **"sortOptions"** parameter.

  ![RTable MultiSort](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/releasenotes/rtable-multisort.gif)



- In RallyUI, "timerOperation" event is called to stop Qtimer running on Quick-2 screen when home and exit buttons are pressed. For this, it is necessary to have the "timerOperation" event in the messaging component on the Quick-2 screen. ( https://jira.softtech.com.tr/browse/PLT-8359 )



- Improvements have been made so that the RallyCustomer component in the Rally shell can communicate with Quick 2.0 screens.


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/CustomerChange.gif)



- Rally shell pipeline.qjson has been integrated, so the steps in our pipeline.qjson file will be followed in every service call.


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/RallyPipeline.gif)

- For Quick 2.0 screens, the screens are opened in a new tab in the Quick.go method



**### \**Bug Fixes:\****

- Up-to-date version of Quick-1 screens has been installed in RallyUI. Thus, the current screen will be loaded every time, not from the cache. ( https://jira.softtech.com.tr/browse/PLT-8974 )



Quick Coral :
------------------

- Completed from Leasing screens this sprint Coral
  Android: 34 screens complete
  iOS: 50 screens complete

  Mobile Application Screens
  Our Screens Displayed Correctly on IOS Mobile: 29 (My policies bug fix continues)
  Our Screens Displayed Correctly on Android Mobile: 7 (KVKK, OTP, Payment Plan Detail, Company Detail, Announcement, Announcement detail, Calculation tools screens are in the test/bug fix process)

  

  <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/HomeScreenAndroidFlow.gif alt="HomeScreenAndroidFlow" style="zoom:75%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/paymentPlainDetailAndroidFlow.gif alt="paymentPlainDetailAndroidFlow" style="zoom:75%;" /><img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/ContactUsAndroidScreen.jpg alt="ContactUsAndroidScreen" style="zoom:30%;" />
    <img src=https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/iOSLottieLoading.gif alt="iOSLottieLoading" style="zoom:70%;" />

  

  Quick Android:
  ------------------

- QMap component development completed.

- Optimized rendering code and view refreshing.

- Getting icon size from css font size method added.

- Fixed problems

  Bug fixed when updating styles after dynamic components rendered.

  Component’s view not responding error bug fixed when fragment onStop lifecycle event called.

  VBtnToggle component issues resolved

  VBottomSheet component has been changed and the encountered errors have been resolved

  Home screen problems solved and ready for testing

  Fixed issues with test on PaymentPlanDetail screen

  Problems in the test on the Calculator screen have been resolved

  Problems in the test on the UpcomingPaymentPlanDetail screen have been resolved

  VSelect text formatting and multiline problems fixed.

  Support was given to Moralabs components, and testing and feedback was provided for completed components:
  VStepper, ExpansionPanel.

  Components tested

  VStepper, ExpansionPanel,

  

Quick iOS:
------------------

- Components which moralabs developed have been tested, feedback provided.

- The AutoComplete component has finished to be developed.

- Embedded banking, loading and pipeline jsons are made retrievable.

- Embedded banking, deep link parameters have been passed to Quick.

- Conversion of frameworks to xc frameworkworks completed.

- Plt support was provided to leasing test screens.

- Fixed problems:

  Fixed loading animation size.




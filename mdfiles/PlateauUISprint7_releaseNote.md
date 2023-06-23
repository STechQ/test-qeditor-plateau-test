# Release Notes 03.04.2023

### Plateau UI Release Notes - Sprint 7

## ![](https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-studio-common/plateau-studio/party-horn.svg) New Features

#### **UI Module**

- With the new style improvements, new font definitions have been added to the areas where font selection is made. Added font families are as follows:
  
	**Google Fonts** (more about: https://fonts.google.com/)
	- Roboto
	- Open Sans
- Montserrat
	- Lato
	- Poppins
	- Source Sans Pro
	- Oswald
	- Nunito
	- Inter
	- Raleway
	- Rubik
  
	**Microsoft Fonts** (more about: https://learn.microsoft.com/en-us/typography/font-list/)
	- Verdana
	- Arial
	- Segoe UI
	<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/styleFonts.gif" width="640" />
- A field showing the id of the currently working component has been added above the Style tab.
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/styleCompId.png" width="640" />
- Adjusted the spacing and alignments in the overview in the definition fields on the right side of the editor when clicking on the current component.
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/paddings.gif" width="640" />

 - The 'Size' property in the style tab has been moved to the 'Layout' group. Thus, different widths and heights can be given at different resolutions.

- Added props to **VAutocomplete** component
  
  | Name      | Type    | Default | Description       |
  | --------- | ------- | ------- | ----------------- |
  | format | string | undefined   | Specifies which masking type to apply |
  | formatValues | string | undefined   | Applies specified options to the masking |

-  **Time Cartesian Axis** feature added to Line and Bar Charts. ( https://jira.softtech.com.tr/browse/PLT-15229 )

Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line and bar charts. Time cartesian axes are included in Chart.js by default.

The time scale is used to display times and dates. Data are spread according to the amount of time between data points. When building its ticks, it will automatically calculate the most comfortable unit base on the size of the scale.

**For More Information:**
<a href="https://www.chartjs.org/docs/latest/axes/cartesian/time.html" target="_blank">Time Cartesian Axis</a>

<a href="https://www.chartjs.org/docs/latest/axes/cartesian/time.html#display-formats" target="_blank">Time Display Formats</a>

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Charts/BarChart_Type_Time_Sample.PNG" width="640" />

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/Charts/LineChart_Type_Time_Sample.PNG" width="640" />


Added props to **Line and Bar chart** components.

| Name      | Type    | Default | Description       |
| --------- | ------- | ------- | ----------------- |
| xType      |                   string                    |         | For Time Cartesian Axis  use 'time' |
| xMin      |                   string                    |         | The minimum item to display |
| xMax      |                   string                    |         | The maximum item to display |
| xTimeDisplayFormatsMillisecond      |                   string                    |    "h:mm:ss.SSS aaaa"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsSecond      |                   string                    |    "h:mm:ss aaaa"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsMinute      |                   string                    |    "h:mm aaaa"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsHour      |                   string                    |    "ha"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsDay      |                   string                    |    "MMM d"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsWeek      |                   string                    |    "PP"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsMonth      |                   string                    |    "MMM yyyy"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsQuarter      |                   string                    |    "qqq - yyyy"     | Sets how different time units are displayed. |
| xTimeDisplayFormatsYear      |                   string                    |    "yyyy"     | Sets how different time units are displayed. |
| xTimeIsoWeekday      |                   boolean or number                    |         | If boolean and true and the unit is set to 'week', then the first day of the week will be Monday. Otherwise, it will be Sunday. If number, the index of the first day of the week (0 - Sunday, 6 - Saturday) |
| xTimeParser      |                   string                    |         | Custom parser for dates |
| xTimeRound      |                   string                    |         | If defined, dates will be rounded to the start of this unit. |
| xTimeTooltipFormat      |                   string                    |         | The format string to use for the tooltip. |
| xTimeUnit      |                   string                    |         | If defined, will force the unit to be a certain type. See Time Units section below for details. |
| xTimeMinUnit      |                   string                    |    'millisecond'     | The minimum display format to be used for a time unit. |

 - **quick.Quick.copyToClipboard** method created. Method copies a specified value to the clipboard.

	> quick.Quick.copyToClipboard(value:string)
	> quick.Quick.copyToClipboard(components.myTextField.qValue) 

 - List of the Web components are available with the Style System.

    * QFrame
      * Size
      * Margin
      * Padding
      * Box Shadow
      * Outer Border
    * VList
      * Size
      * Box Shadow
      * Background Color
      * Margin
      * Padding
    * VListItem
      * Title Font
      * SubTitle Font
      * Background Color
      * Item Select Color
      * Box Shadow
      * Outer Border
    * VListGroup
      * Header Background Color
      * Background Color
      * Item Select Color
      * Box Shadow
      * Outer Border
      * Font
      * Size
    * VProgressLinear
      * Padding
      * Margin
      * Size
      * Default Color
      * Background Color
      * Indeterminate Color
      * Box Shadow
      * Outer Border
    * VProgressCircular
      * Padding
      * Margin
      * Size
      * Overlay Stroke Width
      * Underlay Stroke Width
      * Overlay Color
      * Underlay Color
      * Indeterminate Color
      * Background Color
      * boxShadow
      * Outer Border
    * QMap
      * Size
      * Outer Border
      * Margin
      * Padding
      * Box Shadow
    * VBtnToggle
      * Size
      * Background Color
      * Active Background Color
      * Active Font Color
      * defaultFontColor
      * Box Shadow
      * Font
      * Outer Border

  

- List of the Web components that can use **border structure** in the style system.

  - VStepper

    * Inactive Step Border
    * Active Step Border
    * Completed Step Border
    * Outer Border

  - VTabs

    * Outer Border
    * Active Tab Border
    * tabsBarBorder

  - VExpansionPanels

    * Outer Border
    * Panel Border
    * Panel Header Border
    * Panel Content Border

  - VAlert

    * Outer Border
    * Inner Border

  - VBtn

    * Border

  - VCard , VContainer , VRow , VCol , QMenu , VImg , QMenu , VSlider , VAvatar , VDivider , VRadioGroup , VSlideGroup , VMenu , VStepperContent , VStepperHeader ,  VStepperItems

    * Outer Border





## ![](https://stechq.github.io/cdn/release/notes/plateau-studio/plateau-studio-common/plateau-studio/bugs.svg) **Bug Fixes**


#### **UI Module**

 - The current component's style state in the right tab is added to the other tab states. You can see which tab was open in the qjsons between them in Plateau Studio.

 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/StyleTabState.gif" width="640"/>
	

 - The state of the model is held even if the page is not saved in Plateau Studio.

- A bug in the **VNavigationDrawer** component that cannot be seen in the preview mode is fixed.

- A bug is fixed which causes a loss of the highlighted component between the qjsons.

- In the render area, slow resize movement and browser crash issues are fixed by removing the unnecessary amount of event listeners.

- Style issue has been fixed in uses where component definitions such as quick.alert are made differently. (https://jira.softtech.com.tr/browse/PLT-15307)
- When a new page is selected, version control has been added to the new style fields in the components, and an arrangement has been made for shell editors that do not use the style editor.

- Fixed the **pageBackgroundColor** property in the **Messaging** component not reflecting.
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/messagingBG.gif" width="640" />

- Fixed a crash in the editor when adding the **VCheckbox** component.

- An editor performance bug is fixed when giving a style attribute to a component.

- Component IDs are now resetting when the new page is created.

- A bug is fixed when an event dialog is opened and written with some code, it was remaining open and without code after switching qjsons.

- **VTextArea** height prop issues fixed.

- **VTabs** and **VTabItems** were not visible in VTabs component. The Tabs content fixed and now visible.

- **VSlideGroup** items scrolling issue fixed.

- Clicking event for the **Vicon** fixed.

- **VTextfield** showing multiple error messages fixed.

- **Label** size update when text change fixed.

- **VFileInput** not responding when clicked fixed.

- **VFileInput** multiple opening image select screen fixed.

- **VImg** alignment issues fixed.

- **VBottomNavigation** default shadow removed.

- **VAppbar** height issue fixed.

- **VCard** elevation issue fixed.

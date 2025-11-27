# GoldenLayout

* GoldenLayout is a multi-window javascript layout manager for webapps.
You can create panes and customize it as below.   
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/goldenLayout.jpg" width="800" height="500">


* You can add panes to GoldenLayout with settings tab. Just write the name of the pane you want to create and place it where you want. 
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/goldenLayout2.gif" width="1400" height="715">


* Now you can customize panes as you wish.
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/goldenLayout3.gif" width="1400" height="715">


* If you want to change pane place while you are designing and blocked by the components wrapper, you can always close the wrappers with a click.
<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/goldenLayout4.gif" width="1400" height="715">


 * You can popout/popin panes with the popout button in the pane. And You can position the panes where you think they are most comfortable to work with.
 <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/goldenLayout5.gif" width="1400" height="715">


## GoldenLayoutQID.getClosedPanes()

You can get the list of closed panes with getClosedPanes() method. this method returns the list of pane names that were closed in runtime. 

## Quick.createChildren()

If you close the panes with the close button at runtime and want to open them back, you can use the Quick.createChildren method.
Note that you must have created this pane before in design mode to do this.
<a href="" onclick="this.href='?q=qjsons/createClosedPanes.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Create Closed Panes</a>


You can also create Dynamic Childeren with template child.
<a href="" onclick="this.href='?q=qjsons/createChildren.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>createChildren</a>



### Properties

**<u>-width</u>**

Sets the outer width of the layout.

**<u>-height</u>**

Sets the outer height of the layout.

**<u>-Dimensions</u>**

Dimensions property takes 6 arguments which are borderWidth, minItemHeight, minItemWidth, headerHeight, dragProxyWidth, and dragProxyHeight. This property helps to manage layout configuration.



***<u>borderWidth</u>***

borderWidth argument sets the width of the borders between layout items. *(type: number, default: 5)*



***<u>minItemHeight</u>** & **<u>minItemWidth</u>***

minItemHeight and minItemWidth arguments set a limit to the items' width and height when resizing on the layout items occurs. *(type: number, default: 10)*

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/minItemHeight-minItemWidth.gif" width="1400">


***<u>headerHeight</u>***

headerHeight argument adjusts the height of the header elements. *(type: number, default: 20)*



***<u>dragProxyWidth</u>** & **<u>dragProxyHeight</u>***

dragProxyWidth and dragProxyHeight arguments help adjust the height and the width of a layout item when an item is dragged. 



dragProxyWidth: *(type: number, default: 300)*

dragProxyHeight: *(type: number, default: 200)*

<u>Sample usage in dimensions prop:</u> {dragProxyWidth = '300px', dragProxyHeight = '200px'}


<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/dragProxy.jpg" width="1400">



### Events


**<u>-activeContentItemChanged</u>**

The event takes contentItem as a parameter and fired whenever a different item is selected from the stack.

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/activeContentItemChanged.gif" width="1400">




**<u>-paneClosed</u>**

The event takes childName as a parameter and fired whenever an item is deleted.

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/paneClosed.gif" width="1400">




**<u>-paneCreated</u>**

The event takes childName as a parameter and fired whenever an item is added.

<img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/goldenLayout/paneCreated.gif" width="1400">

**QUICK**

| Attribute | Description| Type |
| ------ | ------ | ------ |
| QID | Id of the component | String|
| Render | Render the component | Boolean |
| visible | Visibility of component | Boolean |

**OTHERS**

| Attribute | Description | Type | Default |
| ------ | ------ | ------ | ------ |
| width | Sets the width for the component | String | 256 |
| miniVariantWidth | Designates the width assigned when the mini prop is turned on | String | 56 |
| color | Applies specified color to the control | String | 'primary' |
| menuData | Data of component | Array| - |
| fixed | Applies position: fixed to the component | Boolean | false |
| autoCollapse | Collapse previous selection automatically | Boolean | false |
| title | Title of component| String | 'Menu' |


**EXAMPLES**


**menuData**

[{ 'menuItem' = true, code = 'Vasıta', imagePath = 'mdi-car', children = [{menuItem = 'true', imagePath = 'mdi-star', code = 'Otomobil'}] }]

| Attribute | Description | Type |
| ------ | ------ | ------ |
| menuItem | Visibility information in the menu | Boolean|
| code | What to write in the menu | String |
| imagePath | Icon of data (using 'materialdesignicons' to icon set) | String |
| children | Sub-items of data | Array |

**Color**

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/QMenuColor.png) ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/QMenuColorProp.png)

**Fixed**

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/QMenuFixed.png) ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/QMenuFixedProp.png)


**Title**

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/QMenuTitle.png) ![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMenu/QMenuTitleProp.png)


**Get menuData From Service and Apply Localization**

<a href="" onclick="this.href='?q=qjsons/QMenuExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QMenuExample</a>


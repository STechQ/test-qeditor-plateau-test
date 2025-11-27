## VTreeview


## Quick

| Attribute | Description          | Type    | Default    |
| --------- | -------------------- | ------- | ---------- |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean | -          |

## Others

| Attribute      | Description                                                  | Type    | Default        |
| -------------- | ------------------------------------------------------------ | ------- | -------------- |
| qValue         | Allows one to control which nodes are selected. The array consists of the item-key of each selected item. | Array   | []             |
| items          | An array of items used to build the treeview                 | Array   | []             |
| activatable    | Allows user to mark a node as active by clicking on it       | Boolean | false          |
| hovertable     | Applies a hover class when mousing over nodes                | Boolean | false          |
| openAll        | When true will cause all branch nodes to be opened when component is mounted | Boolean | false          |
| selectable     | Will render a checkbox next to each node allowing them to be selected | Boolean | false          |
| selectedColor  | The color of the selection checkbox                          | String  | 'accent'       |
| selectionType  | Controls how the treeview selects nodes. There are two modes available: ‘leaf’ and ‘independent’ | String  | 'leaf'         |
| active         | Syncable prop that allows one to control which nodes are active. The array consists of the item-key of each active item | Array   | []             |
| dense          | Decreases the height of the items                            | Boolean | false          |
| expandIcon     | Icon used to indicate that a node can be expanded            | String  | '$subgroup'    |
| itemChildren   | Property on supplied items that contains its children        | String  | 'children'     |
| itemKey        | Property on supplied items used to keep track of node state. The value of this property has to be unique among all items | String  | 'id'           |
| itemText       | Property on supplied items that contains its label text      | String  | 'name'         |
| multipleActive | When true, allows user to have multiple active nodes at the same time | Boolean | false          |
| offIcon        | Icon used when node is not selected. Only visible when selectable is true | String  | '$checkboxOff' |
| open           | Syncable prop that allows one to control which nodes are open. The array consists of the item-key of each open item | Array   | []             |
| openOnClick    | When true will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon | Boolean | false          |
| search         | The search model for filtering results                       | String  | undefined      |
| shaped         | Provides an alternative active style for v-treeview node. Only visible when activatable is true | Boolean | false          |
| transition     | Applies a transition when nodes are opened and closed        | Boolean | false          |

## 

## Events

| Attribute            | Description                                               |
| -------------------- | --------------------------------------------------------- |
| input(array)         | Emits the array of selected items when this value changes |
| update:active(array) | Emits the array of active items when this value changes   |
| update:open(array)   | Emits the array of open items when this value changes     |

## Slots

| Attribute | Description                   |                                                              |
| --------- | ----------------------------- | ------------------------------------------------------------ |
| append    | Appends content after label   | { item: any, leaf: boolean, selected: boolean, indeterminate: boolean, active: boolean, open: boolean } |
| label     | Label content                 | { item: any, leaf: boolean, selected: boolean, indeterminate: boolean, active: boolean, open: boolean } |
| prepend   | Prepends content before label | { item: any, leaf: boolean, selected: boolean, indeterminate: boolean, active: boolean, open: boolean } |




![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTreeview/treeview-1.jpeg)


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTreeview/treeview-2.jpeg)


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTreeview/treeview-3.jpg)


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VTreeview/treeview-4.jpg)

# SAMPLE QJSONS

<a href="" onclick="this.href='?q=qjsons/treeview.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>treeview</a>

<a href="" onclick="this.href='?q=qjsons/treeview2.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>treeview2</a>

<a href="" onclick="this.href='?q=qjsons/TreeViewExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>TreeViewExample</a>


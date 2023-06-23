## VMenu

## Quick

| Attribute       | Description                      |  Type   |  Default   |
| --------------- | -------------------------------- | :-----: | :--------: |
| QID             | Id of the component              | String  | EdtrComp_1 |
| Render          | Render of the component          | Boolean |     -      |
| DiscardSettings | DiscardSettings of the component | Boolean |     -      |



## Others

| Attribute           | Description                                                  | Type              |      Default      |
| ------------------- | ------------------------------------------------------------ | ----------------- | :---------------: |
| attack              | The designated model value for the component.                | Any               |       false       |
| qValue              | Specifies the vmodel value of the menu. whether the menu is open or closed | Boolean           |       false       |
| class               | prop that determines the class to add to the menu            | String            |     undefined     |
| closeOnContentClick | Designates if menu should close when its content is clicked. | Boolean           |       false       |
| eager               | Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO. | Boolean           |       true        |
| left                | Aligns the component towards the left.                       | Boolean           |       false       |
| minWidth            | Sets the minimum width for the content.                      | Number \| String  |     undefined     |
| offsetX             | Offset the menu on the x-axis. Works in conjunction with direction left/right | Boolean           |       false       |
| offsetY             | Offset the menu on the y-axis. Works in conjunction with direction top/bottom | Boolean           |       false       |
| returnValue         | The value that is updated when the menu is closed - must be primitive. Dot notation is supported | Any               |     undefined     |
| right               | Aligns the component towards the right.                      | Boolean           |       false       |
| rounded             | Designates the border-radius applied to the component.       | Boolean \| String |     undefined     |
| top                 | Aligns the content towards the top.                          | Boolean           |       false       |
| transition          | Sets the component transition. Can be one of the built in transitions or one your own. | Boolean \| String | v-menu-transition |



## Slots

| Attribute | Description                                                  |
| --------- | ------------------------------------------------------------ |
| activator | When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation `{   attrs: { role: string, aria-haspopup: boolean, aria-expanded: string },   on: { [eventName]: eventHandler },   value: boolean }` |
| default   | The default component slot                                   |



## Events

| Attribute     | Description                                |
| ------------- | ------------------------------------------ |
| click:outside | Trigger when you click marker on the menus |




![VMenu-1](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VMenu/VMenu-1.png)

![VMenu-2](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VMenu/VMenu-2.png)


#SAMPLE QJSONS

<a href="" onclick="this.href='?q=qjsons/vMenu.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>vMenu</a>

<a href="" onclick="this.href='?q=qjsons/VMenu_PopoverInTable.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VMenu_PopoverInTable</a>

<a href="" onclick="this.href='?q=qjsons/VMenu_sample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VMenu_sample</a>

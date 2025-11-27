## VSnackbars

## Quick

| Attribute | Description          |  Type   |  Default   |
| --------- | -------------------- | :-----: | :--------: |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean |     -      |

## Others

| Attribute     | Description                                                  | Type           |      Default       |
| ------------- | ------------------------------------------------------------ | -------------- | :----------------: |
| absolute      | Applies position: absolute to the component                  | Boolean        |       false        |
| app           | Respects boundaries of—and will not overlap with—other app components like v-app-bar, v-navigation-drawer, and v-footer | Boolean        |       false        |
| bottom        | Aligns the component towards the bottom                      | Boolean        |       false        |
| centered      | Positions the snackbar in the center of the screen, (x and y axis). | Boolean        |       false        |
| content-class | Apply a custom class to the snackbar content                 | String         |     undefined      |
| elevation     | Designates an elevation applied to the component between 0 and 24. | Number-String  |     undefined      |
| multi-line    | Gives the snackbar a larger minimum height.                  | Boolean        |       false        |
| outlined      | Removes elevation (box-shadow) and adds a *thin* border.     | Boolean        |       false        |
| rounded       | Designates the border-radius applied to the component.       | Boolean-String |     undefined      |
| shaped        | Applies a large border radius on the top left and bottom right of the card. | Boolean        |       false        |
| text          | Applies the defined color to text and a low opacity background of the same. | Boolean        |       false        |
| tile          | Removes the component’s border-radius.                       | Boolean        |       false        |
| timeout       | Time (in milliseconds) to wait until snackbar is automatically hidden. Use `-1` to keep open indefinitely (0 in version < 2.3 ). It is recommended for this number to be between 4000 and 10000. | Number-String  |        5000        |
| transition    | Aligns the content towards the top                           | Boolean-String | v-snack-transition |
| value         | Controls whether the component is visible or hidden          | Any            |     undefined      |
| vertical      | Stacks snackbar content on top of the actions (button)       | Boolean        |       false        |
| left          | Aligns the component towards the left                        | Boolean        |       false        |
| top           | Aligns the content towards the top                           | Boolean        |       false        |
| right         | Aligns the component towards the right                       | Boolean        |       false        |


## Events

| Attribute | Description                                   |
| --------- | --------------------------------------------- |
| click     | Trigger when you click marker on the snackbar |

## Example

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSnackbar/snackbar-1.png)


![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSnackbar/snackbar-2.png)


![rounded](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSnackbar/rounded.png)


![outline](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSnackbar/outline.png)


![text](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSnackbar/text.png)


<a href="" onclick="this.href='?q=qjsons/snackbars.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>snackbars</a>


## VButton

## Quick

| Attribute       | Description                      |  Type   |  Default   |
| --------------- | -------------------------------- | :-----: | :--------: |
| QID             | Id of the component              | String  | EdtrComp_1 |
| Render          | Render of the component          | Boolean |     -      |
| DiscardSettings | DiscardSettings of the component | Boolean |     -      |



## Others

| Attribute          | Description                                                  | Type              |  Default  |
| ------------------ | ------------------------------------------------------------ | ----------------- | :-------: |
| absolute           | Applies position: position relative to the component         | Boolean           |   false   |
| block              | Expands the button to 100% of available space                | Boolean           |   false   |
| bottom             | Aligns the component towards the bottom                      | Boolean           |   false   |
| color              | Applies specified color to the control                       | String            | undefined |
| depressed          | Removes the button box shadow                                | Boolean           |   false   |
| disabled           | Removes the ability to click or target the component.        | Boolean           |   false   |
| fab                | Button will become round                                     | Boolean           |   false   |
| fixed              | Applies position: fixed to the component                     | Boolean           |   false   |
| height             | Sets the height for the component.                           | Number \| String  | undefined |
| href               | Designates the component as anchor and applies the href attribute. | String \| Object  | undefined |
| icon               | Designates the button as icon. Button will become *round* and applies the text prop. | Boolean           |   false   |
| inputValue         | Controls the button’s active state                           | any               | undefined |
| link               | Designates that the component is a link. This is automatic when using the href or to prop | Boolean           |   false   |
| loading            | Adds a loading icon animation                                | Boolean           |   false   |
| outlined           | Outlined buttons inherit their borders from the current color applied | Boolean           |   false   |
| large              | Makes the component large                                    | Boolean           |   false   |
| left               | Aligns the component towards the left                        | Boolean           |   false   |
| retainFocusOnClick | Don’t blur on click                                          | Boolean           |   false   |
| right              | Aligns the component towards the right                       | Boolean           |   false   |
| ripple             | Applies the 'v-ripple' directive.                            | Boolean \| Object | undefined |
| tag                | Specify a custom tag used on the root element                | String            | 'button'  |
| text!              | Makes the background transparent. When using the color prop, the color will be applied to the button text instead of the background | Boolean           |   false   |
| tile               | Removes the component’s border-radius                        | Boolean           |   false   |
| to                 | Denotes the target route of the link                         | String \| Object  | undefined |
| top                | Aligns the content towards the top                           | Boolean           |   false   |
| type               | Set the button’s type attribute                              | String            | 'button'  |
| xLarge             | Makes the component extra large                              | Boolean           |   false   |
| xSmall             | Makes the component extra small                              | Boolean           |   false   |
| width              | Sets the width for the component                             | Number \| String  |   false   |
| rounded            | Applies a large border radius on the button                  | Boolean           |   false   |

## Events

| Attribute | Description                                 |
| --------- | ------------------------------------------- |
| click     | Trigger when you click marker on the button |



## Example

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VBtn/button.png)

QJson
 <a href=""
onclick="this.href='?q=qjsons/button.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>VBtn</a>

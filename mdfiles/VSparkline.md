## VSparkline

## Quick

| Attribute       | Description                      |  Type   |  Default   |
| --------------- | -------------------------------- | :-----: | :--------: |
| QID             | Id of the component              | String  | EdtrComp_1 |
| Render          | Render of the component          | Boolean |     -      |
| DiscardSettings | DiscardSettings of the component | Boolean |     -      |

## Others

| Attribute         | Description                                                  | Type                    |                    Default                     |
| ----------------- | ------------------------------------------------------------ | ----------------------- | :--------------------------------------------: |
| autoDraw          | Trace the length of the line when first rendered             | Boolean                 |                     false                      |
| autoLineWidth     | Automatically expand bars to use space efficiently           | Boolean                 |                     false                      |
| autoDrawDuration  | Amount of time (in ms) to run the trace animation            | Number                  |                      2000                      |
| autoDrawEasing    | The easing function to use for the trace animation           | String                  |                     'ease'                     |
| color             | Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](https://vuetifyjs.com/styles/colors#material-colors). | String                  |                   'primary'                    |
| fill              | Using the **fill** property allows you to better customize the look and feel of your sparkline. | Boolean                 |                     false                      |
| gradient          | An array of colors to use as a linear-gradient               | Array                   |       ['#f72047', '#ffd200', '#1feaea']        |
| gradientDirection | The direction the gradient should run                        | String                  |                     'top'                      |
| height            | Height of the SVG trendline or bars                          | String\|Number          |                       75                       |
| labelSize         | The label font size                                          | String\|Number          |                       7                        |
| labels            | An array of string labels that correspond to the same index as its data counterpart | Array                   |                       []                       |
| lineWidth         | The thickness of the line, in px                             | String\|Number          |                       2                        |
| showLabels        | Show labels below each data point                            | Boolean                 |                     false                      |
| radius            | For create shapes with rounded corners.                      | Number                  |                       10                       |
| smooth            | Number of px to use as a corner radius. `true` defaults to 8, `false` is 0 | Boolean\|String\|Number |                       10                       |
| type              | Choose between a trendline or bars                           | String                  |                    'trend'                     |
| value             | An array of numbers.                                         | Array                   | [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0] |
| width             | Width of the SVG trendline or bars                           | String\|Number          |                      300                       |


## Example


![Sparkline](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/VSparkline/Sparkline.png)


<a href="" onclick="this.href='?q=qjsons/Sparkline.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Sparkline</a>

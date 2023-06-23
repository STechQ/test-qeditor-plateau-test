## QMap

## Quick

| Attribute | Description          |  Type   |  Default   |
| --------- | -------------------- | :-----: | :--------: |
| QID       | Id of the component  | String  | EdtrComp_1 |
| Render    | Render the component | Boolean |     -      |

## Others

| Attribute | Description                   | Type   |            Default            |
| --------- | ----------------------------- | ------ | :---------------------------: |
| center    | Define center of QMap         | Object |       {lat=41, lng= 29}       |
| markers   | Define markers on QMap        | Array  | [{position={lat=41, lng=29}}] |
| zoom      | Define zoom value of the QMap | Number |             Skip              |
| mapType   | Define type of QMap           | String |            roadmap            |

## 

## Events

| Attribute    | Description                              |
| ------------ | ---------------------------------------- |
| click:marker | Trigger when you click marker on the map |
| click:map    | Trigger when you click map               |

### Values

| Attribute | Description                                     |
| --------- | ----------------------------------------------- |
| markers   | User can get list of markers with markers value |



![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QMap/QMap.PNG) 

**example js:** <a href="" onclick="this.href='?q=qjsons/QMapExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QMapExample.qjson</a>
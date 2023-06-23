# Description
Pipeline Component contains fields that determine and control the overall management of the application.

Pipeline Component should contain the following events.

| event| usage |
| ------ | ------ |
| onBeforeRequest| manipulate before request |
| onAfterResponse| manipulate the successful response |
| onAfterErrorResponse| manipulate the failed response |
| onPostRender| this event is triggered after each page render in the application |
| logHandler | control the logs (see the Client Side Log Handling document) |

# Location in the project
Pipeline Component must be located under 'settings/qjson' folder with name 'pipeline.qjson' in your qui project.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/pipelineComponent/pipelineQjson.png)

# Settings.yaml
Write the path of your pipeline.qjson in your settings.yaml file.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/pipelineComponent/pipelineSettings.png)

# Dynamic Request Manipulation
- Set data to Bag Store before send request in your page.
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/pipelineComponent/pipelineSampleRequest.png)
- Then get the stored data in your pipeline component and manipulate the request.
![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/pipelineComponent/pipelineOnBeforeRequest.png)

# Samples

# Sample Request Page
<a href="" onclick="this.href='?q=qjsons/pipelineSample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>pipelineSample.qjson</a>

# Sample Pipeline Component
<a href="" onclick="this.href='?q=qjsons/pipeline.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>pipeline.qjson</a>
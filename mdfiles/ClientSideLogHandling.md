# Client Side Log Handling

The system described below can be used to use the logs (EM.trace) written on the front page (qjson) and the logs printed on the engine (such as sending to service, keeping in the store etc.).

In order to access these printed logs, a custom event called **logHandler** must be written on the Messaging component in the **pipeline.json** file. A parameter is sent to this event after each log is printed, depending on the interface below.

```tsx
interface IMessage {
	message: string  // Log message
	type: string  // Debug | MobilDebug | Trace | Warning | Error
	time: string  // When the browser writes the message
	caller?: string  // Caller function of the message
}
```
### Filter Trace Logs
Log types can be filtered and printed according to the user's request. The following line to be written in the relevant event will provide this.

```tsx
//This line provide users to get Error logs
quick.EM.trace("",{logType:Logtype.Error})  

//This line provide users to get Trace logs
quick.EM.trace("",{logType:Logtype.Trace})

//This line provide users to get Warning logs
quick.EM.trace("",{logType:Logtype.Warning})
```

There is a variable in the "settings.yaml" file of the current project called **yamlLogType**. This variable able to take one of the five logtype which are **Debug | MobilDebug | Trace | Warning | Error**. Users should select one of them but this is not mandatory. Default log type is **Trace**.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/yamlLog.png)


Log types have their own priority order. When the user uses the above method, it calls the selected log and the following logs. The priority order is below.

```tsx
export  enum LogType {
	Debug = 0,
	MobilDebug = 1000,
	Trace = 200000, //100Kb
	Warning = 500000, //250Kb
	Error = 1000000  // 500Kb
}
```
### Filter Engine Logs

While page logs can be filtered with above **yamlLogType** usage, engine logs also can be filtered by using **minEngineLogLevel**. With this usage, logs from Quick engine itself can be filtered if the log has equal or below value than the given minEngineLogLevel that can be set in **settings.yaml** file.

![image](https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/releaseNotes/minEngineLogLevel.png)  
# Platform Information

In Quick there are different platforms that can run the qjson pages. These platfroms are **iOS, Android and Web**. This can be useful if the page requires different actions, layouts, component behaviour etc. based on the platform that it has been running.

## Platform Type

Returns the current platfrom type.

> quick.Quick.platform.getPlatformType() // returns "iOS" or "Android" or "Web"

## isMobile

Returns if the platform is mobile(Anroid & iOS)

> quick.Quick.platform.isMobile() // returns boolean

## isWeb

Returns if the platform is web browser("Web")

> quick.Quick.platform.isWeb() // returns boolean

## Get Device ID

Returns the device id that runs the application. It can be used in mobile devices.

> quick.Quick.platform.getDeviceId() // returns device id (string)


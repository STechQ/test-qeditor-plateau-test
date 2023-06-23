The QVideo embeds a media player which supports video playback into the document. 

### Props

| Props Name   | Type                | Description                                                  |
| ------------ | ------------------- | ------------------------------------------------------------ |
| src          | `String`            | Sets the current source of the video element.                |
| controls     | `Boolean`           | Sets whether the audio/video should display controls (like play/pause etc.) |
| width        | `String` | `Number` | The width of the video's display area.                       |
| height       | `String` | `Number` | The height of the video's display area.                      |
| autoPlay     | `Boolean`           | Sets whether the video should start playing as soon as it is loaded. |
| muted        | `Boolean`           | Sets whether the video is muted or not.                      |
| loop         | `Boolean`           | Sets whether the video should start over again when finished. |
| controlsList | `String`            | When specified, helps the browser select what controls to show on the media element whenever the browser shows its own set of controls. The allowed values are `nodownload`, `nofullscreen` and `noremoteplayback`. |
| poster       | `String`            | A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame. |
| preload      | `String`            | Sets whether the video should be loaded when the page loads. |

### Methods

| Methods Name | Description                                                  | Example Code                                                 |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| play         | Starts playing the video.                                    | `components.EdtrComp_1.play()`                               |
| pause        | Pauses the currently playing video.                          | `components.EdtrComp_1.pause()`                              |
| load         | Re-loads the video element.                                  | `components.EdtrComp_1.load()`                               |
| currentTime  | Sets or returns the current playback position in the video. (in seconds) | `components.EdtrComp_1.currentTime()`, `components.EdtrComp_1.currentTime(5)` |
| duration     | Returns the length of the current video. (in seconds)        | `components.EdtrComp_1.duration()`                           |
| currentSrc   | Returns the URL of the current video.                        | `components.EdtrComp_1.currentSrc()`                         |
| volume       | Sets or returns the volume of the video. (value from 0 to 1) | `components.EdtrComp_1.volume()`,`components.EdtrComp_1.volume(0.2)` |

### Events

| Events Name    | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| canPlay        | Fires when the browser can start playing the video.          |
| canPlayThrough | Fires when the browser can play through the video without stopping for buffering |
| durationChange | Fires when the duration of the video is changed.             |
| emptied        | Fires when the current playlist is empty.                    |
| ended          | Fires when the current playlist is ended.                    |
| error          | Fires when an error occurred during the loading of an video. |
| pause          | Fires when the video has been paused.                        |
| play           | Fires when the video has been started or is no longer paused. |
| playing        | Fires when the video is playing after having been paused or stopped for buffering. |
| progress       | Fires when the browser is downloading the video.             |
| rateChange     | Fires when the playing speed of the audio/video is changed.  |
| volumeChange   | Fires when the volume has been changed.                      |
| stalled        | Fires when the browser is trying to get media data, but data is not available. |
| suspend        | Fires when the browser is intentionally not getting media data. |
| timeUpdate     | Fires when the current playback position has changed.        |
| waiting        | Fires when the video stops because it needs to buffer the next frame. |

#### controls

The browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback. default value: `true`

| <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QVideo/QVideoControlFalse.png" alt="controlTrue" style="zoom: 50%;" /> | <img src="https://cdn.softtech.com.tr/ngsp-quick/nemo/dev/mdImages/QVideo/QVideoControlTrue.png" alt="controlFalse" style="zoom:50%;" /> |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                      **control = true**                      |                     **control = false**                      |

#### preload

This enumerated attribute is intended to provide a hint to the browser about what the author thinks will lead to the best user experience with regards to what content is loaded before the video is played. It may have one of the following values:

- `none`: Indicates that the video should not be preloaded.
- `metadata`: Indicates that only video metadata (e.g. length) is fetched.
- `auto`: Indicates that the whole video file can be downloaded, even if the user is not expected to use it.
- *empty string*: Synonym of the value. `auto`

### QJson Samples

 <a href=""
onclick="this.href='?q=qjsons/QVideoExample.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>QVideoExample</a>
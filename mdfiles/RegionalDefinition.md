
# Regional Definition

## Methods
1. quick.Quick.region.getRegionList()) ==> return region list
2. quick.Quick.region.setRegion("tr")) ==> set region for formatting definition
3. quick.Quick.region.getCurrentRegion()) ==> return current region
4. quick.Quick.region.getFormattingDefinitionByCurrentRegion() ==> return formatting definition for current region

## settings-proxy.js
file content
```json
"RegionalDefinition": [
	{
		"region": "tr",
		"FormattingDefinition": {
		"groupSeparator": {
			"overwrite": true,
			"value": "."
		},
		"radixPoint": {
			"overwrite": true,
			"value": ","
		},
		"digits": {
			"overwrite": false,
			"value": 2
		},
		"enforceDigitsOnBlur": {
			"overwrite": true,
			"value": true
		},
		"longDateFormat": {
			"overwrite": true,
			"value": "DD-MM-YYYY HH-MM"
		},
		"longTimeFormat": {
			"overwrite": true,
			"value": "HH-MM-SS"
		},
		"shortTimeFormat": {
			"overwrite": true,
			"value": "HH-MM"
		},
		"moneyFormat": {
			"overwrite": true,
			"value": "tr-TR"
		},
		"serviceDateFormat": {
			"overwrite": true,
			"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
		},
		"displayDateFormat": {
			"overwrite": true,
			"value": "dd/MM/yyyy"
		}
		}
	},
	{
		"region": "en",
		"FormattingDefinition": {
		"groupSeparator": {
			"overwrite": true,
			"value": "."
		},
		"radixPoint": {
			"overwrite": true,
			"value": ","
		},
		"digits": {
			"overwrite": false,
			"value": 2
		},
		"enforceDigitsOnBlur": {
			"overwrite": true,
			"value": true
		},
		"longDateFormat": {
			"overwrite": true,
			"value": "MM-DD-YYYY HH-MM"
		},
		"longTimeFormat": {
			"overwrite": true,
			"value": "HH-MM-SS"
		},
		"shortTimeFormat": {
			"overwrite": true,
			"value": "HH-MM"
		},
		"moneyFormat": {
			"overwrite": true,
			"value": "en-US"
		},
		"serviceDateFormat": {
			"overwrite": true,
			"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
		},
		"displayDateFormat": {
			"overwrite": true,
			"value": "MM/dd/yyyy"
		}
		}
	},
	{
		"region": "de",
		"FormattingDefinition": {
		"groupSeparator": {
			"overwrite": true,
			"value": "."
		},
		"radixPoint": {
			"overwrite": true,
			"value": ","
		},
		"digits": {
			"overwrite": false,
			"value": 2
		},
		"enforceDigitsOnBlur": {
			"overwrite": true,
			"value": true
		},
		"longDateFormat": {
			"overwrite": true,
			"value": "YYYY-MM-DD HH-MM"
		},
		"longTimeFormat": {
			"overwrite": true,
			"value": "HH-MM-SS"
		},
		"shortTimeFormat": {
			"overwrite": true,
			"value": "HH-MM"
		},
		"moneyFormat": {
			"overwrite": true,
			"value": "en-US"
		},
		"serviceDateFormat": {
			"overwrite": true,
			"value": "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
		},
		"displayDateFormat": {
			"overwrite": true,
			"value": "dd-MM-yyyy"
		}
		}
	}
]
```

Example file: <a href="" onclick="this.href='?q=qjsons/region_definition_example.qjson'; this.target=(window.location !== window.parent.location) ? '' : '_blank';"  target=''>Regional Definition Example</a>

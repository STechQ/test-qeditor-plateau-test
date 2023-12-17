let pjson = {
	"pJson": [
		{
			"T": "VCombobox",
			"P": {
				"ID": {
					"H": "EdtrComp_2",
					"T": "prop"
				},
				"label": {
					"H": "'Select All'",
					"T": "prop"
				},
				"items": {
					"H": "[{text = 'test1', value = 1},\n                                 { text = 'test2', value = 2}]",
					"T": "prop"
				},
				"multiple": {
					"H": "true",
					"T": "prop"
				}
			},
			"E": {
				"change": {
					"H": "if (value.length == EdtrComp_2.items.length){\r\n    EdtrComp_1.internalValue = true\r\n}else{\r\n    EdtrComp_1.internalValue = false\r\n}",
					"P": "value"
				}
			},
			"C": {
				"prepend-item": {
					"c": [
						{
							"T": "VCheckbox",
							"P": {
								"ID": {
									"H": "EdtrComp_1",
									"T": "prop"
								},
								"label": {
									"H": "'Select All'",
									"T": "prop"
								},
								"class": {
									"H": "'ml-4'",
									"T": "class"
								}
							},
							"E": {
								"click": {
									"H": "res = []\r\nif (EdtrComp_1.internalValue){\r\n    res = EdtrComp_2.items\r\n}\r\nEdtrComp_2.internalValue = res",
									"P": ""
								}
							},
							"C": {},
							"_Editor": {
								"eID": "EdtrComp_1"
							},
							"O": {
								"cType": "child"
							}
						}
					],
					"cType": "slot"
				}
			},
			"_Editor": {
				"eID": "EdtrComp_2"
			},
			"O": {
				"cType": "child"
			}
		}
	],
	"cJson": [
		{
			"T": "VCombobox",
			"P": {
				"ID": {
					"H": "EdtrComp_2",
					"T": "prop"
				},
				"label": {
					"H": "╬'Select All'╩╩",
					"T": "prop"
				},
				"items": {
					"H": "╬[]╠{}╠=╣text╩╠'test1'╩╩╠=╣value╩╠1╩╩╩╠{}╠=╣text╩╠'test2'╩╩╠=╣value╩╠2╩╩╩╩╩",
					"T": "prop"
				},
				"multiple": {
					"H": "╬true╩╩",
					"T": "prop"
				}
			},
			"E": {
				"change": {
					"H": "╬if╣==╣.╣value╩╠length╩╩╠.╣.╣EdtrComp_2╩╠items╩╩╠length╩╩╩╠╬=╣.╣EdtrComp_1╩╠internalValue╩╩╠true╩╩╩╠╬=╣.╣EdtrComp_1╩╠internalValue╩╩╠false╩╩╩╩╩",
					"P": "value"
				}
			},
			"C": {
				"prepend-item": {
					"c": [
						{
							"T": "VCheckbox",
							"P": {
								"ID": {
									"H": "EdtrComp_1",
									"T": "prop"
								},
								"label": {
									"H": "╬'Select All'╩╩",
									"T": "prop"
								},
								"class": {
									"H": "╬'ml-4'╩╩",
									"T": "class"
								}
							},
							"E": {
								"click": {
									"H": "╬=╣res╩╠[]╩╩╬if╣.╣EdtrComp_1╩╠internalValue╩╩╠╬=╣res╩╠.╣EdtrComp_2╩╠items╩╩╩╩╠■╩╬=╣.╣EdtrComp_2╩╠internalValue╩╩╠res╩╩╩",
									"P": ""
								}
							},
							"C": {},
							"_Editor": {
								"eID": "EdtrComp_1"
							},
							"O": {
								"cType": "child"
							}
						}
					],
					"cType": "slot"
				}
			},
			"_Editor": {
				"eID": "EdtrComp_2"
			},
			"O": {
				"cType": "child"
			}
		}
	],
	"lrids": {},
	"clrids": {
		"tr-TR": {}
	},
	"description": {}
};
export default pjson
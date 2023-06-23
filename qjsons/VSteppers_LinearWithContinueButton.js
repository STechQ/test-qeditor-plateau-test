let pjson = {
	"pJson": [
		{
			"T": "Messaging",
			"P": {
				"ID": {
					"H": "EdtrComp_36",
					"T": "prop"
				}
			},
			"E": {
				"EndRender": {
					"H": "VSteppersComp.internalLazyValue = 1"
				}
			},
			"C": {},
			"_Editor": {
				"eID": "EdtrComp_36"
			},
			"O": {
				"cType": "child"
			}
		},
		{
			"T": "VStepper",
			"P": {
				"ID": {
					"H": "VSteppersComp",
					"T": "prop"
				}
			},
			"E": {},
			"C": {
				"default": {
					"c": [
						{
							"T": "VStepperHeader",
							"P": {
								"ID": {
									"H": "EdtrComp_3",
									"T": "prop"
								}
							},
							"E": {},
							"C": {
								"default": {
									"c": [
										{
											"T": "VStepperStep",
											"P": {
												"ID": {
													"H": "stepper1",
													"T": "prop"
												},
												"step": {
													"H": "1",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_5"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VDivider",
											"P": {
												"ID": {
													"H": "EdtrComp_8",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_8"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VStepperStep",
											"P": {
												"ID": {
													"H": "stepper2",
													"T": "prop"
												},
												"step": {
													"H": "2",
													"T": "prop"
												},
												"editable": {
													"H": "true",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_7"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VDivider",
											"P": {
												"ID": {
													"H": "EdtrComp_9",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_9"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VStepperStep",
											"P": {
												"ID": {
													"H": "stepper3",
													"T": "prop"
												},
												"step": {
													"H": "3",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_6"
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
								"eID": "EdtrComp_3"
							},
							"O": {
								"cType": "slot"
							}
						},
						{
							"T": "VStepperItems",
							"P": {
								"ID": {
									"H": "EdtrComp_2",
									"T": "prop"
								}
							},
							"E": {},
							"C": {
								"default": {
									"c": [
										{
											"T": "VStepperContent",
											"P": {
												"ID": {
													"H": "EdtrComp_10",
													"T": "prop"
												},
												"step": {
													"H": "1",
													"T": "prop"
												}
											},
											"E": {},
											"C": {
												"default": {
													"c": [
														{
															"T": "VBtn",
															"P": {
																"ID": {
																	"H": "EdtrComp_12",
																	"T": "prop"
																}
															},
															"E": {
																"click": {
																	"H": "stepper1.complete = true\r\nVSteppersComp.internalLazyValue = 2\r\n"
																}
															},
															"C": {
																"default": {
																	"c": [
																		{
																			"T": "QLabel",
																			"C": {},
																			"E": {},
																			"P": {
																				"ID": {
																					"H": "EdtrComp_13",
																					"T": "prop"
																				},
																				"text": {
																					"H": "'Continue'",
																					"T": "prop"
																				}
																			},
																			"_Editor": {
																				"eID": "EdtrComp_13"
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
																"eID": "EdtrComp_12"
															},
															"O": {
																"cType": "slot"
															}
														}
													],
													"cType": "slot"
												}
											},
											"_Editor": {
												"eID": "EdtrComp_10"
											},
											"O": {
												"cType": "slot"
											}
										},
										{
											"T": "VStepperContent",
											"P": {
												"ID": {
													"H": "EdtrComp_20",
													"T": "prop"
												},
												"step": {
													"H": "2",
													"T": "prop"
												}
											},
											"E": {},
											"C": {
												"default": {
													"c": [
														{
															"T": "VTextField",
															"P": {
																"ID": {
																	"H": "EdtrComp_22",
																	"T": "prop"
																},
																"label": {
																	"H": "'Text field label'",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {},
															"_Editor": {
																"eID": "EdtrComp_22"
															},
															"O": {
																"cType": "child"
															}
														},
														{
															"T": "VTextField",
															"P": {
																"ID": {
																	"H": "EdtrComp_23",
																	"T": "prop"
																},
																"label": {
																	"H": "'Text field label'",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {},
															"_Editor": {
																"eID": "EdtrComp_23"
															},
															"O": {
																"cType": "child"
															}
														},
														{
															"T": "VTextField",
															"P": {
																"ID": {
																	"H": "EdtrComp_24",
																	"T": "prop"
																},
																"label": {
																	"H": "'Text field label'",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {},
															"_Editor": {
																"eID": "EdtrComp_24"
															},
															"O": {
																"cType": "child"
															}
														},
														{
															"T": "VBtn",
															"P": {
																"ID": {
																	"H": "EdtrComp_37",
																	"T": "prop"
																}
															},
															"E": {
																"click": {
																	"H": "stepper2.complete = true\r\nVSteppersComp.internalLazyValue = 3\r\n"
																}
															},
															"C": {
																"default": {
																	"c": [
																		{
																			"T": "QLabel",
																			"C": {},
																			"E": {},
																			"P": {
																				"ID": {
																					"H": "EdtrComp_38",
																					"T": "prop"
																				},
																				"text": {
																					"H": "'Continue'",
																					"T": "prop"
																				}
																			},
																			"_Editor": {
																				"eID": "EdtrComp_38"
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
																"eID": "EdtrComp_37"
															},
															"O": {
																"cType": "slot"
															}
														}
													],
													"cType": "slot"
												}
											},
											"_Editor": {
												"eID": "EdtrComp_20"
											},
											"O": {
												"cType": "slot"
											}
										},
										{
											"T": "VStepperContent",
											"P": {
												"ID": {
													"H": "EdtrComp_25",
													"T": "prop"
												},
												"step": {
													"H": "3",
													"T": "prop"
												}
											},
											"E": {},
											"C": {
												"default": {
													"c": [
														{
															"T": "VDatePicker",
															"P": {
																"ID": {
																	"H": "EdtrComp_27",
																	"T": "prop"
																},
																"locale": {
																	"H": "'tr-tr'",
																	"T": "prop"
																},
																"value": {
																	"H": "'2020-08-06'",
																	"T": "prop"
																},
																"firstDayOfWeek": {
																	"H": "1",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {
																"default": {
																	"c": [
																		{
																			"T": "Ghost",
																			"P": {
																				"ID": {
																					"H": "EdtrComp_28",
																					"T": "prop"
																				}
																			},
																			"E": {},
																			"C": {},
																			"_Editor": {
																				"eID": "EdtrComp_28"
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
																"eID": "EdtrComp_27"
															},
															"O": {
																"cType": "slot"
															}
														}
													],
													"cType": "slot"
												}
											},
											"_Editor": {
												"eID": "EdtrComp_25"
											},
											"O": {
												"cType": "slot"
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
								"cType": "slot"
							}
						}
					],
					"cType": "slot"
				}
			},
			"_Editor": {
				"eID": "EdtrComp_1"
			},
			"O": {
				"cType": "slot"
			}
		}
	],
	"cJson": [
		{
			"T": "Messaging",
			"P": {
				"ID": {
					"H": "EdtrComp_36",
					"T": "prop"
				}
			},
			"E": {
				"EndRender": {
					"H": "╬=╣.╣VSteppersComp╩╠internalLazyValue╩╩╠1╩╩╩"
				}
			},
			"C": {},
			"_Editor": {
				"eID": "EdtrComp_36"
			},
			"O": {
				"cType": "child"
			}
		},
		{
			"T": "VStepper",
			"P": {
				"ID": {
					"H": "VSteppersComp",
					"T": "prop"
				}
			},
			"E": {},
			"C": {
				"default": {
					"c": [
						{
							"T": "VStepperHeader",
							"P": {
								"ID": {
									"H": "EdtrComp_3",
									"T": "prop"
								}
							},
							"E": {},
							"C": {
								"default": {
									"c": [
										{
											"T": "VStepperStep",
											"P": {
												"ID": {
													"H": "stepper1",
													"T": "prop"
												},
												"step": {
													"H": "╬1╩╩",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_5"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VDivider",
											"P": {
												"ID": {
													"H": "EdtrComp_8",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_8"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VStepperStep",
											"P": {
												"ID": {
													"H": "stepper2",
													"T": "prop"
												},
												"step": {
													"H": "╬2╩╩",
													"T": "prop"
												},
												"editable": {
													"H": "╬true╩╩",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_7"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VDivider",
											"P": {
												"ID": {
													"H": "EdtrComp_9",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_9"
											},
											"O": {
												"cType": "child"
											}
										},
										{
											"T": "VStepperStep",
											"P": {
												"ID": {
													"H": "stepper3",
													"T": "prop"
												},
												"step": {
													"H": "╬3╩╩",
													"T": "prop"
												}
											},
											"E": {},
											"C": {},
											"_Editor": {
												"eID": "EdtrComp_6"
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
								"eID": "EdtrComp_3"
							},
							"O": {
								"cType": "slot"
							}
						},
						{
							"T": "VStepperItems",
							"P": {
								"ID": {
									"H": "EdtrComp_2",
									"T": "prop"
								}
							},
							"E": {},
							"C": {
								"default": {
									"c": [
										{
											"T": "VStepperContent",
											"P": {
												"ID": {
													"H": "EdtrComp_10",
													"T": "prop"
												},
												"step": {
													"H": "╬1╩╩",
													"T": "prop"
												}
											},
											"E": {},
											"C": {
												"default": {
													"c": [
														{
															"T": "VBtn",
															"P": {
																"ID": {
																	"H": "EdtrComp_12",
																	"T": "prop"
																}
															},
															"E": {
																"click": {
																	"H": "╬=╣.╣stepper1╩╠complete╩╩╠true╩╩╬=╣.╣VSteppersComp╩╠internalLazyValue╩╩╠2╩╩╩"
																}
															},
															"C": {
																"default": {
																	"c": [
																		{
																			"T": "QLabel",
																			"C": {},
																			"E": {},
																			"P": {
																				"ID": {
																					"H": "EdtrComp_13",
																					"T": "prop"
																				},
																				"text": {
																					"H": "╬'Continue'╩╩",
																					"T": "prop"
																				}
																			},
																			"_Editor": {
																				"eID": "EdtrComp_13"
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
																"eID": "EdtrComp_12"
															},
															"O": {
																"cType": "slot"
															}
														}
													],
													"cType": "slot"
												}
											},
											"_Editor": {
												"eID": "EdtrComp_10"
											},
											"O": {
												"cType": "slot"
											}
										},
										{
											"T": "VStepperContent",
											"P": {
												"ID": {
													"H": "EdtrComp_20",
													"T": "prop"
												},
												"step": {
													"H": "╬2╩╩",
													"T": "prop"
												}
											},
											"E": {},
											"C": {
												"default": {
													"c": [
														{
															"T": "VTextField",
															"P": {
																"ID": {
																	"H": "EdtrComp_22",
																	"T": "prop"
																},
																"label": {
																	"H": "╬'Text field label'╩╩",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {},
															"_Editor": {
																"eID": "EdtrComp_22"
															},
															"O": {
																"cType": "child"
															}
														},
														{
															"T": "VTextField",
															"P": {
																"ID": {
																	"H": "EdtrComp_23",
																	"T": "prop"
																},
																"label": {
																	"H": "╬'Text field label'╩╩",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {},
															"_Editor": {
																"eID": "EdtrComp_23"
															},
															"O": {
																"cType": "child"
															}
														},
														{
															"T": "VTextField",
															"P": {
																"ID": {
																	"H": "EdtrComp_24",
																	"T": "prop"
																},
																"label": {
																	"H": "╬'Text field label'╩╩",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {},
															"_Editor": {
																"eID": "EdtrComp_24"
															},
															"O": {
																"cType": "child"
															}
														},
														{
															"T": "VBtn",
															"P": {
																"ID": {
																	"H": "EdtrComp_37",
																	"T": "prop"
																}
															},
															"E": {
																"click": {
																	"H": "╬=╣.╣stepper2╩╠complete╩╩╠true╩╩╬=╣.╣VSteppersComp╩╠internalLazyValue╩╩╠3╩╩╩"
																}
															},
															"C": {
																"default": {
																	"c": [
																		{
																			"T": "QLabel",
																			"C": {},
																			"E": {},
																			"P": {
																				"ID": {
																					"H": "EdtrComp_38",
																					"T": "prop"
																				},
																				"text": {
																					"H": "╬'Continue'╩╩",
																					"T": "prop"
																				}
																			},
																			"_Editor": {
																				"eID": "EdtrComp_38"
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
																"eID": "EdtrComp_37"
															},
															"O": {
																"cType": "slot"
															}
														}
													],
													"cType": "slot"
												}
											},
											"_Editor": {
												"eID": "EdtrComp_20"
											},
											"O": {
												"cType": "slot"
											}
										},
										{
											"T": "VStepperContent",
											"P": {
												"ID": {
													"H": "EdtrComp_25",
													"T": "prop"
												},
												"step": {
													"H": "╬3╩╩",
													"T": "prop"
												}
											},
											"E": {},
											"C": {
												"default": {
													"c": [
														{
															"T": "VDatePicker",
															"P": {
																"ID": {
																	"H": "EdtrComp_27",
																	"T": "prop"
																},
																"locale": {
																	"H": "╬'tr-tr'╩╩",
																	"T": "prop"
																},
																"value": {
																	"H": "╬'2020-08-06'╩╩",
																	"T": "prop"
																},
																"firstDayOfWeek": {
																	"H": "╬1╩╩",
																	"T": "prop"
																}
															},
															"E": {},
															"C": {
																"default": {
																	"c": [
																		{
																			"T": "Ghost",
																			"P": {
																				"ID": {
																					"H": "EdtrComp_28",
																					"T": "prop"
																				}
																			},
																			"E": {},
																			"C": {},
																			"_Editor": {
																				"eID": "EdtrComp_28"
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
																"eID": "EdtrComp_27"
															},
															"O": {
																"cType": "slot"
															}
														}
													],
													"cType": "slot"
												}
											},
											"_Editor": {
												"eID": "EdtrComp_25"
											},
											"O": {
												"cType": "slot"
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
								"cType": "slot"
							}
						}
					],
					"cType": "slot"
				}
			},
			"_Editor": {
				"eID": "EdtrComp_1"
			},
			"O": {
				"cType": "slot"
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
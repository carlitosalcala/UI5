	
			function getTestContent () {
				return [
					new sap.m.SearchField({placeholder: "search...", width: "100px"}),
					new sap.m.Button({ text : "Border" }),
					new sap.m.Select({ items : [
						new sap.ui.core.Item({
							key: "0",
							text: "item 0",
						}),new sap.ui.core.Item({
							key: "0",
							text: "loooooooooooooong item",
						})]}),
					new sap.m.Button({ text : "Test" }),
					new sap.m.SearchField({placeholder: "search...", width : "200px"}),
					new sap.m.Button({
						icon: "sap-icon://drop-down-list"
					}),
					new sap.m.Select({ 
						type: sap.m.SelectType.IconOnly,
						icon: sap.ui.core.IconPool.getIconURI("filter"),
						autoAdjustWidth: true,
						items : [
								new sap.ui.core.Item({
									key: "0",
									text: "item 0",
								}),new sap.ui.core.Item({
									key: "0",
									text: "loooooooooooooong item",
						})]}),
					new sap.m.Button({
						icon: "sap-icon://person-placeholder"
					})
				];
			}

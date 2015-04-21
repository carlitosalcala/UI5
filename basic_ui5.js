  var oImage = new sap.m.Image({
                src:'http://openui5.org/images/OpenUI5_new_big_side.png'
                });
     oImage.placeAt("image");
  var btn = new sap.m.Button({
                text:'Press me!  I\'m a fucking button!!!!',
                press: function() {
                  alert("Hello!")
              }
          });
    btn.placeAt('content');
  var barHeader = new sap.m.Bar({
				contentMiddle: [
						new sap.m.Label("lblHeader",
									{
									text: "Welcome to my first HTML UI5 SAP"
									}
								)
						]
				});
  barHeader.placeAt('header');
  var Bar = new sap.m.Bar({ 
    contentLeft: [new sap.m.Button('Button', {text: "Back", type:sap.m.ButtonType.Back})],	
    contentMiddle: [new sap.m.Label("myLabel2", {text: "this is the title of header with a very very very very very very very very long text to test the ellipsis effect in the middle"})],
    contentRight: [new sap.m.Button('Button1', {text: "Edit"})]
	});
	Bar.placeAt('content');

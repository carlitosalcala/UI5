		 
// create the first page of your application
	var page1 = new sap.m.Page("page1", {
  title: "Initial Page",
  content : new sap.m.Button({ 
    // content is just one Button
    text : "Go to Page 2",
    press : function() {
      app.to("page2"); 
      // when pressed, it triggers drilldown to page 2
    }
  })
}); 

// create the second page of your application
var page2 = new sap.m.Page("page2", {
  title: "Page 2",
  showNavButton: true, 
// page 2 should display a back button
  navButtonPress: function(){ 
    app.back(); 
// when tapped, the back button should navigate back up to page 1
  },
  icon: "http://www.sap.com/global/ui/images/global/sap-logo.png",
  content : new sap.m.Text({text:"Hello Mobile World!"})
}); 

// add both pages to the App
app.addPage(page1).addPage(page2); 

app.placeAt("content"); // place the App into the HTML document

<!--  

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
									text: "Carlos Herrero - SAP HCM ESS/MSS Consultant"
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

-->

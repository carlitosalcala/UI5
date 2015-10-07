   // create a mobile App
   // it initializes the HTML page for mobile use and provides animated page handling
   var app = new sap.m.App("myApp", {initialPage:"page1",backgroundColor:"#4B610B"}); // page1 should be displayed first
// create a new tiles as var to add later to a page or something
 var tileprojects = new sap.m.TileContainer({
			tiles: [
				new sap.m.StandardTile({
					  icon : "sap-icon://inbox",
					  number : "42",
					  title : "Add New Employee",
					  info : "Overdue",
					  infoState : "Error",
					press:function(){
						app.to("page2");
					}
					
				})
			],
			
		});
//		app.addPage(tilecont);

// create the first page of your application
      var page1 = new sap.m.Page("page1", {
          title: "SAP HCM ESS/MSS Consultant",
          content : [
		tileprojects,		// Add tile to navigate to projects 
		new sap.m.Label("l1",{text:"Welcome!", textAlign:"Center"})	, 
	      new sap.m.Button({   // content is just one Button
              text : "Projects",
              press: function() {
                  app.to("page2");   // when pressed, it triggers drilldown to page 2
              }
          })	,
             new sap.m.Button({   // content is just one Button
              text : "Knowlegde",
              press: function() {
                  app.to("page3");   // when pressed, it triggers drilldown to page 2
              }
          }) ,
             new sap.m.Button({   // content is just one Button
              text : "Others",
              press: function() {
                  app.to("page4");   // when pressed, it triggers drilldown to page 2
              }
          })	
			]		
      });
      // create the second page of your application
      var page2 = new sap.m.Page("page2", {
          title: "SAP Projects",
          showNavButton: true,       // page 2 should display a back button
          navButtonPress: function(){ 
              app.back();            // when pressed, the back button should navigate back up to page 1
          },
          content : new sap.m.Text({text:"Hello Mobile World!"})
      });
      app.addPage(page1).addPage(page2); // add both pages to the App
      app.placeAt("content"); // place the App into the HTML document


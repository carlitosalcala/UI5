// create a mobile App
// it initializes the HTML page for mobile use and provides animated page handling
   var app = new sap.m.App("myApp", {initialPage:"page1",backgroundColor:"#4B610B"}); // page1 should be displayed first
// create a new tiles as var to add later to a page or something
 var tileprojects = new sap.m.TileContainer({
			tiles: [
				new sap.m.StandardTile({
					  icon : "sap-icon://ppt-attachment",
					  number : "CV",
					  title : "View Resume",
					  info : "Sort version",
					  infoState : "Error",
					press:function(){
						app.to("page2");
					}
					
				}),
				new sap.m.StandardTile({
					  icon : "sap-icon://account",
					  number : "33",
					  title : "Knowlegde",
					  info : "SAP ABAP - Workflow - ESS/MSS - Webdynpro - SAP UI5 - HANA XS",
					  infoState : "Success",
					press:function(){
						app.to("page3");
					}
					
				}),
				new sap.m.StandardTile({
					  icon : "sap-icon://product",
					  number : "33",
					  title : "Web examples",
					  info : "Orange",
					  infoState : "Warning",
					press:function(){
						app.to("page4");
					}
					
				}),
			new sap.m.StandardTile({
					  icon : "sap-icon://email-read",
					  number : "33",
					  title : "Contact me",
					  info : "Red",
					  infoState : "Error",
					press:function(){
						app.to("page2");
					}
					
				})
		
			],			
		});

// create the first page of your application
      var page1 = new sap.m.Page("page1", {
          title: "SAP HCM ESS/MSS Consultant",
          content : [
		tileprojects /*,		// Add tile to navigate to projects 
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
          })	*/
			]		
      });
      // create the second page of your application
      var page2 = new sap.m.Page("page2", {
          title: "SAP Projects",
          showNavButton: true,       // page 2 should display a back button
          navButtonPress: function(){ 
              app.back();            // when pressed, the back button should navigate back up to page 1
          },
          content : new sap.m.Text({text:"Hello Mobile World!"}),
	  footer: oTb
      });

      // create the second page of your application
      var page3 = new sap.m.Page("page3", {
          title: "Knowlegde",
          showNavButton: true,       // page 2 should display a back button
          navButtonPress: function(){ 
              app.back();            // when pressed, the back button should navigate back up to page 1
          },
          content : new sap.m.Text({text:"html, javascript, css, android, java, jsp, servlets, scripting"})
      });


      // create the second page of your application
      var page4 = new sap.m.Page("page4", {
          title: "Examples",
          showNavButton: true,       // page 2 should display a back button
          navButtonPress: function(){ 
              app.back();            // when pressed, the back button should navigate back up to page 1
          },
          content : new sap.m.Text({text:"hello"})
      });

 
// it initializes the HTML page for mobile use and provides animated page handling
//   var app = new sap.m.App("myApp", {initialPage:"page1",backgroundColor:"#4B610B"}); // page1 should be displayed first
//page2.setFooter(oTb);      

      app.addPage(page1).addPage(page2).addPage(page3).addPage(page4); // add both pages to the App
//page1.setFooter(oTb);      
app.placeAt("content"); // place the App into the HTML document

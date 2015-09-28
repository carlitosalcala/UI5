   // create a mobile App
   // it initializes the HTML page for mobile use and provides animated page handling
   var app = new sap.m.App("myApp", {initialPage:"page1"}); // page1 should be displayed first
  
// create the first page of your application
      var page1 = new sap.m.Page("page1", {
          title: "Initial Page",
          content : new sap.m.Button({   // content is just one Button
              text : "Go to Page 2",
              press: function() {
                  app.to("page2");   // when pressed, it triggers drilldown to page 2
              }
          })                
      });
      // create the second page of your application
      var page2 = new sap.m.Page("page2", {
          title: "Page 2",
          showNavButton: true,       // page 2 should display a back button
          navButtonPress: function(){ 
              app.back();            // when pressed, the back button should navigate back up to page 1
          },
          content : new sap.m.Text({text:"Hello Mobile World!"})
      });
      app.addPage(page1).addPage(page2); // add both pages to the App
      app.placeAt("content"); // place the App into the HTML document


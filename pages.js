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
          title: "Resume",
          showNavButton: true,       // page 2 should display a back button
          navButtonPress: function(){ 
              app.back();            // when pressed, the back button should navigate back up to page 1
          },
          content : new sap.m.Panel({
		headerText: "Work Experience",
			content : new sap.m.Text({ 
				text: " March 2015 – Currently SAP Portal ESS/MSS & ABAP Technical Consultant Iberdrola Renewals - Portland (E.E.U.U.) and Bilbao (Spain) http://www.iberdrolarenewables.us/ ▪ Roll-out of payroll module and parallel task involved with payments such as paystub, legal forms like W2 & W4, and request from employees related to tuition payments. This part has been developed completely using PA-AS technologies (Adobe form + workflow approval) within HRASR_DT transaction, including a few new forms for HR Service Centre.▪ Creation of technical and functional documentation for customizing portal services, set up of web applications in SAP and Web environment. ▪ Coordination with the software factory and creation of technical documentation to implements BADIs, Enhancements and creation of new developments for SAP Portal and SAP R/3 in the module of Time Management with several additional checks and profiles for different countries and Travel Expenses enhancements to calculate in additional fields and collaboration in orientation for development, connection and testing module for Benefits as its centre is in The USA and Canada. That was a copy of the standard functionality because it was not included as SAP ABAP WebDynpro.▪ Direct collaboration in creating custom roles for the different centres in portal users.Scottish Power – Scotland (U.K.) and Bilbao (Spain) http://www.scottishpower.com/▪ Migration of Time Recording module and parallel task involved such as print forms and MSS Reporting from Oracle systems."
	})
		}),
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



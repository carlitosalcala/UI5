//Define some sample data
//var aData = [
    //{lastName: "Dente", name: "Al", checked: true, linkText: "www.    sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 4},
    //{lastName: "Friese", name: "Andy", checked: true, linkText: "www.sap  .com", href: "http://www.sap.com", src: "images/person2.gif", gender: "male", rating: 2},
        //{lastName: "Mann", name: "Anita", checked: false, linkText: "www.sap.com" , href: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 3},
    //{lastName: "Schutt", name: "Doris", checked: true, linkText: "www.sap.com", hr    ef: "http://www.sap.com", src: "images/person1.gif", gender: "female", rating: 4},
    //{lastName: "Open", name: "Doris", checked: true, linkText: "www.sap.com", href: "htt  p://www.sap.com", src: "images/person1.gif", gender: "female", rating: 2},
    //{lastName: "Dewit", name: "Kenya", checked: false, linkText: "www.sap.com", href: "http://www.    sap.com", src: "images/person1.gif", gender: "female", rating: 3},
    //{la   stName: "Zar", name: "Lou", checked: true, linkText: "www.sap.com", href: "http://www.sap.com", src: "images/person1.gif", gender: "male", rating: 1},
        //              ];





    var data = {
            player: [
              {"name": "Rajesh"},
              {"name": "Kunal Jauhari"},
              {"name": "Ashish Singh"},
              {"name": "Ansuman Parhi"},
              {"name": "Arup Kumar"},
              {"name": "Deepak Malviya"},
          {"name": "Seshu"},
          {"name": "Ankush Datey"},
          {"name": "Tapesh Syawaria"},
          {"name": "Mahesh"},
          {"name": "Vinay Joshi"},
          {"name": "Ardhendu Karna"},
          {"name": "Abhishek Shukla"},
          {"name": "Kashim"},
          {"name": "Vinayak"}
        ]
      };
//var oHugeListBox = new sap.ui.commons.ListBox({
//items : jQuery.map("Berlin|Walldorf|London|Dresden|New York|Paris|Amsterdam|Leipzig|Hamburg|München|Stuttgart|Moskau|Peking|Tokio|Rio de Janeiro|Rom|St. Ingbert|St. Leon-Rot".split("|").sort(), function(v,i) {
//return new sa         p.ui.core.ListItem({text: i + ": " + v});
//
//
		// create a "json" Model
		var oModel = new sap.ui.model.json.JSONModel();
      
        /***** LOADING THE DATA *****/
        // load data from URL
        //oModel.loadData('http://mydomain/teamdetails_ui5.php?t=6'); 
        // OR set data manually
        oModel.setData(data);
      
      
        // register model in core
		sap.ui.getCore().setModel(oModel);

        // create your table
		var oTable1 = new sap.ui.table.Table({  
          title : "Players List",  
          visibleRowCount : 6,  
          selectionMode : sap.ui.table.SelectionMode.Single,  
          navigationMode : sap.ui.table.NavigationMode.Paginator,
          // bind the core-model to this table by aggregating player-Array
          rows: "{/player}"
        });

      // define the columns and the control templates to be used    
      oTable1.addColumn(new sap.ui.table.Column({  
        label : new sap.ui.commons.Label({  
          text : "Player Name"  
        }),  
        template : new sap.ui.commons.TextView({
          text: "{name}"
        }),
        width : "10px"  
      }));
      
      //place at DOM
      oTable1.placeAt('app.page2');  



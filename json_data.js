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
          rows: '{/player}'
        });

      // define the columns and the control templates to be used    
      oTable1.addColumn(new sap.ui.table.Column({  
        label : new sap.ui.commons.Label({  
          text : "Player Name"  
        }),  
        template : new sap.ui.commons.TextView({
          text: '{name}'
        }),
        width : "10px"  
      }));
      
      //place at DOM
      oTable1.placeAt('app.page2');  



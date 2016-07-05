// Create the ListBox
var oSimpleListBox = new sap.ui.commons.ListBox({
	items : [
	 		new sap.ui.core.ListItem({text : 'Spring'}),
			new sap.ui.core.ListItem({text : 'Summer'}),
			new sap.ui.core.ListItem({text : 'Autumn'}),
			new sap.ui.core.ListItem({text : 'Winter'})
  ],
  select : function(e) {
	  var a=["Your favorite season(s): "];
	  jQuery.each(oSimpleListBox.getSelectedItems(), function(idx,item) { a.push(item.getText(), ",");});
	  oTextSummary.setText(a.join(""));
  }
}).placeAt("page2");
var oTextSummary = new sap.ui.commons.TextView().placeAt("page2");
var oMultiSelectionCheckBox = new sap.ui.commons.CheckBox({
		text: "MultiSelection",
		checked : false,
		change : function(e) { oSimpleListBox.setAllowMultiSelect(e.getSource().getChecked()); } 
}).placeAt("page2");

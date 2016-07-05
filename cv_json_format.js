var data = [
{StartDate : "01/01/2016", EndDate : "Actualmente", projectName : "Implantación España - Tiempos y Viajes", Client : "Iberdrola", Location : "Bilbao", LinkTo : "", MainTasks : "Surf the web, evaluate quality of coffe, improve your cv, program something in other language", Position : "like a boss but I do not", Description : "it is better silence"}
           ];
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(data);
sap.ui.getCore().setModel(oModel);

var oText = new sap.m.Text().setText("/projectName");

console.log(oText.bindContext("/projectName/0"));

console.log(oText);


var oText2 = new sap.m.Text({  
       text : "{/projectName/0}"  
    });
console.log(oText2);

// create your controls        
var oTextView = new sap.ui.commons.TextView("textView", {
    // bind text property of textview to firstName property in the model
    text: "{/projectName/0}",
    tooltip: "First Name"
});
var oTxt = new sap.ui.commons.TextField("txtField", {
    // bind text property of textfield to firstName property in the model
    value: "{/Client/0}"
});

console.log(oTextView);
console.log(oTxt);


      var oTb = new sap.m.Toolbar();

      var oBtnInfo = new sap.m.Button({
        text: "Info",
        icon: "sap-icon://sys-help-2",
      }).addStyleClass("uoMBtnBadge uoBadgeInformation");
      oBtnInfo.data("badge", "123", true);
      oTb.addContent(oBtnInfo);

      var oBtnSuccess = new sap.m.Button({
        text: "Success",
        icon: "sap-icon://accept",
        type:"Accept",
      }).addStyleClass("uoMBtnBadge uoBadgeSuccess");
      oBtnSuccess.data("badge", "9", true);
      oTb.addContent(oBtnSuccess);

      var oBtnError = new sap.m.Button({
        text: "Error",
        icon: "sap-icon://decline",
        type: "Reject",
      }).addStyleClass("uoMBtnBadge uoBadgeError");
      oBtnError.data("badge", "1", true);
      oTb.addContent(oBtnError);

      var oBtnWarning = new sap.m.Button({
        text: "Warning",
        icon: "sap-icon://warning",
        type: "Emphasized",
      }).addStyleClass("uoMBtnBadge uoBadgeWarning");
      oBtnWarning.data("badge", "3", true);
      oTb.addContent(oBtnWarning);

      var oBtnTransparent = new sap.m.Button({
        text: "Transparent",
        icon: "sap-icon://document",
        type: "Transparent",
      }).addStyleClass("uoMBtnBadge");
      oBtnTransparent.data("badge", "5", true);
      oTb.addContent(oBtnTransparent);


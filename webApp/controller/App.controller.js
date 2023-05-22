sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
  "use strict";
  return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    onInit : function () {     
      let oData = {
        entrada : {
          chocolate : " "
        }
      };
      let oModel = new JSONModel(oData);
      this.getView().setModel(oModel);
   },
    showButton : function () {       
      MessageToast.show("Deu certo!")
    }
  });
});

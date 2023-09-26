sap.ui.define([
    // "sap/m/Text"
    "sap/ui/core/mvc/XMLView",
    // "sap/ui/core/ComponentContainer"
 
], function(XMLView) {
    'use strict';


    XMLView.create({
        viewName: 'sap.ui.demo.walkthrough.view.App'
    }).then(function(oView) {
        oView.placeAt("content")    
})

    // new Text({
    //     text: "Hello UI5!"
    // }).placeAt('content')
    // alert("Ui5 is ready to go!");

});   
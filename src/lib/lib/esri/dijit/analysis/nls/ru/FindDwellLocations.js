// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/FindDwellLocations",{inputLayerLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0439, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0443\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0438",selectTracksLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0434\u043d\u043e \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u043b\u0435\u0439 \u0434\u043b\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0442\u0440\u0435\u043a\u043e\u0432",
defineDistanceLabel:"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430",distMethodLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0442\u043e\u0434 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f",temporalSearchLabel:"\u0417\u0430\u0434\u0430\u0439\u0442\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438",
outputDwellLabel:"\u0412\u044b\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043b\u043e\u043a\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0435\u0432 \u043a\u0430\u043a",outputLayerName:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u043f\u0440\u043e\u0441\u0442\u043e\u0435\u0432 \u0434\u043b\u044f ${inputLayerName}",meanCenters:"\u0423\u0441\u0440\u0435\u0434\u043d\u0435\u043d\u043d\u044b\u0435 \u0446\u0435\u043d\u0442\u0440\u044b",convexHulls:"\u0412\u044b\u043f\u0443\u043a\u043b\u044b\u0435 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0438",
dwellFeatures:"\u041e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u043e\u0441\u0442\u043e\u0435\u0432",allFeatures:"\u0412\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u041f\u043e\u0438\u0441\u043a \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0435\u0432 \u0434\u043b\u044f ${inputLayerName}.",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0430\u043d\u0430\u043b\u0438\u0437\u0430, \u041f\u043e\u0438\u0441\u043a \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0435\u0432, ${inputLayerName}",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u041f\u043e\u0438\u0441\u043a \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0435\u0432"});
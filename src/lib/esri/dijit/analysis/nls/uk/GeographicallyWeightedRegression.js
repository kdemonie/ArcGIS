// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/uk/GeographicallyWeightedRegression",{chooseLayer:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0448\u0430\u0440 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0456\u0437\u0443",chooseField:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u043e\u043b\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f",chooseExplanatoryField:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043f\u043e\u044f\u0441\u043d\u044e\u0432\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u043b\u044f",
chooseNeighborhood:"\u0412\u0438\u0431\u0440\u0430\u0442\u0438, \u044f\u043a \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u043e\u043a\u0456\u043b",distanceBand:"\u041a\u0430\u043d\u0430\u043b \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456",numNeighbors:"\u0427\u0438\u0441\u043b\u043e \u0441\u0443\u0441\u0456\u0434\u0456\u0432",chooseWeighted:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c, \u044f\u043a \u0431\u0443\u0434\u0443\u0442\u044c \u0437\u0432\u0430\u0436\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0441\u0443\u0441\u0456\u0434\u043d\u0456 \u043e\u0431\u2019\u0454\u043a\u0442\u0438",
bisquare:"\u0411\u0456\u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0439",gaussian:"\u0413\u0430\u0443\u0441\u043e\u0432\u0438\u0439",resultLayerName:"\u041d\u0430\u0437\u0432\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0443\u044e\u0447\u043e\u0433\u043e \u0448\u0430\u0440\u0443",outputLayerName:"GWR ${inputLayerName}",distanceBandWarning:"\u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043a\u0430\u043d\u0430\u043b\u0443 \u0432\u0456\u0434\u0441\u0442\u0430\u043d\u0456 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043c\u0456\u0436 ${min} \u0456 ${max}",
numNeighborsWarning:"\u0427\u0438\u0441\u043b\u043e \u0441\u0443\u0441\u0456\u0434\u0456\u0432 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043c\u0456\u0436 ${min} \u0456 ${max}",explanatoryFieldsWarning:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0449\u043e\u043d\u0430\u0439\u043c\u0435\u043d\u0448\u0435 1 \u043f\u043e\u044f\u0441\u043d\u044e\u0432\u0430\u043b\u044c\u043d\u0435 \u043f\u043e\u043b\u0435",explanatoryLayerWarning:"\u041e\u0431\u0440\u0430\u043d\u0438\u0439 \u0448\u0430\u0440 \u043d\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u043f\u043e\u044f\u0441\u043d\u044e\u0432\u0430\u043b\u044c\u043d\u0438\u0445 \u043f\u043e\u043b\u0456\u0432, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0438\u0439 \u0448\u0430\u0440",
inputLayerWarning:"\u041e\u0431\u0440\u0430\u043d\u0438\u0439 \u0448\u0430\u0440 \u043d\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u0438\u0445 \u043f\u043e\u043b\u0456\u0432 \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f, \u043e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0438\u0439 \u0448\u0430\u0440",itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0440\u0456\u0448\u0435\u043d\u044c \u0437 \u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u043e \u0437\u0432\u0430\u0436\u0435\u043d\u043e\u0457 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u0457.",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0456\u0437\u0443, \u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u043e \u0437\u0432\u0430\u0436\u0435\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u044f, ${inputLayerName}, \u043f\u0456\u0434\u0433\u043e\u043d\u043a\u0430",itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u0438\u0439 \u0448\u0430\u0440, \u0437\u0433\u0435\u043d\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0413\u0435\u043e\u0433\u0440\u0430\u0444\u0456\u0447\u043d\u043e \u0437\u0432\u0430\u0436\u0435\u043d\u0430 \u0440\u0435\u0433\u0440\u0435\u0441\u0456\u044f"});
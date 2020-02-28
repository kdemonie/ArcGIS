// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ar/DetectObjectsUsingDeepLearning",{toolDefine:"\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644",outputLayerName:"${layername}_detected",modelLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a",
modelArgsLabel:"\u062a\u062d\u062f\u064a\u062f \u0648\u0633\u064a\u0637\u0627\u062a \u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644",nameLabel:"\u0627\u0644\u0627\u0633\u0645",valueLabel:"\u0642\u064a\u0645\u0629",removeDuplicatesLable:"\u0625\u0632\u0627\u0644\u0629 \u0627\u0644\u0645\u0639\u0627\u0644\u0645 \u0627\u0644\u0645\u0643\u0631\u0631\u0629 \u0645\u0646 \u0627\u0644\u0625\u062e\u0631\u0627\u062c (\u0627\u062e\u062a\u064a\u0627\u0631\u064a)",
queryModelArgsMsg:"\u062c\u0627\u0631 \u0627\u0644\u0627\u0633\u062a\u0639\u0644\u0627\u0645 \u0639\u0646 \u0648\u0633\u064a\u0637\u0627\u062a \u0627\u0644\u0646\u0645\u0648\u0630\u062c...",nonMaxSuppressionLabel:"\u0644\u0627 \u064a\u0648\u062c\u062f \u062d\u062f \u0623\u0642\u0635\u0649 \u0644\u0644\u0645\u0646\u0639",options:"\u062e\u064a\u0627\u0631\u0627\u062a",confidenceLabel:"\u062d\u0642\u0644 \u062f\u0631\u062c\u0629 \u0627\u0644\u062b\u0642\u0629",classValueLabel:"\u062d\u0642\u0644 \u0642\u064a\u0645\u0629 \u0627\u0644\u0641\u0626\u0629",
maxOverlapLabel:"\u0623\u0642\u0635\u0649 \u0645\u0639\u062f\u0644 \u062a\u0631\u0627\u0643\u0628",numberOnlyMsg:"\u064a\u064f\u0633\u0645\u062d \u0641\u0642\u0637 \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0631\u0642\u0645\u064a\u0629.",analysisLayerLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0635\u0648\u0631\u0629 \u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0644\u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a",
itemDescription:"\u062a\u062d\u0644\u064a\u0644 \u062e\u062f\u0645\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0645\u0646 \u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644",itemTags:"\u0646\u062a\u064a\u062c\u0629 \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629\u060c \u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644\u060c ${layername}",
itemSnippet:"\u062a\u062d\u0644\u064a\u0644 \u062e\u062f\u0645\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0646\u0634\u0623\u0629 \u0645\u0646 \u0627\u0643\u062a\u0634\u0627\u0641 \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062a \u0628\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u062a\u0639\u0644\u0645 \u0627\u0644\u0634\u0627\u0645\u0644"});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ar/AggregateMultidimensionalRaster",{toolDefine:"\u062a\u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f",outputLayerName:"\u0628\u064a\u062a_${layername}_aggregated________________________\u0644\u0627\u062d\u0642\u0629",dimensionLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0628\u064f\u0639\u062f \u062d\u064a\u062b \u0633\u064a\u062a\u0645 \u0627\u0644\u062a\u062c\u0645\u064a\u0639",
variablesLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a \u0644\u062a\u062c\u0645\u064a\u0639\u0647\u0627",variablesListLabel:"\u0627\u0644\u0645\u062a\u063a\u064a\u0631\u0627\u062a [\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0628\u0639\u062f] (\u0627\u0644\u0648\u0635\u0641)",aggregationMethodLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u0631\u0627\u0643\u0628",aggregationFunctionLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0642\u0627\u0644\u0628 \u062f\u0627\u0644\u0629 \u0628\u064a\u0627\u0646\u0627\u062a \u0646\u0642\u0637\u064a\u0629",
aggregationDefinitionLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u062a\u0631\u0627\u0643\u0628",intervalKeywordLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0641\u0627\u0635\u0644 \u0632\u0645\u0646\u064a \u0643\u0644\u0645\u0629 \u0623\u0633\u0627\u0633\u064a\u0629",intervalValueLabel:"\u0641\u0627\u0635\u0644 \u0627\u0644\u0642\u064a\u0645\u0629 \u0627\u0644\u0632\u0645\u0646\u064a",intervalUnitLabel:"\u0648\u062d\u062f\u0629",intervalRangesLabel:"\u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0646\u0637\u0627\u0642\u0627\u062a",
ignoreNodataLabel:"\u062a\u062c\u0627\u0647\u064f\u0644 \u0627\u0644\u0642\u064a\u0645 \u0627\u0644\u0645\u0641\u0642\u0648\u062f\u0629 \u0641\u064a \u0627\u0644\u062d\u0633\u0627\u0628",ignore:"\u062a\u062c\u0627\u0647\u0644",intervalKeyword:"\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u0644\u0641\u0627\u0635\u0644",intervalValue:"\u0642\u064a\u0645\u0629 \u0627\u0644\u0641\u0627\u0635\u0644",intervalRanges:"\u0646\u0637\u0627\u0642\u0627\u062a \u0627\u0644\u0641\u0627\u0635\u0644",
all:"\u0627\u0644\u0643\u0644",hourly:"\u0643\u0644 \u0633\u0627\u0639\u0629",daily:"\u064a\u0648\u0645\u064a\u064b\u0627",weekly:"\u0623\u0633\u0628\u0648\u0639\u064a\u064b\u0627",monthly:"\u0634\u0647\u0631\u064a\u064b\u0627",quarterly:"\u0631\u0628\u0639 \u0633\u0646\u0648\u064a",recurringDaily:"\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u064a\u0648\u0645\u064a\u064b\u0627",recurringWeekly:"\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u0623\u0633\u0628\u0648\u0639\u064a\u064b\u0627",recurringMonthly:"\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u0634\u0647\u0631\u064a\u064b\u0627",
recurringQuarterly:"\u0627\u0644\u062a\u0643\u0631\u0627\u0631 \u0631\u0628\u0639 \u0627\u0644\u0633\u0646\u0648\u064a",yearly:"\u0633\u0646\u0648\u064a\u064b\u0627",hours:"\u0633\u0627\u0639\u0627\u062a",days:"\u0627\u0644\u0623\u064a\u0627\u0645",weeks:"\u0623\u0633\u0627\u0628\u064a\u0639",months:"\u0623\u0634\u0647\u0631",years:"\u0633\u0646\u0648\u0627\u062a",custom:"\u0645\u062e\u0635\u0635",minimumValueLabel:"\u0642\u064a\u0645\u0629 \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u062f\u0646\u0649",
maximumValueLabel:"\u0642\u064a\u0645\u0629 \u0627\u0644\u062d\u062f \u0627\u0644\u0623\u0642\u0635\u0649",analysisLayerLabel:"\u0627\u062e\u062a\u064a\u0627\u0631 \u0637\u0628\u0642\u0629 \u0635\u0648\u0631 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f \u0644\u062a\u062c\u0645\u064a\u0639\u0647\u0627",itemDescription:'\u062e\u062f\u0645\u0629 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u064f\u0646\u0634\u0623\u0629 \u0645\u0646 "\u062a\u062c\u0645\u064a\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0646\u0642\u0637\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f"',
itemTags:"\u0646\u062a\u064a\u062c\u0629 \u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629\u060c \u062a\u062c\u0645\u064a\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0646\u0642\u0637\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f\u060c ${layername}",itemSnippet:'\u062e\u062f\u0645\u0629 \u0635\u0648\u0631\u0629 \u0627\u0644\u062a\u062d\u0644\u064a\u0644 \u0627\u0644\u0645\u064f\u0646\u0634\u0623\u0629 \u0645\u0646 "\u062a\u062c\u0645\u064a\u0639 \u0628\u064a\u0627\u0646\u0627\u062a \u0646\u0642\u0637\u064a\u0629 \u0645\u062a\u0639\u062f\u062f\u0629 \u0627\u0644\u0623\u0628\u0639\u0627\u062f"'});
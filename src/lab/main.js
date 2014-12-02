/**
 * Harshal Chaudhari
 * 	
 * Sep 25, 2012	
 */

require.config({
	paths:{
		    jquery: 'assert/lib/jquery-1.6.2.min',
		    jqueryui: 'assert/lib/jquery-ui-1.8.16.custom.min',
			backbone: 'assert/lib/backbone',
			Collection:'src/Collection/Collection',
			Model:'src/Model/Model',
			View : 'src/views/view',
			
			draw2d:'assert/lib/draw2d',
			
			buttonDelete:'src/util/buttondelete',
			commandChangeSequenceNo:'src/util/commandChangeSequenceNo',
			inputPort:'src/util/inputport',
			nodeConnection:'src/util/nodeconnection',
			nodeFigure:'src/util/nodefigure',
			OpenXML:'src/util/OpenXML',
			outputPort:'src/util/outputport',
			saveXML:'src/util/saveJSON',
			toolBox:'src/util/toolbox',
			undoRedo:'src/util/undoredo',
			workflow:'src/util/workflow',
			JSONReader : 'src/util/JSONReader',
			JSONWriter : 'src/util/JSONWriter',
			SaveAndOpenJSONWriter : 'src/util/SaveAndOpenJsonObject',
			jqxmenu : 'assert/lib/jqxmenu',
			jqxtabs : 'assert/lib/jqxtabs',
			jqxcore : 'assert/lib/jqxcore',
			parseJsonAtCompileTime : 'src/util/parseJsonAtCompileTime',
			logger : 'src/util/Logger',
			ScanCycle : 'src/util/ScanCycle',
			functionBlockExecutor : 'src/util/functionBlockExecutor',
			valueUpdator : 'src/util/valueUpdator'
			
		  }

});

 require(['bootstrap','assert/lib/wz_jsgraphics'], function(){
       
});
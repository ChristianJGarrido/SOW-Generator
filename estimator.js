var data = [];
var hot;
var len;
var max;
var lastCell = null;
var items = ["Skill setup",
			"Service Queue setup",
			"Profile Setup (Basic)",
			"Proactive Rules (Use Cases)",
			"PIT (per LOB)",
			"Predictive Dialer Set up (PIT)",
			"Marketer Campaign Setup",
			"Proactive Chat Invitations (Config)",
			"Dynamic Button Setup (config)",
			"Dynamic Button Rules",
			"Report Targets",
			"Scorecard Request",
			"Scorecard Setup (Analytics)",
			"Staffing Calculator",
			"Agent Effectiveness",
			"Rules Analysis",
			"LP Creative",
			"A/B Test",
			"Control Test",
			"Salesforce Integration",
			"Testing Meetings (One hour for 2 people)",
			"Scheduled Project Meetings",
			"Post Launch Meetings (usually 3)"
			];
var mins = [3,
			20,
			120,
			10,
			300,
			30,
			60,
			30,
			10,
			5,
			5,
			30,
			60,
			180,
			240,
			300,
			240,
			300,
			240,
			300,
			120,
			60,
			60
			];



function initData() {

	for(var i = 0; i < items.length; i++)  {
	
		data.push({item: items[i], minutes: mins[i]});
	
	}

}

function initTable(dataArray) {
		var data =[];
		data.push(["Item", "Minutes", "Scope", "Total Hrs", "", ""]);
		len = dataArray.length;
		max = len + 2;
		for(var i = 1; i <= len; i++) {
			var c = 'C'+(i+1);
			var b = 'B'+(i+1);
			var formula = "=(" + c + "*" + b + ")/60";
			data.push([dataArray[i-1].item,dataArray[i-1].minutes,0, formula,"", ""]);
		}
		data.push(["", "", "Total", "=SUM(D2:D"+ (len+1) + ")", 250, "=D"+max+"*E"+max+""]);
		data.push(["", "", "", "=(D"+max+"*E"+(max+1)+")+D"+(max), 0.3, "=(F"+max+"*E"+(max+1)+")+F"+max]);
		data.push(["", "", "", "", "", ""]);
		data.push(["", "", "Project Quote", "=D"+(max+1), "", "=F"+(max+1)]);
		hot = new Handsontable($('#estimator')[0], {
			data: data,
			colHeaders: true,
			rowHeaders: true,
			formulas: true,
			autoWrapRow: true,
            minSpareRows: true,
			fillHandle: false
		});
		
	hot.updateSettings({
      
	beforeChange: function (changes, source) {
		if ((changes[0][0] > 0) && (changes[0][0] <= len) && (changes[0][1] == 2) ) {
			//alert('valid');
		  if(changes[0][3].match(/^\d+$/) == null) {
		  //alert(changes[0][3].match(/^\d+$/));
          changes[0][3] = changes[0][2];
		  }
        }
		else {
		
			changes[0][3] = changes[0][2];
		
		}
    },
	afterChange: function (changes, source) {
			updateSOW();
	
	}
   }
  );
}

function updateSOW() {

	$('#numskill')[0].selectedIndex = hot.getDataAtCell(1,2);
	$('#numvispro')[0].selectedIndex = hot.getDataAtCell(3,2);
	$('#busrules')[0].selectedIndex = hot.getDataAtCell(4,2);
	$('#dbs')[0].selectedIndex = hot.getDataAtCell(9,2);
	$('#reptargets')[0].selectedIndex = hot.getDataAtCell(11,2);
	$('#scards')[0].selectedIndex = hot.getDataAtCell(12,2);
	$('#numstaffr')[0].selectedIndex = hot.getDataAtCell(14,2);
	$('#numaer')[0].selectedIndex = hot.getDataAtCell(15,2);
	$('#tcalls')[0].selectedIndex = hot.getDataAtCell(21,2);
	$('#numpm')[0].selectedIndex = hot.getDataAtCell(22,2);
	$('#numplm')[0].selectedIndex = hot.getDataAtCell(23,2);
	$('#hrs')[0].value = getTotalHRS();
	$('.selectpicker').selectpicker('refresh');


}

function getTotalHRS() {
	var sum = 0;
	for(var i=1;i < 24; i++) {
	
		sum += (parseInt(hot.getDataAtCell(i, 2)) * parseInt(hot.getDataAtCell(i, 1)))/60;
		//alert(sum);
	
	}
	var padding = .3 * sum;
	
	sum = sum + padding;
	return Math.ceil(sum);
}



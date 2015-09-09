var intro = {part1: "LivePerson", part2: "Implementation Package", part3: "New LivePerson Account setup and provisioned for Company"};

var packages = ["Basic", "Intermediate", "Advanced"];

var cwebsite = {part1: "LivePerson solution deployed to", part2: "company domain(s) as defined below to the line of business defined below:",
part3: "Company Line of Business (LOB):", part4: "Company domain (URL):"};

var cpackage = {part1: "Creation and delivery of validated Design Requirements Document (DRD)", part2: "Creation and delivery of LivePerson code package according to agreed upon design requirements as set forth in the DRD"};

var cap1 = {intro: {part1 : "LivePerson solution for",part2: "Line of Business(es) within the account, which consists of"}, section1: {part1: "Set up and configuration of LivePerson reports up to", part2: "reporting targets"}, section2: {part1: "Set up and configuration of", part2: "standard Scorecard"}, end : "Configuration of LivePerson solution capabilities, including"};


var cap2 = ["Skill(s) created and configured", "Visitor Profile(s)", "Configuration of an Intelligent Targeting Visitor Model", "Predictive Intelligence Targeting", "Up to", "business rules", "Dynamic chat button(s) (client to provide content)", "Proactive chat invitation(s) (client to provide content)"];

var cap3 = ["Setup and configuration of up to", "standard chat window(s)", "standard pre-chat, exit, operator and offline survey(s)", "standard set(s) of canned responses", "standard system message set(s)"];

var testing = ["All applicable technical rules implemented, tested and deployed according to DRD", "LivePerson deployment support for implementation and testing."];

var training = {intro:"LivePerson Training Services as follows", remote: "remote two and one half (2.5) hour Agent training session(s) for up to 15 participants", sura: "onsite two and one half (2.5) day Agent training session(s) utilizing LivePerson's SURA methodology (LivePerson's methodology for eSales and eService training) for up to 25 participants"};

var pm = "Weekly project meeting(s) during project term.";

var opt = {intro: "Post Launch baseline meetings to review and establish key metrics for post launch optimization activities.", creation: "Creation and delivery of up to", scorecard: "standard Scorecard Review(s)", staffing: "standard Staffing Calculator(s)", agenteff: "standard Agent Effectiveness"};

var hours = {part1: "Total work effort pursuant to this SOW shall be up to", part2: "Professional Services hours"};

var end = "Unless otherwise expressly set forth above, all services shall be performed remotely and all time frames set forth above are maximums.";
var textarea;
var sp = " ";

var inputs = ['domain','numlob','reptargets','scards','numskill','numvispro','busrules','dbs','invites','numwindows','numsurveys','numcanned','numsysmsg','numtrain','numpm','numplm','numscr','numstaffr','numaer','tcalls','numatrain'];

var gboxesClick = false;

function loadDropDowns() {

	for(var i = 0; i < inputs.length; i++) {
	
		
		document.getElementById("i"+ (i+1)).innerHTML = makeDD(inputs[i], 25);
	
	}

	document.getElementById("d0").innerHTML = makeDD('offers', 10);

}

function makeDD(id, n) {
	
	var dd = '<select class="selectpicker" id ="';
	dd += id + '">';
	for(i = 0; i <= n; i++) {
		dd += '<option value=' + i + '>' + i + '</option>';
	
	}
	
	dd += '</select>';
	
	return dd;
	
}


function generateBoxes() {

gboxesClick = true;
var numdomains = $('#domain').val();

eboxes1 = document.getElementById("eboxes1");
eboxes2 = document.getElementById("eboxes2");

var generate1 = '';
var generate2 = '';
for(var i = 1; i < numdomains; i++) {
//$("#lobs").append('LOB <input type="text" id="lobs'+i+'></input>');
//lob += 'LOB <input type="text" id="lobs';
//lob += i;

//generate += '<li>';
generate1 += '<input type="text" disabled="disabled" style="width:70px;" value="LOB ' + (i+1) + '"></input><br>';
generate2 += '<input type="text" id="lobs'+i+'"></input><br>';
generate1 += '<input type="text" disabled="disabled" style="width:70px;" value="DOM ' + (i+1) + '"></input><br>';
generate2 += '<input type="text" id="domurls'+i+'"></input><br>';
//generate += '</li>';
}
//generate += '</ul>';
eboxes1.innerHTML = generate1;
eboxes2.innerHTML = generate2;


}

function makeSOW(){

var numdomains = $('#domain')[0].options[$('#domain')[0].selectedIndex].value;
var SOW = "";
var domurls = [];
var lobs = [];
var intdomains = parseInt(numdomains);
if(gboxesClick && intdomains > 1) {

	for(i = 1; i < numdomains; i++) {
		domurls.push($('#domurls'+i).val());
		lobs.push($('#lobs'+i).val());
	
	}
}
var pform = document.getElementById("package");
var drdform = document.getElementById("drd");
var cpform = document.getElementById("cp");
var pitform = document.getElementById("pit");
var trainform = document.getElementById("train");
var ptype = pform.options[pform.selectedIndex].value;

var lob = $('#lob0').val();
var domurl = $('#domurl0').val();
var drd = drdform.options[drdform.selectedIndex].value;
var cp = cpform.options[cpform.selectedIndex].value;
var numlob = $('#numlob')[0].options[$('#numlob')[0].selectedIndex].value;
var reptargets = $('#reptargets')[0].options[$('#reptargets')[0].selectedIndex].value;
var scards = $('#scards')[0].options[$('#scards')[0].selectedIndex].value;
var numskill = $('#numskill')[0].options[$('#numskill')[0].selectedIndex].value;
var numvispro =$('#numvispro')[0].options[$('#numvispro')[0].selectedIndex].value;
//var numrules = $('#numrules')[0].options[$('#numrules')[0].selectedIndex].value;
var dbs = $('#dbs')[0].options[$('#dbs')[0].selectedIndex].value;
var invites = $('#invites')[0].options[$('#invites')[0].selectedIndex].value;
var numwindows = $('#numwindows')[0].options[$('#numwindows')[0].selectedIndex].value;
var numsurveys = $('#numsurveys')[0].options[$('#numsurveys')[0].selectedIndex].value;
var numcanned = $('#numcanned')[0].options[$('#numcanned')[0].selectedIndex].value;
var numsysmsg = $('#numsysmsg')[0].options[$('#numsysmsg')[0].selectedIndex].value;
var pit = pitform.options[pitform.selectedIndex].value;
var busrules =$('#busrules')[0].options[$('#busrules')[0].selectedIndex].value;
var train = trainform.options[trainform.selectedIndex].value;
var numpm = $('#numpm')[0].options[$('#numpm')[0].selectedIndex].value;
var numtrain = $('#numtrain')[0].options[$('#numtrain')[0].selectedIndex].value;
var numplm = $('#numplm')[0].options[$('#numplm')[0].selectedIndex].value;
var numscr = $('#numscr')[0].options[$('#numscr')[0].selectedIndex].value;
var numstaffr = $('#numstaffr')[0].options[$('#numstaffr')[0].selectedIndex].value;
var numaer = $('#numaer')[0].options[$('#numaer')[0].selectedIndex].value;
var hrs = $('#hrs').val();
var offers = $('#offers')[0].options[$('#offers')[0].selectedIndex].value;
var pml = $('#pml')[0].options[$('#pml')[0].selectedIndex].value;
var chat = document.getElementById('chat').checked;
var voice = document.getElementById('voice').checked;
var mobile = document.getElementById('mobile').checked;
var content = document.getElementById('content').checked;
var ios = document.getElementById('ios').checked;
var android = document.getElementById('android').checked;
var resp = document.getElementById('resp').checked;
var tcalls = $('#tcalls')[0].options[$('#tcalls')[0].selectedIndex].value;
var sso = $('#sso')[0].options[$('#sso')[0].selectedIndex].value;
var ssotype = $('#ssotype')[0].options[$('#ssotype')[0].selectedIndex].value;
var windowbrand = $('#windowbrand')[0].options[$('#windowbrand')[0].selectedIndex].value;
var atrain = $('#atrain')[0].options[$('#atrain')[0].selectedIndex].value;
var numatrain = $('#numatrain')[0].options[$('#numatrain')[0].selectedIndex].value;
var itype = $('#itype')[0].options[$('#itype')[0].selectedIndex].value;

var nl = "<p class=MsoNormal style='margin-left:.25in'><span style='font-size:10.0pt; font-family:\"Arial\",sans-serif'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span class=SpellE><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif'>";
var bullet = "<p class=MsoNormal style='margin-left:1.0in;text-indent:-.25in'><span style='font-size:9.0pt;font-family:Symbol'>&#8226;</span><span style='font-size:7.0pt'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style='font-size:9.0pt;font-family:\"Arial\",sans-serif'>";
var el = "</span></p>";

textarea = document.getElementById("tarea");
SOW += "<u>" + intro.part1 + sp + ptype + sp +  intro.part2 + "</u>";
SOW += "<ul style=\"margin-top:0.0in;\">";
if(itype == "New") {

SOW += "<li>" + intro.part3 + el + "</li>";
}

SOW += '</ul>';
SOW += "<b>Company Website</b><ul style=\"margin-top:0.0in;\"><li>" + cwebsite.part1 + sp + numdomains + sp; 

SOW += cwebsite.part2 + "</li>";

if( intdomains > 1 && gboxesClick) {
SOW += "<ul style=\"margin-top:0.0in;\"><li>" + 'Company Line of Business 1 (LOB):' + sp + lob + "</li><li>" + 'Company domain 1 (URL):' + sp + domurl + "</li>"; 
}
else{
SOW += "<ul style=\"margin-top:0.0in;\"><li>" + cwebsite.part3 + sp + lob + "</li><li>" + cwebsite.part4 + sp + domurl + "</li>"; 
}

if( intdomains > 1 && gboxesClick) {

for (i = 0; i < intdomains - 1; i++) {
SOW += "<li>" + 'Company Line of Business' + sp + (i+2) + sp + '(LOB): ' + lobs[i] + "</li><li>" +'Company domain' + sp + (i+2) + sp + '(URL):'+ sp + domurls[i] + "</li>"; 
}
}

SOW += "</ul></ul>";
if((drd == "Yes") || (cp == "Yes")) {

	SOW += "<b>Code Package</b><ul style=\"margin-top:0.0in;\">";

}

if(drd == "Yes") {
	SOW += "<li>" + cpackage.part1 + "</li>";

}

if(cp == "Yes") {
	SOW += "<li>" + cpackage.part2 + "</li>";

}

if((drd == "Yes") || (cp == "Yes")) {

	SOW += "</ul>";

}


SOW += "<b>Capabilities</b><ul style=\"margin-top:0.0in;\"><li>";
SOW += cap1.intro.part1 + sp + numlob + sp; 

if(itype == "Expansion") {

SOW += 'existing ';

}

SOW += cap1.intro.part2 + "</li>";
if((scards != '0') || (reptargets != '0')) {
	SOW += "<ul style=\"margin-top:0.0in;\">";
}
if((reptargets != '0') && (reptargets != '')) {
SOW += "<li>" + cap1.section1.part1 + sp + reptargets + sp + cap1.section1.part2 +"</li>";
}
if((scards != '0') && (scards != '')) {
SOW += "<li>Up to " + cap1.section2.part1 + sp + scards + sp + cap1.section2.part2 + "(s)</li>";
}
if((scards != '0') || (reptargets != '0')) {
	SOW += "</ul>";
}
SOW += "<li>" + cap1.end + "</li></ul>";

SOW += "<dl style=\"margin-top:0.0in;margin-left:25;\"><dd>";

if(chat) {
SOW += '<b>Chat</b><dl style=\"margin-top:0.0in;\"><dd id ="left"><ul style=\"margin-top:0.0in;\">';
if((numskill != '0') && (numskill != '')) {
SOW += "<li>Up to " + numskill + sp + cap2[0] + "</li>";
}
if((numvispro != '0') && (numvispro != '')) {
SOW += "<li>Up to " + numvispro + sp + cap2[1] + "</li>";
}
if((pit == 'Yes') || (busrules != '0')) {
	SOW += "<li>" + cap2[2] + "</li><ul style=\"margin-top:0.0in;\">";
}

if(pit == 'Yes') {
SOW += "<li>" + cap2[3] + "</li>";
}
if((pit != 'Yes') && (busrules != '0')) {
SOW += "<li>" + cap2[4] + sp + busrules + sp+ cap2[5] +"</li>";
}

if((pit == 'Yes') || (busrules != '0')) {
	SOW += "</ul>";
}
if((dbs != '0') && (dbs != '')) {
SOW += "<li>Up to " + dbs + sp + cap2[6] + "</li>";
}
if((invites != '0') && (invites != '')) {
SOW += "<li>Up to " + invites + sp + cap2[7] + "</li>";
}
if((numwindows != '0') && (numwindows != '')) {
SOW += "<li>" + cap3[0] + sp + numwindows + sp+ cap3[1] +"</li>";
}
if(windowbrand == 'Yes') {
	SOW += '<ul style=\"margin-top:0.0in;\"><li>Window(s) to have custom branding</li></ul>';

}
if((numsurveys != '0') && (numsurveys != '')) {
SOW += "<li>" + cap3[0] + sp + numsurveys + sp+ cap3[2] +"</li>";
}
if((numcanned != '0') && (numcanned != '')) {
SOW += "<li>" + cap3[0] + sp + numcanned + sp+ cap3[3] +"</li>";
}
if((numsysmsg != '0') && (numsysmsg != '')) {
SOW += "<li>" + cap3[0] + sp + numsysmsg + sp+ cap3[4] +"</li>";
}

if((sso == 'Yes')) {
SOW += "<li>" + 'Setup and configuration of' + sp + ssotype + " SSO</li>";
}

SOW += "</ul></dl>";
}

if(voice) {
SOW += '<b>Voice</b><dl style=\"margin-top:0.0in;\"><dd id = "left"><ul style=\"margin-top:0.0in;\">';
if((numskill != '0') && (numskill != '')) {
SOW += "<li>Up to " + numskill + sp + cap2[0] + "</li>";
}
if((numvispro != '0') && (numvispro != '')) {
SOW += "<li>Up to " + numvispro + sp + cap2[1] + "</li>";
}

if ((busrules != '0') && busrules != '') {
SOW += "<li>" + cap2[4] + sp + busrules + sp+ cap2[5] +"</li>";
}

if((dbs != '0') && (dbs != '')) {
SOW += "<li>Up to " + dbs + sp + "Dynamic Voice buttons" + "</li>";
}
if((invites != '0') && (invites != '')) {
SOW += "<li>Up to " + invites + sp + "Dynamic Voice invites" + "</li>";
}
if((numwindows != '0') && (numwindows != '')) {
	
	SOW += "<li>" + cap3[0] + sp + numwindows + sp+ "standard call windows" +"</li>";

}

if(windowbrand == 'Yes') {
	SOW += '<ul style=\"margin-top:0.0in;\"><li>Window(s) to have custom branding</li></ul>';

}
if((numsurveys != '0') && (numsurveys != '')) {
SOW += "<li>" + cap3[0] + sp + numsurveys + sp+ "pre-call, exit, operator and offline surveys" +"</li>";
}
if((numcanned != '0') && (numcanned != '')) {
SOW += "<li>" + cap3[0] + sp + numcanned + sp+ cap3[3] +"</li>";
}
if((numsysmsg != '0') && (numsysmsg != '')) {
SOW += "<li>" + cap3[0] + sp + numsysmsg + sp+ cap3[4] +"</li>";
}

if((sso == 'Yes')) {
SOW += "<li>" + 'Setup and configuration of' + sp + ssotype + " SSO</li>";
}

SOW += "</ul></dl>";
}

if(content) {
SOW += '<b>Content</b><dl class = style=\"margin-top:0.0in;\"><dd id="left"><ul style=\"margin-top:0.0in;\">';

SOW += "<li>Setup and deployment of up to " + offers + sp + "concurrent offers" + "</li>";

SOW += "</ul></dl>";
}

if(mobile) {
SOW += '<b>Mobile</b><dl style=\"margin-top:0.0in;\"><dd id="left"><ul style=\"margin-top:0.0in;\">';

if((numskill != '0') && (numskill != '')) {
SOW += "<li>Up to " + numskill + sp + "Mobile " + cap2[0] + "</li>";
}
if((numvispro != '0') && (numvispro != '')) {
SOW += "<li>Up to " + numvispro + sp + "Mobile " + cap2[1] + "</li>";
}
if((dbs != '0') && (dbs != '')) {
SOW += "<li>Up to " + dbs + sp + "Mobile chat buttons" + "</li>";
}
SOW += "<li>LP Mobile plug in code packages for mobile chat</li>";
SOW += "<ul style=\"margin-top:0.0in;\">";
if(ios) {

SOW += "<li>for iOS native applications</li>";

}
if(android) {

SOW += "<li>for Android native applications</li>";

}
if(resp) {

SOW += "<li>for responsive web site</li>";

}

SOW += "</ul></ul></dl>";
}

SOW += "</dl>";

SOW += "<b>Testing</b><ul style=\"margin-top:0.0in;\">";
SOW += "<li>" + testing[0] + "</li>";
SOW += "<li>" + testing[1] + "</li>";
SOW += "<li>Up to " + tcalls + sp + "testing call(s)</li></ul>";

if((train != "none") || (atrain != "none" )) {

SOW += "<b>Training</b>";
SOW += "<ul style=\"margin-top:0.0in;\"><li>" + training.intro + "</li>";

	if(train == "remote") {

		SOW += "<ul style=\"margin-top:0.0in;\"><li>" + numtrain + sp + training.remote + "</li>";

	}
	
	if(train == "sura") {

		SOW += "<ul style=\"margin-top:0.0in;\"><li>" + numtrain + sp + training.sura + "</li>";

	}
	
	if((atrain == "remote") && (train == "none")) {

		SOW += "<ul style=\"margin-top:0.0in;\"><li>Up to " + numatrain + sp + 'remote three (3) hour Admin Console training session for up to 15 participants' + "</li>";
	}
	
	if((atrain == "remote") && (train != "none")) {

		SOW += "<li>Up to " + numatrain + sp + 'remote three (3) hour Admin Console training session for up to 15 participants' + "</li>";
	}
	
SOW += "</ul></ul>";

}

if((numpm != '0') && (numpm != '')) {
SOW += "<b>Project management</b>";
SOW += "<ul style=\"margin-top:0.0in;\"><li>" + numpm + sp +pml+sp + pm + "</li></ul>";

}

if((numplm != '0') && (numplm != '')) {
SOW += "<b>Optimization</b>";
SOW += "<ul style=\"margin-top:0.0in;\"><li>Up to " + numplm + sp + opt.intro + "</li>";
SOW += "<li>" + opt.creation + sp + numscr + sp + opt.scorecard + "</li>";
SOW += "<li>" + opt.creation + sp + numstaffr + sp + opt.staffing + "</li>";
SOW += "<li>" + opt.creation + sp + numaer + sp + opt.agenteff + "</li></ul>";
}

SOW += hours.part1 + sp + hrs + sp + hours.part2;

SOW += "<br><br>" + end;

textarea.innerHTML = SOW;

}

function wordSOW(){

$("#page-content").wordExport();

}

window.onload = function() {
  loadDropDowns();
  initData();
  initTable(window.data);
};
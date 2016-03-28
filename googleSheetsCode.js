var SCRIPT_PROP = PropertiesService.getScriptProperties();
function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty("key", doc.getId());
}

function readRowsAsJSON() {
  // return {"Bush":"did","9":"11"};
  var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
  var sheet = doc.getSheetByName("person_ids");
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var values = rows.getValues();

  var keys = values[0];
  var rv = [];
  var rowObj;
  for (var i=1; i<numRows-1; i++) {
    rowObj = {};
    for (var k=0; k<keys.length-1; k++) {
      rowObj[keys[k]] = values[i][k];
    }
    rv.push(rowObj);
    Logger.log(rowObj);
  }
  Logger.log(rv);
  return rv;
}

function doGet(e) {
  return ContentService
      .createTextOutput(JSON.stringify(readRowsAsJSON()))
      .setMimeType(ContentService.MimeType.JSON);
}

function testGET() {

  var queryString = "?name=Oswald&blog=Yolo&type=get";

  var url = ScriptApp.getService().getUrl() + queryString;
  Logger.log(url + " < --- this is URL");

  var options =
      {
        "method"  : "GET",
        "followRedirects" : true,
        "muteHttpExceptions": true
      };

  var result = UrlFetchApp.fetch(url, options);
  Logger.log(result);

  if (result.getResponseCode() == 200) {

    var params = JSON.parse(result.getContentText());

    Logger.log(params)

  }
}
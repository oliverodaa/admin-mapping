var SCRIPT_PROP = PropertiesService.getScriptProperties();
function setup() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  SCRIPT_PROP.setProperty("key", doc.getId());
}

function readRowsAsJSON(sheetName) {
  // return {"Bush":"did","9":"11"};
  try {
    var doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet = doc.getSheetByName(sheetName);
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
  } catch(e) {
    return {"result":"error", "sheetName":sheetName, "error": e};
  }
}

function doGet(e) {
  if (e !== 'undefined') {
    Logger.log(e.parameter);
    return ContentService
        .createTextOutput(JSON.stringify(readRowsAsJSON(e.parameter.sheetName)))
        .setMimeType(ContentService.MimeType.JSON);
  }
}
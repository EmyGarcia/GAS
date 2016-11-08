function menuItem1() {
    //Variables
    var tarea;

    //Hoja de tecnicos
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var fila = sheet.getLastRow();

    //Ultima tarea
    var tarea = sheet.getRange("E" + fila).getValue();

    //Hoja de tareas
    var sheetTecnicos = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('hojatecnicos');
    var filaTecnicos = sheet.getLastRow();

    var i = 0;
    var contenido;
    var resultado = 1;
    var letra;

    while (resultado > 0) {
        contenido = sheetTecnicos.getRange("A" + (filaTecnicos + i)).getValue();
        resultado = contenido.length;
        letra = "A";
        if (resultado > 0) {
            contenido = sheetTecnicos.getRange("B" + (filaTecnicos + i)).getValue();
            var resultado = contenido.length;
            letra = "B";
        }
        if (resultado > 0) {
            contenido = sheetTecnicos.getRange("C" + (filaTecnicos + i)).getValue();
            var resultado = contenido.length;
            letra = "C";

        }
        if (resultado > 0) {
            i++;
        }
    }

    sheetTecnicos.getRange(letra + (filaTecnicos + i)).setValue(tarea);
}

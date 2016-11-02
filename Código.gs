/**
* Enviar las respuestas de un formulario 
* por mail 
*/ 

function onChange() { 
//Preparamos el inicio del mail 
var cap="Se ha enviado su sugerencia o queja correctamente. A continuación se muestran sus respuestas:"; 
var asunto= "¡Gracias por colaborar!"; 

var cuerpomensaje=cap; 
var dest = ""; 
var camp = ""; 
var sheetActual = SpreadsheetApp.getActiveSpreadsheet(); 
var hojaresp = sheetActual.getSheets()[0]; 
var rangresp = hojaresp.getDataRange(); 
var ul_fila= rangresp.getNumRows(); 
var encontrado=0; 
//Miramos la última fila de la hoja de respuestas
for (j=1; j<rangresp.getNumColumns()+1;j++){ 
camp = rangresp.getCell(ul_fila,j).getValue(); 
for (i=0;i<camp.length;i++){ if (camp.charAt(i)==='@'){ 
encontrado=1; 
} 
}
if (encontrado===1){ 
dest=camp; 
encontrado=0; 
} else { 
cuerpomensaje= cuerpomensaje+rangresp.getCell(1,j).getValue()+": "+camp+""; 
}
}
//Mandamos el mail 
GmailApp.sendEmail(dest, asunto, '',{ htmlBody: cuerpomensaje}); 
}
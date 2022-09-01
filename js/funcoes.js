xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudo.xml", false);
xmlhttp.send();
//informo q arquivo q to trabalhando e do tipo xml
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("postagem")
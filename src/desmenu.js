const desmenu = (prefix, pushname) => {
    return `
*Comandos De Descargas ✅*
 
══════════════

*AUDIO*

 •${prefix}play
  Coloca el nombre de la cancion o el link del video YT

 •${prefix}play2
  Una alternativa por si *play llego a su limite de canciones


 •Ejemplo:
  ${prefix}play Unsainted - Slipknot

O

 •Ejemplo:
  ${prefix}play www.youtube.com/xxxxxxxx

══════════════

*VIDEO*

 •${prefix}ytmp4
  Descarga videos de YouTube

 •Ejemplo:
  ${prefix}ytmp4 www.youtube.com/xxxxxxxx

══════════════
    
_*play y *play2 tiene un limite de 2000 canciones en el server, si llega a su limite se restablecera dentro de 24 horas_
     
_*by Alexx*_
`

}

exports.desmenu = desmenu

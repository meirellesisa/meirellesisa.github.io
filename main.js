function addHospital(nomeHospital, endereco, numero) {
  return `

  <div class="container flex border border-primary my-3 rounded-3 text-center text-light" style="background-color: rgb(170, 240, 219)">
  <h2>${nomeHospital}</h2>
  </div>

  <h2>Endereço</h2>
  ${endereco}

  <h2>Contato</h2>
  (21)${numero}
  
`
}

document.querySelector(`#cards`).innerHTML = 

addHospital('Centro Municipal de Saúde (CMS / Posto de Saúde) Heitor Beltrão','R.Des.Izidro, 144 -Tijuca, Rio de Janeiro - RJ, 20521-160',  "2042-9984")
+
addHospital("Hospital Federal dos Servidores do Estado"," R.Sacadura Cabral, 178 -Saúde, Rio de Janeiro -RJ, 20221-161","22913131")
+
addHospital("Fundação Saúde","Av.Padre Leonel Franca,248 1ºAndar - Gávea, Rio de Janeiro -RJ, 22451-000","2334-5010")
+
addHospital("INI -Instituto Nacional de Infectologia Evandro Chagas"," Av.Brasil,4365 -Manguinhos, Rio de Janeiro -RJ, 21040-360","3865-9595")
+
addHospital("Hospital Universitário Pedro Ernesto","Boulevard 28 de Setembro,77 -Vila Isabel, Rio de Janeiro -RJ, 20551-030","2868-8000")
+
addHospital("Hospital Federal de Ipanema","R.Antônio Parreiras, 67 -Ipanema, Rio de Janeiro -RJ, 22411-020","3111-2300")
+
addHospital("Instituto de Dermatologia Professor Rubem David Azulay"," R.Santa Luzia, 206 -Centro, Rio de Janeiro -RJ, 20020-022","2220-1928")
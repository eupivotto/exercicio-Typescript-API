interface IDataModelos{
    codigo: number,
    nome: string
};

const linkApiGetModelos = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';

async function handleGetModelos() {
    (document.getElementById('button-get') as HTMLButtonElement).disabled = true;

   
      const response = await fetch(linkApiGetModelos);
      const responseJson = await response.json();

      console.log(responseJson);
  
      const dataModelos: IDataModelos[] = responseJson.modelos;
  
      for (let index = 0; index < dataModelos.length; index++) {
        const liElement = document.createElement('li');
        const divElement = document.createElement('div');
        const tituloElement = document.createElement('p');
        const codigoElement = document.createElement('p');
        const nomeElement = document.createElement('p');
  
        codigoElement.textContent = `${dataModelos[index].codigo}`;
        codigoElement.classList.add('conteudo-modelo__codigo');
  
        nomeElement.textContent = `${dataModelos[index].nome}`;
        nomeElement.classList.add('conteudo-modelo__nome');
        
        divElement.classList.add('conteudo-modelo');

        divElement.append(codigoElement, nomeElement);
        liElement.appendChild(divElement);
  
        document.getElementById('modelos')?.appendChild(liElement);
        
      
    
  }
  
  (document.getElementById('button-get') as HTMLButtonElement).disabled = false;

}

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const linkApiGetModelos = 'https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos';
function handleGetModelos() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById('button-get').disabled = true;
        const response = yield fetch(linkApiGetModelos);
        const responseJson = yield response.json();
        console.log(responseJson);
        const dataModelos = responseJson.modelos;
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
            (_a = document.getElementById('modelos')) === null || _a === void 0 ? void 0 : _a.appendChild(liElement);
        }
        document.getElementById('button-get').disabled = false;
    });
}

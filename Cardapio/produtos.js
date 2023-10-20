//pegar os dados do arquivo json atraves do ajax
var ajax = new XMLHttpRequest();

ajax.open("GET", "../produtos.json", true);
ajax.responseType = "json";
ajax.send(); 
ajax.addEventListener("readystatechange", function(){
    if(ajax.readyState === 4 && ajax.status === 200){
        console.log(ajax);

        var resposta = ajax.response;

    //depois de pegar os dados agora é hora de mapealos montando o card dos produtos
        var containerSanduiches = document.getElementById('sanduiches');
        var containerHamburguer = document.getElementById('hamburguer');
        var containerBatata = document.getElementById('batata');
        var containerBebida = document.getElementById('bebidas');
        
        resposta.map((valor)=>{
            if(valor.categoria === 'sanduiche') {
                containerSanduiches.innerHTML += `
                    <div class="card">
                        <a class="btn-detalhes" key="${valor.id}" href="#">
                            <div class="img"><img src="${valor.imagem}" alt=""></div>
                            <div class="content">
                                <div class="product-name">${valor.titulo}</div>
                                <div class="product-description">${valor.descricao}</div>
                                <div style="clear:both"></div>
                                <div class="price">${parseFloat(valor.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
                            </div>
                        </a>
                    </div>
                `;  
            }
            if(valor.categoria === 'hamburguer') {
                containerHamburguer.innerHTML += `
                    <div class="card">
                        <a class="btn-detalhes" key="${valor.id}" href="#">
                            <div class="img"><img src="${valor.imagem}" alt=""></div>
                            <div class="content">
                                <div class="product-name">${valor.titulo}</div>
                                <div class="product-description">${valor.descricao}</div>
                                <div style="clear:both"></div>
                                <div class="price">${parseFloat(valor.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
                            </div>
                        </a>
                    </div>
                `;  
            }
            if(valor.categoria === 'batata') {
                containerBatata.innerHTML += `
                    <div class="card">
                        <a class="btn-detalhes" key="${valor.id}" href="#">
                            <div class="img"><img src="${valor.imagem}" alt=""></div>
                            <div class="content">
                                <div class="product-name">${valor.titulo}</div>
                                <div class="product-description">${valor.descricao}</div>
                                <div style="clear:both"></div>
                                <div class="price">${parseFloat(valor.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
                            </div>
                        </a>
                    </div>
                `;  
            }
            if(valor.categoria === 'bebidas') {
                containerBebida.innerHTML += `
                    <div class="card">
                        <a class="btn-detalhes" key="${valor.id}" href="#">
                            <div class="img"><img src="${valor.imagem}" alt=""></div>
                            <div class="content">
                                <div class="product-name">${valor.titulo}</div>
                                <div class="product-description">${valor.descricao}</div>
                                <div style="clear:both"></div>
                                <div class="price">${parseFloat(valor.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</div>
                            </div>
                        </a>
                    </div>
                `;  
            }
        })

// Passo o ID do produto atraves do metodo get para a pagina "detalhes.js"
        var passaValor= function(valor){
            window.location = "detalhes.html?produto="+valor;
        }
        var links = document.getElementsByClassName('btn-detalhes');
        for(var i = 0; i < links.length; i++){
            links[i].addEventListener("click",function(event){
                event.preventDefault();
                let key = this.getAttribute('key');
                var valorQueEuQueroPassar = key;
                passaValor(valorQueEuQueroPassar);
                return false;
            })
        }

    }
});


# Beyond Challenge

![image](https://github.com/murilo-souza/Beyond-Challenge/assets/53982668/3a1d8ab2-bdf7-4b36-bb9b-544909da9c0b)

Este repositório contém um projeto React configurado com Vite, um bundler para desenvolvimento web rápido. O objetivo deste documento é fornecer instruções sobre como executar o projeto localmente e destacar as principais funcionalidades da aplicação desenvolvida.

## Executando o Projeto

Siga os passos abaixo para executar o projeto em sua máquina local:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/murilo-souza/Beyond-Challenge.git
   
2. **Navegue até o diretório do projeto:**
   ```bash
   cd Beyond-Challenge
   
3. **Instale as dependências:**
    <br/>
    Certifique-se de ter o Node.js e o npm instalados em sua máquina. Execute o seguinte comando para instalar as dependências do projeto:
    <br/>
   ```bash
   npm install

4. **Configure o ambiente conforme o arquivo .env.example**
    <br/>
    Criei um arquivo .env.local e siga a instrução abaixo
    <br/>
    ```bash
    VITE_API_ACCESS_TOKEN="<Seu access token vindo do site do MapBox>"

5. **Inicie o servidor de desenvolvimento:**
   <br/>
   Após a instalação das dependências, inicie o servidor de desenvolvimento executando:
   <br/>
   ```bash
   npm run dev
   ```
   Isso iniciará o servidor de desenvolvimento em http://localhost:5173. Você pode visualizar o aplicativo no seu navegador.

## Features da Aplicação

1. **Selecionar destinos de aeroportos:**
   - Os usuários podem escolher os aeroportos de partida e chegada.

2. **Abrir e fechar modal:**
   - Os usuários podem abrir e fechar a modal.

3. **Animação:**
   - A aplicação tem uma animação quando o usuário abre e fecha a modal.

4. **Visualização do mapa:**
   - Os usuários podem visualizar e interagir com o mapa por meio da API do Mapbox.
     
5. **Re-centralizar:**
   - Os usuários podem re-centralizar o mapa de acordo com as coordenadas de partida.
   
6. **Informações de rota e distancia:**
   - Os usuários podem visualizar na modal a rota que eles estão vendo e a distância entre os dois pontos.


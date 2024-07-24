# Domus Petra

O projeto Domus Petra visa desenvolver um site completo e moderno para uma empresa de consultoria, treinamentos e palestras. Nossa meta é criar uma plataforma digital que não só represente a identidade da empresa, mas também ofereça uma experiência de usuário otimizada e funcionalidade avançada. Este site será uma vitrine para os serviços e expertise da Domus Petra, proporcionando uma interface intuitiva para clientes atuais e potenciais.


Claro! Aqui está uma seção "🚀 Começando" para o README do GitHub do projeto Domus Petra:

🚀 Começando
Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Pré-requisitos
Antes de começar, você vai precisar ter as seguintes ferramentas instaladas na sua máquina:

Node.js
npm ou Yarn



### 📋 Pré-requisitos


Antes de começar, você vai precisar ter as seguintes ferramentas instaladas na sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (normalmente instalado junto com o Node.js) ou [Yarn](https://yarnpkg.com/)
- Um editor de código, como [VSCode](https://code.visualstudio.com/)

### 🔧 Instalação

Link:

git clone https://github.com/AriovaldoSantS/site/edit/main/DomusPetra.git

Navegue até o diretório do projeto:

cd DomusPetra

Instale as dependências do projeto:

npm install

Inicie o servidor de desenvolvimento:

npm start ou *npm run dev*

#Tecnologias Utilizadas

Front-end: Desenvolvido com React
Back-end: Desenvolvido com Node.js

Agora você está pronto para começar a desenvolver e testar o projeto Domus Petra na sua máquina local!


## ⚙️ Executando os testes

Para garantir que todas as funcionalidades do projeto **Domus Petra** estão funcionando corretamente, siga os passos abaixo para executar os testes:

1. Certifique-se de que todas as dependências estão instaladas:
    
    npm install
   

2. Execute os testes:
  
    npm test
   

Esses comandos irão rodar a suíte de testes configurada para o projeto, permitindo que você verifique se todas as partes do código estão funcionando como esperado.

### 🔩 Analise os testes de ponta a ponta

Os testes de ponta a ponta são essenciais para garantir que todas as funcionalidades do projeto **Domus Petra** estão integradas e funcionando corretamente. Aqui estão as instruções para configurar e executar os testes E2E:

1. **Instale as dependências de teste E2E:**

   Certifique-se de que você está no diretório do projeto e instale as dependências necessárias para testes E2E. Normalmente, utiliza-se o [Cypress](https://www.cypress.io/) para esse tipo de teste, mas você pode usar outras ferramentas conforme a sua preferência.

 
   npm install cypress --save-dev


2. **Configure o Cypress:**

   Após a instalação, você precisa abrir o Cypress pela primeira vez para gerar a estrutura de pastas e arquivos de configuração:


   npx cypress open


   Isso abrirá a interface do Cypress, e você poderá ver a estrutura de diretórios criada no seu projeto (`cypress/`).

3. **Escreva os testes E2E:**

   Crie seus arquivos de teste dentro da pasta `cypress/integration`. Um exemplo básico de um teste E2E pode ser algo assim:


   // cypress/integration/example_spec.js

   describe('Domus Petra Site', () => {
     it('deve carregar a página inicial', () => {
       cy.visit('http://localhost:3000'); // ou a URL onde seu app está rodando
       cy.contains('Bem-vindo ao Domus Petra'); // substitua pelo texto esperado na página inicial
     });

     it('deve navegar para a página de serviços', () => {
       cy.get('a[href="/services"]').click(); // ajuste o seletor conforme necessário
       cy.url().should('include', '/services');
       cy.contains('Nossos Serviços'); // substitua pelo texto esperado na página de serviços
     });
   });
   ```

4. **Execute os testes E2E:**

   Para rodar os testes, você pode usar o Cypress na interface gráfica ou no modo headless (linha de comando):

   - **Interface gráfica:**

  
     npx cypress open
     ```

     Na interface que abrir, clique no arquivo de teste que você deseja executar.

   - **Modo headless:**


     npx cypress run
     ```

     Isso executará todos os testes no modo headless, ideal para integração contínua.

5. **Verifique os resultados:**

   Após a execução, verifique os resultados dos testes. Na interface gráfica, você verá o status de cada teste, e no modo headless, os resultados serão exibidos no terminal.

Seguindo esses passos, você conseguirá configurar e executar testes de ponta a ponta para o projeto **Domus Petra**, garantindo que todas as funcionalidades estão funcionando corretamente de forma integrada.

### ⌨️ E testes de estilo de codificação

### Testes de Estilo de Codificação

Os testes de estilo de codificação são utilizados para garantir que o código do projeto **Domus Petra** segue um padrão consistente e boas práticas de programação. Esses testes ajudam a manter a legibilidade, reduzir erros e facilitar a manutenção do código ao longo do tempo. Ferramentas comuns para esses testes incluem linters, como [ESLint](https://eslint.org/) para JavaScript/TypeScript.

#### Por que usar testes de estilo de codificação?

1. **Consistência**: Um estilo de código consistente torna mais fácil para os desenvolvedores entenderem e colaborarem no projeto.
2. **Prevenção de Erros**: Linters podem detectar erros comuns de programação antes mesmo que eles causem problemas na execução do código.
3. **Melhoria da Qualidade do Código**: Encoraja a adesão a boas práticas de desenvolvimento, resultando em um código mais limpo e sustentável.
4. **Facilidade de Revisão de Código**: Código consistente é mais fácil de revisar, reduzindo o tempo necessário para aprovações de pull requests.

#### Configuração e Execução de Testes de Estilo de Codificação

1. **Instale ESLint**:
   
   Certifique-se de estar no diretório do projeto e instale ESLint:
   
 
   npm install eslint --save-dev


2. **Configure ESLint**:
   
   Inicialize a configuração do ESLint:
   

   npx eslint --init
 

   Siga as instruções para escolher as opções que melhor se adequam ao seu projeto. Você pode optar por um conjunto de regras recomendado ou personalizar suas próprias regras.

3. **Crie um arquivo de configuração**:
   
   Um exemplo de arquivo de configuração `.eslintrc.json` pode ser assim:
   
  
   {
     "env": {
       "browser": true,
       "es2021": true
     },
     "extends": [
       "eslint:recommended",
       "plugin:react/recommended"
     ],
     "parserOptions": {
       "ecmaFeatures": {
         "jsx": true
       },
       "ecmaVersion": 12,
       "sourceType": "module"
     },
     "plugins": [
       "react"
     ],
     "rules": {
       "indent": ["error", 2],
       "linebreak-style": ["error", "unix"],
       "quotes": ["error", "double"],
       "semi": ["error", "always"]
     }
   }
   

4. **Execute o ESLint**:
   
   Adicione um script no seu `package.json` para facilitar a execução do ESLint:
   

   "scripts": {
     "lint": "eslint ."
   }


   Agora, você pode rodar o ESLint usando o comando:
   

   npm run lint


5. **Corrija os problemas detectados**:
   
   O ESLint vai exibir uma lista de problemas encontrados no código. Corrija os problemas conforme indicado para garantir que o código segue as regras definidas.

6. **Automatize a correção de problemas**:
   
   Você pode configurar o ESLint para corrigir automaticamente alguns problemas de estilo:
   
  
   npx eslint . --fix


### Exemplo de uso do ESLint

Vamos supor que temos um arquivo `App.js` com o seguinte código:


import React from 'react';

function App() {
  return <div>Hello World</div>;
}

export default App;


Se o ESLint estiver configurado para usar aspas duplas para strings, ele marcará as aspas simples como um problema de estilo. Você pode rodar o comando `npm run lint` para verificar esses problemas e, se configurado, o `npx eslint . --fix` pode corrigir automaticamente para:


import React from "react";

function App() {
  return <div>Hello World</div>;
}

export default App;


Seguindo esses passos, você garante que o código do projeto **Domus Petra** está em conformidade com as melhores práticas de estilo e qualidade, facilitando a colaboração e manutenção do projeto a longo prazo.

## 📦 Implantação

Adicione notas adicionais sobre como implantar isso em um sistema ativo

## 🛠️ Construído com

Mencione as ferramentas que você usou para criar seu projeto

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - O framework web usado
* [Maven](https://maven.apache.org/) - Gerente de Dependência
* [ROME](https://rometools.github.io/rome/) - Usada para gerar RSS

## 🖇️ Colaborando

Por favor, leia o [COLABORACAO.md](https://gist.github.com/usuario/linkParaInfoSobreContribuicoes) para obter detalhes sobre o nosso código de conduta e o processo para nos enviar pedidos de solicitação.

## 📌 Versão

Nós usamos [SemVer](http://semver.org/) para controle de versão. Para as versões disponíveis, observe as [tags neste repositório](https://github.com/suas/tags/do/projeto). 

## ✒️ Autores

Mencione todos aqueles que ajudaram a levantar o projeto desde o seu início

* **Um desenvolvedor** - *Trabalho Inicial* - [umdesenvolvedor](https://github.com/linkParaPerfil)
* **Fulano De Tal** - *Documentação* - [fulanodetal](https://github.com/linkParaPerfil)

Você também pode ver a lista de todos os [colaboradores](https://github.com/usuario/projeto/colaboradores) que participaram deste projeto.

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.

### 🎁 Expressões de Gratidão

* Conte a outras pessoas sobre este projeto 📢;
* Convide alguém da equipe para uma cerveja 🍺;
* Agradeça publicamente 🫂;
* Contribua com melhorias no projeto 💡;
* Deixe uma estrela no repositório ⭐;
* Escreva um comentário ou feedback positivo 💬;
* Compartilhe o projeto nas redes sociais 🌐;
* Participe das discussões e ajude a responder perguntas 💬;
* Ofereça ajuda em áreas onde você tem expertise 🛠️;

Grato pelo apoio ao  projeto **Domus Petra** de qualquer uma dessas maneiras ajuda a incentivar os colaboradores e a melhorar o projeto continuamente.

---
⌨️ com ❤️ por [Armstrong Lohãns](https://gist.github.com/lohhans) 😊










# React + TypeScript + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para atualização rápida
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para atualização rápida

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo um aplicativo de produção, recomendamos atualizar a configuração para habilitar regras de lint com reconhecimento de tipo:

- Configure a propriedade `parserOptions` de nível superior assim:

```js
export default {
// other rules...
parserOptions: {
ecmaVersion: 'latest',
sourceType: 'module',
project: ['./tsconfig.json', './tsconfig.node.json'],
tsconfigRootDir: __dirname,
},
}
```

- Substitua `plugin:@typescript-eslint/recommended` por `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`
- Opcionalmente, adicione `plugin:@typescript-eslint/stylistic-type-checked`
- Instale [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) e adicione `plugin:react/recommended` e `plugin:react/jsx-runtime` à lista `extends`

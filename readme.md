### Tarefa de Automação de Testes de Qualidade de Software

#### Objetivo
Automatizar o fluxo de compra de uma aplicação web utilizando Visual Studio, CodeceptJS e Playwright.

#### Descrição da Tarefa

1. **Configuração do Ambiente**

   - Instale o Visual Studio Code.
   - Configure um projeto Node.js.
   - Instale as dependências necessárias: CodeceptJS e Playwright.

2. **Configuração do CodeceptJS**
   - Inicialize o CodeceptJS no projeto, escolhendo Playwright como driver.

3. **Criação dos Testes Automatizados**
   - Crie um arquivo de teste na pasta `tests/` com um nome apropriado (por exemplo, `shopping_test.js`).
   - Implemente um teste que realiza as seguintes ações:
     1. **Realize o Login no Site:**
        - Navegue até a página de login.
        - Insira as credenciais de login.
        - Submeta o formulário de login.
     2. **Navegue até a Lista de Produtos:**
        - Após o login, navegue até a página de lista de produtos.
     3. **Adicione um Produto ao Carrinho:**
        - Selecione um produto da lista.
        - Adicione o produto ao carrinho.
     4. **Finalize a Compra:**
        - Acesse a página do carrinho.
        - Prossiga para a finalização da compra.
        - Complete o processo de compra preenchendo os detalhes necessários.

4. **Execução dos Testes**
   - Execute os testes automatizados para garantir que estão funcionando corretamente.

5. **Documentação**
   - Documente o processo de configuração do ambiente e a criação dos testes.
   - Inclua instruções claras sobre como executar os testes, possíveis problemas encontrados e suas soluções.

#### Critérios de Avaliação

- **Configuração do Ambiente:** Verificação se o ambiente está corretamente configurado e se todas as dependências estão instaladas.
- **Implementação dos Testes:** Avaliação dos testes quanto à clareza, funcionalidade e cobertura dos casos de uso descritos.
- **Execução dos Testes:** Todos os testes devem ser executados com sucesso.
- **Documentação:** A documentação deve ser clara, detalhada e fácil de seguir.

#### Recursos Úteis

- Documentação do CodeceptJS: [CodeceptJS](https://codecept.io/)
- Documentação do Playwright: [Playwright](https://playwright.dev/)
- Visual Studio Code: [Visual Studio Code](https://code.visualstudio.com/)

---
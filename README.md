# IoasysCamp
Atividade Calculadora
Foi Desenvolvido Para essa primeira atividade uma calculadora com a ideia básicade uma calculadora ideal com as operações basicas.

Tecnologias: Js/Html/Css

JavaScript:
   - Recursos usados
       *document.getElementById() -  Foi usado este recurso com intuito de manipular inputs, neste caso o input resultado
      *eval - usado para computar uma grande string que no caso é o ponto chave da lógica desta aplicação
       *innerHtml() - para empilhar dados vindo do input dentro de uma variavel formando uma grande string que posteriormente sera jogada 
         em uma outra variavel e computada pelo recurso eval
        *substr() - para estar removendo caracteres da grande variavel do tipo string empilhada ao longo do projeto
        *length() - para contar tamanho de variaveis
       
     - Funções
       input -> esta função empilha parametros passados devido o recurso onPress nas tags html que desenham os buttões, essa grande string é empilhada em uma variavel results
       calcular-> recupera o valor total de results , a string e devido ao recurso eval essa "string" é computada e as operações são vistas e computadas gerando outputs coerentes
       dentro da lógica de uma calculadora simples
       back -> empilha as strings mas sempre remove o ultimo elemento a cada click 
       clean -> simplesmente substitui toda string por vazio quando acionado
       
   Isso é tudo pessoal :)
  
  

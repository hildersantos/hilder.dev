---
title: Reboot
description: Depois de mais de uma década rodando em WordPress, resolvi mudar de vez o blog, começando tudo do zero. Descubra o que utilizei inicialmente por aqui.
date: 2017-04-01T00:51:55-03:00
image: ""
draft: false
template: post
---

Após um período com meu site pessoal fora do ar, é chegado o momento de retomar minhas atividades na web. Não que eu estivesse parado, muito pelo contrário: continuo tocando os meus projetos pessoais; o [PopTudo](https://poptudo.com) ganhou uma reformulação e vai muito bem, obrigado; desenvolvi novos projetos para os meus clientes e tem muita coisa legal acontecendo nos bastidores.

Fora isso, passei algum tempo estudando **Elixir**[^1] e estou perdidamente apaixonado pela linguagem. Sério! Só senti algo parecido lá em 2006-2007, quando comecei a criar os meus próprios temas para WordPress. Se você não ainda conhece, o Elixir é uma linguagem funcional[^2] extremamente tolerante a falhas, criada a partir da Erlang[^3] e uma delícia de se programar.

Em Setembro do ano passado, criei um sistema de pesquisa para a ABMP (Associação Bahiana do Mercado Publicitário) usando Elixir + Phoenix Framework e Vue.js, e, olha... foi sensacional, deu gosto DE VERDADE de desenvolver!

É sobre esta jornada que eu devo falar nos próximos artigos daqui do blog: desenvolvimento _full stack_, com foco principalmente no Elixir + Phoenix Framework e Vue.js, mas sem deixar de lado assuntos como WordPress, PHP, UX e assuntos relacionados.

Mas antes de começarmos nossa jornada, deixa eu te contar como esse blog foi criado.

## Criando o novo Hildersantos.com

Eu tinha esse domínio há algum tempo, mas como não havia colocado nada útil (nem tive nenhuma ideia boa do que fazer com ele), acabei deixando que vencesse.

Ano passado, resolvi registrá-lo novamente com o intuito de criar meu blog pessoal, o que cheguei a fazer usando a plataforma _Ghost_. Embora eu tenha curtido bastante, o Ghost me deixou um pouco chateado com a performance: queria algo leve, tanto para mim como para o usuário. E foi aí que pesquisei novas plataformas para o blog, e fiquei entre o **WordPress**, o **Middleman** e o **Jekyll**. Após vários testes, escolhi o Middleman.

## Por que Middleman e não WordPress ou Jekyll?

Já trabalho com WordPress há quase 10 anos e preciso testar coisas novas. Um blog em WordPress, por menor que seja, usa recursos que acabam não valendo a pena para um blog simples como é este. Portanto, ele foi descartado logo de primeira.

Fiquei entre o Jekyll e o Middleman, que são geradores de sites estáticos. O primeiro é bem conhecido para criar blogs e é suportado pelo GitHub. Portanto, se você souber lidar com repositórios `git`, eles hospedam seu blog de graça via _GitHub Pages_. São inúmeros temas open-source que você pode escolher, e a comunidade dele é bem ativa.

Já o Middleman não é tão popular quanto o Jekyll, e não tem suporte a blogs de forma nativa. Então, porque eu escolhi ele? Principalmente pela **facilidade de personalização**. Posso criar layouts de forma extremamente rápida (uso ele inclusive para criar rapidamente sites estáticos para os clientes, antes de integrar com algum backend) e ele me dá liberdade de usar _module bundlers_ como `brunch` ou `webpack` através de _pipelines_ personalizadas.

Outra coisa interessante é que ele é MUITO expansível. Se futuramente eu quiser criar uma seção para mostrar os meus trabalhos aqui, não vai ser nenhum bicho de 7 cabeças. Além disso, ele tem suporte nativo a internacionalização de páginas, posts e templates, o que é ótimo pra mim, já que eu pretendo escrever alguns artigos em inglês.

Uma coisa que ajudou bastante foi um [repositório](https://github.com/hildersantos/middleman-on-steroids) que eu havia criado anteriormente, e tem todo o código necessário para eu iniciar um site no Middleman, já com o `webpack` integrado. Daí, foi só clonar o repositório, alterar o necessário e pronto.

## Daqui pra frente, tudo vai ser diferente...

A reinauguração desse blog é só um pequeno passo em direção à ~~dominação mundial~~ retomada de alguns projetos que ainda estão na gaveta. Se você passar sempre por aqui, vai acompanhar a evolução dele e a minha também, como desenvolvedor.

Fique à vontade: a casa também é sua!

---

Para finalizar, aqui está uma lista (em constante mudança) do que ainda falta fazer no blog, para que você possa acompanhar comigo. Eu vou riscando as tarefas à medida que elas forem sendo feitas.

Sigam-me os bons!

### Apêndice: Lista de Tarefas (TODO)

- ~~Inserir código do Analytics nas páginas~~
- Inserir um formulário para os visitantes se inscreverem por email
- ~~Adicionar ícones (favicons)~~
- ~~Colocar comentários do Disqus~~
- Inserir um formulário de contato simples na página de contato
- ~~Inserir feed~~ (obrigado, [Cab](https://twitter.com/pcab/status/848637395113213953)!)
- ~~Criar uma imagem padrão de compartilhamento~~
- ~~Colocar as meta-tags do Facebook e Twitter~~
- Inserir um sitemap
- Implementar dados estruturados do Google na home, páginas e artigos
- Colocar links para outros idiomas nos posts (caso exista o mesmo post em outra língua)

[^1]: Saiba mais sobre o Elixir aqui: : http://elixir-lang.com
[^2]: Leia _Programação Funcional e Programação Orientada a Objetos. O que são e quais suas principais diferenças?_ no [Stack Overflow](http://pt.stackoverflow.com/questions/13372/programa%C3%A7%C3%A3o-funcional-e-programa%C3%A7%C3%A3o-orientada-a-objetos-o-que-s%C3%A3o-e-quais-suas)
[^3]: A Erlang foi criada pelos engenheiros da Ericsson, e é uma linguagem extremamente robusta, escalonável e com gerenciamento de concorrência em seu _core_. Saiba mais aqui: https://www.erlang.org/

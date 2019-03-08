---
title: Fibonacci, Elixir e recursividade
description: Existem várias formas de implementar a sequência de Fibonacci em Elixir. Conheça algumas abordagens e qual pode ser a melhor delas.
date: 2019-03-08T00:00:41-03:00
image: "./fibonacci.jpg"
draft: false
template: post
---

Se você já leu sobre _proporção áurea (golden ratio)_, então deve ter se deparado com uma sucessão númerica conhecida como **sucessão de Fibonacci** - que utiliza a mesma razão aritmética (~1.61803398875).

> A _sucessão de Fibonacci_ é uma sequência de números inteiros na qual _cada termo subsequente_ é obtido através da soma dos _dois termos anteriores_.

Esta sequência geralmente se inicia com número 0 ou 1, e a partir daí, os próximos números vão sendo obtidos.

Ex: $\{0, 1, 1, 2, 3, 5, 8, 13, 21, 34...\}$

Um dos exercícios mais interessantes para quem está aprendendo a criar algoritmos e trabalhar com recursividade envolve justamente a sequência de Fibonacci. Que tal criarmos um script que, dada um índice `n`, seja retornado o número (termo) que encontra nesta posição, na sequência de Fibonacci (considerando que a mesma comece em 0)?

```elixir
iex> Fibonacci.term(0)
0

iex> Fibonacci.term(1)
1

iex> Fibonacci.term(3)
2

iex> Fibonacci.term(10)
55

```

Embora seja simples, criar um algoritmo desse tipo pode ser bem desafiador para desenvolvedores que estão iniciando os estudos em criação de algoritmos e recursividade; por conta disto, uma das primeiras abordagens que um iniciante pode ter com este problema talvez seja: _"vamos criar uma lista com $n$ termos e imprimir o último valor inserido nesta lista"_.

Podemos iniciar com esta abordagem, mas antes disso, vamos criar um arquivo que será responsável por rodar nossos testes - afinal, não queremos perder tempo testando isso na mão.

```elixir
# fibonacci_test.exs

# Carrego o script
Code.load_file("fibonacci.exs", __DIR__)

# Exclui testes com a tag :pending,
# imprime o tempo de cada teste e
# seta o timeout de cada teste para 2 segundos

ExUnit.start(exclude: :pending, trace: true, timeout: 2000)
use ExUnit.Case

defmodule FibonacciTest do
  use ExUnit.Case

  @tag :pending
  test "returns 0 on position 0" do
    assert Fibonacci.term(0) == 0
  end

  @tag :pending
  test "returns term in position" do
    assert Fibonacci.term(3) == 2
  end


  @tag :pending
  test "doesnt accept negative numbers" do
    assert_raise RuntimeError, "Negative number not allowed", fn ->
      Fibonacci.term(-1)
    end
  end

  @tag :pending
  test "it can check high positions" do
    assert is_number(Fibonacci.term(100))
  end

  @tag :pending
  test "it can check very high positions" do
    assert is_number(Fibonacci.term(100_000))
  end
end
```

Salve este arquivo com o nome `fibonacci_test.exs` em uma pasta à sua escolha.

Feito isso, crie um novo arquivo, `fibonacci.exs`, onde iniciaremos

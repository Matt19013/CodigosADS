# Contagem
##### Este módulo exporta uma função chamada contagem. 
##### A função contagem recebe um número n como argumento e imprime todos os números de 1 a n no console.


### Uso
##### Primeiro, importe o módulo em seu arquivo JavaScript:
- ```const contagem = require('./contagem');```
##### Em seguida, você pode chamar a função contagem com um número como argumento:
- ```contagem(10);```
###### (Exemplo 10)
##### Isso imprimirá os números de 1 a 10 no console.
### Parâmetros
##### A função contagem aceita os seguintes parâmetros:
 ```n: Um número``` . 
##### A função imprimirá todos os números de 1 a n
### Retorno 
##### A função contagem não retorna nenhum valor
# Soma
##### Este módulo exporta uma função chamada sum. A função sum recebe dois números como argumentos e retorna a soma deles.
### Uso
##### Primeiro, importe o módulo em seu arquivo JavaScript:
- ```const sum = require('./sum');```
##### Em seguida, você pode chamar a função sum com dois números como argumentos:
- ```let resultado = sum(5, 3);```
- ```console.log(resultado);  // Isso imprimirá '8' no console.```
### Parâmetros
##### A função ```sum``` aceita os seguintes parâmetros:

- ```a:``` Um número.
- ```b:``` Um número.
### Retorno
##### A função sum retorna a soma dos dois números fornecidos como argumentos. Por exemplo, ```sum(2, 3) retornará 5```
# NumeroP
##### Este módulo exporta uma função chamada```ehPrimo```.
##### A função ```ehPrimo``` recebe um número como argumento e retorna ```true``` se o número for primo e ```false``` caso contrário.
### Uso
##### Primeiro, importe o módulo em seu arquivo JavaScript:
- ```const ehPrimo = require('./ehPrimo');```
##### Em seguida, você pode chamar a função ```ehPrimo``` com um número como argumento:
- ```let resultado = ehPrimo(7);```
- ```console.log(resultado);  // Isso imprimirá 'true' no console, pois 7 é um número primo.```
### Parâmetros
##### A função ```ehPrimo``` aceita o seguinte parâmetro:
- ```n:``` Um número.
### Retorno
##### A função ```ehPrimo``` retorna ```true``` se o número fornecido for primo e ```false``` caso contrário. 
##### Por exemplo, ```ehPrimo(2)``` retornará ```true```, enquanto ```ehPrimo(4)``` retornará ```false```.
# QuirkSort
##### Este módulo exporta uma função chamada ```QuirkSort```.
##### A função ```QuirkSort``` recebe um array como argumento e retorna o array ordenado em ordem crescente.
### Uso
##### Primeiro, importe o módulo em seu arquivo JavaScript:
 ```const QuirkSort = require('./QuirkSort');```
##### Em seguida, você pode chamar a função ```QuirkSort``` com um array como argumento:
- ```let array = [3, 1, 4, 1, 5, 9];```
- ```let resultado = QuirkSort(array);```
- ```console.log(resultado);  // Isso imprimirá '[1, 1, 3, 4, 5, 9]' no console.```
### Parâmetros
##### A função ```QuirkSort``` aceita o seguinte parâmetro:
- ```array:``` Um array de números.
### Retorno
##### A função ```QuirkSort``` retorna o array fornecido ordenado em ordem crescente.
##### Por exemplo, ```QuirkSort([3, 2, 1]) retornará [1, 2, 3].```
# MDC
##### A função ```mdc(a, b)``` calcula o máximo divisor comum ```(MDC)``` entre dois números ```a``` e ```b```.
#####  O ```MDC``` é o maior número que divide ambos sem deixar resto.
### Uso
##### Primeiro, importe a função do módulo onde ela está definida
- ```const mdc = require('./mdc');```
##### Em seguida, você pode usar a função mdc para calcular o ```MDC``` de dois números. Por exemplo:
- ```console.log(mdc(48, 18)); // Saída: 6```
###### Neste exemplo, o MDC de 48 e 18 é 6.
### Parâmetros
- ```a:``` Um número.
- ```b:``` Um número.
### Retorno
##### A função retorna o ```MDC``` dos números ```a``` e ```b```.
# Fibonacci
##### A função ```fibonacci(quantidade_numeros)``` gera uma sequência de ```fibonacci``` com um número específico de termos.
##### A sequência de ```fibonacci``` é uma série de números em que cada número é a soma dos dois anteriores. Começa com 0 e 1.
### Uso
##### Primeiro, importe a função do módulo onde ela está definida:
- ```const fibonacci = require('./fibonacci');```
##### Em seguida, você pode usar a função ```fibonacci``` para gerar uma sequência de ```fibonacci```. Por exemplo:
- ```console.log(fibonacci(10)); // Saída: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]```
###### Neste exemplo, a função gera os primeiros 10 termos da sequência de fibonacci
### Parâmetros
##### ```quantidade_numeros (número):``` O número de termos da sequência de ```fibonacci``` que você deseja gerar.
### Retorno
##### A função retorna um array contendo a sequência de ```fibonacci``` com o número especificado de termos.
###### Exemplo (12) / 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

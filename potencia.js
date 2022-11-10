b = parseInt(prompt("Digite a base de um número:"));
expo = parseInt(prompt("Digite o expoente de um número:"));
i = 1;
res = 1;
while (i<=expo){
    res = res * b;
    i++
    document.write(res + '<br>');
}
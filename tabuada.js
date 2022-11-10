alert ("Bem-vindo!");

n = parseInt(prompt("Informe um número: "));

for (i=1; i<=10; i++){
    res = n*i
    document.write(n + " x " + i + " = " + res + '<br>');
}
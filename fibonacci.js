alert ("Bem vindo!")

n = parseInt(prompt("Informe a quantidade de termos: "));
t1 = 0;
t2 = 1;
t3 = 1;
for (i=0; i<=n; i++){
    document.write(t3 + '<br>');
    t3 = t1 + t2;
    t1 = t2;
    t2 = t3;
}
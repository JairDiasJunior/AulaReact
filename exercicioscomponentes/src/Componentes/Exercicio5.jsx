export default function Exercicio5({quantidade})
{
   let salariobruto = (quantidade*150);
   let aliquota = ((salariobruto*8)/100); 
   let salarioliquido = (salariobruto-aliquota);

   return(
    <dev>
        O salário bruto é: {salariobruto}
        
        O alíquota é: {aliquota}
    
        O salário líquido é: {salarioliquido}
    </dev>
   )
}
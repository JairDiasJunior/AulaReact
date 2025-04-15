export default function Exercicio1({fah})
{
let celsius=(fah-32)*5/9


    return(
      <div>
        <h3>Exercício 1</h3>

        A conversão de 100ºF para Celsius é {celsius}
        A conversão de 70ºF para Celsius é {celsius}
      </div>   
    );
}
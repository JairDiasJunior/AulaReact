export default function Exercicio2 ({ peso, altura})
{
  let IMC = peso / (altura*altura)  

  return(
    <div>
      <h3>Exercício 2</h3>

        Uma pessoa com 80kg e 1.80 metros tem IMC de {IMC}
        Uma pessoa com 60kg e 1.60 metros tem IMC de {IMC}
    </div>
  )
}
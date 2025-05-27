export default function Exercicio8({peso, altura})
{
    let IMC = Number(peso) / Number(altura) * Number(altura);

    return(
        <div>
            Uma pessoa com altura {altura} e peso {peso} tem um IMC de {IMC}
        </div>
    );
}
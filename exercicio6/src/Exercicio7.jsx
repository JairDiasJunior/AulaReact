export default function Exercicio7({nota1, nota2, nota3})
{
    let total = Number(nota1) + Number(nota2) + Number(nota3);
    let media = total/3;

    return(
        <div>
            A media de um aluno com nota total {total} tem uma média {media}
        </div>
    );
}
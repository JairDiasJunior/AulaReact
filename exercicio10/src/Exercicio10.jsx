export default function Exercicio10({dist, vel})
{
    let tempo = Number(dist)/Number(vel)
    
    return(
        <div>
            O tempo em horas foi de {tempo}
        </div>
    )
}
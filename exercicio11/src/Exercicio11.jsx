export default function Exercicio11({custo})
{
    let custo_distribuidor = (Number(custo)*28)/100
    let imposto = (custo*45)/100
    let custo_final = custo + custo_distribuidor + imposto
    
    return(
        <div>
            O valor do custo distribuidor foi de {custo_distribuidor}, o valor dos impostos foi de {imposto} e o custo final foi de {custo_final} 
        </div>
    )
}
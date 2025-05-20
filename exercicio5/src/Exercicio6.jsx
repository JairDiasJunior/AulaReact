export default function Exercicio6({quantidade, preco})
{
    let subtotal = Number(quantidade) * Number(preco);
    let desconto = (subtotal*10)/100;
    let valorf = subtotal - desconto;

    return(
        <div>
            O subtotal {subtotal} com um desconto de {desconto} resulta num valor final de {valorf}
        </div>
    );
}


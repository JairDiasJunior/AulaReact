export default function Exercicio4({tipo, base, altura})
{
    if (tipo == "triangulo"){
      let area = (base*altura/2);  
      return(
        <div>
        A soma da área do triângulo é: {area}
        </div>
      )
    }
    else if (tipo == "retangulo"){
        let area = (base*altura);
        return(
        <div>
            A soma da área do retângulo é: {area}
        </div>
        )
    }
    else{
        return(
        <div>
            O valor é inválido
        </div>
        )  
    }
};
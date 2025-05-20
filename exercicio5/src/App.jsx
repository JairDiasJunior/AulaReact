import Exercicio6 from "./Exercicio6"
import Exercicio7 from "./Exercicio7"

export default function App()
{
  return(
    <div>
      <h1>Exercicio6</h1>
      <Exercicio6 quantidade={2} preco={3}/>
    
      <h1>Exercicio7</h1>
      <Exercicio7 nota1={6} nota2={8} nota3={7}/>
</div>
  );
}
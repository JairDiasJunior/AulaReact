import "./App.css";

export default function App()
{
    const estilo = {
        color: "blue",
        textAlign: "center", 
        backgroundColor: "turquoise",
        padding: "10px",
    };

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            <p>
                O CSS (<i>Cascading Style Sheets</i>) é uma linguagem utilizada para estilizar as <b>páginas web</b>. Com ela podemos definir: 
            </p>

            <ul>
                <li>Cores de fundo, do texto e dos elemoentos.</li>
                <li>Fontes e tamanho das letras</li>
                <li>Posicionamento dos elementos na página</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeitos visuiais e animações</li>
            </ul>

            <h3 style={estilo}>Greninja</h3>

            <p className="centro">
                <img src="ash-Greninja.png"/>
            </p>
            
        </div>
    );
}
import PIX from "react-qrcode-pix";
import "./style.css";
export default function Modal({info, close}: {info:any, close: () => void}) {
  return (
    <div id="modal"   onClick={(ev) => {
        if (ev.target instanceof HTMLDivElement && ev.target.id == "modal") {
          close();
        }
      }}>
      <div id="box">
        <header>
            <h2>
                Ginásio Gastão Hoff
            </h2>
        </header>
        <main>
            <h3>Nossas Demandas</h3>
            <div id="demanda">
                <div >
                <p>Água</p>
                <div id="block" style={{width:`100px`, background: 'red', height:'10px'}}></div>
                </div>
                <div >
                <p>Comida</p>
                <div id="block" style={{width:`50px`, background: 'orange', height:'10px'}}></div>
                </div>
                <div >
                <p>Produtos de Higiene</p>
                <div id="block" style={{width:`30px`, background: 'green', height:'10px'}}></div>
                </div>
                <div >
                <p>Água</p>
                <div id="block" style={{width:`10px`, background: 'green', height:'10px'}}></div>
                </div>
            

            </div>
           
        </main>
        <footer>
            <h3>Nosso pix: 000*000*00</h3>
            <PIX 
            merchant="Teste"
            pixkey="04345811007"
            city="Butiá"
           />
            <h3>Endereço:Av Getulio Vargas</h3> 
        </footer>
      </div>
    </div>
  );
}

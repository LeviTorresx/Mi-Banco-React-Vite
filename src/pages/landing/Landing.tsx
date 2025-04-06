import Section from "../../components/sections/Section";
import Button from "../../components/button/Button";
import "./LandingStyles.css";

export default function Landing() {
  return (
    <div className="grid">
      <div className="container-logo item-0">
        <img className="img" src="/src/assets/1.webp" alt="logo" />
      </div>

      <div className="item item-1">
        <Section
          title="Transferencias"
          description="Realiza transferencias de forma rápida y segura."
        >
          <Button onClick={() => alert("Button clicked!")}>
            Realizar una Transferencia -{" "}
          </Button>
        </Section>
      </div>

      <div className="item item-2 desktop-only">
        <Section
          title="Sobre nosotros"
          description="Software eficaz ;) hecho por gente ineficaz "
        ></Section>
      </div>

      <div className="item item-3">
        <Section
          title=" Consultar Clientes"
          description="Consulta el estado de tus clientes."
        >
          <Button onClick={() => alert("Button clicked!")}>
            Consultar Clientes
          </Button>
        </Section>
      </div>

      <div className="item item-5 ">
        <Section
          title=" Historial "
          description="Consulta el historial de tus transferencias."
        >
          <Button onClick={() => alert("Button clicked!")}>Consultar </Button>
        </Section>
      </div>

      <div className="item item-4 ">
        <Section title="Crear Clientes" description="Crea nuevos clientes.">
          <Button onClick={() => alert("Button clicked!")}>
            Crear Cliente
          </Button>
        </Section>
      </div>
    </div>
  );
}

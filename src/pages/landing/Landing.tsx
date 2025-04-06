import { Section } from "../../components";
import { TbDatabaseSearch } from "react-icons/tb";
import { FaMoneyBillTransfer, FaUsers } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { RiFolderUserFill } from "react-icons/ri";

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
          route="/transferencias"
        >
          <FaMoneyBillTransfer className="icon" />
        </Section>
      </div>

      <div className="item item-2 desktop-only">
        <Section
          title="Sobre nosotros"
          description="Software eficaz ;) hecho por gente ineficaz "
          route="/sobre-nosotros"
        >
          <FaUsers className="icon" />
        </Section>
      </div>

      <div className="item item-3">
        <Section
          title=" Consultar Clientes"
          description="Consulta el estado de tus clientes."
          route="/consultar-clientes"
        >
          <TbDatabaseSearch className="icon" />
        </Section>
      </div>

      <div className="item item-5 ">
        <Section
          title=" Historial "
          description="Consulta el historial de tus transferencias."
          route="/historial"
        >
          <RiFolderUserFill className="icon" />
        </Section>
      </div>

      <div className="item item-4 ">
        <Section
          title="Crear Clientes"
          description="Crea nuevos clientes."
          route="/crear-clientes"
        >
          <FaUserPlus className="icon" />
        </Section>
      </div>
    </div>
  );
}

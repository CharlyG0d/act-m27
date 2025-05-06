import { CartImg, CartInfo, CartPersonajes, CartTitle, SectionPersonajes, TitlePersonajes } from "./styles";
import jinwoo from "../../../assets/jinwoo.jpg"
import cha from "../../../assets/cha.jpg"
import yoo from "../../../assets/yoo-Jinho.jpg"
import Jinah from "../../../assets/Jinasung.png"


const Personajes = () =>{
    return (
        <>
        <TitlePersonajes >Personajes</TitlePersonajes>
        <SectionPersonajes>
            
             <CartPersonajes>
                 <CartImg src={jinwoo} alt="Jin-Woo" />
                 <CartTitle primary="principal">Sung Jin-Woo</CartTitle>
                 <CartInfo>Sung Jinwoo (성진우) es el protagonista principal de Solo Leveling. Originalmente fue un cazador de rango E muy débil. 
                           Dentro de una mazmorra le surge la oportunidad de su vida cuando es seleccionado como el Jugador de un programa mágico llamado Sistema y consigue la habilidad única de crecer en fuerza sin restricciones. 
                 </CartInfo>
             </CartPersonajes>
             <CartPersonajes>
                 <CartImg src={cha} alt="Cha Hae-in" />
                 <CartTitle >Cha Hae-In</CartTitle>
                    <CartInfo>Cha Hae-In (차해 인) es una cazadora coreana de rango S que se especializa en el manejo de la espada y la única mujer de rango S en el país. 
                            Ella tiene una condición extraña que hace que otros cazadores huelan mal para ella y eventualmente desarrolla sentimientos románticos por Jinwoo después de presenciarlo en acción y descubrir que él es el único cazador que ha conocido que huele bien,
                    </CartInfo>
             </CartPersonajes>

             <CartPersonajes>
                 <CartImg src={yoo} alt="Yoo Jinho" />
                 <CartTitle >Yoo Jin-ho</CartTitle>
                 <CartInfo>
                 Yoo Jinho (유진호) es un cazador coreano de rango D y el mejor amigo de Jinwoo. 
                 Proviene de una familia muy rica y consigue ser el vicepresidente del gremio de Jinwoo después de impresionar a este último con su lealtad y compromiso.
                 </CartInfo>
             </CartPersonajes>

             <CartPersonajes>
                 <CartImg src={Jinah} alt="Jinah" />
                 <CartTitle >Sung Jin-ah</CartTitle>
                 <CartInfo>
                 Sung Jinah (성진 아) es la hermana menor de Jinwoo. A diferencia de su hermano, ella es una humana completamente normal sin ninguna habilidad mágica. 
                 La cual vive una vida de estudiante corriente.
                 </CartInfo>
             </CartPersonajes>
        </SectionPersonajes>

        
        </>
    )
}

export default Personajes;
import Image from 'next/image';
import estilos from './LandingPage.module.css';
import Logo from '/public/assets/barbearia-logo.png';
import IconeMoon from '/public/assets/moon.png';
import IconeSun from '/public/assets/sun.png';
import { useState } from 'react';


export default function LandingPage() {
    const [ temaLight, setTemaLight ] = useState(true);

    function inverterTema() {
        setTemaLight(!temaLight)
    }

    return (
        <div className={ temaLight ? estilos.tema_light : estilos.tema_dark }>
            <div className={estilos.topo_container}>
                <Image className={ temaLight ? estilos.logo_img_light : estilos.logo_img_dark } src={Logo} alt='Logomarca' />

                <button onClick={inverterTema} className={ temaLight ? estilos.tema_light : estilos.tema_dark }>
                    <Image className={estilos.button_icon} src={temaLight ? IconeMoon : IconeSun} />{temaLight ? 'Dark' : 'Light'}
                </button>
            </div>

            <div className={estilos.capa_container}></div>

            <div className={estilos.textos_container}>
                <h1>Bem-vindo a Barber Shop</h1>

                <p>
                    Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.
                </p>

                <p>
                    Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                </p>

                <p>S. Kelly</p>
            </div>
        </div>
    );
}
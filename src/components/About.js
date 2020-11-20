import React from 'react'
import People1 from '../images/mayara.jpg'
import People2 from '../images/ramon.jpg'
import People3 from '../images/jefferson.jpg'
import Linkedin from '../images/icon-awesome-linkedin.svg'
import Github from '../images/icon-github.svg'
import Email from '../images/icon-envelope.svg'
import './About.css'


//componente criado para descrição do projeto - function mais descritiva
function About() {
    return (
        <div className="content">
            <div className="about">
            <h1 id="title">Sobre o Projeto</h1>
            <p id="text">O projeto HashtagFinder é uma plataforma desenvolvida para facilitar a busca de hashtags específicas ou assunto específico, com palavras chaves, onde o usuário pode encontrar menções, imagens e até outros usuários que utilizaram as mesmas. Está sendo desenvolvida por uma equipe durante a capacitação do curso em tecnologias HTML, CSS, JavaScript e React, para testar e melhorar nossos conhecimentos e aprendizados dos mesmos. Estamos em busca de melhorias e adaptação nessa nova era, onde a tecnologia está em constante evolução, para agregar e contribuir com a capacitação do mercado de trabalho, que está carente de profissionais na área.</p>
        </div>
        <h1 id="who">Quem somos</h1>
            <div className="members">
                <div className="member">
                    <img src={People1} className="people"/>
                    <h2 className="name">Mayara Abila</h2>
                    <p className="text">Bacharela em Serviço Social e estudante de Desenvolvimento Front-End.</p>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/mayara-tolentino-abila/" target="_blank">
                                <img src={Linkedin} />
                            </a>
                            <a href="https://github.com/MayaraAbila" target="_blank">
                                <img src={Github}/>
                            </a>
                            <a href="mailto:mayara_abila@hotmail.com">
                                <img src={Email}/>
                            </a>          
                        </div>    
                </div>        
                <div className="member">    
                    <img src={People2} className="people"/>
                    <h2 className="name">Ramon Coimbra</h2>       
                    <p className="text">Estudante de desenvolvimento front-end</p>                
                        <div className="social">
                            <a href="https://www.linkedin.com/in/ramon-coimbra-novais/" target="_blank">
                                <img src={Linkedin} />
                            </a>
                            <a href="https://github.com" target="_blank">
                                <img src={Github}/>
                            </a>
                            <a href="mailto:">
                                <img src={Email}/>
                            </a>         
                        </div>                
                </div>    
                <div className="member">
                    <img src={People3} className="people"/>
                    <h2 className="name">Jefferson Aquino</h2>
                    <p className="text">Biólogo e atualmente estudante de desenvolvimento front-end</p> 
                        <div className="social">
                            <a href="https://www.linkedin.com/" target="_blank">
                                <img src={Linkedin} />
                            </a>
                            <a href="https://github.com" target="_blank">
                                <img src={Github}/>
                            </a>
                            <a href="mailto:">
                                <img src={Email}/>
                            </a>    
                        </div>
                    </div>
                </div>
            </div>
    );
}

export {About};
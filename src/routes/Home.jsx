import { } from 'react';
import '../scss/Home.scss';
import OrganizacaoImage from '../images/organizacao.jpeg';
import RapidoImage from '../images/rapido.jpg';
import SatisfeitoImage from '../images/satisfeito.jpg';
import MateriaisImage from '../images/materiais.jpg';

function Home() {
    return (
        <>
            <main className='mainHome'>
                <section>
                    <header>
                        <img src={MateriaisImage} alt="" className='img-home' />
                    </header>
                    <article>
                        <div className='tituloSolucao'>
                            <h1>TITULO DA SOLUÇÃO</h1>
                        </div>

                        <div className="banner-container">
                            <div className="banner">
                                <p className='escrita-sol'>
                                    Nossa solução é fazer um sistema de verificação de materiais cirúrgicos nas salas para não haver atrasos em cirurgias.<br /><br />
                                </p>
                                
                            </div>
                            <a href="#" className="mais-informacao">Mais informação</a>
                        </div>

                    </article>
                </section>

                <aside>
                    <div>
                        <h2 className='titulo-sol'>&nbsp;&nbsp;&nbsp;&nbsp;O que é a solução</h2>
                        <p className='escrita-aside'>
                            &nbsp;&nbsp;&nbsp;&nbsp;A nossa solução consiste em criar um programa, para ser utilizado pelos médicos e enfermeiros, para que possam reduzir o atraso de pacientes para cirurgias serem feitas.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2 className='titulo-sol'>&nbsp;&nbsp;&nbsp;&nbsp;O que ela fará</h2>
                        <p className='escrita-aside'>
                            &nbsp;&nbsp;&nbsp;&nbsp;O nosso programa garantirá que os enfermeiros não faltem nenhum objeto na hora de fazer alguma respectiva cirurgia, garantindo que todos os materiais corretos estejam na sala correta e esterilizados.
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2 className='titulo-sol'>&nbsp;&nbsp;&nbsp;&nbsp;Como Funcionará</h2>
                        <p className='escrita-aside'>
                            &nbsp;&nbsp;&nbsp;&nbsp;No nosso programa, a pessoa terá a opção de selecionar a sala de cirurgia que será utilizada e o tipo de cirurgia que será feita. Quando selecionados, uma tela que mostra todos os materiais e suas respectivas quantidades que serão utilizadas aparecerá, e o enfermeiro deverá marcar os objetos que colocar na sala.
                        </p>
                    </div>
                </aside>
            </main>
            <div className='fundopreto'>
                <h1 className='tituloSolucao'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vantagens</h1>

                <div className="cards-section row mx-auto cards-container d-flex justify-content-center">
                    <div className="card col-md-3 mb-3 card-custom" style={{ background: '#0c0c0c', border: '1px solid #bebebe' }}>
                        <div className="card-body d-flex flex-row align-items-center">
                            <img
                                src={OrganizacaoImage}
                                alt="Imagem do card"
                                className="mr-3"
                                style={{ width: '130px', height: '300px', objectFit: 'cover', marginRight: '10px' }}
                            />
                            <div>
                                <h5 className="card-title" style={{ color: 'purple', fontSize: '60px' }}>1</h5>
                                <h6 className="card-subtitle mb-2 text-primary">Melhor organização</h6>
                                <p className="card-text" style={{ color: '#FFA3FD' }}>Com a utilização da nossa solução, os hospitais ficariam muito mais organizados com relação aos materiais para cirurgias, e se a equipe médica estiver pronta, a cirurgia será feita com mais agilidade.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 mb-2 card-custom" style={{ background: '#0c0c0c', border: '1px solid #bebebe' }}>
                        <div className="card-body d-flex flex-row align-items-center">
                            <img
                                src={RapidoImage}
                                alt="Imagem do card"
                                className="mr-3"
                                style={{ width: '120px', height: '320px', objectFit: "cover", marginRight: '10px' }}
                            />
                            <div>
                                <h5 className="card-title" style={{ color: 'purple', fontSize: '60px' }}>2</h5>
                                <h6 className="card-subtitle mb-2 text-primary">Mais rapidez</h6>
                                <p className="card-text" style={{ color: '#FFA3FD' }}>Com os materiais nos lugares de suas respectivas salas de cirurgias, as cirurgias poderão ser feitas o mais rápido o possível, possibilitando os pacientes a irem embora o quanto antes..</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 mb-3 card-custom" style={{ background: '#0c0c0c', border: '1px solid #bebebe' }}>
                        <div className="card-body d-flex flex-row align-items-center">
                            <img
                                src={SatisfeitoImage}
                                alt="Imagem do card"
                                className="mr-3"
                                style={{ width: '120px', height: '320px', objectFit: 'cover', marginRight: '10px' }}
                            />
                            <div>
                                <h5 className="card-title" style={{ color: 'purple', fontSize: '60px' }}>3</h5>
                                <h6 className="card-subtitle mb-3 text-primary">Clientes satisfeitos</h6>
                                <p className="card-text" style={{ color: '#FFA3FD' }}>Como ninguém gosta de esperar para fazer cirurgias por diversos motivos, como o jejum, ter um processo que agilize a cirurgia a ser feita fará com que mais clientes fiquem satisfeitos, pois não terão que esperar um longo tempo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br />
            </div>
        </>
    )
}

export default Home;
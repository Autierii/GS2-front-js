import { } from 'react';
import '../scss/Home.scss';
import OrganizacaoImage from '../images/organizacao.jpeg';
import RapidoImage from '../images/rapido.jpg';
import SatisfeitoImage from '../images/satisfeito.jpg';

function Home() {
    return (
        <>
            <main className='mainHome'>
                <section>
                    <header>
                        <img src="" alt="" className='img-home' />
                    </header>
                    <article>
                        <div className='tituloSolucao'>
                            <h1>
                                TITULO DA SOLUÇÃO
                            </h1>
                        </div>

                        <div className="banner">
                            <p className='escrita-sol'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde porro am.
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>
                            <a href="#">Mais informação</a>
                        </div>
                        
                    </article>
                </section>

                <aside>
                    <div>
                        <h2 className='titulo-sol'>O que é a solução</h2>
                        <p className='escrita-sol'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente suscipit, perferendis dignissimos esse quibusdam temporibus, nobis sit corporis nisi officia mollitia accusantium maiores illo laudantium. Impedit sunt minus quisquam dignissimos!
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2 className='titulo-sol'>O que ela fará</h2>
                        <p className='escrita-sol'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi esse alias omnis repellat tempora incidunt? Eius rem corrupti esse perferendis nihil quam voluptatibus adipisci? Quae animi dicta consequuntur? Sint?
                        </p>
                    </div>
                    <hr />
                    <div>
                        <h2 className='titulo-sol'>Como Funcionará</h2>
                        <p className='escrita-sol'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus suscipit quidem fugiat alias necessitatibus accusantium molestias, aspernatur libero ipsa soluta eius vero, omnis nihil obcaecati sequi harum corporis consectetur.
                        </p>
                    </div>
                </aside>
            </main>
            <div className='fundopreto'>
                <h1 className='tituloSolucao'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vantagens</h1>

                <div className="cards-section row mx-auto cards-container d-flex justify-content-center">
                    <div className="card col-md-3 mb-3 card-custom" style={{ background: '#0c0c0c', border: '1px solid #bebebe'}}>
                        <div className="card-body d-flex flex-row align-items-center">
                            <img
                                src={OrganizacaoImage}
                                alt="Imagem do card"
                                className="mr-3"
                                style={{ width: '130px', height: '300px', objectFit: 'cover', marginRight: '10px' }}
                            />
                            <div>
                                <h5 className="card-title" style={{color: 'purple', fontSize: '60px'}}>1</h5>
                                <h6 className="card-subtitle mb-2 text-primary">Melhor organização</h6>
                                <p className="card-text" style={{color: '#FFA3FD'}}>Com a utilização da nossa solução, os hospitais ficariam muito mais organizados com relação aos materiais para cirurgias, e se a equipe médica estiver pronta, a cirurgia será feita com mais agilidade.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 mb-2 card-custom" style={{ background: '#0c0c0c', border: '1px solid #bebebe'}}>
                        <div className="card-body d-flex flex-row align-items-center">
                            <img
                                src={RapidoImage}
                                alt="Imagem do card"
                                className="mr-3"
                                style={{ width: '120px', height: '320px', objectFit: "cover", marginRight: '10px' }}
                            />
                            <div>
                                <h5 className="card-title" style={{color: 'purple', fontSize: '60px'}}>2</h5>
                                <h6 className="card-subtitle mb-2 text-primary">Mais rapidez</h6>
                                <p className="card-text" style={{color: '#FFA3FD'}}>Com os materiais nos lugares de suas respectivas salas de cirurgias, as cirurgias poderão ser feitas o mais rápido o possível, possibilitando os pacientes a irem embora o quanto antes..</p>
                            </div>
                        </div>
                    </div>
                    <div className="card col-md-3 mb-3 card-custom" style={{ background: '#0c0c0c', border: '1px solid #bebebe'}}>
                        <div className="card-body d-flex flex-row align-items-center">
                            <img
                                src={SatisfeitoImage}
                                alt="Imagem do card"
                                className="mr-3"
                                style={{ width: '120px', height: '320px', objectFit: 'cover', marginRight: '10px' }}
                            />
                            <div>
                                <h5 className="card-title" style={{color: 'purple', fontSize: '60px'}}>3</h5>
                                <h6 className="card-subtitle mb-3 text-primary">Clientes satisfeitos</h6>
                                <p className="card-text" style={{color: '#FFA3FD'}}>Como ninguém gosta de esperar para fazer cirurgias por diversos motivos, como o jejum, ter um processo que agilize a cirurgia a ser feita fará com que mais clientes fiquem satisfeitos, pois não terão que esperar um longo tempo.</p>
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
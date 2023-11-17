import {} from 'react'
import '../scss/Home.scss'



function Home() {


    

    return (
        <>
            <main className='mainHome'>
            
                <section>
                    <header>
                        <img src="" alt="" className='img-home'/>
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
                    <hr/>
                    <div>
                        <h2 className='titulo-sol'>O que ela fará</h2>
                        <p className='escrita-sol'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi esse alias omnis repellat tempora incidunt? Eius rem corrupti esse perferendis nihil quam voluptatibus adipisci? Quae animi dicta consequuntur? Sint?
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <h2 className='titulo-sol'>Como Funcionará</h2>
                        <p className='escrita-sol'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ducimus suscipit quidem fugiat alias necessitatibus accusantium molestias, aspernatur libero ipsa soluta eius vero, omnis nihil obcaecati sequi harum corporis consectetur.
                        </p>
                    </div>
                </aside>                
            </main>

            
            
            
        </>
    )
}

export default Home
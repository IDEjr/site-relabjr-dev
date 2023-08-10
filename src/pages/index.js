import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImagemComBotao from '../components/imagemComBotao'
import ServicesHome from '../components/servicesHome'
import imagemResultados from '../images/imagemResultados.png'
import imagemMembros from '../images/imagemMembros.png'

export default function Home() {
  const resultados = {
    imagem: imagemResultados,
    titulo: 'MELHORE SEUS RESULTADOS',
    texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
    textoBotao: 'Entre em contato',
    link: 'servicos'
  };

  const membros = {
    imagem: imagemMembros,
    titulo: 'MEMBROS',
    texto: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget libero viverra velit pellentesque hendrerit. Donec interdum dolor nisl, at rhoncus dolor consectetur euismod. Aliquam scelerisque finibus egestas.',
    textoBotao: 'Sejo membro',
    link: 'quemSomos'
  };

  return (
    <div className={styles['tudo']}>
      <Navbar />
      <div className={styles['container']}>
        <Head><title>Exemplo Next + Netlify</title></Head>
        <h1 className={styles['header']}>Exemplo</h1>
        <p className={styles['subtitle']}>Abra /admin para acessar configurações netlify</p>
      </div>
      <ImagemComBotao {...resultados} />
      <ServicesHome />
      <ImagemComBotao {...membros} />        
      <Footer />
    </div>
  )
}

import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFound = () => (
  <Layout title="Not Found">
    <article className="single">
      <header className="single__header">
        <h1 className="single__title">Erro 404 - Não Encontrado</h1>
      </header>
      <div className="single__content">
        <p>A página que você buscou não pôde ser encontrada.</p>
        <p>
          Que tal <Link to="/">retornar à página inicial?</Link>
        </p>
      </div>
    </article>
  </Layout>
)

export default NotFound

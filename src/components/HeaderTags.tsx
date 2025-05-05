import { Helmet } from "react-helmet-async";

export default function HeaderTags() {

  return (<Helmet>
    <title>Eduarda Siqueira | Desenvolvedora Front-end</title>
    <meta
      name="description"
      content="Portfólio profissional de Eduarda Siqueira de Moura, desenvolvedora front-end com foco em criar interfaces interativas e intuitivas."
    />
    <meta
      name="keywords"
      content="desenvolvedor, front-end, portfólio, React, HTML, CSS, JavaScript"
    />
    <meta name="author" content="Eduarda Siqueira de Moura" />
    <meta
      property="og:title"
      content="Eduarda Siqueira | Desenvolvedora Front-end"
    />
    <meta
      property="og:description"
      content="Portfólio profissional de Eduarda Siqueira de Moura, desenvolvedora front-end com foco em criar interfaces interativas e intuitivas."
    />
    <meta property="og:type" content="website" />
    <html lang="pt-BR" />
  </Helmet>)
}
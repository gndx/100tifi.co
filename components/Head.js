import Head from 'next/head'
import { connect } from 'react-redux'

export default connect(state => state)(({ data, language }) => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <title>{`${data.name} - 100tifi.co ⚛ `}</title>
      <link rel="stylesheet" href="/_next/static/style.css" />
      <link rel="icon" type="image/png" href="https://s3.amazonaws.com/chewiekie/img/favicon-32x32.png" />
      <link rel="canonical" href="https://100tifi.co/" />
      <meta name="author" content="Oscar Barajas" />
      <meta name="description" content={`${language.shareText} ${data.name} ${language.species}: ${data.species} ${language.origin} ${data.origin.name}, ${language.knowCharacter}`} />
      <meta name="keywords" content="Rick and Morty, Rick, Morty, ciencia, cientifico " />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gndx" />
      <meta name="twitter:creator" content="@gndx" />
      <meta name="twitter:title" content={`⚛ ${data.name}`} />
      <meta name="twitter:description" content={`${language.shareText} ${data.name} ${data.species} ${data.origin.name}, ${language.knowCharacter}`} />
      <meta name="twitter:image" content={data.image} />
      <meta property="og:url" content={`https://100tifi.co/character/${data.id}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.name} />
      <meta property="og:description" content={`${language.shareText} ${data.name} ${data.species} ${data.origin.name}, ${language.knowCharacter}`} />
      <meta property="og:image" content={data.image} />
    </Head>
  )
})

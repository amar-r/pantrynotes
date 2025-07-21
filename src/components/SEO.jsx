import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  image = '/og-image.png',
  url = 'https://pantrynotes.com/',
  type = 'website'
}) => {
  const fullTitle = title ? `${title} - PantryNotes` : 'PantryNotes - My Personal Recipe Collection';
  const fullUrl = url.startsWith('http') ? url : `https://pantrynotes.com${url}`;
  const fullImage = image.startsWith('http') ? image : `https://pantrynotes.com${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO; 
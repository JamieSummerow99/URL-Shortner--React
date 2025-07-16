import { useEffect, useState } from 'react';

const Shortener = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState(() => {
    const storedUrls = localStorage.getItem('shortenUrl');
    return storedUrls ? JSON.parse(storedUrls) : [];
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Save shortenedUrls to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shortenUrl', JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!url) {
      setErrorMessage('Please enter a URL.');
      return;
    }

    try {
      setLoading(true);
      setErrorMessage('');

      const response = await fetch('/api/shortenUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortenedUrls([
          ...shortenedUrls,
          {
            originalUrl: url,
            shortUrl: data.shortUrl,
          },
        ]);
        setUrl('');
      } else {
        setErrorMessage(data.error || 'Failed to shorten URL');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="shorten">
      <div className="container">
        {/* Shorten Form */}
        <div className="shorten__content">
          <form onSubmit={handleSubmit} className="form">
            <div className="input-control">
              <input
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                className={`${errorMessage ? 'error-input' : ''}`}
                type="text"
                placeholder="Shorten a link here..."
              />
              {errorMessage && <p className="error-text">{errorMessage}</p>}
            </div>

            <button className="btn" type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Shorten It!'}
            </button>
          </form>
        </div>

        {/* Shortened URL Cards */}
        {shortenedUrls.length > 0 && (
          <div className="shorten__cards">
            {shortenedUrls.map((shortenedUrl, index) => (
              <div key={index} className="shorten__card">
                <div className="actual-link">
                  <span>{shortenedUrl.originalUrl}</span>
                </div>

                <hr className="line" />

                <div className="shorten__link">
                  <a href={shortenedUrl.shortUrl} target="_blank" rel="noreferrer">
                    {shortenedUrl.shortUrl}
                  </a>
                  <button
                    className={`btn ${copiedIndex === index ? 'copied' : ''}`}
                    onClick={() => handleCopy(shortenedUrl.shortUrl, index)}
                  >
                    {copiedIndex === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Shortener;
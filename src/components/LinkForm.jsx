import { useState, useRef, useEffect } from "react";

function LinkForm() {
  const [linkList, setLinkList] = useState(() => {
    const saved = sessionStorage.getItem("shortLinks");
    return saved ? JSON.parse(saved) : [];
  });
  const [copiedIndex, setCopiedIndex] = useState(null);
  const errorMessageRef = useRef(null);
  const urlInputRef = useRef(null);

  useEffect(() => {
    sessionStorage.setItem("shortLinks", JSON.stringify(linkList));
  }, [linkList]);

  async function shortenLink(longUrl) {
    const response = await fetch(
      `https://url-shortener-4ogt.onrender.com/shorten?url=${encodeURIComponent(longUrl)}`
    );
    const data = await response.json();
    return data.shortUrl;
  }

  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      _;
      return false;
    }
  }

  async function handelForm(formData) {
    const longUrl = formData.get("url");
    if (isValidUrl(longUrl)) {
      const shortLink = await shortenLink(longUrl);
      if (shortLink !== "Error: Please enter a valid URL to shorten") {
        urlInputRef.current.style.borderColor = "rgb(0, 0, 0, 00)";
        errorMessageRef.current.className = "absolute hidden -bottom-4 left-0 text-red-500";
        errorMessageRef.current.textContent = "";
        setLinkList((prev) => [...prev, { longUrl, shortLink }]);
      } else {
        showErrorMessage("Please add a valid Url");
      }
    } else if (longUrl === "") {
      showErrorMessage("Please add a link");
    } else {
      showErrorMessage("Please add a valid Url");
    }
  }

  function showErrorMessage(message) {
    errorMessageRef.current.className = "absolute block -bottom-5 left-0 text-red-500 text-sm";
    errorMessageRef.current.textContent = message;
    urlInputRef.current.style.borderColor = "rgb(255, 63, 63)";
  }

  function copyLink(shortUrl, index) {
    navigator.clipboard
      .writeText(shortUrl)
      .then(() => {
        {
          setCopiedIndex(index);
          setTimeout(() => setCopiedIndex(null), 5000);
        }
      })
      .catch(() => alert("Failed to copy."));
  }

  return (
    <>
      <form
        action={handelForm}
        id="link-form"
        className="text-red w-full flex flex-col sm:flex-row gap-5 p-10 rounded-lg bg-custom-dark-violet relative -top-24.5 sm:-top-16 mb-8">
        <div className="grow relative">
          <input
            ref={urlInputRef}
            name="url"
            id="url"
            type="text"
            placeholder="Shorten a link here..."
            className="w-full px-6 py-3 rounded-md font-medium bg-white outline-none border-1 border-transparent"
          />
          <span
            ref={errorMessageRef}
            className="absolute hidden -bottom-4 left-0 text-red-500"></span>
        </div>
        <button
          type="submit"
          className="grow sm:shrink sm:grow-0 px-6 py-3 rounded-md font-medium text-white bg-custom-cyan cursor-pointer duration-200 outline-none">
          Shorten It!
        </button>
      </form>
      <ul className="flex flex-col gap-4 relative -top-24.5 sm:-top-16">
        {linkList.map((links, index) => (
          <li
            className="flex flex-col sm:flex-row rounded-sm bg-white p-3 items-center gap-3"
            key={index}>
            <p
              className="text-custom-very-dark-violet max-w-full truncate overflow-hidden"
              title={links.longUrl}>
              {links.longUrl}
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:ml-auto gap-3">
              <span className="text-custom-cyan">{links.shortLink}</span>
              <button
                className={`grow w-full sm:grow-0 bg-custom-cyan text-white rounded-sm py-1.5 sm:w-20 text-sm ${
                  copiedIndex === index ? "bg-custom-dark-violet" : ""
                }`}
                onClick={() => copyLink(links.shortLink, index)}>
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default LinkForm;

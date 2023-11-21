import { useState, useEffect } from "react";
import { Storage } from "@aws-amplify/storage";

export const useFetch = (path) => {
  const [html, setHtml] = useState(null);
  const [json, setJson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      Storage.get(`${path}`, {
        level: "public",
        download: true,
        cacheControl: "no-cache",
      }).then((res) => {
        if (path.includes(".json")) {
          setJsonObject(res.Body);
        } else if (path.includes(".html")) {
          setHtmlObject(res.Body);
        }
      });
    } catch (e) {}
  }, [path]);

  const setJsonObject = async (json) => {
    try {
      const aux = await json.text();
      const aux_json = JSON.parse(aux);
      setJson(aux_json);
      setLoading(false);
    } catch (e) {}
  };

  const setHtmlObject = async (html) => {
    try {
      const aux = await html.text();
      const imgRegex = /src=['"](.*?)['"]/g;
      const images = aux.match(imgRegex);
      let newHtml = aux;

      if (images) {
        await Promise.all(
          images.map(async (img) => {
            let aux_img = img.split("src='/")[1];
            aux_img = aux_img.split("'")[0];
            try {
              const result = await Storage.get(aux_img);
              if (result) {
                newHtml = newHtml.replace(img, `src="${result}"`);
              } else {
                // Handle the case where the source doesn't exist
                return img; // Keep the original <img> tag
              }
            } catch (err) {}
          })
        );
      }

      setHtml(newHtml);
      setLoading(false);
    } catch (error) {}
  };

  return {
    html,
    json,
    loading,
  };
};

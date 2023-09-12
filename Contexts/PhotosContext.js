import React, { createContext, useContext, useEffect, useState, useMemo } from 'react'
import { CONTENTFUL_ACCESS_KEY, CONTENTFUL_SPACE_ID } from '../apiKeys';
import { createClient } from 'contentful'

const PhotosContext = createContext(null);

const usePhotos = () => useContext(PhotosContext);

function PhotosProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  const client = useMemo(() => {
    return createClient({
      space: CONTENTFUL_SPACE_ID,
      accessToken: CONTENTFUL_ACCESS_KEY,
    });
  }, []);

  useEffect(() => {
    function getPhotos() {
      client.getEntries({ content_type: 'showPhotos' }).then((res) => {
        setPhotos(
          res.items.map((p) => ({
            uri: `https:${p.fields?.imageUrl?.fields?.file?.url}`,
          }))
        );
      });
    }

    if (client) {
      getPhotos();
    }
  }, [client]);

  return (
    <PhotosContext.Provider
      value={{
        photos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  );
}

export { PhotosProvider, usePhotos }

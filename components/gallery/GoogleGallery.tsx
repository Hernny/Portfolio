import { useEffect, useState, useCallback, useMemo } from 'react';
import { listDriveImages, DriveFile } from '../../lib/googleDrive';

function buildCandidates(file: DriveFile) {
  const directView = `https://drive.google.com/uc?export=view&id=${file.id}`;
  const thumbApi = `https://drive.google.com/thumbnail?id=${file.id}&sz=w1000`;
  const list: string[] = [];
  if (file.thumbnailLink) list.push(file.thumbnailLink);
  list.push(thumbApi);
  list.push(directView);
  if (file.webContentLink) list.push(file.webContentLink);
  return list;
}

function DriveImage({ file, alt }: { file: DriveFile; alt: string }) {
  const candidates = useMemo(() => buildCandidates(file), [file]);
  const [idx, setIdx] = useState(0);
  const src = candidates[idx] || '';
  const onError = useCallback(() => {
    setIdx((i) => (i + 1 < candidates.length ? i + 1 : i));
  }, [candidates.length]);
  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      decoding="async"
      loading="lazy"
      onError={onError}
      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
    />
  );
}

export function Gallery() {
  const [images, setImages] = useState<DriveFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const localFallback = useMemo(
    () => [
      { id: 'local-1', name: 'placeholder-1', mimeType: 'image/svg+xml', webViewLink: '/gallery/placeholder-1.svg', webContentLink: '/gallery/placeholder-1.svg', thumbnailLink: '/gallery/placeholder-1.svg' },
      { id: 'local-2', name: 'placeholder-2', mimeType: 'image/svg+xml', webViewLink: '/gallery/placeholder-2.svg', webContentLink: '/gallery/placeholder-2.svg', thumbnailLink: '/gallery/placeholder-2.svg' },
      { id: 'local-3', name: 'placeholder-3', mimeType: 'image/svg+xml', webViewLink: '/gallery/placeholder-3.svg', webContentLink: '/gallery/placeholder-3.svg', thumbnailLink: '/gallery/placeholder-3.svg' },
    ] as DriveFile[],
    []
  );

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    const folderId = process.env.NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID;
    if (!apiKey || !folderId) {
      // No env configured: show local placeholders instead of an error-only state
      setImages(localFallback);
      setError('Mostrando imágenes locales (configura las variables de Google para habilitar la galería en vivo).');
      setLoading(false);
      return;
    }
    listDriveImages({ apiKey, folderId })
      .then((files) => {
        if (!files || files.length === 0) {
          setImages(localFallback);
          setError('No se encontraron imágenes públicas en Drive; mostrando ejemplos locales.');
        } else {
          setImages(files);
        }
      })
      .catch((e) => {
        console.error('Drive fetch failed', e);
        setImages(localFallback);
        setError('No fue posible cargar la galería desde Google Drive; mostrando ejemplos locales.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="opacity-70">Cargando fotos…</p>;
  // We still render the gallery below even if error is set (it may be using local fallback)

  return (
    <section id="gallery" className="section container">
      <h2 className="text-3xl font-bold mb-6">Galería</h2>
      {error && (
        <p className="mb-4 text-amber-400 text-sm">{error}</p>
      )}
      {images.length === 0 ? (
        <p className="opacity-80">No hay imágenes disponibles.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <a key={img.id} href={img.webViewLink} target="_blank" rel="noreferrer" title={img.name}>
              <div className="aspect-[4/3] overflow-hidden rounded shadow group bg-black/20">
                <DriveImage file={img} alt={img.name} />
              </div>
              <p className="mt-2 text-sm truncate opacity-80">{img.name}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

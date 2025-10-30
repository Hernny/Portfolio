import { useEffect, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../motion/Reveal';
import { listDriveImages, DriveFile } from '../../lib/googleDrive';

function buildCandidates(file: DriveFile) {
  const directView = `https://drive.google.com/uc?export=view&id=${file.id}`;
  const thumbApi = (w: number) => `https://drive.google.com/thumbnail?id=${file.id}&sz=w${w}`;
  const list: string[] = [];
  if (file.thumbnailLink) list.push(file.thumbnailLink);
  list.push(thumbApi(1000));
  list.push(directView);
  if (file.webContentLink) list.push(file.webContentLink);
  return list;
}

function buildSrcSet(file: DriveFile) {
  const widths = [320, 480, 640, 800, 1000, 1280];
  return widths.map((w) => `https://drive.google.com/thumbnail?id=${file.id}&sz=w${w} ${w}w`).join(', ');
}

function DriveImage({ file, alt }: { file: DriveFile; alt: string }) {
  const candidates = useMemo(() => buildCandidates(file), [file]);
  const [fallbackIdx, setFallbackIdx] = useState(-1); // -1 means use primary strategy
  const onError = useCallback(() => {
    setFallbackIdx((i) => {
      const next = i + 1;
      return next < candidates.length ? next : i;
    });
  }, [candidates.length]);

  // Determine if this is a local placeholder image instead of a Drive file
  const isLocal = (file.id?.startsWith('local-')) || (file.thumbnailLink?.includes('/gallery/placeholder-'));

  const defaultWidth = 800;
  const sizes = '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw';

  // Primary src and responsive set depend on local vs drive
  const primarySrc = isLocal
    ? (file.thumbnailLink || file.webViewLink || file.webContentLink || '')
    : `https://drive.google.com/thumbnail?id=${file.id}&sz=w${defaultWidth}`;
  const srcSet = isLocal ? undefined : buildSrcSet(file);

  const finalSrc = fallbackIdx >= 0 ? candidates[fallbackIdx] : primarySrc;

  return (
    <img
      src={finalSrc}
      {...(fallbackIdx < 0 && srcSet ? { srcSet, sizes } : {})}
      width={defaultWidth}
      height={Math.round(defaultWidth * 0.75)}
      alt={alt}
      referrerPolicy="no-referrer"
      decoding="async"
      loading="lazy"
  fetchPriority="low"
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
    () => {
      const base = (process.env.NEXT_PUBLIC_GH_PAGES_BASE ? `/${process.env.NEXT_PUBLIC_GH_PAGES_BASE}` : '') as string;
      const p = (n: number) => `${base}/gallery/placeholder-${n}.svg`;
      return [
        { id: 'local-1', name: 'placeholder-1', mimeType: 'image/svg+xml', webViewLink: p(1), webContentLink: p(1), thumbnailLink: p(1) },
        { id: 'local-2', name: 'placeholder-2', mimeType: 'image/svg+xml', webViewLink: p(2), webContentLink: p(2), thumbnailLink: p(2) },
        { id: 'local-3', name: 'placeholder-3', mimeType: 'image/svg+xml', webViewLink: p(3), webContentLink: p(3), thumbnailLink: p(3) },
      ] as DriveFile[];
    },
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

  // Always render the section so observers and hash navigation work even while loading
  return (
    <section id="gallery" className="section container scroll-mt-24 md:scroll-mt-28">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        Galería
      </motion.h2>
      {loading ? (
        <p className="opacity-70">Cargando fotos…</p>
      ) : (
        <>
          {error && <p className="mb-4 text-amber-400 text-sm">{error}</p>}
          {images.length === 0 ? (
            <p className="opacity-80">No hay imágenes disponibles.</p>
          ) : (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {images.map((img) => (
                <motion.a key={img.id} href={img.webViewLink} target="_blank" rel="noreferrer" title={img.name} variants={fadeUp}>
                  <div className="aspect-[4/3] overflow-hidden rounded group border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                    <DriveImage file={img} alt={img.name} />
                  </div>
                  <p className="mt-2 md:mt-3 text-sm truncate opacity-80">{img.name}</p>
                </motion.a>
              ))}
            </motion.div>
          )}
        </>
      )}
    </section>
  );
}

// Backward-compatible named export for tests/imports expecting GoogleGallery
export const GoogleGallery = Gallery;

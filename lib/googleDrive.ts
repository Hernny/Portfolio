// Lightweight Google Drive API fetcher used for demo gallery
// Uses API key and a public folder ID to list files (images)
// NOTE: Google Photos Library API cannot be used from client-only without OAuth; Drive list is used as a pragmatic demo

export type DriveFile = {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string;
  webViewLink?: string;
  webContentLink?: string;
};

export async function listDriveImages({ apiKey, folderId, pageSize = 12 }: { apiKey: string; folderId: string; pageSize?: number; }): Promise<DriveFile[]> {
  const q = encodeURIComponent(`'${folderId}' in parents and mimeType contains 'image/' and trashed=false`);
  const fields = encodeURIComponent('files(id,name,mimeType,thumbnailLink,webViewLink,webContentLink),nextPageToken');
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&fields=${fields}&pageSize=${pageSize}&includeItemsFromAllDrives=true&supportsAllDrives=true&key=${apiKey}`;

  const res = await fetch(url);
  if (!res.ok) {
    let detail = '';
    try {
      const txt = await res.text();
      detail = txt?.slice(0, 500) || '';
    } catch {}
    throw new Error(`Google Drive API error ${res.status}: ${detail}`);
  }
  const data = await res.json();
  return (data.files || []) as DriveFile[];
}

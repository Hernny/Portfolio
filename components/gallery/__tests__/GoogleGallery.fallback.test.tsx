import { render, screen } from '@testing-library/react';
import React from 'react';
import { GoogleGallery } from '../GoogleGallery';

// Simulate absence of env to trigger fallback
vi.stubEnv('NEXT_PUBLIC_GOOGLE_API_KEY', '');
vi.stubEnv('NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID', '');

describe('GoogleGallery fallback', () => {
  it('renders local placeholders when Drive env is missing', async () => {
    render(<GoogleGallery />);
    // Wait for loading to pass
    const heading = await screen.findByRole('heading', { name: /galería/i });
    expect(heading).toBeInTheDocument();

    // It should show a warning small text about local images
    const warning = await screen.findByText(/Mostrando imágenes locales/i);
    expect(warning).toBeInTheDocument();

    // And at least one img with src containing /gallery/placeholder-
  const imgs = screen.getAllByRole('img');
  const anyPlaceholder = imgs.some((img: HTMLElement) => (img as HTMLImageElement).src.includes('/gallery/placeholder-'));
    expect(anyPlaceholder).toBe(true);
  });
});

import { renderHook, act } from '@testing-library/react';
import Cookies from 'js-cookie';
import { useCookieConsent } from '../useCookieConsent';

vi.mock('js-cookie', () => ({
  default: {
    get: vi.fn(),
    set: vi.fn(),
    remove: vi.fn(),
  },
}));

describe('useCookieConsent', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (Cookies.get as any).mockReturnValue(undefined);
  });

  it('starts as unset when no cookie', () => {
    const { result } = renderHook(() => useCookieConsent());
    expect(result.current.consent).toBe('unset');
  });

  it('accept sets granted and persists', () => {
    const { result } = renderHook(() => useCookieConsent());
    act(() => result.current.accept());
    expect(result.current.consent).toBe('granted');
    expect(Cookies.set).toHaveBeenCalled();
  });

  it('reject sets denied and persists', () => {
    const { result } = renderHook(() => useCookieConsent());
    act(() => result.current.reject());
    expect(result.current.consent).toBe('denied');
    expect(Cookies.set).toHaveBeenCalled();
  });
});

import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core';

export default function useDevice() {
  const { width } = useWindowSize();

  /**
   * Computed que indica se o dispositivo é mobile (< 768px)
   */
  const isMobile = computed(() => width.value < 768);

  /**
   * Computed que indica se o dispositivo é tablet (>= 768px e < 1024px)
   */
  const isTablet = computed(() => width.value >= 768 && width.value < 1024);

  /**
   * Computed que indica se o dispositivo é desktop (>= 1024px)
   */
  const isDesktop = computed(() => width.value >= 1024);

  /**
   * Computed que retorna o tipo de dispositivo como string
   */
  const deviceType = computed(() => {
    if (isMobile.value) return 'mobile';
    if (isTablet.value) return 'tablet';
    return 'desktop';
  });

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    deviceType
  };
}

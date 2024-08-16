// utils/colorUtils.ts

/**
 * Darkens a given hex color by a percentage.
 * @param color - The hex color to darken (e.g., '#ff0000').
 * @param percent - The percentage to darken the color (e.g., 0.2 for 20%).
 * @returns The darkened hex color.
 */
export function darkenColor(color: string, percent: number): string {
  const f = parseInt(color.slice(1), 16),
    t = percent < 0 ? 0 : 255,
    p = percent < 0 ? percent * -1 : percent,
    R = f >> 16,
    G = (f >> 8) & 0x00ff,
    B = f & 0x0000ff;

  return (
    '#' +
    (
      0x1000000 +
      (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)
    )
      .toString(16)
      .slice(1)
  );
}

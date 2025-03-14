export function gramsToOz(g) {
    return g * 0.035274;
  }
  
  export function getPortionLabel(variant, isMetric) {
    if (isMetric) {
      return `${variant.label} (${variant.grams}g) — ${variant.calories} cal`;
    } else {
      const oz = gramsToOz(variant.grams).toFixed(2);
      return `${variant.label} (~${oz} oz) — ${variant.calories} cal`;
    }
  }
  
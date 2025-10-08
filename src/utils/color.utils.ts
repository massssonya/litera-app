export function getColorShade(dark:string, light:string, NUM_COLS = 10):string[] {
    const parseHex = (hex:string) => {
      hex = hex.replace('#', '');
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      };
    };
  
    const toHex = (r:number, g:number, b:number) =>
      `#${[r, g, b]
        .map((x) => Math.max(0, Math.min(255, Math.round(x))).toString(16).padStart(2, '0'))
        .join('')}`;
  
    const start = parseHex(dark);
    const end = parseHex(light);
  
    const arrColor = [];
  
    for (let i = 0; i < NUM_COLS; i++) {
      const t = i / (NUM_COLS - 1);
      const r = start.r + (end.r - start.r) * t;
      const g = start.g + (end.g - start.g) * t;
      const b = start.b + (end.b - start.b) * t;
  
      arrColor.push(toHex(r, g, b));
    }
  
    return arrColor;
  }




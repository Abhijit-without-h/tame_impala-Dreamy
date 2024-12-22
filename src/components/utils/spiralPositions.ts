export const generateSpiralPositions = (count: number, arms: number, radius: number) => {
  const positions: Array<[number, number, number]> = [];
  const angleStep = (2 * Math.PI) / count;
  const radiusStep = radius / count;

  for (let arm = 0; arm < arms; arm++) {
    const armOffset = (2 * Math.PI * arm) / arms;
    
    for (let i = 0; i < count; i++) {
      const angle = i * angleStep + armOffset;
      const r = i * radiusStep;
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = (Math.random() - 0.5) * (r * 0.2);
      positions.push([x, y, z]);
    }
  }

  return positions;
};
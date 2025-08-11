// CurvedBar.jsx
import React from "react";

/**
 * Ligne courbe du coin haut-gauche vers bas-droit.
 * Props:
 * - height        : hauteur du composant (px) — défaut 20
 * - strokeWidth   : épaisseur du trait (px) — défaut 1
 * - color         : couleur du trait — défaut "#fff"
 * - flipH         : miroir horizontal (left<->right) — défaut false
 * - flipV         : miroir vertical (top<->bottom) — défaut false
 * - className     : classes additionnelles sur le wrapper
 * - style         : styles inline additionnels sur le wrapper
 * - controlX, controlY : point de contrôle de la courbe (par défaut 600, 40)
 * - endY          : ordonnée d’arrivée (par défaut 200)
 */
export default function CurvedBar({
  height = 20,
  strokeWidth = 1,
  color = "#fff",
  flipH = false,
  flipV = false,
  className = "",
  style = {},
  controlX = 600,
  controlY = 40,
  endY = 200,
}) {
  // ViewBox large pour une courbe douce
  const viewW = 1000;
  const viewH = 200;

  // Courbe : départ (0,0) -> arrivée (1000, endY) avec point de contrôle (controlX, controlY)
  const d = `M0,0 Q${controlX},${controlY} ${viewW},${endY}`;

  // Miroirs via scaleX/scaleY sans impacter l’épaisseur (vectorEffect)
  const scaleX = flipH ? -1 : 1;
  const scaleY = flipV ? -1 : 1;

  return (
    <div
      className={className}
      style={{ position: "relative", height, ...style }}
      aria-hidden // décoratif
    >
      <svg
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transform: `scale(${scaleX}, ${scaleY})`,
          transformOrigin: "center",
        }}
      >
        <path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

"use client";

import { useEffect } from "react";

export function PreloadImages() {
  useEffect(() => {
    const images = [
      "https://ik.imagekit.io/fjrod/profile-photo-about.png",
      "https://ik.imagekit.io/fjrod/profile-photo.png",
      // Puedes añadir más imágenes precargar aquí
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
}
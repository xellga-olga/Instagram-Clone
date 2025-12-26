// Эта функция использует HTML canvas для обрезки изображения
export const getCroppedImg = (imageSrc, crop) => {
  return new Promise((resolve, reject) => {
    if (!crop) return reject("Нет данных для обрезки");

    const image = new Image();
    image.src = imageSrc;
    image.crossOrigin = "anonymous"; // чтобы избежать проблем с CORS

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = crop.width;
      canvas.height = crop.height;

      const ctx = canvas.getContext("2d");

      // рисуем на canvas только выбранную область изображения
      ctx.drawImage(
        image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        crop.width,
        crop.height
      );

      // преобразуем canvas в изображение
      resolve(canvas.toDataURL("image/jpeg"));
    };

    image.onerror = () => reject("Ошибка загрузки изображения");
  });
};
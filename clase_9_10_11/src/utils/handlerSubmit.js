import { reg_exImg } from "./regExp";

export const handlerSubmit = (form) => {
  return new Promise((res, rej) => {
    const keys = Object.keys(form);

    if (keys.length < 5) {
      rej("Completá correctamente todos los datos perri");
    }

    keys.forEach((key) => {
      if (!form[key].trim()) {
        rej("Hay datos incompletos....");
      }

      if (key === "listeners") {
        form[key] <= 0 && rej("Nº de oyentes no es válido");
      }

      if (key === "img") {
        try {
          new URL(form[key]);
        } catch (err) {
          rej("No es una URL");
        }

        if (!form[key].match(reg_exImg)) {
          rej("No es una imagen pa");
        }
      }
    });
    res(form);
  });
};

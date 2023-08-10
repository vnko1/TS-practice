import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";

import { IService } from "types/services";
import { controllers } from "app/domain";
import { middlewares } from "app/middlewares";

export class Tcp implements IService {
  private static instance: Tcp;
  private routePrefix = "/api";

  public server = express();

  constructor() {
    // Якщо екземпляр ще не створено, зберігаємо посилання на поточний екземпляр
    if (!Tcp.instance) {
      Tcp.instance = this;
    }

    // Повертаємо посилання на єдиний екземпляр класу
    return Tcp.instance;
  }

  async init() {
    const { server, routePrefix } = this;

    // Парсимо тіло запиту, потрібно для middlewares
    server.use(express.json());

    // Використовуємо бібліотеку routing-controllers для налаштування маршрутів
    useExpressServer(server, {
      routePrefix,
      controllers,
      middlewares,
      cors: true,
      defaultErrorHandler: true,
      validation: false, // Відключаємо вбудовану валідацію, щоб ми могли перевірити DTO самі всередині контролера
    });

    // Повертаємо Promise, який успішно виконується, коли сервер починає слухати порт
    return new Promise<boolean>((resolve) => {
      server.listen(4000, () => {
        console.log("Tcp service started on port 4000");

        return resolve(true);
      });
    });
  }
}

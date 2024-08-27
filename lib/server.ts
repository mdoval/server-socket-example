import { Server } from "socket.io";

export default function ActivarServer() {
    const io = new Server(8080,{
        cors: {
            origin: 'http://localhost:3001',
            methods: ['GET', 'POST'],  // Métodos permitidos
            allowedHeaders: ['my-custom-header'],  // Headers permitidos, si tienes alguno específico
            credentials: true  // Si necesitas enviar cookies o credenciales
          }
    });

  io.on("connection", (socket) => {
    console.log(`connect ${socket.id}`);

    socket.on("ping", (cb) => {
      console.log("ping");
      cb();
    });

    socket.on("test", (arg, callback) => {
        console.log(arg); 
        callback("Devolucion del servidor");
      });

    socket.on("disconnect", () => {
      console.log(`disconnect ${socket.id}`);
    });    
  });
}



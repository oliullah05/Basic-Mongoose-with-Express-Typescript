import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import {Server} from "http"





let server : Server ;





let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

<<<<<<< HEAD
    server = app.listen(config.port, () => {
=======
    server =  app.listen(config.port, () => {
>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

<<<<<<< HEAD
process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
=======


process.on("unhandledRejection",()=>{
  console.log(`unhandle rejection is deteted`);
  if(server){
    server.close(()=>{
      process.exit(1)
    })
  }
  process.exit(1)

})


process.on("uncaughtException",()=>{
  console.log(`unhandle exception is deteted`);
  process.exit(1)

})


>>>>>>> ff1d0b838e0818095b1fc5dc4390ad6c77deea18

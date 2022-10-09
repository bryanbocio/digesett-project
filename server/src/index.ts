import app from "./app";
import dotenv from "dotenv";

//database
import {startConnection} from "./database";

dotenv.config();

async function main(){
    await startConnection();
    app.listen(app.get('port'));
    console.log('server on port '.concat(app.get('port')));
}

main();



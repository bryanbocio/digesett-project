import app from "./app";
import "./database";
import dotenv from "dotenv";

dotenv.config();

function main(){
    app.listen(app.get('port'));
    console.log('server on port '.concat(app.get('port')));
}

main();



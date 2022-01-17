//Load the .env variables
import dotenv from 'dotenv';
dotenv.config();

//Import the server
import app from './app';


function main(){
    app.listen(process.env.PORT);
    console.log('Server on port '+ process.env.PORT);
}
main();
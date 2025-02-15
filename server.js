import app from "./src/app.js";
import connect from "./src/config/dbConnect.js";


await connect();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
import * as uuid from "uuid";
import * as path from "path";
import fs from "fs";

class FileService {
  saveFile(fileData) {
    try {
      const fileUuid = uuid.v4();
      const fileName = fileUuid + ".jpg";
      const filePath = path.resolve(
        "C:/Users/vital/OneDrive/Desktop/RESTfull-API/static", //here you need to create in main folder(RESTfull-API) a new folder named 'static'.
        fileName
      );

      const writeStream = fs.createWriteStream(filePath);

      writeStream.write(fileData);

      console.log("fileName:", fileName);

      writeStream.on("finish", () => {
        console.log("File saved successfully");
      });

      writeStream.end();

      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FileService();

const Minio = require("minio");

const fs = require("fs");
const minioClient = new Minio.Client({
  endPoint: "localhost",
  port: 9000,
  useSSL: false,
  accessKey: "FLyLLTsxcbCOiEOTqZ7B",
  secretKey: "m6kqx0shKxQrHEl3TG5KwXE38F6RXUsatXY3ByM6",
});

function put() {
  minioClient.fPutObject(
    "vue",
    "vue-interview.png",
    "./vue-interview.png",
    function (err, etag) {
      if (err) return console.log(err);
      console.log("上传成功");
    }
  );
}

put();

function get() {
  minioClient.getObject("aaa", "vue-interview.png", (err, stream) => {
    if (err) return console.log(err);
    stream.pipe(fs.createWriteStream("./vue-interview2.png"));
  });
}

get();

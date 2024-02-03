const OSS = require("ali-oss");
const client = new OSS({
  region: "oss-cn-guangzhou",
  bucket: "jameszyh-2",
  accessKeyId: "LTAI5t5p4MPUR58bKRqGUHxj",
  accessKeySecret: "k4gRLDtt59Ip5RJNfLQ6Ik3XcQhm4n",
});

async function put() {
  try {
    const result = await client.put("pikaqiu.png", "./pikaqiu.png");
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

async function get() {
  await client.get("pikaqiu.png", "pikaqiu2.png");
}

// put();
get();

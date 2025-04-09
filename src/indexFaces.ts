import {
  RekognitionClient,
  IndexFacesCommand,
} from "@aws-sdk/client-rekognition";
import * as fs from "fs";
import path from "path";

const client = new RekognitionClient({ region: "us-east-1" });
const collectionId = "oaix-face-collection";

async function indexFace(imagePath: string, externalId: string) {
  const imageBytes = fs.readFileSync(imagePath);

  const command = new IndexFacesCommand({
    CollectionId: collectionId,
    Image: { Bytes: imageBytes },
    ExternalImageId: externalId,
    DetectionAttributes: ["DEFAULT"],
  });

  const result = await client.send(command);
  console.log("Indexed face:", result.FaceRecords);
}

// Example usage
indexFace(path.join(__dirname, "..", "faces", "face.jpg"), "emi");

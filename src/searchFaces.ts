import {
  RekognitionClient,
  SearchFacesByImageCommand,
} from "@aws-sdk/client-rekognition";
import * as fs from "fs";
import path from "path";

const client = new RekognitionClient({ region: "us-east-1" });
const collectionId = "oaix-face-collection";

async function searchFace(imagePath: string) {
  const imageBytes = fs.readFileSync(imagePath);

  const command = new SearchFacesByImageCommand({
    CollectionId: collectionId,
    Image: { Bytes: imageBytes },
    MaxFaces: 1,
    FaceMatchThreshold: 90,
  });

  const result = await client.send(command);
  console.log("Match result:", result.FaceMatches);
}

// Example usage
searchFace(path.join(__dirname, "..", "faces", "face.jpg"));

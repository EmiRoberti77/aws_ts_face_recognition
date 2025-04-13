# 🧠 AWS Rekognition Face Matching Example (TypeScript)

This project demonstrates how to use **Amazon Rekognition** to index and search faces in a collection using the AWS SDK for JavaScript (v3) in a TypeScript project.

---

## 📸 What is Amazon Rekognition?

Amazon Rekognition is a cloud-based computer vision service provided by AWS. It can detect objects, scenes, and **faces** in images and videos. For facial analysis, Rekognition supports:

- Detecting faces in images
- Comparing faces for similarity
- Indexing faces into a **collection** (a searchable database of facial features)
- Searching a collection for matching faces

---

## 📁 Project Structure

```
faces/
├── face.jpg          # Sample image file with a visible face
src/
├── indexFace.ts      # Script to index a face into the Rekognition collection
├── searchFace.ts     # Script to search for a face in the Rekognition collection
```

---

## ✅ Prerequisites

- AWS account with Rekognition permissions
- An existing Rekognition collection (e.g. `oaix-face-collection`)
- Node.js + TypeScript project setup
- `@aws-sdk/client-rekognition` installed

```bash
npm install @aws-sdk/client-rekognition
```

---

## 👤 1. Indexing a Face (`indexFace.ts`)

This script uploads a face from an image into a Rekognition collection.

```ts
import {
  RekognitionClient,
  IndexFacesCommand,
} from "@aws-sdk/client-rekognition";
```

### Function: `indexFace(imagePath: string, externalId: string)`

- Reads a face image from the local file system
- Sends it to AWS Rekognition using the `IndexFacesCommand`
- Stores the face in the specified collection with an optional label (`ExternalImageId`)

> **Use case**: Think of this as “registering” someone’s face in the system.

---

## 🔍 2. Searching for a Face (`searchFace.ts`)

This script compares a new face image against those previously indexed in the Rekognition collection.

```ts
import {
  RekognitionClient,
  SearchFacesByImageCommand,
} from "@aws-sdk/client-rekognition";
```

### Function: `searchFace(imagePath: string)`

- Loads a face image and sends it to Rekognition using `SearchFacesByImageCommand`
- Compares it against faces in the collection
- Returns the most similar match (if found), based on a confidence threshold

> **Use case**: Think of this as “face login” or identifying someone from an image.

---

## 🧠 How Face Matching Works

1. **Indexing**

   - Rekognition detects the face and extracts feature vectors.
   - The face is stored in a **collection** for future searches.
   - You can label faces using `ExternalImageId` (e.g., a username or ID).

2. **Searching**
   - A face image is compared to all indexed faces in the collection.
   - Rekognition returns matches with a **confidence score**.
   - You can control matching strictness using `FaceMatchThreshold`.

---

## 🧪 Example

### Index a face:

```bash
ts-node src/indexFace.ts
```

### Search for a face:

```bash
ts-node src/searchFace.ts
```

---

## 🔐 Security Tip

Never store or log sensitive face data without consent. Ensure your Rekognition collection is secured and governed by your privacy policy.

---

## 📚 Docs

- [Amazon Rekognition Developer Guide](https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html)
- [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-rekognition/index.html)

## Author

- Emi Roberti

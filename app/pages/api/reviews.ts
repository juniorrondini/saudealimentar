import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const reviewsCollection = collection(db, "reviews");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const snapshot = await getDocs(reviewsCollection);
    const reviews = snapshot.docs.map(doc => doc.data());
    return res.status(200).json(reviews);
  }

  if (req.method === "POST") {
    const { rating, comment } = req.body;

    if (!rating || !comment) {
      return res.status(400).json({ error: "Avaliação inválida" });
    }

    if (comment.length > 200) {
      return res.status(400).json({ error: "Comentário muito longo (máx. 200 caracteres)." });
    }

    await addDoc(reviewsCollection, { rating, comment, createdAt: new Date() });
    return res.status(201).json({ message: "Avaliação salva com sucesso!" });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

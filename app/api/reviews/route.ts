
import { NextResponse } from "next/server";
import { db } from "../../lib/firebaseConfig";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";

// Nome da coleção no Firestore
const reviewsCollection = collection(db, "reviews");

// 🔹 Método GET para buscar as avaliações (ordenadas pela mais recente)
export async function GET() {
  const snapshot = await getDocs(query(reviewsCollection, orderBy("createdAt", "desc")));
  const reviews = snapshot.docs.map(doc => doc.data());
  return NextResponse.json(reviews, { status: 200 });
}

// 🔹 Método POST para adicionar uma nova avaliação
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, rating, comment } = body;

    if (!name || !rating || !comment) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios!" }, { status: 400 });
    }

    await addDoc(reviewsCollection, { name, rating, comment, createdAt: new Date() });
    return NextResponse.json({ message: "Avaliação salva com sucesso!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao salvar a avaliação" }, { status: 500 });
  }
}

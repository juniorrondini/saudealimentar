"use client";

import { useState, useEffect } from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
}

export default function ReviewForm() {
  const [name, setName] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);

  // Buscar avaliações do backend ao carregar a página
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data: Review[]) => {
        const lastNineReviews = data.slice(0, 9); // Últimas 9 avaliações
        setReviews(lastNineReviews);

        if (data.length > 0) {
          const avg = data.reduce((sum, review) => sum + review.rating, 0) / data.length;
          setAverageRating(parseFloat(avg.toFixed(1))); // Média de avaliações
        }
      });
  }, []);

  // Enviar avaliação para o backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || rating === 0 || !comment.trim()) {
      alert("Por favor, preencha todos os campos e selecione uma nota.");
      return;
    }

    if (comment.length > 200) {
      alert("Seu comentário deve ter no máximo 200 caracteres.");
      return;
    }

    const newReview: Review = { name, rating, comment };

    const response = await fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
      setReviews([newReview, ...reviews.slice(0, 8)]); // Mantém apenas as últimas 9 avaliações
      setRating(0);
      setComment("");
      setName("");
    }
  };

  return (
    <section className="w-full bg-green-300/10 backdrop-blur-lg shadow-lg p-8 border border-green-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* Formulário de Avaliação - Agora retangular e ocupando toda a largura */}
        <div className="w-full md:w-1/3 bg-green-800/80 shadow-lg rounded-lg p-6 border border-green-600">
          <h2 className="text-2xl font-bold text-center text-white mb-4">Deixe sua Avaliação ⭐</h2>

          {/* Exibir média de avaliação */}
          <div className="flex flex-col items-center mb-6">
            <p className="text-lg font-semibold text-white">Média de Avaliação:</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`text-3xl ${averageRating >= star ? "text-yellow-500" : "text-gray-300"}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-white text-lg font-semibold">{averageRating}/5</p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            {/* Nome do Usuário */}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu Nome"
              className="w-full p-2 border border-green-400 bg-green-700/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white/80"
            />

            {/* Estrelas para Avaliação */}
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-3xl transition ${
                    rating >= star ? "text-yellow-500" : "text-gray-300 hover:text-yellow-400"
                  }`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Comentário */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value.slice(0, 200))}
              placeholder="Escreva seu comentário... (máx. 200 caracteres)"
              className="w-full p-2 border border-green-400 bg-green-700/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-white/80"
              rows={3}
            ></textarea>

            {/* Contador de Caracteres */}
            <p className="text-sm text-white/70">{comment.length}/200 caracteres</p>

            {/* Botão de Enviar */}
            <button type="submit" className="bg-yellow-500 text-green-900 font-bold px-6 py-2 rounded-md hover:bg-yellow-600 transition">
              Enviar Avaliação
            </button>
          </form>
        </div>

        {/* Exibir as últimas 9 Avaliações - Agora bem alinhadas e harmoniosas */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-green-700/80 backdrop-blur-md shadow-md border border-green-900 rounded-md flex flex-col items-center text-center">
              <p className="font-semibold text-white">{review.name}</p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`text-yellow-500 text-xl ${review.rating >= star ? "" : "opacity-30"}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-white mt-2 text-sm italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

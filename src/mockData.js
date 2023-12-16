// categories
export const CATEGORIES = [
	{ slug: "blokzincir", name: "Blokzincir" },
	{ slug: "ön-yüz", name: "Frontend" },
	{ slug: "linux", name: "Linux" },
	{ slug: "yapay-zeka", name: "Yapay Zeka" },
  ];
  
  // courses
  export const COURSES = [
	{
	  id: "6a3753e8-5f4e-4f4d-a05e-44b84b8f7aed",
	  name: "Ethereum ve Solidity",
	  description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
	  price: "0.05",
	  start: "",
	  imageUrl: "https://osmannyildiz.tk/cublearn/akinci.webp",
	  instructor: {
		name: "Baturalp Güvenç",
	  },
	  category: CATEGORIES.find((category) => category.slug === "blokzincir"),
	},
	{
		id: "6a3753e8-5f4e-4f4d-a05e-44b84b8f7aed",
		name: "Audit",
		description:
		  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "0.05",
		start: "",
		imageUrl: "https://osmannyildiz.tk/cublearn/akinci.webp",
		instructor: {
		  name: "Mehmet Hayırlı",
		},
		category: CATEGORIES.find((category) => category.slug === "blokzincir"),
	  },
	{
	  id: "c7253736-5756-4a64-a072-917c66afa877",
	  name: "Next.js ile Önyüz Uygulamaları Geliştirme",
	  description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
	  price: "0.05",
	  start: "",
	  imageUrl: "https://osmannyildiz.tk/cublearn/elmacik.webp",
	  instructor: {
		name: "Furkan Ayvaz",
	  },
	  category: CATEGORIES.find((category) => category.slug === "ön-yüz"),
	},
	{
	  id: "59a8f94b-7358-4ffe-bced-a54cccc93e64",
	  name: "Pardus'a Giriş",
	  description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
	  price: "0.05",
	  start: "",
	  imageUrl: "https://osmannyildiz.tk/cublearn/masalik.webp",
	  instructor: {
		name: "Berk Çiçek",
	  },
	  category: CATEGORIES.find((category) => category.slug === "linux"),
	},
	{
	  id: "6a375fae8-5f4e-4244d-a05e-44b84b8adaf7aed",
	  name: "Yapay Zekaya Giriş",
	  description: "Hosta La Vista!",
	  price: "0.05",
	  imageUrl: "https://osmannyildiz.tk/cublearn/akinci.webp",
	  instructor: {
		name: "Muhammed Akıncı",
	  },
	  category: CATEGORIES.find((category) => category.slug === "yapay-zeka"),
	},
  ];
  
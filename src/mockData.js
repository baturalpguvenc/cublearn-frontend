export const CATEGORIES = [
	{ id: "1", slug: "blokzincir", name: "Blokzincir" },
	{ id: "2", slug: "onyuz", name: "Önyüz Geliştirme" },
	{ id: "3", slug: "linux", name: "Linux" },
	{ id: "4", slug: "yapay-zeka", name: "Yapay Zeka" },
];

export const COURSES = [
	{
		id: "1",
		slug: "ethereum-ve-solidity",
		name: "Ethereum ve Solidity",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "300",
		imageUrl: "/course-images/ethereum-and-solidity.webp",
		instructor: {
			name: "Baturalp Güvenç",
		},
		category: CATEGORIES.find((c) => c.slug === "blokzincir"),
	},
	{
		id: "2",
		slug: "akilli-sozlesme-guvenligi",
		name: "Akıllı Sözleşme Güvenliği",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "500",
		imageUrl: "/course-images/smart-contract-security.jpg",
		instructor: {
			name: "Mehmet Hayırlı",
		},
		category: CATEGORIES.find((c) => c.slug === "blokzincir"),
	},
	{
		id: "3",
		slug: "next-js-ile-onyuz-uygulamalari-gelistirme",
		name: "Next.js ile Önyüz Uygulamaları Geliştirme",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "200",
		imageUrl: "/course-images/nextjs.jpg",
		instructor: {
			name: "Furkan Ayvaz",
		},
		category: CATEGORIES.find((c) => c.slug === "onyuz"),
	},
	{
		id: "4",
		slug: "pardus-a-giris",
		name: "Pardus'a Giriş",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "150",
		imageUrl: "/course-images/pardus.jpg",
		instructor: {
			name: "Berk Çiçek",
		},
		category: CATEGORIES.find((c) => c.slug === "linux"),
	},
	{
		id: "5",
		slug: "yapay-zekaya-giris",
		name: "Yapay Zekaya Giriş",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "250",
		imageUrl: "/course-images/ai.png",
		instructor: {
			name: "Muhammed Akıncı",
		},
		category: CATEGORIES.find((c) => c.slug === "yapay-zeka"),
	},
	{
		id: "6",
		slug: "react-js-temelleri",
		name: "React.js Temelleri",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "250",
		imageUrl: "/course-images/reactjs.jpg",
		instructor: {
			name: "Recep Akkaya",
		},
		category: CATEGORIES.find((c) => c.slug === "onyuz"),
	},
	{
		id: "7",
		slug: "avalanche-ile-merkeziyetsiz-uygulamalar",
		name: "Avalanche ile Merkeziyetsiz Uygulamalar",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vitae veritatis deserunt quidem hic ea repellendus fugiat ducimus tenetur. Fugit cumque quo saepe possimus rem qui odit vitae dignissimos reprehenderit!",
		price: "450",
		imageUrl: "/course-images/avalanche.png",
		instructor: {
			name: "Ali Gedikli",
		},
		category: CATEGORIES.find((c) => c.slug === "blokzincir"),
	},
];

var info = {
	name: "Hana Ofangel",
	subtitle: "UX Design / UI Design / Photography",
	bio:
		"Professional UX-UI designer with an eye for detail, and love for good design and photography.",
	contact_links: [
		{
			name: "www.hanaofangel.com",
			link: "http://hanaofangel.com"
		},

		{
			name: "medium",
			link: "https://medium.com/@hanaofangel"
		},

		{
			name: "linkedin.com",
			link: "https://linkedin.com/in/hanaofangel"
		},

		{
			name: "twitter.com",
			link: "https://twitter.com/hanaofangel"
		}],


	work_history: [
		{
			title: "Photographer",
			location: "Variations",
			date: "2016 - 2018",
			text:
				"Film Set Photographer for Variations Season 1 - 2 and 3. Classical music meets Electronics, a series of duets meeting paths around a savant music"
		},

		{
			title: "Content Editor and Photographer",
			location: "Plemi.com / Crowdfunding solution B2B and B2C and a social platform for live music",
			date: "2008 - 2012",
			text:
				"Within a team of developers and music enthousiast, I was the swiss knife : editor, photographer, testor, voice for the user, the live music expert within the product team of Plemi.com : a funded start-up that developped a solution of crownfunding for concerts, an on demand concept from music fans in partnership with venues and artists and events producers"
		},

		{
			title: "Freelance Webdesigner",
			location: "world wide web, french and japanese clients",
			date: "2005 -2013",
			text:
				"Providing their first design consultation, building their brand style guide and creating their solution which allowed many clients to have a unique web presence"
		}],


	projects: [
		{
			name: "Daughter",
			desc: "Photographe pour Sourdoreille. Lire l'article : https://sourdoreille.net/daughter-au-trianon-75-minutes-a-labri-du-monde/",
			tags: ["Trianon", "live photography", "music"],
			colors: ["#C57C44", "#CCCCCC", "#FFFFFF", "##004BCC"],
			image_type: "tall",
			images: [
				"https://flic.kr/p/MUz38E",
				"https://flic.kr/p/NmNRLZ",
				"https://flic.kr/p/NmP9Ak",
				"https://flic.kr/p/Nbuc2N",
				"https://flic.kr/p/Nbuyxd"]
		},


		{
			name: "Daughter",
			desc: "Photographe pour Sourdoreille. Lire l'article : https://sourdoreille.net/daughter-au-trianon-75-minutes-a-labri-du-monde/",
			tags: ["Trianon", "live photography", "music"],
			colors: ["#C57C44", "#CCCCCC", "#FFFFFF", "##004BCC"],
			image_type: "tall",
			images: [
				"https://flic.kr/p/MUz38E",
				"https://flic.kr/p/NmNRLZ",
				"https://flic.kr/p/NmP9Ak",
				"https://flic.kr/p/Nbuc2N",
				"https://flic.kr/p/Nbuyxd"]
		},


		{
			name: "Daughter",
			desc: "Photographe pour Sourdoreille. Lire l'article : https://sourdoreille.net/daughter-au-trianon-75-minutes-a-labri-du-monde/",
			tags: ["Trianon", "live photography", "music"],
			colors: ["#C57C44", "#CCCCCC", "#FFFFFF", "##004BCC"],
			image_type: "tall",
			images: [
				"https://flic.kr/p/MUz38E",
				"https://flic.kr/p/NmNRLZ",
				"https://flic.kr/p/NmP9Ak",
				"https://flic.kr/p/Nbuc2N",
				"https://flic.kr/p/Nbuyxd"]
		},


		{
			name: "Daughter",
			desc: "Photographe pour Sourdoreille. Lire l'article : https://sourdoreille.net/daughter-au-trianon-75-minutes-a-labri-du-monde/",
			tags: ["Trianon", "live photography", "music"],
			colors: ["#C57C44", "#CCCCCC", "#FFFFFF", "##004BCC"],
			image_type: "tall",
			images: [
				"https://flic.kr/p/MUz38E",
				"https://flic.kr/p/NmNRLZ",
				"https://flic.kr/p/NmP9Ak",
				"https://flic.kr/p/Nbuc2N",
				"https://flic.kr/p/Nbuyxd"]
		},


		{
			name: "Daughter",
			desc: "Photographe pour Sourdoreille. Lire l'article : https://sourdoreille.net/daughter-au-trianon-75-minutes-a-labri-du-monde/",
			tags: ["Trianon", "live photography", "music"],
			colors: ["#C57C44", "#CCCCCC", "#FFFFFF", "##004BCC"],
			image_type: "tall",
			images: [
				"https://flic.kr/p/MUz38E",
				"https://flic.kr/p/NmNRLZ",
				"https://flic.kr/p/NmP9Ak",
				"https://flic.kr/p/Nbuc2N",
				"https://flic.kr/p/Nbuyxd"]
		}]
};





function ProjectImages(props) {
	return (
		React.createElement("div", { className: "project-images" },
			props.images.map(function (url, index) {
				return (
					React.createElement("div", { className: "thumb" },
						React.createElement("img", {
							className: props.type + " gallery-" + props.index,
							"data-featherlight": url,
							src: url
						})));



			})));


}

function ProjectColors(props) {
	return (
		React.createElement("div", { className: "color-scheme" },
			props.colors.map(function (color, index) {
				return React.createElement("span", { style: { backgroundColor: color } });
			})));


}

function Project(props) {
	var tags = props.project_info.tags;
	var tag_list = tags.map(function (name, index) {
		var fname = index === 0 ? name : " / " + name;
		return fname;
	});
	return (
		React.createElement("div", { className: "row" },
			React.createElement("div", { className: "col-md-4" },
				React.createElement("div", { className: "project-text" },
					React.createElement("div", null, tag_list),
					React.createElement("strong", null, props.project_info.name),
					React.createElement("p", null, props.project_info.desc))),


			React.createElement("div", { className: "col-md-2" },
				React.createElement(ProjectColors, { colors: props.project_info.colors })),

			React.createElement("div", { className: "col-md-6" },
				React.createElement(ProjectImages, {
					index: props.index,
					type: props.project_info.image_type,
					images: props.project_info.images
				}))));




}

function Projects(props) {
	return (
		React.createElement("div", { className: "content-wrap" },
			React.createElement("div", { className: "container" },
				React.createElement("h1", null, "Recent Projects"),
				React.createElement("hr", null),
				props.info.map(function (project, index) {
					return (
						React.createElement("div", null,
							React.createElement(Project, { index: index, project_info: project }),
							React.createElement("hr", null)));


				}))));



}

function WorkHistory(props) {
	return (
		React.createElement("div", { className: "content-wrap" },
			React.createElement("div", { className: "container" },
				React.createElement("h1", { "class": "" }, "Work History"),
				React.createElement("hr", null),
				props.work.map(function (work, index) {
					return (
						React.createElement("div", { className: "work-history" },
							React.createElement("strong", null, work.title), " / ", work.location, " /", " ",
							React.createElement("strong", null, work.date),
							React.createElement("p", null, work.text),
							React.createElement("hr", null)));


				}))));



}

function Quote(props) {
	return (
		React.createElement("div", { className: "content-wrap" },
			React.createElement("div", { className: "container" },
				React.createElement("blockquote", { className: "blockquote" },
					React.createElement("p", { className: "mb-0" }, props.text)))));




}

function Header(props) {
	return (
		React.createElement("header", null,
			React.createElement("div", { className: "container" },
				React.createElement("div", { className: "row" },
					React.createElement("div", { className: "col-md-6" },
						React.createElement("div", { className: "header-left" },
							React.createElement("h1", { className: "display-4" }, info.name),
							React.createElement("h2", null, info.subtitle))),


					React.createElement("div", { className: "col-md-6" },
						React.createElement("div", { "class": "float-md-right" },
							React.createElement("a", { href: "https://hanaofangel.com" }, "Hanaofangel.com"), " /", " ",
							React.createElement("a", { href: "https://codepen.io/hanaofangel" }, "@Codepen"), " /", " ",
							React.createElement("a", { href: "https://uk.linkedin.com/in/hanaofangel" }, "@linkedin"), " /",

							React.createElement("a", { href: "https://twitter.com/hanaofangel" }, "@Twitter")))))));






}

ReactDOM.render(
	React.createElement("div", null,
		React.createElement(Header, null),
		React.createElement(Quote, { text: info.bio }),
		React.createElement(WorkHistory, { work: info.work_history }),
		React.createElement(Projects, { info: info.projects })),

	document.getElementById("app"));


 for(let i = 0; i < info.projects.length;i++){
 	$('.gallery-'+i).featherlightGallery({
 					gallery: {
 						next: 'next »',
 						previous: '« previous'
 					},
 					variant: 'featherlight-gallery2'
 				});

 }

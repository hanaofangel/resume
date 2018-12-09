// var info = {
// 	name: "Hana Ofangel",
// 	subtitle: "UX Design / UI Design / Photography",
// 	bio:
// 		"Professional UX-UI designer with a wide ranging skillset and an eye for detail, good design and photography.",
// 	contact_links: [
// 		{
// 			name: "www.hanaofangel.com",
// 			link: "http://hanaofangel.com"
// 		},
// 		{
// 			name: "medium",
// 			link: "https://medium.com/@hanaofangel"
// 		},
// 		{
// 			name: "linkedin.com",
// 			link: "https://linkedin.com/in/hanaofangel"
// 		},
// 		{
// 			name: "twitter.com",
// 			link: "https://twitter.com/hanaofangel"
// 		}
// 	],
// 	work_history: [
// 		{
// 			title: "Photographer",
// 			location: "Variations",
// 			date: "2016 - 2018",
// 			text:
// 				"Film Set Photographer for Variations Season 1 - 2 and 3. Classical music meets Electronics, a series of duets meeting paths around a savant music"
// 		},
// 		{
// 			title: "Content Editor and Photographer",
// 			location: "Plemi.com / Crowdfunding solution B2B and B2C and a social platform for live music",
// 			date: "2008 - 2012",
// 			text:
// 				"Within a team of developers and music enthousiast, I was the swiss knife : editor, photographer, testor, voice for the user, the live music expert within the product team of Plemi.com : a funded start-up that developped a solution of crownfunding for concerts, an on demand concept from music fans in partnership with venues and artists and events producers"
// 		},
// 		{
// 			title: "Freelance Developer",
// 			location: "UK",
// 			date: "2005 -2013",
// 			text:
// 				"Providing an affordable design and build solution which allowed many clients to have a unique web presence"
// 		}
// 	],
// 	projects: [
// 		{
// 			name: "Love or Money",
// 			desc: "Cool React based data visualisation tool and Wordpress Microsite",
// 			tags: ["React", "Wordpress", "graphs"],
// 			colors: ["#E30613", "#00698C", "#737373", "#5CB4EB"],
// 			image_type: "tall",
// 			images: [
// 				"https://chrismcnally.co.uk/assets/screens/love_or_money/tool/screen2.png",
// 				"https://chrismcnally.co.uk/assets/screens/love_or_money/tool/screen6.png",
// 				"https://chrismcnally.co.uk/assets/screens/love_or_money/home.png"
// 			]
// 		},
// 		{
// 			name: "Marketing Microsite",
// 			desc: "Pretty little website to showcase new promotions",
// 			tags: ["scroll effects", "floating nav"],
// 			colors: ["#E87722", "#222222"],
// 			image_type: "tall",
// 			images: [
// 				"https://chrismcnally.co.uk/assets/screens/inside_track/screen1.PNG",
// 				"https://chrismcnally.co.uk/assets/screens/inside_track/screen4.PNG",
// 				"https://chrismcnally.co.uk/assets/screens/inside_track/screen9.PNG"
// 			]
// 		},
// 		{
// 			name: "Personal Website chrismcnally.co.uk",
// 			desc:
// 				"My own website, always a work in progress and was a lot of fun to make !",
// 			tags: ["wordpress", "animation", "vertical nav"],
// 			colors: ["#976BBA", "#00BCD4", "#A6C0DC", "#3B3B3A"],
// 			image_type: "tall",
// 			images: [
// 				"https://chrismcnally.co.uk/assets/screens/cm/home.png",
// 				"https://chrismcnally.co.uk/assets/screens/cm/me.png",
// 				"https://chrismcnally.co.uk/assets/screens/cm/contact.png"
// 			]
// 		},
// 		{
// 			name: "theblackheartorchestra.com",
// 			desc:
// 				"Stunning minimal site for popular folk band, the blackheart orchestra",
// 			tags: ["wordpress", "fullscreen", "music"],
// 			colors: ["#3B3B3A", "#58585A", "#B4B4B4"],
// 			image_type: "wide",
// 			images: [
// 				"https://chrismcnally.co.uk/assets/screens/blackheart/home.png",
// 				"https://chrismcnally.co.uk/assets/screens/blackheart/menu.png",
// 				"https://chrismcnally.co.uk/assets/screens/blackheart/videos.png"
// 			]
// 		},
// 		{
// 			name: "Haines Watts hwca.com",
// 			desc: "Huge multisite for top 15 accountancy firm with over 70 offices",
// 			tags: ["wordpress", "corporate", "accountancy"],
// 			colors: ["#DC002E", "#02678E", "#37454E"],
// 			image_type: "tall",
// 			images: [
// 				"https://chrismcnally.co.uk/assets/screens/hwca/home.png",
// 				"https://chrismcnally.co.uk/assets/screens/hwca/office-home.png",
// 				"https://chrismcnally.co.uk/assets/screens/hwca/www.hwca.com_about-us_history_.png"
// 			]
// 		}
// 	]
// };

// function ProjectImages(props) {
// 	return (
// 		<div className="project-images">
// 			{props.images.map((url, index) => {
// 				return (
// 					<div className="thumb">
// 						<img
// 							className={props.type + " gallery-" + props.index}
// 							data-featherlight={url}
// 							src={url}
// 						/>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// }

// function ProjectColors(props) {
// 	return (
// 		<div className="color-scheme">
// 			{props.colors.map((color, index) => {
// 				return <span style={{ backgroundColor: color }} />;
// 			})}
// 		</div>
// 	);
// }

// function Project(props) {
// 	var tags = props.project_info.tags;
// 	var tag_list = tags.map((name, index) => {
// 		var fname = index === 0 ? name : " / " + name;
// 		return fname;
// 	});
// 	return (
// 		<div className="row">
// 			<div className="col-md-4">
// 				<div className="project-text">
// 					<div>{tag_list}</div>
// 					<strong>{props.project_info.name}</strong>
// 					<p>{props.project_info.desc}</p>
// 				</div>
// 			</div>
// 			<div className="col-md-2">
// 				<ProjectColors colors={props.project_info.colors} />
// 			</div>
// 			<div className="col-md-6">
// 				<ProjectImages
// 					index={props.index}
// 					type={props.project_info.image_type}
// 					images={props.project_info.images}
// 				/>
// 			</div>
// 		</div>
// 	);
// }

// function Projects(props) {
// 	return (
// 		<div className="content-wrap">
// 			<div className="container">
// 				<h1>Recent Projects</h1>
// 				<hr />
// 				{props.info.map(function(project, index) {
// 					return (
// 						<div>
// 							<Project index={index} project_info={project} />
// 							<hr />
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }

// function WorkHistory(props) {
// 	return (
// 		<div className="content-wrap">
// 			<div className="container">
// 				<h1 class="">Work History</h1>
// 				<hr />
// 				{props.work.map(function(work, index) {
// 					return (
// 						<div className="work-history">
// 							<strong>{work.title}</strong> / {work.location} /{" "}
// 							<strong>{work.date}</strong>
// 							<p>{work.text}</p>
// 							<hr />
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }

// function Quote(props) {
// 	return (
// 		<div className="content-wrap">
// 			<div className="container">
// 				<blockquote className="blockquote">
// 					<p className="mb-0">{props.text}</p>
// 				</blockquote>
// 			</div>
// 		</div>
// 	);
// }

// function Header(props) {
// 	return (
// 		<header>
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-6">
// 						<div className="header-left">
// 							<h1 className="display-4">{info.name}</h1>
// 							<h2>{info.subtitle}</h2>
// 						</div>
// 					</div>
// 					<div className="col-md-6">
// 						<div class="float-md-right">
// 							<a href="https://chrismcnally.co.uk">chrismcnally.co.uk</a> /{" "}
// 							<a href="https://codepen.io/chrismcnally">codepen.io</a> /{" "}
// 							<a href="https://uk.linkedin.com/in/chrismcnally1
// ">linkedin.com</a> /
// 							<a href="https://twitter.com/ChrisMcNallyWeb">twitter.com</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }

// ReactDOM.render(
// 	<div>
// 		<Header />
// 		<Quote text={info.bio} />
// 		<WorkHistory work={info.work_history} />
// 		<Projects info={info.projects} />
// 	</div>,
// 	document.getElementById("app")
// );

// // for(let i = 0; i < info.projects.length;i++){
// // 	$('.gallery-'+i).featherlightGallery({
// // 					gallery: {
// // 						next: 'next »',
// // 						previous: '« previous'
// // 					},
// // 					variant: 'featherlight-gallery2'
// // 				});

// // }

var info = {
	name: "Hana Ofangel",
	subtitle: "UX Design / UI Design / Photography",
	bio:
		"Professional UX-UI designer with a wide ranging skillset and an eye for detail, good design and photography.",
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
			title: "Freelance Developer",
			location: "UK",
			date: "2005 -2013",
			text:
				"Providing an affordable design and build solution which allowed many clients to have a unique web presence"
		}],


	projects: [
		{
			name: "Love or Money",
			desc: "Cool React based data visualisation tool and Wordpress Microsite",
			tags: ["React", "Wordpress", "graphs"],
			colors: ["#E30613", "#00698C", "#737373", "#5CB4EB"],
			image_type: "tall",
			images: [
				"https://chrismcnally.co.uk/assets/screens/love_or_money/tool/screen2.png",
				"https://chrismcnally.co.uk/assets/screens/love_or_money/tool/screen6.png",
				"https://chrismcnally.co.uk/assets/screens/love_or_money/home.png"]
		},


		{
			name: "Marketing Microsite",
			desc: "Pretty little website to showcase new promotions",
			tags: ["scroll effects", "floating nav"],
			colors: ["#E87722", "#222222"],
			image_type: "tall",
			images: [
				"https://chrismcnally.co.uk/assets/screens/inside_track/screen1.PNG",
				"https://chrismcnally.co.uk/assets/screens/inside_track/screen4.PNG",
				"https://chrismcnally.co.uk/assets/screens/inside_track/screen9.PNG"]
		},


		{
			name: "Personal Website chrismcnally.co.uk",
			desc:
				"My own website, always a work in progress and was a lot of fun to make !",
			tags: ["wordpress", "animation", "vertical nav"],
			colors: ["#976BBA", "#00BCD4", "#A6C0DC", "#3B3B3A"],
			image_type: "tall",
			images: [
				"https://chrismcnally.co.uk/assets/screens/cm/home.png",
				"https://chrismcnally.co.uk/assets/screens/cm/me.png",
				"https://chrismcnally.co.uk/assets/screens/cm/contact.png"]
		},


		{
			name: "theblackheartorchestra.com",
			desc:
				"Stunning minimal site for popular folk band, the blackheart orchestra",
			tags: ["wordpress", "fullscreen", "music"],
			colors: ["#3B3B3A", "#58585A", "#B4B4B4"],
			image_type: "wide",
			images: [
				"https://chrismcnally.co.uk/assets/screens/blackheart/home.png",
				"https://chrismcnally.co.uk/assets/screens/blackheart/menu.png",
				"https://chrismcnally.co.uk/assets/screens/blackheart/videos.png"]
		},


		{
			name: "Haines Watts hwca.com",
			desc: "Huge multisite for top 15 accountancy firm with over 70 offices",
			tags: ["wordpress", "corporate", "accountancy"],
			colors: ["#DC002E", "#02678E", "#37454E"],
			image_type: "tall",
			images: [
				"https://chrismcnally.co.uk/assets/screens/hwca/home.png",
				"https://chrismcnally.co.uk/assets/screens/hwca/office-home.png",
				"https://chrismcnally.co.uk/assets/screens/hwca/www.hwca.com_about-us_history_.png"]
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
							React.createElement("a", { href: "https://chrismcnally.co.uk" }, "chrismcnally.co.uk"), " /", " ",
							React.createElement("a", { href: "https://codepen.io/chrismcnally" }, "codepen.io"), " /", " ",
							React.createElement("a", { href: "https://uk.linkedin.com/in/chrismcnally1\n" }, "linkedin.com"), " /",

							React.createElement("a", { href: "https://twitter.com/ChrisMcNallyWeb" }, "twitter.com")))))));






}

ReactDOM.render(
	React.createElement("div", null,
		React.createElement(Header, null),
		React.createElement(Quote, { text: info.bio }),
		React.createElement(WorkHistory, { work: info.work_history }),
		React.createElement(Projects, { info: info.projects })),

	document.getElementById("app"));


// for(let i = 0; i < info.projects.length;i++){
// 	$('.gallery-'+i).featherlightGallery({
// 					gallery: {
// 						next: 'next »',
// 						previous: '« previous'
// 					},
// 					variant: 'featherlight-gallery2'
// 				});

// }
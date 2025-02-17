export interface AdhyaayaEventContact {
	name: string;
	phone: string;
}

export interface AdhyaayaCustomProperty {
	type: 'text' | 'select' | 'checkbox';
	label: string;
	options: string[];
	redirect: string[];
}

export interface AdhyaayaEvent {
	// event reference id, used in the url and internally
	id: string;
	mode: 'offline' | 'online'; // Offline / Online etc
	category: 'technical' | 'non-technical' | 'workshops'; // Technical / Non-Technical etc
	// Title of the event, used everywhere publicly
	name: string;
	description: string;
	// Make sure they are paired, amount[0] is for team_members[0]
	amount: number[];
	team_members: number[];
	// Gives the date and time of the event
	start_date: Date;
	end_date: Date;

	small_image: string; // Image for the card
	icon: string; // icon to use where entire image is not required
	poster: string; // Image for the event page
	contact: AdhyaayaEventContact[];
	whatsapp_link?: string;
	form_link: string;
	custom_instructions?: string[];
	is_active: boolean; // set this to false to hide the event from the list
	// Set values in this for custom props to take.
	custom_properties?: AdhyaayaCustomProperty[];
	is_open: boolean;
}
import born from '$lib/assets/icons/born.png?url'
import virtual_placement_icon from '$lib/assets/icons/vp.png?url';
import respawn from '$lib/assets/icons/respawn.png';
import vaad_vivad from '$lib/assets/icons/youth.png?url';

import foodoshit from '$lib/assets/icons/salad.png?url';
import cricbash from '$lib/assets/icons/cricbash.png?url';

import graffiti from '$lib/assets/icons/graffiti.png?url';
import jigyasa from '$lib/assets/icons/soldier.png?url';
import stargaze from '$lib/assets/icons/stargazer1.png?url';
import gdsc from '$lib/assets/icons/gdsc.png?url';
import valorant from '$lib/assets/icons/valorant1.png?url';
import BGMI from '$lib/assets/icons/BGMI.png?url';
import Lounge from '$lib/assets/icons/lounge.jpg?url';
import aeromodel from '$lib/assets/icons/aeromodel.png?url';
import stock from '$lib/assets/icons/stock.png?url';
import roborace from '$lib/assets/icons/roborace.png?url';
import inexpress from '$lib/assets/icons/inexpress.jpg?url';
import sspy from '$lib/assets/icons/sspy.png?url';
import hackon from '$lib/assets/icons/hack-on.png?url'
import bridge from '$lib/assets/icons/bridge.png?url';
import piso from '$lib/assets/icons/piso.png?url'
import code from '$lib/assets/icons/codeventures.png?url';
import avishkar from '$lib/assets/icons/avishkar.png?url';
import standardsumit from '$lib/assets/icons/sumit.png?url';
import standardhunt from  '$lib/assets/icons/hunt.png?url';
import cb from '$lib/assets/icons/cb.png?url';
import admad from '$lib/assets/icons/admad.png?url'
import bb from '$lib/assets/icons/bb.png?url'


// import p_coming_soon from '$lib/assets/posters/coming-soon.png?url';
import p_avishkar from '$lib/assets/posters/avish.jpg';
//import p_BIS from '$lib/assets/posters/bis.png';
import p_bridgeocraft from '$lib/assets/posters/bridge-o-craft.jpg';
// import p_caddiction from '$lib/assets/posters/caddiction.jpg?url';
import p_codeventure from '$lib/assets/posters/cv.jpg';
import p_respawn from '$lib/assets/posters/respawn.jpg';
import p_virtual_placement from '$lib/assets/posters/vp.jpg';
import p_bornpsycos from '$lib/assets/posters/bp.jpg';
//import p_cadoshit from '$lib/assets/posters/cad-o-shop.jpg';
import p_graffiti from '$lib/assets/posters/graffiti.jpg';
import p_foodoholics from '$lib/assets/posters/fh.jpg';
import p_gsdc from '$lib/assets/posters/hack-on.jpg';
import p_jigyasa from '$lib/assets/posters/jigyasa.jpg';
import p_roborace from '$lib/assets/posters/rr.jpg';
import p_stargaze from '$lib/assets/posters/sg.jpg';
import p_piso from '$lib/assets/posters/pisosoccer.jpg';
import p_yuvodaya from '$lib/assets/posters/yuvodaya.jpg';
import p_lounge from '$lib/assets/posters/theLounge.jpg';

import p_standardhunt from '$lib/assets/posters/standardtunt.jpg'
import p_standardsumit from '$lib/assets/posters/standardsumit.jpg'
import p_cb from '$lib/assets/posters/carrerBuilder.jpg'
import p_admad from '$lib/assets/posters/admad.jpg'
import p_bb from '$lib/assets/posters/brainbuster.jpg'
//import p_ie from '$lib/assets/posters/innovationexpress.jpeg';
//import p_ss from '$lib/assets/posters/structural-spy.jpeg';

//import p_am from '$lib/assets/posters/aeromodling.png';
export const EVENTS: AdhyaayaEvent[] = [
	{
		// this is a pseudoevent.
		id: '::respawn',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn',
		description:
			'Respawn is an electrifying online gaming event featuring three competitive games Free Fire BGMI and Chess. Free Fire teams will battle in Clash Squad mode in intense 4v4 matches BGMI squads will compete in classic matches across multiple maps using a point-based system and Chess players will engage in strategic duels with time controls. This event is the perfect arena for gamers to showcase their skills strategy and teamwork.',
		amount: [0, 0, 0],
		team_members: [0, 0, 0],
		start_date: new Date('10 Feb 2025'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: "",
		contact: [
			{
				name: 'Rohit Bhoge (Valo & COD)',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey (Chess)',
				phone: '8459795840'
			}
		],
		form_link: '',
		is_active: false,
		is_open: false,
		custom_properties: [
			{
				type: 'select',
				label: 'Select your game',
				options: ['Valorant - Squad', 'CoD Mobile - Quartet', 'Chess - Solo'],
				redirect: ['respawn-valorant', 'respawn-cod', 'respawn-chess']
			}
		]
	},
	// free fire
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'Free fire',
		form_link: 'https://forms.gle/cuhF5ggTrV6bCL6AA',
		description:
			"Immerse yourself in the electrifying tournament of free fire in which you require team co ordination and e sport's skills you can win a 18k cash reward.Hurry Up make a team and Register Today!!",
		amount: [159_00],
		team_members: [4],
		start_date: new Date('20,21,22 Feb 2025'),
		end_date: new Date('20,21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${valorant}`,
		poster: p_respawn,
		contact: [
			{
				name: 'Anshul Harne',
				phone: '9890559714'
			},
			{
				name: 'Piyush Padole',
				phone: '8766830550'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'BGMI',
		form_link: 'https://forms.gle/cuhF5ggTrV6bCL6AA',
		description:
			'Thrilling battles and fierce competition took center stage at the BGMI Tournament, where skilled gamers clashed in an electrifying display of strategy and precision. The event was a celebration of esports excellence, showcasing the best players vying for victory in the world of Battlegrounds Mobile India',
		amount: [159_00],
		team_members: [4],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${BGMI}`,
		poster: p_respawn,
		contact: [
			{
				name: 'Anshul Harne',
				phone: '9890559714'
			},
			{
				name: 'Piyush Padole',
				phone: '8766830550'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'Chess',
		form_link: 'https://forms.gle/cuhF5ggTrV6bCL6AA',
		description:
			'The Call of Duty Tournament electrified the gaming community as skilled competitors clashed in intense battles, showcasing strategic prowess and precise reflexes. Spectators were on the edge of their seats, immersed in the thrilling virtual warfare that unfolded during this epic gaming showdown.',
		amount: [159_00],
		team_members: [4],
		start_date: new Date('20 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: p_respawn,
		contact: [
			{
				name: 'Anshul Harne',
				phone: '9890559714'
			},
			{
				name: 'Piyush Padole',
				phone: '8766830550'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: '::avishkar',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar',
		form_link: 'https://forms.gle/HWumibVd9uo9r5bQA',
		description:
			'Avishkar is a project competition for enthusiasts who want to showcase their ideas and show their talent .Teams can have Up to 5 members and project can be in hardware or software categorise .win Exiting prices up to worth 9k for junior greeks and upto 15 k for senior greeks.Register Today itself!!',
		amount: [159_00, 159_00],
		team_members: [2, 4],
		start_date: new Date('20 Feb 2025'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${avishkar}`,
		poster: p_avishkar,
		contact: [
			{
				name: 'Apurv Hatmode',
				phone: '8623072560'
			},
			{
				name: 'Rishika Bavistale',
				phone: '8263883647'
			}
		],
		is_active: false,
		is_open: false,
		custom_properties: [
			{
				type: 'select',
				label: 'Mode of Attendance',
				options: ['Offline', 'Online'],
				redirect: ['avishkar-offline', 'avishkar-online']
			}
		]
	},
	{
		id: 'avishkar',
		mode: 'online',
		category: 'technical',
		name: 'Avishkar',
		form_link: 'https://forms.gle/4tGY6RnxA8vkK9rS6',
		description:
			'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!',
		amount: [159_00, 159_00],
		team_members: [2, 4],
		start_date: new Date('20 Feb 2025'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: p_avishkar,
		contact: [
			{
				name: 'Apurv Hatmode',
				phone: '8623072560'
			},
			{
				name: 'Rishika Bavistale',
				phone: '8263883647'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg'
	},
	{
		id: 'virtual-placement',
		mode: 'offline',
		category: 'technical',
		name: 'Virtual Placement',
		form_link: 'https://forms.gle/T5izWo6KS4oeGoyX6',
		description:
			"Virtual Placement is a simulated recruitment event designed to prepare students for real-world hiring processes. It consists of three rounds Campus Recruitment Test assessing aptitude and reasoning Group Discussion evaluating communication and leadership skills and Personal Interview testing technical knowledge and problem-solving. This competition helps participants understand industry expectations and improve their placement readiness.",
		amount: [79_00],
		team_members: [1],
		start_date: new Date('20,21 Feb 2025'),
		end_date: new Date('20,21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${virtual_placement_icon}`,
		poster: p_virtual_placement,
		contact: [
			{
				name: 'Aasawari Bhondge',
				phone: '8446631974'
			},
			{
				name: 'Sanika Gotmare',
				phone: '9096560097'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Bb6BOwMLprsGoz0sggxGaz'
	},
	{
		id: 'codeventures',
		mode: 'online',
		category: 'technical',
		name: 'CodeVenture',
		form_link: 'https://forms.gle/kAaFxCPQ665hsMeLA',
		description:
			"Codeventure succes depends on synergizing coding skills, problem-solving strategies, and teamwork dynamics. Codeventure  proposes that optimal team performance is achieved when members leverage individual strengths, employ agile communication, and adapt to challenges through iterative learning. By balancing technical expertise with collaborative flexibility, teams can efficiently navigate Codeventure's complex problem-solving landscape and achieve superior outcomes.",
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${code}`,
		poster: p_codeventure,
		contact: [
			{
				name: 'Devika Samudre',
				phone: '8806527880'
			},
			{
				name: 'Ameya Farkade',
				phone: '9365925510'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BcAeNWFxTmBJyR8FwaQNIW'
	},
	
	
	{
		id: 'piso-soccer',
		mode: 'offline',
		category: 'non-technical',
		name: 'Piso Soccer',
		form_link: 'https://forms.gle/JHmRFSisuXCUq69b7',
		description:
			'Piso Soccer is a high-intensity knockout football tournament where teams battle to stay in the game. Each team consists of 6 players + 2 substitutes, competing on a compact field for fast-paced action. Matches follow a direct elimination format, with losing teams eliminated and winners advancing. Standard futsal rules apply, demanding quick reflexes, strategic passing, and coordinated teamwork. The competition intensifies with each round, leading to a thrilling final where the ultimate champions emerge.'
		,amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('20 Feb 2025 11:00'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${piso}`,
		poster: p_piso,
		contact: [
			{
				name: 'Riyansh Badge',
				phone: '9356263373'
			},
			{
				name: 'Rishikesh Ban',
				phone: '8624930131'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM'
	},
	// {
	// 	id: 'quizmaster',
	// 	mode: 'offline',
	// 	category: 'technical',
	// 	name: 'Quiz Masters',
	// 	form_link: 'https://forms.gle/2LS9rJ37fnAq3Gya6',
	// 	description:
	// 		'The Quiz Masters event is an exhilarating challenge that pushes participants mental acuity to the limit. Combining elements of coding, mechanics, and electrical components, this event tests problem-solving skills, technical knowledge, and quick thinking. Participants must navigate through a series of intricate questions and tasks, ranging from deciphering complex algorithms to troubleshooting mechanical and electrical systems. With each question designed to stimulate critical thinking and creativity, the Quiz Masters event promises an intense and rewarding experience for those ready to showcase their expertise in the realms of coding, mechanics, and electrical engineering.',
	// 	amount: [249_00, 249_00, 249_00, 249_00, 249_00],
	// 	team_members: [1, 2, 3, 4, 5],
	// 	start_date: new Date('20 Feb 2025 11:00'),
	// 	end_date: new Date('20 Feb 2025'),
	// 	small_image: 'https://placeimg.com/360/360/tech',
	// 	icon: `url::${qmaster}`,
	// 	poster: p_BIS,
	// 	contact: [
	// 		{
	// 			name: 'Kalpana Rathod',
	// 			phone: '8010961439'
	// 		},
	// 		{
	// 			name: 'Pratham Chandankhede',
	// 			phone: '7558281643'
	// 		}
	// 	],
	// 	is_active: true,
	// 	is_open: false,
	// 	whatsapp_link: 'https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM'
	// },
	{
		id: 'roborace',
		mode: 'offline',
		category: 'technical',
		name: 'RoboRace',
		form_link: 'https://forms.gle/48tUqBQd8p9ov58v7',
		description:
			"Roborace success hinges on harmonizing algorithmic precision, mechanical optimization, and strategic adaptability. RDT posits that championship teams balance rapid course mapping, real-time sensor data analysis, and calculated risk-taking. By synchronizing computational power with human intuition, teams can outmaneuver opponents, maximize speed, and dominate the Roborace competition.",
		amount: [69_00],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${roborace}`,
		poster: p_roborace,
		contact: [
			{
				name: 'Shrvan Wankhede',
				phone: '9359030991'
			},
			{
				name: 'Tamanna Gaikwad',
				phone: '6380602485'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXtte17v1QuBEgTSesPT2q'
	},
	{
		id: 'Yuvodaya',
		mode: 'offline',
		category: 'non-technical',
		name: 'Yuvodaya',
		form_link: 'https://forms.gle/C9YHAVwwC7r5Tjia7',
		description:
			'Yuvodaya Youth Parliament is a structured debate and policy discussion platform where participants experience real-world parliamentary procedures. The event fosters leadership, public speaking, and problem-solving skills through legislative simulations and discussions on governance and policy-making.',
		amount: [49_00],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${vaad_vivad}`,
		poster: p_yuvodaya,
		contact: [
			{
				name: 'Aryan Vidhate ',
				phone: '9921707207 '
			},
			{
				name: 'Arnav Hiwarkar',
				phone: '9975472539'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Fihx9B1pCwCEmE6yyJRIs7'
	},
	{
		id: 'Bornpyschos',
		mode: 'offline',
		category: 'non-technical',
		name: 'Born-Psychos',
		form_link: 'https://forms.gle/kVkF2dsq2mo4x5Ns5',
		description:
			'Born Psychos is an exciting team event for groups of two or four, blending technical knowledge with fun challenges. It features three thrilling rounds: Quiz Master, a BIS-standardized treasure hunt and quiz; Flip-A-Score, a riddle-solving buzzer round followed by a smiley ball fight; and Treasure-Back, a murder mystery where teams race to find the culprit. This event promises intense competition, teamwork, and excitement',
		amount: [199_00],
		team_members: [4],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${born}`,
		poster: p_bornpsycos,
		contact: [
			{
				name: 'Shivani Gurnule',
				phone: '9021599762'
			},
			{
				name: 'Chetan Barai',
				phone: '8308449313'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/ErzzKroyiw6IoL5pAWzHC5'
	},
	{
		id: 'food-o-holic',
		mode: 'offline',
		form_link: 'https://forms.gle/nQ9DNbT4TYc2Zpvw5',
		category: 'non-technical',
		name: 'Food-O-Holic',
		description:
			'"Food-o-Holics" is a fun-filled team event for groups of four featuring exciting food-related challenges. It consists of three thrilling rounds Belly Buster Battle where teams throw a ball into a glass and eat without using their hands Munch and Mastermind a food quiz with penalties and a three-legged race with spice challenges and The Great Dessert Dash where two members must finish 1 kg of shrikhand while the others assist. This event promises a blend of fun teamwork and foodie excitement.',
		amount: [299_00],
		team_members: [4],
		start_date: new Date('20 Feb 2025'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${foodoshit}`,
		poster: p_foodoholics,
		contact: [
			{
				name: 'Om Dhabade',
				phone: '8668675724'
			},
			{
				name: 'Vivek Rathod',
				phone: '9168045324'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KoKTPhgXNZxEof5xHUBLCh'
	},
	{
		id: 'graffiti',
		mode: 'offline',
		category: 'non-technical',
		form_link: 'https://forms.gle/VZK8nzmZGQKr3nr59',
		name: 'Graffiti',
		description:
			'Graffiti is an artistic competition where participants transform ideas into impactful artwork. Choose from four themes: IoT, Social Issue Awareness, Indian Culture & Art, and Limitless Ambitions. Use any medium—acrylic, watercolor, pastels, or sketching tools—to bring your vision to life. Artworks will be displayed in the quadrangle, creating an open-air gallery. Judging criteria include creativity, originality, and thematic representation.',
		amount: [499_00],
		team_members: [6],
		start_date: new Date('20,21 Feb 2025'),
		end_date: new Date('20,21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${graffiti}`,
		poster: p_graffiti,
		contact: [
			{
				name: 'Arnavi Khade',
				phone: '9637951702'
			},
			{
				name: 'Radha Khotele',
				phone: '9022557866'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/ETCp1yUYn5U8BEDSp5VtBH'
	},
	{
		id: 'thelounge',
		mode: 'offline',
		category: 'workshops',
		name: 'Lounge',
		form_link: 'https://forms.gle/ZVrwbbdVc3xVW7ii7',
		description:
			'The Lounge is an interactive session where students engage with accomplished Rotarians. Featuring Dr. Shabbire Shakir, the event explores his career journey, challenges, and insights. A student host will lead the discussion, followed by an open mic Q&A, offering valuable real-world advice and inspiration for students’ professional growth.',
		amount: [0],
		team_members: [1],
		start_date: new Date('20 Feb 2025 11:00'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${Lounge}`,
		poster: p_lounge,
		contact: [
			{
				name: 'Apurva Gautam',
				phone: '8010938203'
			},
			{
				name: 'Yosha Bhaisare',
				phone: '9503063385'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BIEeiqLyfQg41ZKZBT06WG'
	},
	{
		id: 'jigyasa',
		mode: 'offline',
		category: 'workshops',
		name: 'Jigyasa',
		form_link: 'https://forms.gle/fzd17SxUgWGA7ft78',
		description:
			"Jigyasa 2025 is an insightful workshop on civil services and cybersecurity organized by adhyaaya.gcoen in collaboration with NSS GCoEN. Featuring Indian Police Service experts the event follows a Discover Diagnose and Demystify approach to help participants understand career paths preparation strategies and real-world challenges. With a focus on education and community development Jigyasa fosters social responsibility and leadership making it a valuable opportunity for aspiring professionals.",
		amount: [0],
		team_members: [1],
		start_date: new Date('22 Feb 2025'),
		end_date: new Date('22 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${jigyasa}`,
		poster: p_jigyasa,
		contact: [
			{
				name: 'Keshari Dod',
				phone: '9307386709'
			},
			{
				name: 'Dimpal Pullarwar',
				phone: ' 7385450871'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/GwpSrB9MEcL4sW54WL1Hto'
	},
	{
		id: 'stargaze',
		mode: 'offline',
		category: 'workshops',
		name: 'Stargaze',
		form_link: 'https://forms.gle/8kkcKUTibKaqwirk8',
		description:
			"The Astronomy Club of Government College of Engineering, Nagpur, is organizing 'STARGAZE',an annual workshop conducted during the institution's technical fest, Adhyaaya. The event focuses on the fundamentals of astrophysics and astronomy, featuring expert guest lectures and career guidance in space science. It aims to nurture students' interest in observational astronomy and highlight scientific advancements at national and international levels.",
		amount: [59_00],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${stargaze}`,
		poster: p_stargaze,
		contact: [
			{
				name: 'Vedant Gotmare',
				phone: '9921707207'
			},
			{
				name: 'Khushbu Sharnagat',
				phone: '9322338289'
			}

		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Kh6yyGQAQRhDOtQ4tUDJFG'
	},
	{
		id: 'bridgeocraft',
		mode: 'offline',
		category: 'technical',
		form_link: 'https://forms.gle/PD9oCkb1n6x2TAZJ6',
		name: 'Bridge-O-Craft',
		description:
			"Bridge O' Craft is a hands-on competition where teams of five test their engineering skills using only ice-cream sticks and glue. It features three rounds Treasure Hunt where teams solve clues to unlock materials Bridge Construction where they build a structure within given constraints and Load-Bearing Test where bridges are tested for strength and stability. This event encourages creativity teamwork and practical application of engineering principles.",
		amount: [49_00],
		team_members: [1],
		start_date: new Date('21 Feb 2025 11:00'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${bridge}`,
		poster: p_bridgeocraft,
		contact: [
			{
				name: 'Shraddha Banarkar',
				phone: '8261955616'
			},
			{
				name: 'Shlok Shrivastav',
				phone: '7397831263 '
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/HhguujUB4Hk4cMsLyw6nRJ'
	},
	{
		id: 'hackon',
		mode: 'offline',
		category: 'workshops',
		name: 'Hack On',
		form_link: 'https://gdgc.gcoen.club/hackon',
		description:
			'Hack on is a fast paced Hackathon for a real world challenge in sustainability it will help you networking with industry experts and fellow Hackers and getting a chance of winning exiting prices and getting Exiting Opportunities, participants must bring their own devices and will be Judged on their respective performances with top team earning recognition,swags and certificates',
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${hackon}`,
		poster: p_gsdc,
		contact: [
			{
				name: 'Ayush Nafdey',
				phone: '9689838637'
			},
			{
				name: 'Mohit Deotare',
				phone: '7517345309'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BD6gqwlO5FC5qL4I4WEKAy'
	},
	{
		id: 'standardsumit',
		mode: 'offline',
		category: 'technical',
		name: 'Standard Sumit',
		form_link: 'https://forms.gle/fXqwP8F7fX9myjdc7',
		description:
			'"Standards Summit" is a free-entry presentation competition by GCOE Nagpur and BIS on cybersecurity, EV battery safety, and smart cities. Teams (2-4) present up to 20 slides in 7 minutes, judged on creativity, relevance, research, and presentation skills. Exciting prizes await!',
		amount: [0],
		team_members: [2,4],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${standardsumit}`,
		poster: p_standardsumit,
		contact: [
			{
				name: 'Radha Suple',
				phone: '9322955398'
			},
			{
				name: 'Niharika Nagpurkar',
				phone: '8379968904'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: ''
	},
	{
		id: 'standardhunt',
		mode: 'offline',
		category: 'technical',
		name: 'Standard Hunt',
		form_link: 'https://forms.gle/XQaKA8LhKVSZNGVp8',
		description:
			'"Standard Hunt" is a fun, clue-based event by GCOE Nagpur and BIS to promote BIS standards. Teams (4-5) solve challenges like decoding standards, product matching, and trivia. The first to complete all checkpoints wins. Free entry with exciting prizes!',
		amount: [0],
		team_members: [4,5],
		start_date: new Date('20 Feb 2025'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${standardhunt}`,
		poster: p_standardhunt,
		contact: [
			{
				name: 'Rohit Bhoge',
				phone: '9156958391'
			},
			{
				name: 'Bharat Pande',
				phone: '9890779181'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: ''
	},
	{
		id: 'cb',
		mode: 'offline',
		category: 'technical',
		name: 'Carrer Builder',
		form_link: 'https://forms.gle/TfPdqC4KYcpFzSwS8',
		description:
			'"Career Builder," presented by BIS x Civil at Government College of Engineering, Nagpur, offers a hands-on construction experience. Participants will set out a 1BHK layout in 4 hours with provided materials. Teams of up to 4 students can enter for free and win exciting prizes. ',
		amount: [0],
		team_members: [4],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${cb}`,
		poster: p_cb,
		contact: [
			{
				name: 'Roshan Piprewar',
				phone: '7028382550'
			},
			{
				name: 'Om Lokhande',
				phone: '7720012113'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: ''
	},
	{
		id: 'admad',
		mode: 'offline',
		category: 'technical',
		name: 'Ad - Mad',
		form_link: 'https://forms.gle/GrwxgVAGXR3kRLb69',
		description:
			'"AD-MAD" is a creative ad-making competition by GCOE Nagpur and BIS, focusing on BIS-specific, social awareness, comedy, and innovative ideas. Free entry with prizes up to ₹3000. Showcase your creativity through advertisements',
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${admad}`,
		poster: p_admad,
		contact: [
			{
				name: 'Aditya Suryavanshi',
				phone: '9921082180'
			},
			{
				name: 'Pranay Kadu',
				phone: '7620943177'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: ''
	},
	{
		id: 'bb',
		mode: 'offline',
		category: 'technical',
		name: 'Brain Busters',
		form_link: 'https://forms.gle/EErLtk9u359fmGKB9',
		description:
			'The "Brain Busters" tech quiz at Government College of Engineering, Nagpur, tests knowledge of BIS standards and technical concepts. It features three rounds: The Standard Pen, Fact vs. Fiction, and Standards Sprints.',
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${bb}`,
		poster: p_bb,
		contact: [
			{
				name: 'Zoya Salahuddin',
				phone: '7387630037'
			},
			{
				name: 'Yash Talmale',
				phone: '9356626905'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: ''
	},
	
];

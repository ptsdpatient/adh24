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

import virtual_placement_icon from '$lib/assets/icons/virtual-placement.png?url';
import respawn from '$lib/assets/icons/respawn.png';
import vaad_vivad from '$lib/assets/icons/vaad-vivad.png?url';
import foodoshit from '$lib/assets/icons/foodoholics.png?url';
import cricbash from '$lib/assets/icons/cricbash.png?url';
//import cadoshit from '$lib/assets/icons/cadoshop.png?url';
import jigyasa from '$lib/assets/icons/jigyasa.png?url';
import stargaze from '$lib/assets/icons/stargazer.png?url';
import gdsc from '$lib/assets/icons/gdsc.png?url';
import valorant from '$lib/assets/icons/valorant1.png?url';
import BGMI from '$lib/assets/icons/BGMI.jpg?url';
import Lounge from '$lib/assets/icons/lounge.jpg?url';
import aeromodel from '$lib/assets/icons/aeromodel.png?url';
import stock from '$lib/assets/icons/stock.png?url';
import roborace from '$lib/assets/icons/roborace.png?url';
import inexpress from '$lib/assets/icons/inexpress.jpg?url';
import sspy from '$lib/assets/icons/sspy.png?url';
//import codeventures from '$lib/assets/icons/Codeventures.png?url';

// import multirotor from '$lib/assets/icons/multirotor.png?url';

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
			'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.',
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
	// valorant
	{
		id: 'respawn',
		mode: 'online',
		category: 'non-technical',
		name: 'Valorant',
		form_link: 'https://forms.gle/cuhF5ggTrV6bCL6AA',
		description:
			'Immerse yourself in the electrifying world of tactical prowess and precise aim at the upcoming Valorant Tournament, where teams clash in a battle of wits and skill. Brace for intense competition and unforgettable moments as players showcase their mastery in this adrenaline-fueled gaming spectacle.',
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
			"Attention all students! Are you ready to take the first step towards your dream job? Adhyaaya'24 Virtual Placement is here to help you prepare and excel in your upcoming placements. With an entry fee of only 70/- and a price pool of up to 7k, this is an opportunity you cannot miss! You will be tested on your mental ability, communication skills, stress-handling, and confidence. Don't wait, register now and get ready to impress your future employers!",
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
			'CodeVenture is a coding competition that tests your debugging and coding skills. Showcase your expertise in mathematics, data structures, algorithms and more. Compete solo using any programming language on a PC with a good internet connection. Join us for a thrilling coding experience!',
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: "/events/icons/codeventures.png",
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
			'Piso Soccer is a fast-paced knockout football tournament that tests teamwork, strategy, and agility. In this high-intensity elimination format, teams battle to stay in the game—winners advance, while losers are eliminated. With quick gameplay and competitive action, it’s the ultimate test of endurance and skill. '
		,amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('20 Feb 2025 11:00'),
		end_date: new Date('20 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${sspy}`,
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
			"Are you ready to test your driving skills in a high-octane race against the clock? Join us for RoboRace, where you'll have the opportunity to navigate a challenging race track using a bot provided by DROID DEVS. Whether you're a seasoned pro or a first-time racer, this event is open to all students, so grab your friends and sign up for a chance to win big prizes! With an easier track to start and a final round with even more challenging obstacles, the competition will be fierce, but only the fastest will come out on top. So what are you waiting for? Join us for an unforgettable event that's sure to be a highlight of the year!",
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
			'Yuvodaya Youth Parliament is a platform for young minds to engage in debates, policy discussions, and legislative simulations. Featuring sessions like the General Speaker’s List, Zero Hour, and Legislative Business Hour, it fosters critical thinking, leadership, and public speaking while providing real-world insights into governance. The Yuvodaya Youth Parliament is designed to provide participants with a real-world parliamentary experience, fostering critical thinking, leadership, and public speaking skills.',
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
			'Born Psychos is an adrenaline-fueled event that tests your aptitude skills through exciting rounds and challenges. Hone your critical thinking, leadership, and teamwork abilities while solving riddles and participating in elimination-style games. Join with a team of 4 for 199/-. Embrace your inner psychos and register today for a thrilling experience!',
		amount: [199_00],
		team_members: [4],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'ri:treasure-map-line',
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
			'"Food-o-Holic" is an exciting competition for teams of 4 members with an entry fee of 299. The competition consists of 3 rounds: "Screaming Baloons," "Meri Foodie Kismat," and "Desert Island." In each round, teams compete in food-related challenges and quizzes, from collecting buns with tied hands to finishing a dessert without using their hands. The winning team is decided by points or speed. Register now for a fun and thrilling culinary adventure.',
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
			'Graffiti is an artistic competition that encourages creativity and expression through painting. Participants can choose from four themes—IoT, Social Issue Awareness, Indian Culture and Art, and Limitless Ambitions—to create impactful artwork. The event fosters artistic expression, critical thinking, and storytelling through colors and designs.  Participants will choose one of four themes—IoT, Social Issue Awareness, Indian Culture and Art, or Limitless Ambitions—to create their artwork within the given time. Using any medium, they will express ideas through creativity, originality, and thematic relevance.',
		amount: [499_00],
		team_members: [6],
		start_date: new Date('20,21 Feb 2025'),
		end_date: new Date('20,21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${cricbash}`,
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
			'Welcome to the "Lounge" session, a collaborative event between ADHYAAYA and the Rotaract Club of GCOEN. We are honored to have two distinguished guests joining us: Mr. Sandip Joshi, former Mayor of Nagpur, and Mr. Vivek Deshpande, Co-founder & Director of Space Wood Furnitures Pvt.Ltd. Get ready for an insightful and engaging session as we delve into the experiences and expertise of these accomplished individuals',
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
			"Are you passionate about serving your country technically? Want to gain insights and knowledge from esteemed personalities of Defence Services/Civil Services? Join Trishakti Cell in collaboration with Adhyaaya for JIGYASA-an exclusive live webinar with SIR LOHIT MATANI (Indian Police Service). Discover, Diagnose and Demestify the ways to achieve your goals through this insightful event. Don't miss out on this opportunity to hear from a seasoned expert in the field! Register now, it's free of cost and open to all!",
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
			"Explore the depths of the universe at Adhyaaya'24! Join the Astronomy Club at GCOEN for expert guest lectures, hands-on exploration sessions, and more. Come and STARGAZE with us!",
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
			"Bridge O’ Craft is a hands-on competition where teams design and build a bridge using only ice-cream sticks and glue. This challenge tests engineering skills, creativity, and teamwork, requiring participants to apply theoretical principles in a practical, innovative way.  ",
		amount: [49_00],
		team_members: [1],
		start_date: new Date('21 Feb 2025 11:00'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${stock}`,
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
			'Hack-On is a fast-paced hackathon where teams (2-4 members) develop tech solutions for real-world challenges in Sustainability, Blockchain, Gamified Learning, MedTech, and Smart Automation. Participants must bring their own devices and will +receive mentorship, networking opportunities, and refreshments. Projects will be judged on innovation, feasibility, and impact, with top teams earning recognition, swags, and certificates. ',
		amount: [0],
		team_members: [1],
		start_date: new Date('21 Feb 2025'),
		end_date: new Date('21 Feb 2025'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${gdsc}`,
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
	}
];

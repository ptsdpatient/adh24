type Person = {
  name: string;
  photoUrl: string;
  postContent: string;
};

type Team= {
  name: string;
  members:Person[]
}

export const teams : Team[]=[
  {
    name:"Advisor Team",
    members:[
      {
        name: 'Sushrut Kohale',
        photoUrl: '/images/advisors/Sushrut kohale.jpg',
        postContent: 'Advisor',
      },
      {
        name: 'Aditya Shinde',
        photoUrl: '/images/advisors/Aditya Shinde.jpg',
        postContent: 'Advisor',
      },
      {//
        name: 'Swara Nagpure',
        photoUrl: '/images/advisors/Swara nagpure.jpg',
        postContent: 'Advisor',
      },
      {
        name: 'Anukul Ghosh',
        photoUrl: '/images/advisors/Anukul Ghosh.jpg',
        postContent: 'Advisor',
      },
      {
        name: 'Om Chaudhary',
        photoUrl: '/images/advisors/Om Chaudhary.jpg',
        postContent: 'Advisor',
      },
    ]
  },{
    name:"Coordinator Team",
    members:[
      {
        name: 'Arsh Sheikh',
        photoUrl: '/images/coordinators/Arsh Sheikh.jpg',
        postContent: 'Co-ordinator (EE)',
      },
      {
        name: 'Yash Dhawale',
        photoUrl: '/images/coordinators/Yash Dhawale .jpg',
        postContent: 'Co-ordinator (ETC)',
      },
      {
        name: 'Womika Gaidhani',
        photoUrl: '/images/coordinators/Womika Gaidhani .jpg',
        postContent: 'Co-ordinator (CE)',
      },
      {
        name: 'Ankush Kumar Singh',
        photoUrl: '/images/coordinators/Ankush Kumar Singh .jpg',
        postContent: 'Co-ordinator (CSE)',
      },
      {
        name: 'Yasshowardhan Pethe',
        photoUrl: '/images/coordinators/Yasshowardhan pethe.png',
        postContent: 'Co-ordinator (ME)',
      },
    ]
  },
  {
    name:"Organisation Team",
    members:[
      {
        name: 'Anshu Chole',
        photoUrl: '/images/organisation team/Anshu Chole .jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Atharva Karale',
        photoUrl: '/images/organisation team/Atharva Karale.jpg',
        postContent: 'Head',
      },
      {
        name: 'Medhaj Dixit',
        photoUrl: '/images/organisation team/Medhaj Dixit.jpg',
        postContent: 'Head',
      },
      {
        name: 'Unnati Tadas',
        photoUrl: '/images/organisation team/unnati tadas.jpg',
        postContent: 'Head',
      },
      {
        name: 'Vijay Chirde',
        photoUrl: '/images/organisation team/Vijay Chirde.jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Tushar Bandger',
        photoUrl: '/images/organisation team/Tushar Bandger .jpg',
        postContent: 'Co-head',
      },
    ]
  },{
    name:"Technical Team",
    members:[
      {
        name: 'Zishan Deshmukh',
        photoUrl: '/images/technical team/Zishan Deshmukh.jpg',
        postContent: 'Head',
      },
      {
        name: 'Roshan Padit',
        photoUrl: '/images/technical team/Roshan Padit.jpg',
        postContent: 'Head',
      },
      {
        name: 'Darshan Narad',
        photoUrl: '/images/technical team/Darshan Narad.jpg',
        postContent: 'Head',
      },
      {
        name: 'Kartik Musale',
        photoUrl: '/images/technical team/Kartik Musale .jpg',
        postContent: 'Head',
      },
      {
        name: 'Niharika Nagpurkar',
        photoUrl: '/images/technical team/Niharika Nagpurkar.jpg',
        postContent: 'Head',
      },
      {
        name: 'Sarthak Domkawle',
        photoUrl: '/images/technical team/Sarthak domkawle .jpg',
        postContent: 'Head',
      },
      {
        name: 'Shreyash Moon',
        photoUrl: '/images/technical team/Shreyash Moon.jpg',
        postContent: 'Head',
      },
      {
        name: 'Tarun Maraskolhe',
        photoUrl: '/images/technical team/Tarun Maraskolhe .jpg',
        postContent: 'Head',
      },
    ]
  },{
    name:"Sponsorship Team",
    members:[
      {
        name: 'Shreyash Moon',
        photoUrl: '/images/sponsorship/Shreyash Moon.jpg',
        postContent: 'Head',
      },
      {
        name: 'Yashash Meshram',
        photoUrl: '/images/sponsorship/Yashash meshram.jpg',
        postContent: 'Head',
      },
    ]
  },
  {
    name:"Publicity Team",
    members:[
      {
        name: 'Aditi Sonone',
        photoUrl: '/images/publicity team/Aditi sonone .jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Bhumi Raut',
        photoUrl: '/images/publicity team/Bhumi Raut.jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Darshan Narad',
        photoUrl: '/images/publicity team/Darshan Narad.jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Saumitra Yogi',
        photoUrl: '/images/publicity team/Saumitra Yogi .jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Vansh Kuthe',
        photoUrl: '/images/publicity team/Vansh kuthe.jpg',
        postContent: 'Head',
      },
      {
        name: 'Vivek Rathod',
        photoUrl: '/images/publicity team/VIVEK RATHOD.jpg',
        postContent: 'Head',
      },
      {
        name: 'Yashash Meshram',
        photoUrl: '/images/publicity team/Yashash meshram.jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Himanshu Thakre',
        photoUrl: '/images/publicity team/Himanshu Thakre .jpg',
        postContent: 'Head',
      },
    ]
  },
  {
    name:"Accounting Team",
    members:[
      {
        name: 'Atharva Karale',
        photoUrl: '/images/accounting team/Atharva Karale.jpg',
        postContent: 'Head',
      },
      {
        name: 'Bhumi Raut',
        photoUrl: '/images/accounting team/Bhumi Raut.jpg',
        postContent: 'Head',
      },
      {
        name: 'Sakshi Kawade',
        photoUrl: '/images/accounting team/Sakshi Kawade.jpg',
        postContent: 'Head',
      }
    ]
  },{
    name:"Decoration Team",
    members:[
      {
        name: 'Durgesh Kale',
        photoUrl: '/images/c&d/Durgesh Kale.jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Hrucha Linge',
        photoUrl: '/images/c&d/Hrucha Linge.png',
        postContent: 'Head',
      },
      {
        name: 'Janhavi Soyam',
        photoUrl: '/images/c&d/Janhavi Soyam .png',
        postContent: 'Co-head',
      },
      {
        name: 'Ritika Amte',
        photoUrl: '/images/c&d/RITIKA AMTE.jpg',
        postContent: 'Head',
      },
    ]
  },{
    name:"Content Writing",
    members:[
      {
        name: 'Aditi Sonone',
        photoUrl: '/images/content writting/Aditi sonone .jpg',
        postContent: 'Head',
      },
      {
        name: 'Durgesh Kale',
        photoUrl: '/images/content writting/Durgesh Kale.jpg',
        postContent: 'Head',
      },
      {
        name: 'Ritika Amte',
        photoUrl: '/images/content writting/RITIKA AMTE.jpg',
        postContent: 'Head',
      },
    ]
  },{
    name:"Hospitality Team",
    members:[
      {
        name: 'Atharv Sonar',
        photoUrl: '/images/h&d/Atharv Sonar .jpg',
        postContent: 'Head',
      },
      {
        name: 'Medhaj Dixit',
        photoUrl: '/images/h&d/Medhaj Dixit.jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Vansh Ilkahar',
        photoUrl: '/images/h&d/Vansh Ikharkar .jpg',
        postContent: 'Co-head',
      },
      {
        name: 'Guru Vanikar',
        photoUrl: '/images/h&d/Guru Wanikar.jpg',
        postContent: 'Head',
      },
      {
        name: 'Vikas Kuthmode',
        photoUrl: '/images/h&d/Vikas kuthmude.jpg',
        postContent: 'Co-head',
      },
    ]
  },
]


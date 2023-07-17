export class Skill{
  name:string;
  value:boolean;
}
export var skillList:Skill[]=[
  {name:'Angular',value:false},
   {name:'Android',value:false},
    {name:'Java',value:false},
     {name:'Python',value:false},
 {name:'PHP',value:false},
];

export class Location{
  name:string;
  value:boolean;
}
export var  locationList:Location[]=[
  {name:'Delhi',value:false},
   {name:'Noida',value:false},
    {name:'Gurugram',value:false},
     {name:'Faridabad',value:false},
];

export class JobDesc{
  detail:string;
}
export var DetailList:JobDesc[]=[{detail:'Leading Global IT MNC Requires Sr Java Developer- Noida \nThe JOB DESCRIPTION is as follows:\n-1)POSITION - Sr Java developer \n2)JOB LOCATION- Noida \n3)EXPERIENCE- 2-5 years on	Java platform	with the following technologies-\nSpring Boot,Microservices \nRequirements \nBE/MCA degree in Computer Science, \nEngineering	or a related subject \nProven hands-on	Software Development experience \nProven working experience in Java development \nHands on experience in designing and developing\napplications using Java EE platforms \nIf interested kindly send in your to jobs@techservices.com'}]


export class Freshness{
  name:number;
  value:boolean;
}
export var  freshnessList:Freshness[]=[
  {name:60 ,value:false},
   {name:30 ,value:false},
    {name:10 ,value:false},
     {name:1 ,value:false},
];


export class JobDetail{
  id:string;
  url:string;
  title:string;
  company:string;
  experience:string;
  location:string;
  city:string
  keyskills:string;
  techarea:string;
  jobdesc:string;
  ctc:string;
  postedby:string;
  when:number;
  favorite:boolean;
}
export var jobdetailList:JobDetail[]=[
  						{id:'12401',url:'java-noida-spring-info-12401',title:'Good	Java	Developer	(Immediate	Joining)',company:'INFO	SERVICES	PRIVATE	LIMITED',experience:'1-4	years',
					location:'Sector	144',city:'Noida',keyskills:'Spring,	Hibernate,	Java',techarea:'Java',
					jobdesc:'Work	on	enterprise	web	development	with	Java	back-end',ctc:'2,25,00-2,75,000',
					postedby:'Rohan	Sharma',when:1,favorite:false},
					{id:'35762',url:'python-noida-numpy-abc-35762',title:'Python	and	Data	Sciences',company:'ABC	TECH	SERVICES	PRIVATE	LIMITED',experience:'0-3	years',
					location:'Sector	127',city:'Noida',keyskills:'Numpy,	Pandas,	Matplotlib',techarea:'Python',
					jobdesc:'Python	and	Data	Sciences	with	web	scraping',ctc:'3,00,00-4,00,000',
					postedby:'Vikram	Negi',when:4,favorite:false},
					{id:'62065',url:'android-gurgaon-android-news-62065',title:'Android	Mobile	App	Developer',company:'NEWS	MEDIA	PRIVATE	LIMITED',experience:'2-3	years',
					location:'Sector	25',city:'Gurgaon',keyskills:'Android Studio,	Layouts,	Notifications,	Media	Player',techarea:'Android',jobdesc:'News	apps	on	Android	play	store',ctc:'3,50,00-4,25,000',
					postedby:'Pooja	Verma',when:11,favorite:false},
				{id:'45009',url:'java-delhi-rest-alpha-45009',title:'Back-end	Developer	(Java)',company:'ALPHA	TECHNOLOGIES',experience:'1-4	years',
					location:'Nehru	Place',city:'Delhi',keyskills:'REST	API,	Spring	Boot',techarea:'Java',
					jobdesc:'Back	end	REST	APIs	and	Microservices',ctc:'2,40,00-2,80,000',	
					postedby:'Pulkit Kumar',when:40,favorite:false},
					{id:'72331',url:'angular-noida-angular-km-72331',title:'Angular	6	(Front	End)',company:'KM	INFOSOLUTIONS',experience:'2-3	years',
					location:'Sector	127',city:'Noida',keyskills:'Angular	6,	Routing,	Bootstrap	4',techarea:'Angular',
					jobdesc:'Angular	6	front	end	development',ctc:'3,35,00-3,70,000',
					postedby:'Amit	Singh',when:3,favorite:false},
					{id:'15882',url:'android-gurgaon-firebase-vk-15882',title:'Android	App	Development',company:'VK	TECHNO	PRIVATE	LIMITED',experience:'4-6	years',
					location:'Sector	25',city:'Gurgaon',keyskills:'Firebase,	Notifications,	SQLite,	Rich	Android	apps',techarea:'Android',jobdesc:'Mobile	Apps	for	Enterprises	with	latest	features',ctc:'4,50,00-4,75,000',
					postedby:'Payal	Bansal',when:18,favorite:false},
					{id:'22990',url:'java-noida-core-info-22990',title:'Java,	J2EE,	Web	development',company:'INFO	SERVICES	PRIVATE	LIMITED',experience:'0-1	years',
					location:'Sector	144',city:'Noida',keyskills:'Core	Java,	JSP,	SQL,	J2EE',techarea:'Java',
					jobdesc:'Work	on	enterprise	web	development	with	Java	back-end',ctc:'1,50,000-1,80,000',
					postedby:'Rohan	Sharma',when:1,favorite:false},
					{id:'30068',url:'python-delhi-beautifulsoup-alt-30068',title:'Web	scraping	with	Python',company:'ALT	TECH	PRIVATE	LIMITED',experience:'1-2	years',
					location:'Janakpuri',city:'Delhi',keyskills:'BeautifulSoup,	Python	modules,	files',techarea:'Python',
					jobdesc:'Web	scraping	with	Python',ctc:'2,50,00-3,10,000',
					postedby:'Tushar	Chopra',when:8,favorite:false},
					{id:'47555',url:'android-gurgaon-android-news-47555',title:'Senior	Android	Developer',company:'NEWS	MEDIA	PRIVATE	LIMITED',experience:'4-6	years',
					location:'Sector	25',city:'Gurgaon',keyskills:'Android	Studio,	Layouts,	Notifications,	Media	Player',techarea:'Android',jobdesc:'News	apps	on	Android	play	store',ctc:'5,00,00-5,25,000',
					postedby:'Pooja	Verma',when:17,favorite:false},
				{id:'58229',url:'java-delhi-rest-alpha-58229',title:'Java	Microservices	Module	Lead',company:'ALPHA	TECHNOLOGIES',experience:'3-4	years',
					location:'Nehru	Place',city:'Delhi',keyskills:'REST	API,	Microservices,	Eureka',techarea:'Java',
					jobdesc:'Back	end	REST	APIs	and	Microservices',ctc:'3,60,00-3,80,000',
					postedby:'Pulkit	Kumar',when:46,favorite:false},
					{id:'72643',url:'angular-gurgaon-spa-mytech-72643',title:'Angular	Developer',company:'MYTECH	SOLUTIONS',experience:'0-1	years',
					location:'Cyber	City',city:'Gurgaon',keyskills:'SPA,	Angular	6,	Bootstrap	4,	REST	APIs',techarea:'Angular',
					jobdesc:'Angular	development',ctc:'1,80,00-2,00,000',
					postedby:'Vipin	Singh',when:2,favorite:false},
					{id:'80807',url:'android-gurgaon-firebase-vk-80807',title:'Junior	Android	Developer',company:'VK	TECHNO	PRIVATE	LIMITED',experience:'1-2	years',
					location:'Sector	25',city:'Gurgaon',keyskills:'Firebase,	Notifications,	SQLite,	Rich	Android	apps',techarea:'Android',jobdesc:'Mobile	Apps	for	Enterprises	with	latest	features',ctc:'2,20,00-2,75,000',
					postedby:'Payal	Bansal',when:22,favorite:false}
]

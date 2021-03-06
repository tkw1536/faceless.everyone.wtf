// list of faceless people
var faceless = [
  // staff
  'Prof. Dr. Athanasios Antoulas',
  'Dr. Mathias Bode',
  'Prof. Dr. Giuseppe Thadeu Freitas de Abreu',
  'Prof. Dr.  Horst Karl Hahn',
  'Prof. Dr.-Ing. Werner Henkel',
  'Ph.D. Russell Lodge',
  'Prof. Dierk Schleicher',
  'Prof. Dr. Jürgen Schönwälder',
  'Vaibhav Bajpai',
  'Ph.D. Heiko Bülow',
  'Alesandr Fadeev',
  'Dr. Achim Geleßus',
  'Dr.  Dae Gwan Lee',
  'MSc Indah Rosalie Lengkong',
  'Dr. Christian Maeder',
  'Dimitar Misev',
  'Dennis Manuel Müller',
  'Jhanak Parajuli',
  'Latif Qaisar',
  'Ph.D. Khodr Saaifan',
  'Prof. Dr. Rüdiger Gerdes',
  'Prof. Dr. Thomas Heine',
  'Prof. Dr. Arzhang Khalili',
  'Prof. Dr. Agostino Merico',
  'Prof. Dr. Hildegard Meyer',
  'Prof. Dr. Thomas Nugent',
  'Prof. Dr. Vikram Unnithan',
  'Prof. Dr. Veit Wagner',
  'Dr. Matthew Addicoat',
  'Dr. Anne Arnold',
  'Khaleel Ibrahim Assaf',
  'Dr. Martha Audiffred',
  'Dr. Harsha Bajaj',
  'Dr. Torsten Balster',
  'Dr. Ivan Barcena Uribarri',
  'Dr. Patrice Donfack',
  'Dr. Carlos José Fernández Solano',
  'Fabio Grassi',
  'Dr. Maosheng He',
  'Dr. Florin Ionita',
  'Daniela Josuttis',
  'Dr. Vladislav Jovanov',
  'Dr. Nataliya Kalinovich',
  'Dr. Anna Kopf',
  'Dr. Dennis Krämer',
  'Dr. Darka Labavic',
  'Mikhail Minin',
  'Dr. Nasrollah Moradi',
  'Dr. Mario Mureddu',
  'Dr. Alexander Neveshkin',
  'Dr. Martin Rohden',
  'Dr. Annika Saathoff',
  'Dr. Marc Weber',
  'Prof. Dr. Hendrik Birus Comparative',
  'Dr. Lüder Gerken',
  'Prof. Dr. Manfred Hinz',
  'Dr. Mark Jakob',
  'Prof. Dr. Kerstin Lopatta',
  'Dr. Tammy Nemeth',
  'Dr. Ulrich Nußbaum',
  'Prof. Dr. Julia Timpe',
  'Christine Brandstätt',
  'Julia Dörenkämper',
  'Wiebke Gronemeyer',
  'M.A. Hannah Hammerschmidt',
  'Hanin Hannouch',
  'Dr. Dennis Küster', 

  // students
  'Marc James Alessi',
  'Orchid Ammar',
  'Miroslava Angelova',
  'Elene Apostu',
  'Maria Apostu',
  'Zauresh Battalova',
  'Nina Bense',
  'Madhav Bista',
  'Göksin Cakir',
  'Esteban Ceballos',
  'Yanjian Chen',
  'Madison Leigh Cole',
  'Bailey Walter Cummings',
  'Lev Dadashev',
  'Natasha Danailovska',
  'Daniel Diaz Lanser',
  'Stilian Dimitrov',
  'Kaloyan Dimov',
  'Aiman El-Eryani',
  'Mustafe Elmi',
  'Maria Ficiu',
  'Veselin Georgiev',
  'Norman Heil',
  'Laurah Hester',
  'Yannik Holtkamp',
  'Atanas Kaishev',
  'Danilo Kalezic',
  'Ashish Khanal',
  'Giorgi Kvernadze',
  'Dennis Ledwon',
  'Felix Lem',
  'David Lohse',
  'Yubao Lou',
  'Haley Lubeck',
  'Ethan Ryan Luxemburg',
  'Ibrahim Malik',
  'Masooma Masooma',
  'Tayyab Mateen',
  'Jessica McMullen',
  'Guannan Mu',
  'Sebastien Cyrus Naji',
  'Andrei Nicolae',
  'Hyeyoung Oh',
  'Andreea Perpelea',
  'Andrej Pivcevic',
  'Kolja Joshua Preibsch',
  'Celina Prosch',
  'Tsvetan Rankov',
  'Nikolai Raykov',
  'Polina Reichert',
  'Ludwig Reiser',
  'Ashutosh Rijal',
  'Julian Gerhard Calvin Rittmayer',
  'Danut Rusu',
  'Robert Schierholz',
  'Felix Schmoll',
  'Keno Tetzlaff',
  'Juliana Villegas',
  'Victor Leon Von Koslowski',
  'Fanlin Wang',
  'Mengxi Wang',
  'Zhouyi Xiong',
  'Vlad Andrei Zamfir',
  'Anastas Stoev Zaranov',
  'Yeweynwuha Gellaw Zemedie',
  'Eugenia Rosca',
  'Chirag Shah',
  'David Aleksov',
  'Jake Taylor Anderson',
  'Zurab Babunashvili',
  'Mariam Baduashvili',
  'Kelsey Josephine Keiffer Barone',
  'John Charles Bartell',
  'Doygu Budancamanak',
  'Yujiao Cai',
  'Rui Cao',
  'Uillred Dallto',
  'Berk Dikic',
  'Tinatin Enukidze',
  'Joana Halili',
  'Xu He',
  'Maria-Bianca Leonte',
  'Shuting Li',
  'Yifei Liu',
  'Adela Simona Martin',
  'Lucas Mayer-Gramberg',
  'Dan George Mitescu',
  'Ana Mumladze',
  'Zhengmin Ni',
  'Vlad-Alexandru Nicolescu',
  'Charlotte Paulina Opatz',
  'Oguz Oral',
  'Yu Pan',
  'Nils Ulf Baltzar Paulson',
  'Rashed Popalzai',
  'Ali Rabab Qureshi',
  'Maria-Alexandra Retevoi',
  'Irina Gabriela Rosu',
  'Jeremy Byron Schultz',
  'Nikhil Sehrawat',
  'Young Jin Seo',
  'Young in Seo',
  'Ekber Shahkeremov',
  'Tianze Shao',
  'Oleksandr Skyrlov',
  'Rachelle Marie Smith',
  'Paige Snow',
  'Jorge Fernando Suarez',
  'Yipeng Sun',
  'Lina Taenzer',
  'Yiuxiao Wang',
  'Tianchan Wang',
  'Suizhi Wu',
  'Xiaolu Xu',
  'Lap Man Yau',
  'Rongbin Ye',
  'Li Zhou',
  'Christina Müller',
  'Adilah Ebrahim Ponnurangam',
  'Kiran Adhikari',
  'Sparsh Agarwal',
  'Matthieu Lewis Ah-Koon',
  'Setor Ahiable',
  'Tessa Marie Austin',
  'Stefan Bogdan',
  'Vasco Brazᾶo',
  'Christopher Casebeer',
  'Nicoleta Copaci',
  'Vladimir Cucu',
  'Usama Zahid Dogar',
  'Adam El Nabli',
  'Giorgi Eliava',
  'Natnael Getahun',
  'Syeda Mahnoor Gillani',
  'Taylor L Hafemeister',
  'Mohanad Magdy Hamza',
  'Johannes Uwe Harzmann-Deis',
  'Kamila Hasanbega',
  'Bayani Hazemach',
  'Helena Herzberg',
  'Seung Gyu Im',
  'Fanghang Ji',
  'Davit Jikia',
  'Jai Khanna',
  'Ruixan Li',
  'Daniel Jonathan Lindenblatt',
  'Ema Lluka',
  'Ziyan Lu',
  'Hannah McDonald',
  'Jace Tyler McKinney',
  'Jacob Bernard Mickey',
  'Deborah Mrema',
  'Samed Narin',
  'Teodora Nasui',
  'Sindi Nexhipi',
  'Anastasija Pejkovska',
  'Nhat Anh Tuan Phung',
  'Ilie Popanu',
  'Dinu Purice',
  'Chanindu Ranatunga',
  'Rai Sharaiz Rehman',
  'Mihella Berhanu Retta',
  'Jan Frederik Schaefer',
  'Emil Schwarze',
  'Matthew Daniel Senyonyi',
  'Anton Shavtvalishvili',
  'Alban Sherifaj',
  'Miraj Parin Sheth',
  'Qifan Shu',
  'Siddharth Shukla',
  'Lucas Soler Soler Littleales',
  'Adriana-Maria Stanciu',
  'Alina Stein',
  'Emanuel Stiuler',
  'Charlotte Rose Teall',
  'Usanee Thanawutsakunchai',
  'Muhammad Salahuddin Uqaili',
  'Ingo Wagner',
  'Orgest Xhelili',
  'Keyuan Yin',
  'Yeying Zheng',
  'Zhuang Zhou',
  'Siyuan Zhu',
  'Dominique Maria Brockman',
  'Diana Sirbu',
  'Neha Kumari',
  'Mohamed Aboelmagd',
  'Toma Adamia',
  'Ionut Amariei',
  'Radu Anton',
  'Vidushi Kaushali Arachchige Sri',
  'Jehanzeb Ayaz',
  'Kayla Barginda',
  'Wisam Randy Bellan',
  'Christiana Ioana Bercea',
  'Georgian Besleaga',
  'Nils Bischoff',
  'Tzu-Yueh Chen',
  'Dolma Choezom',
  'Thomas John Clagett',
  'Rubin Deliallisi',
  'Ai Deng',
  'Nicholas Kye Drobac',
  'Christopher Joseph Ehrhardt',
  'Inti G Mendoza Estrada',
  'Qianyu Feng',
  'Alexandru-Mihai Glontaru',
  'Paul Caroll Hackett',
  'Sudip Hamal',
  'Eric Jason Herbst',
  'Elena Vladimirovna Ignateva',
  'Ye Eun Jang',
  'Taylor Jarrett',
  'Daoyuan Ji',
  'Arjaldo Karaj',
  'Alexander Keim',
  'Marissa Leigh Laws',
  'Chak Fung Marco Li',
  'Ye Li',
  'Yufei Liu',
  'Isabeau Lueddecke',
  'Darlina Mamaqi',
  'Bianca Mocanu',
  'Felix Mutui',
  'Avinash Niroula',
  'Rojhae Amond Panton',
  'Anastasia Parschin',
  'Ana Lucia Paz Hernandez',
  'Alexandr Penskiy',
  'Manisha Poudel',
  'Jonas Präfke',
  'Nadin E Rabee',
  'Arenco Eduard Rustemaj',
  'Rodrigo Saavendra Sotelo',
  'Madeleine Lee Sadler',
  'Svenja Schönbrunn',
  'Mohammed Shakir Umer',
  'Aarju Shrestha',
  'Stela Sota',
  'Maik Sowinski',
  'Yijie Su',
  'Lihuang Tang',
  'Cristian Telescu',
  'Rachel Ann Tenney',
  'Nancee Singh Thakran',
  'Annu Thapa',
  'Sulav Timilsina',
  'Katerina von Keilhau',
  'Shiming Wang',
  'Canhuai Yang',
  'So Jeong Yoon',
  'Jinbo Zhang',
  'Shujian Zhu',
  'Mircea Alexandru',
  'Kim Philipp',

  // grads
  'Zubair Khalid Aakhunzzada',
  'Mohamed Aboelmagd',
  'Jesse Frank Abrams',
  'Marufa Akter',
  'Alaa A. I. Al-Hashimi',
  'Mohammad Alnajjar',
  'Melissa Alvarado',
  'Giuseppe Federico Amodeo',
  'Anatoliy Antonov',
  'Marius-Vasile Apostu',
  'Regina Arant',
  'Kwaku Arhin-Sam',
  'Hilal Arslan',
  'Assegd Assefa Asfaw',
  'Burcu Aslanyürek',
  'Maximilian Rudolf Aßkamp',
  'Jennie Auffenberg',
  'Nazan Avci',
  'Sisay Yemane Ayele',
  'Vladimir Bacic',
  'Lusine Samvel Badalyan',
  'Sabur Olarotimi Badmos',
  'Vaibhav Bajpai',
  'Aslak Rismyhr Bakkeland',
  'Christina Anne Basedow',
  'Carolin Baur',
  'Regina Becker',
  'Ben Ottmar Behrend',
  'Brennan Philip Bell',
  'Adriana Berrueto',
  'John Anton Berten',
  'Meron Biruk Beshewamyeleh',
  'Georgian Besleaga',
  'Satya Prathyusha Bhamidimarri',
  'David Jonathan Black',
  'Ciprian Florian Blindu',
  'Henning Blunck',
  'Mihai-Adrian Bodescu',
  'Konstantin Bogdanov',
  'Valerie Brianna Böhm',
  'Daniel James Boland',
  'Sidhant Bom',
  'Caterina Bonora',
  'Markus Brand',
  'Christine Brandstätt',
  'Veronica Alejandra Bremer',
  'Dominique Maria Freya Brockman',
  'Simone Brüning',
  'Marie Brüning',
  'Marius Buchmann',
  'Costel Bunescu',
  'Christoph Burkhardt',
  'Katharina Bürkin',
  'Vladimir Burstein',
  'Simona Maria Cabuz',
  'Andrei Caragea',
  'Daniel Ioan Cazacu',
  'Nicola Cerutti',
  'Clementine Chaigneau',
  'Tatia Chikhladze',
  'Teodora Marina Chitiboi',
  'Kirill Chunikhin',
  'Georgiana Ciobotaru',
  'Funda Citak',
  'Christen M. Corcoran',
  'Damien Etienne Coupry',
  'Natasha Danailovska',
  'Zymantas Darbenas',
  'Andrada David Melinte',
  'Pasquale Dente',
  'Emanuel Deutschmann',
  'Mark Andrew Dinich',
  'Cindy Dirscherl',
  'Stephan Dochow',
  'Vishal Suresh Dodke',
  'Julia Dörenkämper',
  'Georgi Radomirov Dragolov',
  'Catalina Diana Dumitru',
  'Ulrike Ehrlich',
  'Amelie Ehrmann',
  'Katharina Eimermacher',
  'Ahmed Mahmoud Elshahed',
  'Octavian Cezar Enache',
  'Ilknur Erdogan',
  'Toni Erfurth',
  'Augustine Obinna Ezejiofor',
  'Ricardo Manuel Pereira da Silva Farinha',
  'Anna Fejos',
  'Julia Feldkötter',
  'Alexandru Filip',
  'Melanie Flöter',
  'Alexey Fofonov',
  'Tobias Fromm',
  'Timm Fulge',
  'Saipira Furstenberg',
  'John David Gallagher',
  'Leslie Carmel Gauditz',
  'Jean-Yves Gerlitz',
  'Björn Gernig',
  'Fabiola Gerpott',
  'Manash Ghimire',
  'Alireza Ghods',
  'Alexandra Ghosh',
  'Alessia Gilardi',
  'Deyan Ivelinov Ginev',
  'Katja Glinka',
  'Carina Goldbach',
  'Timo Alexander Graf',
  'Oana Alexandra Graur',
  'Lusine Grigoryan',
  'Christopher Groß',
  'Britta Grossert',
  'Isabekova Gulnaz',
  'Steffen Hagemann',
  'Jianxiu Hao',
  'Xu He',
  'Lisa Verena Heindl',
  'Max Amatus Crispinus Heitmayer',
  'Maximilian Cornelius Held',
  'Arne Hendel',
  'Anders Martin Paul Hentschel',
  'Karin Hilck',
  'Mikhail Hlushchanka',
  'Ping Wei Ho',
  'Ruben Hohnholz',
  'Anna Hokema',
  'Michelle Hollman',
  'Lukas Hoppe',
  'Michael Huth',
  'Mihnea Marian Iancu',
  'Maria Iliopoulou',
  'Nazia Sarwat Islam',
  'Katharina Janz',
  'Muhammad Aneeque Javaid',
  'Oliver Peter Jeken',
  'Eva Johais',
  'Karin Anna Maria Johannsson',
  'Warren Andrew John',
  'Constantin Jucovschi',
  'Prasad Babu Kakarla',
  'Andreas Katsikidis',
  'Ahmed Kebdani',
  'Clara Kemme',
  'Markus Kiesel',
  'Mulugeta Woldemedhin Kifle',
  'Dominika Elbieta Kila',
  'Sidika Kirmizi',
  'Resit Kislioglu',
  'Charlotte Kleint',
  'Markus Klingel',
  'Katharina Klug',
  'Anne-Maren Koch',
  'Daniel Köhntopp',
  'Papul Koirala',
  'Remun Koirala',
  'Leman Korkmaz',
  'Benjamin Korsmeier',
  'Sarah-Elisa Krasnov',
  'Verena Kröss',
  'Usha Lamichhane',
  'Laura Landorff',
  'Gesche Lange',
  'Philipp Last',
  'Alan Law',
  'Anne Leiser',
  'Alla Leukavets',
  'Ingrid Linck Rosenhaim',
  'Tom Lindemann',
  'Jana Cathrin Loos',
  'Claudia Lorenz',
  'Jing Lu',
  'Sergiu-Matei Lucaci',
  'Tomasz Luczynski',
  'Thomas Lux',
  'Tian Ma',
  'Marek Malicki',
  'Samip Malla',
  'Maria Ilaria Mallus',
  'Ramiro Marco Figuera',
  'Andreas Martin',
  'Alan Angel Mata',
  'Marius-Febi Matei',
  'Franziska Matthes',
  'Jose Alejandro Matute Flores',
  'Alireza Mazaheri Tehrani',
  'Roberto Megias',
  'Sanja Mehandziska',
  'Amna Mehmood',
  'Gila Merschel',
  'Christoph Meyer',
  'Mirja Meyer',
  'Dragan Mihajlovic',
  'Alexandra Mittelstädt',
  'Faezeh Mohaghegh',
  'Ronny Möller',
  'Linda Monsees',
  'Hashem Moradmand Ziyabar',
  'Mauricio Moreno-Zambrano',
  'Ali Mougharbel',
  'Christina Müller',
  'Dennis Manuel Müller',
  'Christian Atanas Müller',
  'Luca Naitana',
  'Thanasin Nampaisarn',
  'Kumari Neha',
  'Alina Neitzert',
  'Katherine Margaret Nelson',
  'Dawit Andualem Nigatu',
  'Ann Noowong',
  'Jelmer Oosthoek',
  'Vera Martina Otterstein',
  'Harish Palaniswamy',
  'Daniel Palm',
  'Martin Palovic',
  'Claudio Rodrigo Pardo Enrico',
  'Stefan Partelow',
  'Andra Maria Pascale',
  'Sara Pasqualetto',
  'Maria Alexandra Patras',
  'Sophie Anna Luise Paul',
  'Ansa Paul',
  'Aleksandar Pelovski',
  'Shu Peng',
  'Emiliano Pereira',
  'Sarah Prathibha Perumalla',
  'Viacheslav Petrushin',
  'Jan Luca Pletzer',
  'Sandra Pöhle',
  'Matthias Pohlig',
  'Ayse Nur Polat',
  'Nora Poloni',
  'Vladimir Pnizovskiy',
  'Adilah Ebrahim Ponnurangam',
  'Karunakar Reddy Pothula',
  'Jigneshkumar Dahyabhai Prajapati',
  'Muhammad Qasim',
  'Maria Qatato',
  'Guangwu Qian',
  'Nomenjanahary Alexia Raharinirina',
  'Hasan Abdur Rahman',
  'Ashishsingh Raja Rai',
  'Venkat Raman Ramnarayan',
  'Abdul Rauf',
  'Arline Rave',
  'Dennis Redeker',
  'Krissy Reeve',
  'Thomas Reinert',
  'Philipp Gernot Riegebauer',
  'Gordan Ristovski',
  'Amira Mohamed Rizk',
  'Mariam Reyad Rizkallah',
  'Juan Manuel Rodriguez Perozo',
  'Julia Roeper',
  'Janne Rika Rohe',
  'Eugenia Rosca',
  'Jan Rune Rühaak',
  'Nils Rutschke',
  'Palina Salanevich',
  'Daniela Salzmann',
  'Mirna Lorena Sanchez',
  'Subrata Sarker',
  'Hannadige Sasimali Madusanka Soysa',
  'Manfred Andreas Schäck',
  'Antonia-Charline Schaefer',
  'Angelika Wiebke Schenk',
  'Katharina Schier',
  'Peter Schmidt',
  'Klaas Schüller',
  'Hannes Schulz',
  'Heiko Schulz',
  'Regine Schwab',
  'Thomas Schwarzlose',
  'Michael Schwier',
  'Valeria Selyuzhenok',
  'Stefan Sennekamp',
  'Valentina Shafina',
  'Rohan Shah',
  'Chirag Shah',
  'Muhammad Laiq Ur Rahman Shahid',
  'Anuraag Raj Shakya',
  'Smriti Sharma',
  'Richa Sharma',
  'Ali Sheharyar',
  'Anastasiia Shevchuk',
  'Mykhailo Shevchuk',
  'Petya Georgieva Shishiteva',
  'Abhinandan Shrestha',
  'Dora Simunovic',
  'Naveen Kumar Singh',
  'Ritika Singh',
  'Karamveer Singh',
  'Diana Sirbu',
  'Esther Somfalvy',
  'Elena Sommer',
  'Gowrishankar Soundararajan',
  'Ines Spieler',
  'Roger Spranz',
  'Anna Andreyevna Stafeeva',
  'Adrian Stanciu',
  'Frank Alexander Stengel',
  'Vera Storm',
  'Ingmar Nils Sturm',
  'Joanna Szumska',
  'Matthias Christian Täger',
  'Lalit Pitamber Talele',
  'Shu Ling Tan',
  'Foad Tehrani Najafian',
  'Eden Berhe Tekie',
  'Nathalie Tepe',
  'Usanee Thanawutsakunchai',
  'Michael Thon',
  'Brigitte Stephanie Tindjou Nana',
  'Alexandru Valentin Toader',
  'Yohannes Jote Tolossa',
  'Aliya Tonkobayeva',
  'Simon Tunderman',
  'Lawal Umar Kankia',
  'Sanne Van der Lugt',
  'Narunas Vaskevicius',
  'Sujit Kumar Verma',
  'Victor Vican',
  'Sebastian Viehmann',
  'Constanze Volkmann',
  'Nora Waitkus',
  'Stefan Wallaschek',
  'Jiajun Wang',
  'Kai-Yao Wang',
  'Lei Wang',
  'Song Wang',
  'Tianchan Wang',
  'Gabriela Weber de Morais',
  'Lina Weigel',
  'Kelly Weleschuk',
  'Amanda Whittal',
  'Rebecca Lilianne Wichmann',
  'Elizabeth Ramsey Wise',
  'Florian Wittmann',
  'Anna Katharina Wolkenhauer',
  'Joeline Xiberras',
  'Xiaolin Xing',
  'Sahin Yaman',
  'Peng Yang',
  'Vikas Yelemane Sunanda Rajanna',
  'Ge Yu',
  'Nivedita Yumnam',
  'Xiaoling Zeng',
  'Annabell Zentarra',
  'Weiqi Zhou'
];


// a person
var state = 'person2';

// get the next faceless person
function nextPerson(){

  // next person
  var person = faceless[Math.floor(Math.random() * faceless.length)];

  if(typeof console !== 'undefined' && typeof console.warn === 'function'){
    console.warn('Do not forget this faceless person: ' + person);
  }

  // load dom stuff
  var person1 = document.getElementById('person1');
  var person2 = document.getElementById('person2');

  // and make a transition
  if(state == 'person1'){
    person2.textContent = person;
    person1.className = 'passive';
    person2.className = 'active';
    state = 'person2';
  } else {
    person1.textContent = person;
    person2.className = 'passive';
    person1.className = 'active';
    state = 'person1';
  }
}

// get started
window.onload = function(){
  nextPerson();
  window.setInterval(nextPerson, 10000);
}

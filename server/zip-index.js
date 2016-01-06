/*
var zipIndex = [
    {
        zip: '63739',
        city: 'Aschaffenburg',
        district: '9661',
        state: 'Bayern'
    },
    {
        zip: '63741',
        city: 'Aschaffenburg',
        district: '9661',
        state: 'Bayern'
    },
    {
        zip: '63743',
        city: 'Aschaffenburg',
        district: '9661',
        state: 'Bayern'
    },
    {
        zip: '63755',
        city: 'Alzenau in Unterfranken',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63762',
        city: 'Großostheim',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63768',
        city: 'Hösbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63773',
        city: 'Goldbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63776',
        city: 'Mömbris',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63785',
        city: 'Obernburg am Main',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63791',
        city: 'Karlstein am Main',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63796',
        city: 'Kahl am Main',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63801',
        city: 'Kleinostheim',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63808',
        city: 'Haibach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63811',
        city: 'Stockstadt am Main',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63814',
        city: 'Mainaschaff',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63820',
        city: 'Elsenfeld',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63825',
        city: 'Westerngrund',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63825',
        city: 'Sommerkahl',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63825',
        city: 'Blankenbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63825',
        city: 'Schöllkrippen',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63826',
        city: 'Geiselbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63828',
        city: 'Kleinkahl',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63829',
        city: 'Krombach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63831',
        city: 'Wiesen',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63834',
        city: 'Sulzbach am Main',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63839',
        city: 'Kleinwallstadt',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63840',
        city: 'Hausen',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63843',
        city: 'Niedernberg',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63846',
        city: 'Laufach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63849',
        city: 'Leidersbach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63853',
        city: 'Mömlingen',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63856',
        city: 'Bessenbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63857',
        city: 'Waldaschaff',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63860',
        city: 'Rothenbuch',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63863',
        city: 'Eschau',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63864',
        city: 'Glattbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63867',
        city: 'Johannesberg',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63868',
        city: 'Großwallstadt',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63869',
        city: 'Heigenbrücken',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63871',
        city: 'Heinrichsthal',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63872',
        city: 'Heimbuchenthal',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63874',
        city: 'Dammbach',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63875',
        city: 'Mespelbrunn',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63877',
        city: 'Sailauf',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63879',
        city: 'Weibersbrunn',
        district: '9671',
        state: 'Bayern'
    },
    {
        zip: '63897',
        city: 'Miltenberg',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63906',
        city: 'Erlenbach am Main',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63911',
        city: 'Klingenberg am Main',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63916',
        city: 'Amorbach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63920',
        city: 'Großheubach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63924',
        city: 'Kleinheubach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63924',
        city: 'Rüdenau',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63925',
        city: 'Laudenbach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63927',
        city: 'Bürgstadt',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63928',
        city: 'Eichenbühl',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63930',
        city: 'Neunkirchen',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63931',
        city: 'Kirchzell',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63933',
        city: 'Mönchberg',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63934',
        city: 'Röllbach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63936',
        city: 'Schneeberg',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63937',
        city: 'Weilbach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '63939',
        city: 'Wörth am Main',
        district: '9676',
        state: 'Bayern'
    },

    {
        zip: '80331',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80333',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80335',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80336',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80337',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80339',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80469',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80538',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80539',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80634',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80636',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80637',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80638',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80639',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80686',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80687',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80689',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80796',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80797',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80798',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80799',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80801',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80802',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80803',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80804',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80805',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80807',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80809',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80933',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80935',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80937',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80939',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80992',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80993',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80995',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80997',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '80999',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81241',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81243',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81245',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81247',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81249',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81369',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81371',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81373',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81375',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81377',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81379',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81475',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81476',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81477',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81479',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81539',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81541',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81543',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81545',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81547',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81549',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81667',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81669',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81671',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81673',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81675',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81677',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81679',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81735',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81737',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81739',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81825',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81827',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81829',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81925',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81927',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '81929',
        city: 'München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82008',
        city: 'Unterhaching',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82024',
        city: 'Taufkirchen',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82031',
        city: 'Grünwald',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82041',
        city: 'Oberhaching',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82049',
        city: 'Pullach im Isartal',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82054',
        city: 'Sauerlach',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82057',
        city: 'Icking',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82061',
        city: 'Neuried',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82064',
        city: 'Straßlach-Dingharting',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82065',
        city: 'Baierbrunn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82069',
        city: 'Schäftlarn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82110',
        city: 'Germering',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82131',
        city: 'Gauting',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82140',
        city: 'Olching',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82152',
        city: 'Planegg',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82152',
        city: 'Krailling',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82166',
        city: 'Gräfelfing',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '82178',
        city: 'Puchheim',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82194',
        city: 'Gröbenzell',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82205',
        city: 'Gilching',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82211',
        city: 'Herrsching am Ammersee',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82216',
        city: 'Maisach',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82223',
        city: 'Eichenau',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82229',
        city: 'Seefeld',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82234',
        city: 'Weßling',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82237',
        city: 'Wörthsee',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82239',
        city: 'Alling',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82256',
        city: 'Fürstenfeldbruck',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82266',
        city: 'Inning am Ammersee',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82269',
        city: 'Geltendorf',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '82272',
        city: 'Moorenweis',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82275',
        city: 'Emmering',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82276',
        city: 'Adelshofen',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82278',
        city: 'Althegnenberg',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82279',
        city: 'Eching am Ammersee',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '82281',
        city: 'Egenhofen',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82284',
        city: 'Grafrath',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82285',
        city: 'Hattenhofen',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82287',
        city: 'Jesenwang',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82288',
        city: 'Kottgeisering',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82290',
        city: 'Landsberied',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82291',
        city: 'Mammendorf',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82293',
        city: 'Mittelstetten',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82294',
        city: 'Oberschweinbach',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82296',
        city: 'Schöngeising',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82297',
        city: 'Steindorf',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '82299',
        city: 'Türkenfeld',
        district: '9179',
        state: 'Bayern'
    },
    {
        zip: '82319',
        city: 'Starnberg',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82327',
        city: 'Tutzing',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82335',
        city: 'Berg',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82340',
        city: 'Feldafing',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82343',
        city: 'Pöcking',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82346',
        city: 'Andechs',
        district: '9188',
        state: 'Bayern'
    },
    {
        zip: '82347',
        city: 'Bernried',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82362',
        city: 'Weilheim in Oberbayern',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82377',
        city: 'Penzberg',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82380',
        city: 'Peißenberg',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82383',
        city: 'Hohenpeißenberg',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82386',
        city: 'Oberhausen',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82386',
        city: 'Huglfing',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82387',
        city: 'Antdorf',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82389',
        city: 'Böbing',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82390',
        city: 'Eberfing',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82392',
        city: 'Habach',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82393',
        city: 'Iffeldorf',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82395',
        city: 'Obersöchering',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82396',
        city: 'Pähl',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82398',
        city: 'Polling',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82399',
        city: 'Raisting',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82401',
        city: 'Rottenbuch',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82402',
        city: 'Seeshaupt',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82404',
        city: 'Sindelsdorf',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82405',
        city: 'Wessobrunn',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82407',
        city: 'Wielenbach',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82409',
        city: 'Wildsteig',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82418',
        city: 'Murnau am Staffelsee',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82418',
        city: 'Riegsee',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82418',
        city: 'Seehausen am Staffelsee',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82431',
        city: 'Kochel am See',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82433',
        city: 'Bad Kohlgrub',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82435',
        city: 'Bad Bayersoien',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82436',
        city: 'Eglfing',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '82438',
        city: 'Eschenlohe',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82439',
        city: 'Großweil',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82441',
        city: 'Ohlstadt',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82442',
        city: 'Saulgrub',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82444',
        city: 'Schlehdorf',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82445',
        city: 'Schwaigen',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82447',
        city: 'Spatzenhausen',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82449',
        city: 'Uffing am Staffelsee',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82467',
        city: 'Garmisch-Partenkirchen',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82481',
        city: 'Mittenwald',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82487',
        city: 'Oberammergau',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82488',
        city: 'Ettal',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82490',
        city: 'Farchant',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82491',
        city: 'Grainau',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82494',
        city: 'Krün',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82496',
        city: 'Oberau',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82497',
        city: 'Unterammergau',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82499',
        city: 'Wallgau',
        district: '9180',
        state: 'Bayern'
    },
    {
        zip: '82515',
        city: 'Wolfratshausen',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82538',
        city: 'Geretsried',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82541',
        city: 'Münsing',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82544',
        city: 'Egling',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82547',
        city: 'Eurasburg',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '82549',
        city: 'Königsdorf',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83022',
        city: 'Rosenheim',
        district: '9163',
        state: 'Bayern'
    },
    {
        zip: '83024',
        city: 'Rosenheim',
        district: '9163',
        state: 'Bayern'
    },
    {
        zip: '83026',
        city: 'Rosenheim',
        district: '9163',
        state: 'Bayern'
    },
    {
        zip: '83043',
        city: 'Bad Aibling',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83052',
        city: 'Bruckmühl',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83059',
        city: 'Kolbermoor',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83064',
        city: 'Raubling',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83071',
        city: 'Stephanskirchen',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83075',
        city: 'Bad Feilnbach',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83080',
        city: 'Oberaudorf',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83083',
        city: 'Riedering',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83088',
        city: 'Kiefersfelden',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83093',
        city: 'Bad Endorf',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83098',
        city: 'Brannenburg',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83101',
        city: 'Rohrdorf',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83104',
        city: 'Tuntenhausen',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83109',
        city: 'Großkarolinenfeld',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83112',
        city: 'Frasdorf',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83115',
        city: 'Neubeuern',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83119',
        city: 'Obing',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83122',
        city: 'Samerberg',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83123',
        city: 'Amerang',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83125',
        city: 'Eggstätt',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83126',
        city: 'Flintsbach',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83128',
        city: 'Halfing',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83129',
        city: 'Höslwang',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83131',
        city: 'Nußdorf am Inn',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83132',
        city: 'Pittenhart',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83134',
        city: 'Prutting',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83135',
        city: 'Schechen',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83137',
        city: 'Schonstett',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83139',
        city: 'Söchtenau',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83209',
        city: 'Prien am Chiemsee',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83224',
        city: 'Grassau',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83224',
        city: 'Staudach-Egerndach',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83229',
        city: 'Aschau im Chiemgau',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83233',
        city: 'Bernau am Chiemsee',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83236',
        city: 'Übersee',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83242',
        city: 'Reit im Winkl',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83246',
        city: 'Unterwössen',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83250',
        city: 'Marquartstein',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83253',
        city: 'Rimsting',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83254',
        city: 'Breitbrunn am Chiemsee',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83256',
        city: 'Chiemsee',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83257',
        city: 'Gstadt am Chiemsee',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83259',
        city: 'Schleching',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83278',
        city: 'Traunstein',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83301',
        city: 'Traunreut',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83308',
        city: 'Trostberg',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83313',
        city: 'Siegsdorf',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83317',
        city: 'Teisendorf',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83324',
        city: 'Ruhpolding',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83329',
        city: 'Wonneberg',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83329',
        city: 'Waging am See',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83334',
        city: 'Inzell',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83339',
        city: 'Chieming',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83342',
        city: 'Tacherting',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83346',
        city: 'Bergen',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83349',
        city: 'Palling',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83352',
        city: 'Altenmarkt an der Alz',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83355',
        city: 'Grabenstätt',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83358',
        city: 'Seeon-Seebruck',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83361',
        city: 'Kienberg',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83362',
        city: 'Surberg',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83365',
        city: 'Nußdorf',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83367',
        city: 'Petting',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83370',
        city: 'Seeon-Seebruck',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83373',
        city: 'Taching am See',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83377',
        city: 'Vachendorf',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83395',
        city: 'Freilassing',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83404',
        city: 'Ainring',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83410',
        city: 'Laufen',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83413',
        city: 'Fridolfing',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83416',
        city: 'Saaldorf-Surheim',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83417',
        city: 'Kirchanschöring',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83435',
        city: 'Bad Reichenhall',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83451',
        city: 'Piding',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83454',
        city: 'Anger',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83457',
        city: 'Bayerisch Gmain',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83458',
        city: 'Schneizlreuth',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83471',
        city: 'Schönau am Königssee',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83471',
        city: 'Berchtesgaden',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83483',
        city: 'Bischofswiesen',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83486',
        city: 'Ramsau',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83487',
        city: 'Marktschellenberg',
        district: '9172',
        state: 'Bayern'
    },
    {
        zip: '83512',
        city: 'Wasserburg am Inn',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83527',
        city: 'Kirchdorf',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '83527',
        city: 'Haag in Oberbayern',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '83530',
        city: 'Schnaitsee',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '83533',
        city: 'Edling',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83536',
        city: 'Gars am Inn',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '83539',
        city: 'Albaching',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83539',
        city: 'Pfaffing',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83543',
        city: 'Rott am Inn',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83547',
        city: 'Babensham',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83549',
        city: 'Eiselfing',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83550',
        city: 'Emmering',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '83553',
        city: 'Frauenneuharting',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '83556',
        city: 'Griesstätt',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83558',
        city: 'Maitenbeth',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '83561',
        city: 'Ramerberg',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83562',
        city: 'Rechtmehring',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '83564',
        city: 'Soyen',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83567',
        city: 'Unterreit',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '83569',
        city: 'Vogtareuth',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83607',
        city: 'Holzkirchen',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83620',
        city: 'Feldkirchen-Westerham',
        district: '9187',
        state: 'Bayern'
    },
    {
        zip: '83623',
        city: 'Dietramszell',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83624',
        city: 'Otterfing',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83626',
        city: 'Valley',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83627',
        city: 'Warngau',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83629',
        city: 'Weyarn',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83646',
        city: 'Bad Tölz',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83646',
        city: 'Wackersberg',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83661',
        city: 'Lenggries',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83666',
        city: 'Waakirchen',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83670',
        city: 'Bad Heilbrunn',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83671',
        city: 'Benediktbeuern',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83673',
        city: 'Bichl',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83674',
        city: 'Gaißach',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83676',
        city: 'Jachenau',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83677',
        city: 'Greiling',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83677',
        city: 'Reichersbeuern',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83679',
        city: 'Sachsenkam',
        district: '9173',
        state: 'Bayern'
    },
    {
        zip: '83684',
        city: 'Tegernsee',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83700',
        city: 'Rottach-Egern',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83703',
        city: 'Gmund am Tegernsee',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83707',
        city: 'Bad Wiessee',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83708',
        city: 'Kreuth',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83714',
        city: 'Miesbach',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83727',
        city: 'Schliersee',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83730',
        city: 'Fischbachau',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83734',
        city: 'Hausham',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83735',
        city: 'Bayrischzell',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '83737',
        city: 'Irschenberg',
        district: '9182',
        state: 'Bayern'
    },
    {
        zip: '84028',
        city: 'Landshut',
        district: '9261',
        state: 'Bayern'
    },
    {
        zip: '84030',
        city: 'Landshut',
        district: '9261',
        state: 'Bayern'
    },
    {
        zip: '84030',
        city: 'Ergolding',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84032',
        city: 'Landshut',
        district: '9261',
        state: 'Bayern'
    },
    {
        zip: '84032',
        city: 'Altdorf',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84034',
        city: 'Landshut',
        district: '9261',
        state: 'Bayern'
    },
    {
        zip: '84036',
        city: 'Landshut',
        district: '9261',
        state: 'Bayern'
    },
    {
        zip: '84036',
        city: 'Kumhausen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84048',
        city: 'Mainburg',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84051',
        city: 'Essenbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84056',
        city: 'Rottenburg an der Laaber',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84061',
        city: 'Ergoldsbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84066',
        city: 'Mallersdorf-Pfaffenberg',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '84069',
        city: 'Schierling',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '84072',
        city: 'Au in der Hallertau',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '84076',
        city: 'Pfeffenhausen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84079',
        city: 'Bruckberg',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84082',
        city: 'Laberweinting',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '84085',
        city: 'Langquaid',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84088',
        city: 'Neufahrn in Niederbayern',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84089',
        city: 'Aiglsbach',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84091',
        city: 'Attenhofen',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84092',
        city: 'Bayerbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84094',
        city: 'Elsendorf',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84095',
        city: 'Furth',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84097',
        city: 'Herrngiersdorf',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84098',
        city: 'Hohenthann',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84100',
        city: 'Niederaichbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84101',
        city: 'Obersüßbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84103',
        city: 'Postau',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84104',
        city: 'Rudelzhausen',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '84106',
        city: 'Volkenschwand',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '84107',
        city: 'Weihmichl',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84109',
        city: 'Wörth an der Isar',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84130',
        city: 'Dingolfing',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84137',
        city: 'Vilsbiburg',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84140',
        city: 'Gangkofen',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84144',
        city: 'Geisenhausen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84149',
        city: 'Velden',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84152',
        city: 'Mengkofen',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84155',
        city: 'Bodenkirchen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84160',
        city: 'Frontenhausen',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84163',
        city: 'Marklkofen',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84164',
        city: 'Moosthenning',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84166',
        city: 'Adlkofen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84168',
        city: 'Aham',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84169',
        city: 'Altfraunhofen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84171',
        city: 'Baierbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84172',
        city: 'Buch am Erlbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84174',
        city: 'Eching',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84175',
        city: 'Schalkham',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84175',
        city: 'Gerzen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84177',
        city: 'Gottfrieding',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84178',
        city: 'Kröning',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84180',
        city: 'Loiching',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84181',
        city: 'Neufraunhofen',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84183',
        city: 'Niederviehbach',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '84184',
        city: 'Tiefenbach',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84186',
        city: 'Vilsheim',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84187',
        city: 'Weng',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84189',
        city: 'Wurmsham',
        district: '9274',
        state: 'Bayern'
    },
    {
        zip: '84307',
        city: 'Eggenfelden',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84323',
        city: 'Massing',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84326',
        city: 'Falkenberg',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84326',
        city: 'Rimbach',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84329',
        city: 'Wurmannsquick',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84332',
        city: 'Hebertsfelden',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84333',
        city: 'Malgersdorf',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84335',
        city: 'Mitterskirchen',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84337',
        city: 'Schönau',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84339',
        city: 'Unterdietfurt',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84347',
        city: 'Pfarrkirchen',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84359',
        city: 'Simbach am Inn',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84364',
        city: 'Bad Birnbach',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84367',
        city: 'Tann',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84367',
        city: 'Reut',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84367',
        city: 'Zeilarn',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84371',
        city: 'Triftern',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84375',
        city: 'Kirchdorf am Inn',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84378',
        city: 'Dietersburg',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84381',
        city: 'Johanniskirchen',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84384',
        city: 'Wittibreut',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84385',
        city: 'Egglham',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84387',
        city: 'Julbach',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84389',
        city: 'Postmünster',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84405',
        city: 'Dorfen',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84416',
        city: 'Taufkirchen (Vils)',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84416',
        city: 'Inning am Holz',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84419',
        city: 'Obertaufkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84419',
        city: 'Schwindegg',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84424',
        city: 'Isen',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84427',
        city: 'Sankt Wolfgang',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84428',
        city: 'Buchbach',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84431',
        city: 'Rattenkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84431',
        city: 'Heldenstein',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84432',
        city: 'Hohenpolding',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84434',
        city: 'Kirchberg',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84435',
        city: 'Lengdorf',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84437',
        city: 'Reichertsheim',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84439',
        city: 'Steinkirchen',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '84453',
        city: 'Mühldorf am Inn',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84478',
        city: 'Waldkraiburg',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84489',
        city: 'Burghausen',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84494',
        city: 'Lohkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84494',
        city: 'Niedertaufkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84494',
        city: 'Neumarkt-Sankt Veit',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84494',
        city: 'Niederbergkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84503',
        city: 'Altötting',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84508',
        city: 'Burgkirchen an der Alz',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84513',
        city: 'Töging am Inn',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84513',
        city: 'Erharting',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84518',
        city: 'Garching an der Alz',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84524',
        city: 'Neuötting',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84529',
        city: 'Tittmoning',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '84533',
        city: 'Stammham',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84533',
        city: 'Marktl',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84533',
        city: 'Haiming',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84539',
        city: 'Ampfing',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84539',
        city: 'Zangberg',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84543',
        city: 'Winhöring',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84544',
        city: 'Aschau am Inn',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84546',
        city: 'Egglkofen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84547',
        city: 'Emmerting',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84549',
        city: 'Engelsberg',
        district: '9189',
        state: 'Bayern'
    },
    {
        zip: '84550',
        city: 'Feichten an der Alz',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84552',
        city: 'Geratskirchen',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '84555',
        city: 'Jettenbach',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84556',
        city: 'Kastl',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84558',
        city: 'Halsbach',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84558',
        city: 'Tyrlaching',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84558',
        city: 'Kirchweidach',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84559',
        city: 'Kraiburg am Inn',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84561',
        city: 'Mehring',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84562',
        city: 'Mettenheim',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84564',
        city: 'Oberbergkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84565',
        city: 'Oberneukirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84567',
        city: 'Perach',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84567',
        city: 'Erlbach',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84568',
        city: 'Pleiskirchen',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84570',
        city: 'Polling',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84571',
        city: 'Reischach',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84573',
        city: 'Schönberg',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84574',
        city: 'Taufkirchen',
        district: '9183',
        state: 'Bayern'
    },
    {
        zip: '84576',
        city: 'Teising',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84577',
        city: 'Tüßling',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '84579',
        city: 'Unterneukirchen',
        district: '9171',
        state: 'Bayern'
    },
    {
        zip: '85049',
        city: 'Ingolstadt',
        district: '9161',
        state: 'Bayern'
    },
    {
        zip: '85051',
        city: 'Ingolstadt',
        district: '9161',
        state: 'Bayern'
    },
    {
        zip: '85053',
        city: 'Ingolstadt',
        district: '9161',
        state: 'Bayern'
    },
    {
        zip: '85055',
        city: 'Ingolstadt',
        district: '9161',
        state: 'Bayern'
    },
    {
        zip: '85057',
        city: 'Ingolstadt',
        district: '9161',
        state: 'Bayern'
    },
    {
        zip: '85072',
        city: 'Eichstätt',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85077',
        city: 'Manching',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85080',
        city: 'Gaimersheim',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85084',
        city: 'Reichertshofen',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85088',
        city: 'Vohburg an der Donau',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85092',
        city: 'Kösching',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85095',
        city: 'Denkendorf',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85098',
        city: 'Großmehring',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85101',
        city: 'Lenting',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85104',
        city: 'Pförring',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85107',
        city: 'Baar-Ebenhausen',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85110',
        city: 'Kipfenberg',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85111',
        city: 'Adelschlag',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85113',
        city: 'Böhmfeld',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85114',
        city: 'Buxheim',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85116',
        city: 'Egweil',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85117',
        city: 'Eitensheim',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85119',
        city: 'Ernsgaden',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85120',
        city: 'Hepberg',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85122',
        city: 'Hitzhofen',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85123',
        city: 'Karlskron',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '85125',
        city: 'Kinding',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85126',
        city: 'Münchsmünster',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85128',
        city: 'Nassenfels',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85129',
        city: 'Oberdolling',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85131',
        city: 'Pollenfeld',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85132',
        city: 'Schernfeld',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85134',
        city: 'Stammham',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85135',
        city: 'Titting',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85137',
        city: 'Walting',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85139',
        city: 'Wettstetten',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '85221',
        city: 'Dachau',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85229',
        city: 'Markt Indersdorf',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85232',
        city: 'Bergkirchen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85235',
        city: 'Odelzhausen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85235',
        city: 'Pfaffenhofen an der Glonn',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85238',
        city: 'Petershausen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85241',
        city: 'Hebertshausen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85244',
        city: 'Röhrmoos',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85247',
        city: 'Schwabhausen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85250',
        city: 'Altomünster',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85253',
        city: 'Erdweg',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85254',
        city: 'Sulzemoos',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85256',
        city: 'Vierkirchen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85258',
        city: 'Weichs',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85276',
        city: 'Hettenshausen',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85276',
        city: 'Pfaffenhofen an der Ilm',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85283',
        city: 'Wolnzach',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85290',
        city: 'Geisenfeld',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85293',
        city: 'Reichertshausen',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85296',
        city: 'Rohrbach',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85298',
        city: 'Scheyern',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85301',
        city: 'Schweitenkirchen',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85302',
        city: 'Gerolsbach',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85304',
        city: 'Ilmmünster',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85305',
        city: 'Jetzendorf',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85307',
        city: 'Paunzhausen',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85309',
        city: 'Pörnbach',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '85354',
        city: 'Freising',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85356',
        city: 'Freising',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85368',
        city: 'Wang',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85368',
        city: 'Moosburg',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85375',
        city: 'Neufahrn bei Freising',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85386',
        city: 'Eching',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85391',
        city: 'Allershausen',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85395',
        city: 'Attenkirchen',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85395',
        city: 'Wolfersdorf',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85399',
        city: 'Hallbergmoos',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85402',
        city: 'Kranzberg',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85405',
        city: 'Nandlstadt',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85406',
        city: 'Zolling',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85408',
        city: 'Gammelsdorf',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85410',
        city: 'Haag an der Amper',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85411',
        city: 'Hohenkammer',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85413',
        city: 'Hörgertshausen',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85414',
        city: 'Kirchdorf an der Amper',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85416',
        city: 'Langenbach',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85417',
        city: 'Marzling',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85419',
        city: 'Mauern',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85435',
        city: 'Erding',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85445',
        city: 'Oberding',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85447',
        city: 'Fraunberg',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85452',
        city: 'Moosinning',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85456',
        city: 'Wartenberg',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85457',
        city: 'Wörth',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85459',
        city: 'Berglern',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85461',
        city: 'Bockhorn',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85462',
        city: 'Eitting',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85464',
        city: 'Finsing',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85465',
        city: 'Langenpreising',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85467',
        city: 'Neuching',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85469',
        city: 'Walpertskirchen',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85521',
        city: 'Ottobrunn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85540',
        city: 'Haar',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85551',
        city: 'Kirchheim bei München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85560',
        city: 'Ebersberg',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85567',
        city: 'Bruck',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85567',
        city: 'Grafing bei München',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85570',
        city: 'Markt Schwaben',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85570',
        city: 'Ottenhofen',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85579',
        city: 'Neubiberg',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85586',
        city: 'Poing',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85591',
        city: 'Vaterstetten',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85604',
        city: 'Zorneding',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85609',
        city: 'Aschheim',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85614',
        city: 'Kirchseeon',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85617',
        city: 'Aßling',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85622',
        city: 'Feldkirchen',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85625',
        city: 'Baiern',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85625',
        city: 'Glonn',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85630',
        city: 'Grasbrunn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85635',
        city: 'Höhenkirchen-Siegertsbrunn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85640',
        city: 'Putzbrunn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85643',
        city: 'Steinhöring',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85646',
        city: 'Anzing',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85649',
        city: 'Brunnthal',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85652',
        city: 'Pliening',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85653',
        city: 'Aying',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85656',
        city: 'Buch am Buchrain',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85658',
        city: 'Egmating',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85659',
        city: 'Forstern',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85661',
        city: 'Forstinning',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85662',
        city: 'Hohenbrunn',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85664',
        city: 'Hohenlinden',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85665',
        city: 'Moosach',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85667',
        city: 'Oberpframmern',
        district: '9175',
        state: 'Bayern'
    },
    {
        zip: '85669',
        city: 'Pastetten',
        district: '9177',
        state: 'Bayern'
    },
    {
        zip: '85716',
        city: 'Unterschleißheim',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85737',
        city: 'Ismaning',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85748',
        city: 'Garching bei München',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85757',
        city: 'Karlsfeld',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '85764',
        city: 'Oberschleißheim',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85774',
        city: 'Unterföhring',
        district: '9184',
        state: 'Bayern'
    },
    {
        zip: '85777',
        city: 'Fahrenzhausen',
        district: '9178',
        state: 'Bayern'
    },
    {
        zip: '85778',
        city: 'Haimhausen',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '86150',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86152',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86153',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86154',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86156',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86157',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86159',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86161',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86163',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86165',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86167',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86169',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86179',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86199',
        city: 'Augsburg',
        district: '9761',
        state: 'Bayern'
    },
    {
        zip: '86316',
        city: 'Friedberg',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86343',
        city: 'Königsbrunn',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86356',
        city: 'Neusäß',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86368',
        city: 'Gersthofen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86381',
        city: 'Krumbach',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86391',
        city: 'Stadtbergen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86399',
        city: 'Bobingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86405',
        city: 'Meitingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86415',
        city: 'Mering',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86420',
        city: 'Diedorf',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86424',
        city: 'Dinkelscherben',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86438',
        city: 'Kissing',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86441',
        city: 'Zusmarshausen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86444',
        city: 'Affing',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86447',
        city: 'Aindling',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86447',
        city: 'Todtenweis',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86450',
        city: 'Altenmünster',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86453',
        city: 'Dasing',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86456',
        city: 'Gablingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86459',
        city: 'Gessertshausen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86462',
        city: 'Langweid am Lech',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86465',
        city: 'Heretsried',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86465',
        city: 'Welden',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86470',
        city: 'Thannhausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86473',
        city: 'Ziemetshausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86476',
        city: 'Neuburg an der Kammel',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86477',
        city: 'Adelsried',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86479',
        city: 'Aichen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86480',
        city: 'Aletshausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86480',
        city: 'Waltenhausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86482',
        city: 'Aystetten',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86483',
        city: 'Balzhausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86485',
        city: 'Biberbach',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86486',
        city: 'Bonstetten',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86488',
        city: 'Breitenthal',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86489',
        city: 'Deisenhausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86491',
        city: 'Ebershausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86492',
        city: 'Egling an der Paar',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86494',
        city: 'Emersacker',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86495',
        city: 'Eurasburg',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86497',
        city: 'Horgau',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86498',
        city: 'Kettershausen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86500',
        city: 'Kutzenhausen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86502',
        city: 'Laugna',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '86504',
        city: 'Merching',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86505',
        city: 'Münsterhausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86507',
        city: 'Oberottmarshausen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86507',
        city: 'Kleinaitingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86508',
        city: 'Rehling',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86510',
        city: 'Ried',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86511',
        city: 'Schmiechen',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86513',
        city: 'Ursberg',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86514',
        city: 'Ustersbach',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86517',
        city: 'Wehringen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86519',
        city: 'Wiesenbach',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '86529',
        city: 'Schrobenhausen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86551',
        city: 'Aichach',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86554',
        city: 'Pöttmes',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86556',
        city: 'Kühbach',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86558',
        city: 'Hohenwart',
        district: '9186',
        state: 'Bayern'
    },
    {
        zip: '86559',
        city: 'Adelzhausen',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86561',
        city: 'Aresing',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86562',
        city: 'Berg im Gau',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86564',
        city: 'Brunnen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86565',
        city: 'Gachenbach',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86567',
        city: 'Hilgertshausen-Tandern',
        district: '9174',
        state: 'Bayern'
    },
    {
        zip: '86568',
        city: 'Hollenbach',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86570',
        city: 'Inchenhofen',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86571',
        city: 'Langenmosen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86573',
        city: 'Obergriesbach',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86574',
        city: 'Petersdorf',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86576',
        city: 'Schiltberg',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86577',
        city: 'Sielenbach',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86579',
        city: 'Waidhofen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86609',
        city: 'Donauwörth',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86633',
        city: 'Neuburg an der Donau',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86637',
        city: 'Wertingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '86641',
        city: 'Rain',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86643',
        city: 'Rennertshofen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86647',
        city: 'Buttenwiesen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '86650',
        city: 'Wemding',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86653',
        city: 'Monheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86653',
        city: 'Daiting',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86655',
        city: 'Harburg',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86657',
        city: 'Bissingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '86660',
        city: 'Tapfheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86663',
        city: 'Asbach-Bäumenheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86666',
        city: 'Burgheim',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86668',
        city: 'Karlshuld',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86669',
        city: 'Königsmoos',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86672',
        city: 'Baar',
        district: '9771',
        state: 'Bayern'
    },
    {
        zip: '86672',
        city: 'Thierhaupten',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86673',
        city: 'Bergheim',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86675',
        city: 'Buchdorf',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86676',
        city: 'Ehekirchen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86678',
        city: 'Ehingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86679',
        city: 'Ellgau',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86681',
        city: 'Fünfstetten',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86682',
        city: 'Genderkingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86684',
        city: 'Holzheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86685',
        city: 'Huisheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86687',
        city: 'Kaisheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86688',
        city: 'Marxheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86690',
        city: 'Mertingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86692',
        city: 'Münster',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86694',
        city: 'Niederschönenfeld',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86695',
        city: 'Allmannshofen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86695',
        city: 'Nordendorf',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86697',
        city: 'Oberhausen',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86698',
        city: 'Oberndorf am Lech',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86700',
        city: 'Otting',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86701',
        city: 'Rohrenfels',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86703',
        city: 'Rögling',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86704',
        city: 'Tagmersheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86706',
        city: 'Weichering',
        district: '9185',
        state: 'Bayern'
    },
    {
        zip: '86707',
        city: 'Kühlenthal',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86707',
        city: 'Westendorf',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86709',
        city: 'Wolferstadt',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86720',
        city: 'Nördlingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86732',
        city: 'Oettingen in Bayern',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86733',
        city: 'Alerheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86735',
        city: 'Forheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86735',
        city: 'Amerdingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86736',
        city: 'Auhausen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86738',
        city: 'Deiningen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86739',
        city: 'Ederheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86741',
        city: 'Ehingen am Ries',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86742',
        city: 'Fremdingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86744',
        city: 'Hainsfarth',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86745',
        city: 'Hohenaltheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86747',
        city: 'Maihingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86748',
        city: 'Marktoffingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86750',
        city: 'Megesheim',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86751',
        city: 'Mönchsdeggingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86753',
        city: 'Möttingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86754',
        city: 'Munningen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86756',
        city: 'Reimlingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86757',
        city: 'Wallerstein',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86759',
        city: 'Wechingen',
        district: '9779',
        state: 'Bayern'
    },
    {
        zip: '86807',
        city: 'Buchloe',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '86825',
        city: 'Bad Wörishofen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86830',
        city: 'Schwabmünchen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86833',
        city: 'Ettringen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86836',
        city: 'Untermeitingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86836',
        city: 'Graben',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86836',
        city: 'Klosterlechfeld',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86836',
        city: 'Obermeitingen',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86842',
        city: 'Türkheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86845',
        city: 'Großaitingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86850',
        city: 'Fischach',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86853',
        city: 'Langerringen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86854',
        city: 'Amberg',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86856',
        city: 'Hiltenfingen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86857',
        city: 'Hurlach',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86859',
        city: 'Igling',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86860',
        city: 'Jengen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '86862',
        city: 'Lamerdingen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '86863',
        city: 'Langenneufnach',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86865',
        city: 'Markt Wald',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86866',
        city: 'Mickhausen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86868',
        city: 'Mittelneufnach',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86869',
        city: 'Oberostendorf',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '86871',
        city: 'Rammingen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86872',
        city: 'Scherstetten',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86874',
        city: 'Tussenhausen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86875',
        city: 'Waal',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '86877',
        city: 'Walkertshofen',
        district: '9772',
        state: 'Bayern'
    },
    {
        zip: '86879',
        city: 'Wiedergeltingen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '86899',
        city: 'Landsberg am Lech',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86911',
        city: 'Dießen am Ammersee',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86916',
        city: 'Kaufering',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86919',
        city: 'Utting am Ammersee',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86920',
        city: 'Denklingen',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86922',
        city: 'Eresing',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86923',
        city: 'Finning',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86925',
        city: 'Fuchstal',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86926',
        city: 'Greifenberg',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86928',
        city: 'Hofstetten',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86929',
        city: 'Penzing',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86931',
        city: 'Prittriching',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86932',
        city: 'Pürgen',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86934',
        city: 'Reichling',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86935',
        city: 'Rott',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86937',
        city: 'Scheuring',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86938',
        city: 'Schondorf am Ammersee',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86940',
        city: 'Schwifting',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86943',
        city: 'Thaining',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86944',
        city: 'Unterdießen',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86946',
        city: 'Vilgertshofen',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86947',
        city: 'Weil',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86949',
        city: 'Windach',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86956',
        city: 'Schongau',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86971',
        city: 'Peiting',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86972',
        city: 'Altenstadt',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86974',
        city: 'Apfeldorf',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86975',
        city: 'Bernbeuren',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86977',
        city: 'Burggen',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86978',
        city: 'Hohenfurch',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86980',
        city: 'Ingenried',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86981',
        city: 'Kinsau',
        district: '9181',
        state: 'Bayern'
    },
    {
        zip: '86983',
        city: 'Lechbruck',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '86984',
        city: 'Prem',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86986',
        city: 'Schwabbruck',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86987',
        city: 'Schwabsoien',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '86989',
        city: 'Steingaden',
        district: '9190',
        state: 'Bayern'
    },
    {
        zip: '87435',
        city: 'Kempten',
        district: '9763',
        state: 'Bayern'
    },
    {
        zip: '87437',
        city: 'Kempten',
        district: '9763',
        state: 'Bayern'
    },
    {
        zip: '87439',
        city: 'Kempten',
        district: '9763',
        state: 'Bayern'
    },
    {
        zip: '87448',
        city: 'Waltenhofen',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87452',
        city: 'Altusried',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87459',
        city: 'Pfronten',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87463',
        city: 'Dietmannsried',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87466',
        city: 'Oy-Mittelberg',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87471',
        city: 'Durach',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87474',
        city: 'Buchenberg',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87477',
        city: 'Sulzberg',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87480',
        city: 'Weitnau',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87484',
        city: 'Nesselwang',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87487',
        city: 'Wiggensbach',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87488',
        city: 'Betzigau',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87490',
        city: 'Haldenwang',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87493',
        city: 'Lauben',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87494',
        city: 'Rückholz',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87496',
        city: 'Untrasried',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87497',
        city: 'Wertach',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87499',
        city: 'Wildpoldsried',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87509',
        city: 'Immenstadt im Allgäu',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87527',
        city: 'Sonthofen',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87527',
        city: 'Ofterschwang',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87534',
        city: 'Oberstaufen',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87538',
        city: 'Bolsterlang',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87538',
        city: 'Obermaiselstein',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87538',
        city: 'Balderschwang',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87538',
        city: 'Fischen im Allgäu',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87541',
        city: 'Bad Hindelang',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87544',
        city: 'Blaichach',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87545',
        city: 'Burgberg im Allgäu',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87547',
        city: 'Missen-Wilhams',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87549',
        city: 'Rettenberg',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87561',
        city: 'Oberstdorf',
        district: '9780',
        state: 'Bayern'
    },
    {
        zip: '87600',
        city: 'Kaufbeuren',
        district: '9762',
        state: 'Bayern'
    },
    {
        zip: '87616',
        city: 'Marktoberdorf',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87616',
        city: 'Wald',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87629',
        city: 'Füssen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87634',
        city: 'Günzach',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87634',
        city: 'Obergünzburg',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87637',
        city: 'Seeg',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87637',
        city: 'Eisenberg',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87640',
        city: 'Biessenhofen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87642',
        city: 'Halblech',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87645',
        city: 'Schwangau',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87647',
        city: 'Kraftisried',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87647',
        city: 'Unterthingau',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87648',
        city: 'Aitrang',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87650',
        city: 'Baisweil',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87651',
        city: 'Bidingen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87653',
        city: 'Eggenthal',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87654',
        city: 'Friesenried',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87656',
        city: 'Germaringen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87657',
        city: 'Görisried',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87659',
        city: 'Hopferau',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87660',
        city: 'Irsee',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87662',
        city: 'Kaltental',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87662',
        city: 'Osterzell',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87663',
        city: 'Lengenwang',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87665',
        city: 'Mauerstetten',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87666',
        city: 'Pforzen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87668',
        city: 'Rieden',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87669',
        city: 'Rieden am Forggensee',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87671',
        city: 'Ronsberg',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87672',
        city: 'Roßhaupten',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87674',
        city: 'Ruderatshofen',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87675',
        city: 'Stötten am Auerberg',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87675',
        city: 'Rettenbach am Auerberg',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87677',
        city: 'Stöttwang',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87679',
        city: 'Westendorf',
        district: '9777',
        state: 'Bayern'
    },
    {
        zip: '87700',
        city: 'Memmingen',
        district: '9764',
        state: 'Bayern'
    },
    {
        zip: '87719',
        city: 'Mindelheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87724',
        city: 'Ottobeuren',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87727',
        city: 'Babenhausen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87730',
        city: 'Bad Grönenbach',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87733',
        city: 'Markt Rettenbach',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87734',
        city: 'Benningen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87736',
        city: 'Böhen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87737',
        city: 'Boos',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87739',
        city: 'Breitenbrunn',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87740',
        city: 'Buxheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87742',
        city: 'Apfeltrach',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87742',
        city: 'Dirlewang',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87743',
        city: 'Egg an der Günz',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87745',
        city: 'Eppishausen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87746',
        city: 'Erkheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87748',
        city: 'Fellheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87749',
        city: 'Hawangen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87751',
        city: 'Heimertingen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87752',
        city: 'Holzgünz',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87754',
        city: 'Kammlach',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87755',
        city: 'Kirchhaslach',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87757',
        city: 'Kirchheim in Schwaben',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87758',
        city: 'Kronburg',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87760',
        city: 'Lachen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87761',
        city: 'Lauben',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87763',
        city: 'Lautrach',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87764',
        city: 'Legau',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87766',
        city: 'Memmingerberg',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87767',
        city: 'Niederrieden',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87769',
        city: 'Oberrieden',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87770',
        city: 'Oberschönegg',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87772',
        city: 'Pfaffenhausen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87773',
        city: 'Pleß',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87775',
        city: 'Salgen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87776',
        city: 'Sontheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87778',
        city: 'Stetten',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87779',
        city: 'Trunkelsberg',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87781',
        city: 'Ungerhausen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87782',
        city: 'Unteregg',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87784',
        city: 'Westerheim',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87785',
        city: 'Winterrieden',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87787',
        city: 'Wolfertschwenden',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '87789',
        city: 'Woringen',
        district: '9778',
        state: 'Bayern'
    },
    {
        zip: '88045',
        city: 'Friedrichshafen',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88046',
        city: 'Friedrichshafen',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88048',
        city: 'Friedrichshafen',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88069',
        city: 'Tettnang',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88074',
        city: 'Meckenbeuren',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88079',
        city: 'Kressbronn am Bodensee',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88085',
        city: 'Langenargen',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88090',
        city: 'Immenstaad am Bodensee',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88094',
        city: 'Oberteuringen',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88097',
        city: 'Eriskirch',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88099',
        city: 'Neukirch',
        district: '8435',
        state: '8;Baden-Württemberg'
    },
    {
        zip: '88131',
        city: 'Bodolz',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88131',
        city: 'Lindau (Bodensee)',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88138',
        city: 'Weißensberg',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88138',
        city: 'Hergensweiler',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88138',
        city: 'Sigmarszell',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88142',
        city: 'Wasserburg (Bodensee)',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88145',
        city: 'Opfenbach',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88145',
        city: 'Hergatz',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88149',
        city: 'Nonnenhorn',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88161',
        city: 'Lindenberg im Allgäu',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88167',
        city: 'Gestratz',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88167',
        city: 'Maierhöfen',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88167',
        city: 'Röthenbach (Allgäu)',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88167',
        city: 'Stiefenhofen',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88167',
        city: 'Grünenbach',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88171',
        city: 'Weiler-Simmerberg',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88175',
        city: 'Scheidegg',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88178',
        city: 'Heimenkirch',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '88179',
        city: 'Oberreute',
        district: '9776',
        state: 'Bayern'
    },
    {
        zip: '89231',
        city: 'Neu-Ulm',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89233',
        city: 'Neu-Ulm',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89250',
        city: 'Senden',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89257',
        city: 'Illertissen',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89264',
        city: 'Weißenhorn',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89269',
        city: 'Vöhringen',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89275',
        city: 'Elchingen',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89278',
        city: 'Nersingen',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89281',
        city: 'Altenstadt',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89284',
        city: 'Pfaffenhofen an der Roth',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89287',
        city: 'Bellenberg',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89290',
        city: 'Buch',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89291',
        city: 'Holzheim',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89293',
        city: 'Kellmünz',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89294',
        city: 'Oberroth',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89296',
        city: 'Osterberg',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89297',
        city: 'Roggenburg',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89299',
        city: 'Unterroth',
        district: '9775',
        state: 'Bayern'
    },
    {
        zip: '89312',
        city: 'Günzburg',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89331',
        city: 'Burgau',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89335',
        city: 'Ichenhausen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89340',
        city: 'Leipheim',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89343',
        city: 'Jettingen-Scheppach',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89344',
        city: 'Aislingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89346',
        city: 'Bibertal',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89347',
        city: 'Bubesheim',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89349',
        city: 'Burtenbach',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89350',
        city: 'Dürrlauingen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89352',
        city: 'Ellzee',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89353',
        city: 'Glött',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89355',
        city: 'Gundremmingen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89356',
        city: 'Haldenwang',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89358',
        city: 'Kammeltal',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89359',
        city: 'Kötz',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89361',
        city: 'Landensberg',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89362',
        city: 'Offingen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89364',
        city: 'Rettenbach',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89365',
        city: 'Röfingen',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89367',
        city: 'Waldstetten',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89368',
        city: 'Winterbach',
        district: '9774',
        state: 'Bayern'
    },
    {
        zip: '89407',
        city: 'Dillingen an der Donau',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89415',
        city: 'Lauingen (Donau)',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89420',
        city: 'Höchstädt an der Donau',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89423',
        city: 'Gundelfingen an der Donau',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89426',
        city: 'Mödingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89426',
        city: 'Wittislingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89428',
        city: 'Syrgenstein',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89429',
        city: 'Bachhagel',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89431',
        city: 'Bächingen an der Brenz',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89432',
        city: 'Binswangen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89434',
        city: 'Blindheim',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89435',
        city: 'Finningen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89437',
        city: 'Haunsheim',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89438',
        city: 'Holzheim',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89440',
        city: 'Lutzingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89441',
        city: 'Medlingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89443',
        city: 'Schwenningen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89444',
        city: 'Villenbach',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89446',
        city: 'Ziertheim',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89447',
        city: 'Zöschingen',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '89449',
        city: 'Zusamaltheim',
        district: '9773',
        state: 'Bayern'
    },
    {
        zip: '90402',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90403',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90408',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90409',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90411',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90419',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90425',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90427',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90429',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90431',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90439',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90441',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90443',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90449',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90451',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90453',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90455',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90459',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90461',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90469',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90471',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90473',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90475',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90478',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90480',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90482',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90489',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90491',
        city: 'Nürnberg',
        district: '9564',
        state: 'Bayern'
    },
    {
        zip: '90513',
        city: 'Zirndorf',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90518',
        city: 'Altdorf',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90522',
        city: 'Oberasbach',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90530',
        city: 'Wendelstein',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '90537',
        city: 'Feucht',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90542',
        city: 'Eckental',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '90547',
        city: 'Stein bei Nürnberg',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90552',
        city: 'Röthenbach an der Pegnitz',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90556',
        city: 'Cadolzburg',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90556',
        city: 'Seukendorf',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90559',
        city: 'Burgthann',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90562',
        city: 'Heroldsberg',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '90562',
        city: 'Kalchreuth',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '90571',
        city: 'Schwaig',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90574',
        city: 'Roßtal',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90579',
        city: 'Langenzenn',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90584',
        city: 'Allersberg',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '90587',
        city: 'Tuchenbach',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90587',
        city: 'Veitsbronn',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90587',
        city: 'Obermichelbach',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90592',
        city: 'Schwarzenbruck',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90596',
        city: 'Schwanstetten',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '90599',
        city: 'Dietenhofen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '90602',
        city: 'Pyrbaum',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '90607',
        city: 'Rückersdorf',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90610',
        city: 'Winkelhaid',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '90613',
        city: 'Großhabersdorf',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90614',
        city: 'Ammerndorf',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90616',
        city: 'Neuhof an der Zenn',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '90617',
        city: 'Puschendorf',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '90619',
        city: 'Trautskirchen',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '90762',
        city: 'Fürth',
        district: '9563',
        state: 'Bayern'
    },
    {
        zip: '90763',
        city: 'Fürth',
        district: '9563',
        state: 'Bayern'
    },
    {
        zip: '90765',
        city: 'Fürth',
        district: '9563',
        state: 'Bayern'
    },
    {
        zip: '90766',
        city: 'Fürth',
        district: '9563',
        state: 'Bayern'
    },
    {
        zip: '90768',
        city: 'Fürth',
        district: '9563',
        state: 'Bayern'
    },
    {
        zip: '91052',
        city: 'Erlangen',
        district: '9562',
        state: 'Bayern'
    },
    {
        zip: '91054',
        city: 'Erlangen',
        district: '9562',
        state: 'Bayern'
    },
    {
        zip: '91054',
        city: 'Buckenhof',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91056',
        city: 'Erlangen',
        district: '9562',
        state: 'Bayern'
    },
    {
        zip: '91058',
        city: 'Erlangen',
        district: '9562',
        state: 'Bayern'
    },
    {
        zip: '91074',
        city: 'Herzogenaurach',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91077',
        city: 'Hetzles',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91077',
        city: 'Neunkirchen am Brand',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91077',
        city: 'Dormitz',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91077',
        city: 'Kleinsendelbach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91080',
        city: 'Spardorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91080',
        city: 'Uttenreuth',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91080',
        city: 'Marloffstein',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91083',
        city: 'Baiersdorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91085',
        city: 'Weisendorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91086',
        city: 'Aurachtal',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91088',
        city: 'Bubenreuth',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91090',
        city: 'Effeltrich',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91091',
        city: 'Großenseebach',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91093',
        city: 'Heßdorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91094',
        city: 'Langensendelbach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91096',
        city: 'Möhrendorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91097',
        city: 'Oberreichenbach',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91099',
        city: 'Poxdorf',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91126',
        city: 'Schwabach',
        district: '9565',
        state: 'Bayern'
    },
    {
        zip: '91126',
        city: 'Kammerstein',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91126',
        city: 'Rednitzhembach',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91154',
        city: 'Roth',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91161',
        city: 'Hilpoltstein',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91166',
        city: 'Georgensgmünd',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91171',
        city: 'Greding',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91174',
        city: 'Spalt',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91177',
        city: 'Thalmässing',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91180',
        city: 'Heideck',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91183',
        city: 'Abenberg',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91186',
        city: 'Büchenbach',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91187',
        city: 'Röttenbach',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91189',
        city: 'Rohr',
        district: '9576',
        state: 'Bayern'
    },
    {
        zip: '91207',
        city: 'Lauf an der Pegnitz',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91217',
        city: 'Hersbruck',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91220',
        city: 'Schnaittach',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91224',
        city: 'Pommelsbrunn',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91227',
        city: 'Leinburg',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91230',
        city: 'Happurg',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91233',
        city: 'Neunkirchen am Sand',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91235',
        city: 'Hartenstein',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91235',
        city: 'Velden',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91236',
        city: 'Alfeld',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91238',
        city: 'Engelthal',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91238',
        city: 'Offenhausen',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91239',
        city: 'Henfenfeld',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91241',
        city: 'Kirchensittenbach',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91242',
        city: 'Ottensoos',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91244',
        city: 'Reichenschwand',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91245',
        city: 'Simmelsdorf',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91247',
        city: 'Vorra',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91249',
        city: 'Weigendorf',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '91257',
        city: 'Pegnitz',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91275',
        city: 'Auerbach in der Oberpfalz',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '91278',
        city: 'Pottenstein',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91281',
        city: 'Kirchenthumbach',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '91282',
        city: 'Betzenstein',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91284',
        city: 'Neuhaus an der Pegnitz',
        district: '9574',
        state: 'Bayern'
    },
    {
        zip: '91286',
        city: 'Obertrubach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91287',
        city: 'Plech',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91289',
        city: 'Schnabelwaid',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91301',
        city: 'Forchheim',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91315',
        city: 'Höchstadt an der Aisch',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91320',
        city: 'Ebermannstadt',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91322',
        city: 'Gräfenberg',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91325',
        city: 'Adelsdorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91327',
        city: 'Gößweinstein',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91330',
        city: 'Eggolsheim',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91332',
        city: 'Heiligenstadt',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '91334',
        city: 'Hemhofen',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91336',
        city: 'Heroldsbach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91338',
        city: 'Igensdorf',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91341',
        city: 'Röttenbach',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91344',
        city: 'Waischenfeld',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91346',
        city: 'Wiesenttal',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91347',
        city: 'Aufseß',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '91349',
        city: 'Egloffstein',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91350',
        city: 'Gremsdorf',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91352',
        city: 'Hallerndorf',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91353',
        city: 'Hausen',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91355',
        city: 'Hiltpoltstein',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91356',
        city: 'Kirchehrenbach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91358',
        city: 'Kunreuth',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91359',
        city: 'Leutenbach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91361',
        city: 'Pinzberg',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91362',
        city: 'Pretzfeld',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91364',
        city: 'Unterleinleiter',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91365',
        city: 'Weilersbach',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91367',
        city: 'Weißenohe',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91369',
        city: 'Wiesenthau',
        district: '9474',
        state: 'Bayern'
    },
    {
        zip: '91413',
        city: 'Neustadt an der Aisch',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91438',
        city: 'Bad Windsheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91443',
        city: 'Scheinfeld',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91448',
        city: 'Emskirchen',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91452',
        city: 'Wilhermsdorf',
        district: '9573',
        state: 'Bayern'
    },
    {
        zip: '91456',
        city: 'Diespeck',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91459',
        city: 'Markt Erlbach',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91460',
        city: 'Baudenbach',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91462',
        city: 'Dachsbach',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91463',
        city: 'Dietersheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91465',
        city: 'Ergersheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91466',
        city: 'Gerhardshofen',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91468',
        city: 'Gutenstetten',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91469',
        city: 'Hagenbüchach',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91471',
        city: 'Illesheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91472',
        city: 'Ipsheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91474',
        city: 'Langenfeld',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91475',
        city: 'Lonnerstadt',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91477',
        city: 'Markt Bibart',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91478',
        city: 'Markt Nordheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91480',
        city: 'Markt Taschendorf',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91481',
        city: 'Münchsteinach',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91483',
        city: 'Oberscheinfeld',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91484',
        city: 'Sugenheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91486',
        city: 'Uehlfeld',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91487',
        city: 'Vestenbergsgreuth',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '91489',
        city: 'Wilhelmsdorf',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91522',
        city: 'Ansbach',
        district: '9561',
        state: 'Bayern'
    },
    {
        zip: '91541',
        city: 'Rothenburg ob der Tauber',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91550',
        city: 'Dinkelsbühl',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91555',
        city: 'Feuchtwangen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91560',
        city: 'Heilsbronn',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91564',
        city: 'Neuendettelsau',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91567',
        city: 'Herrieden',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91572',
        city: 'Bechhofen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91575',
        city: 'Windsbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91578',
        city: 'Leutershausen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91580',
        city: 'Petersaurach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91583',
        city: 'Schillingsfürst',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91583',
        city: 'Diebach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91586',
        city: 'Lichtenau',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91587',
        city: 'Adelshofen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91589',
        city: 'Aurach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91590',
        city: 'Bruckberg',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91592',
        city: 'Buch am Wald',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91593',
        city: 'Burgbernheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91595',
        city: 'Burgoberbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91596',
        city: 'Burk',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91598',
        city: 'Colmberg',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91599',
        city: 'Dentlein am Forst',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91601',
        city: 'Dombühl',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91602',
        city: 'Dürrwangen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91604',
        city: 'Flachslanden',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91605',
        city: 'Gallmersgarten',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91607',
        city: 'Gebsattel',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91608',
        city: 'Geslau',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91610',
        city: 'Insingen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91611',
        city: 'Lehrberg',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91613',
        city: 'Marktbergel',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91614',
        city: 'Mönchsroth',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91616',
        city: 'Neusitz',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91617',
        city: 'Oberdachstetten',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91619',
        city: 'Obernzenn',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '91620',
        city: 'Ohrenbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91622',
        city: 'Rügland',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91623',
        city: 'Sachsen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91625',
        city: 'Schnelldorf',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91626',
        city: 'Schopfloch',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91628',
        city: 'Steinsfeld',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91629',
        city: 'Weihenzell',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91631',
        city: 'Wettringen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91632',
        city: 'Wieseth',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91634',
        city: 'Wilburgstetten',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91635',
        city: 'Windelsbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91637',
        city: 'Wörnitz',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91639',
        city: 'Wolframs-Eschenbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91710',
        city: 'Gunzenhausen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91717',
        city: 'Wassertrüdingen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91719',
        city: 'Heidenheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91720',
        city: 'Absberg',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91722',
        city: 'Arberg',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91723',
        city: 'Dittenheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91725',
        city: 'Ehingen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91726',
        city: 'Gerolfingen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91728',
        city: 'Gnotzheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91729',
        city: 'Haundorf',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91731',
        city: 'Langfurth',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91732',
        city: 'Merkendorf',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91734',
        city: 'Mitteleschenbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91735',
        city: 'Muhr am See',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91737',
        city: 'Ornbau',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91738',
        city: 'Pfofeld',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91740',
        city: 'Röckingen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91741',
        city: 'Theilenhofen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91743',
        city: 'Unterschwaningen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91744',
        city: 'Weiltingen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91746',
        city: 'Weidenbach',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91747',
        city: 'Westheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91749',
        city: 'Wittelshofen',
        district: '9571',
        state: 'Bayern'
    },
    {
        zip: '91757',
        city: 'Treuchtlingen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91781',
        city: 'Weißenburg in Bayern',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91785',
        city: 'Pleinfeld',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91788',
        city: 'Pappenheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91790',
        city: 'Burgsalach',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91790',
        city: 'Raitenbuch',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91790',
        city: 'Bergen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91790',
        city: 'Nennslingen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91792',
        city: 'Ellingen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91793',
        city: 'Alesheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91795',
        city: 'Dollnstein',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '91796',
        city: 'Ettenstatt',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91798',
        city: 'Höttingen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91799',
        city: 'Langenaltheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91801',
        city: 'Markt Berolzheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91802',
        city: 'Meinheim',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91804',
        city: 'Mörnsheim',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '91805',
        city: 'Polsingen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91807',
        city: 'Solnhofen',
        district: '9577',
        state: 'Bayern'
    },
    {
        zip: '91809',
        city: 'Wellheim',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '92224',
        city: 'Amberg',
        district: '9361',
        state: 'Bayern'
    },
    {
        zip: '92237',
        city: 'Sulzbach-Rosenberg',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92242',
        city: 'Hirschau',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92245',
        city: 'Kümmersbruck',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92249',
        city: 'Vilseck',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92253',
        city: 'Schnaittenbach',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92256',
        city: 'Hahnbach',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92259',
        city: 'Neukirchen bei Sulzbach-Rosenberg',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92260',
        city: 'Ammerthal',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92262',
        city: 'Birgland',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92263',
        city: 'Ebermannsdorf',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92265',
        city: 'Edelsfeld',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92266',
        city: 'Ensdorf',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92268',
        city: 'Etzelwang',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92269',
        city: 'Fensterbach',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92271',
        city: 'Freihung',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92272',
        city: 'Freudenberg',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92274',
        city: 'Gebenbach',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92275',
        city: 'Hirschbach',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92277',
        city: 'Hohenburg',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92278',
        city: 'Illschwang',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92280',
        city: 'Kastl',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92281',
        city: 'Königstein',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92283',
        city: 'Lauterhofen',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92284',
        city: 'Poppenricht',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92286',
        city: 'Rieden',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92287',
        city: 'Schmidmühlen',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92289',
        city: 'Ursensollen',
        district: '9371',
        state: 'Bayern'
    },
    {
        zip: '92318',
        city: 'Neumarkt in der Oberpfalz',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92331',
        city: 'Parsberg',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92331',
        city: 'Lupburg',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92334',
        city: 'Berching',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92339',
        city: 'Beilngries',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '92342',
        city: 'Freystadt',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92345',
        city: 'Dietfurt an der Altmühl',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92348',
        city: 'Berg bei Neumarkt in der Oberpfalz',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92353',
        city: 'Postbauer-Heng',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92355',
        city: 'Velburg',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92358',
        city: 'Seubersdorf in der Oberpfalz',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92360',
        city: 'Mühlhausen',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92361',
        city: 'Berngau',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92363',
        city: 'Breitenbrunn',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92364',
        city: 'Deining',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92366',
        city: 'Hohenfels',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92367',
        city: 'Pilsach',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92369',
        city: 'Sengenthal',
        district: '9373',
        state: 'Bayern'
    },
    {
        zip: '92421',
        city: 'Schwandorf',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92431',
        city: 'Neunburg vorm Wald',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92436',
        city: 'Bruck in der Oberpfalz',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92439',
        city: 'Bodenwöhr',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92442',
        city: 'Wackersdorf',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92444',
        city: 'Rötz',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '92445',
        city: 'Neukirchen-Balbini',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92447',
        city: 'Schwarzhofen',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92449',
        city: 'Steinberg',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92507',
        city: 'Nabburg',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92521',
        city: 'Schwarzenfeld',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92526',
        city: 'Oberviechtach',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92533',
        city: 'Wernberg-Köblitz',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92536',
        city: 'Pfreimd',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92539',
        city: 'Schönsee',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92540',
        city: 'Altendorf',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92542',
        city: 'Dieterskirchen',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92543',
        city: 'Guteneck',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92545',
        city: 'Niedermurach',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92546',
        city: 'Schmidgaden',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92548',
        city: 'Schwarzach bei Nabburg',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92549',
        city: 'Stadlern',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92551',
        city: 'Stulln',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92552',
        city: 'Teunz',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92554',
        city: 'Thanstein',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92555',
        city: 'Trausnitz',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92557',
        city: 'Weiding',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92559',
        city: 'Winklarn',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92637',
        city: 'Theisseil',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92637',
        city: 'Weiden',
        district: '9363',
        state: 'Bayern'
    },
    {
        zip: '92648',
        city: 'Vohenstrauß',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92655',
        city: 'Grafenwöhr',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92660',
        city: 'Neustadt an der Waldnaab',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92665',
        city: 'Kirchendemenreuth',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92665',
        city: 'Altenstadt an der Waldnaab',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92670',
        city: 'Windischeschenbach',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92676',
        city: 'Eschenbach in der Oberpfalz',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92676',
        city: 'Speinshart',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92681',
        city: 'Erbendorf',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '92685',
        city: 'Floß',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92690',
        city: 'Pressath',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92693',
        city: 'Eslarn',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92694',
        city: 'Etzenricht',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92696',
        city: 'Flossenbürg',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92697',
        city: 'Georgenberg',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92699',
        city: 'Irchenrieth',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92699',
        city: 'Bechtsrieth',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92702',
        city: 'Kohlberg',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92703',
        city: 'Krummennaab',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '92705',
        city: 'Leuchtenberg',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92706',
        city: 'Luhe-Wildenau',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92708',
        city: 'Mantel',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92709',
        city: 'Moosbach',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92711',
        city: 'Parkstein',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92712',
        city: 'Pirk',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92714',
        city: 'Pleystein',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92715',
        city: 'Püchersreuth',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92717',
        city: 'Reuth bei Erbendorf',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '92718',
        city: 'Schirmitz',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92720',
        city: 'Schwarzenbach',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92721',
        city: 'Störnstein',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92723',
        city: 'Tännesberg',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92723',
        city: 'Gleiritsch',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '92724',
        city: 'Trabitz',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92726',
        city: 'Waidhaus',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92727',
        city: 'Waldthurn',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '92729',
        city: 'Weiherhammer',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '93047',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93049',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93051',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93053',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93055',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93057',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93059',
        city: 'Regensburg',
        district: '9362',
        state: 'Bayern'
    },
    {
        zip: '93073',
        city: 'Neutraubling',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93077',
        city: 'Bad Abbach',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93080',
        city: 'Pentling',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93083',
        city: 'Obertraubling',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93086',
        city: 'Wörth an der Donau',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93087',
        city: 'Alteglofsheim',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93089',
        city: 'Aufhausen',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93090',
        city: 'Bach an der Donau',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93092',
        city: 'Barbing',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93093',
        city: 'Donaustauf',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93095',
        city: 'Hagelstadt',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93096',
        city: 'Köfering',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93098',
        city: 'Mintraching',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93099',
        city: 'Mötzing',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93101',
        city: 'Pfakofen',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93102',
        city: 'Pfatter',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93104',
        city: 'Riekofen',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93104',
        city: 'Sünching',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93105',
        city: 'Tegernheim',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93107',
        city: 'Thalmassing',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93109',
        city: 'Wiesent',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93128',
        city: 'Regenstauf',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93133',
        city: 'Burglengenfeld',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '93138',
        city: 'Lappersdorf',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93142',
        city: 'Maxhütte-Haidhof',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '93149',
        city: 'Nittenau',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '93152',
        city: 'Nittendorf',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93155',
        city: 'Hemau',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93158',
        city: 'Teublitz',
        district: '9376',
        state: 'Bayern'
    },
    {
        zip: '93161',
        city: 'Sinzing',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93164',
        city: 'Brunn',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93164',
        city: 'Laaber',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93167',
        city: 'Falkenstein',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93170',
        city: 'Bernhardswald',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93173',
        city: 'Wenzenbach',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93176',
        city: 'Beratzhausen',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93177',
        city: 'Altenthann',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93179',
        city: 'Brennberg',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93180',
        city: 'Deuerling',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93182',
        city: 'Duggendorf',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93183',
        city: 'Holzheim am Forst',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93183',
        city: 'Kallmünz',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93185',
        city: 'Michelsneukirchen',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93186',
        city: 'Pettendorf',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93188',
        city: 'Pielenhofen',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93189',
        city: 'Reichenbach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93191',
        city: 'Rettenbach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93192',
        city: 'Wald',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93194',
        city: 'Walderbach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93195',
        city: 'Wolfsegg',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93197',
        city: 'Zeitlarn',
        district: '9375',
        state: 'Bayern'
    },
    {
        zip: '93199',
        city: 'Zell',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93309',
        city: 'Kelheim',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93326',
        city: 'Abensberg',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93333',
        city: 'Neustadt an der Donau',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93336',
        city: 'Altmannstein',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '93339',
        city: 'Riedenburg',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93342',
        city: 'Saal an der Donau',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93343',
        city: 'Essing',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93345',
        city: 'Hausen',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93346',
        city: 'Ihrlerstein',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93348',
        city: 'Kirchdorf',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93349',
        city: 'Mindelstetten',
        district: '9176',
        state: 'Bayern'
    },
    {
        zip: '93351',
        city: 'Painten',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93352',
        city: 'Rohr in Niederbayern',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93354',
        city: 'Biburg',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93354',
        city: 'Siegenburg',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93356',
        city: 'Teugn',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93358',
        city: 'Train',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93359',
        city: 'Wildenberg',
        district: '9273',
        state: 'Bayern'
    },
    {
        zip: '93413',
        city: 'Cham',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93426',
        city: 'Roding',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93437',
        city: 'Furth im Wald',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93444',
        city: 'Kötzting',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93449',
        city: 'Waldmünchen',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93453',
        city: 'Neukirchen beim Heiligen Blut',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93455',
        city: 'Traitsching',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93458',
        city: 'Eschlkam',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93462',
        city: 'Lam',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93464',
        city: 'Tiefenbach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93466',
        city: 'Chamerau',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93468',
        city: 'Miltach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93470',
        city: 'Lohberg',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93471',
        city: 'Arnbruck',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '93473',
        city: 'Arnschwang',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93474',
        city: 'Arrach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93476',
        city: 'Blaibach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93477',
        city: 'Gleißenberg',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93479',
        city: 'Grafenwiesen',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93480',
        city: 'Hohenwarth',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93482',
        city: 'Pemfling',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93483',
        city: 'Pösing',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93485',
        city: 'Rimbach',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93486',
        city: 'Runding',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93488',
        city: 'Schönthal',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93489',
        city: 'Schorndorf',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93491',
        city: 'Stamsried',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93492',
        city: 'Treffelstein',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93494',
        city: 'Waffenbrunn',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93495',
        city: 'Weiding',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93497',
        city: 'Willmering',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '93499',
        city: 'Zandt',
        district: '9372',
        state: 'Bayern'
    },
    {
        zip: '94032',
        city: 'Passau',
        district: '9262',
        state: 'Bayern'
    },
    {
        zip: '94034',
        city: 'Passau',
        district: '9262',
        state: 'Bayern'
    },
    {
        zip: '94036',
        city: 'Passau',
        district: '9262',
        state: 'Bayern'
    },
    {
        zip: '94051',
        city: 'Hauzenberg',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94060',
        city: 'Pocking',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94065',
        city: 'Waldkirchen',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94072',
        city: 'Bad Füssing',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94078',
        city: 'Freyung',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94081',
        city: 'Fürstenzell',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94086',
        city: 'Bad Griesbach im Rottal',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94089',
        city: 'Neureichenau',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94094',
        city: 'Malching',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94094',
        city: 'Rotthalmünster',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94099',
        city: 'Ruhstorf an der Rott',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94104',
        city: 'Tittling',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94104',
        city: 'Witzmannsberg',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94107',
        city: 'Untergriesbach',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94110',
        city: 'Wegscheid',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94113',
        city: 'Tiefenbach',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94116',
        city: 'Hutthurm',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94118',
        city: 'Jandelsbrunn',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94121',
        city: 'Salzweg',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94124',
        city: 'Büchlberg',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94127',
        city: 'Neuburg am Inn',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94130',
        city: 'Obernzell',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94133',
        city: 'Röhrnbach',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94136',
        city: 'Thyrnau',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94137',
        city: 'Bayerbach',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '94139',
        city: 'Breitenberg',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94140',
        city: 'Ering',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '94142',
        city: 'Fürsteneck',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94143',
        city: 'Grainet',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94145',
        city: 'Haidmühle',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94146',
        city: 'Hinterschmiding',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94148',
        city: 'Kirchham',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94149',
        city: 'Kößlarn',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94151',
        city: 'Mauth',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94152',
        city: 'Neuhaus am Inn',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94154',
        city: 'Neukirchen vorm Wald',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94157',
        city: 'Perlesreut',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94158',
        city: 'Philippsreut',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94160',
        city: 'Ringelai',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94161',
        city: 'Ruderting',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94163',
        city: 'Saldenburg',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94164',
        city: 'Sonnen',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94166',
        city: 'Stubenberg',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '94167',
        city: 'Tettenweis',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94169',
        city: 'Thurmansbang',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94209',
        city: 'Regen',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94227',
        city: 'Lindberg',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94227',
        city: 'Zwiesel',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94234',
        city: 'Viechtach',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94239',
        city: 'Zachenberg',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94239',
        city: 'Gotteszell',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94239',
        city: 'Ruhmannsfelden',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94244',
        city: 'Geiersthal',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94244',
        city: 'Teisnach',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94249',
        city: 'Bodenmais',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94250',
        city: 'Achslach',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94252',
        city: 'Bayerisch Eisenstein',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94253',
        city: 'Bischofsmais',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94255',
        city: 'Böbrach',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94256',
        city: 'Drachselsried',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94258',
        city: 'Frauenau',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94259',
        city: 'Kirchberg im Wald',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94261',
        city: 'Kirchdorf im Wald',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94262',
        city: 'Kollnburg',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94264',
        city: 'Langdorf',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94265',
        city: 'Patersdorf',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94267',
        city: 'Prackenbach',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94269',
        city: 'Rinchnach',
        district: '9276',
        state: 'Bayern'
    },
    {
        zip: '94315',
        city: 'Straubing',
        district: '9263',
        state: 'Bayern'
    },
    {
        zip: '94327',
        city: 'Bogen',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94330',
        city: 'Aiterhofen',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94330',
        city: 'Salching',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94333',
        city: 'Geiselhöring',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94336',
        city: 'Windberg',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94336',
        city: 'Hunderdorf',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94339',
        city: 'Leiblfing',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94342',
        city: 'Irlbach',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94342',
        city: 'Straßkirchen',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94344',
        city: 'Wiesenfelden',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94345',
        city: 'Aholfing',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94347',
        city: 'Ascha',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94348',
        city: 'Atting',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94350',
        city: 'Falkenfels',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94351',
        city: 'Feldkirchen',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94353',
        city: 'Haibach',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94354',
        city: 'Haselbach',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94356',
        city: 'Kirchroth',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94357',
        city: 'Konzell',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94359',
        city: 'Loitzendorf',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94360',
        city: 'Mitterfels',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94362',
        city: 'Neukirchen',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94363',
        city: 'Oberschneiding',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94365',
        city: 'Parkstetten',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94366',
        city: 'Perasdorf',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94368',
        city: 'Perkam',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94369',
        city: 'Rain',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94371',
        city: 'Rattenberg',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94372',
        city: 'Rattiszell',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94374',
        city: 'Schwarzach',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94375',
        city: 'Stallwang',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94377',
        city: 'Steinach',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94379',
        city: 'Sankt Englmar',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94405',
        city: 'Landau an der Isar',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94419',
        city: 'Reisbach',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94424',
        city: 'Arnstorf',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '94428',
        city: 'Eichendorf',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94431',
        city: 'Pilsting',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94436',
        city: 'Simbach',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94437',
        city: 'Mamming',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94439',
        city: 'Roßbach',
        district: '9277',
        state: 'Bayern'
    },
    {
        zip: '94447',
        city: 'Plattling',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94469',
        city: 'Deggendorf',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94474',
        city: 'Vilshofen',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94481',
        city: 'Grafenau',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94486',
        city: 'Osterhofen',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94491',
        city: 'Hengersberg',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94496',
        city: 'Ortenburg',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94501',
        city: 'Beutelsbach',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94501',
        city: 'Aidenbach',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94501',
        city: 'Aldersbach',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94505',
        city: 'Bernried',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94508',
        city: 'Schöllnach',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94513',
        city: 'Schönberg',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94518',
        city: 'Spiegelau',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94522',
        city: 'Wallersdorf',
        district: '9279',
        state: 'Bayern'
    },
    {
        zip: '94526',
        city: 'Metten',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94527',
        city: 'Aholming',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94529',
        city: 'Aicha vorm Wald',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94530',
        city: 'Auerbach',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94532',
        city: 'Außernzell',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94533',
        city: 'Buchhofen',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94535',
        city: 'Eging am See',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94536',
        city: 'Eppenschlag',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94538',
        city: 'Fürstenstein',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94539',
        city: 'Grafling',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94541',
        city: 'Grattersdorf',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94542',
        city: 'Haarbach',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94544',
        city: 'Hofkirchen',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94545',
        city: 'Hohenau',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94547',
        city: 'Iggensbach',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94548',
        city: 'Innernzell',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94550',
        city: 'Künzing',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94551',
        city: 'Hunding',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94551',
        city: 'Lalling',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94553',
        city: 'Mariaposching',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94554',
        city: 'Moos',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94556',
        city: 'Neuschönau',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94557',
        city: 'Niederalteich',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94559',
        city: 'Niederwinkling',
        district: '9278',
        state: 'Bayern'
    },
    {
        zip: '94560',
        city: 'Offenberg',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94562',
        city: 'Oberpöring',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94563',
        city: 'Otzing',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94566',
        city: 'Sankt Oswald-Riedlhütte',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94568',
        city: 'Sankt Oswald-Riedlhütte',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94569',
        city: 'Stephansposching',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94571',
        city: 'Schaufling',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94572',
        city: 'Schöfweg',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '94574',
        city: 'Wallerfing',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94575',
        city: 'Windorf',
        district: '9275',
        state: 'Bayern'
    },
    {
        zip: '94577',
        city: 'Winzer',
        district: '9271',
        state: 'Bayern'
    },
    {
        zip: '94579',
        city: 'Zenting',
        district: '9272',
        state: 'Bayern'
    },
    {
        zip: '95028',
        city: 'Hof',
        district: '9464',
        state: 'Bayern'
    },
    {
        zip: '95030',
        city: 'Hof',
        district: '9464',
        state: 'Bayern'
    },
    {
        zip: '95032',
        city: 'Hof',
        district: '9464',
        state: 'Bayern'
    },
    {
        zip: '95100',
        city: 'Selb',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95111',
        city: 'Rehau',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95119',
        city: 'Naila',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95126',
        city: 'Schwarzenbach an der Saale',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95131',
        city: 'Schwarzenbach am Wald',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95138',
        city: 'Bad Steben',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95145',
        city: 'Oberkotzau',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95152',
        city: 'Selbitz',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95158',
        city: 'Kirchenlamitz',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95163',
        city: 'Weißenstadt',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95168',
        city: 'Marktleuthen',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95173',
        city: 'Schönwald',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95176',
        city: 'Konradsreuth',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95179',
        city: 'Geroldsgrün',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95180',
        city: 'Berg',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95182',
        city: 'Döhlau',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95183',
        city: 'Feilitzsch',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95183',
        city: 'Trogen',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95183',
        city: 'Töpen',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95185',
        city: 'Gattendorf',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95186',
        city: 'Höchstädt im Fichtelgebirge',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95188',
        city: 'Issigau',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95189',
        city: 'Köditz',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95191',
        city: 'Leupoldsgrün',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95192',
        city: 'Lichtenberg',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95194',
        city: 'Regnitzlosau',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95195',
        city: 'Röslau',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95197',
        city: 'Schauenstein',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95199',
        city: 'Thierstein',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95213',
        city: 'Münchberg',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95233',
        city: 'Helmbrechts',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95234',
        city: 'Sparneck',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95236',
        city: 'Stammbach',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95237',
        city: 'Weißdorf',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95239',
        city: 'Zell',
        district: '9475',
        state: 'Bayern'
    },
    {
        zip: '95326',
        city: 'Kulmbach',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95336',
        city: 'Mainleus',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95339',
        city: 'Wirsberg',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95339',
        city: 'Neuenmarkt',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95346',
        city: 'Stadtsteinach',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95349',
        city: 'Thurnau',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95352',
        city: 'Marktleugast',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95355',
        city: 'Presseck',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95356',
        city: 'Grafengehaig',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95358',
        city: 'Guttenberg',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95359',
        city: 'Kasendorf',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95361',
        city: 'Ködnitz',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95362',
        city: 'Kupferberg',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95364',
        city: 'Ludwigschorgast',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95365',
        city: 'Rugendorf',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95367',
        city: 'Trebgast',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95369',
        city: 'Untersteinach',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95444',
        city: 'Bayreuth',
        district: '9462',
        state: 'Bayern'
    },
    {
        zip: '95445',
        city: 'Bayreuth',
        district: '9462',
        state: 'Bayern'
    },
    {
        zip: '95447',
        city: 'Bayreuth',
        district: '9462',
        state: 'Bayern'
    },
    {
        zip: '95448',
        city: 'Bayreuth',
        district: '9462',
        state: 'Bayern'
    },
    {
        zip: '95460',
        city: 'Bad Berneck im Fichtelgebirge',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95463',
        city: 'Bindlach',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95466',
        city: 'Weidenberg',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95466',
        city: 'Kirchenpingarten',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95469',
        city: 'Speichersdorf',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95473',
        city: 'Prebitz',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95473',
        city: 'Creußen',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95473',
        city: 'Haag',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95478',
        city: 'Kemnath',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95482',
        city: 'Gefrees',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95485',
        city: 'Warmensteinach',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95488',
        city: 'Eckersdorf',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95490',
        city: 'Mistelgau',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95491',
        city: 'Ahorntal',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95493',
        city: 'Bischofsgrün',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95494',
        city: 'Gesees',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95496',
        city: 'Glashütten',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95497',
        city: 'Goldkronach',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95499',
        city: 'Harsdorf',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95500',
        city: 'Heinersreuth',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95502',
        city: 'Himmelkron',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95503',
        city: 'Hummeltal',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95505',
        city: 'Immenreuth',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95506',
        city: 'Kastl',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95508',
        city: 'Kulmain',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95509',
        city: 'Marktschorgast',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95511',
        city: 'Mistelbach',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95512',
        city: 'Neudrossenfeld',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '95514',
        city: 'Neustadt am Kulm',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '95515',
        city: 'Plankenfels',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95517',
        city: 'Emtmannsberg',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95517',
        city: 'Seybothenreuth',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95519',
        city: 'Vorbach',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '95519',
        city: 'Schlammersdorf',
        district: '9374',
        state: 'Bayern'
    },
    {
        zip: '95615',
        city: 'Marktredwitz',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95632',
        city: 'Wunsiedel',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95643',
        city: 'Tirschenreuth',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95652',
        city: 'Waldsassen',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95659',
        city: 'Arzberg',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95666',
        city: 'Leonberg',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95666',
        city: 'Mitterteich',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95671',
        city: 'Bärnau',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95676',
        city: 'Wiesau',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95679',
        city: 'Waldershof',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95680',
        city: 'Bad Alexandersbad',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95682',
        city: 'Brand',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95683',
        city: 'Ebnath',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95685',
        city: 'Falkenberg',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95686',
        city: 'Fichtelberg',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95688',
        city: 'Friedenfels',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95689',
        city: 'Fuchsmühl',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95691',
        city: 'Hohenberg an der Eger',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95692',
        city: 'Konnersreuth',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95694',
        city: 'Mehlmeisel',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '95695',
        city: 'Mähring',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95697',
        city: 'Nagel',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95698',
        city: 'Neualbenreuth',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95700',
        city: 'Neusorg',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95701',
        city: 'Pechbrunn',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95703',
        city: 'Plößberg',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95704',
        city: 'Pullenreuth',
        district: '9377',
        state: 'Bayern'
    },
    {
        zip: '95706',
        city: 'Schirnding',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95707',
        city: 'Thiersheim',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '95709',
        city: 'Tröstau',
        district: '9479',
        state: 'Bayern'
    },
    {
        zip: '96047',
        city: 'Bamberg',
        district: '9461',
        state: 'Bayern'
    },
    {
        zip: '96049',
        city: 'Bamberg',
        district: '9461',
        state: 'Bayern'
    },
    {
        zip: '96050',
        city: 'Bamberg',
        district: '9461',
        state: 'Bayern'
    },
    {
        zip: '96052',
        city: 'Bamberg',
        district: '9461',
        state: 'Bayern'
    },
    {
        zip: '96103',
        city: 'Hallstadt',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96106',
        city: 'Ebern',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96110',
        city: 'Scheßlitz',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96114',
        city: 'Hirschaid',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96117',
        city: 'Memmelsdorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96120',
        city: 'Bischberg',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96123',
        city: 'Litzendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96126',
        city: 'Ermershausen',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96126',
        city: 'Maroldsweisach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96129',
        city: 'Strullendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96132',
        city: 'Schlüsselfeld',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96135',
        city: 'Stegaurach',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96138',
        city: 'Burgebrach',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96142',
        city: 'Hollfeld',
        district: '9472',
        state: 'Bayern'
    },
    {
        zip: '96145',
        city: 'Seßlach',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96146',
        city: 'Altendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96148',
        city: 'Baunach',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96149',
        city: 'Breitengüßbach',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96151',
        city: 'Breitbrunn',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96152',
        city: 'Burghaslach',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '96154',
        city: 'Burgwindheim',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96155',
        city: 'Buttenheim',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96157',
        city: 'Ebrach',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96158',
        city: 'Frensdorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96160',
        city: 'Geiselwind',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '96161',
        city: 'Gerach',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96163',
        city: 'Gundelsheim',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96164',
        city: 'Kemmern',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96166',
        city: 'Kirchlauter',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96167',
        city: 'Königsfeld',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96169',
        city: 'Lauter',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96170',
        city: 'Priesendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96170',
        city: 'Lisberg',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96172',
        city: 'Mühlhausen',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '96173',
        city: 'Oberhaid',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96175',
        city: 'Pettstadt',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96176',
        city: 'Pfarrweisach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96178',
        city: 'Pommersfelden',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96179',
        city: 'Rattelsdorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96181',
        city: 'Rauhenebrach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96182',
        city: 'Reckendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96184',
        city: 'Rentweinsdorf',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96185',
        city: 'Schönbrunn',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96187',
        city: 'Stadelhofen',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96188',
        city: 'Stettfeld',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96190',
        city: 'Untermerzbach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '96191',
        city: 'Viereth-Trunstadt',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96193',
        city: 'Wachenroth',
        district: '9572',
        state: 'Bayern'
    },
    {
        zip: '96194',
        city: 'Walsdorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96196',
        city: 'Wattendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96197',
        city: 'Wonsees',
        district: '9477',
        state: 'Bayern'
    },
    {
        zip: '96199',
        city: 'Zapfendorf',
        district: '9471',
        state: 'Bayern'
    },
    {
        zip: '96215',
        city: 'Lichtenfels',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96224',
        city: 'Burgkunstadt',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96231',
        city: 'Bad Staffelstein',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96237',
        city: 'Ebersdorf',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96242',
        city: 'Sonnefeld',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96247',
        city: 'Michelau in Oberfranken',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96250',
        city: 'Ebensfeld',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96253',
        city: 'Untersiemau',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96257',
        city: 'Marktgraitz',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96257',
        city: 'Redwitz an der Rodach',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96260',
        city: 'Weismain',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96264',
        city: 'Altenkunstadt',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96268',
        city: 'Mitwitz',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96269',
        city: 'Großheirath',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96271',
        city: 'Grub am Forst',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96272',
        city: 'Hochstadt am Main',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96274',
        city: 'Itzgrund',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96275',
        city: 'Marktzeuln',
        district: '9478',
        state: 'Bayern'
    },
    {
        zip: '96277',
        city: 'Schneckenlohe',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96279',
        city: 'Weidhausen bei Coburg',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96317',
        city: 'Kronach',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96328',
        city: 'Küps',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96332',
        city: 'Pressig',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96337',
        city: 'Ludwigsstadt',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96342',
        city: 'Stockheim',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96346',
        city: 'Wallenfels',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96349',
        city: 'Steinwiesen',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96352',
        city: 'Wilhelmsthal',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96355',
        city: 'Tettau',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96358',
        city: 'Teuschnitz',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96358',
        city: 'Reichenbach',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96361',
        city: 'Steinbach am Wald',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96364',
        city: 'Marktrodach',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96365',
        city: 'Nordhalben',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96367',
        city: 'Tschirn',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96369',
        city: 'Weißenbrunn',
        district: '9476',
        state: 'Bayern'
    },
    {
        zip: '96450',
        city: 'Coburg',
        district: '9463',
        state: 'Bayern'
    },
    {
        zip: '96465',
        city: 'Neustadt bei Coburg',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96472',
        city: 'Rödental',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96476',
        city: 'Bad Rodach',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96479',
        city: 'Weitramsdorf',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96482',
        city: 'Ahorn',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96484',
        city: 'Meeder',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96486',
        city: 'Lautertal',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96487',
        city: 'Dörfles-Esbach',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96489',
        city: 'Niederfüllbach',
        district: '9473',
        state: 'Bayern'
    },
    {
        zip: '96515',
        city: 'Sonneberg',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96515',
        city: 'Oberland am Rennsteig',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96515',
        city: 'Judenbach',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96523',
        city: 'Oberland am Rennsteig',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96523',
        city: 'Steinach',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96524',
        city: 'Neuhaus-Schierschnitz',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96524',
        city: 'Föritz',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96528',
        city: 'Effelder-Rauenstein',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96528',
        city: 'Schalkau',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96528',
        city: 'Bachfeld',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '96529',
        city: 'Mengersgereuth-Hämmern',
        district: '16072',
        state: 'Thüringen'
    },
    {
        zip: '97070',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97072',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97074',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97076',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97078',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97080',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97082',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97084',
        city: 'Würzburg',
        district: '9663',
        state: 'Bayern'
    },
    {
        zip: '97199',
        city: 'Ochsenfurt',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97204',
        city: 'Höchberg',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97209',
        city: 'Veitshöchheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97215',
        city: 'Uffenheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97215',
        city: 'Weigenheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97215',
        city: 'Simmershofen',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97218',
        city: 'Gerbrunn',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97222',
        city: 'Rimpar',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97225',
        city: 'Zellingen',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97228',
        city: 'Rottendorf',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97230',
        city: 'Estenfeld',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97232',
        city: 'Giebelstadt',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97234',
        city: 'Reichenberg',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97236',
        city: 'Randersacker',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97237',
        city: 'Altertheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97239',
        city: 'Aub',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97241',
        city: 'Bergtheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97241',
        city: 'Oberpleichfeld',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97243',
        city: 'Bieberehren',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97244',
        city: 'Bütthard',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97246',
        city: 'Eibelstadt',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97247',
        city: 'Eisenheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97249',
        city: 'Eisingen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97250',
        city: 'Erlabrunn',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97252',
        city: 'Frickenhausen am Main',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97253',
        city: 'Gaukönigshofen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97255',
        city: 'Sonderhofen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97255',
        city: 'Gelchsheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97256',
        city: 'Geroldshausen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97258',
        city: 'Oberickelsheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97258',
        city: 'Gollhofen',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97258',
        city: 'Ippesheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97258',
        city: 'Hemmersheim',
        district: '9575',
        state: 'Bayern'
    },
    {
        zip: '97259',
        city: 'Greußenheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97261',
        city: 'Güntersleben',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97262',
        city: 'Hausen bei Würzburg',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97264',
        city: 'Helmstadt',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97265',
        city: 'Hettstadt',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97267',
        city: 'Himmelstadt',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97268',
        city: 'Kirchheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97270',
        city: 'Kist',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97271',
        city: 'Kleinrinderfeld',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97273',
        city: 'Kürnach',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97274',
        city: 'Leinach',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97276',
        city: 'Margetshöchheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97277',
        city: 'Neubrunn',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97279',
        city: 'Prosselsheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97280',
        city: 'Remlingen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97282',
        city: 'Retzstadt',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97283',
        city: 'Riedenheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97285',
        city: 'Röttingen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97285',
        city: 'Tauberrettersheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97286',
        city: 'Sommerhausen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97286',
        city: 'Winterhausen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97288',
        city: 'Theilheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97289',
        city: 'Thüngen',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97291',
        city: 'Thüngersheim',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97292',
        city: 'Holzkirchen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97292',
        city: 'Uettingen',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97294',
        city: 'Unterpleichfeld',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97295',
        city: 'Waldbrunn',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97297',
        city: 'Waldbüttelbrunn',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97299',
        city: 'Zell am Main',
        district: '9679',
        state: 'Bayern'
    },
    {
        zip: '97318',
        city: 'Kitzingen',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97318',
        city: 'Biebelried',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97320',
        city: 'Sulzfeld am Main',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97320',
        city: 'Mainstockheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97320',
        city: 'Albertshofen',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97320',
        city: 'Großlangheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97320',
        city: 'Buchbrunn',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97332',
        city: 'Volkach',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97334',
        city: 'Sommerach',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97334',
        city: 'Nordheim am Main',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97337',
        city: 'Dettelbach',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97340',
        city: 'Marktbreit',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97340',
        city: 'Segnitz',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97340',
        city: 'Martinsheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97342',
        city: 'Seinsheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97342',
        city: 'Obernbreit',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97342',
        city: 'Marktsteft',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97346',
        city: 'Iphofen',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97348',
        city: 'Willanzheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97348',
        city: 'Rödelsee',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97348',
        city: 'Markt Einersheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97350',
        city: 'Mainbernheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97353',
        city: 'Wiesentheid',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97355',
        city: 'Castell',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97355',
        city: 'Rüdenhausen',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97355',
        city: 'Wiesenbronn',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97355',
        city: 'Abtswind',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97355',
        city: 'Kleinlangheim',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97357',
        city: 'Prichsenstadt',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97359',
        city: 'Schwarzach am Main',
        district: '9675',
        state: 'Bayern'
    },
    {
        zip: '97421',
        city: 'Schweinfurt',
        district: '9662',
        state: 'Bayern'
    },
    {
        zip: '97422',
        city: 'Schweinfurt',
        district: '9662',
        state: 'Bayern'
    },
    {
        zip: '97424',
        city: 'Schweinfurt',
        district: '9662',
        state: 'Bayern'
    },
    {
        zip: '97437',
        city: 'Haßfurt',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97440',
        city: 'Werneck',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97447',
        city: 'Gerolzhofen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97447',
        city: 'Frankenwinheim',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97450',
        city: 'Arnstein',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97453',
        city: 'Schonungen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97456',
        city: 'Dittelbrunn',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97461',
        city: 'Hofheim in Unterfranken',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97464',
        city: 'Niederwerrn',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97469',
        city: 'Gochsheim',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97475',
        city: 'Zeil am Main',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97478',
        city: 'Knetzgau',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97483',
        city: 'Eltmann',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97486',
        city: 'Königsberg in Bayern',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97488',
        city: 'Stadtlauringen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97490',
        city: 'Poppenhausen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97491',
        city: 'Aidhausen',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97493',
        city: 'Bergrheinfeld',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97494',
        city: 'Bundorf',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97496',
        city: 'Burgpreppach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97497',
        city: 'Dingolshausen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97499',
        city: 'Donnersdorf',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97500',
        city: 'Ebelsbach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97502',
        city: 'Euerbach',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97503',
        city: 'Gädheim',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97505',
        city: 'Geldersheim',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97506',
        city: 'Grafenrheinfeld',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97508',
        city: 'Grettstadt',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97509',
        city: 'Kolitzheim',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97511',
        city: 'Lülsfeld',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97513',
        city: 'Michelau im Steigerwald',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97514',
        city: 'Oberaurach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97516',
        city: 'Oberschwarzach',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97517',
        city: 'Rannungen',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97519',
        city: 'Riedbach',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97520',
        city: 'Röthlein',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97522',
        city: 'Sand am Main',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97523',
        city: 'Schwanfeld',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97525',
        city: 'Schwebheim',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97526',
        city: 'Sennfeld',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97528',
        city: 'Sulzdorf an der Lederhecke',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97529',
        city: 'Sulzheim',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97531',
        city: 'Theres',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97532',
        city: 'Üchtelhausen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97534',
        city: 'Waigolshausen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97535',
        city: 'Wasserlosen',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97537',
        city: 'Wipfeld',
        district: '9678',
        state: 'Bayern'
    },
    {
        zip: '97539',
        city: 'Wonfurt',
        district: '9674',
        state: 'Bayern'
    },
    {
        zip: '97616',
        city: 'Bad Neustadt an der Saale',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97616',
        city: 'Salz',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Heustreu',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Hohenroth',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Unsleben',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Wülfershausen an der Saale',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Strahlungen',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Hollstadt',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Rödelmaier',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Wollbach',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97618',
        city: 'Niederlauer',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97631',
        city: 'Bad Königshofen im Grabfeld',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Sulzfeld',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Großbardorf',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Höchheim',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Aubstadt',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Trappstadt',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Großeibstadt',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Herbstadt',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97633',
        city: 'Saal an der Saale',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97638',
        city: 'Mellrichstadt',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97640',
        city: 'Oberstreu',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97640',
        city: 'Hendungen',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97640',
        city: 'Stockheim',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97645',
        city: 'Ostheim vor der Rhön',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97647',
        city: 'Willmars',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97647',
        city: 'Hausen',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97647',
        city: 'Sondheim vor der Rhön',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97647',
        city: 'Nordheim vor der Rhön',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97650',
        city: 'Fladungen',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97653',
        city: 'Bischofsheim an der Rhön',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97654',
        city: 'Bastheim',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97656',
        city: 'Oberelsbach',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97657',
        city: 'Sandberg',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97659',
        city: 'Schönau an der Brend',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97688',
        city: 'Bad Kissingen',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97702',
        city: 'Münnerstadt',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97705',
        city: 'Burkardroth',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97708',
        city: 'Bad Bocklet',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97711',
        city: 'Thundorf in Unterfranken',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97711',
        city: 'Maßbach',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97714',
        city: 'Oerlenbach',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97717',
        city: 'Euerdorf',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97717',
        city: 'Aura an der Saale',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97717',
        city: 'Sulzthal',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97720',
        city: 'Nüdlingen',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97723',
        city: 'Oberthulba',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97724',
        city: 'Burglauer',
        district: '9673',
        state: 'Bayern'
    },
    {
        zip: '97725',
        city: 'Elfershausen',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97727',
        city: 'Fuchsstadt',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97729',
        city: 'Ramsthal',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97737',
        city: 'Gemünden am Main',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97753',
        city: 'Karlstadt',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97762',
        city: 'Hammelburg',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97769',
        city: 'Bad Brückenau',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97772',
        city: 'Wildflecken',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97773',
        city: 'Aura im Sinngrund',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97775',
        city: 'Burgsinn',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97776',
        city: 'Eußenheim',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97778',
        city: 'Fellen',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97779',
        city: 'Geroda',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97780',
        city: 'Gössenheim',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97782',
        city: 'Gräfendorf',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97783',
        city: 'Karsbach',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97785',
        city: 'Mittelsinn',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97786',
        city: 'Motten',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97788',
        city: 'Neuendorf',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97789',
        city: 'Oberleichtersbach',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97791',
        city: 'Obersinn',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97792',
        city: 'Riedenberg',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97794',
        city: 'Rieneck',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97795',
        city: 'Schondra',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97797',
        city: 'Wartmannsroth',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97799',
        city: 'Zeitlofs',
        district: '9672',
        state: 'Bayern'
    },
    {
        zip: '97816',
        city: 'Lohr am Main',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97828',
        city: 'Marktheidenfeld',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97833',
        city: 'Frammersbach',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97834',
        city: 'Birkenfeld',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97836',
        city: 'Bischbrunn',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97837',
        city: 'Erlenbach bei Marktheidenfeld',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97839',
        city: 'Esselbach',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97840',
        city: 'Hafenlohr',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97842',
        city: 'Karbach',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97843',
        city: 'Neuhütten',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97845',
        city: 'Neustadt am Main',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97846',
        city: 'Partenstein',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97848',
        city: 'Rechtenbach',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97849',
        city: 'Roden',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97851',
        city: 'Rothenfels',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97852',
        city: 'Schollbrunn',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97854',
        city: 'Steinfeld',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97855',
        city: 'Triefenstein',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97857',
        city: 'Urspringen',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97859',
        city: 'Wiesthal',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97901',
        city: 'Altenbuch',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '97903',
        city: 'Collenberg',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '97904',
        city: 'Dorfprozelten',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '97906',
        city: 'Faulbach',
        district: '9676',
        state: 'Bayern'
    },
    {
        zip: '97907',
        city: 'Hasloch',
        district: '9677',
        state: 'Bayern'
    },
    {
        zip: '97909',
        city: 'Stadtprozelten',
        district: '9676',
        state: 'Bayern'
    }
];

Meteor.startup(function () {
    Cities.remove({});
    Cities.batchInsert(zipIndex);
});
*/
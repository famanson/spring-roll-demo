// angular is defined in angular.js
/* global angular */

/**
 * Fake data model + controller
 */

var posts = [
    /* A bit of evil here: compose button disguised as a post */
    {
        type: "compose"
    },
    /* Sale posts */
    {
        price: "£100",
        ago: "2 days ago",
        description: "<b>Old heater</b>, good for winter holidays. Heats well even in coldest weather for a bedroom-sided room. Will send anywhere within UK, <b>delivery</b> included.",
        type: "sale",
        images: [{
            title: "nyan",
            url: "http://images.dailytech.com/nimage/Nyan_Cat_Wide.jpg"
        }, {
            title: "obama",
            url: "http://img1.wikia.nocookie.net/__cb20140203020138/nickfanon/images/4/47/Obama_not_bad.jpg"
        }]
    }, {
        price: "£150",
        ago: "4 days ago",
        description: "Old <b>50-inch TV</b>, brand Panasonic, black, small bezel. Purchased in 2009, in good condition (see photos). Has an in-built DVD player, 2 USB, 3 HDMI, Component and 2 AVI. <b>LED</b> display, may not good against direct sunlight. Delivery costs not included, please pick up from Clapham, London.",
        type: "sale"
    }, {
        price: "£400",
        ago: "2 days ago",
        description: "<b>iPhone 5S gold colour</b>. Barely used. Deliver anywhere within UK (delivery not included, up to £5 extra). Will throw in a free cover of your choice (see photos).",
        type: "sale"
    }, {
        price: "£120",
        ago: "3 days ago",
        description: "<b>Brand new female bike</b> in London! Raleigh bike, including lights, lock and a free front basket. Recently serviced. Selling due to lack of use, collect in person only.",
        type: "sale"
    }, {
        price: "£750",
        ago: "5 days ago",
        description: "<b>Macbook Pro 2013 Like New!</b> Will post to anywhere in the UK. Including free Apple Magic Mouse and spare charger to sweeten the deal, plus <b>6 months left on Apple Care!</b>",
        type: "sale"
    }, {
        price: "£40",
        ago: "4 days ago",
        description: "A pair of black <b>XBox 360 controllers for PC!</b> These are in very good condition, with new rubber knob on the sticks and <b>customised trigger buttons</b> for use in shooting games. Comes with connector for Windows PC. Will not sell separately. Postage not included.",
        type: "sale"
    }, {
        price: "£200",
        ago: "2 days ago",
        description: "Very reliable <b>Canon EOS 40D body only</b> for sale. Cleaned by Canon's Professional Services. Shutter count: 25230, crop factor: 1.6x, can fit both EF and EF-S lenses. <b>Free delivery in London area</b>. Comes with a free 4GB Sandisk CF memory card and a <b>battery grip<b/>",
        type: "sale",
        images: [
            {
                title: "40d",
                url: "http://upload.wikimedia.org/wikipedia/commons/3/36/Canon_EOS_40D_with_EF_50mm_f1.4_USM.jpg"
            }
        ]
    }, {
        price: "£3000",
        ago: "5 days ago",
        description: "<b>Blue Toyota Yaris</b> for sale (West London). Petrol, 40k-mileage, manual transmission, reworked interior. MOT: 28 June 2015. Contact now to arrange test drive!",
        type: "sale"
    }, {
        price: "£300",
        ago: "2 days ago",
        description: "Used, like new <b>Lenovo x121e laptop</b> for sale. Great 11.6-inch laptop, suitable for students or those who need to travel (only 1.2kg). Slightly bigger than a netbook, with the power of a <b>quad-core CPU i3-2567M 1.40GHz, 4GB RAM and 128GB SSD</b>. Comes with Windows 7, bag, charger and a Lenovo mouse",
        type: "sale",
        images: [
            {
                title: "front",
                url: "http://www.ixbt.com/portopc/lenovo/thinkpad-x121e/big/45view-1620.jpg"
            }, {
                title: "closed",
                url: "http://assets.vr-zone.net/13556/ThinkPadX121e.jpg"
            }
                
        ]
    }, {
        price: "£80",
        ago: "2 days ago",
        description: "Like new <b>adidas Predator LZ firm-ground size 9 football boots</b> for sale. These boots are the class <b>professional</b> footballers play in. Only used occasionally on match days, so there are some green stains from the grass. Very comfortable and light fit. Boost your game now!",
        type: "sale"
    }, {
        price: "Free!",
        ago: "1 day ago",
        description: "<b>A-Level books giveaway</b> in London area. All Edexcel A-Level books include: Maths and Further Maths (C1-C4, S1, S2, FP1-FP3, M1-M3), Economics, Physics. Also included is a Cambridge IELTS 8 Self-study Pack with Answers and Audio CD. <b>Collection only</b>",
        type: "sale"
    }, {
        price: "£90",
        ago: "2 days ago",
        description: "<b>Britax Premium Baby Car Seat</b>. This is a very high-quality forward-facing car seat, suitable for children from <b>9 months to 3 years old</b>. Nicely padded, providing a lot of protection on both sides, easily adjustable straps with a chest pad. Postage included, but collection in person preferred",
        type: "sale",
        images: [
            {
                title: "car-seat",
                url: "http://www.kiddicare.com/wcsstore7.00.00.841/ExtendedSitesCatalogAssetStore/images/catalog/KC34610/z2_l.jpg"
            }
        ]
    }, {
        price: "£190",
        ago: "1 day ago",
        description: "<b>Sony PlayStation 3 Slim 500GB + 10 games</b>, Barnet. Used, but in mint condition, bundled with <b>10 games and 2 DualShock controllers</b>. I want to sell these as a whole so no offer for individual sales please. Postange not included.",
        type: "sale",
        images: [
            {
                title: "ps3",
                url: "http://www.getitnow.gr/MEDIA/content_CustomProductCatalog/m1650420pp_Sony-PlayStation-3-Slim-320GB-1440.jpg"
            }
        ]
    }, {
        price: "Free!",
        ago: "3 days ago",
        description: "<b>Giveaway: set of white goods and cutlery</b>, London. The reason for this is because we are moving back to Vietnam so there is no point in bringing all of these with us. For more details about the quantity etc please contact. <b>No delivery, collection only</b>",
        type: "sale"
    }, {
        price: "£180",
        ago: "6 days ago",
        description: "<b>Bosch Maxx washing machine</b> for sale (North London). 6kg wash load, very simple to use, no fancy features. If you need we can arrange to deliver it to your place (<b>London only</b>), otherwise, collection in person please",
        type: "sale",
        images: [
            {
                title: "bosch",
                url: "http://productimages.euronics.co.uk/Bosch296WAB28061GB-0876.jpg"
            }
        ]
    },
    /* Wanted posts */
    {
        price: "Wanted!",
        ago: "a moment ago",
        description: "<b>Project Spring Rolls</b> looking for talented Vietnamese IT <b>students and professionals</b> around the UK to join their team to make an awesome new replacement for the current SVUK Marketplace (what you are looking at here is only 10% of what's involved) <b>[Real advert - send your CV to ukspringroll@gmail.com today!]</b>",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "a moment ago",
        description: "<b>Ocado Technology</b> now recruiting for (Graduate) Software Engineers</b>. Suitable candidate should have good problem-solving skills and a strong programming background. Perks: we have unlimited coffee and free bananas! Oh, also competitive salary <b>[Real advert - send me a message at son.pham@ocado.com]</b>",
        type: "wanted"
    }, {
        price: "£7/h+tips",
        ago: "1 day ago",
        description: "<b>Waiter needed</b> for a Vietnamese restaurant in South London. Valid ID and work permit (especially students) required. No experience needed, training will be included. Both full-time and part-time are welcomed.",
        type: "wanted"
    }, {
        price: "£20/h",
        ago: "1 day ago",
        description: "<b>Looking for a home tutor</b> in London area to teach Vietnamese to our kids, especially reading and writing skills. <b>Two 2-hour lessons a week</b>. Professional preferred, but students will also be considered.",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "3 days ago",
        description: "I am <b>looking for a used iPad</b>, preferably one with both WiFi and 3G capabilities and no more than 2 years old. <b>Willing to pay for postage if not located in London area.</b> Prices can be negotiated. Thanks!",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "2 days ago",
        description: "<b>Taxi for airport pickup!</b> Need to pick up a relative coming from Vietnam <b>at Gatwick Airport on Friday morning</b> to North London. Please get back to me ASAP!",
        type: "wanted"
    }, {
        price: "£15/h",
        ago: "4 days ago",
        description: "Looking for a Maths home tutor for AS student in South London, covering <b>core mathematics and statistics modules</b>. University students with good English skills are most welcomed. 3 or 4 hours of lessons a week.",
        type: "wanted"
    }, {
        price: "£25k",
        ago: "4 days ago",
        description: "We are a <b>Vietnamese restaurant in West London</b> looking for a full-time chef. Up to 48 working hours expected a week. Free meals provided on shifts, plus discounts and more perks.",
        type: "wanted"
    }, {
        price: "£9/h",
        ago: "2 days ago",
        description: "Parents in Northwest London looking for <b>a part-time babysitter for our kids</b>. Because we are both on shifts, we need somebody to look after our 2 kids on Tuesday and Thursday nights in July.",
        type: "wanted"
    }, {
        price: "£7.5/h+tips",
        ago: "5 days ago",
        description: "Saigon restaurant looking for <b>part-time waiters</b>. Students are welcomed, and <b>training will be provided if necessary</b>, but experience is an advantage. Valid work permit or visa must be presented",
        type: "wanted"
    }, {
        price: "£10/h",
        ago: "3 days ago",
        description: "A <b>babysitter</b> for an <b>8-year-old boy</b> is wanted near SW8. Have to be friendly, responsible and great with kids. Must have a CRB check. Experience is preferred but not required.",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "5 days ago",
        description: "I am looking for a <b>second-hand piano</b> for my home studio. Price can be negotiated but preferably below £500. Please get in touch by emailing theNextMozart@gmail.com. Thanks.",
        type: "wanted"
    }, {
        price: "£30/h",
        ago: "1 day ago",
        description: "Looking for a tutor for <b>first year Economics</b>. I'm studying <b>ECON1001 at UCL</b> so if you have some experience with the material (either as a student or have tutored on the same material), it would be a big plus! Prefer to do lessons in person but can also do it via Skype. Please get in touch if you could help out. I don't want to fail my first year. Many thanks.",
        type: "wanted"
    }, {
        price: "£10/h",
        ago: "6 days ago",
        description: "Looking for a <b>temporary Vietnamese translator</b> for some paperwork. It's <b>not technical stuff</b> so as long as you are fluent in Vietnamese and English + have a good attention to detail + want some extra cash, this is the job for you.",
        type: "wanted"
    }, {
        price: "Unpaid",
        ago: "4 days ago",
        description: "Looking for programmers/coders to join the Spring Roll Team. You need to have a <b>first class degree from a world class university</b>, extensive <b>experience with web development</b> and be <b>willing to code without sleep</b>. We are kidding obviously! Anyone interested, please check out our indiegogo webpage https://www.indiegogo.com/projects/project-spring-roll",
        type: "wanted"
    }, {
        price: "£100",
        ago: "1 day ago",
        description: "I need a <b>proof-reader for my Masters dissertation in Politics</b>. It's 20,000 word long and is worth 40% of my final grade so people with a <b>proven track record</b> of doing this kind of word would definitely prefered.",
        type: "wanted"
    }, {
        price: "£15/h",
        ago: "4 days ago",
        description: "We need someone to <b>translate basic product descriptions from English to Vietnamese</b> for some of our products. The items are adhesives and tapes sold business to business so there will be <b>some technical terminologies</b> that you need to be familiar with but nothing a quick search on Google can't solve.",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "6 days ago",
        description: "We are an UK-based company looking for a <b>Social Media Moderator</b> for our Facebook page in Vietnamese. Ideally you would have a degree or are studying towards one in <b>Marketing</b> or related subjects. The Social Media Moderator will serve as the day-to-day engagement and conversation specialist for our Facebook page, helping to enhance the overall image of the company through direct personal engagement with the customers.",
        type: "wanted"
    }, {
        price: "£7",
        ago: "3 days ago",
        description: "I have <b>4kgs of goods (mainly clothes and skincare products)</b> to send home. If you have some spare space in your luggage, please get in touch. I am willing to pay up to £7/kg",
        type: "wanted"
    },
    
    /* Rent posts */
    {
        // Linh Chu's ad - first "user" ever
        price: "Short-term",
        ago: "a moment ago",
        description: "Amazing cosy <b>semi-studio to let - Bond Street/Baker Street area, for maximum 3 weeks in June</b>. Fully furnished - double bed, Wifi, kitchenette, sofa available.  Amazing area, very good security, 5 mins to Baker Street Station, 7 mins to Bond Street Station – and 3 mins to Selfridges. <b>[Real advert - email to us at ukspringroll@gmail to learn more!]</b>",
        type: "rent"
    }, {
        price: "£500pcm",
        ago: "2 days ago",
        description: "<b>Double room for rent</b> in Hackney E2. Suitable for couples. Very close to large supermarkets (Tesco, Asda), Vietnamese shops and restaurants. Buses: 149, 67, 242. Nearby stations: <b>Hoxton, Shoreditch High Street</b>",
        type: "rent"
    }, {
        price: "£450pcm",
        ago: "2 days ago",
        description: "<b>Double room</b>. Can be shared for up to 2 people in <b>Finsbury Park, North London</b>. 5 mins walk to Sainsbury and 15 mins away from Finsbury Park Station. <b>Female students only</b>",
        type: "rent"
    }, {
        price: "£500pcm",
        ago: "2 days ago",
        description: "<b>Large studio room</b> in a Vietnamese family's large house, <b>all bills included!!</b> Post code: E3. Conveniently located near large shopping mall and public transport. <b>Students and professionals both welcome</b>.",
        type: "rent"
    }, {
        price: "£2000pcm",
        ago: "2 days ago",
        description: "<b>1-bedroom apartment</b>, Canada Water. Central area with all large shops, London's financial offices and major public transport links within walking distance. <b>Best suited for a single professional</b>.",
        type: "rent"
    }, {
        price: "£750pcm",
        ago: "4 days ago",
        description: "In a cul-de-sac 2 minutes walk from <b>Earlsfield station</b>, across the road from The Wandle (one of the best pubs in the south west) lays the perfect home for you. Price <b>includes Internet, Sky+ HD with Sky Sports package</b>, just in time for the World Cup this summer. What are you waiting for?",
        type: "rent"
    }, {
        price: "£650-750pcm",
        ago: "1 day ago",
        description: "<b>2 bedrooms available</b> in large 3 bedroom house near Battersea. This is a very spacious 3 storey house, with a garden, large kitchen, dining room, lounge, bathroom, utility room, and very importantly a dishwasher. One is a large double room (master bedroom) and the other is slightly smaller. Both room are furnished.",
        type: "rent", 
        images: [
            {
                title: "livingRoom",
                url: "http://photos2.spareroom.co.uk/images/flatshare/listings/large/46/12/4612618.jpg"
            }, {
                title: "kitchen",
                url: "http://photos2.spareroom.co.uk/images/flatshare/listings/large/46/12/4612614.jpg"
            }
                
        ]
    }, {
        price: "£550pcm",
        ago: "1 day ago",
        description: "Lovely <b>double room</b> for rent , just 1 min walking distance to <b>Mile End tube station (E3)</b>, there are central、district and Hammersmith city line, also have 25、205 buses to central london, very good transport link. Tesco supermarket is nearby.",
        type: "rent"
    }, {
        price: "£130pw",
        ago: "1 day ago",
        description: "Stylish, furnished double room in a sizeable house in <b>Stratford E15</b>. Close to the new <b>Westfield shopping centre</b> development and Olympic site. Very close to the University of East London (UEL). Rent is fully inclusive of all utility bills. Sorry no pets in the house.",
        type: "rent",
        images: [
            {
                title: "e15Bed",
                url: "http://photos2.spareroom.co.uk/images/flatshare/listings/large/46/10/4610935.jpg"
            }
        ]
    }, {
        price: "£800pcm",
        ago: "2 days ago",
        description: "<b>Spacious 1-bedroom flat in Hertfordshire</b>, very conveniently located near the A414, with easy access to major public transport links. Easy to commute to either London or Hatfield Business Park. <b>All bills included</b>",
        type: "rent"
    }, {
        price: "£550pcm",
        ago: "2 days ago",
        description: "<b>King-sized double bedroom in a 4-bedroom house, London</b>, including water bill. Located very near to Westminster University, Sainsbury's, and local shops. Fully furnished, very well-equipped kitchen. Suitable for a couple.",
        type: "rent"
    }, {
        price: "£400pcm",
        ago: "3 days ago",
        description: "East Hounslow, <b>2 single rooms available in a student's house</b>. Very near to Tesco, local shops, and the train and tube stations. Fast WiFi, very good shared kitchen and large common area. <b>Available from August</b>, contact now to arrange viewings",
        type: "rent"
    }, {
        price: "£500pcm",
        ago: "3 days ago",
        description: "<b>Semi-detached house to rent</b> 2 double rooms and 1 en suite room with a shared kitchen. Common area includes a large dining table with a TV. All bills (Internet, water, gas, electricity) are included. 10-minute walk away from Bank station, and 5 minutes from local shops. <b>Must see!</b>",
        type: "rent"
    }, {
        price: "£250pcm",
        ago: "4 days ago",
        description: "<b>2/5 double rooms available in large students' house</b> in Zone 3, London. 2 modern showers and a large, fully-equipped kitchen to share. Water and gas bill included. Conveniently located very near to large shopping mall and central bus station.",
        type: "rent"
    }, {
        price: "Short-term",
        ago: "4 days ago",
        description: "Going back to Vietnam on holiday so I am going to <b>sublet my flat near Oxford Circus from 10 June to 12 Sep</b>. It is a 2-bedroom flat (not sharing with anyone), very nice kitchen and showers, optical fibre Internet. <b>Suitable for students interning in London or a family on vacation</b>",
        type: "rent"
    }, {
        price: "£850",
        ago: "2 days ago",
        description: "<b>Amazing studio flat available from July 2014</b> in Central London. A recently refurbished flat with a double bed, modern kitchenette and shower. One station away from the financial blocks. Professional only please. <b>All bills are included</b>",
        type: "rent"
    }, {
        price: "£350",
        ago: "2 days ago",
        description: "<b>Looking for a female room-mate to share a large double room</b> in a students' house in East London. There is a large common area and a great kitchen shared among 3 others. Conveniently located near Chinese shops and a Tesco Metro. <b>Best suited for UCL students</b>",
        type: "rent"
    }, {
        price: "£1500pcm",
        ago: "1 day ago",
        description: "A single room with a beautiful park nearby. It's a stone throw from Hackney city centre and is quite easy to get to anywhere in London. Minimum term is 8 months. Room is only for one person i. e. no couples/sharers",
        type: "rent"
    }, 
    /* Longdan posts */
    {
        id: 1,
        price: "£2.00",
        rrp: "£2.20",
        desc1: "Imperial Rice Vermicelli 1.6mm",
        desc2: "Bún Hoàng Gia 1.6mm",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_260213094726.jpg",
        packaging: "400g bag",
        type: "longdan"
    }, {
        id: 2,
        price: "£3.00",
        rrp: "£4.00",
        desc1: "Sriracha Hot Chilli Sauce",
        desc2: "Tương Ớt Con Phụng",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_170413044131.jpg",
        packaging: "793g bottle",
        type: "longdan"
    }, {
        id: 3,
        price: "£1.50",
        rrp: "£2.00",
        desc1: "Vifon Soup Powder",
        desc2: "Bột Canh Vifon",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_061208040049.jpg",
        packaging: "250g bag",
        type: "longdan"
    }, {
        id: 4,
        price: "£12.50",
        rrp: "£14.00",
        desc1: "Kim Son Marble Goby",
        desc2: "Cá Bống Tượng Kim Sơn",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_291108030604.jpg",
        packaging: "1kg",
        type: "longdan"
    }, {
        id: 5,
        price: "£2.50",
        rrp: "£3.00",
        desc1: "Longdan Dried Lotus Seed",
        desc2: "Hạt Sen Khô Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081208045833.jpg",
        packaging: "200g box",
        type: "longdan"
    }, {
        id: 6,
        price: "£3.50",
        rrp: "£4.00",
        desc1: "Longdan Arrowroot Bean Thread",
        desc2: "Miến Dong Trắng Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_101108082505.jpg",
        packaging: "500g bag",
        type: "longdan"
    }, {
        id: 7,
        price: "£1.50",
        rrp: "£2.00",
        desc1: "Red Guava",
        desc2: "Ổi Xá Lị",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_241008111326.jpg",
        packaging: "3-fruit tray",
        type: "longdan"
    }, {
        id: 8,
        price: "£2.00",
        rrp: "£2.50",
        desc1: "Pak Choi",
        desc2: "Cải  Xanh",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_191008045430.jpg",
        packaging: "400g bag",
        type: "longdan"
    }, {
        id: 9,
        price: "£1.00",
        rrp: "£1.50",
        desc1: "Vietnamese Coriander ",
        desc2: "Ngò Rí",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_191008050413.jpg",
        packaging: "100g bag",
        type: "longdan"
    }, {
        id: 10,
        price: "£2.40",
        rrp: "£2.80",
        desc1: "Longdan Water Melon Seed Candy",
        desc2: "Kẹo Hạt Dưa Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081108153148.jpg",
        packaging: "100g box",
        type: "longdan"
    }, {
        id: 11,
        price: "£13.50",
        rrp: "£15.00",
        desc1: "Longdan Vietnam Fragrant Rice",
        desc2: "Gạo Xuân Lộc Longdan",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_061208030757.jpg",
        packaging: "10kg bag",
        type: "longdan"
    }, {
        id: 12,
        price: "£2.50",
        rrp: "£3.00",
        desc1: "Nam Duong Soy Sauce",
        desc2: "Nước Tương Hoa Sen Nam Dương",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081208040737.jpg",
        packaging: "500ml bottle",
        type: "longdan"
    }, {
        id: 13,
        price: "£7.50",
        rrp: "£9.00",
        desc1: "Korean Clay Pot Small (18cm)",
        desc2: "Nồi Đất Hàn Quốc Cỡ Nhỏ",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_250213084648.jpg",
        packaging: "",
        type: "longdan"
    }, {
        id: 14,
        price: "£5.50",
        rrp: "£6.00",
        desc1: "Trung Nguyen G7 Coffee 3 in 1",
        desc2: "Cà Phê Trung Nguyên G7 3 Trong 1",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_220313084920.jpg",
        packaging: "320g box",
        type: "longdan"
    }, {
        id: 15,
        price: "£3.90",
        rrp: "£4.50",
        desc1: "Vinacafe Buon Ma Thuot Coffee ",
        desc2: "Cà Phê Buôn Ma Thuột Vinacafe",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_040309111705.jpg",
        packaging: "250g bag",
        type: "longdan"
    }, {
        id: 16,
        price: "£7.50",
        rrp: "£9.00",
        desc1: "Sai Gon Wood Mortar",
        desc2: "Bộ Chày Cối Sài Gòn",
        image_url: "http://www.longdan.co.uk/uploads/sanpham/prod_081208115108.jpg",
        packaging: "",
        type: "longdan"
    }
];

var topNavs = [
    {
        name: 'Sale',
        type: 'sale'
    }, {
        name: 'Wanted',
        type: 'wanted'
    }, {
        name: 'Rent',
        type: 'rent'
    }, {
        name: 'Longdan',
        type: 'longdan'
    }
];

var notifications = [
    {
        content: "<b>Kevin Nguyen</b> and 5 others messaged you about your <b>\"Brand new iPhone 5\"</b> post.",
        ago: '1 hour ago in Sale',
        type: 'message',
        avatar: 'avatar04.jpg'
    }, {
        content: "<b>Van Tran</b> and 2 others messaged you about your <b>\"Old heater\"</b> post.",
        ago: '1 hour ago in Sale',
        type: 'message',
        avatar: 'avatar02.jpg'
    }, {
        content: "<b>Linh Nguyen</b> and 10 others messaged you about your <b>\"Waiters needed, Viet Restaurant\"</b> post.",
        ago: '3 hours ago in Wanted',
        type: 'message',
        avatar: 'avatar03.jpg'
    }, {
        content: "<b>Hoang Pham</b> replied about his <b>\"Airport taxi service\"</b> post.",
        ago: '4 hours ago in Wanted',
        type: 'message',
        avatar: 'avatar05.jpg'
    }, {
        content: "<b>Ha Bui</b> replied about her <b>\"Large Studio Room\"</b> post.",
        ago: '4 hours ago in Rent',
        type: 'message',
        avatar: 'avatar06.jpg'
    }
];

var slides = [
    {
        desc: 'Project Spring Roll offers a way for businesses to integrate with our site!',
        image: 'gears.jpg'
    }, {
        desc: 'We will create an API through which a business can send their shop data...',
        image: 'cloud.jpg'
    }, {
        desc: '... and a customised shop front so our users can shop your products.',
        image: 'basket.jpg'
    }, {
        desc: 'When users check out, basket data is sent to your end of the API',
        image: 'check.jpg'
    }, {
        desc: 'Your system then handle the customer communication, sale & delivery.',
        image: 'ice-cream-truck.jpg'
    },{
        desc: 'This is an experimental shop front for Longdan made on their request :-)',
        image: 'lab.jpg'
    }
];

var helpTypes = {
    priceShort: {
        text: "placeholder",
        textFormat: "{0}/2 characters required",
        severity: "severity-low"
    },
    priceLong: {
        text: "placeholder",
        textFormat: "Too long: {0}/15 characters",
        severity: "severity-low"
    },
    descShort: {
        text: "placeholder",
        textFormat: "{0}/20 characters required",
        severity: "severity-low"
    },
    descLong: {
        text: "placeholder",
        textFormat: "Too long: {0}/250 characters",
        severity: "severity-low"
    },
    priceFormat: {
        text: "placeholder",
        textFormat: "Format: £1, £10pcm, £7.5/h",
        severity: "severity-high"
    },
    good: {
        text: "placeholder",
        textFormat: "Looking good!",
        severity: "severity-chill"
    }
};

// Define controller.
var app = angular.module('SpringRollDemo', ['ngSanitize','ngAnimate']);
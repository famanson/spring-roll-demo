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
        description: "Very reliable <b>Canon EOS 40D</b> for sale. Cleaned by Canon's Professional Services. Shutter count: 25230, crop factor: 1.6x, can fit both EF and EF-S lenses. <b>Free delivery in London area</b>. Comes with a free 4GB Sandisk CF memory card and a <b>battery grip<b/>",
        type: "sale"
    }, {
        price: "£3000",
        ago: "5 days ago",
        description: "<b>Blue Toyota Yaris</b> for sale (West London). Petrol, 40k-mileage, manual transmission, reworked interior. MOT: 28 June 2015. Contact now to arrange test drive!",
        type: "sale"
    }, {
        price: "£300",
        ago: "2 days ago",
        description: "Used, like new <b>Lenovo x121e laptop</b> for sale. Great 11.6-inch laptop, suitable for students or those who need to travel (only 1.2kg). Slightly bigger than a netbook, with the power of a <b>quad-core CPU i3-2567M 1.40GHz, 4GB RAM and 128GB SSD</b>. Comes with Windows 7, bag, charger and a Lenovo mouse",
        type: "sale"
    }, {
        price: "£80",
        ago: "2 days ago",
        description: "Like new <b>adidas Predator LZ firm-ground size 9 football boots</b> for sale. These boots are the class <b>professional</b> footballers play in. Only used occasionally on match days, so there are some green stains from the grass. Very comfortable and light fit. Boost your game now!",
        type: "sale"
    },
    /* Wanted posts */
    {
        price: "£7/h+tips",
        ago: "today",
        description: "<b>Waiter needed</b> for a Vietnamese restaurant in South London. Valid ID and work permit (especially students) required. No experience needed, training will be included. Both full-time and part-time are welcomed.",
        type: "wanted"
    }, {
        price: "Wanted!",
        ago: "1 day ago",
        description: "<b>Man and van wanted!</b> We are 4 students and need to move to our new place across town in London early in June. Prices can be negotiable!",
        type: "wanted"
    }, {
        price: "£20/h",
        ago: "1 day ago",
        description: "<b>Looking for a home tutor</b> to teach Vietnamese to kids. <b>Two 2-hour lessons a week</b> Professional preferred, but students will also be considered.",
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
        price: "£1500pcm",
        ago: "1 day ago",
        description: "<b>4-bedroom house</b> Greenwich SE10. Very near to Greenwich uni. Close to Greenwich station, Tesco and Chinese shop. Viewing arrangements welcomed.",
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
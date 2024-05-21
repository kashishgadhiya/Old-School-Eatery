import basket_icon from './basket_icon.png'
import logo from './logo.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'
import food_31 from './food_31.png'
import food_32 from './food_32.jpg'
import food_30 from './food_30.png'
import ice1 from "./vanela.jpg"
import ice2 from "./choco_ice.jpg"
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'
import c_1 from "./c_1.jpg"
import c_2 from "./c_2.jpg"
import c_3 from "./c_3bhel.jpg"
import c_4 from "./c_4rice.jpg"
import c_5 from "./c_5man.jpg"
import c_6 from "./c_6nood.jpg"
import c_7 from "./c_7nood3.jpg"
import pav from "./pav_bhaji.jpg"
import cheese_pav from "./cheess_pav.jpg"
import palak from "./palak_masala_khichdi.jpg"
import chole from "./chole_1.jpeg"
import pulav from "./pulav.jpg"
import veg_dam from "./veg_dam.jpg"
import menu_pizza from "./menu_pizza.jpg"
import pizza_1 from "./tandoori_pizza.jpg"
import pizza_2 from "./trio_piiza.jpg"
import pizza_3 from "./veggi_pizza.jpg"
import pizza_4 from "./verdure_pizza.jpg"
import pizza_5 from "./menu_pizza.jpg"
import p_1 from "./sabaji_1.jpeg"
import p_2 from "./sabaji_2.jpeg"
import p_3 from "./sabaji_3.jpg"
import p_4 from "./sabaji_4.jpg"
import p_5 from "./sabaji_5.jpg"
import p_6 from "./sabaji_6.jpeg"
import p_7 from "./shak_pun.jpg"
import chaat_1 from "./c_dahi.jpg"
import chaat_2 from "./c_papdi.jpeg"
import chaat_3 from "./c_sev.jpeg"
import chaat_4 from "./c_tikki.jpg"
import chaat_5 from "./panipuri.jpg"
import sweet_1 from "./s_gulab.jpeg"
import sweet_2 from "./s_jabeli_rabdi.jpeg"
import sweet_3 from "./s_jalebi.jpeg"
import sweet_4 from "./jalebi.jpg"
import sweet_5 from "./s_jamun_rabdi.jpg"
import sandwich_1 from "./sand_1.jpeg"
import sandwich_2 from "./sand_2.jpg"
import sandwich_3 from "./sand_3.jpg"
import sandwich_4 from "./sand_4.jpg"
export const assets = {
    logo,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    ice1,
    ice2,
    c_1,
    c_2,
    c_3,
    c_4,
    c_5,
    c_6,
    c_7,
    pav,
    cheese_pav,
    palak,
    chole, pulav, veg_dam, menu_pizza
    , pizza_1,
    pizza_2,
    pizza_3,
    pizza_4,
    pizza_5,
    p_1,
    p_2,
    p_3,
    p_4,
    p_5,
    p_6,
    chaat_1,
    chaat_2,
    chaat_3,
    chaat_4,
    chaat_5,
    sweet_1,
    sweet_2,
    sweet_3,
    sweet_4,
    sweet_5,
    sandwich_1,
    sandwich_2,
    sandwich_3,
    sandwich_4,


}

export const menu_list = [
    {
        menu_name: "Street Food",
        menu_image: menu_6
    },
    {
        menu_name: "Pizza",
        menu_image: menu_2
    },
    {
        menu_name: "Chinese",
        menu_image: menu_8
    },
    {
        menu_name: "Punjabi",
        menu_image: menu_1
    },
    {
        menu_name: "Chaat",
        menu_image: menu_7
    },
    {
        menu_name: "Sweet",
        menu_image: menu_3
    },
    {
        menu_name: "Ice-Cream",
        menu_image: menu_5
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
]

export const food_list = [
    {
        // Street Food
        _id: "1",
        name: "Pav Bhaji",
        image: pav,
        price: 249,
        description: "Savor Mumbai's iconic Pav Bhaji,buttery bread rolls served with spicy mashed vegetables, a flavorful classic.",
        category: "Street Food"
    },
    {
        _id: "2",
        name: "Cheese Pav Bhaji",
        image: cheese_pav,
        price: 299,
        description: "Experience the irresistible fusion of creamy cheese atop spicy, flavorful pav bhaji—a true gastronomic delight!",
        category: "Street Food"
    }, {
        _id: "3",
        name: "Palak Masala Khichdi",
        image: palak,
        price: 399,
        description: "Palak Masala Khichdi: Wholesome rice-lentil dish infused with spinach, spices, and flavorsome masala, perfect comfort food.",
        category: "Street Food"
    }, {
        _id: "4",
        name: "Chole Bhature",
        image: chole,
        price: 349,
        description: "Fluffy fried bread paired with spicy, tangy curry, a North Indian favorite, bursting with flavor.",
        category: "Street Food"
    }, {
        _id: "5",
        name: "Bombay Pulav",
        image: pulav,
        price: 299,
        description: "Experience Bombay Pulav,fragrant rice infused with spices, colorful vegetables, and a hint of sweetness.",
        category: "Street Food"
    }, {
        _id: "6",
        name: "Veg Dum Biryani",
        image: veg_dam,
        price: 349,
        description: "Experience aromatic basmati rice layered with vegetables, spices, and herbs in our exquisite Veg Dum Biryani.",
        category: "Street Food"
    },
    // pizza
    {
        _id: "10",
        name: "Margherita Pizza",
        image: pizza_5,
        price: 199,
        description: "Classic Margherita Pizza ,Thin crust topped with fresh tomatoes, mozzarella, basil—a timeless Italian favorite.",
        category: "Pizza"
    },
    {
        _id: "7",
        name: "Tandoori Paneer",
        image: pizza_1,
        price: 299,
        description: "Savor the fusion of smoky tandoori flavors atop a crispy crust—a unique twist on classic pizza.",
        category: "Pizza"
    }, {
        _id: "8",
        name: "Trio Picante",
        image: pizza_2,
        price: 299,
        description: "Experience the bold flavors of Trio Picante ,a tantalizing trio of spicy, zesty, and fiery delights.",
        category: "Pizza"
    }, {
        _id: "9",
        name: "Veggie delight",
        image: pizza_3,
        price: 299,
        description: "Savor the Veggi Delight,a vibrant medley of fresh vegetables bursting with flavor and wholesome goodness.",
        category: "Pizza"
    }, {
        _id: "11",
        name: "Verdure Exotica",
        image: pizza_4,
        price: 399,
        description: "Verdure Exotica , a vibrant fusion of exotic vegetables, bursting with flavor and freshness, a culinary adventure awaits!",
        category: "Pizza"
    },
    // punjabi


    {
        _id: "12",
        name: "Paneer Tikka masala",
        image: p_1,
        price: 399,
        description: "Succulent paneer cubes marinated in aromatic spices, grilled to perfection, and smothered in creamy tomato gravy.",
        category: "Punjabi"
    },
    {
        _id: "13",
        name: "Paneer Kolhapuri",
        image: p_2,
        price: 449,
        description: "Paneer Kolhapuri, A spicy and flavorful Indian dish featuring paneer in a rich, aromatic tomato-based gravy.",
        category: "Punjabi"
    },
    {
        _id: "14",
        name: "Methi Paneer",
        image: p_3,
        price: 259,
        description: "Paneer Methi, Tender paneer cooked with aromatic fenugreek leaves in a flavorful Indian-inspired dish.",
        category: "Punjabi"
    }, {
        _id: "15",
        name: "Palak Paneer",
        image: p_4,
        price: 399,
        description: "Palak Paneer,Creamy spinach curry with Indian cottage cheese, a wholesome vegetarian delicacy rich in flavor.",
        category: "Punjabi"
    }, {
        _id: "16",
        name: "Kaju Masala",
        image: p_5,
        price: 499,
        description: "Creamy Kaju Masala ,Tender cashews cooked in a rich, aromatic blend of spices and luscious gravy.",
        category: "Punjabi"
    }, {
        _id: "17",
        name: "Cheese Makhni",
        image: p_6,
        price: 399,
        description: "Creamy, rich Cheese Makhni succulent paneer in a luscious tomato-based sauce, a tantalizing fusion of flavors.",
        category: "Punjabi"
    }, {
        _id: "18",
        name: "Paneer Kolhapuri",
        image: p_7,
        price: 499,
        description: "Paneer Kolhapuri , A spicy and flavorful Indian dish featuring paneer cooked with rich tomato-based gravy.",
        category: "Punjabi"
    },
    // ************chaat************


    {
        _id: "19",
        name: "Pani Puri",
        image: chaat_5,
        price: 149,
        description: "Pani puri,crisp hollow puris filled with spicy tangy water, potatoes, chickpeas, and chutney. Irresistibly flavorful street food.",
        category: "Chaat"
    }, {
        _id: "20",
        name: "Papadi Chaat",
        image: chaat_2,
        price: 229,
        description: "Savor the tangy, crispy delight of Papadi Chaat: fried dough wafers topped with savory chutneys and spices.",
        category: "Chaat"
    }, {
        _id: "21",
        name: "Sev Puri",
        image: chaat_3,
        price: 199,
        description: "Savor Sev Puri , crispy puris topped with spicy chutneys, tangy tamarind, veggies, and crunchy sev. A flavorful delight!",
        category: "Chaat"
    }, {
        _id: "22",
        name: "Chole Tikki",
        image: chaat_4,
        price: 229,
        description: "Savory Chole Tikki , Spiced chickpea patties topped with tangy chutneys, a crispy delight bursting with flavor.",
        category: "Chaat"
    }, {
        _id: "23",
        name: "Dahi Puri",
        image: chaat_1,
        price: 199,
        description: "Dahi Puri , Crunchy puris filled with spiced potatoes, topped with yogurt, chutneys, and crunchy sev. Irresistible street food.",
        category: "Chaat"
    },
    //sweet******************
    {
        _id: "24",
        name: "Gulab Jamun",
        image: sweet_1,
        price: 99,
        description: "Soft, syrup-soaked dough balls infused with cardamom, a classic Indian dessert delight.",
        category: "Sweet"
    },
    {
        _id: "25",
        name: "Jalebi Rabdi",
        image: sweet_2,
        price: 399,
        description: "Experience the irresistible combination of crispy, golden Jalebi paired with creamy, decadent Rabdi-truly a dessert delight!",
        category: "Sweet"
    },
    {
        _id: "26",
        name: " Mini Jalebi ",
        image: sweet_3,
        price: 199,
        description: "Golden, spiral-shaped Indian dessert, crispy outside, syrup-soaked inside, with a hint of saffron and cardamom.",
        category: "Sweet"
    }, {
        _id: "27",
        name: "Jalebi",
        image: sweet_4,
        price: 249,
        description: "Golden swirls of fried batter soaked in sugary syrup, a beloved Indian dessert offering crispy sweetness.",
        category: "Sweet"
    }, {
        _id: "28",
        name: "Jamun Rabdi",
        image: sweet_5,
        price: 199,
        description: "Experience the richness of Jamun Rabdi: a luscious Indian dessert blending sweet Jamun with creamy rabdi. Irresistibly divine!",
        category: "Sweet"
    },
    // Chinese
    {
        _id: "29",
        name: "Veg Hakka Noodles",
        image: food_30,
        price: 349,
        description: "  Stir-fried noodles with colorful veggies, infused with aromatic spices, a vegetarian delight! ",
        category: "Chinese"
    }, {
        _id: "30",
        name: "Paneer Szechuan chilly",
        image: c_2,
        price: 369,
        description: "Succulent paneer cubes tossed in fiery Szechuan sauce, a spicy delight for adventurous palates.",
        category: "Chinese"
    }, {
        _id: "31",
        name: "Szechuan Fried Rice",
        image: c_3,
        price: 349,
        description: " A zesty blend of rice, vegetables, and Szechuan spices, bursting with flavor.",
        category: "Chinese"
    },
    {
        _id: "32",
        name: "Veg Fried Rice",
        image: c_4,
        price: 349,
        description: "Savor our veg fried rice: a flavorful medley of vegetables and rice, stir-fried to perfection. Simply irresistible!",
        category: "Chinese"
    },
    {
        _id: "35",
        name: "Veg Manchurian",
        image: c_5,
        price: 349,
        description: "Savor Veg Manchurian: Vegetable dumplings in flavorful sauce, perfect blend of hot, sweet, sour, and salty.",
        category: "Chinese"
    },
    {
        _id: "36",
        name: "Veg Szechuan Noodles",
        image: c_6,
        price: 369,
        description: "Savor the spicy allure of Veg Szechuan Noodles, vibrant vegetables tossed with fiery sauce, a taste sensation!",
        category: "Chinese"
    },
    {
        _id: "37",
        name: "Cheese Kurkure Cigar",
        image: c_7,
        price: 399,
        description: "Cheese Kurkure Cigar: Crispy, golden rolls filled with creamy cheese, perfect for indulgent snacking or appetizers.",
        category: "Chinese"
    },
    {
        _id: "37",
        name: "Chinese Bhel",
        image: food_31,
        price: 349,
        description: "Chinese Bhel: A fusion snack with crispy noodles, veggies, and tangy sauces—a delightful twist on Chinese flavors.",
        category: "Chinese"
    },
    {
        _id: "38",
        name: "Manchurian Fried Rice",
        image: food_32,
        price: 349,
        description: "Savor Manchurian Fried Rice: aromatic grains wok-tossed with veggies, spices, and savory Manchurian sauce. Irresistibly flavorful!",
        category: "Chinese"
    },

    // Ice-cream
    {
        _id: "33",
        name: "Vanila",
        image: ice1,
        price: 129,
        description: "Vanilla ice cream is a classic flavor commonly made with vanilla extract, cream, milk, and sugar.",
        category: "Ice-Cream"
    },
    {
        _id: "34",
        name: "Chocolate",
        image: ice2,
        price: 129,
        description: "Creamy chocolate indulgence, perfect for any occasion. Rich, smooth, and utterly irresistible. Satisfy your sweet cravings!",
        category: "Ice-Cream"
    },

    // sandwiches************
    {
        _id: "39",
        name: "Cheese Grilled Sandwich",
        image: sandwich_1,
        price: 199,
        description: "Savor a melty, golden-brown creation: layers of gooey cheese nestled between perfectly grilled slices of bread.",
        category: "Sandwich"
    },
    {
        _id: "40",
        name: "Mexican Panini Sandwich",
        image: sandwich_2,
        price: 399,
        description: "Savor a zesty Mexican-inspired panini: layers of grilled fillings, melted cheese, and flavorful spreads on toasted bread.",
        category: "Sandwich"
    },
    {
        _id: "41",
        name: "Italian Caprese Sandwich",
        image: sandwich_3,
        price: 349,
        description: "A harmonious blend of ripe tomatoes, fresh mozzarella, basil, and balsamic glaze between crusty bread.",
        category: "Sandwich"
    },
    {
        _id: "42",
        name: "Veg Chutney Cheese Sandwich",
        image: sandwich_4,
        price: 349,
        description: "Savor layers of tangy chutney, creamy cheese, and crisp veggies in this delectable, vegetarian sandwich delight.",
        category: "Sandwich"
    },
]

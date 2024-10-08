import {v4 as uuidv4} from 'uuid';
export class MenuService{
    constructor(){
        this.items=[
            {
                id:uuidv4(),
                name:"Chicken dum biryani",
                price:199,
                cover:"https://orikaflavours.com/cdn/shop/articles/lndscpe.jpg?v=1695577046",
                categoryId:"non-veg",
                description:"The cool part in making dum biryani is, when you are placing the biryani for dum, your house will be smelling like heaven. And also when you open the biryani it is just heaven. Can't describe it in words."
            },
            {
                id:uuidv4(),
                name:"Mutton dum biryani",
                price:250,
                cover:"https://cookwithnoorain.com/wp-content/uploads/2024/06/IMG_2487-scaled.jpg",
                categoryId:"non-veg",
                description:"Easy Mutton Dum Biryani Recipe with step by step pictures. This is made with Mutton, Basmathi Rice and Whole Spices."
            },
            {
                id:uuidv4(),
                name:"Chicken mandi biryani",
                price:270,
                cover:"https://cdn.prod.website-files.com/5fe870209b4f367ca43b8b48/607daaf132261beb61190ef0_Screen-Shot-2020-09-04-at-11.53.34-PM-min.png",
                categoryId:"non-veg",
                description:"Chicken Mandi Biryani is served on giant plates; heaps of fluffy orange rice garnished with almonds, raisins, cashew and fried onions.Mandi is made from rice, meat (lamb or chicken), and a mixture of mild but intense spices."
            },
            {
                id:uuidv4(),
                name:"Donne biryani",
                price:220,
                cover:"https://i.ytimg.com/vi/EsvyiCbmJjc/maxresdefault.jpg",
                categoryId:"non-veg",
                description:"Donne biryani is cooked in two processes. The first is that the rice mixed with meat is cooked on firewood, which gives it a unique flavour. The second step is ladling this mix into the leaf, which further adds flavour."
            },

            {
                id:uuidv4(),
                name:"Veg biryani",
                price:150,
                cover:"https://i.ytimg.com/vi/cB288Jo5SF8/maxresdefault.jpg",
                categoryId:"veg",
                description:"Vegetable Biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spices. This easy Veg Biryani is a total crowd pleaser! You will love this for everything from busy night meals to holiday family dinners"
            },
            {
                id:uuidv4(),
                name:"Ghee rice",
                price:120,
                cover:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mZorisaIb5Gx5XqyyE6yIg8HaXjzQJfVhg&s",
                categoryId:"veg",
                description:"It is made by cooking rice in ghee (clarified butter) , which gives it a rich and aromatic flavour. The rice is often cooked with onions, spices, and coconut milk, which further enhances its flavour."
            },
            {
                id:uuidv4(),
                name:"Lemon rice",
                price:100,
                cover:"https://i.ytimg.com/vi/S582ox6c4l4/maxresdefault.jpg",
                categoryId:"veg",
                description:"Lemon rice recipe is a popular south Indian dish, made by mixing cooked rice, lemon juice, turmeric, salt and a variety of spices like mustard, curry leaves. It is popular because of it's tangy, flavourful nature and easiness with which it can be prepared"
            },
            {
                id:uuidv4(),
                name:"Veg meals",
                price:130,
                cover:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/South_Indian_non-veg_Meals.jpg/1024px-South_Indian_non-veg_Meals.jpg",
                categoryId:"veg",
                description:"The thali includes a steamed and a fried snacks with chutneys and dips, their iconic Dal Baati Churma, four veg curries, two dals (or a kadi), and a range of ...."
            },
        ]
    }

    getAllItems=()=>{
        return this.items
    }

    getItemsByCategory=(id)=>{
        return this.items.filter(eachItem=>eachItem.categoryId===id)
    }
}
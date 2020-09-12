// 1
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};

for (let x in product) {
    console.log(x);
}

// 1.1 What does x receives from product, property or value?
x receives property from product

// 1.2 Use the for loop to print/log out the following output
for (let x in product){
    console.log(`${x}: ${product[x]}`);
}
// 2
const task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};

const {subject, dueDate, assignTo} = task;
console.log(subject);
console.log(dueDate);
console.log(assignTo);

// 3
const jobSearch =
  "https://gist.githubusercontent.com/qhuydtvt/6870e14e544455f6de6081a83e365b5b/raw/adb147e19259e3ee9b093cb71228026e2417ab09/jobs.js";
// 3.1 Object
// 3.2 Array
// 3.3
for (let i in jobSearch.hits) {
    let {
      jobTitle,
      locationVIs,
      jobSalary,
      benefits,
      skills,
      jobRequirement,
    } = jobSearch.hits[i];
    console.log(jobTitle);
    console.log(`Locations: ${[...locations]}`);
    console.log(`Salary: ${jobSalary}`);
    for (let j = 0; j < benefits.length; j++) {
      let { benefitName, benefitValue } = benefits[j];
      console.log(`${benefitName}: ${benefitValue}`);
    }
    console.log(`Skills: ${skills}`);
    console.log(jobRequirement);
  }


// 4 Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table
let dictionary = {
    debug: 'The process of figuring out why your program has a certain error and how to fix it',
    done: 'When your task is complete, the only thing you have to do is to wait for users to use it',
    defect: 'The formal word for "error"',
    pm: 'The short version  of Project Manager, the person in charge of the final result of a project',
    uiux: 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels'
};

// 4.1 Write a script to simulate the lookup of the dictionary initialized in the previous example
    alert("Hi there, this is dev dictionary");
    while (true){
const keyword = prompt("Enter a keyword").toLowerCase();
    if (keyword == 'debug'){
        alert(dictionary.debug);
    }
    else if (keyword == 'done'){
        alert(dictionary.done);
    }
    else if (keyword == 'defect'){
        alert(dictionary.defect);
    }
    else if (keyword == 'pm'){
        alert(dictionary.pm);
    }
    else if (keyword == 'uiux'){
        alert(dictionary.uiux);
    }
    else {
        alert(`We could not find your word: ${keyword}`);
    }
};

// 5 Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color
let products = [];
let product1 = {
    name: 'Xiaomi portable charger 20000mah',
    brand: 'Xiaomi',
    price: 428,
    color: 'White',
    category: 'Charger'
};
let product2 = {
    name: 'VSmart Active 1',
    brand: 'VSmart',
    price: 5487,
    color: 'Black',
    category: 'Phone'
};
let product3 = {
    name: 'IPhone X',
    brand: 'Apple',
    price: 21490,
    color: 'Gray',
    category: 'Phone'
};
let product4 = {
    name: 'Samsung Galaxy A9',
    brand: 'Samsung',
    price: 8490,
    color: 'Blue',
    category: 'Phone'
};
products.push(product1, product2, product3, product4);
console.log(products);

// 5.1 Print/log name and price of all the products out
for (let i in products){ 
    const {name, price} = products[i];
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
};

// 5.2 Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users
for (let i = 0; i < products.length; i++){
    let position = i + 1;
    let {name, price} = products[i];
    console.log(`#${position}. ${name}`);
    console.log(`    Price: ${price}`);
};
let num = prompt("Enter product position");
    for (let j = num - 1; j < products.length; j++){
        console.log(products[j]);
        break;
    }

// 5.3 Write a script printing/logging out the products based on category input by users
let userCategory = prompt("Enter your category");
for (let i = 0; i < products.length; i++){
    let {name, price} = products[i];
    if (products[i].category == userCategory){
        console.log(`Name: ${name}`);
        console.log(`Price: ${price}`);
    };
};

// 5.4 Add providers to each product
products[0].providers = ['phukienzero', 'dientuccc'];
products[1].providers = ['tgdd', 'ddghn', 'vhstore'];
products[2].providers = ['tgdd'];
products[3].providers = ['tgdd'];
for (let i = 0; i < products.length; i++){
    let position = i + 1;
    let {name, price, providers} = products[i];
    console.log(`#${position}. Name: ${name}`);
    console.log(`    Price: ${price}`);
    console.log(`    Providers: ${providers}`);
};

// 5.5 (Optional) Search the products based on the wanted provider entered by user
let userProviders = prompt("Enter provider");
for (let i = 0; i < products.length; i++){
    let {name, brand, price, color, category, providers} = products[i];
    if (products[i].providers.indexOf(userProviders) > -1){
        console.log(`Name: ${name}`);
        console.log(`Brand: ${brand}`);
        console.log(`Price: ${price}`);
        console.log(`Color: ${color}`);
        console.log(`Category: ${category}`);
        console.log(`Providers: ${providers}`);
    }
}

// 6 Write a script to store and process the learning tasks to become a front-end developer
let learningTask = [
    {task: 'HTML', complete: 'false'},
    {task: 'CSS', complete: 'false'},
    {task: 'Basics of JavaScript', complete: 'false'},
    {task: 'Node Package Manager (npm)', complete: 'false'},
    {task: 'Git', complete: 'false'}
];
// 6.1 Print it out
console.clear();
console.log('Hi there, this is your learing tasks to front-end developer career:');
for (let i = 0; i < learningTask.length; i++){
    let {task, complete} = learningTask[i];
    let position = i + 1;
    console.log(`${position}. ${task}`);
    console.log(`   Complete: ${complete}`);
}
// 6.2 (.3, .4, .5, .6)
while (true){
let userAction = prompt("Enter your command (New, Delete, Update, Complete, Read)").toLowerCase();
switch (userAction) {
    default:
        alert("Invalid command, please enter again");
        break; 
    case "new":
        const newAction = prompt('Enter new task:')
        learningTask.push({task: newAction, complete: 'false'});
        break;    
    case "update":
        const updatePosition = Number(prompt("Enter position"));
        let newUpdate = prompt("Enter new title");
        let i = updatePosition - 1;
        learningTask[i].task = newUpdate;
        break;
    case "complete":
        const completePosition = Number(prompt("Enter position"));
        let j = completePosition - 1;
        learningTask[j].complete = 'true';
        break;  
    case "delete":
        const deletePosition = Number(prompt("Enter position"));
        let f = deletePosition - 1;
        learningTask.slice(k, 1);
    case "read":
        for (let k = 0; k < learningTask.length; k++){
            let {task, complete} = learningTask[k];
            let position = k + 1;
            let completed = '[ ]';
            if (complete === 'true'){
                completed = '[x]';
            }
            console.log(`${position}. ${completed} ${task}`);
        }
  }
}

// 7
const pos = {
    x: 200,
    y: 50,
};
rt(90);
penup();
fd(pos.x);
lt(90);
fd(pos.y);
pendown();

// 8
const pos = {
    x: 200,
    y: 50,
    width: 20,  
};
rt(90);
penup();
fd(pos.x);
lt(90);
fd(pos.y);
pendown();
for (let i = 0; i < 4; i++){
    rt(90);
    fd(pos.width);
}

// 9
const rect = {
    x: 100,
    y: 50,
    width: 20,
    height: 40,
};
rt(90);
penup();
fd(rect.x);
lt(90);
fd(rect.y);
pendown();
for (let i = 0; i < 2; i++){
    rt(90);
    fd(rect.width);
    rt(90);
    fd(rect.height);
};

// 10
let cmds = [
    {
        shape: 'rect',
        x: 8,
        y: 70,
        width: 12,
        height: 40,
    },
    {
        shape: 'square',
        x: 20,
        y: 40,
        width: 50,
    },
];
for (let i = 0; i < cmds.length; i++){
    if (cmds[i].shape == 'rect'){
        rt(90);
        penup();
        fd(cmds.x);
        lt(90);
        fd(cmds.y);
        pendown();
    for (j = 0; j < 2; j++){
        rt(90);
        fd(cmds.width);
        rt(90);
        fd(cmds.height);
        }
    }
    else if (cmds[i].shape == 'square'){
        rt(90);
        penup();
        fd(cmds.x);
        lt(90);
        fd(cmds.y);
        pendown();
    for(f = 0; f < 4; f++){
        rt(90);
        fd(cmds.width);
        };
    };
};





 
 










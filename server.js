const gateman = require("express")

const app = gateman()

const PORT =  process.env.PORT || 5001

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}....`)
})


// handling get request on server.js
//my endpoints --> /users, /years, /todos
//api = endpoint + function + request type


const users = [
    {
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
        },
    {
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"
    },
    {
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
    },
    {
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
    },
    {
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca"
    }


]
const years = [ 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024.]
const languages = {
    1: "Python",
    2: "JavaScript",
    3: "Java",
    4: "C++",
    5: "Ruby",
    6: "PHP",
    7: "C#",
    8: "Swift",
    9: "Go",
    10: "TypeScript",
    11: "Kotlin",
    12: "R",
    13: "Perl",
    14: "Rust",
    15: "Dart"
}

app.get("/users", (request, response)=>{

    response.json(users)
    
})

app.get("/years", (request, response)=>{

    response.json(years)   
})
app.get("/languages", (request, response)=>{

    response.json(languages)   
})
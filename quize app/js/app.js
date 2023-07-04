const questions=[
    {

        'que':'which of the following is a markup language?',
        'a' : 'HTML',
        'b': 'CSS',
        'c' : 'JAVASCRIPT',
        'd': 'PHP',
        'correct':'a'
    },
    {

        'que':"what year javascript launched?",
        'a' : "1996",
        'b': "1995",
        'c' : "1994",
        'd' : "none of the above",
        'correct':"b"
    },
    {

        'que':"what does css stands for?",
        'a': "hypertext markup lamguage",
        'b': "cascading style sheet",
        'c' : "json object notation ",
        'd' : "hellicopter treminated",
        'correct':"b"
    },
]
 let index=0;
 const quesBox= document.getElementById("quesBox")
 const optionInput= document.querySelectorAll(".option")
 const loadQiestion = ()=>{
    const data=questions[index]
    console.log(data)
    quesBox.inner
 }

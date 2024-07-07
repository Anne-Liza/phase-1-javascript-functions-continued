//function declaration
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun("hike"));
console.log(saturdayFun("bathe my dog"));

//function expression
function mondayWork(task = "go to the office"){
    return`This Monday, I will ${task}.`;
};
console.log(mondayWork());
console.log(mondayWork("start my leave."));

//wrapAdjective
function wrapAdjective(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
};
console.log(wrapAdjective("*")("a hard worker"));
console.log(wrapAdjective("||")("a dedicated programmer"));

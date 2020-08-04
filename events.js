let events = new Array();

events.push({
    id: 1,
    description : "blabla 1",
    yes : {
        text : "yes text",
        food : 1,
        happy : 2,
        strength : 3,
        result : "yes result"
    }, 
    no : {
        text : "no text",
        food : -1,
        happy : -2,
        strength : -3,
        result : "no result"
    }
});

module.exports = events;
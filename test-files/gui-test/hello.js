// initialize jo
jo.load();

// setup a stack and screen
var stack = new joStackScroller();
var scn = new joScreen(stack);

// create our view card
var card = new joCard([
    new joTitle("Hello"),
    new joCaption("Hello World!"),
    new joDivider(),
    new joButton("OK").selectEvent.subscribe(function() {
        stack.hide();
    })
]);

// put the card on our view stack
stack.push(card);

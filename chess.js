console.log("js working");

var queen = {
    direction: "S",
    position: { x: 4, y: 4 }
};


function changeDirection(number, direction) {
    var temp;
    var temp1;
    switch (direction) {
        case "E":
            temp = queen.position.y + number; //temp = 0+3
            if (temp > 7 || temp < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary E")
            } else {
                queen.position.y = temp; //y=3
            }
            break;


        case "N":
            temp = queen.position.y - number; //temp = 0+3
            if (temp > 7 || temp < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary N")
            } else {
                queen.position.x = temp; //y=3
            }
            break;


        case "S":
            temp = queen.position.x + number; //temp = 0+3
            if (temp > 7 || temp < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary S")
            } else {
                queen.position.x = temp; //y=3
            }
            break;


        case "W":
            temp = queen.position.y - number; //temp = 0+3
            if (temp > 7 || temp < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary W")
            } else {
                queen.position.y = temp; //y=3
            }
            break;


        case "NE":
            temp = queen.position.x - number;
            temp1 = queen.position.y + number; //temp = 0+3
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary NE")
            } else {
                queen.position.y = temp1; //y=3
                ueen.position.x = temp;
            }
            break;


        case "NW":
            temp = queen.position.x - number;
            temp1 = queen.position.y - number; //temp = 0+3
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary NE")
            } else {
                queen.position.y = temp1; //y=3
                ueen.position.x = temp;
            }
            break;

        case "SE":
            temp = queen.position.x + number;
            temp1 = queen.position.y + number; //temp = 0+3
            if (temp > 7 || temp < 0 || temp1 > 7 || temp1 < 0) {
                console.log("Out of boundary");
                document.write("Out of boundary NE")
            } else {
                queen.position.y = temp1; //y=3
                ueen.position.xs = temp;
            }
            break;

    }

}


function play(input) //N3 S3N4 for this v use split()
{
    var value = input().split(" ");
    //console.log(value);

    value.forEach(element => {
            let number = Number(element.slice(element.length - 1)); //slice- for partic value
            let direction = (element.slice(0, element.length - 1));
            //console.log("Number ->" +number);
            //console.log("Direction ->" +direction);
            changeDirection(number, direction)
        }


        changeDirection() console.log("Your position =>" + board[queen.position.x][queen.position.y])
    };


    var board =

        [
            ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"], //x=0,y=0  0,1  0,2

            ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

            ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

            ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

            ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

            ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

            ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

            ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
        ];

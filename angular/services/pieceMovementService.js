app.service('pieceMovementService', function ($rootScope) {

    this.generateMovement = function (obj, directions) {


        switch (obj.name) {

            case 'Rook':

                output = [];


                for (let direction of directions) { //loop through all directions and start calculating movements



                    if (direction === 'vertical-up') {
                        for (let y = obj.y - 1; y >= 0; y--) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = 0; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'vertical-down') {
                        for (let y = obj.y + 1; y <= $rootScope.board.max_rows; y++) {
                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x, y)) {//empty or enemy is present
                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x,
                                    y: y
                                });
                                // console.log(`Checking position X:${this.x} / Y:${y}`);
                                let whoIsThere = obj.returnPiece(obj.x, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = $rootScope.board.max_rows;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = $rootScope.board.max_rows; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'horizontal-left') {
                        for (let x = obj.x - 1; x >= 0; x--) {
                            //check if square is available
                            if (obj.checkPositionAvailable(x, obj.y)) {//empty or enemy is present
                                //add allowed square to highlighting
                                output.push({
                                    x: x,
                                    y: obj.y
                                });
                                // console.log(`Checking position X:${this.x} / Y:${y}`);
                                let whoIsThere = obj.returnPiece(x, obj.y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        x = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                x = 0; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'horizontal-right') {
                        for (let x = obj.x + 1; x <= $rootScope.board.max_columns; x++) {
                            //check if square is available
                            if (obj.checkPositionAvailable(x, obj.y)) {//empty or enemy is present
                                //add allowed square to highlighting
                                output.push({
                                    x: x,
                                    y: obj.y
                                });
                                // console.log(`Checking position X:${this.x} / Y:${y}`);
                                let whoIsThere = obj.returnPiece(x, obj.y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        x = $rootScope.board.max_columns;
                                    }
                                }
                            } else { //position not available (friend inside)
                                x = $rootScope.board.max_columns; //stop highlighting
                            }
                        }
                    }




                }


                break;

            case 'Bishop':

                output = [];


                for (let direction of directions) { //loop through all directions and start calculating movements



                    if (direction === 'diagonal-left-up') {
                        let loopNumber = 1;
                        for (let y = obj.y - 1; y >= 0; y--) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x - loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x - loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = 0; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }


                    if (direction === 'diagonal-right-up') {
                        let loopNumber = 1;
                        for (let y = obj.y - 1; y >= 0; y--) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x + loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x + loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = 0; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }

                    if (direction === 'diagonal-right-down') {
                        let loopNumber = 1;
                        for (let y = obj.y + 1; y <= $rootScope.board.max_columns; y++) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x + loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x + loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = $rootScope.board.max_columns;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = $rootScope.board.max_columns; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }

                    if (direction === 'diagonal-left-down') {
                        let loopNumber = 1;
                        for (let y = obj.y + 1; y <= $rootScope.board.max_columns; y++) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x - loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x - loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = $rootScope.board.max_columns;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = $rootScope.board.max_columns; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }












                }


                break;

            case 'Queen':

                output = [];


                for (let direction of directions) { //loop through all directions and start calculating movements



                    if (direction === 'vertical-up') {
                        for (let y = obj.y - 1; y >= 0; y--) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = 0; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'vertical-down') {
                        for (let y = obj.y + 1; y <= $rootScope.board.max_rows; y++) {
                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x, y)) {//empty or enemy is present
                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x,
                                    y: y
                                });
                                // console.log(`Checking position X:${this.x} / Y:${y}`);
                                let whoIsThere = obj.returnPiece(obj.x, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = $rootScope.board.max_rows;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = $rootScope.board.max_rows; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'horizontal-left') {
                        for (let x = obj.x - 1; x >= 0; x--) {
                            //check if square is available
                            if (obj.checkPositionAvailable(x, obj.y)) {//empty or enemy is present
                                //add allowed square to highlighting
                                output.push({
                                    x: x,
                                    y: obj.y
                                });
                                // console.log(`Checking position X:${this.x} / Y:${y}`);
                                let whoIsThere = obj.returnPiece(x, obj.y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        x = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                x = 0; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'horizontal-right') {
                        for (let x = obj.x + 1; x <= $rootScope.board.max_columns; x++) {
                            //check if square is available
                            if (obj.checkPositionAvailable(x, obj.y)) {//empty or enemy is present
                                //add allowed square to highlighting
                                output.push({
                                    x: x,
                                    y: obj.y
                                });
                                // console.log(`Checking position X:${this.x} / Y:${y}`);
                                let whoIsThere = obj.returnPiece(x, obj.y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        x = $rootScope.board.max_columns;
                                    }
                                }
                            } else { //position not available (friend inside)
                                x = $rootScope.board.max_columns; //stop highlighting
                            }
                        }
                    }


                    if (direction === 'diagonal-left-up') {
                        let loopNumber = 1;
                        for (let y = obj.y - 1; y >= 0; y--) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x - loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x - loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = 0; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }


                    if (direction === 'diagonal-right-up') {
                        let loopNumber = 1;
                        for (let y = obj.y - 1; y >= 0; y--) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x + loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x + loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = 0;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = 0; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }

                    if (direction === 'diagonal-right-down') {
                        let loopNumber = 1;
                        for (let y = obj.y + 1; y <= $rootScope.board.max_columns; y++) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x + loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x + loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = $rootScope.board.max_columns;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = $rootScope.board.max_columns; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }

                    if (direction === 'diagonal-left-down') {
                        let loopNumber = 1;
                        for (let y = obj.y + 1; y <= $rootScope.board.max_columns; y++) {
                            // console.log(`Checking position X:${obj.x} / Y:${y}`);

                            //check if square is available
                            if (obj.checkPositionAvailable(obj.x - loopNumber, y)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x - loopNumber,
                                    y: y
                                });

                                let whoIsThere = obj.returnPiece(obj.x + loopNumber, y);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.
                                        // console.log(`Piece at this position is a: ${whoIsThere.name} - Team: ${whoIsThere.team}`);
                                        y = $rootScope.board.max_columns;
                                    }
                                }
                            } else { //position not available (friend inside)
                                y = $rootScope.board.max_columns; //stop highlighting
                            }
                            loopNumber++;
                        }
                    }






                }


                break;

            case 'King':

                output = [];


                for (let direction of directions) { //loop through all directions and start calculating movements



                    if (direction === 'up') {

                            //check if square is available

                            if (obj.checkPositionAvailable(obj.x, obj.y-1)) {//empty or enemy is present

                                //add allowed square to highlighting
                                output.push({
                                    x: obj.x,
                                    y: obj.y-1
                                });

                                let whoIsThere = obj.returnPiece(obj.x, obj.y-1);
                                if (whoIsThere) { //lets see if its an enemy

                                    if (whoIsThere.team !== obj.team) { //its an enemy!
                                        //if its an enemy, just highlight and stop calculating moves.

                                    }
                                }
                            }

                    }

                    if (direction === 'diagonal-up-right') {

                        //check if square is available

                        if (obj.checkPositionAvailable(obj.x+1, obj.y-1)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x+1,
                                y: obj.y-1
                            });

                            let whoIsThere = obj.returnPiece(obj.x+1, obj.y-1);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                    if (direction === 'diagonal-up-left') {

                        //check if square is available
                        if (obj.checkPositionAvailable(obj.x-1, obj.y-1)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x-1,
                                y: obj.y-1
                            });

                            let whoIsThere = obj.returnPiece(obj.x-1, obj.y-1);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                    if (direction === 'diagonal-down-left') {

                        //check if square is available
                        if (obj.checkPositionAvailable(obj.x-1, obj.y+1)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x-1,
                                y: obj.y+1
                            });

                            let whoIsThere = obj.returnPiece(obj.x-1, obj.y+1);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                    if (direction === 'diagonal-down-right') {

                        //check if square is available
                        if (obj.checkPositionAvailable(obj.x+1, obj.y+1)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x+1,
                                y: obj.y+1
                            });

                            let whoIsThere = obj.returnPiece(obj.x+1, obj.y+1);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                    if (direction === 'down') {

                        //check if square is available
                        if (obj.checkPositionAvailable(obj.x, obj.y+1)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x,
                                y: obj.y+1
                            });

                            let whoIsThere = obj.returnPiece(obj.x, obj.y+1);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                    if (direction === 'left') {

                        //check if square is available
                        if (obj.checkPositionAvailable(obj.x-1, obj.y)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x-1,
                                y: obj.y
                            });

                            let whoIsThere = obj.returnPiece(obj.x-1, obj.y);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                    if (direction === 'right') {

                        //check if square is available
                        if (obj.checkPositionAvailable(obj.x+1, obj.y)) {//empty or enemy is present

                            //add allowed square to highlighting
                            output.push({
                                x: obj.x+1,
                                y: obj.y
                            });

                            let whoIsThere = obj.returnPiece(obj.x+1, obj.y);
                            if (whoIsThere) { //lets see if its an enemy

                                if (whoIsThere.team !== obj.team) { //its an enemy!
                                    //if its an enemy, just highlight and stop calculating moves.

                                }
                            }
                        }

                    }

                }


                break;

        }

        // console.log(output);

        return output;

    }
});
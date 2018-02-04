app.controller('dragDropCtrl', ($scope, $rootScope) => {

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
     PLAYER EVENTS
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


    $scope.onDragStart = function (event, ui, obj) {

        //get dragged object dat
        $scope.draggedObj = obj;


        //inicia calculo de movimentos




        if(typeof $scope.draggedObj.firstMove !== 'undefined') {   //if the piece has this propriety... (Pawn)
            if(!$scope.draggedObj.firstMove) { //if it didnt execute its first move
                $scope.draggedObj.calculateFirstMoves(); //calculate it to execution


            } else {
                //if already executed its moves. just move normally

                $scope.draggedObj.calculateMoves(this.x, this.y);

            }
        } else {
            $scope.draggedObj.calculateMoves(this.x,this.y); //normal piece, just calculate moves

        }


        $rootScope.board.highlight(obj, true);
    };


    $scope.onDragStop = function (event, ui, obj) {
//highlight the board

        if(obj.name === 'Pawn') {
            obj.turnOffAttackHighlights();
        }


        //if its this object first move
        $rootScope.board.highlight(obj, false);

    };

    $scope.onDrop = (event, ui, dropObj) => {

        $rootScope.board.highlight($scope.draggedObj, false);

        //lets verify if there's an enemy on position

        let posPiece = $scope.draggedObj.returnPiece(dropObj.x, dropObj.y);

        if(posPiece) {


            if(posPiece.team !== $scope.draggedObj.team) {//if its from a different team

                //KILL IT!!!!

                $scope.draggedObj.killPiece(posPiece);

            }

        }

        $scope.draggedObj.changePosition(dropObj.x, dropObj.y) //change piece data position on board

    };

    $scope.onDrag = (event, ui, obj) => {

    };



});
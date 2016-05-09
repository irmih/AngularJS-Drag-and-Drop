var App = angular.module('dad', ['ngDragDrop', 'ui.bootstrap']);

App.controller('oneCtrl', function ($scope, $window, $timeout) {
    /*the user is supposed to drop the glasses into the right field. To check if all three items have been moved, the variable
    'alleDreiDrin' gets the value 'xxx'. In case, there has been a true match, the variable 'dasWarEinMatch' gets the value 'mmm'
    */

    $scope.alleDreiDrin = "x";
    /* in case four times "x" */
    $scope.dasWarEinMatch = "m";
    /*in case four times "m"*/
    $scope.inhaltNichtgleich;

    $scope.mojitoWarSchon = false;
    /*In case of a drop down, they turn to "true" so it is not possible to drop another time*/
    $scope.pcWarSchon = false;
    $scope.soleroWarSchon = false;


    $scope.pinaC1 = {title: 'Pina Colada'};
    $scope.pinaC2 = {};

    $scope.mojito1 = {title: 'Mojitoo'};
    $scope.mojito2 = {};

    $scope.solero1 = {title: 'Solero'};
    $scope.solero2 = {};


    $scope.abgedropptMojito = function () {

        if ($scope.mojitoWarSchon == true) { /* in case, there has been a "drop" already */
            $scope.fehleranzeige = "Vorsicht!!! Es können nicht zwei Cocktails in ein Feld.";
            $timeout(function () {
                $scope.nummoi();
            }, 3000);
        }
        else {
            $scope.mojitoWarSchon = true;
        }

        $scope.alleDreiDrin += "x";

        if ($scope.mojito1.title == undefined) {  /* it is hidden in there */
            /* check if there has been a match*/
            $scope.hierz = "jaaaa, match";
            $scope.dasWarEinMatch += "m";
        }
        else {
            $scope.hierz = $scope.mojito2.title + " ist nix  =" + $scope.mojito1.title;
        }
    }


    $scope.abgedropptSolero = function () {

        if ($scope.soleroWarSchon == true) {
            $scope.fehleranzeige = "Vorsicht!!! Es können nicht zwei Cocktails in ein Feld.";
            $timeout(function () {
                $scope.nummoi();
            }, 3000);
        }
        else {
            $scope.soleroWarSchon = true;
        }

        $scope.alleDreiDrin += "x";

        if ($scope.solero1.title == undefined) {
            $scope.hierz = "jaaaa sol, match";
            $scope.dasWarEinMatch += "m";
        }
        else {
            $scope.hierz = $scope.solero2.title + " ist nix  =" + $scope.solero1.title;
        }
    }

    $scope.abgedropptPinaC = function () {

        if ($scope.pcWarSchon == true) {
            $scope.fehleranzeige = "Vorsicht!!! Es können nicht zwei Cocktails in ein Feld.";
            $timeout(function () {
                $scope.nummoi();
            }, 3000);
        }
        else {
            $scope.pcWarSchon = true;
        }

        $scope.alleDreiDrin += "x";

        if ($scope.pinaC1.title == undefined) {
            $scope.hierz = "jaaaa pc, match";
            $scope.dasWarEinMatch += "m";
        }
        else {
            $scope.hierz = $scope.pinaC2.title + " ist nix  =" + $scope.pinaC1.title;
        }
    }


    $scope.$watch('alleDreiDrin', function () {
        if ($scope.alleDreiDrin == "xxxx") {
            $scope.bitteUberprufen();
        }
    });


    $scope.bitteUberprufen = function () {
        if ($scope.dasWarEinMatch == "mmmm") {
            $scope.erfolgsAnzeige = "Glückwusch!!! Du rockst, das war richtig!";
        }
        else {
            $scope.fehleranzeige = "Das war leider nicht richtig. Probiers doch gleich nochmal!";
            $timeout(function () {
                $scope.nummoi();
            }, 6000);
        }
    }


    $scope.nummoi = function () {
        $window.location.reload();
    }

});


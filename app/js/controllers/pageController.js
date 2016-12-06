app.controller('pageController', ['$scope', '$location', '$routeParams', '$http', 'p5', function($scope, $location, $routeParams, $http, p5) {

    $scope.maxPages = 22;
    $scope.pageId = $routeParams.pageId || 1;
    
    $scope.nextPage = function($event) {
        if (angular.isDefined($event.stopPropagation)) {
            $event.stopPropagation();
        }
        $event.preventDefault();
        $scope.effect = $scope.effects[0].className;        
        $scope.pageId = (++$scope.pageId % $scope.maxPages) || $scope.maxPages-1;
        $location.path("/page/" + $scope.pageId);
    };
    $scope.previousPage = function($event) {
        if (angular.isDefined($event.stopPropagation)) {
            $event.stopPropagation();
        }
        $event.preventDefault();
        $scope.effect = $scope.effects[7].className;
        $scope.pageId = (--$scope.pageId % $scope.maxPages) || 1;
        $location.path("/page/" + $scope.pageId);
    };

    $scope.pageClass = 'page-' + $scope.pageId;

}])
.factory('circleSketch01', ['p5', function(p5) {
  return function(p) {
    p.setup = function() {
        p.createCanvas(620, 300); // équivalent Processing : size(620, 300);
        p.background(0);
        p.noStroke();

        // small planet
        p.fill(255);
        p.ellipse(252, 144, 100, 100);

        // big semi-planet
        p.fill(200);
        p.arc(479, 300, 280, 280, p.PI, p.TWO_PI);

        // very small planet
        p.fill(150);
        p.arc(p.width/2+40, p.height/2+60, 20, 20, 0, p.TWO_PI, p.CHORD);
        
        p.textSize(10);
        p.fill('red');
        p.text("Cercle 01", p.width-80, p.height-10);
    };
  };
}])
.factory('circleSketch02', ['p5', function(p5) {
  return function(p) {
    p.setup = function() {
        p.createCanvas(620, 250);
        p.background(0);
        p.noStroke();
        p.frameRate(20); 
    };
    p.draw = function() {
        var posx = p.int(p.random(0, p.width));
        var posy = p.int(p.random(0, p.height));
        var ray = p.int(p.random(0, 100));
        p.fill(p.random(1, 255));
        p.ellipse(posx, posy, ray, ray);
        if (p.frameCount > 100) {
            p.textSize(10);
            p.fill('red');
            p.text("Cercle 02", p.width-80, p.height-10);
            p.noLoop();
        }
    };
    };
}])
.factory('circleSketch03', ['p5', function(p5) {
  return function(p) {
    function point_cercle(posx, posy, ray, angle) {
      var x = posx + ray * p.cos(angle);
      var y = posy + ray * p.sin(angle);
      p.point(x, y);
    }
    p.setup = function() {
      p.createCanvas(620, 300);
      p.noFill();
      p.stroke('black');
    };
    p.draw = function() {
      console.time('sketch');
      var i, rayon = 100, pas_increment = .1;
      var posx = p.width/2, posy = p.height/2;
      for (i = 0 ; i <= 360; i += pas_increment) {
          point_cercle(posx, posy, rayon, p.radians(i));
      }
      console.timeEnd('sketch');
      if (p.frameCount > 100) {
          p.textSize(10);
          p.fill('red');p.noStroke();
          p.text("Cercle 03", p.width-80, p.height-10);
          p.noLoop();
      }
    };    
    };
}])
.factory('circleSketch04', ['p5', function(p5) {
  return function(p) {  
    var i=0, rayon=100, posx=0, posy=0, pas_increment=.5; ;
    p.setup = function() {
      p.createCanvas(620, 300);
      p.noFill();
      p.stroke('black');
      posx = p.width/2 ;
      posy = p.height/2;
    };
    p.draw = function() {
      var angle = p.radians(i);
      var x = posx + rayon * p.cos(angle);
      var y = posy + rayon * p.sin(angle);
      p.point(x, y);
      i = i + pas_increment;
      if (i > 360) {
          p.textSize(10);
          p.fill('red');p.noStroke();
          p.text("Cercle 04", p.width-80, p.height-10);
          p.noLoop();
      }
    };    
    };
}])
.factory('circleSketch05', ['p5', function(p5) {
  return function(p) {  
    var x, y, posx, posy;
    var data = []; // tableau des coordonnées XY
    var ray = 100;
    var i, imax = 0;
    var pas = .5;

    function point_cercle(posx, posy, ray, angle) {
      var x,y;
      x = posx + ray * p.cos(angle);
      y = posy + ray * p.sin(angle);
      data.push({x:x, y:y}); 
    }

    p.setup = function() {
      p.createCanvas(620, 300);
      p.noFill();
      p.stroke('black');
      posx = p.width/2;
      posy = p.height/2;
      for (i = 0; i <= 360; i+= pas) {
          point_cercle(posx, posy, ray, p.radians(i));
      }
      i = 0 ;
      imax = data.length;
    };

    p.draw = function() {
      if (i < imax) {
          p.point(data[i].x, data[i].y);
          i += 1;
      } else {
          p.textSize(10);
          p.fill('red');p.noStroke();
          p.text("Cercle 05", p.width-80, p.height-10);
          noLoop();
      }  
    };

    };
}])
.factory('circleSketch06', ['p5', function(p5) {
  return function(p) {  
    var data = []; // tableau des coordonnées XY
    var ray = 100;
    var i, imax = 0;
    var pas = .5;

    function point_cercle(posx, posy, ray, angle) {
      var x,y;
      x = posx + ray * p.cos(angle);
      y = posy + ray * p.sin(angle);
      data.push({x:x, y:y}); 
    }

    p.setup = function() {
      p.createCanvas(620, 300);
      p.background(255);
      p.noFill();
      p.stroke('black');
      var posx = p.width/2;
      var posy = p.height/2;
      for (i = 0; i <= 360; i+= pas) {
          point_cercle(posx, posy, ray, p.radians(i));
      }
      i = 0 ;
      imax = data.length;
    };

    p.draw = function() {
        var col = 0; // le premier point est noir
        p.stroke(col); 
        if (i < imax) {
            p.point(data[i].x, data[i].y);  // le point principal (le "guide")
            i += 1;
            // boucle de tracé des 5 points "suiveurs"
            for (var j = i-1 , k=0; j >= 0 && k<=5 ; j -= 1, k--) {
              col += 5; // effet de dégradé pour les points "suiveurs"
              p.stroke(col);
              p.point(data[j].x, data[j].y); // tracé des points "suiveurs"
            }
        } else {
            p.textSize(10);
            p.fill('red');p.noStroke();
            p.text("Cercle 06", p.width-80, p.height-10);
            p.noLoop();
        }  
      };

    };
}])
.factory('circleSketch07', ['p5', function(p5) {
  return function(p) {  
    // Triangles aléatoires inscrits dans un cercle
    var x, y, posx, posy;
    var data = [];
    var ray = 150;
    var i, imax = 0;
    var pas = .5;

    function point_cercle(posx, posy, ray, angle) {
      var x,y;
      x=posx+ray*p.cos(angle);
      y=posy+ray*p.sin(angle);
      data.push({x:x, y:y}); 
    }

    p.setup = function() {
      p.createCanvas(620, 300);
      p.fill(120, 10);
      p.stroke(220);
      posx = p.width/2;
      posy = p.height/2;

      // précalcul du cercle pour stockage dans le tableau "data"
      for (i = 0; i <= 360; i+= pas) {
          point_cercle(posx, posy, ray, p.radians(i));
      }
      i = 0 ;
      imax = data.length-1;

      p.frameRate(20); // animation pas trop rapide 
    };

    p.draw = function() {
      var coords = [];
      var tmppos ;
      tmppos = p.int(p.random(0, imax));
      coords.push({x:data[tmppos].x, y:data[tmppos].y});
      tmppos = p.int(p.random(0, imax));
      coords.push({x:data[tmppos].x, y:data[tmppos].y});
      tmppos = p.int(p.random(0, imax));
      coords.push({x:data[tmppos].x, y:data[tmppos].y});

      p.triangle(coords[0].x, coords[0].y, coords[1].x, coords[1].y, coords[2].x, coords[2].y);

      if (p.frameCount > 200) {
          p.textSize(10);
          p.fill('red');p.noStroke();
          p.text("Cercle 07", p.width-80, p.height-10);
          p.noLoop();
      }
    };

    };
}])
;
var levels = [
  [[0, 0]],
  [[50, 0], [100, 100]],
  [[50, 30], [100, 100, 2], [200, 100, 2]]
];

var loadLevel = function(n) {
  n = n - 1;
  var level;

  if (n >= levels.length) {
    level = levels[levels.length - 1];
  } else {
    level = levels[n];
  }

  var blocks = [];
  for (var i = 0; i < level.length; i++) {
    var p = level[i];
    var b = Block(p);
    blocks.push(b);
  }
  return blocks;
};

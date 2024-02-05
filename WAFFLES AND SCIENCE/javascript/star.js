function star(ctx1,mouseX,mouseY,canvas) {


var gradient;

      // layer1/Path
      ctx1.save();
      ctx1.beginPath();
      ctx1.moveTo(7.7, 121.9);
      ctx1.bezierCurveTo(22.2, 112.9, 60.1, 96.3, 68.5, 86.7);
      ctx1.bezierCurveTo(76.2, 77.9, 81.6, 47.3, 79.6, 32.2);
      ctx1.bezierCurveTo(77.7, 17.1, 80.9, 7.5, 90.4, 1.6);
      ctx1.bezierCurveTo(100.9, -4.9, 122.8, 9.6, 132.4, 20.6);
      ctx1.bezierCurveTo(144.7, 34.7, 155.6, 44.3, 175.1, 36.3);
      ctx1.bezierCurveTo(194.6, 28.4, 229.9, 8.2, 243.9, 16.7);
      ctx1.bezierCurveTo(261.5, 27.2, 243.3, 72.5, 246.0, 94.9);
      ctx1.bezierCurveTo(247.9, 110.4, 266.8, 117.2, 280.8, 124.2);
      ctx1.bezierCurveTo(289.2, 128.4, 299.5, 133.6, 304.3, 143.7);
      ctx1.bezierCurveTo(306.1, 147.6, 308.3, 158.3, 290.4, 169.0);
      ctx1.bezierCurveTo(270.8, 180.9, 239.8, 193.3, 234.7, 205.8);
      ctx1.bezierCurveTo(228.8, 220.4, 231.5, 248.8, 234.2, 266.8);
      ctx1.bezierCurveTo(236.5, 281.3, 212.6, 283.9, 193.2, 270.9);
      ctx1.bezierCurveTo(164.7, 251.7, 153.4, 233.4, 134.7, 243.4);
      ctx1.bezierCurveTo(116.0, 253.3, 88.6, 268.2, 72.9, 265.3);
      ctx1.bezierCurveTo(59.1, 262.8, 56.4, 250.2, 62.6, 210.3);
      ctx1.bezierCurveTo(68.4, 172.3, 43.9, 171.2, 13.2, 154.7);
      ctx1.bezierCurveTo(0.2, 147.7, -6.0, 130.5, 7.7, 121.9);
      ctx1.closePath();
      gradient = ctx1.createLinearGradient(56.5, 311.3, 242.7, -16.0);
      gradient.addColorStop(0.00, "rgb(255, 255, 255)");
      gradient.addColorStop(0.23, "rgb(255, 232, 165)");
      gradient.addColorStop(0.45, "rgb(255, 210, 75)");
      gradient.addColorStop(0.64, "rgb(252, 193, 64)");
      gradient.addColorStop(0.83, "rgb(249, 176, 52)");
      ctx1.fillStyle = gradient;
      ctx1.fill();

      // layer1/Ellipse
      ctx1.beginPath();
      ctx1.moveTo(149.9, 187.4);
      ctx1.bezierCurveTo(144.4, 183.5, 143.1, 175.8, 147.0, 170.3);
      ctx1.bezierCurveTo(150.9, 164.8, 158.6, 163.6, 164.1, 167.5);
      ctx1.bezierCurveTo(169.6, 171.4, 170.8, 179.0, 166.9, 184.5);
      ctx1.bezierCurveTo(163.0, 190.0, 155.4, 191.3, 149.9, 187.4);
      ctx1.closePath();
      ctx1.fillStyle = "rgb(255, 254, 255)";
      ctx1.fill();

      // layer1/Ellipse
      ctx1.beginPath();
      ctx1.moveTo(153.8, 144.5);
      ctx1.bezierCurveTo(152.5, 143.6, 152.2, 141.7, 153.1, 140.4);
      ctx1.bezierCurveTo(154.1, 139.0, 155.9, 138.7, 157.3, 139.7);
      ctx1.bezierCurveTo(158.6, 140.6, 158.9, 142.5, 158.0, 143.8);
      ctx1.bezierCurveTo(157.0, 145.2, 155.1, 145.5, 153.8, 144.5);
      ctx1.closePath();
      ctx1.fill();

      // layer1/Ellipse
      ctx1.beginPath();
      ctx1.moveTo(150.2, 186.6);
      ctx1.bezierCurveTo(147.1, 184.4, 145.4, 181.4, 146.3, 180.1);
      ctx1.bezierCurveTo(147.3, 178.7, 150.6, 179.3, 153.7, 181.5);
      ctx1.bezierCurveTo(156.8, 183.7, 158.5, 186.6, 157.6, 188.0);
      ctx1.bezierCurveTo(156.6, 189.4, 153.3, 188.8, 150.2, 186.6);
      ctx1.closePath();
      ctx1.fillStyle = "rgb(175, 224, 239)";
      ctx1.fill();

      // layer1/Ellipse
      ctx1.beginPath();
      ctx1.moveTo(183.3, 140.4);
      ctx1.bezierCurveTo(177.8, 136.5, 176.5, 128.9, 180.4, 123.4);
      ctx1.bezierCurveTo(184.3, 117.9, 191.9, 116.6, 197.4, 120.5);
      ctx1.bezierCurveTo(203.0, 124.4, 204.2, 132.1, 200.3, 137.6);
      ctx1.bezierCurveTo(196.4, 143.1, 188.8, 144.3, 183.3, 140.4);
      ctx1.closePath();
      ctx1.fillStyle = "rgb(255, 254, 255)";
      ctx1.fill();

      // layer1/Ellipse
      ctx1.beginPath();
      ctx1.moveTo(183.6, 139.6);
      ctx1.bezierCurveTo(180.5, 137.4, 178.7, 134.5, 179.7, 133.1);
      ctx1.bezierCurveTo(180.7, 131.7, 184.0, 132.4, 187.1, 134.6);
      ctx1.bezierCurveTo(190.2, 136.8, 191.9, 139.7, 191.0, 141.1);
      ctx1.bezierCurveTo(190.0, 142.5, 186.7, 141.8, 183.6, 139.6);
      ctx1.closePath();
      ctx1.fillStyle = "rgb(175, 224, 239)";
      ctx1.fill();
      ctx1.restore();
}
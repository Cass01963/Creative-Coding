function alien(ctx2,mouseX,mouseY,canvas) {

var gradient;

      // layer1/Path
      ctx2.save();
      ctx2.beginPath();
      ctx2.moveTo(214.3, 183.0);
      ctx2.bezierCurveTo(214.8, 183.3, 215.4, 182.7, 215.1, 182.1);
      ctx2.bezierCurveTo(210.1, 173.7, 194.6, 154.8, 190.1, 140.9);
      ctx2.bezierCurveTo(186.1, 128.5, 184.4, 119.2, 175.5, 109.6);
      ctx2.bezierCurveTo(160.2, 93.3, 153.1, 91.6, 143.8, 89.2);
      ctx2.bezierCurveTo(135.1, 87.0, 117.9, 77.7, 115.8, 77.9);
      ctx2.bezierCurveTo(112.2, 78.4, 106.2, 77.3, 106.2, 77.3);
      ctx2.lineTo(71.1, 110.0);
      ctx2.bezierCurveTo(71.1, 110.0, 71.5, 122.8, 74.7, 132.9);
      ctx2.bezierCurveTo(77.6, 142.3, 87.3, 174.1, 98.7, 182.4);
      ctx2.bezierCurveTo(107.1, 188.4, 114.6, 192.4, 118.7, 193.9);
      ctx2.bezierCurveTo(120.8, 194.6, 122.7, 195.7, 124.4, 197.0);
      ctx2.lineTo(165.7, 228.7);
      ctx2.bezierCurveTo(166.0, 229.0, 166.5, 228.6, 166.3, 228.3);
      ctx2.bezierCurveTo(162.6, 222.1, 150.0, 200.3, 151.0, 197.8);
      ctx2.bezierCurveTo(152.0, 195.0, 155.6, 197.3, 165.8, 190.1);
      ctx2.bezierCurveTo(176.0, 183.0, 183.5, 173.0, 185.7, 167.9);
      ctx2.bezierCurveTo(187.0, 164.8, 207.4, 178.8, 214.3, 183.0);
      ctx2.closePath();
      ctx2.save();
      ctx2.transform(-0.732, 0.681, 0.681, 0.732, 433.8, 203.9);
      gradient = ctx2.createLinearGradient(135.7, -217.3, 231.4, -262.9);
      gradient.addColorStop(0.00, "rgb(255, 242, 58)");
      gradient.addColorStop(0.08, "rgb(254, 220, 35)");
      gradient.addColorStop(0.28, "rgb(253, 198, 12)");
      gradient.addColorStop(0.67, "rgb(243, 144, 63)");
      gradient.addColorStop(0.89, "rgb(237, 104, 60)");
      gradient.addColorStop(1.00, "rgb(232, 62, 57)");
      ctx2.fillStyle = gradient;
      ctx2.fill();

      // layer1/Ellipse
      ctx2.restore();
      ctx2.beginPath();
      ctx2.moveTo(141.1, 141.2);
      ctx2.bezierCurveTo(134.8, 134.5, 135.5, 123.6, 142.7, 116.9);
      ctx2.bezierCurveTo(149.9, 110.2, 160.8, 110.3, 167.1, 117.0);
      ctx2.bezierCurveTo(173.4, 123.8, 172.7, 134.7, 165.5, 141.4);
      ctx2.bezierCurveTo(158.3, 148.0, 147.4, 148.0, 141.1, 141.2);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(242, 157, 30)";
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(107.1, 171.9);
      ctx2.bezierCurveTo(100.8, 165.1, 101.5, 154.2, 108.7, 147.5);
      ctx2.bezierCurveTo(115.9, 140.9, 126.8, 140.9, 133.1, 147.7);
      ctx2.bezierCurveTo(139.4, 154.5, 138.6, 165.4, 131.5, 172.0);
      ctx2.bezierCurveTo(124.3, 178.7, 113.4, 178.6, 107.1, 171.9);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(111.0, 176.1);
      ctx2.bezierCurveTo(104.7, 169.3, 105.4, 158.4, 112.6, 151.8);
      ctx2.bezierCurveTo(119.8, 145.1, 130.7, 145.1, 137.0, 151.9);
      ctx2.bezierCurveTo(143.3, 158.7, 142.6, 169.6, 135.4, 176.2);
      ctx2.bezierCurveTo(128.2, 182.9, 117.3, 182.9, 111.0, 176.1);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(22, 24, 36)";
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(143.6, 145.8);
      ctx2.bezierCurveTo(137.3, 139.0, 138.0, 128.1, 145.2, 121.4);
      ctx2.bezierCurveTo(152.4, 114.7, 163.3, 114.8, 169.6, 121.6);
      ctx2.bezierCurveTo(175.9, 128.3, 175.2, 139.2, 168.0, 145.9);
      ctx2.bezierCurveTo(160.8, 152.6, 149.9, 152.5, 143.6, 145.8);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(162.2, 134.4);
      ctx2.bezierCurveTo(160.0, 132.0, 160.1, 128.1, 162.5, 125.9);
      ctx2.bezierCurveTo(165.0, 123.6, 168.8, 123.8, 171.0, 126.2);
      ctx2.bezierCurveTo(173.3, 128.6, 173.2, 132.4, 170.7, 134.7);
      ctx2.bezierCurveTo(168.3, 136.9, 164.5, 136.8, 162.2, 134.4);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(255, 254, 255)";
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(164.0, 141.6);
      ctx2.bezierCurveTo(163.1, 140.7, 163.2, 139.3, 164.1, 138.4);
      ctx2.bezierCurveTo(165.0, 137.6, 166.3, 137.7, 167.2, 138.6);
      ctx2.bezierCurveTo(168.0, 139.4, 168.0, 140.8, 167.1, 141.7);
      ctx2.bezierCurveTo(166.2, 142.5, 164.8, 142.4, 164.0, 141.6);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Path
      ctx2.beginPath();
      ctx2.moveTo(139.6, 162.8);
      ctx2.bezierCurveTo(139.4, 165.3, 137.9, 167.6, 135.6, 168.8);
      ctx2.bezierCurveTo(134.0, 169.7, 128.1, 171.3, 128.6, 170.4);
      ctx2.bezierCurveTo(133.5, 160.0, 124.7, 155.4, 128.4, 153.3);
      ctx2.bezierCurveTo(131.6, 151.4, 134.7, 154.4, 135.6, 155.2);
      ctx2.bezierCurveTo(138.7, 157.7, 139.7, 159.9, 139.6, 162.8);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Path
      ctx2.beginPath();
      ctx2.moveTo(146.0, 144.6);
      ctx2.bezierCurveTo(148.1, 144.4, 149.9, 142.1, 149.0, 140.2);
      ctx2.bezierCurveTo(147.2, 136.6, 147.3, 132.5, 149.0, 129.1);
      ctx2.bezierCurveTo(150.0, 126.9, 145.5, 122.9, 142.4, 130.6);
      ctx2.bezierCurveTo(141.4, 133.1, 141.2, 137.3, 141.5, 139.8);
      ctx2.bezierCurveTo(141.7, 141.5, 143.3, 144.9, 145.9, 144.6);
      ctx2.bezierCurveTo(146.0, 144.6, 146.0, 144.6, 146.0, 144.6);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(127.1, 173.8);
      ctx2.bezierCurveTo(125.7, 172.3, 125.8, 169.9, 127.3, 168.5);
      ctx2.bezierCurveTo(128.8, 167.2, 131.1, 167.2, 132.5, 168.7);
      ctx2.bezierCurveTo(133.9, 170.2, 133.8, 172.6, 132.3, 174.0);
      ctx2.bezierCurveTo(130.8, 175.4, 128.5, 175.3, 127.1, 173.8);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Rectangle
      ctx2.beginPath();
      ctx2.moveTo(107.9, 163.4);
      ctx2.lineTo(108.7, 169.4);
      ctx2.bezierCurveTo(108.9, 171.1, 110.4, 172.2, 112.1, 172.0);
      ctx2.lineTo(112.1, 172.0);
      ctx2.bezierCurveTo(113.7, 171.8, 114.9, 170.3, 114.7, 168.6);
      ctx2.lineTo(113.9, 162.6);
      ctx2.bezierCurveTo(113.7, 160.9, 112.2, 159.7, 110.5, 160.0);
      ctx2.lineTo(110.5, 160.0);
      ctx2.bezierCurveTo(108.9, 160.2, 107.7, 161.7, 107.9, 163.4);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Path
      ctx2.beginPath();
      ctx2.moveTo(119.0, 107.1);
      ctx2.bezierCurveTo(118.0, 106.4, 116.7, 106.8, 116.5, 108.0);
      ctx2.bezierCurveTo(116.3, 109.3, 115.3, 112.4, 114.7, 114.7);
      ctx2.bezierCurveTo(114.0, 117.3, 112.2, 119.6, 109.8, 121.0);
      ctx2.bezierCurveTo(107.0, 122.6, 107.8, 121.8, 101.4, 123.7);
      ctx2.bezierCurveTo(99.4, 124.3, 97.3, 125.4, 99.4, 127.6);
      ctx2.bezierCurveTo(101.5, 129.9, 104.0, 133.4, 110.0, 133.5);
      ctx2.bezierCurveTo(122.1, 133.7, 127.1, 121.7, 125.9, 116.3);
      ctx2.bezierCurveTo(124.9, 111.9, 123.1, 110.0, 119.0, 107.1);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(22, 24, 36)";
      ctx2.fill();

      // layer1/Rectangle
      ctx2.beginPath();
      ctx2.moveTo(119.0, 116.1);
      ctx2.lineTo(119.0, 116.1);
      ctx2.bezierCurveTo(119.9, 115.2, 121.4, 115.3, 122.2, 116.2);
      ctx2.lineTo(125.0, 119.2);
      ctx2.bezierCurveTo(125.8, 120.1, 125.8, 121.5, 124.9, 122.4);
      ctx2.lineTo(124.9, 122.4);
      ctx2.bezierCurveTo(124.0, 123.2, 122.6, 123.1, 121.7, 122.2);
      ctx2.lineTo(118.9, 119.2);
      ctx2.bezierCurveTo(118.1, 118.3, 118.1, 116.9, 119.0, 116.1);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(255, 254, 255)";
      ctx2.fill();

      // layer1/Rectangle
      ctx2.beginPath();
      ctx2.moveTo(108.3, 125.1);
      ctx2.lineTo(108.3, 125.1);
      ctx2.bezierCurveTo(109.4, 124.1, 111.2, 124.1, 112.2, 125.2);
      ctx2.lineTo(115.2, 128.4);
      ctx2.bezierCurveTo(116.2, 129.5, 116.1, 131.3, 115.0, 132.3);
      ctx2.lineTo(115.0, 132.3);
      ctx2.bezierCurveTo(113.9, 133.3, 112.2, 133.3, 111.2, 132.2);
      ctx2.lineTo(108.2, 129.0);
      ctx2.bezierCurveTo(107.2, 127.9, 107.2, 126.1, 108.3, 125.1);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Path
      ctx2.beginPath();
      ctx2.moveTo(111.6, 72.3);
      ctx2.bezierCurveTo(111.6, 72.3, 103.8, 63.1, 100.3, 57.7);
      ctx2.bezierCurveTo(97.0, 52.5, 97.2, 40.1, 100.6, 35.4);
      ctx2.bezierCurveTo(106.6, 27.0, 109.7, 25.0, 122.6, 26.8);
      ctx2.bezierCurveTo(133.3, 28.3, 129.6, 22.0, 128.0, 19.7);
      ctx2.bezierCurveTo(127.5, 19.0, 127.0, 18.3, 126.5, 17.6);
      ctx2.bezierCurveTo(123.9, 13.6, 115.7, 3.3, 110.8, 1.2);
      ctx2.bezierCurveTo(101.2, -3.0, 86.2, 5.1, 82.4, 7.7);
      ctx2.bezierCurveTo(72.0, 14.8, 64.4, 27.8, 64.3, 30.2);
      ctx2.bezierCurveTo(64.2, 32.7, 51.3, 56.5, 51.3, 56.5);
      ctx2.bezierCurveTo(51.3, 56.5, 21.7, 65.5, 17.5, 68.0);
      ctx2.bezierCurveTo(10.8, 72.0, 3.5, 80.5, 1.3, 89.4);
      ctx2.bezierCurveTo(-0.4, 96.5, -2.0, 109.7, 7.0, 119.4);
      ctx2.bezierCurveTo(11.8, 124.6, 19.5, 130.3, 25.0, 127.5);
      ctx2.bezierCurveTo(30.5, 124.7, 24.5, 115.7, 23.5, 112.1);
      ctx2.bezierCurveTo(21.1, 103.6, 31.0, 98.4, 37.6, 99.4);
      ctx2.bezierCurveTo(43.1, 100.3, 63.5, 105.6, 66.1, 110.0);
      ctx2.bezierCurveTo(68.6, 114.5, 111.6, 72.3, 111.6, 72.3);
      ctx2.closePath();
      ctx2.save();
      ctx2.transform(-0.732, 0.681, 0.681, 0.732, 433.8, 203.9);
      gradient = ctx2.createLinearGradient(97.1, -349.7, 254.9, -349.7);
      gradient.addColorStop(0.00, "rgb(255, 242, 58)");
      gradient.addColorStop(0.08, "rgb(254, 220, 35)");
      gradient.addColorStop(0.28, "rgb(253, 198, 12)");
      gradient.addColorStop(0.67, "rgb(243, 144, 63)");
      gradient.addColorStop(0.89, "rgb(237, 104, 60)");
      gradient.addColorStop(1.00, "rgb(232, 62, 57)");
      ctx2.fillStyle = gradient;
      ctx2.fill();

      // layer1/Rectangle
      ctx2.restore();
      ctx2.beginPath();
      ctx2.moveTo(65.4, 105.7);
      ctx2.lineTo(103.4, 70.3);
      ctx2.bezierCurveTo(106.4, 67.5, 111.1, 67.7, 113.9, 70.7);
      ctx2.lineTo(113.9, 70.7);
      ctx2.bezierCurveTo(116.7, 73.7, 116.5, 78.4, 113.6, 81.2);
      ctx2.lineTo(75.5, 116.6);
      ctx2.bezierCurveTo(72.5, 119.4, 67.8, 119.2, 65.0, 116.2);
      ctx2.lineTo(65.0, 116.2);
      ctx2.bezierCurveTo(62.2, 113.2, 62.4, 108.5, 65.4, 105.7);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(97, 184, 231)";
      ctx2.fill();

      // layer1/Path
      ctx2.beginPath();
      ctx2.moveTo(82.3, 91.8);
      ctx2.bezierCurveTo(88.7, 86.6, 91.3, 83.9, 89.2, 77.2);
      ctx2.bezierCurveTo(85.8, 66.0, 74.1, 34.0, 72.8, 29.4);
      ctx2.bezierCurveTo(69.9, 19.5, 64.7, 15.9, 60.4, 16.1);
      ctx2.bezierCurveTo(45.5, 16.9, 18.9, 37.6, 15.3, 57.0);
      ctx2.bezierCurveTo(13.7, 65.4, 27.0, 70.8, 30.6, 72.4);
      ctx2.bezierCurveTo(33.3, 73.6, 56.1, 81.3, 65.6, 87.8);
      ctx2.bezierCurveTo(78.3, 96.3, 82.3, 91.8, 82.3, 91.8);
      ctx2.closePath();
      ctx2.save();
      ctx2.transform(-0.732, 0.681, 0.681, 0.732, 433.8, 203.9);
      gradient = ctx2.createLinearGradient(154.3, -347.7, 204.8, -393.8);
      gradient.addColorStop(0.00, "rgb(255, 242, 58)");
      gradient.addColorStop(0.08, "rgb(254, 220, 35)");
      gradient.addColorStop(0.28, "rgb(253, 198, 12)");
      gradient.addColorStop(0.58, "rgb(245, 151, 36)");
      gradient.addColorStop(0.89, "rgb(237, 104, 60)");
      ctx2.fillStyle = gradient;
      ctx2.fill();

      // layer1/Rectangle
      ctx2.restore();
      ctx2.beginPath();
      ctx2.moveTo(84.2, 93.4);
      ctx2.lineTo(106.1, 73.1);
      ctx2.bezierCurveTo(107.9, 71.5, 110.6, 71.6, 112.2, 73.3);
      ctx2.lineTo(112.2, 73.3);
      ctx2.bezierCurveTo(113.8, 75.0, 113.7, 77.7, 112.0, 79.3);
      ctx2.lineTo(90.1, 99.7);
      ctx2.bezierCurveTo(88.3, 101.3, 85.6, 101.2, 84.0, 99.5);
      ctx2.lineTo(84.0, 99.5);
      ctx2.bezierCurveTo(82.4, 97.7, 82.5, 95.0, 84.2, 93.4);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(154, 213, 240)";
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(79.0, 103.8);
      ctx2.bezierCurveTo(78.2, 102.9, 78.3, 101.6, 79.1, 100.8);
      ctx2.bezierCurveTo(80.0, 100.0, 81.3, 100.1, 82.1, 100.9);
      ctx2.bezierCurveTo(82.9, 101.8, 82.8, 103.1, 82.0, 103.9);
      ctx2.bezierCurveTo(81.1, 104.7, 79.8, 104.6, 79.0, 103.8);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(11.3, 121.6);
      ctx2.bezierCurveTo(8.4, 118.6, 6.9, 115.4, 7.9, 114.5);
      ctx2.bezierCurveTo(8.9, 113.6, 11.9, 115.3, 14.7, 118.3);
      ctx2.bezierCurveTo(17.6, 121.4, 19.1, 124.6, 18.1, 125.4);
      ctx2.bezierCurveTo(17.1, 126.3, 14.1, 124.6, 11.3, 121.6);
      ctx2.closePath();
      ctx2.fillStyle = "rgb(167, 147, 198)";
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(1.4, 103.9);
      ctx2.bezierCurveTo(0.5, 99.9, 0.8, 96.4, 2.1, 96.1);
      ctx2.bezierCurveTo(3.4, 95.8, 5.2, 98.9, 6.1, 102.9);
      ctx2.bezierCurveTo(7.0, 106.9, 6.7, 110.4, 5.4, 110.7);
      ctx2.bezierCurveTo(4.2, 111.0, 2.4, 108.0, 1.4, 103.9);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(3.6, 84.1);
      ctx2.bezierCurveTo(5.4, 80.4, 7.8, 77.8, 9.0, 78.3);
      ctx2.bezierCurveTo(10.1, 78.9, 9.7, 82.4, 8.0, 86.1);
      ctx2.bezierCurveTo(6.2, 89.9, 3.8, 92.5, 2.6, 91.9);
      ctx2.bezierCurveTo(1.5, 91.4, 1.9, 87.9, 3.6, 84.1);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(84.5, 7.8);
      ctx2.bezierCurveTo(88.0, 5.5, 91.4, 4.6, 92.1, 5.7);
      ctx2.bezierCurveTo(92.8, 6.8, 90.6, 9.5, 87.1, 11.8);
      ctx2.bezierCurveTo(83.7, 14.0, 80.3, 15.0, 79.6, 13.9);
      ctx2.bezierCurveTo(78.8, 12.8, 81.1, 10.0, 84.5, 7.8);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(105.0, 2.0);
      ctx2.bezierCurveTo(109.1, 2.2, 112.4, 3.4, 112.3, 4.7);
      ctx2.bezierCurveTo(112.3, 6.0, 108.9, 6.9, 104.8, 6.8);
      ctx2.bezierCurveTo(100.7, 6.6, 97.3, 5.4, 97.4, 4.1);
      ctx2.bezierCurveTo(97.4, 2.8, 100.8, 1.9, 105.0, 2.0);
      ctx2.closePath();
      ctx2.fill();

      // layer1/Ellipse
      ctx2.beginPath();
      ctx2.moveTo(122.1, 13.6);
      ctx2.bezierCurveTo(124.6, 16.9, 125.8, 20.2, 124.8, 21.0);
      ctx2.bezierCurveTo(123.8, 21.8, 120.9, 19.8, 118.3, 16.5);
      ctx2.bezierCurveTo(115.8, 13.3, 114.6, 10.0, 115.6, 9.2);
      ctx2.bezierCurveTo(116.6, 8.4, 119.5, 10.4, 122.1, 13.6);
      ctx2.closePath();
      ctx2.fill();
      ctx2.restore();
    }
function murakami(ctx4,mouseX,mouseY,canvas) {
	
/*var rr,gg,bb;
	
	rr = Math.round(1*mouseX/canvas.width);
	gg = Math.round(0+mouseY/canvas.height);
	bb = Math.round(255*mouseX/canvas.width);
	
ctx4.fillStyle = "rgba("+rr+","+gg+","+bb+",1)";*/

      // layer1/Group
      ctx4.save();

      // layer1/Group/Compound Path
      ctx4.save();
      ctx4.beginPath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(49.2, 146.8);
      ctx4.bezierCurveTo(49.1, 147.1, 49.1, 147.5, 48.9, 147.7);
      ctx4.bezierCurveTo(47.0, 149.3, 48.3, 151.4, 48.3, 153.2);
      ctx4.bezierCurveTo(48.3, 153.5, 48.8, 153.8, 49.1, 154.1);
      ctx4.bezierCurveTo(49.5, 153.5, 49.9, 153.0, 50.5, 152.2);
      ctx4.bezierCurveTo(50.5, 153.3, 50.5, 154.1, 50.5, 155.0);
      ctx4.bezierCurveTo(50.0, 154.8, 49.6, 154.7, 49.2, 154.6);
      ctx4.bezierCurveTo(49.1, 154.8, 49.0, 155.0, 49.0, 155.1);
      ctx4.bezierCurveTo(49.4, 157.0, 49.2, 159.0, 50.8, 160.4);
      ctx4.bezierCurveTo(51.0, 160.6, 51.1, 161.1, 51.0, 161.4);
      ctx4.bezierCurveTo(50.7, 164.8, 52.9, 167.5, 53.8, 170.6);
      ctx4.bezierCurveTo(54.7, 173.8, 55.9, 176.9, 56.6, 180.1);
      ctx4.bezierCurveTo(57.9, 185.5, 58.9, 191.1, 60.0, 196.6);
      ctx4.bezierCurveTo(60.2, 197.2, 60.3, 197.8, 60.3, 198.5);
      ctx4.bezierCurveTo(60.7, 204.2, 61.1, 209.8, 61.4, 215.5);
      ctx4.bezierCurveTo(61.5, 215.5, 61.6, 215.6, 61.6, 215.6);
      ctx4.bezierCurveTo(61.5, 211.0, 61.2, 206.3, 61.2, 201.6);
      ctx4.bezierCurveTo(61.1, 192.1, 61.0, 182.5, 62.9, 173.0);
      ctx4.bezierCurveTo(63.5, 169.9, 63.4, 169.8, 62.9, 168.9);
      ctx4.bezierCurveTo(65.4, 166.1, 65.0, 162.5, 65.8, 159.2);
      ctx4.bezierCurveTo(66.9, 154.8, 67.8, 150.4, 68.6, 146.0);
      ctx4.bezierCurveTo(69.0, 144.0, 69.0, 141.9, 69.4, 139.9);
      ctx4.bezierCurveTo(70.3, 135.4, 71.3, 131.0, 72.2, 126.5);
      ctx4.bezierCurveTo(72.5, 124.8, 72.6, 123.1, 72.9, 121.5);
      ctx4.bezierCurveTo(73.0, 120.9, 73.2, 120.3, 73.4, 119.8);
      ctx4.bezierCurveTo(75.2, 115.9, 78.2, 113.4, 81.8, 111.3);
      ctx4.bezierCurveTo(84.1, 109.9, 86.5, 108.5, 88.2, 106.2);
      ctx4.bezierCurveTo(89.0, 105.2, 90.9, 104.9, 92.2, 104.3);
      ctx4.bezierCurveTo(93.2, 103.7, 94.2, 103.1, 95.3, 102.4);
      ctx4.bezierCurveTo(93.0, 98.9, 90.9, 95.6, 88.8, 92.3);
      ctx4.bezierCurveTo(87.8, 90.8, 86.9, 89.3, 86.2, 87.7);
      ctx4.bezierCurveTo(85.5, 86.5, 85.1, 85.1, 83.5, 84.6);
      ctx4.bezierCurveTo(83.1, 84.5, 82.8, 84.0, 82.4, 83.7);
      ctx4.bezierCurveTo(84.1, 82.5, 83.7, 81.9, 83.0, 79.8);
      ctx4.bezierCurveTo(82.5, 78.2, 81.6, 76.2, 83.1, 74.4);
      ctx4.bezierCurveTo(81.3, 74.9, 81.1, 75.2, 81.2, 77.9);
      ctx4.bezierCurveTo(81.0, 77.1, 80.8, 76.2, 80.8, 75.4);
      ctx4.bezierCurveTo(80.8, 74.6, 81.0, 73.8, 81.1, 72.9);
      ctx4.bezierCurveTo(81.4, 73.1, 81.7, 73.3, 82.1, 73.6);
      ctx4.bezierCurveTo(82.3, 71.0, 81.9, 70.5, 80.2, 71.2);
      ctx4.bezierCurveTo(79.9, 69.4, 79.7, 67.5, 79.4, 65.7);
      ctx4.bezierCurveTo(79.2, 64.4, 78.6, 63.0, 78.5, 61.7);
      ctx4.bezierCurveTo(78.3, 59.8, 78.2, 58.0, 77.2, 56.2);
      ctx4.bezierCurveTo(76.7, 55.2, 77.0, 53.7, 77.0, 52.4);
      ctx4.bezierCurveTo(77.0, 50.9, 76.9, 49.3, 77.0, 47.8);
      ctx4.bezierCurveTo(77.2, 45.4, 77.4, 43.1, 77.6, 40.8);
      ctx4.bezierCurveTo(77.7, 40.2, 77.6, 39.5, 77.6, 38.9);
      ctx4.bezierCurveTo(77.1, 38.7, 76.6, 38.6, 76.6, 38.6);
      ctx4.bezierCurveTo(76.9, 37.6, 77.1, 36.8, 77.4, 36.0);
      ctx4.bezierCurveTo(77.7, 35.0, 78.0, 34.1, 78.3, 33.1);
      ctx4.bezierCurveTo(78.9, 30.5, 79.4, 27.8, 80.1, 25.2);
      ctx4.bezierCurveTo(81.1, 21.3, 81.3, 16.9, 84.6, 13.8);
      ctx4.bezierCurveTo(86.2, 12.4, 87.2, 10.4, 88.9, 9.0);
      ctx4.bezierCurveTo(90.1, 7.9, 91.8, 7.5, 93.3, 6.7);
      ctx4.bezierCurveTo(93.8, 6.5, 94.2, 6.3, 94.7, 6.1);
      ctx4.bezierCurveTo(95.2, 6.0, 95.7, 5.7, 96.2, 5.8);
      ctx4.bezierCurveTo(97.2, 6.0, 98.1, 6.5, 99.1, 6.8);
      ctx4.bezierCurveTo(99.5, 6.9, 100.0, 6.9, 100.4, 6.8);
      ctx4.bezierCurveTo(102.5, 6.2, 104.6, 5.5, 106.2, 3.9);
      ctx4.bezierCurveTo(106.7, 3.4, 107.7, 3.5, 108.4, 3.4);
      ctx4.bezierCurveTo(109.9, 3.2, 111.4, 3.2, 112.8, 2.9);
      ctx4.bezierCurveTo(113.4, 2.8, 113.9, 2.1, 114.3, 1.5);
      ctx4.bezierCurveTo(115.6, -0.2, 116.4, -0.4, 118.3, 0.7);
      ctx4.bezierCurveTo(119.7, 1.6, 121.1, 2.8, 122.6, 3.6);
      ctx4.bezierCurveTo(123.8, 4.1, 125.2, 4.7, 126.5, 4.6);
      ctx4.bezierCurveTo(129.1, 4.3, 131.4, 5.2, 133.8, 5.8);
      ctx4.bezierCurveTo(134.1, 5.9, 134.4, 5.9, 134.5, 6.1);
      ctx4.bezierCurveTo(136.4, 8.5, 139.4, 8.6, 141.8, 9.9);
      ctx4.bezierCurveTo(142.1, 10.1, 142.6, 10.5, 142.6, 10.8);
      ctx4.bezierCurveTo(142.7, 12.2, 143.9, 12.7, 144.9, 13.2);
      ctx4.bezierCurveTo(146.7, 14.2, 147.7, 15.2, 148.2, 17.5);
      ctx4.bezierCurveTo(148.7, 20.5, 149.1, 23.8, 151.2, 26.4);
      ctx4.bezierCurveTo(151.9, 27.1, 152.0, 28.2, 152.3, 29.2);
      ctx4.bezierCurveTo(153.8, 33.4, 155.3, 37.7, 156.6, 42.0);
      ctx4.bezierCurveTo(157.0, 43.2, 156.8, 44.7, 156.9, 46.7);
      ctx4.bezierCurveTo(158.4, 47.7, 158.5, 50.0, 158.6, 52.3);
      ctx4.bezierCurveTo(158.9, 56.1, 159.7, 59.9, 160.0, 63.6);
      ctx4.bezierCurveTo(160.2, 65.7, 159.7, 67.7, 159.6, 69.8);
      ctx4.bezierCurveTo(159.5, 70.0, 159.3, 70.2, 159.2, 70.4);
      ctx4.bezierCurveTo(159.0, 70.7, 158.7, 70.8, 158.6, 71.1);
      ctx4.bezierCurveTo(158.3, 72.8, 158.9, 75.0, 156.4, 75.8);
      ctx4.bezierCurveTo(156.2, 78.2, 155.7, 80.6, 155.7, 83.1);
      ctx4.bezierCurveTo(155.7, 83.8, 156.6, 84.7, 157.2, 85.2);
      ctx4.bezierCurveTo(161.8, 88.7, 166.5, 91.6, 172.4, 92.2);
      ctx4.bezierCurveTo(176.5, 92.7, 180.5, 93.7, 184.6, 94.5);
      ctx4.bezierCurveTo(185.9, 94.7, 187.1, 95.0, 188.4, 95.2);
      ctx4.bezierCurveTo(191.1, 95.5, 192.7, 97.4, 194.0, 99.4);
      ctx4.bezierCurveTo(196.1, 102.8, 197.9, 106.4, 199.6, 110.1);
      ctx4.bezierCurveTo(198.1, 109.4, 196.8, 108.6, 195.3, 108.2);
      ctx4.bezierCurveTo(193.6, 107.7, 191.8, 107.5, 190.1, 107.4);
      ctx4.bezierCurveTo(188.7, 107.4, 187.7, 108.4, 187.3, 109.8);
      ctx4.bezierCurveTo(186.9, 111.1, 188.1, 111.7, 189.0, 112.2);
      ctx4.bezierCurveTo(192.3, 113.8, 194.5, 116.5, 196.6, 119.3);
      ctx4.bezierCurveTo(198.0, 121.0, 199.3, 122.7, 200.5, 124.5);
      ctx4.bezierCurveTo(201.8, 126.3, 202.9, 128.1, 204.1, 129.9);
      ctx4.bezierCurveTo(204.3, 130.2, 204.5, 130.6, 204.8, 130.8);
      ctx4.bezierCurveTo(207.7, 132.9, 209.7, 135.8, 211.9, 138.6);
      ctx4.bezierCurveTo(212.9, 139.9, 214.3, 140.9, 215.5, 142.1);
      ctx4.bezierCurveTo(216.1, 142.7, 216.5, 143.3, 216.9, 143.8);
      ctx4.bezierCurveTo(219.0, 144.7, 221.1, 145.5, 223.2, 146.4);
      ctx4.bezierCurveTo(223.3, 146.5, 223.4, 146.6, 223.5, 146.6);
      ctx4.bezierCurveTo(225.9, 146.7, 225.8, 148.7, 226.1, 150.2);
      ctx4.bezierCurveTo(226.2, 150.6, 225.6, 151.2, 225.3, 151.8);
      ctx4.bezierCurveTo(226.7, 154.3, 228.9, 155.9, 232.1, 156.5);
      ctx4.bezierCurveTo(233.7, 156.8, 235.1, 157.9, 236.7, 158.8);
      ctx4.bezierCurveTo(233.9, 160.2, 230.6, 161.3, 228.0, 160.0);
      ctx4.bezierCurveTo(224.8, 158.4, 221.9, 155.8, 220.7, 151.7);
      ctx4.bezierCurveTo(221.3, 152.2, 221.6, 152.5, 222.0, 152.9);
      ctx4.bezierCurveTo(222.1, 152.8, 222.2, 152.8, 222.3, 152.8);
      ctx4.bezierCurveTo(222.3, 152.3, 222.3, 151.6, 222.1, 151.2);
      ctx4.bezierCurveTo(221.4, 150.1, 220.8, 148.9, 219.8, 148.1);
      ctx4.bezierCurveTo(217.8, 146.3, 215.6, 144.7, 213.2, 142.9);
      ctx4.bezierCurveTo(218.9, 156.0, 225.9, 168.2, 230.7, 181.9);
      ctx4.bezierCurveTo(231.3, 181.1, 231.6, 180.8, 232.1, 180.1);
      ctx4.bezierCurveTo(232.4, 181.2, 232.6, 182.0, 232.8, 183.2);
      ctx4.bezierCurveTo(232.0, 182.7, 231.6, 182.5, 231.1, 182.2);
      ctx4.bezierCurveTo(233.0, 189.9, 235.0, 197.6, 237.0, 205.3);
      ctx4.bezierCurveTo(237.2, 205.0, 237.5, 204.7, 237.9, 204.2);
      ctx4.bezierCurveTo(238.0, 204.6, 238.2, 204.9, 238.1, 205.0);
      ctx4.bezierCurveTo(237.9, 205.5, 237.6, 206.0, 237.2, 206.5);
      ctx4.bezierCurveTo(237.1, 206.4, 236.9, 206.4, 236.7, 206.4);
      ctx4.bezierCurveTo(237.0, 207.4, 237.3, 208.3, 237.5, 209.3);
      ctx4.bezierCurveTo(237.6, 209.2, 237.7, 209.1, 237.8, 209.0);
      ctx4.bezierCurveTo(238.4, 209.3, 239.1, 209.7, 239.7, 210.0);
      ctx4.bezierCurveTo(239.6, 210.3, 239.7, 210.5, 239.6, 210.5);
      ctx4.bezierCurveTo(239.0, 211.0, 238.0, 211.5, 238.0, 211.9);
      ctx4.bezierCurveTo(238.3, 213.6, 238.9, 215.2, 239.4, 216.9);
      ctx4.bezierCurveTo(239.5, 217.4, 239.9, 217.8, 239.9, 218.3);
      ctx4.bezierCurveTo(240.0, 219.4, 240.0, 220.5, 240.0, 221.6);
      ctx4.bezierCurveTo(240.1, 221.6, 240.2, 221.6, 240.4, 221.7);
      ctx4.bezierCurveTo(240.5, 221.3, 240.6, 220.9, 240.7, 220.5);
      ctx4.bezierCurveTo(240.9, 220.5, 241.0, 220.5, 241.2, 220.5);
      ctx4.bezierCurveTo(241.4, 221.2, 241.9, 222.0, 241.8, 222.8);
      ctx4.bezierCurveTo(241.1, 229.5, 243.3, 235.7, 244.6, 242.1);
      ctx4.bezierCurveTo(245.5, 246.5, 245.5, 251.1, 246.0, 255.6);
      ctx4.bezierCurveTo(246.3, 258.9, 246.7, 262.2, 247.0, 265.5);
      ctx4.bezierCurveTo(247.7, 272.0, 248.8, 278.5, 249.0, 284.9);
      ctx4.bezierCurveTo(249.4, 297.0, 247.7, 308.9, 244.9, 320.7);
      ctx4.bezierCurveTo(244.4, 322.9, 244.0, 325.2, 243.5, 327.4);
      ctx4.bezierCurveTo(243.3, 328.2, 243.0, 329.0, 242.8, 329.6);
      ctx4.bezierCurveTo(235.6, 329.6, 228.6, 329.6, 221.5, 329.6);
      ctx4.bezierCurveTo(201.8, 329.6, 182.0, 329.7, 162.3, 329.8);
      ctx4.bezierCurveTo(160.5, 329.8, 160.0, 329.0, 159.7, 327.6);
      ctx4.bezierCurveTo(158.7, 323.2, 157.7, 318.7, 156.6, 313.9);
      ctx4.bezierCurveTo(155.5, 314.8, 154.6, 315.7, 153.7, 316.6);
      ctx4.bezierCurveTo(153.6, 316.6, 154.0, 317.1, 154.2, 317.4);
      ctx4.bezierCurveTo(153.5, 318.1, 152.8, 318.7, 151.9, 319.5);
      ctx4.bezierCurveTo(151.7, 319.1, 151.3, 318.4, 150.8, 317.7);
      ctx4.bezierCurveTo(150.3, 318.7, 150.8, 321.7, 151.7, 322.4);
      ctx4.bezierCurveTo(152.7, 323.2, 153.8, 324.0, 155.3, 323.5);
      ctx4.bezierCurveTo(154.9, 323.0, 154.5, 322.5, 154.3, 322.2);
      ctx4.bezierCurveTo(153.9, 322.4, 153.5, 322.5, 153.2, 322.6);
      ctx4.bezierCurveTo(153.1, 322.5, 153.0, 322.4, 152.9, 322.3);
      ctx4.bezierCurveTo(153.4, 321.7, 153.8, 321.2, 154.2, 320.9);
      ctx4.bezierCurveTo(154.2, 319.6, 154.2, 318.5, 154.2, 317.4);
      ctx4.bezierCurveTo(154.9, 317.6, 155.6, 317.9, 156.4, 318.2);
      ctx4.bezierCurveTo(156.3, 318.8, 156.1, 319.6, 155.9, 320.5);
      ctx4.bezierCurveTo(158.2, 321.0, 158.0, 323.0, 158.2, 324.8);
      ctx4.bezierCurveTo(158.4, 326.4, 158.7, 328.0, 159.0, 329.7);
      ctx4.bezierCurveTo(156.1, 329.7, 153.6, 329.7, 151.0, 329.7);
      ctx4.bezierCurveTo(128.8, 329.8, 106.5, 329.8, 84.2, 329.8);
      ctx4.bezierCurveTo(83.1, 329.8, 82.8, 329.4, 82.6, 328.4);
      ctx4.bezierCurveTo(80.8, 321.3, 78.9, 314.2, 77.0, 307.2);
      ctx4.bezierCurveTo(74.8, 298.6, 72.5, 290.2, 71.7, 281.3);
      ctx4.bezierCurveTo(71.5, 278.6, 70.7, 275.9, 70.3, 273.1);
      ctx4.bezierCurveTo(69.7, 269.5, 69.2, 265.8, 68.7, 262.1);
      ctx4.bezierCurveTo(67.8, 255.7, 67.0, 249.3, 66.1, 243.0);
      ctx4.bezierCurveTo(65.7, 240.2, 65.2, 237.5, 64.7, 234.7);
      ctx4.bezierCurveTo(64.6, 234.3, 64.4, 234.0, 64.2, 233.6);
      ctx4.bezierCurveTo(64.1, 233.5, 63.9, 233.5, 63.7, 233.5);
      ctx4.bezierCurveTo(62.7, 235.8, 61.6, 238.1, 60.7, 240.5);
      ctx4.bezierCurveTo(60.5, 241.2, 61.0, 242.2, 61.3, 243.1);
      ctx4.bezierCurveTo(62.2, 246.3, 61.7, 249.2, 59.0, 251.0);
      ctx4.bezierCurveTo(53.0, 254.9, 47.4, 259.4, 40.4, 261.5);
      ctx4.bezierCurveTo(35.3, 263.1, 30.1, 263.5, 24.9, 263.9);
      ctx4.bezierCurveTo(21.3, 264.1, 18.3, 262.3, 15.9, 259.8);
      ctx4.bezierCurveTo(12.1, 255.8, 9.8, 250.9, 7.7, 245.8);
      ctx4.bezierCurveTo(6.6, 243.0, 5.2, 240.1, 4.5, 237.1);
      ctx4.bezierCurveTo(3.4, 232.6, 2.8, 228.0, 1.9, 223.4);
      ctx4.bezierCurveTo(1.7, 221.9, 1.5, 220.4, 1.2, 218.9);
      ctx4.bezierCurveTo(-0.4, 211.5, -0.5, 204.2, 1.7, 196.9);
      ctx4.bezierCurveTo(2.0, 195.9, 1.9, 194.7, 1.9, 193.6);
      ctx4.bezierCurveTo(1.9, 190.5, 1.6, 187.4, 1.9, 184.3);
      ctx4.bezierCurveTo(2.2, 181.5, 3.1, 178.8, 3.8, 176.1);
      ctx4.bezierCurveTo(4.3, 174.3, 5.0, 172.7, 5.6, 171.0);
      ctx4.bezierCurveTo(5.7, 170.7, 6.0, 170.5, 6.2, 170.1);
      ctx4.bezierCurveTo(7.1, 174.1, 7.1, 177.8, 5.5, 181.5);
      ctx4.bezierCurveTo(5.3, 181.9, 5.3, 182.4, 5.3, 182.9);
      ctx4.bezierCurveTo(5.5, 185.1, 5.7, 187.3, 6.0, 189.5);
      ctx4.bezierCurveTo(6.0, 190.1, 6.3, 190.6, 6.5, 191.2);
      ctx4.bezierCurveTo(7.6, 189.5, 8.5, 187.9, 9.5, 186.3);
      ctx4.bezierCurveTo(9.6, 186.3, 9.7, 186.4, 9.8, 186.5);
      ctx4.bezierCurveTo(9.5, 187.6, 9.2, 188.8, 8.8, 190.0);
      ctx4.bezierCurveTo(8.9, 190.1, 8.6, 190.0, 8.1, 189.9);
      ctx4.bezierCurveTo(8.4, 191.4, 7.8, 193.0, 9.8, 193.6);
      ctx4.bezierCurveTo(10.0, 193.7, 10.1, 194.4, 10.2, 194.8);
      ctx4.bezierCurveTo(10.1, 194.8, 10.0, 194.9, 9.8, 195.0);
      ctx4.bezierCurveTo(9.5, 194.7, 9.1, 194.4, 8.7, 194.1);
      ctx4.bezierCurveTo(8.1, 195.8, 8.9, 196.7, 11.3, 197.2);
      ctx4.bezierCurveTo(11.5, 196.6, 11.6, 196.0, 11.9, 195.3);
      ctx4.bezierCurveTo(13.0, 197.4, 13.0, 197.1, 15.3, 196.1);
      ctx4.bezierCurveTo(19.5, 194.3, 22.6, 191.2, 25.7, 188.0);
      ctx4.bezierCurveTo(27.0, 186.6, 28.0, 184.7, 29.1, 183.1);
      ctx4.bezierCurveTo(29.2, 182.9, 29.4, 182.7, 29.6, 182.5);
      ctx4.bezierCurveTo(31.0, 181.7, 32.1, 180.8, 32.3, 179.1);
      ctx4.bezierCurveTo(32.3, 178.8, 32.8, 178.4, 33.1, 178.1);
      ctx4.bezierCurveTo(36.0, 176.4, 38.1, 173.8, 39.6, 170.8);
      ctx4.bezierCurveTo(40.6, 168.8, 40.9, 166.8, 40.2, 164.6);
      ctx4.bezierCurveTo(40.1, 167.4, 39.2, 169.9, 37.2, 171.9);
      ctx4.bezierCurveTo(35.2, 173.9, 32.7, 175.1, 30.1, 176.0);
      ctx4.bezierCurveTo(30.0, 175.8, 29.9, 175.7, 29.8, 175.6);
      ctx4.bezierCurveTo(30.5, 175.2, 31.3, 175.0, 31.7, 174.5);
      ctx4.bezierCurveTo(32.2, 174.0, 32.7, 172.7, 32.6, 172.6);
      ctx4.bezierCurveTo(31.5, 171.6, 32.1, 170.5, 32.7, 170.2);
      ctx4.bezierCurveTo(34.3, 169.1, 34.0, 167.4, 34.5, 165.9);
      ctx4.bezierCurveTo(34.7, 165.3, 35.1, 164.7, 35.6, 164.3);
      ctx4.bezierCurveTo(36.8, 163.3, 38.7, 163.1, 38.5, 160.9);
      ctx4.bezierCurveTo(38.5, 160.8, 39.0, 160.6, 39.2, 160.4);
      ctx4.bezierCurveTo(39.8, 159.8, 40.4, 159.2, 40.9, 158.5);
      ctx4.bezierCurveTo(41.4, 157.6, 41.7, 156.7, 42.2, 155.9);
      ctx4.bezierCurveTo(43.4, 153.5, 44.7, 151.2, 45.8, 148.8);
      ctx4.bezierCurveTo(47.5, 145.1, 49.0, 141.3, 50.6, 137.5);
      ctx4.bezierCurveTo(51.6, 135.2, 52.8, 132.9, 53.9, 130.6);
      ctx4.bezierCurveTo(54.6, 129.0, 55.2, 127.2, 56.1, 125.7);
      ctx4.bezierCurveTo(57.1, 123.7, 58.4, 121.9, 59.6, 120.1);
      ctx4.bezierCurveTo(59.7, 120.2, 59.9, 120.3, 60.1, 120.4);
      ctx4.bezierCurveTo(59.6, 121.1, 59.1, 121.9, 58.7, 122.7);
      ctx4.bezierCurveTo(57.1, 126.0, 55.5, 129.4, 53.9, 132.8);
      ctx4.bezierCurveTo(53.3, 134.1, 52.9, 135.4, 52.4, 136.8);
      ctx4.bezierCurveTo(52.0, 137.6, 51.1, 138.4, 52.1, 139.4);
      ctx4.bezierCurveTo(52.3, 139.7, 52.5, 141.0, 51.2, 141.0);
      ctx4.bezierCurveTo(51.0, 141.0, 50.7, 141.2, 50.6, 141.4);
      ctx4.bezierCurveTo(50.0, 143.1, 49.4, 144.7, 48.9, 146.4);
      ctx4.bezierCurveTo(48.8, 146.5, 49.1, 146.7, 49.2, 146.8);
      ctx4.lineTo(49.2, 146.8);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(142.9, 131.0);
      ctx4.bezierCurveTo(142.3, 131.6, 141.6, 132.2, 141.0, 132.8);
      ctx4.bezierCurveTo(141.6, 133.8, 143.4, 134.4, 142.3, 136.2);
      ctx4.bezierCurveTo(142.1, 136.6, 142.0, 137.2, 141.8, 137.7);
      ctx4.bezierCurveTo(141.3, 137.5, 140.8, 137.2, 140.3, 137.0);
      ctx4.bezierCurveTo(140.1, 136.9, 139.9, 136.7, 139.8, 136.7);
      ctx4.bezierCurveTo(139.3, 137.4, 138.8, 138.0, 138.3, 138.8);
      ctx4.bezierCurveTo(138.6, 139.4, 138.9, 140.2, 139.3, 140.9);
      ctx4.bezierCurveTo(139.2, 141.0, 139.2, 141.0, 139.1, 141.0);
      ctx4.bezierCurveTo(138.6, 140.6, 138.1, 140.1, 137.5, 139.5);
      ctx4.bezierCurveTo(136.9, 140.1, 136.2, 140.6, 136.0, 141.3);
      ctx4.bezierCurveTo(135.5, 143.1, 135.4, 144.9, 134.9, 146.7);
      ctx4.bezierCurveTo(134.6, 147.9, 135.0, 148.4, 136.2, 148.7);
      ctx4.bezierCurveTo(136.9, 148.8, 137.5, 149.4, 138.2, 149.8);
      ctx4.bezierCurveTo(138.0, 150.1, 137.6, 150.7, 137.6, 150.7);
      ctx4.bezierCurveTo(136.9, 150.4, 136.3, 150.0, 135.9, 149.7);
      ctx4.bezierCurveTo(135.2, 149.6, 134.7, 149.5, 134.1, 149.4);
      ctx4.bezierCurveTo(133.6, 150.9, 133.6, 151.0, 131.9, 150.4);
      ctx4.bezierCurveTo(131.0, 150.2, 130.2, 150.0, 129.4, 149.6);
      ctx4.bezierCurveTo(128.8, 149.2, 127.9, 148.5, 127.8, 147.9);
      ctx4.bezierCurveTo(127.8, 146.8, 128.0, 145.5, 129.8, 145.5);
      ctx4.bezierCurveTo(130.1, 145.5, 130.4, 145.3, 130.8, 145.2);
      ctx4.bezierCurveTo(129.8, 142.4, 129.1, 142.2, 126.3, 143.7);
      ctx4.bezierCurveTo(125.9, 142.9, 125.5, 142.1, 125.1, 141.2);
      ctx4.bezierCurveTo(124.8, 141.9, 124.4, 142.5, 124.2, 142.9);
      ctx4.bezierCurveTo(123.1, 142.8, 122.1, 142.8, 121.1, 142.7);
      ctx4.bezierCurveTo(120.9, 142.4, 120.7, 141.9, 120.4, 141.3);
      ctx4.bezierCurveTo(119.1, 142.5, 117.8, 143.5, 116.4, 144.7);
      ctx4.bezierCurveTo(116.5, 145.1, 116.9, 145.8, 117.1, 146.5);
      ctx4.bezierCurveTo(118.2, 150.0, 119.1, 153.6, 120.3, 157.1);
      ctx4.bezierCurveTo(122.0, 162.1, 123.8, 167.1, 125.6, 172.0);
      ctx4.bezierCurveTo(127.3, 176.9, 128.9, 181.8, 130.7, 186.6);
      ctx4.bezierCurveTo(133.4, 193.5, 135.6, 200.5, 139.2, 207.0);
      ctx4.bezierCurveTo(140.0, 208.6, 140.7, 210.4, 141.2, 212.1);
      ctx4.bezierCurveTo(141.8, 214.0, 141.9, 216.0, 142.6, 217.8);
      ctx4.bezierCurveTo(143.8, 221.3, 145.2, 224.7, 146.6, 228.1);
      ctx4.bezierCurveTo(146.7, 228.5, 146.9, 228.9, 147.1, 229.2);
      ctx4.bezierCurveTo(147.5, 228.6, 147.7, 228.0, 147.7, 227.3);
      ctx4.bezierCurveTo(148.6, 219.1, 149.5, 210.8, 150.4, 202.5);
      ctx4.bezierCurveTo(150.8, 199.2, 151.1, 195.8, 151.6, 192.5);
      ctx4.bezierCurveTo(152.1, 189.3, 151.4, 186.0, 152.4, 182.7);
      ctx4.bezierCurveTo(153.0, 180.9, 152.9, 178.9, 153.0, 177.0);
      ctx4.bezierCurveTo(154.0, 163.1, 155.0, 149.2, 156.0, 135.3);
      ctx4.bezierCurveTo(156.1, 134.5, 155.8, 133.7, 155.6, 133.0);
      ctx4.bezierCurveTo(156.0, 131.3, 156.3, 129.6, 156.4, 127.8);
      ctx4.bezierCurveTo(156.7, 123.1, 156.2, 118.4, 157.1, 113.7);
      ctx4.bezierCurveTo(157.8, 110.4, 157.3, 106.9, 157.3, 103.5);
      ctx4.bezierCurveTo(157.3, 101.9, 156.4, 101.1, 154.6, 101.1);
      ctx4.bezierCurveTo(154.8, 102.4, 155.0, 103.6, 155.2, 105.0);
      ctx4.bezierCurveTo(155.0, 105.0, 154.7, 105.0, 154.0, 105.1);
      ctx4.bezierCurveTo(154.6, 106.6, 155.1, 108.0, 155.7, 109.4);
      ctx4.bezierCurveTo(155.5, 109.5, 155.4, 109.5, 155.2, 109.6);
      ctx4.bezierCurveTo(154.8, 109.0, 154.4, 108.5, 154.0, 107.9);
      ctx4.bezierCurveTo(153.6, 108.3, 153.4, 108.7, 153.1, 109.0);
      ctx4.bezierCurveTo(152.7, 107.6, 152.3, 106.3, 151.8, 104.5);
      ctx4.bezierCurveTo(149.6, 108.4, 147.7, 111.7, 145.6, 115.4);
      ctx4.bezierCurveTo(146.7, 115.3, 147.3, 115.2, 148.0, 115.1);
      ctx4.bezierCurveTo(148.0, 115.3, 148.1, 115.4, 148.2, 115.6);
      ctx4.bezierCurveTo(147.7, 115.8, 147.2, 116.1, 146.7, 116.2);
      ctx4.bezierCurveTo(144.8, 116.6, 144.5, 117.3, 145.7, 118.8);
      ctx4.bezierCurveTo(146.1, 119.4, 146.6, 120.0, 147.1, 120.8);
      ctx4.bezierCurveTo(145.9, 121.4, 144.7, 121.9, 145.1, 123.5);
      ctx4.bezierCurveTo(145.1, 123.7, 144.8, 123.9, 144.6, 124.1);
      ctx4.bezierCurveTo(143.4, 125.6, 142.3, 127.0, 141.1, 128.6);
      ctx4.bezierCurveTo(141.0, 128.5, 140.6, 128.2, 140.1, 127.8);
      ctx4.bezierCurveTo(140.0, 128.6, 140.0, 129.2, 140.0, 129.8);
      ctx4.bezierCurveTo(140.8, 130.0, 141.6, 130.2, 142.3, 130.5);
      ctx4.bezierCurveTo(142.5, 130.6, 142.7, 130.9, 142.9, 131.1);
      ctx4.bezierCurveTo(142.9, 131.1, 142.9, 131.0, 142.9, 131.0);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(87.8, 86.1);
      ctx4.bezierCurveTo(88.1, 86.6, 88.3, 87.2, 88.8, 87.5);
      ctx4.bezierCurveTo(90.0, 88.3, 91.2, 88.9, 92.5, 89.6);
      ctx4.bezierCurveTo(93.3, 88.4, 93.4, 86.0, 92.4, 85.8);
      ctx4.bezierCurveTo(90.9, 85.5, 90.8, 84.6, 90.9, 82.9);
      ctx4.bezierCurveTo(90.0, 83.7, 89.4, 84.1, 88.9, 84.7);
      ctx4.bezierCurveTo(88.4, 85.1, 88.1, 85.7, 87.7, 86.2);
      ctx4.bezierCurveTo(87.7, 85.1, 87.7, 84.0, 87.7, 82.9);
      ctx4.bezierCurveTo(90.3, 82.6, 87.7, 80.5, 89.0, 79.7);
      ctx4.bezierCurveTo(89.8, 80.0, 90.7, 80.2, 91.4, 80.7);
      ctx4.bezierCurveTo(92.2, 81.1, 92.9, 81.9, 93.6, 82.4);
      ctx4.bezierCurveTo(94.0, 82.7, 94.6, 82.7, 95.0, 82.7);
      ctx4.bezierCurveTo(95.5, 82.7, 96.1, 82.6, 96.6, 82.5);
      ctx4.bezierCurveTo(96.7, 83.3, 96.8, 83.8, 96.9, 84.5);
      ctx4.bezierCurveTo(100.7, 81.5, 102.5, 78.2, 101.3, 76.3);
      ctx4.bezierCurveTo(106.8, 75.8, 111.0, 73.4, 113.3, 68.1);
      ctx4.bezierCurveTo(113.1, 69.5, 112.9, 70.9, 112.7, 72.5);
      ctx4.bezierCurveTo(112.2, 72.5, 111.7, 72.3, 111.3, 72.5);
      ctx4.bezierCurveTo(110.2, 73.1, 108.8, 75.9, 109.5, 76.4);
      ctx4.bezierCurveTo(110.4, 77.1, 111.7, 77.4, 112.9, 77.8);
      ctx4.bezierCurveTo(113.0, 77.9, 113.1, 77.8, 113.2, 77.8);
      ctx4.bezierCurveTo(114.2, 77.9, 115.2, 78.2, 116.2, 78.2);
      ctx4.bezierCurveTo(117.7, 78.2, 119.7, 78.6, 120.7, 77.8);
      ctx4.bezierCurveTo(122.5, 76.3, 123.7, 74.3, 122.9, 71.4);
      ctx4.bezierCurveTo(122.4, 69.6, 123.0, 67.5, 120.8, 66.5);
      ctx4.bezierCurveTo(121.2, 66.6, 121.6, 66.7, 122.0, 66.7);
      ctx4.bezierCurveTo(122.1, 66.6, 122.2, 66.4, 122.2, 66.3);
      ctx4.bezierCurveTo(121.6, 65.9, 121.0, 65.5, 120.3, 65.0);
      ctx4.bezierCurveTo(120.8, 64.6, 121.3, 64.1, 122.0, 63.5);
      ctx4.bezierCurveTo(120.9, 63.0, 120.1, 62.6, 119.0, 62.1);
      ctx4.bezierCurveTo(121.8, 61.5, 121.4, 59.3, 121.8, 57.6);
      ctx4.bezierCurveTo(121.3, 57.3, 120.9, 57.1, 120.5, 56.9);
      ctx4.bezierCurveTo(120.2, 56.6, 119.9, 56.3, 119.5, 56.1);
      ctx4.bezierCurveTo(118.2, 55.2, 118.1, 54.2, 119.1, 53.1);
      ctx4.bezierCurveTo(120.0, 52.0, 121.0, 51.0, 121.7, 49.8);
      ctx4.bezierCurveTo(122.6, 48.2, 124.0, 47.7, 125.8, 47.4);
      ctx4.bezierCurveTo(125.7, 48.1, 125.4, 48.8, 125.1, 49.4);
      ctx4.bezierCurveTo(124.8, 50.1, 124.3, 50.8, 124.2, 51.5);
      ctx4.bezierCurveTo(124.2, 51.8, 125.3, 52.1, 125.8, 52.5);
      ctx4.bezierCurveTo(126.1, 52.7, 126.2, 53.0, 126.4, 53.3);
      ctx4.bezierCurveTo(130.1, 51.9, 133.7, 51.1, 137.6, 52.6);
      ctx4.bezierCurveTo(136.8, 52.0, 135.8, 51.6, 135.0, 51.1);
      ctx4.bezierCurveTo(134.4, 50.8, 133.8, 50.4, 133.2, 50.0);
      ctx4.bezierCurveTo(134.0, 49.8, 134.8, 49.5, 135.6, 49.4);
      ctx4.bezierCurveTo(136.0, 49.3, 136.5, 49.6, 136.8, 49.5);
      ctx4.bezierCurveTo(137.7, 49.3, 138.7, 49.1, 139.5, 48.5);
      ctx4.bezierCurveTo(140.4, 47.8, 140.1, 45.5, 139.1, 45.3);
      ctx4.bezierCurveTo(136.9, 44.7, 134.7, 44.0, 132.5, 44.0);
      ctx4.bezierCurveTo(131.4, 44.0, 130.8, 42.8, 130.1, 43.2);
      ctx4.bezierCurveTo(128.1, 44.4, 127.0, 42.5, 125.4, 42.4);
      ctx4.bezierCurveTo(125.5, 41.5, 125.6, 40.8, 125.7, 39.9);
      ctx4.bezierCurveTo(128.8, 39.4, 132.0, 38.9, 135.2, 38.4);
      ctx4.bezierCurveTo(135.5, 39.4, 135.8, 40.2, 136.0, 40.9);
      ctx4.bezierCurveTo(137.3, 38.8, 135.3, 37.6, 135.0, 35.9);
      ctx4.bezierCurveTo(134.7, 34.3, 133.1, 33.0, 132.1, 31.6);
      ctx4.bezierCurveTo(132.2, 31.5, 132.3, 31.3, 132.4, 31.2);
      ctx4.bezierCurveTo(133.2, 31.6, 134.1, 32.1, 134.9, 32.5);
      ctx4.bezierCurveTo(135.8, 33.0, 136.5, 33.0, 136.7, 32.0);
      ctx4.bezierCurveTo(137.0, 30.8, 137.1, 29.5, 137.1, 28.3);
      ctx4.bezierCurveTo(137.1, 26.9, 136.9, 25.5, 136.8, 24.1);
      ctx4.bezierCurveTo(137.0, 24.1, 137.2, 24.0, 137.4, 24.0);
      ctx4.bezierCurveTo(137.7, 25.6, 138.0, 27.2, 138.5, 28.7);
      ctx4.bezierCurveTo(138.7, 29.3, 139.4, 29.7, 139.9, 30.2);
      ctx4.bezierCurveTo(140.2, 29.7, 140.6, 29.3, 140.7, 28.8);
      ctx4.bezierCurveTo(141.0, 28.0, 141.0, 27.1, 141.1, 26.3);
      ctx4.bezierCurveTo(140.7, 25.3, 140.2, 24.2, 139.6, 23.2);
      ctx4.bezierCurveTo(139.1, 22.4, 138.4, 21.6, 137.7, 21.1);
      ctx4.bezierCurveTo(136.7, 20.3, 135.5, 19.6, 134.3, 19.3);
      ctx4.bezierCurveTo(133.1, 18.9, 131.7, 18.7, 130.6, 19.0);
      ctx4.bezierCurveTo(129.8, 19.3, 129.3, 19.7, 128.4, 19.4);
      ctx4.bezierCurveTo(127.5, 19.1, 126.0, 18.6, 125.6, 19.0);
      ctx4.bezierCurveTo(123.7, 20.8, 122.1, 20.2, 120.4, 18.7);
      ctx4.bezierCurveTo(119.9, 19.1, 119.5, 19.5, 119.0, 19.9);
      ctx4.bezierCurveTo(118.6, 19.3, 118.2, 18.9, 117.7, 18.3);
      ctx4.bezierCurveTo(117.5, 18.8, 117.4, 19.1, 117.3, 19.3);
      ctx4.bezierCurveTo(116.5, 18.9, 115.8, 18.6, 115.0, 18.3);
      ctx4.bezierCurveTo(113.5, 20.5, 112.0, 18.1, 110.4, 18.5);
      ctx4.bezierCurveTo(110.3, 18.9, 110.1, 19.3, 110.0, 19.6);
      ctx4.bezierCurveTo(108.3, 19.5, 106.9, 19.3, 105.3, 19.2);
      ctx4.bezierCurveTo(105.4, 19.7, 105.5, 20.1, 105.6, 20.6);
      ctx4.bezierCurveTo(104.7, 21.1, 103.7, 21.1, 102.8, 21.7);
      ctx4.bezierCurveTo(101.9, 22.3, 100.5, 22.0, 99.4, 22.2);
      ctx4.bezierCurveTo(98.2, 22.3, 96.8, 22.2, 95.9, 22.8);
      ctx4.bezierCurveTo(94.6, 23.7, 93.3, 24.4, 91.6, 24.1);
      ctx4.bezierCurveTo(91.0, 24.0, 90.3, 24.1, 89.6, 24.1);
      ctx4.bezierCurveTo(89.8, 24.2, 89.9, 24.3, 90.0, 24.4);
      ctx4.bezierCurveTo(87.0, 26.5, 84.7, 29.2, 84.6, 32.8);
      ctx4.bezierCurveTo(84.4, 36.2, 84.5, 39.7, 86.1, 43.0);
      ctx4.bezierCurveTo(85.9, 44.1, 85.5, 45.5, 85.2, 46.9);
      ctx4.bezierCurveTo(83.8, 46.8, 83.7, 48.0, 83.5, 49.0);
      ctx4.bezierCurveTo(83.3, 49.8, 83.2, 50.7, 83.0, 51.4);
      ctx4.bezierCurveTo(81.8, 55.0, 80.4, 58.6, 83.6, 61.9);
      ctx4.bezierCurveTo(83.7, 62.0, 83.6, 62.2, 83.6, 62.4);
      ctx4.bezierCurveTo(82.8, 62.4, 82.1, 62.4, 81.0, 62.4);
      ctx4.bezierCurveTo(81.6, 64.2, 82.1, 65.8, 82.6, 67.4);
      ctx4.bezierCurveTo(82.8, 67.3, 82.9, 67.3, 83.1, 67.2);
      ctx4.bezierCurveTo(83.0, 66.7, 82.9, 66.1, 82.8, 65.6);
      ctx4.bezierCurveTo(83.7, 67.3, 84.4, 69.1, 85.0, 71.0);
      ctx4.bezierCurveTo(85.1, 71.2, 84.8, 71.6, 84.8, 71.9);
      ctx4.bezierCurveTo(84.7, 73.5, 84.5, 75.1, 84.5, 76.7);
      ctx4.bezierCurveTo(84.5, 77.4, 85.2, 78.1, 85.1, 78.7);
      ctx4.bezierCurveTo(84.7, 81.5, 86.3, 83.7, 86.7, 86.3);
      ctx4.bezierCurveTo(87.1, 86.2, 87.4, 86.2, 87.8, 86.1);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(140.4, 69.3);
      ctx4.bezierCurveTo(141.3, 67.3, 142.3, 65.4, 143.1, 63.3);
      ctx4.bezierCurveTo(143.9, 61.3, 142.7, 59.8, 141.4, 58.5);
      ctx4.bezierCurveTo(141.2, 58.3, 140.4, 58.4, 140.1, 58.6);
      ctx4.bezierCurveTo(139.2, 59.2, 138.4, 60.0, 137.6, 60.7);
      ctx4.bezierCurveTo(135.0, 63.0, 132.0, 64.0, 128.7, 63.6);
      ctx4.bezierCurveTo(127.8, 63.5, 127.1, 62.8, 126.0, 62.3);
      ctx4.bezierCurveTo(129.6, 61.1, 133.3, 63.0, 135.9, 59.8);
      ctx4.bezierCurveTo(135.0, 59.6, 134.3, 59.4, 133.6, 59.3);
      ctx4.bezierCurveTo(134.9, 58.5, 136.1, 57.7, 137.2, 56.9);
      ctx4.bezierCurveTo(137.1, 56.7, 137.0, 56.5, 136.9, 56.3);
      ctx4.bezierCurveTo(136.4, 56.4, 135.9, 56.6, 135.4, 56.5);
      ctx4.bezierCurveTo(133.2, 56.2, 130.5, 58.2, 128.7, 55.1);
      ctx4.bezierCurveTo(129.1, 57.5, 127.2, 57.0, 126.1, 57.5);
      ctx4.bezierCurveTo(125.6, 57.7, 125.1, 57.8, 124.6, 57.9);
      ctx4.bezierCurveTo(122.2, 58.6, 121.7, 59.0, 121.9, 60.7);
      ctx4.bezierCurveTo(122.2, 62.4, 122.5, 64.1, 123.1, 65.6);
      ctx4.bezierCurveTo(124.2, 68.4, 126.1, 70.4, 129.1, 71.3);
      ctx4.bezierCurveTo(132.0, 72.2, 134.5, 73.8, 136.6, 76.0);
      ctx4.bezierCurveTo(136.8, 76.2, 137.2, 76.3, 137.5, 76.3);
      ctx4.bezierCurveTo(138.3, 76.4, 139.1, 76.4, 140.1, 76.4);
      ctx4.bezierCurveTo(140.3, 76.1, 140.5, 75.6, 140.8, 75.1);
      ctx4.bezierCurveTo(141.4, 73.9, 141.8, 72.2, 142.8, 71.6);
      ctx4.bezierCurveTo(144.7, 70.4, 144.8, 68.9, 144.7, 67.0);
      ctx4.bezierCurveTo(142.3, 66.3, 141.9, 69.0, 140.4, 69.3);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(78.4, 132.6);
      ctx4.bezierCurveTo(79.4, 131.8, 79.9, 129.1, 79.1, 128.5);
      ctx4.bezierCurveTo(78.3, 127.8, 78.6, 127.4, 79.0, 126.7);
      ctx4.bezierCurveTo(79.3, 126.2, 79.7, 125.4, 79.5, 125.1);
      ctx4.bezierCurveTo(78.3, 123.6, 79.5, 122.0, 79.3, 120.5);
      ctx4.bezierCurveTo(79.2, 120.0, 79.1, 119.5, 79.0, 118.7);
      ctx4.bezierCurveTo(78.5, 119.3, 78.2, 119.6, 78.2, 119.6);
      ctx4.bezierCurveTo(77.2, 119.5, 76.6, 119.5, 76.0, 119.5);
      ctx4.bezierCurveTo(74.4, 119.4, 74.9, 120.7, 74.7, 121.5);
      ctx4.bezierCurveTo(74.1, 123.9, 73.5, 126.4, 72.9, 128.8);
      ctx4.bezierCurveTo(72.8, 129.2, 72.6, 129.5, 72.6, 129.8);
      ctx4.bezierCurveTo(72.3, 130.8, 72.5, 131.7, 73.7, 132.4);
      ctx4.bezierCurveTo(73.9, 131.2, 73.8, 130.1, 74.2, 129.2);
      ctx4.bezierCurveTo(74.5, 128.5, 75.4, 127.5, 76.0, 127.6);
      ctx4.bezierCurveTo(76.7, 127.6, 77.6, 128.5, 77.9, 129.3);
      ctx4.bezierCurveTo(78.3, 130.2, 78.3, 131.4, 78.4, 132.6);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(122.1, 104.9);
      ctx4.bezierCurveTo(122.0, 104.7, 121.9, 104.5, 121.8, 104.3);
      ctx4.bezierCurveTo(122.2, 104.0, 122.7, 103.3, 123.0, 103.4);
      ctx4.bezierCurveTo(125.3, 104.1, 126.6, 102.2, 128.2, 101.3);
      ctx4.bezierCurveTo(128.4, 101.2, 128.4, 100.5, 128.4, 100.1);
      ctx4.bezierCurveTo(128.0, 100.2, 127.5, 100.1, 127.2, 100.3);
      ctx4.bezierCurveTo(126.7, 100.6, 126.3, 101.1, 125.8, 101.4);
      ctx4.bezierCurveTo(122.8, 103.4, 119.5, 102.1, 116.3, 102.2);
      ctx4.bezierCurveTo(116.3, 102.2, 116.2, 102.3, 116.2, 102.4);
      ctx4.bezierCurveTo(116.3, 102.8, 116.5, 103.2, 116.7, 103.6);
      ctx4.bezierCurveTo(115.2, 104.1, 115.0, 104.5, 116.3, 105.4);
      ctx4.bezierCurveTo(116.9, 105.9, 117.6, 106.2, 118.4, 106.3);
      ctx4.bezierCurveTo(121.5, 106.7, 124.3, 105.8, 126.9, 104.2);
      ctx4.bezierCurveTo(127.2, 104.1, 127.6, 104.0, 128.0, 103.9);
      ctx4.bezierCurveTo(127.8, 103.8, 127.7, 103.6, 127.5, 103.5);
      ctx4.bezierCurveTo(125.7, 104.0, 123.9, 104.5, 122.1, 104.9);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(114.1, 96.3);
      ctx4.bezierCurveTo(114.7, 97.1, 115.3, 97.5, 115.7, 98.2);
      ctx4.bezierCurveTo(116.2, 99.1, 116.4, 100.2, 117.9, 99.8);
      ctx4.bezierCurveTo(119.0, 99.5, 120.1, 99.6, 121.2, 99.5);
      ctx4.bezierCurveTo(121.4, 99.5, 121.6, 99.1, 121.6, 98.8);
      ctx4.bezierCurveTo(122.4, 96.7, 121.9, 95.8, 119.6, 95.5);
      ctx4.bezierCurveTo(119.4, 95.5, 119.1, 95.5, 118.8, 95.4);
      ctx4.bezierCurveTo(117.0, 94.3, 115.7, 95.6, 114.1, 96.3);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(154.3, 263.2);
      ctx4.bezierCurveTo(154.4, 263.3, 154.6, 263.3, 154.8, 263.3);
      ctx4.bezierCurveTo(154.3, 264.5, 153.7, 265.7, 153.3, 267.0);
      ctx4.bezierCurveTo(153.2, 267.3, 153.8, 268.1, 153.9, 268.1);
      ctx4.bezierCurveTo(154.8, 268.0, 155.9, 267.9, 156.5, 267.3);
      ctx4.bezierCurveTo(159.2, 264.9, 158.9, 262.1, 155.8, 260.1);
      ctx4.bezierCurveTo(155.9, 260.6, 156.1, 261.1, 156.4, 261.5);
      ctx4.bezierCurveTo(156.8, 262.0, 157.1, 262.5, 157.7, 263.2);
      ctx4.bezierCurveTo(156.0, 262.4, 154.8, 261.8, 153.5, 261.3);
      ctx4.bezierCurveTo(153.4, 261.4, 153.3, 261.6, 153.1, 261.7);
      ctx4.bezierCurveTo(153.5, 262.2, 153.9, 262.7, 154.3, 263.2);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(122.7, 95.5);
      ctx4.bezierCurveTo(122.5, 96.7, 122.1, 98.2, 123.6, 98.9);
      ctx4.bezierCurveTo(124.9, 99.5, 126.2, 98.8, 127.0, 97.8);
      ctx4.bezierCurveTo(127.3, 97.4, 127.4, 96.6, 127.2, 96.2);
      ctx4.bezierCurveTo(127.1, 95.8, 126.4, 95.6, 125.9, 95.6);
      ctx4.bezierCurveTo(124.9, 95.5, 123.9, 95.5, 122.7, 95.5);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(125.1, 71.4);
      ctx4.bezierCurveTo(124.9, 71.5, 124.7, 71.5, 124.4, 71.6);
      ctx4.bezierCurveTo(124.3, 72.0, 123.9, 72.6, 124.0, 72.9);
      ctx4.bezierCurveTo(124.3, 73.8, 123.8, 75.4, 125.2, 75.3);
      ctx4.bezierCurveTo(125.9, 75.3, 127.0, 74.0, 126.9, 73.6);
      ctx4.bezierCurveTo(126.7, 72.8, 125.7, 72.1, 125.1, 71.4);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(80.4, 144.3);
      ctx4.bezierCurveTo(80.5, 143.5, 80.7, 143.0, 80.6, 142.5);
      ctx4.bezierCurveTo(80.5, 142.4, 79.6, 142.2, 79.5, 142.3);
      ctx4.bezierCurveTo(79.1, 142.8, 78.8, 143.3, 78.8, 143.9);
      ctx4.bezierCurveTo(78.8, 144.3, 79.3, 144.7, 79.6, 145.1);
      ctx4.bezierCurveTo(80.0, 145.4, 80.4, 145.7, 80.8, 146.0);
      ctx4.bezierCurveTo(81.1, 146.2, 81.6, 146.6, 81.8, 146.5);
      ctx4.bezierCurveTo(82.2, 146.3, 82.6, 145.8, 82.7, 145.4);
      ctx4.bezierCurveTo(82.7, 145.2, 82.2, 144.8, 81.9, 144.6);
      ctx4.bezierCurveTo(81.4, 144.4, 80.8, 144.4, 80.4, 144.3);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(69.6, 146.0);
      ctx4.bezierCurveTo(69.8, 146.0, 70.0, 146.0, 70.2, 146.0);
      ctx4.bezierCurveTo(70.2, 145.0, 70.2, 144.0, 70.2, 143.0);
      ctx4.bezierCurveTo(70.2, 141.8, 70.0, 140.4, 71.6, 139.7);
      ctx4.bezierCurveTo(72.0, 139.6, 72.1, 138.9, 72.4, 138.4);
      ctx4.bezierCurveTo(69.6, 139.6, 68.4, 143.6, 69.6, 146.0);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(107.3, 75.9);
      ctx4.bezierCurveTo(106.6, 76.7, 106.0, 77.3, 105.7, 77.9);
      ctx4.bezierCurveTo(105.5, 78.3, 105.5, 79.1, 105.8, 79.5);
      ctx4.bezierCurveTo(105.9, 79.7, 106.7, 79.6, 107.2, 79.5);
      ctx4.bezierCurveTo(107.8, 79.2, 108.3, 78.8, 109.0, 78.3);
      ctx4.bezierCurveTo(108.5, 77.6, 107.9, 76.8, 107.3, 75.9);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(118.9, 114.4);
      ctx4.bezierCurveTo(118.7, 114.4, 118.6, 114.3, 118.5, 114.3);
      ctx4.bezierCurveTo(118.3, 114.7, 117.9, 115.1, 118.0, 115.4);
      ctx4.bezierCurveTo(118.8, 116.9, 119.5, 118.5, 121.2, 119.9);
      ctx4.bezierCurveTo(120.7, 118.1, 120.4, 116.7, 120.1, 115.2);
      ctx4.bezierCurveTo(119.7, 115.3, 119.3, 115.4, 119.0, 115.4);
      ctx4.bezierCurveTo(118.9, 115.0, 118.9, 114.7, 118.9, 114.4);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(117.1, 87.4);
      ctx4.bezierCurveTo(117.1, 88.7, 117.1, 89.6, 117.1, 90.5);
      ctx4.bezierCurveTo(118.5, 90.4, 119.8, 90.3, 121.5, 90.3);
      ctx4.bezierCurveTo(119.9, 89.2, 118.8, 88.5, 117.1, 87.4);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(179.8, 166.3);
      ctx4.bezierCurveTo(179.0, 167.2, 178.3, 167.8, 178.2, 168.4);
      ctx4.bezierCurveTo(178.2, 168.8, 179.0, 169.4, 179.4, 169.9);
      ctx4.bezierCurveTo(179.8, 169.2, 181.4, 169.7, 181.1, 168.4);
      ctx4.bezierCurveTo(181.0, 167.8, 180.4, 167.3, 179.8, 166.3);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(113.4, 111.8);
      ctx4.bezierCurveTo(112.7, 111.1, 112.1, 110.4, 111.5, 109.7);
      ctx4.bezierCurveTo(110.9, 110.2, 110.4, 110.7, 110.0, 111.1);
      ctx4.bezierCurveTo(110.6, 111.7, 111.0, 112.2, 111.4, 112.7);
      ctx4.bezierCurveTo(111.9, 112.5, 112.6, 112.2, 113.4, 111.8);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(122.1, 121.6);
      ctx4.bezierCurveTo(122.8, 123.9, 123.7, 126.1, 126.5, 127.4);
      ctx4.bezierCurveTo(124.8, 125.3, 123.5, 123.4, 122.1, 121.6);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(99.5, 93.3);
      ctx4.bezierCurveTo(100.1, 92.3, 100.6, 91.5, 100.9, 90.6);
      ctx4.bezierCurveTo(101.1, 90.2, 101.1, 89.8, 101.2, 89.3);
      ctx4.bezierCurveTo(101.2, 89.3, 100.6, 89.1, 100.5, 89.2);
      ctx4.bezierCurveTo(100.0, 89.5, 99.4, 89.9, 99.3, 90.4);
      ctx4.bezierCurveTo(99.2, 91.2, 99.4, 92.1, 99.5, 93.3);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(151.9, 318.1);
      ctx4.bezierCurveTo(152.1, 318.1, 152.3, 318.0, 152.5, 318.0);
      ctx4.bezierCurveTo(152.7, 317.2, 153.1, 316.5, 153.3, 315.7);
      ctx4.bezierCurveTo(153.3, 315.6, 152.5, 315.0, 152.3, 315.1);
      ctx4.bezierCurveTo(151.8, 315.3, 151.1, 315.9, 151.1, 316.3);
      ctx4.bezierCurveTo(151.1, 316.9, 151.6, 317.5, 151.9, 318.1);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(124.6, 116.7);
      ctx4.bezierCurveTo(124.6, 118.2, 124.8, 119.7, 124.5, 121.1);
      ctx4.bezierCurveTo(124.3, 122.6, 124.1, 122.6, 125.4, 124.1);
      ctx4.bezierCurveTo(124.2, 121.5, 126.5, 118.9, 124.6, 116.7);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(79.1, 136.1);
      ctx4.bezierCurveTo(78.3, 136.8, 77.7, 137.5, 78.3, 138.5);
      ctx4.bezierCurveTo(78.4, 138.7, 79.1, 138.7, 79.3, 138.6);
      ctx4.bezierCurveTo(80.2, 137.8, 79.6, 137.0, 79.1, 136.1);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(153.9, 99.9);
      ctx4.bezierCurveTo(153.6, 99.8, 153.3, 99.7, 153.0, 99.6);
      ctx4.bezierCurveTo(152.8, 100.3, 152.5, 101.0, 152.4, 101.7);
      ctx4.bezierCurveTo(152.3, 101.8, 152.9, 102.0, 153.1, 102.2);
      ctx4.bezierCurveTo(153.4, 101.4, 153.6, 100.6, 153.9, 99.9);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(153.0, 99.2);
      ctx4.bezierCurveTo(154.7, 97.4, 154.7, 97.4, 153.0, 96.1);
      ctx4.bezierCurveTo(153.0, 97.2, 153.0, 98.1, 153.0, 99.2);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(124.9, 86.8);
      ctx4.bezierCurveTo(124.3, 87.7, 123.8, 88.6, 123.2, 89.4);
      ctx4.bezierCurveTo(125.7, 88.1, 125.7, 88.1, 124.9, 86.8);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(80.3, 141.1);
      ctx4.bezierCurveTo(80.3, 140.8, 80.4, 140.6, 80.4, 140.4);
      ctx4.bezierCurveTo(79.6, 140.1, 78.9, 139.9, 78.1, 139.7);
      ctx4.bezierCurveTo(78.2, 140.1, 78.3, 140.8, 78.6, 140.9);
      ctx4.bezierCurveTo(79.1, 141.1, 79.7, 141.0, 80.3, 141.1);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(120.8, 137.6);
      ctx4.bezierCurveTo(120.5, 137.5, 120.3, 137.4, 120.0, 137.4);
      ctx4.bezierCurveTo(119.7, 138.0, 119.4, 138.7, 119.1, 139.3);
      ctx4.bezierCurveTo(119.5, 139.4, 120.1, 139.6, 120.1, 139.6);
      ctx4.bezierCurveTo(120.4, 138.9, 120.6, 138.3, 120.8, 137.6);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(138.7, 133.1);
      ctx4.bezierCurveTo(138.9, 133.0, 139.1, 132.9, 139.3, 132.8);
      ctx4.bezierCurveTo(139.0, 132.3, 138.9, 131.6, 138.5, 131.3);
      ctx4.bezierCurveTo(138.3, 131.1, 137.6, 131.4, 136.7, 131.5);
      ctx4.bezierCurveTo(137.6, 132.3, 138.2, 132.7, 138.7, 133.1);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(153.0, 105.4);
      ctx4.bezierCurveTo(153.2, 105.4, 153.3, 105.4, 153.4, 105.5);
      ctx4.bezierCurveTo(153.4, 104.8, 153.5, 104.1, 153.4, 103.4);
      ctx4.bezierCurveTo(153.3, 103.3, 152.3, 103.4, 151.4, 103.4);
      ctx4.bezierCurveTo(152.2, 104.4, 152.6, 104.9, 153.0, 105.4);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(145.7, 57.9);
      ctx4.bezierCurveTo(144.4, 58.1, 143.6, 58.3, 142.7, 58.4);
      ctx4.bezierCurveTo(142.7, 58.5, 142.8, 58.8, 142.8, 59.0);
      ctx4.bezierCurveTo(143.5, 58.9, 144.3, 58.7, 145.1, 58.5);
      ctx4.bezierCurveTo(145.2, 58.5, 145.2, 58.4, 145.7, 57.9);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(80.0, 134.2);
      ctx4.bezierCurveTo(79.6, 133.8, 79.3, 133.3, 79.0, 133.3);
      ctx4.bezierCurveTo(78.7, 133.3, 78.5, 133.8, 78.2, 134.0);
      ctx4.bezierCurveTo(78.5, 134.3, 78.7, 134.7, 79.1, 134.8);
      ctx4.bezierCurveTo(79.2, 134.9, 79.6, 134.5, 80.0, 134.2);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(116.0, 140.0);
      ctx4.bezierCurveTo(117.7, 140.9, 116.6, 141.4, 115.6, 141.9);
      ctx4.bezierCurveTo(117.6, 142.3, 117.6, 141.2, 117.6, 140.0);
      ctx4.bezierCurveTo(117.1, 140.0, 116.6, 140.0, 116.0, 140.0);
      ctx4.closePath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(189.0, 162.3);
      ctx4.bezierCurveTo(188.8, 162.5, 188.7, 162.8, 188.6, 163.0);
      ctx4.bezierCurveTo(189.0, 163.3, 189.4, 163.7, 189.9, 164.1);
      ctx4.bezierCurveTo(190.1, 163.7, 190.3, 163.4, 190.4, 163.0);
      ctx4.bezierCurveTo(189.9, 162.8, 189.5, 162.6, 189.0, 162.3);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(232.8, 179.5);
      ctx4.bezierCurveTo(232.2, 179.3, 231.5, 179.2, 231.5, 179.0);
      ctx4.bezierCurveTo(231.4, 178.0, 231.5, 177.0, 231.5, 175.9);
      ctx4.bezierCurveTo(228.2, 169.7, 224.8, 163.4, 221.4, 157.0);
      ctx4.bezierCurveTo(221.5, 157.0, 221.6, 157.0, 221.7, 157.0);
      ctx4.bezierCurveTo(224.0, 158.9, 226.3, 160.8, 228.6, 162.6);
      ctx4.bezierCurveTo(229.5, 163.2, 230.5, 163.6, 231.4, 164.3);
      ctx4.bezierCurveTo(232.4, 165.0, 233.2, 165.9, 234.2, 166.6);
      ctx4.bezierCurveTo(236.5, 168.0, 238.9, 169.4, 241.3, 170.7);
      ctx4.bezierCurveTo(242.4, 171.4, 243.5, 172.1, 244.6, 172.7);
      ctx4.bezierCurveTo(246.1, 173.4, 247.6, 173.1, 249.0, 172.4);
      ctx4.bezierCurveTo(252.1, 170.8, 254.4, 168.3, 256.5, 165.5);
      ctx4.bezierCurveTo(257.2, 164.5, 257.2, 163.4, 256.9, 162.1);
      ctx4.bezierCurveTo(256.6, 160.2, 257.0, 158.2, 257.0, 156.2);
      ctx4.bezierCurveTo(257.0, 154.0, 256.8, 151.8, 255.4, 150.0);
      ctx4.bezierCurveTo(254.9, 149.4, 254.3, 149.0, 254.8, 147.9);
      ctx4.bezierCurveTo(255.1, 147.4, 254.4, 146.6, 254.2, 145.9);
      ctx4.bezierCurveTo(254.0, 145.9, 253.9, 145.9, 253.7, 145.9);
      ctx4.bezierCurveTo(253.6, 146.8, 253.5, 147.8, 253.3, 148.7);
      ctx4.bezierCurveTo(252.8, 150.6, 252.1, 152.5, 251.7, 154.3);
      ctx4.bezierCurveTo(251.2, 156.1, 251.7, 157.2, 253.6, 157.8);
      ctx4.bezierCurveTo(253.2, 156.9, 252.9, 156.2, 252.7, 155.5);
      ctx4.bezierCurveTo(252.5, 155.0, 252.4, 154.5, 252.4, 154.0);
      ctx4.bezierCurveTo(252.4, 153.8, 253.0, 153.6, 253.0, 153.6);
      ctx4.bezierCurveTo(253.4, 154.0, 253.8, 154.4, 253.9, 154.9);
      ctx4.bezierCurveTo(254.1, 155.7, 254.2, 156.7, 254.1, 157.6);
      ctx4.bezierCurveTo(254.1, 158.0, 253.7, 158.6, 253.3, 158.7);
      ctx4.bezierCurveTo(253.0, 158.8, 252.4, 158.4, 252.1, 158.1);
      ctx4.bezierCurveTo(250.8, 156.8, 250.7, 154.7, 251.2, 152.9);
      ctx4.bezierCurveTo(251.8, 150.7, 251.8, 148.4, 252.5, 146.3);
      ctx4.bezierCurveTo(253.5, 143.2, 251.1, 141.0, 250.9, 138.3);
      ctx4.bezierCurveTo(250.7, 138.3, 250.4, 138.3, 250.2, 138.3);
      ctx4.bezierCurveTo(249.7, 140.2, 249.4, 142.1, 248.7, 143.9);
      ctx4.bezierCurveTo(247.7, 146.2, 246.3, 148.3, 245.0, 150.4);
      ctx4.bezierCurveTo(244.9, 150.7, 244.5, 150.9, 244.1, 151.1);
      ctx4.bezierCurveTo(243.6, 151.3, 243.0, 151.5, 242.4, 151.4);
      ctx4.bezierCurveTo(242.2, 151.3, 242.2, 150.5, 241.9, 149.7);
      ctx4.bezierCurveTo(239.8, 149.7, 237.6, 149.7, 235.3, 149.7);
      ctx4.bezierCurveTo(235.3, 149.6, 235.3, 149.5, 235.3, 149.4);
      ctx4.bezierCurveTo(236.9, 149.2, 238.5, 149.2, 240.0, 148.9);
      ctx4.bezierCurveTo(240.8, 148.7, 241.3, 147.8, 242.0, 147.2);
      ctx4.bezierCurveTo(242.2, 147.0, 242.3, 146.7, 242.5, 146.6);
      ctx4.bezierCurveTo(244.8, 145.3, 245.9, 143.0, 247.3, 140.8);
      ctx4.bezierCurveTo(249.9, 136.5, 251.2, 131.8, 251.7, 126.8);
      ctx4.bezierCurveTo(251.9, 124.5, 252.5, 122.3, 253.1, 120.1);
      ctx4.bezierCurveTo(252.6, 121.9, 253.5, 123.6, 252.7, 125.5);
      ctx4.bezierCurveTo(251.9, 127.3, 252.1, 129.6, 251.6, 131.6);
      ctx4.bezierCurveTo(251.0, 134.0, 251.9, 135.9, 253.3, 137.7);
      ctx4.bezierCurveTo(255.6, 140.8, 257.7, 144.0, 260.1, 146.9);
      ctx4.bezierCurveTo(261.4, 148.4, 263.2, 149.6, 264.9, 150.8);
      ctx4.bezierCurveTo(268.1, 153.0, 271.4, 155.1, 274.7, 157.3);
      ctx4.bezierCurveTo(280.1, 160.8, 284.3, 165.4, 287.1, 171.2);
      ctx4.bezierCurveTo(288.4, 173.9, 289.9, 176.5, 292.1, 178.6);
      ctx4.bezierCurveTo(293.4, 180.0, 294.1, 181.5, 294.5, 183.4);
      ctx4.bezierCurveTo(296.1, 190.8, 296.9, 198.3, 296.2, 205.8);
      ctx4.bezierCurveTo(295.9, 209.7, 294.8, 213.4, 292.7, 216.8);
      ctx4.bezierCurveTo(291.0, 219.5, 288.5, 220.5, 285.6, 221.5);
      ctx4.bezierCurveTo(280.3, 223.3, 274.9, 222.8, 269.5, 222.0);
      ctx4.bezierCurveTo(267.8, 221.7, 266.5, 222.1, 265.1, 223.0);
      ctx4.bezierCurveTo(264.0, 223.7, 262.9, 224.6, 261.7, 225.2);
      ctx4.bezierCurveTo(260.2, 225.9, 259.3, 225.5, 259.2, 223.8);
      ctx4.bezierCurveTo(259.2, 222.7, 258.6, 222.2, 257.8, 221.5);
      ctx4.bezierCurveTo(254.0, 218.5, 250.7, 215.0, 248.2, 210.9);
      ctx4.bezierCurveTo(247.3, 209.5, 246.3, 208.3, 244.7, 207.5);
      ctx4.bezierCurveTo(242.7, 206.4, 240.7, 205.1, 238.7, 203.9);
      ctx4.bezierCurveTo(237.5, 203.2, 237.1, 202.3, 237.1, 200.9);
      ctx4.bezierCurveTo(237.0, 198.8, 236.7, 196.6, 236.2, 194.6);
      ctx4.bezierCurveTo(235.8, 193.0, 235.6, 191.3, 234.6, 189.7);
      ctx4.bezierCurveTo(233.8, 188.6, 234.3, 186.6, 234.1, 185.1);
      ctx4.bezierCurveTo(233.7, 183.2, 233.2, 181.3, 232.8, 179.5);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(269.5, 329.7);
      ctx4.bezierCurveTo(261.5, 329.7, 253.7, 329.7, 245.7, 329.7);
      ctx4.bezierCurveTo(246.0, 328.4, 246.3, 327.2, 246.6, 326.0);
      ctx4.bezierCurveTo(248.4, 318.5, 249.6, 311.0, 250.0, 303.3);
      ctx4.bezierCurveTo(250.2, 297.2, 250.6, 291.0, 250.5, 284.9);
      ctx4.bezierCurveTo(250.5, 281.2, 249.5, 277.5, 248.9, 273.7);
      ctx4.bezierCurveTo(248.5, 270.9, 248.0, 268.0, 247.6, 265.2);
      ctx4.bezierCurveTo(252.5, 269.3, 253.4, 275.3, 255.2, 280.7);
      ctx4.bezierCurveTo(257.5, 288.0, 259.6, 295.3, 261.8, 302.6);
      ctx4.bezierCurveTo(263.5, 308.1, 265.1, 313.5, 266.8, 318.9);
      ctx4.bezierCurveTo(267.6, 321.7, 268.5, 324.6, 269.3, 327.4);
      ctx4.bezierCurveTo(269.5, 328.1, 269.4, 328.9, 269.5, 329.7);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(81.0, 329.8);
      ctx4.bezierCurveTo(76.3, 329.8, 72.2, 329.9, 68.0, 329.8);
      ctx4.bezierCurveTo(67.7, 329.7, 67.0, 328.7, 67.0, 328.2);
      ctx4.bezierCurveTo(67.1, 325.3, 67.2, 322.4, 67.7, 319.7);
      ctx4.bezierCurveTo(69.5, 310.1, 69.4, 300.3, 69.9, 290.6);
      ctx4.bezierCurveTo(70.0, 289.2, 70.4, 287.8, 71.0, 286.6);
      ctx4.bezierCurveTo(74.3, 300.9, 77.6, 315.2, 81.0, 329.8);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(8.6, 168.4);
      ctx4.bezierCurveTo(8.4, 168.5, 8.1, 168.7, 7.5, 169.1);
      ctx4.bezierCurveTo(7.7, 167.5, 7.8, 166.1, 7.9, 164.8);
      ctx4.bezierCurveTo(8.0, 164.8, 8.1, 164.8, 8.2, 164.8);
      ctx4.bezierCurveTo(8.2, 165.5, 8.2, 166.2, 8.2, 166.6);
      ctx4.bezierCurveTo(8.9, 166.8, 9.5, 166.8, 9.9, 167.1);
      ctx4.bezierCurveTo(12.8, 168.9, 15.6, 171.2, 19.7, 170.6);
      ctx4.bezierCurveTo(19.1, 171.1, 18.7, 171.4, 18.2, 171.9);
      ctx4.bezierCurveTo(18.5, 172.3, 18.8, 172.7, 19.3, 173.4);
      ctx4.bezierCurveTo(16.5, 174.8, 14.3, 172.1, 11.7, 172.6);
      ctx4.bezierCurveTo(11.9, 173.1, 12.1, 173.6, 12.5, 174.4);
      ctx4.bezierCurveTo(10.3, 172.7, 9.2, 170.9, 8.6, 168.4);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(239.8, 82.8);
      ctx4.bezierCurveTo(239.7, 84.5, 239.5, 86.2, 239.4, 87.9);
      ctx4.bezierCurveTo(239.4, 89.2, 239.6, 90.5, 239.5, 91.8);
      ctx4.bezierCurveTo(239.3, 95.1, 239.0, 98.5, 238.7, 101.8);
      ctx4.bezierCurveTo(238.6, 102.4, 237.9, 102.9, 237.5, 103.4);
      ctx4.bezierCurveTo(237.1, 102.7, 236.5, 102.1, 236.4, 101.4);
      ctx4.bezierCurveTo(236.3, 100.7, 236.6, 99.9, 236.9, 99.2);
      ctx4.bezierCurveTo(238.4, 95.7, 238.8, 92.0, 238.8, 88.2);
      ctx4.bezierCurveTo(238.9, 86.4, 239.2, 84.6, 239.4, 82.9);
      ctx4.bezierCurveTo(239.5, 82.9, 239.7, 82.9, 239.8, 82.8);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(246.3, 108.5);
      ctx4.bezierCurveTo(244.1, 107.1, 244.1, 106.6, 245.4, 104.4);
      ctx4.bezierCurveTo(246.1, 103.2, 246.5, 101.7, 247.0, 100.4);
      ctx4.bezierCurveTo(247.1, 99.9, 247.3, 99.4, 247.8, 98.9);
      ctx4.bezierCurveTo(247.3, 102.1, 246.8, 105.2, 246.3, 108.5);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(227.0, 96.2);
      ctx4.bezierCurveTo(227.3, 98.0, 227.6, 99.9, 227.9, 102.1);
      ctx4.bezierCurveTo(225.2, 100.3, 226.3, 98.2, 226.6, 96.3);
      ctx4.bezierCurveTo(226.7, 96.3, 226.9, 96.2, 227.0, 96.2);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(27.6, 105.0);
      ctx4.bezierCurveTo(28.3, 108.4, 28.9, 111.8, 29.6, 115.2);
      ctx4.bezierCurveTo(29.4, 115.2, 29.3, 115.3, 29.1, 115.3);
      ctx4.bezierCurveTo(28.5, 111.9, 27.8, 108.5, 27.1, 105.1);
      ctx4.bezierCurveTo(27.3, 105.1, 27.5, 105.1, 27.6, 105.0);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(249.2, 76.5);
      ctx4.bezierCurveTo(249.0, 79.3, 248.8, 82.1, 248.6, 85.0);
      ctx4.bezierCurveTo(248.5, 85.0, 248.3, 85.0, 248.2, 85.0);
      ctx4.bezierCurveTo(248.1, 84.3, 248.0, 83.5, 248.0, 82.8);
      ctx4.bezierCurveTo(248.3, 80.7, 248.7, 78.6, 249.0, 76.5);
      ctx4.bezierCurveTo(249.0, 76.4, 249.1, 76.3, 249.1, 76.2);
      ctx4.bezierCurveTo(249.2, 76.3, 249.2, 76.3, 249.2, 76.5);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(226.3, 91.5);
      ctx4.bezierCurveTo(223.3, 89.6, 225.7, 87.0, 225.1, 86.1);
      ctx4.bezierCurveTo(225.3, 87.1, 225.8, 89.1, 226.3, 91.5);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(248.4, 92.0);
      ctx4.bezierCurveTo(248.3, 93.8, 248.2, 95.7, 248.1, 97.5);
      ctx4.bezierCurveTo(248.1, 97.5, 248.0, 97.5, 247.9, 97.5);
      ctx4.bezierCurveTo(247.7, 96.4, 247.4, 95.3, 247.2, 94.2);
      ctx4.bezierCurveTo(247.5, 93.5, 247.9, 92.7, 248.2, 92.0);
      ctx4.bezierCurveTo(248.3, 92.0, 248.4, 92.0, 248.4, 92.0);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(13.5, 193.5);
      ctx4.bezierCurveTo(11.0, 193.5, 9.7, 192.3, 10.0, 190.9);
      ctx4.bezierCurveTo(11.2, 191.8, 12.3, 192.6, 13.5, 193.5);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(9.5, 122.1);
      ctx4.bezierCurveTo(9.9, 122.9, 10.4, 123.7, 10.6, 124.6);
      ctx4.bezierCurveTo(10.7, 124.8, 10.3, 125.3, 10.1, 125.6);
      ctx4.bezierCurveTo(9.9, 125.4, 9.4, 125.1, 9.4, 124.8);
      ctx4.bezierCurveTo(9.2, 124.0, 9.1, 123.1, 9.0, 122.3);
      ctx4.bezierCurveTo(9.1, 122.2, 9.3, 122.2, 9.5, 122.1);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(56.9, 171.2);
      ctx4.bezierCurveTo(56.2, 171.2, 55.5, 171.3, 54.7, 171.4);
      ctx4.bezierCurveTo(54.7, 171.2, 54.6, 170.7, 54.6, 170.6);
      ctx4.bezierCurveTo(55.5, 170.0, 56.1, 169.6, 56.9, 169.2);
      ctx4.bezierCurveTo(56.9, 169.9, 56.9, 170.6, 56.9, 171.2);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(240.2, 216.4);
      ctx4.bezierCurveTo(239.7, 215.0, 239.3, 214.0, 239.0, 213.0);
      ctx4.bezierCurveTo(240.7, 213.5, 241.0, 214.5, 240.2, 216.4);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(57.2, 175.4);
      ctx4.bezierCurveTo(57.1, 174.3, 57.1, 173.5, 57.1, 172.7);
      ctx4.bezierCurveTo(58.7, 173.4, 58.7, 173.6, 57.2, 175.4);
      ctx4.closePath();
     //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(49.2, 146.8);
      ctx4.bezierCurveTo(49.9, 146.4, 50.5, 145.9, 51.3, 145.3);
      ctx4.bezierCurveTo(51.2, 146.3, 51.0, 147.0, 50.8, 148.1);
      ctx4.bezierCurveTo(50.2, 147.6, 49.7, 147.2, 49.2, 146.8);
      ctx4.bezierCurveTo(49.2, 146.8, 49.2, 146.8, 49.2, 146.8);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Compound Path
      ctx4.beginPath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(79.0, 126.7);
      ctx4.bezierCurveTo(78.6, 127.4, 78.3, 127.8, 79.1, 128.5);
      ctx4.bezierCurveTo(79.9, 129.1, 79.4, 131.8, 78.4, 132.6);
      ctx4.bezierCurveTo(78.3, 131.4, 78.3, 130.2, 77.9, 129.3);

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(78.2, 119.6);
      ctx4.bezierCurveTo(78.2, 119.6, 78.5, 119.3, 79.0, 118.7);
      ctx4.bezierCurveTo(79.1, 119.5, 79.2, 120.0, 79.3, 120.5);

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(75.5, 124.9);
      ctx4.bezierCurveTo(75.4, 125.1, 75.3, 125.4, 75.1, 125.6);
      ctx4.bezierCurveTo(75.8, 125.9, 76.4, 126.3, 77.1, 126.7);
      ctx4.bezierCurveTo(77.2, 126.5, 77.3, 126.3, 77.4, 126.2);
      ctx4.bezierCurveTo(76.8, 125.8, 76.2, 125.3, 75.5, 124.9);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Compound Path
      ctx4.beginPath();

      // layer1/Group/Compound Path/Path
      ctx4.moveTo(120.9, 104.6);
      ctx4.bezierCurveTo(120.9, 104.4, 120.9, 104.2, 120.9, 104.0);
      ctx4.bezierCurveTo(119.8, 103.9, 118.7, 103.8, 117.6, 103.7);
      ctx4.bezierCurveTo(117.6, 104.0, 117.6, 104.2, 117.6, 104.5);
      ctx4.bezierCurveTo(118.7, 104.5, 119.8, 104.6, 120.9, 104.6);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(153.9, 99.9);
      ctx4.bezierCurveTo(153.6, 100.6, 153.4, 101.4, 153.1, 102.2);
      ctx4.bezierCurveTo(152.9, 102.0, 152.3, 101.8, 152.4, 101.7);
      ctx4.bezierCurveTo(152.5, 101.0, 152.8, 100.3, 153.0, 99.6);
      ctx4.bezierCurveTo(153.3, 99.7, 153.6, 99.8, 153.9, 99.9);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(153.0, 99.2);
      ctx4.bezierCurveTo(153.0, 98.1, 153.0, 97.2, 153.0, 96.1);
      ctx4.bezierCurveTo(154.7, 97.4, 154.7, 97.4, 153.0, 99.2);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(153.0, 105.4);
      ctx4.bezierCurveTo(152.6, 104.9, 152.2, 104.4, 151.4, 103.4);
      ctx4.bezierCurveTo(152.3, 103.4, 153.3, 103.3, 153.4, 103.4);
      ctx4.bezierCurveTo(153.5, 104.1, 153.4, 104.8, 153.4, 105.5);
      ctx4.bezierCurveTo(153.3, 105.4, 153.2, 105.4, 153.0, 105.4);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(145.7, 57.9);
      ctx4.bezierCurveTo(145.2, 58.4, 145.2, 58.5, 145.1, 58.5);
      ctx4.bezierCurveTo(144.3, 58.7, 143.5, 58.9, 142.8, 59.0);
      ctx4.bezierCurveTo(142.8, 58.8, 142.7, 58.5, 142.7, 58.4);
      ctx4.bezierCurveTo(143.6, 58.3, 144.4, 58.1, 145.7, 57.9);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(113.0, 66.8);
      ctx4.bezierCurveTo(112.5, 64.1, 112.4, 61.3, 110.4, 59.8);
      ctx4.bezierCurveTo(108.5, 60.0, 106.8, 60.2, 105.1, 60.5);
      ctx4.bezierCurveTo(105.1, 61.0, 105.1, 61.6, 105.1, 62.3);
      ctx4.bezierCurveTo(104.9, 62.3, 104.8, 62.4, 104.7, 62.5);
      ctx4.bezierCurveTo(104.5, 60.2, 102.8, 60.3, 101.5, 60.6);
      ctx4.bezierCurveTo(100.2, 60.8, 99.6, 60.5, 99.0, 59.6);
      ctx4.bezierCurveTo(98.9, 59.2, 98.3, 59.0, 98.0, 59.0);
      ctx4.bezierCurveTo(97.7, 59.0, 97.6, 59.7, 97.4, 60.0);
      ctx4.bezierCurveTo(97.0, 60.4, 96.6, 60.9, 96.2, 61.0);
      ctx4.bezierCurveTo(95.4, 61.2, 94.6, 61.2, 93.8, 61.3);
      ctx4.bezierCurveTo(92.3, 61.5, 91.4, 62.3, 91.4, 63.8);
      ctx4.bezierCurveTo(91.4, 64.1, 91.3, 64.3, 91.2, 64.7);
      ctx4.bezierCurveTo(90.1, 61.2, 92.8, 56.6, 96.4, 55.7);
      ctx4.bezierCurveTo(96.2, 56.1, 96.0, 56.5, 95.9, 56.9);
      ctx4.bezierCurveTo(96.0, 57.0, 96.1, 57.2, 96.2, 57.2);
      ctx4.bezierCurveTo(98.8, 56.7, 101.5, 56.4, 104.1, 55.6);
      ctx4.bezierCurveTo(104.8, 55.4, 105.3, 55.0, 106.1, 55.3);
      ctx4.bezierCurveTo(107.1, 55.7, 108.1, 55.8, 109.1, 56.0);
      ctx4.bezierCurveTo(109.2, 55.9, 109.4, 55.8, 109.5, 55.6);
      ctx4.bezierCurveTo(108.8, 54.7, 108.0, 53.7, 107.3, 52.7);
      ctx4.bezierCurveTo(107.1, 52.3, 107.0, 51.8, 106.9, 51.4);
      ctx4.bezierCurveTo(107.4, 51.4, 108.1, 51.1, 108.5, 51.3);
      ctx4.bezierCurveTo(109.1, 51.7, 109.6, 52.4, 110.2, 52.8);
      ctx4.bezierCurveTo(111.0, 53.4, 111.8, 53.9, 112.7, 54.3);
      ctx4.bezierCurveTo(114.0, 54.8, 114.2, 55.6, 113.2, 56.5);
      ctx4.bezierCurveTo(111.2, 58.6, 111.1, 59.8, 113.0, 62.1);
      ctx4.bezierCurveTo(113.9, 63.3, 113.9, 65.2, 113.0, 66.8);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(102.5, 45.5);
      ctx4.bezierCurveTo(102.0, 45.4, 101.6, 45.4, 101.1, 45.3);
      ctx4.bezierCurveTo(101.1, 45.9, 101.1, 46.4, 101.1, 46.6);
      ctx4.bezierCurveTo(97.4, 47.5, 93.9, 48.4, 90.3, 49.2);
      ctx4.bezierCurveTo(90.2, 48.5, 89.8, 47.6, 91.2, 47.7);
      ctx4.bezierCurveTo(91.6, 47.7, 92.0, 47.2, 92.3, 46.8);
      ctx4.bezierCurveTo(93.2, 45.4, 94.4, 44.7, 96.1, 44.6);
      ctx4.bezierCurveTo(97.3, 44.5, 98.6, 44.2, 99.8, 43.9);
      ctx4.bezierCurveTo(101.1, 43.6, 101.9, 44.2, 102.5, 45.5);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(97.4, 66.3);
      ctx4.bezierCurveTo(100.8, 66.3, 104.3, 66.3, 107.7, 66.3);
      ctx4.bezierCurveTo(106.3, 67.8, 99.9, 67.8, 97.4, 66.3);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(87.8, 65.9);
      ctx4.bezierCurveTo(88.7, 65.9, 89.5, 65.8, 90.4, 65.9);
      ctx4.bezierCurveTo(90.8, 66.0, 91.3, 66.3, 91.5, 66.7);
      ctx4.bezierCurveTo(92.2, 68.5, 92.9, 70.4, 93.4, 72.4);
      ctx4.bezierCurveTo(92.6, 71.1, 91.7, 69.8, 91.3, 68.4);
      ctx4.bezierCurveTo(90.9, 67.1, 90.5, 66.6, 89.2, 66.8);
      ctx4.bezierCurveTo(88.7, 66.9, 88.2, 66.5, 87.7, 66.4);
      ctx4.bezierCurveTo(87.7, 66.2, 87.8, 66.0, 87.8, 65.9);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(138.6, 152.4);
      ctx4.bezierCurveTo(138.5, 154.0, 136.4, 155.8, 135.0, 155.9);
      ctx4.bezierCurveTo(134.0, 156.0, 131.7, 154.3, 131.6, 153.2);
      ctx4.bezierCurveTo(131.6, 152.8, 132.0, 151.9, 132.3, 151.9);
      ctx4.bezierCurveTo(134.1, 151.6, 135.9, 151.5, 137.7, 151.5);
      ctx4.bezierCurveTo(138.1, 151.5, 138.5, 152.2, 138.6, 152.4);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(135.1, 158.4);
      ctx4.bezierCurveTo(134.5, 158.5, 133.9, 158.5, 133.2, 158.6);
      ctx4.bezierCurveTo(133.9, 159.1, 134.6, 159.6, 135.2, 160.0);
      ctx4.bezierCurveTo(134.9, 160.2, 134.6, 160.4, 134.3, 160.6);
      ctx4.bezierCurveTo(134.6, 160.9, 134.8, 161.3, 135.2, 161.8);
      ctx4.bezierCurveTo(134.2, 161.8, 133.6, 161.8, 132.8, 161.8);
      ctx4.bezierCurveTo(133.5, 160.6, 133.5, 160.6, 131.9, 157.9);
      ctx4.bezierCurveTo(131.6, 158.5, 131.5, 159.0, 131.2, 159.4);
      ctx4.bezierCurveTo(130.8, 159.8, 130.0, 160.5, 129.8, 160.4);
      ctx4.bezierCurveTo(129.0, 159.9, 128.2, 159.3, 127.8, 158.5);
      ctx4.bezierCurveTo(127.7, 158.1, 128.4, 157.0, 129.0, 156.7);
      ctx4.bezierCurveTo(131.0, 155.3, 131.1, 155.4, 132.7, 157.1);
      ctx4.bezierCurveTo(132.9, 157.4, 133.4, 157.5, 133.8, 157.6);
      ctx4.bezierCurveTo(134.3, 157.7, 134.7, 157.8, 135.2, 157.8);
      ctx4.bezierCurveTo(135.2, 158.0, 135.1, 158.2, 135.1, 158.4);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(139.7, 150.8);
      ctx4.bezierCurveTo(140.5, 152.7, 141.4, 153.5, 142.9, 152.8);
      ctx4.bezierCurveTo(143.2, 153.5, 143.5, 154.2, 143.9, 155.1);
      ctx4.bezierCurveTo(143.2, 154.9, 142.8, 154.8, 142.5, 154.7);
      ctx4.bezierCurveTo(141.8, 155.8, 141.2, 156.8, 140.5, 157.9);
      ctx4.bezierCurveTo(141.1, 158.0, 141.7, 158.1, 142.3, 158.2);
      ctx4.bezierCurveTo(142.4, 158.4, 142.4, 158.6, 142.5, 158.7);
      ctx4.bezierCurveTo(141.8, 159.2, 141.0, 160.2, 140.3, 160.1);
      ctx4.bezierCurveTo(139.6, 160.0, 138.9, 159.0, 138.2, 158.4);
      ctx4.bezierCurveTo(139.1, 157.7, 139.9, 157.4, 140.3, 156.7);
      ctx4.bezierCurveTo(140.6, 156.1, 140.4, 155.3, 140.5, 154.5);
      ctx4.bezierCurveTo(140.2, 154.5, 139.7, 154.5, 139.1, 154.5);
      ctx4.bezierCurveTo(139.6, 157.3, 139.6, 157.3, 138.1, 157.1);
      ctx4.bezierCurveTo(138.6, 155.2, 139.1, 153.3, 139.7, 150.8);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(142.9, 131.1);
      ctx4.bezierCurveTo(143.9, 131.3, 144.9, 131.5, 146.3, 131.9);
      ctx4.bezierCurveTo(145.5, 132.4, 144.9, 132.7, 144.2, 133.1);
      ctx4.bezierCurveTo(143.8, 132.4, 143.3, 131.7, 142.9, 131.0);
      ctx4.bezierCurveTo(142.9, 131.0, 142.9, 131.1, 142.9, 131.1);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(75.5, 124.9);
      ctx4.bezierCurveTo(76.2, 125.3, 76.8, 125.8, 77.4, 126.2);
      ctx4.bezierCurveTo(77.3, 126.3, 77.2, 126.5, 77.1, 126.7);
      ctx4.bezierCurveTo(76.4, 126.3, 75.8, 125.9, 75.1, 125.6);
      ctx4.bezierCurveTo(75.3, 125.4, 75.4, 125.1, 75.5, 124.9);
      ctx4.closePath();
      //ctx4.fill();

      // layer1/Group/Path
      ctx4.beginPath();
      ctx4.moveTo(120.9, 104.6);
      ctx4.bezierCurveTo(119.8, 104.6, 118.7, 104.5, 117.6, 104.5);
      ctx4.bezierCurveTo(117.6, 104.2, 117.6, 104.0, 117.6, 103.7);
      ctx4.bezierCurveTo(118.7, 103.8, 119.8, 103.9, 120.9, 104.0);
      ctx4.bezierCurveTo(120.9, 104.2, 120.9, 104.4, 120.9, 104.6);
      ctx4.closePath();
      //ctx4.fill();
      ctx4.restore();
      ctx4.restore();
    }
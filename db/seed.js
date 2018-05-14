var db = require('../models');

db.Item.remove({}, function(err, res) {
  if (err) {
    console.log('Error removing Items', err);
    return;
  }
  console.log('Removed all Items');

  db.Item.create([{
		date: Date.parse('May 9, 2018 17:13:11'),
		title: 'Optimus Prime',
		description: 'Masterpiece',
		condition: 'New',
		price: 150,
		zip: 80110,
		email: 'jason@jasonspiller.com',
		sold: false,
		image: 'http://www.toyarena.com/images/653569776314.JPG'
  }, {
		date: Date.parse('May 8, 2018 07:13:21'),
		title: 'He-Man',
		description: 'A direct descendent of the legendary King Grayskull, Prince Adam of Eternia was chosen to protect his ancestor’s Power Sword from evil. At first he used a techno vest with a built-in force field to fight evil, but Adam has since learned to combine both halves of the Power Sword, using it to channel the energy of the Elders and become He-Man, the most powerful man in the universe! He guards the safety of all Eternia along side the heroic Masters of the Universe',
		condition: 'New',
		price: 100,
		zip: 87120,
		email: 'jason@thetargetlab.com',
		sold: false,
		image: 'http://www.he-man-figuren.de/Bilder/he-man-motuc-figur.jpg'
  }, {
		date: Date.parse('May 7, 2018 23:59:59'),
		title: 'Megatron',
		description: 'Henkei',
		condition: 'Used',
		price: 50,
		zip: 80246,
		email: 'jasonspiller@gmail.com',
		sold: false,
		image: 'http://i.imgur.com/Qv5bT.jpg'
  }, {
		condition: 'used',
		date: Date.now,
		description: 'This is the largest G.I. Joe toy ever made. It is super rare especially complete.',
		image: 'http://ardiafm.com/wp-content/uploads/fs/fs-large-lot-vintage-gi-joe-vehicles-access-uss-flagg-headquarters-more.jpg',
		price: 1000,
		sold:	false,
		email: 'slick@openyourtoys.com',
		title: 'G.I. Joe USS Flagg',
		zip: 80313
	}

], function(err, items) {
    if (err) {
      console.log('Error creating Items', err);
      return;
    }
    console.log('Created', items.length, 'Items');
    return;
  });
});

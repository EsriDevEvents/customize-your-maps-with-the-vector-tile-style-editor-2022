var VectorTile = require('@mapbox/vector-tile').VectorTile;
var Protobuf = require('pbf');

const decodePbf = url => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.arrayBuffer())
			.then((data) => {
				// console.log(data)
			// var tile = new VectorTile(new Protobuf(data));


			// Contains a map of all layers
			// tile.layers;
			resolve(new VectorTile(new Protobuf(data)));
			// console.log("tile.layers=",tile.layers)
			});
	});
}

exports.decodePbf = decodePbf;

if (figma.currentPage.selection.length > 0) {
	const selection = figma.currentPage.selection[0];
	selection
		.exportAsync({
			format: 'PNG',
			constraint: { type: 'SCALE', value: 2 }
		})
		.then(imageBuffer => {
			figma.showUI(__html__, { width: selection.width, height: selection.height });
			figma.ui.postMessage({
				image: imageBuffer,
				width: selection.width,
				height: selection.height
			});
		});
} else figma.closePlugin('Please select a layer.');

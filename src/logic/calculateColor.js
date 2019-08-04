function calculateColor(value) {
	let color;
	switch(value){
		case 2:
			color = '#eee4da'
			break;
		case 4:
			color = '#ede0c8'
			break;
		case 8:
			color = '#f2b179'
			break;
		case 16:
			color = '#f59663'			
			break;
		case 32:
			color = '#f67c5f'
			break;
		case 64:
			color = '#f65e3b'
			break;
		case 128:
			color = '#edcf72'
			break;
		case 256:
			color = '#edcc61'
			break;
		case 512:
			color = '#ecc851'
			break;
		case 1024:
			color = '#edc53f'
			break;
		case 2048:
			color = '#edc22e'
			break;
		case 4096:
			color = '#2285d0'
			break;
		case 8192:
			color = '#000000'
			break;
	}
	return color;
}

export default calculateColor;
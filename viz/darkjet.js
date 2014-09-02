// TODO: Put all methods into appropriate classes (e.g., colorbar, dataplot), 
// and move `data' operations to the ElevationData.js class.

// Create an equidistant 1D grid in [a,b] on N points.
function linspace(a,b,N) {
    var d = (b-a)/(N-1);
    var x = [];
    
    for (var i=0; i<N; i++) {
        x[i] = a + d*i;
    }    
    
    return x;
}

// Return 'jet' colour scheme on N points
function jet(N) {
    var cmap=[];
    if (N==1) {
        cmap[0] = [0,0,0.5*255];
        return cmap;
    }
    
    var x = linspace(0,1,N);
    var r=0.0;
    var g=0.0;
    var b=0.0;
    
    for(var i=0;i<N;i++) {
        r = (x[i] >= 3/8 && x[i] < 5/8) * (4 * x[i] - 3/2) + (x[i] >= 5/8 && x[i] < 7/8) + (x[i] >= 7/8)* (-4 * x[i] + 9/2);
        g = (x[i] >= 1/8 && x[i] < 3/8)*(4 * x[i] - 1/2) + (x[i] >= 3/8 && x[i] < 5/8) + (x[i] >= 5/8 && x[i] < 7/8)*(-4 * x[i] + 7/2); 
        b = (x[i] < 1/8)*(4 * x[i] + 1/2) + (x[i] >= 1/8 && x[i] < 3/8) + (x[i] >= 3/8 & x[i] < 5/8)*(-4 * x[i] + 5/2);
        
        cmap[i] = [r*255,g*255,b*255];
    }
    
    return cmap;
}

function darkjet(N) {
    var c = jet(N);
    var z = linspace(-10,10,N);
  
    for (var i=0;i<N;i++) {
        for (var j=0;j<3;j++) {  
            c[i][j] = c[i][j] * (1-0.5/cosh(z[i])); 
        }
    }
    
    return c;
}

function colorbar(ctx, colormap) {

    for(var i = 0; i <= 255; i++) {
        ctx.beginPath();
        
        var color = 'rgb('+ Math.round(colormap[i][0]) +', ' + Math.round(colormap[i][1]) + ', ' + Math.round(colormap[i][2]) + ')';
        
        ctx.fillStyle = color;
        
        ctx.fillRect(i * 2, 0, 2, 50);
    }
}

function cosh(x) {
    return (Math.exp(x) + Math.exp(-x)) / 2;
}

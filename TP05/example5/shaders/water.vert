attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform sampler2D uSampler4;

uniform float timeFactor; 

varying vec2 vTextureCoord;

void main() {
	
	vec2 timeTexCoords = vec2(aTextureCoord.s+timeFactor*0.01, aTextureCoord.t+timeFactor*0.01) ;

	vec3 offset=aVertexNormal*0.05*texture2D(uSampler4, timeTexCoords).g;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);	

	vTextureCoord = aTextureCoord;

}


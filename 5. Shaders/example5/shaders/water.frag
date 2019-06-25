#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler3;
uniform sampler2D uSampler4;

uniform float timeFactor; 

void main() {	

	vec2 timeTexCoords = vec2(vTextureCoord.s+timeFactor*0.02, vTextureCoord.t+timeFactor*0.02) ;

	vec4 color = texture2D(uSampler3, timeTexCoords);

	gl_FragColor = color;
}
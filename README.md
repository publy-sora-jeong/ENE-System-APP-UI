<h1>ENE System APP UI</h1>
에너지설비관련 분야의 기업인 이앤이시스템의 응축수량계산, Airloss계산등 기업의 제품을 소개하고,

설치시뮬레이션을 통해 사용자에게 솔루션을 제공하는 APP입니다.

* * *



<h2>폴더구조</h2>

- html을 제외한 font, image, css, javascript(plugin)은 static폴더에 있습니다. 
- figma에서 UI화면 확인가능 
- [ENE System UI Figma link ][https://www.figma.com/file/i6GRJw02jD4l2RGhhx6w0n/ENS-Mobile?node-id=0%3A1 ]  

<pre>
	ene-system 
		html files 

		ㄴ static
			ㄴ image //작업에 필요한 이미지 리소스와 아이콘, 썸네일등 
			ㄴ css //reset, mixin, styls.css 
			ㄴ js		
				ㄴ front.js //ens 메뉴, body class추가 에 관련된 스크립트 
				ㄴ tui-date-picker.min.js // date select 
				ㄴ jquery 
			ㄴ font //ens에서는 나눔스퀘어, roboto, 본고딕을 사용합니다. 		
</pre>




<h2>사용</h2>

- VSCode
- Adobe XD(Figma)
- HTML, CSS(SASS), JS




<h2>기타작업예정</h2>

- 폰트 경량화 (기본적으로 woff파일로 대체했지만 본고딕의 경우는 조금 더 가벼워야 할듯)
- image compression
- 스타일정리

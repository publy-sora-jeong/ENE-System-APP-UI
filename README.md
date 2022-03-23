<h1>ENE System APP UI</h1>
에너지설비관련 분야의 기업인 이앤이시스템의 응축수량계산, Airloss계산등 기업의 제품을 소개하고,

설치시뮬레이션을 통해 사용자에게 솔루션을 제공하는 APP입니다.

* * *




- figma에서 UI화면 확인가능 
- [ENE System UI Figma link ][https://www.figma.com/file/i6GRJw02jD4l2RGhhx6w0n/ENS-Mobile?node-id=0%3A1 ]  


![ens_xd](https://user-images.githubusercontent.com/54253060/159147373-ca050601-1c8a-496d-89dc-9d223315ef31.png)



디자인가이드는 Adobe XD로 전달받아 작업에 진행하였고, figma 에서 화면UI이미지와 파일명을 함께 이미지와 함께 기록하고있습니다. 





<h2>폴더구조</h2>


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







<h2>구현중점</h2>



ENE System APP의 최소 가로사이즈는 360px입니다. 



사이즈가 늘어나도 틀어짐 없이 어느 환경에서도 볼 수 있도록, 특정 부분은 배수 이미지를 사용하여 깔끔하게 보일 수 있도록 고려하여 작업하였습니다. 




![ens_mobile](https://user-images.githubusercontent.com/54253060/159147427-a1069357-49d8-4dec-8378-403e0768fa88.png)



* iPad Mini(왼쪽), iPhone 12Pro (오른쪽)






반복되는 이미지는 화면이 크고 작아짐에 따라 이미지의 끊기지 않도록 반복이미지로 설정하여 작업합니다. 



![ens_responsive](https://user-images.githubusercontent.com/54253060/159147440-88abb277-df65-4fc6-82f8-dc2ae7b82528.gif)







<h2>사용툴 </h2>



- VSCODE, Adobe XD, Figma 
- HTML, CSS(SASS), JS






<h2>기타작업예정</h2>



- 폰트 경량화 (기본적으로 woff파일로 대체했지만 본고딕의 경우는 조금 더 가벼워야 할듯)
- image compression
- 스타일정리

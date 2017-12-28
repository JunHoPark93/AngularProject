System.config({
	
	// systemJS에서 사용하는 트랜스 파일러는 TypeScript를 사용한다.
	transpiler : 'typescript',

	typescriptOptions : {
		emitDecoratorMetadata : true,		// 메타 데이터와 데코레이터를 사용
		target : 'ES5',						// 최종 결과물은 ES5로 변환 
		module : 'commonjs'					// 최종 결과물 모듈 구성은 CommonJS 모듈 형식을 사용
	},

	map : {
		'@angular' : 'node_modules/@angular',	
		'rxjs' : 'node_modules/rxjs'
	},

	packages : {
		'rxjs' : { main : 'Rx' },
		'@angular/core' : { main : 'bundles/core.umd.min.js' },
		'@angular/common' : { main : 'bundles/common.umd.min.js' },
		'@angular/compiler' : { main : 'bundles/compiler.umd.min.js' },
        '@angular/forms' : { main : 'bundles/forms.umd.min.js' },
        '@angular/platform-browser' : { main : 'bundles/platform-browser.umd.min.js' },
		'@angular/platform-browser-dynamic' : { main : 'bundles/platform-browser-dynamic.umd.min.js' },
        '@angular/router' : { main : 'bundles/router.umd.min.js' },

		'app' : { main : 'main', defaultExtension : 'ts' }	// 애플리케이션 코드는 app 폴더에 위치, 시작점은 main.ts 파일을 지정
	}
});